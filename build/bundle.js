!function(t){function e(i){if(n[i])return n[i].exports;var s=n[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=6)}([function(t,e){},function(t,e){},function(t,e,n){"use strict";function i(){new s.default}e.__esModule=!0;var s=n(4);e.SilcCore=s.default,e.silcCoreInit=i},function(t,e,n){"use strict";function i(){[].forEach.call(document.querySelectorAll(".silc-accordion"),function(t){new s.default(t)})}e.__esModule=!0;var s=n(5);e.SilcAccordion=s.default,e.silcAccordionInit=i},function(t,e,n){"use strict";e.__esModule=!0;var i=function(){function t(){document.body.classList.add("js")}return t}();e.default=i},function(t,e,n){"use strict";e.__esModule=!0;var i=function(){function t(t){this.element=t,this.labels=this.element.querySelectorAll(".silc-accordion__label"),this.nav=this.element.querySelector(".silc-accordion__nav-items"),this.settings=this.applySettings(),this.labels.length&&this.labelEventListener(),this.settings.tabs&&void 0!==this.nav&&(this.navEventListener(),this.nav.querySelector(".silc-accordion__nav-link").classList.add("silc-accordion__nav-link--active"),this.element.querySelector(".silc-accordion__content").classList.add("silc-accordion__content--visible-persist")),this.settings.openFirst&&(this.element.querySelector(".silc-accordion__label").classList.add("silc-accordion__label--active"),this.element.querySelector(".silc-accordion__content").classList.add("silc-accordion__content--visible"))}return t.prototype.applySettings=function(){var t={tabs:!1,openMultiple:!1,openFirst:!1};return(this.element.classList.contains("silc-accordion--become-tabs")||this.element.classList.contains("silc-accordion--tabs"))&&(t.tabs=!0),null!==this.element.getAttribute("data-silc-accordion-open-multiple")&&(t.openMultiple=!0),null!==this.element.getAttribute("data-silc-accordion-open-first")&&(t.openFirst=!0),t},t.prototype.labelEventListener=function(){var t=this;this.element.addEventListener("click",function(e){var n=e.target;if(n.classList.contains("silc-accordion__label")){e.preventDefault();var i=t.getContent(n);t.toggleContent(i),t.toggleActiveElement(n,"silc-accordion__label--active")}e.stopPropagation()})},t.prototype.navEventListener=function(){var t=this;this.nav.addEventListener("click",function(e){var n=e.target;n.classList.contains("silc-accordion__nav-link")&&(e.preventDefault(),t.toggleTab(n)),e.stopPropagation()})},t.prototype.getContent=function(t){return t.parentNode.nextElementSibling},t.prototype.getContentById=function(t){return this.element.querySelector(t+" .silc-accordion__content")},t.prototype.toggleTab=function(t){var e=t.getAttribute("href"),n=this.getContentById(e);this.hideAllPersitentVisible(),this.toggleContent(n),this.toggleActiveElement(t,"silc-accordion__nav-link--active"),n.classList.add("silc-accordion__content--visible-persist")},t.prototype.toggleContent=function(t){this.settings.openMultiple?t.classList.toggle("silc-accordion__content--visible"):(this.removeCssClass("silc-accordion__content--visible",t),t.classList.toggle("silc-accordion__content--visible"))},t.prototype.hideAllPersitentVisible=function(){this.removeCssClass("silc-accordion__content--visible-persist")},t.prototype.removeCssClass=function(t,e){[].forEach.call(this.element.querySelectorAll("."+t),function(n){n!==e&&n.classList.remove(t)})},t.prototype.toggleActiveElement=function(t,e){if(this.settings.openMultiple)t.classList.toggle(e);else{var n=this.element.querySelector("."+e);null!==n?n.classList.remove(e):t.classList.add(e),this.settings.tabs&&t.classList.add(e)}},t}();e.default=i},function(t,e,n){"use strict";e.__esModule=!0,n(1),n(0);var i=n(2),s=n(3);i.silcCoreInit(),s.silcAccordionInit()}]);