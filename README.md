# Breaks 2000

A simple responsive elements script. Inspired by https://github.com/kumailht/responsive-elements but simpler and without any dependencies.

## Usage

Add breakpoints to responsive elements

    <div data-breaks="320,480,768,1280">...</div>

Add css styles for the sizes

    .\>320 {
    	background-color: peachpuff;
    }

    .\>768 {
    	background-color: aliceblue;
    }

Add script to page

    <script src="/path/to/breaks2000.min.js"></script>

Call to initialization function on page load

    breaks2000.init();

When elements are added to or removed from the DOM, call

    breaks2000.update();

## Browser support

Modern browsers and optionally IE8.

## Change Log

### 2.0.0

* Class names changed from gt-*/lt-* to >*/<*. This is a breaking change from 1.0.0

## License

Released under MIT License.
