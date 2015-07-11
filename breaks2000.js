/*! breaks2000 2.1.0 */
!function(window, document) {
    "use strict";
    var exports = {}, onResize = function() {
        for (var element, classes, elementWidth, breakPoints, breakPoint, elements = document.querySelectorAll("[data-breaks]"), i = 0, l = elements.length; l > i; i++) {
            element = elements[i], classes = element.className, elementWidth = element.offsetWidth, 
            breakPoints = element.getAttribute("data-breaks").split(","), classes = classes.replace(/\s*[<>]\d+/g, "");
            for (var j = 0, k = breakPoints.length; k > j && (breakPoint = breakPoints[j], elementWidth >= +breakPoint); j++) classes += " >" + breakPoint;
            element.className = classes;
        }
    };
    exports.init = function() {
        onResize(), window.addEventListener ? window.addEventListener("resize", onResize, !1) : window.attachEvent("onresize", onResize);
    }, exports.uninit = function() {
        window.removeEventListener ? window.removeEventListener("resize", onResize, !1) : window.detachEvent("onresize", onResize);
        for (var element, elements = document.querySelectorAll("[data-breaks]"), i = 0, l = elements.length; l > i; i++) element = elements[i], 
        element.className = element.className.replace(/\s*[<>]\d+/g, "");
    }, exports.update = onResize, window.breaks2000 = exports;
}(this, document);