(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[273],{5459:function(){},3201:function(t,e,i){"use strict";/*!
  * PhotoSwipe Lightbox 5.4.4 - https://photoswipe.com
  * (c) 2024 Dmytro Semenov
  */function s(t,e,i){let s=document.createElement(e);return t&&(s.className=t),i&&i.appendChild(s),s}function n(t,e,i){t.style.width="number"==typeof e?"".concat(e,"px"):e,t.style.height="number"==typeof i?"".concat(i,"px"):i}i.d(e,{Z:function(){return g}});let l={IDLE:"idle",LOADING:"loading",LOADED:"loaded",ERROR:"error"};function h(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document,s=[];if(t instanceof Element)s=[t];else if(t instanceof NodeList||Array.isArray(t))s=Array.from(t);else{let n="string"==typeof t?t:e;n&&(s=Array.from(i.querySelectorAll(n)))}return s}function a(){return!!(navigator.vendor&&navigator.vendor.match(/apple/i))}class o{preventDefault(){this.defaultPrevented=!0}constructor(t,e){this.type=t,this.defaultPrevented=!1,e&&Object.assign(this,e)}}class r{addFilter(t,e){var i,s,n;let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;this._filters[t]||(this._filters[t]=[]),null===(i=this._filters[t])||void 0===i||i.push({fn:e,priority:l}),null===(s=this._filters[t])||void 0===s||s.sort((t,e)=>t.priority-e.priority),null===(n=this.pswp)||void 0===n||n.addFilter(t,e,l)}removeFilter(t,e){this._filters[t]&&(this._filters[t]=this._filters[t].filter(t=>t.fn!==e)),this.pswp&&this.pswp.removeFilter(t,e)}applyFilters(t){for(var e,i=arguments.length,s=Array(i>1?i-1:0),n=1;n<i;n++)s[n-1]=arguments[n];return null===(e=this._filters[t])||void 0===e||e.forEach(t=>{s[0]=t.fn.apply(this,s)}),s[0]}on(t,e){var i,s;this._listeners[t]||(this._listeners[t]=[]),null===(i=this._listeners[t])||void 0===i||i.push(e),null===(s=this.pswp)||void 0===s||s.on(t,e)}off(t,e){var i;this._listeners[t]&&(this._listeners[t]=this._listeners[t].filter(t=>e!==t)),null===(i=this.pswp)||void 0===i||i.off(t,e)}dispatch(t,e){var i;if(this.pswp)return this.pswp.dispatch(t,e);let s=new o(t,e);return null===(i=this._listeners[t])||void 0===i||i.forEach(t=>{t.call(this,s)}),s}constructor(){this._listeners={},this._filters={},this.pswp=void 0,this.options=void 0}}class d{setDisplayedSize(t,e){if(this.element){if("IMG"===this.element.tagName){var i;let e;n(this.element,250,"auto"),this.element.style.transformOrigin="0 0",this.element.style.transform=(e="translate3d(".concat(0,"px,").concat(0,"px,0)"),i=t/250,e+=" scale3d(".concat(i,",").concat(i,",1)"))}else n(this.element,t,e)}}destroy(){var t;null!==(t=this.element)&&void 0!==t&&t.parentNode&&this.element.remove(),this.element=null}constructor(t,e){if(this.element=s("pswp__img pswp__img--placeholder",t?"img":"div",e),t){let e=this.element;e.decoding="async",e.alt="",e.src=t,e.setAttribute("role","presentation")}this.element.setAttribute("aria-hidden","true")}}class p{removePlaceholder(){this.placeholder&&!this.keepPlaceholder()&&setTimeout(()=>{this.placeholder&&(this.placeholder.destroy(),this.placeholder=void 0)},1e3)}load(t,e){if(this.slide&&this.usePlaceholder()){if(this.placeholder){let t=this.placeholder.element;t&&!t.parentElement&&this.slide.container.prepend(t)}else{let t=this.instance.applyFilters("placeholderSrc",!!this.data.msrc&&!!this.slide.isFirstSlide&&this.data.msrc,this);this.placeholder=new d(t,this.slide.container)}}(!this.element||e)&&!this.instance.dispatch("contentLoad",{content:this,isLazy:t}).defaultPrevented&&(this.isImageContent()?(this.element=s("pswp__img","img"),this.displayedImageWidth&&this.loadImage(t)):(this.element=s("pswp__content","div"),this.element.innerHTML=this.data.html||""),e&&this.slide&&this.slide.updateContentSize(!0))}loadImage(t){var e,i;if(!this.isImageContent()||!this.element||this.instance.dispatch("contentLoadImage",{content:this,isLazy:t}).defaultPrevented)return;let s=this.element;this.updateSrcsetSizes(),this.data.srcset&&(s.srcset=this.data.srcset),s.src=null!==(e=this.data.src)&&void 0!==e?e:"",s.alt=null!==(i=this.data.alt)&&void 0!==i?i:"",this.state=l.LOADING,s.complete?this.onLoaded():(s.onload=()=>{this.onLoaded()},s.onerror=()=>{this.onError()})}setSlide(t){this.slide=t,this.hasSlide=!0,this.instance=t.pswp}onLoaded(){this.state=l.LOADED,this.slide&&this.element&&(this.instance.dispatch("loadComplete",{slide:this.slide,content:this}),this.slide.isActive&&this.slide.heavyAppended&&!this.element.parentNode&&(this.append(),this.slide.updateContentSize(!0)),(this.state===l.LOADED||this.state===l.ERROR)&&this.removePlaceholder())}onError(){this.state=l.ERROR,this.slide&&(this.displayError(),this.instance.dispatch("loadComplete",{slide:this.slide,isError:!0,content:this}),this.instance.dispatch("loadError",{slide:this.slide,content:this}))}isLoading(){return this.instance.applyFilters("isContentLoading",this.state===l.LOADING,this)}isError(){return this.state===l.ERROR}isImageContent(){return"image"===this.type}setDisplayedSize(t,e){if(this.element&&(this.placeholder&&this.placeholder.setDisplayedSize(t,e),!this.instance.dispatch("contentResize",{content:this,width:t,height:e}).defaultPrevented&&(n(this.element,t,e),this.isImageContent()&&!this.isError()))){let i=!this.displayedImageWidth&&t;this.displayedImageWidth=t,this.displayedImageHeight=e,i?this.loadImage(!1):this.updateSrcsetSizes(),this.slide&&this.instance.dispatch("imageSizeChange",{slide:this.slide,width:t,height:e,content:this})}}isZoomable(){return this.instance.applyFilters("isContentZoomable",this.isImageContent()&&this.state!==l.ERROR,this)}updateSrcsetSizes(){if(!this.isImageContent()||!this.element||!this.data.srcset)return;let t=this.element,e=this.instance.applyFilters("srcsetSizesWidth",this.displayedImageWidth,this);(!t.dataset.largestUsedSize||e>parseInt(t.dataset.largestUsedSize,10))&&(t.sizes=e+"px",t.dataset.largestUsedSize=String(e))}usePlaceholder(){return this.instance.applyFilters("useContentPlaceholder",this.isImageContent(),this)}lazyLoad(){this.instance.dispatch("contentLazyLoad",{content:this}).defaultPrevented||this.load(!0)}keepPlaceholder(){return this.instance.applyFilters("isKeepingPlaceholder",this.isLoading(),this)}destroy(){this.hasSlide=!1,this.slide=void 0,!this.instance.dispatch("contentDestroy",{content:this}).defaultPrevented&&(this.remove(),this.placeholder&&(this.placeholder.destroy(),this.placeholder=void 0),this.isImageContent()&&this.element&&(this.element.onload=null,this.element.onerror=null,this.element=void 0))}displayError(){if(this.slide){var t,e;let i=s("pswp__error-msg","div");i.innerText=null!==(t=null===(e=this.instance.options)||void 0===e?void 0:e.errorMsg)&&void 0!==t?t:"",i=this.instance.applyFilters("contentErrorElement",i,this),this.element=s("pswp__content pswp__error-msg-container","div"),this.element.appendChild(i),this.slide.container.innerText="",this.slide.container.appendChild(this.element),this.slide.updateContentSize(!0),this.removePlaceholder()}}append(){if(this.isAttached||!this.element)return;if(this.isAttached=!0,this.state===l.ERROR){this.displayError();return}if(this.instance.dispatch("contentAppend",{content:this}).defaultPrevented)return;let t="decode"in this.element;this.isImageContent()?t&&this.slide&&(!this.slide.isActive||a())?(this.isDecoding=!0,this.element.decode().catch(()=>{}).finally(()=>{this.isDecoding=!1,this.appendImage()})):this.appendImage():this.slide&&!this.element.parentNode&&this.slide.container.appendChild(this.element)}activate(){!this.instance.dispatch("contentActivate",{content:this}).defaultPrevented&&this.slide&&(this.isImageContent()&&this.isDecoding&&!a()?this.appendImage():this.isError()&&this.load(!1,!0),this.slide.holderElement&&this.slide.holderElement.setAttribute("aria-hidden","false"))}deactivate(){this.instance.dispatch("contentDeactivate",{content:this}),this.slide&&this.slide.holderElement&&this.slide.holderElement.setAttribute("aria-hidden","true")}remove(){this.isAttached=!1,!this.instance.dispatch("contentRemove",{content:this}).defaultPrevented&&(this.element&&this.element.parentNode&&this.element.remove(),this.placeholder&&this.placeholder.element&&this.placeholder.element.remove())}appendImage(){this.isAttached&&!this.instance.dispatch("contentAppendImage",{content:this}).defaultPrevented&&(this.slide&&this.element&&!this.element.parentNode&&this.slide.container.appendChild(this.element),(this.state===l.LOADED||this.state===l.ERROR)&&this.removePlaceholder())}constructor(t,e,i){this.instance=e,this.data=t,this.index=i,this.element=void 0,this.placeholder=void 0,this.slide=void 0,this.displayedImageWidth=0,this.displayedImageHeight=0,this.width=Number(this.data.w)||Number(this.data.width)||0,this.height=Number(this.data.h)||Number(this.data.height)||0,this.isAttached=!1,this.hasSlide=!1,this.isDecoding=!1,this.state=l.IDLE,this.data.type?this.type=this.data.type:this.data.src?this.type="image":this.type="html",this.instance.dispatch("contentInit",{content:this})}}function c(t,e,i,s,n){let l=0;if(e.paddingFn)l=e.paddingFn(i,s,n)[t];else if(e.padding)l=e.padding[t];else{let i="padding"+t[0].toUpperCase()+t.slice(1);e[i]&&(l=e[i])}return Number(l)||0}class m{update(t,e,i){let s={x:t,y:e};this.elementSize=s,this.panAreaSize=i;let n=i.x/s.x,l=i.y/s.y;this.fit=Math.min(1,n<l?n:l),this.fill=Math.min(1,n>l?n:l),this.vFill=Math.min(1,l),this.initial=this._getInitial(),this.secondary=this._getSecondary(),this.max=Math.max(this.initial,this.secondary,this._getMax()),this.min=Math.min(this.fit,this.initial,this.secondary),this.pswp&&this.pswp.dispatch("zoomLevelsUpdate",{zoomLevels:this,slideData:this.itemData})}_parseZoomLevelOption(t){let e=this.options[t+"ZoomLevel"];return e?"function"==typeof e?e(this):"fill"===e?this.fill:"fit"===e?this.fit:Number(e):void 0}_getSecondary(){let t=this._parseZoomLevelOption("secondary");return t||(t=Math.min(1,3*this.fit),this.elementSize&&t*this.elementSize.x>4e3&&(t=4e3/this.elementSize.x)),t}_getInitial(){return this._parseZoomLevelOption("initial")||this.fit}_getMax(){return this._parseZoomLevelOption("max")||Math.max(1,4*this.fit)}constructor(t,e,i,s){this.pswp=s,this.options=t,this.itemData=e,this.index=i,this.panAreaSize=null,this.elementSize=null,this.fit=1,this.fill=1,this.vFill=1,this.initial=1,this.secondary=1,this.max=1,this.min=1}}function u(t,e,i){let s;let n=e.createContentFromData(t,i),{options:l}=e;if(l){let h;s=new m(l,t,-1);let a={x:(h=e.pswp?e.pswp.viewportSize:function(t,e){if(t.getViewportSizeFn){let i=t.getViewportSizeFn(t,e);if(i)return i}return{x:document.documentElement.clientWidth,y:window.innerHeight}}(l,e)).x-c("left",l,h,t,i)-c("right",l,h,t,i),y:h.y-c("top",l,h,t,i)-c("bottom",l,h,t,i)};s.update(n.width,n.height,a)}return n.lazyLoad(),s&&n.setDisplayedSize(Math.ceil(n.width*s.initial),Math.ceil(n.height*s.initial)),n}class f extends r{getNumItems(){var t;let e=0,i=null===(t=this.options)||void 0===t?void 0:t.dataSource;i&&"length"in i?e=i.length:i&&"gallery"in i&&(i.items||(i.items=this._getGalleryDOMElements(i.gallery)),i.items&&(e=i.items.length));let s=this.dispatch("numItems",{dataSource:i,numItems:e});return this.applyFilters("numItems",s.numItems,i)}createContentFromData(t,e){return new p(t,this,e)}getItemData(t){var e;let i=null===(e=this.options)||void 0===e?void 0:e.dataSource,s={};Array.isArray(i)?s=i[t]:i&&"gallery"in i&&(i.items||(i.items=this._getGalleryDOMElements(i.gallery)),s=i.items[t]);let n=s;n instanceof Element&&(n=this._domElementToItemData(n));let l=this.dispatch("itemData",{itemData:n||{},index:t});return this.applyFilters("itemData",l.itemData,t)}_getGalleryDOMElements(t){var e,i;return null!==(e=this.options)&&void 0!==e&&e.children||null!==(i=this.options)&&void 0!==i&&i.childSelector?h(this.options.children,this.options.childSelector,t)||[]:[t]}_domElementToItemData(t){let e={element:t},i="A"===t.tagName?t:t.querySelector("a");if(i){e.src=i.dataset.pswpSrc||i.href,i.dataset.pswpSrcset&&(e.srcset=i.dataset.pswpSrcset),e.width=i.dataset.pswpWidth?parseInt(i.dataset.pswpWidth,10):0,e.height=i.dataset.pswpHeight?parseInt(i.dataset.pswpHeight,10):0,e.w=e.width,e.h=e.height,i.dataset.pswpType&&(e.type=i.dataset.pswpType);let n=t.querySelector("img");if(n){var s;e.msrc=n.currentSrc||n.src,e.alt=null!==(s=n.getAttribute("alt"))&&void 0!==s?s:""}(i.dataset.pswpCropped||i.dataset.cropped)&&(e.thumbCropped=!0)}return this.applyFilters("domItemData",e,t,i)}lazyLoadData(t,e){return u(t,this,e)}}class g extends f{init(){h(this.options.gallery,this.options.gallerySelector).forEach(t=>{t.addEventListener("click",this.onThumbnailsClick,!1)})}onThumbnailsClick(t){if("button"in t&&1===t.button||t.ctrlKey||t.metaKey||t.altKey||t.shiftKey||window.pswp)return;let e={x:t.clientX,y:t.clientY};e.x||e.y||(e=null);let i=this.getClickedIndex(t);i=this.applyFilters("clickedIndex",i,t,this);let s={gallery:t.currentTarget};i>=0&&(t.preventDefault(),this.loadAndOpen(i,s,e))}getClickedIndex(t){if(this.options.getClickedIndexFn)return this.options.getClickedIndexFn.call(this,t);let e=t.target,i=h(this.options.children,this.options.childSelector,t.currentTarget).findIndex(t=>t===e||t.contains(e));return -1!==i?i:this.options.children||this.options.childSelector?-1:0}loadAndOpen(t,e,i){if(window.pswp||!this.options)return!1;if(!e&&this.options.gallery&&this.options.children){let t=h(this.options.gallery);t[0]&&(e={gallery:t[0]})}return this.options.index=t,this.options.initialPointerPos=i,this.shouldOpen=!0,this.preload(t,e),!0}preload(t,e){var i;let{options:s}=this;e&&(s.dataSource=e);let n=[],l=typeof s.pswpModule;if("function"==typeof(i=s.pswpModule)&&i.prototype&&i.prototype.goTo)n.push(Promise.resolve(s.pswpModule));else if("string"===l)throw Error("pswpModule as string is no longer supported");else if("function"===l)n.push(s.pswpModule());else throw Error("pswpModule is not valid");"function"==typeof s.openPromise&&n.push(s.openPromise()),!1!==s.preloadFirstSlide&&t>=0&&(this._preloadedContent=function(t,e){let i=e.getItemData(t);if(!e.dispatch("lazyLoadSlide",{index:t,itemData:i}).defaultPrevented)return u(i,e,t)}(t,this));let h=++this._uid;Promise.all(n).then(t=>{if(this.shouldOpen){let e=t[0];this._openPhotoswipe(e,h)}})}_openPhotoswipe(t,e){if(e!==this._uid&&this.shouldOpen||(this.shouldOpen=!1,window.pswp))return;let i="object"==typeof t?new t.default(this.options):new t(this.options);this.pswp=i,window.pswp=i,Object.keys(this._listeners).forEach(t=>{var e;null===(e=this._listeners[t])||void 0===e||e.forEach(e=>{i.on(t,e)})}),Object.keys(this._filters).forEach(t=>{var e;null===(e=this._filters[t])||void 0===e||e.forEach(e=>{i.addFilter(t,e.fn,e.priority)})}),this._preloadedContent&&(i.contentLoader.addToCache(this._preloadedContent),this._preloadedContent=void 0),i.on("destroy",()=>{this.pswp=void 0,delete window.pswp}),i.init()}destroy(){var t;null===(t=this.pswp)||void 0===t||t.destroy(),this.shouldOpen=!1,this._listeners={},h(this.options.gallery,this.options.gallerySelector).forEach(t=>{t.removeEventListener("click",this.onThumbnailsClick,!1)})}constructor(t){super(),this.options=t||{},this._uid=0,this.shouldOpen=!1,this._preloadedContent=void 0,this.onThumbnailsClick=this.onThumbnailsClick.bind(this)}}}}]);