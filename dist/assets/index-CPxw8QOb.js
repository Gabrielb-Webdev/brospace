var Oe=Object.defineProperty,Re=Object.defineProperties;var Ae=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var ne=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable;var re=(e,s,a)=>s in e?Oe(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a,m=(e,s)=>{for(var a in s||(s={}))ne.call(s,a)&&re(e,a,s[a]);if(q)for(var a of q(s))ie.call(s,a)&&re(e,a,s[a]);return e},j=(e,s)=>Re(e,Ae(s));var oe=(e,s)=>{var a={};for(var n in e)ne.call(e,n)&&s.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&q)for(var n of q(e))s.indexOf(n)<0&&ie.call(e,n)&&(a[n]=e[n]);return a};var Me=(e,s)=>()=>(s||e((s={exports:{}}).exports,s),s.exports);var P=(e,s,a)=>new Promise((n,i)=>{var r=l=>{try{d(a.next(l))}catch(c){i(c)}},o=l=>{try{d(a.throw(l))}catch(c){i(c)}},d=l=>l.done?n(l.value):Promise.resolve(l.value).then(r,o);d((a=a.apply(e,s)).next())});import{r as h,a as Fe,g as Ue,R as ze,O as pe,u as He,L as xe,b as qe,c as Be,d as Je,e as E,N as le,B as We}from"./react-vendor-BjyzLYM9.js";var Zs=Me(D=>{(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=a(i);fetch(i.href,r)}})();var fe={exports:{}},K={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ke=h,Ve=Symbol.for("react.element"),Ge=Symbol.for("react.fragment"),Ze=Object.prototype.hasOwnProperty,Ye=Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Xe={key:!0,ref:!0,__self:!0,__source:!0};function ge(e,s,a){var n,i={},r=null,o=null;a!==void 0&&(r=""+a),s.key!==void 0&&(r=""+s.key),s.ref!==void 0&&(o=s.ref);for(n in s)Ze.call(s,n)&&!Xe.hasOwnProperty(n)&&(i[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps,s)i[n]===void 0&&(i[n]=s[n]);return{$$typeof:Ve,type:e,key:r,ref:o,props:i,_owner:Ye.current}}K.Fragment=Ge;K.jsx=ge;K.jsxs=ge;fe.exports=K;var t=fe.exports,ye,ce=Fe;ye=ce.createRoot,ce.hydrateRoot;let Qe={data:""},et=e=>{if(typeof window=="object"){let s=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return s.nonce=window.__nonce__,s.parentNode||(e||document.head).appendChild(s),s.firstChild}return e||Qe},tt=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,st=/\/\*[^]*?\*\/|  +/g,de=/\n+/g,I=(e,s)=>{let a="",n="",i="";for(let r in e){let o=e[r];r[0]=="@"?r[1]=="i"?a=r+" "+o+";":n+=r[1]=="f"?I(o,r):r+"{"+I(o,r[1]=="k"?"":s)+"}":typeof o=="object"?n+=I(o,s?s.replace(/([^,])+/g,d=>r.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,d):d?d+" "+l:l)):r):o!=null&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=I.p?I.p(r,o):r+":"+o+";")}return a+(s&&i?s+"{"+i+"}":i)+n},L={},ve=e=>{if(typeof e=="object"){let s="";for(let a in e)s+=a+ve(e[a]);return s}return e},at=(e,s,a,n,i)=>{let r=ve(e),o=L[r]||(L[r]=(l=>{let c=0,u=11;for(;c<l.length;)u=101*u+l.charCodeAt(c++)>>>0;return"go"+u})(r));if(!L[o]){let l=r!==e?e:(c=>{let u,p,f=[{}];for(;u=tt.exec(c.replace(st,""));)u[4]?f.shift():u[3]?(p=u[3].replace(de," ").trim(),f.unshift(f[0][p]=f[0][p]||{})):f[0][u[1]]=u[2].replace(de," ").trim();return f[0]})(e);L[o]=I(i?{["@keyframes "+o]:l}:l,a?"":"."+o)}let d=a&&L.g?L.g:null;return a&&(L.g=L[o]),((l,c,u,p)=>{p?c.data=c.data.replace(p,l):c.data.indexOf(l)===-1&&(c.data=u?l+c.data:c.data+l)})(L[o],s,n,d),o},rt=(e,s,a)=>e.reduce((n,i,r)=>{let o=s[r];if(o&&o.call){let d=o(a),l=d&&d.props&&d.props.className||/^go/.test(d)&&d;o=l?"."+l:d&&typeof d=="object"?d.props?"":I(d,""):d===!1?"":d}return n+i+(o==null?"":o)},"");function V(e){let s=this||{},a=e.call?e(s.p):e;return at(a.unshift?a.raw?rt(a,[].slice.call(arguments,1),s.p):a.reduce((n,i)=>Object.assign(n,i&&i.call?i(s.p):i),{}):a,et(s.target),s.g,s.o,s.k)}let je,Q,ee;V.bind({g:1});let T=V.bind({k:1});function nt(e,s,a,n){I.p=s,je=e,Q=a,ee=n}function _(e,s){let a=this||{};return function(){let n=arguments;function i(r,o){let d=Object.assign({},r),l=d.className||i.className;a.p=Object.assign({theme:Q&&Q()},d),a.o=/ *go\d+/.test(l),d.className=V.apply(a,n)+(l?" "+l:"");let c=e;return e[0]&&(c=d.as||e,delete d.as),ee&&c[0]&&ee(d),je(c,d)}return i}}var it=e=>typeof e=="function",W=(e,s)=>it(e)?e(s):e,ot=(()=>{let e=0;return()=>(++e).toString()})(),be=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let s=matchMedia("(prefers-reduced-motion: reduce)");e=!s||s.matches}return e}})(),lt=20,ae="default",Ne=(e,s)=>{let{toastLimit:a}=e.settings;switch(s.type){case 0:return j(m({},e),{toasts:[s.toast,...e.toasts].slice(0,a)});case 1:return j(m({},e),{toasts:e.toasts.map(o=>o.id===s.toast.id?m(m({},o),s.toast):o)});case 2:let{toast:n}=s;return Ne(e,{type:e.toasts.find(o=>o.id===n.id)?1:0,toast:n});case 3:let{toastId:i}=s;return j(m({},e),{toasts:e.toasts.map(o=>o.id===i||i===void 0?j(m({},o),{dismissed:!0,visible:!1}):o)});case 4:return s.toastId===void 0?j(m({},e),{toasts:[]}):j(m({},e),{toasts:e.toasts.filter(o=>o.id!==s.toastId)});case 5:return j(m({},e),{pausedAt:s.time});case 6:let r=s.time-(e.pausedAt||0);return j(m({},e),{pausedAt:void 0,toasts:e.toasts.map(o=>j(m({},o),{pauseDuration:o.pauseDuration+r}))})}},J=[],we={toasts:[],pausedAt:void 0,settings:{toastLimit:lt}},C={},ke=(e,s=ae)=>{C[s]=Ne(C[s]||we,e),J.forEach(([a,n])=>{a===s&&n(C[s])})},Se=e=>Object.keys(C).forEach(s=>ke(e,s)),ct=e=>Object.keys(C).find(s=>C[s].toasts.some(a=>a.id===e)),G=(e=ae)=>s=>{ke(s,e)},dt={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},mt=(e={},s=ae)=>{let[a,n]=h.useState(C[s]||we),i=h.useRef(C[s]);h.useEffect(()=>(i.current!==C[s]&&n(C[s]),J.push([s,n]),()=>{let o=J.findIndex(([d])=>d===s);o>-1&&J.splice(o,1)}),[s]);let r=a.toasts.map(o=>{var d,l,c;return j(m(m(m({},e),e[o.type]),o),{removeDelay:o.removeDelay||((d=e[o.type])==null?void 0:d.removeDelay)||(e==null?void 0:e.removeDelay),duration:o.duration||((l=e[o.type])==null?void 0:l.duration)||(e==null?void 0:e.duration)||dt[o.type],style:m(m(m({},e.style),(c=e[o.type])==null?void 0:c.style),o.style)})});return j(m({},a),{toasts:r})},ut=(e,s="blank",a)=>j(m({createdAt:Date.now(),visible:!0,dismissed:!1,type:s,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0},a),{id:(a==null?void 0:a.id)||ot()}),z=e=>(s,a)=>{let n=ut(s,e,a);return G(n.toasterId||ct(n.id))({type:2,toast:n}),n.id},S=(e,s)=>z("blank")(e,s);S.error=z("error");S.success=z("success");S.loading=z("loading");S.custom=z("custom");S.dismiss=(e,s)=>{let a={type:3,toastId:e};s?G(s)(a):Se(a)};S.dismissAll=e=>S.dismiss(void 0,e);S.remove=(e,s)=>{let a={type:4,toastId:e};s?G(s)(a):Se(a)};S.removeAll=e=>S.remove(void 0,e);S.promise=(e,s,a)=>{let n=S.loading(s.loading,m(m({},a),a==null?void 0:a.loading));return typeof e=="function"&&(e=e()),e.then(i=>{let r=s.success?W(s.success,i):void 0;return r?S.success(r,m(m({id:n},a),a==null?void 0:a.success)):S.dismiss(n),i}).catch(i=>{let r=s.error?W(s.error,i):void 0;r?S.error(r,m(m({id:n},a),a==null?void 0:a.error)):S.dismiss(n)}),e};var ht=1e3,pt=(e,s="default")=>{let{toasts:a,pausedAt:n}=mt(e,s),i=h.useRef(new Map).current,r=h.useCallback((p,f=ht)=>{if(i.has(p))return;let x=setTimeout(()=>{i.delete(p),o({type:4,toastId:p})},f);i.set(p,x)},[]);h.useEffect(()=>{if(n)return;let p=Date.now(),f=a.map(x=>{if(x.duration===1/0)return;let b=(x.duration||0)+x.pauseDuration-(p-x.createdAt);if(b<0){x.visible&&S.dismiss(x.id);return}return setTimeout(()=>S.dismiss(x.id,s),b)});return()=>{f.forEach(x=>x&&clearTimeout(x))}},[a,n,s]);let o=h.useCallback(G(s),[s]),d=h.useCallback(()=>{o({type:5,time:Date.now()})},[o]),l=h.useCallback((p,f)=>{o({type:1,toast:{id:p,height:f}})},[o]),c=h.useCallback(()=>{n&&o({type:6,time:Date.now()})},[n,o]),u=h.useCallback((p,f)=>{let{reverseOrder:x=!1,gutter:b=8,defaultPosition:v}=f||{},y=a.filter(N=>(N.position||v)===(p.position||v)&&N.height),k=y.findIndex(N=>N.id===p.id),g=y.filter((N,R)=>R<k&&N.visible).length;return y.filter(N=>N.visible).slice(...x?[g+1]:[0,g]).reduce((N,R)=>N+(R.height||0)+b,0)},[a]);return h.useEffect(()=>{a.forEach(p=>{if(p.dismissed)r(p.id,p.removeDelay);else{let f=i.get(p.id);f&&(clearTimeout(f),i.delete(p.id))}})},[a,r]),{toasts:a,handlers:{updateHeight:l,startPause:d,endPause:c,calculateOffset:u}}},xt=T`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,ft=T`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,gt=T`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,yt=_("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${xt} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${ft} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${gt} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,vt=T`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,jt=_("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${vt} 1s linear infinite;
`,bt=T`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Nt=T`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,wt=_("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${bt} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Nt} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,kt=_("div")`
  position: absolute;
`,St=_("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Et=T`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ct=_("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Et} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Pt=({toast:e})=>{let{icon:s,type:a,iconTheme:n}=e;return s!==void 0?typeof s=="string"?h.createElement(Ct,null,s):s:a==="blank"?null:h.createElement(St,null,h.createElement(jt,m({},n)),a!=="loading"&&h.createElement(kt,null,a==="error"?h.createElement(yt,m({},n)):h.createElement(wt,m({},n))))},Lt=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Tt=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,It="0%{opacity:0;} 100%{opacity:1;}",_t="0%{opacity:1;} 100%{opacity:0;}",$t=_("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Dt=_("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ot=(e,s)=>{let a=e.includes("top")?1:-1,[n,i]=be()?[It,_t]:[Lt(a),Tt(a)];return{animation:s?`${T(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${T(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Rt=h.memo(({toast:e,position:s,style:a,children:n})=>{let i=e.height?Ot(e.position||s||"top-center",e.visible):{opacity:0},r=h.createElement(Pt,{toast:e}),o=h.createElement(Dt,m({},e.ariaProps),W(e.message,e));return h.createElement($t,{className:e.className,style:m(m(m({},i),a),e.style)},typeof n=="function"?n({icon:r,message:o}):h.createElement(h.Fragment,null,r,o))});nt(h.createElement);var At=({id:e,className:s,style:a,onHeightUpdate:n,children:i})=>{let r=h.useCallback(o=>{if(o){let d=()=>{let l=o.getBoundingClientRect().height;n(e,l)};d(),new MutationObserver(d).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[e,n]);return h.createElement("div",{ref:r,className:s,style:a},i)},Mt=(e,s)=>{let a=e.includes("top"),n=a?{top:0}:{bottom:0},i=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return m(m({left:0,right:0,display:"flex",position:"absolute",transition:be()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${s*(a?1:-1)}px)`},n),i)},Ft=V`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,B=16,Ut=({reverseOrder:e,position:s="top-center",toastOptions:a,gutter:n,children:i,toasterId:r,containerStyle:o,containerClassName:d})=>{let{toasts:l,handlers:c}=pt(a,r);return h.createElement("div",{"data-rht-toaster":r||"",style:m({position:"fixed",zIndex:9999,top:B,left:B,right:B,bottom:B,pointerEvents:"none"},o),className:d,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(u=>{let p=u.position||s,f=c.calculateOffset(u,{reverseOrder:e,gutter:n,defaultPosition:s}),x=Mt(p,f);return h.createElement(At,{id:u.id,key:u.id,onHeightUpdate:c.updateHeight,className:u.visible?Ft:"",style:x},u.type==="custom"?W(u.message,u):i?i(u):h.createElement(Rt,{toast:u,position:p}))}))},F=S;const zt={},me=e=>{let s;const a=new Set,n=(u,p)=>{const f=typeof u=="function"?u(s):u;if(!Object.is(f,s)){const x=s;s=(p!=null?p:typeof f!="object"||f===null)?f:Object.assign({},s,f),a.forEach(b=>b(s,x))}},i=()=>s,l={setState:n,getState:i,getInitialState:()=>c,subscribe:u=>(a.add(u),()=>a.delete(u)),destroy:()=>{(zt?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),a.clear()}},c=s=e(n,i,l);return l},Ht=e=>e?me(e):me;var Ee={exports:{}},Ce={},Pe={exports:{}},Le={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O=h;function qt(e,s){return e===s&&(e!==0||1/e===1/s)||e!==e&&s!==s}var Bt=typeof Object.is=="function"?Object.is:qt,Jt=O.useState,Wt=O.useEffect,Kt=O.useLayoutEffect,Vt=O.useDebugValue;function Gt(e,s){var a=s(),n=Jt({inst:{value:a,getSnapshot:s}}),i=n[0].inst,r=n[1];return Kt(function(){i.value=a,i.getSnapshot=s,X(i)&&r({inst:i})},[e,a,s]),Wt(function(){return X(i)&&r({inst:i}),e(function(){X(i)&&r({inst:i})})},[e]),Vt(a),a}function X(e){var s=e.getSnapshot;e=e.value;try{var a=s();return!Bt(e,a)}catch(n){return!0}}function Zt(e,s){return s()}var Yt=typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"?Zt:Gt;Le.useSyncExternalStore=O.useSyncExternalStore!==void 0?O.useSyncExternalStore:Yt;Pe.exports=Le;var Xt=Pe.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z=h,Qt=Xt;function es(e,s){return e===s&&(e!==0||1/e===1/s)||e!==e&&s!==s}var ts=typeof Object.is=="function"?Object.is:es,ss=Qt.useSyncExternalStore,as=Z.useRef,rs=Z.useEffect,ns=Z.useMemo,is=Z.useDebugValue;Ce.useSyncExternalStoreWithSelector=function(e,s,a,n,i){var r=as(null);if(r.current===null){var o={hasValue:!1,value:null};r.current=o}else o=r.current;r=ns(function(){function l(x){if(!c){if(c=!0,u=x,x=n(x),i!==void 0&&o.hasValue){var b=o.value;if(i(b,x))return p=b}return p=x}if(b=p,ts(u,x))return b;var v=n(x);return i!==void 0&&i(b,v)?(u=x,b):(u=x,p=v)}var c=!1,u,p,f=a===void 0?null:a;return[function(){return l(s())},f===null?void 0:function(){return l(f())}]},[s,a,n,i]);var d=ss(e,r[0],r[1]);return rs(function(){o.hasValue=!0,o.value=d},[d]),is(d),d};Ee.exports=Ce;var os=Ee.exports;const ls=Ue(os),Te={},{useDebugValue:cs}=ze,{useSyncExternalStoreWithSelector:ds}=ls;let ue=!1;const ms=e=>e;function us(e,s=ms,a){(Te?"production":void 0)!=="production"&&a&&!ue&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),ue=!0);const n=ds(e.subscribe,e.getState,e.getServerState||e.getInitialState,s,a);return cs(n),n}const he=e=>{(Te?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const s=typeof e=="function"?Ht(e):e,a=(n,i)=>us(s,n,i);return Object.assign(a,s),a},Ie=e=>e?he(e):he,hs={};function ps(e,s){let a;try{a=e()}catch(i){return}return{getItem:i=>{var r;const o=l=>l===null?null:JSON.parse(l,void 0),d=(r=a.getItem(i))!=null?r:null;return d instanceof Promise?d.then(o):o(d)},setItem:(i,r)=>a.setItem(i,JSON.stringify(r,void 0)),removeItem:i=>a.removeItem(i)}}const U=e=>s=>{try{const a=e(s);return a instanceof Promise?a:{then(n){return U(n)(a)},catch(n){return this}}}catch(a){return{then(n){return this},catch(n){return U(n)(a)}}}},xs=(e,s)=>(a,n,i)=>{let r=m({getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:y=>y,version:0,merge:(y,k)=>m(m({},k),y)},s),o=!1;const d=new Set,l=new Set;let c;try{c=r.getStorage()}catch(y){}if(!c)return e((...y)=>{console.warn(`[zustand persist middleware] Unable to update item '${r.name}', the given storage is currently unavailable.`),a(...y)},n,i);const u=U(r.serialize),p=()=>{const y=r.partialize(m({},n()));let k;const g=u({state:y,version:r.version}).then(N=>c.setItem(r.name,N)).catch(N=>{k=N});if(k)throw k;return g},f=i.setState;i.setState=(y,k)=>{f(y,k),p()};const x=e((...y)=>{a(...y),p()},n,i);let b;const v=()=>{var y;if(!c)return;o=!1,d.forEach(g=>g(n()));const k=((y=r.onRehydrateStorage)==null?void 0:y.call(r,n()))||void 0;return U(c.getItem.bind(c))(r.name).then(g=>{if(g)return r.deserialize(g)}).then(g=>{if(g)if(typeof g.version=="number"&&g.version!==r.version){if(r.migrate)return r.migrate(g.state,g.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return g.state}).then(g=>{var N;return b=r.merge(g,(N=n())!=null?N:x),a(b,!0),p()}).then(()=>{k==null||k(b,void 0),o=!0,l.forEach(g=>g(b))}).catch(g=>{k==null||k(void 0,g)})};return i.persist={setOptions:y=>{r=m(m({},r),y),y.getStorage&&(c=y.getStorage())},clearStorage:()=>{c==null||c.removeItem(r.name)},getOptions:()=>r,rehydrate:()=>v(),hasHydrated:()=>o,onHydrate:y=>(d.add(y),()=>{d.delete(y)}),onFinishHydration:y=>(l.add(y),()=>{l.delete(y)})},v(),b||x},fs=(e,s)=>(a,n,i)=>{let r=m({storage:ps(()=>localStorage),partialize:v=>v,version:0,merge:(v,y)=>m(m({},y),v)},s),o=!1;const d=new Set,l=new Set;let c=r.storage;if(!c)return e((...v)=>{console.warn(`[zustand persist middleware] Unable to update item '${r.name}', the given storage is currently unavailable.`),a(...v)},n,i);const u=()=>{const v=r.partialize(m({},n()));return c.setItem(r.name,{state:v,version:r.version})},p=i.setState;i.setState=(v,y)=>{p(v,y),u()};const f=e((...v)=>{a(...v),u()},n,i);i.getInitialState=()=>f;let x;const b=()=>{var v,y;if(!c)return;o=!1,d.forEach(g=>{var N;return g((N=n())!=null?N:f)});const k=((y=r.onRehydrateStorage)==null?void 0:y.call(r,(v=n())!=null?v:f))||void 0;return U(c.getItem.bind(c))(r.name).then(g=>{if(g)if(typeof g.version=="number"&&g.version!==r.version){if(r.migrate)return[!0,r.migrate(g.state,g.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,g.state];return[!1,void 0]}).then(g=>{var N;const[R,De]=g;if(x=r.merge(De,(N=n())!=null?N:f),a(x,!0),R)return u()}).then(()=>{k==null||k(x,void 0),x=n(),o=!0,l.forEach(g=>g(x))}).catch(g=>{k==null||k(void 0,g)})};return i.persist={setOptions:v=>{r=m(m({},r),v),v.storage&&(c=v.storage)},clearStorage:()=>{c==null||c.removeItem(r.name)},getOptions:()=>r,rehydrate:()=>b(),hasHydrated:()=>o,onHydrate:v=>(d.add(v),()=>{d.delete(v)}),onFinishHydration:v=>(l.add(v),()=>{l.delete(v)})},r.skipHydration||b(),x||f},gs=(e,s)=>"getStorage"in s||"serialize"in s||"deserialize"in s?((hs?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),xs(e,s)):fs(e,s),ys=gs,$="https://darksalmon-loris-457396.hostingersite.com/api",A={AUTH_LOGIN:`${$}/auth.php?action=login`,AUTH_REGISTER:`${$}/auth.php?action=register`,AUTH_USER:`${$}/auth.php`,PROJECTS:`${$}/projects.php`,TASKS:`${$}/tasks.php`,INIT_DB:`${$}/init-db.php`};function M(a){return P(this,arguments,function*(e,s={}){try{const n=yield fetch(e,j(m({},s),{headers:m({"Content-Type":"application/json"},s.headers)})),i=yield n.json();if(!n.ok)throw new Error(i.error||"Request failed");return i}catch(n){throw console.error("API Request failed:",n),n}})}const H=Ie()(ys(e=>({user:null,isLoading:!1,setUser:s=>e({user:s}),login:(s,a)=>P(D,null,function*(){e({isLoading:!0});try{const n=yield M(A.AUTH_LOGIN,{method:"POST",body:JSON.stringify({email:s,password:a})});if(n.success&&n.user)e({user:n.user,isLoading:!1});else throw new Error("Login failed")}catch(n){throw e({isLoading:!1}),n}}),logout:()=>e({user:null})}),{name:"brospace-auth"}));function vs(){return t.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-950 via-dark-900 to-primary-950 px-4",children:t.jsxs("div",{className:"w-full max-w-md",children:[t.jsxs("div",{className:"text-center mb-8",children:[t.jsx("h1",{className:"text-4xl font-bold text-white mb-2",children:"Brospace"}),t.jsx("p",{className:"text-dark-400",children:"by BrodevLab"})]}),t.jsx(pe,{})]})})}/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var js={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),w=(e,s)=>{const a=h.forwardRef((p,u)=>{var f=p,{color:n="currentColor",size:i=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:d="",children:l}=f,c=oe(f,["color","size","strokeWidth","absoluteStrokeWidth","className","children"]);return h.createElement("svg",m(j(m({ref:u},js),{width:i,height:i,stroke:n,strokeWidth:o?Number(r)*24/Number(i):r,className:["lucide",`lucide-${bs(e)}`,d].join(" ")}),c),[...s.map(([x,b])=>h.createElement(x,b)),...Array.isArray(l)?l:[l]])});return a.displayName=`${e}`,a};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ns=w("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ws=w("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ks=w("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=w("CheckSquare",[["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}],["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",key:"1jnkn4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=w("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ss=w("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Es=w("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cs=w("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=w("FolderKanban",[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ps=w("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ls=w("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=w("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Is=w("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _s=w("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $s=w("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ds=w("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Os=w("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rs=w("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $e=w("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const As=w("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Ms(){const{user:e,logout:s}=H(),a=He(),n=[{name:"Dashboard",href:"/",icon:Ps},{name:"Projects",href:"/projects",icon:se},{name:"Tasks",href:"/tasks",icon:te},{name:"Team",href:"/team",icon:$e},{name:"Settings",href:"/settings",icon:Ds}],i=r=>r==="/"?a.pathname==="/":a.pathname.startsWith(r);return t.jsxs("div",{className:"min-h-screen bg-dark-950",children:[t.jsx("aside",{className:"fixed inset-y-0 left-0 w-64 bg-dark-900 border-r border-dark-800",children:t.jsxs("div",{className:"flex flex-col h-full",children:[t.jsxs("div",{className:"p-6 border-b border-dark-800",children:[t.jsx("h1",{className:"text-2xl font-bold text-white",children:"Brospace"}),t.jsx("p",{className:"text-xs text-dark-400 mt-1",children:"by BrodevLab"})]}),t.jsx("nav",{className:"flex-1 p-4 space-y-1",children:n.map(r=>{const o=r.icon;return t.jsxs(xe,{to:r.href,className:`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${i(r.href)?"bg-primary-600 text-white":"text-dark-300 hover:bg-dark-800 hover:text-white"}`,children:[t.jsx(o,{className:"w-5 h-5"}),t.jsx("span",{className:"font-medium",children:r.name})]},r.name)})}),t.jsxs("div",{className:"p-4 border-t border-dark-800",children:[t.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[t.jsx("div",{className:"w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-semibold",children:e==null?void 0:e.name.charAt(0).toUpperCase()}),t.jsxs("div",{className:"flex-1 min-w-0",children:[t.jsx("p",{className:"text-sm font-medium text-white truncate",children:e==null?void 0:e.name}),t.jsx("p",{className:"text-xs text-dark-400 truncate",children:e==null?void 0:e.email})]})]}),t.jsxs("button",{onClick:s,className:"w-full flex items-center gap-2 px-4 py-2 text-dark-300 hover:text-white hover:bg-dark-800 rounded-lg transition-colors",children:[t.jsx(Ts,{className:"w-4 h-4"}),t.jsx("span",{className:"text-sm",children:"Logout"})]})]})]})}),t.jsxs("div",{className:"ml-64",children:[t.jsxs("header",{className:"h-16 bg-dark-900 border-b border-dark-800 flex items-center justify-between px-6",children:[t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx(_e,{className:"w-5 h-5 text-dark-400"}),t.jsx("span",{className:"text-sm text-dark-300",children:new Date().toLocaleDateString("es-ES",{weekday:"long",year:"numeric",month:"long",day:"numeric"})})]}),t.jsx("div",{className:"flex items-center gap-4",children:t.jsxs("button",{className:"relative p-2 text-dark-400 hover:text-white transition-colors",children:[t.jsx(ws,{className:"w-5 h-5"}),t.jsx("span",{className:"absolute top-1 right-1 w-2 h-2 bg-primary-500 rounded-full"})]})})]}),t.jsx("main",{className:"p-6",children:t.jsx(pe,{})})]})]})}function Fs(){const[e,s]=h.useState(""),[a,n]=h.useState(""),[i,r]=h.useState(!1),{login:o}=H(),d=qe(),l=c=>P(this,null,function*(){c.preventDefault(),r(!0);try{e&&a?(yield o(e,a),F.success("Welcome to Brospace!"),d("/")):F.error("Please fill in all fields")}catch(u){F.error("Login failed. Please try again.")}finally{r(!1)}});return t.jsxs("div",{className:"card animate-fade-in",children:[t.jsxs("div",{className:"text-center mb-6",children:[t.jsx("h2",{className:"text-2xl font-bold text-white mb-2",children:"Welcome Back"}),t.jsx("p",{className:"text-dark-400",children:"Sign in to your account"})]}),t.jsxs("form",{onSubmit:l,className:"space-y-4",children:[t.jsxs("div",{children:[t.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-dark-300 mb-2",children:"Email"}),t.jsx("input",{id:"email",type:"email",value:e,onChange:c=>s(c.target.value),className:"input w-full",placeholder:"your@email.com",required:!0})]}),t.jsxs("div",{children:[t.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-dark-300 mb-2",children:"Password"}),t.jsx("input",{id:"password",type:"password",value:a,onChange:c=>n(c.target.value),className:"input w-full",placeholder:"••••••••",required:!0})]}),t.jsx("button",{type:"submit",disabled:i,className:"btn-primary w-full flex items-center justify-center gap-2",children:i?t.jsx("span",{children:"Loading..."}):t.jsxs(t.Fragment,{children:[t.jsx(Ls,{className:"w-4 h-4"}),t.jsx("span",{children:"Sign In"})]})})]}),t.jsx("div",{className:"mt-6 text-center text-sm text-dark-400",children:"Demo: Use any email and password to login"})]})}const Y=Ie((e,s)=>({projects:[],tasks:[],timeEntries:[],comments:[],activeTimer:null,isLoading:!1,fetchProjects:()=>P(D,null,function*(){e({isLoading:!0});try{const a=yield M(A.PROJECTS);e({projects:a||[],isLoading:!1})}catch(a){console.error("Failed to fetch projects:",a),e({isLoading:!1})}}),setProjects:a=>e({projects:a}),addProject:a=>P(D,null,function*(){e({isLoading:!0});try{const n=yield M(A.PROJECTS,{method:"POST",body:JSON.stringify(a)});e(i=>({projects:[...i.projects,n],isLoading:!1}))}catch(n){throw console.error("Failed to create project:",n),e({isLoading:!1}),n}}),updateProject:(a,n)=>P(D,null,function*(){e({isLoading:!0});try{yield M(`${A.PROJECTS}/${a}`,{method:"PUT",body:JSON.stringify(n)}),e(i=>({projects:i.projects.map(r=>r.id===a?j(m(m({},r),n),{updatedAt:new Date}):r),isLoading:!1}))}catch(i){throw console.error("Failed to update project:",i),e({isLoading:!1}),i}}),deleteProject:a=>P(D,null,function*(){e({isLoading:!0});try{yield M(`${A.PROJECTS}/${a}`,{method:"DELETE"}),e(n=>({projects:n.projects.filter(i=>i.id!==a),isLoading:!1}))}catch(n){throw console.error("Failed to delete project:",n),e({isLoading:!1}),n}}),setTasks:a=>e({tasks:a}),addTask:a=>e(n=>({tasks:[...n.tasks,a]})),updateTask:(a,n)=>e(i=>({tasks:i.tasks.map(r=>r.id===a?j(m(m({},r),n),{updatedAt:new Date}):r)})),deleteTask:a=>e(n=>({tasks:n.tasks.filter(i=>i.id!==a)})),startTimer:(a,n)=>{const i={id:crypto.randomUUID(),taskId:a,userId:n,startTime:new Date};e({activeTimer:i})},stopTimer:()=>{const{activeTimer:a}=s();if(a){const n=new Date,i=Math.floor((n.getTime()-a.startTime.getTime())/6e4),r=j(m({},a),{endTime:n,duration:i});e(o=>({timeEntries:[...o.timeEntries,r],activeTimer:null}))}},addComment:a=>e(n=>({comments:[...n.comments,a]})),clearStore:()=>e({projects:[],tasks:[],timeEntries:[],comments:[],activeTimer:null})}));function Us(){const{projects:e,tasks:s,fetchProjects:a}=Y(),{user:n}=H();h.useEffect(()=>{a()},[]);const i=[{name:"Active Projects",value:e.filter(r=>r.status==="active").length,icon:se,color:"text-primary-500",bg:"bg-primary-500/10"},{name:"Tasks In Progress",value:s.filter(r=>r.status==="in-progress").length,icon:te,color:"text-blue-500",bg:"bg-blue-500/10"},{name:"Team Members",value:5,icon:$e,color:"text-green-500",bg:"bg-green-500/10"},{name:"Hours Tracked",value:"24.5",icon:_e,color:"text-yellow-500",bg:"bg-yellow-500/10"}];return t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{children:[t.jsxs("h1",{className:"text-3xl font-bold text-white mb-2",children:["Welcome back, ",n==null?void 0:n.name,"! 👋"]}),t.jsx("p",{className:"text-dark-400",children:"Here's what's happening with your projects today."})]}),t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:i.map(r=>{const o=r.icon;return t.jsx("div",{className:"card",children:t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{children:[t.jsx("p",{className:"text-dark-400 text-sm mb-1",children:r.name}),t.jsx("p",{className:"text-3xl font-bold text-white",children:r.value})]}),t.jsx("div",{className:`${r.bg} p-3 rounded-lg`,children:t.jsx(o,{className:`w-6 h-6 ${r.color}`})})]})},r.name)})}),t.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"flex items-center justify-between mb-4",children:[t.jsx("h2",{className:"text-xl font-semibold text-white",children:"Recent Projects"}),t.jsx(Os,{className:"w-5 h-5 text-primary-500"})]}),e.length===0?t.jsxs("div",{className:"text-center py-8",children:[t.jsx(se,{className:"w-12 h-12 text-dark-600 mx-auto mb-3"}),t.jsx("p",{className:"text-dark-400 mb-4",children:"No projects yet"}),t.jsx("button",{className:"btn-primary",children:"Create First Project"})]}):t.jsx("div",{className:"space-y-3",children:e.slice(0,5).map(r=>t.jsxs("div",{className:"flex items-center justify-between p-3 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors cursor-pointer",children:[t.jsxs("div",{children:[t.jsx("p",{className:"font-medium text-white",children:r.name}),t.jsx("p",{className:"text-sm text-dark-400",children:r.clientName})]}),t.jsx("span",{className:`badge ${r.status==="active"?"bg-green-500/10 text-green-500":"bg-dark-700 text-dark-300"}`,children:r.status})]},r.id))})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"flex items-center justify-between mb-4",children:[t.jsx("h2",{className:"text-xl font-semibold text-white",children:"Urgent Tasks"}),t.jsx(Ns,{className:"w-5 h-5 text-red-500"})]}),s.filter(r=>r.priority==="urgent").length===0?t.jsxs("div",{className:"text-center py-8",children:[t.jsx(te,{className:"w-12 h-12 text-dark-600 mx-auto mb-3"}),t.jsx("p",{className:"text-dark-400",children:"No urgent tasks"})]}):t.jsx("div",{className:"space-y-3",children:s.filter(r=>r.priority==="urgent").slice(0,5).map(r=>t.jsxs("div",{className:"flex items-start gap-3 p-3 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors cursor-pointer",children:[t.jsx("input",{type:"checkbox",checked:r.status==="completed",className:"mt-1",readOnly:!0}),t.jsxs("div",{className:"flex-1",children:[t.jsx("p",{className:"font-medium text-white",children:r.title}),t.jsx("p",{className:"text-sm text-dark-400 mt-1",children:r.description||"No description"})]})]},r.id))})]})]})]})}function zs({onClose:e}){const{addProject:s}=Y(),{user:a}=H(),[n,i]=h.useState(!1),[r,o]=h.useState({name:"",description:"",clientName:"",clientEmail:"",clientPhone:"",status:"lead"}),d=l=>P(this,null,function*(){l.preventDefault(),i(!0);try{const c=j(m({id:crypto.randomUUID()},r),{assignedTo:[],createdBy:(a==null?void 0:a.id)||"",createdAt:new Date,updatedAt:new Date,shareToken:crypto.randomUUID()});s(c),F.success("Project created successfully!"),e()}catch(c){F.error("Failed to create project")}finally{i(!1)}});return t.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50",children:t.jsxs("div",{className:"card max-w-2xl w-full animate-slide-in",children:[t.jsxs("div",{className:"flex items-center justify-between mb-6",children:[t.jsx("h2",{className:"text-2xl font-bold text-white",children:"Create New Project"}),t.jsx("button",{onClick:e,className:"p-2 hover:bg-dark-800 rounded-lg transition-colors",children:t.jsx(As,{className:"w-5 h-5 text-dark-400"})})]}),t.jsxs("form",{onSubmit:d,className:"space-y-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium text-dark-300 mb-2",children:"Project Name *"}),t.jsx("input",{type:"text",required:!0,value:r.name,onChange:l=>o(j(m({},r),{name:l.target.value})),className:"input w-full",placeholder:"Website Redesign"})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium text-dark-300 mb-2",children:"Description"}),t.jsx("textarea",{value:r.description,onChange:l=>o(j(m({},r),{description:l.target.value})),className:"input w-full min-h-[100px]",placeholder:"Project details..."})]}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium text-dark-300 mb-2",children:"Client Name *"}),t.jsx("input",{type:"text",required:!0,value:r.clientName,onChange:l=>o(j(m({},r),{clientName:l.target.value})),className:"input w-full",placeholder:"John Doe"})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium text-dark-300 mb-2",children:"Client Email *"}),t.jsx("input",{type:"email",required:!0,value:r.clientEmail,onChange:l=>o(j(m({},r),{clientEmail:l.target.value})),className:"input w-full",placeholder:"john@example.com"})]})]}),t.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium text-dark-300 mb-2",children:"Client Phone"}),t.jsx("input",{type:"tel",value:r.clientPhone,onChange:l=>o(j(m({},r),{clientPhone:l.target.value})),className:"input w-full",placeholder:"+1 234 567 890"})]}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium text-dark-300 mb-2",children:"Initial Status"}),t.jsxs("select",{value:r.status,onChange:l=>o(j(m({},r),{status:l.target.value})),className:"input w-full",children:[t.jsx("option",{value:"lead",children:"Lead"}),t.jsx("option",{value:"active",children:"Active"}),t.jsx("option",{value:"paused",children:"Paused"}),t.jsx("option",{value:"completed",children:"Completed"}),t.jsx("option",{value:"cancelled",children:"Cancelled"})]})]})]}),t.jsxs("div",{className:"flex gap-3 pt-4",children:[t.jsx("button",{type:"button",onClick:e,className:"btn-secondary flex-1",disabled:n,children:"Cancel"}),t.jsx("button",{type:"submit",className:"btn-primary flex-1",disabled:n,children:n?"Creating...":"Create Project"})]})]})]})})}function Hs({project:e}){const s={lead:"bg-blue-500/10 text-blue-500",active:"bg-green-500/10 text-green-500",paused:"bg-yellow-500/10 text-yellow-500",completed:"bg-primary-500/10 text-primary-500",cancelled:"bg-red-500/10 text-red-500"};return t.jsxs(xe,{to:`/projects/${e.id}`,className:"card hover:border-primary-500/50 transition-all duration-200 group",children:[t.jsxs("div",{className:"flex items-start justify-between mb-4",children:[t.jsx("h3",{className:"text-lg font-semibold text-white group-hover:text-primary-400 transition-colors",children:e.name}),t.jsx("span",{className:`badge ${s[e.status]}`,children:e.status})]}),t.jsx("p",{className:"text-dark-400 text-sm mb-4 line-clamp-2",children:e.description||"No description provided"}),t.jsxs("div",{className:"space-y-2",children:[t.jsxs("div",{className:"flex items-center gap-2 text-sm text-dark-300",children:[t.jsx(Rs,{className:"w-4 h-4"}),t.jsx("span",{children:e.clientName})]}),t.jsxs("div",{className:"flex items-center gap-2 text-sm text-dark-300",children:[t.jsx(ks,{className:"w-4 h-4"}),t.jsx("span",{children:new Date(e.createdAt).toLocaleDateString()})]})]}),t.jsxs("div",{className:"mt-4 pt-4 border-t border-dark-800 flex items-center justify-between",children:[t.jsxs("div",{className:"flex -space-x-2",children:[e.assignedTo.slice(0,3).map((a,n)=>t.jsx("div",{className:"w-8 h-8 rounded-full bg-primary-600 border-2 border-dark-900 flex items-center justify-center text-xs font-semibold text-white",children:n+1},a)),e.assignedTo.length>3&&t.jsxs("div",{className:"w-8 h-8 rounded-full bg-dark-700 border-2 border-dark-900 flex items-center justify-center text-xs text-dark-300",children:["+",e.assignedTo.length-3]})]}),t.jsx(Ss,{className:"w-4 h-4 text-dark-400 group-hover:text-primary-400 transition-colors"})]})]})}function qs(){const{projects:e,fetchProjects:s}=Y(),[a,n]=h.useState(""),[i,r]=h.useState("all"),[o,d]=h.useState(!1);h.useEffect(()=>{s()},[]);const l=e.filter(c=>{const u=c.name.toLowerCase().includes(a.toLowerCase())||c.clientName.toLowerCase().includes(a.toLowerCase()),p=i==="all"||c.status===i;return u&&p});return t.jsxs("div",{className:"space-y-6",children:[t.jsxs("div",{className:"flex items-center justify-between",children:[t.jsxs("div",{children:[t.jsx("h1",{className:"text-3xl font-bold text-white mb-2",children:"Projects"}),t.jsx("p",{className:"text-dark-400",children:"Manage all your projects in one place"})]}),t.jsxs("button",{onClick:()=>d(!0),className:"btn-primary flex items-center gap-2",children:[t.jsx(_s,{className:"w-5 h-5"}),t.jsx("span",{children:"New Project"})]})]}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[t.jsxs("div",{className:"flex-1 relative",children:[t.jsx($s,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400"}),t.jsx("input",{type:"text",placeholder:"Search projects...",value:a,onChange:c=>n(c.target.value),className:"input w-full pl-10"})]}),t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx(Cs,{className:"w-5 h-5 text-dark-400"}),t.jsxs("select",{value:i,onChange:c=>r(c.target.value),className:"input",children:[t.jsx("option",{value:"all",children:"All Status"}),t.jsx("option",{value:"lead",children:"Lead"}),t.jsx("option",{value:"active",children:"Active"}),t.jsx("option",{value:"paused",children:"Paused"}),t.jsx("option",{value:"completed",children:"Completed"}),t.jsx("option",{value:"cancelled",children:"Cancelled"})]})]})]}),l.length===0?t.jsxs("div",{className:"card text-center py-12",children:[t.jsx("div",{className:"text-dark-400 mb-4",children:a||i!=="all"?"No projects found matching your filters":"No projects yet. Create your first project!"}),!a&&i==="all"&&t.jsx("button",{onClick:()=>d(!0),className:"btn-primary mx-auto",children:"Create First Project"})]}):t.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:l.map(c=>t.jsx(Hs,{project:c},c.id))}),o&&t.jsx(zs,{onClose:()=>d(!1)})]})}function Bs(){return t.jsxs("div",{children:[t.jsx("h1",{className:"text-3xl font-bold text-white",children:"Project Details"}),t.jsx("p",{className:"text-dark-400 mt-2",children:"Detailed project view coming soon..."})]})}function Js(){return t.jsxs("div",{children:[t.jsx("h1",{className:"text-3xl font-bold text-white",children:"Tasks"}),t.jsx("p",{className:"text-dark-400 mt-2",children:"Task management coming soon..."})]})}function Ws(){return t.jsxs("div",{children:[t.jsx("h1",{className:"text-3xl font-bold text-white",children:"Team"}),t.jsx("p",{className:"text-dark-400 mt-2",children:"Team management coming soon..."})]})}function Ks(){const{shareToken:e}=Be(),{projects:s}=Y(),a=s.find(n=>n.shareToken===e);return a?t.jsxs("div",{className:"min-h-screen bg-dark-950",children:[t.jsx("header",{className:"bg-dark-900 border-b border-dark-800 py-6 px-4",children:t.jsxs("div",{className:"max-w-6xl mx-auto",children:[t.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[t.jsx(Es,{className:"w-6 h-6 text-primary-500"}),t.jsx("h1",{className:"text-2xl font-bold text-white",children:a.name})]}),t.jsxs("p",{className:"text-dark-400",children:["Client: ",a.clientName]})]})}),t.jsx("main",{className:"max-w-6xl mx-auto px-4 py-8",children:t.jsxs("div",{className:"grid gap-6",children:[t.jsxs("div",{className:"card",children:[t.jsx("h2",{className:"text-xl font-semibold text-white mb-4",children:"Project Status"}),t.jsxs("div",{className:"space-y-3",children:[t.jsxs("div",{children:[t.jsx("span",{className:"text-dark-400 text-sm",children:"Status:"}),t.jsx("span",{className:"ml-2 badge bg-primary-500/10 text-primary-500",children:a.status})]}),a.description&&t.jsxs("div",{children:[t.jsx("span",{className:"text-dark-400 text-sm",children:"Description:"}),t.jsx("p",{className:"text-white mt-1",children:a.description})]}),t.jsxs("div",{children:[t.jsx("span",{className:"text-dark-400 text-sm",children:"Created:"}),t.jsx("span",{className:"text-white ml-2",children:new Date(a.createdAt).toLocaleDateString()})]})]})]}),t.jsxs("div",{className:"card",children:[t.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[t.jsx(Is,{className:"w-5 h-5 text-primary-500"}),t.jsx("h2",{className:"text-xl font-semibold text-white",children:"Comments & Updates"})]}),t.jsx("div",{className:"text-center py-8 text-dark-400",children:"No comments yet. You can leave feedback here."})]})]})})]}):t.jsx("div",{className:"min-h-screen bg-dark-950 flex items-center justify-center px-4",children:t.jsxs("div",{className:"card max-w-md w-full text-center",children:[t.jsx("div",{className:"text-6xl mb-4",children:"🔍"}),t.jsx("h1",{className:"text-2xl font-bold text-white mb-2",children:"Project Not Found"}),t.jsx("p",{className:"text-dark-400",children:"The project you're looking for doesn't exist or the link has expired."})]})})}function Vs(){return t.jsxs("div",{children:[t.jsx("h1",{className:"text-3xl font-bold text-white",children:"Settings"}),t.jsx("p",{className:"text-dark-400 mt-2",children:"Settings coming soon..."})]})}function Gs(){const{user:e}=H();return t.jsxs(t.Fragment,{children:[t.jsx(Ut,{position:"top-right",toastOptions:{duration:3e3,style:{background:"#1e293b",color:"#f1f5f9",border:"1px solid #334155"}}}),t.jsxs(Je,{children:[t.jsx(E,{path:"/auth",element:t.jsx(vs,{}),children:t.jsx(E,{path:"login",element:t.jsx(Fs,{})})}),t.jsx(E,{path:"/client/:shareToken",element:t.jsx(Ks,{})}),t.jsxs(E,{path:"/",element:e?t.jsx(Ms,{}):t.jsx(le,{to:"/auth/login",replace:!0}),children:[t.jsx(E,{index:!0,element:t.jsx(Us,{})}),t.jsx(E,{path:"projects",element:t.jsx(qs,{})}),t.jsx(E,{path:"projects/:projectId",element:t.jsx(Bs,{})}),t.jsx(E,{path:"tasks",element:t.jsx(Js,{})}),t.jsx(E,{path:"team",element:t.jsx(Ws,{})}),t.jsx(E,{path:"settings",element:t.jsx(Vs,{})})]}),t.jsx(E,{path:"*",element:t.jsx(le,{to:"/",replace:!0})})]})]})}ye(document.getElementById("root")).render(t.jsx(h.StrictMode,{children:t.jsx(We,{children:t.jsx(Gs,{})})}))});export default Zs();
