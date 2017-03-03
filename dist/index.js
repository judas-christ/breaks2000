/*! breaks2000 2.1.2 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Resize handler. Calculate widths and add classes.
 */
function update() {
  console.time('onResize');

  var elements = document.querySelectorAll('[data-breaks]'),
    element,
    classes,
    elementWidth,
    breakPoints,
    breakPoint;

  for (var i = 0, l = elements.length; i < l; i++) {
    element = elements[i];
    classes = element.className;
    elementWidth = element.offsetWidth;
    breakPoints = element.getAttribute('data-breaks').split(',');
    classes = classes.replace(/\s*[<>]\d+/g, '');
    for (var j = 0, k = breakPoints.length; j < k; j++) {
      breakPoint = breakPoints[j];
      {
        if (elementWidth >= +breakPoint) {
          classes += ' >' + breakPoint;
        } else {
          break;
        }
      }
    }
    element.className = classes;
  }

  console.timeEnd('onResize');
}

/**
 * Initialize responsive elements. Called once on page load.
 */
function init() {
  update();
  {
    window.addEventListener('resize', update, false);
  }
}

/**
 * Uninitialize responsive elements.
 */
function uninit() {
  {
    window.removeEventListener('resize', update, false);
  }

  var elements = document.querySelectorAll('[data-breaks]'),
    element;

  for (var i = 0, l = elements.length; i < l; i++) {
    element = elements[i];
    element.className = element.className.replace(/\s*[<>]\d+/g, '');
  }
}

exports.init = init;
exports.uninit = uninit;
exports.update = update;
