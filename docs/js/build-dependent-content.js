---
layout: javascript
---

// how to inject liquid tags into javascript:
// https://stackoverflow.com/questions/39853245/reach-jekyll-variables-with-javascript-and-pass-it-throught-dom-manipulation

// borrowed from https://jennamolby.com/how-to-display-dynamic-content-on-a-page-using-url-parameters/

// Parse the URL parameter
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Give the parameter a variable name
var buildNumber = getParameterByName('build');
var hasExplicitBuildNumber = true;
if (buildNumber == null || buildNumber == '') {
    buildNumber = {{ site.data.settings.basic_settings.current_build }};
    hasExplicitBuildNumber = false;
}

jQuery(document).ready(function () {

    // update visibility of content based on the current build number
    var elements = document.getElementsByClassName('build-dependent-content');
    for (var i = 0; i < elements.length; i++) {

        if ((!("minBuild" in elements[i].dataset) || (buildNumber >= elements[i].dataset.minBuild)) &&
            (!("maxBuild" in elements[i].dataset) || (buildNumber <= elements[i].dataset.maxBuild))) {
                elements[i].style.display = 'block';
        }
    }

    // update outgoing links to include the build number
    // https://stackoverflow.com/questions/23035045/need-to-make-a-url-query-string-persist-across-a-link
    if (hasExplicitBuildNumber) {
        $('a[href]').each(function () {
            var elem = $(this);
            var href = elem.attr('href');
            if (href.charAt(0) == "/" || href.startsWith("{{ site.url }}")) {
                elem.attr('href', href + (href.indexOf('?') != -1 ? '&' : '?') + 'build=' + buildNumber);
            }
        });
    }
});
