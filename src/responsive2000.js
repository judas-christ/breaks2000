(function(window, document) {
	'use strict';

	var qsa = document.querySelectorAll;

	var els;
	var getElements = function(/* parent */) {
		//parent = parent || document;
		els = qsa.call(document, '[data-breaks]');
	};
	var calculateWidths = function(/* parent */) {
		var el,
			classes,
			elWidth,
			breakPoints,
			breakPoint;
		for (var i = 0, l = els.length; i < l; i++) {
			el = els[i];
			classes = el.className;
			elWidth = el.offsetWidth;
			breakPoints = el.getAttribute('data-breaks').split(',');
			classes = classes.replace(/gt-\d+/g, '');
			for (var j = 0, k = breakPoints.length; j < k; j++) {
				breakPoint = breakPoints[j];
				if (MOBILE_FIRST) {
					if (elWidth >= +breakPoint) {
						classes += ' gt-' + breakPoint;
					} else {
						//no need to check larger sizes if smaller. remove if using mobile last.
						break;
					}
				} else {
					if (elWidth <= +breakPoint) {
						classes += ' lt-' + breakPoint;
					}
				}
			}
			el.className = classes;
		}
	};
	var onResize = function() {
		//console.time('onResize');
		if (!els) getElements();
		calculateWidths();
		//console.timeEnd('onResize');
	};
	onResize();
	if(IE8_SUPPORT) {
		if(window.addEventListener) {
			window.addEventListener('resize', onResize);
		} else {
			window.attachEvent('onresize', onResize);
		}
	} else {
		window.addEventListener('resize', onResize);		
	}
})(this, document);