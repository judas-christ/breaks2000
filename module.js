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
      if (MOBILE_FIRST) {
        if (elementWidth >= +breakPoint) {
          classes += ' >' + breakPoint;
        } else {
          break;
        }
      } else {
        if (elementWidth <= +breakPoint) {
          classes += ' <' + breakPoint;
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
  if (IE8_SUPPORT) {
    if (window.addEventListener) {
      window.addEventListener('resize', update, false);
    } else {
      window.attachEvent('onresize', update);
    }
  } else {
    window.addEventListener('resize', update, false);
  }
}

/**
 * Uninitialize responsive elements.
 */
function uninit() {
  if (IE8_SUPPORT) {
    if (window.removeEventListener) {
      window.removeEventListener('resize', update, false);
    } else {
      window.detachEvent('onresize', update);
    }
  } else {
    window.removeEventListener('resize', update, false);
  }

  var elements = document.querySelectorAll('[data-breaks]'),
    element;

  for (var i = 0, l = elements.length; i < l; i++) {
    element = elements[i];
    element.className = element.className.replace(/\s*[<>]\d+/g, '');
  }
}

export { init, uninit, update };
