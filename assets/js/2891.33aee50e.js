/*! For license information please see 2891.33aee50e.js.LICENSE.txt */
"use strict";(self.webpackChunkysfaran_blog=self.webpackChunkysfaran_blog||[]).push([[2891],{2891:(t,e,s)=>{s.r(e),s.d(e,{GiscusWidget:()=>$t});const i=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap;class o{constructor(t,e,s){if(this._$cssResult$=!0,s!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&r.set(e,t))}return t}toString(){return this.cssText}}const l=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,n))(e)})(t):t;var h;const a=window.trustedTypes,c=a?a.emptyScript:"",d=window.reactiveElementPolyfillSupport,u={toAttribute(t,e){switch(e){case Boolean:t=t?c:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},p=(t,e)=>e!==t&&(e==e||t==t),_={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:p};class v extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;null!==(e=this.h)&&void 0!==e||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,s)=>{const i=this._$Ep(s,e);void 0!==i&&(this._$Ev.set(i,s),t.push(i))})),t}static createProperty(t,e=_){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||_}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of e)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Ep(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,s;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{i?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const s=document.createElement("style"),i=window.litNonce;void 0!==i&&s.setAttribute("nonce",i),s.textContent=e.cssText,t.appendChild(s)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=_){var i,n;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const o=(null!==(n=null===(i=s.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==n?n:u.toAttribute)(e,s.type);this._$El=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(t,e){var s,i;const n=this.constructor,r=n._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=n.getPropertyOptions(r),o=t.converter,l=null!==(i=null!==(s=null==o?void 0:o.fromAttribute)&&void 0!==s?s:"function"==typeof o?o:null)&&void 0!==i?i:u.fromAttribute;this._$El=r,this[r]=l(e,t.type),this._$El=null}}requestUpdate(t,e,s){let i=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(s)):this._$Ek()}catch(i){throw e=!1,this._$Ek(),i}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}var $;v.finalized=!0,v.elementProperties=new Map,v.elementStyles=[],v.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:v}),(null!==(h=globalThis.reactiveElementVersions)&&void 0!==h?h:globalThis.reactiveElementVersions=[]).push("1.3.4");const g=globalThis.trustedTypes,f=g?g.createPolicy("lit-html",{createHTML:t=>t}):void 0,m=`lit$${(Math.random()+"").slice(9)}$`,A="?"+m,y=`<${A}>`,S=document,E=(t="")=>S.createComment(t),b=t=>null===t||"object"!=typeof t&&"function"!=typeof t,w=Array.isArray,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,P=/>/g,N=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),T=/'/g,O=/"/g,M=/^(?:script|style|textarea|title)$/i,I=(L=1,(t,...e)=>({_$litType$:L,strings:t,values:e})),k=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),R=new WeakMap,H=S.createTreeWalker(S,129,null,!1);var L;class z{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,r=0;const o=t.length-1,l=this.parts,[h,a]=((t,e)=>{const s=t.length-1,i=[];let n,r=2===e?"<svg>":"",o=C;for(let h=0;h<s;h++){const e=t[h];let s,l,a=-1,c=0;for(;c<e.length&&(o.lastIndex=c,l=o.exec(e),null!==l);)c=o.lastIndex,o===C?"!--"===l[1]?o=U:void 0!==l[1]?o=P:void 0!==l[2]?(M.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=N):void 0!==l[3]&&(o=N):o===N?">"===l[0]?(o=null!=n?n:C,a=-1):void 0===l[1]?a=-2:(a=o.lastIndex-l[2].length,s=l[1],o=void 0===l[3]?N:'"'===l[3]?O:T):o===O||o===T?o=N:o===U||o===P?o=C:(o=N,n=void 0);const d=o===N&&t[h+1].startsWith("/>")?" ":"";r+=o===C?e+y:a>=0?(i.push(s),e.slice(0,a)+"$lit$"+e.slice(a)+m+d):e+m+(-2===a?(i.push(void 0),h):d)}const l=r+(t[s]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==f?f.createHTML(l):l,i]})(t,e);if(this.el=z.createElement(h,s),H.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=H.nextNode())&&l.length<o;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(m)){const s=a[r++];if(t.push(e),void 0!==s){const t=i.getAttribute(s.toLowerCase()+"$lit$").split(m),e=/([.?@])?(.*)/.exec(s);l.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?B:"?"===e[1]?K:"@"===e[1]?V:G})}else l.push({type:6,index:n})}for(const e of t)i.removeAttribute(e)}if(M.test(i.tagName)){const t=i.textContent.split(m),e=t.length-1;if(e>0){i.textContent=g?g.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],E()),H.nextNode(),l.push({type:2,index:++n});i.append(t[e],E())}}}else if(8===i.nodeType)if(i.data===A)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(m,t+1));)l.push({type:7,index:n}),t+=m.length-1}n++}}static createElement(t,e){const s=S.createElement("template");return s.innerHTML=t,s}}function Y(t,e,s=t,i){var n,r,o,l;if(e===k)return e;let h=void 0!==i?null===(n=s._$Cl)||void 0===n?void 0:n[i]:s._$Cu;const a=b(e)?void 0:e._$litDirective$;return(null==h?void 0:h.constructor)!==a&&(null===(r=null==h?void 0:h._$AO)||void 0===r||r.call(h,!1),void 0===a?h=void 0:(h=new a(t),h._$AT(t,s,i)),void 0!==i?(null!==(o=(l=s)._$Cl)&&void 0!==o?o:l._$Cl=[])[i]=h:s._$Cu=h),void 0!==h&&(e=Y(t,h._$AS(t,e.values),h,i)),e}class j{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:s},parts:i}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:S).importNode(s,!0);H.currentNode=n;let r=H.nextNode(),o=0,l=0,h=i[0];for(;void 0!==h;){if(o===h.index){let e;2===h.type?e=new D(r,r.nextSibling,this,t):1===h.type?e=new h.ctor(r,h.name,h.strings,this,t):6===h.type&&(e=new q(r,this,t)),this.v.push(e),h=i[++l]}o!==(null==h?void 0:h.index)&&(r=H.nextNode(),o++)}return n}m(t){let e=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class D{constructor(t,e,s,i){var n;this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$C_=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$C_}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),b(t)?t===x||null==t||""===t?(this._$AH!==x&&this._$AR(),this._$AH=x):t!==this._$AH&&t!==k&&this.T(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.k(t):(t=>w(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.S(t):this.T(t)}j(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.j(t))}T(t){this._$AH!==x&&b(this._$AH)?this._$AA.nextSibling.data=t:this.k(S.createTextNode(t)),this._$AH=t}$(t){var e;const{values:s,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=z.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(s);else{const t=new j(n,this),e=t.p(this.options);t.m(s),this.k(e),this._$AH=t}}_$AC(t){let e=R.get(t.strings);return void 0===e&&R.set(t.strings,e=new z(t)),e}S(t){w(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new D(this.j(E()),this.j(E()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$C_=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class G{constructor(t,e,s,i,n){this.type=1,this._$AH=x,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=x}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const n=this.strings;let r=!1;if(void 0===n)t=Y(this,t,e,0),r=!b(t)||t!==this._$AH&&t!==k,r&&(this._$AH=t);else{const i=t;let o,l;for(t=n[0],o=0;o<n.length-1;o++)l=Y(this,i[s+o],e,o),l===k&&(l=this._$AH[o]),r||(r=!b(l)||l!==this._$AH[o]),l===x?t=x:t!==x&&(t+=(null!=l?l:"")+n[o+1]),this._$AH[o]=l}r&&!i&&this.P(t)}P(t){t===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class B extends G{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===x?void 0:t}}const W=g?g.emptyScript:"";class K extends G{constructor(){super(...arguments),this.type=4}P(t){t&&t!==x?this.element.setAttribute(this.name,W):this.element.removeAttribute(this.name)}}class V extends G{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=Y(this,t,e,0))&&void 0!==s?s:x)===k)return;const i=this._$AH,n=t===x&&i!==x||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==x&&(i===x||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class q{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const J=window.litHtmlPolyfillSupport;var F,Q;null==J||J(z,D),(null!==($=globalThis.litHtmlVersions)&&void 0!==$?$:globalThis.litHtmlVersions=[]).push("2.2.7");class Z extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{var i,n;const r=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:e;let o=r._$litPart$;if(void 0===o){const t=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new D(e.insertBefore(E(),t),t,void 0,null!=s?s:{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return k}}Z.finalized=!0,Z._$litElement$=!0,null===(F=globalThis.litElementHydrateSupport)||void 0===F||F.call(globalThis,{LitElement:Z});const X=globalThis.litElementPolyfillSupport;null==X||X({LitElement:Z}),(null!==(Q=globalThis.litElementVersions)&&void 0!==Q?Q:globalThis.litElementVersions=[]).push("3.2.2");const tt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(s){s.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(s){s.createProperty(e.key,t)}};function et(t){return(e,s)=>{return void 0!==s?(i=t,n=s,void e.constructor.createProperty(n,i)):tt(t,e);var i,n}}var st;null===(st=window.HTMLSlotElement)||void 0===st||st.prototype.assignedElements;const it=2;const nt=(t,e)=>{var s,i;const n=t._$AN;if(void 0===n)return!1;for(const r of n)null===(i=(s=r)._$AO)||void 0===i||i.call(s,e,!1),nt(r,e);return!0},rt=t=>{let e,s;do{if(void 0===(e=t._$AM))break;s=e._$AN,s.delete(t),t=e}while(0===(null==s?void 0:s.size))},ot=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(void 0===s)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),at(e)}};function lt(t){void 0!==this._$AN?(rt(this),this._$AM=t,ot(this)):this._$AM=t}function ht(t,e=!1,s=0){const i=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(i))for(let r=s;r<i.length;r++)nt(i[r],!1),rt(i[r]);else null!=i&&(nt(i,!1),rt(i));else nt(this,t)}const at=t=>{var e,s,i,n;t.type==it&&(null!==(e=(i=t)._$AP)&&void 0!==e||(i._$AP=ht),null!==(s=(n=t)._$AQ)&&void 0!==s||(n._$AQ=lt))};class ct{}const dt=new WeakMap,ut=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends class extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,s){super._$AT(t,e,s),ot(this),this.isConnected=t._$AU}_$AO(t,e=!0){var s,i;t!==this.isConnected&&(this.isConnected=t,t?null===(s=this.reconnected)||void 0===s||s.call(this):null===(i=this.disconnected)||void 0===i||i.call(this)),e&&(nt(this,t),rt(this))}setValue(t){if((t=>void 0===t.strings)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}{render(t){return x}update(t,[e]){var s;const i=e!==this.Y;return i&&void 0!==this.Y&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.Y=e,this.dt=null===(s=t.options)||void 0===s?void 0:s.host,this.rt(this.ct=t.element)),x}rt(t){var e;if("function"==typeof this.Y){const s=null!==(e=this.dt)&&void 0!==e?e:globalThis;let i=dt.get(s);void 0===i&&(i=new WeakMap,dt.set(s,i)),void 0!==i.get(this.Y)&&this.Y.call(this.dt,void 0),i.set(this.Y,t),void 0!==t&&this.Y.call(this.dt,t)}else this.Y.value=t}get lt(){var t,e,s;return"function"==typeof this.Y?null===(e=dt.get(null!==(t=this.dt)&&void 0!==t?t:globalThis))||void 0===e?void 0:e.get(this.Y):null===(s=this.Y)||void 0===s?void 0:s.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var pt=Object.defineProperty,_t=Object.getOwnPropertyDescriptor,vt=(t,e,s,i)=>{for(var n,r=i>1?void 0:i?_t(e,s):e,o=t.length-1;o>=0;o--)(n=t[o])&&(r=(i?n(e,s,r):n(r))||r);return i&&r&&pt(e,s,r),r};let $t=class extends Z{constructor(){super(),this.GISCUS_SESSION_KEY="giscus-session",this.GISCUS_DEFAULT_HOST="https://giscus.app",this.ERROR_SUGGESTION="Please consider reporting this error at https://github.com/giscus/giscus/issues/new.",this.__session="",this._iframeRef=new ct,this.messageEventHandler=this.handleMessageEvent.bind(this),this.host=this.GISCUS_DEFAULT_HOST,this.strict="0",this.reactionsEnabled="1",this.emitMetadata="0",this.inputPosition="bottom",this.theme="light",this.lang="en",this.loading="eager",this.setupSession(),window.addEventListener("message",this.messageEventHandler)}get iframeRef(){return this._iframeRef.value}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("message",this.messageEventHandler)}_formatError(t){return`[giscus] An error occurred. Error message: "${t}".`}setupSession(){const t=location.href,e=new URL(t),s=localStorage.getItem(this.GISCUS_SESSION_KEY),i=e.searchParams.get("giscus")||"";if(i)return localStorage.setItem(this.GISCUS_SESSION_KEY,JSON.stringify(i)),this.__session=i,e.searchParams.delete("giscus"),void history.replaceState(void 0,document.title,e.toString());if(s)try{this.__session=JSON.parse(s||"")||""}catch(n){this.__session="",localStorage.removeItem(this.GISCUS_SESSION_KEY),console.warn(`${this._formatError(null==n?void 0:n.message)} Session has been cleared.`)}}handleMessageEvent(t){if(t.origin!==this.host)return;const{data:e}=t;if("object"!=typeof e||!e.giscus||(this.iframeRef&&e.giscus.resizeHeight&&(this.iframeRef.style.height=`${e.giscus.resizeHeight}px`),!e.giscus.error))return;const s=e.giscus.error;if(s.includes("Bad credentials")||s.includes("Invalid state value")){if(null!==localStorage.getItem(this.GISCUS_SESSION_KEY))return localStorage.removeItem(this.GISCUS_SESSION_KEY),this.__session="",console.warn(`${this._formatError(s)} Session has been cleared.`),void this.update(new Map);console.error(`${this._formatError(s)} No session is stored initially. ${this.ERROR_SUGGESTION}`)}s.includes("Discussion not found")?console.warn(`[giscus] ${s}. A new discussion will be created if a comment/reaction is submitted.`):console.error(`${this._formatError(s)} ${this.ERROR_SUGGESTION}`)}sendMessage(t){var e,s;null==(s=null==(e=this.iframeRef)?void 0:e.contentWindow)||s.postMessage({giscus:t},this.host)}updateConfig(){const t={setConfig:{repo:this.repo,repoId:this.repoId,category:this.category,categoryId:this.categoryId,term:this.getTerm(),number:+this.getNumber(),strict:"1"===this.strict,reactionsEnabled:"1"===this.reactionsEnabled,emitMetadata:"1"===this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,lang:this.lang}};this.sendMessage(t)}requestUpdate(t,e,s){this.hasUpdated&&"host"!==t?this.updateConfig():super.requestUpdate(t,e,s)}getMetaContent(t,e=!1){const s=e?`meta[property='og:${t}'],`:"",i=document.querySelector(s+`meta[name='${t}']`);return i?i.content:""}_getCleanedUrl(){const t=new URL(location.href);return t.searchParams.delete("giscus"),t}getTerm(){switch(this.mapping){case"url":return`${this._getCleanedUrl()}`;case"title":return document.title;case"og:title":return this.getMetaContent("title",!0);case"specific":return this.term||"";case"number":return"";default:return location.pathname.length<2?"index":location.pathname.substring(1).replace(/\.\w+$/,"")}}getNumber(){return"number"===this.mapping&&this.term||""}getIframeSrc(){const t=this._getCleanedUrl().toString(),e=`${t}${this.id?"#"+this.id:""}`,s=this.getMetaContent("description",!0),i=this.getMetaContent("giscus:backlink")||t,n={origin:e,session:this.__session,repo:this.repo,repoId:this.repoId||"",category:this.category||"",categoryId:this.categoryId||"",term:this.getTerm(),number:this.getNumber(),strict:this.strict,reactionsEnabled:this.reactionsEnabled,emitMetadata:this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,description:s,backLink:i},r=this.lang?`/${this.lang}`:"",o=new URLSearchParams(n);return`${this.host}${r}/widget?${o}`}render(){return I`
      <iframe
        title="Comments"
        scrolling="no"
        ${ut(this._iframeRef)}
        src=${this.getIframeSrc()}
        loading=${this.loading}
        part="iframe"
      ></iframe>
    `}};$t.styles=((t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new o(s,t,n)})`
    :host,
    iframe {
      width: 100%;
      border: none;
      color-scheme: normal;
      min-height: 150px;
    }
  `,vt([et({reflect:!0})],$t.prototype,"host",2),vt([et({reflect:!0})],$t.prototype,"repo",2),vt([et({reflect:!0})],$t.prototype,"repoId",2),vt([et({reflect:!0})],$t.prototype,"category",2),vt([et({reflect:!0})],$t.prototype,"categoryId",2),vt([et({reflect:!0})],$t.prototype,"mapping",2),vt([et({reflect:!0})],$t.prototype,"term",2),vt([et({reflect:!0})],$t.prototype,"strict",2),vt([et({reflect:!0})],$t.prototype,"reactionsEnabled",2),vt([et({reflect:!0})],$t.prototype,"emitMetadata",2),vt([et({reflect:!0})],$t.prototype,"inputPosition",2),vt([et({reflect:!0})],$t.prototype,"theme",2),vt([et({reflect:!0})],$t.prototype,"lang",2),vt([et({reflect:!0})],$t.prototype,"loading",2),$t=vt([(t=>e=>{return"function"==typeof e?(s=t,i=e,window.customElements.define(s,i),i):((t,e)=>{const{kind:s,elements:i}=e;return{kind:s,elements:i,finisher(e){window.customElements.define(t,e)}}})(t,e);var s,i})("giscus-widget")],$t)}}]);