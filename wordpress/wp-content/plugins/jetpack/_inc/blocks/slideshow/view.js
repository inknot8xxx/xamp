(()=>{var e,t,n,r,i={94107:(e,t,n)=>{"use strict";n.d(t,{A:()=>k});var r=function(){if("undefined"!=typeof Map)return Map;function e(e,t){var n=-1;return e.some((function(e,r){return e[0]===t&&(n=r,!0)})),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),r=this.__entries__[n];return r&&r[1]},t.prototype.set=function(t,n){var r=e(this.__entries__,t);~r?this.__entries__[r][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,r=e(n,t);~r&&n.splice(r,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var n=0,r=this.__entries__;n<r.length;n++){var i=r[n];e.call(t,i[1],i[0])}},t}()}(),i="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,o="undefined"!=typeof window&&window.Math===Math?window:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),s="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(o):function(e){return setTimeout((function(){return e(Date.now())}),1e3/60)};var a=["top","right","bottom","left","width","height","size","weight"],c="undefined"!=typeof MutationObserver,u=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var n=!1,r=!1,i=0;function o(){n&&(n=!1,e()),r&&c()}function a(){s(o)}function c(){var e=Date.now();if(n){if(e-i<2)return;r=!0}else n=!0,r=!1,setTimeout(a,t);i=e}return c}(this.refresh.bind(this),20)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter((function(e){return e.gatherActive(),e.hasActive()}));return e.forEach((function(e){return e.broadcastActive()})),e.length>0},e.prototype.connect_=function(){i&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),c?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){i&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=void 0===t?"":t;a.some((function(e){return!!~n.indexOf(e)}))&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),l=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var i=r[n];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},d=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||o},h=w(0,0,0,0);function f(e){return parseFloat(e)||0}function p(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce((function(t,n){return t+f(e["border-"+n+"-width"])}),0)}function b(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return h;var r=d(e).getComputedStyle(e),i=function(e){for(var t={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var i=r[n],o=e["padding-"+i];t[i]=f(o)}return t}(r),o=i.left+i.right,s=i.top+i.bottom,a=f(r.width),c=f(r.height);if("border-box"===r.boxSizing&&(Math.round(a+o)!==t&&(a-=p(r,"left","right")+o),Math.round(c+s)!==n&&(c-=p(r,"top","bottom")+s)),!function(e){return e===d(e).document.documentElement}(e)){var u=Math.round(a+o)-t,l=Math.round(c+s)-n;1!==Math.abs(u)&&(a-=u),1!==Math.abs(l)&&(c-=l)}return w(i.left,i.top,a,c)}var v="undefined"!=typeof SVGGraphicsElement?function(e){return e instanceof d(e).SVGGraphicsElement}:function(e){return e instanceof d(e).SVGElement&&"function"==typeof e.getBBox};function m(e){return i?v(e)?function(e){var t=e.getBBox();return w(0,0,t.width,t.height)}(e):b(e):h}function w(e,t,n,r){return{x:e,y:t,width:n,height:r}}var y=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=w(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=m(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),_=function(e,t){var n,r,i,o,s,a,c,u=(r=(n=t).x,i=n.y,o=n.width,s=n.height,a="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,c=Object.create(a.prototype),l(c,{x:r,y:i,width:o,height:s,top:i,right:r+o,bottom:s+i,left:r}),c);l(this,{target:e,contentRect:u})},g=function(){function e(e,t,n){if(this.activeObservations_=[],this.observations_=new r,"function"!=typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=n}return e.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof d(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new y(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof d(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach((function(t){t.isActive()&&e.activeObservations_.push(t)}))},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map((function(e){return new _(e.target,e.broadcastRect())}));this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),E="undefined"!=typeof WeakMap?new WeakMap:new r,O=function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=u.getInstance(),r=new g(t,n,this);E.set(this,r)};["observe","unobserve","disconnect"].forEach((function(e){O.prototype[e]=function(){var t;return(t=E.get(this))[e].apply(t,arguments)}}));const k=void 0!==o.ResizeObserver?o.ResizeObserver:O},33170:(e,t,n)=>{"use strict";async function r(e=".swiper-container",t={},r={}){const i={effect:"slide",grabCursor:!0,init:!0,initialSlide:0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{bulletElement:"button",clickable:!0,el:".swiper-pagination",type:"bullets"},preventClicks:!1,preventClicksPropagation:!1,releaseFormElements:!1,setWrapperSize:!0,threshold:5,touchStartPreventDefault:!1,on:Object.fromEntries(Object.entries(r||{}).map((([e,t])=>[e,function(){t(this)}])))},[{default:o}]=await Promise.all([Promise.all([n.e(693),n.e(979)]).then(n.t.bind(n,83758,23)),Promise.all([n.e(693),n.e(979)]).then(n.bind(n,81449))]);return new o(e,{...i,...t})}n.d(t,{A:()=>r})},30889:(e,t,n)=>{"use strict";n.d(t,{y:()=>i});var r=n(27723);const __=r.__;function i(e,t,n){let i="";if(n<=5)for(let e=1;e<=n;e++){i+='<button class="'+`swiper-pagination-bullet${e===t?" swiper-pagination-bullet-active":""}`+'" tab-index="0" role="button" aria-label="'+(0,r.sprintf)(/* translators: placeholder is the the video number to navigate to */
__("Go to slide %s","jetpack"),e)+'"></button>'}else i+=`<div class="swiper-pagination-simple">${t} / ${n}</div>`;return i}},34308:(e,t,n)=>{"use strict";n.d(t,{WF:()=>l,bz:()=>u,n7:()=>d,rQ:()=>c});var r=n(89877);const i=16/9,o=.8,s=600,a="wp-block-jetpack-slideshow_autoplay-paused";function c(e){u(e),l(e),e.el.querySelector(".wp-block-jetpack-slideshow_button-pause").addEventListener("click",(function(){e.el&&(e.el.classList.contains(a)?(e.el.classList.remove(a),e.autoplay.start(),this.setAttribute("aria-label","Pause Slideshow")):(e.el.classList.add(a),e.autoplay.stop(),this.setAttribute("aria-label","Play Slideshow")))}))}function u(e){if(!e||!e.el)return;const t=e.el.querySelector('.swiper-slide[data-swiper-slide-index="0"] img');if(!t)return;const n=t.clientWidth/t.clientHeight,r=Math.max(Math.min(n,i),1),a="undefined"!=typeof window?window.innerHeight*o:s,c=Math.min(e.width/r,a),u=`${Math.floor(c)}px`,l=`${Math.floor(c/2)}px`;e.el.classList.add("wp-swiper-initialized"),e.wrapperEl.style.height=u,e.el.querySelector(".wp-block-jetpack-slideshow_button-prev").style.top=l,e.el.querySelector(".wp-block-jetpack-slideshow_button-next").style.top=l}function l(e){(e.slides||[]).forEach(((t,n)=>{t.setAttribute("aria-hidden",n===e.activeIndex?"false":"true"),n===e.activeIndex?t.setAttribute("tabindex","-1"):t.removeAttribute("tabindex")})),function(e){const t=e.slides[e.activeIndex];if(!t)return;const n=t.getElementsByTagName("FIGCAPTION")[0],i=t.getElementsByTagName("IMG")[0];e.a11y.liveRegion&&(e.a11y.liveRegion[0].innerHTML=n?n.innerHTML:(0,r.escapeHTML)(i.alt))}(e)}function d(e){(e.pagination.bullets||[]).forEach((t=>{t.addEventListener("click",(()=>{const t=e.slides[e.realIndex];setTimeout((()=>{t.focus()}),500)}))}))}},79366:(e,t,n)=>{"object"==typeof window&&window.Jetpack_Block_Assets_Base_Url&&(n.p=window.Jetpack_Block_Assets_Base_Url)},98490:e=>{"use strict";e.exports=window.wp.domReady},89877:e=>{"use strict";e.exports=window.wp.escapeHtml},27723:e=>{"use strict";e.exports=window.wp.i18n}},o={};function s(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}};return i[e].call(n.exports,n,n.exports,s),n.exports}s.m=i,s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,s.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"==typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"==typeof n.then)return n}var i=Object.create(null);s.r(i);var o={};e=e||[null,t({}),t([]),t(t)];for(var a=2&r&&n;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((e=>o[e]=()=>n[e]));return o.default=()=>n,s.d(i,o),i},s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((t,n)=>(s.f[n](e,t),t)),[])),s.u=e=>(979===e?"swiper":e)+".js?minify=false&ver="+{693:"30ea9a22c25fe7ba2ce8",979:"c603174e80bc2acf9e4f"}[e],s.miniCssF=e=>"swiper.css?minify=false&ver=ec8bb6b572560ea05dfb",(()=>{if(!s.miniCssF)throw new Error("MiniCSSWithRTLPlugin was loaded before MiniCSSExtractPlugin");var e;s.miniCssF=(e=s.miniCssF,t=>{var n="rtl"===document.dir,r=e(t);return n?r.replace(/\.css(?:$|\?)/,".rtl$&"):r})})(),s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n={},r="Jetpack:",s.l=(e,t,i,o)=>{if(n[e])n[e].push(t);else{var a,c;if(void 0!==i)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==r+i){a=d;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,s.nc&&a.setAttribute("nonce",s.nc),a.setAttribute("data-webpack",r+i),a.src=e),n[e]=[t];var h=(t,r)=>{a.onerror=a.onload=null,clearTimeout(f);var i=n[e];if(delete n[e],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((e=>e(r))),t)return t(r)},f=setTimeout(h.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=h.bind(null,a.onerror),a.onload=h.bind(null,a.onload),c&&document.head.appendChild(a)}},s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var t=s.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=n[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e+"../"})(),(()=>{if("undefined"!=typeof document){var e=e=>new Promise(((t,n)=>{var r=s.miniCssF(e),i=s.p+r;if(((e,t)=>{for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var i=(s=n[r]).getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(i===e||i===t))return s}var o=document.getElementsByTagName("style");for(r=0;r<o.length;r++){var s;if((i=(s=o[r]).getAttribute("data-href"))===e||i===t)return s}})(r,i))return t();((e,t,n,r,i)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",s.nc&&(o.nonce=s.nc),o.onerror=o.onload=n=>{if(o.onerror=o.onload=null,"load"===n.type)r();else{var s=n&&n.type,a=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+": "+a+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=s,c.request=a,o.parentNode&&o.parentNode.removeChild(o),i(c)}},o.href=t,n?n.parentNode.insertBefore(o,n.nextSibling):document.head.appendChild(o)})(e,i,null,t,n)})),t={279:0};s.f.miniCss=(n,r)=>{t[n]?r.push(t[n]):0!==t[n]&&{979:1}[n]&&r.push(t[n]=e(n).then((()=>{t[n]=0}),(e=>{throw delete t[n],e})))}}})(),(()=>{var e={279:0};s.f.j=(t,n)=>{var r=s.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else if(979!=t){var i=new Promise(((n,i)=>r=e[t]=[n,i]));n.push(r[2]=i);var o=s.p+s.u(t),a=new Error;s.l(o,(n=>{if(s.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",a.name="ChunkLoadError",a.type=i,a.request=o,r[1](a)}}),"chunk-"+t,t)}else e[t]=0};var t=(t,n)=>{var r,i,o=n[0],a=n[1],c=n[2],u=0;if(o.some((t=>0!==e[t]))){for(r in a)s.o(a,r)&&(s.m[r]=a[r]);if(c)c(s)}for(t&&t(n);u<o.length;u++)i=o[u],s.o(e,i)&&e[i]&&e[i][0](),e[i]=0},n=self.webpackChunkJetpack=self.webpackChunkJetpack||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),(()=>{"use strict";s(79366)})(),(()=>{"use strict";var e=s(98490),t=s.n(e),n=s(94107),r=s(33170),i=s(30889),o=s(34308);"undefined"!=typeof window&&t()((function(){const e=document.getElementsByClassName("wp-block-jetpack-slideshow");Array.from(e).forEach((e=>{if("true"===e.getAttribute("data-jetpack-block-initialized"))return;const{autoplay:t,delay:s,effect:a}=e.dataset,c=window.matchMedia("(prefers-reduced-motion: reduce)").matches,u=t&&!c,l=e.getElementsByClassName("swiper-container")[0];let d=null;(0,r.A)(l,{autoplay:!!u&&{delay:1e3*s,disableOnInteraction:!1},effect:a,init:!0,initialSlide:0,loop:!0,keyboard:{enabled:!0,onlyInViewport:!0},pagination:{el:".swiper-pagination",clickable:!0,type:"custom",renderCustom:i.y}},{init:o.rQ,imagesReady:o.bz,paginationRender:o.n7,transitionEnd:o.WF}).then((e=>{new n.A((()=>{d&&(cancelAnimationFrame(d),d=null),d=requestAnimationFrame((()=>{(0,o.bz)(e),e.update()}))})).observe(e.el)})).catch((()=>{e.querySelector(".wp-block-jetpack-slideshow_container").classList.add("wp-swiper-initialized")})),e.setAttribute("data-jetpack-block-initialized","true")}))}))})()})();