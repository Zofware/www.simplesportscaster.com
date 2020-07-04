---
layout: javascript
---

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
if (buildNumber == null || buildNumber == '') {
    buildNumber = {{ site.data.settings.basic_settings.current_build }};
}

// https://www.sitepoint.com/jquery-document-ready-plain-javascript/
document.addEventListener("DOMContentLoaded", function () {
    var elements = document.getElementsByClassName('build-dependent-content');
    for (var i = 0; i < elements.length; i++) {

        if ((!("minBuild" in elements[i].dataset) || (buildNumber >= elements[i].dataset.minBuild)) &&
            (!("maxBuild" in elements[i].dataset) || (buildNumber <= elements[i].dataset.maxBuild))) {
                elements[i].style.display = 'block';
        }
    }
});
