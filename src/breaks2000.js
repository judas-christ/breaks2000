(function(window, document) {
	'use strict';

	var exports,
		elements;

	/**
	 * Update elements array. Should be called when elements have been added or removed from the DOM.
	 */
	var getElements = function(/* parent */) {
		//parent = parent || document;
		elements = document.querySelectorAll('[data-breaks]');
	};

	/**
	 * Calculate widths and add classes
	 */
	var calculateWidths = function(/* parent */) {
		
		var element,
			classes,
			elementWidth,
			breakPoints,
			breakPoint;

		for (var i = 0, l = elements.length; i < l; i++) {
			element = elements[i];
			classes = element.className;
			elementWidth = element.offsetWidth;
			breakPoints = element.getAttribute('data-breaks').split(',');
			classes = classes.replace(/\s*gt-\d+/g, '');
			for (var j = 0, k = breakPoints.length; j < k; j++) {
				breakPoint = breakPoints[j];
				if (MOBILE_FIRST) {
					if (elementWidth >= +breakPoint) {
						classes += ' gt-' + breakPoint;
					} else {
						break;
					}
				} else {
					if (elementWidth <= +breakPoint) {
						classes += ' lt-' + breakPoint;
					}
				}
			}
			element.className = classes;
		}
	};

	/**
	 * Resize handler
	 */
	var onResize = function() {
		console.time('onResize');
		if (!elements) getElements();
		calculateWidths();
		console.timeEnd('onResize');
	};
	
	window.breaks2000 = {
		/**
		 * Initialize responsive elements. Called once on page load.
		 */
		init: function() {
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
		},
		/**
		 * Update all elements and classes. Call when adding or removing elements in the DOM.
		 */
		update: function() {
			onResize();
		}
	};

})(this, document);
