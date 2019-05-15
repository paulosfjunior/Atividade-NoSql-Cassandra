var __awaiter=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(r,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function u(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(a,u)}c((o=o.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){var n,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(r=(r=a.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],o=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};App.loadBundle("yvollwer",["exports","./chunk-87e4a454.js"],function(e,t){var n=window.App.h,o=function(){function e(){}return e.prototype.logOff=function(){localStorage.clear(),window.location.reload()},e.prototype.render=function(){var e=this;return console.log(this.isHome),[n("ion-header",null,n("ion-toolbar",{color:"primary"},this.isHome?"":n("ion-buttons",{slot:"start"},n("ion-back-button",{defaultHref:"/"})),n("ion-row",null,n("ion-title",null,this.name),this.isCart?"":n("div",{class:"cart"},n("ion-button",{href:"/buy"},n("ion-icon",{name:"cart"}))),n("div",null,n("ion-button",{onClick:function(){e.logOff()}},n("ion-icon",{name:"log-out"}))))))]},Object.defineProperty(e,"is",{get:function(){return"app-header"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{isCart:{type:Boolean,attr:"is-cart",mutable:!0},isHome:{type:Boolean,attr:"is-home",mutable:!0},name:{type:String,attr:"name"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return""},enumerable:!0,configurable:!0}),e}(),r=function(){function e(){}return e.prototype.onClick=function(e){return __awaiter(this,void 0,void 0,function(){var n,o;return __generator(this,function(r){switch(r.label){case 0:return n=this.el.closest("ion-nav"),e.preventDefault(),(o=n)?[4,n.canGoBack()]:[3,2];case 1:o=r.sent(),r.label=2;case 2:return o?[2,n.pop({skipIfBusy:!0})]:[2,t.openURL(this.win,this.defaultHref,e,"back")]}})})},e.prototype.hostData=function(){var e=void 0!==this.defaultHref;return{class:Object.assign({},t.createColorClasses(this.color),{button:!0,"ion-activatable":!0,"show-back-button":e})}},e.prototype.render=function(){var e="ios"===this.mode?"Back":null,t=null!=this.icon?this.icon:this.config.get("backButtonIcon","arrow-back"),o=null!=this.text?this.text:this.config.get("backButtonText",e);return n("button",{type:"button",class:"button-native"},n("span",{class:"button-inner"},t&&n("ion-icon",{icon:t,lazy:!1}),o&&n("span",{class:"button-text"},o)),"md"===this.mode&&n("ion-ripple-effect",{type:"unbounded"}))},Object.defineProperty(e,"is",{get:function(){return"ion-back-button"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},config:{context:"config"},defaultHref:{type:String,attr:"default-href"},el:{elementRef:!0},icon:{type:String,attr:"icon"},mode:{type:String,attr:"mode"},text:{type:String,attr:"text"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"click",method:"onClick"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-back-button-ios-h{--background:transparent;--ripple-color:currentColor;--transition:background-color,opacity 100ms linear;--opacity:1;display:none;color:var(--color);font-family:var(--ion-font-family,inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none}.ion-color.sc-ion-back-button-ios-h   .button-native.sc-ion-back-button-ios{color:var(--ion-color-base)}.activated.sc-ion-back-button-ios-h   .button-native.sc-ion-back-button-ios{opacity:.4}.show-back-button.sc-ion-back-button-ios-h, .can-go-back.sc-ion-back-button-ios-h > ion-header.sc-ion-back-button-ios, .can-go-back > ion-header   .sc-ion-back-button-ios-h{display:block}.button-native.sc-ion-back-button-ios{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:var(--margin-start);margin-right:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;min-width:var(--min-width);min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;opacity:var(--opacity);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native.sc-ion-back-button-ios{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end);padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner.sc-ion-back-button-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}ion-icon.sc-ion-back-button-ios{padding-left:var(--icon-padding-start);padding-right:var(--icon-padding-end);padding-top:var(--icon-padding-top);padding-bottom:var(--icon-padding-bottom);margin-left:var(--icon-margin-start);margin-right:var(--icon-margin-end);margin-top:var(--icon-margin-top);margin-bottom:var(--icon-margin-bottom);display:inherit;font-size:var(--icon-font-size);font-weight:var(--icon-font-weight);pointer-events:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){ion-icon.sc-ion-back-button-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--icon-padding-start);padding-inline-start:var(--icon-padding-start);-webkit-padding-end:var(--icon-padding-end);padding-inline-end:var(--icon-padding-end);margin-left:unset;margin-right:unset;-webkit-margin-start:var(--icon-margin-start);margin-inline-start:var(--icon-margin-start);-webkit-margin-end:var(--icon-margin-end);margin-inline-end:var(--icon-margin-end)}}.sc-ion-back-button-ios-h{--color:var(--ion-color-primary,#3880ff);--margin-top:0;--margin-end:0;--margin-bottom:0;--margin-start:0;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--min-height:32px;--min-width:auto;--icon-padding-top:0;--icon-padding-end:0;--icon-padding-bottom:0;--icon-padding-start:0;--icon-margin-top:0;--icon-margin-end:-5px;--icon-margin-bottom:0;--icon-margin-start:-4px;--icon-font-size:1.85em;font-size:17px}.button-native.sc-ion-back-button-ios{-webkit-transform:translateZ(0);transform:translateZ(0);overflow:visible;z-index:99}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),i=function(){function e(){}return Object.defineProperty(e,"is",{get:function(){return"ion-buttons"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-buttons-ios-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-ios-s  ion-button {--padding-start:0;--padding-end:0;--box-shadow:none;--overflow:visible;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-left:2px;margin-right:2px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-ios-s  ion-button {margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}.sc-ion-buttons-ios-s  ion-button {--padding-top:0;--padding-bottom:0;--padding-start:5px;--padding-end:5px;height:32px;font-size:17px;font-weight:400}.sc-ion-buttons-ios-s  ion-button:not(.button-round) {--border-radius:4px}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button {--color:initial;--color-activated:initial}\@media (any-hover:hover){.sc-ion-buttons-ios-s  .button-solid-ios:hover {opacity:.4}}.sc-ion-buttons-ios-s  ion-icon[slot=start] {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-right:.3em;font-size:24px;line-height:.67}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-ios-s  ion-icon[slot=start] {margin-right:unset;-webkit-margin-end:.3em;margin-inline-end:.3em}}.sc-ion-buttons-ios-s  ion-icon[slot=end] {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-left:.4em;font-size:24px;line-height:.67}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-ios-s  ion-icon[slot=end] {margin-left:unset;-webkit-margin-start:.4em;margin-inline-start:.4em}}.sc-ion-buttons-ios-s  ion-icon[slot=icon-only] {padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:31px;line-height:.67}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}();e.AppHeader=o,e.IonBackButton=r,e.IonButtons=i,Object.defineProperty(e,"__esModule",{value:!0})});