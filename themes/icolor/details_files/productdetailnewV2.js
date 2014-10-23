///#source 1 1 /Scripts/slide/modernizr.custom.49511.js
/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-cssanimations-csstransitions-mq-teststyles-testprop-testallprops-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function y(a){i.cssText=a}function z(a,b){return y(prefixes.join(a+";")+(b||""))}function A(a,b){return typeof a===b}function B(a,b){return!!~(""+a).indexOf(b)}function C(a,b){for(var d in a){var e=a[d];if(!B(e,"-")&&i[e]!==c)return b=="pfx"?e:!0}return!1}function D(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:A(f,"function")?f.bind(d||b):f}return!1}function E(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+m.join(d+" ")+d).split(" ");return A(b,"string")||A(b,"undefined")?C(e,b):(e=(a+" "+n.join(d+" ")+d).split(" "),D(e,b,c))}var d="2.6.2",e={},f=b.documentElement,g="modernizr",h=b.createElement(g),i=h.style,j,k={}.toString,l="Webkit Moz O ms",m=l.split(" "),n=l.toLowerCase().split(" "),o={},p={},q={},r=[],s=r.slice,t,u=function(a,c,d,e){var h,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:g+(d+1),l.appendChild(j);return h=["&#173;",'<style id="s',g,'">',a,"</style>"].join(""),l.id=g,(m?l:n).innerHTML+=h,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=f.style.overflow,f.style.overflow="hidden",f.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),f.style.overflow=k),!!i},v=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return u("@media "+b+" { #"+g+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},w={}.hasOwnProperty,x;!A(w,"undefined")&&!A(w.call,"undefined")?x=function(a,b){return w.call(a,b)}:x=function(a,b){return b in a&&A(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=s.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(s.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(s.call(arguments)))};return e}),o.cssanimations=function(){return E("animationName")},o.csstransitions=function(){return E("transition")};for(var F in o)x(o,F)&&(t=F.toLowerCase(),e[t]=o[F](),r.push((e[t]?"":"no-")+t));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)x(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof enableClasses!="undefined"&&enableClasses&&(f.className+=" "+(b?"":"no-")+a),e[a]=b}return e},y(""),h=j=null,e._version=d,e._domPrefixes=n,e._cssomPrefixes=m,e.mq=v,e.testProp=function(a){return C([a])},e.testAllProps=E,e.testStyles=u,e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
///#source 1 1 /Scripts/slide/jquery.touchwipe.min.js
/**
 * jQuery Plugin to obtain touch gestures from iPhone, iPod Touch and iPad, should also work with Android mobile phones (not tested yet!)
 * Common usage: wipe images (left and right to show the previous or next image)
 * 
 * @author Andreas Waltl, netCU Internetagentur (http://www.netcu.de)
 * @version 1.1.1 (9th December 2010) - fix bug (older IE's had problems)
 * @version 1.1 (1st September 2010) - support wipe up and wipe down
 * @version 1.0 (15th July 2010)
 */
(function($){$.fn.touchwipe=function(settings){var config={min_move_x:20,min_move_y:20,wipeLeft:function(){},wipeRight:function(){},wipeUp:function(){},wipeDown:function(){},preventDefaultEvents:true};if(settings)$.extend(config,settings);this.each(function(){var startX;var startY;var isMoving=false;function cancelTouch(){this.removeEventListener('touchmove',onTouchMove);startX=null;isMoving=false}function onTouchMove(e){if(config.preventDefaultEvents){e.preventDefault()}if(isMoving){var x=e.touches[0].pageX;var y=e.touches[0].pageY;var dx=startX-x;var dy=startY-y;if(Math.abs(dx)>=config.min_move_x){cancelTouch();if(dx>0){config.wipeLeft()}else{config.wipeRight()}}else if(Math.abs(dy)>=config.min_move_y){cancelTouch();if(dy>0){config.wipeDown()}else{config.wipeUp()}}}}function onTouchStart(e){if(e.touches.length==1){startX=e.touches[0].pageX;startY=e.touches[0].pageY;isMoving=true;this.addEventListener('touchmove',onTouchMove,false)}}if('ontouchstart'in document.documentElement){this.addEventListener('touchstart',onTouchStart,false)}});return this}})(jQuery);
///#source 1 1 /Scripts/crawlableAjax/hashchange.js
/*!
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

// Script: jQuery hashchange event
//
// *Version: 1.3, Last updated: 7/21/2010*
// 
// Project Home - http://benalman.com/projects/jquery-hashchange-plugin/
// GitHub       - http://github.com/cowboy/jquery-hashchange/
// Source       - http://github.com/cowboy/jquery-hashchange/raw/master/jquery.ba-hashchange.js
// (Minified)   - http://github.com/cowboy/jquery-hashchange/raw/master/jquery.ba-hashchange.min.js (0.8kb gzipped)
// 
// About: License
// 
// Copyright (c) 2010 "Cowboy" Ben Alman,
// Dual licensed under the MIT and GPL licenses.
// http://benalman.com/about/license/
// 
// About: Examples
// 
// These working examples, complete with fully commented code, illustrate a few
// ways in which this plugin can be used.
// 
// hashchange event - http://benalman.com/code/projects/jquery-hashchange/examples/hashchange/
// document.domain - http://benalman.com/code/projects/jquery-hashchange/examples/document_domain/
// 
// About: Support and Testing
// 
// Information about what version or versions of jQuery this plugin has been
// tested with, what browsers it has been tested in, and where the unit tests
// reside (so you can test it yourself).
// 
// jQuery Versions - 1.2.6, 1.3.2, 1.4.1, 1.4.2
// Browsers Tested - Internet Explorer 6-8, Firefox 2-4, Chrome 5-6, Safari 3.2-5,
//                   Opera 9.6-10.60, iPhone 3.1, Android 1.6-2.2, BlackBerry 4.6-5.
// Unit Tests      - http://benalman.com/code/projects/jquery-hashchange/unit/
// 
// About: Known issues
// 
// While this jQuery hashchange event implementation is quite stable and
// robust, there are a few unfortunate browser bugs surrounding expected
// hashchange event-based behaviors, independent of any JavaScript
// window.onhashchange abstraction. See the following examples for more
// information:
// 
// Chrome: Back Button - http://benalman.com/code/projects/jquery-hashchange/examples/bug-chrome-back-button/
// Firefox: Remote XMLHttpRequest - http://benalman.com/code/projects/jquery-hashchange/examples/bug-firefox-remote-xhr/
// WebKit: Back Button in an Iframe - http://benalman.com/code/projects/jquery-hashchange/examples/bug-webkit-hash-iframe/
// Safari: Back Button from a different domain - http://benalman.com/code/projects/jquery-hashchange/examples/bug-safari-back-from-diff-domain/
// 
// Also note that should a browser natively support the window.onhashchange 
// event, but not report that it does, the fallback polling loop will be used.
// 
// About: Release History
// 
// 1.3   - (7/21/2010) Reorganized IE6/7 Iframe code to make it more
//         "removable" for mobile-only development. Added IE6/7 document.title
//         support. Attempted to make Iframe as hidden as possible by using
//         techniques from http://www.paciellogroup.com/blog/?p=604. Added 
//         support for the "shortcut" format $(window).hashchange( fn ) and
//         $(window).hashchange() like jQuery provides for built-in events.
//         Renamed jQuery.hashchangeDelay to <jQuery.fn.hashchange.delay> and
//         lowered its default value to 50. Added <jQuery.fn.hashchange.domain>
//         and <jQuery.fn.hashchange.src> properties plus document-domain.html
//         file to address access denied issues when setting document.domain in
//         IE6/7.
// 1.2   - (2/11/2010) Fixed a bug where coming back to a page using this plugin
//         from a page on another domain would cause an error in Safari 4. Also,
//         IE6/7 Iframe is now inserted after the body (this actually works),
//         which prevents the page from scrolling when the event is first bound.
//         Event can also now be bound before DOM ready, but it won't be usable
//         before then in IE6/7.
// 1.1   - (1/21/2010) Incorporated document.documentMode test to fix IE8 bug
//         where browser version is incorrectly reported as 8.0, despite
//         inclusion of the X-UA-Compatible IE=EmulateIE7 meta tag.
// 1.0   - (1/9/2010) Initial Release. Broke out the jQuery BBQ event.special
//         window.onhashchange functionality into a separate plugin for users
//         who want just the basic event & back button support, without all the
//         extra awesomeness that BBQ provides. This plugin will be included as
//         part of jQuery BBQ, but also be available separately.

(function ($, window, undefined) {
    '$:nomunge'; // Used by YUI compressor.

    // Reused string.
    var str_hashchange = 'hashchange',

      // Method / object references.
      doc = document,
      fake_onhashchange,
      special = $.event.special,

      // Does the browser support window.onhashchange? Note that IE8 running in
      // IE7 compatibility mode reports true for 'onhashchange' in window, even
      // though the event isn't supported, so also test document.documentMode.
      doc_mode = doc.documentMode,
      supports_onhashchange = 'on' + str_hashchange in window && (doc_mode === undefined || doc_mode > 7);

    // Get location.hash (or what you'd expect location.hash to be) sans any
    // leading #. Thanks for making this necessary, Firefox!
    function get_fragment(url) {
        url = url || location.href;
        return '#' + url.replace(/^[^#]*#?(.*)$/, '$1');
    };

    // Method: jQuery.fn.hashchange
    // 
    // Bind a handler to the window.onhashchange event or trigger all bound
    // window.onhashchange event handlers. This behavior is consistent with
    // jQuery's built-in event handlers.
    // 
    // Usage:
    // 
    // > jQuery(window).hashchange( [ handler ] );
    // 
    // Arguments:
    // 
    //  handler - (Function) Optional handler to be bound to the hashchange
    //    event. This is a "shortcut" for the more verbose form:
    //    jQuery(window).bind( 'hashchange', handler ). If handler is omitted,
    //    all bound window.onhashchange event handlers will be triggered. This
    //    is a shortcut for the more verbose
    //    jQuery(window).trigger( 'hashchange' ). These forms are described in
    //    the <hashchange event> section.
    // 
    // Returns:
    // 
    //  (jQuery) The initial jQuery collection of elements.

    // Allow the "shortcut" format $(elem).hashchange( fn ) for binding and
    // $(elem).hashchange() for triggering, like jQuery does for built-in events.
    $.fn[str_hashchange] = function (fn) {
        return fn ? this.bind(str_hashchange, fn) : this.trigger(str_hashchange);
    };

    // Property: jQuery.fn.hashchange.delay
    // 
    // The numeric interval (in milliseconds) at which the <hashchange event>
    // polling loop executes. Defaults to 50.

    // Property: jQuery.fn.hashchange.domain
    // 
    // If you're setting document.domain in your JavaScript, and you want hash
    // history to work in IE6/7, not only must this property be set, but you must
    // also set document.domain BEFORE jQuery is loaded into the page. This
    // property is only applicable if you are supporting IE6/7 (or IE8 operating
    // in "IE7 compatibility" mode).
    // 
    // In addition, the <jQuery.fn.hashchange.src> property must be set to the
    // path of the included "document-domain.html" file, which can be renamed or
    // modified if necessary (note that the document.domain specified must be the
    // same in both your main JavaScript as well as in this file).
    // 
    // Usage:
    // 
    // jQuery.fn.hashchange.domain = document.domain;

    // Property: jQuery.fn.hashchange.src
    // 
    // If, for some reason, you need to specify an Iframe src file (for example,
    // when setting document.domain as in <jQuery.fn.hashchange.domain>), you can
    // do so using this property. Note that when using this property, history
    // won't be recorded in IE6/7 until the Iframe src file loads. This property
    // is only applicable if you are supporting IE6/7 (or IE8 operating in "IE7
    // compatibility" mode).
    // 
    // Usage:
    // 
    // jQuery.fn.hashchange.src = 'path/to/file.html';

    $.fn[str_hashchange].delay = 50;
    /*
    $.fn[ str_hashchange ].domain = null;
    $.fn[ str_hashchange ].src = null;
    */

    // Event: hashchange event
    // 
    // Fired when location.hash changes. In browsers that support it, the native
    // HTML5 window.onhashchange event is used, otherwise a polling loop is
    // initialized, running every <jQuery.fn.hashchange.delay> milliseconds to
    // see if the hash has changed. In IE6/7 (and IE8 operating in "IE7
    // compatibility" mode), a hidden Iframe is created to allow the back button
    // and hash-based history to work.
    // 
    // Usage as described in <jQuery.fn.hashchange>:
    // 
    // > // Bind an event handler.
    // > jQuery(window).hashchange( function(e) {
    // >   var hash = location.hash;
    // >   ...
    // > });
    // > 
    // > // Manually trigger the event handler.
    // > jQuery(window).hashchange();
    // 
    // A more verbose usage that allows for event namespacing:
    // 
    // > // Bind an event handler.
    // > jQuery(window).bind( 'hashchange', function(e) {
    // >   var hash = location.hash;
    // >   ...
    // > });
    // > 
    // > // Manually trigger the event handler.
    // > jQuery(window).trigger( 'hashchange' );
    // 
    // Additional Notes:
    // 
    // * The polling loop and Iframe are not created until at least one handler
    //   is actually bound to the 'hashchange' event.
    // * If you need the bound handler(s) to execute immediately, in cases where
    //   a location.hash exists on page load, via bookmark or page refresh for
    //   example, use jQuery(window).hashchange() or the more verbose 
    //   jQuery(window).trigger( 'hashchange' ).
    // * The event can be bound before DOM ready, but since it won't be usable
    //   before then in IE6/7 (due to the necessary Iframe), recommended usage is
    //   to bind it inside a DOM ready handler.

    // Override existing $.event.special.hashchange methods (allowing this plugin
    // to be defined after jQuery BBQ in BBQ's source code).
    special[str_hashchange] = $.extend(special[str_hashchange], {

        // Called only when the first 'hashchange' event is bound to window.
        setup: function () {
            // If window.onhashchange is supported natively, there's nothing to do..
            if (supports_onhashchange) { return false; }

            // Otherwise, we need to create our own. And we don't want to call this
            // until the user binds to the event, just in case they never do, since it
            // will create a polling loop and possibly even a hidden Iframe.
            $(fake_onhashchange.start);
        },

        // Called only when the last 'hashchange' event is unbound from window.
        teardown: function () {
            // If window.onhashchange is supported natively, there's nothing to do..
            if (supports_onhashchange) { return false; }

            // Otherwise, we need to stop ours (if possible).
            $(fake_onhashchange.stop);
        }

    });

    // fake_onhashchange does all the work of triggering the window.onhashchange
    // event for browsers that don't natively support it, including creating a
    // polling loop to watch for hash changes and in IE 6/7 creating a hidden
    // Iframe to enable back and forward.
    fake_onhashchange = (function () {
        var self = {},
          timeout_id,

          // Remember the initial hash so it doesn't get triggered immediately.
          last_hash = get_fragment(),

          fn_retval = function (val) { return val; },
          history_set = fn_retval,
          history_get = fn_retval;

        // Start the polling loop.
        self.start = function () {
            timeout_id || poll();
        };

        // Stop the polling loop.
        self.stop = function () {
            timeout_id && clearTimeout(timeout_id);
            timeout_id = undefined;
        };

        // This polling loop checks every $.fn.hashchange.delay milliseconds to see
        // if location.hash has changed, and triggers the 'hashchange' event on
        // window when necessary.
        function poll() {
            var hash = get_fragment(),
              history_hash = history_get(last_hash);

            if (hash !== last_hash) {
                history_set(last_hash = hash, history_hash);

                $(window).trigger(str_hashchange);

            } else if (history_hash !== last_hash) {
                location.href = location.href.replace(/#.*/, '') + history_hash;
            }

            timeout_id = setTimeout(poll, $.fn[str_hashchange].delay);
        };

        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        // vvvvvvvvvvvvvvvvvvv REMOVE IF NOT SUPPORTING IE6/7/8 vvvvvvvvvvvvvvvvvvv
        // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
        $.browser.msie && !supports_onhashchange && (function () {
            // Not only do IE6/7 need the "magical" Iframe treatment, but so does IE8
            // when running in "IE7 compatibility" mode.

            var iframe,
              iframe_src;

            // When the event is bound and polling starts in IE 6/7, create a hidden
            // Iframe for history handling.
            self.start = function () {
                if (!iframe) {
                    iframe_src = $.fn[str_hashchange].src;
                    iframe_src = iframe_src && iframe_src + get_fragment();

                    // Create hidden Iframe. Attempt to make Iframe as hidden as possible
                    // by using techniques from http://www.paciellogroup.com/blog/?p=604.
                    iframe = $('<iframe tabindex="-1" title="empty"/>').hide()

                      // When Iframe has completely loaded, initialize the history and
                      // start polling.
                      .one('load', function () {
                          iframe_src || history_set(get_fragment());
                          poll();
                      })

                      // Load Iframe src if specified, otherwise nothing.
                      .attr('src', iframe_src || 'javascript:0')

                      // Append Iframe after the end of the body to prevent unnecessary
                      // initial page scrolling (yes, this works).
                      .insertAfter('body')[0].contentWindow;

                    // Whenever `document.title` changes, update the Iframe's title to
                    // prettify the back/next history menu entries. Since IE sometimes
                    // errors with "Unspecified error" the very first time this is set
                    // (yes, very useful) wrap this with a try/catch block.
                    doc.onpropertychange = function () {
                        try {
                            if (event.propertyName === 'title') {
                                iframe.document.title = doc.title;
                            }
                        } catch (e) { }
                    };

                }
            };

            // Override the "stop" method since an IE6/7 Iframe was created. Even
            // if there are no longer any bound event handlers, the polling loop
            // is still necessary for back/next to work at all!
            self.stop = fn_retval;

            // Get history by looking at the hidden Iframe's location.hash.
            history_get = function () {
                return get_fragment(iframe.location.href);
            };

            // Set a new history item by opening and then closing the Iframe
            // document, *then* setting its location.hash. If document.domain has
            // been set, update that as well.
            history_set = function (hash, history_hash) {
                var iframe_doc = iframe.document,
                  domain = $.fn[str_hashchange].domain;

                if (hash !== history_hash) {
                    // Update Iframe with any initial `document.title` that might be set.
                    iframe_doc.title = doc.title;

                    // Opening the Iframe's document after it has been closed is what
                    // actually adds a history entry.
                    iframe_doc.open();

                    // Set document.domain for the Iframe document as well, if necessary.
                    domain && iframe_doc.write('<script>document.domain="' + domain + '"</script>');

                    iframe_doc.close();

                    // Update the Iframe's hash, for great justice.
                    iframe.location.hash = hash;
                }
            };

        })();
        // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        // ^^^^^^^^^^^^^^^^^^^ REMOVE IF NOT SUPPORTING IE6/7/8 ^^^^^^^^^^^^^^^^^^^
        // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

        return self;
    })();

})(jQuery, this);
///#source 1 1 /Scripts/jquery.lazyload.js
/*
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2013 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.9.0
 *
 */
 
(function($, window, document, undefined) {
    var $window = $(window);

    $.fn.lazyload = function(options) {
        var elements = this;
        var $container;
        var settings = {
            threshold       : 0,
            failure_limit   : 0,
            event           : "scroll",
            effect          : "show",
            container       : window,
            data_attribute  : "original",
            skip_invisible  : true,
            appear          : null,
            load            : null,
            placeholder     : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
        };

        function update() {
            var counter = 0;
      
            elements.each(function() {
                var $this = $(this);
                if (settings.skip_invisible && !$this.is(":visible")) {
                    return;
                }
                if ($.abovethetop(this, settings) ||
                    $.leftofbegin(this, settings)) {
                        /* Nothing. */
                } else if (!$.belowthefold(this, settings) &&
                    !$.rightoffold(this, settings)) {
                        $this.trigger("appear");
                        /* if we found an image we'll load, reset the counter */
                        counter = 0;
                } else {
                    if (++counter > settings.failure_limit) {
                        return false;
                    }
                }
            });

        }

        if(options) {
            /* Maintain BC for a couple of versions. */
            if (undefined !== options.failurelimit) {
                options.failure_limit = options.failurelimit;
                delete options.failurelimit;
            }
            if (undefined !== options.effectspeed) {
                options.effect_speed = options.effectspeed;
                delete options.effectspeed;
            }

            $.extend(settings, options);
        }

        /* Cache container as jQuery as object. */
        $container = (settings.container === undefined ||
                      settings.container === window) ? $window : $(settings.container);

        /* Fire one scroll event per scroll. Not one scroll event per image. */
        if (0 === settings.event.indexOf("scroll")) {
            $container.bind(settings.event, function() {
                return update();
            });
        }

        this.each(function() {
            var self = this;
            var $self = $(self);

            self.loaded = false;

            /* If no src attribute given use data:uri. */
            if ($self.attr("src") === undefined || $self.attr("src") === false) {
                $self.attr("src", settings.placeholder);
            }
            
            /* When appear is triggered load original image. */
            $self.one("appear", function() {
                if (!this.loaded) {
                    if (settings.appear) {
                        var elements_left = elements.length;
                        settings.appear.call(self, elements_left, settings);
                    }
                    $("<img />")
                        .bind("load", function() {
                            var original = $self.data(settings.data_attribute);
                            $self.hide();
                            if ($self.is("img")) {
                                $self.attr("src", original);
                            } else {
                                $self.css("background-image", "url('" + original + "')");
                            }
                            $self[settings.effect](settings.effect_speed);
                            
                            self.loaded = true;

                            /* Remove image from array so it is not looped next time. */
                            var temp = $.grep(elements, function(element) {
                                return !element.loaded;
                            });
                            elements = $(temp);

                            if (settings.load) {
                                var elements_left = elements.length;
                                settings.load.call(self, elements_left, settings);
                            }
                        })
                        .attr("src", $self.data(settings.data_attribute));
                }
            });

            /* When wanted event is triggered load original image */
            /* by triggering appear.                              */
            if (0 !== settings.event.indexOf("scroll")) {
                $self.bind(settings.event, function() {
                    if (!self.loaded) {
                        $self.trigger("appear");
                    }
                });
            }
        });

        /* Check if something appears when window is resized. */
        $window.bind("resize", function() {
            update();
        });
              
        /* With IOS5 force loading images when navigating with back button. */
        /* Non optimal workaround. */
        if ((/iphone|ipod|ipad.*os 5/gi).test(navigator.appVersion)) {
            $window.bind("pageshow", function(event) {
                if (event.originalEvent && event.originalEvent.persisted) {
                    elements.each(function() {
                        $(this).trigger("appear");
                    });
                }
            });
        }

        /* Force initial check if images should appear. */
        $(document).ready(function() {
            update();
        });
        
        return this;
    };

    /* Convenience methods in jQuery namespace.           */
    /* Use as  $.belowthefold(element, {threshold : 100, container : window}) */

    $.belowthefold = function(element, settings) {
        var fold;
        
        if (settings.container === undefined || settings.container === window) {
            fold = (window.innerHeight ? window.innerHeight : $window.height()) + $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top + $(settings.container).height();
        }

        return fold <= $(element).offset().top - settings.threshold;
    };
    
    $.rightoffold = function(element, settings) {
        var fold;

        if (settings.container === undefined || settings.container === window) {
            fold = $window.width() + $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left + $(settings.container).width();
        }

        return fold <= $(element).offset().left - settings.threshold;
    };
        
    $.abovethetop = function(element, settings) {
        var fold;
        
        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollTop();
        } else {
            fold = $(settings.container).offset().top;
        }

        return fold >= $(element).offset().top + settings.threshold  + $(element).height();
    };
    
    $.leftofbegin = function(element, settings) {
        var fold;
        
        if (settings.container === undefined || settings.container === window) {
            fold = $window.scrollLeft();
        } else {
            fold = $(settings.container).offset().left;
        }

        return fold >= $(element).offset().left + settings.threshold + $(element).width();
    };

    $.inviewport = function(element, settings) {
         return !$.rightoffold(element, settings) && !$.leftofbegin(element, settings) &&
                !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
     };

    /* Custom selectors for your convenience.   */
    /* Use as $("img:below-the-fold").something() or */
    /* $("img").filter(":below-the-fold").something() which is faster */

    $.extend($.expr[":"], {
        "below-the-fold" : function(a) { return $.belowthefold(a, {threshold : 0}); },
        "above-the-top"  : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-screen": function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-screen" : function(a) { return !$.rightoffold(a, {threshold : 0}); },
        "in-viewport"    : function(a) { return $.inviewport(a, {threshold : 0}); },
        /* Maintain BC for couple of versions. */
        "above-the-fold" : function(a) { return !$.belowthefold(a, {threshold : 0}); },
        "right-of-fold"  : function(a) { return $.rightoffold(a, {threshold : 0}); },
        "left-of-fold"   : function(a) { return !$.rightoffold(a, {threshold : 0}); }
    });

})(jQuery, window, document);

///#source 1 1 /Scripts/tgdd.360.js
var tgdd360 = (function () {
    var g, f;
    g = f = (function () {
        var i = {
            version: "v2.6.2-74-g847a74c",
            UUID: 0,
            storage: {},
            $uuid: function (l) {
                return (l.$J_UUID || (l.$J_UUID = ++h.UUID))
            },
            getStorage: function (l) {
                return (h.storage[l] || (h.storage[l] = {}))
            },
            $F: function () { },
            $false: function () {
                return false
            },
            $true: function () {
                return true
            },
            defined: function (l) {
                return (undefined != l)
            },
            ifndef: function (m, l) {
                return (undefined != m) ? m : l
            },
            exists: function (l) {
                return !!(l)
            },
            j1: function (l) {
                if (!h.defined(l)) {
                    return false
                }
                if (l.$J_TYPE) {
                    return l.$J_TYPE
                }
                if (!!l.nodeType) {
                    if (1 == l.nodeType) {
                        return "element"
                    }
                    if (3 == l.nodeType) {
                        return "textnode"
                    }
                }
                if (l.length && l.item) {
                    return "collection"
                }
                if (l.length && l.callee) {
                    return "arguments"
                }
                if ((l instanceof window.Object || l instanceof window.Function) && l.constructor === h.Class) {
                    return "class"
                }
                if (l instanceof window.Array) {
                    return "array"
                }
                if (l instanceof window.Function) {
                    return "function"
                }
                if (l instanceof window.String) {
                    return "string"
                }
                if (h.j21.trident) {
                    if (h.defined(l.cancelBubble)) {
                        return "event"
                    }
                } else {
                    if (l === window.event || l.constructor == window.Event || l.constructor == window.MouseEvent || l.constructor == window.UIEvent || l.constructor == window.KeyboardEvent || l.constructor == window.KeyEvent) {
                        return "event"
                    }
                }
                if (l instanceof window.Date) {
                    return "date"
                }
                if (l instanceof window.RegExp) {
                    return "regexp"
                }
                if (l === window) {
                    return "window"
                }
                if (l === document) {
                    return "document"
                }
                return typeof (l)
            },
            extend: function (u, s) {
                if (!(u instanceof window.Array)) {
                    u = [u]
                }
                for (var r = 0, n = u.length; r < n; r++) {
                    if (!h.defined(u)) {
                        continue
                    }
                    for (var q in (s || {})) {
                        try {
                            u[r][q] = s[q]
                        } catch (m) { }
                    }
                }
                return u[0]
            },
            implement: function (s, r) {
                if (!(s instanceof window.Array)) {
                    s = [s]
                }
                for (var q = 0, m = s.length; q < m; q++) {
                    if (!h.defined(s[q])) {
                        continue
                    }
                    if (!s[q].prototype) {
                        continue
                    }
                    for (var n in (r || {})) {
                        if (!s[q].prototype[n]) {
                            s[q].prototype[n] = r[n]
                        }
                    }
                }
                return s[0]
            },
            nativize: function (n, m) {
                if (!h.defined(n)) {
                    return n
                }
                for (var l in (m || {})) {
                    if (!n[l]) {
                        n[l] = m[l]
                    }
                }
                return n
            },
            $try: function () {
                for (var n = 0, m = arguments.length; n < m; n++) {
                    try {
                        return arguments[n]()
                    } catch (o) { }
                }
                return null
            },
            $A: function (p) {
                if (!h.defined(p)) {
                    return $mjs([])
                }
                if (p.toArray) {
                    return $mjs(p.toArray())
                }
                if (p.item) {
                    var n = p.length || 0,
                        m = new Array(n);
                    while (n--) {
                        m[n] = p[n]
                    }
                    return $mjs(m)
                }
                return $mjs(Array.prototype.slice.call(p))
            },
            now: function () {
                return new Date().getTime()
            },
            detach: function (u) {
                var q;
                switch (h.j1(u)) {
                    case "object":
                        q = {};
                        for (var s in u) {
                            q[s] = h.detach(u[s])
                        }
                        break;
                    case "array":
                        q = [];
                        for (var n = 0, m = u.length; n < m; n++) {
                            q[n] = h.detach(u[n])
                        }
                        break;
                    default:
                        return u
                }
                return h.$(q)
            },
            $: function (m) {
                if (!h.defined(m)) {
                    return null
                }
                if (m.$J_EXTENDED) {
                    return m
                }
                switch (h.j1(m)) {
                    case "array":
                        m = h.nativize(m, h.extend(h.Array, {
                            $J_EXTENDED: h.$F
                        }));
                        m.j14 = m.forEach;
                        return m;
                        break;
                    case "string":
                        var l = document.getElementById(m);
                        if (h.defined(l)) {
                            return h.$(l)
                        }
                        return null;
                        break;
                    case "window":
                    case "document":
                        h.$uuid(m);
                        m = h.extend(m, h.Doc);
                        break;
                    case "element":
                        h.$uuid(m);
                        m = h.extend(m, h.Element);
                        break;
                    case "event":
                        m = h.extend(m, h.Event);
                        break;
                    case "textnode":
                        return m;
                        break;
                    case "function":
                    case "array":
                    case "date":
                    default:
                        break
                }
                return h.extend(m, {
                    $J_EXTENDED: h.$F
                })
            },
            $new: function (l, n, m) {
                return $mjs(h.doc.createElement(l)).setProps(n || {}).j6(m || {})
            },
            addCSS: function (m) {
                if (document.styleSheets && document.styleSheets.length) {
                    document.styleSheets[0].insertRule(m, 0)
                } else {
                    var l = $mjs(document.createElement("style"));
                    l.update(m);
                    document.getElementsByTagName("head")[0].appendChild(l)
                }
            }
        };
        var h = i;
        var j = i.$;
        if (!window.magicJS) {
            window.magicJS = i;
            window.$mjs = i.$
        }
        h.Array = {
            $J_TYPE: "array",
            indexOf: function (p, q) {
                var m = this.length;
                for (var n = this.length, o = (q < 0) ? Math.max(0, n + q) : q || 0; o < n; o++) {
                    if (this[o] === p) {
                        return o
                    }
                }
                return -1
            },
            contains: function (l, m) {
                return this.indexOf(l, m) != -1
            },
            forEach: function (m, q) {
                for (var p = 0, n = this.length; p < n; p++) {
                    if (p in this) {
                        m.call(q, this[p], p, this)
                    }
                }
            },
            filter: function (m, u) {
                var s = [];
                for (var q = 0, n = this.length; q < n; q++) {
                    if (q in this) {
                        var p = this[q];
                        if (m.call(u, this[q], q, this)) {
                            s.push(p)
                        }
                    }
                }
                return s
            },
            map: function (m, s) {
                var q = [];
                for (var p = 0, n = this.length; p < n; p++) {
                    if (p in this) {
                        q[p] = m.call(s, this[p], p, this)
                    }
                }
                return q
            }
        };
        h.implement(String, {
            $J_TYPE: "string",
            j26: function () {
                return this.replace(/^\s+|\s+$/g, "")
            },
            eq: function (l, m) {
                return (m || false) ? (this.toString() === l.toString()) : (this.toLowerCase().toString() === l.toLowerCase().toString())
            },
            j22: function () {
                return this.replace(/-\D/g, function (l) {
                    return l.charAt(1).toUpperCase()
                })
            },
            dashize: function () {
                return this.replace(/[A-Z]/g, function (l) {
                    return ("-" + l.charAt(0).toLowerCase())
                })
            },
            j17: function (l) {
                return parseInt(this, l || 10)
            },
            toFloat: function () {
                return parseFloat(this)
            },
            j18: function () {
                return !this.replace(/true/i, "").j26()
            },
            has: function (m, l) {
                l = l || "";
                return (l + this + l).indexOf(l + m + l) > -1
            }
        });
        i.implement(Function, {
            $J_TYPE: "function",
            j24: function () {
                var n = h.$A(arguments),
                    l = this,
                    p = n.shift();
                return function () {
                    return l.apply(p || null, n.concat(h.$A(arguments)))
                }
            },
            j16: function () {
                var n = h.$A(arguments),
                    l = this,
                    p = n.shift();
                return function (m) {
                    return l.apply(p || null, $mjs([m || window.event]).concat(n))
                }
            },
            j27: function () {
                var n = h.$A(arguments),
                    l = this,
                    o = n.shift();
                return window.setTimeout(function () {
                    return l.apply(l, n)
                }, o || 0)
            },
            j28: function () {
                var n = h.$A(arguments),
                    l = this;
                return function () {
                    return l.j27.apply(l, n)
                }
            },
            interval: function () {
                var n = h.$A(arguments),
                    l = this,
                    o = n.shift();
                return window.setInterval(function () {
                    return l.apply(l, n)
                }, o || 0)
            }
        });
        var k = navigator.userAgent.toLowerCase();
        h.j21 = {
            features: {
                xpath: !!(document.evaluate),
                air: !!(window.runtime),
                query: !!(document.querySelector),
                fullScreen: !!(document.exitFullScreen || document.cancelFullScreen || document.webkitCancelFullScreen || document.mozCancelFullScreen || document.oCancelFullScreen || document.msCancelFullScreen)
            },
            touchScreen: function () {
                try {
                    if (document.createEvent) {
                        document.createEvent("TouchEvent", "touchend");
                        return true
                    }
                    return false
                } catch (l) {
                    return false
                }
            }(),
            mobile: k.match(/android|tablet|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(j21|link)|vodafone|wap|windows (ce|phone)|xda|xiino/) ? true : false,
            engine: (window.opera) ? "presto" : !!(window.ActiveXObject) ? "trident" : (undefined != document.getBoxObjectFor || null != window.mozInnerScreenY) ? "gecko" : (null != window.WebKitPoint || !navigator.taintEnabled) ? "webkit" : "unknown",
            version: "",
            cssPrefix: "",
            ieMode: 0,
            platform: k.match(/ip(?:ad|od|hone)/) ? "ios" : (k.match(/(?:webos|android)/) || navigator.platform.match(/mac|win|linux/i) || ["other"])[0].toLowerCase(),
            backCompat: document.compatMode && "backcompat" == document.compatMode.toLowerCase(),
            getDoc: function () {
                return (document.compatMode && "backcompat" == document.compatMode.toLowerCase()) ? document.body : document.documentElement
            },
            ready: false,
            onready: function () {
                if (h.j21.ready) {
                    return
                }
                h.j21.ready = true;
                h.body = $mjs(document.body);
                h.win = $mjs(window);
                (function () {
                    h.j21.css3Transformations = {
                        capable: false,
                        prefix: ""
                    };
                    if (typeof document.body.style.transform !== "undefined") {
                        h.j21.css3Transformations.capable = true
                    } else {
                        var n = "Webkit Moz O ms Khtml".split(" ");
                        for (var m = 0, l = n.length; m < l; m++) {
                            h.j21.css3Transformations.prefix = n[m];
                            if (typeof document.body.style[h.j21.css3Transformations.prefix + "Transform"] !== "undefined") {
                                h.j21.css3Transformations.capable = true;
                                break
                            }
                        }
                    }
                })();
                (function () {
                    h.j21.css3Animation = {
                        capable: false,
                        prefix: ""
                    };
                    if (typeof document.body.style.animationName !== "undefined") {
                        h.j21.css3Animation.capable = true
                    } else {
                        var n = "Webkit Moz O ms Khtml".split(" ");
                        for (var m = 0, l = n.length; m < l; m++) {
                            h.j21.css3Animation.prefix = n[m];
                            if (typeof document.body.style[h.j21.css3Animation.prefix + "AnimationName"] !== "undefined") {
                                h.j21.css3Animation.capable = true;
                                break
                            }
                        }
                    }
                })();
                $mjs(document).callEvent("domready")
            }
        };
        (function () {
            function l() {
                return !!(arguments.callee.caller)
            }
            h.j21.version = ("presto" == h.j21.engine) ? !!(document.head) ? 270 : !!(window.applicationCache) ? 260 : !!(window.localStorage) ? 250 : (h.j21.features.query) ? 220 : ((l()) ? 211 : ((document.getElementsByClassName) ? 210 : 200)) : ("trident" == h.j21.engine) ? !!(window.msPerformance || window.performance) ? 900 : !!(window.XMLHttpRequest && window.postMessage) ? 6 : ((window.XMLHttpRequest) ? 5 : 4) : ("webkit" == h.j21.engine) ? ((h.j21.features.xpath) ? ((h.j21.features.query) ? 525 : 420) : 419) : ("gecko" == h.j21.engine) ? !!(document.head) ? 200 : !!document.readyState ? 192 : !!(window.localStorage) ? 191 : ((document.getElementsByClassName) ? 190 : 181) : "";
            h.j21[h.j21.engine] = h.j21[h.j21.engine + h.j21.version] = true;
            if (window.chrome) {
                h.j21.chrome = true
            }
            var m = {
                webkit: "webkit",
                gecko: "moz",
                opera: "o",
                presto: "ms"
            };
            h.j21.cssPrefix = m[h.j21.engine];
            h.j21.ieMode = (!h.j21.trident) ? 0 : (document.documentMode) ? document.documentMode : function () {
                var n = 0;
                if (h.j21.backCompat) {
                    return 5
                }
                switch (h.j21.version) {
                    case 4:
                        n = 6;
                        break;
                    case 5:
                        n = 7;
                        break;
                    case 6:
                        n = 8;
                        break;
                    case 900:
                        n = 9;
                        break
                }
                return n
            }()
        })();
        (function () {
            h.j21.fullScreen = {
                capable: h.j21.features.fullScreen,
                enabled: function () {
                    return !!(document.fullScreen || document.webkitIsFullScreen || document[h.j21.cssPrefix + "FullScreen"])
                },
                request: function (l, m) {
                    m || (m = {});
                    if (this.capable) {
                        h.$(document).je1(this.changeEventName, this.onchange = function (n) {
                            if (this.enabled()) {
                                m.onEnter && m.onEnter()
                            } else {
                                h.$(document).je2(this.changeEventName, this.onchange);
                                m.onExit && m.onExit()
                            }
                        }.j16(this));
                        h.$(document).je1(this.errorEventName, this.onerror = function (n) {
                            m.fallback && m.fallback();
                            h.$(document).je2(this.errorEventName, this.onerror)
                        }.j16(this));
                        l[h.j21.cssPrefix + "RequestFullScreen"] ? l[h.j21.cssPrefix + "RequestFullScreen"]() : l.requestFullScreen()
                    } else {
                        if (m.fallback) {
                            m.fallback()
                        }
                    }
                },
                cancel: (document.exitFullScreen || document.cancelFullScreen || document[h.j21.cssPrefix + "CancelFullScreen"] || function () { }).j24(document),
                changeEventName: h.j21.cssPrefix + "fullscreenchange",
                errorEventName: h.j21.cssPrefix + "fullscreenerror",
                prefix: h.j21.cssPrefix,
                activeElement: null
            }
        })();
        h.Element = {
            j13: function (l) {
                return this.className.has(l, " ")
            },
            j2: function (l) {
                if (l && !this.j13(l)) {
                    this.className += (this.className ? " " : "") + l
                }
                return this
            },
            j3: function (l) {
                l = l || ".*";
                this.className = this.className.replace(new RegExp("(^|\\s)" + l + "(?:\\s|$)"), "$1").j26();
                return this
            },
            j4: function (l) {
                return this.j13(l) ? this.j3(l) : this.j2(l)
            },
            j5: function (n) {
                n = (n == "float" && this.currentStyle) ? "styleFloat" : n.j22();
                var l = null,
                    m = null;
                if (this.currentStyle) {
                    l = this.currentStyle[n]
                } else {
                    if (document.defaultView && document.defaultView.getComputedStyle) {
                        m = document.defaultView.getComputedStyle(this, null);
                        l = m ? m.getPropertyValue([n.dashize()]) : null
                    }
                }
                if (!l) {
                    l = this.style[n]
                }
                if ("opacity" == n) {
                    return h.defined(l) ? parseFloat(l) : 1
                }
                if (/^(border(Top|Bottom|Left|Right)Width)|((padding|margin)(Top|Bottom|Left|Right))$/.test(n)) {
                    l = parseInt(l) ? l : "0px"
                }
                return ("auto" == l ? null : l)
            },
            j6Prop: function (m, l) {
                try {
                    if ("opacity" == m) {
                        this.j23(l);
                        return this
                    } else {
                        if ("float" == m) {
                            this.style[("undefined" === typeof (this.style.styleFloat)) ? "cssFloat" : "styleFloat"] = l;
                            return this
                        } else {
                            if (h.j21.css3Transformations && /transform/.test(m)) { }
                        }
                    }
                    this.style[m.j22()] = l + (("number" == h.j1(l) && !$mjs(["zIndex", "zoom"]).contains(m.j22())) ? "px" : "")
                } catch (n) { }
                return this
            },
            j6: function (m) {
                for (var l in m) {
                    this.j6Prop(l, m[l])
                }
                return this
            },
            j19s: function () {
                var l = {};
                h.$A(arguments).j14(function (m) {
                    l[m] = this.j5(m)
                }, this);
                return l
            },
            j23: function (o, m) {
                m = m || false;
                o = parseFloat(o);
                if (m) {
                    if (o == 0) {
                        if ("hidden" != this.style.visibility) {
                            this.style.visibility = "hidden"
                        }
                    } else {
                        if ("visible" != this.style.visibility) {
                            this.style.visibility = "visible"
                        }
                    }
                }
                if (h.j21.trident) {
                    if (!this.currentStyle || !this.currentStyle.hasLayout) {
                        this.style.zoom = 1
                    }
                    try {
                        var n = this.filters.item("DXImageTransform.Microsoft.Alpha");
                        n.enabled = (1 != o);
                        n.opacity = o * 100
                    } catch (l) {
                        this.style.filter += (1 == o) ? "" : "progid:DXImageTransform.Microsoft.Alpha(enabled=true,opacity=" + o * 100 + ")"
                    }
                }
                this.style.opacity = o;
                return this
            },
            setProps: function (l) {
                for (var m in l) {
                    this.setAttribute(m, "" + l[m])
                }
                return this
            },
            hide: function () {
                return this.j6({
                    display: "none",
                    visibility: "hidden"
                })
            },
            show: function () {
                return this.j6({
                    display: "block",
                    visibility: "visible"
                })
            },
            j7: function () {
                return {
                    width: this.offsetWidth,
                    height: this.offsetHeight
                }
            },
            j10: function () {
                return {
                    top: this.scrollTop,
                    left: this.scrollLeft
                }
            },
            j11: function () {
                var l = this,
                    m = {
                        top: 0,
                        left: 0
                    };
                do {
                    m.left += l.scrollLeft || 0;
                    m.top += l.scrollTop || 0;
                    l = l.parentNode
                } while (l);
                return m
            },
            j8: function () {
                if (h.defined(document.documentElement.getBoundingClientRect)) {
                    var m = this.getBoundingClientRect(),
                        o = $mjs(document).j10(),
                        q = h.j21.getDoc();
                    return {
                        top: m.top + o.y - q.clientTop,
                        left: m.left + o.x - q.clientLeft
                    }
                }
                var p = this,
                    n = t = 0;
                do {
                    n += p.offsetLeft || 0;
                    t += p.offsetTop || 0;
                    p = p.offsetParent
                } while (p && !(/^(?:body|html)$/i).test(p.tagName));
                return {
                    top: t,
                    left: n
                }
            },
            j9: function () {
                var m = this.j8();
                var l = this.j7();
                return {
                    top: m.top,
                    bottom: m.top + l.height,
                    left: m.left,
                    right: m.left + l.width
                }
            },
            changeContent: function (m) {
                try {
                    this.innerHTML = m
                } catch (l) {
                    this.innerText = m
                }
                return this
            },
            j33: function () {
                return (this.parentNode) ? this.parentNode.removeChild(this) : this
            },
            kill: function () {
                h.$A(this.childNodes).j14(function (l) {
                    if (3 == l.nodeType || 8 == l.nodeType) {
                        return
                    }
                    $mjs(l).kill()
                });
                this.j33();
                this.je3();
                if (this.$J_UUID) {
                    h.storage[this.$J_UUID] = null;
                    delete h.storage[this.$J_UUID]
                }
                return null
            },
            append: function (n, m) {
                m = m || "bottom";
                var l = this.firstChild;
                ("top" == m && l) ? this.insertBefore(n, l) : this.appendChild(n);
                return this
            },
            j32: function (n, m) {
                var l = $mjs(n).append(this, m);
                return this
            },
            enclose: function (l) {
                this.append(l.parentNode.replaceChild(this, l));
                return this
            },
            hasChild: function (l) {
                if (!(l = $mjs(l))) {
                    return false
                }
                return (this == l) ? false : (this.contains && !(h.j21.webkit419)) ? (this.contains(l)) : (this.compareDocumentPosition) ? !!(this.compareDocumentPosition(l) & 16) : h.$A(this.byTag(l.tagName)).contains(l)
            }
        };
        h.Element.j19 = h.Element.j5;
        h.Element.j20 = h.Element.j6;
        if (!window.Element) {
            window.Element = h.$F;
            if (h.j21.engine.webkit) {
                window.document.createElement("iframe")
            }
            window.Element.prototype = (h.j21.engine.webkit) ? window["[[DOMElement.prototype]]"] : {}
        }
        h.implement(window.Element, {
            $J_TYPE: "element"
        });
        h.Doc = {
            j7: function () {
                if (h.j21.touchScreen || h.j21.presto925 || h.j21.webkit419) {
                    return {
                        width: self.innerWidth,
                        height: self.innerHeight
                    }
                }
                return {
                    width: h.j21.getDoc().clientWidth,
                    height: h.j21.getDoc().clientHeight
                }
            },
            j10: function () {
                return {
                    x: self.pageXOffset || h.j21.getDoc().scrollLeft,
                    y: self.pageYOffset || h.j21.getDoc().scrollTop
                }
            },
            j12: function () {
                var l = this.j7();
                return {
                    width: Math.max(h.j21.getDoc().scrollWidth, l.width),
                    height: Math.max(h.j21.getDoc().scrollHeight, l.height)
                }
            }
        };
        h.extend(document, {
            $J_TYPE: "document"
        });
        h.extend(window, {
            $J_TYPE: "window"
        });
        h.extend([h.Element, h.Doc], {
            j29: function (o, m) {
                var l = h.getStorage(this.$J_UUID),
                    n = l[o];
                if (undefined != m && undefined == n) {
                    n = l[o] = m
                }
                return (h.defined(n) ? n : null)
            },
            j30: function (n, m) {
                var l = h.getStorage(this.$J_UUID);
                l[n] = m;
                return this
            },
            j31: function (m) {
                var l = h.getStorage(this.$J_UUID);
                delete l[m];
                return this
            }
        });
        if (!(window.HTMLElement && window.HTMLElement.prototype && window.HTMLElement.prototype.getElementsByClassName)) {
            h.extend([h.Element, h.Doc], {
                getElementsByClassName: function (l) {
                    return h.$A(this.getElementsByTagName("*")).filter(function (n) {
                        try {
                            return (1 == n.nodeType && n.className.has(l, " "))
                        } catch (m) { }
                    })
                }
            })
        }
        h.extend([h.Element, h.Doc], {
            byClass: function () {
                return this.getElementsByClassName(arguments[0])
            },
            byTag: function () {
                return this.getElementsByTagName(arguments[0])
            }
        });
        if (h.j21.fullScreen.capable && !document.requestFullScreen) {
            h.Element.requestFullScreen = function () {
                h.j21.fullScreen.request(this)
            }
        }
        h.Event = {
            $J_TYPE: "event",
            isQueueStopped: h.$false,
            stop: function () {
                return this.stopDistribution().stopDefaults()
            },
            stopDistribution: function () {
                if (this.stopPropagation) {
                    this.stopPropagation()
                } else {
                    this.cancelBubble = true
                }
                return this
            },
            stopDefaults: function () {
                if (this.preventDefault) {
                    this.preventDefault()
                } else {
                    this.returnValue = false
                }
                return this
            },
            stopQueue: function () {
                this.isQueueStopped = h.$true;
                return this
            },
            j15: function () {
                var m, l;
                m = ((/touch/i).test(this.type)) ? this.changedTouches[0] : this;
                return (!h.defined(m)) ? {
                    x: 0,
                    y: 0
                } : {
                    x: m.pageX || m.clientX + h.j21.getDoc().scrollLeft,
                    y: m.pageY || m.clientY + h.j21.getDoc().scrollTop
                }
            },
            getTarget: function () {
                var l = this.target || this.srcElement;
                while (l && 3 == l.nodeType) {
                    l = l.parentNode
                }
                return l
            },
            getRelated: function () {
                var m = null;
                switch (this.type) {
                    case "mouseover":
                        m = this.relatedTarget || this.fromElement;
                        break;
                    case "mouseout":
                        m = this.relatedTarget || this.toElement;
                        break;
                    default:
                        return m
                }
                try {
                    while (m && 3 == m.nodeType) {
                        m = m.parentNode
                    }
                } catch (l) {
                    m = null
                }
                return m
            },
            getButton: function () {
                if (!this.which && this.button !== undefined) {
                    return (this.button & 1 ? 1 : (this.button & 2 ? 3 : (this.button & 4 ? 2 : 0)))
                }
                return this.which
            }
        };
        h._event_add_ = "addEventListener";
        h._event_del_ = "removeEventListener";
        h._event_prefix_ = "";
        if (!document.addEventListener) {
            h._event_add_ = "attachEvent";
            h._event_del_ = "detachEvent";
            h._event_prefix_ = "on"
        }
        h.Event.Custom = {
            type: "",
            x: null,
            y: null,
            timeStamp: null,
            button: null,
            target: null,
            relatedTarget: null,
            $J_TYPE: "event.custom",
            isQueueStopped: h.$false,
            events: $mjs([]),
            pushToEvents: function (l) {
                var m = l;
                this.events.push(m)
            },
            stop: function () {
                return this.stopDistribution().stopDefaults()
            },
            stopDistribution: function () {
                this.events.j14(function (m) {
                    try {
                        m.stopDistribution()
                    } catch (l) { }
                });
                return this
            },
            stopDefaults: function () {
                this.events.j14(function (m) {
                    try {
                        m.stopDefaults()
                    } catch (l) { }
                });
                return this
            },
            stopQueue: function () {
                this.isQueueStopped = h.$true;
                return this
            },
            j15: function () {
                return {
                    x: this.x,
                    y: this.y
                }
            },
            getTarget: function () {
                return this.target
            },
            getRelated: function () {
                return this.relatedTarget
            },
            getButton: function () {
                return this.button
            }
        };
        h.extend([h.Element, h.Doc], {
            je1: function (s, r, q, o) {
                var p, n, m, l;
                if (h.j1(s) == "array") {
                    $mjs(s).j14(this.je1.j16(this, r, q));
                    return this
                }
                if (!s || !r || h.j1(s) != "string" || h.j1(r) != "function") {
                    return this
                }
                if (s == "domready" && h.j21.ready) {
                    r.call(this);
                    return this
                }
                q = parseInt(q || 50);
                if (!r.$J_EUID) {
                    r.$J_EUID = Math.floor(Math.random() * h.now())
                }
                p = this.j29("events", {});
                n = p[s];
                if (!n) {
                    p[s] = n = $mjs([]);
                    m = this;
                    if (h.Event.Custom[s]) {
                        h.Event.Custom[s].handler.add.call(this, o)
                    } else {
                        n.handle = function (u) {
                            u = h.extend(u || window.e, {
                                $J_TYPE: "event"
                            });
                            m.callEvent(s, $mjs(u))
                        };
                        this[h._event_add_](h._event_prefix_ + s, n.handle, false)
                    }
                }
                l = {
                    type: s,
                    fn: r,
                    priority: q,
                    euid: r.$J_EUID
                };
                n.push(l);
                n.sort(function (v, u) {
                    return v.priority - u.priority
                });
                return this
            },
            je2: function (r) {
                var p = this.j29("events"),
                    o, l, n, m, q;
                if (!r || h.j1(r) != "string" || !p || !p[r]) {
                    return this
                }
                o = p[r] || [];
                q = arguments[1] || null;
                for (n = 0; n < o.length; n++) {
                    l = o[n];
                    if (!q || q.$J_EUID === l.euid) {
                        m = o.splice(n--, 1);
                        delete m
                    }
                }
                if (0 === o.length) {
                    if (h.Event.Custom[r]) {
                        h.Event.Custom[r].handler.j33.call(this)
                    } else {
                        this[h._event_del_](h._event_prefix_ + r, o.handle, false)
                    }
                    delete p[r]
                }
                return this
            },
            callEvent: function (p, r) {
                var o = this.j29("events"),
                    n, l, m;
                if (!p || h.j1(p) != "string" || !o || !o[p]) {
                    return this
                }
                try {
                    r = h.extend(r || {}, {
                        type: p
                    })
                } catch (q) { }
                if (undefined === r.timeStamp) {
                    r.timeStamp = h.now()
                }
                n = o[p] || [];
                for (m = 0; m < n.length && !(r.isQueueStopped && r.isQueueStopped()) ; m++) {
                    n[m].fn.call(this, r)
                }
            },
            raiseEvent: function (m, l) {
                var q = ("domready" == m) ? false : true,
                    p = this,
                    n;
                if (!q) {
                    this.callEvent(m);
                    return this
                }
                if (p === document && document.createEvent && !p.dispatchEvent) {
                    p = document.documentElement
                }
                if (document.createEvent) {
                    n = document.createEvent(m);
                    n.initEvent(l, true, true)
                } else {
                    n = document.createEventObject();
                    n.eventType = m
                }
                if (document.createEvent) {
                    p.dispatchEvent(n)
                } else {
                    p.fireEvent("on" + l, n)
                }
                return n
            },
            je3: function () {
                var l = this.j29("events");
                if (!l) {
                    return this
                }
                for (var m in l) {
                    this.je2(m)
                }
                this.j31("events");
                return this
            }
        });
        (function () {
            if (h.j21.webkit && h.j21.version < 420) {
                (function () {
                    ($mjs(["loaded", "complete"]).contains(document.readyState)) ? h.j21.onready() : arguments.callee.j27(50)
                })()
            } else {
                if (h.j21.trident && h.j21.ieMode < 9 && window == top) {
                    (function () {
                        (h.$try(function () {
                            h.j21.getDoc().doScroll("left");
                            return true
                        })) ? h.j21.onready() : arguments.callee.j27(50)
                    })()
                } else {
                    $mjs(document).je1("DOMContentLoaded", h.j21.onready);
                    $mjs(window).je1("load", h.j21.onready)
                }
            }
        })();
        h.Class = function () {
            var q = null,
                m = h.$A(arguments);
            if ("class" == h.j1(m[0])) {
                q = m.shift()
            }
            var l = function () {
                for (var u in this) {
                    this[u] = h.detach(this[u])
                }
                if (this.constructor.$parent) {
                    this.$parent = {};
                    var w = this.constructor.$parent;
                    for (var v in w) {
                        var s = w[v];
                        switch (h.j1(s)) {
                            case "function":
                                this.$parent[v] = h.Class.wrap(this, s);
                                break;
                            case "object":
                                this.$parent[v] = h.detach(s);
                                break;
                            case "array":
                                this.$parent[v] = h.detach(s);
                                break
                        }
                    }
                }
                var r = (this.init) ? this.init.apply(this, arguments) : this;
                delete this.caller;
                return r
            };
            if (!l.prototype.init) {
                l.prototype.init = h.$F
            }
            if (q) {
                var o = function () { };
                o.prototype = q.prototype;
                l.prototype = new o;
                l.$parent = {};
                for (var n in q.prototype) {
                    l.$parent[n] = q.prototype[n]
                }
            } else {
                l.$parent = null
            }
            l.constructor = h.Class;
            l.prototype.constructor = l;
            h.extend(l.prototype, m[0]);
            h.extend(l, {
                $J_TYPE: "class"
            });
            return l
        };
        i.Class.wrap = function (l, m) {
            return function () {
                var o = this.caller;
                var n = m.apply(l, arguments);
                return n
            }
        };
        h.Event.Custom.btnclick = new h.Class(h.extend(h.Event.Custom, {
            type: "btnclick",
            init: function (n, m) {
                var l = m.j15();
                this.x = l.x;
                this.y = l.y;
                this.timeStamp = m.timeStamp;
                this.button = m.getButton();
                this.target = n;
                this.pushToEvents(m)
            }
        }));
        h.Event.Custom.btnclick.handler = {
            options: {
                threshold: 200,
                button: 1
            },
            add: function (l) {
                this.j30("event:btnclick:options", h.extend(h.detach(h.Event.Custom.btnclick.handler.options), l || {}));
                this.je1("mousedown", h.Event.Custom.btnclick.handler.handle, 1);
                this.je1("mouseup", h.Event.Custom.btnclick.handler.handle, 1);
                this.je1("click", h.Event.Custom.btnclick.handler.onclick, 1);
                if (h.j21.trident && h.j21.ieMode < 9) {
                    this.je1("dblclick", h.Event.Custom.btnclick.handler.handle, 1)
                }
            },
            j33: function () {
                this.je2("mousedown", h.Event.Custom.btnclick.handler.handle);
                this.je2("mouseup", h.Event.Custom.btnclick.handler.handle);
                this.je2("click", h.Event.Custom.btnclick.handler.onclick);
                if (h.j21.trident && h.j21.ieMode < 9) {
                    this.je2("dblclick", h.Event.Custom.btnclick.handler.handle)
                }
            },
            onclick: function (l) {
                l.stopDefaults()
            },
            handle: function (o) {
                var n, l, m;
                l = this.j29("event:btnclick:options");
                if (o.type != "dblclick" && o.getButton() != l.button) {
                    return
                }
                if ("mousedown" == o.type) {
                    o.stop();
                    n = new h.Event.Custom.btnclick(this, o);
                    this.j30("event:btnclick:btnclickEvent", n)
                } else {
                    if ("mouseup" == o.type) {
                        n = this.j29("event:btnclick:btnclickEvent");
                        if (!n) {
                            return
                        }
                        m = o.j15();
                        this.j31("event:btnclick:btnclickEvent");
                        n.pushToEvents(o);
                        if (o.timeStamp - n.timeStamp <= l.threshold && n.x == m.x && n.y == m.y) {
                            this.callEvent("btnclick", n)
                        }
                    } else {
                        if (o.type == "dblclick") {
                            n = new h.Event.Custom.btnclick(this, o);
                            this.callEvent("btnclick", n)
                        }
                    }
                }
            }
        };
        h.Event.Custom.mousedrag = new h.Class(h.extend(h.Event.Custom, {
            type: "mousedrag",
            state: "dragstart",
            init: function (o, n, m) {
                var l = n.j15();
                this.x = l.x;
                this.y = l.y;
                this.timeStamp = n.timeStamp;
                this.button = n.getButton();
                this.target = o;
                this.pushToEvents(n);
                this.state = m
            }
        }));
        h.Event.Custom.mousedrag.handler = {
            add: function () {
                this.je1("mousedown", h.Event.Custom.mousedrag.handler.handleMouseDown, 1);
                this.je1("mouseup", h.Event.Custom.mousedrag.handler.handleMouseUp, 1);
                this.je1("mousemove", h.Event.Custom.mousedrag.handler.handleMouseMove, 1);
                document.je1("mouseup", h.Event.Custom.mousedrag.handler.handleMouseUp.j16(this), 1)
            },
            j33: function () {
                this.je2("mousedown", h.Event.Custom.mousedrag.handler.handleMouseDown);
                this.je2("mouseup", h.Event.Custom.mousedrag.handler.handleMouseUp);
                this.je2("mousemove", h.Event.Custom.mousedrag.handler.handleMouseMove);
                document.je2("mouseup", h.Event.Custom.mousedrag.handler.handleMouseUp)
            },
            handleMouseDown: function (m) {
                var l;
                m.stopDefaults();
                l = new h.Event.Custom.mousedrag(this, m, "dragstart");
                this.j30("event:mousedrag:dragstart", l);
                this.callEvent("mousedrag", l)
            },
            handleMouseUp: function (m) {
                var l;
                m.stopDefaults();
                l = this.j29("event:mousedrag:dragstart");
                if (!l) {
                    return
                }
                l = new h.Event.Custom.mousedrag(this, m, "dragend");
                this.j31("event:mousedrag:dragstart");
                this.callEvent("mousedrag", l)
            },
            handleMouseMove: function (m) {
                var l;
                m.stopDefaults();
                l = this.j29("event:mousedrag:dragstart");
                if (!l) {
                    return
                }
                l = new h.Event.Custom.mousedrag(this, m, "dragmove");
                this.callEvent("mousedrag", l)
            }
        };
        h.Event.Custom.dblbtnclick = new h.Class(h.extend(h.Event.Custom, {
            type: "dblbtnclick",
            timedout: false,
            tm: null,
            init: function (n, m) {
                var l = m.j15();
                this.x = l.x;
                this.y = l.y;
                this.timeStamp = m.timeStamp;
                this.button = m.getButton();
                this.target = n;
                this.pushToEvents(m)
            }
        }));
        h.Event.Custom.dblbtnclick.handler = {
            options: {
                threshold: 200
            },
            add: function (l) {
                this.j30("event:dblbtnclick:options", h.extend(h.detach(h.Event.Custom.dblbtnclick.handler.options), l || {}));
                this.je1("btnclick", h.Event.Custom.dblbtnclick.handler.handle, 1)
            },
            j33: function () {
                this.je2("btnclick", h.Event.Custom.dblbtnclick.handler.handle)
            },
            handle: function (n) {
                var m, l;
                m = this.j29("event:dblbtnclick:event");
                l = this.j29("event:dblbtnclick:options");
                if (!m) {
                    m = new h.Event.Custom.dblbtnclick(this, n);
                    m.tm = setTimeout(function () {
                        m.timedout = true;
                        n.isQueueStopped = h.$false;
                        this.callEvent("btnclick", n)
                    }.j24(this), l.threshold + 10);
                    this.j30("event:dblbtnclick:event", m);
                    n.stopQueue()
                } else {
                    clearTimeout(m.tm);
                    this.j31("event:dblbtnclick:event");
                    if (!m.timedout) {
                        m.pushToEvents(n);
                        n.stopQueue().stop();
                        this.callEvent("dblbtnclick", m)
                    } else { }
                }
            }
        };
        h.Event.Custom.tap = new h.Class(h.extend(h.Event.Custom, {
            type: "tap",
            id: null,
            init: function (m, l) {
                this.id = l.targetTouches[0].identifier;
                this.x = l.targetTouches[0].clientX;
                this.y = l.targetTouches[0].clientY;
                this.timeStamp = l.timeStamp;
                this.button = 0;
                this.target = m;
                this.pushToEvents(l)
            }
        }));
        h.Event.Custom.tap.handler = {
            options: {
                threshold: 200,
                radius: 10
            },
            add: function (l) {
                this.j30("event:tap:options", h.extend(h.detach(h.Event.Custom.tap.handler.options), l || {}));
                this.je1("touchstart", h.Event.Custom.tap.handler.handle, 1);
                this.je1("touchend", h.Event.Custom.tap.handler.handle, 1);
                this.je1("click", h.Event.Custom.tap.handler.onclick, 1)
            },
            j33: function () {
                this.je2("touchstart", h.Event.Custom.tap.handler.handle);
                this.je2("touchend", h.Event.Custom.tap.handler.handle);
                this.je2("click", h.Event.Custom.tap.handler.onclick)
            },
            onclick: function (l) {
                l.stopDefaults()
            },
            handle: function (o) {
                var m, n, l;
                l = this.j29("event:tap:options");
                if ("touchstart" == o.type) {
                    if (o.targetTouches.length > 1) {
                        return
                    }
                    n = new h.Event.Custom.tap(this, o);
                    o.stop();
                    this.j30("event:tap:event", n)
                } else {
                    if ("touchend" == o.type) {
                        n = this.j29("event:tap:event");
                        m = h.now();
                        if (!n || o.changedTouches.length > 1) {
                            return
                        }
                        this.j31("event:tap:event");
                        if (n.id == o.changedTouches[0].identifier && o.timeStamp - n.timeStamp <= l.threshold && Math.sqrt(Math.pow(o.changedTouches[0].clientX - n.x, 2) + Math.pow(o.changedTouches[0].clientY - n.y, 2)) <= l.radius) {
                            this.callEvent("tap", n)
                        }
                    }
                }
            }
        };
        h.Event.Custom.dbltap = new h.Class(h.extend(h.Event.Custom, {
            type: "dbltap",
            timedout: false,
            tm: null,
            init: function (m, l) {
                this.x = l.x;
                this.y = l.y;
                this.timeStamp = l.timeStamp;
                this.button = 0;
                this.target = m;
                this.pushToEvents(l)
            }
        }));
        h.Event.Custom.dbltap.handler = {
            options: {
                threshold: 300
            },
            add: function (l) {
                this.j30("event:dbltap:options", h.extend(h.detach(h.Event.Custom.dbltap.handler.options), l || {}));
                this.je1("tap", h.Event.Custom.dbltap.handler.handle, 1)
            },
            j33: function () {
                this.je2("tap", h.Event.Custom.dbltap.handler.handle)
            },
            handle: function (n) {
                var m, l;
                m = this.j29("event:dbltap:event");
                l = this.j29("event:dbltap:options");
                if (!m) {
                    m = new h.Event.Custom.dbltap(this, n);
                    m.tm = setTimeout(function () {
                        m.timedout = true;
                        n.isQueueStopped = h.$false;
                        this.callEvent("tap", n)
                    }.j24(this), l.threshold + 10);
                    this.j30("event:dbltap:event", m);
                    n.stopQueue()
                } else {
                    clearTimeout(m.tm);
                    this.j31("event:dbltap:event");
                    if (!m.timedout) {
                        m.pushToEvents(n);
                        n.stopQueue().stop();
                        this.callEvent("dbltap", m)
                    } else { }
                }
            }
        };
        h.Event.Custom.touchdrag = new h.Class(h.extend(h.Event.Custom, {
            type: "touchdrag",
            state: "dragstart",
            id: null,
            dragged: false,
            init: function (n, m, l) {
                var o = null;
                if ("touchstart" == m.type) {
                    o = m.touches[0]
                } else {
                    o = m.changedTouches[0]
                }
                this.id = o.identifier;
                this.x = o.clientX;
                this.y = o.clientY;
                this.timeStamp = m.timeStamp;
                this.button = 0;
                this.target = n;
                this.pushToEvents(m);
                this.state = l
            }
        }));
        h.Event.Custom.touchdrag.handler = {
            add: function () {
                this.je1("touchstart", h.Event.Custom.touchdrag.handler.handleTouchStart, 1);
                this.je1("touchend", h.Event.Custom.touchdrag.handler.handleTouchEnd, 1);
                this.je1("touchmove", h.Event.Custom.touchdrag.handler.handleTouchMove, 1)
            },
            j33: function () {
                this.je2("touchstart", h.Event.Custom.touchdrag.handler.handleTouchStart);
                this.je2("touchend", h.Event.Custom.touchdrag.handler.handleTouchEnd);
                this.je2("touchmove", h.Event.Custom.touchdrag.handler.handleTouchMove)
            },
            handleTouchStart: function (m) {
                var l;
                if (m.touches.length > 1) {
                    this.j31("event:touchdrag:dragstart");
                    return
                }
                l = new h.Event.Custom.touchdrag(this, m, "dragstart");
                this.j30("event:touchdrag:dragstart", l)
            },
            handleTouchEnd: function (m) {
                var l;
                l = this.j29("event:touchdrag:dragstart");
                if (!l || m.changedTouches.length > 1) {
                    this.j31("event:touchdrag:dragstart");
                    return
                }
                if (l.id != m.changedTouches[0].identifier) {
                    this.j31("event:touchdrag:dragstart");
                    return
                }
                if (!l.dragged) {
                    return
                }
                l = new h.Event.Custom.touchdrag(this, m, "dragend");
                this.j31("event:touchdrag:dragstart");
                this.callEvent("touchdrag", l)
            },
            handleTouchMove: function (m) {
                var l;
                l = this.j29("event:touchdrag:dragstart");
                if (!l || m.changedTouches.length > 1) {
                    this.j31("event:touchdrag:dragstart");
                    return
                }
                if (l.id != m.changedTouches[0].identifier) {
                    this.j31("event:touchdrag:dragstart");
                    return
                }
                if (!l.dragged) {
                    l.dragged = true;
                    this.callEvent("touchdrag", l)
                }
                l = new h.Event.Custom.touchdrag(this, m, "dragmove");
                this.callEvent("touchdrag", l)
            }
        };
        h.Event.Custom.touchpinch = new h.Class(h.extend(h.Event.Custom, {
            type: "touchpinch",
            scale: 1,
            previousScale: 1,
            curScale: 1,
            state: "pinchstart",
            init: function (m, l) {
                this.timeStamp = l.timeStamp;
                this.button = 0;
                this.target = m;
                this.x = l.touches[0].clientX + (l.touches[1].clientX - l.touches[0].clientX) / 2;
                this.y = l.touches[0].clientY + (l.touches[1].clientY - l.touches[0].clientY) / 2;
                this._initialDistance = Math.sqrt(Math.pow(l.touches[0].clientX - l.touches[1].clientX, 2) + Math.pow(l.touches[0].clientY - l.touches[1].clientY, 2));
                this.pushToEvents(l)
            },
            update: function (l) {
                var m;
                this.state = "pinchupdate";
                if (l.changedTouches[0].identifier != this.events[0].touches[0].identifier || l.changedTouches[1].identifier != this.events[0].touches[1].identifier) {
                    return
                }
                m = Math.sqrt(Math.pow(l.changedTouches[0].clientX - l.changedTouches[1].clientX, 2) + Math.pow(l.changedTouches[0].clientY - l.changedTouches[1].clientY, 2));
                this.previousScale = this.scale;
                this.scale = m / this._initialDistance;
                this.curScale = this.scale / this.previousScale;
                this.x = l.changedTouches[0].clientX + (l.changedTouches[1].clientX - l.changedTouches[0].clientX) / 2;
                this.y = l.changedTouches[0].clientY + (l.changedTouches[1].clientY - l.changedTouches[0].clientY) / 2;
                this.pushToEvents(l)
            }
        }));
        h.Event.Custom.touchpinch.handler = {
            add: function () {
                this.je1("touchstart", h.Event.Custom.touchpinch.handler.handleTouchStart, 1);
                this.je1("touchend", h.Event.Custom.touchpinch.handler.handleTouchEnd, 1);
                this.je1("touchmove", h.Event.Custom.touchpinch.handler.handleTouchMove, 1)
            },
            j33: function () {
                this.je2("touchstart", h.Event.Custom.touchpinch.handler.handleTouchStart);
                this.je2("touchend", h.Event.Custom.touchpinch.handler.handleTouchEnd);
                this.je2("touchmove", h.Event.Custom.touchpinch.handler.handleTouchMove)
            },
            handleTouchStart: function (m) {
                var l;
                if (m.touches.length != 2) {
                    return
                }
                m.stopDefaults();
                l = new h.Event.Custom.touchpinch(this, m);
                this.j30("event:touchpinch:event", l)
            },
            handleTouchEnd: function (m) {
                var l;
                l = this.j29("event:touchpinch:event");
                if (!l) {
                    return
                }
                m.stopDefaults();
                this.j31("event:touchpinch:event")
            },
            handleTouchMove: function (m) {
                var l;
                l = this.j29("event:touchpinch:event");
                if (!l) {
                    return
                }
                m.stopDefaults();
                l.update(m);
                this.callEvent("touchpinch", l)
            }
        };
        h.win = $mjs(window);
        h.doc = $mjs(document);
        return i
    })();
    (function (h) {
        if (!h) {
            throw "tgdd.360.js not found";
            return
        }
        if (h.FX) {
            return
        }
        var i = h.$;
        h.FX = new h.Class({
            init: function (k, j) {
                this.el = $mjs(k);
                this.options = h.extend(this.options, j);
                this.timer = false
            },
            options: {
                fps: 50,
                duration: 500,
                transition: function (j) {
                    return -(Math.cos(Math.PI * j) - 1) / 2
                },
                onStart: h.$F,
                onComplete: h.$F,
                onBeforeRender: h.$F,
                roundCss: true
            },
            styles: null,
            start: function (j) {
                this.styles = j;
                this.state = 0;
                this.curFrame = 0;
                this.startTime = h.now();
                this.finishTime = this.startTime + this.options.duration;
                if (this.options.duration != 0) {
                    this.timer = this.loop.j24(this).interval(Math.round(1000 / this.options.fps))
                }
                this.options.onStart.call();
                if (this.options.duration == 0) {
                    this.render(1);
                    this.options.onComplete.call()
                }
                return this
            },
            stop: function (j) {
                j = h.defined(j) ? j : false;
                if (this.timer) {
                    clearInterval(this.timer);
                    this.timer = false
                }
                if (j) {
                    this.render(1);
                    this.options.onComplete.j27(10)
                }
                return this
            },
            calc: function (l, k, j) {
                return (k - l) * j + l
            },
            loop: function () {
                var k = h.now();
                if (k >= this.finishTime) {
                    if (this.timer) {
                        clearInterval(this.timer);
                        this.timer = false
                    }
                    this.render(1);
                    this.options.onComplete.j27(10);
                    return this
                }
                var j = this.options.transition((k - this.startTime) / this.options.duration);
                this.render(j)
            },
            render: function (j) {
                var k = {};
                for (var l in this.styles) {
                    if ("opacity" === l) {
                        k[l] = Math.round(this.calc(this.styles[l][0], this.styles[l][1], j) * 100) / 100
                    } else {
                        k[l] = this.calc(this.styles[l][0], this.styles[l][1], j);
                        if (this.options.roundCss) {
                            k[l] = Math.round(k[l])
                        }
                    }
                }
                this.options.onBeforeRender(k);
                this.set(k)
            },
            set: function (j) {
                return this.el.j6(j)
            }
        });
        h.FX.Transition = {
            linear: function (j) {
                return j
            },
            sineIn: function (j) {
                return -(Math.cos(Math.PI * j) - 1) / 2
            },
            sineOut: function (j) {
                return 1 - h.FX.Transition.sineIn(1 - j)
            },
            expoIn: function (j) {
                return Math.pow(2, 8 * (j - 1))
            },
            expoOut: function (j) {
                return 1 - h.FX.Transition.expoIn(1 - j)
            },
            quadIn: function (j) {
                return Math.pow(j, 2)
            },
            quadOut: function (j) {
                return 1 - h.FX.Transition.quadIn(1 - j)
            },
            cubicIn: function (j) {
                return Math.pow(j, 3)
            },
            cubicOut: function (j) {
                return 1 - h.FX.Transition.cubicIn(1 - j)
            },
            backIn: function (k, j) {
                j = j || 1.618;
                return Math.pow(k, 2) * ((j + 1) * k - j)
            },
            backOut: function (k, j) {
                return 1 - h.FX.Transition.backIn(1 - k)
            },
            elasticIn: function (k, j) {
                j = j || [];
                return Math.pow(2, 10 * --k) * Math.cos(20 * k * Math.PI * (j[0] || 1) / 3)
            },
            elasticOut: function (k, j) {
                return 1 - h.FX.Transition.elasticIn(1 - k, j)
            },
            bounceIn: function (l) {
                for (var k = 0, j = 1; 1; k += j, j /= 2) {
                    if (l >= (7 - 4 * k) / 11) {
                        return j * j - Math.pow((11 - 6 * k - 11 * l) / 4, 2)
                    }
                }
            },
            bounceOut: function (j) {
                return 1 - h.FX.Transition.bounceIn(1 - j)
            },
            none: function (j) {
                return 0
            }
        }
    })(g);
    (function (h) {
        if (!h) {
            throw "tgdd.360.js not found";
            return
        }
        if (!h.FX) {
            throw "tgdd.360.js.FX not found";
            return
        }
        if (h.FX.Slide) {
            return
        }
        var i = h.$;
        h.FX.Slide = new h.Class(h.FX, {
            options: {
                mode: "vertical"
            },
            init: function (k, j) {
                this.el = $mjs(k);
                this.options = h.extend(this.$parent.options, this.options);
                this.$parent.init(k, j);
                this.wrapper = this.el.j29("slide:wrapper");
                this.wrapper = this.wrapper || h.$new("DIV").j6(h.extend(this.el.j19s("margin-top", "margin-left", "margin-right", "margin-bottom", "position", "top", "float"), {
                    overflow: "hidden"
                })).enclose(this.el);
                this.el.j30("slide:wrapper", this.wrapper).j6({
                    margin: 0
                })
            },
            vertical: function () {
                this.margin = "margin-top";
                this.layout = "height";
                this.offset = this.el.offsetHeight
            },
            horizontal: function (j) {
                this.margin = "margin-" + (j || "left");
                this.layout = "width";
                this.offset = this.el.offsetWidth
            },
            right: function () {
                this.horizontal()
            },
            left: function () {
                this.horizontal("right")
            },
            start: function (l, o) {
                this[o || this.options.mode]();
                var n = this.el.j5(this.margin).j17(),
                    m = this.wrapper.j5(this.layout).j17(),
                    j = {}, p = {}, k;
                j[this.margin] = [n, 0], j[this.layout] = [0, this.offset], p[this.margin] = [n, -this.offset], p[this.layout] = [m, 0];
                switch (l) {
                    case "in":
                        k = j;
                        break;
                    case "out":
                        k = p;
                        break;
                    case "toggle":
                        k = (0 == m) ? j : p;
                        break
                }
                this.$parent.start(k);
                return this
            },
            set: function (j) {
                this.el.j6Prop(this.margin, j[this.margin]);
                this.wrapper.j6Prop(this.layout, j[this.layout]);
                return this
            },
            slideIn: function (j) {
                return this.start("in", j)
            },
            slideOut: function (j) {
                return this.start("out", j)
            },
            hide: function (k) {
                this[k || this.options.mode]();
                var j = {};
                j[this.layout] = 0, j[this.margin] = -this.offset;
                return this.set(j)
            },
            show: function (k) {
                this[k || this.options.mode]();
                var j = {};
                j[this.layout] = this.offset, j[this.margin] = 0;
                return this.set(j)
            },
            toggle: function (j) {
                return this.start("toggle", j)
            }
        })
    })(g);
    (function (h) {
        if (!h) {
            throw "tgdd.360.js not found";
            return
        }
        if (h.PFX) {
            return
        }
        var i = h.$;
        h.PFX = new h.Class(h.FX, {
            init: function (j, k) {
                this.el_arr = j;
                this.options = h.extend(this.options, k);
                this.timer = false
            },
            start: function (j) {
                this.styles_arr = j;
                this.$parent.start([]);
                return this
            },
            render: function (j) {
                for (var k = 0; k < this.el_arr.length; k++) {
                    this.el = $mjs(this.el_arr[k]);
                    this.styles = this.styles_arr[k];
                    this.$parent.render(j)
                }
            }
        })
    })(g);
    (function (h) {
        if (!h) {
            throw "tgdd.360.js not found";
            return
        }
        if (h.Tooltip) {
            return
        }
        var i = h.$;
        h.Tooltip = function (k, l) {
            var j = this.tooltip = h.$new("div", null, {
                position: "absolute",
                "z-index": 999
            }).j2("MagicToolboxTooltip");
            h.$(k).je1("mouseover", function () {
                j.j32(document.body)
            });
            h.$(k).je1("mouseout", function () {
                j.j33()
            });
            h.$(k).je1("mousemove", function (u) {
                var w = 20,
                    r = h.$(u).j15(),
                    q = j.j7(),
                    n = h.$(window).j7(),
                    v = h.$(window).j10();

                function m(y, o, x) {
                    return (x < (y - o) / 2) ? x : ((x > (y + o) / 2) ? (x - o) : (y - o) / 2)
                }
                j.j6({
                    left: v.x + m(n.width, q.width + 2 * w, r.x - v.x) + w,
                    top: v.y + m(n.height, q.height + 2 * w, r.y - v.y) + w
                })
            });
            this.text(l)
        };
        h.Tooltip.prototype.text = function (j) {
            this.tooltip.firstChild && this.tooltip.removeChild(this.tooltip.firstChild);
            this.tooltip.append(document.createTextNode(j))
        }
    })(g);
    (function (i) {
        if (!i) {
            throw "tgdd.360.js not found";
            return
        }
        if (i.MessageBox) {
            return
        }
        var h = i.$;
        i.Message = function (m, l, k, j) {
            this.hideTimer = null;
            this.messageBox = i.$new("span", null, {
                position: "absolute",
                "z-index": 999,
                visibility: "hidden",
                opacity: 0.8
            }).j2(j || "").j32(k || i.body);
            this.setMessage(m);
            this.show(l)
        };
        i.Message.prototype.show = function (j) {
            this.messageBox.show();
            this.hideTimer = this.hide.j24(this).j27(i.ifndef(j, 5000))
        };
        i.Message.prototype.hide = function (j) {
            clearTimeout(this.hideTimer);
            this.hideTimer = null;
            if (this.messageBox && !this.hideFX) {
                this.hideFX = new g.FX(this.messageBox, {
                    duration: i.ifndef(j, 500),
                    onComplete: function () {
                        this.messageBox.kill();
                        delete this.messageBox;
                        this.hideFX = null
                    }.j24(this)
                }).start({
                    opacity: [this.messageBox.j5("opacity"), 0]
                })
            }
        };
        i.Message.prototype.setMessage = function (j) {
            this.messageBox.firstChild && this.tooltip.removeChild(this.messageBox.firstChild);
            this.messageBox.append(document.createTextNode(j))
        }
    })(g);
    (function (i) {
        if (!i) {
            throw "tgdd.360.js not found";
            return
        }
        var h = i.$;
        g.ImageLoader = new i.Class({
            img: null,
            ready: false,
            options: {
                onload: i.$F,
                onabort: i.$F,
                onerror: i.$F,
                oncomplete: i.$F
            },
            size: null,
            _timer: null,
            _handlers: {
                onload: function (j) {
                    if (j) {
                        h(j).stop()
                    }
                    this._unbind();
                    if (this.ready) {
                        return
                    }
                    this.ready = true;
                    this._cleanup();
                    this.options.onload.j24(null, this).j27(1);
                    this.options.oncomplete.j24(null, this).j27(1)
                },
                onabort: function (j) {
                    if (j) {
                        h(j).stop()
                    }
                    this._unbind();
                    this.ready = false;
                    this._cleanup();
                    this.options.onabort.j24(null, this).j27(1);
                    this.options.oncomplete.j24(null, this).j27(1)
                },
                onerror: function (j) {
                    if (j) {
                        h(j).stop()
                    }
                    this._unbind();
                    this.ready = false;
                    this._cleanup();
                    this.options.onerror.j24(null, this).j27(1);
                    this.options.oncomplete.j24(null, this).j27(1)
                }
            },
            _bind: function () {
                h(["load", "abort", "error"]).j14(function (j) {
                    this.img.je1(j, this._handlers["on" + j].j16(this).j28(1))
                }, this)
            },
            _unbind: function () {
                if (this._timer) {
                    try {
                        clearTimeout(this._timer)
                    } catch (j) { }
                    this._timer = null
                }
                h(["load", "abort", "error"]).j14(function (k) {
                    this.img.je2(k)
                }, this)
            },
            _cleanup: function () {
                this.j7();
                if (this.img.j29("new")) {
                    var j = this.img.parentNode;
                    this.img.j33().j31("new").j6({
                        position: "static",
                        top: "auto"
                    });
                    j.kill()
                }
            },
            init: function (k, j) {
                this.options = i.extend(this.options, j);
                this.img = h(k) || i.$new("img", {}, {
                    "max-width": "none",
                    "max-height": "none"
                }).j32(i.$new("div").j2("magic-temporary-img").j6({
                    position: "absolute",
                    top: -10000,
                    width: 10,
                    height: 10,
                    overflow: "hidden"
                }).j32(i.body)).j30("new", true);
                var l = function () {
                    if (this.isReady()) {
                        this._handlers.onload.call(this)
                    } else {
                        this._handlers.onerror.call(this)
                    }
                    l = null
                }.j24(this);
                this._bind();
                if (!k.src) {
                    this.img.src = k
                } else {
                    if (i.j21.trident900 && i.j21.ieMode < 9) {
                        this.img.onreadystatechange = function () {
                            if (/loaded|complete/.test(this.img.readyState)) {
                                this.img.onreadystatechange = null;
                                l && l()
                            }
                        }.j24(this)
                    }
                    this.img.src = k.src
                }
                this.img && this.img.complete && (this._timer = l.j27(100))
            },
            destroy: function () {
                this._unbind();
                this._cleanup();
                this.ready = false;
                return this
            },
            isReady: function () {
                var j = this.img;
                return (j.naturalWidth) ? (j.naturalWidth > 0) : (j.readyState) ? ("complete" == j.readyState) : j.width > 0
            },
            j7: function () {
                return this.size || (this.size = {
                    width: this.img.naturalWidth || this.img.width,
                    height: this.img.naturalHeight || this.img.height
                })
            }
        })
    })(g);
    g.Options = (function (i) {
        if (!i) {
            throw "tgdd.360.js not found";
            return
        }
        var h = i.$;
        var j = function (k) {
            this.defaults = k;
            this.options = {}
        };
        j.prototype.get = function (k) {
            return i.defined(this.options[k]) ? this.options[k] : this.defaults[k]
        };
        j.prototype.set = function (l, k) {
            l = l.j26();
            if (!l) {
                return
            }
            i.j1(k) === "string" && (k = k.j26());
            if (k === "true") {
                k = true
            }
            if (k === "false") {
                k = false
            }
            if (parseInt(k) == k) {
                k = parseInt(k)
            }
            this.options[l] = k
        };
        j.prototype.fromRel = function (k) {
            var l = this;
            h(k.split(";")).j14(function (m) {
                m = m.split(":");
                l.set(m.shift(), m.join(":"))
            })
        };
        j.prototype.fromJSON = function (l) {
            for (var k in l) {
                if (l.hasOwnProperty(k)) {
                    this.set(k, l[k])
                }
            }
        };
        j.prototype.exists = function (k) {
            return i.defined(this.options[k]) ? true : false
        };
        return j
    }(g));
    f.Element.addEvent__ = f.Element.je1;
    f.Element.je1 = function (k, h) {
        if (k == "mousewheel") {
            f.j21.gecko && (k = "DOMMouseScroll");
            var j = h,
                i = this;
            h = function (l) {
                var m = 0;
                if (l.wheelDelta) {
                    m = l.wheelDelta / 120
                } else {
                    if (l.detail) {
                        m = -l.detail / 3
                    }
                }
                l.delta = Math.round(m);
                j.call(i, l)
            }
        }
        return this.addEvent__(k, h)
    };
    var e = f.$;
    f.me = {
        mousedown: f.j21.touchScreen ? "touchstart" : "mousedown",
        mouseup: f.j21.touchScreen ? "touchend" : "mouseup",
        mousemove: f.j21.touchScreen ? "touchmove" : "mousemove",
        mouseover: "mouseover",
        mouseout: f.j21.touchScreen ? "touchend" : "mouseout",
        click: "click"
    };
    var a = function (m, i) {
        this.o = e(m);
        while (m.firstChild && m.firstChild.tagName !== "IMG") {
            m.removeChild(m.firstChild)
        }
        if (m.firstChild.tagName !== "IMG") {
            throw "Lỗi khi tải hình 360 độ"
        }
        this.oi = m.replaceChild(m.firstChild.cloneNode(false), m.firstChild);
        this._o = new f.Options({
            rows: 1,
            frames: 1,
            columns: 36,
            speed: 50,
            filename: "auto",
            filepath: "auto",
            "large-filename": "auto",
            "large-filepath": "auto",
            "loop-row": false,
            "loop-column": true,
            "start-row": "auto",
            "start-column": "auto",
            "row-increment": 1,
            "column-increment": 1,
            autospin: "once",
            "autospin-start": "load",
            "autospin-stop": "click",
            "autospin-speed": 4000,
            "autospin-direction": "clockwise",
            spin: "drag",
            smoothing: true,
            magnify: true,
            "magnifier-width": "80%",
            "magnifier-shape": "inner",
            fullscreen: true,
            hint: true,
            images: "",
            "large-images": "",
            "initialize-on": "load",
            "mousewheel-step": 3,
            onready: f.$F,
            onstart: f.$F,
            onstop: f.$F
        });
        this.op = e(this._o.get).j24(this._o);
        this._o.fromJSON(f.extend(window.tgdd360Options || {}, tgdd360.options));
        this._o.fromRel(m.getAttribute("data-tgdd360-options") || m.rel);
        this.lang = new f.Options({
            "loading-text": "Đang tải...",
            "hint-text": "Kéo chuột để xoay hình",
            "mobile-hint-text": "Swipe to spin"
        });
        this.lang.fromJSON(f.extend(window.tgdd360Lang || {}, tgdd360.lang));
        this.localString = e(this.lang.get).j24(this.lang);
        this._o.exists("magnifier-size") && this._o.set("magnifier-width", this.op("magnifier-size"));
        if (this._o.exists("magnify-filename") && "auto" !== this.op("magnify-filename")) {
            this._o.set("large-filename", this.op("magnify-filename"))
        }
        if (this._o.exists("magnify-filepath") && "auto" !== this.op("magnify-filepath")) {
            this._o.set("large-filepath", this.op("magnify-filepath"))
        }
        if (this._o.exists("magnifier-images")) {
            this._o.set("large-images", this.op("magnifier-images"))
        }
        this.images = {
            small: e([]),
            large: e([])
        };
        this.isFullScreen = false;
        this.fullScreenSize = {
            width: 0,
            height: 0
        };
        this.fullScreenBox = null;
        this.fullscreenIcon = null;
        this.fullScreenImage = null;
        this.fullScreenResizeCallback = null;
        this.fullScreenFX = null;
        this.fullScreenExitFX = null;
        this.largeImageReady = false;
        this.resizeCallback = null;
        this.boundaries = {
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        };
        this.normalSize = {
            width: 0,
            height: 0
        };
        this.size = {
            width: 0,
            height: 0
        };
        var h = this;

        function l(v, s, q) {
            var r, p = {
                path: s,
                tpl: q.replace(/(\/|\\)/ig, "")
            };
            v = v.split("/");
            q = v.pop().split(".");
            s = v.join("/") + "/";
            r = q.pop();
            p.path = "auto" == p.path ? s : p.path.replace(/\/$/, "") + "/";
            if (p.tpl == "auto") {
                q = q.join(".").split("-");
                var o = q.pop(),
                    u = q.pop();
                if (parseInt(o, 10) != o) {
                    q.push(u);
                    u = true;
                    q.push(o);
                    o = true;
                    q.push("{row}");
                    q.push("{col}")
                } else {
                    if (parseInt(u, 10) != u) {
                        q.push(u);
                        u = false;
                        (!h._o.exists("start-row") || "auto" == h.op("start-row")) && h._o.set("start-row", 1)
                    }
                }
                u && q.push("{row}") && ("auto" == h.op("start-row") && h._o.set("start-row", u.j17()));
                o && q.push("{col}") && ("auto" == h.op("start-column") && h._o.set("start-column", o.j17()));
                q = q.join("-") + "." + r;
                p.tpl = q
            } else {
                if ("auto" == h.op("start-row") || "auto" == h.op("start-column")) {
                    q = q.join(".") + "." + r;
                    var n = q.match(new RegExp(p.tpl.split("{row}").join("(\\d{2})").split("{col}").join("(\\d{2})")));
                    ("auto" === h.op("start-row")) && h._o.set("start-row", (n && n.length > 2) ? n[1].j17() : 1);
                    ("auto" === h.op("start-column")) && h._o.set("start-column", (!n || n.length < 2) ? 1 : n.length > 2 ? n[2].j17() : n[1].j17())
                }
            }
            return p
        }
        function k(o, q) {
            var p = f.$new(o);
            var n = q.split(",");
            e(n).j14(function (r) {
                p.j2(r.j26())
            });
            p.j20({
                position: "absolute",
                top: -10000,
                left: 0,
                visibility: "hidden"
            });
            document.body.appendChild(p);
            (function () {
                this.j33()
            }).j24(p).j27(100)
        }
        var j;
        this.sis = e(e(this.op("images").j26().split(" ")).filter(function (n) {
            return "" != n
        }));
        this.bis = e(e(this.op("large-images").j26().split(" ")).filter(function (n) {
            return "" != n
        }));
        if (i) {
            this._o.options = i
        } else {
            if (!this.sis.length) {
                j = l(m.firstChild.src, this.op("filepath"), this.op("filename"));
                this._o.set("filepath", j.path);
                this._o.set("filename", j.tpl);
                j = l(m.href, this.op("large-filepath"), this.op("large-filename"));
                this._o.set("large-filepath", j.path);
                this._o.set("large-filename", j.tpl)
            }
            this._o.set("columns", Math.floor(this.op("columns") / this.op("column-increment")));
            this._o.set("rows", Math.floor(this.op("rows") / this.op("row-increment")));
            !parseInt(this.op("start-row"), 10) && this._o.set("start-row", 1);
            !parseInt(this.op("start-column"), 10) && this._o.set("start-column", 1);
            this._o.set("start-column", this.op("start-column") - 1);
            this._o.set("start-row", this.op("start-row") - 1);
            !parseInt(this.op("mousewheel-step"), 10) && this._o.set("mousewheel-step", 3);
            this._o.set("autospin-start", this.op("autospin-start").split(","));
            (f.j21.touchScreen && "hover" === this.op("autospin-stop")) && this._o.set("autospin-stop", "click");
            ("infinite" === this.op("autospin") && "hover" === this.op("autospin-stop")) && this._o.set("hint", false);
            !this._o.exists("hint") && ("infinite" === this.op("autospin") && "click" === this.op("autospin-stop") && e(this.op("autospin-start")).contains("click")) && this._o.set("hint", false);
            this._o.exists("loading-text") && this.lang.set("loading-text", this.op("loading-text"));
            ("string" == f.j1(this.op("onready"))) && ("function" == f.j1(window[this.op("onready")])) && this._o.set("onready", window[this.op("onready")])
        }
        this.o.je1("click", function (n) {
            n.stop()
        }).je1("dragstart", function (n) {
            n.stop()
        }).j6({
            "-webkit-user-select": "none",
            "-webkit-touch-callout": "none",
            "-webkit-tap-highlight-color": "transparent"
        });
        if (this.op("hint")) {
            k("span", "tgdd360-hint-side")
        }
        k("div", "tgdd360-progress-bar-state");
        k("div", "tgdd360-wait");
        if (this.op("fullscreen")) {
            k("div", "tgdd360-button,fullscreen")
        }
        new f.ImageLoader(m.firstChild, {
            onload: e(function (n) {
                var p = false,
                    o = e(function () {
                        if (!p) {
                            p = true;
                            e(this.preInit).call(this)
                        }
                    }).j24(this);
                switch (this.op("initialize-on")) {
                    case "hover":
                        this.o.je1("mouseover", o);
                        break;
                    case "click":
                        this.o.je1("click", o);
                        break;
                    default:
                        o()
                }
            }).j24(this)
        })
    };
    a.prototype.prepareUrl = function (j, h, i) {
        i = i === true ? "large-" : "";
        if (this.sis.length) {
            if (i && !this.bis.length) {
                return ""
            }
            return this[(i) ? "bis" : "sis"][(j - 1) * this.op("columns") + h - 1]
        } (j = 1 + (j - 1) * this.op("row-increment")) < 10 && (j = "" + j);
        (h = 1 + (h - 1) * this.op("column-increment")) < 10 && (h = "" + h);
        return this.op(i + "filepath") + this.op(i + "filename").split("{row}").join(j).split("{col}").join(h)
    };
    a.prototype.preloadImages = function (k, i) {
        var n = this.op("columns"),
            j = this.op("rows"),
            h, o, m = j * n / this.op("frames");
        k || (k = "small");
        for (o = 1; o <= j; o++) {
            this.images[k].push([]);
            for (h = 1; h <= n; h++) {
                this.images[k][o - 1].push("");
                new f.ImageLoader(this.prepareUrl(o, h, "large" === k), {
                    onload: e(function (l, q, p) {
                        this.images[k][q - 1][l - 1] = p.img;
                        m--;
                        i && i(m)
                    }).j24(this, h, o)
                })
            }
        }
    };
    a.prototype.preInit = function (j) {
        if (!j && (this.op("fullscreen") || this.op("magnify"))) {
            new f.ImageLoader(this.prepareUrl(1, 1, true), {
                onload: e(function (n) {
                    this.fullScreenSize = n.j7()
                }).j24(this),
                onerror: e(function (n) {
                    this._o.set("fullscreen", false);
                    this._o.set("magnify", false)
                }).j24(this),
                oncomplete: e(function (n) {
                    this.preInit(true)
                }).j24(this)
            });
            return
        }
        this.normalSize = e(this.o.firstChild).j7();
        this.size = this.normalSize;
        if (0 == this.size.height) {
            this.preInit.j24(this).j27(500);
            return
        }
        this.wrapper = f.$new("div").j6(this.size).j6({
            display: "block" == this.o.j5("display") ? "block" : "inline-block",
            overflow: "hidden",
            position: "relative"
        }).enclose(this.o.j6({
            display: "block" == this.o.j5("display") ? "block" : "inline-block",
            overflow: "hidden",
            position: "relative",
            "text-decoration": "none",
            color: "#000",
            height: "100%"
        }));
        this.o.firstChild.j6({
            width: "100%"
        });
        this.boundaries = this.o.j9();
        this.resizeCallback = function () {
            this.boundaries = this.wrapper.j9()
        }.j24(this);
        e(window).je1("resize", this.resizeCallback);
        if (!f.j21.touchScreen) {
            this.o.j2("desktop")
        }
        if (f.j21.ieMode) {
            this.o.j2("magic-for-ie" + f.j21.ieMode)
        }
        var i, k, m;
        this.o.append(i = f.$new("DIV", null, {
            position: "absolute",
            cursor: "default"
        }).append(f.$new("DIV").append(e(f.doc.createTextNode(this.localString("loading-text")))).append(f.$new("DIV").append(f.$new("DIV").j2("bar").append(k = f.$new("DIV").j2("state").j6({
            width: 0
        }))))).j2("progress"));
        m = i.j7();
        i.j6({
            top: (this.size.height - m.height) / 2 + "px",
            left: (this.size.width - m.width) / 2 + "px"
        });
        var l = 0,
            h = parseFloat(m.width) / parseFloat(this.op("rows") * (this.op("columns") / this.op("frames")));
        this.preloadImages("small", function (n) {
            k.j6Prop("width", l += h);
            if (n == 0) {
                new f.FX(i, {
                    onComplete: function () {
                        i.j33()
                    }
                }).start({
                    opacity: [i.j5("opacity"), 0]
                });
                this.init()
            }
        }.j24(this))
    };
    a.prototype.init = function () {
        this.C = {
            row: 1,
            col: 1,
            tmp: {
                row: 1,
                col: 1
            }
        };
        this.jump(this.op("start-row"), this.op("start-column"));
        var p = {
            x: 0,
            y: 0
        };
        var m = {
            x: 0,
            y: 0
        };
        var l = this;
        var v = {
            x: Math.floor(this.size.width / this.op("columns") / Math.pow(this.op("speed") / 50, 2)),
            y: Math.floor(this.size.height / this.op("rows") / Math.pow(this.op("speed") / 50, 2))
        };
        var s = false;
        var q = false;
        var u = false,
            w = false;
        this._A = {
            invoked: false,
            infinite: ("infinite" == this.op("autospin")),
            cancelable: ("never" != this.op("autospin-stop")),
            timer: false,
            maxFrames: (function (x, y) {
                switch (x) {
                    case "once":
                        return 1 * y;
                    case "twice":
                        return 2 * y;
                    case "infinite":
                        return Number.MAX_VALUE;
                    default:
                        return 0
                }
            })(this.op("autospin"), this.op("columns")),
            frames: 0,
            fn: (function (y, x) {
                this.jump(this.C.row, this.C.col + x);
                (--this._A.frames > 0) && (this._A.timer = this._A.fn.j27(y))
            }).j24(this, this.op("autospin-speed") / this.op("columns"), ("anticlockwise" == this.op("autospin-direction") ? -1 : 1)),
            play: function (x) {
                this.frames = x || this.maxFrames;
                clearTimeout(this.timer);
                if (this.frames > 0) {
                    this.timer = this.fn.j27(1)
                }
            },
            pause: function () {
                this.timer && clearTimeout(this.timer);
                this.frames = 0
            }
        };
        this.o.j6({
            outline: "none"
        });
        this._A.cancelable && e(l.op("spin") == "drag" ? document : this.o).je1(f.me.mousemove, this.mMoveEvent = function (C) {
            if ((/touch/i).test(C.type) && C.touches.length > 1) {
                return true
            }
            if (q || w) {
                if (!w) {
                    i(C);
                    s = true
                } else {
                    return
                }
            }
            var B = C.j15();
            var A = B.x - p.x,
                E = B.y - p.y,
                z = A > 0 ? Math.floor(A / v.x) : Math.ceil(A / v.x),
                D = E > 0 ? Math.floor(E / v.y) : Math.ceil(E / v.y);
            if (l.op("spin") == "hover" || l.op("spin") == "drag" && s) {
                u = true;
                if (Math.abs(A) >= v.x) {
                    p.x = p.x + z * v.x;
                    l.jump(l.C.row, l.C.col + (0 - z))
                }
                if (Math.abs(E) >= v.y) {
                    p.y = p.y + D * v.y;
                    l.jump(l.C.row + D, l.C.col)
                }
            }
            return false
        });
        this._A.cancelable && !f.j21.touchScreen && this.o.je1("mouseover", function (x) {
            if (q || w) {
                q && l.magnifier.div.show() && r(x);
                return
            }
            if (l._A.frames > 0 && "hover" == l.op("autospin-stop")) {
                l._A.pause()
            } else {
                !l._A.invoked && e(l.op("autospin-start")).contains("hover") && (l._A.invoked = !l._A.infinite) && l._A.play()
            }
            p = x.j15();
            return false
        });
        this._A.cancelable && !f.j21.touchScreen && this.o.je1("mouseout", function (x) {
            if (l.o.hasChild(x.getRelated())) {
                return
            }
            if (l._A.infinite && "hover" == l.op("autospin-stop")) {
                q && i(x);
                l._A.play()
            } else {
                q && x.stop() && i(x)
            }
            return false
        });
        var o = {
            date: false
        };
        this._A.cancelable && this.o.je1(f.me.mousedown, function (x) {
            if (3 == x.getButton()) {
                return true
            }
            if (l.hintBox) {
                l.hideHintBox()
            }
            if ((/touch/i).test(x.type) && x.touches.length > 1) {
                return true
            }
            m = x.j15();
            m.autospinStopped = false;
            if (q) {
                l.magnifier.delta.x = !f.j21.touchScreen ? 0 : m.x - l.magnifier.pos.x - l.boundaries.left;
                l.magnifier.delta.y = !f.j21.touchScreen ? 0 : m.y - l.magnifier.pos.y - l.boundaries.top;
                l.magnifier.ddx = l.magnifier.pos.x;
                l.magnifier.ddy = l.magnifier.pos.y
            }
            o.spos = x.j15();
            o.date = new Date();
            l.op("spin") == "drag" && (p = x.j15());
            if (q || w) {
                !f.j21.touchScreen && (w = false);
                return
            }
            x.stop();
            if (l._A.frames > 0 && "click" == l.op("autospin-stop")) {
                m.autospinStopped = true;
                l._A.pause()
            }
            s = true;
            u = false;
            l.op("spin") == "drag" && (p = x.j15());
            return false
        });
        this._A.cancelable && e(document).je1(f.me.mouseup, this.mUpEvent = function (x) {
            if (3 == x.getButton()) {
                return true
            }
            if (q || w || !s) {
                return
            }
            l._checkDragFrames(o, x.j15(), p, v);
            s = false
        });
        this._A.cancelable && this.o.je1(f.me.mouseup, function (y) {
            var x = y.j15();
            if (0 == Math.abs(x.x - m.x) && 0 == Math.abs(x.y - m.y)) {
                if (!q && !w) {
                    if (m.autospinStopped) {
                        return
                    }
                    if (!l._A.invoked && l._A.frames < 1 && e(l.op("autospin-start")).contains("click")) {
                        l._A.invoked = !l._A.infinite;
                        l._A.play();
                        return
                    }
                }
                if (l.op("magnify")) {
                    u = false;
                    i(y)
                }
                return
            }
            if (q || w) {
                return
            }
            l._checkDragFrames(o, y.j15(), p, v);
            s = false;
            return false
        });
        this._A.cancelable && this.o.je1("mousewheel", function (x) {
            if (q || w || l._A.frames > 0) {
                return
            }
            e(x).stop();
            l.jump(l.C.row, l.C.col + l.op("mousewheel-step") * x.delta, true, 200)
        });
        if (this._A.cancelable && !("infinite" == this.op("autospin") && e(this.op("autospin-start")).contains("click")) && this.op("magnify")) {
            q = false;
            if ("inner" != this.op("magnifier-shape")) {
                var h = "" + this.op("magnifier-width");
                if (h.match(/\%$/i)) {
                    h = Math.round(this.size.width * parseInt(h) / 100)
                } else {
                    h = parseInt(h)
                }
            }
            this.o.j2("zoom-in");
            this.magnifier = {
                div: f.$new("div", null, {
                    position: "absolute",
                    "z-index": 10,
                    left: 0,
                    top: 0,
                    width: (h || this.size.width) + "px",
                    height: (h || this.size.height) + "px",
                    "background-repeat": "no-repeat",
                    "border-radius": ("circle" != l.op("magnifier-shape")) ? 0 : h / 2
                }),
                ratio: {
                    x: 0,
                    y: 0
                },
                pos: {
                    x: 0,
                    y: 0
                },
                delta: {
                    x: 0,
                    y: 0
                },
                size: {
                    width: (h || this.size.width),
                    height: (h || this.size.width)
                },
                ddx: 0,
                ddy: 0,
                fadeFX: null,
                moveTimer: null,
                start: function (x, y) {
                    this.ratio.x || (this.ratio.x = x.j7().width / l.size.width);
                    this.ratio.y || (this.ratio.y = x.j7().height / l.size.height);
                    q = true;
                    s = false;
                    if ("inner" == l.op("magnifier-shape")) {
                        this.size = x.j7();
                        this.div.j6({
                            width: this.size.width,
                            height: this.size.height
                        })
                    }
                    this.div.j6Prop("background-image", "url('" + x.img.src + "')");
                    this.div.j23(0);
                    l.o.j3("zoom-in");
                    l.o.append(this.div);
                    r(null, y);
                    this.fadeFX.stop();
                    this.fadeFX.options.duration = 400;
                    this.fadeFX.options.onComplete = f.$F;
                    this.fadeFX.start({
                        opacity: [0, 1]
                    });
                    k && k.toggle(false)
                },
                stop: function () {
                    q = false;
                    w = false;
                    this.fadeFX.stop();
                    this.fadeFX.options.onComplete = function () {
                        l.magnifier.div.j33();
                        l.magnifier.pos = {
                            x: 0,
                            y: 0
                        };
                        l.magnifier.delta = {
                            x: 0,
                            y: 0
                        };
                        l.magnifier.ddx = 0, l.magnifier.ddy = 0;
                        l.o.j2("zoom-in")
                    };
                    this.fadeFX.options.duration = 200;
                    this.fadeFX.start({
                        opacity: [this.fadeFX.el.j5("opacity"), 0]
                    })
                },
                move: function () {
                    var z, G, C, A, D, B, F, E;
                    if ("inner" != l.op("magnifier-shape")) {
                        z = this.x;
                        G = this.y;
                        this.moveTimer = null
                    } else {
                        C = Math.ceil((this.x - this.ddx) * 0.4);
                        A = Math.ceil((this.y - this.ddy) * 0.4);
                        if (!C && !A) {
                            this.moveTimer = null;
                            return
                        }
                        this.ddx += C;
                        this.ddy += A;
                        z = this.pos.x + C;
                        G = this.pos.y + A;
                        (z > l.size.width) && (z = l.size.width);
                        (G > l.size.height) && (G = l.size.height);
                        z < 0 && (z = 0);
                        G < 0 && (G = 0);
                        this.pos = {
                            x: z,
                            y: G
                        };
                        if (f.j21.touchScreen && "inner" == l.op("magnifier-shape")) {
                            z = l.size.width - z;
                            G = l.size.height - G
                        }
                    }
                    D = z - this.size.width / 2;
                    B = G - this.size.height / 2;
                    F = Math.round(0 - z * this.ratio.x + (this.size.width / 2));
                    E = Math.round(0 - G * this.ratio.y + (this.size.height / 2));
                    if ("inner" == l.op("magnifier-shape")) {
                        D = (D < l.size.width - this.size.width) ? l.size.width - this.size.width : (D > 0) ? 0 : D;
                        B = (B < l.size.height - this.size.height) ? l.size.height - this.size.height : (B > 0) ? 0 : B;
                        if (F < 0 && F < l.size.width - this.size.width) {
                            F = l.size.width - this.size.width
                        }
                        if (F > 0 && F > this.size.width - l.size.width) {
                            F = this.size.width - l.size.width
                        }
                        if (E < 0 && E < l.size.height - this.size.height) {
                            E = l.size.height - this.size.height
                        }
                        if (E > 0 && E > this.size.height - l.size.height) {
                            E = this.size.height - l.size.height
                        }
                    }
                    q && this.div.j6({
                        left: D,
                        top: B,
                        "background-position": F + "px " + E + "px"
                    });
                    if (this.moveTimer) {
                        this.moveTimer = setTimeout(this.moveBind, 40)
                    }
                }
            };
            this.magnifier.fadeFX = new f.FX(this.magnifier.div);
            this.magnifier.moveBind = this.magnifier.move.j24(this.magnifier);
            this.magnifier.div.j2("magnifier").j2(this.op("magnifier-shape"));
            if ("inner" != this.op("magnifier-shape")) {
                l.magnifier.div.je1("mousewheel", function (z) {
                    e(z).stop();
                    var y = 10;
                    y = (100 + y * Math.abs(z.delta)) / 100;
                    if (z.delta < 0) {
                        y = 1 / y
                    }
                    l.magnifier.size = this.j7();
                    var x = Math.round(l.magnifier.size.width * y);
                    this.j6({
                        width: x,
                        height: x,
                        "border-radius": ("circle" != l.op("magnifier-shape")) ? 0 : x / 2
                    });
                    r(z)
                })
            }
            var k = this.loader = f.$new("div").j2("tgdd360-wait");
            k.toggle = function (x) {
                if (x) {
                    e(l.o.firstChild).j23(0.5);
                    l.o.append(k)
                } else {
                    e(l.o.firstChild).j23(1);
                    (l.o === this.parentNode) && l.o.removeChild(k)
                }
            };

            function i(B, x) {
                var A, z, y;
                if (u) {
                    return
                }
                if (l.isFullScreen) {
                    return
                }
                if (f.j1(B) == "event") {
                    if ((y = e(B.getTarget())).j13("icon")) {
                        if (q && y.j13("magnify")) {
                            return
                        }
                        if (!q && y.j13("spin")) {
                            return
                        }
                    }
                    B.stop()
                }
                if (q && x) {
                    return
                }
                if (!q && false == x) {
                    return
                }
                if (q && !x) {
                    l.magnifier.stop();
                    y && y.j13("spin") && l._A.infinite && l._A.play()
                } else {
                    A = l.checkJumpRowCol(l.C.row, l.C.col);
                    z = (f.j1(B) == "event") ? B.j15() : B;
                    k && k.toggle(true);
                    w = true;
                    s = false;
                    l._A.pause();
                    new f.ImageLoader(l.prepareUrl(A.row + 1, A.col + 1, true), {
                        onload: function (C) {
                            l.magnifier.start(C, z)
                        },
                        onerror: function () {
                            w = false;
                            k && k.toggle(false)
                        }
                    })
                }
                return false
            }
            this._showM = i.j24(this, {
                x: l.boundaries.left + (l.boundaries.right - l.boundaries.left) / 2,
                y: l.boundaries.top + (l.boundaries.bottom - l.boundaries.top) / 2
            }, true);
            this._hideM = i.j24(this, null, false);

            function r(y, x) {
                if (!q) {
                    return
                }
                x = x || y.j15();
                if (x.x > l.boundaries.right || x.x < l.boundaries.left || x.y > l.boundaries.bottom || x.y < l.boundaries.top) {
                    return
                }
                if (y && f.j21.touchScreen) {
                    y.stop()
                }
                if (f.j21.touchScreen && "inner" == l.op("magnifier-shape")) {
                    x.x -= l.magnifier.delta.x;
                    x.y -= l.magnifier.delta.y;
                    if (!y) {
                        x.x = l.boundaries.right - x.x + l.boundaries.left;
                        x.y = l.boundaries.bottom - x.y + l.boundaries.top
                    }
                }
                l.magnifier.x = x.x - l.boundaries.left;
                l.magnifier.y = x.y - l.boundaries.top;
                (null == l.magnifier.moveTimer) && (l.magnifier.moveTimer = setTimeout(l.magnifier.moveBind, 10))
            }
            this.o.je1(f.me.mousemove, r)
        }
        if (this._A.cancelable && this.op("fullscreen")) {
            this.fullscreenIcon = f.$new("div", null, {}).j2("tgdd360-button").j2("fullscreen").je1(f.me.mousedown, function (x) {
                x.stop()
            }).je1(f.me.mouseup, function (x) {
                if (3 == x.getButton()) {
                    return true
                }
                x.stop();
                this.enterFullscreen()
            }.j16(this)).j32(this.o)
        } (this._A.maxFrames > 0) && e(this.op("autospin-start")).contains("load") && this._A.play();
        if (this.op("hint") && this._A.cancelable) {
            this.setupHint()
        }
        function j(A, y, B) {
            for (B = 0, y = ""; B < A.length; y += String.fromCharCode(14 ^ A.charCodeAt(B++))) { }
            return y
        }
        var n, j;
        n = f.$new("div", null, {
            color: "red",
            position: "absolute",
            bottom: 0,
            right: 0,
            "font-size": "0.8em",
            "z-index": 100
        }).j32(this.o);
        //n.changeContent(j("Wa{.o|k.{}g`i.z|gob.xk|}ga`.ah.Coigm.=8>(z|ojk5"));
        ("function" == f.j1(this.op("onready"))) && this.op("onready").call(null, this.o)
    };
    a.prototype._checkDragFrames = function (i, h, j, n) {
        if (!this.op("smoothing") || !i.date) {
            return
        }
        var m = new Date() - i.date;
        i.date = false;
        var p = h.x - i.spos.x;
        var o = h.y - i.spos.y;
        var k = 0.001;

        function l(w) {
            var x = w == "x" ? p : o;
            var q = x / m;
            var u = (q / 2) * (q / k);
            var s;
            if (w == "x") {
                s = Math.abs(x + (x > 0 ? u : (0 - u))) - Math.abs(i.spos.x - j.x);
                s = x > 0 ? (0 - s) : s
            } else {
                s = u - (i.spos.y - j.y)
            }
            s /= n[w];
            return s > 0 ? Math.floor(s) : Math.ceil(s)
        }
        this.jump(this.C.row + l("y"), this.C.col + l("x"), true, Math.abs(Math.floor(p / m / k)))
    };
    a.prototype.jump = function (k, i, h, j) {
        this.C.row = k;
        this.C.col = i;
        this.fx && this.fx.stop();
        if (!h) {
            this.C.tmp.row = k;
            this.C.tmp.col = i;
            this.jump_(k, i);
            return
        }
        this.fx = new f.FX(this.o, {
            duration: j,
            transition: f.FX.Transition.quadOut,
            onStart: function () {
                b = new Date()
            },
            onBeforeRender: (function (l) {
                this.C.tmp.col = l.col;
                this.C.tmp.row = l.row;
                this.jump_(l.row, l.col)
            }).j24(this)
        }).start({
            col: [this.C.tmp.col, i],
            row: [this.C.tmp.row, k]
        })
    };
    a.prototype.checkJumpRowCol = function (i, h) {
        if (!this.op("loop-row")) {
            i > (this.op("rows") - 1) && (i = this.op("rows") - 1);
            i < 0 && (i = 0)
        }
        if (!this.op("loop-column")) {
            h > (this.op("columns") - 1) && (h = this.op("columns") - 1);
            h < 0 && (h = 0)
        }
        i %= this.op("rows");
        h %= this.op("columns");
        i < 0 && (i += this.op("rows"));
        h < 0 && (h += this.op("columns"));
        return {
            row: i,
            col: h
        }
    };
    a.prototype.jump_ = function (k, h) {
        var i = this.checkJumpRowCol(k, h);
        k = i.row;
        h = i.col;
        (!this.op("loop-row")) && (this.C.row = i.row);
        (!this.op("loop-column")) && (this.C.col = i.col);
        var j = this.images[this.isFullScreen ? "large" : "small"][k][Math.floor(h / this.op("frames"))];
        this.o.firstChild.src = j.src;
        this.o.scrollLeft = h % this.op("frames") * this.size.width
    };
    a.prototype.spin = function (h) {
        try {
            (this._hideM) && this._hideM();
            (h || null) ? this.jump(this.C.row, this.C.col + h, true, 100 * (Math.log(Math.abs(h) / Math.log(2)))) : this._A.play(Number.MAX_VALUE)
        }
        catch (err) { }
    };
    a.prototype.magnify = function (i) {
        (f.defined(i) ? i : true) ? this._showM && this._showM() : this._hideM && this._hideM()
    };
    a.prototype.stop = function () {
        this._A && this._A.frames > 0 && this._A.pause();
        if (this.isFullScreen) {
            this.o.firstChild.j6({});
            this.o.j6({
                width: "",
                height: "100%",
                "max-height": "",
                "max-width": ""
            }).j32(this.wrapper)
        }
        if (this.fullScreenBox) {
            if (this.fullScreenScrollCallback) {
                e(window).je2("scroll", this.fullScreenScrollCallback)
            }
            if (this.fullScreenScrollCallbackTimer) {
                clearTimeout(this.fullScreenScrollCallbackTimer)
            }
            if (this.fullScreenResizeCallback) {
                e(window).je2("resize", this.fullScreenResizeCallback)
            }
            this.fullScreenBox.kill();
            this.fullScreenBox = null
        }
        if (this.magnifier && this.magnifier.div) {
            this.magnifier.div.kill();
            this.magnifier = null
        }
        if (this.fullscreenIcon) {
            this.fullscreenIcon.kill();
            this.fullscreenIcon = null
        }
        e(window).je2("resize", this.resizeCallback);
        this.o.je3();
        while (this.o.firstChild != this.o.lastChild) {
            this.o.removeChild(this.o.lastChild)
        }
        if (this.op("spin") == "drag") {
            e(document).je2("mousemove", this.mMoveEvent)
        }
        e(document).je2("mousemove", this.mUpEvent);
        this.o.replaceChild(this.oi, this.o.firstChild);
        this.o.j3("zoom-in");
        this.wrapper.parentNode.replaceChild(this.o, this.wrapper);
        this.wrapper.kill();
        this.wrapper = null
    };
    a.prototype.enterFullscreen = function () {
        if (!this._A.cancelable || !this.op("fullscreen")) {
            return
        }
        var j = e(document).j7(),
            h = e(window).j10(),
            i = this.checkJumpRowCol(this.C.row, this.C.col);
        if (!this.fullScreenBox) {
            this.fullScreenBox = f.$new("div", {}, {
                display: "block",
                overflow: "hidden",
                position: "absolute",
                zIndex: 20000,
                "text-align": "center",
                "vertical-align": "middle",
                opacity: 1,
                width: this.size.width,
                height: this.size.height,
                top: this.boundaries.top,
                left: this.boundaries.left
            }).j2("tgdd360-fullscreen");
            if (!f.j21.touchScreen) {
                this.fullScreenBox.j2("desktop")
            }
            if (f.j21.ieMode) {
                this.fullScreenBox.j2("magic-for-ie" + f.j21.ieMode)
            }
            if (f.j21.ieMode && f.j21.ieMode < 8) {
                this.fullScreenBox.append(f.$new("span", null, {
                    display: "inline-block",
                    height: "100%",
                    width: 1,
                    "vertical-align": "middle"
                }))
            }
            this.fullScreenResizeCallback = function () {
                var k, m, n = e(document).j7(),
                    l = this.fullScreenSize.width / this.fullScreenSize.height;
                if (f.j21.trident && f.j21.backCompat) {
                    this.fullScreenBox.j6({
                        width: n.width,
                        height: n.height
                    })
                }
                k = Math.min(this.fullScreenSize.width, n.width * 0.98);
                m = Math.min(this.fullScreenSize.height, n.height * 0.98);
                if (k / m > l) {
                    k = m * l
                } else {
                    if (k / m < l) {
                        m = k / l
                    }
                }
                this.o.j6Prop("width", Math.ceil(k));
                this.size = this.o.j7()
            }.j24(this);
            if (f.j21.trident && f.j21.backCompat) {
                this.fullScreenScrollCallback = function () {
                    var k = e(window).j10(),
                        l = this.fullScreenBox.j8();
                    this.fullScreenScrollCallbackTimer && clearTimeout(this.fullScreenScrollCallbackTimer);
                    this.fullScreenScrollCallbackTimer = setTimeout(function () {
                        new f.FX(this.fullScreenBox, {
                            duration: 250
                        }).start({
                            top: [l.top, k.y],
                            left: [l.left, k.x]
                        })
                    }.j24(this), 300)
                }.j24(this)
            }
        }
        this.fullScreenImage && (this.fullScreenImage.src = this.o.firstChild.src) || (this.fullScreenImage = e(this.o.firstChild.cloneNode(false)));
        if (j.width / j.height > this.fullScreenSize.width / this.fullScreenSize.height) {
            this.fullScreenImage.j6({
                width: "auto",
                height: "98%",
                "max-height": this.fullScreenSize.height,
                display: "inline-block",
                "vertical-align": "middle"
            })
        } else {
            this.fullScreenImage.j6({
                width: "98%",
                "max-width": this.fullScreenSize.width,
                height: "auto",
                display: "inline-block",
                "vertical-align": "middle"
            })
        }
        this.fullScreenBox.j32(f.body).append(this.fullScreenImage).show();
        g.j21.features.fullScreen && this.fullScreenBox.j23(1);
        g.j21.fullScreen.request(this.fullScreenBox, {
            onEnter: this.onEnteredFullScreen.j24(this),
            onExit: this.onExitFullScreen.j24(this),
            fallback: function () {
                this.fullScreenFX || (this.fullScreenFX = new f.FX(this.fullScreenBox, {
                    duration: 1000,
                    transition: f.FX.Transition.expoOut,
                    onStart: (function () {
                        this.fullScreenBox.j6({
                            width: this.size.width,
                            height: this.size.height,
                            top: this.boundaries.top,
                            left: this.boundaries.left
                        }).j32(f.body)
                    }).j24(this),
                    onComplete: (function () {
                        this.onEnteredFullScreen(true)
                    }).j24(this)
                }));
                this.fullScreenFX.start({
                    width: [this.size.width, j.width],
                    height: [this.size.height, j.height],
                    top: [this.boundaries.top, 0 + h.y],
                    left: [this.boundaries.left, 0 + h.x],
                    opacity: [0, 1]
                })
            }.j24(this)
        })
    };
    a.prototype.onEnteredFullScreen = function (i) {
        var j;
        (i && !this.isFullScreen && !(f.j21.trident && f.j21.backCompat)) && this.fullScreenBox.j6({
            display: "block",
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            width: "auto",
            height: "auto"
        });
        this.isFullScreen = true;
        this.size = this.fullScreenSize;
        if (!this.largeImageReady) {
            j = f.$new("div").j2("tgdd360-wait").j32(this.fullScreenBox);
            this.fullScreenImage.j23(0.5);
            this.preloadImages("large", function (k) {
                if (k == 0) {
                    j && j.j33() && delete j;
                    this.largeImageReady = true;
                    this.onEnteredFullScreen(i)
                }
            }.j24(this));
            return
        }
        this.jump_(this.C.row, this.C.col);
        this.o.firstChild.j6({
            width: "100%",
            height: "auto",
            "max-width": this.fullScreenSize.width,
            "max-height": this.fullScreenSize.height
        });
        this.fullScreenBox.replaceChild(this.o.j6({
            width: this.fullScreenImage.j7().width,
            height: "auto",
            "max-width": this.fullScreenSize.width,
            "max-height": this.fullScreenSize.height
        }), this.fullScreenImage);
        this.size = this.o.j7();
        e(window).je1("resize", this.fullScreenResizeCallback);
        if (this.fullScreenScrollCallback) {
            e(window).je1("scroll", this.fullScreenScrollCallback)
        }
        this.leaveFSButton || (this.leaveFSButton = f.$new("div", {}, {
            zIndex: 20
        }).j2("tgdd360-button").j2("fullscreen-exit").j32(this.fullScreenBox).je1(f.me.mouseup, function (k) {
            if (3 == k.getButton()) {
                return true
            }
            k.stop();
            this.exitFullscreen()
        }.j16(this)));
        this.leaveFSButton.show();
        if (i) {
            var h = function (k) {
                if (k.keyCode == 27) {
                    f.doc.je2("keydown", h);
                    this.exitFullscreen()
                }
            }.j16(this);
            f.doc.je1("keydown", h);
            !f.j21.touchScreen && (this.leaveFSMessage = new f.Message("Press ESC key to leave full-screen", 4000, this.fullScreenBox, "tgdd360-message"))
        }
    };
    a.prototype.exitFullscreen = function () {
        var i = e(document).j7(),
            h = e(document).j10();
        this.leaveFSMessage && this.leaveFSMessage.hide(0);
        this.fullScreenImage.src = this.o.firstChild.src;
        if (i.width / i.height > this.fullScreenSize.width / this.fullScreenSize.height) {
            this.fullScreenImage.j6({
                width: "auto",
                height: "98%",
                "max-height": this.fullScreenSize.height,
                display: "inline-block",
                "vertical-align": "middle"
            })
        } else {
            this.fullScreenImage.j6({
                width: "98%",
                "max-width": this.fullScreenSize.width,
                height: "auto",
                display: "inline-block",
                "vertical-align": "middle"
            })
        }
        this.fullScreenBox.replaceChild(this.fullScreenImage, this.o);
        if (g.j21.fullScreen.capable && g.j21.fullScreen.enabled()) {
            g.j21.fullScreen.cancel()
        } else {
            this.o.j6({
                width: "",
                height: "100%",
                "max-height": "",
                "max-width": "100%"
            }).j32(this.wrapper);
            this.leaveFSButton.hide();
            this.fullScreenExitFX || (this.fullScreenExitFX = new f.FX(this.fullScreenBox, {
                duration: 1500,
                transition: f.FX.Transition.expoOut,
                onStart: (function () {
                    this.fullScreenBox.j6({
                        position: "absolute"
                    }).j32(f.body)
                }).j24(this),
                onComplete: (function () {
                    this.onExitFullScreen(true)
                }).j24(this)
            }));
            this.fullScreenExitFX.start({
                width: [i.width, this.normalSize.width],
                height: [i.height, this.normalSize.height],
                top: [0 + h.y, this.boundaries.top],
                left: [0 + h.x, this.boundaries.left],
                opacity: [1, 0]
            })
        }
    };
    a.prototype.onExitFullScreen = function (h) {
        if (!this.fullScreenBox) {
            return
        }
        if (!h) {
            this.o.j6({
                width: "",
                height: "100%",
                "max-height": "",
                "max-width": "100%"
            }).j32(this.wrapper);
            this.leaveFSButton.hide()
        }
        this.size = this.normalSize;
        e(window).je2("resize", this.fullScreenResizeCallback);
        if (this.fullScreenScrollCallback) {
            e(window).je2("scroll", this.fullScreenScrollCallback)
        }
        this.isFullScreen = false;
        this.fullScreenBox.hide();
        this.jump_(this.C.row, this.C.col)
    };
    a.prototype.setupHint = function () {
        this.hintBox = f.$new("span", null, {
            position: "absolute",
            "z-index": 999,
            visibility: "hidden"
        }).j2("tgdd360-hint").j32(this.o);
        this.hintBox.j6Prop("margin-left", -(parseInt(this.hintBox.j5("width"), 10) / 2));
        f.$new("span").j2("hint-side").j2("right").j32(this.hintBox);
        f.$new("span").j2("hint-side").j2("left").j32(this.hintBox);
        this.hintBox.append(f.$new("span", null, {
            display: "inline-block",
            height: "100%",
            width: 1,
            "vertical-align": "middle"
        }));
        f.$new("span").j6({
            position: "relative",
            margin: "auto",
            display: "inline-block",
            "vertical-align": "middle"
        }).j2("hint-text").append(document.createTextNode(this.localString(f.j21.touchScreen ? "mobile-hint-text" : "hint-text"))).j32(this.hintBox);
        if (f.j21.ieMode == 5) {
            this.hintBox.j6({
                height: this.hintBox.j7().height
            })
        }
        this.hintBox.show();
        var h = function (j) {
            this.o.je2("mousewheel", h);
            this.hideHintBox()
        }.j16(this);
        this.o.je1("mousewheel", h);
        if ("hover" === this.op("spin")) {
            var i = function (j) {
                this.hideHintBox();
                this.o.je2("mousemove", i)
            }.j16(this);
            this.o.je1("mousemove", i)
        }
    };
    a.prototype.hideHintBox = function () {
        if (!this.hintBox || this.hintBox.hidding) {
            return
        }
        this.hintBox.hidding = true;
        new f.FX(this.hintBox, {
            duration: 200,
            onComplete: function () {
                this.hintBox.j33();
                delete this.hintBox
            }.j24(this)
        }).start({
            opacity: [this.hintBox.j5("opacity"), 0]
        })
    };
    var d = {
        version: "v3.0.2",
        tools: e([]),
        start: function (h) {
            f.$A((h ? [e(h)] : document.byTag("a"))).j14((function (i) {
                if (e(i).j13("tgdd360")) {
                    !d.tools.filter(function (j) {
                        return j.o === i
                    }).length && d.tools.push(new a(i))
                }
            }).j24(this))
        },
        stop: function (k) {
            var i = 0,
                j = null,
                h = null;
            if (k && (h = e(k))) {
                j = d.tools.filter(function (l) {
                    return l.o === h
                });
                j && j.length && (j = d.tools.splice(d.tools.indexOf(j[0]), 1)) && j[0].stop() && (delete j);
                return
            }
            while (i = d.tools.length) {
                j = d.tools.splice(i - 1, 1);
                j[0].stop();
                delete j
            }
        },
        spin: function (j, i) {
            var h = null;
            (h = c(j)) && h.spin(i)
        },
        pause: function (i) {
            try {
                var h = null;
                (h = c(i)) && h._A.pause()
            }
            catch (err) { }
        },
        magnifyOn: function (i) {
            var h = null;
            (h = c(i)) && h.magnify(true)
        },
        magnifyOff: function (i) {
            var h = null;
            (h = c(i)) && h.magnify(false)
        },
        fullscreen: function (i) {
            var h = null;
            (h = c(i)) && h.enterFullscreen()
        }
    };

    function c(j) {
        var i = [],
            h = null;
        (j && (h = e(j))) && (i = d.tools.filter(function (k) {
            return k.o === h
        }));
        return i.length ? i[0] : null
    }
    d.options = {};
    d.lang = {};
    e(document).je1("domready", function () {
        d.start()
    });
    return d
})();
///#source 1 1 /Scripts/jquery.nicescroll.min.js
/* jquery.nicescroll 3.2.0 InuYaksa*2013 MIT http://areaaperta.com/nicescroll */(function(e){var y=!1,D=!1,J=5E3,K=2E3,x=0,L=function(){var e=document.getElementsByTagName("script"),e=e[e.length-1].src.split("?")[0];return 0<e.split("/").length?e.split("/").slice(0,-1).join("/")+"/":""}();Array.prototype.forEach||(Array.prototype.forEach=function(e,c){for(var h=0,l=this.length;h<l;++h)e.call(c,this[h],h,this)});var v=window.requestAnimationFrame||!1,w=window.cancelAnimationFrame||!1;["ms","moz","webkit","o"].forEach(function(e){v||(v=window[e+"RequestAnimationFrame"]);w||(w=
window[e+"CancelAnimationFrame"]||window[e+"CancelRequestAnimationFrame"])});var z=window.MutationObserver||window.WebKitMutationObserver||!1,F={zindex:"auto",cursoropacitymin:0,cursoropacitymax:1,cursorcolor:"#424242",cursorwidth:"5px",cursorborder:"1px solid #fff",cursorborderradius:"5px",scrollspeed:60,mousescrollstep:24,touchbehavior:!1,hwacceleration:!0,usetransition:!0,boxzoom:!1,dblclickzoom:!0,gesturezoom:!0,grabcursorenabled:!0,autohidemode:!0,background:"",iframeautoresize:!0,cursorminheight:32,
preservenativescrolling:!0,railoffset:!1,bouncescroll:!0,spacebarenabled:!0,railpadding:{top:0,right:0,left:0,bottom:0},disableoutline:!0,horizrailenabled:!0,railalign:"right",railvalign:"bottom",enabletranslate3d:!0,enablemousewheel:!0,enablekeyboard:!0,smoothscroll:!0,sensitiverail:!0,enablemouselockapi:!0,cursorfixedheight:!1,directionlockdeadzone:6,hidecursordelay:400,nativeparentscrolling:!0,enablescrollonselection:!0,overflowx:!0,overflowy:!0,cursordragspeed:0.3,rtlmode:!1,cursordragontouch:!1},
E=!1,M=function(){if(E)return E;var e=document.createElement("DIV"),c={haspointerlock:"pointerLockElement"in document||"mozPointerLockElement"in document||"webkitPointerLockElement"in document};c.isopera="opera"in window;c.isopera12=c.isopera&&"getUserMedia"in navigator;c.isie="all"in document&&"attachEvent"in e&&!c.isopera;c.isieold=c.isie&&!("msInterpolationMode"in e.style);c.isie7=c.isie&&!c.isieold&&(!("documentMode"in document)||7==document.documentMode);c.isie8=c.isie&&"documentMode"in document&&
8==document.documentMode;c.isie9=c.isie&&"performance"in window&&9<=document.documentMode;c.isie10=c.isie&&"performance"in window&&10<=document.documentMode;c.isie9mobile=/iemobile.9/i.test(navigator.userAgent);c.isie9mobile&&(c.isie9=!1);c.isie7mobile=!c.isie9mobile&&c.isie7&&/iemobile/i.test(navigator.userAgent);c.ismozilla="MozAppearance"in e.style;c.iswebkit="WebkitAppearance"in e.style;c.ischrome="chrome"in window;c.ischrome22=c.ischrome&&c.haspointerlock;c.ischrome26=c.ischrome&&"transition"in
e.style;c.cantouch="ontouchstart"in document.documentElement||"ontouchstart"in window;c.hasmstouch=window.navigator.msPointerEnabled||!1;c.ismac=/^mac$/i.test(navigator.platform);c.isios=c.cantouch&&/iphone|ipad|ipod/i.test(navigator.platform);c.isios4=c.isios&&!("seal"in Object);c.isandroid=/android/i.test(navigator.userAgent);c.trstyle=!1;c.hastransform=!1;c.hastranslate3d=!1;c.transitionstyle=!1;c.hastransition=!1;c.transitionend=!1;for(var h=["transform","msTransform","webkitTransform","MozTransform",
"OTransform"],l=0;l<h.length;l++)if("undefined"!=typeof e.style[h[l]]){c.trstyle=h[l];break}c.hastransform=!1!=c.trstyle;c.hastransform&&(e.style[c.trstyle]="translate3d(1px,2px,3px)",c.hastranslate3d=/translate3d/.test(e.style[c.trstyle]));c.transitionstyle=!1;c.prefixstyle="";c.transitionend=!1;for(var h="transition webkitTransition MozTransition OTransition OTransition msTransition KhtmlTransition".split(" "),n=" -webkit- -moz- -o- -o -ms- -khtml-".split(" "),t="transitionend webkitTransitionEnd transitionend otransitionend oTransitionEnd msTransitionEnd KhtmlTransitionEnd".split(" "),
l=0;l<h.length;l++)if(h[l]in e.style){c.transitionstyle=h[l];c.prefixstyle=n[l];c.transitionend=t[l];break}c.ischrome26&&(c.prefixstyle=n[1]);c.hastransition=c.transitionstyle;a:{h=["-moz-grab","-webkit-grab","grab"];if(c.ischrome&&!c.ischrome22||c.isie)h=[];for(l=0;l<h.length;l++)if(n=h[l],e.style.cursor=n,e.style.cursor==n){h=n;break a}h="url(http://www.google.com/intl/en_ALL/mapfiles/openhand.cur),n-resize"}c.cursorgrabvalue=h;c.hasmousecapture="setCapture"in e;c.hasMutationObserver=!1!==z;return E=
c},N=function(k,c){function h(){var d=b.win;if("zIndex"in d)return d.zIndex();for(;0<d.length&&9!=d[0].nodeType;){var c=d.css("zIndex");if(!isNaN(c)&&0!=c)return parseInt(c);d=d.parent()}return!1}function l(d,c,g){c=d.css(c);d=parseFloat(c);return isNaN(d)?(d=u[c]||0,g=3==d?g?b.win.outerHeight()-b.win.innerHeight():b.win.outerWidth()-b.win.innerWidth():1,b.isie8&&d&&(d+=1),g?d:0):d}function n(d,c,g,e){b._bind(d,c,function(b){b=b?b:window.event;var e={original:b,target:b.target||b.srcElement,type:"wheel",
deltaMode:"MozMousePixelScroll"==b.type?0:1,deltaX:0,deltaZ:0,preventDefault:function(){b.preventDefault?b.preventDefault():b.returnValue=!1;return!1},stopImmediatePropagation:function(){b.stopImmediatePropagation?b.stopImmediatePropagation():b.cancelBubble=!0}};"mousewheel"==c?(e.deltaY=-0.025*b.wheelDelta,b.wheelDeltaX&&(e.deltaX=-0.025*b.wheelDeltaX)):e.deltaY=b.detail;return g.call(d,e)},e)}function t(d,c,g){var e,f;0==d.deltaMode?(e=-Math.floor(d.deltaX*(b.opt.mousescrollstep/54)),f=-Math.floor(d.deltaY*
(b.opt.mousescrollstep/54))):1==d.deltaMode&&(e=-Math.floor(d.deltaX*b.opt.mousescrollstep),f=-Math.floor(d.deltaY*b.opt.mousescrollstep));c&&(0==e&&f)&&(e=f,f=0);e&&(b.scrollmom&&b.scrollmom.stop(),b.lastdeltax+=e,b.debounced("mousewheelx",function(){var d=b.lastdeltax;b.lastdeltax=0;b.rail.drag||b.doScrollLeftBy(d)},120));if(f){if(b.opt.nativeparentscrolling&&g&&!b.ispage&&!b.zoomactive)if(0>f){if(b.getScrollTop()>=b.page.maxh)return!0}else if(0>=b.getScrollTop())return!0;b.scrollmom&&b.scrollmom.stop();
b.lastdeltay+=f;b.debounced("mousewheely",function(){var d=b.lastdeltay;b.lastdeltay=0;b.rail.drag||b.doScrollBy(d)},120)}d.stopImmediatePropagation();return d.preventDefault()}var b=this;this.version="3.4.0";this.name="nicescroll";this.me=c;this.opt={doc:e("body"),win:!1};e.extend(this.opt,F);this.opt.snapbackspeed=80;if(k)for(var q in b.opt)"undefined"!=typeof k[q]&&(b.opt[q]=k[q]);this.iddoc=(this.doc=b.opt.doc)&&this.doc[0]?this.doc[0].id||"":"";this.ispage=/BODY|HTML/.test(b.opt.win?b.opt.win[0].nodeName:
this.doc[0].nodeName);this.haswrapper=!1!==b.opt.win;this.win=b.opt.win||(this.ispage?e(window):this.doc);this.docscroll=this.ispage&&!this.haswrapper?e(window):this.win;this.body=e("body");this.iframe=this.isfixed=this.viewport=!1;this.isiframe="IFRAME"==this.doc[0].nodeName&&"IFRAME"==this.win[0].nodeName;this.istextarea="TEXTAREA"==this.win[0].nodeName;this.forcescreen=!1;this.canshowonmouseevent="scroll"!=b.opt.autohidemode;this.page=this.view=this.onzoomout=this.onzoomin=this.onscrollcancel=
this.onscrollend=this.onscrollstart=this.onclick=this.ongesturezoom=this.onkeypress=this.onmousewheel=this.onmousemove=this.onmouseup=this.onmousedown=!1;this.scroll={x:0,y:0};this.scrollratio={x:0,y:0};this.cursorheight=20;this.scrollvaluemax=0;this.observerremover=this.observer=this.scrollmom=this.scrollrunning=this.checkrtlmode=!1;do this.id="ascrail"+K++;while(document.getElementById(this.id));this.hasmousefocus=this.hasfocus=this.zoomactive=this.zoom=this.selectiondrag=this.cursorfreezed=this.cursor=
this.rail=!1;this.visibility=!0;this.hidden=this.locked=!1;this.cursoractive=!0;this.overflowx=b.opt.overflowx;this.overflowy=b.opt.overflowy;this.nativescrollingarea=!1;this.checkarea=0;this.events=[];this.saved={};this.delaylist={};this.synclist={};this.lastdeltay=this.lastdeltax=0;this.detected=M();var f=e.extend({},this.detected);this.ishwscroll=(this.canhwscroll=f.hastransform&&b.opt.hwacceleration)&&b.haswrapper;this.istouchcapable=!1;f.cantouch&&(f.ischrome&&!f.isios&&!f.isandroid)&&(this.istouchcapable=
!0,f.cantouch=!1);f.cantouch&&(f.ismozilla&&!f.isios)&&(this.istouchcapable=!0,f.cantouch=!1);b.opt.enablemouselockapi||(f.hasmousecapture=!1,f.haspointerlock=!1);this.delayed=function(d,c,g,e){var f=b.delaylist[d],h=(new Date).getTime();if(!e&&f&&f.tt)return!1;f&&f.tt&&clearTimeout(f.tt);if(f&&f.last+g>h&&!f.tt)b.delaylist[d]={last:h+g,tt:setTimeout(function(){b.delaylist[d].tt=0;c.call()},g)};else if(!f||!f.tt)b.delaylist[d]={last:h,tt:0},setTimeout(function(){c.call()},0)};this.debounced=function(d,
c,g){var f=b.delaylist[d];(new Date).getTime();b.delaylist[d]=c;f||setTimeout(function(){var c=b.delaylist[d];b.delaylist[d]=!1;c.call()},g)};this.synched=function(d,c){b.synclist[d]=c;(function(){b.onsync||(v(function(){b.onsync=!1;for(d in b.synclist){var c=b.synclist[d];c&&c.call(b);b.synclist[d]=!1}}),b.onsync=!0)})();return d};this.unsynched=function(d){b.synclist[d]&&(b.synclist[d]=!1)};this.css=function(d,c){for(var g in c)b.saved.css.push([d,g,d.css(g)]),d.css(g,c[g])};this.scrollTop=function(d){return"undefined"==
typeof d?b.getScrollTop():b.setScrollTop(d)};this.scrollLeft=function(d){return"undefined"==typeof d?b.getScrollLeft():b.setScrollLeft(d)};BezierClass=function(b,c,g,f,e,h,l){this.st=b;this.ed=c;this.spd=g;this.p1=f||0;this.p2=e||1;this.p3=h||0;this.p4=l||1;this.ts=(new Date).getTime();this.df=this.ed-this.st};BezierClass.prototype={B2:function(b){return 3*b*b*(1-b)},B3:function(b){return 3*b*(1-b)*(1-b)},B4:function(b){return(1-b)*(1-b)*(1-b)},getNow:function(){var b=1-((new Date).getTime()-this.ts)/
this.spd,c=this.B2(b)+this.B3(b)+this.B4(b);return 0>b?this.ed:this.st+Math.round(this.df*c)},update:function(b,c){this.st=this.getNow();this.ed=b;this.spd=c;this.ts=(new Date).getTime();this.df=this.ed-this.st;return this}};if(this.ishwscroll){this.doc.translate={x:0,y:0,tx:"0px",ty:"0px"};f.hastranslate3d&&f.isios&&this.doc.css("-webkit-backface-visibility","hidden");var r=function(){var d=b.doc.css(f.trstyle);return d&&"matrix"==d.substr(0,6)?d.replace(/^.*\((.*)\)$/g,"$1").replace(/px/g,"").split(/, +/):
!1};this.getScrollTop=function(d){if(!d){if(d=r())return 16==d.length?-d[13]:-d[5];if(b.timerscroll&&b.timerscroll.bz)return b.timerscroll.bz.getNow()}return b.doc.translate.y};this.getScrollLeft=function(d){if(!d){if(d=r())return 16==d.length?-d[12]:-d[4];if(b.timerscroll&&b.timerscroll.bh)return b.timerscroll.bh.getNow()}return b.doc.translate.x};this.notifyScrollEvent=document.createEvent?function(b){var c=document.createEvent("UIEvents");c.initUIEvent("scroll",!1,!0,window,1);b.dispatchEvent(c)}:
document.fireEvent?function(b){var c=document.createEventObject();b.fireEvent("onscroll");c.cancelBubble=!0}:function(b,c){};f.hastranslate3d&&b.opt.enabletranslate3d?(this.setScrollTop=function(d,c){b.doc.translate.y=d;b.doc.translate.ty=-1*d+"px";b.doc.css(f.trstyle,"translate3d("+b.doc.translate.tx+","+b.doc.translate.ty+",0px)");c||b.notifyScrollEvent(b.win[0])},this.setScrollLeft=function(d,c){b.doc.translate.x=d;b.doc.translate.tx=-1*d+"px";b.doc.css(f.trstyle,"translate3d("+b.doc.translate.tx+
","+b.doc.translate.ty+",0px)");c||b.notifyScrollEvent(b.win[0])}):(this.setScrollTop=function(d,c){b.doc.translate.y=d;b.doc.translate.ty=-1*d+"px";b.doc.css(f.trstyle,"translate("+b.doc.translate.tx+","+b.doc.translate.ty+")");c||b.notifyScrollEvent(b.win[0])},this.setScrollLeft=function(d,c){b.doc.translate.x=d;b.doc.translate.tx=-1*d+"px";b.doc.css(f.trstyle,"translate("+b.doc.translate.tx+","+b.doc.translate.ty+")");c||b.notifyScrollEvent(b.win[0])})}else this.getScrollTop=function(){return b.docscroll.scrollTop()},
this.setScrollTop=function(d){return b.docscroll.scrollTop(d)},this.getScrollLeft=function(){return b.docscroll.scrollLeft()},this.setScrollLeft=function(d){return b.docscroll.scrollLeft(d)};this.getTarget=function(b){return!b?!1:b.target?b.target:b.srcElement?b.srcElement:!1};this.hasParent=function(b,c){if(!b)return!1;for(var g=b.target||b.srcElement||b||!1;g&&g.id!=c;)g=g.parentNode||!1;return!1!==g};var u={thin:1,medium:3,thick:5};this.getOffset=function(){if(b.isfixed)return{top:parseFloat(b.win.css("top")),
left:parseFloat(b.win.css("left"))};if(!b.viewport)return b.win.offset();var d=b.win.offset(),c=b.viewport.offset();return{top:d.top-c.top+b.viewport.scrollTop(),left:d.left-c.left+b.viewport.scrollLeft()}};this.updateScrollBar=function(d){if(b.ishwscroll)b.rail.css({height:b.win.innerHeight()}),b.railh&&b.railh.css({width:b.win.innerWidth()});else{var c=b.getOffset(),g=c.top,f=c.left,g=g+l(b.win,"border-top-width",!0);b.win.outerWidth();b.win.innerWidth();var f=f+(b.rail.align?b.win.outerWidth()-
l(b.win,"border-right-width")-b.rail.width:l(b.win,"border-left-width")),e=b.opt.railoffset;e&&(e.top&&(g+=e.top),b.rail.align&&e.left&&(f+=e.left));b.locked||b.rail.css({top:g,left:f,height:d?d.h:b.win.innerHeight()});b.zoom&&b.zoom.css({top:g+1,left:1==b.rail.align?f-20:f+b.rail.width+4});b.railh&&!b.locked&&(g=c.top,f=c.left,d=b.railh.align?g+l(b.win,"border-top-width",!0)+b.win.innerHeight()-b.railh.height:g+l(b.win,"border-top-width",!0),f+=l(b.win,"border-left-width"),b.railh.css({top:d,left:f,
width:b.railh.width}))}};this.doRailClick=function(d,c,g){var f;b.locked||(b.cancelEvent(d),c?(c=g?b.doScrollLeft:b.doScrollTop,f=g?(d.pageX-b.railh.offset().left-b.cursorwidth/2)*b.scrollratio.x:(d.pageY-b.rail.offset().top-b.cursorheight/2)*b.scrollratio.y,c(f)):(c=g?b.doScrollLeftBy:b.doScrollBy,f=g?b.scroll.x:b.scroll.y,d=g?d.pageX-b.railh.offset().left:d.pageY-b.rail.offset().top,g=g?b.view.w:b.view.h,f>=d?c(g):c(-g)))};b.hasanimationframe=v;b.hascancelanimationframe=w;b.hasanimationframe?b.hascancelanimationframe||
(w=function(){b.cancelAnimationFrame=!0}):(v=function(b){return setTimeout(b,15-Math.floor(+new Date/1E3)%16)},w=clearInterval);this.init=function(){b.saved.css=[];if(f.isie7mobile)return!0;f.hasmstouch&&b.css(b.ispage?e("html"):b.win,{"-ms-touch-action":"none"});b.zindex="auto";b.zindex=!b.ispage&&"auto"==b.opt.zindex?h()||"auto":b.opt.zindex;!b.ispage&&"auto"!=b.zindex&&b.zindex>x&&(x=b.zindex);b.isie&&(0==b.zindex&&"auto"==b.opt.zindex)&&(b.zindex="auto");if(!b.ispage||!f.cantouch&&!f.isieold&&
!f.isie9mobile){var d=b.docscroll;b.ispage&&(d=b.haswrapper?b.win:b.doc);f.isie9mobile||b.css(d,{"overflow-y":"hidden"});b.ispage&&f.isie7&&("BODY"==b.doc[0].nodeName?b.css(e("html"),{"overflow-y":"hidden"}):"HTML"==b.doc[0].nodeName&&b.css(e("body"),{"overflow-y":"hidden"}));f.isios&&(!b.ispage&&!b.haswrapper)&&b.css(e("body"),{"-webkit-overflow-scrolling":"touch"});var c=e(document.createElement("div"));c.css({position:"relative",top:0,"float":"right",width:b.opt.cursorwidth,height:"0px","background-color":b.opt.cursorcolor,
border:b.opt.cursorborder,"background-clip":"padding-box","-webkit-border-radius":b.opt.cursorborderradius,"-moz-border-radius":b.opt.cursorborderradius,"border-radius":b.opt.cursorborderradius});c.hborder=parseFloat(c.outerHeight()-c.innerHeight());b.cursor=c;var g=e(document.createElement("div"));g.attr("id",b.id);g.addClass("nicescroll-rails");var l,k,n=["left","right"],G;for(G in n)k=n[G],(l=b.opt.railpadding[k])?g.css("padding-"+k,l+"px"):b.opt.railpadding[k]=0;g.append(c);g.width=Math.max(parseFloat(b.opt.cursorwidth),
c.outerWidth())+b.opt.railpadding.left+b.opt.railpadding.right;g.css({width:g.width+"px",zIndex:b.zindex,background:b.opt.background,cursor:"default"});g.visibility=!0;g.scrollable=!0;g.align="left"==b.opt.railalign?0:1;b.rail=g;c=b.rail.drag=!1;b.opt.boxzoom&&(!b.ispage&&!f.isieold)&&(c=document.createElement("div"),b.bind(c,"click",b.doZoom),b.zoom=e(c),b.zoom.css({cursor:"pointer","z-index":b.zindex,backgroundImage:"url("+L+"zoomico.png)",height:18,width:18,backgroundPosition:"0px 0px"}),b.opt.dblclickzoom&&
b.bind(b.win,"dblclick",b.doZoom),f.cantouch&&b.opt.gesturezoom&&(b.ongesturezoom=function(d){1.5<d.scale&&b.doZoomIn(d);0.8>d.scale&&b.doZoomOut(d);return b.cancelEvent(d)},b.bind(b.win,"gestureend",b.ongesturezoom)));b.railh=!1;if(b.opt.horizrailenabled){b.css(d,{"overflow-x":"hidden"});c=e(document.createElement("div"));c.css({position:"relative",top:0,height:b.opt.cursorwidth,width:"0px","background-color":b.opt.cursorcolor,border:b.opt.cursorborder,"background-clip":"padding-box","-webkit-border-radius":b.opt.cursorborderradius,
"-moz-border-radius":b.opt.cursorborderradius,"border-radius":b.opt.cursorborderradius});c.wborder=parseFloat(c.outerWidth()-c.innerWidth());b.cursorh=c;var m=e(document.createElement("div"));m.attr("id",b.id+"-hr");m.addClass("nicescroll-rails");m.height=Math.max(parseFloat(b.opt.cursorwidth),c.outerHeight());m.css({height:m.height+"px",zIndex:b.zindex,background:b.opt.background});m.append(c);m.visibility=!0;m.scrollable=!0;m.align="top"==b.opt.railvalign?0:1;b.railh=m;b.railh.drag=!1}b.ispage?
(g.css({position:"fixed",top:"0px",height:"100%"}),g.align?g.css({right:"0px"}):g.css({left:"0px"}),b.body.append(g),b.railh&&(m.css({position:"fixed",left:"0px",width:"100%"}),m.align?m.css({bottom:"0px"}):m.css({top:"0px"}),b.body.append(m))):(b.ishwscroll?("static"==b.win.css("position")&&b.css(b.win,{position:"relative"}),d="HTML"==b.win[0].nodeName?b.body:b.win,b.zoom&&(b.zoom.css({position:"absolute",top:1,right:0,"margin-right":g.width+4}),d.append(b.zoom)),g.css({position:"absolute",top:0}),
g.align?g.css({right:0}):g.css({left:0}),d.append(g),m&&(m.css({position:"absolute",left:0,bottom:0}),m.align?m.css({bottom:0}):m.css({top:0}),d.append(m))):(b.isfixed="fixed"==b.win.css("position"),d=b.isfixed?"fixed":"absolute",b.isfixed||(b.viewport=b.getViewport(b.win[0])),b.viewport&&(b.body=b.viewport,!1==/relative|absolute/.test(b.viewport.css("position"))&&b.css(b.viewport,{position:"relative"})),g.css({position:d}),b.zoom&&b.zoom.css({position:d}),b.updateScrollBar(),b.body.append(g),b.zoom&&
b.body.append(b.zoom),b.railh&&(m.css({position:d}),b.body.append(m))),f.isios&&b.css(b.win,{"-webkit-tap-highlight-color":"rgba(0,0,0,0)","-webkit-touch-callout":"none"}),f.isie&&b.opt.disableoutline&&b.win.attr("hideFocus","true"),f.iswebkit&&b.opt.disableoutline&&b.win.css({outline:"none"}));!1===b.opt.autohidemode?(b.autohidedom=!1,b.rail.css({opacity:b.opt.cursoropacitymax}),b.railh&&b.railh.css({opacity:b.opt.cursoropacitymax})):!0===b.opt.autohidemode?(b.autohidedom=e().add(b.rail),f.isie8&&
(b.autohidedom=b.autohidedom.add(b.cursor)),b.railh&&(b.autohidedom=b.autohidedom.add(b.railh)),b.railh&&f.isie8&&(b.autohidedom=b.autohidedom.add(b.cursorh))):"scroll"==b.opt.autohidemode?(b.autohidedom=e().add(b.rail),b.railh&&(b.autohidedom=b.autohidedom.add(b.railh))):"cursor"==b.opt.autohidemode?(b.autohidedom=e().add(b.cursor),b.railh&&(b.autohidedom=b.autohidedom.add(b.cursorh))):"hidden"==b.opt.autohidemode&&(b.autohidedom=!1,b.hide(),b.locked=!1);if(f.isie9mobile)b.scrollmom=new H(b),b.onmangotouch=
function(d){d=b.getScrollTop();var c=b.getScrollLeft();if(d==b.scrollmom.lastscrolly&&c==b.scrollmom.lastscrollx)return!0;var g=d-b.mangotouch.sy,f=c-b.mangotouch.sx;if(0!=Math.round(Math.sqrt(Math.pow(f,2)+Math.pow(g,2)))){var p=0>g?-1:1,e=0>f?-1:1,h=+new Date;b.mangotouch.lazy&&clearTimeout(b.mangotouch.lazy);80<h-b.mangotouch.tm||b.mangotouch.dry!=p||b.mangotouch.drx!=e?(b.scrollmom.stop(),b.scrollmom.reset(c,d),b.mangotouch.sy=d,b.mangotouch.ly=d,b.mangotouch.sx=c,b.mangotouch.lx=c,b.mangotouch.dry=
p,b.mangotouch.drx=e,b.mangotouch.tm=h):(b.scrollmom.stop(),b.scrollmom.update(b.mangotouch.sx-f,b.mangotouch.sy-g),b.mangotouch.tm=h,g=Math.max(Math.abs(b.mangotouch.ly-d),Math.abs(b.mangotouch.lx-c)),b.mangotouch.ly=d,b.mangotouch.lx=c,2<g&&(b.mangotouch.lazy=setTimeout(function(){b.mangotouch.lazy=!1;b.mangotouch.dry=0;b.mangotouch.drx=0;b.mangotouch.tm=0;b.scrollmom.doMomentum(30)},100)))}},g=b.getScrollTop(),m=b.getScrollLeft(),b.mangotouch={sy:g,ly:g,dry:0,sx:m,lx:m,drx:0,lazy:!1,tm:0},b.bind(b.docscroll,
"scroll",b.onmangotouch);else{if(f.cantouch||b.istouchcapable||b.opt.touchbehavior||f.hasmstouch){b.scrollmom=new H(b);b.ontouchstart=function(d){if(d.pointerType&&2!=d.pointerType)return!1;if(!b.locked){if(f.hasmstouch)for(var c=d.target?d.target:!1;c;){var g=e(c).getNiceScroll();if(0<g.length&&g[0].me==b.me)break;if(0<g.length)return!1;if("DIV"==c.nodeName&&c.id==b.id)break;c=c.parentNode?c.parentNode:!1}b.cancelScroll();if((c=b.getTarget(d))&&/INPUT/i.test(c.nodeName)&&/range/i.test(c.type))return b.stopPropagation(d);
!("clientX"in d)&&"changedTouches"in d&&(d.clientX=d.changedTouches[0].clientX,d.clientY=d.changedTouches[0].clientY);b.forcescreen&&(g=d,d={original:d.original?d.original:d},d.clientX=g.screenX,d.clientY=g.screenY);b.rail.drag={x:d.clientX,y:d.clientY,sx:b.scroll.x,sy:b.scroll.y,st:b.getScrollTop(),sl:b.getScrollLeft(),pt:2,dl:!1};if(b.ispage||!b.opt.directionlockdeadzone)b.rail.drag.dl="f";else{var g=e(window).width(),p=e(window).height(),h=Math.max(document.body.scrollWidth,document.documentElement.scrollWidth),
l=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight),p=Math.max(0,l-p),g=Math.max(0,h-g);b.rail.drag.ck=!b.rail.scrollable&&b.railh.scrollable?0<p?"v":!1:b.rail.scrollable&&!b.railh.scrollable?0<g?"h":!1:!1;b.rail.drag.ck||(b.rail.drag.dl="f")}b.opt.touchbehavior&&(b.isiframe&&f.isie)&&(g=b.win.position(),b.rail.drag.x+=g.left,b.rail.drag.y+=g.top);b.hasmoving=!1;b.lastmouseup=!1;b.scrollmom.reset(d.clientX,d.clientY);if(!f.cantouch&&!this.istouchcapable&&!f.hasmstouch){if(!c||
!/INPUT|SELECT|TEXTAREA/i.test(c.nodeName))return!b.ispage&&f.hasmousecapture&&c.setCapture(),b.cancelEvent(d);/SUBMIT|CANCEL|BUTTON/i.test(e(c).attr("type"))&&(pc={tg:c,click:!1},b.preventclick=pc)}}};b.ontouchend=function(d){if(d.pointerType&&2!=d.pointerType)return!1;if(b.rail.drag&&2==b.rail.drag.pt&&(b.scrollmom.doMomentum(),b.rail.drag=!1,b.hasmoving&&(b.hasmoving=!1,b.lastmouseup=!0,b.hideCursor(),f.hasmousecapture&&document.releaseCapture(),!f.cantouch)))return b.cancelEvent(d)};var q=b.opt.touchbehavior&&
b.isiframe&&!f.hasmousecapture;b.ontouchmove=function(d,c){if(d.pointerType&&2!=d.pointerType)return!1;if(b.rail.drag&&2==b.rail.drag.pt){if(f.cantouch&&"undefined"==typeof d.original)return!0;b.hasmoving=!0;b.preventclick&&!b.preventclick.click&&(b.preventclick.click=b.preventclick.tg.onclick||!1,b.preventclick.tg.onclick=b.onpreventclick);d=e.extend({original:d},d);"changedTouches"in d&&(d.clientX=d.changedTouches[0].clientX,d.clientY=d.changedTouches[0].clientY);if(b.forcescreen){var g=d;d={original:d.original?
d.original:d};d.clientX=g.screenX;d.clientY=g.screenY}g=ofy=0;if(q&&!c){var p=b.win.position(),g=-p.left;ofy=-p.top}var h=d.clientY+ofy,p=h-b.rail.drag.y,l=d.clientX+g,k=l-b.rail.drag.x,s=b.rail.drag.st-p;b.ishwscroll&&b.opt.bouncescroll?0>s?s=Math.round(s/2):s>b.page.maxh&&(s=b.page.maxh+Math.round((s-b.page.maxh)/2)):(0>s&&(h=s=0),s>b.page.maxh&&(s=b.page.maxh,h=0));if(b.railh&&b.railh.scrollable){var m=b.rail.drag.sl-k;b.ishwscroll&&b.opt.bouncescroll?0>m?m=Math.round(m/2):m>b.page.maxw&&(m=b.page.maxw+
Math.round((m-b.page.maxw)/2)):(0>m&&(l=m=0),m>b.page.maxw&&(m=b.page.maxw,l=0))}g=!1;if(b.rail.drag.dl)g=!0,"v"==b.rail.drag.dl?m=b.rail.drag.sl:"h"==b.rail.drag.dl&&(s=b.rail.drag.st);else{var p=Math.abs(p),k=Math.abs(k),n=b.opt.directionlockdeadzone;if("v"==b.rail.drag.ck){if(p>n&&k<=0.3*p)return b.rail.drag=!1,!0;k>n&&(b.rail.drag.dl="f",e("body").scrollTop(e("body").scrollTop()))}else if("h"==b.rail.drag.ck){if(k>n&&p<=0.3*az)return b.rail.drag=!1,!0;p>n&&(b.rail.drag.dl="f",e("body").scrollLeft(e("body").scrollLeft()))}}b.synched("touchmove",
function(){b.rail.drag&&2==b.rail.drag.pt&&(b.prepareTransition&&b.prepareTransition(0),b.rail.scrollable&&b.setScrollTop(s),b.scrollmom.update(l,h),b.railh&&b.railh.scrollable?(b.setScrollLeft(m),b.showCursor(s,m)):b.showCursor(s),f.isie10&&document.selection.clear())});f.ischrome&&b.istouchcapable&&(g=!1);if(g)return b.cancelEvent(d)}}}b.onmousedown=function(d,c){if(!(b.rail.drag&&1!=b.rail.drag.pt)){if(b.locked)return b.cancelEvent(d);b.cancelScroll();b.rail.drag={x:d.clientX,y:d.clientY,sx:b.scroll.x,
sy:b.scroll.y,pt:1,hr:!!c};var g=b.getTarget(d);!b.ispage&&f.hasmousecapture&&g.setCapture();b.isiframe&&!f.hasmousecapture&&(b.saved.csspointerevents=b.doc.css("pointer-events"),b.css(b.doc,{"pointer-events":"none"}));return b.cancelEvent(d)}};b.onmouseup=function(d){if(b.rail.drag&&(f.hasmousecapture&&document.releaseCapture(),b.isiframe&&!f.hasmousecapture&&b.doc.css("pointer-events",b.saved.csspointerevents),1==b.rail.drag.pt))return b.rail.drag=!1,b.cancelEvent(d)};b.onmousemove=function(d){if(b.rail.drag&&
1==b.rail.drag.pt){if(f.ischrome&&0==d.which)return b.onmouseup(d);b.cursorfreezed=!0;if(b.rail.drag.hr){b.scroll.x=b.rail.drag.sx+(d.clientX-b.rail.drag.x);0>b.scroll.x&&(b.scroll.x=0);var c=b.scrollvaluemaxw;b.scroll.x>c&&(b.scroll.x=c)}else b.scroll.y=b.rail.drag.sy+(d.clientY-b.rail.drag.y),0>b.scroll.y&&(b.scroll.y=0),c=b.scrollvaluemax,b.scroll.y>c&&(b.scroll.y=c);b.synched("mousemove",function(){b.rail.drag&&1==b.rail.drag.pt&&(b.showCursor(),b.rail.drag.hr?b.doScrollLeft(Math.round(b.scroll.x*
b.scrollratio.x),b.opt.cursordragspeed):b.doScrollTop(Math.round(b.scroll.y*b.scrollratio.y),b.opt.cursordragspeed))});return b.cancelEvent(d)}};if(f.cantouch||b.opt.touchbehavior)b.onpreventclick=function(d){if(b.preventclick)return b.preventclick.tg.onclick=b.preventclick.click,b.preventclick=!1,b.cancelEvent(d)},b.bind(b.win,"mousedown",b.ontouchstart),b.onclick=f.isios?!1:function(d){return b.lastmouseup?(b.lastmouseup=!1,b.cancelEvent(d)):!0},b.opt.grabcursorenabled&&f.cursorgrabvalue&&(b.css(b.ispage?
b.doc:b.win,{cursor:f.cursorgrabvalue}),b.css(b.rail,{cursor:f.cursorgrabvalue}));else{var r=function(d){if(b.selectiondrag){if(d){var c=b.win.outerHeight();d=d.pageY-b.selectiondrag.top;0<d&&d<c&&(d=0);d>=c&&(d-=c);b.selectiondrag.df=d}0!=b.selectiondrag.df&&(b.doScrollBy(2*-Math.floor(b.selectiondrag.df/6)),b.debounced("doselectionscroll",function(){r()},50))}};b.hasTextSelected="getSelection"in document?function(){return 0<document.getSelection().rangeCount}:"selection"in document?function(){return"None"!=
document.selection.type}:function(){return!1};b.onselectionstart=function(d){b.ispage||(b.selectiondrag=b.win.offset())};b.onselectionend=function(d){b.selectiondrag=!1};b.onselectiondrag=function(d){b.selectiondrag&&b.hasTextSelected()&&b.debounced("selectionscroll",function(){r(d)},250)}}f.hasmstouch&&(b.css(b.rail,{"-ms-touch-action":"none"}),b.css(b.cursor,{"-ms-touch-action":"none"}),b.bind(b.win,"MSPointerDown",b.ontouchstart),b.bind(document,"MSPointerUp",b.ontouchend),b.bind(document,"MSPointerMove",
b.ontouchmove),b.bind(b.cursor,"MSGestureHold",function(b){b.preventDefault()}),b.bind(b.cursor,"contextmenu",function(b){b.preventDefault()}));this.istouchcapable&&(b.bind(b.win,"touchstart",b.ontouchstart),b.bind(document,"touchend",b.ontouchend),b.bind(document,"touchcancel",b.ontouchend),b.bind(document,"touchmove",b.ontouchmove));b.bind(b.cursor,"mousedown",b.onmousedown);b.bind(b.cursor,"mouseup",b.onmouseup);b.railh&&(b.bind(b.cursorh,"mousedown",function(d){b.onmousedown(d,!0)}),b.bind(b.cursorh,
"mouseup",function(d){if(!(b.rail.drag&&2==b.rail.drag.pt))return b.rail.drag=!1,b.hasmoving=!1,b.hideCursor(),f.hasmousecapture&&document.releaseCapture(),b.cancelEvent(d)}));if(b.opt.cursordragontouch||!f.cantouch&&!b.opt.touchbehavior)b.rail.css({cursor:"default"}),b.railh&&b.railh.css({cursor:"default"}),b.jqbind(b.rail,"mouseenter",function(){b.canshowonmouseevent&&b.showCursor();b.rail.active=!0}),b.jqbind(b.rail,"mouseleave",function(){b.rail.active=!1;b.rail.drag||b.hideCursor()}),b.opt.sensitiverail&&
(b.bind(b.rail,"click",function(d){b.doRailClick(d,!1,!1)}),b.bind(b.rail,"dblclick",function(d){b.doRailClick(d,!0,!1)}),b.bind(b.cursor,"click",function(d){b.cancelEvent(d)}),b.bind(b.cursor,"dblclick",function(d){b.cancelEvent(d)})),b.railh&&(b.jqbind(b.railh,"mouseenter",function(){b.canshowonmouseevent&&b.showCursor();b.rail.active=!0}),b.jqbind(b.railh,"mouseleave",function(){b.rail.active=!1;b.rail.drag||b.hideCursor()}),b.opt.sensitiverail&&(b.bind(b.railh,"click",function(d){b.doRailClick(d,
!1,!0)}),b.bind(b.railh,"dblclick",function(d){b.doRailClick(d,!0,!0)}),b.bind(b.cursorh,"click",function(d){b.cancelEvent(d)}),b.bind(b.cursorh,"dblclick",function(d){b.cancelEvent(d)})));!f.cantouch&&!b.opt.touchbehavior?(b.bind(f.hasmousecapture?b.win:document,"mouseup",b.onmouseup),b.bind(document,"mousemove",b.onmousemove),b.onclick&&b.bind(document,"click",b.onclick),!b.ispage&&b.opt.enablescrollonselection&&(b.bind(b.win[0],"mousedown",b.onselectionstart),b.bind(document,"mouseup",b.onselectionend),
b.bind(b.cursor,"mouseup",b.onselectionend),b.cursorh&&b.bind(b.cursorh,"mouseup",b.onselectionend),b.bind(document,"mousemove",b.onselectiondrag)),b.zoom&&(b.jqbind(b.zoom,"mouseenter",function(){b.canshowonmouseevent&&b.showCursor();b.rail.active=!0}),b.jqbind(b.zoom,"mouseleave",function(){b.rail.active=!1;b.rail.drag||b.hideCursor()}))):(b.bind(f.hasmousecapture?b.win:document,"mouseup",b.ontouchend),b.bind(document,"mousemove",b.ontouchmove),b.onclick&&b.bind(document,"click",b.onclick),b.opt.cursordragontouch&&
(b.bind(b.cursor,"mousedown",b.onmousedown),b.bind(b.cursor,"mousemove",b.onmousemove),b.cursorh&&b.bind(b.cursorh,"mousedown",b.onmousedown),b.cursorh&&b.bind(b.cursorh,"mousemove",b.onmousemove)));b.opt.enablemousewheel&&(b.isiframe||b.bind(f.isie&&b.ispage?document:b.docscroll,"mousewheel",b.onmousewheel),b.bind(b.rail,"mousewheel",b.onmousewheel),b.railh&&b.bind(b.railh,"mousewheel",b.onmousewheelhr));!b.ispage&&(!f.cantouch&&!/HTML|BODY/.test(b.win[0].nodeName))&&(b.win.attr("tabindex")||b.win.attr({tabindex:J++}),
b.jqbind(b.win,"focus",function(d){y=b.getTarget(d).id||!0;b.hasfocus=!0;b.canshowonmouseevent&&b.noticeCursor()}),b.jqbind(b.win,"blur",function(d){y=!1;b.hasfocus=!1}),b.jqbind(b.win,"mouseenter",function(d){D=b.getTarget(d).id||!0;b.hasmousefocus=!0;b.canshowonmouseevent&&b.noticeCursor()}),b.jqbind(b.win,"mouseleave",function(){D=!1;b.hasmousefocus=!1}))}b.onkeypress=function(d){if(b.locked&&0==b.page.maxh)return!0;d=d?d:window.e;var c=b.getTarget(d);if(c&&/INPUT|TEXTAREA|SELECT|OPTION/.test(c.nodeName)&&
(!c.getAttribute("type")&&!c.type||!/submit|button|cancel/i.tp))return!0;if(b.hasfocus||b.hasmousefocus&&!y||b.ispage&&!y&&!D){c=d.keyCode;if(b.locked&&27!=c)return b.cancelEvent(d);var g=d.ctrlKey||!1,p=d.shiftKey||!1,f=!1;switch(c){case 38:case 63233:b.doScrollBy(72);f=!0;break;case 40:case 63235:b.doScrollBy(-72);f=!0;break;case 37:case 63232:b.railh&&(g?b.doScrollLeft(0):b.doScrollLeftBy(72),f=!0);break;case 39:case 63234:b.railh&&(g?b.doScrollLeft(b.page.maxw):b.doScrollLeftBy(-72),f=!0);break;
case 33:case 63276:b.doScrollBy(b.view.h);f=!0;break;case 34:case 63277:b.doScrollBy(-b.view.h);f=!0;break;case 36:case 63273:b.railh&&g?b.doScrollPos(0,0):b.doScrollTo(0);f=!0;break;case 35:case 63275:b.railh&&g?b.doScrollPos(b.page.maxw,b.page.maxh):b.doScrollTo(b.page.maxh);f=!0;break;case 32:b.opt.spacebarenabled&&(p?b.doScrollBy(b.view.h):b.doScrollBy(-b.view.h),f=!0);break;case 27:b.zoomactive&&(b.doZoom(),f=!0)}if(f)return b.cancelEvent(d)}};b.opt.enablekeyboard&&b.bind(document,f.isopera&&
!f.isopera12?"keypress":"keydown",b.onkeypress);b.bind(window,"resize",b.lazyResize);b.bind(window,"orientationchange",b.lazyResize);b.bind(window,"load",b.lazyResize);if(f.ischrome&&!b.ispage&&!b.haswrapper){var t=b.win.attr("style"),g=parseFloat(b.win.css("width"))+1;b.win.css("width",g);b.synched("chromefix",function(){b.win.attr("style",t)})}b.onAttributeChange=function(d){b.lazyResize(250)};!b.ispage&&!b.haswrapper&&(!1!==z?(b.observer=new z(function(d){d.forEach(b.onAttributeChange)}),b.observer.observe(b.win[0],
{childList:!0,characterData:!1,attributes:!0,subtree:!1}),b.observerremover=new z(function(d){d.forEach(function(d){if(0<d.removedNodes.length)for(var c in d.removedNodes)if(d.removedNodes[c]==b.win[0])return b.remove()})}),b.observerremover.observe(b.win[0].parentNode,{childList:!0,characterData:!1,attributes:!1,subtree:!1})):(b.bind(b.win,f.isie&&!f.isie9?"propertychange":"DOMAttrModified",b.onAttributeChange),f.isie9&&b.win[0].attachEvent("onpropertychange",b.onAttributeChange),b.bind(b.win,"DOMNodeRemoved",
function(d){d.target==b.win[0]&&b.remove()})));!b.ispage&&b.opt.boxzoom&&b.bind(window,"resize",b.resizeZoom);b.istextarea&&b.bind(b.win,"mouseup",b.lazyResize);b.checkrtlmode=!0;b.lazyResize(30)}if("IFRAME"==this.doc[0].nodeName){var I=function(d){b.iframexd=!1;try{var c="contentDocument"in this?this.contentDocument:this.contentWindow.document}catch(g){b.iframexd=!0,c=!1}if(b.iframexd)return"console"in window&&console.log("NiceScroll error: policy restriced iframe"),!0;b.forcescreen=!0;b.isiframe&&
(b.iframe={doc:e(c),html:b.doc.contents().find("html")[0],body:b.doc.contents().find("body")[0]},b.getContentSize=function(){return{w:Math.max(b.iframe.html.scrollWidth,b.iframe.body.scrollWidth),h:Math.max(b.iframe.html.scrollHeight,b.iframe.body.scrollHeight)}},b.docscroll=e(b.iframe.body));!f.isios&&(b.opt.iframeautoresize&&!b.isiframe)&&(b.win.scrollTop(0),b.doc.height(""),d=Math.max(c.getElementsByTagName("html")[0].scrollHeight,c.body.scrollHeight),b.doc.height(d));b.lazyResize(30);f.isie7&&
b.css(e(b.iframe.html),{"overflow-y":"hidden"});b.css(e(b.iframe.body),{"overflow-y":"hidden"});"contentWindow"in this?b.bind(this.contentWindow,"scroll",b.onscroll):b.bind(c,"scroll",b.onscroll);b.opt.enablemousewheel&&b.bind(c,"mousewheel",b.onmousewheel);b.opt.enablekeyboard&&b.bind(c,f.isopera?"keypress":"keydown",b.onkeypress);if(f.cantouch||b.opt.touchbehavior)b.bind(c,"mousedown",b.onmousedown),b.bind(c,"mousemove",function(d){b.onmousemove(d,!0)}),b.opt.grabcursorenabled&&f.cursorgrabvalue&&
b.css(e(c.body),{cursor:f.cursorgrabvalue});b.bind(c,"mouseup",b.onmouseup);b.zoom&&(b.opt.dblclickzoom&&b.bind(c,"dblclick",b.doZoom),b.ongesturezoom&&b.bind(c,"gestureend",b.ongesturezoom))};this.doc[0].readyState&&"complete"==this.doc[0].readyState&&setTimeout(function(){I.call(b.doc[0],!1)},500);b.bind(this.doc,"load",I)}};this.showCursor=function(d,c){b.cursortimeout&&(clearTimeout(b.cursortimeout),b.cursortimeout=0);if(b.rail){b.autohidedom&&(b.autohidedom.stop().css({opacity:b.opt.cursoropacitymax}),
b.cursoractive=!0);if(!b.rail.drag||1!=b.rail.drag.pt)"undefined"!=typeof d&&!1!==d&&(b.scroll.y=Math.round(1*d/b.scrollratio.y)),"undefined"!=typeof c&&(b.scroll.x=Math.round(1*c/b.scrollratio.x));b.cursor.css({height:b.cursorheight,top:b.scroll.y});b.cursorh&&(!b.rail.align&&b.rail.visibility?b.cursorh.css({width:b.cursorwidth,left:b.scroll.x+b.rail.width}):b.cursorh.css({width:b.cursorwidth,left:b.scroll.x}),b.cursoractive=!0);b.zoom&&b.zoom.stop().css({opacity:b.opt.cursoropacitymax})}};this.hideCursor=
function(d){!b.cursortimeout&&(b.rail&&b.autohidedom)&&(b.cursortimeout=setTimeout(function(){if(!b.rail.active||!b.showonmouseevent)b.autohidedom.stop().animate({opacity:b.opt.cursoropacitymin}),b.zoom&&b.zoom.stop().animate({opacity:b.opt.cursoropacitymin}),b.cursoractive=!1;b.cursortimeout=0},d||b.opt.hidecursordelay))};this.noticeCursor=function(d,c,g){b.showCursor(c,g);b.rail.active||b.hideCursor(d)};this.getContentSize=b.ispage?function(){return{w:Math.max(document.body.scrollWidth,document.documentElement.scrollWidth),
h:Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}}:b.haswrapper?function(){return{w:b.doc.outerWidth()+parseInt(b.win.css("paddingLeft"))+parseInt(b.win.css("paddingRight")),h:b.doc.outerHeight()+parseInt(b.win.css("paddingTop"))+parseInt(b.win.css("paddingBottom"))}}:function(){return{w:b.docscroll[0].scrollWidth,h:b.docscroll[0].scrollHeight}};this.onResize=function(d,c){if(!b.win)return!1;if(!b.haswrapper&&!b.ispage){if("none"==b.win.css("display"))return b.visibility&&
b.hideRail().hideRailHr(),!1;!b.hidden&&!b.visibility&&b.showRail().showRailHr()}var g=b.page.maxh,f=b.page.maxw,e=b.view.w;b.view={w:b.ispage?b.win.width():parseInt(b.win[0].clientWidth),h:b.ispage?b.win.height():parseInt(b.win[0].clientHeight)};b.page=c?c:b.getContentSize();b.page.maxh=Math.max(0,b.page.h-b.view.h);b.page.maxw=Math.max(0,b.page.w-b.view.w);if(b.page.maxh==g&&b.page.maxw==f&&b.view.w==e){if(b.ispage)return b;g=b.win.offset();if(b.lastposition&&(f=b.lastposition,f.top==g.top&&f.left==
g.left))return b;b.lastposition=g}0==b.page.maxh?(b.hideRail(),b.scrollvaluemax=0,b.scroll.y=0,b.scrollratio.y=0,b.cursorheight=0,b.setScrollTop(0),b.rail.scrollable=!1):b.rail.scrollable=!0;0==b.page.maxw?(b.hideRailHr(),b.scrollvaluemaxw=0,b.scroll.x=0,b.scrollratio.x=0,b.cursorwidth=0,b.setScrollLeft(0),b.railh.scrollable=!1):b.railh.scrollable=!0;b.locked=0==b.page.maxh&&0==b.page.maxw;if(b.locked)return b.ispage||b.updateScrollBar(b.view),!1;!b.hidden&&!b.visibility?b.showRail().showRailHr():
!b.hidden&&!b.railh.visibility&&b.showRailHr();b.istextarea&&(b.win.css("resize")&&"none"!=b.win.css("resize"))&&(b.view.h-=20);b.cursorheight=Math.min(b.view.h,Math.round(b.view.h*(b.view.h/b.page.h)));b.cursorheight=b.opt.cursorfixedheight?b.opt.cursorfixedheight:Math.max(b.opt.cursorminheight,b.cursorheight);b.cursorwidth=Math.min(b.view.w,Math.round(b.view.w*(b.view.w/b.page.w)));b.cursorwidth=b.opt.cursorfixedheight?b.opt.cursorfixedheight:Math.max(b.opt.cursorminheight,b.cursorwidth);b.scrollvaluemax=
b.view.h-b.cursorheight-b.cursor.hborder;b.railh&&(b.railh.width=0<b.page.maxh?b.view.w-b.rail.width:b.view.w,b.scrollvaluemaxw=b.railh.width-b.cursorwidth-b.cursorh.wborder);b.checkrtlmode&&b.railh&&(b.checkrtlmode=!1,b.opt.rtlmode&&0==b.scroll.x&&b.setScrollLeft(b.page.maxw));b.ispage||b.updateScrollBar(b.view);b.scrollratio={x:b.page.maxw/b.scrollvaluemaxw,y:b.page.maxh/b.scrollvaluemax};b.getScrollTop()>b.page.maxh?b.doScrollTop(b.page.maxh):(b.scroll.y=Math.round(b.getScrollTop()*(1/b.scrollratio.y)),
b.scroll.x=Math.round(b.getScrollLeft()*(1/b.scrollratio.x)),b.cursoractive&&b.noticeCursor());b.scroll.y&&0==b.getScrollTop()&&b.doScrollTo(Math.floor(b.scroll.y*b.scrollratio.y));return b};this.resize=b.onResize;this.lazyResize=function(d){d=isNaN(d)?30:d;b.delayed("resize",b.resize,d);return b};this._bind=function(d,c,g,f){b.events.push({e:d,n:c,f:g,b:f,q:!1});d.addEventListener?d.addEventListener(c,g,f||!1):d.attachEvent?d.attachEvent("on"+c,g):d["on"+c]=g};this.jqbind=function(d,c,g){b.events.push({e:d,
n:c,f:g,q:!0});e(d).bind(c,g)};this.bind=function(d,c,g,e){var h="jquery"in d?d[0]:d;"mousewheel"==c?"onwheel"in b.win?b._bind(h,"wheel",g,e||!1):(d="undefined"!=typeof document.onmousewheel?"mousewheel":"DOMMouseScroll",n(h,d,g,e||!1),"DOMMouseScroll"==d&&n(h,"MozMousePixelScroll",g,e||!1)):h.addEventListener?(f.cantouch&&/mouseup|mousedown|mousemove/.test(c)&&b._bind(h,"mousedown"==c?"touchstart":"mouseup"==c?"touchend":"touchmove",function(b){if(b.touches){if(2>b.touches.length){var d=b.touches.length?
b.touches[0]:b;d.original=b;g.call(this,d)}}else b.changedTouches&&(d=b.changedTouches[0],d.original=b,g.call(this,d))},e||!1),b._bind(h,c,g,e||!1),f.cantouch&&"mouseup"==c&&b._bind(h,"touchcancel",g,e||!1)):b._bind(h,c,function(d){if((d=d||window.event||!1)&&d.srcElement)d.target=d.srcElement;"pageY"in d||(d.pageX=d.clientX+document.documentElement.scrollLeft,d.pageY=d.clientY+document.documentElement.scrollTop);return!1===g.call(h,d)||!1===e?b.cancelEvent(d):!0})};this._unbind=function(b,c,g,f){b.removeEventListener?
b.removeEventListener(c,g,f):b.detachEvent?b.detachEvent("on"+c,g):b["on"+c]=!1};this.unbindAll=function(){for(var d=0;d<b.events.length;d++){var c=b.events[d];c.q?c.e.unbind(c.n,c.f):b._unbind(c.e,c.n,c.f,c.b)}};this.cancelEvent=function(b){b=b.original?b.original:b?b:window.event||!1;if(!b)return!1;b.preventDefault&&b.preventDefault();b.stopPropagation&&b.stopPropagation();b.preventManipulation&&b.preventManipulation();b.cancelBubble=!0;b.cancel=!0;return b.returnValue=!1};this.stopPropagation=
function(b){b=b.original?b.original:b?b:window.event||!1;if(!b)return!1;if(b.stopPropagation)return b.stopPropagation();b.cancelBubble&&(b.cancelBubble=!0);return!1};this.showRail=function(){if(0!=b.page.maxh&&(b.ispage||"none"!=b.win.css("display")))b.visibility=!0,b.rail.visibility=!0,b.rail.css("display","block");return b};this.showRailHr=function(){if(!b.railh)return b;if(0!=b.page.maxw&&(b.ispage||"none"!=b.win.css("display")))b.railh.visibility=!0,b.railh.css("display","block");return b};this.hideRail=
function(){b.visibility=!1;b.rail.visibility=!1;b.rail.css("display","none");return b};this.hideRailHr=function(){if(!b.railh)return b;b.railh.visibility=!1;b.railh.css("display","none");return b};this.show=function(){b.hidden=!1;b.locked=!1;return b.showRail().showRailHr()};this.hide=function(){b.hidden=!0;b.locked=!0;return b.hideRail().hideRailHr()};this.toggle=function(){return b.hidden?b.show():b.hide()};this.remove=function(){b.stop();b.cursortimeout&&clearTimeout(b.cursortimeout);b.doZoomOut();
b.unbindAll();!1!==b.observer&&b.observer.disconnect();!1!==b.observerremover&&b.observerremover.disconnect();b.events=[];b.cursor&&(b.cursor.remove(),b.cursor=null);b.cursorh&&(b.cursorh.remove(),b.cursorh=null);b.rail&&(b.rail.remove(),b.rail=null);b.railh&&(b.railh.remove(),b.railh=null);b.zoom&&(b.zoom.remove(),b.zoom=null);for(var d=0;d<b.saved.css.length;d++){var c=b.saved.css[d];c[0].css(c[1],"undefined"==typeof c[2]?"":c[2])}b.saved=!1;b.me.data("__nicescroll","");b.me=null;b.doc=null;b.docscroll=
null;b.win=null;return b};this.scrollstart=function(d){this.onscrollstart=d;return b};this.scrollend=function(d){this.onscrollend=d;return b};this.scrollcancel=function(d){this.onscrollcancel=d;return b};this.zoomin=function(d){this.onzoomin=d;return b};this.zoomout=function(d){this.onzoomout=d;return b};this.isScrollable=function(b){b=b.target?b.target:b;if("OPTION"==b.nodeName)return!0;for(;b&&1==b.nodeType&&!/BODY|HTML/.test(b.nodeName);){var c=e(b),c=c.css("overflowY")||c.css("overflowX")||c.css("overflow")||
"";if(/scroll|auto/.test(c))return b.clientHeight!=b.scrollHeight;b=b.parentNode?b.parentNode:!1}return!1};this.getViewport=function(b){for(b=b&&b.parentNode?b.parentNode:!1;b&&1==b.nodeType&&!/BODY|HTML/.test(b.nodeName);){var c=e(b),g=c.css("overflowY")||c.css("overflowX")||c.css("overflow")||"";if(/scroll|auto/.test(g)&&b.clientHeight!=b.scrollHeight||0<c.getNiceScroll().length)return c;b=b.parentNode?b.parentNode:!1}return!1};this.onmousewheel=function(d){if(b.locked)return!0;if(b.rail.drag)return b.cancelEvent(d);
if(!b.rail.scrollable)return b.railh&&b.railh.scrollable?b.onmousewheelhr(d):!0;var c=+new Date,g=!1;b.opt.preservenativescrolling&&b.checkarea+600<c&&(b.nativescrollingarea=b.isScrollable(d),g=!0);b.checkarea=c;if(b.nativescrollingarea)return!0;if(d=t(d,!1,g))b.checkarea=0;return d};this.onmousewheelhr=function(d){if(b.locked||!b.railh.scrollable)return!0;if(b.rail.drag)return b.cancelEvent(d);var c=+new Date,g=!1;b.opt.preservenativescrolling&&b.checkarea+600<c&&(b.nativescrollingarea=b.isScrollable(d),
g=!0);b.checkarea=c;return b.nativescrollingarea?!0:b.locked?b.cancelEvent(d):t(d,!0,g)};this.stop=function(){b.cancelScroll();b.scrollmon&&b.scrollmon.stop();b.cursorfreezed=!1;b.scroll.y=Math.round(b.getScrollTop()*(1/b.scrollratio.y));b.noticeCursor();return b};this.getTransitionSpeed=function(c){var f=Math.round(10*b.opt.scrollspeed);c=Math.min(f,Math.round(c/20*b.opt.scrollspeed));return 20<c?c:0};b.opt.smoothscroll?b.ishwscroll&&f.hastransition&&b.opt.usetransition?(this.prepareTransition=function(c,
e){var g=e?20<c?c:0:b.getTransitionSpeed(c),h=g?f.prefixstyle+"transform "+g+"ms ease-out":"";if(!b.lasttransitionstyle||b.lasttransitionstyle!=h)b.lasttransitionstyle=h,b.doc.css(f.transitionstyle,h);return g},this.doScrollLeft=function(c,f){var g=b.scrollrunning?b.newscrolly:b.getScrollTop();b.doScrollPos(c,g,f)},this.doScrollTop=function(c,f){var g=b.scrollrunning?b.newscrollx:b.getScrollLeft();b.doScrollPos(g,c,f)},this.doScrollPos=function(c,e,g){var h=b.getScrollTop(),l=b.getScrollLeft();(0>
(b.newscrolly-h)*(e-h)||0>(b.newscrollx-l)*(c-l))&&b.cancelScroll();!1==b.opt.bouncescroll&&(0>e?e=0:e>b.page.maxh&&(e=b.page.maxh),0>c?c=0:c>b.page.maxw&&(c=b.page.maxw));if(b.scrollrunning&&c==b.newscrollx&&e==b.newscrolly)return!1;b.newscrolly=e;b.newscrollx=c;b.newscrollspeed=g||!1;if(b.timer)return!1;b.timer=setTimeout(function(){var g=b.getScrollTop(),h=b.getScrollLeft(),l,k;l=c-h;k=e-g;l=Math.round(Math.sqrt(Math.pow(l,2)+Math.pow(k,2)));l=b.newscrollspeed&&1<b.newscrollspeed?b.newscrollspeed:
b.getTransitionSpeed(l);b.newscrollspeed&&1>=b.newscrollspeed&&(l*=b.newscrollspeed);b.prepareTransition(l,!0);b.timerscroll&&b.timerscroll.tm&&clearInterval(b.timerscroll.tm);0<l&&(!b.scrollrunning&&b.onscrollstart&&b.onscrollstart.call(b,{type:"scrollstart",current:{x:h,y:g},request:{x:c,y:e},end:{x:b.newscrollx,y:b.newscrolly},speed:l}),f.transitionend?b.scrollendtrapped||(b.scrollendtrapped=!0,b.bind(b.doc,f.transitionend,b.onScrollEnd,!1)):(b.scrollendtrapped&&clearTimeout(b.scrollendtrapped),
b.scrollendtrapped=setTimeout(b.onScrollEnd,l)),b.timerscroll={bz:new BezierClass(g,b.newscrolly,l,0,0,0.58,1),bh:new BezierClass(h,b.newscrollx,l,0,0,0.58,1)},b.cursorfreezed||(b.timerscroll.tm=setInterval(function(){b.showCursor(b.getScrollTop(),b.getScrollLeft())},60)));b.synched("doScroll-set",function(){b.timer=0;b.scrollendtrapped&&(b.scrollrunning=!0);b.setScrollTop(b.newscrolly);b.setScrollLeft(b.newscrollx);if(!b.scrollendtrapped)b.onScrollEnd()})},50)},this.cancelScroll=function(){if(!b.scrollendtrapped)return!0;
var c=b.getScrollTop(),e=b.getScrollLeft();b.scrollrunning=!1;f.transitionend||clearTimeout(f.transitionend);b.scrollendtrapped=!1;b._unbind(b.doc,f.transitionend,b.onScrollEnd);b.prepareTransition(0);b.setScrollTop(c);b.railh&&b.setScrollLeft(e);b.timerscroll&&b.timerscroll.tm&&clearInterval(b.timerscroll.tm);b.timerscroll=!1;b.cursorfreezed=!1;b.showCursor(c,e);return b},this.onScrollEnd=function(){b.scrollendtrapped&&b._unbind(b.doc,f.transitionend,b.onScrollEnd);b.scrollendtrapped=!1;b.prepareTransition(0);
b.timerscroll&&b.timerscroll.tm&&clearInterval(b.timerscroll.tm);b.timerscroll=!1;var c=b.getScrollTop(),e=b.getScrollLeft();b.setScrollTop(c);b.railh&&b.setScrollLeft(e);b.noticeCursor(!1,c,e);b.cursorfreezed=!1;0>c?c=0:c>b.page.maxh&&(c=b.page.maxh);0>e?e=0:e>b.page.maxw&&(e=b.page.maxw);if(c!=b.newscrolly||e!=b.newscrollx)return b.doScrollPos(e,c,b.opt.snapbackspeed);b.onscrollend&&b.scrollrunning&&b.onscrollend.call(b,{type:"scrollend",current:{x:e,y:c},end:{x:b.newscrollx,y:b.newscrolly}});b.scrollrunning=
!1}):(this.doScrollLeft=function(c,f){var g=b.scrollrunning?b.newscrolly:b.getScrollTop();b.doScrollPos(c,g,f)},this.doScrollTop=function(c,f){var g=b.scrollrunning?b.newscrollx:b.getScrollLeft();b.doScrollPos(g,c,f)},this.doScrollPos=function(c,f,g){function e(){if(b.cancelAnimationFrame)return!0;b.scrollrunning=!0;if(r=1-r)return b.timer=v(e)||1;var c=0,d=sy=b.getScrollTop();if(b.dst.ay){var d=b.bzscroll?b.dst.py+b.bzscroll.getNow()*b.dst.ay:b.newscrolly,g=d-sy;if(0>g&&d<b.newscrolly||0<g&&d>b.newscrolly)d=
b.newscrolly;b.setScrollTop(d);d==b.newscrolly&&(c=1)}else c=1;var f=sx=b.getScrollLeft();if(b.dst.ax){f=b.bzscroll?b.dst.px+b.bzscroll.getNow()*b.dst.ax:b.newscrollx;g=f-sx;if(0>g&&f<b.newscrollx||0<g&&f>b.newscrollx)f=b.newscrollx;b.setScrollLeft(f);f==b.newscrollx&&(c+=1)}else c+=1;2==c?(b.timer=0,b.cursorfreezed=!1,b.bzscroll=!1,b.scrollrunning=!1,0>d?d=0:d>b.page.maxh&&(d=b.page.maxh),0>f?f=0:f>b.page.maxw&&(f=b.page.maxw),f!=b.newscrollx||d!=b.newscrolly?b.doScrollPos(f,d):b.onscrollend&&b.onscrollend.call(b,
{type:"scrollend",current:{x:sx,y:sy},end:{x:b.newscrollx,y:b.newscrolly}})):b.timer=v(e)||1}f="undefined"==typeof f||!1===f?b.getScrollTop(!0):f;if(b.timer&&b.newscrolly==f&&b.newscrollx==c)return!0;b.timer&&w(b.timer);b.timer=0;var h=b.getScrollTop(),l=b.getScrollLeft();(0>(b.newscrolly-h)*(f-h)||0>(b.newscrollx-l)*(c-l))&&b.cancelScroll();b.newscrolly=f;b.newscrollx=c;if(!b.bouncescroll||!b.rail.visibility)0>b.newscrolly?b.newscrolly=0:b.newscrolly>b.page.maxh&&(b.newscrolly=b.page.maxh);if(!b.bouncescroll||
!b.railh.visibility)0>b.newscrollx?b.newscrollx=0:b.newscrollx>b.page.maxw&&(b.newscrollx=b.page.maxw);b.dst={};b.dst.x=c-l;b.dst.y=f-h;b.dst.px=l;b.dst.py=h;var k=Math.round(Math.sqrt(Math.pow(b.dst.x,2)+Math.pow(b.dst.y,2)));b.dst.ax=b.dst.x/k;b.dst.ay=b.dst.y/k;var n=0,q=k;0==b.dst.x?(n=h,q=f,b.dst.ay=1,b.dst.py=0):0==b.dst.y&&(n=l,q=c,b.dst.ax=1,b.dst.px=0);k=b.getTransitionSpeed(k);g&&1>=g&&(k*=g);b.bzscroll=0<k?b.bzscroll?b.bzscroll.update(q,k):new BezierClass(n,q,k,0,1,0,1):!1;if(!b.timer){(h==
b.page.maxh&&f>=b.page.maxh||l==b.page.maxw&&c>=b.page.maxw)&&b.checkContentSize();var r=1;b.cancelAnimationFrame=!1;b.timer=1;b.onscrollstart&&!b.scrollrunning&&b.onscrollstart.call(b,{type:"scrollstart",current:{x:l,y:h},request:{x:c,y:f},end:{x:b.newscrollx,y:b.newscrolly},speed:k});e();(h==b.page.maxh&&f>=h||l==b.page.maxw&&c>=l)&&b.checkContentSize();b.noticeCursor()}},this.cancelScroll=function(){b.timer&&w(b.timer);b.timer=0;b.bzscroll=!1;b.scrollrunning=!1;return b}):(this.doScrollLeft=function(c,
f){var g=b.getScrollTop();b.doScrollPos(c,g,f)},this.doScrollTop=function(c,f){var g=b.getScrollLeft();b.doScrollPos(g,c,f)},this.doScrollPos=function(c,f,g){var e=c>b.page.maxw?b.page.maxw:c;0>e&&(e=0);var h=f>b.page.maxh?b.page.maxh:f;0>h&&(h=0);b.synched("scroll",function(){b.setScrollTop(h);b.setScrollLeft(e)})},this.cancelScroll=function(){});this.doScrollBy=function(c,f){var g=0,g=f?Math.floor((b.scroll.y-c)*b.scrollratio.y):(b.timer?b.newscrolly:b.getScrollTop(!0))-c;if(b.bouncescroll){var e=
Math.round(b.view.h/2);g<-e?g=-e:g>b.page.maxh+e&&(g=b.page.maxh+e)}b.cursorfreezed=!1;py=b.getScrollTop(!0);if(0>g&&0>=py)return b.noticeCursor();if(g>b.page.maxh&&py>=b.page.maxh)return b.checkContentSize(),b.noticeCursor();b.doScrollTop(g)};this.doScrollLeftBy=function(c,f){var g=0,g=f?Math.floor((b.scroll.x-c)*b.scrollratio.x):(b.timer?b.newscrollx:b.getScrollLeft(!0))-c;if(b.bouncescroll){var e=Math.round(b.view.w/2);g<-e?g=-e:g>b.page.maxw+e&&(g=b.page.maxw+e)}b.cursorfreezed=!1;px=b.getScrollLeft(!0);
if(0>g&&0>=px||g>b.page.maxw&&px>=b.page.maxw)return b.noticeCursor();b.doScrollLeft(g)};this.doScrollTo=function(c,f){f&&Math.round(c*b.scrollratio.y);b.cursorfreezed=!1;b.doScrollTop(c)};this.checkContentSize=function(){var c=b.getContentSize();(c.h!=b.page.h||c.w!=b.page.w)&&b.resize(!1,c)};b.onscroll=function(c){b.rail.drag||b.cursorfreezed||b.synched("scroll",function(){b.scroll.y=Math.round(b.getScrollTop()*(1/b.scrollratio.y));b.railh&&(b.scroll.x=Math.round(b.getScrollLeft()*(1/b.scrollratio.x)));
b.noticeCursor()})};b.bind(b.docscroll,"scroll",b.onscroll);this.doZoomIn=function(c){if(!b.zoomactive){b.zoomactive=!0;b.zoomrestore={style:{}};var h="position top left zIndex backgroundColor marginTop marginBottom marginLeft marginRight".split(" "),g=b.win[0].style,l;for(l in h){var k=h[l];b.zoomrestore.style[k]="undefined"!=typeof g[k]?g[k]:""}b.zoomrestore.style.width=b.win.css("width");b.zoomrestore.style.height=b.win.css("height");b.zoomrestore.padding={w:b.win.outerWidth()-b.win.width(),h:b.win.outerHeight()-
b.win.height()};f.isios4&&(b.zoomrestore.scrollTop=e(window).scrollTop(),e(window).scrollTop(0));b.win.css({position:f.isios4?"absolute":"fixed",top:0,left:0,"z-index":x+100,margin:"0px"});h=b.win.css("backgroundColor");(""==h||/transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(h))&&b.win.css("backgroundColor","#fff");b.rail.css({"z-index":x+101});b.zoom.css({"z-index":x+102});b.zoom.css("backgroundPosition","0px -18px");b.resizeZoom();b.onzoomin&&b.onzoomin.call(b);return b.cancelEvent(c)}};this.doZoomOut=
function(c){if(b.zoomactive)return b.zoomactive=!1,b.win.css("margin",""),b.win.css(b.zoomrestore.style),f.isios4&&e(window).scrollTop(b.zoomrestore.scrollTop),b.rail.css({"z-index":b.zindex}),b.zoom.css({"z-index":b.zindex}),b.zoomrestore=!1,b.zoom.css("backgroundPosition","0px 0px"),b.onResize(),b.onzoomout&&b.onzoomout.call(b),b.cancelEvent(c)};this.doZoom=function(c){return b.zoomactive?b.doZoomOut(c):b.doZoomIn(c)};this.resizeZoom=function(){if(b.zoomactive){var c=b.getScrollTop();b.win.css({width:e(window).width()-
b.zoomrestore.padding.w+"px",height:e(window).height()-b.zoomrestore.padding.h+"px"});b.onResize();b.setScrollTop(Math.min(b.page.maxh,c))}};this.init();e.nicescroll.push(this)},H=function(e){var c=this;this.nc=e;this.steptime=this.lasttime=this.speedy=this.speedx=this.lasty=this.lastx=0;this.snapy=this.snapx=!1;this.demuly=this.demulx=0;this.lastscrolly=this.lastscrollx=-1;this.timer=this.chky=this.chkx=0;this.time=function(){return+new Date};this.reset=function(e,l){c.stop();var k=c.time();c.steptime=
0;c.lasttime=k;c.speedx=0;c.speedy=0;c.lastx=e;c.lasty=l;c.lastscrollx=-1;c.lastscrolly=-1};this.update=function(e,l){var k=c.time();c.steptime=k-c.lasttime;c.lasttime=k;var k=l-c.lasty,t=e-c.lastx,b=c.nc.getScrollTop(),q=c.nc.getScrollLeft(),b=b+k,q=q+t;c.snapx=0>q||q>c.nc.page.maxw;c.snapy=0>b||b>c.nc.page.maxh;c.speedx=t;c.speedy=k;c.lastx=e;c.lasty=l};this.stop=function(){c.nc.unsynched("domomentum2d");c.timer&&clearTimeout(c.timer);c.timer=0;c.lastscrollx=-1;c.lastscrolly=-1};this.doSnapy=function(e,
l){var k=!1;0>l?(l=0,k=!0):l>c.nc.page.maxh&&(l=c.nc.page.maxh,k=!0);0>e?(e=0,k=!0):e>c.nc.page.maxw&&(e=c.nc.page.maxw,k=!0);k&&c.nc.doScrollPos(e,l,c.nc.opt.snapbackspeed)};this.doMomentum=function(e){var l=c.time(),k=e?l+e:c.lasttime;e=c.nc.getScrollLeft();var t=c.nc.getScrollTop(),b=c.nc.page.maxh,q=c.nc.page.maxw;c.speedx=0<q?Math.min(60,c.speedx):0;c.speedy=0<b?Math.min(60,c.speedy):0;k=k&&50>=l-k;if(0>t||t>b||0>e||e>q)k=!1;e=c.speedx&&k?c.speedx:!1;if(c.speedy&&k&&c.speedy||e){var f=Math.max(16,
c.steptime);50<f&&(e=f/50,c.speedx*=e,c.speedy*=e,f=50);c.demulxy=0;c.lastscrollx=c.nc.getScrollLeft();c.chkx=c.lastscrollx;c.lastscrolly=c.nc.getScrollTop();c.chky=c.lastscrolly;var r=c.lastscrollx,u=c.lastscrolly,d=function(){var e=600<c.time()-l?0.04:0.02;if(c.speedx&&(r=Math.floor(c.lastscrollx-c.speedx*(1-c.demulxy)),c.lastscrollx=r,0>r||r>q))e=0.1;if(c.speedy&&(u=Math.floor(c.lastscrolly-c.speedy*(1-c.demulxy)),c.lastscrolly=u,0>u||u>b))e=0.1;c.demulxy=Math.min(1,c.demulxy+e);c.nc.synched("domomentum2d",
function(){c.speedx&&(c.nc.getScrollLeft()!=c.chkx&&c.stop(),c.chkx=r,c.nc.setScrollLeft(r));c.speedy&&(c.nc.getScrollTop()!=c.chky&&c.stop(),c.chky=u,c.nc.setScrollTop(u));c.timer||(c.nc.hideCursor(),c.doSnapy(r,u))});1>c.demulxy?c.timer=setTimeout(d,f):(c.stop(),c.nc.hideCursor(),c.doSnapy(r,u))};d()}else c.doSnapy(c.nc.getScrollLeft(),c.nc.getScrollTop())}},A=e.fn.scrollTop;e.cssHooks.pageYOffset={get:function(k,c,h){return(c=e.data(k,"__nicescroll")||!1)&&c.ishwscroll?c.getScrollTop():A.call(k)},
set:function(k,c){var h=e.data(k,"__nicescroll")||!1;h&&h.ishwscroll?h.setScrollTop(parseInt(c)):A.call(k,c);return this}};e.fn.scrollTop=function(k){if("undefined"==typeof k){var c=this[0]?e.data(this[0],"__nicescroll")||!1:!1;return c&&c.ishwscroll?c.getScrollTop():A.call(this)}return this.each(function(){var c=e.data(this,"__nicescroll")||!1;c&&c.ishwscroll?c.setScrollTop(parseInt(k)):A.call(e(this),k)})};var B=e.fn.scrollLeft;e.cssHooks.pageXOffset={get:function(k,c,h){return(c=e.data(k,"__nicescroll")||
!1)&&c.ishwscroll?c.getScrollLeft():B.call(k)},set:function(k,c){var h=e.data(k,"__nicescroll")||!1;h&&h.ishwscroll?h.setScrollLeft(parseInt(c)):B.call(k,c);return this}};e.fn.scrollLeft=function(k){if("undefined"==typeof k){var c=this[0]?e.data(this[0],"__nicescroll")||!1:!1;return c&&c.ishwscroll?c.getScrollLeft():B.call(this)}return this.each(function(){var c=e.data(this,"__nicescroll")||!1;c&&c.ishwscroll?c.setScrollLeft(parseInt(k)):B.call(e(this),k)})};var C=function(k){var c=this;this.length=
0;this.name="nicescrollarray";this.each=function(e){for(var h=0;h<c.length;h++)e.call(c[h]);return c};this.push=function(e){c[c.length]=e;c.length++};this.eq=function(e){return c[e]};if(k)for(a=0;a<k.length;a++){var h=e.data(k[a],"__nicescroll")||!1;h&&(this[this.length]=h,this.length++)}return this};(function(e,c,h){for(var l=0;l<c.length;l++)h(e,c[l])})(C.prototype,"show hide toggle onResize resize remove stop doScrollPos".split(" "),function(e,c){e[c]=function(){var e=arguments;return this.each(function(){this[c].apply(this,
e)})}});e.fn.getNiceScroll=function(k){return"undefined"==typeof k?new C(this):e.data(this[k],"__nicescroll")||!1};e.extend(e.expr[":"],{nicescroll:function(k){return e.data(k,"__nicescroll")?!0:!1}});e.fn.niceScroll=function(k,c){"undefined"==typeof c&&("object"==typeof k&&!("jquery"in k))&&(c=k,k=!1);var h=new C;"undefined"==typeof c&&(c={});k&&(c.doc=e(k),c.win=e(this));var l=!("doc"in c);!l&&!("win"in c)&&(c.win=e(this));this.each(function(){var k=e(this).data("__nicescroll")||!1;k||(c.doc=l?
e(this):c.doc,k=new N(c,e(this)),e(this).data("__nicescroll",k));h.push(k)});return 1==h.length?h[0]:h};window.NiceScroll={getjQuery:function(){return e}};e.nicescroll||(e.nicescroll=new C,e.nicescroll.options=F)})(jQuery);

///#source 1 1 /Scripts/login.js
//********************************* FUNCTION FOR NEW HEADER *********************************//
function ValidateInputType() {

    var input = document.getElementById('txtusername');
    if (isNaN(input.value.trim())) {
        ValidateEmailInputValue(input.value.trim());
    }
    else {
        ValidatePhoneInputValue(input.value.trim());
    }
}
ValidateEmailInputValue = function (input) {
    if (input == '') {
        $('#frmLogin .error').text('Vui lòng nhập Email hoặc số điện thoại');
        $('#txtusername').focus();
        return false;
    }
    regem = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!regem.test(input)) {
        $('#frmLogin .error').text('Email không đúng định dạng');
        $('#txtusername').focus();
        return false;
    }

    CheckWithEmail(input, 'frmLogin');

}
ValidatePhoneInputValue = function (input) {
    if (input == '') {
        $('#frmLogin .error').text('Email hoặc Số điện thoại không được để trống');
        $('#txtusername').focus();
        return false;

    } else if (!validatePhoneInput(input)) {
        $('#frmLogin .error').text('Số điện thoại không đúng định dạng');
        $("#txtusername").focus();
        return false;
    }

    CheckWithPhone(input, 'frmLogin');
}
var FLAG_CHECK_MAIL = true;
CheckWithEmail = function (input, id) {
    var data = { strEmail: input };
    if (FLAG_CHECK_MAIL) {
        FLAG_CHECK_MAIL = false;
        CallAjaxPostLogin("/aj/Common/CheckExistEmail/", data, function (e) {
            if (e == "False" && id == 'frmLogin') {
                $('#' + id + ' .error').text('Email chưa được đăng ký');
                $('#txtemail').focus();
                return false;
            }
            else if (e == "True" && id == 'frmRegister') {
                $('#' + id + ' .error').text('Email đã được đăng ký');
                $('#txtemail').focus();
                return false;
            }
            else {
                $('#' + id + ' .error').text('');
            }
        }, onFailed, true);
        FLAG_CHECK_MAIL = true;
    }
}
var FLAG_CHECK_PHONE = true;
CheckWithPhone = function (input, id) {
    var data = { strMobile: input };
    if (FLAG_CHECK_PHONE) {
        FLAG_CHECK_PHONE = false;
        CallAjaxPostLogin("/aj/Common/CheckExistMobile/", data, function (e) {
            if (e == "False" && id == 'frmLogin') {
                $('#' + id + ' .error').text('Số điện thoại chưa được đăng ký');
                $('#txtemail').focus();
                return false;
            }
            else if (e == "True" && id == 'frmRegister') {
                $('#' + id + ' .error').text('Số điện thoại đã được đăng ký');
                $('#txtemail').focus();
                return false;
            }
            else {
                $('#' + id + ' .error').text('');
            }
        }, onFailed, true);
        FLAG_CHECK_PHONE = true;
    }
}
onFailed = function () {
    alert('Thao tác thực hiện không thành công.');
    return;
}
OnSuccessValidate = function (e) {
    if (e == "False") {
        return 0;
    }
    return 1;
}
var FLAG_LOGIN_SITE = true;
function ValidateLogin() {
    ValidateInputType();

    var $form = $('#frmLogin');
    var data = GetAllFormData($form);

    if (FLAG_LOGIN_SITE) {
        FLAG_LOGIN_SITE = false;
        POSTAjax('/aj/Common/Login', data, function () {
            $('#submit-login').hide();
            $('.hloading').show();
        }, function (d) {
            if (d != '' && d != undefined && d != null) {
                if (d.indexOf('@') != -1) {
                    var isOk = d.toString().substr(0, d.indexOf("@"));
                    var url = d.toString().substr(d.indexOf("@") + 1);

                    if (isOk == 1) {
                        location.href = url;
                        return false;
                    }

                    if (isOk == -1) {
                        $('#frmLogin .error').text('Nhập email hoặc số điện thoại');
                        $("#txtusername").focus();
                        return false;
                    }

                    if (isOk == -2) {
                        $('#frmLogin .error').text('Vui lòng nhập mật khẩu');
                        $("#txtpassword").focus();
                        return false;
                    }

                    if (isOk == 0) {
                        $('#frmLogin .error').text('Thông tin đăng nhập không chính xác');
                        return false;
                    }
                }
            }
            else {
                $('#frmLogin .error').text('Thông tin đăng nhập không chính xác');
                return false;
            }
        }, ErrorAjax, true);
        FLAG_LOGIN_SITE = true;
    }
    $('#submit-login').show();
    $('.hloading').hide();
}
function ValidateUserName() {
    var username = document.getElementById('txtname');
    if (username.value.trim() == '') {
        $('#frmRegister .error').text('Bạn chưa nhập họ tên.');
        username.focus();
        return false;
    }
    else {
        if (username.value.trim().length < 5) {
            $('#frmRegister .error').text('Họ tên quá ngắn, tối thiểu 5 ký tự');
            username.focus();
            return false;
        }

        if (username.value.trim().length > 50) {
            $('#frmRegister .error').text('Họ tên quá dài.');
            username.focus();
            return false;
        }
    }
    $('#frmRegister .error').text('');
}
function ValidatePhoneUserRegist() {

    var email = document.getElementById('txtemail');
    if (email.value.trim() == '') {
        $('#frmRegister .error').text('Vui lòng nhập Email hoặc số điện thoại');
        $('#txtemail').focus();
        return false;
    }

    if (email.value.trim().length > 30) {
        $('#frmRegister .error').text('Số điện thoại không hợp lệ');
        username.focus();
        return false;
    }

    var regphn = /^(((09)[0-9][2-9][0-9]{6})|((012)[0-9][2-9][0-9]{6})|((016)[2-9]{2}[0-9]{6}))$/;
    if (!regphn.test(email.value)) {
        $('#frmRegister .error').text('Số điện thoại không hợp lệ');
        $('#txtemail').focus();
        return false;
    }
    CheckWithPhone(email.value, 'frmRegister');
}
function ValidateEmailUserRegist() {

    var email = document.getElementById('txtemail');
    if (email.value.trim() == '') {
        $('#frmRegister .error').text('Vui lòng nhập Email hoặc số điện thoại');
        $('#txtemail').focus();
        return false;
    }

    if (email.value.trim().length > 30) {
        $('#frmRegister .error').text('Email quá dài.');
        username.focus();
        return false;
    }

    regem = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!regem.test(email.value)) {
        $('#frmRegister .error').text('Email không đúng định dạng');
        $('#txtemail').focus();
        return false;
    }
    CheckWithEmail(email.value, 'frmRegister');
}
function ValidatePasswordUserRegist() {
    var pass = document.getElementById('txtpass');
    if (pass.value.trim() == "") {
        $('#frmRegister .error').text('Vui lòng nhập mật khẩu');
        $("#txtpass").focus();
        return false;
    } else if (pass.value.indexOf(' ') >= 0) {
        $('#frmRegister .error').text('Mật khẩu không được chứa khoảng trắng');
        $("#txtpass").focus();
        return false;
    } else if (pass.value.length < 6 || pass.value.length > 20) {
        $('#frmRegister .error').text('Mật khẩu phải có độ dài 6-20 ký tự');
        $("#txtpass").focus();
        return false;
    } else {
        $('#frmRegister .error').text('');
    }
}
function ValidateInputForRegister() {

    var input = document.getElementById('txtemail');
    if (isNaN(input.value.trim())) {
        ValidateEmailUserRegist();
    }
    else {
        ValidatePhoneUserRegist();
    }
}
function ValidatePasswordLogin() {
    var pass = document.getElementById('txtpassword');
    if (pass.value.trim() == "") {
        $('#frmLogin .error').text('Vui lòng nhập mật khẩu');
        $("#txtpassword").focus();
        return false;
    } else if (pass.value.indexOf(' ') >= 0) {
        $('#frmLogin .error').text('Mật khẩu không được chứa khoảng trắng');
        $("#txtpassword").focus();
        return false;
    } else if (pass.value.length < 6 || pass.value.length > 20) {
        $('#frmLogin .error').text('Mật khẩu phải có độ dài 6-20 ký tự');
        $("#txtpassword").focus();
        return false;
    } else {
        $('#frmLogin .error').text('');
    }
}
var FLAG_SUBMIT_REGIST = true;
function SubmitFormRegist() {
    var pass = document.getElementById('txtpass');
    if (pass.value.trim() == "") {
        $('#frmRegister .error').text('Vui lòng nhập mật khẩu');
        $("#txtpass").focus();
        return false;
    } else if (pass.value.indexOf(' ') >= 0) {
        $('#frmRegister .error').text('Mật khẩu không được chứa khoảng trắng');
        $("#txtpass").focus();
        return false;
    } else if (pass.value.length < 6 || pass.value.length > 20) {
        $('#frmRegister .error').text('Mật khẩu phải có độ dài 6-20 ký tự');
        $("#txtpass").focus();
        return false;
    } else {
        $('#frmRegister .error').text('');
    }

    var $form = $('#frmRegister');
    var data = GetAllFormData($form);

    if (FLAG_SUBMIT_REGIST) {
        FLAG_SUBMIT_REGIST = false;
        POSTAjax('/aj/Common/SubmitRegisterInformation', data, function () {
            $('#submit-register').hide();
            $('.hloading').show();
        }, function (d) {
            FLAG_SUBMIT_REGIST = true;
            if (d != '' && d != undefined && d != null) {
                if (d == '-3') {
                    $('#frmRegister .error').text('Vui lòng nhập họ tên của bạn');
                    $("#txtname").focus();
                } else if (d == '-2') {
                    $('#frmRegister .error').text('Vui lòng nhập mật khẩu');
                    $("#txtpassword").focus();
                }
                else if (d == '0') {
                    $('#frmRegister .error').text('Lỗi đăng ký thông tin thành viên, vui lòng thử lại sau.');
                }
                else {
                    alert('Bạn đã đăng ký tài khoản thành công!');
                    var ReturnURL = "";
                    var URL_from_Session = d;
                    if (URL_from_Session != "" && URL_from_Session != undefined)
                        if (URL_from_Session.indexOf('http://') > -1)
                            ReturnURL = URL_from_Session;
                        else
                            ReturnURL = 'http://' + URL_from_Session;
                    else
                        ReturnURL = "/";

                    window.location = ReturnURL;
                }
            }
        }, ErrorAjax, true);
    }

    $('#submit-register').show();
    $('.hloading').hide();
}
function submitRegisterForm() {
    var Email = $("#txtemail").val();
    var $form = $("#frmRegister");

    $form.ajaxSubmit({
        beforeSubmit: function () {
            $("#hloading").css('display', 'block');
            //$("#login-error").html("Đang xử lý, vui lòng đợi... <img border=\"0\" src=\"" + cdnpath + "Content/images/sites/ajax-loader.gif\"/>");
        },
        success: function (e) {
            if (e == 1) {
                //$("#login-error").css('display', 'block');
                $("#hloading").css("display", "none");
                $("#divcaptcha").css("display", "none");
                $("#confirmcapcha").css("display", "none");
                $("#frmRegister .error").html("Vui lòng kiểm tra email để hoàn tất quá trình đăng ký");
            }
            else if (e == 0) {
                $("#frmRegister .error").css('display', 'block');
                $("#frmRegister .error").html("Không gửi được email, vui lòng thử lại sau.");
            } else if (e == -3) {
                $("#frmRegister .error").css('display', 'block');
                $("#frmRegister .error").html("Email này đã được đăng ký. Vui lòng sử dụng email khác");
                $("#txtemail").focus();
            } else if (e == -4) {
                $("#frmRegister .error").css('display', 'block');
                $("#frmRegister .error").html("Email không hợp lệ");
                $("#txtemail").focus();
            }
            else if (e == -5) {
                $("#frmRegister .error").css('display', 'block');
                $("#frmRegister .error").html("Vui lòng nhập địa chỉ Email");
                $("#txtemail").focus();
            }
            else if (e == -1) {
                $("#divcaptcha").css("display", "block");
                $("#confirmcapcha").css("display", "block");
                $("#frmRegister .error").css('display', 'block');
                $("#frmRegister .error").html("<p>Bạn đã đăng ký vượt quá số lần quy định, vui lòng nhập mã xác nhận.</p>");
                $("#txtcaptcha").focus();
            } else if (e == -2) {
                $("#frmRegister .error").css('display', 'block');
                $("#frmRegister .error").html("Mã bảo mật không đúng.");
                $("#txtcaptcha").focus();
            }
        }
    });
}
//********************************* END FUNCTION FOR NEW HEADER *********************************//

function CallAjaxPostLogin(url, dat, sucHandle, errHandle, asy) {
    $.ajax({
        async: asy,
        url: url,
        data: dat,
        type: 'POST',
        cache: false,
        success: function (e) {
            sucHandle(e);
        },
        error: function () {
            errHandle();
        }
    });
}

/******************* LOGIN - HOME *****************************/
$(document).ready(function () {
    var cusid = $("#hfCusid").val();
    if (cusid != undefined) {
        //show location alert
        var ProvinceId = getCookie("CK_CHECK_PROVINCE_OF_USER");
        if (ProvinceId != "") {
            if (ProvinceId != $('#cityID').val())
                $("#divshowlocation").css('display', 'block');
            $("#divshowlocation").delay(2000).fadeOut();
        }
    }
    //for upload avatar
    var fileDiv = document.getElementById("upload-img");
    var fileInput = document.getElementById("upload-image");
    if (fileDiv == null || fileInput == null)
        return;

    fileInput.addEventListener("change", function (e) {
        $("#form-avatar").submit();
    }, false)

});
/*validate phone number*/
function validatePhoneInput(strMobile) {
    //check phone
    var regphn = /^(((09)[0-9][2-9][0-9]{6})|((012)[0-9][2-9][0-9]{6})|((016)[2-9]{2}[0-9]{6}))$/;
    if (!regphn.test(strMobile))
        return false;
    return true;
}
function Failed(e) {
    $("#spanmsg").html('Lỗi: ' + e.toString());
}
function ValidatePassword() {
   // var pass = $("#txtpassword").val();
    var msg = $("#spanmsg");
    if ($("#txtpassword").val() == "") {
        msg.addClass("error");
        msg.html("Vui lòng nhập mật khẩu");
        return false;
        $("#txtpassword").focus();

    } else if ($("#txtpassword").val().indexOf(' ') >= 0) {
        msg.addClass("error");
        msg.html("Mật khẩu không được chứa khoảng trắng");
        return false;
        $("#txtpassword").focus();

    } else if ($("#txtpassword").val().length < 6 || $("#txtpassword").val().length > 20) {
        msg.addClass("error");
        msg.html("Mật khẩu phải có độ dài 6-20 ký tự");
        return false;
        $("#txtpassword").focus();
    } else {
        msg.html("");
    }
    return true;
}
/*Main function to validate Login*/
function FormatValidateCharBlur(iduser) {
    var str = $('#' + iduser + '').val();
    if (isNaN(str)) {
        CheckRegisterFormEmail_Login(iduser);
    }
    else {
        CheckRegisterFormPhone_Login(iduser);
    }
}
function CheckRegisterFormEmail_Login(e) {
    var strEmail = $('#' + e + '').val();
    var msg = $("#spanmsg");
    msg.removeClass("error");
    // check email
    if (strEmail == '') {
        msg.addClass("error");
        msg.html("Vui lòng nhập Email hoặc số điện thoại");
        $("#txtusername").focus();
        return false;
    }
    regem = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!regem.test(strEmail)) {
        msg.addClass("error");
        msg.html("Email không đúng định dạng");
        $("#txtusername").focus();
        return false;
    }
    // return true;
    CheckExistEmail(strEmail);
}
function CheckRegisterFormPhone_Login(m) {
    var msg = $("#spanmsg");
    var strMobile = $('#' + m + '').val();
    // check phone number
    if (strMobile == '') {
        msg.addClass("error");
        msg.html("Email hoặc Số điện thoại không được để trống");
        $("#txtusername").focus();
        return false;
    } else if (!validatePhoneInput(strMobile)) {
        msg.addClass("error");
        msg.html("Số điện thoại không đúng định dạng");
        $("#txtusername").focus();
        return false;
    }
    CheckExistPhone(strMobile);
}
function CheckExistPhone(strMobile) {
    var data = { strMobile: strMobile };
    CallAjaxPostLogin("/aj/Common/CheckExistMobile/", data, CheckPhoneNumberValidSuccessed2, Failed, true);
}
function CheckExistEmail(strEmail) {

    var data = { strEmail: strEmail };
    CallAjaxPostLogin("/aj/Common/CheckExistEmail/", data, CheckEmailValidSuccessed, Failed, true);
}
function CheckPhoneNumberValidSuccessed2(e) {
    var msg = $("#spanmsg");
    if (e == "False") {
        msg.addClass("error");
        msg.html("Số điện thoại chưa được đăng ký");
        return;
    } else {
        msg.html("");
    }
}
function CheckEmailValidSuccessed(e) {
    var msg = $("#spanmsg");
    if (e == "False") {
        msg.addClass("error");
        msg.html("Email chưa được đăng ký");
        return;
    } else {
        msg.html("");
    }
}
function ValidateBeforeSubmit_BK() {
    var username = $("#txtusername").val();
    var pass = $("#txtpassword").val();
    if (username == "") {
        FormatValidateCharBlur('txtusername');
        return false;
    } else if (pass == "") {
        ValidatePassword();
        return false;
    } else { //validate OK
        var $form = $('#form-login');
        $form.ajaxSubmit({
            success: function (e) {
                var vl = "";
                var url = "";
                if (e.toString().indexOf("@") > -1) {
                    vl = e.toString().substr(0, e.indexOf("@"));
                    url = e.toString().substr(e.indexOf("@") + 1);
                } else {
                    vl = e;
                }

                if (vl == "-1") {
                    $("#spanmsg").addClass("error");
                    $("#spanmsg").html("Nhập email hoặc số điện thoại");
                    $("#txtusername").focus();
                } else if (vl == "-2") {
                    $("#spanmsg").addClass("error");
                    $("#spanmsg").html("Vui lòng nhập mật khẩu");
                    $("#txtpassword").focus();
                }
                else if (vl == "0") {
                    $("#spanmsg").addClass("error");
                    $("#spanmsg").html("Thông tin đăng nhập không chính xác");
                }
                else { //success
                    var c_name = "MidAutumn";
                    Delete_Cookie(c_name, "/", ".thegioididong.com");
                    Delete_Cookie(c_name, "/", ".www.thegioididong.com");
                    Delete_Cookie(c_name, "/", "www.thegioididong.com");
                    window.location = url;
                }
            }
        });
    }
}
function ValidateBeforeSubmit() {
    if ($("#txtusername").val() == "") {
        FormatValidateCharBlur('txtusername');
        return false;
    } else if ($("#txtpassword").val() == "") {
        ValidatePassword();
        return false;
    } else { //validate OK
        var $form = $('#form-login');
        var dtInput = GetAllFormData($form);
        CallAjaxPostLogin('/aj/Common/LogIn/', dtInput, function (e) {
            var vl = "";
            var url = "";
            if (e.toString().indexOf("@") > -1) {
                vl = e.toString().substr(0, e.indexOf("@"));
                url = e.toString().substr(e.indexOf("@") + 1);
            } else {
                vl = e;
            }
            if (vl == "-1") {
                $("#spanmsg").addClass("error");
                $("#spanmsg").html("Nhập email hoặc số điện thoại");
                $("#txtusername").focus();
            } else if (vl == "-2") {
                $("#spanmsg").addClass("error");
                $("#spanmsg").html("Vui lòng nhập mật khẩu");
                $("#txtpassword").focus();
            }
            else if (vl == "0") {
                $("#spanmsg").addClass("error");
                $("#spanmsg").html("Thông tin đăng nhập không chính xác");
            }
            else { //success
                var c_name = "MidAutumn";
                Delete_Cookie(c_name, "/", ".thegioididong.com");
                Delete_Cookie(c_name, "/", ".www.thegioididong.com");
                Delete_Cookie(c_name, "/", "www.thegioididong.com");
                window.location = url;
            }
        }, function () {
            $("#spanmsg").addClass("error");
            $("#spanmsg").html("Thông tin đăng nhập không chính xác");
        }, true);
    }
}
/******************* LOGIN - HOME END *****************************/

/*=======================FORGET PASSWORD======================*/
function Validateforgetpass() {
    var strEmail = $("#popupemailforget").val();
    regem = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (strEmail == "") {
        $("#spforget").html("Vui lòng nhập Email của bạn");
        $("#popupemailforget").focus();
        return false;
    }
    else if (!regem.test(strEmail)) {
        $("#spforget").html("Email không đúng định dạng");
        $("#popupemailforget").focus();
        return false;
    } else if (!CheckExistEmailForgetPass(strEmail)) {
        $("#spforget").html("Email không tồn tại trong hệ thống");
        $("#popupemailforget").focus();
        return false;
    }
    return true;
}
function CheckExistEmailForgetPass(strEmail) {
    var data = { strEmail: strEmail };
    CallAjaxPostLogin("/aj/Common/CheckExistEmail/", data, function (e) {
        if (e == "False") {
            return false;
        }
    }, function (e) { }, true);
    return true;
}
/*Send link to email to reset password*/
function SendLinkToResetPassword() {
    var Email = $("#popupemailforget").val();
    if (!Validateforgetpass()) {
        return;
    }
    else {
        $("#spforget").html("");
        var data = { strEmail: Email };
        CallAjaxPost("/aj/Common/ResetPasswordFromEmail/", data, function () {
            $("#divwaiting").css("display", "block");
            $("#btnUpdatePassPopup").attr("disabled", "disabled");
        }, function (e) {
            $("#divwaiting").css("display", "none");
            if (e == 1) {
                alert("Vui lòng kiểm tra email của bạn để tạo mật khẩu mới");
                $.fancybox.close();
            } else {
                $("#spforget").html("Lỗi gửi email. Vui lòng thử lại sau.");
            }
        }, function () {
            $("#divwaiting").css("display", "none");
            $("#spforget").html("Lỗi gửi email. Vui lòng thử lại sau.");
        }, true);
    }
}
/*Validate password before process*/
function validatePasswordForgetPassword(ctl1, ctl2) {
    var pass1 = $('#' + ctl1 + '').val();
    var pass2 = $('#' + ctl2 + '').val();
    if (pass1 == "") {
        $("#spanmsgforget").html("Vui lòng nhập mật khẩu");
        $('#' + ctl1 + '').focus();
    } else if (pass1.length < 6) {
        $("#spanmsgforget").html("Mật khẩu phải có ít nhất 6 kí tự");
        $('#' + ctl1 + '').focus();
    } else if (pass1.length > 20) {
        $("#spanmsgforget").html("Mật khẩu tối đa 20 kí tự");
        $('#' + ctl1 + '').focus();
    } else if (pass2 == "") {
        $("#spanmsgforget").html("Vui lòng xác nhận mật khẩu");
        $('#' + ctl2 + '').focus();
    } else if (pass2.length < 6) {
        $("#spanmsgforget").html("Mật khẩu phải có ít nhất 6 kí tự");
        $('#' + ctl2 + '').focus();
    }
    else if (pass2.length > 20) {
        $("#spanmsgforget").html("Mật khẩu tối đa 20 kí tự");
        $('#' + ctl2 + '').focus();
    } else if (pass1 != pass2) {
        $("#spanmsgforget").html("Mật khẩu không giống nhau");
    } else {
        $("#form-pass").submit();
    }
}
/*=======================FORGET PASSWORD END======================*/

/***************************REGISTER******************************/

/*Check validate email*/
function CheckRegisterFormEmail_Register(e) {
    var strEmail = $('#' + e + '').val();
    regem = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    // check email
    if (strEmail == '') {
        $("#login-error").css('display', 'block');
        $("#login-error").addClass("error");
        $("#login-error").html("Vui lòng nhập địa chỉ Email");
        $("#txtemail").focus();
        return;
    }
    else if (!regem.test(strEmail)) {
        $("#login-error").css('display', 'block');
        $("#login-error").addClass("error");
        $("#login-error").html("Email không đúng định dạng");
        $("#txtemail").focus();
        return;
    }
    CheckExistEmail_Register(strEmail);
}
/*Check email to register - If existed, return error*/
function CheckExistEmail_Register(strEmail) {
    var data = { strEmail: strEmail };
    CallAjaxPostLogin("/aj/Common/CheckExistEmail/", data, function (e) {
        if (e.toString() == "True" || e.toString() == "ERR") {
            $("#login-error").css('display', 'block');
            $("#login-error").html("Email này đã được đăng ký. Vui lòng sử dụng email khác");
        }
    }, function () {
    }, true);
}
/*Send link to email to register account*/
function SendLinkToRegister() {
    var Email = $("#txtemail").val();
    $("#login-error").html("");
    $("#login-error").css("display", "none");
    var data = { strEmail: Email };
    CallAjaxPostLogin("/aj/Common/SendEmailRegister/", data, function (e) {
        if (e == -1) {
            $("#login-error").css('display', 'block');
            $("#login-error").html("Vui lòng kiểm tra email để hoàn tất quá trình đăng ký");
        }
        else if (e == 1) {
            $("#login-error").css('display', 'block');
            $("#login-error").html("Vui lòng kiểm tra email để hoàn tất quá trình đăng ký");
        } else {
            $("#login-error").css('display', 'block');
            // $("#login-error").html("Lỗi trong việc gửi email. Vui lòng thử lại sau.");
            $("#login-error").html("Email này đã được đăng ký. Vui lòng sử dụng email khác");
        }
    }, function () { alert('Loi') }, true);
}
function submitsendEmail() {
    var Email = $("#txtemail").val();
    var $form = $("#form-register");

    $form.ajaxSubmit({
        beforeSubmit: function () {
            $("#login-error").css('display', 'block');
            $("#login-error").html("Đang xử lý, vui lòng đợi... <img border=\"0\" src=\"" + cdnpath + "Content/images/sites/ajax-loader.gif\"/>");
        },
        success: function (e) {
            if (e == 1) {
                $("#login-error").css('display', 'block');
                $("#divcaptcha").css("display", "none");
                $("#divconfirmcaptcha").css("display", "none");
                $("#login-error").html("Vui lòng kiểm tra email để hoàn tất quá trình đăng ký");
            }
            else if (e == 0) {
                $("#login-error").css('display', 'block');
                $("#login-error").html("Không gửi được email, vui lòng thử lại sau.");
            } else if (e == -3) {
                $("#login-error").css('display', 'block');
                $("#login-error").html("Email này đã được đăng ký. Vui lòng sử dụng email khác");
                $("#txtemail").focus();
            } else if (e == -4) {
                $("#login-error").css('display', 'block');
                $("#login-error").html("Email không hợp lệ");
                $("#txtemail").focus();
            }
            else if (e == -5) {
                $("#login-error").css('display', 'block');
                $("#login-error").html("Vui lòng nhập địa chỉ Email");
                $("#txtemail").focus();
            }
            else if (e == -1) {
                $("#divcaptcha").css("display", "block");
                $("#divconfirmcaptcha").css("display", "block");
                $("#login-error").css('display', 'block');
                $("#login-error").html("<p>Bạn đã đăng ký vượt quá số lần quy định, vui lòng nhập mã xác nhận.<ul><ol>Bạn chưa nhập mã bảo mật.</ol></ul></p>");
                $("#txtcaptcha").focus();
            } else if (e == -2) {
                $("#login-error").css('display', 'block');
                $("#login-error").html("Mã bảo mật không đúng.");
                $("#txtcaptcha").focus();
            }
        }
    });
}
/*Validate to show check icon*/
function ValidateRegisterName() {
    var name = $("#txtname").val();
    name = name.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');

    if (name == "") {
        $("#login-error").css('display', 'block');
        $("#login-error").html("Vui lòng nhập tên của bạn");
        $("#txtname").focus();
    } else {
        $("#login-error").html("");
        $("#login-error").css('display', 'none');
        $("#txtname").val(name.trim());
        $("#spcheckname").html("<img border=\"0\" alt=\"Tên OK\" src=\"/Content/images/sites/check-icon.png\"/>");
    }
}
/*Validate to show check icon*/
function ValidateRegisterPassword() {

    var pass1 = $("#txtpassword").val().trim();

    if (pass1 == "") {
        $("#login-error").css('display', 'block');
        $("#login-error").html("Vui lòng nhập mật khẩu của bạn");
        $("#txtpassword").focus();
    } else if (pass1.length < 6) {
        $("#login-error").css('display', 'block');
        $("#login-error").html("Mật khẩu phải có ít nhất 6 kí tự");
        $("#txtpassword").focus();
    } else if (pass1.length > 20) {
        $("#login-error").css('display', 'block');
        $("#login-error").html("Mật khẩu tối đa 20 kí tự");
        $("#txtpassword").focus();
    } else {
        $("#login-error").html("");
        $("#login-error").css('display', 'none');
        $("#spcheckpass").html("<img border=\"0\" alt=\"Tên OK\" src=\"/Content/images/sites/check-icon.png\"/>");
    }

}
//Get customer Avatar from gravatar.com
function get_gravatar(email, size) {
    var SiteURL = window.location.host;
    var realURL = "";
    if (email != "") {
        var MD5 = function (s) { function L(k, d) { return (k << d) | (k >>> (32 - d)) } function K(G, k) { var I, d, F, H, x; F = (G & 2147483648); H = (k & 2147483648); I = (G & 1073741824); d = (k & 1073741824); x = (G & 1073741823) + (k & 1073741823); if (I & d) { return (x ^ 2147483648 ^ F ^ H) } if (I | d) { if (x & 1073741824) { return (x ^ 3221225472 ^ F ^ H) } else { return (x ^ 1073741824 ^ F ^ H) } } else { return (x ^ F ^ H) } } function r(d, F, k) { return (d & F) | ((~d) & k) } function q(d, F, k) { return (d & k) | (F & (~k)) } function p(d, F, k) { return (d ^ F ^ k) } function n(d, F, k) { return (F ^ (d | (~k))) } function u(G, F, aa, Z, k, H, I) { G = K(G, K(K(r(F, aa, Z), k), I)); return K(L(G, H), F) } function f(G, F, aa, Z, k, H, I) { G = K(G, K(K(q(F, aa, Z), k), I)); return K(L(G, H), F) } function D(G, F, aa, Z, k, H, I) { G = K(G, K(K(p(F, aa, Z), k), I)); return K(L(G, H), F) } function t(G, F, aa, Z, k, H, I) { G = K(G, K(K(n(F, aa, Z), k), I)); return K(L(G, H), F) } function e(G) { var Z; var F = G.length; var x = F + 8; var k = (x - (x % 64)) / 64; var I = (k + 1) * 16; var aa = Array(I - 1); var d = 0; var H = 0; while (H < F) { Z = (H - (H % 4)) / 4; d = (H % 4) * 8; aa[Z] = (aa[Z] | (G.charCodeAt(H) << d)); H++ } Z = (H - (H % 4)) / 4; d = (H % 4) * 8; aa[Z] = aa[Z] | (128 << d); aa[I - 2] = F << 3; aa[I - 1] = F >>> 29; return aa } function B(x) { var k = "", F = "", G, d; for (d = 0; d <= 3; d++) { G = (x >>> (d * 8)) & 255; F = "0" + G.toString(16); k = k + F.substr(F.length - 2, 2) } return k } function J(k) { k = k.replace(/rn/g, "n"); var d = ""; for (var F = 0; F < k.length; F++) { var x = k.charCodeAt(F); if (x < 128) { d += String.fromCharCode(x) } else { if ((x > 127) && (x < 2048)) { d += String.fromCharCode((x >> 6) | 192); d += String.fromCharCode((x & 63) | 128) } else { d += String.fromCharCode((x >> 12) | 224); d += String.fromCharCode(((x >> 6) & 63) | 128); d += String.fromCharCode((x & 63) | 128) } } } return d } var C = Array(); var P, h, E, v, g, Y, X, W, V; var S = 7, Q = 12, N = 17, M = 22; var A = 5, z = 9, y = 14, w = 20; var o = 4, m = 11, l = 16, j = 23; var U = 6, T = 10, R = 15, O = 21; s = J(s); C = e(s); Y = 1732584193; X = 4023233417; W = 2562383102; V = 271733878; for (P = 0; P < C.length; P += 16) { h = Y; E = X; v = W; g = V; Y = u(Y, X, W, V, C[P + 0], S, 3614090360); V = u(V, Y, X, W, C[P + 1], Q, 3905402710); W = u(W, V, Y, X, C[P + 2], N, 606105819); X = u(X, W, V, Y, C[P + 3], M, 3250441966); Y = u(Y, X, W, V, C[P + 4], S, 4118548399); V = u(V, Y, X, W, C[P + 5], Q, 1200080426); W = u(W, V, Y, X, C[P + 6], N, 2821735955); X = u(X, W, V, Y, C[P + 7], M, 4249261313); Y = u(Y, X, W, V, C[P + 8], S, 1770035416); V = u(V, Y, X, W, C[P + 9], Q, 2336552879); W = u(W, V, Y, X, C[P + 10], N, 4294925233); X = u(X, W, V, Y, C[P + 11], M, 2304563134); Y = u(Y, X, W, V, C[P + 12], S, 1804603682); V = u(V, Y, X, W, C[P + 13], Q, 4254626195); W = u(W, V, Y, X, C[P + 14], N, 2792965006); X = u(X, W, V, Y, C[P + 15], M, 1236535329); Y = f(Y, X, W, V, C[P + 1], A, 4129170786); V = f(V, Y, X, W, C[P + 6], z, 3225465664); W = f(W, V, Y, X, C[P + 11], y, 643717713); X = f(X, W, V, Y, C[P + 0], w, 3921069994); Y = f(Y, X, W, V, C[P + 5], A, 3593408605); V = f(V, Y, X, W, C[P + 10], z, 38016083); W = f(W, V, Y, X, C[P + 15], y, 3634488961); X = f(X, W, V, Y, C[P + 4], w, 3889429448); Y = f(Y, X, W, V, C[P + 9], A, 568446438); V = f(V, Y, X, W, C[P + 14], z, 3275163606); W = f(W, V, Y, X, C[P + 3], y, 4107603335); X = f(X, W, V, Y, C[P + 8], w, 1163531501); Y = f(Y, X, W, V, C[P + 13], A, 2850285829); V = f(V, Y, X, W, C[P + 2], z, 4243563512); W = f(W, V, Y, X, C[P + 7], y, 1735328473); X = f(X, W, V, Y, C[P + 12], w, 2368359562); Y = D(Y, X, W, V, C[P + 5], o, 4294588738); V = D(V, Y, X, W, C[P + 8], m, 2272392833); W = D(W, V, Y, X, C[P + 11], l, 1839030562); X = D(X, W, V, Y, C[P + 14], j, 4259657740); Y = D(Y, X, W, V, C[P + 1], o, 2763975236); V = D(V, Y, X, W, C[P + 4], m, 1272893353); W = D(W, V, Y, X, C[P + 7], l, 4139469664); X = D(X, W, V, Y, C[P + 10], j, 3200236656); Y = D(Y, X, W, V, C[P + 13], o, 681279174); V = D(V, Y, X, W, C[P + 0], m, 3936430074); W = D(W, V, Y, X, C[P + 3], l, 3572445317); X = D(X, W, V, Y, C[P + 6], j, 76029189); Y = D(Y, X, W, V, C[P + 9], o, 3654602809); V = D(V, Y, X, W, C[P + 12], m, 3873151461); W = D(W, V, Y, X, C[P + 15], l, 530742520); X = D(X, W, V, Y, C[P + 2], j, 3299628645); Y = t(Y, X, W, V, C[P + 0], U, 4096336452); V = t(V, Y, X, W, C[P + 7], T, 1126891415); W = t(W, V, Y, X, C[P + 14], R, 2878612391); X = t(X, W, V, Y, C[P + 5], O, 4237533241); Y = t(Y, X, W, V, C[P + 12], U, 1700485571); V = t(V, Y, X, W, C[P + 3], T, 2399980690); W = t(W, V, Y, X, C[P + 10], R, 4293915773); X = t(X, W, V, Y, C[P + 1], O, 2240044497); Y = t(Y, X, W, V, C[P + 8], U, 1873313359); V = t(V, Y, X, W, C[P + 15], T, 4264355552); W = t(W, V, Y, X, C[P + 6], R, 2734768916); X = t(X, W, V, Y, C[P + 13], O, 1309151649); Y = t(Y, X, W, V, C[P + 4], U, 4149444226); V = t(V, Y, X, W, C[P + 11], T, 3174756917); W = t(W, V, Y, X, C[P + 2], R, 718787259); X = t(X, W, V, Y, C[P + 9], O, 3951481745); Y = K(Y, h); X = K(X, E); W = K(W, v); V = K(V, g) } var i = B(Y) + B(X) + B(W) + B(V); return i.toLowerCase() };
        var size = size || 80;

        if (MD5(email) != "") {
            realURL = "http://www.gravatar.com/avatar.php?gravatar_id=" + MD5(email) + "&default=" + encodeURI('http://www.thegioididong.com/Content/images/sites/default_avatar_large.png') + "&size=90";
        }
    } else {
        realURL = 'http://www.thegioididong.com/Content/images/sites/default_avatar_large.png';
    }
    return realURL;
}
//Set link to Register page, include returnURL.
//ex: www.tgdd.com/dang-ky?returnurl=www.tgdd.com/dtdd/iphone-5
function SetLinkRegister() {
    var param = getQuerystring("returnurl"); //redirect from dang-ky to dang-nhap
    if (param != "")
        window.location = "/dang-ky?returnurl=" + param;
    else {
        var curURL = window.location.href;
        var dataInput = { content: curURL };
        CallAjaxPostLogin("/aj/Common/EncryptQeryString/", dataInput, function (data) {
            if (data != "") {
                window.location = "/dang-ky?returnurl=" + data;
            }

        }, function () { }, true);
    }



}
/*set link to login page with returnURL param*/
function SetLinkLogin() {
    var param = getQuerystring("returnurl"); //redirect from dang-ky to dang-nhap
    if (param != "")
        window.location = "/dang-nhap?returnurl=" + param;
    else {
        var curURL = window.location.href;
        var dataInput = { content: curURL };
        CallAjaxPostLogin("/aj/Common/EncryptQeryString/", dataInput, function (data) {
            if (data != "") {
                window.location = "/dang-nhap?returnurl=" + data;
            }

        }, function () { }, true);
    }

}
/*Change avatar when register Profile*/
function ChangeAvatar() {

    var strFile = $("#upload-image").val();

    var databefore = { strFile: strFile };
    CallAjaxPost("/aj/Common/UploadAvatar/", databefore, BeforeSendAjax, function (e) {
        var data = $.parseJSON(e.currentTarget.response);
        if (data.message == "upload sucessfully") {

            var li = document.createElement("li");
            var image = document.createElement("img");
            image.setAttribute("id", "img-" + data.ImageId);
            image.setAttribute("name", data.ImageName);
            var thumbnail = document.getElementById("thumbnail");
            image.src = data.imageUrl;
            li.appendChild(image);
            thumbnail.appendChild(li);

            //  $("#thumbnail").html("<li><img border=\"0\" alt=\"" + data.ImageName + "\" src=\"" + data.imageUrl + "\"/></li>");
            setInterval(this, 5);
        }
        if (data.message == "maximum size upload") {
            alert("Dung lượng file upload quá lớn. Tối đa 1MB.");
        }
        if (data.message == "maximum file upload") {
            alert("Bạn chỉ được phép thêm tối đa 1 hình.");
        }

        if (data.message == "invalid file upload") {
            alert("Vui lòng chọn hình ảnh đúng định dạng");
        }
    }, ErrorAjax, true);
}
/*Complete create customer and redirect to previous link*/
function CreateCustomer() {
    var $frm = $("#form-register-final");
    $frm.ajaxSubmit({
        beforeSubmit: function () {
            $("#login-error").css('display', 'block');
            $("#login-error").html("Đang xử lý, vui lòng đợi trong giây lát... <img border=\"0\" alt=\"Loading\" src=\"" + cdnpath + "/Content/images/sites/ajax-loader.gif\"/>");
        },
        success: function (e) {
            if (e == '-3') {
                $("#login-error").css('display', 'block');
                $("#login-error").html("Vui lòng nhập họ tên của bạn");
                $("#txtname").focus();
            } else if (e == '-2') {
                $("#login-error").css('display', 'block');
                $("#login-error").html("Vui lòng nhập mật khẩu");
                $("#txtpassword").focus();
            }
            else if (e == '0') {
                $("#login-error").css('display', 'block');
                $("#login-error").html("Lỗi đăng ký thông tin thành viên, vui lòng thử lại sau.");
            }
            else {
                var ReturnURL = "";
                var URL_from_Session = e;
                if (URL_from_Session != "" && URL_from_Session != undefined)
                    if (URL_from_Session.indexOf('http://') > -1)
                        ReturnURL = URL_from_Session;
                    else
                        ReturnURL = 'http://' + URL_from_Session;
                else
                    ReturnURL = "/";

                window.location = ReturnURL;
            }
        }
    });
}
/***************************REGISTER END******************************/

/********************* LOGIN - MAIN **********************************/
/*get querystring*/
function getQuerystring(key, default_) {
    if (default_ == null) default_ = "";
    key = key.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + key + "=([^&#]*)");
    var qs = regex.exec(window.location.href);
    if (qs == null)
        return default_;
    else
        return qs[1];
}
function Checkdataonblur(iduser) {
    var str = $('#' + iduser + '').val();
    if (isNaN(str)) {
        CheckEmail_LoginMain(iduser);
    }
    else {
        CheckPhone_LoginMain(iduser);
    }
}
function CheckEmail_LoginMain(e) {
    var strEmail = $('#' + e + '').val();
    regem = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var msg = $("#login-error");
    // check email
    if (strEmail == '' || strEmail == undefined) {
        $("#login-error").css('display', 'block');
        msg.html("Email hoặc Số điện thoại không được để trống");
        $("#txtusername").focus();
        return false;
    }
    if (!regem.test(strEmail)) {
        $("#login-error").css('display', 'block');
        msg.html("Email không đúng định dạng");
        $("#txtusername").focus();
        return false;
    }
    // return true;
    CheckExistEmailMain(strEmail);
}
function CheckPhone_LoginMain(m) {
    var msg = $("#login-error");
    var strMobile = $('#' + m + '').val();
    // check phone number
    if (strMobile == '' || strMobile == undefined) {
        $("#login-error").css('display', 'block');
        msg.html("Email hoặc Số điện thoại không được để trống");
        $("#txtusername").focus();
        return false;

    } else if (!validatePhoneInput(strMobile)) {
        $("#login-error").css('display', 'block');
        msg.html("Số điện thoại không đúng định dạng");
        $("#txtusername").focus();
        return false;
    }
    msg.html("");
    $("#login-error").css('display', 'none');
    CheckExistPhoneMain(strMobile);
}
function CheckExistPhoneMain(strMobile) {
    var data = { strMobile: strMobile };
    CallAjaxPostLogin("/aj/Common/CheckExistMobile/", data, function (e) {
        if (e == "True")
            return true;
    }, Failed, true);
    return false;
}
function CheckExistEmailMain(strEmail) {
    var data = { strEmail: strEmail };
    CallAjaxPostLogin("/aj/Common/CheckExistEmail/", data, function (e) {
        if (e == "True")
            return true;
    }, Failed, true);
    return false;
}
function ValidatePassMain(e) {
    var pass = $('#' + e + '').val();
    var msg = $("#login-error");
    if (pass == '' || pass == undefined) {
        $("#login-error").css('display', 'block');
        msg.html("Vui lòng nhập mật khẩu");
        $("#txtpassword").focus();
        return false;
    } else if (pass.indexOf(' ') >= 0) {
        $("#login-error").css('display', 'block');
        msg.html("Mật khẩu không được chứa khoảng trắng");
        return false;
        $("#txtpassword").focus();
    } else if (pass.length < 6 || pass.length > 20) {
        $("#login-error").css('display', 'block');
        msg.html("Mật khẩu phải có độ dài 6-20 ký tự");
        return false;
        $("#txtpassword").focus();
    }
    msg.html("");
    $("#login-error").css('display', 'none');
    return true;
}
//Xử lý login Main
function ValidateDataBeforeLogin() {
    var $formMain = $('#form-login-main');
    var data = GetAllFormData($formMain);
    if (data['txtusername'] == '' || data['txtusername'] == undefined) {
        Checkdataonblur(data['txtusername']);
        return false;
    }
    else if (data['txtpassword'] == '' || data['txtpassword'] == undefined) {
        ValidatePassMain(data['txtpassword']);
        return false;
    }
    else {
        POSTAjax("/aj/Common/ProcessLogin", data, function () {
            $("#login-error").css('display', 'block');
            $("#login-error").html("Đang xử lý, vui lòng đợi... <img border=\"0\" alt=\"Loading\" src=\"" + cdnpath + "/Content/images/sites/ajax-loader.gif\"/>");
        },
            function (e) {
                var vl = "";
                var url = "";
                if (e.indexOf("@") > -1) {
                    vl = e.substr(0, e.indexOf("@"));
                    url = e.substr(e.indexOf("@") + 1);
                } else {
                    vl = e;
                }

                if (vl == "0") {
                    $("#login-error").css('display', 'block');
                    $("#login-error").html("Thông tin đăng nhập không chính xác.");
                } else if (vl == "-1") {
                    $("#divcaptcha").css("display", "block");
                    $("#divconfirmcaptcha").css("display", "block");
                    $("#login-error").css('display', 'block');
                    $("#login-error").html("<p>Bạn đã đăng nhập vượt quá số lần quy định, vui lòng nhập mã xác nhận.<ul><ol>Bạn chưa nhập mã bảo mật.</ol></ul></p>");
                    $("#txtcaptcha").focus();
                }
                else if (vl == "-2") {
                    $("#login-error").css('display', 'block');
                    $("#login-error").html("Mã bảo mật không đúng.");
                    $("#txtcaptcha").focus();
                }
                else {
                    if (url == "" || url.indexOf("dang-nhap") > -1 || url.indexOf("dang-ky") > -1)
                        url = "/";
                    window.location = url;
                }
            }, function () {
                $("#login-error").css('display', 'block');
                $("#login-error").html("Thông tin đăng nhập không chính xác.");
            }, true);
    }
}
function SetLinkLogin() {
    var returnURL = getQuerystring("returnurl");
    var curURL = window.location.href;
    if (returnURL != "")
        window.location = "/dang-nhap?returnurl=" + returnURL;
    else
        window.location = "/dang-nhap";
}

/********************* LOGIN - MAIN END **********************************/
///#source 1 1 /Scripts/productdetailv2.js
/*Created by: Nguyen Duc Hien*/

function ShowProductInfo() {
    $(".expand-button").hide();
    $(".collapse-button").show();
    $("#productinfo").slideDown();
    $('#productinfo a.collapse-button').remove();
    $("#productinfo").append('<a href="javascript:void(0);" class="collapse-button" onclick="HideProductInfo();" style="display: inline;">Đóng cấu hình chi tiết</a>');
    document.location.hash = "!chuc-nang-cau-hinh";
}
function HideProductInfo() {
    $(".expand-button").show();
    $(".collapse-button").hide();
    $("#productinfo").hide();
    window.history.pushState({}, document.title, location.href.replace("#!chuc-nang-cau-hinh", ""));
}
function ShowVideoByClick(object, youtbeId) {
    var src = "http://www.youtube.com/embed/" + youtbeId + "\?autoplay=1";
    var iframe = '<iframe title="" width="700" height="390" src="' + src + '" frameborder="0" allowfullscreen="1"></iframe>';
    $('#gZ .videoshow').html(iframe);
    $('.relatevideo .videoitem').removeClass('active');
    $('.relatevideo .videoitem').children('span.activemedia').removeClass('activemedia').addClass('noactive');
    $(object).addClass('active');
    $(object).children('span.noactive').removeClass('noactive').addClass('activemedia');
}

var FLAG_GET_ALBUM_IMAGE = true;
function LoadCollectionImageById(object, aid) {
    if (!FLAG_GET_ALBUM_IMAGE)
        return;

    FLAG_GET_ALBUM_IMAGE = false;
    var limgID = aid;
    var talbum = totalA;
    var data = { iProductID: product, slstAlbumID: limgID, iCategoryID: cat, totalAlbum: talbum };
    POSTAjax("/aj/ProductDetailV2/GetListImage/", data, function () {
        $('.sl-loading').css('height', $('.slide-wrapper').height());
        $('.sl-loading').show();
    }, function (e) {
        if (e != null || e != '') {
            removeActiveMedia();
            $('.slide-wrapper .oneByOne1').hide();
            $('#z360').hide();
            stopSlider();
            $('#gZ').html(e).fadeIn();
            $('#gZ').append('<a class="close-media" href="javascript:void(0);" onclick="CloseMedia(\'gZ\');"></a>');
            object.children('span').removeClass('noactive').addClass('mediaactive');
            object.children('.border').addClass('border-active');

            function doubleSlider2Load(args) {
                var slideNumber = args.currentSlideNumber;
                //if (slideNumber >= 6)
                //currentSlide = args.currentSlideNumber;
                //{
                $('.slederdetail').iosSlider('goToSlide', args.currentSlideNumber);
                //}
                //else
                //{
                //    $('.slider2').iosSlider('goToSlide', args.currentSlideNumber - 1);
                //}
                /* update indicator */
                $('.slederdetail .button').removeClass('selected');
                $('.slederdetail .button:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');
            }

            $('.slider1').iosSlider({
                scrollbar: false,
                snapToChildren: true,
                desktopClickDrag: true,
                infiniteSlider: false,
                navPrevSelector: $('.doubleSliderPrevButton'),
                navNextSelector: $('.doubleSliderNextButton'),
                scrollbarHeight: '2',
                scrollbarBorderRadius: '0',
                scrollbarOpacity: '0.5',
                onSliderLoaded: doubleSlider2Load,
                onSlideChange: doubleSlider2Load
            });

            $('.slederdetail .button').each(function (i) {
                $(this).bind('click', function () {
                    $('.slider1').iosSlider('goToSlide', i + 1);
                });
            });

            $('.slederdetail').iosSlider({
                desktopClickDrag: true,
                snapToChildren: true,
                snapSlideCenter: false,
                infiniteSlider: false,
                navPrevSelector: $('.PrevButton'),
                navNextSelector: $('.NextButton')
            });
        }
        $('#dlding').fadeOut(1000);
        $('.sl-loading').hide();
        FLAG_GET_ALBUM_IMAGE = true;
    }, function () { }, true);
}

var FLAG_GET_ALL_ALBUM = true;
function LoadAllAlbum(object, id) {
    if (!FLAG_GET_ALL_ALBUM)
        return;

    FLAG_GET_ALL_ALBUM = false;
    var data = { iProductID: product, iCategoryID: cat, slideID: id };
    POSTAjax("/aj/ProductDetailV2/GetAllAlbum/", data, function () {
        $('.sl-loading').css('height', $('.slide-wrapper').height());
        $('.sl-loading').show();
    }, function (e) {
        if (e != null || e != '') {
            removeActiveMedia();
            $('.slide-wrapper .oneByOne1').hide();
            $('#z360').hide();
            stopSlider();
            $('#gZ').html(e).fadeIn();
            $('#gZ').append('<a class="close-media" href="javascript:void(0);" onclick="CloseMedia(\'gZ\');"></a>');
            object.children('span').removeClass('noactive').addClass('mediaactive');
            object.children('.border').addClass('border-active');

            function doubleSlider2Load(args) {
                debugger;
                var slideNumber = args.currentSlideNumber;
                //if (slideNumber >= 6)
                //{
                $('.slider2').iosSlider('goToSlide', args.currentSlideNumber);
                //}
                /* update indicator */
                $('.slider2 .button').removeClass('selected');
                $('.slider2 .button:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');
            }

            $('.slider1').iosSlider({
                scrollbar: false,
                snapToChildren: true,
                desktopClickDrag: true,
                infiniteSlider: false,
                navPrevSelector: $('.doubleSliderPrevButton'),
                navNextSelector: $('.doubleSliderNextButton'),
                scrollbarHeight: '2',
                scrollbarBorderRadius: '0',
                scrollbarOpacity: '0.5',
                onSliderLoaded: doubleSlider2Load,
                onSlideChange: doubleSlider2Load
            });

            $('.slider2 .button').each(function (i) {
                $(this).bind('click', function () {
                    $('.slider1').iosSlider('goToSlide', i + 1);
                });
            });

            $('.slider2').iosSlider({
                desktopClickDrag: true,
                snapToChildren: true,
                snapSlideCenter: false,
                infiniteSlider: false,
                navPrevSelector: $('.PrevButton1'),
                navNextSelector: $('.NextButton')
            });
        }
        $('#dlding').fadeOut(1000);
        $('.sl-loading').hide();
        FLAG_GET_ALL_ALBUM = true;
    }, function () { }, true);
}

function ReturnToAlbum() {
    if ($('.gal .galcollection span').hasClass('mediaactive')) {
        CloseMedia('gZ');
    }
    $('.gal .galcollection').click();
}

var FLAG_GET_IMAGES_IN_COLL = true;
function LoadImagesInCollection(object, id) {
    if (!FLAG_GET_IMAGES_IN_COLL)
        return;

    var talbum = totalA;
    var data = { AlbumID: id, iProductID: product, iCategoryID: cat, totalAlbum: talbum };
    POSTAjax("/aj/ProductDetailV2/GetDetailImageInAlbum/", data, function () {
        $('.sl-loading').css('height', $('.slide-wrapper').height());
        $('.sl-loading').show();
    }, function (e) {
        if (e != null || e != '') {
            //removeActiveMedia();
            $('.slide-wrapper .oneByOne1').hide();
            $('#z360').hide();
            stopSlider();
            $('#gZ').html(e).fadeIn();
            $('#gZ').append('<a class="close-media" href="javascript:void(0);" onclick="CloseMedia(\'gZ\');"></a>');

            function doubleSlider2Load(args) {
                var slideNumber = args.currentSlideNumber;
                //if (slideNumber >= 6)
                //currentSlide = args.currentSlideNumber;
                //{
                $('.slederdetail').iosSlider('goToSlide', args.currentSlideNumber);
                //}
                //else
                //{
                //    $('.slider2').iosSlider('goToSlide', args.currentSlideNumber - 1);
                //}
                /* update indicator */
                $('.slederdetail .button').removeClass('selected');
                $('.slederdetail .button:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');
            }

            $('.slider1').iosSlider({
                scrollbar: false,
                snapToChildren: true,
                desktopClickDrag: true,
                infiniteSlider: false,
                navPrevSelector: $('.doubleSliderPrevButton'),
                navNextSelector: $('.doubleSliderNextButton'),
                scrollbarHeight: '2',
                scrollbarBorderRadius: '0',
                scrollbarOpacity: '0.5',
                onSliderLoaded: doubleSlider2Load,
                onSlideChange: doubleSlider2Load
            });

            $('.slederdetail .button').each(function (i) {
                $(this).bind('click', function () {
                    $('.slider1').iosSlider('goToSlide', i + 1);
                });
            });

            $('.slederdetail').iosSlider({
                desktopClickDrag: true,
                snapToChildren: true,
                snapSlideCenter: false,
                infiniteSlider: false,
                navPrevSelector: $('.PrevButton'),
                navNextSelector: $('.NextButton')
            });

        }
        $('#dlding').fadeOut(1000);
        $('.sl-loading').hide();
        FLAG_GET_VIDEOS = true;
    }, function () { }, true);
}
var FLAG_GET_VIDEOS = true;
function LoadCollectionVideoById(object, id) {
    if (!FLAG_GET_VIDEOS)
        return;

    FLAG_GET_VIDEOS = false;
    var data = { iProductID: product, iSlideID: id };

    POSTAjax("/aj/ProductDetailV2/GetVideo/", data, function () {
        $('.sl-loading').css('height', $('.slide-wrapper').height());
        $('.sl-loading').show();
    }, function (e) {
        if (e != null || e != '') {
            removeActiveMedia();
            $('.slide-wrapper .oneByOne1').hide();
            $('#z360').hide();
            stopSlider();
            $('#gZ').html(e).fadeIn();
            $('#gZ').append('<a class="close-media" href="javascript:void(0);" onclick="CloseMedia(\'gZ\');"></a>');
            object.children('span').removeClass('noactive').addClass('mediaactive');
            object.children('.border').addClass('border-active');
            var type = $(object).attr('data-type');
            //if (type == 0) {
                $('.relatevideo').iosSlider({
                    desktopClickDrag: true,
                    snapToChildren: true,
                    snapSlideCenter: false,
                    infiniteSlider: false,
                    navPrevSelector: $('.PrevButton1'),
                    navNextSelector: $('.NextButton1')
                });
            //}
        }
        $('#dlding').fadeOut(1000);
        $('.sl-loading').hide();
        FLAG_GET_VIDEOS = true;
    }, function () { }, true);
}

function ActiveSlide(status) {
    if ($('#banner').children().length > 0) {
        $('#banner').oneByOne({
            className: 'oneByOne1',
            easeType: 'random',
            showArrow: true,
            slideShow: status,
            slideShowDelay: 5000,
            autoHideButton: false,
            showButton: true
        });
    }
}

function stopSlider() {
    clearInterval($('#banner').data('interval'));
}

function CloseMedia(obj) {
    $('#' + obj).hide();
    removeActiveMedia();
    $('.slide-wrapper .oneByOne1').fadeIn();
    //ActiveSlide(false);
    StopYouTube();
    $('.product-name').html(origintext);
}

function StopYouTube() {
    $('.videoshow').html('');
    //$('iframe').attr('src', $('iframe').attr('src'));
}

function removeActiveMedia() {
    $('.wrapper-gallery .gal .video').removeClass('active');
    $('.wrapper-gallery .gal .border').removeClass('border-active');
    $('.wrapper-gallery .gal span').removeClass('mediaactive').addClass('noactive');
}

function ActiveSlideImageAlbum(status) {
    if (status) {
        function doubleSlider2Load(args) {
            var slideNumber = args.currentSlideNumber;
            //if (slideNumber >= 6)
            //currentSlide = args.currentSlideNumber;
            //{
            $('.slider2').iosSlider('goToSlide', args.currentSlideNumber);
            //}
            //else
            //{
            //    $('.slider2').iosSlider('goToSlide', args.currentSlideNumber - 1);
            //}
            /* update indicator */
            $('.slider2 .button').removeClass('selected');
            $('.slider2 .button:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');
        }

        $('.slider1').iosSlider({
            scrollbar: false,
            snapToChildren: true,
            desktopClickDrag: true,
            infiniteSlider: false,
            navPrevSelector: $('.doubleSliderPrevButton'),
            navNextSelector: $('.doubleSliderNextButton'),
            scrollbarHeight: '2',
            scrollbarBorderRadius: '0',
            scrollbarOpacity: '0.5',
            onSliderLoaded: doubleSlider2Load,
            onSlideChange: doubleSlider2Load
        });

        $('.slider2 .button').each(function (i) {
            $(this).bind('click', function () {
                $('.slider1').iosSlider('goToSlide', i + 1);
            });
        });

        $('.slider2').iosSlider({
            desktopClickDrag: true,
            snapToChildren: true,
            snapSlideCenter: false,
            infiniteSlider: false
        });
    }
}

var FLAG_GET_NAME_ALBUM_IMAGE_RELATE = true;
function GetNameAlbumVideoRelateBySlide(id) {
    if (!FLAG_GET_NAME_ALBUM_IMAGE_RELATE)
        return;

    var data = { iCategoryID: cat, iProductID: product, slideID: id };
    $.ajax({
        type: "GET",
        url: "/aj/ProductDetailV2/GetVideoAlbumRelateSlide/",
        dataType: "json",
        data: data,
        success: function (e) {
            if (e != null || e != '') {
                //var d = $.parseJSON(e);
                var d = $.parseJSON(JSON.stringify(e));
                console.log(d);
                if (d.svn != undefined && d.svn != "") {
                    $('.video span.caption').text(d.svn);
                    $('.video .border img').attr('src', d.icv);
                    $('.video').attr('data-video', d.ytb)
                    //console.log(d.icv);
                }
                //$('.video span.caption').attr('full', d.vn);
                if (d.san != undefined && d.san != "") {
                    $('.galcollection span.caption').text(d.san);
                    $('.galcollection .border img').attr('src', d.ica);
                    $('.galcollection').attr('data-img', d.aid);
                    //console.log(d.ica);
                }
            }
            FLAG_GET_NAME_ALBUM_IMAGE_RELATE = true;
        },
        error: function (xhr, status, error) {
            //alert(status);
        }
    });
}

function ChangeColor_v3(strColorCode, strProductCode, iProductId, cateid) {
    if (strColorCode == "")
        return;
    sColorCode = strColorCode;
    $.ajax({
        url: '/aj/Order/GetPriceByCode/',
        type: 'GET',
        data: { prodCode: strProductCode, cateId: cateid, iProductId: iProductId, iOrderType: $('input[name=iOrderType]').val() },
        cache: true,
        dataType: 'json',
        beforeSend: function () {
            //$('#pu-quickorder .price-wrapper').show();//gia
            //$('#pu-quickorder .price-wrapper').html('<img src="/Content/images/sites/ajax-loader.gif">');
        },
        success: function (d) {
            if (d.p == '0') {
                $('#pu-quickorder .product-info').hide();
                $("#pu-quickorder .product-info span").hide();
                $("#pu-quickorder .product-info cite").hide();
            }
            else {
                if ($('input[name=iOrderType]').val() == "0") {
                    $('#pu-quickorder .product-info span.price').html(formatNumberValue(d.p) + "₫");
                    $('#pu-quickorder .product-info span.price').show();
                }
                else {
                    $('#pu-quickorder .product-info span.oprice').html(formatNumberValue(d.p) + "₫");
                    $('#pu-quickorder .product-info span.oprice').show();
                    if (d.np != '0') {
                        $('#pu-quickorder .product-info span.price').html(formatNumberValue(d.np) + "₫");
                        $('#pu-quickorder .product-info span.price').show();
                    }
                }
                if (d.dc != '0') {
                    $('#pu-quickorder .product-info span.price').html(formatNumberValue(d.np) + "₫" + '<cite> giảm </cite>' + d.dc + '%');
                    $('#pu-quickorder .product-info span.price').show();
                }
                $("input[name=hdProductCode]").val(strProductCode);
            }
        },
        error: function (e) {
        }
    })
    for (var k = 0; k < ArrayColor.length; k++) {
        if (ArrayColor[k].toString() == strColorCode) {
            if (ArrayPicture[k].toString() != "") {
                var objimageicon = $("#pu-quickorder #" + ArrayColor[k].toString() + "");
                $("#pu-quickorder .product-info .colleft img").attr("src", ArrayPicture[k].toString());
                objimageicon.removeClass("image_con");
                objimageicon.addClass("active");
            }
            $("#pu-quickorder .product-info .colright .pname").html($("#hdproductname").val() + " (màu " + ArrayName[k].toString().toLowerCase() + ")");
            //location.hash = "mau-" + FormatUnicode(ArrayName[k].toString());
        }
        else {
            var objimageicon = $("#pu-quickorder #" + ArrayColor[k].toString() + "");
            objimageicon.removeClass("active");
            objimageicon.addClass("image_con");
        }
    }
    RefreshOrderTotal();
    $("#pu-quickorder .product-color ul").hide();
}

function RefreshOrderTotal() {
    var data = $('form#frmCatQuickOrder').serialize();
    POSTAjax('/aj/Order/RefreshOrderTotal/', data, function () { }, function (e) {
        if (e == null || e == '') {
            alert('Chức năng đang được bảo trì, vui lòng thử lại sau');
        }
        else {
            $('#spOrderTotal').html(e);
            $('#frmCatQuickOrder .colright .totalvalue').show();
        }
        $('#dlding').fadeOut(1000);
        QUICK_ORDER_BOX_CALLING_FLAG = true;
    }, function () { }, true);
}

function formatNumberValue(number) {
    var intLength = number.toString().length;
    var intLeft = 0;
    var strNumber = '';
    var strNewNumber = '';
    while (intLength % 3 != 0) {
        intLength++;
        intLeft++;
    }
    if (intLeft != 0) {
        for (var intCount = 0; intCount < intLeft; intCount++) {
            strNumber += '0';
        }
    }
    strNumber += number.toString();
    for (var intCount = 0; intCount < intLength; intCount++) {
        strNewNumber += strNumber.charAt(intCount);

        if (intCount > 0 && (intCount + 1) % 3 == 0 && intCount != intLength - 1) {
            strNewNumber += '.';
        }
    }
    strNewNumber = strNewNumber.substring(intLeft);
    return strNewNumber;
}

$(function () {
    // Bind the event.
    $(window).hashchange(function () {
        if (location.hash != '') {
            if (location.hash == '#!danh-gia-chi-tiet') {
                load_content();
                load_meta(0);
            }
            if (location.hash == '#!hinh-anh') {
                load_meta(1);
            }
            if (location.hash == '#!video-review') {
                load_meta(2);
            }
            if (location.hash == '#!chuc-nang-cau-hinh') {
                load_meta(3);
            }
            if (location.hash == '#!anh-xoay-360') {
                load_meta(4);
            }
        }
        else
            window.location = '/';
    });

    if (window.location.hash) {   // if it has a hash fragment, trigger the hashchange event
        $(window).hashchange();
    }
});

function updateTitle(data) {   // update the title tag with the value from the .get call
    document.title = data;  //.split("*")[0];
    //$('meta[name=description]').attr('content', data.split("*")[1]);
}

function done() {
    if (typeof (pagejs) == 'function') {
        pagejs();
    }

}

function load_content() {
    $('.news-wrapper').empty();
    window['pagejs'] = null;
    //$('#left_nav>.active').removeClass('active');
    var productid = $("#hdProductID").val();
    q = window.location.hash.substring(1);
    a = '/aj/ProductDetailV2/FullArticle?intProductID=' + productid;
    //$('.news-wrapper').html('<span id="loadingNews">Đang lấy thông tin sản phẩm...</span>');
    $('.news-wrapper').load(a, function (response, status, xhr) { // load the content div with the results of the AJAX request
        if (status == "error") {
            var msg = "Error reading AJAX cotnent: ";
            $("error").html(msg + xhr.status + " " + xhr.statusText);
        }
        else {
            done();
            $('img.lazy').lazyload({
                effect: "fadeIn"
            });
            ShowArticle();
            $('#loadingNews').remove();
            // use the jQuery .get function which returns the AJAX request into a variable and
            // processes it in the call back function updateTitle
            $.get('/aj/UpdateTitle?intProductID=' + productid, updateTitle);
        }
    });
}

function load_meta(_tp) {
    var productid = $("#hdProductID").val();
    $.get('/aj/ProductDetailV2/UpdateTitle?intProductID=' + productid + '&type=' + _tp, updateTitle);
}

function ShowArticle() {
    $(".show-detail-inf").addClass("active");
    $(".show-detail-inf .sa").hide();
    $(".show-detail-inf .sa-close").show();
    $(".news-wrapper-content").show();
}
function CloseArticle() {
    debugger;
    $(".show-detail-inf").removeClass("active");
    $(".show-detail-inf .sa").show();
    $(".show-detail-inf .sa").attr("onclick", "ShowArticle();");
    $(".show-detail-inf .sa-close").hide();
    $(".news-wrapper-content").hide();
    window.history.pushState({}, document.title, location.href.replace("#!danh-gia-chi-tiet", ""));
}
var FLAG_LOAD_360_GALLERY = true;
function Load360Gallery(id) {
    if (!FLAG_LOAD_360_GALLERY)
        return;
}

var PRODUCT_STORE_BOX_CALLING_FLAG = true;
function LoadStore(productid) {
    if (!PRODUCT_STORE_BOX_CALLING_FLAG)
        return;
    PRODUCT_STORE_BOX_CALLING_FLAG = false;
    var data = { sProductId: productid, sProductCode: $('#hdProductCode').val(), ProductName: $("#hdproductname").val() };
    POSTAjax("/aj/Store/StoreBox/", data, BeforeSendAjax, function (e) {
        if (e != null || e != '') {
            if ($('#lsStore').length == 0) {
                $('#lsStore').remove();
                $('body').append(e);
            }
            else {
                $('#lsStore').replaceWith(e);
            }
        }
        $('#dlding').fadeOut(1000);
        PRODUCT_STORE_BOX_CALLING_FLAG = true;
    }, function () { }, true);
    _gaq.push(['_trackEvent', 'ProductDetail', 'Buy', 'XemSieuthi', , true]);
}

var GET_LOCATION_FLAG = true;
function _get_location() {
    if (GET_LOCATION_FLAG) {
        GET_LOCATION_FLAG = false;
        var ck = getCookie('CK_CHECK_PROVINCE_OF_USER');
        $.ajax({
            url: '/aj/Common/GetLocation/?v=' + ck + '_' + TGDD_CDN_VERSION,
            type: 'GET',
            cache: true,
            dataType: 'html',
            beforeSend: function () {
                $('.loader').show();
            },
            success: function (e) {
                GET_LOCATION_FLAG = true;
                if (e != "") {
                    var _pn = $(e)[1].innerHTML;
                    var _d = $(e).find('> li');
                    $('#location-list').html(_d);
                    $('#location-name-p').text(_pn);
                    $('#location-view-info').text(_pn);
                    $('.loader').hide();
                }
            },
            error: function () {
                $('.loader').hide();
            }
        })
    }
}

var FLAG_LOAD_PROVINCE = true;
function LoadProvince() {
    if (FLAG_LOAD_PROVINCE) {
        FLAG_LOAD_PROVINCE = false;
        var ck = getCookie('CK_CHECK_PROVINCE_OF_USER');
        $.ajax({
            url: '/aj/Common/GetLocation/?v=' + ck + '_' + TGDD_CDN_VERSION,
            type: 'GET',
            cache: true,
            dataType: 'html',
            beforeSend: function () {
                $('.loader').show();
            },
            success: function (e) {
                FLAG_LOAD_PROVINCE = true;
                if (e != "") {
                    var _pn = $(e)[1].innerHTML;
                    var _d = $(e).find('> li');
                    $('.wrapper-prov .at-prov').html(_d);
                    $('.prov-group .price-at-prov').text(_pn);
                    $('.loader').hide();

                    $(".at-prov").mCustomScrollbar({
                        mouseWheel: true,
                        theme: "dark" /*"light", "dark", "light-2", "dark-2", "light-thick", "dark-thick", "light-thin", "dark-thin"*/
                    });
                }
            },
            error: function () {
                $('.loader').hide();
            },
            complete: function () {
                $('.loader').hide();
            }
        })
    }
}

var FLAG_SUGGEST_PROVINCE = true;
function SuggestProvinceByDistrict(kw) {
    if (!FLAG_SUGGEST_PROVINCE)
        return;

    FLAG_SUGGEST_PROVINCE = false;
    var data = { key: kw };
    POSTAjax("/aj/ProductDetailV2/SearchSuggestDistrict/", data, function () { }, function (e) {
        if (e != null && e != "") {
            $('.sg-dt').html(e);
            $('.sg-dt').show();
        }
        FLAG_SUGGEST_PROVINCE = true;
    }, ErrorAjax, true);
}

var PRODUCT_STOREWARR_BOX_CALLING_FLAG = true;
function GetStoreWarr(productid, manufactureid) {
    if (!PRODUCT_STOREWARR_BOX_CALLING_FLAG)
        return;
    PRODUCT_STOREWARR_BOX_CALLING_FLAG = false;
    var data = { sProductId: productid, ProductName: $("#hdproductname").val(), intManufactureID: manufactureid, CategoryName: $("#hdcategoryname").val() };
    POSTAjax("/aj/Store/WarrantyBox/", data, BeforeSendAjax, function (e) {
        if (e != null || e != '') {
            if ($('#pu-warr').length == 0) {

                $('body').append(e);
            }
            else {
                $('#pu-warr').replaceWith(e);
            }
            $.fancybox.close();
            $("#openfancywarr").fancybox({
                'width': 830,
                'autoScale': false,
                'transitionIn': 'none',
                'transitionOut': 'none',
                'showCloseButton': false,
                'autoScale': false,
                'margin': 0,
                'padding': 10,
                'modal': true,
                'onClosed': function () {
                    $("#pu-warr").remove();
                }
            });
            $("#contentresulttgdd").mCustomScrollbar({
                scrollButtons: {
                    enable: false
                },
                theme: "dark" /*"light", "dark", "light-2", "dark-2", "light-thick", "dark-thick", "light-thin", "dark-thin"*/
            });
            $("#contentresult").mCustomScrollbar({
                scrollButtons: {
                    enable: false
                },
                theme: "dark" /*"light", "dark", "light-2", "dark-2", "light-thick", "dark-thick", "light-thin", "dark-thin"*/
            });
            $("#warr-content").mCustomScrollbar({
                scrollButtons: {
                    enable: false
                },
                theme: "dark" /*"light", "dark", "light-2", "dark-2", "light-thick", "dark-thick", "light-thin", "dark-thin"*/
            });
            $("span[name=\"storecountwarr\"]").html($(".result-wrapper li").length);
            if ($("#contentresulttgdd li").length > 0) {
                $("#contentresulttgdd li:first").click();
            }
            else {
                if ($("#contentresult li").length > 0) {
                    $("#contentresult li:first").click();
                }
            }
            $("#openfancywarr").trigger('click');
            //$('.modal-backdrop').remove();
            //$('#pu-repayment').modal('show');

        }
        $('#dlding').fadeOut(1000);
        PRODUCT_STOREWARR_BOX_CALLING_FLAG = true;
    }, ErrorAjax, true);
    _gaq.push(['_trackEvent', 'ProductDetail', 'Buy', 'XemBaoHanh', , true]);
}

function POSTAjax(url, dat, befHandle, sucHandle, errHandle, asy) {
    $.ajax({
        async: asy,
        url: url,
        data: dat,
        type: 'POST',
        cache: false,
        beforeSend: function () {
            befHandle();
        },
        success: function (e) {
            sucHandle(e);
        },
        error: function () {
            errHandle();
        }
    });
}

// get cookie
function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
}

// set cookie
function CreateCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);

    var c_value = escape(value) + ((exdays == null) ? "" : "; visited=true; path=/; domain=.thegioididong.com; expires=" + exdate.toUTCString() + ";");
    Delete_Cookie(c_name, "", ".thegioididong.com");
    Delete_Cookie(c_name, "", ".www.thegioididong.com");
    Delete_Cookie(c_name, "", "www.thegioididong.com");
    document.cookie = c_name + "=" + c_value;
}

// delete cookie
function Delete_Cookie(name, path, domain) {
    if (getCookie(name))
        document.cookie = name + "=" + ((path) ? ";path=" + path : "") + ((domain) ? ";domain=" + domain : "") + ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
}

// BeforeSendAjax
function BeforeSendAjax() {
    $('#dlding').show();
}

// ErrorAjax
function ErrorAjax() {
    // Not implemented yet
}

function StickyLeftSideBar() {
    var scroll_top = $(window).scrollTop();
    var _height = $('#site-body .product-sidebar').height();
    if ($('#site-wrapper .product-body #wrapper-detail-page').offset() == undefined || $('#site-wrapper .product-body #wrapper-detail-page').offset() == null)
        return;
    var _offset_top = $('#site-wrapper .product-body #wrapper-detail-page').offset().top;
    if ($('#site-footer').offset() == undefined || $('#site-footer').offset() == null)
        return;
    var _offset_bottom = $('#site-footer').offset().top;

    if (scroll_top < _offset_top) {
        $('#site-body .product-sidebar').removeClass('sticky').removeClass('absolute');
    }
    else {
        if (scroll_top + _height < _offset_bottom) {
            $('#site-body .product-sidebar').addClass('sticky').removeClass('absolute');
        }
        else {
            $('#site-body .product-sidebar').removeClass('sticky').addClass('absolute');
        }
    }
}

function SuggestCompare(ctrl, e) {
    var GL_CATEGORYID = $("#hdCategoryID").val();
    var kw = $(ctrl).val().replace(/:|;|!|@@|#|\$|%|\^|&|\*|'|"|>|<|,|\.|\?|\/|`|~|\+|=|_|\(|\)|{|}|\[|\]|\\|\|/gi, '');
    var kwt = kw.trim().toLowerCase();
    if (kwt.length < 2) {
        $('.wrapper-compare .search-suggestion-list').hide();
        return;
    }
    if (e.which == 13) {
        $('.wrapper-compare .search-suggestion-list li.selected').find("a").click();
    }
    else if (e.which != 40 && e.which != 38) {
        $.ajax({
            url: '/tim-kiem/aj/SuggestCompare/',
            type: 'GET',
            data: { iCategory: GL_CATEGORYID, sKeyword: kwt },
            dataType: 'json',
            cache: true,
            success: function (d) {
                if (d == null) {
                    return;
                }
                d = d.i;
                var rl = d.length;
                var html = '';
                var lpros = '';
                var catetrack = {};

                html = '<div class="search-suggestion-wrapper clearfix">'
                         + '<ul class="search-suggestion-list nolist clearfix">';

                for (var j = 0; j < rl; j++) {
                    html += '<li><a href="javascript:void(0)" onclick="AddToDetailCompare(';
                    html += d[j][0];
                    html += ')">';
                    html += d[j][1];
                    html += '</a></li>';
                }
                $(ctrl).parent('li').find('.search-suggestion-wrapper').remove();
                $(ctrl).parent('li').append(html);

            }
        });
    }
    if (e.which == 40) {
        debugger;
        if ($('.wrapper-compare .search-suggestion-list li.selected').length == 0) {
            $('.wrapper-compare .search-suggestion-list li:first').addClass('selected');
            $('.wrapper-compare #inputproduct').val($('.wrapper-compare .search-suggestion-list li:first').text());
        }
        else {
            if ($('.wrapper-compare .search-suggestion-list li.selected').text() == $('.wrapper-compare .search-suggestion-list li:last').text()) {
                $('.wrapper-compare .search-suggestion-list li.selected').removeClass('selected');
                $('.wrapper-compare .search-suggestion-list li:first').addClass('selected');
                $('.wrapper-compare #inputproduct').val($('.wrapper-compare .search-suggestion-list li:first').text());
            }
            else {
                var t = $('.wrapper-compare .search-suggestion-list li.selected').next();
                $('.wrapper-compare .search-suggestion-list li.selected').removeClass('selected');
                t.addClass('selected');
                $('.wrapper-compare #inputproduct').val(t.text());
            }
        }
        return;
    }
    else if (e.which == 38) {
        debugger;
        if ($('.wrapper-compare .search-suggestion-list li.selected').length == 0) {
            $('.wrapper-compare .search-suggestion-list li:last').addClass('selected');
            $('.wrapper-compare #inputproduct').val($('.wrapper-compare .search-suggestion-list li:last').text());
        }
        else {
            if ($('.wrapper-compare .search-suggestion-list li.selected').text() == $('.wrapper-compare .search-suggestion-list li:first').text()) {
                $('.wrapper-compare .search-suggestion-list li.selected').removeClass('selected');
                $('.wrapper-compare .search-suggestion-list li:last').addClass('selected');
                $('.wrapper-compare #inputproduct').val($('.wrapper-compare .search-suggestion-list li:last').text());
            }
            else {
                var t = $('.wrapper-compare .search-suggestion-list li.selected').prev();
                $('.wrapper-compare .search-suggestion-list li.selected').removeClass('selected');
                t.addClass('selected');
                $('.wrapper-compare #inputproduct').val(t.text());
            }
        }
        return;
    }
}
var PRODUCT_ADD_COMPARE_CALLING_FLAG = true;
function AddToDetailCompare(id) {
    if (!PRODUCT_ADD_COMPARE_CALLING_FLAG)
        return;
    if (GL_ARR_DETAIL_COMPARE_ID_LIST.indexOf(id) >= 0) {
        alert('Bạn đã chọn so sánh sản phẩm này rồi');
        return;
    }
    var productid = $("#hdProductID").val();
    PRODUCT_ADD_COMPARE_CALLING_FLAG = false;
    $.ajax({
        url: '/aj/ProductDetailV2/AddCompare/',
        type: 'GET',
        data: { intProductID: productid, intProductCompare: id },
        cache: true,
        dataType: 'json',
        beforeSend: function () {
            $('#dlding').fadeOut(300);
        },
        success: function (e) {
            debugger;
            if (e != null && e.name != "") {
                var html = "<li><a href=\"" + e.url + "\" title=\"" + e.name + "\"><img src=\"" + e.img + "\"><span class=\"pro-name\">" + e.name + "</span><span class=\"pro-price\">" + e.price + "</span><span class=\"compare-hover\">" + e.des + "</span></a></li>";
                $(".wrapper-compare .products li.add").replaceWith(html);
                location.href = e.url;
            }
        },
        error: function (e) {
        },
        complete: function (e) {
            PRODUCT_ADD_COMPARE_CALLING_FLAG = true;
            $("#inputproduct").val("");
            $(".search-suggestion-wrapper").hide();
        }
    });
}
var origintext = $('.product-name').html();
$(document).ready(function () {
    _get_location();
    LoadProvince();
    ActiveSlide(false);

    //$('.wrapper-prov .at-prov').mCustomScrollbar();

    $('.wrapper-normal-sell .price-at-prov').mouseenter(function () {
        $('.wrapper-normal-sell .prov-group .wrapper-prov').show();
        $('.wrapper-prov .at-prov').mCustomScrollbar('update');
    });
    $('.wrapper-normal-sell .wrapper-prov').mouseleave(function () { $(this).hide(); });

    $('.bottombox .price-at-prov').mouseenter(function () {
        $('.bottombox .prov-group .wrapper-prov').show();
        $('.wrapper-prov .at-prov').mCustomScrollbar('update');
    });
    $('.bottombox .wrapper-prov').mouseleave(function () { $(this).hide(); });

    $('.spanAccessories').live('click', function () {
        var $ul = $(this).next();
        if ($ul.is(':visible')) {
            $ul.slideUp(500, function () {
                $.fancybox.update();
            });
        }
        else {
            $ul.slideDown(500, function () {
                $.fancybox.update();
            });
        }
    });

    $('.wrapper-prov .at-prov li.p-item a').live('click', function () {
        var provinceId = $(this).attr('data-id');
        var c_name = 'CK_CHECK_PROVINCE_OF_USER';
        var expiredays = (30 * 365);
        CreateCookie(c_name, provinceId, expiredays);
        window.location.reload();
    });

    $('img.lazy').lazyload({
        effect: "fadeIn"
    });

    $('#frmCatQuickOrder .colright .tab a').live('click', function () {
        var tab = $(this).attr('data-active');
        if (tab == "or-a-st") {
            if ($('#' + tab).html() == '') {
                alert('Bạn vui lòng chọn siêu thị đặt máy.');
                return;
            }
        }
        $('#frmCatQuickOrder .colright .tab a').removeClass('active');
        $('#storemap').hide();
        $('#or-a-st').hide();
        $(this).addClass('active');
        $('#' + tab).show();
    });
    //$('.video span.caption').live('hover', function () {
    //    var _ft = $(this).attr('full');
    //    $(this).append('<span class=\"sfull\">' + _ft + '</span>');
    //    $('.video span.sfull').css({
    //        background: '#fff',
    //        border: '1px solid #dadada',
    //        position: 'absolute'
    //    });
    //});

    $('input[name=txtPrice]').live('keyup', function () {
        if (event.which >= 37 && event.which <= 40) {
            event.preventDefault();
        }
        var $this = $(this);
        var num = $this.val().replace(/,/gi, "");
        if (num > 999999999) num = "999999999";
        $this.val(num.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"));
    });

    $("#stoptgdd360").click();

    $('#v360z').click(function () {
        $('a.close-media').remove();
        $('.slide-wrapper .oneByOne1').hide();
        $('#gZ').hide();
        stopSlider();
        $('#z360').fadeIn();
        removeActiveMedia();
        $(this).children('span').eq(1).removeClass('noactive').addClass('mediaactive');
        $(this).children('.border').addClass('border-active');
        $('#z360').append('<a class="close-media" href="javascript:void(0);" onclick="CloseMedia(\'z360\');"></a>');
        document.location.hash = '!anh-xoay-360';
        $('.product-name').html('<h1>Bộ ảnh xoay 360 độ của <b>' + $('#hdproductname').val() + '</b></h1>');
    });

    $('.gal .galcollection').click(function () {
        if ($(this).children('span').hasClass('mediaactive')) {
            CloseMedia('gZ');
            return;
        }
        var id = $(this).attr('data-slide');
        var type = $(this).attr('data-type');
        if (type == 0) {
            LoadAllAlbum($(this), id);
        }
        else {
            var album = $(this).attr('data-img');
            LoadCollectionImageById($(this), album);
        }
        document.location.hash = '!hinh-anh';
        $('.product-name').html('<h1>Bộ ảnh góc cạnh của <b>' + $('#hdproductname').val() + '</b></h1>');
    });

    $('.sg-dt ul li').live('click', function () {
        $('input[name="txtAddress2"]').val($(this).text());
        $('.sg-dt').hide();
    });

    $('input[name="txtAddress2"]').live('keyup', function (e) {
        if (e.which == 40) {
            if ($('.sg-dt ul li.selected').length == 0) {
                $('.sg-dt ul li:first').addClass('selected');
                $(this).val($('.sg-dt ul li.selected:first').text());
            }
            else {
                var t = $('.sg-dt ul li.selected').next();
                $('.sg-dt ul li.selected').removeClass('selected');
                t.addClass('selected');
                $(this).val(t.text());
            }
            return;
        }
        else if (e.which == 38) {
            if ($('.sg-dt ul li.selected').length == 0) {
                $('.sg-dt ul li:last').addClass('selected');
                $(this).val($('.sg-dt ul li.selected:last').text());
            }
            else {
                var t = $('.sg-dt ul li.selected').prev();
                $('.sg-dt ul li.selected').removeClass('selected');
                t.addClass('selected');
                $(this).val(t.text());
            }
            return;
        }
        else if (e.which == 13) {
            $(this).val($('.sg-dt ul li.selected').text());
            $('.sg-dt').hide();
        }
        var kw = $(this).val().replace(/:|;|!|@@|#|\$|%|\^|&|\*|'|"|>|<|,|\.|\?|\/|`|~|\+|=|_|\(|\)|{|}|\[|\]|\\|\|/gi, '');
        if (kw.length < 2)
            return;

        SuggestProvinceByDistrict(kw);
    });

    $('.gal .video').click(function () {
        if ($(this).children('span').hasClass('mediaactive')) {
            CloseMedia('gZ');
            return;
        }
        var id = $(this).attr('data-slide');
        var type = $(this).attr('data-type');
        if (type == 0) {
            LoadCollectionVideoById($(this), id);
        }
        else //if (slides[id].total <= 4)
        {
            var youtbID = $(this).attr('data-video');
            removeActiveMedia();
            $('.slide-wrapper .oneByOne1').hide();
            $('#z360').hide();
            stopSlider();
            $('#gZ').html('<div class="videoshow"></div>').fadeIn();
            ShowVideoByClick($(this), youtbID);
            $(this).children('.border').addClass('border-active');
            $('#gZ').append('<a class="close-media" href="javascript:void(0);" onclick="CloseMedia(\'gZ\');"></a>');
        }
        document.location.hash = '!video-review';
        $('.product-name').html('<h1>Video giới thiệu <b>' + $('#hdproductname').val() + '</b></h1>');
    });

    $('.slider2 .album').live('click', function () {
        var albumID = $(this).attr('data-album');
        LoadImagesInCollection(this, albumID);
    });

    $('.relatevideo .videoitem').live('click', function () {
        var youtbeId = $(this).children('img').attr('data-src');
        ShowVideoByClick(this, youtbeId);
    });
    $(".kitimg a").fancybox({
        helpers: {
            title: {
                type: 'float'
            }
        }
    });
    // waypoint throttle
    $.waypoints.settings.scrollThrottle = 30;
    // waypoint for product navigation
    $('.product-body .product-detail-main .product-spec-navigation-wrapper').waypoint(function (event, direction) {
        if (direction === 'down') {
            $(this).addClass('sticky');
        } else {
            $(this).removeClass('sticky');
        }
    });
    $(window).scroll(function () { StickyLeftSideBar(); });

    $(document).click(function (e) {
        var target = $(e.target);
        if (target.is('.search-suggestion-list')) { return; } else if (target.is('.search-input-wrapper')) { return; } else if (target.is('.search-input-wrapper input')) { return; } else if (target.is('.search-suggestion-list li')) { return; } else if (target.is('.search-suggestion-list li a')) { return; } else if (target.is('.search-suggestion-list li a strong')) { return; } else { $('.search-suggestion-list').hide(); }
    })
    InitBalloonTooltip();
    //kiem tra url show danh sach du doang gia
    var url = window.location.href;
    var tmp = new Array();
    tmp = url.split("#");
    if (tmp.length > 1) {
        var key = tmp[1].toString();
        if (key == 'danh-sach-trung-thuong-du-doan-gia') {
            LoadPrelaunchCustomer();
        }
    }
});

///#source 1 1 /Scripts/QuickOrder2.js
// type
//      0: đặt hàng thông thường
//      1: đặt trước (chương trình mặc định)
//      2: đặt trước (game, chương trình theo CRM)
//      3: giá shock
//      4: vòng quay
// sim  
//      1: đặt hàng sim
// step
//      0: đặt hàng
//      1: thành công
// program: mã chương trình CRM
// code: đặt hàng theo productcode
var QUICK_ORDER_BOX_CALLING_FLAG = true;
function QuickOrder(id, sim, type, step, program, code) {
    SUBMIT_QUICK_ORDER_BOX_CALLING_FLAG = true;
    try {
        _gaq.push(['_setAccount', 'UA-918185-25']);        _gaq.push(['_trackPageview', '/Buy/ThongTinDatHang/']);
        _gaq.push(['_setAccount', 'UA-918185-9']);        _gaq.push(['_trackPageview', '/Buy/ThongTinDatHang/']);
    }
    catch (err) { }

    if (!QUICK_ORDER_BOX_CALLING_FLAG)
        return;
    if (sim == undefined)
        sim = 0;
    if (type == undefined)
        type = 0;
    if (step == undefined)
        step = 0;
    if (program == undefined)
        program = 0;
    QUICK_ORDER_BOX_CALLING_FLAG = false;
    var data = { iProductId: id, iOrderType: type, iStep: step, isSim: sim, iProgram: program, sProductCode: code };
    var url = '/aj/Order/QuickOrder/';
    if (sim) {
        url = '/aj/Order/SimQuickOrder/';
    }
    POSTAjax(url, data, BeforeSendAjax, function (e) {
        if (e != null || e != '') {
            try {
                $('#pu-quickorder').remove();
                $('body').append(e);
            }
            catch (err) { }
            $(".product-color span").first().click(function () {
                $(".product-color ul").toggle();
            });
            $.fancybox.close();
            $('#pu-quickorder').addClass('step1');
            $("#openfancyquick").fancybox({
                'transitionIn': 'none',
                'transitionOut': 'none',
                'showCloseButton': false,
                'margin': 0,
                'padding': 1,
                'modal': true
            });
            $("#openfancyquick").click();
        }
        $('#dlding').fadeOut(1000);
        QUICK_ORDER_BOX_CALLING_FLAG = true;
    }, function () { }, true);
    //tracking nut mua hang
    try {
        _gaq.push(['_setAccount', 'UA-918185-9']);
        if (type == 2)
            _gaq.push(['_trackEvent', 'ProductDetail', 'Buy', 'DatTruoc', 1, true]);
        else if (type == 3)
            _gaq.push(['_trackEvent', 'ProductDetail', 'Buy', 'GiaSoc', 1, true]);
        else if (type == 4)
            _gaq.push(['_trackEvent', 'ProductDetail', 'Buy', 'VongQuay', 1, true]);
        else if (type == 0) {
            _gaq.push(['_trackEvent', 'ProductDetail', 'Buy', 'MuaNgay', 1, true]);
        }
    } catch (e) {

    }
}


function getFormData($form) {
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function (n, i) {
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
}

var SUBMIT_QUICK_ORDER_BOX_CALLING_FLAG = true;
function SubmitQuickOrder($form, submitbtn) {
    if (!SUBMIT_QUICK_ORDER_BOX_CALLING_FLAG)
        return;

    var valid = true;
    // client validating
    var data = getFormData($form);

    if (data.txtFullName == '') {
        valid = false;
        $form.find('*[name=txtFullName]').focus();
        return;
    }

    if (data.txtFullName.length > 50) {
        valid = false;
        alert('Họ và tên không được quá 50 ký tự');
        $form.find('*[name=txtFullName]').focus();
        return;
    }

    if (data.txtMobile == '') {
        valid = false;
        $form.find('*[name=txtMobile]').focus();
        return;
    }

    if (data.txtAddress == '') {
        valid = false;
        $form.find('*[name=txtAddress]').focus();
        return;
    }

    if (data.txtAddress2 == '') {
        valid = false;
        $form.find('*[name=txtAddress2]').focus();
        return;
    }

    regPhone = /^((09[0-9]{8})|(01[0-9]{9}))$/;
    if (!regPhone.test(data.txtMobile)) {
        valid = false;
        alert('Số điện thoại không đúng định dạng');
        $form.find('*[name=txtMobile]').focus();
        return;
    }

    regEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (data.txtEmail != undefined && data.txtEmail != '' && !regEmail.test(data.txtEmail)) {
        valid = false;
        alert('E-mail không đúng định dạng');
        $form.find('*[name=txtEmail]').focus();
        return;
    }

    if (!valid) {
        if (submitbtn)
            $(submitbtn).css("visibility", "visible");
        else
            $("#qo-cat-sub").css("visibility", "visible");
        window.setTimeout("SubmitQuickOrderDelay()", 1000);
        return;
    }
    var postData = $form.serialize();
    //data = getFormData($form);
    SUBMIT_QUICK_ORDER_BOX_CALLING_FLAG = false;
    POSTAjax("/aj/Order/SubmitQuickOrder2/", data, BeforeSendAjax, function (e) {
        if (e != null && e != '' && e != undefined) {
            var tmp = JSON.parse(e);
            if (tmp.ResultType == -1 || tmp.ResultType == 0) {
                SUBMIT_QUICK_ORDER_BOX_CALLING_FLAG = true;
                if (tmp.ResultMessages) {
                    if (submitbtn)
                        $(submitbtn).css("visibility", "visible");
                    else
                        $("#qo-cat-sub").css("visibility", "visible");
                    alert(tmp.ResultMessages[0]);
                }
                else
                    alert('Lỗi');
            }
            else {
                // ga e-commerce
                try {
                    var pageTracker = _gat._getTracker("UA-918185-9");
                    pageTracker._setDomainName("none");
                    pageTracker._setAllowLinker(true);
                    pageTracker._addTrans(
                       tmp.ResultMessages[0],           // transaction ID - required
                       'MuaNgay',  // affiliation or store name
                       data.hdProductPrice,          // total - required
                       '0',           // tax
                       '0',              // shipping
                       '',       // city
                       '',     // state or province
                       'Việt Nam'             // country
                    );

                    // add item might be called for every item in the shopping cart
                    // where your ecommerce engine loops through each item in the cart and
                    // prints out _addItem for each
                    pageTracker._addItem(
                        tmp.ResultMessages[0],           // transaction ID - required
                        data.hdProductId,           // SKU/code - required
                        data.hdProductName,        // product name
                        data.hdCategoryName,   // category or variation
                        data.hdProductPrice,          // unit price - required
                        '1'               // quantity - required
                    );
                    pageTracker._trackTrans(); //submits transaction to the Analytics servers

                    var pageTracker2 = _gat._getTracker("UA-918185-25");
                    pageTracker2._setDomainName("none");
                    pageTracker2._setAllowLinker(true);
                    pageTracker2._addTrans(
                       tmp.ResultMessages[0],           // transaction ID - required
                       'MuaNgay',  // affiliation or store name
                       data.hdProductPrice,          // total - required
                       '0',           // tax
                       '0',              // shipping
                       '',       // city
                       '',     // state or province
                       'Việt Nam'             // country
                    );

                    // add item might be called for every item in the shopping cart
                    // where your ecommerce engine loops through each item in the cart and
                    // prints out _addItem for each
                    pageTracker2._addItem(
                        tmp.ResultMessages[0],           // transaction ID - required
                        data.hdProductId,           // SKU/code - required
                        data.hdProductName,        // product name
                        data.hdCategoryName,   // category or variation
                        data.hdProductPrice,          // unit price - required
                        '1'               // quantity - required
                    );
                    pageTracker2._trackTrans(); //submits transaction to the Analytics servers


                    _gaq.push(['_setAccount', 'UA-918185-9']);
                    _gaq.push(['_trackPageview', '/Buy/DatHangThanhCong/']);
                    _gaq.push(['_setAccount', 'UA-918185-25']);
                    _gaq.push(['_trackPageview', '/Buy/DatHangThanhCong/']);
                }
                catch (err) { }
                var data2 = $.extend(data, { iStep: 1, iProductId: data.hdProductId, iOrderId: tmp.ResultMessages[0], smartlink: tmp.ResultMessages[1] });
                POSTAjax("/aj/Order/QuickOrder/", data2, BeforeSendAjax, function (e) {
                    if (e != null || e != '') {
                        if ($('#pu-quickorder').length == 0) {
                            $('body').append(e);
                        }
                        else {
                            $('#pu-quickorder').replaceWith(e);
                        }
                        $('#pu-quickorder').addClass('step2');
                        $.fancybox.update();
                        $('#pu-quickorder .buy-button2').click(function () {
                            if (tmp.ResultMessages[1] == '-1') {
                                alert('Chức năng đang được cập nhật, vui lòng thử lại sau');
                                $.fancybox.close();
                            }
                            else {
                                var html = '<p>Bạn đang được chuyển đến link thanh toán trực tuyến,vui lòng chờ trong giây lát...<img style="margin: -3px 15px" src="' + cdnpath + '/Content/images/miscs/processing.gif"></p>';
                                $(this).replaceWith(html);
                                setTimeout(function () {
                                    window.location.href = tmp.ResultMessages[1];
                                }, 3000);
                            }
                        });

                    }
                    $('#dlding').fadeOut(500);
                }, ErrorAjax, true);
            }
        }
        window.setTimeout("SubmitQuickOrderDelay()", 1000);
        $('#dlding').fadeOut(1000);
    }, ErrorAjax, true);
}

var qo_submitting = false;
function SubmitQuickOrderDelay() {
    qo_submitting = false;
}

var FLAG_ORDER_AT_STORE = true;
function OrderAtStore(id, sim, type, step, program, code) {
    if (FLAG_ORDER_AT_STORE) {
        FLAG_ORDER_AT_STORE = false;
        if (sim == undefined)
            sim = 0;
        if (type == undefined)
            type = 0;
        if (step == undefined)
            step = 0;
        if (program == undefined)
            program = 0;

        var url = '/aj/Order/OrderAtStore';
        var data = { iProductId: id, iOrderType: type, iStep: step, isSim: sim, iProgram: program, sProductCode: code };
        POSTAjax(url, data, BeforeSendAjax, function (e) {
            if (e != null || e != '') {
                try {
                    $('#pu-quickorder').remove();
                    $('body').append(e);
                }
                catch (err) { }
                $(".product-color span").first().click(function () {
                    $(".product-color ul").toggle();
                });

                $(".choseprovince").first().click(function () {
                    $(".choseprovince ul.lp").toggle();
                    $(".choseprovince ul").mCustomScrollbar('update');
                });

                $(".chosedistrict").first().click(function () {
                    $(".chosedistrict ul.ld").toggle();
                    $(".chosedistrict ul").mCustomScrollbar('update');
                });

                $(".orderInfo .sexual").live('click', function () {
                    $(".orderInfo .sexual ul").toggle();
                });

                $(".orderInfo .timeVisit").live('click', function () {
                    $(".timeVisit ul").toggle();
                });

                $(".orderInfo .timeOnDay").live('click', function () {
                    $(".timeOnDay ul").toggle();
                });

                $('.choseprovince ul.lp').mCustomScrollbar({
                    mouseWheel: true,
                    theme: "dark" /*"light", "dark", "light-2", "dark-2", "light-thick", "dark-thick", "light-thin", "dark-thin"*/
                });

                //$('.chosedistrict ul.ld').mCustomScrollbar({
                //    mouseWheel: true,
                //    theme: "dark" /*"light", "dark", "light-2", "dark-2", "light-thick", "dark-thick", "light-thin", "dark-thin"*/
                //});

                //$('.stores').mCustomScrollbar({
                //    mouseWheel: true,
                //    theme: "dark" /*"light", "dark", "light-2", "dark-2", "light-thick", "dark-thick", "light-thin", "dark-thin"*/
                //});

                var ipro = $('.choseprovince span').attr('id');
                LoadListDistrictByProvince(id, ipro, code);
                //GenMapStore(ipro);

                $.fancybox.close();
                $('#pu-quickorder').addClass('step1');
                $("#openatstore").fancybox({
                    'transitionIn': 'none',
                    'transitionOut': 'none',
                    'showCloseButton': false,
                    'margin': 0,
                    'padding': 1,
                    'width': 740,
                    'modal': true,
                    'beforeClose': function () {
                        $('.nicescroll-rails').hide();
                    }
                });

                $("#openatstore").click();
                $(".stores").getNiceScroll().resize();

            }
            $('#dlding').fadeOut(1000);
            FLAG_ORDER_AT_STORE = true;

        }, function () { }, true);

    }

}

var FLAG_HIGH_PRICE = true;
function HighPriceReport(id, sim, type, step, program, code) {
    if (FLAG_HIGH_PRICE) {
        FLAG_HIGH_PRICE = false;
        if (sim == undefined)
            sim = 0;
        if (type == undefined)
            type = 0;
        if (step == undefined)
            step = 0;
        if (program == undefined)
            program = 0;
        var url = '/aj/Order/HighPriceReport';
        var data = { iProductId: id, iOrderType: type, iStep: 0, isSim: sim, iProgram: program, sProductCode: code };
        POSTAjax(url, data, BeforeSendAjax, function (e) {
            if (e != null || e != '') {
                try {
                    $('#pu-quickorder').remove();
                    $('body').append(e);
                }
                catch (err) { }

                $.fancybox.close();
                $('#pu-quickorder').addClass('step1');
                $("#openhighbox").fancybox({
                    'transitionIn': 'none',
                    'transitionOut': 'none',
                    'showCloseButton': false,
                    'margin': 0,
                    'padding': 1,
                    'modal': true
                });
                $.fancybox.update();
                $("#openhighbox").click();
            }
            $('#dlding').fadeOut(1000);
            FLAG_HIGH_PRICE = true;
        }, function () { }, true);
    }
}

var FLAG_CHANGE_DISTRICT_BY_PRO = true;
function LoadListDistrictByProvince(id, ipro, pCode) {
    if (FLAG_CHANGE_DISTRICT_BY_PRO) {
        var url = '/aj/Order/LoadDistrictByProvinceStock';
        var data = { iProvince: ipro, iProductID: id, sProCode: pCode };
        POSTAjax(url, data, BeforeSendAjax, function (e) {
            if (e != null || e != '') {
                $('.chosedistrict ul').html(e);

                $('.chosedistrict ul').mCustomScrollbar({
                    mouseWheel: true,
                    theme: "dark" /*"light", "dark", "light-2", "dark-2", "light-thick", "dark-thick", "light-thin", "dark-thin"*/
                });

                LoadStoreByFilter(id, ipro, -1, pCode);

                $('.stores').mCustomScrollbar('update');
                GenMapStore(ipro);

            }
            FLAG_CHANGE_DISTRICT_BY_PRO = true;
            $('#dlding').fadeOut(1000);
        }, function () { }, true);
    }
}

var FLAG_LOAD_STORE_BY_FILTER = true;
function LoadStoreByFilter(id, ipro, idis, code) {

    var pathToIcon = 'http://cdn.tgdd.vn/v2012/content/images/';
    var icontgdd = new google.maps.MarkerImage('' + pathToIcon + 'iconmap.png',
            new google.maps.Size(22, 38),
            new google.maps.Point(0, 0),
            new google.maps.Point(0, 0));

    if (FLAG_LOAD_STORE_BY_FILTER) {
        var url = '/aj/Order/LoadStoreByFilter';
        var data = { iProvince: ipro, iProductID: id, iDistrict: idis, sProCode: code };
        POSTAjax(url, data, function () { $('.loadingStore').show(); $('.stores .liststore').html(''); }, function (e) {
            if (e != null || e != '') {
                debugger;
                $('.stores .liststore').html('<div class="loadingStore"></div>' + e);
                $('.stores .liststore .line').eq(0).find('input').click();
                $('#storemap').hide();
                $('#or-a-st').show();

                $('.stores').mCustomScrollbar({
                    mouseWheel: true,
                    theme: "dark" /*"light", "dark", "light-2", "dark-2", "light-thick", "dark-thick", "light-thin", "dark-thin"*/
                });
            }
            $('.loadingStore').hide();
            FLAG_LOAD_STORE_BY_FILTER = true;
        }, function () { }, true);
    }
}

//$(document).ready(function(){

//});
function GenMapStore(id) {
    var pathToIcon = 'http://cdn.tgdd.vn/v2012/content/images/';
    var icontgdd = new google.maps.MarkerImage('' + pathToIcon + 'iconmap.png',
            new google.maps.Size(22, 38),
            new google.maps.Point(0, 0),
            new google.maps.Point(0, 0));
    var url = '/aj/Order/LoadStoreByProvinceID';
    var data = { iProvinceId: id };
    POSTAjax(url, data, function () { }, function (e) {
        if (e != null || e != '') {
            var json = $.parseJSON(e);
            if (json != null) {
                var infowindow = new google.maps.InfoWindow();
                var marker;
                var location = [];
                var lat = 0;
                var lng = 0;
                var LatLngCenter;
                gmarkers = [];
                lat = json.store[0].lat;
                lng = json.store[0].lng;
                LatLngCenter = new google.maps.LatLng(lat, lng);
                var map = new google.maps.Map(document.getElementById('storemap'), {
                    zoom: 12,
                    center: LatLngCenter,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                });

                for (var i = 0; i < json.store.length; i++) {
                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(json.store[i].lat, json.store[i].lng),
                        map: map,
                        icon: icontgdd
                    });
                    gmarkers.push(marker);
                }
            }
        }
    }, function () { }, true);
}

var SUBMIT_ORDER_AT_STORE = true;
function SubmitOrderAtStore(button, $form) {
    if (!SUBMIT_ORDER_AT_STORE)
        return;

    var data = getFormData($form);
    var $id = button.attributes[2].value;
    var $currentActive = ('#' + $id);
    var currName = data.txtfullname.trim();
    var currPhone = data.txtphone.trim();
    var sGender = data.sexual;
    var timevisit = data.timeVisit;
    var timeonday = data.timeOnDay;
    var store = $($currentActive + ' label').text();

    var valid = true;

    if (currName == '') {
        valid = false;
        $('#txtfullname' + $id).addClass('requiredfield');
        $('#txtfullname' + $id).focus();
        return;
    }

    if (currName.length > 50) {
        valid = false;
        $('#txtfullname' + $id).addClass('requiredfield');
        alert('Họ và tên không được quá 50 ký tự');
        $('#txtfullname' + $id).focus();
        return;
    }
    $('#txtfullname' + $id).removeClass('requiredfield');

    if (currPhone == '') {
        valid = false;
        $('#txtphone' + $id).addClass('requiredfield');
        $('#txtphone' + $id).focus();
        return;
    }

    regPhone = /^((09[0-9]{8})|(01[0-9]{9}))$/;
    if (!regPhone.test(currPhone)) {
        valid = false;
        alert('Số điện thoại không đúng định dạng');
        $('#txtphone' + $id).addClass('requiredfield');
        $('#txtphone' + $id).focus();
        return;
    }
    $('#txtphone' + $id).removeClass('requiredfield');
    var pNameNColor = $('.colright span.pname').text();

    $('#iStore').val(store);
    $('#sGender').val(sGender);
    //$('#txtFullName').val(currName);
    $('#sphoneNum').val(currPhone);
    $('#sTimeVisit').val(timevisit);
    $('#sTimeOnDay').val(timeonday);
    $('#sProductNColor').val(pNameNColor);


    if (!valid) {
        if (button)
            $(button).css("visibility", "visible");
        else
            $("#completeStore").css("visibility", "visible");
        window.setTimeout("SubmitQuickOrderDelay()", 1000);
        return;
    }

    var postData = $form.serialize();
    data = getFormData($form);
    if (SUBMIT_ORDER_AT_STORE) {
        SUBMIT_ORDER_AT_STORE = false;
        var url = '/aj/Order/SubmitOrderAtStore'
        POSTAjax(url, postData, BeforeSendAjax, function (e) {
            if (e != null || e != '') {
                var tmp = JSON.parse(e);
                if (tmp.ResultType == -1 || tmp.ResultType == 0) {
                    SUBMIT_QUICK_ORDER_BOX_CALLING_FLAG = true;
                    if (tmp.ResultMessages) {
                        if (submitbtn)
                            $(submitbtn).css("visibility", "visible");
                        else
                            $("#completeStore").css("visibility", "visible");
                        alert(tmp.ResultMessages[0]);
                    }
                    else
                        alert('Lỗi');
                }
                else {
                    // ga e-commerce
                    try {
                        var pageTracker = _gat._getTracker("UA-918185-9");
                        pageTracker._setDomainName("none");
                        pageTracker._setAllowLinker(true);
                        pageTracker._addTrans(
                           tmp.ResultMessages[0],           // transaction ID - required
                           'MuaTaiSieuThi',  // affiliation or store name
                           data.hdProductPrice,          // total - required
                           '0',           // tax
                           '0',              // shipping
                           '',       // city
                           '',     // state or province
                           'Việt Nam'             // country
                        );

                        // add item might be called for every item in the shopping cart
                        // where your ecommerce engine loops through each item in the cart and
                        // prints out _addItem for each
                        pageTracker._addItem(
                            tmp.ResultMessages[0],           // transaction ID - required
                            data.hdProductId,           // SKU/code - required
                            data.hdProductName,        // product name
                            data.hdCategoryName,   // category or variation
                            data.hdProductPrice,          // unit price - required
                            '1'               // quantity - required
                        );
                        pageTracker._trackTrans(); //submits transaction to the Analytics servers

                        var pageTracker2 = _gat._getTracker("UA-918185-25");
                        pageTracker2._setDomainName("none");
                        pageTracker2._setAllowLinker(true);
                        pageTracker2._addTrans(
                           tmp.ResultMessages[0],           // transaction ID - required
                           'MuaTaiSieuThi',  // affiliation or store name
                           data.hdProductPrice,          // total - required
                           '0',           // tax
                           '0',              // shipping
                           '',       // city
                           '',     // state or province
                           'Việt Nam'             // country
                        );

                        // add item might be called for every item in the shopping cart
                        // where your ecommerce engine loops through each item in the cart and
                        // prints out _addItem for each
                        pageTracker2._addItem(
                            tmp.ResultMessages[0],           // transaction ID - required
                            data.hdProductId,           // SKU/code - required
                            data.hdProductName,        // product name
                            data.hdCategoryName,   // category or variation
                            data.hdProductPrice,          // unit price - required
                            '1'               // quantity - required
                        );
                        pageTracker2._trackTrans(); //submits transaction to the Analytics servers


                        _gaq.push(['_setAccount', 'UA-918185-9']);
                        _gaq.push(['_trackPageview', '/Buy/DatHangThanhCong/']);
                        _gaq.push(['_setAccount', 'UA-918185-25']);
                        _gaq.push(['_trackPageview', '/Buy/DatHangThanhCong/']);
                    }
                    catch (err) { }

                    var data2 = $.extend(data, { iStep: 1, iProductId: data.hdProductId, iOrderId: tmp.ResultMessages[0] });
                    POSTAjax("/aj/Order/QuickOrder/", data2, BeforeSendAjax, function (e) {
                        if (e != null || e != '') {
                            if ($('#pu-quickorder').length == 0) {
                                $('body').append(e);
                            }
                            else {
                                $('#pu-quickorder').replaceWith(e);
                            }
                            $('#pu-quickorder').addClass('step2');
                            $.fancybox.update();
                        }
                        $('#dlding').fadeOut(500);
                    }, ErrorAjax, true);
                }
            }
            SUBMIT_ORDER_AT_STORE = true;
        }, function () { }, true);
    }
}

var SUBMIT_HIGH_PRICE = true;
function SubmitHighPrice($form) {
    if (!SUBMIT_HIGH_PRICE)
        return;

    $("#CompleteBut").css("visibility", "hidden");

    var data = getFormData($form);
    var valid = true;

    if (data.txtPrice == '') {
        //$('#txtPrice').focus();
        $('#txtPrice').addClass('requiredfield');
        valid = false;
    }
    else {
        $('#txtPrice').removeClass('requiredfield');
    }

    var tmpPrice = data.txtPrice.replace(/\,/g, '');
    if (tmpPrice != '' && tmpPrice <= 0) {
        alert('Giá không hợp lệ');
        $('#txtPrice').focus();
        //$('#txtPrice').addClass('requiredfield');
        valid = false;
    }

    if (data.txtreason == '') {
        //$('#txtreason').focus();
        $('#txtreason').addClass('requiredfield');
        valid = false;
    } else {
        $('#txtreason').removeClass('requiredfield');
    }

    if (data.txtreason.length > 100) {
        alert('Lý do quá dài.');
        $('#txtreason').focus();
        //$('#txtreason').addClass('requiredfield');
        valid = false;
    }

    if (data.txtFullName == '') {
        //$('#txtFullName').focus();
        $('#txtFullName').addClass('requiredfield');
        valid = false;
    }
    else {
        $('#txtFullName').removeClass('requiredfield');
    }

    if (data.txtFullName.length > 50) {
        alert('Họ tên quá dài.');
        $('#txtFullName').focus();
        //$('#txtFullName').addClass('requiredfield');
        valid = false;
    }

    if (data.txtPhone.trim() == '') {
        //$('#txtPhone').focus();
        $('#txtPhone').addClass('requiredfield');
        valid = false;
    } else {
        $('#txtPhone').removeClass('requiredfield');
    }

    regPhone = /^((09[0-9]{8})|(01[0-9]{9}))$/;
    if (data.txtPhone.trim() != '' && !regPhone.test(data.txtPhone)) {
        alert('Số điện thoại không đúng định dạng');
        $form.find('*[name=txtPhone]').focus();
        valid = false;
    }

    regEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (data.txtEmail != '' && !regEmail.test(data.txtEmail)) {
        alert('E-mail không đúng định dạng');
        $('#txtEmail').focus();
        //$('#txtEmail').addClass('requiredfield');
        valid = false;
    }

    if (!valid) {
        $("#CompleteBut").css("visibility", "visible");
        return;
    }
    data = $.extend({}, data, { iStep: 1 });
    var postData = $form.serialize();
    SUBMIT_HIGH_PRICE = false;
    POSTAjax("/aj/Order/SubmitHighPriceReport/", postData, BeforeSendAjax, function (e) {
        var tmp = JSON.parse(e);
        if (tmp.ResultType == -1 || tmp.ResultType == 0) {
            SUBMIT_QUICK_ORDER_BOX_CALLING_FLAG = true;
            if (tmp.ResultMessages) {
                $("#CompleteBut").css("visibility", "visible");
                alert(tmp.ResultMessages[0]);
            }
            else
                alert('Lỗi');
        }
        else {
            var data2 = $.extend(data, { iStep: 1, iProductId: data.hdProductId, iOrderId: tmp.ResultMessages[0] });
            POSTAjax("/aj/Order/HighPriceReport/", data2, BeforeSendAjax, function (e) {
                if (e != null || e != '') {
                    if ($('#pu-quickorder').length == 0) {
                        $('body').append(e);
                    }
                    else {
                        $('#pu-quickorder').replaceWith(e);
                    }
                    $('#pu-quickorder').addClass('step2');
                    $.fancybox.update();
                }
                $('#dlding').fadeOut(500);
            }, ErrorAjax, true);
        }
        SUBMIT_HIGH_PRICE = true;
        $('#dlding').fadeOut(500);
    }, ErrorAjax, true);
}

var FLAG_GET_DETAIL_STORE = true;
$(document).ready(function () {
    $('.stores .lp li.p-item a').live('click', function () {
        var ipduct = $('#hdProductId').val();
        var pcode = $('#hdProductCode').val();
        var ipro = $(this).attr('data-id');
        var nm = $(this).text();
        var combo = $('.choseprovince span');
        combo.text(nm);
        combo.attr('id', ipro);
        $('.chosedistrict ul').hide();
        LoadListDistrictByProvince(ipduct, ipro, pcode);
    });

    $('.stores .ld li').live('click', function () {
        var ipduct = $('#hdProductId').val();
        var idis = $(this).attr('data');
        var pcode = $('#hdProductCode').val();
        var ipro = $('.choseprovince span').attr('id');
        var nm = $(this).text();
        var combo = $('.chosedistrict span');
        combo.text(nm);
        combo.attr('id', ipro);
        LoadStoreByFilter(ipduct, ipro, idis, pcode);
    });

    $('.stores .liststore .line').live('click', function (e) {
        var pathToIcon = 'http://cdn.tgdd.vn/v2012/content/images/';
        var icontgdd = new google.maps.MarkerImage('' + pathToIcon + 'iconmap.png',
                new google.maps.Size(22, 38),
                new google.maps.Point(0, 0),
                new google.maps.Point(0, 0));
        var $target = $(e.target);
        if ($target.is('input[type="radio"]') || $target.is('label')) {
            if (FLAG_GET_DETAIL_STORE) {
                FLAG_GET_DETAIL_STORE = false;
                $(this).children('input:radio').prop('checked', true);
                var storeId = $(this).children('input:radio').val();
                var url = '/aj/Order/GetStoreDetailMap';
                var data = { iStore: storeId };
                POSTAjax(url, data, function () { }, function (e) {
                    if (e != null || e != '') {
                        var json = $.parseJSON(e);
                        if (json != null) {
                            var lat = json.lat;
                            var lng = json.lng;
                            var marker;
                            var LatLngCenter = new google.maps.LatLng(lat, lng);
                            var map = new google.maps.Map(document.getElementById('storemap'), {
                                zoom: 20,
                                center: LatLngCenter,
                                mapTypeId: google.maps.MapTypeId.ROADMAP

                            });

                            marker = new google.maps.Marker({
                                position: new google.maps.LatLng(lat, lng),
                                map: map,
                                icon: icontgdd
                            });
                        }

                        var html = "<div class=\"orderInfo\">";
                        html += "<select name=\"sexual\" class=\"combomask sexual\">";
                        html += "<option value=\"1\" selected>Anh</option><option value=\"0\">Chị</option>";
                        html += "</select>";
                        html += "<input type=\"text\" name=\"txtfullname\" id=\"txtfullname" + storeId + "\" placeholder=\"Tên của bạn\"/>";
                        html += "<input type=\"text\" name=\"txtphone\" maxlength=\"11\" id=\"txtphone" + storeId + "\" placeholder=\"Số điện thoại\"/>";
                        html += "<select name=\"timeVisit\" class=\"combomask timeVisit\">";
                        html += "<option value=\"1\" selected>Ghé trong hôm nay</option>";
                        html += "<option value=\"2\">Ghé trong ngày mai</option>";
                        html += "</select>";
                        html += "<select name=\"timeOnDay\" class=\"combomask timeOnDay\">";
                        html += "<option value=\"1\" selected>Vào buổi sáng (8h-12h)</option>";
                        html += "<option value=\"2\">Vào buổi chiều (12h-17h)</option>";
                        html += "<option value=\"3\">Vào buổi tối (17h-22h)</option>";
                        html += "</select>";
                        html += "<input type=\"text\" name=\"txtCoupon\" maxlength=\"11\" id=\"txtCoupon" + storeId + "\" placeholder=\"Mã phiếu mua hàng\"/>";
                        //html += "<input type=\"button\" value=\"Sử dụng phiếu\" data-check=\"" + storeId + "\" name=\"btnCoupon\" id=\"btnCoupon\" onclick=\"SubmitOrderAtStore(this, $('#frmCatQuickOrder'))\"/>";
                        html += "<input type=\"button\" value=\"Hoàn tất\" data-check=\"" + storeId + "\" name=\"completeStore\" id=\"completeStore\" onclick=\"SubmitOrderAtStore(this, $('#frmCatQuickOrder'))\"/>";
                        html += "</div>";

                        $('#or-a-st').html(html);
                    }
                }, function () { }, true);
            }
        }
        FLAG_GET_DETAIL_STORE = true;
    });

    $('.orderInfo .sexual ul li').live('click', function () {
        var data = $(this).attr('data');
        var text = $(this).text();
        var combo = $('.orderInfo .sexual span');
        combo.attr('data', data);
        combo.text(text);
    });

    $('.orderInfo .timeVisit ul li').live('click', function () {
        var data = $(this).attr('data');
        var text = $(this).text();
        var combo = $('.orderInfo .timeVisit span');
        combo.attr('data', data);
        combo.text(text);
    });

    $('.orderInfo .timeOnDay ul li').live('click', function () {
        var data = $(this).attr('data');
        var text = $(this).text();
        var combo = $('.orderInfo .timeOnDay span');
        combo.attr('data', data);
        combo.text(text);
    });

    $('input[name="txtphone"], input[name="txtPhone"], input[name="txtPrice"]').live('keypress', function (e) {
        var charCode = e.which || e.keyCode;

        if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
        return true;
    });

    $('input[name="txtphone"], input[name=txtPrice]').live("cut copy paste", function (e) {
        e.preventDefault();
    });

    $('.form_quickorder .coupon').live('click', function () {
        $(this).next().show();
        $(this).hide();
    });
});

var qo_submitting = false;
function SubmitQuickOrderDelay() {
    qo_submitting = false;
}

var FLAG_SUBMIT_ORDER_VERIFICATION = true;
function OrderVerification($form) {
    if (!FLAG_SUBMIT_ORDER_VERIFICATION)
        return;

    var data = GetAllFormData($('#frmCatQuickOrder'));
    if (data.txtFullName.trim() == '') {
        $form.find('*[name=txtFullName]').focus();
        return;
    }

    if (data.txtMobile.trim() == '') {
        $form.find('*[name=txtMobile]').focus();
        return;
    }

    regPhone = /^((09[0-9]{8})|(01[0-9]{9}))$/;
    if (data.txtMobile.trim() != '' && !regPhone.test(data.txtMobile)) {
        alert('Số điện thoại không đúng định dạng');
        $form.find('*[name=txtMobile]').focus();
        return;
    }

    if (data.txtAddress.trim() == '') {
        $form.find('*[name=txtAddress]').focus();
        return;
    }

    if (data.txtAddress2.trim() == '') {
        $form.find('*[name=txtAddress2]').focus();
        return;
    }
    var address = data.txtAddress + " " + data.txtAddress2;
    data.txtAddress = address;
    var postData = $form.serialize();
    FLAG_SUBMIT_ORDER_VERIFICATION = false;
    POSTAjax("/aj/Order/OrderVerification/", data, BeforeSendAjax, function (e) {
        if (e != null || e != '') {
            
            if ($('#pu-quickorder').length == 0) {
                $('body').append(e);
            }
            else {
                $('#pu-quickorder').replaceWith(e);
            }
            $('#pu-quickorder').addClass('step2');
            $.fancybox.update();
        }
        FLAG_SUBMIT_ORDER_VERIFICATION = true;
        $('#dlding').fadeOut(500);
    }, ErrorAjax, true);
}

function SubmitQuickOrderKeydown(evt, btn, ctl) {
    var keyCode = evt ? (evt.which ? evt.which : evt.keyCode) : event.keyCode;
    if (keyCode == 13) {
        if (qo_submitting) {
            if (ctl)
                ctl.focus();
            return false;
        }
        qo_submitting = true;
        $(btn).click();
        return false;
    }
    return true;
}
///#source 1 1 /Scripts/jquery.mCustomScrollbar.js
/* 
== malihu jquery custom scrollbars plugin == 
version: 2.8 
author: malihu (http://manos.malihu.gr) 
plugin home: http://manos.malihu.gr/jquery-custom-content-scroller 
*/
(function($){
	/*plugin script*/
	var methods={
		init:function(options){
			var defaults={ 
				set_width:false, /*optional element width: boolean, pixels, percentage*/
				set_height:false, /*optional element height: boolean, pixels, percentage*/
				horizontalScroll:false, /*scroll horizontally: boolean*/
				scrollInertia:950, /*scrolling inertia: integer (milliseconds)*/
				mouseWheel:true, /*mousewheel support: boolean*/
				mouseWheelPixels:"auto", /*mousewheel pixels amount: integer, "auto"*/
				autoDraggerLength:true, /*auto-adjust scrollbar dragger length: boolean*/
				autoHideScrollbar:false, /*auto-hide scrollbar when idle*/
				scrollButtons:{ /*scroll buttons*/
					enable:false, /*scroll buttons support: boolean*/
					scrollType:"continuous", /*scroll buttons scrolling type: "continuous", "pixels"*/
					scrollSpeed:"auto", /*scroll buttons continuous scrolling speed: integer, "auto"*/
					scrollAmount:40 /*scroll buttons pixels scroll amount: integer (pixels)*/
				},
				advanced:{
					updateOnBrowserResize:true, /*update scrollbars on browser resize (for layouts based on percentages): boolean*/
					updateOnContentResize:false, /*auto-update scrollbars on content resize (for dynamic content): boolean*/
					autoExpandHorizontalScroll:false, /*auto-expand width for horizontal scrolling: boolean*/
					autoScrollOnFocus:true, /*auto-scroll on focused elements: boolean*/
					normalizeMouseWheelDelta:false /*normalize mouse-wheel delta (-1/1)*/
				},
				contentTouchScroll:true, /*scrolling by touch-swipe content: boolean*/
				callbacks:{
					onScrollStart:function(){}, /*user custom callback function on scroll start event*/
					onScroll:function(){}, /*user custom callback function on scroll event*/
					onTotalScroll:function(){}, /*user custom callback function on scroll end reached event*/
					onTotalScrollBack:function(){}, /*user custom callback function on scroll begin reached event*/
					onTotalScrollOffset:0, /*scroll end reached offset: integer (pixels)*/
					onTotalScrollBackOffset:0, /*scroll begin reached offset: integer (pixels)*/
					whileScrolling:function(){} /*user custom callback function on scrolling event*/
				},
				theme:"light" /*"light", "dark", "light-2", "dark-2", "light-thick", "dark-thick", "light-thin", "dark-thin"*/
			},
			options=$.extend(true,defaults,options);
			return this.each(function(){
				var $this=$(this);
				/*set element width/height, create markup for custom scrollbars, add classes*/
				if(options.set_width){
					$this.css("width",options.set_width);
				}
				if(options.set_height){
					$this.css("height",options.set_height);
				}
				if(!$(document).data("mCustomScrollbar-index")){
					$(document).data("mCustomScrollbar-index","1");
				}else{
					var mCustomScrollbarIndex=parseInt($(document).data("mCustomScrollbar-index"));
					$(document).data("mCustomScrollbar-index",mCustomScrollbarIndex+1);
				}
				$this.wrapInner("<div class='mCustomScrollBox"+" mCS-"+options.theme+"' id='mCSB_"+$(document).data("mCustomScrollbar-index")+"' style='position:relative; height:100%; overflow:hidden; max-width:100%;' />").addClass("mCustomScrollbar _mCS_"+$(document).data("mCustomScrollbar-index"));
				var mCustomScrollBox=$this.children(".mCustomScrollBox");
				if(options.horizontalScroll){
					mCustomScrollBox.addClass("mCSB_horizontal").wrapInner("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />");
					var mCSB_h_wrapper=mCustomScrollBox.children(".mCSB_h_wrapper");
					mCSB_h_wrapper.wrapInner("<div class='mCSB_container' style='position:absolute; left:0;' />").children(".mCSB_container").css({"width":mCSB_h_wrapper.children().outerWidth(),"position":"relative"}).unwrap();
				}else{
					mCustomScrollBox.wrapInner("<div class='mCSB_container' style='position:relative; top:0;' />");
				}
				var mCSB_container=mCustomScrollBox.children(".mCSB_container");
				if($.support.touch){
					mCSB_container.addClass("mCS_touch");
				}
				mCSB_container.after("<div class='mCSB_scrollTools' style='position:absolute;'><div class='mCSB_draggerContainer'><div class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' style='position:relative;'></div></div><div class='mCSB_draggerRail'></div></div></div>");
				var mCSB_scrollTools=mCustomScrollBox.children(".mCSB_scrollTools"),
					mCSB_draggerContainer=mCSB_scrollTools.children(".mCSB_draggerContainer"),
					mCSB_dragger=mCSB_draggerContainer.children(".mCSB_dragger");
				if(options.horizontalScroll){
					mCSB_dragger.data("minDraggerWidth",mCSB_dragger.width());
				}else{
				    mCSB_dragger.data("minDraggerHeight", mCSB_dragger.height());//mCSB_dragger.height()
				}
				if(options.scrollButtons.enable){
					if(options.horizontalScroll){
						mCSB_scrollTools.prepend("<a class='mCSB_buttonLeft' oncontextmenu='return false;'></a>").append("<a class='mCSB_buttonRight' oncontextmenu='return false;'></a>");
					}else{
						mCSB_scrollTools.prepend("<a class='mCSB_buttonUp' oncontextmenu='return false;'></a>").append("<a class='mCSB_buttonDown' oncontextmenu='return false;'></a>");
					}
				}
				/*mCustomScrollBox scrollTop and scrollLeft is always 0 to prevent browser focus scrolling*/
				mCustomScrollBox.bind("scroll",function(){
					if(!$this.is(".mCS_disabled")){ /*native focus scrolling for disabled scrollbars*/
						mCustomScrollBox.scrollTop(0).scrollLeft(0);
					}
				});
				/*store options, global vars/states, intervals*/
				$this.data({
					/*init state*/
					"mCS_Init":true,
					/*instance index*/
					"mCustomScrollbarIndex":$(document).data("mCustomScrollbar-index"),
					/*option parameters*/
					"horizontalScroll":options.horizontalScroll,
					"scrollInertia":options.scrollInertia,
					"scrollEasing":"mcsEaseOut",
					"mouseWheel":options.mouseWheel,
					"mouseWheelPixels":options.mouseWheelPixels,
					"autoDraggerLength":options.autoDraggerLength,
					"autoHideScrollbar":options.autoHideScrollbar,
					"scrollButtons_enable":options.scrollButtons.enable,
					"scrollButtons_scrollType":options.scrollButtons.scrollType,
					"scrollButtons_scrollSpeed":options.scrollButtons.scrollSpeed,
					"scrollButtons_scrollAmount":options.scrollButtons.scrollAmount,
					"autoExpandHorizontalScroll":options.advanced.autoExpandHorizontalScroll,
					"autoScrollOnFocus":options.advanced.autoScrollOnFocus,
					"normalizeMouseWheelDelta":options.advanced.normalizeMouseWheelDelta,
					"contentTouchScroll":options.contentTouchScroll,
					"onScrollStart_Callback":options.callbacks.onScrollStart,
					"onScroll_Callback":options.callbacks.onScroll,
					"onTotalScroll_Callback":options.callbacks.onTotalScroll,
					"onTotalScrollBack_Callback":options.callbacks.onTotalScrollBack,
					"onTotalScroll_Offset":options.callbacks.onTotalScrollOffset,
					"onTotalScrollBack_Offset":options.callbacks.onTotalScrollBackOffset,
					"whileScrolling_Callback":options.callbacks.whileScrolling,
					/*events binding state*/
					"bindEvent_scrollbar_drag":false,
					"bindEvent_content_touch":false,
					"bindEvent_scrollbar_click":false,
					"bindEvent_mousewheel":false,
					"bindEvent_buttonsContinuous_y":false,
					"bindEvent_buttonsContinuous_x":false,
					"bindEvent_buttonsPixels_y":false,
					"bindEvent_buttonsPixels_x":false,
					"bindEvent_focusin":false,
					"bindEvent_autoHideScrollbar":false,
					/*buttons intervals*/
					"mCSB_buttonScrollRight":false,
					"mCSB_buttonScrollLeft":false,
					"mCSB_buttonScrollDown":false,
					"mCSB_buttonScrollUp":false
				});
				/*max-width/max-height*/
				if(options.horizontalScroll){
					if($this.css("max-width")!=="none"){
						if(!options.advanced.updateOnContentResize){ /*needs updateOnContentResize*/
							options.advanced.updateOnContentResize=true;
						}
					}
				}else{
					if($this.css("max-height")!=="none"){
						var percentage=false,maxHeight=parseInt($this.css("max-height"));
						if($this.css("max-height").indexOf("%")>=0){
							percentage=maxHeight,
							maxHeight=$this.parent().height()*percentage/100;
						}
						$this.css("overflow","hidden");
						mCustomScrollBox.css("max-height",maxHeight);
					}
				}
				$this.mCustomScrollbar("update");
				/*window resize fn (for layouts based on percentages)*/
				if(options.advanced.updateOnBrowserResize){
					var mCSB_resizeTimeout,currWinWidth=$(window).width(),currWinHeight=$(window).height();
					$(window).bind("resize."+$this.data("mCustomScrollbarIndex"),function(){
						if(mCSB_resizeTimeout){
							clearTimeout(mCSB_resizeTimeout);
						}
						mCSB_resizeTimeout=setTimeout(function(){
							if(!$this.is(".mCS_disabled") && !$this.is(".mCS_destroyed")){
								var winWidth=$(window).width(),winHeight=$(window).height();
								if(currWinWidth!==winWidth || currWinHeight!==winHeight){ /*ie8 fix*/
									if($this.css("max-height")!=="none" && percentage){
										mCustomScrollBox.css("max-height",$this.parent().height()*percentage/100);
									}
									$this.mCustomScrollbar("update");
									currWinWidth=winWidth; currWinHeight=winHeight;
								}
							}
						},150);
					});
				}
				/*content resize fn (for dynamically generated content)*/
				if(options.advanced.updateOnContentResize){
					var mCSB_onContentResize;
					if(options.horizontalScroll){
						var mCSB_containerOldSize=mCSB_container.outerWidth();
					}else{
						var mCSB_containerOldSize=mCSB_container.outerHeight();
					}
					mCSB_onContentResize=setInterval(function(){
						if(options.horizontalScroll){
							if(options.advanced.autoExpandHorizontalScroll){
								mCSB_container.css({"position":"absolute","width":"auto"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({"width":mCSB_container.outerWidth(),"position":"relative"}).unwrap();
							}
							var mCSB_containerNewSize=mCSB_container.outerWidth();
						}else{
							var mCSB_containerNewSize=mCSB_container.outerHeight();
						}
						if(mCSB_containerNewSize!=mCSB_containerOldSize){
							$this.mCustomScrollbar("update");
							mCSB_containerOldSize=mCSB_containerNewSize;
						}
					},300);
				}
			});
		},
		update:function(){
			var $this=$(this),
				mCustomScrollBox=$this.children(".mCustomScrollBox"),
				mCSB_container=mCustomScrollBox.children(".mCSB_container");
			mCSB_container.removeClass("mCS_no_scrollbar");
			$this.removeClass("mCS_disabled mCS_destroyed");
			mCustomScrollBox.scrollTop(0).scrollLeft(0); /*reset scrollTop/scrollLeft to prevent browser focus scrolling*/
			var mCSB_scrollTools=mCustomScrollBox.children(".mCSB_scrollTools"),
				mCSB_draggerContainer=mCSB_scrollTools.children(".mCSB_draggerContainer"),
				mCSB_dragger=mCSB_draggerContainer.children(".mCSB_dragger");
			if($this.data("horizontalScroll")){
				var mCSB_buttonLeft=mCSB_scrollTools.children(".mCSB_buttonLeft"),
					mCSB_buttonRight=mCSB_scrollTools.children(".mCSB_buttonRight"),
					mCustomScrollBoxW=mCustomScrollBox.width();
				if($this.data("autoExpandHorizontalScroll")){
					mCSB_container.css({"position":"absolute","width":"auto"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({"width":mCSB_container.outerWidth(),"position":"relative"}).unwrap();
				}
				var mCSB_containerW=mCSB_container.outerWidth();
			}else{
				var mCSB_buttonUp=mCSB_scrollTools.children(".mCSB_buttonUp"),
					mCSB_buttonDown=mCSB_scrollTools.children(".mCSB_buttonDown"),
					mCustomScrollBoxH=mCustomScrollBox.height(),
					mCSB_containerH=mCSB_container.outerHeight();
			}
			if(mCSB_containerH>mCustomScrollBoxH && !$this.data("horizontalScroll")){ /*content needs vertical scrolling*/
				mCSB_scrollTools.css("display","block");
				var mCSB_draggerContainerH=mCSB_draggerContainer.height();
				/*auto adjust scrollbar dragger length analogous to content*/
				if($this.data("autoDraggerLength")){
					var draggerH=Math.round(mCustomScrollBoxH/mCSB_containerH*mCSB_draggerContainerH),
						minDraggerH=mCSB_dragger.data("minDraggerHeight");
					//if(draggerH<=minDraggerH){ /*min dragger height*/
					//	mCSB_dragger.css({"height":minDraggerH});
					//}else if(draggerH>=mCSB_draggerContainerH-10){ /*max dragger height*/
					//	var mCSB_draggerContainerMaxH=mCSB_draggerContainerH-10;
					//	mCSB_dragger.css({"height":mCSB_draggerContainerMaxH});
					//}else{
					//	mCSB_dragger.css({"height":draggerH});
				    //}
					mCSB_dragger.css({ "height": "50px" });
				    //mCSB_dragger.children(".mCSB_dragger_bar").css({"line-height":mCSB_dragger.height()+"px"});
					mCSB_dragger.children(".mCSB_dragger_bar").css({ "line-height": 50 + "px" });
				}
				var mCSB_draggerH=mCSB_dragger.height(),
				/*calculate and store scroll amount, add scrolling*/
					scrollAmount=(mCSB_containerH-mCustomScrollBoxH)/(mCSB_draggerContainerH-mCSB_draggerH);
				$this.data("scrollAmount",scrollAmount).mCustomScrollbar("scrolling",mCustomScrollBox,mCSB_container,mCSB_draggerContainer,mCSB_dragger,mCSB_buttonUp,mCSB_buttonDown,mCSB_buttonLeft,mCSB_buttonRight);
				/*scroll*/
				var mCSB_containerP=Math.abs(mCSB_container.position().top);
				$this.mCustomScrollbar("scrollTo",mCSB_containerP,{scrollInertia:0});
			}else if(mCSB_containerW>mCustomScrollBoxW && $this.data("horizontalScroll")){ /*content needs horizontal scrolling*/
				mCSB_scrollTools.css("display","block");
				var mCSB_draggerContainerW=mCSB_draggerContainer.width();
				/*auto adjust scrollbar dragger length analogous to content*/
				if($this.data("autoDraggerLength")){
					var draggerW=Math.round(mCustomScrollBoxW/mCSB_containerW*mCSB_draggerContainerW),
						minDraggerW=mCSB_dragger.data("minDraggerWidth");
					if(draggerW<=minDraggerW){ /*min dragger height*/
						mCSB_dragger.css({"width":minDraggerW});
					}else if(draggerW>=mCSB_draggerContainerW-10){ /*max dragger height*/
						var mCSB_draggerContainerMaxW=mCSB_draggerContainerW-10;
						mCSB_dragger.css({"width":mCSB_draggerContainerMaxW});
					}else{
						mCSB_dragger.css({"width":draggerW});
					}
				}
				var mCSB_draggerW=mCSB_dragger.width(),
				/*calculate and store scroll amount, add scrolling*/
					scrollAmount=(mCSB_containerW-mCustomScrollBoxW)/(mCSB_draggerContainerW-mCSB_draggerW);
				$this.data("scrollAmount",scrollAmount).mCustomScrollbar("scrolling",mCustomScrollBox,mCSB_container,mCSB_draggerContainer,mCSB_dragger,mCSB_buttonUp,mCSB_buttonDown,mCSB_buttonLeft,mCSB_buttonRight);
				/*scroll*/
				var mCSB_containerP=Math.abs(mCSB_container.position().left);
				$this.mCustomScrollbar("scrollTo",mCSB_containerP,{scrollInertia:0});
			}else{ /*content does not need scrolling*/
				/*unbind events, reset content position, hide scrollbars, remove classes*/
				mCustomScrollBox.unbind("mousewheel focusin");
				if($this.data("horizontalScroll")){
					mCSB_dragger.add(mCSB_container).css("left",0);
				}else{
					mCSB_dragger.add(mCSB_container).css("top",0);
				}
				mCSB_scrollTools.css("display","none");
				mCSB_container.addClass("mCS_no_scrollbar");
				$this.data({"bindEvent_mousewheel":false,"bindEvent_focusin":false});
			}
		},
		scrolling:function(mCustomScrollBox,mCSB_container,mCSB_draggerContainer,mCSB_dragger,mCSB_buttonUp,mCSB_buttonDown,mCSB_buttonLeft,mCSB_buttonRight){
			var $this=$(this);
			/*scrollbar drag scrolling*/
			if(!$this.data("bindEvent_scrollbar_drag")){
				var mCSB_draggerDragY,mCSB_draggerDragX;
				if($.support.msPointer){ /*MSPointer*/
					mCSB_dragger.bind("MSPointerDown",function(e){
						e.preventDefault();
						$this.data({"on_drag":true}); mCSB_dragger.addClass("mCSB_dragger_onDrag");
						var elem=$(this),
							elemOffset=elem.offset(),
							x=e.originalEvent.pageX-elemOffset.left,
							y=e.originalEvent.pageY-elemOffset.top;
						if(x<elem.width() && x>0 && y<elem.height() && y>0){
							mCSB_draggerDragY=y;
							mCSB_draggerDragX=x;
						}
					});
					$(document).bind("MSPointerMove."+$this.data("mCustomScrollbarIndex"),function(e){
						e.preventDefault();
						if($this.data("on_drag")){
							var elem=mCSB_dragger,
								elemOffset=elem.offset(),
								x=e.originalEvent.pageX-elemOffset.left,
								y=e.originalEvent.pageY-elemOffset.top;
							scrollbarDrag(mCSB_draggerDragY,mCSB_draggerDragX,y,x);
						}
					}).bind("MSPointerUp."+$this.data("mCustomScrollbarIndex"),function(e){
						e.preventDefault();
						$this.data({"on_drag":false}); mCSB_dragger.removeClass("mCSB_dragger_onDrag");
					});
				}else{ /*mouse/touch*/
					mCSB_dragger.bind("mousedown touchstart",function(e){
						e.preventDefault(); e.stopImmediatePropagation();
						var	elem=$(this),elemOffset=elem.offset(),x,y;
						if(e.type==="touchstart"){
							var touch=e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
							x=touch.pageX-elemOffset.left; y=touch.pageY-elemOffset.top;
						}else{
							$this.data({"on_drag":true}); mCSB_dragger.addClass("mCSB_dragger_onDrag");
							x=e.pageX-elemOffset.left; y=e.pageY-elemOffset.top;
						}
						if(x<elem.width() && x>0 && y<elem.height() && y>0){
							mCSB_draggerDragY=y; mCSB_draggerDragX=x;
						}
					}).bind("touchmove",function(e){
						e.preventDefault(); e.stopImmediatePropagation();
						var touch=e.originalEvent.touches[0] || e.originalEvent.changedTouches[0],
							elem=$(this),
							elemOffset=elem.offset(),
							x=touch.pageX-elemOffset.left,
							y=touch.pageY-elemOffset.top;
						scrollbarDrag(mCSB_draggerDragY,mCSB_draggerDragX,y,x);
					});
					$(document).bind("mousemove."+$this.data("mCustomScrollbarIndex"),function(e){
						e.preventDefault();
						if($this.data("on_drag")){
							var elem=mCSB_dragger,
								elemOffset=elem.offset(),
								x=e.pageX-elemOffset.left,
								y=e.pageY-elemOffset.top;
							scrollbarDrag(mCSB_draggerDragY,mCSB_draggerDragX,y,x);
						}
					}).bind("mouseup."+$this.data("mCustomScrollbarIndex"),function(e){
						e.preventDefault();
						$this.data({"on_drag":false}); mCSB_dragger.removeClass("mCSB_dragger_onDrag");
					});
				}
				$this.data({"bindEvent_scrollbar_drag":true});
			}
			function scrollbarDrag(mCSB_draggerDragY,mCSB_draggerDragX,y,x){
				if($this.data("horizontalScroll")){
					$this.mCustomScrollbar("scrollTo",(mCSB_dragger.position().left-(mCSB_draggerDragX))+x,{moveDragger:true,trigger:"internal"});
				}else{
					$this.mCustomScrollbar("scrollTo",(mCSB_dragger.position().top-(mCSB_draggerDragY))+y,{moveDragger:true,trigger:"internal"});
				}
			}
			/*content touch-drag*/
			if($.support.touch && $this.data("contentTouchScroll")){
				if(!$this.data("bindEvent_content_touch")){
					var touch,
						elem,elemOffset,y,x,mCSB_containerTouchY,mCSB_containerTouchX;
					mCSB_container.bind("touchstart",function(e){
						e.stopImmediatePropagation();
						touch=e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
						elem=$(this);
						elemOffset=elem.offset();
						x=touch.pageX-elemOffset.left;
						y=touch.pageY-elemOffset.top;
						mCSB_containerTouchY=y;
						mCSB_containerTouchX=x;
					});
					mCSB_container.bind("touchmove",function(e){
						e.preventDefault(); e.stopImmediatePropagation();
						touch=e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
						elem=$(this).parent();
						elemOffset=elem.offset();
						x=touch.pageX-elemOffset.left;
						y=touch.pageY-elemOffset.top;
						if($this.data("horizontalScroll")){
							$this.mCustomScrollbar("scrollTo",mCSB_containerTouchX-x,{trigger:"internal"});
						}else{
							$this.mCustomScrollbar("scrollTo",mCSB_containerTouchY-y,{trigger:"internal"});
						}
					});
				}
			}
			/*dragger rail click scrolling*/
			if(!$this.data("bindEvent_scrollbar_click")){
				mCSB_draggerContainer.bind("click",function(e){
					var scrollToPos=(e.pageY-mCSB_draggerContainer.offset().top)*$this.data("scrollAmount"),target=$(e.target);
					if($this.data("horizontalScroll")){
						scrollToPos=(e.pageX-mCSB_draggerContainer.offset().left)*$this.data("scrollAmount");
					}
					if(target.hasClass("mCSB_draggerContainer") || target.hasClass("mCSB_draggerRail")){
						$this.mCustomScrollbar("scrollTo",scrollToPos,{trigger:"internal",scrollEasing:"draggerRailEase"});
					}
				});
				$this.data({"bindEvent_scrollbar_click":true});
			}
			/*mousewheel scrolling*/
			if($this.data("mouseWheel")){
				if(!$this.data("bindEvent_mousewheel")){
					mCustomScrollBox.bind("mousewheel",function(e,delta){
						var scrollTo,mouseWheelPixels=$this.data("mouseWheelPixels"),absPos=Math.abs(mCSB_container.position().top),
							draggerPos=mCSB_dragger.position().top,limit=mCSB_draggerContainer.height()-mCSB_dragger.height();
						if($this.data("normalizeMouseWheelDelta")){
							if(delta<0){delta=-1;}else{delta=1;}
						}
						if(mouseWheelPixels==="auto"){
							mouseWheelPixels=100+Math.round($this.data("scrollAmount")/2);
						}
						if($this.data("horizontalScroll")){
							draggerPos=mCSB_dragger.position().left; 
							limit=mCSB_draggerContainer.width()-mCSB_dragger.width();
							absPos=Math.abs(mCSB_container.position().left);
						}
						if((delta>0 && draggerPos!==0) || (delta<0 && draggerPos!==limit)){e.preventDefault(); e.stopImmediatePropagation();}
						scrollTo=absPos-(delta*mouseWheelPixels);
						$this.mCustomScrollbar("scrollTo",scrollTo,{trigger:"internal"});
					});
					$this.data({"bindEvent_mousewheel":true});
				}
			}
			/*buttons scrolling*/
			if($this.data("scrollButtons_enable")){
				if($this.data("scrollButtons_scrollType")==="pixels"){ /*scroll by pixels*/
					if($this.data("horizontalScroll")){
						mCSB_buttonRight.add(mCSB_buttonLeft).unbind("mousedown touchstart MSPointerDown mouseup MSPointerUp mouseout MSPointerOut touchend",mCSB_buttonRight_stop,mCSB_buttonLeft_stop);
						$this.data({"bindEvent_buttonsContinuous_x":false});
						if(!$this.data("bindEvent_buttonsPixels_x")){
							/*scroll right*/
							mCSB_buttonRight.bind("click",function(e){
								e.preventDefault();
								PixelsScrollTo(Math.abs(mCSB_container.position().left)+$this.data("scrollButtons_scrollAmount"));
							});
							/*scroll left*/
							mCSB_buttonLeft.bind("click",function(e){
								e.preventDefault();
								PixelsScrollTo(Math.abs(mCSB_container.position().left)-$this.data("scrollButtons_scrollAmount"));
							});
							$this.data({"bindEvent_buttonsPixels_x":true});
						}
					}else{
						mCSB_buttonDown.add(mCSB_buttonUp).unbind("mousedown touchstart MSPointerDown mouseup MSPointerUp mouseout MSPointerOut touchend",mCSB_buttonRight_stop,mCSB_buttonLeft_stop);
						$this.data({"bindEvent_buttonsContinuous_y":false});
						if(!$this.data("bindEvent_buttonsPixels_y")){
							/*scroll down*/
							mCSB_buttonDown.bind("click",function(e){
								e.preventDefault();
								PixelsScrollTo(Math.abs(mCSB_container.position().top)+$this.data("scrollButtons_scrollAmount"));
							});
							/*scroll up*/
							mCSB_buttonUp.bind("click",function(e){
								e.preventDefault();
								PixelsScrollTo(Math.abs(mCSB_container.position().top)-$this.data("scrollButtons_scrollAmount"));
							});
							$this.data({"bindEvent_buttonsPixels_y":true});
						}
					}
					function PixelsScrollTo(to){
						if(!mCSB_dragger.data("preventAction")){
							mCSB_dragger.data("preventAction",true);
							$this.mCustomScrollbar("scrollTo",to,{trigger:"internal"});
						}
					}
				}else{ /*continuous scrolling*/
					if($this.data("horizontalScroll")){
						mCSB_buttonRight.add(mCSB_buttonLeft).unbind("click");
						$this.data({"bindEvent_buttonsPixels_x":false});
						if(!$this.data("bindEvent_buttonsContinuous_x")){
							/*scroll right*/
							mCSB_buttonRight.bind("mousedown touchstart MSPointerDown",function(e){
								e.preventDefault();
								var scrollButtonsSpeed=ScrollButtonsSpeed();
								$this.data({"mCSB_buttonScrollRight":setInterval(function(){
									$this.mCustomScrollbar("scrollTo",Math.abs(mCSB_container.position().left)+scrollButtonsSpeed,{trigger:"internal",scrollEasing:"easeOutCirc"});
								},17)});
							});
							var mCSB_buttonRight_stop=function(e){
								e.preventDefault(); clearInterval($this.data("mCSB_buttonScrollRight"));
							}
							mCSB_buttonRight.bind("mouseup touchend MSPointerUp mouseout MSPointerOut",mCSB_buttonRight_stop);
							/*scroll left*/
							mCSB_buttonLeft.bind("mousedown touchstart MSPointerDown",function(e){
								e.preventDefault();
								var scrollButtonsSpeed=ScrollButtonsSpeed();
								$this.data({"mCSB_buttonScrollLeft":setInterval(function(){
									$this.mCustomScrollbar("scrollTo",Math.abs(mCSB_container.position().left)-scrollButtonsSpeed,{trigger:"internal",scrollEasing:"easeOutCirc"});
								},17)});
							});	
							var mCSB_buttonLeft_stop=function(e){
								e.preventDefault(); clearInterval($this.data("mCSB_buttonScrollLeft"));
							}
							mCSB_buttonLeft.bind("mouseup touchend MSPointerUp mouseout MSPointerOut",mCSB_buttonLeft_stop);
							$this.data({"bindEvent_buttonsContinuous_x":true});
						}
					}else{
						mCSB_buttonDown.add(mCSB_buttonUp).unbind("click");
						$this.data({"bindEvent_buttonsPixels_y":false});
						if(!$this.data("bindEvent_buttonsContinuous_y")){
							/*scroll down*/
							mCSB_buttonDown.bind("mousedown touchstart MSPointerDown",function(e){
								e.preventDefault();
								var scrollButtonsSpeed=ScrollButtonsSpeed();
								$this.data({"mCSB_buttonScrollDown":setInterval(function(){
									$this.mCustomScrollbar("scrollTo",Math.abs(mCSB_container.position().top)+scrollButtonsSpeed,{trigger:"internal",scrollEasing:"easeOutCirc"});
								},17)});
							});
							var mCSB_buttonDown_stop=function(e){
								e.preventDefault(); clearInterval($this.data("mCSB_buttonScrollDown"));
							}
							mCSB_buttonDown.bind("mouseup touchend MSPointerUp mouseout MSPointerOut",mCSB_buttonDown_stop);
							/*scroll up*/
							mCSB_buttonUp.bind("mousedown touchstart MSPointerDown",function(e){
								e.preventDefault();
								var scrollButtonsSpeed=ScrollButtonsSpeed();
								$this.data({"mCSB_buttonScrollUp":setInterval(function(){
									$this.mCustomScrollbar("scrollTo",Math.abs(mCSB_container.position().top)-scrollButtonsSpeed,{trigger:"internal",scrollEasing:"easeOutCirc"});
								},17)});
							});	
							var mCSB_buttonUp_stop=function(e){
								e.preventDefault(); clearInterval($this.data("mCSB_buttonScrollUp"));
							}
							mCSB_buttonUp.bind("mouseup touchend MSPointerUp mouseout MSPointerOut",mCSB_buttonUp_stop);
							$this.data({"bindEvent_buttonsContinuous_y":true});
						}
					}
					function ScrollButtonsSpeed(){
						var speed=$this.data("scrollButtons_scrollSpeed");
						if($this.data("scrollButtons_scrollSpeed")==="auto"){
							speed=Math.round(($this.data("scrollInertia")+100)/40);
						}
						return speed;
					}
				}
			}
			/*scrolling on element focus (e.g. via TAB key)*/
			if($this.data("autoScrollOnFocus")){
				if(!$this.data("bindEvent_focusin")){
					mCustomScrollBox.bind("focusin",function(){
						mCustomScrollBox.scrollTop(0).scrollLeft(0);
						var focusedElem=$(document.activeElement);
						if(focusedElem.is("input,textarea,select,button,a[tabindex],area,object")){
							var mCSB_containerPos=mCSB_container.position().top,
								focusedElemPos=focusedElem.position().top,
								visibleLimit=mCustomScrollBox.height()-focusedElem.outerHeight();
							if($this.data("horizontalScroll")){
								mCSB_containerPos=mCSB_container.position().left;
								focusedElemPos=focusedElem.position().left;
								visibleLimit=mCustomScrollBox.width()-focusedElem.outerWidth();
							}
							if(mCSB_containerPos+focusedElemPos<0 || mCSB_containerPos+focusedElemPos>visibleLimit){
								$this.mCustomScrollbar("scrollTo",focusedElemPos,{trigger:"internal"});
							}
						}
					});
					$this.data({"bindEvent_focusin":true});
				}
			}
			/*auto-hide scrollbar*/
			if($this.data("autoHideScrollbar")){
				if(!$this.data("bindEvent_autoHideScrollbar")){
					mCustomScrollBox.bind("mouseenter",function(e){
						mCustomScrollBox.addClass("mCS-mouse-over");
						functions.showScrollbar.call(mCustomScrollBox.children(".mCSB_scrollTools"));
					}).bind("mouseleave touchend",function(e){
						mCustomScrollBox.removeClass("mCS-mouse-over");
						if(e.type==="mouseleave"){functions.hideScrollbar.call(mCustomScrollBox.children(".mCSB_scrollTools"));}
					});
					$this.data({"bindEvent_autoHideScrollbar":true});
				}
			}
		},
		scrollTo:function(scrollTo,options){
			var $this=$(this),
				defaults={
					moveDragger:false,
					trigger:"external",
					callbacks:true,
					scrollInertia:$this.data("scrollInertia"),
					scrollEasing:$this.data("scrollEasing")
				},
				options=$.extend(defaults,options),
				draggerScrollTo,
				mCustomScrollBox=$this.children(".mCustomScrollBox"),
				mCSB_container=mCustomScrollBox.children(".mCSB_container"),
				mCSB_scrollTools=mCustomScrollBox.children(".mCSB_scrollTools"),
				mCSB_draggerContainer=mCSB_scrollTools.children(".mCSB_draggerContainer"),
				mCSB_dragger=mCSB_draggerContainer.children(".mCSB_dragger"),
				contentSpeed=draggerSpeed=options.scrollInertia,
				scrollBeginning,scrollBeginningOffset,totalScroll,totalScrollOffset;
			$this.data({"mCS_trigger":options.trigger});
			if($this.data("mCS_Init")){options.callbacks=false;}
			if(scrollTo || scrollTo===0){
				if(typeof(scrollTo)==="number"){ /*if integer, scroll by number of pixels*/
					if(options.moveDragger){ /*scroll dragger*/
						draggerScrollTo=scrollTo;
						if($this.data("horizontalScroll")){
							scrollTo=mCSB_dragger.position().left*$this.data("scrollAmount");
						}else{
							scrollTo=mCSB_dragger.position().top*$this.data("scrollAmount");
						}
						draggerSpeed=0;
					}else{ /*scroll content by default*/
						draggerScrollTo=scrollTo/$this.data("scrollAmount");
					}
				}else if(typeof(scrollTo)==="string"){ /*if string, scroll by element position*/
					var target;
					if(scrollTo==="top"){ /*scroll to top*/
						target=0;
					}else if(scrollTo==="bottom" && !$this.data("horizontalScroll")){ /*scroll to bottom*/
						target=mCSB_container.outerHeight()-mCustomScrollBox.height();
					}else if(scrollTo==="left"){ /*scroll to left*/
						target=0;
					}else if(scrollTo==="right" && $this.data("horizontalScroll")){ /*scroll to right*/
						target=mCSB_container.outerWidth()-mCustomScrollBox.width();
					}else if(scrollTo==="first"){ /*scroll to first element position*/
						target=$this.find(".mCSB_container").find(":first");
					}else if(scrollTo==="last"){ /*scroll to last element position*/
						target=$this.find(".mCSB_container").find(":last");
					}else{ /*scroll to element position*/
						target=$this.find(scrollTo);
					}
					if(target.length===1){ /*if such unique element exists, scroll to it*/
						if($this.data("horizontalScroll")){
							scrollTo=target.position().left;
						}else{
							scrollTo=target.position().top;
						}
						draggerScrollTo=scrollTo/$this.data("scrollAmount");
					}else{
						draggerScrollTo=scrollTo=target;
					}
				}
				/*scroll to*/
				if($this.data("horizontalScroll")){
					if($this.data("onTotalScrollBack_Offset")){ /*scroll beginning offset*/
						scrollBeginningOffset=-$this.data("onTotalScrollBack_Offset");
					}
					if($this.data("onTotalScroll_Offset")){ /*total scroll offset*/
						totalScrollOffset=mCustomScrollBox.width()-mCSB_container.outerWidth()+$this.data("onTotalScroll_Offset");
					}
					if(draggerScrollTo<0){ /*scroll start position*/
						draggerScrollTo=scrollTo=0; clearInterval($this.data("mCSB_buttonScrollLeft"));
						if(!scrollBeginningOffset){scrollBeginning=true;}
					}else if(draggerScrollTo>=mCSB_draggerContainer.width()-mCSB_dragger.width()){ /*scroll end position*/
						draggerScrollTo=mCSB_draggerContainer.width()-mCSB_dragger.width();
						scrollTo=mCustomScrollBox.width()-mCSB_container.outerWidth(); clearInterval($this.data("mCSB_buttonScrollRight"));
						if(!totalScrollOffset){totalScroll=true;}
					}else{scrollTo=-scrollTo;}
					/*scrolling animation*/
					functions.mTweenAxis.call(this,mCSB_dragger[0],"left",Math.round(draggerScrollTo),draggerSpeed,options.scrollEasing);
					functions.mTweenAxis.call(this,mCSB_container[0],"left",Math.round(scrollTo),contentSpeed,options.scrollEasing,{
						onStart:function(){
							if(options.callbacks && !$this.data("mCS_tweenRunning")){callbacks("onScrollStart");}
							if($this.data("autoHideScrollbar")){functions.showScrollbar.call(mCSB_scrollTools);}
						},
						onUpdate:function(){
							if(options.callbacks){callbacks("whileScrolling");}
						},
						onComplete:function(){
							if(options.callbacks){
								callbacks("onScroll");
								if(scrollBeginning || (scrollBeginningOffset && mCSB_container.position().left>=scrollBeginningOffset)){callbacks("onTotalScrollBack");}
								if(totalScroll || (totalScrollOffset && mCSB_container.position().left<=totalScrollOffset)){callbacks("onTotalScroll");}
							}
							mCSB_dragger.data("preventAction",false); $this.data("mCS_tweenRunning",false);
							if($this.data("autoHideScrollbar")){if(!mCustomScrollBox.hasClass("mCS-mouse-over")){functions.hideScrollbar.call(mCSB_scrollTools);}}
						},
					});
				}else{
					if($this.data("onTotalScrollBack_Offset")){ /*scroll beginning offset*/
						scrollBeginningOffset=-$this.data("onTotalScrollBack_Offset");
					}
					if($this.data("onTotalScroll_Offset")){ /*total scroll offset*/
						totalScrollOffset=mCustomScrollBox.height()-mCSB_container.outerHeight()+$this.data("onTotalScroll_Offset");
					}
					if(draggerScrollTo<0){ /*scroll start position*/
						draggerScrollTo=scrollTo=0; clearInterval($this.data("mCSB_buttonScrollUp"));
						if(!scrollBeginningOffset){scrollBeginning=true;}
					}else if(draggerScrollTo>=mCSB_draggerContainer.height()-mCSB_dragger.height()){ /*scroll end position*/
						draggerScrollTo=mCSB_draggerContainer.height()-mCSB_dragger.height();
						scrollTo=mCustomScrollBox.height()-mCSB_container.outerHeight(); clearInterval($this.data("mCSB_buttonScrollDown"));
						if(!totalScrollOffset){totalScroll=true;}
					}else{scrollTo=-scrollTo;}
					/*scrolling animation*/
					functions.mTweenAxis.call(this,mCSB_dragger[0],"top",Math.round(draggerScrollTo),draggerSpeed,options.scrollEasing);
					functions.mTweenAxis.call(this,mCSB_container[0],"top",Math.round(scrollTo),contentSpeed,options.scrollEasing,{
						onStart:function(){
							if(options.callbacks && !$this.data("mCS_tweenRunning")){callbacks("onScrollStart");}
							if($this.data("autoHideScrollbar")){functions.showScrollbar.call(mCSB_scrollTools);}
						},
						onUpdate:function(){
							if(options.callbacks){callbacks("whileScrolling");}
						},
						onComplete:function(){
							if(options.callbacks){
								callbacks("onScroll");
								if(scrollBeginning || (scrollBeginningOffset && mCSB_container.position().top>=scrollBeginningOffset)){callbacks("onTotalScrollBack");}
								if(totalScroll || (totalScrollOffset && mCSB_container.position().top<=totalScrollOffset)){callbacks("onTotalScroll");}
							}
							mCSB_dragger.data("preventAction",false); $this.data("mCS_tweenRunning",false);
							if($this.data("autoHideScrollbar")){if(!mCustomScrollBox.hasClass("mCS-mouse-over")){functions.hideScrollbar.call(mCSB_scrollTools);}}
						},
					});
				}
				if($this.data("mCS_Init")){$this.data({"mCS_Init":false});}
			}
			/*callbacks*/
			function callbacks(cb){
				this.mcs={
					top:mCSB_container.position().top,left:mCSB_container.position().left,
					draggerTop:mCSB_dragger.position().top,draggerLeft:mCSB_dragger.position().left,
					topPct:Math.round((100*Math.abs(mCSB_container.position().top))/Math.abs(mCSB_container.outerHeight()-mCustomScrollBox.height())),
					leftPct:Math.round((100*Math.abs(mCSB_container.position().left))/Math.abs(mCSB_container.outerWidth()-mCustomScrollBox.width()))
				};
				switch(cb){
					/*start scrolling callback*/
					case "onScrollStart":
						$this.data("mCS_tweenRunning",true).data("onScrollStart_Callback").call($this,this.mcs);
						break;
					case "whileScrolling":
						$this.data("whileScrolling_Callback").call($this,this.mcs);
						break;
					case "onScroll":
						$this.data("onScroll_Callback").call($this,this.mcs);
						break;
					case "onTotalScrollBack":
						$this.data("onTotalScrollBack_Callback").call($this,this.mcs);
						break;
					case "onTotalScroll":
						$this.data("onTotalScroll_Callback").call($this,this.mcs);
						break;
				}
			}
		},
		stop:function(){
			var $this=$(this),
				mCSB_container=$this.children().children(".mCSB_container"),
				mCSB_dragger=$this.children().children().children().children(".mCSB_dragger");
			functions.mTweenAxisStop.call(this,mCSB_container[0]);
			functions.mTweenAxisStop.call(this,mCSB_dragger[0]);
		},
		disable:function(resetScroll){
			var $this=$(this),
				mCustomScrollBox=$this.children(".mCustomScrollBox"),
				mCSB_container=mCustomScrollBox.children(".mCSB_container"),
				mCSB_scrollTools=mCustomScrollBox.children(".mCSB_scrollTools"),
				mCSB_dragger=mCSB_scrollTools.children().children(".mCSB_dragger");
			mCustomScrollBox.unbind("mousewheel focusin mouseenter mouseleave touchend");
			mCSB_container.unbind("touchstart touchmove")
			if(resetScroll){
				if($this.data("horizontalScroll")){
					mCSB_dragger.add(mCSB_container).css("left",0);
				}else{
					mCSB_dragger.add(mCSB_container).css("top",0);
				}
			}
			mCSB_scrollTools.css("display","none");
			mCSB_container.addClass("mCS_no_scrollbar");
			$this.data({"bindEvent_mousewheel":false,"bindEvent_focusin":false,"bindEvent_content_touch":false,"bindEvent_autoHideScrollbar":false}).addClass("mCS_disabled");
		},
		destroy:function(){
			var $this=$(this);
			$this.removeClass("mCustomScrollbar _mCS_"+$this.data("mCustomScrollbarIndex")).addClass("mCS_destroyed").children().children(".mCSB_container").unwrap().children().unwrap().siblings(".mCSB_scrollTools").remove();
			$(document).unbind("mousemove."+$this.data("mCustomScrollbarIndex")+" mouseup."+$this.data("mCustomScrollbarIndex")+" MSPointerMove."+$this.data("mCustomScrollbarIndex")+" MSPointerUp."+$this.data("mCustomScrollbarIndex"));
			$(window).unbind("resize."+$this.data("mCustomScrollbarIndex"));
		}
	},
	functions={
		/*hide/show scrollbar*/
		showScrollbar:function(){
			this.stop().animate({opacity:1},"fast");
		},
		hideScrollbar:function(){
			this.stop().animate({opacity:0},"fast");
		},
		/*js animation tween*/
		mTweenAxis:function(el,prop,to,duration,easing,callbacks){
			var callbacks=callbacks || {},
				onStart=callbacks.onStart || function(){},onUpdate=callbacks.onUpdate || function(){},onComplete=callbacks.onComplete || function(){};
			var startTime=_getTime(),_delay,progress=0,from=el.offsetTop,elStyle=el.style;
			if(prop==="left"){from=el.offsetLeft;}
			var diff=to-from;
			_cancelTween();
			_startTween();
			function _getTime(){
				if(window.performance && window.performance.now){
					return window.performance.now();
				}else{
					if(window.performance && window.performance.webkitNow){
						return window.performance.webkitNow();
					}else{
						if(Date.now){return Date.now();}else{return new Date().getTime();}
					}
				}
			}
			function _step(){
				if(!progress){onStart.call();}
				progress=_getTime()-startTime;
				_tween();
				if(progress>=el._time){
					el._time=(progress>el._time) ? progress+_delay-(progress- el._time) : progress+_delay-1;
					if(el._time<progress+1){el._time=progress+1;}
				}
				if(el._time<duration){el._id=_request(_step);}else{onComplete.call();}
			}
			function _tween(){
				if(duration>0){
					el.currVal=_ease(el._time,from,diff,duration,easing);
					elStyle[prop]=Math.round(el.currVal)+"px";
				}else{
					elStyle[prop]=to+"px";
				}
				onUpdate.call();
			}
			function _startTween(){
				_delay=1000/60;
				el._time=progress+_delay;
				_request=(!window.requestAnimationFrame) ? function(f){_tween(); return setTimeout(f,0.01);} : window.requestAnimationFrame;
				el._id=_request(_step);
			}
			function _cancelTween(){
				if(el._id==null){return;}
				if(!window.requestAnimationFrame){clearTimeout(el._id);
				}else{window.cancelAnimationFrame(el._id);}
				el._id=null;
			}
			function _ease(t,b,c,d,type){
				switch(type){
					case "linear":
						return c*t/d + b;
						break;
					case "easeOutQuad":
						t /= d; return -c * t*(t-2) + b;
						break;
					case "easeInOutQuad":
						t /= d/2;
						if (t < 1) return c/2*t*t + b;
						t--;
						return -c/2 * (t*(t-2) - 1) + b;
						break;
					case "easeOutCubic":
						t /= d; t--; return c*(t*t*t + 1) + b;
						break;
					case "easeOutQuart":
						t /= d; t--; return -c * (t*t*t*t - 1) + b;
						break;
					case "easeOutQuint":
						t /= d; t--; return c*(t*t*t*t*t + 1) + b;
						break;
					case "easeOutCirc":
						t /= d; t--; return c * Math.sqrt(1 - t*t) + b;
						break;
					case "easeOutSine":
						return c * Math.sin(t/d * (Math.PI/2)) + b;
						break;
					case "easeOutExpo":
						return c * ( -Math.pow( 2, -10 * t/d ) + 1 ) + b;
						break;
					case "mcsEaseOut":
						var ts=(t/=d)*t,tc=ts*t;
						return b+c*(0.499999999999997*tc*ts + -2.5*ts*ts + 5.5*tc + -6.5*ts + 4*t);
						break;
					case "draggerRailEase":
						t /= d/2;
						if (t < 1) return c/2*t*t*t + b;
						t -= 2;
						return c/2*(t*t*t + 2) + b;
						break;
				}
			}
		},
		/*stop js animation tweens*/
		mTweenAxisStop:function(el){
			if(el._id==null){return;}
			if(!window.requestAnimationFrame){clearTimeout(el._id);
			}else{window.cancelAnimationFrame(el._id);}
			el._id=null;
		},
		/*detect requestAnimationFrame and polyfill*/
		rafPolyfill:function(){
			var pfx=["ms","moz","webkit","o"],i=pfx.length;
			while(--i > -1 && !window.requestAnimationFrame){
				window.requestAnimationFrame=window[pfx[i]+"RequestAnimationFrame"];
				window.cancelAnimationFrame=window[pfx[i]+"CancelAnimationFrame"] || window[pfx[i]+"CancelRequestAnimationFrame"];
			}
		}
	}
	/*detect features*/
	functions.rafPolyfill.call(); /*requestAnimationFrame*/
	$.support.touch=!!('ontouchstart' in window); /*touch*/
	$.support.msPointer=window.navigator.msPointerEnabled; /*MSPointer support*/
	/*plugin dependencies*/
	var _dlp=("https:"==document.location.protocol) ? "https:" : "http:";
	$.event.special.mousewheel || document.write('<script src="'+_dlp+'//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.0.6/jquery.mousewheel.min.js"><\/script>');
	/*plugin fn*/
	$.fn.mCustomScrollbar=function(method){
		if(methods[method]){
			return methods[method].apply(this,Array.prototype.slice.call(arguments,1));
		}else if(typeof method==="object" || !method){
			return methods.init.apply(this,arguments);
		}else{
			$.error("Method "+method+" does not exist");
		}
	};
})(jQuery);
///#source 1 1 /Scripts/StoreProduct.js
var PRODUCT_STORE_BOX_CALLING_FLAG = true;
var PRODUCT_STOREWARR_BOX_CALLING_FLAG = true;

function GetStore(productid,productcode)
{
    if (!PRODUCT_STORE_BOX_CALLING_FLAG)
        return;
    PRODUCT_STORE_BOX_CALLING_FLAG = false;
    var data = { sProductId: productid,sProductCode: productcode, ProductName: $("#hdproductname").val() };
    CallAjaxPost("/aj/Store/StoreBox/", data, BeforeSendAjax, function (e) {
        if (e != null || e != '') {
            if ($('#pu-store').length == 0) {
                $('#pu-store').remove();
                $('body').append(e);
            }
            else {
                $('#pu-store').replaceWith(e);
            }
            $.fancybox.close();
            $("#openfancystore").fancybox({
                'width': 830,
                'height': 535,
                'autoScale': false,
                'transitionIn': 'none',
                'transitionOut': 'none',
                'showCloseButton': false,
                'autoScale': false,
                'margin': 0,
                'padding': 10,
                'modal': true,
                'onClosed': function () {
                    $("#pu-store").remove();
                } 
            });
            SearchDisTrict(productid);
            $("#openfancystore").click();
            //$('.modal-backdrop').remove();
            //$('#pu-repayment').modal('show');
            //if ($(".product-color-select cite").html() != undefined)
            //    $("#pu-store h4 strong").html($("#hdproductname").val() + " " + $(".topboxdetail_right .colorname").html().replace(':', ''));
        }
        $('#dlding').fadeOut(1000);
        PRODUCT_STORE_BOX_CALLING_FLAG = true;
    }, ErrorAjax, true);
    _gaq.push(['_trackEvent', 'ProductDetail', 'Buy', 'XemSieuthi',, true]);
}
function GetStoreWarr(productid, manufactureid) { 
    if (!PRODUCT_STOREWARR_BOX_CALLING_FLAG)
        return;
    PRODUCT_STOREWARR_BOX_CALLING_FLAG = false;
    var data = { sProductId: productid, ProductName: $("#hdproductname").val(), intManufactureID: manufactureid, CategoryName: $("#hdcategoryname").val() };
    CallAjaxPost("/aj/Store/WarrantyBox/", data, BeforeSendAjax, function (e) {
        if (e != null || e != '') {
            if ($('#pu-warr').length == 0) {

                $('body').append(e);
            }
            else {
                $('#pu-warr').replaceWith(e);
            }
            $.fancybox.close();
            $("#openfancywarr").fancybox({
                'width': 830,
                'autoScale': false,
                'transitionIn': 'none',
                'transitionOut': 'none',
                'showCloseButton': false,
                'autoScale': false,
                'margin': 0,
                'padding': 10,
                'modal': true,
                'onClosed': function () {
                    $("#pu-warr").remove();
                }
            });
            $("#contentresulttgdd").mCustomScrollbar({
                scrollButtons: {
                    enable: false
                },
                theme: "dark" /*"light", "dark", "light-2", "dark-2", "light-thick", "dark-thick", "light-thin", "dark-thin"*/
            });
            $("#contentresult").mCustomScrollbar({
                scrollButtons: {
                    enable: false
                },
                theme: "dark" /*"light", "dark", "light-2", "dark-2", "light-thick", "dark-thick", "light-thin", "dark-thin"*/
            });
            $("#warr-content").mCustomScrollbar({
                scrollButtons: {
                    enable: false
                },
                theme: "dark" /*"light", "dark", "light-2", "dark-2", "light-thick", "dark-thick", "light-thin", "dark-thin"*/
            });
            $("span[name=\"storecountwarr\"]").html($(".result-wrapper li").length);
            if ($("#contentresulttgdd li").length > 0) {
                $("#contentresulttgdd li:first").click();
            }
            else {
                if ($("#contentresult li").length > 0) {
                    $("#contentresult li:first").click();
                }
            }
            $("#openfancywarr").trigger('click');
            //$('.modal-backdrop').remove();
            //$('#pu-repayment').modal('show');

        }
        $('#dlding').fadeOut(1000);
        PRODUCT_STOREWARR_BOX_CALLING_FLAG = true;
    }, ErrorAjax, true);
    _gaq.push(['_trackEvent', 'ProductDetail', 'Buy', 'XemBaoHanh', , true]);
}

function SearchDisTrict(productid) {
    //var ddlCity = document.getElementById("city-filter");
    var intProvince = $("#city-filter option:selected").val();
    $(".ddl-store-province span").html($("[id$=city-filter] option:selected").text());
    //$("span[name='provincename']").html($("[id$=city-filter] option:selected").text());
    $.ajax({
        url: "/aj/Store/LoadDistrictProduct",
        type: "GET",
        cache: false,
        data: { sProductId: productid,strProductCode:sbproductcode, intProvinceID: intProvince },
        beforeSend: function () {
            //$('.loading').show();
        },
        success: function (result) {
            //$('.loading').hide();
            var ddlDistrict = document.getElementById("district-filter");
            $(".ddl-store-district span").html("Chọn quận/huyện");
            ddlDistrict.outerHTML = result;
            GetStoreByProvince(productid);
            SearchStore(intProvince,productid,sbproductcode);
            return;
        },
        error: function (result) {
            return;
        }
    })
}
function SearchDisTrictWarr(productid) {
    var ddlCity = document.getElementById("city-filter-warr");
    var intProvince = ddlCity.options[ddlCity.selectedIndex].value.toString();
    $("span[name='provincenamewarr']").html($("[id$=city-filter-warr] option:selected").text());
    $.ajax({
        url: "/aj/Store/LoadDistrictProductWarr",
        type: "GET",
        cache: false,
        data: { sProductId: productid, intProvinceID: intProvince },
        beforeSend: function () {
            //$('.loading').show();
        },
        success: function (result) {
            //$('.loading').hide();
            var ddlDistrict = document.getElementById("district-filter-warr");
            ddlDistrict.outerHTML = result;
            GetStoreByProvinceWarr(productid);
            //SearchStoreWarr(intProvince);
            return;
        },
        error: function (result) {
            return;
        }
    })
}

function SearchStoreByDisTrict(productid) {
    var ddlCity = document.getElementById("city-filter");
    var intProvince = ddlCity.options[ddlCity.selectedIndex].value.toString();
    var provinceName = ddlCity.options[ddlCity.selectedIndex].text.toString();
    var ddlDistrict = document.getElementById("district-filter");
    var districtID = ddlDistrict.options[ddlDistrict.selectedIndex].value.toString();
    $(".ddl-store-district span").html(ddlDistrict.options[ddlDistrict.selectedIndex].text.toString());
    $.ajax({
        url: "/aj/Store/SearchStoreProductByDistrict",
        type: "GET",
        cache: false,
        data: { strProductID:productid,strProductCode: sbproductcode, strProvinceID: intProvince, strProvinceName: provinceName, strDistrictID: districtID },
        beforeSend: function () {
            //$('.loading').show();
        },
        success: function (result) {
            //$('.loading').hide();
            var itemContent = document.getElementById("contentSearchResult");
            $(itemContent).find(".result-list").html(result);
            $('span[name=\"storecount\"]').html($(".result-list li").length);
            $('#countstoreresult').html($(".result-list li").length);
            
            if (districtID == "-1") {
                SearchStore(intProvince);
                return;
            }
            else {
                GetResultStoreList();
                return;
            }
        },
        error: function (result) {
            return;
        }
    })
}
function SearchStoreByDisTrictWarr(productid) {
    var ddlCity = document.getElementById("city-filter-warr");
    var intProvince = ddlCity.options[ddlCity.selectedIndex].value.toString();
    var provinceName = ddlCity.options[ddlCity.selectedIndex].text.toString();
    var ddlDistrict = document.getElementById("district-filter-warr");
    var districtID = ddlDistrict.options[ddlDistrict.selectedIndex].value.toString();
    $.ajax({
        url: "/aj/Store/SearchStoreProductByDistrictWarr",
        type: "GET",
        cache: false,
        data: { strProductID: productid, strProvinceID: intProvince, strProvinceName: provinceName, strDistrictID: districtID },
        beforeSend: function () {
            //$('.loading').show();
        },
        success: function (result) {
            //$('.loading').hide();
            var itemContent = document.getElementById("contentSearchResultwarr");
            itemContent.outerHTML = result;
            $('span[name=\"storecountwarr\"]').html($(".result-list-warr li").length);
            if (districtID == "-1") {
                SearchStoreWarr(intProvince);
                return;
            }
            else {
                GetResultStoreListWarr();
                return;
            }
        },
        error: function (result) {
            return;
        }
    })
}

function GetStoreByProvince(productid) {
    var ddlCity = document.getElementById("city-filter");
    var intProvince = ddlCity.options[ddlCity.selectedIndex].value.toString();
    var provinceName = ddlCity.options[ddlCity.selectedIndex].text.toString();
    $.ajax({
        url: "/aj/Store/GetStoreProductByProvince",
        type: "GET",
        cache: false,
        data: { strProductID: productid, strProductCode: sbproductcode, strProvinceID: intProvince, strProvinceName: provinceName },
        beforeSend: function () {
            //$('.loading').show();
        },
        success: function (result) {
            try {
                //$('.loading').hide();
                var itemContent = document.getElementById("contentSearchResult");
                itemContent.outerHTML = result;
                $('span[name=\"storecount\"]').html($(".result-list li").length);
                $('#countstoreresult').html($(".result-list li").length);
            } catch (e) {

            }
            return;
            
        },
        error: function (result) {
            return;
        }
    })
}
function GetStoreByProvinceWarr(productid) {
    var ddlCity = document.getElementById("city-filter-warr");
    var intProvince = ddlCity.options[ddlCity.selectedIndex].value.toString();
    var provinceName = ddlCity.options[ddlCity.selectedIndex].text.toString();
    $.ajax({
        url: "/aj/Store/GetStoreProductByProvinceWarr",
        type: "GET",
        cache: false,
        data: { strProductID: productid, strProvinceID: intProvince, strProvinceName: provinceName },
        beforeSend: function () {
            //$('.loading').show();
        },
        success: function (result) {
            //$('.loading').hide();
            var itemContent = document.getElementById("contentSearchResultwarr");
            itemContent.outerHTML = result;
            $('span[name=\"storecountwarr\"]').html($(".result-list-warr li").length);
            return;
        },
        error: function (result) {
            return;
        }
    })
}

function SearchSStore() {
    var ddlCity = document.getElementById("city-filter");
    var txtSearch = document.getElementById("location-search-input");
    var intProvince = ddlCity.options[ddlCity.selectedIndex].value.toString();
    var ProvinceName = ddlCity.options[ddlCity.selectedIndex].text.toString();
    var ddlDistrict = document.getElementById("district-filter");
    var District = ddlDistrict.options[ddlDistrict.selectedIndex].value.toString();
    var KeySearch = txtSearch.value.toString();
    var ProductId = $("#hdProductID").val();
    if (KeySearch.length <= 0)
    {
        alert("Vui lòng nhập từ khóa cần tìm.");
        return;
    }
    $.ajax({
        url: "/aj/Store/SearchStoreProduct",
        type: "GET",
        cache: false,
        data: { strProductID: ProductId,strProductCode: sbproductcode, strKeySearch: KeySearch, strPageIndex: "0", strPageSize: "100", intProvinceID: -1, strProvinceName: ProvinceName, strDistrict: -1},
        beforeSend: function () {
            //$('.loading').show();
        },
        success: function (result) {
            //$('.loading').hide();
            var itemContent = document.getElementById("contentSearchResult");
            itemContent.outerHTML = result;
            $('span[name=\"storecount\"]').html($(".result-list li").length);
            $('#countstoreresult').html($(".result-list li").length);
            $('#Suggestion').hide();
            return;
        },
        error: function (result) {
            return;
        }
    })
}
function SearchSStoreWarr() {
    var ddlCity = document.getElementById("city-filter-warr");
    var txtSearch = document.getElementById("location-search-input-warr");
    var intProvince = ddlCity.options[ddlCity.selectedIndex].value.toString();
    var ProvinceName = ddlCity.options[ddlCity.selectedIndex].text.toString();
    var ddlDistrict = document.getElementById("district-filter-warr");
    var District = ddlDistrict.options[ddlDistrict.selectedIndex].value.toString();
    var KeySearch = txtSearch.value.toString();
    var ProductId = $("#hdProductID").val();
    $.ajax({
        url: "/aj/Store/SearchStoreProductWarr",
        type: "GET",
        cache: false,
        data: { strProductID: ProductId, strKeySearch: KeySearch, strPageIndex: "0", strPageSize: "100", intProvinceID: intProvince, strProvinceName: ProvinceName, strDistrict: District },
        beforeSend: function () {
            //$('.loading').show();
        },
        success: function (result) {
            //$('.loading').hide();
            var itemContent = document.getElementById("contentSearchResultwarr");
            itemContent.outerHTML = result;
            $('span[name=\"storecountwarr\"]').html($(".result-list-warr li").length);
            return;
        },
        error: function (result) {
            return;
        }
    })
}

function SearchSStoreActive() {
    var ddlCity = document.getElementById("city-filter");
    var txtSearch = document.getElementById("location-search-input");
    var intProvince = ddlCity.options[ddlCity.selectedIndex].value.toString();
    var ProvinceName = ddlCity.options[ddlCity.selectedIndex].text.toString();
    var ddlDistrict = document.getElementById("district-filter");
    var District = ddlDistrict.options[ddlDistrict.selectedIndex].value.toString();
    var KeySearch = txtSearch.value.toString();
    var intProductID = $("#hdProductID").val()
    $.ajax({
        url: "/aj/Store/SearchStoreProduct",
        type: "GET",
        cache: false,
        data: { strProductID: intProductID, strKeySearch: KeySearch, strPageIndex: "0", strPageSize: "100", intProvinceID: -1, strProvinceName: ProvinceName, strDistrict: -1},
        beforeSend: function () {
            //$('.loading').show();
        },
        success: function (result) {
            //$('.loading').hide();
            
            var itemContent = document.getElementById("contentSearchResult");
            itemContent.outerHTML = result;
            $('span[name=\"storecount\"]').html($(".result-list li").length);
            $('#countstoreresult').html($(".result-list li").length);
            itemContent = document.getElementById("contentSearchResult");
            //var firstitem = $(itemContent).children("div").children("ul").children("li")[0];
            //if (firstitem.outerHTML.indexOf(KeySearch) != -1) {
            //    firstitem.click();
            //}
            //return;
            var firstitem = $(itemContent).children("div").children("ul").children("li")[0];

            //ddlDistrict = document.getElementById("district-filter");
            //for (var i = 0; i < ddlDistrict.options.length; i++) {
            //    if (ddlDistrict.options[i].value == dist) {
            //        if (ddlDistrict.selectedIndex != i) {
            //            ddlDistrict.selectedIndex = i;
            //            break;
            //        }
            //    }
            //}
            try {

            if (firstitem != undefined) {
                var valueAdd = $(firstitem).children("a").children("strong")[1];
                if (KeySearch.indexOf(valueAdd.innerHTML.toString()) != -1) {
                    firstitem.click();
                    $(itemContent).children("div").children("ul").children("li").each(function () {
                        if ($(this).attr("class") == "deactive") {
                            $(this).remove();
                        }
                    });
                    var prov = $(firstitem).attr("province");
                    var dist = $(firstitem).attr("district");
                    for (var i = 0; i < ddlCity.options.length; i++) {
                        if (ddlCity.options[i].value == prov) {
                            if (ddlCity.selectedIndex != i) {
                                ddlCity.selectedIndex = i;
                                break;
                            }
                        }
                    }
                    SearchDisTrictAndChoose(dist);
                }
            }

            } catch (e) {

            }
            CountStoreResultSearch();
            $('#Suggestion').hide();
            AutoClick();

            
            return;
        },
        error: function (result) {
            return;
        }
    })
}
function SearchDisTrictSearchStoreKeySearch(stringkey) {
    var ddlCity = document.getElementById("city-filter");
    var intProvince = ddlCity.options[ddlCity.selectedIndex].value.toString();
    var headerTextSearch = document.getElementById("search-keyword");
    var searchInput = document.getElementById("location-search-input");
    searchInput.value = headerTextSearch.value;
    
    $.ajax({
        url: "/aj/Store/LoadDistrictProduct",
        type: "GET",
        cache: false,
        data: { sProductId: productid, strProductCode: sbproductcode, intProvinceID: intProvince },
        beforeSend: function () {
            //$('.loading').show();
        },
        success: function (result) {
            //$('.loading').hide();
            var ddlDistrict = document.getElementById("district-filter");
            $(".ddl-store-district span").html("Chọn quận/huyện");
            ddlDistrict.outerHTML = result;
            GetStoreByProvince(productid);
            SearchStore(intProvince, productid, sbproductcode);
            return;
        },
        error: function (result) {
            return;
        }
    })
}

function CountStoreResultSearch() {
    //var item = document.getElementById("countstoreresult");
    //var itemlist = document.getElementById("contentSearchResult");
    //var numberitem = $(itemlist).children("div.result-wrapper").children("ul").children("li").length;
    //item.outerHTML = "<span id=\"countstoreresult\">" + numberitem + "</span>";
}
function AutoClick() {
    var itemContent = document.getElementById("contentSearchResult");
    $(itemContent).children("div").children("ul").children("li")[0].click();
}

function SearchSStoreActiveWarr() {
    var ddlCity = document.getElementById("city-filter-warr");
    var txtSearch = document.getElementById("location-search-input-warr");
    var intProvince = ddlCity.options[ddlCity.selectedIndex].value.toString();
    var ProvinceName = ddlCity.options[ddlCity.selectedIndex].text.toString();
    var ddlDistrict = document.getElementById("district-filter-warr");
    var District = ddlDistrict.options[ddlDistrict.selectedIndex].value.toString();
    var KeySearch = txtSearch.value.toString();
    var intProductID = $("#hdProductID").val()
    $.ajax({
        url: "/aj/Store/SearchStoreProductWarr",
        type: "GET",
        cache: false,
        data: { strProductID: intProductID, strKeySearch: KeySearch, strPageIndex: "0", strPageSize: "100", intProvinceID: intProvince, strProvinceName: ProvinceName, strDistrict: District },
        beforeSend: function () {
            //$('.loading').show();
        },
        success: function (result) {
            //$('.loading').hide();
            var itemContent = document.getElementById("contentSearchResultwarr");
            itemContent.outerHTML = result;
            $('span[name=\"storecountwarr\"]').html($(".result-list-warr li").length);
            itemContent = document.getElementById("contentSearchResultwarr");
            var firstitem = $(itemContent).children("div").children("ul").children("li")[0];
            if (firstitem.outerHTML.indexOf(KeySearch) != -1) {
                firstitem.click();
            }
            return;
        },
        error: function (result) {
            return;
        }
    })
}

function ClickAtive(item, storeID) {
    var parnt = document.getElementById("contentSearchResult");
    $(parnt).children("div").children("ul").children("li").each(function () {
        $(this).attr("class", "deactive");
    });
    $(item).attr("class", "active");
    InitMapNew(storeID);
}
function ClickAtiveWarr(item, storeID) {
    //var parnt = document.getElementById("contentSearchResultwarr");
    //$(parnt).children("div").children("ul").children("li").each(function () {
    //    $(this).attr("class", "deactive");
    //});
    $("#contentSearchResultwarr li").attr("class", "deactive");
    $(item).attr("class", "active");
    InitMapWarr(storeID);
}
function ClickAtiveWarrCenter(item, storeID) {
    //var parnt = document.getElementById("contentSearchResultwarr");
    //$(parnt).children("div").children("ul").children("li").each(function () {
    //    $(this).attr("class", "deactive");
    //});
    $("#contentSearchResultwarr li").attr("class", "deactive");
    $(item).attr("class", "active");
    InitMapWarrCenter(storeID);
}

function Search() {
    var searchInput = document.getElementById("location-search-input");
    var kw = searchInput.value.replace(/:|;|!|@@|#|\$|%|\^|&|\*|'|"|>|<|,|\.|\?|\/|`|~|\+|=|_|\(|\)|{|}|\[|\]|\\|\|/gi, '');
    var kwt = kw.trim();
    searchInput.value = kwt;
    $('#Suggestion').hide();
    SearchSStore();
}
function SearchWarr() {
    var searchInput = document.getElementById("location-search-input-warr");
    var kw = searchInput.value.replace(/:|;|!|@@|#|\$|%|\^|&|\*|'|"|>|<|,|\.|\?|\/|`|~|\+|=|_|\(|\)|{|}|\[|\]|\\|\|/gi, '');
    var kwt = kw.trim();
    searchInput.value = kwt;
    $('#SuggestionWarr').hide();
    SearchSStoreWarr();
}

function Suggestion(e) {
    var ddlDistrict = document.getElementById("district-filter");
    var District = ddlDistrict.options[ddlDistrict.selectedIndex].value.toString();
    var ddlCity = document.getElementById("city-filter");
    var intProvince = ddlCity.options[ddlCity.selectedIndex].value.toString();
    var intProductID = $("#hdProductID").val();
    if (e.which == 13) {
        //Search();
        $('#Suggestion').hide();
        //SearchSStore();
        if ($('#Suggestion ul li.li-item.selected').html() != undefined) {
            $('#location-search-input').val($('#Suggestion ul li.li-item.selected .iName').html());
        }
        SearchSStoreActive();
        return;
    }
    if (e.which == 40) {
        if ($('#Suggestion ul li.selected').length == 0) {
            $('#Suggestion ul li.li-item:first').addClass('selected');
            //$('#location-search-input').val($('#Suggestion ul li.li-item:first span.iName').text());
        }
        else {
            var t = $('#Suggestion ul li.selected').next();
            if (t.hasClass('li-group'))
                t = t.next();
            $('#Suggestion ul li.selected').removeClass('selected');
            t.addClass('selected');
            //$('#location-search-input').val(t.find('span.iName').text());
        }
        return;
    }
    else if (e.which == 38) {
        if ($('#Suggestion ul li.selected').length == 0) {
            $('#Suggestion ul li.li-item:last').addClass('selected');
            //$('#location-search-input').val($('#Suggestion ul li.li-item:last span.iName').text());
        }
        else {
            var t = $('#Suggestion ul li.selected').prev();
            if (t.hasClass('li-group'))
                t = t.prev();
            $('#Suggestion ul li.selected').removeClass('selected');
            t.addClass('selected');
            //$('#location-search-input').val(t.find('span.iName').text());
        }
        return;
    }
    var kw = $('#location-search-input').val().replace(/:|;|!|@@|#|\$|%|\^|&|\*|'|"|>|<|,|\.|\?|\/|`|~|\+|=|_|\(|\)|{|}|\[|\]|\\|\|/gi, '');
    var kwt = kw.trim();
    if (kwt.length <= 2) {
        $('#Suggestion').hide();
        return;
    }
    //$('#location-search-input').css('border', 'none');
    $.ajax({
        url: '/aj/Store/SearchStoreProductSuggest',
        type: 'GET',
        data: { strProductID: intProductID,strProductCode:sbproductcode, Key: kwt, strDistrict: '-1', strProvince: '-1'},
        //data: { strProductID: intProductID, strProductCode: sbproductcode, Key: kwt, strDistrict: District, strProvince: intProvince },
        dataType: 'json',
        cache: true,
        success: function (d) {
            if (d == null) {
                $('#Suggestion').hide();
                return;
            }
            d = d.i;
            var rl = d.length;
            var prod = '';
            var catetrack = {};
            for (var j = 0; j < rl; j++) {
                if (d[j][6] == '1') {
                    prod += '<li class="li-item"><div><span class="iName">' + d[j][4] + '</span></div><div class="clear"></div></li>';
                }
            }
            var html = '';
            if (prod != '')
                html += prod;
            if (html == '') {
                $('#Suggestion').hide();
            }
            else {
                $('#Suggestion ul.ul-search-suggestion').html(html);
                $('#Suggestion').show();

            }
        }
    })
}
function SuggestionWarr(e) {
    var ddlDistrict = document.getElementById("district-filter-warr");
    var District = ddlDistrict.options[ddlDistrict.selectedIndex].value.toString();
    var ddlCity = document.getElementById("city-filter-warr");
    var intProvince = ddlCity.options[ddlCity.selectedIndex].value.toString();
    var intProductID = $("#hdProductID").val();
    if (e.which == 13) {
        //Search();
        $('#SuggestionWarr').hide();
        //SearchSStore();
        SearchSStoreActiveWarr();
        return;
    }
    if (e.which == 40) {
        if ($('#SuggestionWarr ul li.selected').length == 0) {
            $('#SuggestionWarr ul li.li-item:first').addClass('selected');
            $('#location-search-input-warr').val($('#SuggestionWarr ul li.li-item:first span.iName').text());
        }
        else {
            var t = $('#SuggestionWarr ul li.selected').next();
            if (t.hasClass('li-group'))
                t = t.next();
            $('#SuggestionWarr ul li.selected').removeClass('selected');
            t.addClass('selected');
            $('#location-search-input-warr').val(t.find('span.iName').text());
        }
        return;
    }
    else if (e.which == 38) {
        if ($('#SuggestionWarr ul li.selected').length == 0) {
            $('#SuggestionWarr ul li.li-item:last').addClass('selected');
            $('#location-search-input-warr').val($('#SuggestionWarr ul li.li-item:last span.iName').text());
        }
        else {
            var t = $('#SuggestionWarr ul li.selected').prev();
            if (t.hasClass('li-group'))
                t = t.prev();
            $('#SuggestionWarr ul li.selected').removeClass('selected');
            t.addClass('selected');
            $('#location-search-input-warr').val(t.find('span.iName').text());
        }
        return;
    }
    var kw = $('#location-search-input-warr').val().replace(/:|;|!|@@|#|\$|%|\^|&|\*|'|"|>|<|,|\.|\?|\/|`|~|\+|=|_|\(|\)|{|}|\[|\]|\\|\|/gi, '');
    var kwt = kw.trim();
    if (kwt.length <= 2) {
        $('#SuggestionWarr').hide();
        return;
    }
    //$('#location-search-input').css('border', 'none');
    $.ajax({
        url: '/aj/Store/SearchStoreProductSuggestWarr',
        type: 'GET',
        data: { strProductID: intProductID, Key: kwt, strDistrict: District, strProvince: intProvince },
        dataType: 'json',
        cache: true,
        success: function (d) {
            if (d == null) {
                $('#SuggestionWarr').hide();
                return;
            }
            d = d.i;
            var rl = d.length;
            var prod = '';
            var catetrack = {};
            for (var j = 0; j < rl; j++) {
                if (d[j][6] == '1') {
                    prod += '<li class="li-item"><div><span class="iName">' + d[j][4] + '</span></div><div class="clear"></div></li>';
                }
            }
            var html = '';
            if (prod != '')
                html += prod;
            if (html == '') {
                $('#SuggestionWarr').hide();
            }
            else {
                $('#SuggestionWarr ul.ul-search-suggestion').html(html);
                $('#SuggestionWarr').show();

            }
        }
    })
}

$('#Suggestion ul li.li-item').live('mouseover', function () {
    $('#Suggestion ul li.selected').removeClass('selected');
})
$('#Suggestion ul li.li-item').live('click', function () {
    $('#Suggestion').hide();
    $('#location-search-input').val($(this).find('span.iName').text());
    //SearchSStore();
    SearchSStoreActive();
});
$('#SuggestionWarr ul li.li-item').live('mouseover', function () {
    $('#SuggestionWarr ul li.selected').removeClass('selected');
})
$('#SuggestionWarr ul li.li-item').live('click', function () {
    $('#SuggestionWarr').hide();
    $('#location-search-input-warr').val($(this).find('span.iName').text());
    //SearchSStore();
    SearchSStoreActiveWarr();
});

/* Variables */
var ProductService = new tgdd.business.ProductHelperSvc();
var ProvinceIDSelect;
var DistrictIDSelect;
var StoreIDSelect;
var gMap;
var HTML;
var isSelectsuggest = 0;
var gmarkers = [];
/* Functions*/
function GetProvinceSuccess(e) {
    var strSource = e.toString();
    $("#loading").html("");
    if (strSource == "") {
        $("#ddlListProvince").html("<option value='-1'>- Chọn Tỉnh Thành -</option>");
    } else
        $("#ddlListProvince").html("<option value='-1'>- Chọn Tỉnh Thành -</option>" + strSource);

}

function GetDistrictSuccess(e) {
    var strSource = e.toString();
    $("#loading").html("");
    if (strSource == "") {
        $("#ddlListDistrict").html("<option value='-1'>- Chọn Quận/Huyện -</option>");
    } else
        $("#ddlListDistrict").html("<option value='-1'>- Chọn Quận/Huyện -</option>" + strSource);

}

function GetStoreSuccess(e) {
    var strSource = e.toString();
    $("#loading").html("");
    if (strSource == "") {
        $("#ddlListStore").html("<option value='-1'>- Chọn Siêu Thị -</option>");
    } else
        $("#ddlListStore").html("<option value='-1'>- Chọn Siêu Thị -</option>" + strSource);

}

function GetStoreLatLngComplete(e) {
    //Recenter the gmap
    var lat = e[0];
    var lng = e[1];
    var point = new GLatLng(lat, lng);
    gMap.setCenter(point, 16);
    var iconDienMay = new GIcon(G_DEFAULT_ICON);
    iconDienMay.image = "/logo.png";
    iconDienMay.iconSize = new GSize(32, 32);
    var marker = new GMarker(point, { icon: iconDienMay });
    gMap.addOverlay(marker);
    marker.openInfoWindowHtml(HTML);
}

function Failed(e) {
    $("#loading").html("Lỗi lấy dữ liệu");
}

function ShowDistrict(intProvinceID, intProvinceIDnext) {
    ProductService.GenTreeDistrist(intProvinceID,
                    function (e) {
                        $("#" + intProvinceIDnext.toString()).html(e[0].toString());
                        //$('#div_curstock_r').html(e[1].toString());
                    },
                    function () {
                        $("#loading").html("Có lỗi xảy ra!");
                    });
    return false;
}

function ShowStore(intStoreID) {
    OnLookupStore(intStoreID);
}

function OnLookupStore(storeid) {
    tgdd.business.ProductHelperSvc.GetDetailStore(storeid, OnLookupStoreComplete);
    tgdd.business.ProductHelperSvc.GetStoreLatLng(storeid, GetStoreLatLngComplete);
}

function OnLookupStoreComplete(e) {
    var result = e.toString();
    if (document.getElementById("div_curstock_r") != null) {
        var res = document.getElementById("div_curstock_r");
        res.innerHTML = result;
    }
    var temp = e.toString();
    var temp2 = "<div style='width:370px;'>" + temp;
    temp2 += "</div>";
    HTML = temp2;
}

function searchFail() {

}

$(document).ready(function (event) {
    $('#txtinpunt').prop('disabled', true);
    $('#btn-search').prop('disabled', true);

    $('#suggest-store').find('.k-match').live('click', function () {
        $('#txtinpunt').val($(this).attr('value'));
        $('#txtinpunt').focus();
        $('#suggest-store').hide();
        isSelectsuggest = 1;
        strkeyrwod = $(this).attr('value');
        GetResultStoreList($(this).attr('value'));
    });
    $('#suggest-store').find('.k-match').live('mouseover', function () {
        $('#suggest-store').find('li').filter('.focus-search').removeClass('focus-search');
        $(this).addClass('focus-search');
    });
    $('#suggest-store').find('.k-match').live('mouseleave', function () {
        $(this).removeClass('focus-search');
    });
})

function CheckIMEI() {
    var imei = $("#txtImei").val().trim();
    if (imei.length <= 0) {
        alert("Vui lòng nhập số IMEI")
        return;
    }
    $.ajax({
        url: '/aj/Store/CheckIMEI',
        type: 'GET',
        data: { strIMEI: imei },
        cache: true,
        beforeSend: function () {
            $('#warrinfo').html('<img src="' + cdnpath + '/Content/images/sites/ajax-loader.gif">');
        },
        success: function (args) {
            if (args && args.info && args.lst) {
                var info = eval(args.info);
                var lst = eval(args.lst);
                if (info.length == 0) {
                    $("#warrinfo").html("<span style='color:red; padding-left:10px'>Số IMEI không chính xác vui lòng kiểm tra lại.</span>");
                    return;
                }

                var html = "";
                html += "<div class='warrantyinfo'>";
                html += "<h4>Thông tin bảo hành</h4>";
                html += "<table>";
                for (var i = 0; i < info.length; i++) {
                    html += "<tr>";
                    html += "<td><b>Tên sản phẩm:</b></td>";
                    html += "<td colspan='3'><b>" + info[0].PRODUCTNAME + "</b></td>";
                    html += "</tr>";
                    html += "<tr>";
                    html += "<td width='25%'><b>Tên khách hàng:</b></td>";
                    html += "<td width='25%'>" + info[0].CUSTOMERNAME + "</td>";
                    html += "<td width='25%'><b>Ngày bắt đầu bảo hành:</b></td>";
                    html += "<td width='25%'>" + info[0].CREATEDDATE + "</td>";
                    html += "</tr>";
                    html += "<tr>";
                    html += "<td><b>Số điện thoại:</b></td>";
                    html += "<td>" + info[0].MOBILEPHONE + "</td>";
                    html += "<td><b>Ngày kết thúc bảo hành:</b></td>";
                    html += "<td>" + info[0].WARRANTYENDTIME + "</td>";
                    html += "</tr>";
                    $("#productnamewarr").text(info[0].PRODUCTNAME);
                    if (info[0].ISWARRANTY == "0") {
                        $("#WarrTcc").hide();
                        $("#contentresulttgdd").hide();
                        $("#contentresult").attr("style", "height:368px");
                        $("#contentresult").mCustomScrollbar("update");
                        if ($("#contentresult li").length > 0) {
                            $("#contentresult li:first").click();
                        }
                        $('span[name=\"storecountwarr\"]').html($(".result-list-warr li").length - $("#contentresulttgdd li").length);
                    }
                    else {
                        $("#WarrTcc").show();
                        $("#contentresulttgdd").show();
                        $("#contentresult").removeAttr("style");
                        $("#contentresult").mCustomScrollbar("update");
                        if ($("#contentresulttgdd li").length > 0) {
                            $("#contentresulttgdd li:first").click();
                        }
                        else {
                            if ($("#contentresult li").length > 0) {
                                $("#contentresult li:first").click();
                            }
                        }
                        $('span[name=\"storecountwarr\"]').html($(".result-list-warr li").length);
                    }
                }
                html += "</table>";
                if (lst.length > 0) {
                    html += "<h4>Lịch sử bảo hành</h4>";
                    html += "<table>";
                    html += "<tr style='border-bottom:solid 1px #ddd'>";
                    html += "<td><b>Mã bảo hành</b></td>";
                    html += "<td><b>Ngày</b></td>";
                    html += "<td><b>Địa điểm bảo hành</b></td>";
                    html += "<td><b>Lý do</b></td>";
                    html += "</tr>";
                    for (var i = 0; i < lst.length; i++) {
                        html += "<tr>";
                        html += "<td>" + lst[i].JOBCARDID + "</td>";
                        html += "<td>" + lst[i].CREATEDDATE + "</td>";
                        html += "<td>" + lst[i].STORENAME + "</td>";
                        html += "<td>" + lst[i].SYMPTOMNAME + "</td>";
                        html += "</tr>";
                    }
                    html += "</table>";
                }
                html += "</div>"
                $("#warrinfo").html(html);
                $("#warr-content").mCustomScrollbar("update");
            }
        }
    })
}

function GetResultStoreList() {
    var ftgdd = 1;
    var ddlCity = document.getElementById("city-filter");
    var intProvince = ddlCity.options[ddlCity.selectedIndex].value.toString();
    var provinceName = ddlCity.options[ddlCity.selectedIndex].text.toString();
    var ddlDistrict = document.getElementById("district-filter");
    var districtID = ddlDistrict.options[ddlDistrict.selectedIndex].value.toString();
    tgdd.business.ProductHelperSvc.SearchStoreByProvinceDistrictProduct(intProvince, districtID, sbproductid, sbproductcode, GenHTML, searchFail);
}
function GetResultStoreListWarr() {
    var ftgdd = 1;
    var ddlCity = document.getElementById("city-filter-warr");
    var intProvince = ddlCity.options[ddlCity.selectedIndex].value.toString();
    var provinceName = ddlCity.options[ddlCity.selectedIndex].text.toString();
    var ddlDistrict = document.getElementById("district-filter-warr");
    var districtID = ddlDistrict.options[ddlDistrict.selectedIndex].value.toString();
    tgdd.business.ProductHelperSvc.SearchStoreByProvinceDistrict(intProvince, districtID, GenHTMLWarr, searchFail);
}

var locations = {};

function SearchStore(intProvinceId, intProductId, strProductCode) {
    debugger;
    gmarkers = [];
    var strkeyword = document.getElementById('location-search-input').value;
    //var chktgdd = document.getElementById('chksearchstoretgdd');

    var ftgdd = 1;
    //var cityFilter = document.getElementById("city-filter");

    //if (chktgdd.checked == true)
    //    ftgdd = 1;
    //else ftgdd = -1;

    if (strkeyword == '' || strkeyword == 'TP.Hồ Chí Minh') {
        strkeyword = 'HCM';
    }
    //if (strkeyword == 'HCM') {
    //    intProvinceId = 3;
    //}
    //if (intProvinceId == undefined) {
    //    intProvinceId = parseInt($('#hdd-province-id').val());
    //}

    //if (strkeyword != '') {
    //$('#storelist').html('<div style="text-align:center;padding: 10px;border: 1px solid #d2d2d2;width: 243px;color: red;font-weight: bold;">Đang tải dữ liệu ...</div>');
    tgdd.business.ProductHelperSvc.GetResultBySiteFromQueryProduct(strkeyword, ftgdd, intProvinceId,intProductId,strProductCode, GenHTML, searchFail);

    //}
}
function SearchStoreWarr(intProvinceId) {
    gmarkers = [];
    var strkeyword = document.getElementById('location-search-input-warr').value;
    //var chktgdd = document.getElementById('chksearchstoretgdd');

    var ftgdd = 1;
    //var cityFilter = document.getElementById("city-filter");

    //if (chktgdd.checked == true)
    //    ftgdd = 1;
    //else ftgdd = -1;

    if (strkeyword == '' || strkeyword == 'TP.Hồ Chí Minh') {
        strkeyword = 'HCM';
    }
    //if (strkeyword == 'HCM') {
    //    intProvinceId = 3;
    //}
    //if (intProvinceId == undefined) {
    //    intProvinceId = parseInt($('#hdd-province-id').val());
    //}

    //if (strkeyword != '') {
    //$('#storelist').html('<div style="text-align:center;padding: 10px;border: 1px solid #d2d2d2;width: 243px;color: red;font-weight: bold;">Đang tải dữ liệu ...</div>');
    tgdd.business.ProductHelperSvc.GetResultBySiteFromQuery(strkeyword, ftgdd, intProvinceId, GenHTMLWarr, searchFail);

    //}
}

function GetStoreDetail(storeid) {
    tgdd.business.ProductHelperSvc.GetStoreById(storeid, GenHTML2, searchFail);
}
function GetStoreDetailWarr(storeid) {
    tgdd.business.ProductHelperSvc.GetWarrantyTCCById(storeid, GenHTML2Warr, searchFail);
}
function GetStoreDetailWarrCenter(storeid) {
    tgdd.business.ProductHelperSvc.GetWarrantyById(storeid, GenHTML2WarrCenter, searchFail);
}
function GetStoreDetailNew(storeid) {
    tgdd.business.ProductHelperSvc.GetStoreById(storeid, GenHTML2New, searchFail);
}


function GenHTML(listObj) {
    if (listObj != null && listObj.length > 0) {
        //GenHTMLStoreList(listObj);
        //GetStoreByProvince();
        GenHTMLStoreMap(listObj);

    } else {
        //$('#storelist').html('Rất tiếc, chúng tôi không tìm được thông tin bạn cần');
        GetMapDefaultNull();
    }
}
function GenHTMLWarr(listObj) {
    if (listObj != null && listObj.length > 0) {
        //GenHTMLStoreList(listObj);
        //GetStoreByProvince();
        GenHTMLStoreMapWarr(listObj);

    } else {
        //$('#storelist').html('Rất tiếc, chúng tôi không tìm được thông tin bạn cần');
        GetMapDefaultNullWarr();
    }
}

function GenHTML2(listObj) {
    if (listObj != null) {
        //GenHTMLStoreList2(listObj);
        GenHTMLStoreMap2(listObj);
        google.maps.event.trigger(gmarkers[0], "click");

    } else {
        $('#storelist').html('Rất tiếc, chúng tôi không tìm được thông tin bạn cần');
        GetMapDefaultNull();
    }
}
function GenHTML2New(listObj) {
    if (listObj != null) {
        GenHTMLStoreMap2New(listObj);
        google.maps.event.trigger(gmarkers[0], "click");
    }
    else {
        GetMapDefaultNull();
    }
}
function GenHTML2Warr(listObj) {
    if (listObj != null) {
        //GenHTMLStoreList2(listObj);
        GenHTMLStoreMapWarr2(listObj);
        google.maps.event.trigger(gmarkers[0], "click");

    } else {
        $('#storelist').html('Rất tiếc, chúng tôi không tìm được thông tin bạn cần');
        GetMapDefaultNullWarr();
    }
}
function GenHTML2WarrCenter(listObj) {
    if (listObj != null) {
        //GenHTMLStoreList2(listObj);
        GenHTMLStoreMapWarr3(listObj);
        google.maps.event.trigger(gmarkers[0], "click");

    } else {
        $('#storelist').html('Rất tiếc, chúng tôi không tìm được thông tin bạn cần');
        GetMapDefaultNullWarr();
    }
}

function GetMapDefaultNull() {
    var lat = 0;
    var lng = 0;
    var LatLngCenter;
    LatLngCenter = new google.maps.LatLng(lat, lng);

    var map = new google.maps.Map(document.getElementById('storemap'), {
        zoom: 12,
        center: LatLngCenter,
        mapTypeId: google.maps.MapTypeId.ROADMAP

    });
}
function GetMapDefaultNullWarr() {
    var lat = 0;
    var lng = 0;
    var LatLngCenter;
    LatLngCenter = new google.maps.LatLng(lat, lng);

    var map = new google.maps.Map(document.getElementById('storemapwarr'), {
        zoom: 12,
        center: LatLngCenter,
        mapTypeId: google.maps.MapTypeId.ROADMAP

    });
}

//$(document).ready(function () {
    
//});

function ShowStoreMap(lat, lng, info, siteid) {
    var pathToIcon = 'http://cdn.tgdd.vn/v2012/content/images/';
    var icontgdd = new google.maps.MarkerImage('' + pathToIcon + 'iconmap.png',
            new google.maps.Size(22, 38),
            new google.maps.Point(0, 0),
            new google.maps.Point(0, 0));

    var icontgddac = new google.maps.MarkerImage('' + pathToIcon + 'iconmap_ac.png',
            new google.maps.Size(22, 38),
            new google.maps.Point(0, 0),
            new google.maps.Point(0, 0));


    var icondm = new google.maps.MarkerImage('' + pathToIcon + 'iconmapdm.png',
            new google.maps.Size(22, 37),
            new google.maps.Point(0, 0),
            new google.maps.Point(0, 0));

    var icondmac = new google.maps.MarkerImage('' + pathToIcon + 'iconmapdm_ac.png',
            new google.maps.Size(22, 37),
            new google.maps.Point(0, 0),
            new google.maps.Point(0, 0));

    var arrinfo = info.split(',');
    var listinfo = CreateHTMLInfo(arrinfo[0], arrinfo[1], arrinfo[2], arrinfo[3], arrinfo[4], arrinfo[5], arrinfo[6], arrinfo[7], arrinfo[8]);
    var latlng = new google.maps.LatLng(lat, lng);
    var myOptions = {
        zoom: 14,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    map = new google.maps.Map(document.getElementById("storemap"), myOptions);
    var marker;
    if (siteid == 1) {
        marker = new google.maps.Marker({
            map: map,
            position: latlng,
            icon: icontgdd
        });
    }
    else {
        marker = new google.maps.Marker({
            map: map,
            position: latlng,
            icon: icondm
        });
    }
    var infowindow = new google.maps.InfoWindow();
    infowindow.setContent(listinfo);
    infowindow.open(map, marker);
}

function CreateHTMLListStore(storename, storeaddress, imageurl, phone, fax, email, openhour, siteid, rate, show) {
    var strImageIcon = 'http://www.thegioididong.com/favicon.ico';
    storename = 'Thế giới di động - ' + storename;

    var strResult = '<div class="store-list">';
    strResult += '<div class="r"><div class="title"><div class="img"><img src="' + strImageIcon + '" alt="' + storename + '"/></div>';
    strResult += '<h5>' + storename + '</h5></div>';
    strResult += '<div class="address"><span>' + storeaddress + '</span></div>';
    if (show) {
        strResult += '<div id="' + rate + '" class="morecontent">';
    }
    else {
        strResult += '<div id="' + rate + '" class="morecontent" style="display:none;">';
    }
    if(phone!=null)
        strResult += '<div class="phone">Điện thoại: <span>' + phone + '</span></div>';
    if(fax!=null)
        strResult += '<div class="fax">Fax: <span>' + fax + '</span></div>';
    if(email!=null)
        strResult += '<div class="mail">Email: <span>' + email + '</span></div>';
    if(openhour!=null)
        strResult += '<div class="openhour">Giờ mở cửa: <span>' + openhour + '</span></div>';
    strResult += '</div>';
    strResult += '</div>';
    strResult += '</div>';
    return strResult;

}
//Gen HTML thông tin sieu thị
function CreateHTMLInfo(storename, storeaddress, imageurl, phone, fax, email, openhour, siteid, storeid) {
    var strImageIcon = '';
    imageurl = 'http://images.thegioididong.com/products/images/dtdd/khaitruong/sieuthi-nguyenoanh.jpg';
    if (siteid == 3) {
        strImageIcon = 'http://www.dienmay.com/favicon.ico';
        storename = 'Thế giới điện tử - ' + storename;
    }
    else {
        strImageIcon = 'http://www.thegioididong.com/favicon.ico';
        storename = 'Thế giới di động - ' + storename;
    }
    var strResult = '<div class="store-info">';
    strResult += '<div class="l"><img src="' + imageurl + '" alt="' + storename + '"/></div>';
    strResult += '<div class="r"><div class="title"><div class="img" style="float: left; margin-top: 5px; margin-right: 2px;"><img src="' + strImageIcon + '" alt="' + storename + '"/></div>';
    strResult += '<h5>' + storename + '</h5></div>';
    strResult += '<div class="address">Địa chỉ: <span>' + storeaddress + '</span></div>';
    strResult += '<div class="phone">Điện thoại: <span>' + phone + '</span></div>';
    //strResult += '<div class="fax">Fax: <span>' + fax + '</span></div>';
    strResult += '<div class="mail">Email: <span>' + email + '</span></div>';
    strResult += '<div class="openhour">Giờ mở cửa: <span>' + openhour + '</span></div>';
    //var url = "http://thegioididong.com/ho-tro/he-thong-sieu-thi";
    //strResult += '<div class="openhour">Link siêu thị: <input type="text" style=\"width: 240px;\" onclick="$(this).select()" value="' + url + '?store=' + storeid + '" /></div>';
    strResult += '</div>';
    strResult += '</div>';
    return strResult;
}
function CreateHTMLInfoWarr(storename, storeaddress, imageurl, phone, fax, email, openhour, siteid, storeid) {
    var strImageIcon = '';
    imageurl = 'http://images.thegioididong.com/products/images/dtdd/khaitruong/sieuthi-nguyenoanh.jpg';
    if (siteid == 3) {
        strImageIcon = 'http://www.dienmay.com/favicon.ico';
        storename = 'Thế giới điện tử - ' + storename;
    }
    else {
        strImageIcon = 'http://www.thegioididong.com/favicon.ico';
        storename = 'Thế giới di động - ' + storename;
    }
    var strResult = '<div class="store-info">';
    strResult += '<div class="l"><img src="' + imageurl + '" alt="' + storename + '"/></div>';
    strResult += '<div class="r"><div class="title"><div class="img" style="float: left; margin-top: 5px; margin-right: 2px;"><img src="' + strImageIcon + '" alt="' + storename + '"/></div>';
    strResult += '<h5>' + storename + '</h5></div>';
    strResult += '<div class="address">Địa chỉ: <span>' + storeaddress + '</span></div>';
    if (phone != null)
        strResult += '<div class="phone">Điện thoại: <span>' + phone + '</span></div>';
    if (fax != null)
        strResult += '<div class="fax">Fax: <span>' + fax + '</span></div>';
    if (email != null)
        strResult += '<div class="mail">Email: <span>' + email + '</span></div>';
    if (openhour != null)
        strResult += '<div class="openhour">Giờ mở cửa: <span>' + openhour + '</span></div>';
    //var url = "http://thegioididong.com/ho-tro/he-thong-sieu-thi";
    //strResult += '<div class="openhour">Link siêu thị: <input type="text" style=\"width: 240px;\" onclick="$(this).select()" value="' + url + '?store=' + storeid + '" /></div>';
    strResult += '</div>';
    strResult += '</div>';
    return strResult;
}
function CreateHTMLInfoWarrCenter(storename, storeaddress, imageurl, phone, fax, email, openhour, siteid, storeid) {
    var strImageIcon = '';
    //imageurl = 'http://images.thegioididong.com/products/images/dtdd/khaitruong/sieuthi-nguyenoanh.jpg';
    imageurl = '';
    if (siteid == 3) {
        //strImageIcon = 'http://www.dienmay.com/favicon.ico';
        //storename = 'Thế giới điện tử - ' + storename;
        strImageIcon = '';//'http://www.dienmay.com/favicon.ico';
        storename = 'Điểm bảo hành chính hãng - ' + storename;
    }
    else {
        //strImageIcon = 'http://www.thegioididong.com/favicon.ico';
        //storename = 'Thế giới di động - ' + storename;
        strImageIcon = '';//'http://www.dienmay.com/favicon.ico';
        storename = 'Điểm bảo hành chính hãng - ' + storename;
    }
    var strResult = '<div class="store-info">';
    //strResult += '<div class="l"><img src="' + imageurl + '" alt="' + storename + '"/></div>';
    //strResult += '<div class="l"></div>';
    strResult += '<div class="title">';
    strResult += '<h5>' + storename + '</h5></div>';
    strResult += '<div class="address">Địa chỉ: <span>' + storeaddress + '</span></div>';
    if (phone != null)
        strResult += '<div class="phone">Điện thoại: <span>' + phone + '</span></div>';
    if (fax != null)
        strResult += '<div class="fax">Fax: <span>' + fax + '</span></div>';
    if (email != null)
        strResult += '<div class="mail">Email: <span>' + email + '</span></div>';
    if (openhour != null)
        strResult += '<div class="openhour">Giờ mở cửa: <span>' + openhour + '</span></div>';
    strResult += '</div>';
    strResult += '</div>';
    return strResult;
}

function GetStoreInfoByID(storeid) {
    var strResult = '';
    dienmay.business.ProductSvc.GetStoreInfo(storeid, function (objStore) {
        strResult = CreateHTMLInfo(objStore.STOREFULLNAME, objStore.STOREADDRESS, objStore.IMAGEMAPLARGE, objStore.PHONE, objStore.FAX, objStore.EMAIL, objStore.OPENHOUR, objStore.SITEID, storeid);

    }, function () { });
    return strResult;
}
function success(position) {
    var pathToIcon = 'http://cdn.tgdd.vn/v2012/content/images/';
    var icontgdd = new google.maps.MarkerImage('' + pathToIcon + 'iconmap.png',
            new google.maps.Size(22, 38),
            new google.maps.Point(0, 0),
            new google.maps.Point(0, 0));

    var icontgddac = new google.maps.MarkerImage('' + pathToIcon + 'iconmap_ac.png',
            new google.maps.Size(22, 38),
            new google.maps.Point(0, 0),
            new google.maps.Point(0, 0));


    var icondm = new google.maps.MarkerImage('' + pathToIcon + 'iconmapdm.png',
            new google.maps.Size(22, 37),
            new google.maps.Point(0, 0),
            new google.maps.Point(0, 0));

    var icondmac = new google.maps.MarkerImage('' + pathToIcon + 'iconmapdm_ac.png',
            new google.maps.Size(22, 37),
            new google.maps.Point(0, 0),
            new google.maps.Point(0, 0));

    var geocoder = new google.maps.Geocoder();
    var coordinates = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var title = '';
    var myOptions =
	          {
	              zoom: 12,
	              center: coordinates,
	              mapTypeControl: false,
	              navigationControlOptions: { style: google.maps.NavigationControlStyle.small },
	              mapTypeId: google.maps.MapTypeId.ROADMAP
	          };

    map = new google.maps.Map(document.getElementById("storemap"), myOptions);
    geocoder.geocode({ 'latLng': coordinates }, function (results, status) {
        title = results[4].formatted_address;
        var infowindow = new google.maps.InfoWindow();
        if (status == google.maps.GeocoderStatus.OK) {
            if (results[4]) {
                var marker = new google.maps.Marker({
                    position: coordinates,
                    map: map,
                    title: title
                });
                var i = 0;
                var location = [title, position.coords.latitude, position.coords.longitude, 1];
                google.maps.event.addListener(marker, 'click', (function (marker, i) {
                    return function () {
                        infowindow.setContent(location[i]);
                        infowindow.open(map, marker);
                    }
                })(marker, i));
            }
        }
    });
}

function GenHTMLStoreMap2New(listObj) {
    if (listObj != null) {
        //
        var imageurl = listObj.IMAGEMAPLARGE;
        var storemap = document.getElementById("storemap");
        storemap.outerHTML = "<div id=\"storemap\" onclick=\"InitMap(" + listObj.STOREID + ");\" style=\"width: 100%; height: 511px; position: relative; cursor: pointer;\"><img id=\"imgstoremap\" src=\"" + imageurl + "\" style=\"margin-left: -80px;\" title=\"Click vào hình để xem bản đồ google map\" />" + CreateHTMLToolTipInfo(listObj.STOREFULLNAME, listObj.STOREADDRESS, listObj.IMAGEMAPLARGE, listObj.PHONE, listObj.FAX, listObj.EMAIL, listObj.OPENHOUR, listObj.SITEID, listObj.STOREID, listObj.PHONEAREA, listObj.PROVINCENAME, listObj.IMAGESTORE) + "</div>";
        $("#imgstoremap").load(function () { }).error(function () { InitMap(listObj.STOREID); });
    }
}
function CreateHTMLToolTipInfo(storename, storeaddress, imageurl, phone, fax, email, openhour, siteid, storeid, phonearea, provincename, webimage) {
    if (storename == undefined || storename == "null")
        storename = "";
    if (storeaddress == undefined || storeaddress == "null")
        storeaddress = "";
    if (imageurl == undefined || imageurl == "null")
        imageurl = "";
    if (phone == undefined || phone == "null")
        phone = "";
    if (fax == undefined || fax == "null")
        fax = "";
    if (email == undefined || email == "null")
        email = "";
    if (openhour == undefined || openhour == "null")
        openhour = "";
    if (siteid == undefined || siteid == "null")
        siteid = "";
    if (storeid == undefined || storeid == "null")
        storeid = "";
    if (phonearea == undefined || phonearea == "null")
        phonearea = "";
    if (provincename == undefined || provincename == "null")
        provincename = "";
    if (webimage == undefined || webimage == "null")
        webimage = "";
    var strImageIcon = '';
    //if(imageurl == "")
    imageurl = 'http://images.thegioididong.com/products/images/dtdd/khaitruong/sieuthi-nguyenoanh.jpg';
    var strImageStore = 'http://cdn.tgdd.vn/store/';
    if (siteid == 3) {
        strImageIcon = 'http://www.dienmay.com/favicon.ico';
        provincename = 'Thế giới điện tử - ' + provincename;
    }
    else {
        strImageIcon = 'http://www.thegioididong.com/favicon.ico';
        provincename = 'Thế giới di động - ' + provincename;
    }
    //var strResult = '<div class="store-infomation" style="width: 100%;height:125px">';
    var strResult = '<div><div class="store-bg-trans"></div><div class="store-infomation">';
    if (webimage != "") {
        strResult += '<div class="l"><img style=\"width: 100px; height: 100px;padding:10px;\" src="' + strImageStore + webimage + '" alt="' + storename + '"/></div>';
    }
    else {
        strResult += '<div class="l"><img style=\"width: 100px; height: 100px;padding:10px;\" src="' + imageurl + '" alt="' + storename + '"/></div>';
    }
    strResult += '<div class="r" style=\"padding-top: 5px; width: 360px;\">';
    strResult += '<div class="address" style="margin-bottom:3px;">Địa chỉ: <span>' + storeaddress + '</span></div>';
    strResult += '<div class="phone" style="margin-bottom:3px;">Tư vấn bán hàng: <span style="font-weight: bold;">' + phonearea + ' - 1900.561.292</span><span style="font-weight: normal !important;"> (từ 7:30 - 22:00 mỗi ngày)</span></div>';
    strResult += '<div class="phone">Góp ý - khiếu nại: <span style="font-weight: bold;">1900.1887</span><span style="font-weight: normal !important;"> (từ 8:00 - 21:00 mỗi ngày)</span></div>';
    var url = window.location.href;
    var spliturl = url.split("/");
    var newurl = "";
    for (var i = 0; i < spliturl.length; i++) {
        if (spliturl[i].indexOf(".com") != -1) {
            newurl += spliturl[i] + "/";
            break;
        }
        else {
            newurl += spliturl[i] + "/";
        }
    }
    //strResult += '<div class="openhour">Link siêu thị: <a style="color: white; padding-top: 5px;" href="' + newurl + 'sieu-thi-' + fax + '">' + newurl + 'sieu-thi-' + fax + '</a></div>';
    strResult += '</div>';
    strResult += '</div></div>';
    return strResult;
}
var divVisible = '';
var flagMarker = 0;
//Gen danh sách các sieu thi trên ban do
function GenHTMLStoreMap(listObj) {
    var pathToIcon = 'http://cdn.tgdd.vn/v2012/content/images/';
    var icontgdd = new google.maps.MarkerImage('' + pathToIcon + 'iconmap.png',
            new google.maps.Size(22, 38),
            new google.maps.Point(0, 0),
            new google.maps.Point(0, 0));

    var icontgddac = new google.maps.MarkerImage('' + pathToIcon + 'iconmap_ac.png',
            new google.maps.Size(22, 38),
            new google.maps.Point(0, 0),
            new google.maps.Point(0, 0));


    var icondm = new google.maps.MarkerImage('' + pathToIcon + 'iconmapdm.png',
            new google.maps.Size(22, 37),
            new google.maps.Point(0, 0),
            new google.maps.Point(0, 0));

    var icondmac = new google.maps.MarkerImage('' + pathToIcon + 'iconmapdm_ac.png',
            new google.maps.Size(22, 37),
            new google.maps.Point(0, 0),
            new google.maps.Point(0, 0));
    if (listObj != null) {
        gmarkers = [];
        var lat = 0;
        var lng = 0;
        var intexit = 0;
        var locations = [];
        var LatLngCenter;

        for (var i = 0; i < listObj.length; i++) {
            //if ((listObj[i].LAT != undefined || listObj[i].LAT != null) && (listObj[i].LNG != undefined || listObj[i].LNG != null) && listObj[i].LAT.toString() != '' && listObj[i].LNG.toString() != '') {
            if (listObj[i].LAT != undefined || listObj[i].LNG != null) {
                intexit = i;
                lat = listObj[i].LAT;
                lng = listObj[i].LNG;

                if (lat != 0 & lng != 0)
                    LatLngCenter = new google.maps.LatLng(lat, lng);

                var myLatlng = new google.maps.LatLng(lat, lng);


                var strInfo = CreateHTMLInfo(listObj[i].STOREFULLNAME, listObj[i].STOREADDRESS, listObj[i].IMAGEMAPLARGE, listObj[i].PHONE, listObj[i].FAX, listObj[i].EMAIL, listObj[i].OPENHOUR, listObj[i].SITEID, listObj[i].STOREID);
                var type = i;
                var store = [strInfo, lat, lng, listObj[i].STOREID, listObj[i].SITEID];
                locations.push(store);
            }
        }



        var map = new google.maps.Map(document.getElementById('storemap'), {
            zoom: 12,
            center: LatLngCenter,
            mapTypeId: google.maps.MapTypeId.ROADMAP

        });




        var infowindow = new google.maps.InfoWindow();
        var marker;
        if (locations != null || locations != undefined) {
            for (var i = 0; i < locations.length; i++) {

                if (locations[i][4] == 1) {
                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                        map: map,
                        icon: icontgdd
                    });
                    google.maps.event.addListener(marker, 'click', (function (marker, i) {

                        return function () {
                            var storeid = locations[i][3];
                            infowindow.setContent(locations[i][0]);
                            infowindow.open(map, marker);
                            var fi = divVisible.replace('div', '');
                            if (fi != '') {
                                var fiIcon = gmarkers[fi].getIcon().size;
                                if (fiIcon.height == 38) {
                                    gmarkers[fi].setIcon(icontgdd);
                                }
                                else {
                                    gmarkers[fi].setIcon(icondm);
                                }
                            }
                            marker.setIcon(icontgddac);
                            //divVisible = 'div' + i;
                            //$('#ulliststore li').removeClass('liac');
                            //document.getElementById('div' + i).className = "liac";
                        }

                    })(marker, i));

                    google.maps.event.addListener(infowindow, 'closeclick', (function (marker, i) {

                        return function () {
                            flagMarker = 0;
                            divVisible = '';
                            infowindow.close();
                            marker.setIcon(icontgdd);
                            //document.getElementById('div' + i).className = "";


                        }
                    })(marker, i));

                    google.maps.event.addListener(marker, "mouseover", (function (marker, i) {

                        return function () {
                            if (divVisible.replace('div', '') != i) {
                                marker.setIcon(icontgddac);
                                //document.getElementById('div' + i).className = "liac";
                            }
                        }
                    })(marker, i));


                    google.maps.event.addListener(marker, 'mouseout', (function (marker, i) {

                        return function () {
                            if (divVisible.replace('div', '') != i) {
                                marker.setIcon(icontgdd);
                                //document.getElementById('div' + i).className = "";
                            }
                        }
                    })(marker, i));



                }
                else {
                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                        map: map,
                        icon: icondm
                    });
                    google.maps.event.addListener(marker, 'click', (function (marker, i) {

                        return function () {
                            var storeid = locations[i][3];
                            flagMarker = 1;
                            infowindow.setContent(locations[i][0]);
                            infowindow.open(map, marker);
                            var fi = divVisible.replace('div', '');
                            if (fi != '') {

                                var fiIcon = gmarkers[fi].getIcon().size;

                                if (fiIcon.height == 38) {
                                    gmarkers[fi].setIcon(icontgdd);
                                }
                                else {
                                    gmarkers[fi].setIcon(icondm);
                                }
                            }
                            marker.setIcon(icondmac);
                            //divVisible = 'div' + i;
                            //$('#ulliststore li').removeClass('liac')
                            //document.getElementById('div' + i).className = "liac";

                        }

                    })(marker, i));


                    google.maps.event.addListener(infowindow, 'closeclick', (function (marker, i) {

                        return function () {
                            flagMarker = 0;
                            divVisible = '';
                            infowindow.close();
                            //document.getElementById('div' + i).className = "";
                            marker.setIcon(icondm);
                        }
                    })(marker, i));

                    google.maps.event.addListener(marker, 'mouseover', (function (marker, i) {

                        return function () {
                            if (divVisible.replace('div', '') != i) {
                                marker.setIcon(icondmac);
                                //document.getElementById('div' + i).className = "liac";
                            }
                        }
                    })(marker, i));

                    google.maps.event.addListener(marker, 'mouseout', (function (marker, i) {

                        return function () {
                            if (divVisible.replace('div', '') != i) {
                                marker.setIcon(icondm);
                                //document.getElementById('div' + i).className = "";
                            }
                        }
                    })(marker, i));

                }

                gmarkers.push(marker);


            }
        }

    }

}
function GenHTMLStoreMapWarr(listObj) {
    var pathToIcon = 'http://cdn.tgdd.vn/v2012/content/images/';
    var icontgdd = new google.maps.MarkerImage('' + pathToIcon + 'iconmap.png',
            new google.maps.Size(22, 38),
            new google.maps.Point(0, 0),
            new google.maps.Point(0, 0));

    var icontgddac = new google.maps.MarkerImage('' + pathToIcon + 'iconmap_ac.png',
            new google.maps.Size(22, 38),
            new google.maps.Point(0, 0),
            new google.maps.Point(0, 0));


    var icondm = new google.maps.MarkerImage('' + pathToIcon + 'iconmapdm.png',
            new google.maps.Size(22, 37),
            new google.maps.Point(0, 0),
            new google.maps.Point(0, 0));

    var icondmac = new google.maps.MarkerImage('' + pathToIcon + 'iconmapdm_ac.png',
            new google.maps.Size(22, 37),
            new google.maps.Point(0, 0),
            new google.maps.Point(0, 0));

    if (listObj != null) {
        gmarkers = [];
        var lat = 0;
        var lng = 0;
        var intexit = 0;
        var locations = [];
        var LatLngCenter;

        for (var i = 0; i < listObj.length; i++) {
            //if ((listObj[i].LAT != undefined || listObj[i].LAT != null) && (listObj[i].LNG != undefined || listObj[i].LNG != null) && listObj[i].LAT.toString() != '' && listObj[i].LNG.toString() != '') {
            if (listObj[i].LAT != undefined || listObj[i].LNG != null) {
                intexit = i;
                lat = listObj[i].LAT;
                lng = listObj[i].LNG;

                if (lat != 0 & lng != 0)
                    LatLngCenter = new google.maps.LatLng(lat, lng);

                var myLatlng = new google.maps.LatLng(lat, lng);


                var strInfo = CreateHTMLInfo(listObj[i].STOREFULLNAME, listObj[i].STOREADDRESS, listObj[i].IMAGEMAPLARGE, listObj[i].PHONE, listObj[i].FAX, listObj[i].EMAIL, listObj[i].OPENHOUR, listObj[i].SITEID, listObj[i].STOREID);
                var type = i;
                var store = [strInfo, lat, lng, listObj[i].STOREID, listObj[i].SITEID];
                locations.push(store);
            }
        }



        var map = new google.maps.Map(document.getElementById('storemapwarr'), {
            zoom: 12,
            center: LatLngCenter,
            mapTypeId: google.maps.MapTypeId.ROADMAP

        });




        var infowindow = new google.maps.InfoWindow();
        var marker;
        if (locations != null || locations != undefined) {
            for (var i = 0; i < locations.length; i++) {

                if (locations[i][4] == 1) {
                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                        map: map,
                        icon: icontgdd
                    });
                    google.maps.event.addListener(marker, 'click', (function (marker, i) {

                        return function () {
                            var storeid = locations[i][3];
                            infowindow.setContent(locations[i][0]);
                            infowindow.open(map, marker);
                            var fi = divVisible.replace('div', '');
                            if (fi != '') {
                                var fiIcon = gmarkers[fi].getIcon().size;
                                if (fiIcon.height == 38) {
                                    gmarkers[fi].setIcon(icontgdd);
                                }
                                else {
                                    gmarkers[fi].setIcon(icondm);
                                }
                            }
                            marker.setIcon(icontgddac);
                            //divVisible = 'div' + i;
                            //$('#ulliststore li').removeClass('liac');
                            //document.getElementById('div' + i).className = "liac";
                        }

                    })(marker, i));

                    google.maps.event.addListener(infowindow, 'closeclick', (function (marker, i) {

                        return function () {
                            flagMarker = 0;
                            divVisible = '';
                            infowindow.close();
                            marker.setIcon(icontgdd);
                            //document.getElementById('div' + i).className = "";


                        }
                    })(marker, i));

                    google.maps.event.addListener(marker, "mouseover", (function (marker, i) {

                        return function () {
                            if (divVisible.replace('div', '') != i) {
                                marker.setIcon(icontgddac);
                                //document.getElementById('div' + i).className = "liac";
                            }
                        }
                    })(marker, i));


                    google.maps.event.addListener(marker, 'mouseout', (function (marker, i) {

                        return function () {
                            if (divVisible.replace('div', '') != i) {
                                marker.setIcon(icontgdd);
                                //document.getElementById('div' + i).className = "";
                            }
                        }
                    })(marker, i));



                }
                else {
                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                        map: map,
                        icon: icondm
                    });
                    google.maps.event.addListener(marker, 'click', (function (marker, i) {

                        return function () {
                            var storeid = locations[i][3];
                            flagMarker = 1;
                            infowindow.setContent(locations[i][0]);
                            infowindow.open(map, marker);
                            var fi = divVisible.replace('div', '');
                            if (fi != '') {

                                var fiIcon = gmarkers[fi].getIcon().size;

                                if (fiIcon.height == 38) {
                                    gmarkers[fi].setIcon(icontgdd);
                                }
                                else {
                                    gmarkers[fi].setIcon(icondm);
                                }
                            }
                            marker.setIcon(icondmac);
                            //divVisible = 'div' + i;
                            //$('#ulliststore li').removeClass('liac')
                            //document.getElementById('div' + i).className = "liac";

                        }

                    })(marker, i));


                    google.maps.event.addListener(infowindow, 'closeclick', (function (marker, i) {

                        return function () {
                            flagMarker = 0;
                            divVisible = '';
                            infowindow.close();
                            //document.getElementById('div' + i).className = "";
                            marker.setIcon(icondm);
                        }
                    })(marker, i));

                    google.maps.event.addListener(marker, 'mouseover', (function (marker, i) {

                        return function () {
                            if (divVisible.replace('div', '') != i) {
                                marker.setIcon(icondmac);
                                //document.getElementById('div' + i).className = "liac";
                            }
                        }
                    })(marker, i));

                    google.maps.event.addListener(marker, 'mouseout', (function (marker, i) {

                        return function () {
                            if (divVisible.replace('div', '') != i) {
                                marker.setIcon(icondm);
                                //document.getElementById('div' + i).className = "";
                            }
                        }
                    })(marker, i));

                }

                gmarkers.push(marker);


            }
        }

    }

}

function InitMap(storeID) {
    if (document.getElementById("storemap") != null) {
        var storemap = document.getElementById("storemap");
        $(storemap).attr("onclick", "");
        GetStoreDetail(parseInt(storeID));
    }
    else $(".storeinfo").html("<span style='color:red;padding:20px;'>Không tìm thấy thông tin siêu thị<\/span>");
}
function InitMapNew(storeID) {
    if (document.getElementById("storemap") != null) {
        GetStoreDetailNew(parseInt(storeID));
    }
    else $(".storeinfo").html("<span style='color:red;padding:20px;'>Không tìm thấy thông tin siêu thị<\/span>");
}
function GenHTMLStoreMap2(listObj) {
    var pathToIcon = 'http://cdn.tgdd.vn/v2012/content/images/';
    var icontgdd = new google.maps.MarkerImage('' + pathToIcon + 'iconmap.png',
            new google.maps.Size(22, 38),
            new google.maps.Point(0, 0),
            new google.maps.Point(0, 0));

    var icontgddac = new google.maps.MarkerImage('' + pathToIcon + 'iconmap_ac.png',
            new google.maps.Size(22, 38),
            new google.maps.Point(0, 0),
            new google.maps.Point(0, 0));


    var icondm = new google.maps.MarkerImage('' + pathToIcon + 'iconmapdm.png',
            new google.maps.Size(22, 37),
            new google.maps.Point(0, 0),
            new google.maps.Point(0, 0));

    var icondmac = new google.maps.MarkerImage('' + pathToIcon + 'iconmapdm_ac.png',
            new google.maps.Size(22, 37),
            new google.maps.Point(0, 0),
            new google.maps.Point(0, 0));
    if (listObj != null) {
        gmarkers = [];
        var lat = 0;
        var lng = 0;
        var intexit = 0;
        var locations = [];
        var LatLngCenter;
        if (listObj.LAT != undefined || listObj.LNG != null) {
            intexit = 0;
            lat = listObj.LAT;
            lng = listObj.LNG;

            if (lat != 0 & lng != 0)
                LatLngCenter = new google.maps.LatLng(lat, lng);

            var myLatlng = new google.maps.LatLng(lat, lng);


            var strInfo = CreateHTMLInfo(listObj.STOREFULLNAME, listObj.STOREADDRESS, listObj.IMAGEMAPLARGE, listObj.PHONE, listObj.FAX, listObj.EMAIL, listObj.OPENHOUR, listObj.SITEID, listObj.STOREID);
            var type = 0;
            var store = [strInfo, lat, lng, listObj.STOREID, listObj.SITEID];
            locations.push(store);
        }

        var map = new google.maps.Map(document.getElementById('storemap'), {
            zoom: 15,
            center: LatLngCenter,
            mapTypeId: google.maps.MapTypeId.ROADMAP

        });

        var infowindow = new google.maps.InfoWindow();
        var marker;
        if (locations != null || locations != undefined) {
            for (var i = 0; i < locations.length; i++) {

                if (locations[i][4] == 1) {
                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                        map: map,
                        icon: icontgdd
                    });
                    google.maps.event.addListener(marker, 'click', (function (marker, i) {

                        return function () {
                            var storeid = locations[i][3];
                            infowindow.setContent(locations[i][0]);
                            infowindow.open(map, marker);
                            var fi = divVisible.replace('div', '');
                            if (fi != '') {
                                var fiIcon = gmarkers[fi].getIcon().size;
                                if (fiIcon.height == 38) {
                                    gmarkers[fi].setIcon(icontgdd);
                                }
                                else {
                                    gmarkers[fi].setIcon(icondm);
                                }
                            }
                            marker.setIcon(icontgddac);
                            //divVisible = 'div' + i;
                            //$('#ulliststore li').removeClass('liac');
                            //document.getElementById('div' + i).className = "liac";
                        }

                    })(marker, i));

                    google.maps.event.addListener(infowindow, 'closeclick', (function (marker, i) {

                        return function () {
                            flagMarker = 0;
                            divVisible = '';
                            infowindow.close();
                            marker.setIcon(icontgdd);
                            //document.getElementById('div' + i).className = "";


                        }
                    })(marker, i));

                    google.maps.event.addListener(marker, "mouseover", (function (marker, i) {

                        return function () {
                            if (divVisible.replace('div', '') != i) {
                                marker.setIcon(icontgddac);
                                //document.getElementById('div' + i).className = "liac";
                            }
                        }
                    })(marker, i));


                    google.maps.event.addListener(marker, 'mouseout', (function (marker, i) {

                        return function () {
                            if (divVisible.replace('div', '') != i) {
                                marker.setIcon(icontgdd);
                                //document.getElementById('div' + i).className = "";
                            }
                        }
                    })(marker, i));



                }
                else {
                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                        map: map,
                        icon: icondm
                    });
                    google.maps.event.addListener(marker, 'click', (function (marker, i) {

                        return function () {
                            var storeid = locations[i][3];
                            flagMarker = 1;
                            infowindow.setContent(locations[i][0]);
                            infowindow.open(map, marker);
                            var fi = divVisible.replace('div', '');
                            if (fi != '') {

                                var fiIcon = gmarkers[fi].getIcon().size;

                                if (fiIcon.height == 38) {
                                    gmarkers[fi].setIcon(icontgdd);
                                }
                                else {
                                    gmarkers[fi].setIcon(icondm);
                                }
                            }
                            marker.setIcon(icondmac);
                            //divVisible = 'div' + i;
                            //$('#ulliststore li').removeClass('liac')
                            //document.getElementById('div' + i).className = "liac";

                        }

                    })(marker, i));


                    google.maps.event.addListener(infowindow, 'closeclick', (function (marker, i) {

                        return function () {
                            flagMarker = 0;
                            divVisible = '';
                            infowindow.close();
                            //document.getElementById('div' + i).className = "";
                            marker.setIcon(icondm);

                        }
                    })(marker, i));


                    google.maps.event.addListener(marker, 'mouseover', (function (marker, i) {

                        return function () {
                            if (divVisible.replace('div', '') != i) {
                                marker.setIcon(icondmac);
                                //document.getElementById('div' + i).className = "liac";
                            }
                        }
                    })(marker, i));

                    google.maps.event.addListener(marker, 'mouseout', (function (marker, i) {

                        return function () {
                            if (divVisible.replace('div', '') != i) {
                                marker.setIcon(icondm);
                                //document.getElementById('div' + i).className = "";
                            }
                        }
                    })(marker, i));



                }

                gmarkers.push(marker);


            }
        }

    }

}
function InitMapWarr(storeID) {
    if (document.getElementById("storemapwarr") != null) {
        GetStoreDetailWarr(parseInt(storeID));
    }
    else $(".storeinfo").html("<span style='color:red;padding:20px;'>Không tìm thấy thông tin siêu thị<\/span>");
}
function InitMapWarrCenter(storeID) {
    if (document.getElementById("storemapwarr") != null) {
        GetStoreDetailWarrCenter(parseInt(storeID));
    }
    else $(".storeinfo").html("<span style='color:red;padding:20px;'>Không tìm thấy thông tin siêu thị<\/span>");
}
function GenHTMLStoreMapWarr3(listObj) {
    var pathToIcon = 'http://cdn.tgdd.vn/v2012/content/images/';
    var icontgdd = new google.maps.MarkerImage('' + pathToIcon + 'iconmap.png',
            new google.maps.Size(22, 38),
            new google.maps.Point(0, 0),
            new google.maps.Point(0, 0));

    var icontgddac = new google.maps.MarkerImage('' + pathToIcon + 'iconmap_ac.png',
            new google.maps.Size(22, 38),
            new google.maps.Point(0, 0),
            new google.maps.Point(0, 0));


    var icondm = new google.maps.MarkerImage('' + pathToIcon + 'iconmapdm.png',
            new google.maps.Size(22, 37),
            new google.maps.Point(0, 0),
            new google.maps.Point(0, 0));

    var icondmac = new google.maps.MarkerImage('' + pathToIcon + 'iconmapdm_ac.png',
            new google.maps.Size(22, 37),
            new google.maps.Point(0, 0),
            new google.maps.Point(0, 0));
    if (listObj != null) {
        gmarkers = [];
        var lat = 0;
        var lng = 0;
        var intexit = 0;
        var locations = [];
        var LatLngCenter;
        if (listObj.LAT != undefined || listObj.LNG != null) {
            intexit = 0;
            lat = listObj.LAT;
            lng = listObj.LNG;

            if (lat != 0 & lng != 0)
                LatLngCenter = new google.maps.LatLng(lat, lng);

            var myLatlng = new google.maps.LatLng(lat, lng);


            var strInfo = CreateHTMLInfoWarrCenter(listObj.STOREFULLNAME, listObj.STOREADDRESS, listObj.IMAGEMAPLARGE, listObj.PHONE, listObj.FAX, listObj.EMAIL, listObj.OPENHOUR, listObj.SITEID, listObj.STOREID);
            var type = 0;
            var store = [strInfo, lat, lng, listObj.STOREID, listObj.SITEID];
            locations.push(store);
        }

        var map = new google.maps.Map(document.getElementById('storemapwarr'), {
            zoom: 12,
            center: LatLngCenter,
            mapTypeId: google.maps.MapTypeId.ROADMAP

        });

        var infowindow = new google.maps.InfoWindow();
        var marker;
        if (locations != null || locations != undefined) {
            for (var i = 0; i < locations.length; i++) {

                if (locations[i][4] == 1) {
                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                        map: map
                        //icon: icontgdd
                    });
                    google.maps.event.addListener(marker, 'click', (function (marker, i) {

                        return function () {
                            var storeid = locations[i][3];
                            infowindow.setContent(locations[i][0]);
                            infowindow.open(map, marker);
                            //var fi = divVisible.replace('div', '');
                            //if (fi != '') {
                            //    var fiIcon = gmarkers[fi].getIcon().size;
                            //    if (fiIcon.height == 38) {
                            //        gmarkers[fi].setIcon(icontgdd);
                            //    }
                            //    else {
                            //        gmarkers[fi].setIcon(icondm);
                            //    }
                            //}
                            //marker.setIcon(icontgddac);
                            //divVisible = 'div' + i;
                            //$('#ulliststore li').removeClass('liac');
                            //document.getElementById('div' + i).className = "liac";
                        }

                    })(marker, i));

                    google.maps.event.addListener(infowindow, 'closeclick', (function (marker, i) {

                        return function () {
                            flagMarker = 0;
                            divVisible = '';
                            infowindow.close();
                            marker.setIcon(icontgdd);
                            //document.getElementById('div' + i).className = "";


                        }
                    })(marker, i));

                    google.maps.event.addListener(marker, "mouseover", (function (marker, i) {

                        return function () {
                            if (divVisible.replace('div', '') != i) {
                                marker.setIcon(icontgddac);
                                //document.getElementById('div' + i).className = "liac";
                            }
                        }
                    })(marker, i));


                    google.maps.event.addListener(marker, 'mouseout', (function (marker, i) {

                        return function () {
                            if (divVisible.replace('div', '') != i) {
                                marker.setIcon(icontgdd);
                                //document.getElementById('div' + i).className = "";
                            }
                        }
                    })(marker, i));



                }
                else {
                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                        map: map,
                        icon: icondm
                    });
                    google.maps.event.addListener(marker, 'click', (function (marker, i) {

                        return function () {
                            var storeid = locations[i][3];
                            flagMarker = 1;
                            infowindow.setContent(locations[i][0]);
                            infowindow.open(map, marker);
                            var fi = divVisible.replace('div', '');
                            if (fi != '') {

                                var fiIcon = gmarkers[fi].getIcon().size;

                                if (fiIcon.height == 38) {
                                    gmarkers[fi].setIcon(icontgdd);
                                }
                                else {
                                    gmarkers[fi].setIcon(icondm);
                                }
                            }
                            marker.setIcon(icondmac);
                            //divVisible = 'div' + i;
                            //$('#ulliststore li').removeClass('liac')
                            //document.getElementById('div' + i).className = "liac";

                        }

                    })(marker, i));


                    google.maps.event.addListener(infowindow, 'closeclick', (function (marker, i) {

                        return function () {
                            flagMarker = 0;
                            divVisible = '';
                            infowindow.close();
                            //document.getElementById('div' + i).className = "";
                            marker.setIcon(icondm);

                        }
                    })(marker, i));


                    google.maps.event.addListener(marker, 'mouseover', (function (marker, i) {

                        return function () {
                            if (divVisible.replace('div', '') != i) {
                                marker.setIcon(icondmac);
                                //document.getElementById('div' + i).className = "liac";
                            }
                        }
                    })(marker, i));

                    google.maps.event.addListener(marker, 'mouseout', (function (marker, i) {

                        return function () {
                            if (divVisible.replace('div', '') != i) {
                                marker.setIcon(icondm);
                                //document.getElementById('div' + i).className = "";
                            }
                        }
                    })(marker, i));



                }

                gmarkers.push(marker);


            }
        }

    }

}
function GenHTMLStoreMapWarr2(listObj) {
    var pathToIcon = 'http://cdn.tgdd.vn/v2012/content/images/';
    var icontgdd = new google.maps.MarkerImage('' + pathToIcon + 'iconmap.png',
            new google.maps.Size(22, 38),
            new google.maps.Point(0, 0),
            new google.maps.Point(0, 0));

    var icontgddac = new google.maps.MarkerImage('' + pathToIcon + 'iconmap_ac.png',
            new google.maps.Size(22, 38),
            new google.maps.Point(0, 0),
            new google.maps.Point(0, 0));


    var icondm = new google.maps.MarkerImage('' + pathToIcon + 'iconmapdm.png',
            new google.maps.Size(22, 37),
            new google.maps.Point(0, 0),
            new google.maps.Point(0, 0));

    var icondmac = new google.maps.MarkerImage('' + pathToIcon + 'iconmapdm_ac.png',
            new google.maps.Size(22, 37),
            new google.maps.Point(0, 0),
            new google.maps.Point(0, 0));
    if (listObj != null) {
        gmarkers = [];
        var lat = 0;
        var lng = 0;
        var intexit = 0;
        var locations = [];
        var LatLngCenter;
        if (listObj.LAT != undefined || listObj.LNG != null) {
            intexit = 0;
            lat = listObj.LAT;
            lng = listObj.LNG;

            if (lat != 0 & lng != 0)
                LatLngCenter = new google.maps.LatLng(lat, lng);

            var myLatlng = new google.maps.LatLng(lat, lng);


            var strInfo = CreateHTMLInfoWarr(listObj.STOREFULLNAME, listObj.STOREADDRESS, listObj.IMAGEMAPLARGE, listObj.PHONE, listObj.FAX, listObj.EMAIL, listObj.OPENHOUR, listObj.SITEID, listObj.STOREID);
            var type = 0;
            var store = [strInfo, lat, lng, listObj.STOREID, listObj.SITEID];
            locations.push(store);
        }

        var map = new google.maps.Map(document.getElementById('storemapwarr'), {
            zoom: 12,
            center: LatLngCenter,
            mapTypeId: google.maps.MapTypeId.ROADMAP

        });

        var infowindow = new google.maps.InfoWindow();
        var marker;
        if (locations != null || locations != undefined) {
            for (var i = 0; i < locations.length; i++) {

                if (locations[i][4] == 1) {
                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                        map: map,
                        icon: icontgdd
                    });
                    google.maps.event.addListener(marker, 'click', (function (marker, i) {

                        return function () {
                            var storeid = locations[i][3];
                            infowindow.setContent(locations[i][0]);
                            infowindow.open(map, marker);
                            var fi = divVisible.replace('div', '');
                            if (fi != '') {
                                var fiIcon = gmarkers[fi].getIcon().size;
                                if (fiIcon.height == 38) {
                                    gmarkers[fi].setIcon(icontgdd);
                                }
                                else {
                                    gmarkers[fi].setIcon(icondm);
                                }
                            }
                            marker.setIcon(icontgddac);
                            //divVisible = 'div' + i;
                            //$('#ulliststore li').removeClass('liac');
                            //document.getElementById('div' + i).className = "liac";
                        }

                    })(marker, i));

                    google.maps.event.addListener(infowindow, 'closeclick', (function (marker, i) {

                        return function () {
                            flagMarker = 0;
                            divVisible = '';
                            infowindow.close();
                            marker.setIcon(icontgdd);
                            //document.getElementById('div' + i).className = "";


                        }
                    })(marker, i));

                    google.maps.event.addListener(marker, "mouseover", (function (marker, i) {

                        return function () {
                            if (divVisible.replace('div', '') != i) {
                                marker.setIcon(icontgddac);
                                //document.getElementById('div' + i).className = "liac";
                            }
                        }
                    })(marker, i));


                    google.maps.event.addListener(marker, 'mouseout', (function (marker, i) {

                        return function () {
                            if (divVisible.replace('div', '') != i) {
                                marker.setIcon(icontgdd);
                                //document.getElementById('div' + i).className = "";
                            }
                        }
                    })(marker, i));



                }
                else {
                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                        map: map,
                        icon: icondm
                    });
                    google.maps.event.addListener(marker, 'click', (function (marker, i) {

                        return function () {
                            var storeid = locations[i][3];
                            flagMarker = 1;
                            infowindow.setContent(locations[i][0]);
                            infowindow.open(map, marker);
                            var fi = divVisible.replace('div', '');
                            if (fi != '') {

                                var fiIcon = gmarkers[fi].getIcon().size;

                                if (fiIcon.height == 38) {
                                    gmarkers[fi].setIcon(icontgdd);
                                }
                                else {
                                    gmarkers[fi].setIcon(icondm);
                                }
                            }
                            marker.setIcon(icondmac);
                            //divVisible = 'div' + i;
                            //$('#ulliststore li').removeClass('liac')
                            //document.getElementById('div' + i).className = "liac";

                        }

                    })(marker, i));


                    google.maps.event.addListener(infowindow, 'closeclick', (function (marker, i) {

                        return function () {
                            flagMarker = 0;
                            divVisible = '';
                            infowindow.close();
                            //document.getElementById('div' + i).className = "";
                            marker.setIcon(icondm);

                        }
                    })(marker, i));


                    google.maps.event.addListener(marker, 'mouseover', (function (marker, i) {

                        return function () {
                            if (divVisible.replace('div', '') != i) {
                                marker.setIcon(icondmac);
                                //document.getElementById('div' + i).className = "liac";
                            }
                        }
                    })(marker, i));

                    google.maps.event.addListener(marker, 'mouseout', (function (marker, i) {

                        return function () {
                            if (divVisible.replace('div', '') != i) {
                                marker.setIcon(icondm);
                                //document.getElementById('div' + i).className = "";
                            }
                        }
                    })(marker, i));



                }

                gmarkers.push(marker);


            }
        }

    }

}

function attachSecretMessage(marker, number) {
    var infowindow = new google.maps.InfoWindow(
        {
            content: message[number],
            size: new google.maps.Size(50, 50)
        });
    google.maps.event.addListener(marker, 'click', function () {

        infowindow.open(map, marker);
    });
}
var iconcollapse = 'http://cdn.tgdd.vn/v2012/content/images/tim-sieu-thi-collapse.png';
var iconexpand = 'http://cdn.tgdd.vn/v2012/content/images/tim-sieu-thi-expand.png';

function ItemClick(strText, intProvinceId) {
    var strkeyword = strText;
    $('#txtinpunt').val(strkeyword);
    $('#hdd-province-id').val(intProvinceId);
    SearchStore(intProvinceId);
    ShowContent('store');
    $('#scrollbar').tinyscrollbar_update();
}

function ShowContent(ctrl) {
    $('#tablist').children().removeClass('tabactive');
    $('#' + ctrl).addClass('tabactive');
    $('.storecont').children().hide();
    $('#findby' + ctrl).show();
}

function ShowDetail(ctrl) {
    var id = $(ctrl).attr('id');
    var a = $('#storelist .store-list #' + id);
    var ctrlcontent = $('#storelist .store-list #' + id).slideToggle('fast', function () {
        $('#scrollbar').tinyscrollbar_update('relative');
    });
    var ctrlindex = $(ctrl).html().indexOf('Xem chi tiết');
    //if ($(ctrl).html() == 'Xem chi tiết') {
    if (ctrlindex != -1) {
        $(ctrl).html('Đóng lại <img src="' + iconcollapse + '" alt=""/>');
    }
    else {
        $(ctrl).html('Xem chi tiết <img src="' + iconexpand + '" alt=""/>');
    }
}


