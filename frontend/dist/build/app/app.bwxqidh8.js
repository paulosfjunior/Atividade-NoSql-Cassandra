/*! Built with http://stenciljs.com */
((w,d,x,n,h,c,r)=>{((s)=>{s&&(r=s.getAttribute('data-resources-url'))})(d.querySelector("script[data-namespace='app']"));
(function(Context, resourcesUrl){
})(x,r);


(function(Context, resourcesUrl){const t={ipad:function(t){return c(t,/iPad/i)},iphone:function(t){return c(t,/iPhone/i)},ios:function(t){return c(t,/iPad|iPhone|iPod/i)},android:function(t){return c(t,/android|sink/i)},phablet:function(t){const n=t.innerWidth,e=t.innerHeight,o=Math.min(n,e),i=Math.max(n,e);return o>390&&o<520&&i>620&&i<800},tablet:function(t){const n=t.innerWidth,e=t.innerHeight,o=Math.min(n,e),i=Math.max(n,e);return o>460&&o<820&&i>780&&i<1400},cordova:i,capacitor:r,electron:function(t){return c(t,/electron/)},pwa:function(t){return t.matchMedia("(display-mode: standalone)").matches},mobile:o,desktop:function(t){return!o(t)},hybrid:function(t){return i(t)||r(t)}};function n(t,n){return function(t){return e(t)}(t).includes(n)}function e(n){n.Ionic=n.Ionic||{};let e=n.Ionic.platforms;if(null==e){e=n.Ionic.platforms=function(n){return Object.keys(t).filter(e=>t[e](n))}(n);const o=n.document.documentElement.classList;e.forEach(t=>o.add(`plt-${t}`))}return e}function o(t){return function(t,n){return t.matchMedia("(any-pointer:coarse)").matches}(t)}function i(t){return!!(t.cordova||t.phonegap||t.PhoneGap)}function r(t){const n=t.Capacitor;return!(!n||!n.isNative)}function c(t,n){return n.test(t.navigator.userAgent)}const s=window,u=s.Ionic=s.Ionic||{};Object.defineProperty(u,"queue",{get:()=>Context.queue}),e(s),Context.isPlatform=n;const a=Object.assign({},function(){try{const t=window.sessionStorage.getItem("ionic-persist-config");return null!==t?JSON.parse(t):{}}catch(t){return{}}}(),{persistConfig:!1},u.config,function(){const t={};return window.location.search.slice(1).split("&").map(t=>t.split("=")).map(([t,n])=>[decodeURIComponent(t),decodeURIComponent(n)]).filter(([t])=>(function(n,e){return"ionic:"===t.substr(0,"ionic:".length)})()).map(([t,n])=>[t.slice("ionic:".length),n]).forEach(([n,e])=>{t[n]=e}),t}()),d=u.config=Context.config=new class{constructor(t){this.m=new Map(Object.entries(t))}get(t,n){const e=this.m.get(t);return void 0!==e?e:n}getBoolean(t,n=!1){const e=this.m.get(t);return void 0===e?n:"string"==typeof e?"true"===e:!!e}getNumber(t,n){const e=parseFloat(this.m.get(t));return isNaN(e)?void 0!==n?n:NaN:e}set(t,n){this.m.set(t,n)}}(a);d.getBoolean("persistConfig")&&function(t){try{window.sessionStorage.setItem("ionic-persist-config",JSON.stringify(t))}catch(t){return}}(a);const f=document.documentElement,m=d.get("mode",f.getAttribute("mode")||(n(s,"ios")?"ios":"md"));u.mode=Context.mode=m,d.set("mode",m),f.setAttribute("mode",m),f.classList.add(m),d.getBoolean("_testing")&&d.set("animated",!1);
})(x,r);
function e(e,t){return"sc-"+e.t+(t&&t!==i?"-"+t:"")}function t(e,t){return e+(t?"-h":"-s")}function o(e,t){let n,o,i=null,l=!1,s=!1,r=arguments.length;for(;r-- >2;)C.push(arguments[r]);for(;C.length>0;){let t=C.pop();if(t&&void 0!==t.pop)for(r=t.length;r--;)C.push(t[r]);else"boolean"==typeof t&&(t=null),(s="function"!=typeof e)&&(null==t?t="":"number"==typeof t?t=String(t):"string"!=typeof t&&(s=!1)),s&&l?i[i.length-1].vtext+=t:null===i?i=[s?{vtext:t}:t]:i.push(s?{vtext:t}:t),l=s}if(null!=t){if(t.className&&(t.class=t.className),"object"==typeof t.class){for(r in t.class)t.class[r]&&C.push(r);t.class=C.join(" "),C.length=0}null!=t.key&&(n=t.key),null!=t.name&&(o=t.name)}return"function"==typeof e?e(t,i||[],O):{vtag:e,vchildren:i,vtext:void 0,vattrs:t,vkey:n,vname:o,o:void 0,i:!1}}const i="$",l={},s={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},a=(t,n,o,l)=>{let s=o.t+l.mode,r=o[s];if((2===o.l||1===o.l&&!t.u.s)&&(l["s-sc"]=r?e(o,l.mode):e(o)),r||(r=o[s=o.t+i]),r){let e=n.p.head;if(n.s)if(1===o.l)e=l.shadowRoot;else{const t=l.getRootNode();t.host&&(e=t)}let i=t.m.get(e);if(i||t.m.set(e,i={}),!i[s]){let t;{t=r.content.cloneNode(!0),i[s]=!0;const o=e.querySelectorAll("[data-styles]");n.v(e,t,o.length&&o[o.length-1].nextSibling||e.firstChild)}}}},f=e=>null!=e,u=e=>e.toLowerCase(),p=()=>{},b=(e,t,n,o="boolean"==typeof n,i)=>{i=t!==(t=t.replace(/^xlink\:?/,"")),null==n||o&&(!n||"false"===n)?i?e.removeAttributeNS(m,u(t)):e.removeAttribute(t):"function"!=typeof n&&(n=o?"":n.toString(),i?e.setAttributeNS(m,u(t),n):e.setAttribute(t,n))},m="http://www.w3.org/1999/xlink",v=(e,t,n,o,i,l,s)=>{if("class"!==n||l)if("style"===n){for(const e in o)i&&null!=i[e]||(/-/.test(e)?t.style.removeProperty(e):t.style[e]="");for(const e in i)o&&i[e]===o[e]||(/-/.test(e)?t.style.setProperty(e,i[e]):t.style[e]=i[e])}else if("o"!==n[0]||"n"!==n[1]||!/[A-Z]/.test(n[2])||n in t)if("list"!==n&&"type"!==n&&!l&&(n in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=e.M(t);o&&o.g&&o.g[n]?(M(t,n,i),s&&o.g[n].k&&b(t,o.g[n].j,i,4===o.g[n].C)):"ref"!==n&&(M(t,n,null==i?"":i),null!=i&&!1!==i||e.u.O(t,n))}else null!=i&&"key"!==n?b(t,n,i):(l||e.u.W(t,n)&&(null==i||!1===i))&&e.u.O(t,n);else n=u(n)in t?u(n.substring(2)):u(n[2])+n.substring(3),i?i!==o&&e.u.N(t,n,i,0):e.u.S(t,n,0);else if(o!==i){const e=y(o),n=y(i),l=e.filter(e=>!n.includes(e)),s=y(t.className).filter(e=>!l.includes(e)),r=n.filter(t=>!e.includes(t)&&!s.includes(t));s.push(...r),t.className=s.join(" ")}},y=e=>null==e||""===e?[]:e.trim().split(/\s+/),M=(e,t,n)=>{try{e[t]=n}catch(e){}},g=(e,t,n,o,i)=>{const s=11===n.o.nodeType&&n.o.host?n.o.host:n.o,r=t&&t.vattrs||l,a=n.vattrs||l;for(i in r)a&&null!=a[i]||null==r[i]||v(e,s,i,r[i],void 0,o,n.i);for(i in a)i in r&&a[i]===("value"===i||"checked"===i?s[i]:r[i])||v(e,s,i,r[i],a[i],o,n.i)};let $=!1;const k=(e,t)=>{e&&(e.vattrs&&e.vattrs.ref&&e.vattrs.ref(t?null:e.o),e.vchildren&&e.vchildren.forEach(e=>{k(e,t)}))},j=(e,t)=>{{let n=0,o=!1;const i=()=>t.performance.now(),l=!1!==e.asyncQueue,s=Promise.resolve(),r=[],a=[],c=[],f=[],u=t=>n=>{t.push(n),o||(o=!0,e.raf(b))},p=e=>{for(let t=0;t<e.length;t++)try{e[t](i())}catch(e){console.error(e)}e.length=0},d=(e,t)=>{let n,o=0;for(;o<e.length&&(n=i())<t;)try{e[o++](n)}catch(e){console.error(e)}o===e.length?e.length=0:0!==o&&e.splice(0,o)},b=()=>{n++,p(a);const t=l?i()+7*Math.ceil(n*(1/22)):Infinity;d(c,t),d(f,t),c.length>0&&(f.push(...c),c.length=0),(o=a.length+c.length+f.length>0)?e.raf(b):n=0};return e.raf||(e.raf=t.requestAnimationFrame.bind(t)),{tick(e){r.push(e),1===r.length&&s.then(()=>p(r))},read:u(a),write:u(c)}}},C=[],O={forEach:(e,t)=>e.forEach(t),map:(e,t)=>e.map(t)},W=(e,t,n)=>{const[o,i,,l,s,r]=e,a={color:{j:"color"}};if(l)for(t=0;t<l.length;t++)a[(n=l[t])[0]]={A:n[1],k:!!n[2],j:"string"==typeof n[3]?n[3]:n[3]?n[0]:0,C:n[4]};return{t:o,T:i,g:Object.assign({},a),l:s,R:r?r.map(N):void 0}},N=e=>({L:e[0],D:e[1],q:!!e[2],B:!!e[3],I:!!e[4]}),S=(e,t)=>f(t)&&"object"!=typeof t&&"function"!=typeof t?e===Boolean||4===e?"false"!==t&&(""===t||!!t):e===Number||8===e?parseFloat(t):e===String||2===e?t.toString():t:t,E=(e,t,n)=>{e.P.add(t),e.F.has(t)||(e.F.set(t,!0),e.H?e.queue.write(()=>A(e,t,n)):e.queue.tick(()=>A(e,t,n)))},A=async(e,n,i,l,s,r)=>{if(e.F.delete(n),!e.U.has(n)){if(!(s=e.Z.get(n))){if((r=e.G.get(n))&&!r["s-rn"])return void(r["s-rc"]=r["s-rc"]||[]).push(()=>{A(e,n,i)});if(s=B(e,n,e.J.get(n),i))try{s.componentWillLoad&&await s.componentWillLoad()}catch(t){e.K(t,3,n)}}((e,n,i,l)=>{try{const s=n.V.host,r=n.V.encapsulation,a="shadow"===r&&e.u.s;let c,f=i;if(c=((e,t,n)=>(e&&Object.keys(e).forEach(o=>{e[o].reflectToAttr&&((n=n||{})[o]=t[o])}),n))(n.V.properties,l),a&&(f=i.shadowRoot),!i["s-rn"]){e.X(e,e.u,n,i);const o=i["s-sc"];o&&(e.u.Y(i,t(o,!0)),"scoped"===r&&e.u.Y(i,t(o)))}if(l.render||l.hostData||s||c){e._=!0;const t=l.render&&l.render();let n;n=l.hostData&&l.hostData(),c&&(n=n?Object.assign(n,c):c),e._=!1;const s=o(null,n,t),u=e.ee.get(i)||{};u.o=f,s.i=!0,e.ee.set(i,e.render(i,u,s,a,r))}i["s-rn"]=!0,i["s-rc"]&&(i["s-rc"].forEach(e=>e()),i["s-rc"]=null)}catch(t){e._=!1,e.K(t,8,i,!0)}})(e,e.M(n),n,s),n["s-init"]()}},T=(e,t,n,o,i,l,s,r,a)=>{if(t.type||t.state){const c=e.te.get(n);t.state||(!t.attr||void 0!==c[i]&&""!==c[i]||(r=l&&l.ne)&&f(a=r[t.attr])&&(c[i]=S(t.type,a)),n.hasOwnProperty(i)&&(void 0===c[i]&&(c[i]=S(t.type,n[i])),"mode"!==i&&delete n[i])),o.hasOwnProperty(i)&&void 0===c[i]&&(c[i]=o[i]),t.watchCallbacks&&(c[q+i]=t.watchCallbacks.slice()),D(o,i,function c(t){return(t=e.te.get(e.oe.get(this)))&&t[i]},function u(n,o){(o=e.oe.get(this))&&(t.state||t.mutable)&&R(e,o,i,n,s)})}else if(t.elementRef)L(o,i,n);else if(t.method)L(n,i,o[i].bind(o));else if(t.context){const l=e.ie(t.context);void 0!==l&&L(o,i,l.getContext&&l.getContext(n)||l)}},R=(e,t,n,o,i,l,s)=>{(s=e.te.get(t))||e.te.set(t,s={});const r=s[n];if(o!==r&&(s[n]=o,l=e.Z.get(t))){{const e=s[q+n];if(e)for(let t=0;t<e.length;t++)try{l[e[t]].call(l,o,r,n)}catch(e){console.error(e)}}!e._&&t["s-rn"]&&E(e,t,i)}},L=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,value:n})},D=(e,t,n,o)=>{Object.defineProperty(e,t,{configurable:!0,get:n,set:o})},q="wc-",B=(e,t,n,o,i,l,s,r)=>{try{i=new(l=e.M(t).V),((e,t,n,o,i,l)=>{e.oe.set(o,n),e.te.has(n)||e.te.set(n,{}),Object.entries(Object.assign({color:{type:String}},t.properties,{mode:{type:String}})).forEach(([t,s])=>{T(e,s,n,o,t,i,l)})})(e,l,t,i,n,o),function a(e,t,n){if(t){const o=e.oe.get(n);t.forEach(t=>{n[t.method]={emit:n=>e.le(o,t.name,{bubbles:t.bubbles,composed:t.composed,cancelable:t.cancelable,detail:n})}})}}(e,l.events,i);try{if(s=e.se.get(t)){for(r=0;r<s.length;r+=2)i[s[r]](s[r+1]);e.se.delete(t)}}catch(n){e.K(n,2,t)}}catch(n){i={},e.K(n,7,t,!0)}return e.Z.set(t,i),i},I=(e,t,n,o,i,l)=>{if(e.P.delete(t),(i=e.G.get(t))&&((o=i["s-ld"])&&((n=o.indexOf(t))>-1&&o.splice(n,1),o.length||i["s-init"]&&i["s-init"]()),e.G.delete(t)),e.re.length&&!e.P.size)for(;l=e.re.shift();)l()},P=(e,t,n,o)=>{t.forEach(([t,i])=>{const l=i.A;3&l?D(n,t,function n(){return(e.te.get(this)||{})[t]},function n(l){R(e,this,t,S(i.C,l),o)}):32===l&&L(n,t,p)})},F=(e,t,n,o,i)=>{if(n.connectedCallback=function(){((e,t,n)=>{e.ae.has(n)||(e.ae.set(n,!0),function o(e,t){const n=e.M(t);n.R&&n.R.forEach(n=>{n.q||e.u.N(t,n.L,function o(e,t,n,i){return o=>{(i=e.Z.get(t))?i[n](o):((i=e.se.get(t)||[]).push(n,o),e.se.set(t,i))}}(e,t,n.D),1,n.I,n.B)})}(e,n)),e.U.delete(n),e.ce.has(n)||(e.fe=!0,e.P.add(n),e.ce.set(n,!0),((e,t,n)=>{for(n=t;n=e.u.ue(n);)if(e.pe(n)){e.de.has(t)||(e.G.set(t,n),(n["s-ld"]=n["s-ld"]||[]).push(t));break}})(e,n),e.queue.tick(()=>{e.J.set(n,((e,t,n,o,i)=>(n.mode||(n.mode=e.be(n)),n["s-cr"]||e.me(n,"ssrv")||e.s&&1===t.l||(n["s-cr"]=e.ve(""),n["s-cr"]["s-cn"]=!0,e.v(n,n["s-cr"],e.he(n)[0])),e.s||1!==t.l||!window.HTMLElement||"shadowRoot"in window.HTMLElement.prototype||(n.shadowRoot=n),1===t.l&&e.s&&!n.shadowRoot&&e.ye(n,{mode:"open"}),o={ne:{}},t.g&&Object.keys(t.g).forEach(l=>{(i=t.g[l].j)&&(o.ne[i]=e.me(n,i))}),o))(e.u,t,n)),e.we(t,n)}))})(e,t,this)},n.disconnectedCallback=function(){((e,t)=>{if(!e.Me&&((e,t)=>{for(;t;){if(!e.ge(t))return 9!==e.$e(t);t=e.ge(t)}})(e.u,t)){e.U.set(t,!0),I(e,t),k(e.ee.get(t),!0);{const n=e.Z.get(t);n&&n.componentDidUnload&&n.componentDidUnload()}e.u.S(t),e.ae.delete(t),[e.G,e.ke,e.J].forEach(e=>e.delete(t))}})(e,this)},n["s-init"]=function(){((e,t,n,o,i,l,s)=>{if((i=e.Z.get(t))&&!e.U.has(t)&&(!t["s-ld"]||!t["s-ld"].length)){e.de.set(t,!0),(s=e.je.has(t))||(e.je.set(t,!0),t["s-ld"]=void 0,e.u.Y(t,n));try{k(e.ee.get(t)),(l=e.ke.get(t))&&(l.forEach(e=>e(t)),e.ke.delete(t)),!s&&i.componentDidLoad&&i.componentDidLoad()}catch(n){e.K(n,4,t)}I(e,t)}})(e,this,o)},n.forceUpdate=function(){E(e,this,i)},t.g){const o=Object.entries(t.g);{let e={};o.forEach(([t,{j:n}])=>{n&&(e[n]=t)}),e=Object.assign({},e),n.attributeChangedCallback=function(t,n,o){(function i(e,t,n,o){const i=e[u(n)];i&&(t[i]=o)})(e,this,t,o)}}P(e,o,n,i)}};((e,t,n,l,r,c,p)=>{const d=n.performance,b={html:{}},m=n[e]=n[e]||{},v=((e,t,n)=>{const o=new WeakMap,i={p:n,s:!!n.documentElement.attachShadow,Ce:!1,$e:e=>e.nodeType,Oe:e=>n.createElement(e),We:(e,t)=>n.createElementNS(e,t),ve:e=>n.createTextNode(e),Ne:e=>n.createComment(e),v:(e,t,n)=>e.insertBefore(t,n),Se:e=>e.remove(),Ee:(e,t)=>e.appendChild(t),Y:(e,t)=>{e.classList.add(t)},he:e=>e.childNodes,ge:e=>e.parentNode,xe:e=>e.nextSibling,Ae:e=>e.previousSibling,Te:e=>u(e.nodeName),Re:e=>e.textContent,Le:(e,t)=>e.textContent=t,me:(e,t)=>e.getAttribute(t),De:(e,t,n)=>e.setAttribute(t,n),O:(e,t)=>e.removeAttribute(t),W:(e,t)=>e.hasAttribute(t),be:t=>t.getAttribute("mode")||(e.Context||{}).mode,qe:(e,o)=>"child"===o?e.firstElementChild:"parent"===o?i.ue(e):"body"===o?n.body:"document"===o?n:"window"===o?t:e,N:(t,n,l,r,a,c,f,u,p,d)=>{let b=t,m=l,v=o.get(t);d=n+r,v&&v[d]&&v[d](),"string"==typeof f?b=i.qe(t,f):"object"==typeof f?b=f:(p=n.split(":")).length>1&&(b=i.qe(t,p[0]),n=p[1]),b&&((p=n.split(".")).length>1&&(n=p[0],m=(e=>{e.keyCode===s[p[1]]&&l(e)})),u=i.Ce?{capture:!!a,passive:!!c}:!!a,e.ael(b,n,m,u),v||o.set(t,v={}),v[d]=(()=>{b&&e.rel(b,n,m,u),v[d]=null}))},S:(e,t,n,i)=>{(i=o.get(e))&&(t?i[t+n]&&i[t+n]():Object.keys(i).forEach(e=>{i[e]&&i[e]()}))},Be:(e,n,o,i)=>(i=new t.CustomEvent(n,o),e&&e.dispatchEvent(i),i),ue:(e,t)=>(t=i.ge(e))&&11===i.$e(t)?t.host:t,Ie:(e,t,n,o)=>e.setAttributeNS(t,n,o),ye:(e,t)=>e.attachShadow(t)};e.ael||(e.ael=((e,t,n,o)=>e.addEventListener(t,n,o)),e.rel=((e,t,n,o)=>e.removeEventListener(t,n,o)));try{t.addEventListener("e",null,Object.defineProperty({},"passive",{get:()=>i.Ce=!0}))}catch(e){}return i})(m,n,l),h=v.p.documentElement,y=n["s-defined"]=n["s-defined"]||{},w=(e,t)=>{n.customElements.get(e.t)||(F(M,b[e.t]=e,t.prototype,c,d),t.observedAttributes=Object.values(e.g).map(e=>e.j).filter(e=>!!e),n.customElements.define(e.t,t))},M={u:v,Pe:w,M:e=>b[v.Te(e)],ie:e=>t[e],isClient:!0,pe:e=>!(!y[v.Te(e)]&&!M.M(e)),K:(e,t,n)=>console.error(e,t,n&&n.tagName),queue:t.queue=j(m,n),we:(e,t)=>{{const n="string"!=typeof e.T?e.T[t.mode]:e.T,o=!v.s;let l=r+n+(o?".sc":"")+".entry.js";import(l).then(n=>{try{e.V=n[(e=>u(e).split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(""))(e.t)],function o(e,t,n,l,s){if(l){const n=t.t+(s||i);if(!t[n]){const o=e.Oe("template");t[n]=o,o.innerHTML=`<style>${l}</style>`,e.Ee(e.p.head,o)}}}(v,e,e.l,e.V.style,e.V.styleMode),E(M,t,d)}catch(t){console.error(t),e.V=class{}}},e=>console.error(e,l))}},_:!1,H:!1,Me:!1,X:a,G:new WeakMap,m:new WeakMap,ce:new WeakMap,ae:new WeakMap,je:new WeakMap,de:new WeakMap,oe:new WeakMap,J:new WeakMap,Z:new WeakMap,U:new WeakMap,F:new WeakMap,ke:new WeakMap,se:new WeakMap,ee:new WeakMap,te:new WeakMap,P:new Set,re:[]};return t.isServer=t.isPrerender=!(t.isClient=!0),t.window=n,t.location=n.location,t.document=l,t.resourcesUrl=t.publicPath=r,t.enableListener=((e,t,n,o,i)=>(function l(e,t,n,o,i,s){if(t){const l=e.oe.get(t),r=e.M(l);if(r&&r.R)if(o){const o=r.R.find(e=>e.L===n);o&&e.u.N(l,n,e=>t[o.D](e),1,o.I,void 0===s?o.B:!!s,i)}else e.u.S(l,n,1)}})(M,e,t,n,o,i)),M.le=t.emit=((e,n,o)=>v.Be(e,t.eventNameFn?t.eventNameFn(n):n,o)),m.h=o,m.Context=t,m.onReady=(()=>new Promise(e=>M.queue.write(()=>M.P.size?M.re.push(e):e()))),M.render=((e,t)=>{let n,o,i,l,s,r,a;const c=(i,p,d,b,m,v,h,y,w)=>{if(y=p.vchildren[d],n||(l=!0,"slot"===y.vtag&&(o&&t.Y(b,o+"-s"),y.vchildren?y.Fe=!0:y.He=!0)),f(y.vtext))y.o=t.ve(y.vtext);else if(y.He)y.o=t.ve("");else{if(v=y.o=$||"svg"===y.vtag?t.We("http://www.w3.org/2000/svg",y.vtag):t.Oe(y.Fe?"slot-fb":y.vtag),e.pe(v)&&e.de.delete(a),$="svg"===y.vtag||"foreignObject"!==y.vtag&&$,g(e,null,y,$),f(o)&&v["s-si"]!==o&&t.Y(v,v["s-si"]=o),y.vchildren)for(m=0;m<y.vchildren.length;++m)(h=c(i,y,m,v))&&t.Ee(v,h);"svg"===y.vtag&&($=!1)}return y.o["s-hn"]=r,(y.Fe||y.He)&&(y.o["s-sr"]=!0,y.o["s-cr"]=s,y.o["s-sn"]=y.vname||"",(w=i&&i.vchildren&&i.vchildren[d])&&w.vtag===y.vtag&&i.o&&u(i.o)),y.o},u=(n,o,i,s)=>{e.Me=!0;const a=t.he(n);for(i=a.length-1;i>=0;i--)(s=a[i])["s-hn"]!==r&&s["s-ol"]&&(t.Se(s),t.v(v(s),s,m(s)),t.Se(s["s-ol"]),s["s-ol"]=null,l=!0),o&&u(s,o);e.Me=!1},p=(e,n,o,i,l,s,a,u)=>{const p=e["s-cr"];for((a=p&&t.ge(p)||e).shadowRoot&&t.Te(a)===r&&(a=a.shadowRoot);l<=s;++l)i[l]&&(u=f(i[l].vtext)?t.ve(i[l].vtext):c(null,o,l,e))&&(i[l].o=u,t.v(a,u,m(n)))},d=(e,n,o,l)=>{for(;n<=o;++n)f(e[n])&&(l=e[n].o,i=!0,l["s-ol"]?t.Se(l["s-ol"]):u(l,!0),t.Se(l))},b=(e,t)=>e.vtag===t.vtag&&e.vkey===t.vkey&&("slot"!==e.vtag||e.vname===t.vname),m=e=>e&&e["s-ol"]?e["s-ol"]:e,v=e=>t.ge(e["s-ol"]?e["s-ol"]:e),h=(n,o,i)=>{const l=o.o=n.o,s=n.vchildren,r=o.vchildren;$=o.o&&f(t.ue(o.o))&&void 0!==o.o.ownerSVGElement,$="svg"===o.vtag||"foreignObject"!==o.vtag&&$,f(o.vtext)?(i=l["s-cr"])?t.Le(t.ge(i),o.vtext):n.vtext!==o.vtext&&t.Le(l,o.vtext):("slot"!==o.vtag&&g(e,n,o,$),f(s)&&f(r)?((e,n,o,i,l,s,r,a)=>{let y=0,w=0,M=n.length-1,g=n[0],$=n[M],k=i.length-1,j=i[0],C=i[k];for(;y<=M&&w<=k;)if(null==g)g=n[++y];else if(null==$)$=n[--M];else if(null==j)j=i[++w];else if(null==C)C=i[--k];else if(b(g,j))h(g,j),g=n[++y],j=i[++w];else if(b($,C))h($,C),$=n[--M],C=i[--k];else if(b(g,C))"slot"!==g.vtag&&"slot"!==C.vtag||u(t.ge(g.o)),h(g,C),t.v(e,g.o,t.xe($.o)),g=n[++y],C=i[--k];else if(b($,j))"slot"!==g.vtag&&"slot"!==C.vtag||u(t.ge($.o)),h($,j),t.v(e,$.o,g.o),$=n[--M],j=i[++w];else{for(l=null,s=y;s<=M;++s)if(n[s]&&f(n[s].vkey)&&n[s].vkey===j.vkey){l=s;break}f(l)?((a=n[l]).vtag!==j.vtag?r=c(n&&n[w],o,l,e):(h(a,j),n[l]=void 0,r=a.o),j=i[++w]):(r=c(n&&n[w],o,w,e),j=i[++w]),r&&t.v(v(g.o),r,m(g.o))}y>M?p(e,null==i[k+1]?null:i[k+1].o,o,i,w,k):w>k&&d(n,y,M)})(l,s,o,r):f(r)?(f(n.vtext)&&t.Le(l,""),p(l,null,o,r,0,r.length-1)):f(s)&&d(s,0,s.length-1)),$&&"svg"===o.vtag&&($=!1)},y=(e,n,o,i,l,s,r,a)=>{for(i=0,l=(o=t.he(e)).length;i<l;i++)if(n=o[i],1===t.$e(n)){if(n["s-sr"])for(r=n["s-sn"],n.hidden=!1,s=0;s<l;s++)if(o[s]["s-hn"]!==n["s-hn"])if(a=t.$e(o[s]),""!==r){if(1===a&&r===t.me(o[s],"slot")){n.hidden=!0;break}}else if(1===a||3===a&&""!==t.Re(o[s]).trim()){n.hidden=!0;break}y(n)}},w=[],M=(e,n,o,l,s,r,a,c,f,u)=>{for(s=0,r=(n=t.he(e)).length;s<r;s++){if((o=n[s])["s-sr"]&&(l=o["s-cr"]))for(c=t.he(t.ge(l)),f=o["s-sn"],a=c.length-1;a>=0;a--)(l=c[a])["s-cn"]||l["s-nr"]||l["s-hn"]===o["s-hn"]||((3===(u=t.$e(l))||8===u)&&""===f||1===u&&null===t.me(l,"slot")&&""===f||1===u&&t.me(l,"slot")===f)&&(w.some(e=>e.Qe===l)||(i=!0,l["s-sn"]=f,w.push({Ue:o,Qe:l})));1===t.$e(o)&&M(o)}};return(c,f,u,p,d,b,m,v,g,$,k,j)=>{if(a=c,r=t.Te(a),s=a["s-cr"],n=p,o=a["s-sc"],l=i=!1,h(f,u),l){for(M(u.o),m=0;m<w.length;m++)(v=w[m]).Qe["s-ol"]||((g=t.ve(""))["s-nr"]=v.Qe,t.v(t.ge(v.Qe),v.Qe["s-ol"]=g,v.Qe));for(e.Me=!0,m=0;m<w.length;m++){for(v=w[m],k=t.ge(v.Ue),j=t.xe(v.Ue),g=v.Qe["s-ol"];g=t.Ae(g);)if(($=g["s-nr"])&&$&&$["s-sn"]===v.Qe["s-sn"]&&k===t.ge($)&&($=t.xe($))&&$&&!$["s-nr"]){j=$;break}(!j&&k!==t.ge(v.Qe)||t.xe(v.Qe)!==j)&&v.Qe!==j&&(t.Se(v.Qe),t.v(k,v.Qe,j))}e.Me=!1}return i&&y(u.o),w.length=0,u}})(M,v),h["s-ld"]=[],h["s-rn"]=!0,h["s-init"]=(()=>{M.de.set(h,m.loaded=M.H=!0),v.Be(n,"appload",{detail:{namespace:e}})}),p.map(W).forEach(e=>w(e,class extends HTMLElement{})),M.fe||h["s-init"](),((e,t,n,o,i,l)=>{if(t.componentOnReady=((t,n)=>{if(!t.nodeName.includes("-"))return n(null),!1;const o=e.M(t);if(o)if(e.de.has(t))n(t);else{const o=e.ke.get(t)||[];o.push(n),e.ke.set(t,o)}return!!o}),i){for(l=i.length-1;l>=0;l--)t.componentOnReady(i[l][0],i[l][1])&&i.splice(l,1);for(l=0;l<o.length;l++)if(!n[o[l]].componentOnReady)return;for(l=0;l<i.length;l++)i[l][1](null);i.length=0}})(M,m,n,n["s-apps"],n["s-cr"]),m.initialized=!0,M})(n,x,w,d,r,h,c);
})(window,document,{},"App","hydrated",[["app-login","5ovrgdgf",1,[["email",16],["pass",16]]],["app-buy","3zx6falo",1,[["cartList",16],["cartProvider",16],["el",64],["itemsList",16],["itemsProvider",16],["update",16]]],["app-cadastro-customer",{"ios":"ua0icobp","md":"bfmnpqny"},1,[["email",2,0,1,2],["endereco",2],["name",2,0,1,2],["old",2],["open",2,0,1,4],["pass",2,0,1,2],["placeholders",2],["rule",2,0,1,2],["user",2,0,1,2]]],["app-cadastro-item","hrvkbnzt",1,[["desc",2,0,1,2],["name",2,0,1,2],["old",2],["open",2,0,1,4],["price",2,0,1,8]]],["app-customer",{"ios":"ua0icobp","md":"bfmnpqny"},1,[["el",64],["lista",16],["provider",16],["update",16]]],["app-fab",{"ios":"ua0icobp","md":"bfmnpqny"},1],["app-header",{"ios":"yvollwer","md":"qa55kzwh"},1,[["isCart",2,0,"is-cart",4],["isHome",2,0,"is-home",4],["name",1,0,1,2]]],["app-home","4ov18dlx",1,[["cartList",16],["cartsProvider",16],["el",64],["itemList",16],["itemsProvider",16]]],["app-item","hrvkbnzt",1,[["el",64],["lista",16],["provider",16],["update",16]]],["app-open-cart-modal","3zx6falo",1,[["cartProvider",2],["el",64],["open",2,0,1,4]],0,[["close","onCloseHandler"]]],["app-root","wa4wwnlk",1],["ion-app","wa4wwnlk",1,[["config",4,0,0,0,"config"],["el",64],["queue",4,0,0,0,"queue"],["win",4,0,0,0,"window"]]],["ion-back-button",{"ios":"yvollwer","md":"qa55kzwh"},1,[["color",1,0,1,2],["config",4,0,0,0,"config"],["defaultHref",1,0,"default-href",2],["el",64],["icon",1,0,1,2],["mode",1,0,1,2],["text",1,0,1,2],["win",4,0,0,0,"window"]],2,[["click","onClick"]]],["ion-button",{"ios":"1spvj0jn","md":"n2fo0pje"},1,[["buttonType",2,0,"button-type",2],["color",1,0,1,2],["disabled",1,1,1,4],["el",64],["expand",1,1,1,2],["fill",2,1,1,2],["href",1,0,1,2],["mode",1,0,1,2],["routerDirection",1,0,"router-direction",2],["shape",1,1,1,2],["size",1,1,1,2],["strong",1,0,1,4],["type",1,0,1,2],["win",4,0,0,0,"window"]],1,[["click","onClick"]]],["ion-buttons",{"ios":"yvollwer","md":"qa55kzwh"},1,0,2],["ion-card",{"ios":"ua0icobp","md":"bfmnpqny"},1,[["color",1,0,1,2],["mode",1,0,1,2]],2],["ion-card-header",{"ios":"ua0icobp","md":"bfmnpqny"},1,[["color",1,0,1,2],["mode",1,0,1,2],["translucent",1,0,1,4]],1],["ion-card-subtitle",{"ios":"ua0icobp","md":"bfmnpqny"},1,[["color",1,0,1,2],["mode",1,0,1,2]],1],["ion-card-title",{"ios":"ua0icobp","md":"bfmnpqny"},1,[["color",1,0,1,2],["mode",1,0,1,2]],1],["ion-content",{"ios":"ua0icobp","md":"bfmnpqny"},1,[["color",1,0,1,2],["config",4,0,0,0,"config"],["el",64],["forceOverscroll",2,0,"force-overscroll",4],["fullscreen",1,0,1,4],["getScrollElement",32],["queue",4,0,0,0,"queue"],["scrollByPoint",32],["scrollEvents",1,0,"scroll-events",4],["scrollToBottom",32],["scrollToPoint",32],["scrollToTop",32],["scrollX",1,0,"scroll-x",4],["scrollY",1,0,"scroll-y",4],["win",4,0,0,0,"window"]],1,[["click","onClick",0,0,1]]],["ion-fab",{"ios":"ua0icobp","md":"bfmnpqny"},1,[["activated",2,0,1,4],["close",32],["edge",1,0,1,4],["el",64],["horizontal",1,0,1,2],["vertical",1,0,1,2]],1,[["click","onClick"]]],["ion-fab-button",{"ios":"ua0icobp","md":"bfmnpqny"},1,[["activated",1,0,1,4],["color",1,0,1,2],["disabled",1,0,1,4],["el",64],["href",1,0,1,2],["mode",1,0,1,2],["routerDirection",1,0,"router-direction",2],["show",1,0,1,4],["size",1,0,1,2],["translucent",1,0,1,4],["type",1,0,1,2],["win",4,0,0,0,"window"]],1],["ion-fab-list",{"ios":"ua0icobp","md":"bfmnpqny"},1,[["activated",1,0,1,4],["el",64],["side",1,0,1,2]],1],["ion-header",{"ios":"1spvj0jn","md":"n2fo0pje"},1,[["mode",1,0,1,2],["translucent",1,0,1,4]]],["ion-icon","l3elbd0z",1,[["ariaLabel",2,1,"aria-label",2],["color",1,0,1,2],["doc",4,0,0,0,"document"],["el",64],["flipRtl",1,0,"flip-rtl",4],["icon",1,0,1,2],["ios",1,0,1,2],["isServer",4,0,0,0,"isServer"],["isVisible",16],["lazy",1,0,1,4],["md",1,0,1,2],["mode",1,0,1,2],["name",1,0,1,2],["resourcesUrl",4,0,0,0,"resourcesUrl"],["size",1,0,1,2],["src",1,0,1,2],["svgContent",16],["win",4,0,0,0,"window"]],1],["ion-input",{"ios":"1spvj0jn","md":"n2fo0pje"},1,[["accept",1,0,1,2],["autocapitalize",1,0,1,2],["autocomplete",1,0,1,2],["autocorrect",1,0,1,2],["autofocus",1,0,1,4],["clearInput",1,0,"clear-input",4],["clearOnEdit",2,0,"clear-on-edit",4],["color",1,0,1,2],["debounce",1,0,1,8],["disabled",1,0,1,4],["el",64],["getInputElement",32],["hasFocus",16],["inputmode",1,0,1,2],["max",1,0,1,2],["maxlength",1,0,1,8],["min",1,0,1,2],["minlength",1,0,1,8],["mode",1,0,1,2],["multiple",1,0,1,4],["name",1,0,1,2],["pattern",1,0,1,2],["placeholder",1,0,1,2],["readonly",1,0,1,4],["required",1,0,1,4],["setFocus",32],["size",1,0,1,8],["spellcheck",1,0,1,4],["step",1,0,1,2],["type",1,0,1,2],["value",2,0,1,2]],2],["ion-item",{"ios":"6mpp5kz8","md":"uy5uh3kw"},1,[["button",1,0,1,4],["color",1,0,1,2],["detail",1,0,1,4],["detailIcon",1,0,"detail-icon",2],["disabled",1,0,1,4],["el",64],["href",1,0,1,2],["lines",1,0,1,2],["mode",1,0,1,2],["multipleInputs",16],["routerDirection",1,0,"router-direction",2],["type",1,0,1,2],["win",4,0,0,0,"window"]],1,[["ionStyle","itemStyle"]]],["ion-item-group",{"ios":"ua0icobp","md":"bfmnpqny"},1],["ion-label",{"ios":"ua0icobp","md":"bfmnpqny"},1,[["color",1,0,1,2],["el",64],["mode",1,0,1,2],["noAnimate",16],["position",1,0,1,2]],2],["ion-list",{"ios":"47sg0nlc","md":"stx7rn2v"},1,[["closeSlidingItems",32],["el",64],["inset",1,0,1,4],["lines",1,0,1,2],["mode",1,0,1,2]]],["ion-list-header",{"ios":"ua0icobp","md":"bfmnpqny"},1,[["color",1,0,1,2],["mode",1,0,1,2]],1],["ion-nav","wa4wwnlk",1,[["animated",1,0,1,4],["animation",1],["canGoBack",32],["config",4,0,0,0,"config"],["delegate",1],["el",64],["getActive",32],["getByIndex",32],["getPrevious",32],["getRouteId",32],["insert",32],["insertPages",32],["pop",32],["popTo",32],["popToRoot",32],["push",32],["queue",4,0,0,0,"queue"],["removeIndex",32],["root",1,0,1,2],["rootParams",1],["setPages",32],["setRoot",32],["setRouteId",32],["swipeGesture",2,0,"swipe-gesture",4],["win",4,0,0,0,"window"]],1],["ion-radio",{"ios":"ua0icobp","md":"bfmnpqny"},1,[["checked",2,0,1,4],["color",1,0,1,2],["disabled",1,0,1,4],["el",64],["mode",1,0,1,2],["name",1,0,1,2],["value",2,0,1,1]],1,[["click","onClick"]]],["ion-radio-group",{"ios":"ua0icobp","md":"bfmnpqny"},0,[["allowEmptySelection",1,0,"allow-empty-selection",4],["el",64],["name",1,0,1,2],["value",2,0,1,1]],0,[["ionDeselect","onRadioDeselect"],["ionRadioDidLoad","onRadioDidLoad"],["ionRadioDidUnload","onRadioDidUnload"],["ionSelect","onRadioSelect"]]],["ion-ripple-effect","z9nt6ntd",1,[["addRipple",32],["el",64],["queue",4,0,0,0,"queue"],["type",1,0,1,2],["win",4,0,0,0,"window"]],1],["ion-route","wa4wwnlk",0,[["component",1,0,1,2],["componentProps",1],["url",1,0,1,2]]],["ion-router","wa4wwnlk",0,[["back",32],["config",4,0,0,0,"config"],["el",64],["navChanged",32],["printDebug",32],["push",32],["queue",4,0,0,0,"queue"],["root",1,0,1,2],["useHash",1,0,"use-hash",4],["win",4,0,0,0,"window"]],0,[["document:ionBackButton","onBackButton"],["window:popstate","onPopState"]]],["ion-row",{"ios":"ua0icobp","md":"bfmnpqny"},1,0,1],["ion-title",{"ios":"ua0icobp","md":"bfmnpqny"},1,[["color",1,0,1,2],["el",64]],1],["ion-toolbar",{"ios":"ua0icobp","md":"bfmnpqny"},1,[["color",1,0,1,2],["config",4,0,0,0,"config"],["el",64],["mode",1,0,1,2]],1,[["ionStyle","childrenStyle"]]]]);