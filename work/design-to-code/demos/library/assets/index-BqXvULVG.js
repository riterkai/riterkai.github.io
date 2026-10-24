(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))l(c);new MutationObserver(c=>{for(const p of c)if(p.type==="childList")for(const d of p.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function s(c){const p={};return c.integrity&&(p.integrity=c.integrity),c.referrerPolicy&&(p.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?p.credentials="include":c.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function l(c){if(c.ep)return;c.ep=!0;const p=s(c);fetch(c.href,p)}})();function D6(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var e1={exports:{}},xo={},t1={exports:{}},we={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P2;function R6(){if(P2)return we;P2=1;var e=Symbol.for("react.element"),i=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),j=Symbol.iterator;function C(B){return B===null||typeof B!="object"?null:(B=j&&B[j]||B["@@iterator"],typeof B=="function"?B:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,T={};function P(B,N,pe){this.props=B,this.context=N,this.refs=T,this.updater=pe||k}P.prototype.isReactComponent={},P.prototype.setState=function(B,N){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,N,"setState")},P.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function R(){}R.prototype=P.prototype;function E(B,N,pe){this.props=B,this.context=N,this.refs=T,this.updater=pe||k}var M=E.prototype=new R;M.constructor=E,S(M,P.prototype),M.isPureReactComponent=!0;var F=Array.isArray,O=Object.prototype.hasOwnProperty,X={current:null},V={key:!0,ref:!0,__self:!0,__source:!0};function z(B,N,pe){var ne,ue={},je=null,be=null;if(N!=null)for(ne in N.ref!==void 0&&(be=N.ref),N.key!==void 0&&(je=""+N.key),N)O.call(N,ne)&&!V.hasOwnProperty(ne)&&(ue[ne]=N[ne]);var Se=arguments.length-2;if(Se===1)ue.children=pe;else if(1<Se){for(var Be=Array(Se),Ue=0;Ue<Se;Ue++)Be[Ue]=arguments[Ue+2];ue.children=Be}if(B&&B.defaultProps)for(ne in Se=B.defaultProps,Se)ue[ne]===void 0&&(ue[ne]=Se[ne]);return{$$typeof:e,type:B,key:je,ref:be,props:ue,_owner:X.current}}function J(B,N){return{$$typeof:e,type:B.type,key:N,ref:B.ref,props:B.props,_owner:B._owner}}function Q(B){return typeof B=="object"&&B!==null&&B.$$typeof===e}function ae(B){var N={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(pe){return N[pe]})}var me=/\/+/g;function ge(B,N){return typeof B=="object"&&B!==null&&B.key!=null?ae(""+B.key):N.toString(36)}function ke(B,N,pe,ne,ue){var je=typeof B;(je==="undefined"||je==="boolean")&&(B=null);var be=!1;if(B===null)be=!0;else switch(je){case"string":case"number":be=!0;break;case"object":switch(B.$$typeof){case e:case i:be=!0}}if(be)return be=B,ue=ue(be),B=ne===""?"."+ge(be,0):ne,F(ue)?(pe="",B!=null&&(pe=B.replace(me,"$&/")+"/"),ke(ue,N,pe,"",function(Ue){return Ue})):ue!=null&&(Q(ue)&&(ue=J(ue,pe+(!ue.key||be&&be.key===ue.key?"":(""+ue.key).replace(me,"$&/")+"/")+B)),N.push(ue)),1;if(be=0,ne=ne===""?".":ne+":",F(B))for(var Se=0;Se<B.length;Se++){je=B[Se];var Be=ne+ge(je,Se);be+=ke(je,N,pe,Be,ue)}else if(Be=C(B),typeof Be=="function")for(B=Be.call(B),Se=0;!(je=B.next()).done;)je=je.value,Be=ne+ge(je,Se++),be+=ke(je,N,pe,Be,ue);else if(je==="object")throw N=String(B),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return be}function Ie(B,N,pe){if(B==null)return B;var ne=[],ue=0;return ke(B,ne,"","",function(je){return N.call(pe,je,ue++)}),ne}function $e(B){if(B._status===-1){var N=B._result;N=N(),N.then(function(pe){(B._status===0||B._status===-1)&&(B._status=1,B._result=pe)},function(pe){(B._status===0||B._status===-1)&&(B._status=2,B._result=pe)}),B._status===-1&&(B._status=0,B._result=N)}if(B._status===1)return B._result.default;throw B._result}var De={current:null},Z={transition:null},ee={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:Z,ReactCurrentOwner:X};function Y(){throw Error("act(...) is not supported in production builds of React.")}return we.Children={map:Ie,forEach:function(B,N,pe){Ie(B,function(){N.apply(this,arguments)},pe)},count:function(B){var N=0;return Ie(B,function(){N++}),N},toArray:function(B){return Ie(B,function(N){return N})||[]},only:function(B){if(!Q(B))throw Error("React.Children.only expected to receive a single React element child.");return B}},we.Component=P,we.Fragment=s,we.Profiler=c,we.PureComponent=E,we.StrictMode=l,we.Suspense=x,we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee,we.act=Y,we.cloneElement=function(B,N,pe){if(B==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+B+".");var ne=S({},B.props),ue=B.key,je=B.ref,be=B._owner;if(N!=null){if(N.ref!==void 0&&(je=N.ref,be=X.current),N.key!==void 0&&(ue=""+N.key),B.type&&B.type.defaultProps)var Se=B.type.defaultProps;for(Be in N)O.call(N,Be)&&!V.hasOwnProperty(Be)&&(ne[Be]=N[Be]===void 0&&Se!==void 0?Se[Be]:N[Be])}var Be=arguments.length-2;if(Be===1)ne.children=pe;else if(1<Be){Se=Array(Be);for(var Ue=0;Ue<Be;Ue++)Se[Ue]=arguments[Ue+2];ne.children=Se}return{$$typeof:e,type:B.type,key:ue,ref:je,props:ne,_owner:be}},we.createContext=function(B){return B={$$typeof:d,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},B.Provider={$$typeof:p,_context:B},B.Consumer=B},we.createElement=z,we.createFactory=function(B){var N=z.bind(null,B);return N.type=B,N},we.createRef=function(){return{current:null}},we.forwardRef=function(B){return{$$typeof:f,render:B}},we.isValidElement=Q,we.lazy=function(B){return{$$typeof:m,_payload:{_status:-1,_result:B},_init:$e}},we.memo=function(B,N){return{$$typeof:g,type:B,compare:N===void 0?null:N}},we.startTransition=function(B){var N=Z.transition;Z.transition={};try{B()}finally{Z.transition=N}},we.unstable_act=Y,we.useCallback=function(B,N){return De.current.useCallback(B,N)},we.useContext=function(B){return De.current.useContext(B)},we.useDebugValue=function(){},we.useDeferredValue=function(B){return De.current.useDeferredValue(B)},we.useEffect=function(B,N){return De.current.useEffect(B,N)},we.useId=function(){return De.current.useId()},we.useImperativeHandle=function(B,N,pe){return De.current.useImperativeHandle(B,N,pe)},we.useInsertionEffect=function(B,N){return De.current.useInsertionEffect(B,N)},we.useLayoutEffect=function(B,N){return De.current.useLayoutEffect(B,N)},we.useMemo=function(B,N){return De.current.useMemo(B,N)},we.useReducer=function(B,N,pe){return De.current.useReducer(B,N,pe)},we.useRef=function(B){return De.current.useRef(B)},we.useState=function(B){return De.current.useState(B)},we.useSyncExternalStore=function(B,N,pe){return De.current.useSyncExternalStore(B,N,pe)},we.useTransition=function(){return De.current.useTransition()},we.version="18.3.1",we}var E2;function qp(){return E2||(E2=1,t1.exports=R6()),t1.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D2;function I6(){if(D2)return xo;D2=1;var e=qp(),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function d(f,x,g){var m,j={},C=null,k=null;g!==void 0&&(C=""+g),x.key!==void 0&&(C=""+x.key),x.ref!==void 0&&(k=x.ref);for(m in x)l.call(x,m)&&!p.hasOwnProperty(m)&&(j[m]=x[m]);if(f&&f.defaultProps)for(m in x=f.defaultProps,x)j[m]===void 0&&(j[m]=x[m]);return{$$typeof:i,type:f,key:C,ref:k,props:j,_owner:c.current}}return xo.Fragment=s,xo.jsx=d,xo.jsxs=d,xo}var R2;function A6(){return R2||(R2=1,e1.exports=I6()),e1.exports}var t=A6(),ka={},n1={exports:{}},Zt={},i1={exports:{}},r1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I2;function z6(){return I2||(I2=1,(function(e){function i(Z,ee){var Y=Z.length;Z.push(ee);e:for(;0<Y;){var B=Y-1>>>1,N=Z[B];if(0<c(N,ee))Z[B]=ee,Z[Y]=N,Y=B;else break e}}function s(Z){return Z.length===0?null:Z[0]}function l(Z){if(Z.length===0)return null;var ee=Z[0],Y=Z.pop();if(Y!==ee){Z[0]=Y;e:for(var B=0,N=Z.length,pe=N>>>1;B<pe;){var ne=2*(B+1)-1,ue=Z[ne],je=ne+1,be=Z[je];if(0>c(ue,Y))je<N&&0>c(be,ue)?(Z[B]=be,Z[je]=Y,B=je):(Z[B]=ue,Z[ne]=Y,B=ne);else if(je<N&&0>c(be,Y))Z[B]=be,Z[je]=Y,B=je;else break e}}return ee}function c(Z,ee){var Y=Z.sortIndex-ee.sortIndex;return Y!==0?Y:Z.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;e.unstable_now=function(){return p.now()}}else{var d=Date,f=d.now();e.unstable_now=function(){return d.now()-f}}var x=[],g=[],m=1,j=null,C=3,k=!1,S=!1,T=!1,P=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(Z){for(var ee=s(g);ee!==null;){if(ee.callback===null)l(g);else if(ee.startTime<=Z)l(g),ee.sortIndex=ee.expirationTime,i(x,ee);else break;ee=s(g)}}function F(Z){if(T=!1,M(Z),!S)if(s(x)!==null)S=!0,$e(O);else{var ee=s(g);ee!==null&&De(F,ee.startTime-Z)}}function O(Z,ee){S=!1,T&&(T=!1,R(z),z=-1),k=!0;var Y=C;try{for(M(ee),j=s(x);j!==null&&(!(j.expirationTime>ee)||Z&&!ae());){var B=j.callback;if(typeof B=="function"){j.callback=null,C=j.priorityLevel;var N=B(j.expirationTime<=ee);ee=e.unstable_now(),typeof N=="function"?j.callback=N:j===s(x)&&l(x),M(ee)}else l(x);j=s(x)}if(j!==null)var pe=!0;else{var ne=s(g);ne!==null&&De(F,ne.startTime-ee),pe=!1}return pe}finally{j=null,C=Y,k=!1}}var X=!1,V=null,z=-1,J=5,Q=-1;function ae(){return!(e.unstable_now()-Q<J)}function me(){if(V!==null){var Z=e.unstable_now();Q=Z;var ee=!0;try{ee=V(!0,Z)}finally{ee?ge():(X=!1,V=null)}}else X=!1}var ge;if(typeof E=="function")ge=function(){E(me)};else if(typeof MessageChannel<"u"){var ke=new MessageChannel,Ie=ke.port2;ke.port1.onmessage=me,ge=function(){Ie.postMessage(null)}}else ge=function(){P(me,0)};function $e(Z){V=Z,X||(X=!0,ge())}function De(Z,ee){z=P(function(){Z(e.unstable_now())},ee)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(Z){Z.callback=null},e.unstable_continueExecution=function(){S||k||(S=!0,$e(O))},e.unstable_forceFrameRate=function(Z){0>Z||125<Z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<Z?Math.floor(1e3/Z):5},e.unstable_getCurrentPriorityLevel=function(){return C},e.unstable_getFirstCallbackNode=function(){return s(x)},e.unstable_next=function(Z){switch(C){case 1:case 2:case 3:var ee=3;break;default:ee=C}var Y=C;C=ee;try{return Z()}finally{C=Y}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(Z,ee){switch(Z){case 1:case 2:case 3:case 4:case 5:break;default:Z=3}var Y=C;C=Z;try{return ee()}finally{C=Y}},e.unstable_scheduleCallback=function(Z,ee,Y){var B=e.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?B+Y:B):Y=B,Z){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=Y+N,Z={id:m++,callback:ee,priorityLevel:Z,startTime:Y,expirationTime:N,sortIndex:-1},Y>B?(Z.sortIndex=Y,i(g,Z),s(x)===null&&Z===s(g)&&(T?(R(z),z=-1):T=!0,De(F,Y-B))):(Z.sortIndex=N,i(x,Z),S||k||(S=!0,$e(O))),Z},e.unstable_shouldYield=ae,e.unstable_wrapCallback=function(Z){var ee=C;return function(){var Y=C;C=ee;try{return Z.apply(this,arguments)}finally{C=Y}}}})(r1)),r1}var A2;function M6(){return A2||(A2=1,i1.exports=z6()),i1.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z2;function V6(){if(z2)return Zt;z2=1;var e=qp(),i=M6();function s(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,c={};function p(n,r){d(n,r),d(n+"Capture",r)}function d(n,r){for(c[n]=r,n=0;n<r.length;n++)l.add(r[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),x=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},j={};function C(n){return x.call(j,n)?!0:x.call(m,n)?!1:g.test(n)?j[n]=!0:(m[n]=!0,!1)}function k(n,r,o,a){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function S(n,r,o,a){if(r===null||typeof r>"u"||k(n,r,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function T(n,r,o,a,u,h,y){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=a,this.attributeNamespace=u,this.mustUseProperty=o,this.propertyName=n,this.type=r,this.sanitizeURL=h,this.removeEmptyString=y}var P={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){P[n]=new T(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];P[r]=new T(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){P[n]=new T(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){P[n]=new T(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){P[n]=new T(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){P[n]=new T(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){P[n]=new T(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){P[n]=new T(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){P[n]=new T(n,5,!1,n.toLowerCase(),null,!1,!1)});var R=/[\-:]([a-z])/g;function E(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(R,E);P[r]=new T(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(R,E);P[r]=new T(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(R,E);P[r]=new T(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){P[n]=new T(n,1,!1,n.toLowerCase(),null,!1,!1)}),P.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){P[n]=new T(n,1,!1,n.toLowerCase(),null,!0,!0)});function M(n,r,o,a){var u=P.hasOwnProperty(r)?P[r]:null;(u!==null?u.type!==0:a||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(S(r,o,u,a)&&(o=null),a||u===null?C(r)&&(o===null?n.removeAttribute(r):n.setAttribute(r,""+o)):u.mustUseProperty?n[u.propertyName]=o===null?u.type===3?!1:"":o:(r=u.attributeName,a=u.attributeNamespace,o===null?n.removeAttribute(r):(u=u.type,o=u===3||u===4&&o===!0?"":""+o,a?n.setAttributeNS(a,r,o):n.setAttribute(r,o))))}var F=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,O=Symbol.for("react.element"),X=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),J=Symbol.for("react.profiler"),Q=Symbol.for("react.provider"),ae=Symbol.for("react.context"),me=Symbol.for("react.forward_ref"),ge=Symbol.for("react.suspense"),ke=Symbol.for("react.suspense_list"),Ie=Symbol.for("react.memo"),$e=Symbol.for("react.lazy"),De=Symbol.for("react.offscreen"),Z=Symbol.iterator;function ee(n){return n===null||typeof n!="object"?null:(n=Z&&n[Z]||n["@@iterator"],typeof n=="function"?n:null)}var Y=Object.assign,B;function N(n){if(B===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);B=r&&r[1]||""}return`
`+B+n}var pe=!1;function ne(n,r){if(!n||pe)return"";pe=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(A){var a=A}Reflect.construct(n,[],r)}else{try{r.call()}catch(A){a=A}n.call(r.prototype)}else{try{throw Error()}catch(A){a=A}n()}}catch(A){if(A&&a&&typeof A.stack=="string"){for(var u=A.stack.split(`
`),h=a.stack.split(`
`),y=u.length-1,w=h.length-1;1<=y&&0<=w&&u[y]!==h[w];)w--;for(;1<=y&&0<=w;y--,w--)if(u[y]!==h[w]){if(y!==1||w!==1)do if(y--,w--,0>w||u[y]!==h[w]){var $=`
`+u[y].replace(" at new "," at ");return n.displayName&&$.includes("<anonymous>")&&($=$.replace("<anonymous>",n.displayName)),$}while(1<=y&&0<=w);break}}}finally{pe=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?N(n):""}function ue(n){switch(n.tag){case 5:return N(n.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return n=ne(n.type,!1),n;case 11:return n=ne(n.type.render,!1),n;case 1:return n=ne(n.type,!0),n;default:return""}}function je(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case V:return"Fragment";case X:return"Portal";case J:return"Profiler";case z:return"StrictMode";case ge:return"Suspense";case ke:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case ae:return(n.displayName||"Context")+".Consumer";case Q:return(n._context.displayName||"Context")+".Provider";case me:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Ie:return r=n.displayName||null,r!==null?r:je(n.type)||"Memo";case $e:r=n._payload,n=n._init;try{return je(n(r))}catch{}}return null}function be(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return je(r);case 8:return r===z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Se(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Be(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ue(n){var r=Be(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),a=""+n[r];if(!n.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,h.call(this,y)}}),Object.defineProperty(n,r,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function xl(n){n._valueTracker||(n._valueTracker=Ue(n))}function zf(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var o=r.getValue(),a="";return n&&(a=Be(n)?n.checked?"true":"false":n.value),n=a,n!==o?(r.setValue(n),!0):!1}function ml(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ld(n,r){var o=r.checked;return Y({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function Mf(n,r){var o=r.defaultValue==null?"":r.defaultValue,a=r.checked!=null?r.checked:r.defaultChecked;o=Se(r.value!=null?r.value:o),n._wrapperState={initialChecked:a,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Vf(n,r){r=r.checked,r!=null&&M(n,"checked",r,!1)}function ad(n,r){Vf(n,r);var o=Se(r.value),a=r.type;if(o!=null)a==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(a==="submit"||a==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?cd(n,r.type,o):r.hasOwnProperty("defaultValue")&&cd(n,r.type,Se(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Ff(n,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var a=r.type;if(!(a!=="submit"&&a!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,o||r===n.value||(n.value=r),n.defaultValue=r}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function cd(n,r,o){(r!=="number"||ml(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Bs=Array.isArray;function Rr(n,r,o,a){if(n=n.options,r){r={};for(var u=0;u<o.length;u++)r["$"+o[u]]=!0;for(o=0;o<n.length;o++)u=r.hasOwnProperty("$"+n[o].value),n[o].selected!==u&&(n[o].selected=u),u&&a&&(n[o].defaultSelected=!0)}else{for(o=""+Se(o),r=null,u=0;u<n.length;u++){if(n[u].value===o){n[u].selected=!0,a&&(n[u].defaultSelected=!0);return}r!==null||n[u].disabled||(r=n[u])}r!==null&&(r.selected=!0)}}function dd(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(s(91));return Y({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Nf(n,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(s(92));if(Bs(o)){if(1<o.length)throw Error(s(93));o=o[0]}r=o}r==null&&(r=""),o=r}n._wrapperState={initialValue:Se(o)}}function Of(n,r){var o=Se(r.value),a=Se(r.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),r.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),a!=null&&(n.defaultValue=""+a)}function _f(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function Hf(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ud(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?Hf(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var gl,Wf=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,a,u){MSApp.execUnsafeLocalFunction(function(){return n(r,o,a,u)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(gl=gl||document.createElement("div"),gl.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=gl.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Ps(n,r){if(r){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=r;return}}n.textContent=r}var Es={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},z4=["Webkit","ms","Moz","O"];Object.keys(Es).forEach(function(n){z4.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Es[r]=Es[n]})});function Uf(n,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||Es.hasOwnProperty(n)&&Es[n]?(""+r).trim():r+"px"}function Zf(n,r){n=n.style;for(var o in r)if(r.hasOwnProperty(o)){var a=o.indexOf("--")===0,u=Uf(o,r[o],a);o==="float"&&(o="cssFloat"),a?n.setProperty(o,u):n[o]=u}}var M4=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pd(n,r){if(r){if(M4[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(s(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(s(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(s(61))}if(r.style!=null&&typeof r.style!="object")throw Error(s(62))}}function fd(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hd=null;function xd(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var md=null,Ir=null,Ar=null;function Gf(n){if(n=Js(n)){if(typeof md!="function")throw Error(s(280));var r=n.stateNode;r&&(r=Nl(r),md(n.stateNode,n.type,r))}}function Kf(n){Ir?Ar?Ar.push(n):Ar=[n]:Ir=n}function qf(){if(Ir){var n=Ir,r=Ar;if(Ar=Ir=null,Gf(n),r)for(n=0;n<r.length;n++)Gf(r[n])}}function Yf(n,r){return n(r)}function Xf(){}var gd=!1;function Qf(n,r,o){if(gd)return n(r,o);gd=!0;try{return Yf(n,r,o)}finally{gd=!1,(Ir!==null||Ar!==null)&&(Xf(),qf())}}function Ds(n,r){var o=n.stateNode;if(o===null)return null;var a=Nl(o);if(a===null)return null;o=a[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(n=n.type,a=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!a;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(s(231,r,typeof o));return o}var vd=!1;if(f)try{var Rs={};Object.defineProperty(Rs,"passive",{get:function(){vd=!0}}),window.addEventListener("test",Rs,Rs),window.removeEventListener("test",Rs,Rs)}catch{vd=!1}function V4(n,r,o,a,u,h,y,w,$){var A=Array.prototype.slice.call(arguments,3);try{r.apply(o,A)}catch(U){this.onError(U)}}var Is=!1,vl=null,yl=!1,yd=null,F4={onError:function(n){Is=!0,vl=n}};function N4(n,r,o,a,u,h,y,w,$){Is=!1,vl=null,V4.apply(F4,arguments)}function O4(n,r,o,a,u,h,y,w,$){if(N4.apply(this,arguments),Is){if(Is){var A=vl;Is=!1,vl=null}else throw Error(s(198));yl||(yl=!0,yd=A)}}function Gi(n){var r=n,o=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(o=r.return),n=r.return;while(n)}return r.tag===3?o:null}function Jf(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function eh(n){if(Gi(n)!==n)throw Error(s(188))}function _4(n){var r=n.alternate;if(!r){if(r=Gi(n),r===null)throw Error(s(188));return r!==n?null:n}for(var o=n,a=r;;){var u=o.return;if(u===null)break;var h=u.alternate;if(h===null){if(a=u.return,a!==null){o=a;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===o)return eh(u),n;if(h===a)return eh(u),r;h=h.sibling}throw Error(s(188))}if(o.return!==a.return)o=u,a=h;else{for(var y=!1,w=u.child;w;){if(w===o){y=!0,o=u,a=h;break}if(w===a){y=!0,a=u,o=h;break}w=w.sibling}if(!y){for(w=h.child;w;){if(w===o){y=!0,o=h,a=u;break}if(w===a){y=!0,a=h,o=u;break}w=w.sibling}if(!y)throw Error(s(189))}}if(o.alternate!==a)throw Error(s(190))}if(o.tag!==3)throw Error(s(188));return o.stateNode.current===o?n:r}function th(n){return n=_4(n),n!==null?nh(n):null}function nh(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=nh(n);if(r!==null)return r;n=n.sibling}return null}var ih=i.unstable_scheduleCallback,rh=i.unstable_cancelCallback,H4=i.unstable_shouldYield,W4=i.unstable_requestPaint,Ye=i.unstable_now,U4=i.unstable_getCurrentPriorityLevel,jd=i.unstable_ImmediatePriority,sh=i.unstable_UserBlockingPriority,jl=i.unstable_NormalPriority,Z4=i.unstable_LowPriority,oh=i.unstable_IdlePriority,Cl=null,Fn=null;function G4(n){if(Fn&&typeof Fn.onCommitFiberRoot=="function")try{Fn.onCommitFiberRoot(Cl,n,void 0,(n.current.flags&128)===128)}catch{}}var kn=Math.clz32?Math.clz32:Y4,K4=Math.log,q4=Math.LN2;function Y4(n){return n>>>=0,n===0?32:31-(K4(n)/q4|0)|0}var wl=64,bl=4194304;function As(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Sl(n,r){var o=n.pendingLanes;if(o===0)return 0;var a=0,u=n.suspendedLanes,h=n.pingedLanes,y=o&268435455;if(y!==0){var w=y&~u;w!==0?a=As(w):(h&=y,h!==0&&(a=As(h)))}else y=o&~u,y!==0?a=As(y):h!==0&&(a=As(h));if(a===0)return 0;if(r!==0&&r!==a&&(r&u)===0&&(u=a&-a,h=r&-r,u>=h||u===16&&(h&4194240)!==0))return r;if((a&4)!==0&&(a|=o&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=a;0<r;)o=31-kn(r),u=1<<o,a|=n[o],r&=~u;return a}function X4(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Q4(n,r){for(var o=n.suspendedLanes,a=n.pingedLanes,u=n.expirationTimes,h=n.pendingLanes;0<h;){var y=31-kn(h),w=1<<y,$=u[y];$===-1?((w&o)===0||(w&a)!==0)&&(u[y]=X4(w,r)):$<=r&&(n.expiredLanes|=w),h&=~w}}function Cd(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function lh(){var n=wl;return wl<<=1,(wl&4194240)===0&&(wl=64),n}function wd(n){for(var r=[],o=0;31>o;o++)r.push(n);return r}function zs(n,r,o){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-kn(r),n[r]=o}function J4(n,r){var o=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var a=n.eventTimes;for(n=n.expirationTimes;0<o;){var u=31-kn(o),h=1<<u;r[u]=0,a[u]=-1,n[u]=-1,o&=~h}}function bd(n,r){var o=n.entangledLanes|=r;for(n=n.entanglements;o;){var a=31-kn(o),u=1<<a;u&r|n[a]&r&&(n[a]|=r),o&=~u}}var Re=0;function ah(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var ch,Sd,dh,uh,ph,kd=!1,kl=[],hi=null,xi=null,mi=null,Ms=new Map,Vs=new Map,gi=[],e5="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fh(n,r){switch(n){case"focusin":case"focusout":hi=null;break;case"dragenter":case"dragleave":xi=null;break;case"mouseover":case"mouseout":mi=null;break;case"pointerover":case"pointerout":Ms.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vs.delete(r.pointerId)}}function Fs(n,r,o,a,u,h){return n===null||n.nativeEvent!==h?(n={blockedOn:r,domEventName:o,eventSystemFlags:a,nativeEvent:h,targetContainers:[u]},r!==null&&(r=Js(r),r!==null&&Sd(r)),n):(n.eventSystemFlags|=a,r=n.targetContainers,u!==null&&r.indexOf(u)===-1&&r.push(u),n)}function t5(n,r,o,a,u){switch(r){case"focusin":return hi=Fs(hi,n,r,o,a,u),!0;case"dragenter":return xi=Fs(xi,n,r,o,a,u),!0;case"mouseover":return mi=Fs(mi,n,r,o,a,u),!0;case"pointerover":var h=u.pointerId;return Ms.set(h,Fs(Ms.get(h)||null,n,r,o,a,u)),!0;case"gotpointercapture":return h=u.pointerId,Vs.set(h,Fs(Vs.get(h)||null,n,r,o,a,u)),!0}return!1}function hh(n){var r=Ki(n.target);if(r!==null){var o=Gi(r);if(o!==null){if(r=o.tag,r===13){if(r=Jf(o),r!==null){n.blockedOn=r,ph(n.priority,function(){dh(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Tl(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var o=$d(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var a=new o.constructor(o.type,o);hd=a,o.target.dispatchEvent(a),hd=null}else return r=Js(o),r!==null&&Sd(r),n.blockedOn=o,!1;r.shift()}return!0}function xh(n,r,o){Tl(n)&&o.delete(r)}function n5(){kd=!1,hi!==null&&Tl(hi)&&(hi=null),xi!==null&&Tl(xi)&&(xi=null),mi!==null&&Tl(mi)&&(mi=null),Ms.forEach(xh),Vs.forEach(xh)}function Ns(n,r){n.blockedOn===r&&(n.blockedOn=null,kd||(kd=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,n5)))}function Os(n){function r(u){return Ns(u,n)}if(0<kl.length){Ns(kl[0],n);for(var o=1;o<kl.length;o++){var a=kl[o];a.blockedOn===n&&(a.blockedOn=null)}}for(hi!==null&&Ns(hi,n),xi!==null&&Ns(xi,n),mi!==null&&Ns(mi,n),Ms.forEach(r),Vs.forEach(r),o=0;o<gi.length;o++)a=gi[o],a.blockedOn===n&&(a.blockedOn=null);for(;0<gi.length&&(o=gi[0],o.blockedOn===null);)hh(o),o.blockedOn===null&&gi.shift()}var zr=F.ReactCurrentBatchConfig,$l=!0;function i5(n,r,o,a){var u=Re,h=zr.transition;zr.transition=null;try{Re=1,Td(n,r,o,a)}finally{Re=u,zr.transition=h}}function r5(n,r,o,a){var u=Re,h=zr.transition;zr.transition=null;try{Re=4,Td(n,r,o,a)}finally{Re=u,zr.transition=h}}function Td(n,r,o,a){if($l){var u=$d(n,r,o,a);if(u===null)Wd(n,r,a,Ll,o),fh(n,a);else if(t5(u,n,r,o,a))a.stopPropagation();else if(fh(n,a),r&4&&-1<e5.indexOf(n)){for(;u!==null;){var h=Js(u);if(h!==null&&ch(h),h=$d(n,r,o,a),h===null&&Wd(n,r,a,Ll,o),h===u)break;u=h}u!==null&&a.stopPropagation()}else Wd(n,r,a,null,o)}}var Ll=null;function $d(n,r,o,a){if(Ll=null,n=xd(a),n=Ki(n),n!==null)if(r=Gi(n),r===null)n=null;else if(o=r.tag,o===13){if(n=Jf(r),n!==null)return n;n=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Ll=n,null}function mh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(U4()){case jd:return 1;case sh:return 4;case jl:case Z4:return 16;case oh:return 536870912;default:return 16}default:return 16}}var vi=null,Ld=null,Bl=null;function gh(){if(Bl)return Bl;var n,r=Ld,o=r.length,a,u="value"in vi?vi.value:vi.textContent,h=u.length;for(n=0;n<o&&r[n]===u[n];n++);var y=o-n;for(a=1;a<=y&&r[o-a]===u[h-a];a++);return Bl=u.slice(n,1<a?1-a:void 0)}function Pl(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function El(){return!0}function vh(){return!1}function Gt(n){function r(o,a,u,h,y){this._reactName=o,this._targetInst=u,this.type=a,this.nativeEvent=h,this.target=y,this.currentTarget=null;for(var w in n)n.hasOwnProperty(w)&&(o=n[w],this[w]=o?o(h):h[w]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?El:vh,this.isPropagationStopped=vh,this}return Y(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=El)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=El)},persist:function(){},isPersistent:El}),r}var Mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bd=Gt(Mr),_s=Y({},Mr,{view:0,detail:0}),s5=Gt(_s),Pd,Ed,Hs,Dl=Y({},_s,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rd,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Hs&&(Hs&&n.type==="mousemove"?(Pd=n.screenX-Hs.screenX,Ed=n.screenY-Hs.screenY):Ed=Pd=0,Hs=n),Pd)},movementY:function(n){return"movementY"in n?n.movementY:Ed}}),yh=Gt(Dl),o5=Y({},Dl,{dataTransfer:0}),l5=Gt(o5),a5=Y({},_s,{relatedTarget:0}),Dd=Gt(a5),c5=Y({},Mr,{animationName:0,elapsedTime:0,pseudoElement:0}),d5=Gt(c5),u5=Y({},Mr,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),p5=Gt(u5),f5=Y({},Mr,{data:0}),jh=Gt(f5),h5={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},x5={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},m5={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function g5(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=m5[n])?!!r[n]:!1}function Rd(){return g5}var v5=Y({},_s,{key:function(n){if(n.key){var r=h5[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Pl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?x5[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rd,charCode:function(n){return n.type==="keypress"?Pl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Pl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),y5=Gt(v5),j5=Y({},Dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ch=Gt(j5),C5=Y({},_s,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rd}),w5=Gt(C5),b5=Y({},Mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),S5=Gt(b5),k5=Y({},Dl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),T5=Gt(k5),$5=[9,13,27,32],Id=f&&"CompositionEvent"in window,Ws=null;f&&"documentMode"in document&&(Ws=document.documentMode);var L5=f&&"TextEvent"in window&&!Ws,wh=f&&(!Id||Ws&&8<Ws&&11>=Ws),bh=" ",Sh=!1;function kh(n,r){switch(n){case"keyup":return $5.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Th(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Vr=!1;function B5(n,r){switch(n){case"compositionend":return Th(r);case"keypress":return r.which!==32?null:(Sh=!0,bh);case"textInput":return n=r.data,n===bh&&Sh?null:n;default:return null}}function P5(n,r){if(Vr)return n==="compositionend"||!Id&&kh(n,r)?(n=gh(),Bl=Ld=vi=null,Vr=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return wh&&r.locale!=="ko"?null:r.data;default:return null}}var E5={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $h(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!E5[n.type]:r==="textarea"}function Lh(n,r,o,a){Kf(a),r=Ml(r,"onChange"),0<r.length&&(o=new Bd("onChange","change",null,o,a),n.push({event:o,listeners:r}))}var Us=null,Zs=null;function D5(n){Zh(n,0)}function Rl(n){var r=Hr(n);if(zf(r))return n}function R5(n,r){if(n==="change")return r}var Bh=!1;if(f){var Ad;if(f){var zd="oninput"in document;if(!zd){var Ph=document.createElement("div");Ph.setAttribute("oninput","return;"),zd=typeof Ph.oninput=="function"}Ad=zd}else Ad=!1;Bh=Ad&&(!document.documentMode||9<document.documentMode)}function Eh(){Us&&(Us.detachEvent("onpropertychange",Dh),Zs=Us=null)}function Dh(n){if(n.propertyName==="value"&&Rl(Zs)){var r=[];Lh(r,Zs,n,xd(n)),Qf(D5,r)}}function I5(n,r,o){n==="focusin"?(Eh(),Us=r,Zs=o,Us.attachEvent("onpropertychange",Dh)):n==="focusout"&&Eh()}function A5(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Rl(Zs)}function z5(n,r){if(n==="click")return Rl(r)}function M5(n,r){if(n==="input"||n==="change")return Rl(r)}function V5(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Tn=typeof Object.is=="function"?Object.is:V5;function Gs(n,r){if(Tn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var o=Object.keys(n),a=Object.keys(r);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var u=o[a];if(!x.call(r,u)||!Tn(n[u],r[u]))return!1}return!0}function Rh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ih(n,r){var o=Rh(n);n=0;for(var a;o;){if(o.nodeType===3){if(a=n+o.textContent.length,n<=r&&a>=r)return{node:o,offset:r-n};n=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Rh(o)}}function Ah(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Ah(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function zh(){for(var n=window,r=ml();r instanceof n.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)n=r.contentWindow;else break;r=ml(n.document)}return r}function Md(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function F5(n){var r=zh(),o=n.focusedElem,a=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&Ah(o.ownerDocument.documentElement,o)){if(a!==null&&Md(o)){if(r=a.start,n=a.end,n===void 0&&(n=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(n,o.value.length);else if(n=(r=o.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var u=o.textContent.length,h=Math.min(a.start,u);a=a.end===void 0?h:Math.min(a.end,u),!n.extend&&h>a&&(u=a,a=h,h=u),u=Ih(o,h);var y=Ih(o,a);u&&y&&(n.rangeCount!==1||n.anchorNode!==u.node||n.anchorOffset!==u.offset||n.focusNode!==y.node||n.focusOffset!==y.offset)&&(r=r.createRange(),r.setStart(u.node,u.offset),n.removeAllRanges(),h>a?(n.addRange(r),n.extend(y.node,y.offset)):(r.setEnd(y.node,y.offset),n.addRange(r)))}}for(r=[],n=o;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)n=r[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var N5=f&&"documentMode"in document&&11>=document.documentMode,Fr=null,Vd=null,Ks=null,Fd=!1;function Mh(n,r,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Fd||Fr==null||Fr!==ml(a)||(a=Fr,"selectionStart"in a&&Md(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ks&&Gs(Ks,a)||(Ks=a,a=Ml(Vd,"onSelect"),0<a.length&&(r=new Bd("onSelect","select",null,r,o),n.push({event:r,listeners:a}),r.target=Fr)))}function Il(n,r){var o={};return o[n.toLowerCase()]=r.toLowerCase(),o["Webkit"+n]="webkit"+r,o["Moz"+n]="moz"+r,o}var Nr={animationend:Il("Animation","AnimationEnd"),animationiteration:Il("Animation","AnimationIteration"),animationstart:Il("Animation","AnimationStart"),transitionend:Il("Transition","TransitionEnd")},Nd={},Vh={};f&&(Vh=document.createElement("div").style,"AnimationEvent"in window||(delete Nr.animationend.animation,delete Nr.animationiteration.animation,delete Nr.animationstart.animation),"TransitionEvent"in window||delete Nr.transitionend.transition);function Al(n){if(Nd[n])return Nd[n];if(!Nr[n])return n;var r=Nr[n],o;for(o in r)if(r.hasOwnProperty(o)&&o in Vh)return Nd[n]=r[o];return n}var Fh=Al("animationend"),Nh=Al("animationiteration"),Oh=Al("animationstart"),_h=Al("transitionend"),Hh=new Map,Wh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yi(n,r){Hh.set(n,r),p(r,[n])}for(var Od=0;Od<Wh.length;Od++){var _d=Wh[Od],O5=_d.toLowerCase(),_5=_d[0].toUpperCase()+_d.slice(1);yi(O5,"on"+_5)}yi(Fh,"onAnimationEnd"),yi(Nh,"onAnimationIteration"),yi(Oh,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(_h,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),p("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),p("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),p("onBeforeInput",["compositionend","keypress","textInput","paste"]),p("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),H5=new Set("cancel close invalid load scroll toggle".split(" ").concat(qs));function Uh(n,r,o){var a=n.type||"unknown-event";n.currentTarget=o,O4(a,r,void 0,n),n.currentTarget=null}function Zh(n,r){r=(r&4)!==0;for(var o=0;o<n.length;o++){var a=n[o],u=a.event;a=a.listeners;e:{var h=void 0;if(r)for(var y=a.length-1;0<=y;y--){var w=a[y],$=w.instance,A=w.currentTarget;if(w=w.listener,$!==h&&u.isPropagationStopped())break e;Uh(u,w,A),h=$}else for(y=0;y<a.length;y++){if(w=a[y],$=w.instance,A=w.currentTarget,w=w.listener,$!==h&&u.isPropagationStopped())break e;Uh(u,w,A),h=$}}}if(yl)throw n=yd,yl=!1,yd=null,n}function Ve(n,r){var o=r[Yd];o===void 0&&(o=r[Yd]=new Set);var a=n+"__bubble";o.has(a)||(Gh(r,n,2,!1),o.add(a))}function Hd(n,r,o){var a=0;r&&(a|=4),Gh(o,n,a,r)}var zl="_reactListening"+Math.random().toString(36).slice(2);function Ys(n){if(!n[zl]){n[zl]=!0,l.forEach(function(o){o!=="selectionchange"&&(H5.has(o)||Hd(o,!1,n),Hd(o,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[zl]||(r[zl]=!0,Hd("selectionchange",!1,r))}}function Gh(n,r,o,a){switch(mh(r)){case 1:var u=i5;break;case 4:u=r5;break;default:u=Td}o=u.bind(null,r,o,n),u=void 0,!vd||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(u=!0),a?u!==void 0?n.addEventListener(r,o,{capture:!0,passive:u}):n.addEventListener(r,o,!0):u!==void 0?n.addEventListener(r,o,{passive:u}):n.addEventListener(r,o,!1)}function Wd(n,r,o,a,u){var h=a;if((r&1)===0&&(r&2)===0&&a!==null)e:for(;;){if(a===null)return;var y=a.tag;if(y===3||y===4){var w=a.stateNode.containerInfo;if(w===u||w.nodeType===8&&w.parentNode===u)break;if(y===4)for(y=a.return;y!==null;){var $=y.tag;if(($===3||$===4)&&($=y.stateNode.containerInfo,$===u||$.nodeType===8&&$.parentNode===u))return;y=y.return}for(;w!==null;){if(y=Ki(w),y===null)return;if($=y.tag,$===5||$===6){a=h=y;continue e}w=w.parentNode}}a=a.return}Qf(function(){var A=h,U=xd(o),G=[];e:{var W=Hh.get(n);if(W!==void 0){var ie=Bd,se=n;switch(n){case"keypress":if(Pl(o)===0)break e;case"keydown":case"keyup":ie=y5;break;case"focusin":se="focus",ie=Dd;break;case"focusout":se="blur",ie=Dd;break;case"beforeblur":case"afterblur":ie=Dd;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ie=yh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ie=l5;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ie=w5;break;case Fh:case Nh:case Oh:ie=d5;break;case _h:ie=S5;break;case"scroll":ie=s5;break;case"wheel":ie=T5;break;case"copy":case"cut":case"paste":ie=p5;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ie=Ch}var le=(r&4)!==0,Xe=!le&&n==="scroll",D=le?W!==null?W+"Capture":null:W;le=[];for(var L=A,I;L!==null;){I=L;var q=I.stateNode;if(I.tag===5&&q!==null&&(I=q,D!==null&&(q=Ds(L,D),q!=null&&le.push(Xs(L,q,I)))),Xe)break;L=L.return}0<le.length&&(W=new ie(W,se,null,o,U),G.push({event:W,listeners:le}))}}if((r&7)===0){e:{if(W=n==="mouseover"||n==="pointerover",ie=n==="mouseout"||n==="pointerout",W&&o!==hd&&(se=o.relatedTarget||o.fromElement)&&(Ki(se)||se[Qn]))break e;if((ie||W)&&(W=U.window===U?U:(W=U.ownerDocument)?W.defaultView||W.parentWindow:window,ie?(se=o.relatedTarget||o.toElement,ie=A,se=se?Ki(se):null,se!==null&&(Xe=Gi(se),se!==Xe||se.tag!==5&&se.tag!==6)&&(se=null)):(ie=null,se=A),ie!==se)){if(le=yh,q="onMouseLeave",D="onMouseEnter",L="mouse",(n==="pointerout"||n==="pointerover")&&(le=Ch,q="onPointerLeave",D="onPointerEnter",L="pointer"),Xe=ie==null?W:Hr(ie),I=se==null?W:Hr(se),W=new le(q,L+"leave",ie,o,U),W.target=Xe,W.relatedTarget=I,q=null,Ki(U)===A&&(le=new le(D,L+"enter",se,o,U),le.target=I,le.relatedTarget=Xe,q=le),Xe=q,ie&&se)t:{for(le=ie,D=se,L=0,I=le;I;I=Or(I))L++;for(I=0,q=D;q;q=Or(q))I++;for(;0<L-I;)le=Or(le),L--;for(;0<I-L;)D=Or(D),I--;for(;L--;){if(le===D||D!==null&&le===D.alternate)break t;le=Or(le),D=Or(D)}le=null}else le=null;ie!==null&&Kh(G,W,ie,le,!1),se!==null&&Xe!==null&&Kh(G,Xe,se,le,!0)}}e:{if(W=A?Hr(A):window,ie=W.nodeName&&W.nodeName.toLowerCase(),ie==="select"||ie==="input"&&W.type==="file")var ce=R5;else if($h(W))if(Bh)ce=M5;else{ce=A5;var fe=I5}else(ie=W.nodeName)&&ie.toLowerCase()==="input"&&(W.type==="checkbox"||W.type==="radio")&&(ce=z5);if(ce&&(ce=ce(n,A))){Lh(G,ce,o,U);break e}fe&&fe(n,W,A),n==="focusout"&&(fe=W._wrapperState)&&fe.controlled&&W.type==="number"&&cd(W,"number",W.value)}switch(fe=A?Hr(A):window,n){case"focusin":($h(fe)||fe.contentEditable==="true")&&(Fr=fe,Vd=A,Ks=null);break;case"focusout":Ks=Vd=Fr=null;break;case"mousedown":Fd=!0;break;case"contextmenu":case"mouseup":case"dragend":Fd=!1,Mh(G,o,U);break;case"selectionchange":if(N5)break;case"keydown":case"keyup":Mh(G,o,U)}var he;if(Id)e:{switch(n){case"compositionstart":var xe="onCompositionStart";break e;case"compositionend":xe="onCompositionEnd";break e;case"compositionupdate":xe="onCompositionUpdate";break e}xe=void 0}else Vr?kh(n,o)&&(xe="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(xe="onCompositionStart");xe&&(wh&&o.locale!=="ko"&&(Vr||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Vr&&(he=gh()):(vi=U,Ld="value"in vi?vi.value:vi.textContent,Vr=!0)),fe=Ml(A,xe),0<fe.length&&(xe=new jh(xe,n,null,o,U),G.push({event:xe,listeners:fe}),he?xe.data=he:(he=Th(o),he!==null&&(xe.data=he)))),(he=L5?B5(n,o):P5(n,o))&&(A=Ml(A,"onBeforeInput"),0<A.length&&(U=new jh("onBeforeInput","beforeinput",null,o,U),G.push({event:U,listeners:A}),U.data=he))}Zh(G,r)})}function Xs(n,r,o){return{instance:n,listener:r,currentTarget:o}}function Ml(n,r){for(var o=r+"Capture",a=[];n!==null;){var u=n,h=u.stateNode;u.tag===5&&h!==null&&(u=h,h=Ds(n,o),h!=null&&a.unshift(Xs(n,h,u)),h=Ds(n,r),h!=null&&a.push(Xs(n,h,u))),n=n.return}return a}function Or(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Kh(n,r,o,a,u){for(var h=r._reactName,y=[];o!==null&&o!==a;){var w=o,$=w.alternate,A=w.stateNode;if($!==null&&$===a)break;w.tag===5&&A!==null&&(w=A,u?($=Ds(o,h),$!=null&&y.unshift(Xs(o,$,w))):u||($=Ds(o,h),$!=null&&y.push(Xs(o,$,w)))),o=o.return}y.length!==0&&n.push({event:r,listeners:y})}var W5=/\r\n?/g,U5=/\u0000|\uFFFD/g;function qh(n){return(typeof n=="string"?n:""+n).replace(W5,`
`).replace(U5,"")}function Vl(n,r,o){if(r=qh(r),qh(n)!==r&&o)throw Error(s(425))}function Fl(){}var Ud=null,Zd=null;function Gd(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Kd=typeof setTimeout=="function"?setTimeout:void 0,Z5=typeof clearTimeout=="function"?clearTimeout:void 0,Yh=typeof Promise=="function"?Promise:void 0,G5=typeof queueMicrotask=="function"?queueMicrotask:typeof Yh<"u"?function(n){return Yh.resolve(null).then(n).catch(K5)}:Kd;function K5(n){setTimeout(function(){throw n})}function qd(n,r){var o=r,a=0;do{var u=o.nextSibling;if(n.removeChild(o),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(a===0){n.removeChild(u),Os(r);return}a--}else o!=="$"&&o!=="$?"&&o!=="$!"||a++;o=u}while(o);Os(r)}function ji(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Xh(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return n;r--}else o==="/$"&&r++}n=n.previousSibling}return null}var _r=Math.random().toString(36).slice(2),Nn="__reactFiber$"+_r,Qs="__reactProps$"+_r,Qn="__reactContainer$"+_r,Yd="__reactEvents$"+_r,q5="__reactListeners$"+_r,Y5="__reactHandles$"+_r;function Ki(n){var r=n[Nn];if(r)return r;for(var o=n.parentNode;o;){if(r=o[Qn]||o[Nn]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(n=Xh(n);n!==null;){if(o=n[Nn])return o;n=Xh(n)}return r}n=o,o=n.parentNode}return null}function Js(n){return n=n[Nn]||n[Qn],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Hr(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(s(33))}function Nl(n){return n[Qs]||null}var Xd=[],Wr=-1;function Ci(n){return{current:n}}function Fe(n){0>Wr||(n.current=Xd[Wr],Xd[Wr]=null,Wr--)}function Me(n,r){Wr++,Xd[Wr]=n.current,n.current=r}var wi={},Tt=Ci(wi),Ot=Ci(!1),qi=wi;function Ur(n,r){var o=n.type.contextTypes;if(!o)return wi;var a=n.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===r)return a.__reactInternalMemoizedMaskedChildContext;var u={},h;for(h in o)u[h]=r[h];return a&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=u),u}function _t(n){return n=n.childContextTypes,n!=null}function Ol(){Fe(Ot),Fe(Tt)}function Qh(n,r,o){if(Tt.current!==wi)throw Error(s(168));Me(Tt,r),Me(Ot,o)}function Jh(n,r,o){var a=n.stateNode;if(r=r.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var u in a)if(!(u in r))throw Error(s(108,be(n)||"Unknown",u));return Y({},o,a)}function _l(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||wi,qi=Tt.current,Me(Tt,n),Me(Ot,Ot.current),!0}function e0(n,r,o){var a=n.stateNode;if(!a)throw Error(s(169));o?(n=Jh(n,r,qi),a.__reactInternalMemoizedMergedChildContext=n,Fe(Ot),Fe(Tt),Me(Tt,n)):Fe(Ot),Me(Ot,o)}var Jn=null,Hl=!1,Qd=!1;function t0(n){Jn===null?Jn=[n]:Jn.push(n)}function X5(n){Hl=!0,t0(n)}function bi(){if(!Qd&&Jn!==null){Qd=!0;var n=0,r=Re;try{var o=Jn;for(Re=1;n<o.length;n++){var a=o[n];do a=a(!0);while(a!==null)}Jn=null,Hl=!1}catch(u){throw Jn!==null&&(Jn=Jn.slice(n+1)),ih(jd,bi),u}finally{Re=r,Qd=!1}}return null}var Zr=[],Gr=0,Wl=null,Ul=0,nn=[],rn=0,Yi=null,ei=1,ti="";function Xi(n,r){Zr[Gr++]=Ul,Zr[Gr++]=Wl,Wl=n,Ul=r}function n0(n,r,o){nn[rn++]=ei,nn[rn++]=ti,nn[rn++]=Yi,Yi=n;var a=ei;n=ti;var u=32-kn(a)-1;a&=~(1<<u),o+=1;var h=32-kn(r)+u;if(30<h){var y=u-u%5;h=(a&(1<<y)-1).toString(32),a>>=y,u-=y,ei=1<<32-kn(r)+u|o<<u|a,ti=h+n}else ei=1<<h|o<<u|a,ti=n}function Jd(n){n.return!==null&&(Xi(n,1),n0(n,1,0))}function eu(n){for(;n===Wl;)Wl=Zr[--Gr],Zr[Gr]=null,Ul=Zr[--Gr],Zr[Gr]=null;for(;n===Yi;)Yi=nn[--rn],nn[rn]=null,ti=nn[--rn],nn[rn]=null,ei=nn[--rn],nn[rn]=null}var Kt=null,qt=null,_e=!1,$n=null;function i0(n,r){var o=an(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=n,r=n.deletions,r===null?(n.deletions=[o],n.flags|=16):r.push(o)}function r0(n,r){switch(n.tag){case 5:var o=n.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,Kt=n,qt=ji(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,Kt=n,qt=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=Yi!==null?{id:ei,overflow:ti}:null,n.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=an(18,null,null,0),o.stateNode=r,o.return=n,n.child=o,Kt=n,qt=null,!0):!1;default:return!1}}function tu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function nu(n){if(_e){var r=qt;if(r){var o=r;if(!r0(n,r)){if(tu(n))throw Error(s(418));r=ji(o.nextSibling);var a=Kt;r&&r0(n,r)?i0(a,o):(n.flags=n.flags&-4097|2,_e=!1,Kt=n)}}else{if(tu(n))throw Error(s(418));n.flags=n.flags&-4097|2,_e=!1,Kt=n}}}function s0(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Kt=n}function Zl(n){if(n!==Kt)return!1;if(!_e)return s0(n),_e=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Gd(n.type,n.memoizedProps)),r&&(r=qt)){if(tu(n))throw o0(),Error(s(418));for(;r;)i0(n,r),r=ji(r.nextSibling)}if(s0(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(s(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(r===0){qt=ji(n.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}n=n.nextSibling}qt=null}}else qt=Kt?ji(n.stateNode.nextSibling):null;return!0}function o0(){for(var n=qt;n;)n=ji(n.nextSibling)}function Kr(){qt=Kt=null,_e=!1}function iu(n){$n===null?$n=[n]:$n.push(n)}var Q5=F.ReactCurrentBatchConfig;function eo(n,r,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(s(309));var a=o.stateNode}if(!a)throw Error(s(147,n));var u=a,h=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===h?r.ref:(r=function(y){var w=u.refs;y===null?delete w[h]:w[h]=y},r._stringRef=h,r)}if(typeof n!="string")throw Error(s(284));if(!o._owner)throw Error(s(290,n))}return n}function Gl(n,r){throw n=Object.prototype.toString.call(r),Error(s(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function l0(n){var r=n._init;return r(n._payload)}function a0(n){function r(D,L){if(n){var I=D.deletions;I===null?(D.deletions=[L],D.flags|=16):I.push(L)}}function o(D,L){if(!n)return null;for(;L!==null;)r(D,L),L=L.sibling;return null}function a(D,L){for(D=new Map;L!==null;)L.key!==null?D.set(L.key,L):D.set(L.index,L),L=L.sibling;return D}function u(D,L){return D=Ei(D,L),D.index=0,D.sibling=null,D}function h(D,L,I){return D.index=I,n?(I=D.alternate,I!==null?(I=I.index,I<L?(D.flags|=2,L):I):(D.flags|=2,L)):(D.flags|=1048576,L)}function y(D){return n&&D.alternate===null&&(D.flags|=2),D}function w(D,L,I,q){return L===null||L.tag!==6?(L=Ku(I,D.mode,q),L.return=D,L):(L=u(L,I),L.return=D,L)}function $(D,L,I,q){var ce=I.type;return ce===V?U(D,L,I.props.children,q,I.key):L!==null&&(L.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===$e&&l0(ce)===L.type)?(q=u(L,I.props),q.ref=eo(D,L,I),q.return=D,q):(q=ga(I.type,I.key,I.props,null,D.mode,q),q.ref=eo(D,L,I),q.return=D,q)}function A(D,L,I,q){return L===null||L.tag!==4||L.stateNode.containerInfo!==I.containerInfo||L.stateNode.implementation!==I.implementation?(L=qu(I,D.mode,q),L.return=D,L):(L=u(L,I.children||[]),L.return=D,L)}function U(D,L,I,q,ce){return L===null||L.tag!==7?(L=sr(I,D.mode,q,ce),L.return=D,L):(L=u(L,I),L.return=D,L)}function G(D,L,I){if(typeof L=="string"&&L!==""||typeof L=="number")return L=Ku(""+L,D.mode,I),L.return=D,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case O:return I=ga(L.type,L.key,L.props,null,D.mode,I),I.ref=eo(D,null,L),I.return=D,I;case X:return L=qu(L,D.mode,I),L.return=D,L;case $e:var q=L._init;return G(D,q(L._payload),I)}if(Bs(L)||ee(L))return L=sr(L,D.mode,I,null),L.return=D,L;Gl(D,L)}return null}function W(D,L,I,q){var ce=L!==null?L.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return ce!==null?null:w(D,L,""+I,q);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case O:return I.key===ce?$(D,L,I,q):null;case X:return I.key===ce?A(D,L,I,q):null;case $e:return ce=I._init,W(D,L,ce(I._payload),q)}if(Bs(I)||ee(I))return ce!==null?null:U(D,L,I,q,null);Gl(D,I)}return null}function ie(D,L,I,q,ce){if(typeof q=="string"&&q!==""||typeof q=="number")return D=D.get(I)||null,w(L,D,""+q,ce);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case O:return D=D.get(q.key===null?I:q.key)||null,$(L,D,q,ce);case X:return D=D.get(q.key===null?I:q.key)||null,A(L,D,q,ce);case $e:var fe=q._init;return ie(D,L,I,fe(q._payload),ce)}if(Bs(q)||ee(q))return D=D.get(I)||null,U(L,D,q,ce,null);Gl(L,q)}return null}function se(D,L,I,q){for(var ce=null,fe=null,he=L,xe=L=0,ht=null;he!==null&&xe<I.length;xe++){he.index>xe?(ht=he,he=null):ht=he.sibling;var Le=W(D,he,I[xe],q);if(Le===null){he===null&&(he=ht);break}n&&he&&Le.alternate===null&&r(D,he),L=h(Le,L,xe),fe===null?ce=Le:fe.sibling=Le,fe=Le,he=ht}if(xe===I.length)return o(D,he),_e&&Xi(D,xe),ce;if(he===null){for(;xe<I.length;xe++)he=G(D,I[xe],q),he!==null&&(L=h(he,L,xe),fe===null?ce=he:fe.sibling=he,fe=he);return _e&&Xi(D,xe),ce}for(he=a(D,he);xe<I.length;xe++)ht=ie(he,D,xe,I[xe],q),ht!==null&&(n&&ht.alternate!==null&&he.delete(ht.key===null?xe:ht.key),L=h(ht,L,xe),fe===null?ce=ht:fe.sibling=ht,fe=ht);return n&&he.forEach(function(Di){return r(D,Di)}),_e&&Xi(D,xe),ce}function le(D,L,I,q){var ce=ee(I);if(typeof ce!="function")throw Error(s(150));if(I=ce.call(I),I==null)throw Error(s(151));for(var fe=ce=null,he=L,xe=L=0,ht=null,Le=I.next();he!==null&&!Le.done;xe++,Le=I.next()){he.index>xe?(ht=he,he=null):ht=he.sibling;var Di=W(D,he,Le.value,q);if(Di===null){he===null&&(he=ht);break}n&&he&&Di.alternate===null&&r(D,he),L=h(Di,L,xe),fe===null?ce=Di:fe.sibling=Di,fe=Di,he=ht}if(Le.done)return o(D,he),_e&&Xi(D,xe),ce;if(he===null){for(;!Le.done;xe++,Le=I.next())Le=G(D,Le.value,q),Le!==null&&(L=h(Le,L,xe),fe===null?ce=Le:fe.sibling=Le,fe=Le);return _e&&Xi(D,xe),ce}for(he=a(D,he);!Le.done;xe++,Le=I.next())Le=ie(he,D,xe,Le.value,q),Le!==null&&(n&&Le.alternate!==null&&he.delete(Le.key===null?xe:Le.key),L=h(Le,L,xe),fe===null?ce=Le:fe.sibling=Le,fe=Le);return n&&he.forEach(function(E6){return r(D,E6)}),_e&&Xi(D,xe),ce}function Xe(D,L,I,q){if(typeof I=="object"&&I!==null&&I.type===V&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case O:e:{for(var ce=I.key,fe=L;fe!==null;){if(fe.key===ce){if(ce=I.type,ce===V){if(fe.tag===7){o(D,fe.sibling),L=u(fe,I.props.children),L.return=D,D=L;break e}}else if(fe.elementType===ce||typeof ce=="object"&&ce!==null&&ce.$$typeof===$e&&l0(ce)===fe.type){o(D,fe.sibling),L=u(fe,I.props),L.ref=eo(D,fe,I),L.return=D,D=L;break e}o(D,fe);break}else r(D,fe);fe=fe.sibling}I.type===V?(L=sr(I.props.children,D.mode,q,I.key),L.return=D,D=L):(q=ga(I.type,I.key,I.props,null,D.mode,q),q.ref=eo(D,L,I),q.return=D,D=q)}return y(D);case X:e:{for(fe=I.key;L!==null;){if(L.key===fe)if(L.tag===4&&L.stateNode.containerInfo===I.containerInfo&&L.stateNode.implementation===I.implementation){o(D,L.sibling),L=u(L,I.children||[]),L.return=D,D=L;break e}else{o(D,L);break}else r(D,L);L=L.sibling}L=qu(I,D.mode,q),L.return=D,D=L}return y(D);case $e:return fe=I._init,Xe(D,L,fe(I._payload),q)}if(Bs(I))return se(D,L,I,q);if(ee(I))return le(D,L,I,q);Gl(D,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,L!==null&&L.tag===6?(o(D,L.sibling),L=u(L,I),L.return=D,D=L):(o(D,L),L=Ku(I,D.mode,q),L.return=D,D=L),y(D)):o(D,L)}return Xe}var qr=a0(!0),c0=a0(!1),Kl=Ci(null),ql=null,Yr=null,ru=null;function su(){ru=Yr=ql=null}function ou(n){var r=Kl.current;Fe(Kl),n._currentValue=r}function lu(n,r,o){for(;n!==null;){var a=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,a!==null&&(a.childLanes|=r)):a!==null&&(a.childLanes&r)!==r&&(a.childLanes|=r),n===o)break;n=n.return}}function Xr(n,r){ql=n,ru=Yr=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Ht=!0),n.firstContext=null)}function sn(n){var r=n._currentValue;if(ru!==n)if(n={context:n,memoizedValue:r,next:null},Yr===null){if(ql===null)throw Error(s(308));Yr=n,ql.dependencies={lanes:0,firstContext:n}}else Yr=Yr.next=n;return r}var Qi=null;function au(n){Qi===null?Qi=[n]:Qi.push(n)}function d0(n,r,o,a){var u=r.interleaved;return u===null?(o.next=o,au(r)):(o.next=u.next,u.next=o),r.interleaved=o,ni(n,a)}function ni(n,r){n.lanes|=r;var o=n.alternate;for(o!==null&&(o.lanes|=r),o=n,n=n.return;n!==null;)n.childLanes|=r,o=n.alternate,o!==null&&(o.childLanes|=r),o=n,n=n.return;return o.tag===3?o.stateNode:null}var Si=!1;function cu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function u0(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ii(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function ki(n,r,o){var a=n.updateQueue;if(a===null)return null;if(a=a.shared,(Te&2)!==0){var u=a.pending;return u===null?r.next=r:(r.next=u.next,u.next=r),a.pending=r,ni(n,o)}return u=a.interleaved,u===null?(r.next=r,au(a)):(r.next=u.next,u.next=r),a.interleaved=r,ni(n,o)}function Yl(n,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var a=r.lanes;a&=n.pendingLanes,o|=a,r.lanes=o,bd(n,o)}}function p0(n,r){var o=n.updateQueue,a=n.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var u=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var y={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?u=h=y:h=h.next=y,o=o.next}while(o!==null);h===null?u=h=r:h=h.next=r}else u=h=r;o={baseState:a.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:a.shared,effects:a.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=r:n.next=r,o.lastBaseUpdate=r}function Xl(n,r,o,a){var u=n.updateQueue;Si=!1;var h=u.firstBaseUpdate,y=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var $=w,A=$.next;$.next=null,y===null?h=A:y.next=A,y=$;var U=n.alternate;U!==null&&(U=U.updateQueue,w=U.lastBaseUpdate,w!==y&&(w===null?U.firstBaseUpdate=A:w.next=A,U.lastBaseUpdate=$))}if(h!==null){var G=u.baseState;y=0,U=A=$=null,w=h;do{var W=w.lane,ie=w.eventTime;if((a&W)===W){U!==null&&(U=U.next={eventTime:ie,lane:0,tag:w.tag,payload:w.payload,callback:w.callback,next:null});e:{var se=n,le=w;switch(W=r,ie=o,le.tag){case 1:if(se=le.payload,typeof se=="function"){G=se.call(ie,G,W);break e}G=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=le.payload,W=typeof se=="function"?se.call(ie,G,W):se,W==null)break e;G=Y({},G,W);break e;case 2:Si=!0}}w.callback!==null&&w.lane!==0&&(n.flags|=64,W=u.effects,W===null?u.effects=[w]:W.push(w))}else ie={eventTime:ie,lane:W,tag:w.tag,payload:w.payload,callback:w.callback,next:null},U===null?(A=U=ie,$=G):U=U.next=ie,y|=W;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;W=w,w=W.next,W.next=null,u.lastBaseUpdate=W,u.shared.pending=null}}while(!0);if(U===null&&($=G),u.baseState=$,u.firstBaseUpdate=A,u.lastBaseUpdate=U,r=u.shared.interleaved,r!==null){u=r;do y|=u.lane,u=u.next;while(u!==r)}else h===null&&(u.shared.lanes=0);tr|=y,n.lanes=y,n.memoizedState=G}}function f0(n,r,o){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var a=n[r],u=a.callback;if(u!==null){if(a.callback=null,a=o,typeof u!="function")throw Error(s(191,u));u.call(a)}}}var to={},On=Ci(to),no=Ci(to),io=Ci(to);function Ji(n){if(n===to)throw Error(s(174));return n}function du(n,r){switch(Me(io,r),Me(no,n),Me(On,to),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ud(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=ud(r,n)}Fe(On),Me(On,r)}function Qr(){Fe(On),Fe(no),Fe(io)}function h0(n){Ji(io.current);var r=Ji(On.current),o=ud(r,n.type);r!==o&&(Me(no,n),Me(On,o))}function uu(n){no.current===n&&(Fe(On),Fe(no))}var He=Ci(0);function Ql(n){for(var r=n;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var pu=[];function fu(){for(var n=0;n<pu.length;n++)pu[n]._workInProgressVersionPrimary=null;pu.length=0}var Jl=F.ReactCurrentDispatcher,hu=F.ReactCurrentBatchConfig,er=0,We=null,rt=null,pt=null,ea=!1,ro=!1,so=0,J5=0;function $t(){throw Error(s(321))}function xu(n,r){if(r===null)return!1;for(var o=0;o<r.length&&o<n.length;o++)if(!Tn(n[o],r[o]))return!1;return!0}function mu(n,r,o,a,u,h){if(er=h,We=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Jl.current=n===null||n.memoizedState===null?i6:r6,n=o(a,u),ro){h=0;do{if(ro=!1,so=0,25<=h)throw Error(s(301));h+=1,pt=rt=null,r.updateQueue=null,Jl.current=s6,n=o(a,u)}while(ro)}if(Jl.current=ia,r=rt!==null&&rt.next!==null,er=0,pt=rt=We=null,ea=!1,r)throw Error(s(300));return n}function gu(){var n=so!==0;return so=0,n}function _n(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pt===null?We.memoizedState=pt=n:pt=pt.next=n,pt}function on(){if(rt===null){var n=We.alternate;n=n!==null?n.memoizedState:null}else n=rt.next;var r=pt===null?We.memoizedState:pt.next;if(r!==null)pt=r,rt=n;else{if(n===null)throw Error(s(310));rt=n,n={memoizedState:rt.memoizedState,baseState:rt.baseState,baseQueue:rt.baseQueue,queue:rt.queue,next:null},pt===null?We.memoizedState=pt=n:pt=pt.next=n}return pt}function oo(n,r){return typeof r=="function"?r(n):r}function vu(n){var r=on(),o=r.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=n;var a=rt,u=a.baseQueue,h=o.pending;if(h!==null){if(u!==null){var y=u.next;u.next=h.next,h.next=y}a.baseQueue=u=h,o.pending=null}if(u!==null){h=u.next,a=a.baseState;var w=y=null,$=null,A=h;do{var U=A.lane;if((er&U)===U)$!==null&&($=$.next={lane:0,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),a=A.hasEagerState?A.eagerState:n(a,A.action);else{var G={lane:U,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null};$===null?(w=$=G,y=a):$=$.next=G,We.lanes|=U,tr|=U}A=A.next}while(A!==null&&A!==h);$===null?y=a:$.next=w,Tn(a,r.memoizedState)||(Ht=!0),r.memoizedState=a,r.baseState=y,r.baseQueue=$,o.lastRenderedState=a}if(n=o.interleaved,n!==null){u=n;do h=u.lane,We.lanes|=h,tr|=h,u=u.next;while(u!==n)}else u===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function yu(n){var r=on(),o=r.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=n;var a=o.dispatch,u=o.pending,h=r.memoizedState;if(u!==null){o.pending=null;var y=u=u.next;do h=n(h,y.action),y=y.next;while(y!==u);Tn(h,r.memoizedState)||(Ht=!0),r.memoizedState=h,r.baseQueue===null&&(r.baseState=h),o.lastRenderedState=h}return[h,a]}function x0(){}function m0(n,r){var o=We,a=on(),u=r(),h=!Tn(a.memoizedState,u);if(h&&(a.memoizedState=u,Ht=!0),a=a.queue,ju(y0.bind(null,o,a,n),[n]),a.getSnapshot!==r||h||pt!==null&&pt.memoizedState.tag&1){if(o.flags|=2048,lo(9,v0.bind(null,o,a,u,r),void 0,null),ft===null)throw Error(s(349));(er&30)!==0||g0(o,r,u)}return u}function g0(n,r,o){n.flags|=16384,n={getSnapshot:r,value:o},r=We.updateQueue,r===null?(r={lastEffect:null,stores:null},We.updateQueue=r,r.stores=[n]):(o=r.stores,o===null?r.stores=[n]:o.push(n))}function v0(n,r,o,a){r.value=o,r.getSnapshot=a,j0(r)&&C0(n)}function y0(n,r,o){return o(function(){j0(r)&&C0(n)})}function j0(n){var r=n.getSnapshot;n=n.value;try{var o=r();return!Tn(n,o)}catch{return!0}}function C0(n){var r=ni(n,1);r!==null&&En(r,n,1,-1)}function w0(n){var r=_n();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oo,lastRenderedState:n},r.queue=n,n=n.dispatch=n6.bind(null,We,n),[r.memoizedState,n]}function lo(n,r,o,a){return n={tag:n,create:r,destroy:o,deps:a,next:null},r=We.updateQueue,r===null?(r={lastEffect:null,stores:null},We.updateQueue=r,r.lastEffect=n.next=n):(o=r.lastEffect,o===null?r.lastEffect=n.next=n:(a=o.next,o.next=n,n.next=a,r.lastEffect=n)),n}function b0(){return on().memoizedState}function ta(n,r,o,a){var u=_n();We.flags|=n,u.memoizedState=lo(1|r,o,void 0,a===void 0?null:a)}function na(n,r,o,a){var u=on();a=a===void 0?null:a;var h=void 0;if(rt!==null){var y=rt.memoizedState;if(h=y.destroy,a!==null&&xu(a,y.deps)){u.memoizedState=lo(r,o,h,a);return}}We.flags|=n,u.memoizedState=lo(1|r,o,h,a)}function S0(n,r){return ta(8390656,8,n,r)}function ju(n,r){return na(2048,8,n,r)}function k0(n,r){return na(4,2,n,r)}function T0(n,r){return na(4,4,n,r)}function $0(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function L0(n,r,o){return o=o!=null?o.concat([n]):null,na(4,4,$0.bind(null,r,n),o)}function Cu(){}function B0(n,r){var o=on();r=r===void 0?null:r;var a=o.memoizedState;return a!==null&&r!==null&&xu(r,a[1])?a[0]:(o.memoizedState=[n,r],n)}function P0(n,r){var o=on();r=r===void 0?null:r;var a=o.memoizedState;return a!==null&&r!==null&&xu(r,a[1])?a[0]:(n=n(),o.memoizedState=[n,r],n)}function E0(n,r,o){return(er&21)===0?(n.baseState&&(n.baseState=!1,Ht=!0),n.memoizedState=o):(Tn(o,r)||(o=lh(),We.lanes|=o,tr|=o,n.baseState=!0),r)}function e6(n,r){var o=Re;Re=o!==0&&4>o?o:4,n(!0);var a=hu.transition;hu.transition={};try{n(!1),r()}finally{Re=o,hu.transition=a}}function D0(){return on().memoizedState}function t6(n,r,o){var a=Bi(n);if(o={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null},R0(n))I0(r,o);else if(o=d0(n,r,o,a),o!==null){var u=At();En(o,n,a,u),A0(o,r,a)}}function n6(n,r,o){var a=Bi(n),u={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null};if(R0(n))I0(r,u);else{var h=n.alternate;if(n.lanes===0&&(h===null||h.lanes===0)&&(h=r.lastRenderedReducer,h!==null))try{var y=r.lastRenderedState,w=h(y,o);if(u.hasEagerState=!0,u.eagerState=w,Tn(w,y)){var $=r.interleaved;$===null?(u.next=u,au(r)):(u.next=$.next,$.next=u),r.interleaved=u;return}}catch{}finally{}o=d0(n,r,u,a),o!==null&&(u=At(),En(o,n,a,u),A0(o,r,a))}}function R0(n){var r=n.alternate;return n===We||r!==null&&r===We}function I0(n,r){ro=ea=!0;var o=n.pending;o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r}function A0(n,r,o){if((o&4194240)!==0){var a=r.lanes;a&=n.pendingLanes,o|=a,r.lanes=o,bd(n,o)}}var ia={readContext:sn,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},i6={readContext:sn,useCallback:function(n,r){return _n().memoizedState=[n,r===void 0?null:r],n},useContext:sn,useEffect:S0,useImperativeHandle:function(n,r,o){return o=o!=null?o.concat([n]):null,ta(4194308,4,$0.bind(null,r,n),o)},useLayoutEffect:function(n,r){return ta(4194308,4,n,r)},useInsertionEffect:function(n,r){return ta(4,2,n,r)},useMemo:function(n,r){var o=_n();return r=r===void 0?null:r,n=n(),o.memoizedState=[n,r],n},useReducer:function(n,r,o){var a=_n();return r=o!==void 0?o(r):r,a.memoizedState=a.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},a.queue=n,n=n.dispatch=t6.bind(null,We,n),[a.memoizedState,n]},useRef:function(n){var r=_n();return n={current:n},r.memoizedState=n},useState:w0,useDebugValue:Cu,useDeferredValue:function(n){return _n().memoizedState=n},useTransition:function(){var n=w0(!1),r=n[0];return n=e6.bind(null,n[1]),_n().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,o){var a=We,u=_n();if(_e){if(o===void 0)throw Error(s(407));o=o()}else{if(o=r(),ft===null)throw Error(s(349));(er&30)!==0||g0(a,r,o)}u.memoizedState=o;var h={value:o,getSnapshot:r};return u.queue=h,S0(y0.bind(null,a,h,n),[n]),a.flags|=2048,lo(9,v0.bind(null,a,h,o,r),void 0,null),o},useId:function(){var n=_n(),r=ft.identifierPrefix;if(_e){var o=ti,a=ei;o=(a&~(1<<32-kn(a)-1)).toString(32)+o,r=":"+r+"R"+o,o=so++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=J5++,r=":"+r+"r"+o.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},r6={readContext:sn,useCallback:B0,useContext:sn,useEffect:ju,useImperativeHandle:L0,useInsertionEffect:k0,useLayoutEffect:T0,useMemo:P0,useReducer:vu,useRef:b0,useState:function(){return vu(oo)},useDebugValue:Cu,useDeferredValue:function(n){var r=on();return E0(r,rt.memoizedState,n)},useTransition:function(){var n=vu(oo)[0],r=on().memoizedState;return[n,r]},useMutableSource:x0,useSyncExternalStore:m0,useId:D0,unstable_isNewReconciler:!1},s6={readContext:sn,useCallback:B0,useContext:sn,useEffect:ju,useImperativeHandle:L0,useInsertionEffect:k0,useLayoutEffect:T0,useMemo:P0,useReducer:yu,useRef:b0,useState:function(){return yu(oo)},useDebugValue:Cu,useDeferredValue:function(n){var r=on();return rt===null?r.memoizedState=n:E0(r,rt.memoizedState,n)},useTransition:function(){var n=yu(oo)[0],r=on().memoizedState;return[n,r]},useMutableSource:x0,useSyncExternalStore:m0,useId:D0,unstable_isNewReconciler:!1};function Ln(n,r){if(n&&n.defaultProps){r=Y({},r),n=n.defaultProps;for(var o in n)r[o]===void 0&&(r[o]=n[o]);return r}return r}function wu(n,r,o,a){r=n.memoizedState,o=o(a,r),o=o==null?r:Y({},r,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var ra={isMounted:function(n){return(n=n._reactInternals)?Gi(n)===n:!1},enqueueSetState:function(n,r,o){n=n._reactInternals;var a=At(),u=Bi(n),h=ii(a,u);h.payload=r,o!=null&&(h.callback=o),r=ki(n,h,u),r!==null&&(En(r,n,u,a),Yl(r,n,u))},enqueueReplaceState:function(n,r,o){n=n._reactInternals;var a=At(),u=Bi(n),h=ii(a,u);h.tag=1,h.payload=r,o!=null&&(h.callback=o),r=ki(n,h,u),r!==null&&(En(r,n,u,a),Yl(r,n,u))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var o=At(),a=Bi(n),u=ii(o,a);u.tag=2,r!=null&&(u.callback=r),r=ki(n,u,a),r!==null&&(En(r,n,a,o),Yl(r,n,a))}};function z0(n,r,o,a,u,h,y){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(a,h,y):r.prototype&&r.prototype.isPureReactComponent?!Gs(o,a)||!Gs(u,h):!0}function M0(n,r,o){var a=!1,u=wi,h=r.contextType;return typeof h=="object"&&h!==null?h=sn(h):(u=_t(r)?qi:Tt.current,a=r.contextTypes,h=(a=a!=null)?Ur(n,u):wi),r=new r(o,h),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ra,n.stateNode=r,r._reactInternals=n,a&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=u,n.__reactInternalMemoizedMaskedChildContext=h),r}function V0(n,r,o,a){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,a),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,a),r.state!==n&&ra.enqueueReplaceState(r,r.state,null)}function bu(n,r,o,a){var u=n.stateNode;u.props=o,u.state=n.memoizedState,u.refs={},cu(n);var h=r.contextType;typeof h=="object"&&h!==null?u.context=sn(h):(h=_t(r)?qi:Tt.current,u.context=Ur(n,h)),u.state=n.memoizedState,h=r.getDerivedStateFromProps,typeof h=="function"&&(wu(n,r,h,o),u.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(r=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),r!==u.state&&ra.enqueueReplaceState(u,u.state,null),Xl(n,o,u,a),u.state=n.memoizedState),typeof u.componentDidMount=="function"&&(n.flags|=4194308)}function Jr(n,r){try{var o="",a=r;do o+=ue(a),a=a.return;while(a);var u=o}catch(h){u=`
Error generating stack: `+h.message+`
`+h.stack}return{value:n,source:r,stack:u,digest:null}}function Su(n,r,o){return{value:n,source:null,stack:o??null,digest:r??null}}function ku(n,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var o6=typeof WeakMap=="function"?WeakMap:Map;function F0(n,r,o){o=ii(-1,o),o.tag=3,o.payload={element:null};var a=r.value;return o.callback=function(){ua||(ua=!0,Nu=a),ku(n,r)},o}function N0(n,r,o){o=ii(-1,o),o.tag=3;var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var u=r.value;o.payload=function(){return a(u)},o.callback=function(){ku(n,r)}}var h=n.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){ku(n,r),typeof a!="function"&&($i===null?$i=new Set([this]):$i.add(this));var y=r.stack;this.componentDidCatch(r.value,{componentStack:y!==null?y:""})}),o}function O0(n,r,o){var a=n.pingCache;if(a===null){a=n.pingCache=new o6;var u=new Set;a.set(r,u)}else u=a.get(r),u===void 0&&(u=new Set,a.set(r,u));u.has(o)||(u.add(o),n=j6.bind(null,n,r,o),r.then(n,n))}function _0(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function H0(n,r,o,a,u){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=ii(-1,1),r.tag=2,ki(o,r,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=u,n)}var l6=F.ReactCurrentOwner,Ht=!1;function It(n,r,o,a){r.child=n===null?c0(r,null,o,a):qr(r,n.child,o,a)}function W0(n,r,o,a,u){o=o.render;var h=r.ref;return Xr(r,u),a=mu(n,r,o,a,h,u),o=gu(),n!==null&&!Ht?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~u,ri(n,r,u)):(_e&&o&&Jd(r),r.flags|=1,It(n,r,a,u),r.child)}function U0(n,r,o,a,u){if(n===null){var h=o.type;return typeof h=="function"&&!Gu(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=h,Z0(n,r,h,a,u)):(n=ga(o.type,null,a,r,r.mode,u),n.ref=r.ref,n.return=r,r.child=n)}if(h=n.child,(n.lanes&u)===0){var y=h.memoizedProps;if(o=o.compare,o=o!==null?o:Gs,o(y,a)&&n.ref===r.ref)return ri(n,r,u)}return r.flags|=1,n=Ei(h,a),n.ref=r.ref,n.return=r,r.child=n}function Z0(n,r,o,a,u){if(n!==null){var h=n.memoizedProps;if(Gs(h,a)&&n.ref===r.ref)if(Ht=!1,r.pendingProps=a=h,(n.lanes&u)!==0)(n.flags&131072)!==0&&(Ht=!0);else return r.lanes=n.lanes,ri(n,r,u)}return Tu(n,r,o,a,u)}function G0(n,r,o){var a=r.pendingProps,u=a.children,h=n!==null?n.memoizedState:null;if(a.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Me(ts,Yt),Yt|=o;else{if((o&1073741824)===0)return n=h!==null?h.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Me(ts,Yt),Yt|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=h!==null?h.baseLanes:o,Me(ts,Yt),Yt|=a}else h!==null?(a=h.baseLanes|o,r.memoizedState=null):a=o,Me(ts,Yt),Yt|=a;return It(n,r,u,o),r.child}function K0(n,r){var o=r.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function Tu(n,r,o,a,u){var h=_t(o)?qi:Tt.current;return h=Ur(r,h),Xr(r,u),o=mu(n,r,o,a,h,u),a=gu(),n!==null&&!Ht?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~u,ri(n,r,u)):(_e&&a&&Jd(r),r.flags|=1,It(n,r,o,u),r.child)}function q0(n,r,o,a,u){if(_t(o)){var h=!0;_l(r)}else h=!1;if(Xr(r,u),r.stateNode===null)oa(n,r),M0(r,o,a),bu(r,o,a,u),a=!0;else if(n===null){var y=r.stateNode,w=r.memoizedProps;y.props=w;var $=y.context,A=o.contextType;typeof A=="object"&&A!==null?A=sn(A):(A=_t(o)?qi:Tt.current,A=Ur(r,A));var U=o.getDerivedStateFromProps,G=typeof U=="function"||typeof y.getSnapshotBeforeUpdate=="function";G||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(w!==a||$!==A)&&V0(r,y,a,A),Si=!1;var W=r.memoizedState;y.state=W,Xl(r,a,y,u),$=r.memoizedState,w!==a||W!==$||Ot.current||Si?(typeof U=="function"&&(wu(r,o,U,a),$=r.memoizedState),(w=Si||z0(r,o,w,a,W,$,A))?(G||typeof y.UNSAFE_componentWillMount!="function"&&typeof y.componentWillMount!="function"||(typeof y.componentWillMount=="function"&&y.componentWillMount(),typeof y.UNSAFE_componentWillMount=="function"&&y.UNSAFE_componentWillMount()),typeof y.componentDidMount=="function"&&(r.flags|=4194308)):(typeof y.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=a,r.memoizedState=$),y.props=a,y.state=$,y.context=A,a=w):(typeof y.componentDidMount=="function"&&(r.flags|=4194308),a=!1)}else{y=r.stateNode,u0(n,r),w=r.memoizedProps,A=r.type===r.elementType?w:Ln(r.type,w),y.props=A,G=r.pendingProps,W=y.context,$=o.contextType,typeof $=="object"&&$!==null?$=sn($):($=_t(o)?qi:Tt.current,$=Ur(r,$));var ie=o.getDerivedStateFromProps;(U=typeof ie=="function"||typeof y.getSnapshotBeforeUpdate=="function")||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(w!==G||W!==$)&&V0(r,y,a,$),Si=!1,W=r.memoizedState,y.state=W,Xl(r,a,y,u);var se=r.memoizedState;w!==G||W!==se||Ot.current||Si?(typeof ie=="function"&&(wu(r,o,ie,a),se=r.memoizedState),(A=Si||z0(r,o,A,a,W,se,$)||!1)?(U||typeof y.UNSAFE_componentWillUpdate!="function"&&typeof y.componentWillUpdate!="function"||(typeof y.componentWillUpdate=="function"&&y.componentWillUpdate(a,se,$),typeof y.UNSAFE_componentWillUpdate=="function"&&y.UNSAFE_componentWillUpdate(a,se,$)),typeof y.componentDidUpdate=="function"&&(r.flags|=4),typeof y.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof y.componentDidUpdate!="function"||w===n.memoizedProps&&W===n.memoizedState||(r.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||w===n.memoizedProps&&W===n.memoizedState||(r.flags|=1024),r.memoizedProps=a,r.memoizedState=se),y.props=a,y.state=se,y.context=$,a=A):(typeof y.componentDidUpdate!="function"||w===n.memoizedProps&&W===n.memoizedState||(r.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||w===n.memoizedProps&&W===n.memoizedState||(r.flags|=1024),a=!1)}return $u(n,r,o,a,h,u)}function $u(n,r,o,a,u,h){K0(n,r);var y=(r.flags&128)!==0;if(!a&&!y)return u&&e0(r,o,!1),ri(n,r,h);a=r.stateNode,l6.current=r;var w=y&&typeof o.getDerivedStateFromError!="function"?null:a.render();return r.flags|=1,n!==null&&y?(r.child=qr(r,n.child,null,h),r.child=qr(r,null,w,h)):It(n,r,w,h),r.memoizedState=a.state,u&&e0(r,o,!0),r.child}function Y0(n){var r=n.stateNode;r.pendingContext?Qh(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Qh(n,r.context,!1),du(n,r.containerInfo)}function X0(n,r,o,a,u){return Kr(),iu(u),r.flags|=256,It(n,r,o,a),r.child}var Lu={dehydrated:null,treeContext:null,retryLane:0};function Bu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Q0(n,r,o){var a=r.pendingProps,u=He.current,h=!1,y=(r.flags&128)!==0,w;if((w=y)||(w=n!==null&&n.memoizedState===null?!1:(u&2)!==0),w?(h=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(u|=1),Me(He,u&1),n===null)return nu(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(y=a.children,n=a.fallback,h?(a=r.mode,h=r.child,y={mode:"hidden",children:y},(a&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=y):h=va(y,a,0,null),n=sr(n,a,o,null),h.return=r,n.return=r,h.sibling=n,r.child=h,r.child.memoizedState=Bu(o),r.memoizedState=Lu,n):Pu(r,y));if(u=n.memoizedState,u!==null&&(w=u.dehydrated,w!==null))return a6(n,r,y,a,w,u,o);if(h){h=a.fallback,y=r.mode,u=n.child,w=u.sibling;var $={mode:"hidden",children:a.children};return(y&1)===0&&r.child!==u?(a=r.child,a.childLanes=0,a.pendingProps=$,r.deletions=null):(a=Ei(u,$),a.subtreeFlags=u.subtreeFlags&14680064),w!==null?h=Ei(w,h):(h=sr(h,y,o,null),h.flags|=2),h.return=r,a.return=r,a.sibling=h,r.child=a,a=h,h=r.child,y=n.child.memoizedState,y=y===null?Bu(o):{baseLanes:y.baseLanes|o,cachePool:null,transitions:y.transitions},h.memoizedState=y,h.childLanes=n.childLanes&~o,r.memoizedState=Lu,a}return h=n.child,n=h.sibling,a=Ei(h,{mode:"visible",children:a.children}),(r.mode&1)===0&&(a.lanes=o),a.return=r,a.sibling=null,n!==null&&(o=r.deletions,o===null?(r.deletions=[n],r.flags|=16):o.push(n)),r.child=a,r.memoizedState=null,a}function Pu(n,r){return r=va({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function sa(n,r,o,a){return a!==null&&iu(a),qr(r,n.child,null,o),n=Pu(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function a6(n,r,o,a,u,h,y){if(o)return r.flags&256?(r.flags&=-257,a=Su(Error(s(422))),sa(n,r,y,a)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(h=a.fallback,u=r.mode,a=va({mode:"visible",children:a.children},u,0,null),h=sr(h,u,y,null),h.flags|=2,a.return=r,h.return=r,a.sibling=h,r.child=a,(r.mode&1)!==0&&qr(r,n.child,null,y),r.child.memoizedState=Bu(y),r.memoizedState=Lu,h);if((r.mode&1)===0)return sa(n,r,y,null);if(u.data==="$!"){if(a=u.nextSibling&&u.nextSibling.dataset,a)var w=a.dgst;return a=w,h=Error(s(419)),a=Su(h,a,void 0),sa(n,r,y,a)}if(w=(y&n.childLanes)!==0,Ht||w){if(a=ft,a!==null){switch(y&-y){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(a.suspendedLanes|y))!==0?0:u,u!==0&&u!==h.retryLane&&(h.retryLane=u,ni(n,u),En(a,n,u,-1))}return Zu(),a=Su(Error(s(421))),sa(n,r,y,a)}return u.data==="$?"?(r.flags|=128,r.child=n.child,r=C6.bind(null,n),u._reactRetry=r,null):(n=h.treeContext,qt=ji(u.nextSibling),Kt=r,_e=!0,$n=null,n!==null&&(nn[rn++]=ei,nn[rn++]=ti,nn[rn++]=Yi,ei=n.id,ti=n.overflow,Yi=r),r=Pu(r,a.children),r.flags|=4096,r)}function J0(n,r,o){n.lanes|=r;var a=n.alternate;a!==null&&(a.lanes|=r),lu(n.return,r,o)}function Eu(n,r,o,a,u){var h=n.memoizedState;h===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:u}:(h.isBackwards=r,h.rendering=null,h.renderingStartTime=0,h.last=a,h.tail=o,h.tailMode=u)}function e2(n,r,o){var a=r.pendingProps,u=a.revealOrder,h=a.tail;if(It(n,r,a.children,o),a=He.current,(a&2)!==0)a=a&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&J0(n,o,r);else if(n.tag===19)J0(n,o,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}a&=1}if(Me(He,a),(r.mode&1)===0)r.memoizedState=null;else switch(u){case"forwards":for(o=r.child,u=null;o!==null;)n=o.alternate,n!==null&&Ql(n)===null&&(u=o),o=o.sibling;o=u,o===null?(u=r.child,r.child=null):(u=o.sibling,o.sibling=null),Eu(r,!1,u,o,h);break;case"backwards":for(o=null,u=r.child,r.child=null;u!==null;){if(n=u.alternate,n!==null&&Ql(n)===null){r.child=u;break}n=u.sibling,u.sibling=o,o=u,u=n}Eu(r,!0,o,null,h);break;case"together":Eu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function oa(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function ri(n,r,o){if(n!==null&&(r.dependencies=n.dependencies),tr|=r.lanes,(o&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(s(153));if(r.child!==null){for(n=r.child,o=Ei(n,n.pendingProps),r.child=o,o.return=r;n.sibling!==null;)n=n.sibling,o=o.sibling=Ei(n,n.pendingProps),o.return=r;o.sibling=null}return r.child}function c6(n,r,o){switch(r.tag){case 3:Y0(r),Kr();break;case 5:h0(r);break;case 1:_t(r.type)&&_l(r);break;case 4:du(r,r.stateNode.containerInfo);break;case 10:var a=r.type._context,u=r.memoizedProps.value;Me(Kl,a._currentValue),a._currentValue=u;break;case 13:if(a=r.memoizedState,a!==null)return a.dehydrated!==null?(Me(He,He.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?Q0(n,r,o):(Me(He,He.current&1),n=ri(n,r,o),n!==null?n.sibling:null);Me(He,He.current&1);break;case 19:if(a=(o&r.childLanes)!==0,(n.flags&128)!==0){if(a)return e2(n,r,o);r.flags|=128}if(u=r.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Me(He,He.current),a)break;return null;case 22:case 23:return r.lanes=0,G0(n,r,o)}return ri(n,r,o)}var t2,Du,n2,i2;t2=function(n,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Du=function(){},n2=function(n,r,o,a){var u=n.memoizedProps;if(u!==a){n=r.stateNode,Ji(On.current);var h=null;switch(o){case"input":u=ld(n,u),a=ld(n,a),h=[];break;case"select":u=Y({},u,{value:void 0}),a=Y({},a,{value:void 0}),h=[];break;case"textarea":u=dd(n,u),a=dd(n,a),h=[];break;default:typeof u.onClick!="function"&&typeof a.onClick=="function"&&(n.onclick=Fl)}pd(o,a);var y;o=null;for(A in u)if(!a.hasOwnProperty(A)&&u.hasOwnProperty(A)&&u[A]!=null)if(A==="style"){var w=u[A];for(y in w)w.hasOwnProperty(y)&&(o||(o={}),o[y]="")}else A!=="dangerouslySetInnerHTML"&&A!=="children"&&A!=="suppressContentEditableWarning"&&A!=="suppressHydrationWarning"&&A!=="autoFocus"&&(c.hasOwnProperty(A)?h||(h=[]):(h=h||[]).push(A,null));for(A in a){var $=a[A];if(w=u!=null?u[A]:void 0,a.hasOwnProperty(A)&&$!==w&&($!=null||w!=null))if(A==="style")if(w){for(y in w)!w.hasOwnProperty(y)||$&&$.hasOwnProperty(y)||(o||(o={}),o[y]="");for(y in $)$.hasOwnProperty(y)&&w[y]!==$[y]&&(o||(o={}),o[y]=$[y])}else o||(h||(h=[]),h.push(A,o)),o=$;else A==="dangerouslySetInnerHTML"?($=$?$.__html:void 0,w=w?w.__html:void 0,$!=null&&w!==$&&(h=h||[]).push(A,$)):A==="children"?typeof $!="string"&&typeof $!="number"||(h=h||[]).push(A,""+$):A!=="suppressContentEditableWarning"&&A!=="suppressHydrationWarning"&&(c.hasOwnProperty(A)?($!=null&&A==="onScroll"&&Ve("scroll",n),h||w===$||(h=[])):(h=h||[]).push(A,$))}o&&(h=h||[]).push("style",o);var A=h;(r.updateQueue=A)&&(r.flags|=4)}},i2=function(n,r,o,a){o!==a&&(r.flags|=4)};function ao(n,r){if(!_e)switch(n.tailMode){case"hidden":r=n.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:a.sibling=null}}function Lt(n){var r=n.alternate!==null&&n.alternate.child===n.child,o=0,a=0;if(r)for(var u=n.child;u!==null;)o|=u.lanes|u.childLanes,a|=u.subtreeFlags&14680064,a|=u.flags&14680064,u.return=n,u=u.sibling;else for(u=n.child;u!==null;)o|=u.lanes|u.childLanes,a|=u.subtreeFlags,a|=u.flags,u.return=n,u=u.sibling;return n.subtreeFlags|=a,n.childLanes=o,r}function d6(n,r,o){var a=r.pendingProps;switch(eu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(r),null;case 1:return _t(r.type)&&Ol(),Lt(r),null;case 3:return a=r.stateNode,Qr(),Fe(Ot),Fe(Tt),fu(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(n===null||n.child===null)&&(Zl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,$n!==null&&(Hu($n),$n=null))),Du(n,r),Lt(r),null;case 5:uu(r);var u=Ji(io.current);if(o=r.type,n!==null&&r.stateNode!=null)n2(n,r,o,a,u),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!a){if(r.stateNode===null)throw Error(s(166));return Lt(r),null}if(n=Ji(On.current),Zl(r)){a=r.stateNode,o=r.type;var h=r.memoizedProps;switch(a[Nn]=r,a[Qs]=h,n=(r.mode&1)!==0,o){case"dialog":Ve("cancel",a),Ve("close",a);break;case"iframe":case"object":case"embed":Ve("load",a);break;case"video":case"audio":for(u=0;u<qs.length;u++)Ve(qs[u],a);break;case"source":Ve("error",a);break;case"img":case"image":case"link":Ve("error",a),Ve("load",a);break;case"details":Ve("toggle",a);break;case"input":Mf(a,h),Ve("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!h.multiple},Ve("invalid",a);break;case"textarea":Nf(a,h),Ve("invalid",a)}pd(o,h),u=null;for(var y in h)if(h.hasOwnProperty(y)){var w=h[y];y==="children"?typeof w=="string"?a.textContent!==w&&(h.suppressHydrationWarning!==!0&&Vl(a.textContent,w,n),u=["children",w]):typeof w=="number"&&a.textContent!==""+w&&(h.suppressHydrationWarning!==!0&&Vl(a.textContent,w,n),u=["children",""+w]):c.hasOwnProperty(y)&&w!=null&&y==="onScroll"&&Ve("scroll",a)}switch(o){case"input":xl(a),Ff(a,h,!0);break;case"textarea":xl(a),_f(a);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(a.onclick=Fl)}a=u,r.updateQueue=a,a!==null&&(r.flags|=4)}else{y=u.nodeType===9?u:u.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Hf(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=y.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof a.is=="string"?n=y.createElement(o,{is:a.is}):(n=y.createElement(o),o==="select"&&(y=n,a.multiple?y.multiple=!0:a.size&&(y.size=a.size))):n=y.createElementNS(n,o),n[Nn]=r,n[Qs]=a,t2(n,r,!1,!1),r.stateNode=n;e:{switch(y=fd(o,a),o){case"dialog":Ve("cancel",n),Ve("close",n),u=a;break;case"iframe":case"object":case"embed":Ve("load",n),u=a;break;case"video":case"audio":for(u=0;u<qs.length;u++)Ve(qs[u],n);u=a;break;case"source":Ve("error",n),u=a;break;case"img":case"image":case"link":Ve("error",n),Ve("load",n),u=a;break;case"details":Ve("toggle",n),u=a;break;case"input":Mf(n,a),u=ld(n,a),Ve("invalid",n);break;case"option":u=a;break;case"select":n._wrapperState={wasMultiple:!!a.multiple},u=Y({},a,{value:void 0}),Ve("invalid",n);break;case"textarea":Nf(n,a),u=dd(n,a),Ve("invalid",n);break;default:u=a}pd(o,u),w=u;for(h in w)if(w.hasOwnProperty(h)){var $=w[h];h==="style"?Zf(n,$):h==="dangerouslySetInnerHTML"?($=$?$.__html:void 0,$!=null&&Wf(n,$)):h==="children"?typeof $=="string"?(o!=="textarea"||$!=="")&&Ps(n,$):typeof $=="number"&&Ps(n,""+$):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(c.hasOwnProperty(h)?$!=null&&h==="onScroll"&&Ve("scroll",n):$!=null&&M(n,h,$,y))}switch(o){case"input":xl(n),Ff(n,a,!1);break;case"textarea":xl(n),_f(n);break;case"option":a.value!=null&&n.setAttribute("value",""+Se(a.value));break;case"select":n.multiple=!!a.multiple,h=a.value,h!=null?Rr(n,!!a.multiple,h,!1):a.defaultValue!=null&&Rr(n,!!a.multiple,a.defaultValue,!0);break;default:typeof u.onClick=="function"&&(n.onclick=Fl)}switch(o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Lt(r),null;case 6:if(n&&r.stateNode!=null)i2(n,r,n.memoizedProps,a);else{if(typeof a!="string"&&r.stateNode===null)throw Error(s(166));if(o=Ji(io.current),Ji(On.current),Zl(r)){if(a=r.stateNode,o=r.memoizedProps,a[Nn]=r,(h=a.nodeValue!==o)&&(n=Kt,n!==null))switch(n.tag){case 3:Vl(a.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Vl(a.nodeValue,o,(n.mode&1)!==0)}h&&(r.flags|=4)}else a=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),a[Nn]=r,r.stateNode=a}return Lt(r),null;case 13:if(Fe(He),a=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(_e&&qt!==null&&(r.mode&1)!==0&&(r.flags&128)===0)o0(),Kr(),r.flags|=98560,h=!1;else if(h=Zl(r),a!==null&&a.dehydrated!==null){if(n===null){if(!h)throw Error(s(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[Nn]=r}else Kr(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Lt(r),h=!1}else $n!==null&&(Hu($n),$n=null),h=!0;if(!h)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(a=a!==null,a!==(n!==null&&n.memoizedState!==null)&&a&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(He.current&1)!==0?st===0&&(st=3):Zu())),r.updateQueue!==null&&(r.flags|=4),Lt(r),null);case 4:return Qr(),Du(n,r),n===null&&Ys(r.stateNode.containerInfo),Lt(r),null;case 10:return ou(r.type._context),Lt(r),null;case 17:return _t(r.type)&&Ol(),Lt(r),null;case 19:if(Fe(He),h=r.memoizedState,h===null)return Lt(r),null;if(a=(r.flags&128)!==0,y=h.rendering,y===null)if(a)ao(h,!1);else{if(st!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(y=Ql(n),y!==null){for(r.flags|=128,ao(h,!1),a=y.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),r.subtreeFlags=0,a=o,o=r.child;o!==null;)h=o,n=a,h.flags&=14680066,y=h.alternate,y===null?(h.childLanes=0,h.lanes=n,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=y.childLanes,h.lanes=y.lanes,h.child=y.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=y.memoizedProps,h.memoizedState=y.memoizedState,h.updateQueue=y.updateQueue,h.type=y.type,n=y.dependencies,h.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Me(He,He.current&1|2),r.child}n=n.sibling}h.tail!==null&&Ye()>ns&&(r.flags|=128,a=!0,ao(h,!1),r.lanes=4194304)}else{if(!a)if(n=Ql(y),n!==null){if(r.flags|=128,a=!0,o=n.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),ao(h,!0),h.tail===null&&h.tailMode==="hidden"&&!y.alternate&&!_e)return Lt(r),null}else 2*Ye()-h.renderingStartTime>ns&&o!==1073741824&&(r.flags|=128,a=!0,ao(h,!1),r.lanes=4194304);h.isBackwards?(y.sibling=r.child,r.child=y):(o=h.last,o!==null?o.sibling=y:r.child=y,h.last=y)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=Ye(),r.sibling=null,o=He.current,Me(He,a?o&1|2:o&1),r):(Lt(r),null);case 22:case 23:return Uu(),a=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==a&&(r.flags|=8192),a&&(r.mode&1)!==0?(Yt&1073741824)!==0&&(Lt(r),r.subtreeFlags&6&&(r.flags|=8192)):Lt(r),null;case 24:return null;case 25:return null}throw Error(s(156,r.tag))}function u6(n,r){switch(eu(r),r.tag){case 1:return _t(r.type)&&Ol(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Qr(),Fe(Ot),Fe(Tt),fu(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return uu(r),null;case 13:if(Fe(He),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(s(340));Kr()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Fe(He),null;case 4:return Qr(),null;case 10:return ou(r.type._context),null;case 22:case 23:return Uu(),null;case 24:return null;default:return null}}var la=!1,Bt=!1,p6=typeof WeakSet=="function"?WeakSet:Set,re=null;function es(n,r){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(a){Ze(n,r,a)}else o.current=null}function Ru(n,r,o){try{o()}catch(a){Ze(n,r,a)}}var r2=!1;function f6(n,r){if(Ud=$l,n=zh(),Md(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var u=a.anchorOffset,h=a.focusNode;a=a.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var y=0,w=-1,$=-1,A=0,U=0,G=n,W=null;t:for(;;){for(var ie;G!==o||u!==0&&G.nodeType!==3||(w=y+u),G!==h||a!==0&&G.nodeType!==3||($=y+a),G.nodeType===3&&(y+=G.nodeValue.length),(ie=G.firstChild)!==null;)W=G,G=ie;for(;;){if(G===n)break t;if(W===o&&++A===u&&(w=y),W===h&&++U===a&&($=y),(ie=G.nextSibling)!==null)break;G=W,W=G.parentNode}G=ie}o=w===-1||$===-1?null:{start:w,end:$}}else o=null}o=o||{start:0,end:0}}else o=null;for(Zd={focusedElem:n,selectionRange:o},$l=!1,re=r;re!==null;)if(r=re,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,re=n;else for(;re!==null;){r=re;try{var se=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(se!==null){var le=se.memoizedProps,Xe=se.memoizedState,D=r.stateNode,L=D.getSnapshotBeforeUpdate(r.elementType===r.type?le:Ln(r.type,le),Xe);D.__reactInternalSnapshotBeforeUpdate=L}break;case 3:var I=r.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(q){Ze(r,r.return,q)}if(n=r.sibling,n!==null){n.return=r.return,re=n;break}re=r.return}return se=r2,r2=!1,se}function co(n,r,o){var a=r.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var u=a=a.next;do{if((u.tag&n)===n){var h=u.destroy;u.destroy=void 0,h!==void 0&&Ru(r,o,h)}u=u.next}while(u!==a)}}function aa(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&n)===n){var a=o.create;o.destroy=a()}o=o.next}while(o!==r)}}function Iu(n){var r=n.ref;if(r!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof r=="function"?r(n):r.current=n}}function s2(n){var r=n.alternate;r!==null&&(n.alternate=null,s2(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Nn],delete r[Qs],delete r[Yd],delete r[q5],delete r[Y5])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function o2(n){return n.tag===5||n.tag===3||n.tag===4}function l2(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||o2(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Au(n,r,o){var a=n.tag;if(a===5||a===6)n=n.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(n,r):o.insertBefore(n,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(n,o)):(r=o,r.appendChild(n)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Fl));else if(a!==4&&(n=n.child,n!==null))for(Au(n,r,o),n=n.sibling;n!==null;)Au(n,r,o),n=n.sibling}function zu(n,r,o){var a=n.tag;if(a===5||a===6)n=n.stateNode,r?o.insertBefore(n,r):o.appendChild(n);else if(a!==4&&(n=n.child,n!==null))for(zu(n,r,o),n=n.sibling;n!==null;)zu(n,r,o),n=n.sibling}var Ct=null,Bn=!1;function Ti(n,r,o){for(o=o.child;o!==null;)a2(n,r,o),o=o.sibling}function a2(n,r,o){if(Fn&&typeof Fn.onCommitFiberUnmount=="function")try{Fn.onCommitFiberUnmount(Cl,o)}catch{}switch(o.tag){case 5:Bt||es(o,r);case 6:var a=Ct,u=Bn;Ct=null,Ti(n,r,o),Ct=a,Bn=u,Ct!==null&&(Bn?(n=Ct,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):Ct.removeChild(o.stateNode));break;case 18:Ct!==null&&(Bn?(n=Ct,o=o.stateNode,n.nodeType===8?qd(n.parentNode,o):n.nodeType===1&&qd(n,o),Os(n)):qd(Ct,o.stateNode));break;case 4:a=Ct,u=Bn,Ct=o.stateNode.containerInfo,Bn=!0,Ti(n,r,o),Ct=a,Bn=u;break;case 0:case 11:case 14:case 15:if(!Bt&&(a=o.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){u=a=a.next;do{var h=u,y=h.destroy;h=h.tag,y!==void 0&&((h&2)!==0||(h&4)!==0)&&Ru(o,r,y),u=u.next}while(u!==a)}Ti(n,r,o);break;case 1:if(!Bt&&(es(o,r),a=o.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(w){Ze(o,r,w)}Ti(n,r,o);break;case 21:Ti(n,r,o);break;case 22:o.mode&1?(Bt=(a=Bt)||o.memoizedState!==null,Ti(n,r,o),Bt=a):Ti(n,r,o);break;default:Ti(n,r,o)}}function c2(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new p6),r.forEach(function(a){var u=w6.bind(null,n,a);o.has(a)||(o.add(a),a.then(u,u))})}}function Pn(n,r){var o=r.deletions;if(o!==null)for(var a=0;a<o.length;a++){var u=o[a];try{var h=n,y=r,w=y;e:for(;w!==null;){switch(w.tag){case 5:Ct=w.stateNode,Bn=!1;break e;case 3:Ct=w.stateNode.containerInfo,Bn=!0;break e;case 4:Ct=w.stateNode.containerInfo,Bn=!0;break e}w=w.return}if(Ct===null)throw Error(s(160));a2(h,y,u),Ct=null,Bn=!1;var $=u.alternate;$!==null&&($.return=null),u.return=null}catch(A){Ze(u,r,A)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)d2(r,n),r=r.sibling}function d2(n,r){var o=n.alternate,a=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Pn(r,n),Hn(n),a&4){try{co(3,n,n.return),aa(3,n)}catch(le){Ze(n,n.return,le)}try{co(5,n,n.return)}catch(le){Ze(n,n.return,le)}}break;case 1:Pn(r,n),Hn(n),a&512&&o!==null&&es(o,o.return);break;case 5:if(Pn(r,n),Hn(n),a&512&&o!==null&&es(o,o.return),n.flags&32){var u=n.stateNode;try{Ps(u,"")}catch(le){Ze(n,n.return,le)}}if(a&4&&(u=n.stateNode,u!=null)){var h=n.memoizedProps,y=o!==null?o.memoizedProps:h,w=n.type,$=n.updateQueue;if(n.updateQueue=null,$!==null)try{w==="input"&&h.type==="radio"&&h.name!=null&&Vf(u,h),fd(w,y);var A=fd(w,h);for(y=0;y<$.length;y+=2){var U=$[y],G=$[y+1];U==="style"?Zf(u,G):U==="dangerouslySetInnerHTML"?Wf(u,G):U==="children"?Ps(u,G):M(u,U,G,A)}switch(w){case"input":ad(u,h);break;case"textarea":Of(u,h);break;case"select":var W=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!h.multiple;var ie=h.value;ie!=null?Rr(u,!!h.multiple,ie,!1):W!==!!h.multiple&&(h.defaultValue!=null?Rr(u,!!h.multiple,h.defaultValue,!0):Rr(u,!!h.multiple,h.multiple?[]:"",!1))}u[Qs]=h}catch(le){Ze(n,n.return,le)}}break;case 6:if(Pn(r,n),Hn(n),a&4){if(n.stateNode===null)throw Error(s(162));u=n.stateNode,h=n.memoizedProps;try{u.nodeValue=h}catch(le){Ze(n,n.return,le)}}break;case 3:if(Pn(r,n),Hn(n),a&4&&o!==null&&o.memoizedState.isDehydrated)try{Os(r.containerInfo)}catch(le){Ze(n,n.return,le)}break;case 4:Pn(r,n),Hn(n);break;case 13:Pn(r,n),Hn(n),u=n.child,u.flags&8192&&(h=u.memoizedState!==null,u.stateNode.isHidden=h,!h||u.alternate!==null&&u.alternate.memoizedState!==null||(Fu=Ye())),a&4&&c2(n);break;case 22:if(U=o!==null&&o.memoizedState!==null,n.mode&1?(Bt=(A=Bt)||U,Pn(r,n),Bt=A):Pn(r,n),Hn(n),a&8192){if(A=n.memoizedState!==null,(n.stateNode.isHidden=A)&&!U&&(n.mode&1)!==0)for(re=n,U=n.child;U!==null;){for(G=re=U;re!==null;){switch(W=re,ie=W.child,W.tag){case 0:case 11:case 14:case 15:co(4,W,W.return);break;case 1:es(W,W.return);var se=W.stateNode;if(typeof se.componentWillUnmount=="function"){a=W,o=W.return;try{r=a,se.props=r.memoizedProps,se.state=r.memoizedState,se.componentWillUnmount()}catch(le){Ze(a,o,le)}}break;case 5:es(W,W.return);break;case 22:if(W.memoizedState!==null){f2(G);continue}}ie!==null?(ie.return=W,re=ie):f2(G)}U=U.sibling}e:for(U=null,G=n;;){if(G.tag===5){if(U===null){U=G;try{u=G.stateNode,A?(h=u.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(w=G.stateNode,$=G.memoizedProps.style,y=$!=null&&$.hasOwnProperty("display")?$.display:null,w.style.display=Uf("display",y))}catch(le){Ze(n,n.return,le)}}}else if(G.tag===6){if(U===null)try{G.stateNode.nodeValue=A?"":G.memoizedProps}catch(le){Ze(n,n.return,le)}}else if((G.tag!==22&&G.tag!==23||G.memoizedState===null||G===n)&&G.child!==null){G.child.return=G,G=G.child;continue}if(G===n)break e;for(;G.sibling===null;){if(G.return===null||G.return===n)break e;U===G&&(U=null),G=G.return}U===G&&(U=null),G.sibling.return=G.return,G=G.sibling}}break;case 19:Pn(r,n),Hn(n),a&4&&c2(n);break;case 21:break;default:Pn(r,n),Hn(n)}}function Hn(n){var r=n.flags;if(r&2){try{e:{for(var o=n.return;o!==null;){if(o2(o)){var a=o;break e}o=o.return}throw Error(s(160))}switch(a.tag){case 5:var u=a.stateNode;a.flags&32&&(Ps(u,""),a.flags&=-33);var h=l2(n);zu(n,h,u);break;case 3:case 4:var y=a.stateNode.containerInfo,w=l2(n);Au(n,w,y);break;default:throw Error(s(161))}}catch($){Ze(n,n.return,$)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function h6(n,r,o){re=n,u2(n)}function u2(n,r,o){for(var a=(n.mode&1)!==0;re!==null;){var u=re,h=u.child;if(u.tag===22&&a){var y=u.memoizedState!==null||la;if(!y){var w=u.alternate,$=w!==null&&w.memoizedState!==null||Bt;w=la;var A=Bt;if(la=y,(Bt=$)&&!A)for(re=u;re!==null;)y=re,$=y.child,y.tag===22&&y.memoizedState!==null?h2(u):$!==null?($.return=y,re=$):h2(u);for(;h!==null;)re=h,u2(h),h=h.sibling;re=u,la=w,Bt=A}p2(n)}else(u.subtreeFlags&8772)!==0&&h!==null?(h.return=u,re=h):p2(n)}}function p2(n){for(;re!==null;){var r=re;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Bt||aa(5,r);break;case 1:var a=r.stateNode;if(r.flags&4&&!Bt)if(o===null)a.componentDidMount();else{var u=r.elementType===r.type?o.memoizedProps:Ln(r.type,o.memoizedProps);a.componentDidUpdate(u,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var h=r.updateQueue;h!==null&&f0(r,h,a);break;case 3:var y=r.updateQueue;if(y!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}f0(r,y,o)}break;case 5:var w=r.stateNode;if(o===null&&r.flags&4){o=w;var $=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":$.autoFocus&&o.focus();break;case"img":$.src&&(o.src=$.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var A=r.alternate;if(A!==null){var U=A.memoizedState;if(U!==null){var G=U.dehydrated;G!==null&&Os(G)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}Bt||r.flags&512&&Iu(r)}catch(W){Ze(r,r.return,W)}}if(r===n){re=null;break}if(o=r.sibling,o!==null){o.return=r.return,re=o;break}re=r.return}}function f2(n){for(;re!==null;){var r=re;if(r===n){re=null;break}var o=r.sibling;if(o!==null){o.return=r.return,re=o;break}re=r.return}}function h2(n){for(;re!==null;){var r=re;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{aa(4,r)}catch($){Ze(r,o,$)}break;case 1:var a=r.stateNode;if(typeof a.componentDidMount=="function"){var u=r.return;try{a.componentDidMount()}catch($){Ze(r,u,$)}}var h=r.return;try{Iu(r)}catch($){Ze(r,h,$)}break;case 5:var y=r.return;try{Iu(r)}catch($){Ze(r,y,$)}}}catch($){Ze(r,r.return,$)}if(r===n){re=null;break}var w=r.sibling;if(w!==null){w.return=r.return,re=w;break}re=r.return}}var x6=Math.ceil,ca=F.ReactCurrentDispatcher,Mu=F.ReactCurrentOwner,ln=F.ReactCurrentBatchConfig,Te=0,ft=null,Qe=null,wt=0,Yt=0,ts=Ci(0),st=0,uo=null,tr=0,da=0,Vu=0,po=null,Wt=null,Fu=0,ns=1/0,si=null,ua=!1,Nu=null,$i=null,pa=!1,Li=null,fa=0,fo=0,Ou=null,ha=-1,xa=0;function At(){return(Te&6)!==0?Ye():ha!==-1?ha:ha=Ye()}function Bi(n){return(n.mode&1)===0?1:(Te&2)!==0&&wt!==0?wt&-wt:Q5.transition!==null?(xa===0&&(xa=lh()),xa):(n=Re,n!==0||(n=window.event,n=n===void 0?16:mh(n.type)),n)}function En(n,r,o,a){if(50<fo)throw fo=0,Ou=null,Error(s(185));zs(n,o,a),((Te&2)===0||n!==ft)&&(n===ft&&((Te&2)===0&&(da|=o),st===4&&Pi(n,wt)),Ut(n,a),o===1&&Te===0&&(r.mode&1)===0&&(ns=Ye()+500,Hl&&bi()))}function Ut(n,r){var o=n.callbackNode;Q4(n,r);var a=Sl(n,n===ft?wt:0);if(a===0)o!==null&&rh(o),n.callbackNode=null,n.callbackPriority=0;else if(r=a&-a,n.callbackPriority!==r){if(o!=null&&rh(o),r===1)n.tag===0?X5(m2.bind(null,n)):t0(m2.bind(null,n)),G5(function(){(Te&6)===0&&bi()}),o=null;else{switch(ah(a)){case 1:o=jd;break;case 4:o=sh;break;case 16:o=jl;break;case 536870912:o=oh;break;default:o=jl}o=S2(o,x2.bind(null,n))}n.callbackPriority=r,n.callbackNode=o}}function x2(n,r){if(ha=-1,xa=0,(Te&6)!==0)throw Error(s(327));var o=n.callbackNode;if(is()&&n.callbackNode!==o)return null;var a=Sl(n,n===ft?wt:0);if(a===0)return null;if((a&30)!==0||(a&n.expiredLanes)!==0||r)r=ma(n,a);else{r=a;var u=Te;Te|=2;var h=v2();(ft!==n||wt!==r)&&(si=null,ns=Ye()+500,ir(n,r));do try{v6();break}catch(w){g2(n,w)}while(!0);su(),ca.current=h,Te=u,Qe!==null?r=0:(ft=null,wt=0,r=st)}if(r!==0){if(r===2&&(u=Cd(n),u!==0&&(a=u,r=_u(n,u))),r===1)throw o=uo,ir(n,0),Pi(n,a),Ut(n,Ye()),o;if(r===6)Pi(n,a);else{if(u=n.current.alternate,(a&30)===0&&!m6(u)&&(r=ma(n,a),r===2&&(h=Cd(n),h!==0&&(a=h,r=_u(n,h))),r===1))throw o=uo,ir(n,0),Pi(n,a),Ut(n,Ye()),o;switch(n.finishedWork=u,n.finishedLanes=a,r){case 0:case 1:throw Error(s(345));case 2:rr(n,Wt,si);break;case 3:if(Pi(n,a),(a&130023424)===a&&(r=Fu+500-Ye(),10<r)){if(Sl(n,0)!==0)break;if(u=n.suspendedLanes,(u&a)!==a){At(),n.pingedLanes|=n.suspendedLanes&u;break}n.timeoutHandle=Kd(rr.bind(null,n,Wt,si),r);break}rr(n,Wt,si);break;case 4:if(Pi(n,a),(a&4194240)===a)break;for(r=n.eventTimes,u=-1;0<a;){var y=31-kn(a);h=1<<y,y=r[y],y>u&&(u=y),a&=~h}if(a=u,a=Ye()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*x6(a/1960))-a,10<a){n.timeoutHandle=Kd(rr.bind(null,n,Wt,si),a);break}rr(n,Wt,si);break;case 5:rr(n,Wt,si);break;default:throw Error(s(329))}}}return Ut(n,Ye()),n.callbackNode===o?x2.bind(null,n):null}function _u(n,r){var o=po;return n.current.memoizedState.isDehydrated&&(ir(n,r).flags|=256),n=ma(n,r),n!==2&&(r=Wt,Wt=o,r!==null&&Hu(r)),n}function Hu(n){Wt===null?Wt=n:Wt.push.apply(Wt,n)}function m6(n){for(var r=n;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var a=0;a<o.length;a++){var u=o[a],h=u.getSnapshot;u=u.value;try{if(!Tn(h(),u))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Pi(n,r){for(r&=~Vu,r&=~da,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var o=31-kn(r),a=1<<o;n[o]=-1,r&=~a}}function m2(n){if((Te&6)!==0)throw Error(s(327));is();var r=Sl(n,0);if((r&1)===0)return Ut(n,Ye()),null;var o=ma(n,r);if(n.tag!==0&&o===2){var a=Cd(n);a!==0&&(r=a,o=_u(n,a))}if(o===1)throw o=uo,ir(n,0),Pi(n,r),Ut(n,Ye()),o;if(o===6)throw Error(s(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,rr(n,Wt,si),Ut(n,Ye()),null}function Wu(n,r){var o=Te;Te|=1;try{return n(r)}finally{Te=o,Te===0&&(ns=Ye()+500,Hl&&bi())}}function nr(n){Li!==null&&Li.tag===0&&(Te&6)===0&&is();var r=Te;Te|=1;var o=ln.transition,a=Re;try{if(ln.transition=null,Re=1,n)return n()}finally{Re=a,ln.transition=o,Te=r,(Te&6)===0&&bi()}}function Uu(){Yt=ts.current,Fe(ts)}function ir(n,r){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,Z5(o)),Qe!==null)for(o=Qe.return;o!==null;){var a=o;switch(eu(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Ol();break;case 3:Qr(),Fe(Ot),Fe(Tt),fu();break;case 5:uu(a);break;case 4:Qr();break;case 13:Fe(He);break;case 19:Fe(He);break;case 10:ou(a.type._context);break;case 22:case 23:Uu()}o=o.return}if(ft=n,Qe=n=Ei(n.current,null),wt=Yt=r,st=0,uo=null,Vu=da=tr=0,Wt=po=null,Qi!==null){for(r=0;r<Qi.length;r++)if(o=Qi[r],a=o.interleaved,a!==null){o.interleaved=null;var u=a.next,h=o.pending;if(h!==null){var y=h.next;h.next=u,a.next=y}o.pending=a}Qi=null}return n}function g2(n,r){do{var o=Qe;try{if(su(),Jl.current=ia,ea){for(var a=We.memoizedState;a!==null;){var u=a.queue;u!==null&&(u.pending=null),a=a.next}ea=!1}if(er=0,pt=rt=We=null,ro=!1,so=0,Mu.current=null,o===null||o.return===null){st=1,uo=r,Qe=null;break}e:{var h=n,y=o.return,w=o,$=r;if(r=wt,w.flags|=32768,$!==null&&typeof $=="object"&&typeof $.then=="function"){var A=$,U=w,G=U.tag;if((U.mode&1)===0&&(G===0||G===11||G===15)){var W=U.alternate;W?(U.updateQueue=W.updateQueue,U.memoizedState=W.memoizedState,U.lanes=W.lanes):(U.updateQueue=null,U.memoizedState=null)}var ie=_0(y);if(ie!==null){ie.flags&=-257,H0(ie,y,w,h,r),ie.mode&1&&O0(h,A,r),r=ie,$=A;var se=r.updateQueue;if(se===null){var le=new Set;le.add($),r.updateQueue=le}else se.add($);break e}else{if((r&1)===0){O0(h,A,r),Zu();break e}$=Error(s(426))}}else if(_e&&w.mode&1){var Xe=_0(y);if(Xe!==null){(Xe.flags&65536)===0&&(Xe.flags|=256),H0(Xe,y,w,h,r),iu(Jr($,w));break e}}h=$=Jr($,w),st!==4&&(st=2),po===null?po=[h]:po.push(h),h=y;do{switch(h.tag){case 3:h.flags|=65536,r&=-r,h.lanes|=r;var D=F0(h,$,r);p0(h,D);break e;case 1:w=$;var L=h.type,I=h.stateNode;if((h.flags&128)===0&&(typeof L.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&($i===null||!$i.has(I)))){h.flags|=65536,r&=-r,h.lanes|=r;var q=N0(h,w,r);p0(h,q);break e}}h=h.return}while(h!==null)}j2(o)}catch(ce){r=ce,Qe===o&&o!==null&&(Qe=o=o.return);continue}break}while(!0)}function v2(){var n=ca.current;return ca.current=ia,n===null?ia:n}function Zu(){(st===0||st===3||st===2)&&(st=4),ft===null||(tr&268435455)===0&&(da&268435455)===0||Pi(ft,wt)}function ma(n,r){var o=Te;Te|=2;var a=v2();(ft!==n||wt!==r)&&(si=null,ir(n,r));do try{g6();break}catch(u){g2(n,u)}while(!0);if(su(),Te=o,ca.current=a,Qe!==null)throw Error(s(261));return ft=null,wt=0,st}function g6(){for(;Qe!==null;)y2(Qe)}function v6(){for(;Qe!==null&&!H4();)y2(Qe)}function y2(n){var r=b2(n.alternate,n,Yt);n.memoizedProps=n.pendingProps,r===null?j2(n):Qe=r,Mu.current=null}function j2(n){var r=n;do{var o=r.alternate;if(n=r.return,(r.flags&32768)===0){if(o=d6(o,r,Yt),o!==null){Qe=o;return}}else{if(o=u6(o,r),o!==null){o.flags&=32767,Qe=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{st=6,Qe=null;return}}if(r=r.sibling,r!==null){Qe=r;return}Qe=r=n}while(r!==null);st===0&&(st=5)}function rr(n,r,o){var a=Re,u=ln.transition;try{ln.transition=null,Re=1,y6(n,r,o,a)}finally{ln.transition=u,Re=a}return null}function y6(n,r,o,a){do is();while(Li!==null);if((Te&6)!==0)throw Error(s(327));o=n.finishedWork;var u=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(s(177));n.callbackNode=null,n.callbackPriority=0;var h=o.lanes|o.childLanes;if(J4(n,h),n===ft&&(Qe=ft=null,wt=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||pa||(pa=!0,S2(jl,function(){return is(),null})),h=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||h){h=ln.transition,ln.transition=null;var y=Re;Re=1;var w=Te;Te|=4,Mu.current=null,f6(n,o),d2(o,n),F5(Zd),$l=!!Ud,Zd=Ud=null,n.current=o,h6(o),W4(),Te=w,Re=y,ln.transition=h}else n.current=o;if(pa&&(pa=!1,Li=n,fa=u),h=n.pendingLanes,h===0&&($i=null),G4(o.stateNode),Ut(n,Ye()),r!==null)for(a=n.onRecoverableError,o=0;o<r.length;o++)u=r[o],a(u.value,{componentStack:u.stack,digest:u.digest});if(ua)throw ua=!1,n=Nu,Nu=null,n;return(fa&1)!==0&&n.tag!==0&&is(),h=n.pendingLanes,(h&1)!==0?n===Ou?fo++:(fo=0,Ou=n):fo=0,bi(),null}function is(){if(Li!==null){var n=ah(fa),r=ln.transition,o=Re;try{if(ln.transition=null,Re=16>n?16:n,Li===null)var a=!1;else{if(n=Li,Li=null,fa=0,(Te&6)!==0)throw Error(s(331));var u=Te;for(Te|=4,re=n.current;re!==null;){var h=re,y=h.child;if((re.flags&16)!==0){var w=h.deletions;if(w!==null){for(var $=0;$<w.length;$++){var A=w[$];for(re=A;re!==null;){var U=re;switch(U.tag){case 0:case 11:case 15:co(8,U,h)}var G=U.child;if(G!==null)G.return=U,re=G;else for(;re!==null;){U=re;var W=U.sibling,ie=U.return;if(s2(U),U===A){re=null;break}if(W!==null){W.return=ie,re=W;break}re=ie}}}var se=h.alternate;if(se!==null){var le=se.child;if(le!==null){se.child=null;do{var Xe=le.sibling;le.sibling=null,le=Xe}while(le!==null)}}re=h}}if((h.subtreeFlags&2064)!==0&&y!==null)y.return=h,re=y;else e:for(;re!==null;){if(h=re,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:co(9,h,h.return)}var D=h.sibling;if(D!==null){D.return=h.return,re=D;break e}re=h.return}}var L=n.current;for(re=L;re!==null;){y=re;var I=y.child;if((y.subtreeFlags&2064)!==0&&I!==null)I.return=y,re=I;else e:for(y=L;re!==null;){if(w=re,(w.flags&2048)!==0)try{switch(w.tag){case 0:case 11:case 15:aa(9,w)}}catch(ce){Ze(w,w.return,ce)}if(w===y){re=null;break e}var q=w.sibling;if(q!==null){q.return=w.return,re=q;break e}re=w.return}}if(Te=u,bi(),Fn&&typeof Fn.onPostCommitFiberRoot=="function")try{Fn.onPostCommitFiberRoot(Cl,n)}catch{}a=!0}return a}finally{Re=o,ln.transition=r}}return!1}function C2(n,r,o){r=Jr(o,r),r=F0(n,r,1),n=ki(n,r,1),r=At(),n!==null&&(zs(n,1,r),Ut(n,r))}function Ze(n,r,o){if(n.tag===3)C2(n,n,o);else for(;r!==null;){if(r.tag===3){C2(r,n,o);break}else if(r.tag===1){var a=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&($i===null||!$i.has(a))){n=Jr(o,n),n=N0(r,n,1),r=ki(r,n,1),n=At(),r!==null&&(zs(r,1,n),Ut(r,n));break}}r=r.return}}function j6(n,r,o){var a=n.pingCache;a!==null&&a.delete(r),r=At(),n.pingedLanes|=n.suspendedLanes&o,ft===n&&(wt&o)===o&&(st===4||st===3&&(wt&130023424)===wt&&500>Ye()-Fu?ir(n,0):Vu|=o),Ut(n,r)}function w2(n,r){r===0&&((n.mode&1)===0?r=1:(r=bl,bl<<=1,(bl&130023424)===0&&(bl=4194304)));var o=At();n=ni(n,r),n!==null&&(zs(n,r,o),Ut(n,o))}function C6(n){var r=n.memoizedState,o=0;r!==null&&(o=r.retryLane),w2(n,o)}function w6(n,r){var o=0;switch(n.tag){case 13:var a=n.stateNode,u=n.memoizedState;u!==null&&(o=u.retryLane);break;case 19:a=n.stateNode;break;default:throw Error(s(314))}a!==null&&a.delete(r),w2(n,o)}var b2;b2=function(n,r,o){if(n!==null)if(n.memoizedProps!==r.pendingProps||Ot.current)Ht=!0;else{if((n.lanes&o)===0&&(r.flags&128)===0)return Ht=!1,c6(n,r,o);Ht=(n.flags&131072)!==0}else Ht=!1,_e&&(r.flags&1048576)!==0&&n0(r,Ul,r.index);switch(r.lanes=0,r.tag){case 2:var a=r.type;oa(n,r),n=r.pendingProps;var u=Ur(r,Tt.current);Xr(r,o),u=mu(null,r,a,n,u,o);var h=gu();return r.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,_t(a)?(h=!0,_l(r)):h=!1,r.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,cu(r),u.updater=ra,r.stateNode=u,u._reactInternals=r,bu(r,a,n,o),r=$u(null,r,a,!0,h,o)):(r.tag=0,_e&&h&&Jd(r),It(null,r,u,o),r=r.child),r;case 16:a=r.elementType;e:{switch(oa(n,r),n=r.pendingProps,u=a._init,a=u(a._payload),r.type=a,u=r.tag=S6(a),n=Ln(a,n),u){case 0:r=Tu(null,r,a,n,o);break e;case 1:r=q0(null,r,a,n,o);break e;case 11:r=W0(null,r,a,n,o);break e;case 14:r=U0(null,r,a,Ln(a.type,n),o);break e}throw Error(s(306,a,""))}return r;case 0:return a=r.type,u=r.pendingProps,u=r.elementType===a?u:Ln(a,u),Tu(n,r,a,u,o);case 1:return a=r.type,u=r.pendingProps,u=r.elementType===a?u:Ln(a,u),q0(n,r,a,u,o);case 3:e:{if(Y0(r),n===null)throw Error(s(387));a=r.pendingProps,h=r.memoizedState,u=h.element,u0(n,r),Xl(r,a,null,o);var y=r.memoizedState;if(a=y.element,h.isDehydrated)if(h={element:a,isDehydrated:!1,cache:y.cache,pendingSuspenseBoundaries:y.pendingSuspenseBoundaries,transitions:y.transitions},r.updateQueue.baseState=h,r.memoizedState=h,r.flags&256){u=Jr(Error(s(423)),r),r=X0(n,r,a,o,u);break e}else if(a!==u){u=Jr(Error(s(424)),r),r=X0(n,r,a,o,u);break e}else for(qt=ji(r.stateNode.containerInfo.firstChild),Kt=r,_e=!0,$n=null,o=c0(r,null,a,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Kr(),a===u){r=ri(n,r,o);break e}It(n,r,a,o)}r=r.child}return r;case 5:return h0(r),n===null&&nu(r),a=r.type,u=r.pendingProps,h=n!==null?n.memoizedProps:null,y=u.children,Gd(a,u)?y=null:h!==null&&Gd(a,h)&&(r.flags|=32),K0(n,r),It(n,r,y,o),r.child;case 6:return n===null&&nu(r),null;case 13:return Q0(n,r,o);case 4:return du(r,r.stateNode.containerInfo),a=r.pendingProps,n===null?r.child=qr(r,null,a,o):It(n,r,a,o),r.child;case 11:return a=r.type,u=r.pendingProps,u=r.elementType===a?u:Ln(a,u),W0(n,r,a,u,o);case 7:return It(n,r,r.pendingProps,o),r.child;case 8:return It(n,r,r.pendingProps.children,o),r.child;case 12:return It(n,r,r.pendingProps.children,o),r.child;case 10:e:{if(a=r.type._context,u=r.pendingProps,h=r.memoizedProps,y=u.value,Me(Kl,a._currentValue),a._currentValue=y,h!==null)if(Tn(h.value,y)){if(h.children===u.children&&!Ot.current){r=ri(n,r,o);break e}}else for(h=r.child,h!==null&&(h.return=r);h!==null;){var w=h.dependencies;if(w!==null){y=h.child;for(var $=w.firstContext;$!==null;){if($.context===a){if(h.tag===1){$=ii(-1,o&-o),$.tag=2;var A=h.updateQueue;if(A!==null){A=A.shared;var U=A.pending;U===null?$.next=$:($.next=U.next,U.next=$),A.pending=$}}h.lanes|=o,$=h.alternate,$!==null&&($.lanes|=o),lu(h.return,o,r),w.lanes|=o;break}$=$.next}}else if(h.tag===10)y=h.type===r.type?null:h.child;else if(h.tag===18){if(y=h.return,y===null)throw Error(s(341));y.lanes|=o,w=y.alternate,w!==null&&(w.lanes|=o),lu(y,o,r),y=h.sibling}else y=h.child;if(y!==null)y.return=h;else for(y=h;y!==null;){if(y===r){y=null;break}if(h=y.sibling,h!==null){h.return=y.return,y=h;break}y=y.return}h=y}It(n,r,u.children,o),r=r.child}return r;case 9:return u=r.type,a=r.pendingProps.children,Xr(r,o),u=sn(u),a=a(u),r.flags|=1,It(n,r,a,o),r.child;case 14:return a=r.type,u=Ln(a,r.pendingProps),u=Ln(a.type,u),U0(n,r,a,u,o);case 15:return Z0(n,r,r.type,r.pendingProps,o);case 17:return a=r.type,u=r.pendingProps,u=r.elementType===a?u:Ln(a,u),oa(n,r),r.tag=1,_t(a)?(n=!0,_l(r)):n=!1,Xr(r,o),M0(r,a,u),bu(r,a,u,o),$u(null,r,a,!0,n,o);case 19:return e2(n,r,o);case 22:return G0(n,r,o)}throw Error(s(156,r.tag))};function S2(n,r){return ih(n,r)}function b6(n,r,o,a){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function an(n,r,o,a){return new b6(n,r,o,a)}function Gu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function S6(n){if(typeof n=="function")return Gu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===me)return 11;if(n===Ie)return 14}return 2}function Ei(n,r){var o=n.alternate;return o===null?(o=an(n.tag,r,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=r,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,r=n.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function ga(n,r,o,a,u,h){var y=2;if(a=n,typeof n=="function")Gu(n)&&(y=1);else if(typeof n=="string")y=5;else e:switch(n){case V:return sr(o.children,u,h,r);case z:y=8,u|=8;break;case J:return n=an(12,o,r,u|2),n.elementType=J,n.lanes=h,n;case ge:return n=an(13,o,r,u),n.elementType=ge,n.lanes=h,n;case ke:return n=an(19,o,r,u),n.elementType=ke,n.lanes=h,n;case De:return va(o,u,h,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Q:y=10;break e;case ae:y=9;break e;case me:y=11;break e;case Ie:y=14;break e;case $e:y=16,a=null;break e}throw Error(s(130,n==null?n:typeof n,""))}return r=an(y,o,r,u),r.elementType=n,r.type=a,r.lanes=h,r}function sr(n,r,o,a){return n=an(7,n,a,r),n.lanes=o,n}function va(n,r,o,a){return n=an(22,n,a,r),n.elementType=De,n.lanes=o,n.stateNode={isHidden:!1},n}function Ku(n,r,o){return n=an(6,n,null,r),n.lanes=o,n}function qu(n,r,o){return r=an(4,n.children!==null?n.children:[],n.key,r),r.lanes=o,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function k6(n,r,o,a,u){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wd(0),this.expirationTimes=wd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wd(0),this.identifierPrefix=a,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function Yu(n,r,o,a,u,h,y,w,$){return n=new k6(n,r,o,w,$),r===1?(r=1,h===!0&&(r|=8)):r=0,h=an(3,null,null,r),n.current=h,h.stateNode=n,h.memoizedState={element:a,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},cu(h),n}function T6(n,r,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:X,key:a==null?null:""+a,children:n,containerInfo:r,implementation:o}}function k2(n){if(!n)return wi;n=n._reactInternals;e:{if(Gi(n)!==n||n.tag!==1)throw Error(s(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(_t(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(s(171))}if(n.tag===1){var o=n.type;if(_t(o))return Jh(n,o,r)}return r}function T2(n,r,o,a,u,h,y,w,$){return n=Yu(o,a,!0,n,u,h,y,w,$),n.context=k2(null),o=n.current,a=At(),u=Bi(o),h=ii(a,u),h.callback=r??null,ki(o,h,u),n.current.lanes=u,zs(n,u,a),Ut(n,a),n}function ya(n,r,o,a){var u=r.current,h=At(),y=Bi(u);return o=k2(o),r.context===null?r.context=o:r.pendingContext=o,r=ii(h,y),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=ki(u,r,y),n!==null&&(En(n,u,y,h),Yl(n,u,y)),y}function ja(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function $2(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<r?o:r}}function Xu(n,r){$2(n,r),(n=n.alternate)&&$2(n,r)}function $6(){return null}var L2=typeof reportError=="function"?reportError:function(n){console.error(n)};function Qu(n){this._internalRoot=n}Ca.prototype.render=Qu.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(s(409));ya(n,r,null,null)},Ca.prototype.unmount=Qu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;nr(function(){ya(null,n,null,null)}),r[Qn]=null}};function Ca(n){this._internalRoot=n}Ca.prototype.unstable_scheduleHydration=function(n){if(n){var r=uh();n={blockedOn:null,target:n,priority:r};for(var o=0;o<gi.length&&r!==0&&r<gi[o].priority;o++);gi.splice(o,0,n),o===0&&hh(n)}};function Ju(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function wa(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function B2(){}function L6(n,r,o,a,u){if(u){if(typeof a=="function"){var h=a;a=function(){var A=ja(y);h.call(A)}}var y=T2(r,a,n,0,null,!1,!1,"",B2);return n._reactRootContainer=y,n[Qn]=y.current,Ys(n.nodeType===8?n.parentNode:n),nr(),y}for(;u=n.lastChild;)n.removeChild(u);if(typeof a=="function"){var w=a;a=function(){var A=ja($);w.call(A)}}var $=Yu(n,0,!1,null,null,!1,!1,"",B2);return n._reactRootContainer=$,n[Qn]=$.current,Ys(n.nodeType===8?n.parentNode:n),nr(function(){ya(r,$,o,a)}),$}function ba(n,r,o,a,u){var h=o._reactRootContainer;if(h){var y=h;if(typeof u=="function"){var w=u;u=function(){var $=ja(y);w.call($)}}ya(r,y,n,u)}else y=L6(o,r,n,u,a);return ja(y)}ch=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var o=As(r.pendingLanes);o!==0&&(bd(r,o|1),Ut(r,Ye()),(Te&6)===0&&(ns=Ye()+500,bi()))}break;case 13:nr(function(){var a=ni(n,1);if(a!==null){var u=At();En(a,n,1,u)}}),Xu(n,1)}},Sd=function(n){if(n.tag===13){var r=ni(n,134217728);if(r!==null){var o=At();En(r,n,134217728,o)}Xu(n,134217728)}},dh=function(n){if(n.tag===13){var r=Bi(n),o=ni(n,r);if(o!==null){var a=At();En(o,n,r,a)}Xu(n,r)}},uh=function(){return Re},ph=function(n,r){var o=Re;try{return Re=n,r()}finally{Re=o}},md=function(n,r,o){switch(r){case"input":if(ad(n,o),r=o.name,o.type==="radio"&&r!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var a=o[r];if(a!==n&&a.form===n.form){var u=Nl(a);if(!u)throw Error(s(90));zf(a),ad(a,u)}}}break;case"textarea":Of(n,o);break;case"select":r=o.value,r!=null&&Rr(n,!!o.multiple,r,!1)}},Yf=Wu,Xf=nr;var B6={usingClientEntryPoint:!1,Events:[Js,Hr,Nl,Kf,qf,Wu]},ho={findFiberByHostInstance:Ki,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},P6={bundleType:ho.bundleType,version:ho.version,rendererPackageName:ho.rendererPackageName,rendererConfig:ho.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:F.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=th(n),n===null?null:n.stateNode},findFiberByHostInstance:ho.findFiberByHostInstance||$6,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sa.isDisabled&&Sa.supportsFiber)try{Cl=Sa.inject(P6),Fn=Sa}catch{}}return Zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B6,Zt.createPortal=function(n,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ju(r))throw Error(s(200));return T6(n,r,null,o)},Zt.createRoot=function(n,r){if(!Ju(n))throw Error(s(299));var o=!1,a="",u=L2;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(u=r.onRecoverableError)),r=Yu(n,1,!1,null,null,o,!1,a,u),n[Qn]=r.current,Ys(n.nodeType===8?n.parentNode:n),new Qu(r)},Zt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(s(188)):(n=Object.keys(n).join(","),Error(s(268,n)));return n=th(r),n=n===null?null:n.stateNode,n},Zt.flushSync=function(n){return nr(n)},Zt.hydrate=function(n,r,o){if(!wa(r))throw Error(s(200));return ba(null,n,r,!0,o)},Zt.hydrateRoot=function(n,r,o){if(!Ju(n))throw Error(s(405));var a=o!=null&&o.hydratedSources||null,u=!1,h="",y=L2;if(o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(y=o.onRecoverableError)),r=T2(r,null,n,1,o??null,u,!1,h,y),n[Qn]=r.current,Ys(n),a)for(n=0;n<a.length;n++)o=a[n],u=o._getVersion,u=u(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,u]:r.mutableSourceEagerHydrationData.push(o,u);return new Ca(r)},Zt.render=function(n,r,o){if(!wa(r))throw Error(s(200));return ba(null,n,r,!1,o)},Zt.unmountComponentAtNode=function(n){if(!wa(n))throw Error(s(40));return n._reactRootContainer?(nr(function(){ba(null,null,n,!1,function(){n._reactRootContainer=null,n[Qn]=null})}),!0):!1},Zt.unstable_batchedUpdates=Wu,Zt.unstable_renderSubtreeIntoContainer=function(n,r,o,a){if(!wa(o))throw Error(s(200));if(n==null||n._reactInternals===void 0)throw Error(s(38));return ba(n,r,o,!1,a)},Zt.version="18.3.1-next-f1338f8080-20240426",Zt}var M2;function F6(){if(M2)return n1.exports;M2=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(i){console.error(i)}}return e(),n1.exports=V6(),n1.exports}var V2;function N6(){if(V2)return ka;V2=1;var e=F6();return ka.createRoot=e.createRoot,ka.hydrateRoot=e.hydrateRoot,ka}var O6=N6(),b=qp();const en=D6(b);var Ne="-ms-",No="-moz-",Pe="-webkit-",r3="comm",Uc="rule",Yp="decl",_6="@import",H6="@namespace",s3="@keyframes",W6="@layer",o3=Math.abs,Xp=String.fromCharCode,up=Object.assign;function U6(e,i){return ct(e,0)^45?(((i<<2^ct(e,0))<<2^ct(e,1))<<2^ct(e,2))<<2^ct(e,3):0}function l3(e){return e.trim()}function pi(e,i){return(e=i.exec(e))?e[0]:e}function ye(e,i,s){return e.replace(i,s)}function oc(e,i,s){return e.indexOf(i,s)}function ct(e,i){return e.charCodeAt(i)|0}function Er(e,i,s){return e.slice(i,s)}function An(e){return e.length}function a3(e){return e.length}function Ao(e,i){return i.push(e),e}function Z6(e,i){return e.map(i).join("")}function F2(e,i){return e.filter(function(s){return!pi(s,i)})}var Zc=1,vs=1,c3=0,Sn=0,it=0,bs="";function Gc(e,i,s,l,c,p,d,f){return{value:e,root:i,parent:s,type:l,props:c,children:p,line:Zc,column:vs,length:d,return:"",siblings:f}}function Mi(e,i){return up(Gc("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},i)}function rs(e){for(;e.root;)e=Mi(e.root,{children:[e]});Ao(e,e.siblings)}function G6(){return it}function K6(){return it=Sn>0?ct(bs,--Sn):0,vs--,it===10&&(vs=1,Zc--),it}function Mn(){return it=Sn<c3?ct(bs,Sn++):0,vs++,it===10&&(vs=1,Zc++),it}function Ni(){return ct(bs,Sn)}function lc(){return Sn}function Kc(e,i){return Er(bs,e,i)}function tl(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function q6(e){return Zc=vs=1,c3=An(bs=e),Sn=0,[]}function Y6(e){return bs="",e}function s1(e){return l3(Kc(Sn-1,pp(e===91?e+2:e===40?e+1:e)))}function X6(e){for(;(it=Ni())&&it<33;)Mn();return tl(e)>2||tl(it)>3?"":" "}function Q6(e,i){for(;--i&&Mn()&&!(it<48||it>102||it>57&&it<65||it>70&&it<97););return Kc(e,lc()+(i<6&&Ni()==32&&Mn()==32))}function pp(e){for(;Mn();)switch(it){case e:return Sn;case 34:case 39:e!==34&&e!==39&&pp(it);break;case 40:e===41&&pp(e);break;case 92:Mn();break}return Sn}function J6(e,i){for(;Mn()&&e+it!==57;)if(e+it===84&&Ni()===47)break;return"/*"+Kc(i,Sn-1)+"*"+Xp(e===47?e:Mn())}function ev(e){for(;!tl(Ni());)Mn();return Kc(e,Sn)}function tv(e){return Y6(ac("",null,null,null,[""],e=q6(e),0,[0],e))}function ac(e,i,s,l,c,p,d,f,x){for(var g=0,m=0,j=d,C=0,k=0,S=0,T=1,P=1,R=1,E=0,M="",F=c,O=p,X=l,V=M;P;)switch(S=E,E=Mn()){case 40:if(S!=108&&ct(V,j-1)==58){oc(V+=ye(s1(E),"&","&\f"),"&\f",o3(g?f[g-1]:0))!=-1&&(R=-1);break}case 34:case 39:case 91:V+=s1(E);break;case 9:case 10:case 13:case 32:V+=X6(S);break;case 92:V+=Q6(lc()-1,7);continue;case 47:switch(Ni()){case 42:case 47:Ao(nv(J6(Mn(),lc()),i,s,x),x),(tl(S||1)==5||tl(Ni()||1)==5)&&An(V)&&Er(V,-1,void 0)!==" "&&(V+=" ");break;default:V+="/"}break;case 123*T:f[g++]=An(V)*R;case 125*T:case 59:case 0:switch(E){case 0:case 125:P=0;case 59+m:R==-1&&(V=ye(V,/\f/g,"")),k>0&&(An(V)-j||T===0&&S===47)&&Ao(k>32?O2(V+";",l,s,j-1,x):O2(ye(V," ","")+";",l,s,j-2,x),x);break;case 59:V+=";";default:if(Ao(X=N2(V,i,s,g,m,c,f,M,F=[],O=[],j,p),p),E===123)if(m===0)ac(V,i,X,X,F,p,j,f,O);else{switch(C){case 99:if(ct(V,3)===110)break;case 108:if(ct(V,2)===97)break;default:m=0;case 100:case 109:case 115:}m?ac(e,X,X,l&&Ao(N2(e,X,X,0,0,c,f,M,c,F=[],j,O),O),c,O,j,f,l?F:O):ac(V,X,X,X,[""],O,0,f,O)}}g=m=k=0,T=R=1,M=V="",j=d;break;case 58:j=1+An(V),k=S;default:if(T<1){if(E==123)--T;else if(E==125&&T++==0&&K6()==125)continue}switch(V+=Xp(E),E*T){case 38:R=m>0?1:(V+="\f",-1);break;case 44:f[g++]=(An(V)-1)*R,R=1;break;case 64:Ni()===45&&(V+=s1(Mn())),C=Ni(),m=j=An(M=V+=ev(lc())),E++;break;case 45:S===45&&An(V)==2&&(T=0)}}return p}function N2(e,i,s,l,c,p,d,f,x,g,m,j){for(var C=c-1,k=c===0?p:[""],S=a3(k),T=0,P=0,R=0;T<l;++T)for(var E=0,M=Er(e,C+1,C=o3(P=d[T])),F=e;E<S;++E)(F=l3(P>0?k[E]+" "+M:ye(M,/&\f/g,k[E])))&&(x[R++]=F);return Gc(e,i,s,c===0?Uc:f,x,g,m,j)}function nv(e,i,s,l){return Gc(e,i,s,r3,Xp(G6()),Er(e,2,-2),0,l)}function O2(e,i,s,l,c){return Gc(e,i,s,Yp,Er(e,0,l),Er(e,l+1,-1),l,c)}function d3(e,i,s){switch(U6(e,i)){case 5103:return Pe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Pe+e+e;case 4855:return Pe+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return No+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Pe+e+No+e+Ne+e+e;case 5936:switch(ct(e,i+11)){case 114:return Pe+e+Ne+ye(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Pe+e+Ne+ye(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Pe+e+Ne+ye(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Pe+e+Ne+e+e;case 6165:return Pe+e+Ne+"flex-"+e+e;case 5187:return Pe+e+ye(e,/(\w+).+(:[^]+)/,Pe+"box-$1$2"+Ne+"flex-$1$2")+e;case 5443:return Pe+e+Ne+"flex-item-"+ye(e,/flex-|-self/g,"")+(pi(e,/flex-|baseline/)?"":Ne+"grid-row-"+ye(e,/flex-|-self/g,""))+e;case 4675:return Pe+e+Ne+"flex-line-pack"+ye(e,/align-content|flex-|-self/g,"")+e;case 5548:return Pe+e+Ne+ye(e,"shrink","negative")+e;case 5292:return Pe+e+Ne+ye(e,"basis","preferred-size")+e;case 6060:return Pe+"box-"+ye(e,"-grow","")+Pe+e+Ne+ye(e,"grow","positive")+e;case 4554:return Pe+ye(e,/([^-])(transform)/g,"$1"+Pe+"$2")+e;case 6187:return ye(ye(ye(e,/(zoom-|grab)/,Pe+"$1"),/(image-set)/,Pe+"$1"),e,"")+e;case 5495:case 3959:return ye(e,/(image-set\([^]*)/,Pe+"$1$`$1");case 4968:return ye(ye(e,/(.+:)(flex-)?(.*)/,Pe+"box-pack:$3"+Ne+"flex-pack:$3"),/space-between/,"justify")+Pe+e+e;case 4200:if(!pi(e,/flex-|baseline/))return Ne+"grid-column-align"+Er(e,i)+e;break;case 2592:case 3360:return Ne+ye(e,"template-","")+e;case 4384:case 3616:return s&&s.some(function(l,c){return i=c,pi(l.props,/grid-\w+-end/)})?~oc(e+(s=s[i].value),"span",0)?e:Ne+ye(e,"-start","")+e+Ne+"grid-row-span:"+(~oc(s,"span",0)?pi(s,/\d+/):+pi(s,/\d+/)-+pi(e,/\d+/))+";":Ne+ye(e,"-start","")+e;case 4896:case 4128:return s&&s.some(function(l){return pi(l.props,/grid-\w+-start/)})?e:Ne+ye(ye(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ye(e,/(.+)-inline(.+)/,Pe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(An(e)-1-i>6)switch(ct(e,i+1)){case 109:if(ct(e,i+4)!==45)break;case 102:return ye(e,/(.+:)(.+)-([^]+)/,"$1"+Pe+"$2-$3$1"+No+(ct(e,i+3)==108?"$3":"$2-$3"))+e;case 115:return~oc(e,"stretch",0)?d3(ye(e,"stretch","fill-available"),i,s)+e:e}break;case 5152:case 5920:return ye(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(l,c,p,d,f,x,g){return Ne+c+":"+p+g+(d?Ne+c+"-span:"+(f?x:+x-+p)+g:"")+e});case 4949:if(ct(e,i+6)===121)return ye(e,":",":"+Pe)+e;break;case 6444:switch(ct(e,ct(e,14)===45?18:11)){case 120:return ye(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Pe+(ct(e,14)===45?"inline-":"")+"box$3$1"+Pe+"$2$3$1"+Ne+"$2box$3")+e;case 100:return ye(e,":",":"+Ne)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ye(e,"scroll-","scroll-snap-")+e}return e}function Cc(e,i){for(var s="",l=0;l<e.length;l++)s+=i(e[l],l,e,i)||"";return s}function iv(e,i,s,l){switch(e.type){case W6:if(e.children.length)break;case _6:case H6:case Yp:return e.return=e.return||e.value;case r3:return"";case s3:return e.return=e.value+"{"+Cc(e.children,l)+"}";case Uc:if(!An(e.value=e.props.join(",")))return""}return An(s=Cc(e.children,l))?e.return=e.value+"{"+s+"}":""}function rv(e){var i=a3(e);return function(s,l,c,p){for(var d="",f=0;f<i;f++)d+=e[f](s,l,c,p)||"";return d}}function sv(e){return function(i){i.root||(i=i.return)&&e(i)}}function ov(e,i,s,l){if(e.length>-1&&!e.return)switch(e.type){case Yp:e.return=d3(e.value,e.length,s);return;case s3:return Cc([Mi(e,{value:ye(e.value,"@","@"+Pe)})],l);case Uc:if(e.length)return Z6(s=e.props,function(c){switch(pi(c,l=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":rs(Mi(e,{props:[ye(c,/:(read-\w+)/,":"+No+"$1")]})),rs(Mi(e,{props:[c]})),up(e,{props:F2(s,l)});break;case"::placeholder":rs(Mi(e,{props:[ye(c,/:(plac\w+)/,":"+Pe+"input-$1")]})),rs(Mi(e,{props:[ye(c,/:(plac\w+)/,":"+No+"$1")]})),rs(Mi(e,{props:[ye(c,/:(plac\w+)/,Ne+"input-$1")]})),rs(Mi(e,{props:[c]})),up(e,{props:F2(s,l)});break}return""})}}var hs={},o1,l1;const ys=typeof process<"u"&&hs!==void 0&&(hs.REACT_APP_SC_ATTR||hs.SC_ATTR)||"data-styled",u3="active",p3="data-styled-version",qc="6.5.3",Qp=`/*!sc*/
`,Oo=typeof window<"u"&&typeof document<"u";function _2(e){if(typeof process<"u"&&hs!==void 0){const i=hs[e];if(i!==void 0&&i!=="")return i!=="false"}}const lv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(l1=(o1=_2("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&o1!==void 0?o1:_2("SC_DISABLE_SPEEDY"))!==null&&l1!==void 0?l1:typeof process<"u"&&hs!==void 0&&!1),f3="sc-keyframes-";function dl(e,...i){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${i.length>0?` Args: ${i.join(", ")}`:""}`)}let cc=new Map,wc=new Map,dc=1;const zo=e=>{if(cc.has(e))return cc.get(e);for(;wc.has(dc);)dc++;const i=dc++;return cc.set(e,i),wc.set(i,e),i},av=e=>wc.get(e),cv=(e,i)=>{dc=i+1,cc.set(e,i),wc.set(i,e)},Jp=Object.freeze([]),js=Object.freeze({});function dv(e,i,s=js){return e.theme!==s.theme&&e.theme||i||s.theme}const uv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,pv=/(^-|-$)/g;function h3(e){return e.replace(uv,"-").replace(pv,"")}const fv=/(a)(d)/gi,H2=e=>String.fromCharCode(e+(e>25?39:97));function ef(e){let i,s="";for(i=Math.abs(e);i>52;i=i/52|0)s=H2(i%52)+s;return(H2(i%52)+s).replace(fv,"$1-$2")}const fp=5381,kr=(e,i)=>{let s=i.length;for(;s;)e=33*e^i.charCodeAt(--s);return e},x3=e=>kr(fp,e);function m3(e){return ef(x3(e)>>>0)}function hv(e){return e.displayName||e.name||"Component"}function hp(e){return typeof e=="string"&&!0}function xv(e){return hp(e)?`styled.${e}`:`Styled(${hv(e)})`}const g3=Symbol.for("react.memo"),mv=Symbol.for("react.forward_ref"),gv={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},vv={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},v3={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},yv={[mv]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[g3]:v3};function W2(e){return("type"in(i=e)&&i.type.$$typeof)===g3?v3:"$$typeof"in e?yv[e.$$typeof]:gv;var i}const jv=Object.defineProperty,Cv=Object.getOwnPropertyNames,wv=Object.getOwnPropertySymbols,bv=Object.getOwnPropertyDescriptor,Sv=Object.getPrototypeOf,kv=Object.prototype;function y3(e,i,s){if(typeof i!="string"){const l=Sv(i);l&&l!==kv&&y3(e,l,s);const c=Cv(i).concat(wv(i)),p=W2(e),d=W2(i);for(let f=0;f<c.length;++f){const x=c[f];if(!(x in vv||s&&s[x]||d&&x in d||p&&x in p)){const g=bv(i,x);try{jv(e,x,g)}catch{}}}}return e}function Yc(e){return typeof e=="function"}const Tv=Symbol.for("react.forward_ref");function j3(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===Tv&&"styledComponentId"in e}function Mo(e,i){return e&&i?e+" "+i:e||i||""}function xp(e,i){return e.join("")}function nl(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function mp(e,i,s=!1){if(!s&&!nl(e)&&!Array.isArray(e))return i;if(Array.isArray(i))for(let l=0;l<i.length;l++)e[l]=mp(e[l],i[l]);else if(nl(i))for(const l in i)e[l]=mp(e[l],i[l]);return e}function tf(e,i){Object.defineProperty(e,"toString",{value:i})}const $v=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let i=this._cIndex;if(e>this._cGroup)for(let s=this._cGroup;s<e;s++)i+=this.groupSizes[s];else for(let s=this._cGroup-1;s>=e;s--)i-=this.groupSizes[s];return this._cGroup=e,this._cIndex=i,i}insertRules(e,i){if(e>=this.groupSizes.length){const c=this.groupSizes,p=c.length;let d=p;for(;e>=d;)if(d<<=1,d<0)throw dl(16,`${e}`);this.groupSizes=new Uint32Array(d),this.groupSizes.set(c),this.length=d;for(let f=p;f<d;f++)this.groupSizes[f]=0}let s=this.indexOfGroup(e+1),l=0;for(let c=0,p=i.length;c<p;c++)this.tag.insertRule(s,i[c])&&(this.groupSizes[e]++,s++,l++);l>0&&this._cGroup>e&&(this._cIndex+=l)}clearGroup(e){if(e<this.length){const i=this.groupSizes[e],s=this.indexOfGroup(e),l=s+i;this.groupSizes[e]=0;for(let c=s;c<l;c++)this.tag.deleteRule(s);i>0&&this._cGroup>e&&(this._cIndex-=i)}}getGroup(e){let i="";if(e>=this.length||this.groupSizes[e]===0)return i;const s=this.groupSizes[e],l=this.indexOfGroup(e),c=l+s;for(let p=l;p<c;p++)i+=this.tag.getRule(p)+Qp;return i}},Lv=`style[${ys}][${p3}="${qc}"]`,Bv=new RegExp(`^${ys}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),U2=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,gp=e=>{if(!e)return document;if(U2(e))return e;if("getRootNode"in e){const i=e.getRootNode();if(U2(i))return i}return document},Pv=(e,i,s)=>{const l=s.split(",");let c;for(let p=0,d=l.length;p<d;p++)(c=l[p])&&e.registerName(i,c)},Ev=(e,i)=>{var s;const l=((s=i.textContent)!==null&&s!==void 0?s:"").split(Qp),c=[];for(let p=0,d=l.length;p<d;p++){const f=l[p].trim();if(!f)continue;const x=f.match(Bv);if(x){const g=0|parseInt(x[1],10),m=x[2];g!==0&&(cv(m,g),Pv(e,m,x[3]),e.getTag().insertRules(g,c)),c.length=0}else c.push(f)}},a1=e=>{const i=gp(e.options.target).querySelectorAll(Lv);for(let s=0,l=i.length;s<l;s++){const c=i[s];c&&c.getAttribute(ys)!==u3&&(Ev(e,c),c.parentNode&&c.parentNode.removeChild(c))}};let mo=!1;function Dv(){if(mo!==!1)return mo;if(typeof document<"u"){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return mo=e.nonce||e.getAttribute("content")||void 0;const i=document.head.querySelector('meta[name="sc-nonce"]');if(i)return mo=i.getAttribute("content")||void 0}return mo=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const C3=(e,i)=>{const s=document.head,l=e||s,c=document.createElement("style"),p=(x=>{const g=Array.from(x.querySelectorAll(`style[${ys}]`));return g[g.length-1]})(l),d=p!==void 0?p.nextSibling:null;c.setAttribute(ys,u3),c.setAttribute(p3,qc);const f=i||Dv();return f&&c.setAttribute("nonce",f),l.insertBefore(c,d),c},Rv=class{constructor(e,i){this.element=C3(e,i),this.element.appendChild(document.createTextNode("")),this.sheet=(s=>{var l;if(s.sheet)return s.sheet;const c=(l=s.getRootNode().styleSheets)!==null&&l!==void 0?l:document.styleSheets;for(let p=0,d=c.length;p<d;p++){const f=c[p];if(f.ownerNode===s)return f}throw dl(17)})(this.element),this.length=0}insertRule(e,i){try{return this.sheet.insertRule(i,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const i=this.sheet.cssRules[e];return i&&i.cssText?i.cssText:""}},Iv=class{constructor(e,i){this.element=C3(e,i),this.nodes=this.element.childNodes,this.length=0}insertRule(e,i){if(e<=this.length&&e>=0){const s=document.createTextNode(i);return this.element.insertBefore(s,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let Z2=Oo;const Av={isServer:!Oo,useCSSOMInjection:!lv};class Xc{static registerId(i){return zo(i)}constructor(i=js,s={},l){this.options=Object.assign(Object.assign({},Av),i),this.gs=s,this.keyframeIds=new Set,this.names=new Map(l),this.server=!!i.isServer,!this.server&&Oo&&Z2&&(Z2=!1,a1(this)),tf(this,()=>(c=>{const p=c.getTag(),{length:d}=p;let f="";for(let x=0;x<d;x++){const g=av(x);if(g===void 0)continue;const m=c.names.get(g);if(m===void 0||!m.size)continue;const j=p.getGroup(x);if(j.length===0)continue;const C=ys+".g"+x+'[id="'+g+'"]';let k="";for(const S of m)S.length>0&&(k+=S+",");f+=j+C+'{content:"'+k+'"}'+Qp}return f})(this))}rehydrate(){!this.server&&Oo&&a1(this)}reconstructWithOptions(i,s=!0){const l=new Xc(Object.assign(Object.assign({},this.options),i),this.gs,s&&this.names||void 0);return l.keyframeIds=new Set(this.keyframeIds),!this.server&&Oo&&i.target!==this.options.target&&gp(this.options.target)!==gp(i.target)&&a1(l),l}allocateGSInstance(i){return this.gs[i]=(this.gs[i]||0)+1}getTag(){return this.tag||(this.tag=(i=(({useCSSOMInjection:s,target:l,nonce:c})=>s?new Rv(l,c):new Iv(l,c))(this.options),new $v(i)));var i}hasNameForId(i,s){var l,c;return(c=(l=this.names.get(i))===null||l===void 0?void 0:l.has(s))!==null&&c!==void 0&&c}registerName(i,s){zo(i),i.startsWith(f3)&&this.keyframeIds.add(i);const l=this.names.get(i);l?l.add(s):this.names.set(i,new Set([s]))}insertRules(i,s,l){this.registerName(i,s),this.getTag().insertRules(zo(i),l)}clearNames(i){this.names.has(i)&&this.names.get(i).clear()}clearRules(i){this.getTag().clearGroup(zo(i)),this.clearNames(i)}clearTag(){this.tag=void 0}}const w3=new WeakSet,zv={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Mv(e,i){return i==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||e in zv||e.startsWith("--")?String(i).trim():i+"px"}const yr=47;function G2(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let i="";for(let s=0;s<e.length;s++){const l=e.charCodeAt(s);i+=l>=65&&l<=90?"-"+String.fromCharCode(l+32):e[s]}return i.startsWith("ms-")?"-"+i:i}const b3=Symbol.for("sc-keyframes");function Vv(e){return typeof e=="object"&&e!==null&&b3 in e}function S3(e){return Yc(e)&&!(e.prototype&&e.prototype.isReactComponent)}const k3=e=>e==null||e===!1||e==="",Fv=Symbol.for("react.client.reference");function K2(e){return e.$$typeof===Fv}function T3(e,i){for(const s in e){const l=e[s];e.hasOwnProperty(s)&&!k3(l)&&(Array.isArray(l)&&w3.has(l)||Yc(l)?i.push(G2(s)+":",l,";"):nl(l)?(i.push(s+" {"),T3(l,i),i.push("}")):i.push(G2(s)+": "+Mv(s,l)+";"))}}function Tr(e,i,s,l,c=[]){if(k3(e))return c;const p=typeof e;if(p==="string")return c.push(e),c;if(p==="function"){if(K2(e))return c;if(S3(e)&&i){const d=e(i);return Tr(d,i,s,l,c)}return c.push(e),c}if(Array.isArray(e)){for(let d=0;d<e.length;d++)Tr(e[d],i,s,l,c);return c}return j3(e)?(c.push(`.${e.styledComponentId}`),c):Vv(e)?(s?(e.inject(s,l),c.push(e.getName(l))):c.push(e),c):K2(e)?c:nl(e)?e.toString!==Object.prototype.toString?(c.push(e.toString()),c):(T3(e,c),c):(c.push(e.toString()),c)}const Nv=x3(qc);class Ov{constructor(i,s,l){this.rules=i,this.componentId=s,this.baseHash=kr(Nv,s),this.baseStyle=l,Xc.registerId(s)}generateAndInjectStyles(i,s,l){let c=this.baseStyle?this.baseStyle.generateAndInjectStyles(i,s,l):"";{let p="";for(let d=0;d<this.rules.length;d++){const f=this.rules[d];if(typeof f=="string")p+=f;else if(f)if(S3(f)){const x=f(i);typeof x=="string"?p+=x:x!=null&&x!==!1&&(p+=xp(Tr(x,i,s,l)))}else p+=xp(Tr(f,i,s,l))}if(p){this.dynamicNameCache||(this.dynamicNameCache=new Map);const d=l.hash?l.hash+p:p;let f=this.dynamicNameCache.get(d);if(!f){if(f=ef(kr(kr(this.baseHash,l.hash),p)>>>0),this.dynamicNameCache.size>=200){const x=this.dynamicNameCache.keys().next().value;x!==void 0&&this.dynamicNameCache.delete(x)}this.dynamicNameCache.set(d,f)}if(!s.hasNameForId(this.componentId,f)){const x=l(p,"."+f,void 0,this.componentId);s.insertRules(this.componentId,f,x)}c=Mo(c,f)}}return c}}const _v=/&/g;function $3(e,i){let s=0;for(;--i>=0&&e.charCodeAt(i)===92;)s++;return!(1&~s)}function c1(e){const i=e.length;let s="",l=0,c=0,p=0,d=!1,f=!1;for(let x=0;x<i;x++){const g=e.charCodeAt(x);if(p!==0||d||g!==yr||e.charCodeAt(x+1)!==42)if(d)g===42&&e.charCodeAt(x+1)===yr&&(d=!1,x++);else if(g!==34&&g!==39||$3(e,x)){if(p===0)if(g===123)c++;else if(g===125){if(c--,c<0){f=!0;let m=x+1;for(;m<i;){const j=e.charCodeAt(m);if(j===59||j===10)break;m++}m<i&&e.charCodeAt(m)===59&&m++,c=0,x=m-1,l=m;continue}c===0&&(s+=e.substring(l,x+1),l=x+1)}else g===59&&c===0&&(s+=e.substring(l,x+1),l=x+1)}else p===0?p=g:p===g&&(p=0);else d=!0,x++}return f||c!==0||p!==0?(l<i&&c===0&&p===0&&(s+=e.substring(l)),s):e}function L3(e,i){const s=i+" ",l=","+s;for(let c=0;c<e.length;c++){const p=e[c];if(p.type==="rule"){p.value=(s+p.value).replaceAll(",",l);const d=p.props,f=[];for(let x=0;x<d.length;x++)f[x]=s+d[x];p.props=f}Array.isArray(p.children)&&p.type!=="@keyframes"&&L3(p.children,i)}return e}function Hv({options:e=js,plugins:i=Jp}=js){let s,l,c;const p=(C,k,S)=>S.startsWith(l)&&S.endsWith(l)&&S.replaceAll(l,"").length>0?`.${s}`:C,d=i.slice();d.push(C=>{C.type===Uc&&C.value.includes("&")&&(c||(c=new RegExp(`\\${l}\\b`,"g")),C.props[0]=C.props[0].replace(_v,l).replace(c,p))}),e.prefix&&d.push(ov),d.push(iv);let f=[];const x=rv(d.concat(sv(C=>f.push(C)))),g=(C,k="",S="",T="&")=>{s=T,l=k,c=void 0;const P=(function(E){const M=E.indexOf("//")!==-1,F=E.indexOf("}")!==-1;if(!M&&!F)return E;if(!M)return c1(E);const O=E.length;let X="",V=0,z=0,J=0,Q=0,ae=0,me=!1;for(;z<O;){const ge=E.charCodeAt(z);if(ge!==34&&ge!==39||$3(E,z))if(J===0)if(ge===yr&&z+1<O&&E.charCodeAt(z+1)===42){for(z+=2;z+1<O&&(E.charCodeAt(z)!==42||E.charCodeAt(z+1)!==yr);)z++;z+=2}else if(ge!==40)if(ge!==41)if(Q>0)z++;else if(ge===42&&z+1<O&&E.charCodeAt(z+1)===yr)X+=E.substring(V,z),z+=2,V=z,me=!0;else if(ge===yr&&z+1<O&&E.charCodeAt(z+1)===yr){for(X+=E.substring(V,z);z<O&&E.charCodeAt(z)!==10;)z++;V=z,me=!0}else ge===123?ae++:ge===125&&ae--,z++;else Q>0&&Q--,z++;else Q++,z++;else z++;else J===0?J=ge:J===ge&&(J=0),z++}return me?(V<O&&(X+=E.substring(V)),ae===0?X:c1(X)):ae===0?E:c1(E)})(C);let R=tv(S||k?S+" "+k+" { "+P+" }":P);return e.namespace&&(R=L3(R,e.namespace)),f=[],Cc(R,x),f},m=e;let j=fp;for(let C=0;C<i.length;C++)i[C].name||dl(15),j=kr(j,i[C].name);return m!=null&&m.namespace&&(j=kr(j,m.namespace)),m!=null&&m.prefix&&(j=kr(j,"p")),g.hash=j!==fp?j.toString():"",g}const Wv=new Xc,vp=Hv(),B3=en.createContext({shouldForwardProp:void 0,styleSheet:Wv,stylis:vp,stylisPlugins:void 0});B3.Consumer;function Uv(){return en.useContext(B3)}const P3=en.createContext(void 0);P3.Consumer;const q2=Object.prototype.hasOwnProperty,d1={};function Zv(e,i){const s=typeof e!="string"?"sc":h3(e);d1[s]=(d1[s]||0)+1;const l=s+"-"+m3(qc+s+d1[s]);return i?i+"-"+l:l}function Gv(e,i,s){const l=j3(e),c=e,p=!hp(e),{attrs:d=Jp,componentId:f=Zv(i.displayName,i.parentComponentId),displayName:x=xv(e)}=i,g=i.displayName&&i.componentId?h3(i.displayName)+"-"+i.componentId:i.componentId||f,m=l&&c.attrs?c.attrs.concat(d).filter(Boolean):d;let{shouldForwardProp:j}=i;if(l&&c.shouldForwardProp){const T=c.shouldForwardProp;if(i.shouldForwardProp){const P=i.shouldForwardProp;j=(R,E)=>T(R,E)&&P(R,E)}else j=T}const C=new Ov(s,g,l?c.componentStyle:void 0);function k(T,P){return(function(R,E,M){const{attrs:F,componentStyle:O,defaultProps:X,foldedComponentIds:V,styledComponentId:z,target:J}=R,Q=en.useContext(P3),ae=Uv(),me=R.shouldForwardProp||ae.shouldForwardProp,ge=dv(E,Q,X)||js;let ke,Ie;{const ee=en.useRef(null),Y=ee.current;if(Y!==null&&Y[1]===ge&&Y[2]===ae.styleSheet&&Y[3]===ae.stylis&&Y[7]===O&&(function(B,N,pe){const ne=B,ue=N;let je=0;for(const be in ue)if(q2.call(ue,be)&&(je++,ne[be]!==ue[be]))return!1;return je===pe})(Y[0],E,Y[4]))ke=Y[5],Ie=Y[6];else{ke=(function(N,pe,ne){const ue=Object.assign(Object.assign({},pe),{className:void 0,theme:ne}),je=N.length>1;for(let be=0;be<N.length;be++){const Se=N[be],Be=Yc(Se)?Se(je?Object.assign({},ue):ue):Se;for(const Ue in Be)Ue==="className"?ue.className=Mo(ue.className,Be[Ue]):Ue==="style"?ue.style=Object.assign(Object.assign({},ue.style),Be[Ue]):Ue in pe&&pe[Ue]===void 0||(ue[Ue]=Be[Ue])}return"className"in pe&&typeof pe.className=="string"&&(ue.className=Mo(ue.className,pe.className)),ue})(F,E,ge),Ie=O.generateAndInjectStyles(ke,ae.styleSheet,ae.stylis);let B=0;for(const N in E)q2.call(E,N)&&B++;ee.current=[E,ge,ae.styleSheet,ae.stylis,B,ke,Ie,O]}}const $e=ke.as||J,De=(function(ee,Y,B,N){const pe={};for(const ne in ee)ee[ne]===void 0||ne[0]==="$"||ne==="as"||ne==="theme"&&ee.theme===B||(ne==="forwardedAs"?pe.as=ee.forwardedAs:N&&!N(ne,Y)||(pe[ne]=ee[ne]));return pe})(ke,$e,ge,me);let Z=Mo(V,z);return Ie&&(Z+=" "+Ie),ke.className&&(Z+=" "+ke.className),De[hp($e)&&$e.includes("-")?"class":"className"]=Z,M&&(De.ref=M),b.createElement($e,De)})(S,T,P)}k.displayName=x;let S=en.forwardRef(k);return S.attrs=m,S.componentStyle=C,S.displayName=x,S.shouldForwardProp=j,S.foldedComponentIds=l?Mo(c.foldedComponentIds,c.styledComponentId):"",S.styledComponentId=g,S.target=l?c.target:e,Object.defineProperty(S,"defaultProps",{get(){return this._foldedDefaultProps},set(T){this._foldedDefaultProps=l?(function(P,...R){for(const E of R)mp(P,E,!0);return P})({},c.defaultProps,T):T}}),tf(S,()=>`.${S.styledComponentId}`),p&&y3(S,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),S}var Kv=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function Y2(e,i){const s=[e[0]];for(let l=0,c=i.length;l<c;l+=1)s.push(i[l],e[l+1]);return s}const X2=e=>(w3.add(e),e);function _(e,...i){if(Yc(e)||nl(e))return X2(Tr(Y2(Jp,[e,...i])));const s=e;return i.length===0&&s.length===1&&typeof s[0]=="string"?Tr(s):X2(Tr(Y2(s,i)))}function yp(e,i,s=js){if(!i)throw dl(1,i);const l=(c,...p)=>e(i,s,_(c,...p));return l.attrs=c=>yp(e,i,Object.assign(Object.assign({},s),{attrs:Array.prototype.concat(s.attrs,c).filter(Boolean)})),l.withConfig=c=>yp(e,i,Object.assign(Object.assign({},s),c)),l}const E3=e=>yp(Gv,e),v=E3;Kv.forEach(e=>{v[e]=E3(e)});var D3;class qv{constructor(i,s){this[D3]=!0,this.inject=(l,c=vp)=>{const p=this.getName(c);if(!l.hasNameForId(this.id,p)){const d=c(this.rules,p,"@keyframes");l.insertRules(this.id,p,d)}},this.name=i,this.id=f3+i,this.rules=s,zo(this.id),tf(this,()=>{throw dl(12,String(this.name))})}getName(i=vp){return i.hash?this.name+ef(+i.hash>>>0):this.name}}function Ss(e,...i){const s=xp(_(e,...i)),l=m3(s);return new qv(l,s)}D3=b3;/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Xv=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(i,s,l)=>l?l.toUpperCase():s.toLowerCase()),Q2=e=>{const i=Xv(e);return i.charAt(0).toUpperCase()+i.slice(1)},R3=(...e)=>e.filter((i,s,l)=>!!i&&i.trim()!==""&&l.indexOf(i)===s).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Qv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=b.forwardRef(({color:e="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:l,className:c="",children:p,iconNode:d,...f},x)=>b.createElement("svg",{ref:x,...Qv,width:i,height:i,stroke:e,strokeWidth:l?Number(s)*24/Number(i):s,className:R3("lucide",c),...f},[...d.map(([g,m])=>b.createElement(g,m)),...Array.isArray(p)?p:[p]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ks=(e,i)=>{const s=b.forwardRef(({className:l,...c},p)=>b.createElement(Jv,{ref:p,iconNode:i,className:R3(`lucide-${Yv(Q2(e))}`,`lucide-${e}`,l),...c}));return s.displayName=Q2(e),s};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e8=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],I3=ks("check",e8);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t8=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],n8=ks("chevron-down",t8);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i8=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],r8=ks("chevron-left",i8);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s8=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],A3=ks("chevron-right",s8);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o8=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],l8=ks("circle-alert",o8);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a8=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],c8=ks("menu",a8),$r={p10f70780:"M27.2 5.6H4.8C3.91634 5.6 3.2 6.31634 3.2 7.2V24.8C3.2 25.6837 3.91634 26.4 4.8 26.4H27.2C28.0837 26.4 28.8 25.6837 28.8 24.8V7.2C28.8 6.31634 28.0837 5.6 27.2 5.6ZM11.0392 12.3314L5.6 17.7706V8H26.4V24H24.9706L13.3019 12.3314C12.6771 11.7065 11.664 11.7065 11.0392 12.3314Z",p1110b800:"M25.7969 11.4267C25.6628 11.1386 25.515 10.854 25.3531 10.5737C22.3708 5.40812 15.7656 3.63827 10.6 6.6206C5.43447 9.60294 3.66461 16.2081 6.64695 21.3737C6.80882 21.654 6.98136 21.9244 7.16377 22.1845C9.77937 21.6039 13.5507 20.1592 17.2001 18.0522C20.8494 15.9453 23.9863 13.4016 25.7969 11.4267ZM17.1999 7.51019C17.3438 7.14803 17.8564 7.14803 18.0002 7.5102L18.5349 8.85645C18.7974 9.5176 19.3211 10.0412 19.9822 10.3038L21.3285 10.8384C21.6906 10.9823 21.6906 11.4949 21.3285 11.6387L19.9822 12.1734C19.3211 12.4359 18.7974 12.9595 18.5349 13.6207L18.0002 14.9669C17.8564 15.3291 17.3438 15.3291 17.1999 14.967L16.6653 13.6207C16.4027 12.9595 15.8791 12.4359 15.218 12.1734L13.8717 11.6387C13.5095 11.4949 13.5095 10.9823 13.8717 10.8384L15.218 10.3038C15.8791 10.0412 16.4027 9.5176 16.6653 8.85645L17.1999 7.51019Z",p1699a100:"M24.8 12.8C24.8 14.5673 23.3673 16 21.6 16C19.8327 16 18.4 14.5673 18.4 12.8C18.4 11.0327 19.8327 9.6 21.6 9.6C23.3673 9.6 24.8 11.0327 24.8 12.8Z",p18d7b780:"M26.516 18.4343C24.638 19.9759 22.4245 21.5022 20.0001 22.902C17.5756 24.3017 15.147 25.4555 12.873 26.3111C15.6291 27.1442 18.7098 26.88 21.4 25.3268C24.0903 23.7735 25.8595 21.2377 26.516 18.4343Z",p25c8a0b0:"M3.55107 22.006C3.84627 21.4126 3.60455 20.6923 3.01118 20.3971C2.41781 20.1019 1.69749 20.3436 1.40229 20.937C0.816652 22.1142 0.490658 23.5107 1.18412 24.7118C1.80966 25.7953 2.99269 26.2381 4.15364 26.374C5.34197 26.5131 6.77465 26.3704 8.32377 26.0265C11.4364 25.3356 15.2976 23.7688 19.1998 21.5159C23.102 19.2629 26.3895 16.7025 28.5442 14.3523C29.6165 13.1826 30.4564 12.0132 30.9301 10.9146C31.3929 9.8412 31.6009 8.59526 30.9754 7.5118C30.2819 6.31069 28.9095 5.89475 27.5972 5.81333C26.9357 5.7723 26.3662 6.27525 26.3252 6.93672C26.2842 7.59819 26.7871 8.16769 27.4486 8.20873C28.5008 8.27401 28.8174 8.5741 28.8969 8.7118C28.9673 8.83365 29.0628 9.18369 28.7262 9.96437C28.4006 10.7197 27.7543 11.6625 26.7751 12.7304C24.8269 14.8554 21.7503 17.2721 17.9998 19.4374C14.2493 21.6027 10.6181 23.0588 7.80369 23.6836C6.38926 23.9975 5.24969 24.0859 4.43269 23.9902C3.58831 23.8914 3.33293 23.6336 3.26258 23.5118C3.18308 23.3741 3.0815 22.9498 3.55107 22.006Z",p28dd5f00:"M19.0921 4.82596L28.5768 21.0946C28.8744 21.6061 28.8744 22.2363 28.5768 22.7478L26.928 25.5753C26.6303 26.0855 26.0798 26.4 25.4846 26.4H6.51525C5.91868 26.4 5.36819 26.0855 5.07056 25.574L3.42306 22.7478C3.12543 22.2363 3.12543 21.6061 3.42438 21.0946L12.9064 4.82726C13.204 4.31577 13.7545 4 14.3498 4H17.6487C18.244 4 18.7945 4.31577 19.0921 4.82596ZM15.9986 23.3519C17.575 23.3519 19.0947 23.1118 20.5236 22.6656C22.1935 22.1436 23.2234 20.4656 22.8639 18.7668C22.2106 15.6769 20.5882 12.9394 18.327 10.8804C17.0087 9.67862 14.9898 9.67992 13.6716 10.8804C11.4104 12.9407 9.78919 15.6782 9.13598 18.7681C8.77645 20.4669 9.80763 22.145 11.4775 22.6669C12.9051 23.1118 14.4235 23.3519 15.9986 23.3519Z",p300dea40:"M11.9039 4.8C11.9039 3.91634 12.6375 3.2 13.5424 3.2H18.4576C19.3625 3.2 20.0961 3.91634 20.0961 4.8V6.39706C20.9477 6.74387 21.7433 7.19556 22.466 7.73561L23.8844 6.9359C24.6681 6.49407 25.6701 6.75627 26.1226 7.52154L28.5802 11.6785C29.0327 12.4437 28.7642 13.4223 27.9805 13.8641L26.5627 14.6635C26.6202 15.1011 26.6498 15.5472 26.6498 16C26.6498 16.4528 26.6202 16.8989 26.5627 17.3365L27.9805 18.1359C28.7642 18.5777 29.0327 19.5563 28.5802 20.3215L26.1226 24.4785C25.6701 25.2437 24.6681 25.5059 23.8844 25.0641L22.466 24.2644C21.7433 24.8044 20.9477 25.2561 20.0961 25.6029V27.2C20.0961 28.0837 19.3625 28.8 18.4576 28.8H13.5424C12.6375 28.8 11.9039 28.0837 11.9039 27.2V25.6029C11.0523 25.2561 10.2567 24.8044 9.53398 24.2644L8.11557 25.0641C7.33192 25.5059 6.32987 25.2437 5.87743 24.4785L3.41978 20.3215C2.96734 19.5563 3.23584 18.5777 4.01949 18.1359L5.43731 17.3365C5.37983 16.8989 5.35019 16.4528 5.35019 16C5.35019 15.5472 5.37983 15.1011 5.43731 14.6635L4.01949 13.8641C3.23584 13.4223 2.96734 12.4437 3.41978 11.6785L5.87743 7.52154C6.32987 6.75627 7.33192 6.49407 8.11557 6.9359L9.53398 7.73561C10.2567 7.19556 11.0523 6.74387 11.9039 6.39706V4.8ZM20.0961 16C20.0961 18.2091 18.2622 20 16 20C13.7378 20 11.9039 18.2091 11.9039 16C11.9039 13.7909 13.7378 12 16 12C18.2622 12 20.0961 13.7909 20.0961 16Z"},z3={p2f5ec580:"M9.67005 7.86935C10.0283 8.02293 10.332 8.17634 10.554 8.29623L10.569 8.29137C10.8983 8.18505 11.3614 8.1 12 8.1C12.6386 8.1 13.1017 8.18505 13.4311 8.29137L13.446 8.29623C13.668 8.17634 13.9717 8.02293 14.33 7.86935C15.0734 7.55066 16.123 7.2 17.1918 7.2C18.8809 7.2 20 7.6335 20.7664 7.93038C20.9345 7.9955 21.0856 8.05405 21.2221 8.1H21.9243C22.4079 8.1 22.8 8.50294 22.8 9C22.8 9.47646 22.4398 9.86645 21.9839 9.89795L21.9887 10.0428C22 10.3825 22.0111 10.7317 22.0062 11.0755C21.9964 11.77 21.9222 12.4933 21.6306 13.2366C21.2241 14.2725 20.6434 15.0433 19.861 15.5405C19.0875 16.0321 18.2051 16.2 17.2911 16.2C16.4989 16.2 15.7104 16.0169 14.9903 15.5241C14.2754 15.035 13.697 14.2879 13.2409 13.2793C13.0899 12.9454 12.9889 12.5146 12.9162 12.1213C12.8402 11.7095 12.7823 11.2627 12.7389 10.8572C12.7028 10.5198 12.6759 10.2037 12.6568 9.94933C12.5002 9.92218 12.2851 9.9 12 9.9C11.7149 9.9 11.4998 9.92218 11.3432 9.94933C11.3241 10.2037 11.2972 10.5198 11.2611 10.8572C11.2176 11.2627 11.1598 11.7095 11.0838 12.1213C11.0111 12.5146 10.9101 12.9454 10.7591 13.2793C10.303 14.2879 9.72457 15.035 9.00971 15.5241C8.28962 16.0169 7.5011 16.2 6.70895 16.2C5.79494 16.2 4.91254 16.0321 4.13903 15.5405C3.35664 15.0433 2.77585 14.2725 2.36943 13.2366C2.07783 12.4933 2.00357 11.77 1.99378 11.0755C1.98894 10.7317 2.00001 10.3825 2.01127 10.0428L2.01606 9.89795C1.56024 9.86645 1.2 9.47646 1.2 9C1.2 8.50294 1.59205 8.1 2.07568 8.1H2.77791C2.91437 8.05404 3.0655 7.9955 3.2336 7.93038C3.99999 7.6335 5.11908 7.2 6.80824 7.2C7.87697 7.2 8.9266 7.55066 9.67005 7.86935Z",p65d1800:"M17.4 10.2C19.3882 10.2 21 8.58823 21 6.6C21 4.61177 19.3882 3 17.4 3C15.4118 3 13.8 4.61177 13.8 6.6C13.8 6.85868 13.8273 7.11099 13.8791 7.3542L9.31525 9.63615C8.65527 8.8787 7.68354 8.4 6.6 8.4C4.61177 8.4 3 10.0118 3 12C3 13.9882 4.61177 15.6 6.6 15.6C7.68354 15.6 8.65527 15.1213 9.31525 14.3639L13.8791 16.6458C13.8273 16.889 13.8 17.1413 13.8 17.4C13.8 19.3882 15.4118 21 17.4 21C19.3882 21 21 19.3882 21 17.4C21 15.4118 19.3882 13.8 17.4 13.8C16.3165 13.8 15.3447 14.2787 14.6848 15.0361L10.1209 12.7542C10.1727 12.511 10.2 12.2587 10.2 12C10.2 11.7413 10.1727 11.489 10.1209 11.2458L14.6848 8.96385C15.3447 9.7213 16.3165 10.2 17.4 10.2Z"},Ta={p1c50b080:"M21.2197 2.93117L12.7664 19.5574C12.6308 19.8243 12.355 19.9933 12.0503 19.9933H9.26371C8.96348 19.9933 8.68993 19.8243 8.54982 19.5574L0.101032 2.93117C-0.0435252 2.65317 -0.0301815 2.32181 0.123271 2.05271L1.0262 0.487045C1.20189 0.186812 1.52214 0 1.8713 0H2.69416C2.90543 0 3.10337 0.117869 3.19677 0.313577L10.3001 14.4423C10.4491 14.7381 10.8716 14.7381 11.0206 14.4423L18.1195 0.313577C18.2129 0.120093 18.4108 0 18.6266 0H19.445C19.7941 0 20.1166 0.184588 20.2901 0.487045L21.1974 2.05493C21.3531 2.32403 21.362 2.65317 21.2197 2.92894",p1fa0f800:"M63.0812 2.93117L54.628 19.5574C54.4923 19.8243 54.2188 19.9933 53.9141 19.9933H51.1275C50.8273 19.9933 50.5515 19.8243 50.4136 19.5574L41.9626 2.93117C41.818 2.65317 41.8314 2.32181 41.9826 2.05271L42.8855 0.491493C43.0612 0.186812 43.3859 0.00222395 43.7351 0.00222395H44.5535C44.7648 0.00222395 44.9627 0.120093 45.0561 0.315801L52.1594 14.4446C52.3084 14.7404 52.731 14.7404 52.88 14.4446L59.9811 0.313577C60.0745 0.120093 60.2724 0 60.4881 0H61.3021C61.6535 0 61.9759 0.186812 62.1516 0.489269L63.0568 2.05493C63.2125 2.32403 63.2213 2.65317 63.079 2.92894",p22754900:"M33.325 0.237963C33.1804 0.091182 32.9758 0 32.7512 0H31.4858C31.1366 0 30.8142 0.186812 30.6407 0.489269L29.74 2.05493C29.6599 2.19504 29.6177 2.35294 29.6177 2.51529V19.186C29.6177 19.633 29.9802 19.9956 30.4272 19.9956H32.7601C33.2049 19.9956 33.563 19.6353 33.563 19.1927V0.811742C33.563 0.587123 33.4718 0.384744 33.325 0.235739",p35c3fa00:"M72.506 0.489269C72.6817 0.186812 73.0041 0 73.3533 0H85.4583C85.8008 0 86.1166 0.182364 86.2878 0.47815L87.1396 1.94373C87.2619 2.15501 87.3242 2.39297 87.3242 2.63538V3.00011C87.3242 3.30034 87.0773 3.54943 86.7749 3.54943H75.7418C75.5194 3.54943 75.3371 3.73179 75.3371 3.95419V7.78161C75.3371 8.004 75.5172 8.18414 75.7396 8.18414H83.2188C83.5813 8.18859 83.877 8.48438 83.877 8.84911V11.0486C83.877 11.4133 83.579 11.7136 83.2121 11.7136H75.7396C75.5172 11.7136 75.3371 11.8937 75.3371 12.1161V16.0458C75.3371 16.2682 75.5172 16.4483 75.7396 16.4483H86.7749C87.0795 16.4483 87.3242 16.693 87.3242 16.9932V17.3602C87.3242 17.6048 87.2597 17.8428 87.1396 18.054L86.2878 19.5219C86.1166 19.8176 85.8008 20 85.4583 20H73.3533C73.0041 20 72.6817 19.8154 72.506 19.513L71.6653 18.0585C71.543 17.8472 71.4785 17.607 71.4785 17.3646V2.63316C71.4785 2.39075 71.5452 2.15279 71.6653 1.94151L72.506 0.489269Z"},_o={p21eedc00:"M1.2 10.9714C1.2 8.88853 2.88853 7.2 4.97143 7.2H19.0286C21.1115 7.2 22.8 8.88853 22.8 10.9714V12C22.8 14.651 20.651 16.8 18 16.8C15.349 16.8 13.2 14.651 13.2 12V10.2H10.8V12C10.8 14.651 8.65097 16.8 6 16.8C3.34903 16.8 1.2 14.651 1.2 12V10.9714Z",p33480b00:"M8.60033 16.6035C10.4779 14.6986 13.5221 14.6986 15.3997 16.6035L12.425 19.6214C12.1903 19.8595 11.8097 19.8595 11.575 19.6214L8.60033 16.6035Z",p3b765800:"M4.7757 12.7233C8.76557 8.67546 15.2344 8.67546 19.2243 12.7233L16.6746 15.3101C14.0929 12.6909 9.90713 12.6909 7.32545 15.3101L4.7757 12.7233Z",p3c404700:"M6.59993 3.15C6.59993 2.40442 7.20434 1.8 7.94993 1.8C8.69551 1.8 9.29993 2.40442 9.29993 3.15V11.7L10.1999 11.7V9.15C10.1999 8.40442 10.8043 7.8 11.5499 7.8C12.2955 7.8 12.8999 8.40442 12.8999 9.15V11.7L13.7999 11.7V9.75C13.7999 9.00442 14.4043 8.4 15.1499 8.4C15.8955 8.4 16.4999 9.00442 16.4999 9.75V11.7L17.3999 11.7V10.65C17.3999 9.90442 18.0043 9.3 18.7499 9.3C19.4955 9.3 20.0999 9.90442 20.0999 10.65L20.0999 15.3C20.0999 19.1108 17.0779 22.2 13.3499 22.2C9.62201 22.2 6.59993 18.9 6.59993 18.9L2.23961 14.545C1.65346 13.9596 1.65346 13.0104 2.23961 12.425C2.82576 11.8396 3.77609 11.8396 4.36224 12.425L6.59993 14.6599V13.6541C6.59993 13.6527 6.59993 13.6514 6.59993 13.65V3.15Z",p3cef400:"M1.31237 8.48794C7.31585 2.77068 16.6841 2.77069 22.6876 8.48794C22.8563 8.72618 22.8351 9.06006 22.624 9.27423L20.4965 11.4326C20.4277 11.3592 20.3577 11.2864 20.2867 11.2143C15.7101 6.57123 8.28992 6.57123 3.7133 11.2143C3.64226 11.2864 3.57232 11.3592 3.50349 11.4326L1.37602 9.27423C1.16491 9.06006 1.1437 8.72618 1.31237 8.48794Z"},d8={p3398d140:"M7.29979 3.70711C6.90007 3.31658 6.90007 2.68342 7.29979 2.29289C7.69951 1.90237 8.34759 1.90237 8.74732 2.29289L15.5503 8.93934C16.1499 9.52513 16.1499 10.4749 15.5503 11.0607L8.74732 17.7071C8.34759 18.0976 7.69951 18.0976 7.29979 17.7071C6.90007 17.3166 6.90007 16.6834 7.29979 16.2929L13.7409 10L7.29979 3.70711Z"},nf={p19152e00:"M18.5353 10.806C18.5779 10.5102 18.6 10.2077 18.6 9.9C18.6 6.42061 15.7794 3.6 12.3 3.6C8.91838 3.6 6.15904 6.26432 6.00663 9.6083C3.32649 9.7603 1.2 11.9818 1.2 14.7C1.2 17.4159 3.32299 19.636 6 19.7913V19.8H18.6V19.7902C20.9454 19.6358 22.8 17.6845 22.8 15.3C22.8 12.8937 20.9112 10.9285 18.5353 10.806ZM9 17.4C8.66863 17.4 8.4 17.1314 8.4 16.8C8.4 16.4686 8.66863 16.2 9 16.2H15C15.3314 16.2 15.6 16.4686 15.6 16.8C15.6 17.1314 15.3314 17.4 15 17.4H9ZM14.897 10.9669C15.2873 11.341 15.0225 12 14.4818 12H12.6V14.7C12.6 15.0314 12.3314 15.3 12 15.3C11.6686 15.3 11.4 15.0314 11.4 14.7V12H9.51809C8.97744 12 8.71259 11.3411 9.10286 10.9669L11.5845 8.58763C11.8166 8.36511 12.1828 8.3651 12.415 8.58759L14.897 10.9669Z",p1f0efb00:"M2.4 12C2.4 6.69807 6.69807 2.4 12 2.4C17.3019 2.4 21.6 6.69807 21.6 12C21.6 17.3019 17.3019 21.6 12 21.6C6.69807 21.6 2.4 17.3019 2.4 12ZM10.8 11.7C10.8 11.0373 11.3373 10.5 12 10.5C12.6627 10.5 13.2 11.0373 13.2 11.7V16.5C13.2 17.1627 12.6627 17.7 12 17.7C11.3373 17.7 10.8 17.1627 10.8 16.5V11.7ZM12 6.3C11.1716 6.3 10.5 6.97157 10.5 7.8C10.5 8.62843 11.1716 9.3 12 9.3C12.8284 9.3 13.5 8.62843 13.5 7.8C13.5 6.97157 12.8284 6.3 12 6.3Z",p3e090b80:"M12 22.2C6.3667 22.2 1.8 17.6333 1.8 12C1.8 6.3667 6.3667 1.8 12 1.8C17.6333 1.8 22.2 6.3667 22.2 12C22.2 17.6333 17.6333 22.2 12 22.2ZM20.0421 14.4336C20.2749 13.6633 20.4 12.8463 20.4 12C20.4 11.1433 20.2718 10.3166 20.0334 9.53803C18.7349 9.8393 17.4358 10.0675 16.1365 10.2227C16.1782 10.7999 16.2 11.3938 16.2 12C16.2 12.5957 16.179 13.1795 16.1386 13.7472C17.4402 13.9027 18.7414 14.1315 20.0421 14.4336ZM19.3241 16.1162C18.1959 15.8648 17.0682 15.6716 15.9407 15.5363C15.6722 17.3006 15.2085 18.8352 14.6133 19.9855C16.6248 19.3277 18.3019 17.931 19.3241 16.1162ZM14.3459 13.5794C14.3815 13.0642 14.4 12.5362 14.4 12C14.4 11.4533 14.3808 10.9151 14.3437 10.3903C13.5626 10.4432 12.7813 10.4696 12 10.4696C11.2187 10.4696 10.4374 10.4432 9.65626 10.3903C9.61919 10.9151 9.6 11.4533 9.6 12C9.6 12.5362 9.61846 13.0642 9.65414 13.5794C10.436 13.5265 11.218 13.5 12 13.5C12.782 13.5 13.564 13.5265 14.3459 13.5794ZM9.85488 15.37C10.57 15.3233 11.285 15.3 12 15.3C12.715 15.3 13.43 15.3233 14.1451 15.37C13.9571 16.5628 13.6708 17.6397 13.3054 18.5271C13.0038 19.2597 12.6672 19.8119 12.3451 20.1428C12.148 20.3453 12.0379 20.4 12 20.4C11.9621 20.4 11.852 20.3453 11.6549 20.1428C11.3328 19.8119 10.9962 19.2597 10.6946 18.5271C10.3292 17.6397 10.0429 16.5628 9.85488 15.37ZM7.86138 13.7472C7.82103 13.1795 7.8 12.5957 7.8 12C7.8 11.3938 7.82178 10.7999 7.86354 10.2227C6.56416 10.0675 5.26512 9.8393 3.96656 9.53803C3.72824 10.3166 3.6 11.1433 3.6 12C3.6 12.8463 3.72514 13.6633 3.95792 14.4336C5.25864 14.1315 6.55984 13.9027 7.86138 13.7472ZM4.67593 16.1162C5.80407 15.8648 6.93182 15.6716 8.05928 15.5363C8.32782 17.3006 8.7915 18.8352 9.3867 19.9855C7.37522 19.3277 5.69807 17.931 4.67593 16.1162ZM14.6133 4.01446C16.6148 4.66904 18.2853 6.05514 19.3088 7.85681C18.1842 8.10685 17.0601 8.29917 15.9361 8.43382C15.6669 6.68207 15.2051 5.15832 14.6133 4.01446ZM13.3054 5.47286C13.6678 6.3528 13.9523 7.41911 14.1404 8.59988C13.4268 8.64637 12.7134 8.66961 12 8.66961C11.2866 8.66961 10.5732 8.64637 9.85964 8.59988C10.0477 7.41911 10.3322 6.3528 10.6946 5.47286C10.9962 4.74025 11.3328 4.18807 11.6549 3.85717C11.852 3.65473 11.9621 3.6 12 3.6C12.0379 3.6 12.148 3.65473 12.3451 3.85717C12.6672 4.18807 13.0038 4.74025 13.3054 5.47286ZM9.3867 4.01446C8.79486 5.15832 8.33306 6.68207 8.06385 8.43382C6.93995 8.29917 5.81577 8.10685 4.6912 7.85681C5.71473 6.05514 7.38521 4.66904 9.3867 4.01446Z"},u1={p1e6cb280:"M17.9169 10.4526C17.7278 10.9157 17.072 10.9157 16.8829 10.4526L16.0045 8.30118C15.9478 8.16224 15.8376 8.05199 15.6986 7.99526L13.5473 7.1169C13.0841 6.92781 13.0841 6.27199 13.5473 6.0829L15.6986 5.20454C15.8376 5.14782 15.9478 5.03756 16.0045 4.89862L16.8829 2.74725C17.072 2.28412 17.7278 2.28412 17.9169 2.74725L18.7953 4.89862C18.852 5.03756 18.9622 5.14782 19.1012 5.20454L21.2526 6.0829C21.7157 6.27199 21.7157 6.92781 21.2526 7.1169L19.1012 7.99526C18.9622 8.05199 18.852 8.16225 18.7953 8.30118L17.9169 10.4526Z",p3f723180:"M17.9171 10.4528C17.728 10.9159 17.0722 10.9159 16.8831 10.4528L16.0048 8.3014C15.948 8.16246 15.8378 8.05221 15.6988 7.99548L13.5475 7.11712C13.0843 6.92803 13.0843 6.27221 13.5475 6.08312L15.6988 5.20476C15.8378 5.14804 15.948 5.03778 16.0048 4.89884L16.8831 2.74747C17.0722 2.28434 17.728 2.28434 17.9171 2.74747L18.7955 4.89884C18.8522 5.03778 18.9625 5.14804 19.1014 5.20476L21.2528 6.08312C21.7159 6.27221 21.7159 6.92803 21.2528 7.11712L19.1014 7.99548C18.9625 8.05221 18.8522 8.16247 18.7955 8.3014L17.9171 10.4528Z",p9a06a40:"M8.45077 8.94596C8.76141 8.21818 9.83883 8.21818 10.1495 8.94596L11.5925 12.3267C11.6857 12.545 11.8668 12.7183 12.0951 12.8074L15.6295 14.1877C16.3903 14.4848 16.3903 15.5154 15.6295 15.8125L12.0951 17.1928C11.8668 17.282 11.6857 17.4552 11.5925 17.6736L10.1495 21.0543C9.83883 21.7821 8.76141 21.7821 8.45077 21.0543L7.00774 17.6736C6.91455 17.4552 6.73341 17.282 6.50516 17.1928L2.97077 15.8125C2.20991 15.5154 2.20991 14.4848 2.97077 14.1877L6.50516 12.8074C6.73341 12.7183 6.91455 12.545 7.00774 12.3267L8.45077 8.94596Z"},p1={p2b3bf100:"M15.1168 8.46764C14.9435 7.95298 13.7436 6.46587 11.105 7.02845C9.26423 7.42091 8.54931 8.25959 8.25984 8.95986C7.94164 9.72964 8.06252 10.5133 8.17478 10.8121C8.6613 12.1073 9.86661 12.0407 10.2688 11.6456C10.6234 11.2973 11.1933 11.3023 11.5416 11.6569C11.8899 12.0115 11.8848 12.5813 11.5302 12.9297C10.1421 14.2932 7.40547 13.8829 6.48974 11.4451C6.24577 10.7956 6.07505 9.53337 6.59637 8.27223C7.14641 6.94158 8.40213 5.76426 10.7296 5.26802C14.2409 4.51938 16.3507 6.49118 16.8227 7.89329C17.0411 8.5419 17.0363 9.17909 16.9726 9.66185C16.9115 10.1252 16.7832 10.5373 16.6648 10.7594C16.0014 12.0041 14.5043 12.357 13.3028 11.9665C12.83 11.8129 12.5714 11.3051 12.725 10.8324C12.8786 10.3597 13.3864 10.101 13.8591 10.2546C14.4412 10.4438 14.9196 10.2069 15.0764 9.91275C15.0735 9.91823 15.0748 9.91429 15.0792 9.9016C15.0955 9.85405 15.1542 9.68364 15.1881 9.42641C15.2285 9.11999 15.2211 8.77742 15.1168 8.46764Z",p2dad2c00:"M15.1166 8.46764C14.9433 7.95298 13.7434 6.46587 11.1048 7.02845C9.26404 7.42091 8.54912 8.25959 8.25965 8.95986C7.94145 9.72964 8.06233 10.5133 8.17459 10.8121C8.66111 12.1073 9.86641 12.0407 10.2686 11.6456C10.6232 11.2973 11.1931 11.3023 11.5414 11.6569C11.8897 12.0115 11.8846 12.5813 11.53 12.9297C10.1419 14.2932 7.40528 13.8829 6.48955 11.4451C6.24557 10.7956 6.07486 9.53337 6.59617 8.27223C7.14622 6.94158 8.40193 5.76426 10.7294 5.26802C14.2407 4.51938 16.3505 6.49118 16.8225 7.89329C17.0409 8.5419 17.0361 9.17909 16.9725 9.66185C16.9113 10.1252 16.783 10.5373 16.6646 10.7594C16.0012 12.0041 14.5041 12.357 13.3026 11.9665C12.8298 11.8129 12.5712 11.3051 12.7248 10.8324C12.8784 10.3597 13.3862 10.101 13.8589 10.2546C14.441 10.4438 14.9194 10.2069 15.0762 9.91275C15.0733 9.91823 15.0746 9.91429 15.079 9.9016C15.0953 9.85405 15.154 9.68364 15.1879 9.42641C15.2283 9.11999 15.2209 8.77742 15.1166 8.46764Z",pcc2a100:"M11.7 3.3C7.87079 3.3 4.5 5.9814 4.5 10.2C4.5 12.4424 5.03266 13.7036 5.60924 14.517C5.90565 14.9352 6.23361 15.2634 6.56747 15.5665C6.64696 15.6386 6.73402 15.7153 6.82441 15.7949C7.07617 16.0167 7.35381 16.2612 7.56595 16.4946C7.71655 16.6603 7.8 16.8761 7.8 17.1V21C7.8 21.4971 7.39706 21.9 6.9 21.9C6.40294 21.9 6 21.4971 6 21V17.472C5.91661 17.3949 5.82444 17.3138 5.71929 17.2213C5.6133 17.128 5.49414 17.0232 5.35753 16.8992C4.97889 16.5554 4.54435 16.1273 4.14076 15.558C3.31734 14.3964 2.7 12.7576 2.7 10.2C2.7 4.8186 7.05421 1.5 11.7 1.5C13.7547 1.5 15.5279 1.98454 16.9565 2.92272C18.3885 3.86309 19.4203 5.22425 20.0427 6.88399C20.7944 8.88849 21.3855 11.8388 21.5878 13.052C21.6312 13.313 21.5577 13.5799 21.3867 13.7817C21.2157 13.9836 20.9646 14.1 20.7 14.1H18.6V17.4C18.6 17.7009 18.5378 18.1594 18.3119 18.5776C18.065 19.0348 17.5761 19.5 16.8 19.5H14.7V21C14.7 21.4971 14.2971 21.9 13.8 21.9C13.3029 21.9 12.9 21.4971 12.9 21V18.6C12.9 18.1029 13.3029 17.7 13.8 17.7H16.739C16.7537 17.6675 16.7688 17.6228 16.7806 17.5677C16.7953 17.4993 16.8 17.4375 16.8 17.4V13.2C16.8 12.7029 17.2029 12.3 17.7 12.3H19.6193C19.3458 10.9173 18.8869 8.92828 18.3573 7.51601C17.8547 6.17575 17.049 5.13691 15.9685 4.42728C14.8846 3.71546 13.4703 3.3 11.7 3.3Z"},bc={p1100e400:"M3.42421 4.02397L4.91856 5.51796C5.68636 4.67916 6.60308 3.97683 7.63173 3.45122C9.67645 2.40643 12.0279 2.12913 14.2596 2.66963C16.4913 3.21013 18.4553 4.53263 19.7954 6.39721C21.1354 8.26179 21.7628 10.5449 21.5637 12.8325C21.3645 15.12 20.3521 17.2604 18.7099 18.8654C17.0678 20.4703 14.9048 21.4335 12.6133 21.5803C10.3218 21.727 8.05362 21.0475 6.2202 19.6651C5.00082 18.7457 4.02749 17.5558 3.36835 16.202C3.19707 15.8502 3.04701 15.4873 2.91936 15.1152C2.89678 15.0494 2.8749 14.9832 2.85372 14.9169C2.7023 14.442 3.01506 13.9594 3.50199 13.8532C3.93277 13.7592 4.35486 13.9919 4.55847 14.3732C4.58501 14.4229 4.60784 14.4751 4.6265 14.5295C4.73545 14.8471 4.8645 15.1564 5.01254 15.4557C5.54733 16.5369 6.3298 17.4874 7.30677 18.224C8.79551 19.3466 10.6373 19.8983 12.498 19.7791C14.3587 19.66 16.115 18.8779 17.4484 17.5746C18.7818 16.2714 19.604 14.5334 19.7657 12.6759C19.9274 10.8185 19.418 8.96455 18.3298 7.45051C17.2417 5.93647 15.6469 4.8626 13.8348 4.42372C12.0227 3.98483 10.1132 4.21 8.45293 5.05837C7.59369 5.49742 6.83061 6.08833 6.19642 6.79552L7.97544 8.57411C8.35349 8.95207 8.08581 9.59842 7.55123 9.59842H3C2.66863 9.59842 2.4 9.3298 2.4 8.99842V4.44828C2.4 3.91378 3.04621 3.64606 3.42421 4.02397Z",p1e4eed80:"M12.0028 2.4C11.3401 2.4 10.8028 2.93726 10.8028 3.6V9C10.8028 9.66274 11.3401 10.2 12.0028 10.2C12.6655 10.2 13.2028 9.66274 13.2028 9V3.6C13.2028 2.93726 12.6655 2.4 12.0028 2.4ZM7.92224 4.29185C7.63533 3.86648 7.05791 3.75424 6.63253 4.04116C2.23703 7.00596 1.07722 12.9727 4.04203 17.3682C7.00683 21.7637 12.9735 22.9235 17.369 19.9587C21.7645 16.9939 22.9243 11.0272 19.9595 6.63167C19.2445 5.57152 18.3402 4.67917 17.2947 3.98881C16.8665 3.70608 16.2902 3.82399 16.0075 4.25216C15.7248 4.68034 15.8427 5.25663 16.2709 5.53935C17.1131 6.09547 17.8415 6.81429 18.4191 7.67069C20.8101 11.2154 19.8748 16.0273 16.33 18.4183C12.7853 20.8092 7.9734 19.8739 5.58243 16.3292C3.19146 12.7844 4.12679 7.97254 7.67155 5.58157C8.09692 5.29465 8.20916 4.71723 7.92224 4.29185Z",p20c9f000:"M12 14.0972C13.1598 14.0972 14.1 13.1572 14.1 11.9977C14.1 10.8382 13.1598 9.89821 12 9.89821C10.8402 9.89821 9.9 10.8382 9.9 11.9977C9.9 13.1572 10.8402 14.0972 12 14.0972Z",p3581f900:"M15.2402 4.44853C15.7199 3.9799 15.7199 3.2201 15.2402 2.75147C14.7606 2.28284 13.9829 2.28284 13.5032 2.75147L5.33963 10.7272C4.62012 11.4302 4.62012 12.5698 5.33963 13.2728L13.5032 21.2485C13.9829 21.7172 14.7606 21.7172 15.2402 21.2485C15.7199 20.7799 15.7199 20.0201 15.2402 19.5515L7.51091 12L15.2402 4.44853Z"},u8={p3fcc4900:"M10 18.5C14.6944 18.5 18.5 14.6944 18.5 10C18.5 5.30558 14.6944 1.5 10 1.5C5.30558 1.5 1.5 5.30558 1.5 10C1.5 14.6944 5.30558 18.5 10 18.5ZM12 7.5C12 8.60457 11.1046 9.5 10 9.5C8.89543 9.5 8 8.60457 8 7.5C8 6.39543 8.89543 5.5 10 5.5C11.1046 5.5 12 6.39543 12 7.5ZM10 10.5C12.2091 10.5 14 11.7663 14 13.3284C14 14.8905 6 14.8905 6 13.3284C6 11.7663 7.79086 10.5 10 10.5Z"},p8={p373efc80:"M5.5709 0.958117C6.14563 0.0508935 7.50047 0.623479 7.32676 1.63976L7.3248 1.65245L7.32188 1.66515L6.6373 4.71007H9.13926C9.90407 4.71007 10.3481 5.55351 9.95078 6.18761L9.95176 6.18859L6.43125 11.8575L6.4293 11.8614C5.85658 12.7659 4.50866 12.2004 4.67148 11.1905L5.13145 8.10948H2.86094C2.09446 8.10948 1.64856 7.26162 2.05039 6.62706L5.56895 0.962023L5.5709 0.958117Z"},f1={p21f1a600:"M5.29898 1.05176C5.72137 0.316167 6.78088 0.316169 7.20327 1.05176L11.8537 9.15137C12.2736 9.88274 11.7487 10.7998 10.9015 10.7998H1.60074C0.75357 10.7998 0.228655 9.88274 0.648587 9.15137L5.29898 1.05176Z",p2dac4d00:"M6.25152 3.50034C6.63265 3.50046 6.93975 3.81915 6.92241 4.20151L6.82085 6.45542C6.80704 6.76009 6.55627 7.0012 6.25152 7.00132C5.94667 7.00132 5.69599 6.76016 5.68218 6.45542L5.57964 4.20151C5.56231 3.81907 5.87028 3.50034 6.25152 3.50034Z",p91f5200:"M6.25152 8.00034C6.63749 8.00041 6.94976 8.31415 6.94976 8.70054C6.94953 9.08673 6.63735 9.40066 6.25152 9.40073C5.86562 9.40073 5.5535 9.08677 5.55327 8.70054C5.55327 8.31411 5.86548 8.00034 6.25152 8.00034Z"},Dr={p14736900:"M20 35.999C28.8364 35.999 36 28.8364 36 19.999C36 11.1626 28.8364 4 20 4C11.1636 4 4 11.1626 4 19.999C4 28.8364 11.1636 35.999 20 35.999ZM29 19.9294C29 19.14 28.4182 18.5 27.7005 18.5H12.2995C11.5818 18.5 11 19.14 11 19.9294V20.0706C11 20.86 11.5818 21.5 12.2995 21.5H27.7005C28.4182 21.5 29 20.86 29 20.0706V19.9294Z",p1994a170:"M22 6C22 4.89543 21.1046 4 20 4C18.8954 4 18 4.89543 18 6V18H6C4.89543 18 4 18.8954 4 20C4 21.1046 4.89543 22 6 22H18V34C18 35.1046 18.8954 36 20 36C21.1046 36 22 35.1046 22 34V22H34C35.1046 22 36 21.1046 36 20C36 18.8954 35.1046 18 34 18H22V6Z",p1f352f00:"M20 35.999C28.8364 35.999 36 28.8364 36 19.999C36 11.1626 28.8364 4 20 4C11.1636 4 4 11.1626 4 19.999C4 28.8364 11.1636 35.999 20 35.999ZM21.5 12.2995V18.5H27.7005C28.4182 18.5 29 19.14 29 19.9294V20.0706C29 20.86 28.4182 21.5 27.7005 21.5H21.5V27.7005C21.5 28.4182 20.86 29 20.0706 29H19.9294C19.14 29 18.5 28.4182 18.5 27.7005V21.5H12.2995C11.5818 21.5 11 20.86 11 20.0706V19.9294C11 19.14 11.5818 18.5 12.2995 18.5H18.5V12.2995C18.5 11.5818 19.14 11 19.9294 11H20.0706C20.86 11 21.5 11.5818 21.5 12.2995Z",p25aa3d70:"M29 9L31.1213 11.1213L10.9081 31.3345L8.7868 29.2132L29 9Z",p3256d072:"M19.9995 36C28.8365 36 36 28.8365 36 19.9995C36 11.1625 28.8365 4 19.9995 4C11.1625 4 4 11.1625 4 19.9995C4 28.8365 11.1625 36 19.9995 36ZM23.1057 11.4006C23.6314 11.9329 23.6314 12.7944 23.1057 13.3267L16.5148 20L23.1057 26.6733C23.6314 27.2056 23.6314 28.0671 23.1057 28.5994C22.5782 29.1335 21.7215 29.1335 21.1939 28.5994L14.0328 21.3487C13.2967 20.6035 13.2967 19.3965 14.0328 18.6513L21.1939 11.4006C21.7215 10.8665 22.5782 10.8665 23.1057 11.4006Z",p3e6de5f0:"M3 20C3 29.3888 10.6112 37 20 37C29.3888 37 37 29.3888 37 20C37 10.6112 29.3888 3 20 3C10.6112 3 3 10.6112 3 20ZM34 20C34 27.732 27.732 34 20 34C12.268 34 6 27.732 6 20C6 12.268 12.268 6 20 6C27.732 6 34 12.268 34 20Z",pf082e80:"M4 20C4 18.8954 4.89543 18 6 18H34C35.1046 18 36 18.8954 36 20C36 21.1046 35.1046 22 34 22H6C4.89543 22 4 21.1046 4 20Z"},ut={p10b6d300:"M10 21C10 19.8954 10.8954 19 12 19H28C29.1046 19 30 19.8954 30 21C30 22.1046 29.1046 23 28 23H12C10.8954 23 10 22.1046 10 21Z",p17b7de00:"M12.4393 12.4393C13.0251 11.8536 13.9749 11.8536 14.5607 12.4393L20.2175 18.0962L25.8744 12.4393C26.4602 11.8536 27.4099 11.8536 27.9957 12.4393C28.5815 13.0251 28.5815 13.9749 27.9957 14.5607L22.3388 20.2175L27.9957 25.8744C28.5815 26.4602 28.5815 27.4099 27.9957 27.9957C27.4099 28.5815 26.4602 28.5815 25.8744 27.9957L20.2175 22.3388L14.5607 27.9957C13.9749 28.5815 13.0251 28.5815 12.4393 27.9957C11.8536 27.4099 11.8536 26.4602 12.4393 25.8744L18.0962 20.2175L12.4393 14.5607C11.8536 13.9749 11.8536 13.0251 12.4393 12.4393Z",p184aa700:"M20 30.0296L11.2266 34.8729C10.4869 35.2813 9.60569 34.646 9.75721 33.8137L11.579 23.8066L4.30781 16.7859C3.70418 16.2031 4.03931 15.1796 4.87025 15.0682L14.7955 13.7375L19.0931 4.57685C19.454 3.80772 20.546 3.80772 20.9069 4.57685L25.2045 13.7375L35.1298 15.0682C35.9607 15.1796 36.2958 16.2031 35.6922 16.7859L28.421 23.8066L30.2428 33.8137C30.3943 34.646 29.5131 35.2813 28.7734 34.8729L20 30.0296Z",p184eb400:"M29.7246 14.7878C29.1444 14.2076 28.2037 14.2076 27.6234 14.7878L17.7467 24.6645L12.7266 19.6444C12.1464 19.0641 11.2057 19.0641 10.6254 19.6444C10.0452 20.2246 10.0452 21.1653 10.6254 21.7456L16.2669 27.387C17.0842 28.2043 18.4093 28.2043 19.2266 27.387L29.7246 16.889C30.3049 16.3088 30.3049 15.368 29.7246 14.7878Z",p1a0aca80:"M19.5319 33.2404L19.5354 33.2436L20.0068 33.6654L20.4659 33.2574L20.4693 33.2544C24.9068 29.2886 28.3439 26.2102 30.7082 23.3647C33.0403 20.558 34 18.356 34 16.1971C34 12.75 31.276 10 27.65 10C25.582 10 23.5641 10.9614 22.2681 12.4585L20 15.0784L17.7319 12.4585C16.4359 10.9614 14.418 10 12.35 10C8.72403 10 6 12.75 6 16.1971C6 18.3559 6.95967 20.5578 9.29121 23.3621C11.6555 26.2059 15.0934 29.2814 19.5319 33.2404ZM22.465 35.4943L21.3407 36.4934C20.5787 37.1706 19.4231 37.1686 18.6634 36.4889L17.535 35.4792L17.5204 35.4662C8.77357 27.6643 3 22.5145 3 16.1971C3 11.0467 7.114 7 12.35 7C14.3285 7 16.2538 7.60599 17.8664 8.64782C18.6647 9.16358 19.3864 9.78615 20 10.4949C20.6136 9.78615 21.3353 9.16358 22.1336 8.64782C23.7462 7.60599 25.6715 7 27.65 7C32.886 7 37 11.0467 37 16.1971C37 22.5046 31.2445 27.6482 22.5207 35.4445L22.465 35.4943Z",p1b403400:"M20 35.999C28.8364 35.999 36 28.8364 36 19.999C36 11.1626 28.8364 4 20 4C11.1636 4 4 11.1626 4 19.999C4 28.8364 11.1636 35.999 20 35.999ZM29.7246 14.7878C29.1444 14.2076 28.2037 14.2076 27.6234 14.7878L17.7467 24.6645L12.7266 19.6444C12.1464 19.0641 11.2057 19.0641 10.6254 19.6444C10.0452 20.2246 10.0452 21.1653 10.6254 21.7456L16.2669 27.387C17.0842 28.2043 18.4093 28.2043 19.2266 27.387L29.7246 16.889C30.3049 16.3088 30.3049 15.368 29.7246 14.7878Z",p1bf31d80:"M11.2259 34.8752L19.9999 30.0315L28.774 34.8752C28.9761 34.9867 29.2104 35.025 29.4374 34.9835C29.9819 34.8841 30.3427 34.3613 30.2434 33.8158L28.4215 23.8081L35.6932 16.787C35.8561 16.6298 35.961 16.4219 35.991 16.1974C36.0644 15.6478 35.6793 15.1427 35.1307 15.0692L25.2048 13.7383L20.9069 4.57712C20.8075 4.3654 20.6375 4.19508 20.4262 4.09557C19.9253 3.85975 19.3284 4.07535 19.093 4.57712L14.7951 13.7383L4.86916 15.0692C4.64497 15.0992 4.43754 15.2044 4.28057 15.3675C3.89651 15.7667 3.9082 16.4022 4.30668 16.787L11.5784 23.8081L9.75645 33.8158C9.71506 34.0432 9.75326 34.278 9.86463 34.4804C10.1317 34.966 10.7412 35.1427 11.2259 34.8752ZM26.5288 30.1971L19.9999 26.5929L13.4711 30.1971L14.825 22.7601L9.38012 17.5028L16.8187 16.5055L19.9999 9.72442L23.1812 16.5055L30.6198 17.5028L25.1749 22.7601L26.5288 30.1971Z",p1f7d3280:"M21.3407 36.4934C20.5787 37.1706 19.4231 37.1686 18.6634 36.4889L17.535 35.4792C8.78 27.6701 3 22.518 3 16.1971C3 11.0467 7.114 7 12.35 7C15.308 7 18.147 8.35448 20 10.4949C21.853 8.35448 24.692 7 27.65 7C32.886 7 37 11.0467 37 16.1971C37 22.518 31.22 27.6701 22.465 35.4943L21.3407 36.4934Z",p288a75f0:"M13.5862 26.4142C12.8052 25.6331 12.8052 24.3668 13.5862 23.5857L30.5862 6.58573C31.3673 5.80468 32.6336 5.80468 33.4146 6.58573C34.1957 7.36678 34.1957 8.63311 33.4146 9.41416L16.4146 26.4142C15.6336 27.1952 14.3673 27.1952 13.5862 26.4142Z",p29872300:"M20 36C11.1634 36 4 28.8366 4 20C4 11.1634 11.1634 4 20 4C28.8366 4 36 11.1634 36 20C36 28.8366 28.8366 36 20 36ZM20 33.1765C27.2772 33.1765 33.1765 27.2772 33.1765 20C33.1765 12.7228 27.2772 6.82353 20 6.82353C12.7228 6.82353 6.82353 12.7228 6.82353 20C6.82353 27.2772 12.7228 33.1765 20 33.1765Z",p2b953612:"M33.2928 17.2929C33.9228 17.9229 34.9999 17.4767 34.9999 16.5858V6.00003C34.9999 5.44774 34.5522 5.00003 33.9999 5.00003H23.4141C22.5232 5.00003 22.077 6.07717 22.707 6.70713L26.5155 10.5157L18.3877 18.6435C17.6066 19.4246 17.6066 20.6909 18.3877 21.472C19.1687 22.253 20.435 22.253 21.2161 21.472L29.344 13.3441L33.2928 17.2929Z",p2c7da900:"M20 36C28.8366 36 36 28.8366 36 20C36 11.1634 28.8366 4 20 4C11.1634 4 4 11.1634 4 20C4 28.8366 11.1634 36 20 36ZM12.4277 12.4277C12.998 11.8574 13.9226 11.8574 14.4929 12.4277L20 17.9348L25.5071 12.4277C26.0774 11.8574 27.002 11.8574 27.5723 12.4277C28.1426 12.998 28.1426 13.9226 27.5723 14.4929L22.0652 20L27.5723 25.5071C28.1426 26.0774 28.1426 27.002 27.5723 27.5723C27.002 28.1426 26.0774 28.1426 25.5071 27.5723L20 22.0652L14.4929 27.5723C13.9226 28.1426 12.998 28.1426 12.4277 27.5723C11.8574 27.002 11.8574 26.0774 12.4277 25.5071L17.9348 20L12.4277 14.4929C11.8574 13.9226 11.8574 12.998 12.4277 12.4277Z",p31de9980:"M16 30C16 28.8954 16.8954 28 18 28H22C23.1046 28 24 28.8954 24 30C24 31.1046 23.1046 32 22 32H18C16.8954 32 16 31.1046 16 30Z",p328ca900:"M6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14H34C35.1046 14 36 13.1046 36 12C36 10.8954 35.1046 10 34 10H6Z",p32fce00:"M18 31C10.8203 31 5 25.1797 5 18C5 10.8203 10.8203 5 18 5C25.1797 5 31 10.8203 31 18C31 20.8682 30.0711 23.5195 28.4978 25.6694L34.4142 31.5858C35.1953 32.3668 35.1953 33.6332 34.4142 34.4142C33.6332 35.1953 32.3668 35.1953 31.5858 34.4142L25.6694 28.4978C23.5195 30.0711 20.8682 31 18 31ZM27 18C27 22.9706 22.9706 27 18 27C13.0294 27 9 22.9706 9 18C9 13.0294 13.0294 9 18 9C22.9706 9 27 13.0294 27 18Z",p34cda700:"M20.8999 15H26V30C26 31.1046 26.8954 32 28 32C29.1046 32 30 31.1046 30 30V15H35.1C35.8849 15 36.2922 14.1058 35.7573 13.5571L28.6567 6.27326C28.3015 5.90889 27.6973 5.90892 27.3421 6.27331L20.2426 13.5571C19.7078 14.1059 20.1151 15 20.8999 15Z",p3e6de5f0:"M3 20C3 29.3888 10.6112 37 20 37C29.3888 37 37 29.3888 37 20C37 10.6112 29.3888 3 20 3C10.6112 3 3 10.6112 3 20ZM34 20C34 27.732 27.732 34 20 34C12.268 34 6 27.732 6 20C6 12.268 12.268 6 20 6C27.732 6 34 12.268 34 20Z",pd1903e0:"M19.1001 25H14V10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10V25H4.89994C4.11505 25 3.70775 25.8942 4.24269 26.4429L11.3433 33.7267C11.6985 34.0911 12.3027 34.0911 12.6579 33.7267L19.7574 26.4429C20.2922 25.8941 19.8849 25 19.1001 25Z",pead0f00:"M8 8H15.5C16.3284 8 17 7.32843 17 6.5C17 5.67157 16.3284 5 15.5 5H7C5.89543 5 5 5.89543 5 7V33C5 34.1046 5.89543 35 7 35H33C34.1046 35 35 34.1046 35 33V24.5C35 23.6716 34.3284 23 33.5 23C32.6716 23 32 23.6716 32 24.5V32H8V8Z"},J2={p12e0b880:"M23.3273 6.09668C23.767 5.96824 24.2344 5.96819 24.674 6.09668L41.4738 11.0068C42.6187 11.3416 43.3435 12.4665 43.176 13.6475L41.0598 28.5645C40.2109 34.5467 36.4173 39.7042 30.9592 42.2959L25.0285 45.1113C24.3771 45.4205 23.6213 45.4206 22.9699 45.1113L17.0412 42.2959C11.5834 39.7042 7.78954 34.5474 6.94063 28.5654L6.8625 28.0156C6.85886 27.9907 6.8553 27.9654 6.85176 27.9404L4.82441 13.6475C4.65684 12.4664 5.3817 11.3417 6.52656 11.0068L20.927 6.79785C20.9415 6.7936 20.9564 6.78912 20.9709 6.78516L23.3273 6.09668ZM24.0002 41.6152L29.4143 39.0439C33.7809 36.9706 36.8162 32.8445 37.4953 28.0586L39.466 14.1709L24.0002 9.65039V41.6152Z"},f8="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABACAYAAABY1SR7AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAiESURBVHgB1VrdaxxVFD/3zhirPnSrf0Cmjz5Itn6AFiUbC4r6YKsi9TMbsbU10KZUWlqxm61IKX4kFcSCQjY+KIKQxBdRwWwErRU0EURRHzq++aRbC5WmO/d4zv2YubvpR9Jum8lpuvfO3Zm753fP5z13BHSINm/bGwmEMQGiVwjZAMCfQMBcAHJOYjhTO1qN4QqSgA4Qg5Aopqkb6UmFyCanvrkWJ0DgVJCER64EqM4AeWHvmAQoIwIKQ2byttb26R6YQZS1D945OA4dIgkdIGIzciD8UbQ9JNIj/DUjAVGiz1r/4IETA4MH+qED1BEgRGQTqXTRNXagBaAFZe4RGKGEWnlHZba8rRLBZVBHgKASU5ACWKBOLQDZYiA1n7RbFF1w4rkdlWG4ROqIjTA9sXVPjbxVvwXgScGwngET9s/dZ680Jj1WR4EDtdGlOYQAOkQ///DN5C133M3rHhHTa4BNgWQgpIVgvRf9oYFCrdQQjaRkCrWbuht77uydmvtuprHY3++YRHx6csv+Ii1RUUjoJTAlKWQEZvVBWjTezxup+B6O7IieaQhI7n1vtDq3mN+8IkDa6Zntr/TKULvnssjUznoy6YIO6ksh0vhD1JCY9C0GzFUB4mjz0N7o2qSrQj/b70Ub8+cFUUKELDn2b9Q0QmyuO3oRm7mqQByVh8jVKpymtWd70kYDWRyyrZOM/osD1ey7EJhOxZElEXuk2tsH15LbHjZMaEfASoW2hRYrAtHdFNeMXWjOjnmtS6G57+szt97V+xMxej+xfp3HPxj7t3HGdKPb1m9o/Hjsq+PnmmtZVKudSNWKAQQTxG3kxrTKmS6KLNKQO4Nb33v95QXGvyyq1U6kanMJJJuI2wbYwOi8dKsP0J8j55ojF0CYGAyxu8nZB+dkIkt3EGxaHQhZen73q6X253MDhOn9N1+pUxAd5phioj67YdmS4JBzwzAIFxh+Lmyknbbsfm2aWC+ZDDqL+KivpU6fhcR7jx7eV3fP5EoiKUnYZfyVACsQE/YJBLh0TYmK/8iyut/z0Y/ffvXX7es3FIjlO92YDY6crZHaaYuJ1q3vm+J7+at8SoTouuaZqhSpYnGyYo2fknw0GfM1Qfiwuz+3QEZHq1yJmbRuWLgMmaO/dPgQ0m1yboEwkQiOpAklWTePCZml/NSuHXz5jW7u5hqI8UqCN1doii8ZpQ5ZQYmbXANhIoYnpdlJ8gWhka1lJoVF7uceCNGMM26/jiGsqhGCkmlyTl2Y1I2xSzStq7yYbYtLNHMZ2dtpcN/rmG1/OUkR3jVAeFreuBJUiwoWMraSSG3E5mKazt6QrA5hpZArgKXdrFXzas2KkAhxHLv6lzcGeozaYFW4MiRiva9AbPtCj+lSC6wIIGQPttoPXjE8LbdiMzl7cqUAKVAEB6Ne6NmHCfdi1fX/5N79DlVGClKEfxsAGRClEF2EH6nukLmXSBCGRbvuoLfxuqUtsLQpPaCuqOQeiJSyx6hVligyIDS1fu7oin3+gYDc6BIp9NyWM3zCVOc210D2HnqXjry5CMFeVrUeUbqxcAUAoepjyUpDcInRqFN6GCZQSTy8f/sMX+QbSBBUlGbfMK+UclmKASVhyt2bWyCVN8fKxHgkdbVO6MNgMnztfw0wXY2YdPfnWSIVYjw1cNGWbNH4P/+d7sq3RA6OjA0pkN3gQJAEyKztKRbq4gPFw6nR6kB6WJq77PfQyEeRkGFFH5pKYXSIJCOzjTpnvJxfVf3ncicRFSg+kitwX29uaWtOttL6PgvC+OF922P/uVwBOfTOh6OkTVH6EovukDSkCYa6kM1RfR6r7c/mBsjhdz8eJiZ3Zm+CcKnH5CZozhad4Ver+8px+/O5yH7fOPrJKK3zTsUprc6jTOQD18/+xweGnl17rjmWVSIjYxMFSGCCAJSAD3Wsu9U2AVxE1OmtcGXT+eZ83/nmWjavRSBKtOazxGSJz0C86iFmb6+YFyPs9VB110B8vvlaVOuL738vJokorIIw7rtrbQxXgMZICv9KOUzLvdOpDNjXuDgF8a+tmiFJ5sj+FzfvutC8Gshnx34vh0K+RSWjNSxWo6NYxyZWH7jn5jp0gBjA6bBriLoMoICalCCzgDY7cDhMXoJqfM/2zQMXm198fvy3jSTMCSqC6TM686zpJYliVxErVKNN1ZzZ1LduUW/qZMxPF9QNaiMtTn+ikhJzaBfKrLSVgP1vDN38thur7dn2+EVBaCBfHv9jlnSwx6yAdnf0A4ngLgFIJ6c+pwUxfcxRfy5B+FMkKm5CE6CpP/mYMlIoVhPTRUygqJBay2gq6YUA0jGwsjBjyfhLWxcHgom9Vg9oFbPn8Wi9Hqi0WuxcIl10E5iIxh5mpPSPTZPcTYiSmdMrqbSboezIbEZN5ipcC+41GfdaY/Y96JhNK0DfVAlEFZZA5LVkwzc6XhnrAZzVUZqgWXK2AxlDmWTBe8YyCK5gIEzBIK2k6zRKpuccrqrOj59MQD2ye8ujSwKhgdB8R3wQ3CHVEegHI4XCW0GPe5FZphGq272hu9W+sQRmK5G1rYB1r45ncN1Lzz82CZdAehaykxECMWQcCSuFSQ18vWZg2TU4j6OdY+Y6rX21Gi6qxKndQvug34ppS1t+8dkHZ+AyKF3ez479GgkFFeKtDM6PGyO3LlL56me3naTRSXI+w0XfyP0YYfsxzVIbfOqhJavRBYGkgKZnIwi6GFCJWIj8VWRAAOmqW6a12qX3gMafAdWL4J7Xnk/VJcrhrU/ed1kSuCgQnz79+pdelcyXibkiMaYPHe0Ko+17AM+hNnwvIDuTOgfY4NSp8YGBTYt+BbZjQHwam5gt3LQae+abimIDVcdBkbTUakxsKgF6+RskjgZdxWQXcXBts/70Qxv+hKtA/wNkhSGysIEHQAAAAABJRU5ErkJggg==",Qc={p283f5760:"M20 24.4818L32.5858 11.5996C33.3668 10.8001 34.6332 10.8001 35.4142 11.5996C36.1953 12.399 36.1953 13.6952 35.4142 14.4946L22.1213 28.1006C20.9497 29.2998 19.0503 29.2998 17.8787 28.1006L4.58579 14.4946C3.80474 13.6952 3.80474 12.399 4.58579 11.5996C5.36684 10.8001 6.63316 10.8001 7.41421 11.5996L20 24.4818Z",p28bea880:"M30.554 6.58492C31.3327 5.80503 32.5952 5.80503 33.3739 6.58492C34.1527 7.36481 34.1527 8.62926 33.3739 9.40914L22.82 19.979L33.416 30.5909C34.1947 31.3707 34.1947 32.6352 33.416 33.4151C32.6372 34.195 31.3747 34.195 30.596 33.4151L20 22.8032L9.40403 33.4151C8.62531 34.195 7.36276 34.195 6.58404 33.4151C5.80532 32.6352 5.80532 31.3707 6.58404 30.5909L17.18 19.979L6.62606 9.40914C5.84734 8.62926 5.84734 7.36481 6.62606 6.58492C7.40478 5.80503 8.66733 5.80503 9.44605 6.58492L20 17.1547L30.554 6.58492Z",p28d9a880:"M20 12.5182L32.5858 25.4004C33.3668 26.1999 34.6332 26.1999 35.4142 25.4004C36.1953 24.601 36.1953 23.3048 35.4142 22.5054L22.1213 8.89938C20.9497 7.70021 19.0503 7.70021 17.8787 8.89938L4.58579 22.5054C3.80474 23.3048 3.80474 24.601 4.58579 25.4004C5.36684 26.1999 6.63316 26.1999 7.41421 25.4004L20 12.5182Z",pacd0700:"M35.4142 9.59703C34.6332 8.80099 33.3668 8.80099 32.5858 9.59703L16 26.5011L7.41421 17.7505C6.63316 16.9545 5.36683 16.9545 4.58579 17.7505C3.80474 18.5466 3.80474 19.8372 4.58579 20.6332L13.8787 30.1045C15.0503 31.2985 16.9497 31.2985 18.1213 30.1045L35.4142 12.4797C36.1953 11.6837 36.1953 10.3931 35.4142 9.59703Z"},ve={p10fccd60:"M5.00002 17C3.89545 17 3.00002 17.8954 3.00002 19C3.00002 20.1046 3.89545 21 5.00002 21H11C12.1046 21 13 20.1046 13 19C13 17.8954 12.1046 17 11 17H5.00002Z",p1776ec80:"M16 22C16 17.0294 20.0295 13 25 13C29.9706 13 34 17.0294 34 22C34 23.7611 33.4942 25.4041 32.6199 26.7916L36.9143 31.0859C37.6953 31.867 37.6953 33.1333 36.9143 33.9144C36.1332 34.6954 34.8669 34.6954 34.0858 33.9144L29.7914 29.62C28.404 30.4942 26.7611 31 25 31C20.0295 31 16 26.9706 16 22ZM25 17C22.2386 17 20 19.2386 20 22C20 24.7614 22.2386 27 25 27C27.7614 27 30 24.7614 30 22C30 19.2386 27.7614 17 25 17Z",p179f4400:"M10.1599 11.5001L10.1587 11.5001C10.1466 11.5 10.059 11.4993 9.97212 11.5064C9.86268 11.5154 9.63096 11.5433 9.37356 11.6745C9.0725 11.8279 8.82773 12.0726 8.67433 12.3737C8.54318 12.6311 8.51523 12.8628 8.50629 12.9722C8.49917 13.0594 8.49985 13.1471 8.49994 13.1588L8.49994 13.1601L8.49994 29.2579C8.49992 30.0486 8.49989 30.7307 8.5458 31.2926C8.59425 31.8856 8.70122 32.4755 8.99041 33.043C9.42184 33.8898 10.1103 34.5782 10.957 35.0096C11.5246 35.2988 12.1144 35.4058 12.7074 35.4542C13.2693 35.5001 13.9514 35.5001 14.7421 35.5001H25.2577C26.0484 35.5001 26.7306 35.5001 27.2925 35.4542C27.8855 35.4058 28.4753 35.2988 29.0429 35.0096C29.8896 34.5782 30.578 33.8898 31.0095 33.043C31.2987 32.4755 31.4056 31.8856 31.4541 31.2926C31.5 30.7308 31.5 30.0486 31.4999 29.2579V13.1601L31.5 13.1588C31.5 13.1471 31.5007 13.0593 31.4936 12.9722C31.4847 12.8628 31.4567 12.6311 31.3256 12.3737C31.1722 12.0726 30.9274 11.8279 30.6263 11.6745C30.3689 11.5433 30.1372 11.5154 30.0278 11.5064C29.9408 11.4993 29.8531 11.5 29.8412 11.5001L29.8399 11.5001H10.1599ZM11.4999 29.2001V14.5001H28.4999V29.2001C28.4999 30.0649 28.4988 30.6233 28.4641 31.0483C28.4308 31.4558 28.3742 31.6069 28.3365 31.681C28.1926 31.9633 27.9632 32.1928 27.6809 32.3366C27.6068 32.3744 27.4557 32.4309 27.0482 32.4642C26.6232 32.4989 26.0648 32.5001 25.1999 32.5001H14.7999C13.9351 32.5001 13.3767 32.4989 12.9517 32.4642C12.5442 32.4309 12.3931 32.3744 12.319 32.3366C12.0367 32.1928 11.8072 31.9633 11.6634 31.681C11.6256 31.6069 11.5691 31.4558 11.5358 31.0483C11.5011 30.6233 11.4999 30.0649 11.4999 29.2001Z",p17b85200:"M16.5 13.5C16.5 12.6716 17.1716 12 18 12C18.8284 12 19.5 12.6716 19.5 13.5V16.5H22.5C23.3284 16.5 24 17.1716 24 18C24 18.8284 23.3284 19.5 22.5 19.5H19.5V22.5C19.5 23.3284 18.8284 24 18 24C17.1716 24 16.5 23.3284 16.5 22.5V19.5H13.5C12.6716 19.5 12 18.8284 12 18C12 17.1716 12.6716 16.5 13.5 16.5H16.5V13.5Z",p183a7180:"M5 20C5 18.8954 5.89543 18 7 18H33C34.1046 18 35 18.8954 35 20C35 21.1046 34.1046 22 33 22H7C5.89543 22 5 21.1046 5 20Z",p1b167f00:"M8 16C8 14.8954 8.89543 14 10 14H17.6522C26.6343 14 34 21.1175 34 30V32C34 33.1046 33.1046 34 32 34C30.8954 34 30 33.1046 30 32V30C30 23.4186 24.5182 18 17.6522 18H10C8.89543 18 8 17.1046 8 16Z",p1f7b34c0:"M28.5785 29.7572C30.11 28.4107 31.2915 26.7332 32.045 24.8693C32.2536 24.3534 32.4294 23.8231 32.5708 23.2817C32.595 23.189 32.6264 23.0993 32.6643 23.0134C32.955 22.3542 33.6273 21.9147 34.355 22.017C35.1776 22.1325 35.7578 22.8956 35.5655 23.7037C35.5386 23.8166 35.5105 23.9293 35.4812 24.0415C35.3156 24.6758 35.1116 25.2977 34.871 25.9038C33.9449 28.2364 32.4761 30.3356 30.5646 32.0162C27.6905 34.5431 24.0058 35.9562 20.1791 35.999C16.3524 36.0418 12.637 34.7116 9.70705 32.2497C6.7771 29.7877 4.82663 26.3572 4.20946 22.5803C3.5923 18.8034 4.34933 14.9304 6.34322 11.6639C8.33711 8.39733 11.4358 5.95367 15.0771 4.77618C18.7184 3.59868 22.6612 3.76535 26.1902 5.24595C27.8994 5.96306 29.4567 6.96538 30.8027 8.19734L34.2929 4.70709C34.9229 4.07712 36 4.52329 36 5.4142V16C36 16.5523 35.5523 17 35 17H24.4142C23.5233 17 23.0772 15.9228 23.7071 15.2929L28.6731 10.3269C27.603 9.36735 26.3727 8.58457 25.0264 8.01971C22.1609 6.81747 18.9594 6.68213 16.0026 7.63826C13.0459 8.59438 10.5297 10.5786 8.9107 13.2311C7.29166 15.8835 6.67695 19.0283 7.17809 22.0952C7.67923 25.162 9.26301 27.9476 11.6421 29.9467C14.0213 31.9458 17.0381 33.026 20.1454 32.9912C23.2527 32.9564 26.2447 31.809 28.5785 29.7572Z",p225ac300:"M7.73058 9.73058L4.70711 6.70711C4.07714 6.07714 3 6.52331 3 7.41421V16C3 16.5523 3.44771 17 4 17H12.5858C13.4767 17 13.9229 15.9229 13.2929 15.2929L9.87954 11.8795C10.7686 10.7715 11.839 9.81031 13.0532 9.04066C15.3262 7.59985 17.991 6.90145 20.6785 7.04218C23.3661 7.18292 25.9434 8.15582 28.0535 9.82616C29.3301 10.8367 30.3975 12.0723 31.2085 13.4628C31.4859 13.9385 31.7334 14.4322 31.9489 14.9413C31.9866 15.0305 32.0312 15.1156 32.0818 15.1961C32.467 15.8089 33.199 16.1483 33.9077 15.9415C34.7094 15.7075 35.1764 14.8644 34.8678 14.0883C34.8244 13.9791 34.7798 13.8704 34.734 13.7622C34.4809 13.1644 34.1922 12.5837 33.8698 12.0232C32.8639 10.2742 31.5305 8.72121 29.9306 7.45478C27.3287 5.39511 24.1507 4.19544 20.8367 4.0219C17.5227 3.84836 14.2368 4.70954 11.434 6.48619C10.0311 7.37542 8.78404 8.47195 7.73058 9.73058Z",p240e4300:"M31 24C32.1046 24 33 24.8954 33 26C33 27.1046 32.1046 28 31 28H9C7.89543 28 7 27.1046 7 26C7 24.8954 7.89543 24 9 24H31ZM31 12C32.1046 12 33 12.8954 33 14C33 15.1046 32.1046 16 31 16H9C7.89543 16 7 15.1046 7 14C7 12.8954 7.89543 12 9 12H31Z",p266a4b40:"M15.5 20C15.5 19.1716 16.1716 18.5 17 18.5C17.8284 18.5 18.5 19.1716 18.5 20V27C18.5 27.8284 17.8284 28.5 17 28.5C16.1716 28.5 15.5 27.8284 15.5 27V20Z",p2706c700:"M15 19.1001V14H30C31.1046 14 32 13.1046 32 12C32 10.8954 31.1046 10 30 10H15V4.89994C15 4.11506 14.1058 3.70775 13.5571 4.24269L6.27326 11.3433C5.90889 11.6985 5.90892 12.3027 6.27332 12.6579L13.5571 19.7574C14.1059 20.2922 15 19.8849 15 19.1001Z",p2945cf00:"M24 5V6H32.5C33.3284 6 34 6.67157 34 7.5C34 8.32843 33.3284 9 32.5 9H7.5C6.67157 9 6 8.32843 6 7.5C6 6.67157 6.67157 6 7.5 6H16V5C16 3.89543 16.8954 3 18 3H22C23.1046 3 24 3.89543 24 5Z",p2b0c900:"M7 9C5.89543 9 5 9.89543 5 11C5 12.1046 5.89543 13 7 13H33C34.1046 13 35 12.1046 35 11C35 9.89543 34.1046 9 33 9H7Z",p2e23da80:"M5 5C3.89543 5 3 5.89543 3 7C3 8.10457 3.89543 9 5 9H19C20.1046 9 21 8.10457 21 7C21 5.89543 20.1046 5 19 5H5Z",p2f4e8800:"M32.2694 17.5542C32.4388 17.9219 32.5235 18.364 32.5235 18.8808V19.8794H30.5956C29.3602 19.8794 28.2743 19.9986 27.3377 20.2371C26.4012 20.4657 25.6191 20.8085 24.9915 21.2656C24.3738 21.7127 23.9055 22.2642 23.5867 22.9201C23.2679 23.5759 23.1085 24.3261 23.1085 25.1707C23.1085 26.1048 23.3476 26.9395 23.8258 27.6748C24.314 28.4002 24.9715 28.9715 25.7985 29.3889C26.6354 29.7963 27.5669 30 28.5931 30C29.4001 30 30.0975 29.8808 30.6853 29.6423C31.2731 29.3939 31.7763 29.0808 32.1947 28.7033C32.3753 28.536 32.542 28.3641 32.6947 28.1876C32.7562 28.528 32.8318 28.8376 32.9213 29.1164C33.0389 29.4827 33.3956 29.7019 33.7797 29.7019H37.2955C37.4084 29.7019 37.5 29.6102 37.5 29.4971C37.5 29.4651 37.4925 29.4337 37.4785 29.405C37.2798 28.9974 37.1276 28.525 37.0218 27.9878C36.9122 27.4214 36.8574 26.696 36.8574 25.8117V18.9106C36.8574 17.6585 36.5734 16.6152 36.0056 15.7805C35.4476 14.9458 34.6805 14.3198 33.7041 13.9024C32.7277 13.4851 31.6119 13.2764 30.3565 13.2764C29.3104 13.2764 28.3639 13.4106 27.5171 13.6789C26.6802 13.9472 25.9579 14.3198 25.3501 14.7967C24.7424 15.2638 24.2791 15.8053 23.9603 16.4214C23.799 16.7331 23.6785 17.0537 23.5988 17.3832C23.469 17.92 23.929 18.374 24.4804 18.374H26.7878C27.3391 18.374 27.7485 17.8955 28.0136 17.4112C28.0314 17.3788 28.0502 17.347 28.07 17.3157C28.2593 17.0077 28.5283 16.7742 28.877 16.6152C29.2257 16.4463 29.6392 16.3618 30.1174 16.3618C30.6754 16.3618 31.1287 16.4661 31.4774 16.6748C31.836 16.8835 32.1001 17.1766 32.2694 17.5542ZM30.7152 22.3089C30.1473 22.3089 29.6541 22.3735 29.2357 22.5027C28.8173 22.6319 28.4735 22.8157 28.2045 23.0542C27.9355 23.2827 27.7363 23.551 27.6068 23.8591C27.4872 24.1671 27.4274 24.505 27.4274 24.8726C27.4274 25.2403 27.5121 25.5732 27.6815 25.8713C27.8508 26.1594 28.0949 26.388 28.4138 26.5569C28.7326 26.7159 29.1062 26.7954 29.5346 26.7954C30.1822 26.7954 30.7451 26.6662 31.2233 26.4079C31.7015 26.1495 32.0702 25.8315 32.3292 25.4539C32.5235 25.1707 32.5235 24.6608 32.5235 24.6608V22.3089H30.7152Z",p2fdffe00:"M6 34.0606C6 32.9895 6.86829 32.1212 7.93938 32.1212H32.0606C33.1317 32.1212 34 32.9895 34 34.0606C34 35.1317 33.1317 36 32.0606 36H7.93938C6.86829 36 6 35.1317 6 34.0606Z",p305db300:"M18 16.6059H10.0731C9.17548 16.6059 8.73243 17.697 9.376 18.3228L19.3017 27.9746C19.6898 28.352 20.3078 28.352 20.6959 27.9746L30.6232 18.3228C31.2668 17.6971 30.8238 16.6059 29.9261 16.6059H22V6C22 4.89543 21.1046 4 20 4C18.8954 4 18 4.89543 18 6V16.6059Z",p3084a600:"M3.00002 13C3.00002 11.8954 3.89545 11 5.00002 11H15C16.1046 11 17 11.8954 17 13C17 14.1046 16.1046 15 15 15H5.00002C3.89545 15 3.00002 14.1046 3.00002 13Z",p3228d072:"M20 23C21.6569 23 23 21.6569 23 20C23 18.3431 21.6569 17 20 17C18.3431 17 17 18.3431 17 20C17 21.6569 18.3431 23 20 23Z",p32fce00:"M18 31C10.8203 31 5 25.1797 5 18C5 10.8203 10.8203 5 18 5C25.1797 5 31 10.8203 31 18C31 20.8682 30.0711 23.5195 28.4978 25.6694L34.4142 31.5858C35.1953 32.3668 35.1953 33.6332 34.4142 34.4142C33.6332 35.1953 32.3668 35.1953 31.5858 34.4142L25.6694 28.4978C23.5195 30.0711 20.8682 31 18 31ZM27 18C27 22.9706 22.9706 27 18 27C13.0294 27 9 22.9706 9 18C9 13.0294 13.0294 9 18 9C22.9706 9 27 13.0294 27 18Z",p34ac9ec0:"M9 13.1C9 12.4925 9.49249 12 10.1 12H29.9C30.5075 12 31 12.4925 31 13.1V32.8C31 34.015 30.015 35 28.8 35H11.2C9.98497 35 9 34.015 9 32.8V13.1ZM15 19.5C15 18.6716 15.6716 18 16.5 18C17.3284 18 18 18.6716 18 19.5V27.5C18 28.3284 17.3284 29 16.5 29C15.6716 29 15 28.3284 15 27.5V19.5ZM23.5 18C22.6716 18 22 18.6716 22 19.5V27.5C22 28.3284 22.6716 29 23.5 29C24.3284 29 25 28.3284 25 27.5V19.5C25 18.6716 24.3284 18 23.5 18Z",p35a2e1f0:"M17.0001 13V18.1001C17.0001 18.8849 16.1059 19.2922 15.5572 18.7574L8.2734 11.6579C7.909 11.3027 7.90898 10.6985 8.27335 10.3433L15.5571 3.24269C16.1059 2.70775 17.0001 3.11506 17.0001 3.89995V9H21.2222C26.7581 9 31.6657 11.6967 34.6253 15.8369C35.2677 16.7355 35.06 17.9847 34.1614 18.627C33.2628 19.2694 32.0136 19.0617 31.3713 18.1631C29.1454 15.0493 25.4376 13 21.2222 13H17.0001Z",p39200380:"M5 29C5 27.8954 5.89543 27 7 27H33C34.1046 27 35 27.8954 35 29C35 30.1046 34.1046 31 33 31H7C5.89543 31 5 30.1046 5 29Z",p3adc2c00:"M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z",p3b110300:"M5.60624 29.7019C6.03721 29.7019 6.41952 29.4249 6.5544 29.0149L7.83364 25.126H15.6541L16.9368 29.0156C17.0719 29.4252 17.454 29.7019 17.8847 29.7019H20.5045C21.2016 29.7019 21.6841 29.0044 21.4392 28.3506L14.0586 8.64867C13.9124 8.25848 13.54 8 13.1239 8H10.3391C9.92235 8 9.54947 8.25929 9.40378 8.65037L2.0639 28.3523C1.82044 29.0058 2.30286 29.7019 2.9992 29.7019H5.60624ZM11.7389 13.2541L8.98586 21.6233H14.499L11.7389 13.2541Z",p3b255100:"M23.0001 31V36.1001C23.0001 36.8849 23.8942 37.2922 24.443 36.7574L31.7268 29.6579C32.0912 29.3027 32.0912 28.6985 31.7268 28.3433L24.443 21.2427C23.8943 20.7078 23.0001 21.1151 23.0001 21.8999V27H18.7761C14.5607 27 10.8529 24.9506 8.62706 21.8369C7.98471 20.9383 6.73553 20.7306 5.83695 21.373C4.93836 22.0153 4.73065 23.2645 5.373 24.1631C8.33263 28.3033 13.2402 31 18.7761 31H23.0001Z",p3c1eec00:"M35.2929 33.2929C35.9229 33.9229 37 33.4767 37 32.5858V24C37 23.4477 36.5523 23 36 23H27.4142C26.5233 23 26.0771 24.0771 26.7071 24.7071L30.1328 28.1328C29.4775 28.9492 28.7223 29.688 27.8805 30.3302C25.7379 31.9646 23.1402 32.8925 20.447 32.9852C17.7538 33.0779 15.0984 32.3309 12.8485 30.8476C11.4894 29.9516 10.3188 28.8136 9.38981 27.4992C9.06818 27.0442 8.7755 26.568 8.51397 26.0734C8.46921 25.9887 8.41813 25.9086 8.36158 25.8337C7.9278 25.2587 7.17283 24.985 6.48807 25.2511C5.71407 25.5519 5.32417 26.4273 5.69627 27.1696C5.74827 27.2734 5.80138 27.3765 5.85556 27.479C6.16196 28.0585 6.50307 28.6174 6.87657 29.1529C8.02965 30.8062 9.49142 32.2362 11.1934 33.3583C13.964 35.1848 17.2339 36.1047 20.5505 35.9905C23.867 35.8764 27.066 34.7338 29.7044 32.721C30.6529 31.9975 31.5121 31.1743 32.2694 30.2694L35.2929 33.2929Z",p3fc31700:"M14.3543 8.01244C14.3543 7.12948 13.3256 6.67124 12.6943 7.27297L4.31444 15.2599C3.89521 15.6595 3.89518 16.3392 4.31438 16.7388L12.6942 24.727C13.3255 25.3288 14.3543 24.8706 14.3543 23.9876V8.01244Z",p51c7600:"M23 9C23 10.6569 21.6569 12 20 12C18.3431 12 17 10.6569 17 9C17 7.34315 18.3431 6 20 6C21.6569 6 23 7.34315 23 9Z",p71ad600:"M30.0327 16.3883H21.999V26.7724C21.999 27.8769 21.1036 28.7724 19.999 28.7724C18.8945 28.7724 17.999 27.8769 17.999 26.7724V16.3883H9.96607C9.0835 16.3883 8.63365 15.3284 9.2468 14.6936L19.2809 4.30526C19.6741 3.89822 20.3264 3.89825 20.7195 4.30532L30.752 14.6937C31.3651 15.3285 30.9153 16.3883 30.0327 16.3883Z",p8ea7e00:"M20 34C21.6569 34 23 32.6569 23 31C23 29.3431 21.6569 28 20 28C18.3431 28 17 29.3431 17 31C17 32.6569 18.3431 34 20 34Z",p999a4f0:"M8 31.8696C6.89543 31.8696 6 32.7651 6 33.8696V33.9999C6 35.1045 6.89543 35.9999 8 35.9999H32C33.1046 35.9999 34 35.1045 34 33.9999V33.8696C34 32.7651 33.1046 31.8696 32 31.8696H8Z",pd473480:"M25 20.8999V26H10C8.89543 26 8 26.8954 8 28C8 29.1046 8.89543 30 10 30H25V35.1C25 35.8849 25.8942 36.2922 26.4429 35.7573L33.7267 28.6567C34.0911 28.3015 34.0911 27.6973 33.7267 27.3421L26.4429 20.2426C25.8941 19.7078 25 20.1151 25 20.8999Z",pe4b180:"M21.5 20C21.5 19.1716 22.1716 18.5 23 18.5C23.8284 18.5 24.5 19.1716 24.5 20V27C24.5 27.8284 23.8284 28.5 23 28.5C22.1716 28.5 21.5 27.8284 21.5 27V20Z",pe6f8200:"M14.6329 3.47154C17.9414 1.50823 22.0588 1.5082 25.3673 3.47154L28.4776 5.31822L31.6319 7.08873C34.9867 8.97177 37.0454 12.5363 36.9991 16.3827L36.9561 19.9999L36.9991 23.6161C37.0455 27.4625 34.9868 31.027 31.6319 32.91L28.4776 34.6805L25.3673 36.5272C22.0588 38.4906 17.9414 38.4906 14.6329 36.5272L11.5225 34.6805L8.36726 32.91C5.01266 31.0269 2.95469 27.4623 3.00105 23.6161L3.04402 19.9999L3.00105 16.3827C2.95474 12.5364 5.01263 8.97181 8.36726 7.08873L11.5225 5.31822L14.6329 3.47154ZM20.0001 10.9999C18.8956 10.9999 18.0001 11.8953 18.0001 12.9999V17.9999H13.0001C11.8956 17.9999 11.0001 18.8953 11.0001 19.9999C11.0001 21.1043 11.8956 21.9998 13.0001 21.9999H18.0001V26.9999C18.0001 28.1043 18.8956 28.9998 20.0001 28.9999C21.1045 28.9997 22 28.1043 22.0001 26.9999V21.9999H27.0001C28.1045 21.9997 29 21.1043 29.0001 19.9999C29.0001 18.8954 28.1045 18 27.0001 17.9999H22.0001V12.9999C22.0001 11.8954 21.1045 11 20.0001 10.9999Z",p26293800:"M29.4331 34.8554L26.7394 37.5491C26.6788 37.6097 26.6174 37.6687 26.555 37.7263L26.3974 37.8911C22.62 41.6686 14.0459 39.2188 7.24655 32.4194C0.447231 25.62 -2.00252 17.0458 1.77488 13.2684L1.94104 13.1093L2.11686 12.9264L4.81059 10.2326C5.56607 9.47714 6.79095 9.47714 7.54643 10.2326C7.65827 10.3445 7.75598 10.4696 7.83735 10.6052L11.7692 17.1583C12.3005 18.0438 12.0426 19.1905 11.1834 19.7633L6.26964 23.0389C6.74578 25.0712 8.10824 27.4185 10.1778 29.4881C12.2474 31.5577 14.5947 32.9202 16.6269 33.3963L19.9025 28.4825C20.4753 27.6233 21.622 27.3654 22.5074 27.8967L29.0605 31.8286C29.9766 32.3783 30.2737 33.5666 29.724 34.4828C29.6426 34.6184 29.5449 34.7435 29.4331 34.8554Z",p3d4c6bc0:"M28.4189 11.7108C25.6243 8.82699 21.4924 7.12257 17.4519 7.12257C16.6234 7.12257 15.9519 6.451 15.9519 5.62257C15.9519 4.79415 16.6234 4.12257 17.4519 4.12257C22.2794 4.12257 27.1964 6.13842 30.5732 9.62302C33.9707 13.129 35.5936 17.8944 35.443 22.688C35.417 23.516 34.7246 24.1661 33.8966 24.1401C33.0686 24.1141 32.4184 23.4218 32.4445 22.5937C32.5724 18.5237 31.1928 14.5732 28.4189 11.7108Z",p3f2bf300:"M23.4623 16.4028C22.6233 15.5369 21.6188 14.8485 20.5086 14.3784C19.3983 13.9083 18.2049 13.666 16.9992 13.666C16.1708 13.666 15.4992 12.9944 15.4992 12.166C15.4992 11.3376 16.1708 10.666 16.9992 10.666C18.6068 10.666 20.198 10.989 21.6783 11.6159C23.1587 12.2427 24.498 13.1606 25.6167 14.315C26.7355 15.4695 27.6108 16.837 28.1909 18.3363C28.7709 19.8356 29.0438 21.4361 28.9933 23.0429C28.9673 23.8709 28.2749 24.5211 27.4469 24.4951C26.6189 24.4691 25.9687 23.7767 25.9948 22.9487C26.0326 21.7436 25.828 20.5432 25.393 19.4187C24.9579 18.2942 24.3014 17.2686 23.4623 16.4028Z"},Vo={phoneAnswer:"M17.2071 15.0145L15.8153 16.4063C15.7841 16.4376 15.7523 16.4681 15.7201 16.4978L15.6386 16.583C13.687 18.5346 9.25703 17.2689 5.74405 13.7559C2.23107 10.2429 0.965366 5.81289 2.91702 3.86122L3.00287 3.77904L3.09371 3.68453L4.48547 2.29275C4.8758 1.90242 5.50866 1.90242 5.89899 2.29275C5.95677 2.35054 6.00725 2.41519 6.0493 2.48527L8.08074 5.87104C8.35524 6.32854 8.22202 6.92098 7.7781 7.21693L5.23931 8.90934C5.48532 9.95936 6.18926 11.1721 7.25853 12.2414C8.3278 13.3107 9.54057 14.0146 10.5906 14.2607L12.283 11.7218C12.5789 11.2779 13.1714 11.1447 13.6288 11.4192L17.0146 13.4507C17.4879 13.7347 17.6414 14.3486 17.3574 14.822C17.3154 14.8921 17.2649 14.9567 17.2071 15.0145Z",lib1:"M11.25 10.75C10.9739 10.75 10.75 10.9739 10.75 11.25V16.75C10.75 17.0261 10.9739 17.25 11.25 17.25H16.75C17.0261 17.25 17.25 17.0261 17.25 16.75V11.25C17.25 10.9739 17.0261 10.75 16.75 10.75H11.25Z",lib2:"M2.75 11.25C2.75 10.9739 2.97386 10.75 3.25 10.75H8.75C9.02614 10.75 9.25 10.9739 9.25 11.25V16.75C9.25 17.0261 9.02614 17.25 8.75 17.25H3.25C2.97386 17.25 2.75 17.0261 2.75 16.75V11.25Z",lib3:"M2.75 3.25C2.75 2.97386 2.97386 2.75 3.25 2.75H8.75C9.02614 2.75 9.25 2.97386 9.25 3.25V8.75C9.25 9.02614 9.02614 9.25 8.75 9.25H3.25C2.97386 9.25 2.75 9.02614 2.75 8.75V3.25Z",lib4:"M11.25 2.75H16.75C17.0261 2.75 17.25 2.97386 17.25 3.25V8.75C17.25 9.02614 17.0261 9.25 16.75 9.25H11.25C10.9739 9.25 10.75 9.02614 10.75 8.75V3.25C10.75 2.97386 10.9739 2.75 11.25 2.75ZM12.25 7.75V4.25H15.75V7.75H12.25Z"},te=v.div`
  width: ${e=>e.$size}px;
  height: ${e=>e.$size}px;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,h8=v.div`
  width: ${e=>e.$width}px;
  height: ${e=>e.$height}px;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,il=({size:e=32,color:i="var(--Text-Secondary, #D5E2F2)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"none",style:{display:"block"},children:t.jsx("path",{clipRule:"evenodd",d:$r.p28dd5f00,fill:i,fillRule:"evenodd"})})}),Sc=({size:e=32,color:i="var(--Text-Secondary, #D5E2F2)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsxs("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"none",style:{display:"block"},children:[t.jsx("path",{d:$r.p1699a100,fill:i}),t.jsx("path",{clipRule:"evenodd",d:$r.p10f70780,fill:i,fillRule:"evenodd"})]})}),kc=({size:e=32,color:i="var(--Text-Secondary, #D5E2F2)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsxs("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"none",style:{display:"block"},children:[t.jsx("path",{clipRule:"evenodd",d:$r.p1110b800,fill:i,fillRule:"evenodd"}),t.jsx("path",{d:$r.p18d7b780,fill:i}),t.jsx("path",{d:$r.p25c8a0b0,fill:i})]})}),Tc=({size:e=32,color:i="var(--Text-Secondary, #D5E2F2)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"none",style:{display:"block"},children:t.jsx("path",{clipRule:"evenodd",d:$r.p300dea40,fill:i,fillRule:"evenodd"})})}),fi=({size:e=24,color:i="var(--Text-Assist, #B6C3D6)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:{display:"block"},children:t.jsx("path",{d:z3.p2f5ec580,fill:i})})}),x8=({size:e=24,color:i="var(--Text-Primary, #ffffff)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:{display:"block"},children:t.jsx("path",{d:z3.p65d1800,fill:i})})}),m8=({size:e=40,color:i="var(--Text-Primary, #ffffff)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:t.jsxs("g",{children:[t.jsx("path",{d:ve.p305db300,fill:i}),t.jsx("path",{d:ve.p2fdffe00,fill:i})]})})}),M3=({size:e=40,color:i="var(--Text-Primary, #ffffff)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:t.jsxs("g",{children:[t.jsx("path",{d:ve.p2945cf00,fill:i}),t.jsx("path",{clipRule:"evenodd",d:ve.p34ac9ec0,fill:i,fillRule:"evenodd"})]})})}),g8=({size:e=40,color:i="var(--Text-Primary, #ffffff)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:t.jsxs("g",{children:[t.jsx("path",{d:ve.p19152e00,fill:i}),t.jsx("path",{d:ve.p266a4b40,fill:i}),t.jsx("path",{d:ve.pe4b180,fill:i}),t.jsx("path",{clipRule:"evenodd",d:ve.p179f4400,fill:i,fillRule:"evenodd"})]})})}),V3=({width:e=87.324,height:i=20,color:s="var(--Text-Primary, #ffffff)",className:l})=>t.jsx(h8,{$width:e,$height:i,className:l,children:t.jsx("svg",{width:e,height:i,viewBox:"0 0 88 20",fill:"none",style:{display:"block"},children:t.jsxs("g",{children:[t.jsx("path",{d:Ta.p1c50b080,fill:s}),t.jsx("path",{d:Ta.p22754900,fill:s}),t.jsx("path",{d:Ta.p1fa0f800,fill:s}),t.jsx("path",{d:Ta.p35c3fa00,fill:s})]})})}),v8=({size:e=24,color:i="var(--Text-Secondary, #D5E2F2)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:{display:"block"},children:t.jsx("path",{d:_o.p3c404700,fill:i})})}),y8=({size:e=24,color:i="var(--Text-Secondary, #D5E2F2)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:{display:"block"},children:t.jsx("path",{d:_o.p21eedc00,fill:i})})}),j8=({size:e=40,color:i="var(--Text-Secondary, #D5E2F2)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:t.jsxs("g",{children:[t.jsx("path",{d:ve.p225ac300,fill:i}),t.jsx("path",{d:ve.p3c1eec00,fill:i})]})})}),C8=({size:e=40,color:i="var(--Text-Secondary, #D5E2F2)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:t.jsxs("g",{children:[t.jsx("path",{d:ve.p3b255100,fill:i}),t.jsx("path",{d:ve.p35a2e1f0,fill:i})]})})}),w8=({size:e=40,color:i="var(--Text-Secondary, #D5E2F2)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:t.jsxs("g",{children:[t.jsx("path",{d:ve.p2706c700,fill:i}),t.jsx("path",{d:ve.pd473480,fill:i})]})})}),b8=({size:e=40,color:i,className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:t.jsxs("g",{children:[t.jsx("path",{d:ve.p2706c700,fill:"#00B3E3"}),t.jsx("path",{d:ve.pd473480,fill:"#FF9771"})]})})}),S8=({size:e=40,color:i="var(--Text-Primary, #ffffff)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:t.jsxs("g",{children:[t.jsx("path",{clipRule:"evenodd",d:ve.p1b167f00,fill:i,fillRule:"evenodd"}),t.jsx("path",{d:ve.p3fc31700,fill:i})]})})}),k8=({size:e=40,color:i="var(--Text-Primary, #ffffff)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:t.jsxs("g",{children:[t.jsx("path",{d:ve.p71ad600,fill:i}),t.jsx("path",{d:ve.p999a4f0,fill:i})]})})}),T8=({size:e=40,color:i="var(--Text-Primary, #ffffff)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:t.jsx("path",{d:ve.p1f7b34c0,fill:i})})}),$8=({size:e=40,color:i="var(--Colors-Surface-Backgronud--02, #364356)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsxs("div",{style:{position:"relative",width:"100%",height:"100%"},children:[t.jsx("div",{style:{position:"absolute",inset:"10%"},children:t.jsx("svg",{width:"100%",height:"100%",viewBox:"0 0 32 32",fill:"none",style:{display:"block"},children:t.jsx("path",{clipRule:"evenodd",d:ve.p3adc2c00,fill:i,fillRule:"evenodd"})})}),t.jsx("div",{style:{position:"absolute",inset:"10%"},children:t.jsx("div",{style:{position:"absolute",inset:"0.35% 0 0 23.1%",width:"76.9%",height:"99.65%"},children:t.jsx("img",{src:f8,alt:"",style:{width:"100%",height:"100%",display:"block"}})})})]})}),L8=({size:e=40,color:i="var(--Text-Primary, #ffffff)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:t.jsxs("g",{children:[t.jsx("path",{d:ve.p2e23da80,fill:i}),t.jsx("path",{clipRule:"evenodd",d:ve.p1776ec80,fill:i,fillRule:"evenodd"}),t.jsx("path",{d:ve.p3084a600,fill:i}),t.jsx("path",{d:ve.p10fccd60,fill:i})]})})}),B8=({size:e=40,color:i="var(--Text-Primary, #ffffff)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:t.jsxs("g",{children:[t.jsx("path",{clipRule:"evenodd",d:ve.p3b110300,fill:i,fillRule:"evenodd"}),t.jsx("path",{clipRule:"evenodd",d:ve.p2f4e8800,fill:i,fillRule:"evenodd"})]})})}),P8=({size:e=40,color:i="var(--Text-Primary, #ffffff)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:t.jsxs("g",{children:[t.jsx("path",{d:ve.p17b85200,fill:i}),t.jsx("path",{clipRule:"evenodd",d:ve.p32fce00,fill:i,fillRule:"evenodd"})]})})}),E8=({size:e=40,color:i="var(--Text-Primary, #ffffff)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:t.jsx("path",{clipRule:"evenodd",d:ve.pe6f8200,fill:i,fillRule:"evenodd"})})}),D8=({size:e=40,color:i="var(--Text-Primary, #ffffff)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:t.jsxs("g",{children:[t.jsx("path",{d:ve.p2b0c900,fill:i}),t.jsx("path",{d:ve.p183a7180,fill:i}),t.jsx("path",{d:ve.p39200380,fill:i})]})})}),R8=({size:e=40,color:i="var(--Text-Primary, #ffffff)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:t.jsx("path",{d:ve.p240e4300,fill:i})})}),I8=({size:e=24,color:i,className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:{display:"block"},children:[t.jsxs("g",{children:[t.jsx("path",{d:u1.p3f723180,fill:"#62D4F3"}),t.jsx("path",{d:u1.p9a06a40,fill:"#62D4F3"})]}),t.jsx("path",{d:u1.p1e6cb280,fill:"#FF9771"})]})}),A8=({size:e=24,color:i,className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:{display:"block"},children:[t.jsxs("g",{children:[t.jsx("path",{clipRule:"evenodd",d:p1.pcc2a100,fill:"#62D4F3",fillRule:"evenodd"}),t.jsx("path",{clipRule:"evenodd",d:p1.p2dad2c00,fill:"#62D4F3",fillRule:"evenodd"})]}),t.jsx("path",{clipRule:"evenodd",d:p1.p2b3bf100,fill:"#FF9771",fillRule:"evenodd"})]})}),z8=({size:e=24,color:i="var(--Text-Secondary, #D5E2F2)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:{display:"block"},children:[t.jsx("path",{d:_o.p3cef400,fill:i}),t.jsx("path",{d:_o.p3b765800,fill:i}),t.jsx("path",{d:_o.p33480b00,fill:i})]})}),$c=({size:e=24,color:i="var(--Text-Primary, #ffffff)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:{display:"block"},children:t.jsx("path",{d:bc.p3581f900,fill:i})})}),M8=({size:e=24,color:i="var(--Text-Primary, #ffffff)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:{display:"block"},children:[t.jsx("path",{d:bc.p1100e400,fill:i}),t.jsx("path",{d:bc.p20c9f000,fill:i})]})}),V8=({size:e=24,color:i="var(--Text-Primary, #ffffff)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:{display:"block"},children:t.jsx("path",{clipRule:"evenodd",d:bc.p1e4eed80,fill:i,fillRule:"evenodd"})})}),Oe=({size:e=20,color:i="var(--Text-Assist, #B6C3D6)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",style:{display:"block"},children:t.jsx("path",{d:d8.p3398d140,fill:i})})}),Jc=({size:e=40,color:i="var(--Text-Primary, #ffffff)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:t.jsxs("g",{children:[t.jsx("path",{clipRule:"evenodd",d:ut.pead0f00,fill:i,fillRule:"evenodd"}),t.jsx("path",{clipRule:"evenodd",d:ut.p288a75f0,fill:i,fillRule:"evenodd"}),t.jsx("path",{clipRule:"evenodd",d:ut.p2b953612,fill:i,fillRule:"evenodd"})]})})}),Ee=({size:e=20,color:i="currentColor",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",style:{display:"block"},children:t.jsx("path",{clipRule:"evenodd",d:u8.p3fcc4900,fill:i,fillRule:"evenodd"})})}),F8=({size:e=24,color:i="var(--Text-Secondary, #D5E2F2)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:{display:"block"},children:t.jsx("path",{clipRule:"evenodd",d:nf.p19152e00,fill:i,fillRule:"evenodd"})})}),N8=({size:e=24,color:i="var(--Text-Secondary, #D5E2F2)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:{display:"block"},children:t.jsx("path",{clipRule:"evenodd",d:nf.p3e090b80,fill:i,fillRule:"evenodd"})})}),Lr=({size:e=24,color:i="var(--Text-Secondary, #D5E2F2)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:{display:"block"},children:t.jsx("path",{clipRule:"evenodd",d:nf.p1f0efb00,fill:i,fillRule:"evenodd"})})}),O8=({size:e=40,color:i="var(--Text-Primary, #ffffff)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:t.jsx("path",{clipRule:"evenodd",d:ut.p1b403400,fill:i,fillRule:"evenodd"})})}),_8=({size:e=48,color:i,className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",preserveAspectRatio:"none",style:{display:"block"},children:[t.jsx("g",{id:"Icons/ icon_security",children:t.jsxs("g",{id:"Icon",children:[t.jsx("path",{d:J2.p12e0b880,fill:"url(#paint0_linear_4313_84)"}),t.jsx("path",{d:J2.p12e0b880,stroke:"var(--stroke-0, #364356)"})]})}),t.jsx("defs",{children:t.jsxs("linearGradient",{gradientUnits:"userSpaceOnUse",id:"paint0_linear_4313_84",x1:"24.0002",x2:"24.0002",y1:"6",y2:"45.3435",children:[t.jsx("stop",{offset:"0.35",stopColor:"#33C2E9"}),t.jsx("stop",{offset:"1",stopColor:"#1A5EFF"})]})})]})}),jp=({size:e=12,color:i="var(--Text-Primary, #ffffff)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 12 13",fill:"none",style:{display:"block"},children:t.jsx("g",{children:t.jsx("path",{d:p8.p373efc80,fill:i,stroke:"var(--Colors-Surface-Backgronud--01, #131B26)"})})})}),F3=({size:e=12,color:i="var(--Text-Primary, #ffffff)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 13 13",fill:"none",style:{display:"block"},children:t.jsxs("g",{children:[t.jsx("path",{d:f1.p21f1a600,fill:i,stroke:"var(--Colors-Surface-Backgronud--01, #131B26)"}),t.jsx("path",{d:f1.p91f5200,fill:"var(--Colors-Surface-Backgronud--01, #131B26)",stroke:"var(--Colors-Surface-Backgronud--01, #131B26)",strokeWidth:"0.2"}),t.jsx("path",{d:f1.p2dac4d00,fill:"var(--Colors-Surface-Backgronud--01, #131B26)",stroke:"var(--Colors-Surface-Backgronud--01, #131B26)",strokeWidth:"0.2"})]})})}),zt=({size:e=12,color:i="currentColor",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:t.jsx("path",{d:Qc.p28bea880,fill:i})})}),H8=({size:e=24,color:i="currentColor",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:{display:"block"},children:t.jsx("path",{d:"M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z",fill:i})})}),rf=({size:e=20,color:i="var(--Text-Assist, #B6C3D6)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",style:{display:"block"},children:[t.jsx("path",{d:"M9.05882 10C9.05882 9.4802 9.4802 9.05882 10 9.05882C10.5198 9.05882 10.9412 9.4802 10.9412 10V13.2941C10.9412 13.8139 10.5198 14.2353 10 14.2353C9.4802 14.2353 9.05882 13.8139 9.05882 13.2941V10Z",fill:i}),t.jsx("path",{d:"M10 5.52941C9.35025 5.52941 8.82353 6.05614 8.82353 6.70588C8.82353 7.35563 9.35025 7.88235 10 7.88235C10.6497 7.88235 11.1765 7.35563 11.1765 6.70588C11.1765 6.05614 10.6497 5.52941 10 5.52941Z",fill:i}),t.jsx("path",{clipRule:"evenodd",d:"M2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10ZM16.5882 10C16.5882 13.6386 13.6386 16.5882 10 16.5882C6.36142 16.5882 3.41176 13.6386 3.41176 10C3.41176 6.36142 6.36142 3.41176 10 3.41176C13.6386 3.41176 16.5882 6.36142 16.5882 10Z",fill:i,fillRule:"evenodd"})]})}),rl=({size:e=24,color:i="var(--Text-Secondary, #D5E2F2)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:{display:"block"},children:t.jsx("path",{clipRule:"evenodd",d:"M12.5605 1.34222C12.2098 1.15259 11.7902 1.15259 11.4395 1.34222L2.71943 6.05765C2.50651 6.17278 2.40004 6.38632 2.4 6.59988V17.3997C2.39999 17.6134 2.50647 17.8271 2.71943 17.9423L11.4395 22.6577C11.7902 22.8473 12.2098 22.8473 12.5605 22.6577L21.2806 17.9423C21.4935 17.8271 21.6 17.6135 21.6 17.3999V6.59988C21.6 6.38632 21.4935 6.17278 21.2806 6.05765L12.5605 1.34222ZM12 3.08546L5.50067 6.6L12 10.1145L18.4993 6.6L12 3.08546ZM19.8 7.94297V16.9425L12.9 20.6737V11.6742L19.8 7.94297ZM11.1 11.6742V20.6737L4.2 16.9425V7.94297L11.1 11.6742Z",fill:i,fillRule:"evenodd"})})}),sl=({size:e=24,color:i="var(--Text-Secondary, #D5E2F2)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:{display:"block"},children:[t.jsx("path",{d:"M7.88338 14.2631C7.47636 14.5484 7.37768 15.1096 7.66298 15.5166C8.58936 16.8382 10.3063 17.7 11.9932 17.7C13.6787 17.7 15.3918 16.8401 16.3324 15.5231C16.6212 15.1186 16.5275 14.5565 16.123 14.2676C15.7185 13.9788 15.1564 14.0725 14.8676 14.477C14.2689 15.3153 13.104 15.9 11.9932 15.9C10.8838 15.9 9.72066 15.3162 9.13695 14.4835C8.85165 14.0764 8.29041 13.9778 7.88338 14.2631Z",fill:i}),t.jsx("path",{d:"M8.4 9.3C8.4 8.80294 8.80294 8.4 9.3 8.4C9.79705 8.4 10.2 8.80294 10.2 9.3V11.1C10.2 11.5971 9.79705 12 9.3 12C8.80294 12 8.4 11.5971 8.4 11.1V9.3Z",fill:i}),t.jsx("path",{d:"M14.7 8.4C14.2029 8.4 13.8 8.80294 13.8 9.3V11.1C13.8 11.5971 14.2029 12 14.7 12C15.1971 12 15.6 11.5971 15.6 11.1V9.3C15.6 8.80294 15.1971 8.4 14.7 8.4Z",fill:i}),t.jsx("path",{clipRule:"evenodd",d:"M12 22.2C6.36669 22.2 1.8 17.6333 1.8 12C1.8 6.36669 6.36669 1.8 12 1.8C17.6333 1.8 22.2 6.36669 22.2 12C22.2 17.6333 17.6333 22.2 12 22.2ZM12 20.4C16.6392 20.4 20.4 16.6392 20.4 12C20.4 7.36081 16.6392 3.6 12 3.6C7.36081 3.6 3.6 7.36081 3.6 12C3.6 16.6392 7.36081 20.4 12 20.4Z",fill:i,fillRule:"evenodd"})]})}),Ce=({size:e=24,color:i="currentColor",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:{display:"block"},children:t.jsx("path",{d:"M2.59704 11.0617C2.19205 11.427 2.45308 12.0943 3.00094 12.0943H4.2034V19.8126C4.2034 20.4684 4.74043 21 5.40288 21H10.5824V17.6191C10.5824 16.9633 11.1195 16.4317 11.7819 16.4317H12.2181C12.8805 16.4317 13.4176 16.9633 13.4176 17.6191V21H18.5971C19.2596 21 19.7966 20.4684 19.7966 19.8126V12.0943H20.9991C21.5469 12.0943 21.8079 11.427 21.403 11.0617L12.8078 3.30966C12.35 2.89678 11.65 2.89678 11.1922 3.30966L2.59704 11.0617Z",fill:i})})}),W8=({size:e=40,color:i="var(--Text-Primary, #ffffff)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:t.jsxs("g",{children:[t.jsx("path",{d:ve.p51c7600,fill:i}),t.jsx("path",{d:ve.p3228d072,fill:i}),t.jsx("path",{d:ve.p8ea7e00,fill:i})]})})}),xs=({size:e=40,color:i="currentColor",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsxs("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{display:"block"},children:[t.jsx("rect",{x:"12",y:"5",width:"4",height:"30",rx:"1",fill:i}),t.jsx("rect",{x:"24",y:"5",width:"4",height:"30",rx:"1",fill:i})]})}),Ho=({size:e=40,color:i="currentColor",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{display:"block"},children:t.jsx("path",{d:"M12 5L34 20L12 35V5Z",fill:i})})}),Wo=({size:e=40,color:i="currentColor",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{display:"block"},children:t.jsx("rect",{x:"8",y:"8",width:"24",height:"24",rx:"2",fill:i})})}),Uo=({size:e=40,color:i="currentColor",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{display:"block"},children:t.jsx("circle",{cx:"20",cy:"20",r:"12",fill:i})})}),U8=({size:e=40,color:i="var(--Text-Primary, #ffffff)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:t.jsx("path",{d:Qc.p283f5760,fill:i})})}),Z8=({size:e=40,color:i="var(--Text-Primary, #ffffff)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:t.jsx("path",{d:Qc.p28d9a880,fill:i})})}),G8=({size:e=40,color:i="var(--Text-Primary, #ffffff)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:t.jsx("path",{d:Dr.p1994a170,fill:i})})}),K8=({size:e=40,color:i="var(--Text-Primary, #ffffff)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:t.jsx("path",{d:Dr.pf082e80,fill:i})})}),q8=({size:e=40,color:i="var(--Text-Primary, #ffffff)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:t.jsxs("g",{children:[t.jsx("path",{clipRule:"evenodd",d:Dr.p3e6de5f0,fill:i,fillRule:"evenodd"}),t.jsx("path",{d:Dr.p25aa3d70,fill:i})]})})}),Y8=({size:e=40,color:i="var(--Text-Primary, #ffffff)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:t.jsx("path",{clipRule:"evenodd",d:Dr.p3256d072,fill:i,fillRule:"evenodd"})})}),X8=({size:e=40,color:i="var(--Text-Primary, #ffffff)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:t.jsx("path",{clipRule:"evenodd",d:Dr.p1f352f00,fill:i,fillRule:"evenodd"})})}),Q8=({size:e=40,color:i="var(--Text-Primary, #ffffff)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:t.jsx("path",{clipRule:"evenodd",d:Dr.p14736900,fill:i,fillRule:"evenodd"})})}),J8=({size:e=40,color:i="var(--Text-Primary, #ffffff)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:t.jsx("path",{d:Qc.pacd0700,fill:i})})}),ey=({size:e=40,color:i="var(--Text-Primary, #ffffff)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:t.jsxs("g",{children:[t.jsx("path",{clipRule:"evenodd",d:ut.p184eb400,fill:i,fillRule:"evenodd"}),t.jsx("path",{clipRule:"evenodd",d:ut.p29872300,fill:i,fillRule:"evenodd"})]})})}),ty=({size:e=40,color:i="var(--Text-Primary, #ffffff)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:t.jsx("path",{clipRule:"evenodd",d:ut.p2c7da900,fill:i,fillRule:"evenodd"})})}),ny=({size:e=40,color:i="var(--Text-Primary, #ffffff)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:t.jsxs("g",{children:[t.jsx("path",{d:ut.p17b7de00,fill:i}),t.jsx("path",{clipRule:"evenodd",d:ut.p3e6de5f0,fill:i,fillRule:"evenodd"})]})})}),iy=({size:e=40,color:i="var(--Text-Primary, #ffffff)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:t.jsxs("g",{children:[t.jsx("path",{d:ut.p328ca900,fill:i}),t.jsx("path",{d:ut.p10b6d300,fill:i}),t.jsx("path",{d:ut.p31de9980,fill:i})]})})}),ry=({size:e=40,color:i="var(--Text-Primary, #ffffff)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:t.jsxs("g",{children:[t.jsx("path",{d:ut.pd1903e0,fill:i}),t.jsx("path",{d:ut.p34cda700,fill:i})]})})}),sy=({size:e=40,color:i="var(--Text-Primary, #ffffff)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:t.jsx("path",{clipRule:"evenodd",d:ut.p1a0aca80,fill:i,fillRule:"evenodd"})})}),oy=({size:e=40,color:i="var(--Text-Primary, #ffffff)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:t.jsx("path",{clipRule:"evenodd",d:ut.p1f7d3280,fill:i,fillRule:"evenodd"})})}),ly=({size:e=40,color:i="var(--Text-Primary, #ffffff)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:t.jsx("path",{clipRule:"evenodd",d:ut.p1bf31d80,fill:i,fillRule:"evenodd"})})}),ay=({size:e=40,color:i="var(--Text-Primary, #ffffff)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:t.jsx("path",{d:ut.p184aa700,fill:i})})}),cy=({size:e=40,color:i="var(--Text-Primary, #ffffff)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:t.jsx("path",{clipRule:"evenodd",d:ut.p32fce00,fill:i,fillRule:"evenodd"})})}),dy=({size:e=40,color:i,className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:t.jsxs("g",{children:[t.jsx("path",{clipRule:"evenodd",d:ve.p26293800,fill:"#62D4F3",fillRule:"evenodd"}),t.jsx("path",{clipRule:"evenodd",d:ve.p3f2bf300,fill:"#FF9771",fillRule:"evenodd"}),t.jsx("path",{clipRule:"evenodd",d:ve.p3d4c6bc0,fill:"#FF9771",fillRule:"evenodd"})]})})}),uy=({size:e=20,color:i="var(--Text-Primary, #ffffff)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",preserveAspectRatio:"none",style:{display:"block"},children:t.jsx("g",{children:t.jsx("path",{clipRule:"evenodd",d:Vo.phoneAnswer,fill:i,fillRule:"evenodd"})})})}),py=({size:e=20,color:i="var(--Text-Primary, #ffffff)",className:s})=>t.jsx(te,{$size:e,className:s,children:t.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",preserveAspectRatio:"none",style:{display:"block"},children:t.jsxs("g",{children:[t.jsx("path",{d:Vo.lib1,fill:i}),t.jsx("path",{d:Vo.lib2,fill:i}),t.jsx("path",{d:Vo.lib3,fill:i}),t.jsx("path",{clipRule:"evenodd",d:Vo.lib4,fill:i,fillRule:"evenodd"})]})})}),Ge=({name:e,...i})=>{switch(e){case"vive":return t.jsx(il,{...i});case"gallery":return t.jsx(Sc,{...i});case"explore":return t.jsx(kc,{...i});case"settings":return t.jsx(Tc,{...i});case"glasses":return t.jsx(fi,{...i});case"share":return t.jsx(x8,{...i});case"download":return t.jsx(m8,{...i});case"delete":return t.jsx(M3,{...i});case"delete-outline":return t.jsx(g8,{...i});case"vive-logo":return t.jsx(V3,{...i});case"hand-point":return t.jsx(v8,{...i});case"headset":return t.jsx(y8,{...i});case"update":return t.jsx(j8,{...i});case"ai":return t.jsx(I8,{...i});case"memory":return t.jsx(A8,{...i});case"wifi":return t.jsx(z8,{...i});case"arrow-right":return t.jsx(Oe,{...i});case"open":return t.jsx(Jc,{...i});case"account":return t.jsx(Ee,{...i});case"cloud-upload":return t.jsx(F8,{...i});case"language":return t.jsx(N8,{...i});case"information":return t.jsx(Lr,{...i});case"arrow-left":return t.jsx($c,{...i});case"reset":return t.jsx(M8,{...i});case"power-off":return t.jsx(V8,{...i});case"round-check":return t.jsx(O8,{...i});case"security":return t.jsx(_8,{...i});case"charging":return t.jsx(jp,{...i});case"error":return t.jsx(F3,{...i});case"close":return t.jsx(zt,{...i});case"home":return t.jsx(Ce,{...i});case"more":return t.jsx(W8,{...i});case"info":return t.jsx(rf,{...i});case"object":return t.jsx(rl,{...i});case"emoji":return t.jsx(sl,{...i});case"pause":return t.jsx(xs,{...i});case"play":return t.jsx(Ho,{...i});case"stop":return t.jsx(Wo,{...i});case"record":return t.jsx(Uo,{...i});case"menu":return t.jsx(D8,{...i});case"reorder":return t.jsx(R8,{...i});case"convert":return t.jsx(C8,{...i});case"switch":return t.jsx(w8,{...i});case"switch-dual":return t.jsx(b8,{...i});case"back":return t.jsx(S8,{...i});case"upload":return t.jsx(k8,{...i});case"retry":return t.jsx(T8,{...i});case"loading":return t.jsx($8,{...i});case"filter-with-search":return t.jsx(L8,{...i});case"font":return t.jsx(B8,{...i});case"zoom":return t.jsx(P8,{...i});case"create-solid":return t.jsx(E8,{...i});case"arrow-down":return t.jsx(U8,{...i});case"arrow-up":return t.jsx(Z8,{...i});case"plus":return t.jsx(G8,{...i});case"minimize":return t.jsx(K8,{...i});case"disabled":return t.jsx(q8,{...i});case"round-back":return t.jsx(Y8,{...i});case"round-plus":return t.jsx(X8,{...i});case"round-minus":return t.jsx(Q8,{...i});case"check":return t.jsx(J8,{...i});case"round-check-outline":return t.jsx(ey,{...i});case"clear-all":return t.jsx(ty,{...i});case"close-round":return t.jsx(ny,{...i});case"filter":return t.jsx(iy,{...i});case"sort":return t.jsx(ry,{...i});case"favorite-disable":return t.jsx(sy,{...i});case"favorite-enable":return t.jsx(oy,{...i});case"rating-disable":return t.jsx(ly,{...i});case"rating-enable":return t.jsx(ay,{...i});case"search":return t.jsx(cy,{...i});case"phone-answer":return t.jsx(dy,{...i});case"phone":return t.jsx(uy,{...i});case"library":return t.jsx(py,{...i});default:return t.jsx(il,{...i})}},sf=b.createContext({});function of(e){const i=b.useRef(null);return i.current===null&&(i.current=e()),i.current}const fy=typeof window<"u",lf=fy?b.useLayoutEffect:b.useEffect,ed=b.createContext(null);function af(e,i){e.indexOf(i)===-1&&e.push(i)}function Lc(e,i){const s=e.indexOf(i);s>-1&&e.splice(s,1)}const Xn=(e,i,s)=>s>i?i:s<e?e:s;let td=()=>{};const Wi={},N3=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),O3=e=>typeof e=="object"&&e!==null,_3=e=>/^0[^.\s]+$/u.test(e);function H3(e){let i;return()=>(i===void 0&&(i=e()),i)}const bn=e=>e,ul=(...e)=>e.reduce((i,s)=>l=>s(i(l))),ol=(e,i,s)=>{const l=i-e;return l?(s-e)/l:1};class cf{constructor(){this.subscriptions=[]}add(i){return af(this.subscriptions,i),()=>Lc(this.subscriptions,i)}notify(i,s,l){const c=this.subscriptions.length;if(c)if(c===1)this.subscriptions[0](i,s,l);else for(let p=0;p<c;p++){const d=this.subscriptions[p];d&&d(i,s,l)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const tn=e=>e*1e3,wn=e=>e/1e3,W3=(e,i)=>i?e*(1e3/i):0,U3=(e,i,s)=>(((1-3*s+3*i)*e+(3*s-6*i))*e+3*i)*e,hy=1e-7,xy=12;function my(e,i,s,l,c){let p,d,f=0;do d=i+(s-i)/2,p=U3(d,l,c)-e,p>0?s=d:i=d;while(Math.abs(p)>hy&&++f<xy);return d}function pl(e,i,s,l){if(e===i&&s===l)return bn;const c=p=>my(p,0,1,e,s);return p=>p===0||p===1?p:U3(c(p),i,l)}const Z3=e=>i=>i<=.5?e(2*i)/2:(2-e(2*(1-i)))/2,G3=e=>i=>1-e(1-i),K3=pl(.33,1.53,.69,.99),df=G3(K3),q3=Z3(df),Y3=e=>e>=1?1:(e*=2)<1?.5*df(e):.5*(2-Math.pow(2,-10*(e-1))),uf=e=>1-Math.sin(Math.acos(e)),X3=G3(uf),Q3=Z3(uf),gy=pl(.42,0,1,1),vy=pl(0,0,.58,1),J3=pl(.42,0,.58,1),yy=e=>Array.isArray(e)&&typeof e[0]!="number",eg=e=>Array.isArray(e)&&typeof e[0]=="number",jy={linear:bn,easeIn:gy,easeInOut:J3,easeOut:vy,circIn:uf,circInOut:Q3,circOut:X3,backIn:df,backInOut:q3,backOut:K3,anticipate:Y3},Cy=e=>typeof e=="string",ex=e=>{if(eg(e)){td(e.length===4);const[i,s,l,c]=e;return pl(i,s,l,c)}else if(Cy(e))return jy[e];return e},$a=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function wy(e){let i=new Set,s=new Set,l=!1,c=!1;const p=new WeakSet;let d={delta:0,timestamp:0,isProcessing:!1};function f(g){p.has(g)&&(x.schedule(g),e()),g(d)}const x={schedule:(g,m=!1,j=!1)=>{const k=j&&l?i:s;return m&&p.add(g),k.add(g),g},cancel:g=>{s.delete(g),p.delete(g)},process:g=>{if(d=g,l){c=!0;return}l=!0;const m=i;i=s,s=m,i.forEach(f),i.clear(),l=!1,c&&(c=!1,x.process(g))}};return x}const by=40;function tg(e,i){let s=!1,l=!0;const c={delta:0,timestamp:0,isProcessing:!1},p=()=>s=!0,d=$a.reduce((M,F)=>(M[F]=wy(p),M),{}),{setup:f,read:x,resolveKeyframes:g,preUpdate:m,update:j,preRender:C,render:k,postRender:S}=d,T=()=>{const M=Wi.useManualTiming,F=M?c.timestamp:performance.now();s=!1,M||(c.delta=l?1e3/60:Math.max(Math.min(F-c.timestamp,by),1)),c.timestamp=F,c.isProcessing=!0,f.process(c),x.process(c),g.process(c),m.process(c),j.process(c),C.process(c),k.process(c),S.process(c),c.isProcessing=!1,s&&i&&(l=!1,e(T))},P=()=>{s=!0,l=!0,c.isProcessing||e(T)};return{schedule:$a.reduce((M,F)=>{const O=d[F];return M[F]=(X,V=!1,z=!1)=>(s||P(),O.schedule(X,V,z)),M},{}),cancel:M=>{for(let F=0;F<$a.length;F++)d[$a[F]].cancel(M)},state:c,steps:d}}const{schedule:ze,cancel:Ui,state:bt,steps:h1}=tg(typeof requestAnimationFrame<"u"?requestAnimationFrame:bn,!0);let uc;function Sy(){uc=void 0}const Vt={now:()=>(uc===void 0&&Vt.set(bt.isProcessing||Wi.useManualTiming?bt.timestamp:performance.now()),uc),set:e=>{uc=e,queueMicrotask(Sy)}},ng=e=>i=>typeof i=="string"&&i.startsWith(e),ig=ng("--"),ky=ng("var(--"),pf=e=>ky(e)?Ty.test(e.split("/*")[0].trim()):!1,Ty=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function tx(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}const Ts={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},ll={...Ts,transform:e=>Xn(0,1,e)},La={...Ts,default:1},Zo=e=>Math.round(e*1e5)/1e5,ff=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function $y(e){return e==null}const Ly=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,hf=(e,i)=>s=>!!(typeof s=="string"&&Ly.test(s)&&s.startsWith(e)||i&&!$y(s)&&Object.prototype.hasOwnProperty.call(s,i)),rg=(e,i,s)=>l=>{if(typeof l!="string")return l;const[c,p,d,f]=l.match(ff);return{[e]:parseFloat(c),[i]:parseFloat(p),[s]:parseFloat(d),alpha:f!==void 0?parseFloat(f):1}},By=e=>Xn(0,255,e),x1={...Ts,transform:e=>Math.round(By(e))},Cr={test:hf("rgb","red"),parse:rg("red","green","blue"),transform:({red:e,green:i,blue:s,alpha:l=1})=>"rgba("+x1.transform(e)+", "+x1.transform(i)+", "+x1.transform(s)+", "+Zo(ll.transform(l))+")"};function Py(e){let i="",s="",l="",c="";return e.length>5?(i=e.substring(1,3),s=e.substring(3,5),l=e.substring(5,7),c=e.substring(7,9)):(i=e.substring(1,2),s=e.substring(2,3),l=e.substring(3,4),c=e.substring(4,5),i+=i,s+=s,l+=l,c+=c),{red:parseInt(i,16),green:parseInt(s,16),blue:parseInt(l,16),alpha:c?parseInt(c,16)/255:1}}const Cp={test:hf("#"),parse:Py,transform:Cr.transform},fl=e=>({test:i=>typeof i=="string"&&i.endsWith(e)&&i.split(" ").length===1,parse:parseFloat,transform:i=>`${i}${e}`}),ui=fl("deg"),Yn=fl("%"),oe=fl("px"),Ey=fl("vh"),Dy=fl("vw"),nx={...Yn,parse:e=>Yn.parse(e)/100,transform:e=>Yn.transform(e*100)},ds={test:hf("hsl","hue"),parse:rg("hue","saturation","lightness"),transform:({hue:e,saturation:i,lightness:s,alpha:l=1})=>"hsla("+Math.round(e)+", "+Yn.transform(Zo(i))+", "+Yn.transform(Zo(s))+", "+Zo(ll.transform(l))+")"},tt={test:e=>Cr.test(e)||Cp.test(e)||ds.test(e),parse:e=>Cr.test(e)?Cr.parse(e):ds.test(e)?ds.parse(e):Cp.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Cr.transform(e):ds.transform(e),getAnimatableNone:e=>{const i=tt.parse(e);return i.alpha=0,tt.transform(i)}},Ry=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Iy(e){var i,s;return isNaN(e)&&typeof e=="string"&&(((i=e.match(ff))==null?void 0:i.length)||0)+(((s=e.match(Ry))==null?void 0:s.length)||0)>0}const sg="number",og="color",Ay="var",zy="var(",ix="${}",My=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Cs(e){const i=e.toString(),s=[],l={color:[],number:[],var:[]},c=[];let p=0;const f=i.replace(My,x=>(tt.test(x)?(l.color.push(p),c.push(og),s.push(tt.parse(x))):x.startsWith(zy)?(l.var.push(p),c.push(Ay),s.push(x)):(l.number.push(p),c.push(sg),s.push(parseFloat(x))),++p,ix)).split(ix);return{values:s,split:f,indexes:l,types:c}}function Vy(e){return Cs(e).values}function lg({split:e,types:i}){const s=e.length;return l=>{let c="";for(let p=0;p<s;p++)if(c+=e[p],l[p]!==void 0){const d=i[p];d===sg?c+=Zo(l[p]):d===og?c+=tt.transform(l[p]):c+=l[p]}return c}}function Fy(e){return lg(Cs(e))}const Ny=e=>typeof e=="number"?0:tt.test(e)?tt.getAnimatableNone(e):e,Oy=(e,i)=>typeof e=="number"?i!=null&&i.trim().endsWith("/")?e:0:Ny(e);function _y(e){const i=Cs(e);return lg(i)(i.values.map((l,c)=>Oy(l,i.split[c])))}const Vn={test:Iy,parse:Vy,createTransformer:Fy,getAnimatableNone:_y};function m1(e,i,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?e+(i-e)*6*s:s<1/2?i:s<2/3?e+(i-e)*(2/3-s)*6:e}function Hy({hue:e,saturation:i,lightness:s,alpha:l}){e/=360,i/=100,s/=100;let c=0,p=0,d=0;if(!i)c=p=d=s;else{const f=s<.5?s*(1+i):s+i-s*i,x=2*s-f;c=m1(x,f,e+1/3),p=m1(x,f,e),d=m1(x,f,e-1/3)}return{red:Math.round(c*255),green:Math.round(p*255),blue:Math.round(d*255),alpha:l}}function Bc(e,i){return s=>s>0?i:e}const Ae=(e,i,s)=>e+(i-e)*s,g1=(e,i,s)=>{const l=e*e,c=s*(i*i-l)+l;return c<0?0:Math.sqrt(c)},Wy=[Cp,Cr,ds],Uy=e=>Wy.find(i=>i.test(e));function rx(e){const i=Uy(e);if(!i)return!1;let s=i.parse(e);return i===ds&&(s=Hy(s)),s}const sx=(e,i)=>{const s=rx(e),l=rx(i);if(!s||!l)return Bc(e,i);const c={...s};return p=>(c.red=g1(s.red,l.red,p),c.green=g1(s.green,l.green,p),c.blue=g1(s.blue,l.blue,p),c.alpha=Ae(s.alpha,l.alpha,p),Cr.transform(c))},wp=new Set(["none","hidden"]);function Zy(e,i){return wp.has(e)?s=>s<=0?e:i:s=>s>=1?i:e}function Gy(e,i){return s=>Ae(e,i,s)}function xf(e){return typeof e=="number"?Gy:typeof e=="string"?pf(e)?Bc:tt.test(e)?sx:Yy:Array.isArray(e)?ag:typeof e=="object"?tt.test(e)?sx:Ky:Bc}function ag(e,i){const s=[...e],l=s.length,c=e.map((p,d)=>xf(p)(p,i[d]));return p=>{for(let d=0;d<l;d++)s[d]=c[d](p);return s}}function Ky(e,i){const s={...e,...i},l={};for(const c in s)e[c]!==void 0&&i[c]!==void 0&&(l[c]=xf(e[c])(e[c],i[c]));return c=>{for(const p in l)s[p]=l[p](c);return s}}function qy(e,i){const s=[],l={color:0,var:0,number:0};for(let c=0;c<i.values.length;c++){const p=i.types[c],d=e.indexes[p][l[p]],f=e.values[d]??0;s[c]=f,l[p]++}return s}const Yy=(e,i)=>{const s=Vn.createTransformer(i),l=Cs(e),c=Cs(i);return l.indexes.var.length===c.indexes.var.length&&l.indexes.color.length===c.indexes.color.length&&l.indexes.number.length>=c.indexes.number.length?wp.has(e)&&!c.values.length||wp.has(i)&&!l.values.length?Zy(e,i):ul(ag(qy(l,c),c.values),s):Bc(e,i)};function cg(e,i,s){return typeof e=="number"&&typeof i=="number"&&typeof s=="number"?Ae(e,i,s):xf(e)(e,i)}const Xy=e=>{const i=({timestamp:s})=>e(s);return{start:(s=!0)=>ze.update(i,s),stop:()=>Ui(i),now:()=>bt.isProcessing?bt.timestamp:Vt.now()}},dg=(e,i,s=10)=>{let l="";const c=Math.max(Math.round(i/s),2);for(let p=0;p<c;p++)l+=Math.round(e(p/(c-1))*1e4)/1e4+", ";return`linear(${l.substring(0,l.length-2)})`},Pc=2e4;function mf(e){let i=0;const s=50;let l=e.next(i);for(;!l.done&&i<Pc;)i+=s,l=e.next(i);return i>=Pc?1/0:i}function Qy(e,i=100,s){const l=s({...e,keyframes:[0,i]}),c=Math.min(mf(l),Pc);return{type:"keyframes",ease:p=>l.next(c*p).value/i,duration:wn(c)}}const Ke={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function bp(e,i){return e*Math.sqrt(1-i*i)}const Jy=12;function e9(e,i,s){let l=s;for(let c=1;c<Jy;c++)l=l-e(l)/i(l);return l}const v1=.001;function t9({duration:e=Ke.duration,bounce:i=Ke.bounce,velocity:s=Ke.velocity,mass:l=Ke.mass}){let c,p,d=1-i;d=Xn(Ke.minDamping,Ke.maxDamping,d),e=Xn(Ke.minDuration,Ke.maxDuration,wn(e)),d<1?(c=g=>{const m=g*d,j=m*e,C=m-s,k=bp(g,d),S=Math.exp(-j);return v1-C/k*S},p=g=>{const j=g*d*e,C=j*s+s,k=Math.pow(d,2)*Math.pow(g,2)*e,S=Math.exp(-j),T=bp(Math.pow(g,2),d);return(-c(g)+v1>0?-1:1)*((C-k)*S)/T}):(c=g=>{const m=Math.exp(-g*e),j=(g-s)*e+1;return-v1+m*j},p=g=>{const m=Math.exp(-g*e),j=(s-g)*(e*e);return m*j});const f=5/e,x=e9(c,p,f);if(e=tn(e),isNaN(x))return{stiffness:Ke.stiffness,damping:Ke.damping,duration:e};{const g=Math.pow(x,2)*l;return{stiffness:g,damping:d*2*Math.sqrt(l*g),duration:e}}}const n9=["duration","bounce"],i9=["stiffness","damping","mass"];function ox(e,i){return i.some(s=>e[s]!==void 0)}function r9(e){let i={velocity:Ke.velocity,stiffness:Ke.stiffness,damping:Ke.damping,mass:Ke.mass,isResolvedFromDuration:!1,...e};if(!ox(e,i9)&&ox(e,n9))if(i.velocity=0,e.visualDuration){const s=e.visualDuration,l=2*Math.PI/(s*1.2),c=l*l,p=2*Xn(.05,1,1-(e.bounce||0))*Math.sqrt(c);i={...i,mass:Ke.mass,stiffness:c,damping:p}}else{const s=t9({...e,velocity:0});i={...i,...s,mass:Ke.mass},i.isResolvedFromDuration=!0}return i}function Ec(e=Ke.visualDuration,i=Ke.bounce){const s=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:i}:e;let{restSpeed:l,restDelta:c}=s;const p=s.keyframes[0],d=s.keyframes[s.keyframes.length-1],f={done:!1,value:p},{stiffness:x,damping:g,mass:m,duration:j,velocity:C,isResolvedFromDuration:k}=r9({...s,velocity:-wn(s.velocity||0)}),S=C||0,T=g/(2*Math.sqrt(x*m)),P=d-p,R=wn(Math.sqrt(x/m)),E=Math.abs(P)<5;l||(l=E?Ke.restSpeed.granular:Ke.restSpeed.default),c||(c=E?Ke.restDelta.granular:Ke.restDelta.default);let M,F,O,X,V,z;if(T<1)O=bp(R,T),X=(S+T*R*P)/O,M=Q=>{const ae=Math.exp(-T*R*Q);return d-ae*(X*Math.sin(O*Q)+P*Math.cos(O*Q))},V=T*R*X+P*O,z=T*R*P-X*O,F=Q=>Math.exp(-T*R*Q)*(V*Math.sin(O*Q)+z*Math.cos(O*Q));else if(T===1){M=ae=>d-Math.exp(-R*ae)*(P+(S+R*P)*ae);const Q=S+R*P;F=ae=>Math.exp(-R*ae)*(R*Q*ae-S)}else{const Q=R*Math.sqrt(T*T-1);M=ke=>{const Ie=Math.exp(-T*R*ke),$e=Math.min(Q*ke,300);return d-Ie*((S+T*R*P)*Math.sinh($e)+Q*P*Math.cosh($e))/Q};const ae=(S+T*R*P)/Q,me=T*R*ae-P*Q,ge=T*R*P-ae*Q;F=ke=>{const Ie=Math.exp(-T*R*ke),$e=Math.min(Q*ke,300);return Ie*(me*Math.sinh($e)+ge*Math.cosh($e))}}const J={calculatedDuration:k&&j||null,velocity:Q=>tn(F(Q)),next:Q=>{if(!k&&T<1){const me=Math.exp(-T*R*Q),ge=Math.sin(O*Q),ke=Math.cos(O*Q),Ie=d-me*(X*ge+P*ke),$e=tn(me*(V*ge+z*ke));return f.done=Math.abs($e)<=l&&Math.abs(d-Ie)<=c,f.value=f.done?d:Ie,f}const ae=M(Q);if(k)f.done=Q>=j;else{const me=tn(F(Q));f.done=Math.abs(me)<=l&&Math.abs(d-ae)<=c}return f.value=f.done?d:ae,f},toString:()=>{const Q=Math.min(mf(J),Pc),ae=dg(me=>J.next(Q*me).value,Q,30);return Q+"ms "+ae},toTransition:()=>{}};return J}Ec.applyToOptions=e=>{const i=Qy(e,100,Ec);return e.ease=i.ease,e.duration=tn(i.duration),e.type="keyframes",e};const s9=5;function ug(e,i,s){const l=Math.max(i-s9,0);return W3(s-e(l),i-l)}function Sp({keyframes:e,velocity:i=0,power:s=.8,timeConstant:l=325,bounceDamping:c=10,bounceStiffness:p=500,modifyTarget:d,min:f,max:x,restDelta:g=.5,restSpeed:m}){const j=e[0],C={done:!1,value:j},k=z=>f!==void 0&&z<f||x!==void 0&&z>x,S=z=>f===void 0?x:x===void 0||Math.abs(f-z)<Math.abs(x-z)?f:x;let T=s*i;const P=j+T,R=d===void 0?P:d(P);R!==P&&(T=R-j);const E=z=>-T*Math.exp(-z/l),M=z=>R+E(z),F=z=>{const J=E(z),Q=M(z);C.done=Math.abs(J)<=g,C.value=C.done?R:Q};let O,X;const V=z=>{k(C.value)&&(O=z,X=Ec({keyframes:[C.value,S(C.value)],velocity:ug(M,z,C.value),damping:c,stiffness:p,restDelta:g,restSpeed:m}))};return V(0),{calculatedDuration:null,next:z=>{let J=!1;return!X&&O===void 0&&(J=!0,F(z),V(z)),O!==void 0&&z>=O?X.next(z-O):(!J&&F(z),C)}}}function o9(e,i,s){const l=[],c=s||Wi.mix||cg,p=e.length-1;for(let d=0;d<p;d++){let f=c(e[d],e[d+1]);if(i){const x=Array.isArray(i)?i[d]||bn:i;f=ul(x,f)}l.push(f)}return l}function l9(e,i,{clamp:s=!0,ease:l,mixer:c}={}){const p=e.length;if(td(p===i.length),p===1)return()=>i[0];if(p===2&&i[0]===i[1])return()=>i[1];const d=e[0]===e[1];e[0]>e[p-1]&&(e=[...e].reverse(),i=[...i].reverse());const f=o9(i,l,c),x=f.length,g=m=>{if(d&&m<e[0])return i[0];let j=0;if(x>1)for(;j<e.length-2&&!(m<e[j+1]);j++);const C=ol(e[j],e[j+1],m);return f[j](C)};return s?m=>g(Xn(e[0],e[p-1],m)):g}function a9(e,i){const s=e[e.length-1];for(let l=1;l<=i;l++){const c=ol(0,i,l);e.push(Ae(s,1,c))}}function c9(e){const i=[0];return a9(i,e.length-1),i}function d9(e,i){return e.map(s=>s*i)}function u9(e,i){return e.map(()=>i||J3).splice(0,e.length-1)}function Go({duration:e=300,keyframes:i,times:s,ease:l="easeInOut"}){const c=yy(l)?l.map(ex):ex(l),p={done:!1,value:i[0]},d=d9(s&&s.length===i.length?s:c9(i),e),f=l9(d,i,{ease:Array.isArray(c)?c:u9(i,c)});return{calculatedDuration:e,next:x=>(p.value=f(x),p.done=x>=e,p)}}const p9=e=>e!==null;function nd(e,{repeat:i,repeatType:s="loop"},l,c=1){const p=e.filter(p9),f=c<0||i&&s!=="loop"&&i%2===1?0:p.length-1;return!f||l===void 0?p[f]:l}const f9={decay:Sp,inertia:Sp,tween:Go,keyframes:Go,spring:Ec};function pg(e){typeof e.type=="string"&&(e.type=f9[e.type])}class gf{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(i=>{this.resolve=i})}notifyFinished(){this.resolve()}then(i,s){return this.finished.then(i,s)}}const h9=e=>e/100;class Dc extends gf{constructor(i){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var l,c;const{motionValue:s}=this.options;s&&s.updatedAt!==Vt.now()&&this.tick(Vt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(c=(l=this.options).onStop)==null||c.call(l))},this.options=i,this.initAnimation(),this.play(),i.autoplay===!1&&this.pause()}initAnimation(){const{options:i}=this;pg(i);const{type:s=Go,repeat:l=0,repeatDelay:c=0,repeatType:p,velocity:d=0}=i;let{keyframes:f}=i;const x=s||Go;x!==Go&&typeof f[0]!="number"&&(this.mixKeyframes=ul(h9,cg(f[0],f[1])),f=[0,100]);const g=x({...i,keyframes:f});p==="mirror"&&(this.mirroredGenerator=x({...i,keyframes:[...f].reverse(),velocity:-d})),g.calculatedDuration===null&&(g.calculatedDuration=mf(g));const{calculatedDuration:m}=g;this.calculatedDuration=m,this.resolvedDuration=m+c,this.totalDuration=this.resolvedDuration*(l+1)-c,this.generator=g}updateTime(i){const s=Math.round(i-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=s}tick(i,s=!1){const{generator:l,totalDuration:c,mixKeyframes:p,mirroredGenerator:d,resolvedDuration:f,calculatedDuration:x}=this;if(this.startTime===null)return l.next(0);const{delay:g=0,keyframes:m,repeat:j,repeatType:C,repeatDelay:k,type:S,onUpdate:T,finalKeyframe:P}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,i):this.speed<0&&(this.startTime=Math.min(i-c/this.speed,this.startTime)),s?this.currentTime=i:this.updateTime(i);const R=this.currentTime-g*(this.playbackSpeed>=0?1:-1),E=this.playbackSpeed>=0?R<0:R>c;this.currentTime=Math.max(R,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let M=this.currentTime,F=l;if(j){const z=Math.min(this.currentTime,c)/f;let J=Math.floor(z),Q=z%1;!Q&&z>=1&&(Q=1),Q===1&&J--,J=Math.min(J,j+1),!!(J%2)&&(C==="reverse"?(Q=1-Q,k&&(Q-=k/f)):C==="mirror"&&(F=d)),M=Xn(0,1,Q)*f}let O;E?(this.delayState.value=m[0],O=this.delayState):O=F.next(M),p&&!E&&(O.value=p(O.value));let{done:X}=O;!E&&x!==null&&(X=this.playbackSpeed>=0?this.currentTime>=c:this.currentTime<=0);const V=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&X);return V&&S!==Sp&&(O.value=nd(m,this.options,P,this.speed)),T&&T(O.value),V&&this.finish(),O}then(i,s){return this.finished.then(i,s)}get duration(){return wn(this.calculatedDuration)}get iterationDuration(){const{delay:i=0}=this.options||{};return this.duration+wn(i)}get time(){return wn(this.currentTime)}set time(i){i=tn(i),this.currentTime=i,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=i:this.driver&&(this.startTime=this.driver.now()-i/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=i,this.tick(i))}getGeneratorVelocity(){const i=this.currentTime;if(i<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(i);const s=this.generator.next(i).value;return ug(l=>this.generator.next(l).value,i,s)}get speed(){return this.playbackSpeed}set speed(i){const s=this.playbackSpeed!==i;s&&this.driver&&this.updateTime(Vt.now()),this.playbackSpeed=i,s&&this.driver&&(this.time=wn(this.currentTime))}play(){var c,p;if(this.isStopped)return;const{driver:i=Xy,startTime:s}=this.options;this.driver||(this.driver=i(d=>this.tick(d))),(p=(c=this.options).onPlay)==null||p.call(c);const l=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=l):this.holdTime!==null?this.startTime=l-this.holdTime:this.startTime||(this.startTime=s??l),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Vt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var i,s;this.notifyFinished(),this.teardown(),this.state="finished",(s=(i=this.options).onComplete)==null||s.call(i)}cancel(){var i,s;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(s=(i=this.options).onCancel)==null||s.call(i)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(i){return this.startTime=0,this.tick(i,!0)}attachTimeline(i){var s;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(s=this.driver)==null||s.stop(),i.observe(this)}}function x9(e){for(let i=1;i<e.length;i++)e[i]??(e[i]=e[i-1])}const wr=e=>e*180/Math.PI,kp=e=>{const i=wr(Math.atan2(e[1],e[0]));return Tp(i)},m9={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:kp,rotateZ:kp,skewX:e=>wr(Math.atan(e[1])),skewY:e=>wr(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Tp=e=>(e=e%360,e<0&&(e+=360),e),lx=kp,ax=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),cx=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),g9={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:ax,scaleY:cx,scale:e=>(ax(e)+cx(e))/2,rotateX:e=>Tp(wr(Math.atan2(e[6],e[5]))),rotateY:e=>Tp(wr(Math.atan2(-e[2],e[0]))),rotateZ:lx,rotate:lx,skewX:e=>wr(Math.atan(e[4])),skewY:e=>wr(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function $p(e){return e.includes("scale")?1:0}function Lp(e,i){if(!e||e==="none")return $p(i);const s=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let l,c;if(s)l=g9,c=s;else{const f=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);l=m9,c=f}if(!c)return $p(i);const p=l[i],d=c[1].split(",").map(y9);return typeof p=="function"?p(d):d[p]}const v9=(e,i)=>{const{transform:s="none"}=getComputedStyle(e);return Lp(s,i)};function y9(e){return parseFloat(e.trim())}const $s=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ls=new Set([...$s,"pathRotation"]),dx=e=>e===Ts||e===oe,j9=new Set(["x","y","z"]),C9=$s.filter(e=>!j9.has(e));function w9(e){const i=[];return C9.forEach(s=>{const l=e.getValue(s);l!==void 0&&(i.push([s,l.get()]),l.set(s.startsWith("scale")?1:0))}),i}const Oi={width:({x:e},{paddingLeft:i="0",paddingRight:s="0",boxSizing:l})=>{const c=e.max-e.min;return l==="border-box"?c:c-parseFloat(i)-parseFloat(s)},height:({y:e},{paddingTop:i="0",paddingBottom:s="0",boxSizing:l})=>{const c=e.max-e.min;return l==="border-box"?c:c-parseFloat(i)-parseFloat(s)},top:(e,{top:i})=>parseFloat(i),left:(e,{left:i})=>parseFloat(i),bottom:({y:e},{top:i})=>parseFloat(i)+(e.max-e.min),right:({x:e},{left:i})=>parseFloat(i)+(e.max-e.min),x:(e,{transform:i})=>Lp(i,"x"),y:(e,{transform:i})=>Lp(i,"y")};Oi.translateX=Oi.x;Oi.translateY=Oi.y;const Br=new Set;let Bp=!1,Pp=!1,Ep=!1;function fg(){if(Pp){const e=Array.from(Br).filter(l=>l.needsMeasurement),i=new Set(e.map(l=>l.element)),s=new Map;i.forEach(l=>{const c=w9(l);c.length&&(s.set(l,c),l.render())}),e.forEach(l=>l.measureInitialState()),i.forEach(l=>{l.render();const c=s.get(l);c&&c.forEach(([p,d])=>{var f;(f=l.getValue(p))==null||f.set(d)})}),e.forEach(l=>l.measureEndState()),e.forEach(l=>{l.suspendedScrollY!==void 0&&window.scrollTo(0,l.suspendedScrollY)})}Pp=!1,Bp=!1,Br.forEach(e=>e.complete(Ep)),Br.clear()}function hg(){Br.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Pp=!0)})}function b9(){Ep=!0,hg(),fg(),Ep=!1}class vf{constructor(i,s,l,c,p,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...i],this.onComplete=s,this.name=l,this.motionValue=c,this.element=p,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(Br.add(this),Bp||(Bp=!0,ze.read(hg),ze.resolveKeyframes(fg))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:i,name:s,element:l,motionValue:c}=this;if(i[0]===null){const p=c==null?void 0:c.get(),d=i[i.length-1];if(p!==void 0)i[0]=p;else if(l&&s){const f=l.readValue(s,d);f!=null&&(i[0]=f)}i[0]===void 0&&(i[0]=d),c&&p===void 0&&c.set(i[0])}x9(i)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(i=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,i),Br.delete(this)}cancel(){this.state==="scheduled"&&(Br.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const S9=e=>e.startsWith("--");function xg(e,i,s){S9(i)?e.style.setProperty(i,s):e.style[i]=s}const k9={};function mg(e,i){const s=H3(e);return()=>k9[i]??s()}const T9=mg(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),gg=mg(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Fo=([e,i,s,l])=>`cubic-bezier(${e}, ${i}, ${s}, ${l})`,ux={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Fo([0,.65,.55,1]),circOut:Fo([.55,0,1,.45]),backIn:Fo([.31,.01,.66,-.59]),backOut:Fo([.33,1.53,.69,.99])};function vg(e,i){if(e)return typeof e=="function"?gg()?dg(e,i):"ease-out":eg(e)?Fo(e):Array.isArray(e)?e.map(s=>vg(s,i)||ux.easeOut):ux[e]}function $9(e,i,s,{delay:l=0,duration:c=300,repeat:p=0,repeatType:d="loop",ease:f="easeOut",times:x}={},g=void 0){const m={[i]:s};x&&(m.offset=x);const j=vg(f,c);Array.isArray(j)&&(m.easing=j);const C={delay:l,duration:c,easing:Array.isArray(j)?"linear":j,fill:"both",iterations:p+1,direction:d==="reverse"?"alternate":"normal"};return g&&(C.pseudoElement=g),e.animate(m,C)}function yg(e){return typeof e=="function"&&"applyToOptions"in e}function L9({type:e,...i}){return yg(e)&&gg()?e.applyToOptions(i):(i.duration??(i.duration=300),i.ease??(i.ease="easeOut"),i)}class jg extends gf{constructor(i){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!i)return;const{element:s,name:l,keyframes:c,pseudoElement:p,allowFlatten:d=!1,finalKeyframe:f,onComplete:x}=i;this.isPseudoElement=!!p,this.allowFlatten=d,this.options=i,td(typeof i.type!="string");const g=L9(i);this.animation=$9(s,l,c,g,p),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!p){const m=nd(c,this.options,f,this.speed);this.updateMotionValue&&this.updateMotionValue(m),xg(s,l,m),this.animation.cancel()}x==null||x(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var i,s;(s=(i=this.animation).finish)==null||s.call(i)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:i}=this;i==="idle"||i==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var s,l,c;const i=(s=this.options)==null?void 0:s.element;!this.isPseudoElement&&(i!=null&&i.isConnected)&&((c=(l=this.animation).commitStyles)==null||c.call(l))}get duration(){var s,l;const i=((l=(s=this.animation.effect)==null?void 0:s.getComputedTiming)==null?void 0:l.call(s).duration)||0;return wn(Number(i))}get iterationDuration(){const{delay:i=0}=this.options||{};return this.duration+wn(i)}get time(){return wn(Number(this.animation.currentTime)||0)}set time(i){const s=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=tn(i),s&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(i){i<0&&(this.finishedTime=null),this.animation.playbackRate=i}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(i){this.manualStartTime=this.animation.startTime=i}attachTimeline({timeline:i,rangeStart:s,rangeEnd:l,observe:c}){var p;return this.allowFlatten&&((p=this.animation.effect)==null||p.updateTiming({easing:"linear"})),this.animation.onfinish=null,i&&T9()?(this.animation.timeline=i,s&&(this.animation.rangeStart=s),l&&(this.animation.rangeEnd=l),bn):c(this)}}const Cg={anticipate:Y3,backInOut:q3,circInOut:Q3};function B9(e){return e in Cg}function P9(e){typeof e.ease=="string"&&B9(e.ease)&&(e.ease=Cg[e.ease])}const y1=10;class E9 extends jg{constructor(i){P9(i),pg(i),super(i),i.startTime!==void 0&&i.autoplay!==!1&&(this.startTime=i.startTime),this.options=i}updateMotionValue(i){const{motionValue:s,onUpdate:l,onComplete:c,element:p,...d}=this.options;if(!s)return;if(i!==void 0){s.set(i);return}const f=new Dc({...d,autoplay:!1}),x=Math.max(y1,Vt.now()-this.startTime),g=Xn(0,y1,x-y1),m=f.sample(x).value,{name:j}=this.options;p&&j&&xg(p,j,m),s.setWithVelocity(f.sample(Math.max(0,x-g)).value,m,g),f.stop()}}const px=(e,i)=>i==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Vn.test(e)||e==="0")&&!e.startsWith("url("));function D9(e){const i=e[0];if(e.length===1)return!0;for(let s=0;s<e.length;s++)if(e[s]!==i)return!0}function R9(e,i,s,l){const c=e[0];if(c===null)return!1;if(i==="display"||i==="visibility")return!0;const p=e[e.length-1],d=px(c,i),f=px(p,i);return!d||!f?!1:D9(e)||(s==="spring"||yg(s))&&l}function Dp(e){e.duration=0,e.type="keyframes"}const wg=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),I9=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function A9(e){for(let i=0;i<e.length;i++)if(typeof e[i]=="string"&&I9.test(e[i]))return!0;return!1}const z9=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),M9=H3(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function V9(e){var j;const{motionValue:i,name:s,repeatDelay:l,repeatType:c,damping:p,type:d,keyframes:f}=e,x=(j=i==null?void 0:i.owner)==null?void 0:j.current;if(!(x instanceof HTMLElement)&&!(x instanceof SVGElement))return!1;const{onUpdate:g,transformTemplate:m}=i.owner.getProps();return M9()&&s&&(wg.has(s)||z9.has(s)&&A9(f))&&(s!=="transform"||!m)&&!g&&!l&&c!=="mirror"&&p!==0&&d!=="inertia"}const F9=40;class N9 extends gf{constructor({autoplay:i=!0,delay:s=0,type:l="keyframes",repeat:c=0,repeatDelay:p=0,repeatType:d="loop",keyframes:f,name:x,motionValue:g,element:m,...j}){var S;super(),this.stop=()=>{var T,P;this._animation&&(this._animation.stop(),(T=this.stopTimeline)==null||T.call(this)),(P=this.keyframeResolver)==null||P.cancel()},this.createdAt=Vt.now();const C={autoplay:i,delay:s,type:l,repeat:c,repeatDelay:p,repeatType:d,name:x,motionValue:g,element:m,...j},k=(m==null?void 0:m.KeyframeResolver)||vf;this.keyframeResolver=new k(f,(T,P,R)=>this.onKeyframesResolved(T,P,C,!R),x,g,m),(S=this.keyframeResolver)==null||S.scheduleResolve()}onKeyframesResolved(i,s,l,c){var R,E;this.keyframeResolver=void 0;const{name:p,type:d,velocity:f,delay:x,isHandoff:g,onUpdate:m}=l;this.resolvedAt=Vt.now();let j=!0;R9(i,p,d,f)||(j=!1,(Wi.instantAnimations||!x)&&(m==null||m(nd(i,l,s))),i[0]=i[i.length-1],Dp(l),l.repeat=0);const k={startTime:c?this.resolvedAt?this.resolvedAt-this.createdAt>F9?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:s,...l,keyframes:i},S=j&&!g&&V9(k),T=(E=(R=k.motionValue)==null?void 0:R.owner)==null?void 0:E.current;let P;if(S)try{P=new E9({...k,element:T})}catch{P=new Dc(k)}else P=new Dc(k);P.finished.then(()=>{this.notifyFinished()}).catch(bn),this.pendingTimeline&&(this.stopTimeline=P.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=P}get finished(){return this._animation?this.animation.finished:this._finished}then(i,s){return this.finished.finally(i).then(()=>{})}get animation(){var i;return this._animation||((i=this.keyframeResolver)==null||i.resume(),b9()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(i){this.animation.time=i}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(i){this.animation.speed=i}get startTime(){return this.animation.startTime}attachTimeline(i){return this._animation?this.stopTimeline=this.animation.attachTimeline(i):this.pendingTimeline=i,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var i;this._animation&&this.animation.cancel(),(i=this.keyframeResolver)==null||i.cancel()}}function bg(e,i,s,l=0,c=1){const p=Array.from(e).sort((g,m)=>g.sortNodePosition(m)).indexOf(i),d=e.size,f=(d-1)*l;return typeof s=="function"?s(p,d):c===1?p*l:f-p*l}const fx=30,O9=e=>!isNaN(parseFloat(e));class _9{constructor(i,s={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=l=>{var p;const c=Vt.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(l),this.current!==this.prev&&((p=this.events.change)==null||p.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(i),this.owner=s.owner}setCurrent(i){this.current=i,this.updatedAt=Vt.now(),this.canTrackVelocity===null&&i!==void 0&&(this.canTrackVelocity=O9(this.current))}setPrevFrameValue(i=this.current){this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt}onChange(i){return this.on("change",i)}on(i,s){this.events[i]||(this.events[i]=new cf);const l=this.events[i].add(s);return i==="change"?()=>{l(),ze.read(()=>{this.events.change.getSize()||this.stop()})}:l}clearListeners(){for(const i in this.events)this.events[i].clear()}attach(i,s){this.passiveEffect=i,this.stopPassiveEffect=s}set(i){this.passiveEffect?this.passiveEffect(i,this.updateAndNotify):this.updateAndNotify(i)}setWithVelocity(i,s,l){this.set(s),this.prev=void 0,this.prevFrameValue=i,this.prevUpdatedAt=this.updatedAt-l}jump(i,s=!0){this.updateAndNotify(i),this.prev=i,this.prevUpdatedAt=this.prevFrameValue=void 0,s&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var i;(i=this.events.change)==null||i.notify(this.current)}addDependent(i){this.dependents||(this.dependents=new Set),this.dependents.add(i)}removeDependent(i){this.dependents&&this.dependents.delete(i)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const i=Vt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||i-this.updatedAt>fx)return 0;const s=Math.min(this.updatedAt-this.prevUpdatedAt,fx);return W3(parseFloat(this.current)-parseFloat(this.prevFrameValue),s)}start(i){return this.stop(),new Promise(s=>{this.hasAnimated=!0,this.animation=i(s),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var i,s;(i=this.dependents)==null||i.clear(),(s=this.events.destroy)==null||s.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ws(e,i){return new _9(e,i)}function Sg(e,i){if(e!=null&&e.inherit&&i){const{inherit:s,...l}=e;return{...i,...l}}return e}function yf(e,i){const s=(e==null?void 0:e[i])??(e==null?void 0:e.default)??e;return s!==e?Sg(s,e):s}const H9={type:"spring",stiffness:500,damping:25,restSpeed:10},W9=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),U9={type:"keyframes",duration:.8},Z9={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},G9=(e,{keyframes:i})=>i.length>2?U9:Ls.has(e)?e.startsWith("scale")?W9(i[1]):H9:Z9,K9=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function q9(e){for(const i in e)if(!K9.has(i))return!0;return!1}const jf=(e,i,s,l={},c,p)=>d=>{const f=yf(l,e)||{},x=f.delay||l.delay||0;let{elapsed:g=0}=l;g=g-tn(x);const m={keyframes:Array.isArray(s)?s:[null,s],ease:"easeOut",velocity:i.getVelocity(),...f,delay:-g,onUpdate:C=>{i.set(C),f.onUpdate&&f.onUpdate(C)},onComplete:()=>{d(),f.onComplete&&f.onComplete()},name:e,motionValue:i,element:p?void 0:c};q9(f)||Object.assign(m,G9(e,m)),m.duration&&(m.duration=tn(m.duration)),m.repeatDelay&&(m.repeatDelay=tn(m.repeatDelay)),m.from!==void 0&&(m.keyframes[0]=m.from);let j=!1;if((m.type===!1||m.duration===0&&!m.repeatDelay)&&(Dp(m),m.delay===0&&(j=!0)),(Wi.instantAnimations||Wi.skipAnimations||c!=null&&c.shouldSkipAnimations||f.skipAnimations)&&(j=!0,Dp(m),m.delay=0),m.allowFlatten=!f.type&&!f.ease,j&&!p&&i.get()!==void 0){const C=nd(m.keyframes,f);if(C!==void 0){ze.update(()=>{m.onUpdate(C),m.onComplete()});return}}return f.isSync?new Dc(m):new N9(m)},Y9=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function X9(e){const i=Y9.exec(e);if(!i)return[,];const[,s,l,c]=i;return[`--${s??l}`,c]}function kg(e,i,s=1){const[l,c]=X9(e);if(!l)return;const p=window.getComputedStyle(i).getPropertyValue(l);if(p){const d=p.trim();return N3(d)?parseFloat(d):d}return pf(c)?kg(c,i,s+1):c}function hx(e){const i=[{},{}];return e==null||e.values.forEach((s,l)=>{i[0][l]=s.get(),i[1][l]=s.getVelocity()}),i}function Cf(e,i,s,l){if(typeof i=="function"){const[c,p]=hx(l);i=i(s!==void 0?s:e.custom,c,p)}if(typeof i=="string"&&(i=e.variants&&e.variants[i]),typeof i=="function"){const[c,p]=hx(l);i=i(s!==void 0?s:e.custom,c,p)}return i}function Pr(e,i,s){const l=e.getProps();return Cf(l,i,s!==void 0?s:l.custom,e)}const Tg=new Set(["width","height","top","left","right","bottom",...$s]),Rp=e=>Array.isArray(e);function Q9(e,i,s){e.hasValue(i)?e.getValue(i).set(s):e.addValue(i,ws(s))}function J9(e){return Rp(e)?e[e.length-1]||0:e}function e7(e,i){const s=Pr(e,i);let{transitionEnd:l={},transition:c={},...p}=s||{};p={...p,...l};for(const d in p){const f=J9(p[d]);Q9(e,d,f)}}const kt=e=>!!(e&&e.getVelocity);function t7(e){return!!(kt(e)&&e.add)}function Ip(e,i){const s=e.getValue("willChange");if(t7(s))return s.add(i);if(!s&&Wi.WillChange){const l=new Wi.WillChange("auto");e.addValue("willChange",l),l.add(i)}}function wf(e){return e.replace(/([A-Z])/g,i=>`-${i.toLowerCase()}`)}const n7="framerAppearId",$g="data-"+wf(n7);function Lg(e){return e.props[$g]}function i7({protectedKeys:e,needsAnimating:i},s){const l=e.hasOwnProperty(s)&&i[s]!==!0;return i[s]=!1,l}function Bg(e,i,{delay:s=0,transitionOverride:l,type:c}={}){let{transition:p,transitionEnd:d,...f}=i;const x=e.getDefaultTransition();p=p?Sg(p,x):x;const g=p==null?void 0:p.reduceMotion,m=p==null?void 0:p.skipAnimations;l&&(p=l);const j=[],C=c&&e.animationState&&e.animationState.getState()[c],k=p==null?void 0:p.path;k&&k.animateVisualElement(e,f,p,s,j);for(const S in f){const T=e.getValue(S,e.latestValues[S]??null),P=f[S];if(P===void 0||C&&i7(C,S))continue;const R={delay:s,...yf(p||{},S)};m&&(R.skipAnimations=!0);const E=T.get();if(E!==void 0&&!T.isAnimating()&&!Array.isArray(P)&&P===E&&!R.velocity){ze.update(()=>T.set(P));continue}let M=!1;if(window.MotionHandoffAnimation){const X=Lg(e);if(X){const V=window.MotionHandoffAnimation(X,S,ze);V!==null&&(R.startTime=V,M=!0)}}Ip(e,S);const F=g??e.shouldReduceMotion;T.start(jf(S,T,P,F&&Tg.has(S)?{type:!1}:R,e,M));const O=T.animation;O&&j.push(O)}if(d){const S=()=>ze.update(()=>{d&&e7(e,d)});j.length?Promise.all(j).then(S):S()}return j}function Ap(e,i,s={}){var x;const l=Pr(e,i,s.type==="exit"?(x=e.presenceContext)==null?void 0:x.custom:void 0);let{transition:c=e.getDefaultTransition()||{}}=l||{};s.transitionOverride&&(c=s.transitionOverride);const p=l?()=>Promise.all(Bg(e,l,s)):()=>Promise.resolve(),d=e.variantChildren&&e.variantChildren.size?(g=0)=>{const{delayChildren:m=0,staggerChildren:j,staggerDirection:C}=c;return r7(e,i,g,m,j,C,s)}:()=>Promise.resolve(),{when:f}=c;if(f){const[g,m]=f==="beforeChildren"?[p,d]:[d,p];return g().then(()=>m())}else return Promise.all([p(),d(s.delay)])}function r7(e,i,s=0,l=0,c=0,p=1,d){const f=[];for(const x of e.variantChildren)x.notify("AnimationStart",i),f.push(Ap(x,i,{...d,delay:s+(typeof l=="function"?0:l)+bg(e.variantChildren,x,l,c,p)}).then(()=>x.notify("AnimationComplete",i)));return Promise.all(f)}function s7(e,i,s={}){e.notify("AnimationStart",i);let l;if(Array.isArray(i)){const c=i.map(p=>Ap(e,p,s));l=Promise.all(c)}else if(typeof i=="string")l=Ap(e,i,s);else{const c=typeof i=="function"?Pr(e,i,s.custom):i;l=Promise.all(Bg(e,c,s))}return l.then(()=>{e.notify("AnimationComplete",i)})}const o7={test:e=>e==="auto",parse:e=>e},Pg=e=>i=>i.test(e),Eg=[Ts,oe,Yn,ui,Dy,Ey,o7],xx=e=>Eg.find(Pg(e));function l7(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||_3(e):!0}const a7=new Set(["brightness","contrast","saturate","opacity"]);function c7(e){const[i,s]=e.slice(0,-1).split("(");if(i==="drop-shadow")return e;const[l]=s.match(ff)||[];if(!l)return e;const c=s.replace(l,"");let p=a7.has(i)?1:0;return l!==s&&(p*=100),i+"("+p+c+")"}const d7=/\b([a-z-]*)\(.*?\)/gu,zp={...Vn,getAnimatableNone:e=>{const i=e.match(d7);return i?i.map(c7).join(" "):e}},Mp={...Vn,getAnimatableNone:e=>{const i=Vn.parse(e);return Vn.createTransformer(e)(i.map(l=>typeof l=="number"?0:typeof l=="object"?{...l,alpha:1}:l))}},mx={...Ts,transform:Math.round},u7={rotate:ui,pathRotation:ui,rotateX:ui,rotateY:ui,rotateZ:ui,scale:La,scaleX:La,scaleY:La,scaleZ:La,skew:ui,skewX:ui,skewY:ui,distance:oe,translateX:oe,translateY:oe,translateZ:oe,x:oe,y:oe,z:oe,perspective:oe,transformPerspective:oe,opacity:ll,originX:nx,originY:nx,originZ:oe},Rc={borderWidth:oe,borderTopWidth:oe,borderRightWidth:oe,borderBottomWidth:oe,borderLeftWidth:oe,borderRadius:oe,borderTopLeftRadius:oe,borderTopRightRadius:oe,borderBottomRightRadius:oe,borderBottomLeftRadius:oe,width:oe,maxWidth:oe,height:oe,maxHeight:oe,top:oe,right:oe,bottom:oe,left:oe,inset:oe,insetBlock:oe,insetBlockStart:oe,insetBlockEnd:oe,insetInline:oe,insetInlineStart:oe,insetInlineEnd:oe,padding:oe,paddingTop:oe,paddingRight:oe,paddingBottom:oe,paddingLeft:oe,paddingBlock:oe,paddingBlockStart:oe,paddingBlockEnd:oe,paddingInline:oe,paddingInlineStart:oe,paddingInlineEnd:oe,margin:oe,marginTop:oe,marginRight:oe,marginBottom:oe,marginLeft:oe,marginBlock:oe,marginBlockStart:oe,marginBlockEnd:oe,marginInline:oe,marginInlineStart:oe,marginInlineEnd:oe,fontSize:oe,backgroundPositionX:oe,backgroundPositionY:oe,...u7,zIndex:mx,fillOpacity:ll,strokeOpacity:ll,numOctaves:mx},p7={...Rc,color:tt,backgroundColor:tt,outlineColor:tt,fill:tt,stroke:tt,borderColor:tt,borderTopColor:tt,borderRightColor:tt,borderBottomColor:tt,borderLeftColor:tt,filter:zp,WebkitFilter:zp,mask:Mp,WebkitMask:Mp},Dg=e=>p7[e],f7=new Set([zp,Mp]);function Rg(e,i){let s=Dg(e);return f7.has(s)||(s=Vn),s.getAnimatableNone?s.getAnimatableNone(i):void 0}const h7=new Set(["auto","none","0"]);function x7(e,i,s){let l=0,c;for(;l<e.length&&!c;){const p=e[l];typeof p=="string"&&!h7.has(p)&&Cs(p).values.length&&(c=e[l]),l++}if(c&&s)for(const p of i)e[p]=Rg(s,c)}class m7 extends vf{constructor(i,s,l,c,p){super(i,s,l,c,p,!0)}readKeyframes(){const{unresolvedKeyframes:i,element:s,name:l}=this;if(!s||!s.current)return;super.readKeyframes();for(let m=0;m<i.length;m++){let j=i[m];if(typeof j=="string"&&(j=j.trim(),pf(j))){const C=kg(j,s.current);C!==void 0&&(i[m]=C),m===i.length-1&&(this.finalKeyframe=j)}}if(this.resolveNoneKeyframes(),!Tg.has(l)||i.length!==2)return;const[c,p]=i,d=xx(c),f=xx(p),x=tx(c),g=tx(p);if(x!==g&&Oi[l]){this.needsMeasurement=!0;return}if(d!==f)if(dx(d)&&dx(f))for(let m=0;m<i.length;m++){const j=i[m];typeof j=="string"&&(i[m]=parseFloat(j))}else Oi[l]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:i,name:s}=this,l=[];for(let c=0;c<i.length;c++)(i[c]===null||l7(i[c]))&&l.push(c);l.length&&x7(i,l,s)}measureInitialState(){const{element:i,unresolvedKeyframes:s,name:l}=this;if(!i||!i.current)return;l==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Oi[l](i.measureViewportBox(),window.getComputedStyle(i.current)),s[0]=this.measuredOrigin;const c=s[s.length-1];c!==void 0&&i.getValue(l,c).jump(c,!1)}measureEndState(){var f;const{element:i,name:s,unresolvedKeyframes:l}=this;if(!i||!i.current)return;const c=i.getValue(s);c&&c.jump(this.measuredOrigin,!1);const p=l.length-1,d=l[p];l[p]=Oi[s](i.measureViewportBox(),window.getComputedStyle(i.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(f=this.removedTransforms)!=null&&f.length&&this.removedTransforms.forEach(([x,g])=>{i.getValue(x).set(g)}),this.resolveNoneKeyframes()}}const bf=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"];function Ig(e,i,s){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e=="string"){let l=document;const c=(s==null?void 0:s[e])??l.querySelectorAll(e);return c?Array.from(c):[]}return Array.from(e).filter(l=>l!=null)}const Vp=(e,i)=>i&&typeof e=="number"?i.transform(e):e;function pc(e){return O3(e)&&"offsetHeight"in e&&!("ownerSVGElement"in e)}const{schedule:Sf}=tg(queueMicrotask,!1),Rn={x:!1,y:!1};function Ag(){return Rn.x||Rn.y}function g7(e){return e==="x"||e==="y"?Rn[e]?null:(Rn[e]=!0,()=>{Rn[e]=!1}):Rn.x||Rn.y?null:(Rn.x=Rn.y=!0,()=>{Rn.x=Rn.y=!1})}function zg(e,i){const s=Ig(e),l=new AbortController,c={passive:!0,...i,signal:l.signal};return[s,c,()=>l.abort()]}function v7(e){return!(e.pointerType==="touch"||Ag())}function y7(e,i,s={}){const[l,c,p]=zg(e,s);return l.forEach(d=>{let f=!1,x=!1,g;const m=()=>{d.removeEventListener("pointerleave",S)},j=P=>{g&&(g(P),g=void 0),m()},C=P=>{f=!1,window.removeEventListener("pointerup",C),window.removeEventListener("pointercancel",C),x&&(x=!1,j(P))},k=()=>{f=!0,window.addEventListener("pointerup",C,c),window.addEventListener("pointercancel",C,c)},S=P=>{if(P.pointerType!=="touch"){if(f){x=!0;return}j(P)}},T=P=>{if(!v7(P))return;x=!1;const R=i(d,P);typeof R=="function"&&(g=R,d.addEventListener("pointerleave",S,c))};d.addEventListener("pointerenter",T,c),d.addEventListener("pointerdown",k,c)}),p}const Mg=(e,i)=>i?e===i?!0:Mg(e,i.parentElement):!1,kf=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,j7=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function C7(e){return j7.has(e.tagName)||e.isContentEditable===!0}const w7=new Set(["INPUT","SELECT","TEXTAREA"]);function b7(e){return w7.has(e.tagName)||e.isContentEditable===!0}const fc=new WeakSet;function gx(e){return i=>{i.key==="Enter"&&e(i)}}function j1(e,i){e.dispatchEvent(new PointerEvent("pointer"+i,{isPrimary:!0,bubbles:!0}))}const S7=(e,i)=>{const s=e.currentTarget;if(!s)return;const l=gx(()=>{if(fc.has(s))return;j1(s,"down");const c=gx(()=>{j1(s,"up")}),p=()=>j1(s,"cancel");s.addEventListener("keyup",c,i),s.addEventListener("blur",p,i)});s.addEventListener("keydown",l,i),s.addEventListener("blur",()=>s.removeEventListener("keydown",l),i)};function vx(e){return kf(e)&&!Ag()}const yx=new WeakSet;function k7(e,i,s={}){const[l,c,p]=zg(e,s),d=f=>{const x=f.currentTarget;if(!vx(f)||yx.has(f))return;fc.add(x),s.stopPropagation&&yx.add(f);const g=i(x,f),m={...c,capture:!0},j=(S,T)=>{window.removeEventListener("pointerup",C,m),window.removeEventListener("pointercancel",k,m),fc.has(x)&&fc.delete(x),vx(S)&&typeof g=="function"&&g(S,{success:T})},C=S=>{j(S,x===window||x===document||s.useGlobalTarget||Mg(x,S.target))},k=S=>{j(S,!1)};window.addEventListener("pointerup",C,m),window.addEventListener("pointercancel",k,m)};return l.forEach(f=>{(s.useGlobalTarget?window:f).addEventListener("pointerdown",d,c),pc(f)&&(f.addEventListener("focus",g=>S7(g,c)),!C7(f)&&!f.hasAttribute("tabindex")&&(f.tabIndex=0))}),p}function Tf(e){return O3(e)&&"ownerSVGElement"in e}const hc=new WeakMap;let Vi;const Vg=(e,i,s)=>(l,c)=>c&&c[0]?c[0][e+"Size"]:Tf(l)&&"getBBox"in l?l.getBBox()[i]:l[s],T7=Vg("inline","width","offsetWidth"),$7=Vg("block","height","offsetHeight");function L7({target:e,borderBoxSize:i}){var s;(s=hc.get(e))==null||s.forEach(l=>{l(e,{get width(){return T7(e,i)},get height(){return $7(e,i)}})})}function B7(e){e.forEach(L7)}function P7(){typeof ResizeObserver>"u"||(Vi=new ResizeObserver(B7))}function E7(e,i){Vi||P7();const s=Ig(e);return s.forEach(l=>{let c=hc.get(l);c||(c=new Set,hc.set(l,c)),c.add(i),Vi==null||Vi.observe(l)}),()=>{s.forEach(l=>{const c=hc.get(l);c==null||c.delete(i),c!=null&&c.size||Vi==null||Vi.unobserve(l)})}}const xc=new Set;let us;function D7(){us=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};xc.forEach(i=>i(e))},window.addEventListener("resize",us)}function R7(e){return xc.add(e),us||D7(),()=>{xc.delete(e),!xc.size&&typeof us=="function"&&(window.removeEventListener("resize",us),us=void 0)}}function jx(e,i){return typeof e=="function"?R7(e):E7(e,i)}function I7(e){return Tf(e)&&e.tagName==="svg"}const A7=[...Eg,tt,Vn],z7=e=>A7.find(Pg(e)),Cx=()=>({translate:0,scale:1,origin:0,originPoint:0}),ps=()=>({x:Cx(),y:Cx()}),wx=()=>({min:0,max:0}),at=()=>({x:wx(),y:wx()}),M7=new WeakMap;function id(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function al(e){return typeof e=="string"||Array.isArray(e)}const $f=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Lf=["initial",...$f];function rd(e){return id(e.animate)||Lf.some(i=>al(e[i]))}function Fg(e){return!!(rd(e)||e.variants)}function V7(e,i,s){for(const l in i){const c=i[l],p=s[l];if(kt(c))e.addValue(l,c);else if(kt(p))e.addValue(l,ws(c,{owner:e}));else if(p!==c)if(e.hasValue(l)){const d=e.getValue(l);d.liveStyle===!0?d.jump(c):d.hasAnimated||d.set(c)}else{const d=e.getStaticValue(l);e.addValue(l,ws(d!==void 0?d:c,{owner:e}))}}for(const l in s)i[l]===void 0&&e.removeValue(l);return i}const Fp={current:null},Ng={current:!1},F7=typeof window<"u";function N7(){if(Ng.current=!0,!!F7)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),i=()=>Fp.current=e.matches;e.addEventListener("change",i),i()}else Fp.current=!1}const bx=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let Ic={};function Og(e){Ic=e}function O7(){return Ic}class _7{scrapeMotionValuesFromProps(i,s,l){return{}}constructor({parent:i,props:s,presenceContext:l,reducedMotionConfig:c,skipAnimations:p,blockInitialAnimation:d,visualState:f},x={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=vf,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const k=Vt.now();this.renderScheduledAt<k&&(this.renderScheduledAt=k,ze.render(this.render,!1,!0))};const{latestValues:g,renderState:m}=f;this.latestValues=g,this.baseTarget={...g},this.initialValues=s.initial?{...g}:{},this.renderState=m,this.parent=i,this.props=s,this.presenceContext=l,this.depth=i?i.depth+1:0,this.reducedMotionConfig=c,this.skipAnimationsConfig=p,this.options=x,this.blockInitialAnimation=!!d,this.isControllingVariants=rd(s),this.isVariantNode=Fg(s),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(i&&i.current);const{willChange:j,...C}=this.scrapeMotionValuesFromProps(s,{},this);for(const k in C){const S=C[k];g[k]!==void 0&&kt(S)&&S.set(g[k])}}mount(i){var s,l;if(this.hasBeenMounted)for(const c in this.initialValues)(s=this.values.get(c))==null||s.jump(this.initialValues[c]),this.latestValues[c]=this.initialValues[c];this.current=i,M7.set(i,this),this.projection&&!this.projection.instance&&this.projection.mount(i),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((c,p)=>this.bindToMotionValue(p,c)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(Ng.current||N7(),this.shouldReduceMotion=Fp.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(l=this.parent)==null||l.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var i;this.projection&&this.projection.unmount(),Ui(this.notifyUpdate),Ui(this.render),this.valueSubscriptions.forEach(s=>s()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(i=this.parent)==null||i.removeChild(this);for(const s in this.events)this.events[s].clear();for(const s in this.features){const l=this.features[s];l&&(l.unmount(),l.isMounted=!1)}this.current=null}addChild(i){this.children.add(i),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(i)}removeChild(i){this.children.delete(i),this.enteringChildren&&this.enteringChildren.delete(i)}bindToMotionValue(i,s){if(this.valueSubscriptions.has(i)&&this.valueSubscriptions.get(i)(),s.accelerate&&wg.has(i)&&this.current instanceof HTMLElement){const{factory:d,keyframes:f,times:x,ease:g,duration:m}=s.accelerate,j=new jg({element:this.current,name:i,keyframes:f,times:x,ease:g,duration:tn(m)}),C=d(j);this.valueSubscriptions.set(i,()=>{C(),j.cancel()});return}const l=Ls.has(i);l&&this.onBindTransform&&this.onBindTransform();const c=s.on("change",d=>{this.latestValues[i]=d,this.props.onUpdate&&ze.preRender(this.notifyUpdate),l&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let p;typeof window<"u"&&window.MotionCheckAppearSync&&(p=window.MotionCheckAppearSync(this,i,s)),this.valueSubscriptions.set(i,()=>{c(),p&&p()})}sortNodePosition(i){return!this.current||!this.sortInstanceNodePosition||this.type!==i.type?0:this.sortInstanceNodePosition(this.current,i.current)}updateFeatures(){let i="animation";for(i in Ic){const s=Ic[i];if(!s)continue;const{isEnabled:l,Feature:c}=s;if(!this.features[i]&&c&&l(this.props)&&(this.features[i]=new c(this)),this.features[i]){const p=this.features[i];p.isMounted?p.update():(p.mount(),p.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):at()}getStaticValue(i){return this.latestValues[i]}setStaticValue(i,s){this.latestValues[i]=s}update(i,s){(i.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=i,this.prevPresenceContext=this.presenceContext,this.presenceContext=s;for(let l=0;l<bx.length;l++){const c=bx[l];this.propEventSubscriptions[c]&&(this.propEventSubscriptions[c](),delete this.propEventSubscriptions[c]);const p="on"+c,d=i[p];d&&(this.propEventSubscriptions[c]=this.on(c,d))}this.prevMotionValues=V7(this,this.scrapeMotionValuesFromProps(i,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(i){return this.props.variants?this.props.variants[i]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(i){const s=this.getClosestVariantNode();if(s)return s.variantChildren&&s.variantChildren.add(i),()=>s.variantChildren.delete(i)}addValue(i,s){const l=this.values.get(i);s!==l&&(l&&this.removeValue(i),this.bindToMotionValue(i,s),this.values.set(i,s),this.latestValues[i]=s.get())}removeValue(i){this.values.delete(i);const s=this.valueSubscriptions.get(i);s&&(s(),this.valueSubscriptions.delete(i)),delete this.latestValues[i],this.removeValueFromRenderState(i,this.renderState)}hasValue(i){return this.values.has(i)}getValue(i,s){if(this.props.values&&this.props.values[i])return this.props.values[i];let l=this.values.get(i);return l===void 0&&s!==void 0&&(l=ws(s===null?void 0:s,{owner:this}),this.addValue(i,l)),l}readValue(i,s){let l=this.latestValues[i]!==void 0||!this.current?this.latestValues[i]:this.getBaseTargetFromProps(this.props,i)??this.readValueFromInstance(this.current,i,this.options);return l!=null&&(typeof l=="string"&&(N3(l)||_3(l))?l=parseFloat(l):!z7(l)&&Vn.test(s)&&(l=Rg(i,s)),this.setBaseTarget(i,kt(l)?l.get():l)),kt(l)?l.get():l}setBaseTarget(i,s){this.baseTarget[i]=s}getBaseTarget(i){var p;const{initial:s}=this.props;let l;if(typeof s=="string"||typeof s=="object"){const d=Cf(this.props,s,(p=this.presenceContext)==null?void 0:p.custom);d&&(l=d[i])}if(s&&l!==void 0)return l;const c=this.getBaseTargetFromProps(this.props,i);return c!==void 0&&!kt(c)?c:this.initialValues[i]!==void 0&&l===void 0?void 0:this.baseTarget[i]}on(i,s){return this.events[i]||(this.events[i]=new cf),this.events[i].add(s)}notify(i,...s){this.events[i]&&this.events[i].notify(...s)}scheduleRenderMicrotask(){Sf.render(this.render)}}class _g extends _7{constructor(){super(...arguments),this.KeyframeResolver=m7}sortInstanceNodePosition(i,s){return i.compareDocumentPosition(s)&2?1:-1}getBaseTargetFromProps(i,s){const l=i.style;return l?l[s]:void 0}removeValueFromRenderState(i,{vars:s,style:l}){delete s[i],delete l[i]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:i}=this.props;kt(i)&&(this.childSubscription=i.on("change",s=>{this.current&&(this.current.textContent=`${s}`)}))}}class Zi{constructor(i){this.isMounted=!1,this.node=i}update(){}}function Hg({top:e,left:i,right:s,bottom:l}){return{x:{min:i,max:s},y:{min:e,max:l}}}function H7({x:e,y:i}){return{top:i.min,right:e.max,bottom:i.max,left:e.min}}function W7(e,i){if(!i)return e;const s=i({x:e.left,y:e.top}),l=i({x:e.right,y:e.bottom});return{top:s.y,left:s.x,bottom:l.y,right:l.x}}function C1(e){return e===void 0||e===1}function Np({scale:e,scaleX:i,scaleY:s}){return!C1(e)||!C1(i)||!C1(s)}function gr(e){return Np(e)||Wg(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Wg(e){return Sx(e.x)||Sx(e.y)}function Sx(e){return e&&e!=="0%"}function Ac(e,i,s){const l=e-s,c=i*l;return s+c}function kx(e,i,s,l,c){return c!==void 0&&(e=Ac(e,c,l)),Ac(e,s,l)+i}function Op(e,i=0,s=1,l,c){e.min=kx(e.min,i,s,l,c),e.max=kx(e.max,i,s,l,c)}function Ug(e,{x:i,y:s}){Op(e.x,i.translate,i.scale,i.originPoint),Op(e.y,s.translate,s.scale,s.originPoint)}const Tx=.999999999999,$x=1.0000000000001;function U7(e,i,s,l=!1){var f;const c=s.length;if(!c)return;i.x=i.y=1;let p,d;for(let x=0;x<c;x++){p=s[x],d=p.projectionDelta;const{visualElement:g}=p.options;g&&g.props.style&&g.props.style.display==="contents"||(l&&p.options.layoutScroll&&p.scroll&&p!==p.root&&(Zn(e.x,-p.scroll.offset.x),Zn(e.y,-p.scroll.offset.y)),d&&(i.x*=d.x.scale,i.y*=d.y.scale,Ug(e,d)),l&&gr(p.latestValues)&&mc(e,p.latestValues,(f=p.layout)==null?void 0:f.layoutBox))}i.x<$x&&i.x>Tx&&(i.x=1),i.y<$x&&i.y>Tx&&(i.y=1)}function Zn(e,i){e.min+=i,e.max+=i}function Lx(e,i,s,l,c=.5){const p=Ae(e.min,e.max,c);Op(e,i,s,p,l)}function Bx(e,i){return typeof e=="string"?parseFloat(e)/100*(i.max-i.min):e}function mc(e,i,s){const l=s??e;Lx(e.x,Bx(i.x,l.x),i.scaleX,i.scale,i.originX),Lx(e.y,Bx(i.y,l.y),i.scaleY,i.scale,i.originY)}function Zg(e,i){return Hg(W7(e.getBoundingClientRect(),i))}function Z7(e,i,s){const l=Zg(e,s),{scroll:c}=i;return c&&(Zn(l.x,c.offset.x),Zn(l.y,c.offset.y)),l}const G7={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},K7=$s.length;function q7(e,i,s){let l="",c=!0;for(let d=0;d<K7;d++){const f=$s[d],x=e[f];if(x===void 0)continue;let g=!0;if(typeof x=="number")g=x===(f.startsWith("scale")?1:0);else{const m=parseFloat(x);g=f.startsWith("scale")?m===1:m===0}if(!g||s){const m=Vp(x,Rc[f]);if(!g){c=!1;const j=G7[f]||f;l+=`${j}(${m}) `}s&&(i[f]=m)}}const p=e.pathRotation;return p&&(c=!1,l+=`rotate(${Vp(p,Rc.pathRotation)}) `),l=l.trim(),s?l=s(i,c?"":l):c&&(l="none"),l}function Bf(e,i,s){const{style:l,vars:c,transformOrigin:p}=e;let d=!1,f=!1;for(const x in i){const g=i[x];if(Ls.has(x)){d=!0;continue}else if(ig(x)){c[x]=g;continue}else{const m=Vp(g,Rc[x]);x.startsWith("origin")?(f=!0,p[x]=m):l[x]=m}}if(i.transform||(d||s?l.transform=q7(i,e.transform,s):l.transform&&(l.transform="none")),f){const{originX:x="50%",originY:g="50%",originZ:m=0}=p;l.transformOrigin=`${x} ${g} ${m}`}}function Gg(e,{style:i,vars:s},l,c){const p=e.style;let d;for(d in i)p[d]=i[d];c==null||c.applyProjectionStyles(p,l);for(d in s)p.setProperty(d,s[d])}function Px(e,i){return i.max===i.min?0:e/(i.max-i.min)*100}const go={correct:(e,i)=>{if(!i.target)return e;if(typeof e=="string")if(oe.test(e))e=parseFloat(e);else return e;const s=Px(e,i.target.x),l=Px(e,i.target.y);return`${s}% ${l}%`}},Y7={correct:(e,{treeScale:i,projectionDelta:s})=>{const l=e,c=Vn.parse(e);if(c.length>5)return l;const p=Vn.createTransformer(e),d=typeof c[0]!="number"?1:0,f=s.x.scale*i.x,x=s.y.scale*i.y;c[0+d]/=f,c[1+d]/=x;const g=Ae(f,x,.5);return typeof c[2+d]=="number"&&(c[2+d]/=g),typeof c[3+d]=="number"&&(c[3+d]/=g),p(c)}},_p={borderRadius:{...go,applyTo:[...bf]},borderTopLeftRadius:go,borderTopRightRadius:go,borderBottomLeftRadius:go,borderBottomRightRadius:go,boxShadow:Y7};function Kg(e,{layout:i,layoutId:s}){return Ls.has(e)||e.startsWith("origin")||(i||s!==void 0)&&(!!_p[e]||e==="opacity")}function Pf(e,i,s){var d;const l=e.style,c=i==null?void 0:i.style,p={};if(!l)return p;for(const f in l)(kt(l[f])||c&&kt(c[f])||Kg(f,e)||((d=s==null?void 0:s.getValue(f))==null?void 0:d.liveStyle)!==void 0)&&(p[f]=l[f]);return p}function X7(e){return window.getComputedStyle(e)}class Q7 extends _g{constructor(){super(...arguments),this.type="html",this.renderInstance=Gg}mount(i){td(!!i.style),super.mount(i)}readValueFromInstance(i,s){var l;if(Ls.has(s))return(l=this.projection)!=null&&l.isProjecting?$p(s):v9(i,s);{const c=X7(i),p=(ig(s)?c.getPropertyValue(s):c[s])||0;return typeof p=="string"?p.trim():p}}measureInstanceViewportBox(i,{transformPagePoint:s}){return Zg(i,s)}build(i,s,l){Bf(i,s,l.transformTemplate)}scrapeMotionValuesFromProps(i,s,l){return Pf(i,s,l)}}const J7={offset:"stroke-dashoffset",array:"stroke-dasharray"},ej={offset:"strokeDashoffset",array:"strokeDasharray"};function tj(e,i,s=1,l=0,c=!0){e.pathLength=1;const p=c?J7:ej;e[p.offset]=`${-l}`,e[p.array]=`${i} ${s}`}const nj=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function qg(e,{attrX:i,attrY:s,attrScale:l,pathLength:c,pathSpacing:p=1,pathOffset:d=0,...f},x,g,m){if(Bf(e,f,g),x){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:j,style:C}=e;j.transform&&(C.transform=j.transform,delete j.transform),(C.transform||j.transformOrigin)&&(C.transformOrigin=j.transformOrigin??"50% 50%",delete j.transformOrigin),C.transform&&(C.transformBox=(m==null?void 0:m.transformBox)??"fill-box",delete j.transformBox);for(const k of nj)j[k]!==void 0&&(C[k]=j[k],delete j[k]);i!==void 0&&(j.x=i),s!==void 0&&(j.y=s),l!==void 0&&(j.scale=l),c!==void 0&&tj(j,c,p,d,!1)}const Yg=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Xg=e=>typeof e=="string"&&e.toLowerCase()==="svg";function ij(e,i,s,l){Gg(e,i,void 0,l);for(const c in i.attrs)e.setAttribute(Yg.has(c)?c:wf(c),i.attrs[c])}function Qg(e,i,s){const l=Pf(e,i,s);for(const c in e)if(kt(e[c])||kt(i[c])){const p=$s.indexOf(c)!==-1?"attr"+c.charAt(0).toUpperCase()+c.substring(1):c;l[p]=e[c]}return l}class rj extends _g{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=at}getBaseTargetFromProps(i,s){return i[s]}readValueFromInstance(i,s){if(Ls.has(s)){const l=Dg(s);return l&&l.default||0}return s=Yg.has(s)?s:wf(s),i.getAttribute(s)}scrapeMotionValuesFromProps(i,s,l){return Qg(i,s,l)}build(i,s,l){qg(i,s,this.isSVGTag,l.transformTemplate,l.style)}renderInstance(i,s,l,c){ij(i,s,l,c)}mount(i){this.isSVGTag=Xg(i.tagName),super.mount(i)}}const sj=Lf.length;function Jg(e){if(!e)return;if(!e.isControllingVariants){const s=e.parent?Jg(e.parent)||{}:{};return e.props.initial!==void 0&&(s.initial=e.props.initial),s}const i={};for(let s=0;s<sj;s++){const l=Lf[s],c=e.props[l];(al(c)||c===!1)&&(i[l]=c)}return i}function e4(e,i){if(!Array.isArray(i))return!1;const s=i.length;if(s!==e.length)return!1;for(let l=0;l<s;l++)if(i[l]!==e[l])return!1;return!0}const oj=[...$f].reverse(),lj=$f.length;function aj(e){return i=>Promise.all(i.map(({animation:s,options:l})=>s7(e,s,l)))}function cj(e){let i=aj(e),s=Ex(),l=!0,c=!1;const p=g=>(m,j)=>{var k;const C=Pr(e,j,g==="exit"?(k=e.presenceContext)==null?void 0:k.custom:void 0);if(C){const{transition:S,transitionEnd:T,...P}=C;m={...m,...P,...T}}return m};function d(g){i=g(e)}function f(g){const{props:m}=e,j=Jg(e.parent)||{},C=[],k=new Set;let S={},T=1/0;for(let R=0;R<lj;R++){const E=oj[R],M=s[E],F=m[E]!==void 0?m[E]:j[E],O=al(F),X=E===g?M.isActive:null;X===!1&&(T=R);let V=F===j[E]&&F!==m[E]&&O;if(V&&(l||c)&&e.manuallyAnimateOnMount&&(V=!1),M.protectedKeys={...S},!M.isActive&&X===null||!F&&!M.prevProp||id(F)||typeof F=="boolean")continue;if(E==="exit"&&M.isActive&&X!==!0){M.prevResolvedValues&&(S={...S,...M.prevResolvedValues});continue}const z=dj(M.prevProp,F);let J=z||E===g&&M.isActive&&!V&&O||R>T&&O,Q=!1;const ae=Array.isArray(F)?F:[F];let me=ae.reduce(p(E),{});X===!1&&(me={});const{prevResolvedValues:ge={}}=M,ke={...ge,...me},Ie=Z=>{J=!0,k.has(Z)&&(Q=!0,k.delete(Z)),M.needsAnimating[Z]=!0;const ee=e.getValue(Z);ee&&(ee.liveStyle=!1)};for(const Z in ke){const ee=me[Z],Y=ge[Z];if(S.hasOwnProperty(Z))continue;let B=!1;Rp(ee)&&Rp(Y)?B=!e4(ee,Y)||z:B=ee!==Y,B?ee!=null?Ie(Z):k.add(Z):ee!==void 0&&k.has(Z)?Ie(Z):M.protectedKeys[Z]=!0}M.prevProp=F,M.prevResolvedValues=me,M.isActive&&(S={...S,...me}),(l||c)&&e.blockInitialAnimation&&(J=!1);const $e=V&&z;J&&(!$e||Q)&&C.push(...ae.map(Z=>{const ee={type:E};if(typeof Z=="string"&&(l||c)&&!$e&&e.manuallyAnimateOnMount&&e.parent){const{parent:Y}=e,B=Pr(Y,Z);if(Y.enteringChildren&&B){const{delayChildren:N}=B.transition||{};ee.delay=bg(Y.enteringChildren,e,N)}}return{animation:Z,options:ee}}))}if(k.size){const R={};if(typeof m.initial!="boolean"){const E=Pr(e,Array.isArray(m.initial)?m.initial[0]:m.initial);E&&E.transition&&(R.transition=E.transition)}k.forEach(E=>{const M=e.getBaseTarget(E),F=e.getValue(E);F&&(F.liveStyle=!0),R[E]=M??null}),C.push({animation:R})}let P=!!C.length;return l&&(m.initial===!1||m.initial===m.animate)&&!e.manuallyAnimateOnMount&&(P=!1),l=!1,c=!1,P?i(C):Promise.resolve()}function x(g,m){var C;if(s[g].isActive===m)return Promise.resolve();(C=e.variantChildren)==null||C.forEach(k=>{var S;return(S=k.animationState)==null?void 0:S.setActive(g,m)}),s[g].isActive=m;const j=f(g);for(const k in s)s[k].protectedKeys={};return j}return{animateChanges:f,setActive:x,setAnimateFunction:d,getState:()=>s,reset:()=>{s=Ex(),c=!0}}}function dj(e,i){return typeof i=="string"?i!==e:Array.isArray(i)?!e4(i,e):!1}function or(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Ex(){return{animate:or(!0),whileInView:or(),whileHover:or(),whileTap:or(),whileDrag:or(),whileFocus:or(),exit:or()}}function Hp(e,i){e.min=i.min,e.max=i.max}function Dn(e,i){Hp(e.x,i.x),Hp(e.y,i.y)}function Dx(e,i){e.translate=i.translate,e.scale=i.scale,e.originPoint=i.originPoint,e.origin=i.origin}const t4=1e-4,uj=1-t4,pj=1+t4,n4=.01,fj=0-n4,hj=0+n4;function Ft(e){return e.max-e.min}function xj(e,i,s){return Math.abs(e-i)<=s}function Rx(e,i,s,l=.5){e.origin=l,e.originPoint=Ae(i.min,i.max,e.origin),e.scale=Ft(s)/Ft(i),e.translate=Ae(s.min,s.max,e.origin)-e.originPoint,(e.scale>=uj&&e.scale<=pj||isNaN(e.scale))&&(e.scale=1),(e.translate>=fj&&e.translate<=hj||isNaN(e.translate))&&(e.translate=0)}function Ko(e,i,s,l){Rx(e.x,i.x,s.x,l?l.originX:void 0),Rx(e.y,i.y,s.y,l?l.originY:void 0)}function Ix(e,i,s,l=0){const c=l?Ae(s.min,s.max,l):s.min;e.min=c+i.min,e.max=e.min+Ft(i)}function mj(e,i,s,l){Ix(e.x,i.x,s.x,l==null?void 0:l.x),Ix(e.y,i.y,s.y,l==null?void 0:l.y)}function Ax(e,i,s,l=0){const c=l?Ae(s.min,s.max,l):s.min;e.min=i.min-c,e.max=e.min+Ft(i)}function zc(e,i,s,l){Ax(e.x,i.x,s.x,l==null?void 0:l.x),Ax(e.y,i.y,s.y,l==null?void 0:l.y)}function zx(e,i,s,l,c){return e-=i,e=Ac(e,1/s,l),c!==void 0&&(e=Ac(e,1/c,l)),e}function gj(e,i=0,s=1,l=.5,c,p=e,d=e){if(Yn.test(i)&&(i=parseFloat(i),i=Ae(d.min,d.max,i/100)-d.min),typeof i!="number")return;let f=Ae(p.min,p.max,l);e===p&&(f-=i),e.min=zx(e.min,i,s,f,c),e.max=zx(e.max,i,s,f,c)}function Mx(e,i,[s,l,c],p,d){gj(e,i[s],i[l],i[c],i.scale,p,d)}const vj=["x","scaleX","originX"],yj=["y","scaleY","originY"];function Vx(e,i,s,l){Mx(e.x,i,vj,s?s.x:void 0,l?l.x:void 0),Mx(e.y,i,yj,s?s.y:void 0,l?l.y:void 0)}function Fx(e){return e.translate===0&&e.scale===1}function i4(e){return Fx(e.x)&&Fx(e.y)}function Nx(e,i){return e.min===i.min&&e.max===i.max}function jj(e,i){return Nx(e.x,i.x)&&Nx(e.y,i.y)}function Ox(e,i){return Math.round(e.min)===Math.round(i.min)&&Math.round(e.max)===Math.round(i.max)}function r4(e,i){return Ox(e.x,i.x)&&Ox(e.y,i.y)}function _x(e){return Ft(e.x)/Ft(e.y)}function Hx(e,i){return e.translate===i.translate&&e.scale===i.scale&&e.originPoint===i.originPoint}function Wn(e){return[e("x"),e("y")]}function Cj(e,i,s){let l="";const c=e.x.translate/i.x,p=e.y.translate/i.y,d=(s==null?void 0:s.z)||0;if((c||p||d)&&(l=`translate3d(${c}px, ${p}px, ${d}px) `),(i.x!==1||i.y!==1)&&(l+=`scale(${1/i.x}, ${1/i.y}) `),s){const{transformPerspective:g,rotate:m,pathRotation:j,rotateX:C,rotateY:k,skewX:S,skewY:T}=s;g&&(l=`perspective(${g}px) ${l}`),m&&(l+=`rotate(${m}deg) `),j&&(l+=`rotate(${j}deg) `),C&&(l+=`rotateX(${C}deg) `),k&&(l+=`rotateY(${k}deg) `),S&&(l+=`skewX(${S}deg) `),T&&(l+=`skewY(${T}deg) `)}const f=e.x.scale*i.x,x=e.y.scale*i.y;return(f!==1||x!==1)&&(l+=`scale(${f}, ${x})`),l||"none"}const wj=bf.length,Wx=e=>typeof e=="string"?parseFloat(e):e,Ux=e=>typeof e=="number"||oe.test(e);function bj(e,i,s,l,c,p){c?(e.opacity=Ae(0,s.opacity??1,Sj(l)),e.opacityExit=Ae(i.opacity??1,0,kj(l))):p&&(e.opacity=Ae(i.opacity??1,s.opacity??1,l));for(let d=0;d<wj;d++){const f=bf[d];let x=Zx(i,f),g=Zx(s,f);if(x===void 0&&g===void 0)continue;x||(x=0),g||(g=0),x===0||g===0||Ux(x)===Ux(g)?(e[f]=Math.max(Ae(Wx(x),Wx(g),l),0),(Yn.test(g)||Yn.test(x))&&(e[f]+="%")):e[f]=g}(i.rotate||s.rotate)&&(e.rotate=Ae(i.rotate||0,s.rotate||0,l))}function Zx(e,i){return e[i]!==void 0?e[i]:e.borderRadius}const Sj=s4(0,.5,X3),kj=s4(.5,.95,bn);function s4(e,i,s){return l=>l<e?0:l>i?1:s(ol(e,i,l))}function Tj(e,i,s){const l=kt(e)?e:ws(e);return l.start(jf("",l,i,s)),l.animation}function cl(e,i,s,l={passive:!0}){return e.addEventListener(i,s,l),()=>e.removeEventListener(i,s,l)}const $j=(e,i)=>e.depth-i.depth;class Lj{constructor(){this.children=[],this.isDirty=!1}add(i){af(this.children,i),this.isDirty=!0}remove(i){Lc(this.children,i),this.isDirty=!0}forEach(i){this.isDirty&&this.children.sort($j),this.isDirty=!1,this.children.forEach(i)}}function Bj(e,i){const s=Vt.now(),l=({timestamp:c})=>{const p=c-s;p>=i&&(Ui(l),e(p-i))};return ze.setup(l,!0),()=>Ui(l)}function gc(e){return kt(e)?e.get():e}class Pj{constructor(){this.members=[]}add(i){af(this.members,i);for(let s=this.members.length-1;s>=0;s--){const l=this.members[s];if(l===i||l===this.lead||l===this.prevLead)continue;const c=l.instance;(!c||c.isConnected===!1)&&!l.snapshot&&(Lc(this.members,l),l.unmount())}i.scheduleRender()}remove(i){if(Lc(this.members,i),i===this.prevLead&&(this.prevLead=void 0),i===this.lead){const s=this.members[this.members.length-1];s&&this.promote(s)}}relegate(i){var s;for(let l=this.members.indexOf(i)-1;l>=0;l--){const c=this.members[l];if(c.isPresent!==!1&&((s=c.instance)==null?void 0:s.isConnected)!==!1)return this.promote(c),!0}return!1}promote(i,s){var c;const l=this.lead;if(i!==l&&(this.prevLead=l,this.lead=i,i.show(),l)){l.updateSnapshot(),i.scheduleRender();const{layoutDependency:p}=l.options,{layoutDependency:d}=i.options;(p===void 0||p!==d)&&(i.resumeFrom=l,s&&(l.preserveOpacity=!0),l.snapshot&&(i.snapshot=l.snapshot,i.snapshot.latestValues=l.animationValues||l.latestValues),(c=i.root)!=null&&c.isUpdating&&(i.isLayoutDirty=!0)),i.options.crossfade===!1&&l.hide()}}exitAnimationComplete(){this.members.forEach(i=>{var s,l,c,p,d;(l=(s=i.options).onExitComplete)==null||l.call(s),(d=(c=i.resumingFrom)==null?void 0:(p=c.options).onExitComplete)==null||d.call(p)})}scheduleRender(){this.members.forEach(i=>i.instance&&i.scheduleRender(!1))}removeLeadSnapshot(){var i;(i=this.lead)!=null&&i.snapshot&&(this.lead.snapshot=void 0)}}const vc={hasAnimatedSinceResize:!0,hasEverUpdated:!1},w1=["","X","Y","Z"],Ej=1e3;let Dj=0;function b1(e,i,s,l){const{latestValues:c}=i;c[e]&&(s[e]=c[e],i.setStaticValue(e,0),l&&(l[e]=0))}function o4(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:i}=e.options;if(!i)return;const s=Lg(i);if(window.MotionHasOptimisedAnimation(s,"transform")){const{layout:c,layoutId:p}=e.options;window.MotionCancelOptimisedAnimation(s,"transform",ze,!(c||p))}const{parent:l}=e;l&&!l.hasCheckedOptimisedAppear&&o4(l)}function l4({attachResizeListener:e,defaultParent:i,measureScroll:s,checkIsScrollRoot:l,resetTransform:c}){return class{constructor(d={},f=i==null?void 0:i()){this.id=Dj++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(Aj),this.nodes.forEach(Oj),this.nodes.forEach(_j),this.nodes.forEach(zj)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=f?f.root||f:this,this.path=f?[...f.path,f]:[],this.parent=f,this.depth=f?f.depth+1:0;for(let x=0;x<this.path.length;x++)this.path[x].shouldResetTransform=!0;this.root===this&&(this.nodes=new Lj)}addEventListener(d,f){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new cf),this.eventHandlers.get(d).add(f)}notifyListeners(d,...f){const x=this.eventHandlers.get(d);x&&x.notify(...f)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=Tf(d)&&!I7(d),this.instance=d;const{layoutId:f,layout:x,visualElement:g}=this.options;if(g&&!g.current&&g.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(x||f)&&(this.isLayoutDirty=!0),e){let m,j=0;const C=()=>this.root.updateBlockedByResize=!1;ze.read(()=>{j=window.innerWidth}),e(d,()=>{const k=window.innerWidth;k!==j&&(j=k,this.root.updateBlockedByResize=!0,m&&m(),m=Bj(C,250),vc.hasAnimatedSinceResize&&(vc.hasAnimatedSinceResize=!1,this.nodes.forEach(qx)))})}f&&this.root.registerSharedNode(f,this),this.options.animate!==!1&&g&&(f||x)&&this.addEventListener("didUpdate",({delta:m,hasLayoutChanged:j,hasRelativeLayoutChanged:C,layout:k})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const S=this.options.transition||g.getDefaultTransition()||Gj,{onLayoutAnimationStart:T,onLayoutAnimationComplete:P}=g.getProps(),R=!this.targetLayout||!r4(this.targetLayout,k),E=!j&&C;if(this.options.layoutRoot||this.resumeFrom||E||j&&(R||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const M={...yf(S,"layout"),onPlay:T,onComplete:P};(g.shouldReduceMotion||this.options.layoutRoot)&&(M.delay=0,M.type=!1),this.startAnimation(M),this.setAnimationOrigin(m,E,M.path)}else j||qx(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=k})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Ui(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Hj),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&o4(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let m=0;m<this.path.length;m++){const j=this.path[m];j.shouldResetTransform=!0,(typeof j.latestValues.x=="string"||typeof j.latestValues.y=="string")&&(j.isLayoutDirty=!0),j.updateScroll("snapshot"),j.options.layoutRoot&&j.willUpdate(!1)}const{layoutId:f,layout:x}=this.options;if(f===void 0&&!x)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const x=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),x&&this.nodes.forEach(Vj),this.nodes.forEach(Gx);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Kx);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Fj),this.nodes.forEach(Nj),this.nodes.forEach(Rj),this.nodes.forEach(Ij)):this.nodes.forEach(Kx),this.clearAllSnapshots();const f=Vt.now();bt.delta=Xn(0,1e3/60,f-bt.timestamp),bt.timestamp=f,bt.isProcessing=!0,h1.update.process(bt),h1.preRender.process(bt),h1.render.process(bt),bt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Sf.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Mj),this.sharedNodes.forEach(Wj)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ze.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ze.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Ft(this.snapshot.measuredBox.x)&&!Ft(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let x=0;x<this.path.length;x++)this.path[x].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=at()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:f}=this.options;f&&f.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let f=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(f=!1),f&&this.instance){const x=l(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:x,offset:s(this.instance),wasRoot:this.scroll?this.scroll.isRoot:x}}}resetTransform(){if(!c)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,f=this.projectionDelta&&!i4(this.projectionDelta),x=this.getTransformTemplate(),g=x?x(this.latestValues,""):void 0,m=g!==this.prevTransformTemplateValue;d&&this.instance&&(f||gr(this.latestValues)||m)&&(c(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const f=this.measurePageBox();let x=this.removeElementScroll(f);return d&&(x=this.removeTransform(x)),Kj(x),{animationId:this.root.animationId,measuredBox:f,layoutBox:x,latestValues:{},source:this.id}}measurePageBox(){var g;const{visualElement:d}=this.options;if(!d)return at();const f=d.measureViewportBox();if(!(((g=this.scroll)==null?void 0:g.wasRoot)||this.path.some(qj))){const{scroll:m}=this.root;m&&(Zn(f.x,m.offset.x),Zn(f.y,m.offset.y))}return f}removeElementScroll(d){var x;const f=at();if(Dn(f,d),(x=this.scroll)!=null&&x.wasRoot)return f;for(let g=0;g<this.path.length;g++){const m=this.path[g],{scroll:j,options:C}=m;m!==this.root&&j&&C.layoutScroll&&(j.wasRoot&&Dn(f,d),Zn(f.x,j.offset.x),Zn(f.y,j.offset.y))}return f}applyTransform(d,f=!1,x){var m,j;const g=x||at();Dn(g,d);for(let C=0;C<this.path.length;C++){const k=this.path[C];!f&&k.options.layoutScroll&&k.scroll&&k!==k.root&&(Zn(g.x,-k.scroll.offset.x),Zn(g.y,-k.scroll.offset.y)),gr(k.latestValues)&&mc(g,k.latestValues,(m=k.layout)==null?void 0:m.layoutBox)}return gr(this.latestValues)&&mc(g,this.latestValues,(j=this.layout)==null?void 0:j.layoutBox),g}removeTransform(d){var x;const f=at();Dn(f,d);for(let g=0;g<this.path.length;g++){const m=this.path[g];if(!gr(m.latestValues))continue;let j;m.instance&&(Np(m.latestValues)&&m.updateSnapshot(),j=at(),Dn(j,m.measurePageBox())),Vx(f,m.latestValues,(x=m.snapshot)==null?void 0:x.layoutBox,j)}return gr(this.latestValues)&&Vx(f,this.latestValues),f}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==bt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var k;const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const x=!!this.resumingFrom||this!==f;if(!(d||x&&this.isSharedProjectionDirty||this.isProjectionDirty||(k=this.parent)!=null&&k.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:m,layoutId:j}=this.options;if(!this.layout||!(m||j))return;this.resolvedRelativeTargetAt=bt.timestamp;const C=this.getClosestProjectingParent();C&&this.linkedParentVersion!==C.layoutVersion&&!C.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&C&&C.layout?this.createRelativeTarget(C,this.layout.layoutBox,C.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=at(),this.targetWithTransforms=at()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),mj(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Dn(this.target,this.layout.layoutBox),Ug(this.target,this.targetDelta)):Dn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&C&&!!C.resumingFrom==!!this.resumingFrom&&!C.options.layoutScroll&&C.target&&this.animationProgress!==1?this.createRelativeTarget(C,this.target,C.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Np(this.parent.latestValues)||Wg(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,f,x){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=at(),this.relativeTargetOrigin=at(),zc(this.relativeTargetOrigin,f,x,this.options.layoutAnchor||void 0),Dn(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var S;const d=this.getLead(),f=!!this.resumingFrom||this!==d;let x=!0;if((this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty)&&(x=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(x=!1),this.resolvedRelativeTargetAt===bt.timestamp&&(x=!1),x)return;const{layout:g,layoutId:m}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||m))return;Dn(this.layoutCorrected,this.layout.layoutBox);const j=this.treeScale.x,C=this.treeScale.y;U7(this.layoutCorrected,this.treeScale,this.path,f),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=at());const{target:k}=d;if(!k){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Dx(this.prevProjectionDelta.x,this.projectionDelta.x),Dx(this.prevProjectionDelta.y,this.projectionDelta.y)),Ko(this.projectionDelta,this.layoutCorrected,k,this.latestValues),(this.treeScale.x!==j||this.treeScale.y!==C||!Hx(this.projectionDelta.x,this.prevProjectionDelta.x)||!Hx(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",k))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var f;if((f=this.options.visualElement)==null||f.scheduleRender(),d){const x=this.getStack();x&&x.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ps(),this.projectionDelta=ps(),this.projectionDeltaWithTransform=ps()}setAnimationOrigin(d,f=!1,x){const g=this.snapshot,m=g?g.latestValues:{},j={...this.latestValues},C=ps();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!f;const k=at(),S=g?g.source:void 0,T=this.layout?this.layout.source:void 0,P=S!==T,R=this.getStack(),E=!R||R.members.length<=1,M=!!(P&&!E&&this.options.crossfade===!0&&!this.path.some(Zj));this.animationProgress=0;let F;const O=x==null?void 0:x.interpolateProjection(d);this.mixTargetDelta=X=>{const V=X/1e3,z=O==null?void 0:O(V);z?(C.x.translate=z.x,C.x.scale=Ae(d.x.scale,1,V),C.x.origin=d.x.origin,C.x.originPoint=d.x.originPoint,C.y.translate=z.y,C.y.scale=Ae(d.y.scale,1,V),C.y.origin=d.y.origin,C.y.originPoint=d.y.originPoint):(Yx(C.x,d.x,V),Yx(C.y,d.y,V)),this.setTargetDelta(C),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(zc(k,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),Uj(this.relativeTarget,this.relativeTargetOrigin,k,V),F&&jj(this.relativeTarget,F)&&(this.isProjectionDirty=!1),F||(F=at()),Dn(F,this.relativeTarget)),P&&(this.animationValues=j,bj(j,m,this.latestValues,V,M,E)),z&&z.rotate!==void 0&&(this.animationValues||(this.animationValues=j),this.animationValues.pathRotation=z.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=V},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var f,x,g;this.notifyListeners("animationStart"),(f=this.currentAnimation)==null||f.stop(),(g=(x=this.resumingFrom)==null?void 0:x.currentAnimation)==null||g.stop(),this.pendingAnimation&&(Ui(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ze.update(()=>{vc.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=ws(0)),this.motionValue.jump(0,!1),this.currentAnimation=Tj(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:m=>{this.mixTargetDelta(m),d.onUpdate&&d.onUpdate(m)},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Ej),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:f,target:x,layout:g,latestValues:m}=d;if(!(!f||!x||!g)){if(this!==d&&this.layout&&g&&a4(this.options.animationType,this.layout.layoutBox,g.layoutBox)){x=this.target||at();const j=Ft(this.layout.layoutBox.x);x.x.min=d.target.x.min,x.x.max=x.x.min+j;const C=Ft(this.layout.layoutBox.y);x.y.min=d.target.y.min,x.y.max=x.y.min+C}Dn(f,x),mc(f,m),Ko(this.projectionDeltaWithTransform,this.layoutCorrected,f,m)}}registerSharedNode(d,f){this.sharedNodes.has(d)||this.sharedNodes.set(d,new Pj),this.sharedNodes.get(d).add(f);const g=f.options.initialPromotionConfig;f.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(f):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var f;const{layoutId:d}=this.options;return d?((f=this.getStack())==null?void 0:f.lead)||this:this}getPrevLead(){var f;const{layoutId:d}=this.options;return d?(f=this.getStack())==null?void 0:f.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:f,preserveFollowOpacity:x}={}){const g=this.getStack();g&&g.promote(this,x),d&&(this.projectionDelta=void 0,this.needsReset=!0),f&&this.setOptions({transition:f})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let f=!1;const{latestValues:x}=d;if((x.z||x.rotate||x.rotateX||x.rotateY||x.rotateZ||x.skewX||x.skewY)&&(f=!0),!f)return;const g={};x.z&&b1("z",d,g,this.animationValues);for(let m=0;m<w1.length;m++)b1(`rotate${w1[m]}`,d,g,this.animationValues),b1(`skew${w1[m]}`,d,g,this.animationValues);d.render();for(const m in g)d.setStaticValue(m,g[m]),this.animationValues&&(this.animationValues[m]=g[m]);d.scheduleRender()}applyProjectionStyles(d,f){if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const x=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=gc(f==null?void 0:f.pointerEvents)||"",d.transform=x?x(this.latestValues,""):"none";return}const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=gc(f==null?void 0:f.pointerEvents)||""),this.hasProjected&&!gr(this.latestValues)&&(d.transform=x?x({},""):"none",this.hasProjected=!1);return}d.visibility="";const m=g.animationValues||g.latestValues;this.applyTransformsToTarget();let j=Cj(this.projectionDeltaWithTransform,this.treeScale,m);x&&(j=x(m,j)),d.transform=j;const{x:C,y:k}=this.projectionDelta;d.transformOrigin=`${C.origin*100}% ${k.origin*100}% 0`,g.animationValues?d.opacity=g===this?m.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:m.opacityExit:d.opacity=g===this?m.opacity!==void 0?m.opacity:"":m.opacityExit!==void 0?m.opacityExit:0;for(const S in _p){if(m[S]===void 0)continue;const{correct:T,applyTo:P,isCSSVariable:R}=_p[S],E=j==="none"?m[S]:T(m[S],g);if(P){const M=P.length;for(let F=0;F<M;F++)d[P[F]]=E}else R?this.options.visualElement.renderState.vars[S]=E:d[S]=E}this.options.layoutId&&(d.pointerEvents=g===this?gc(f==null?void 0:f.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var f;return(f=d.currentAnimation)==null?void 0:f.stop()}),this.root.nodes.forEach(Gx),this.root.sharedNodes.clear()}}}function Rj(e){e.updateLayout()}function Ij(e){var s;const i=((s=e.resumeFrom)==null?void 0:s.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&i&&e.hasListeners("didUpdate")){const{layoutBox:l,measuredBox:c}=e.layout,{animationType:p}=e.options,d=i.source!==e.layout.source;if(p==="size")Wn(j=>{const C=d?i.measuredBox[j]:i.layoutBox[j],k=Ft(C);C.min=l[j].min,C.max=C.min+k});else if(p==="x"||p==="y"){const j=p==="x"?"y":"x";Hp(d?i.measuredBox[j]:i.layoutBox[j],l[j])}else a4(p,i.layoutBox,l)&&Wn(j=>{const C=d?i.measuredBox[j]:i.layoutBox[j],k=Ft(l[j]);C.max=C.min+k,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[j].max=e.relativeTarget[j].min+k)});const f=ps();Ko(f,l,i.layoutBox);const x=ps();d?Ko(x,e.applyTransform(c,!0),i.measuredBox):Ko(x,l,i.layoutBox);const g=!i4(f);let m=!1;if(!e.resumeFrom){const j=e.getClosestProjectingParent();if(j&&!j.resumeFrom){const{snapshot:C,layout:k}=j;if(C&&k){const S=e.options.layoutAnchor||void 0,T=at();zc(T,i.layoutBox,C.layoutBox,S);const P=at();zc(P,l,k.layoutBox,S),r4(T,P)||(m=!0),j.options.layoutRoot&&(e.relativeTarget=P,e.relativeTargetOrigin=T,e.relativeParent=j)}}}e.notifyListeners("didUpdate",{layout:l,snapshot:i,delta:x,layoutDelta:f,hasLayoutChanged:g,hasRelativeLayoutChanged:m})}else if(e.isLead()){const{onExitComplete:l}=e.options;l&&l()}e.options.transition=void 0}function Aj(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function zj(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Mj(e){e.clearSnapshot()}function Gx(e){e.clearMeasurements()}function Vj(e){e.isLayoutDirty=!0,e.updateLayout()}function Kx(e){e.isLayoutDirty=!1}function Fj(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function Nj(e){const{visualElement:i}=e.options;i&&i.getProps().onBeforeLayoutMeasure&&i.notify("BeforeLayoutMeasure"),e.resetTransform()}function qx(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Oj(e){e.resolveTargetDelta()}function _j(e){e.calcProjection()}function Hj(e){e.resetSkewAndRotation()}function Wj(e){e.removeLeadSnapshot()}function Yx(e,i,s){e.translate=Ae(i.translate,0,s),e.scale=Ae(i.scale,1,s),e.origin=i.origin,e.originPoint=i.originPoint}function Xx(e,i,s,l){e.min=Ae(i.min,s.min,l),e.max=Ae(i.max,s.max,l)}function Uj(e,i,s,l){Xx(e.x,i.x,s.x,l),Xx(e.y,i.y,s.y,l)}function Zj(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const Gj={duration:.45,ease:[.4,0,.1,1]},Qx=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Jx=Qx("applewebkit/")&&!Qx("chrome/")?Math.round:bn;function em(e){e.min=Jx(e.min),e.max=Jx(e.max)}function Kj(e){em(e.x),em(e.y)}function a4(e,i,s){return e==="position"||e==="preserve-aspect"&&!xj(_x(i),_x(s),.2)}function qj(e){var i;return e!==e.root&&((i=e.scroll)==null?void 0:i.wasRoot)}const Yj=l4({attachResizeListener:(e,i)=>cl(e,"resize",i),measureScroll:()=>{var e,i;return{x:document.documentElement.scrollLeft||((e=document.body)==null?void 0:e.scrollLeft)||0,y:document.documentElement.scrollTop||((i=document.body)==null?void 0:i.scrollTop)||0}},checkIsScrollRoot:()=>!0}),S1={current:void 0},c4=l4({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!S1.current){const e=new Yj({});e.mount(window),e.setOptions({layoutScroll:!0}),S1.current=e}return S1.current},resetTransform:(e,i)=>{e.style.transform=i!==void 0?i:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),Ef=b.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function tm(e,i){if(typeof e=="function")return e(i);e!=null&&(e.current=i)}function Xj(...e){return i=>{let s=!1;const l=e.map(c=>{const p=tm(c,i);return!s&&typeof p=="function"&&(s=!0),p});if(s)return()=>{for(let c=0;c<l.length;c++){const p=l[c];typeof p=="function"?p():tm(e[c],null)}}}}function Qj(...e){return b.useCallback(Xj(...e),e)}class Jj extends b.Component{getSnapshotBeforeUpdate(i){const s=this.props.childRef.current;if(pc(s)&&i.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const l=s.offsetParent,c=pc(l)&&l.offsetWidth||0,p=pc(l)&&l.offsetHeight||0,d=getComputedStyle(s),f=this.props.sizeRef.current;f.height=parseFloat(d.height),f.width=parseFloat(d.width),f.top=s.offsetTop,f.left=s.offsetLeft,f.right=c-f.width-f.left,f.bottom=p-f.height-f.top,f.direction=d.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function eC({children:e,isPresent:i,anchorX:s,anchorY:l,root:c,pop:p}){var C;const d=b.useId(),f=b.useRef(null),x=b.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:g}=b.useContext(Ef),m=p!==!1?((C=e.props)==null?void 0:C.ref)??(e==null?void 0:e.ref):void 0,j=Qj(f,m);return b.useInsertionEffect(()=>{const{width:k,height:S,top:T,left:P,right:R,bottom:E,direction:M}=x.current;if(i||p===!1||!f.current||!k||!S)return;const F=M==="rtl",O=s==="left"?F?`right: ${R}`:`left: ${P}`:F?`left: ${P}`:`right: ${R}`,X=l==="bottom"?`bottom: ${E}`:`top: ${T}`;f.current.dataset.motionPopId=d;const V=document.createElement("style");g&&(V.nonce=g);const z=c??document.head;return z.appendChild(V),V.sheet&&V.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${k}px !important;
            height: ${S}px !important;
            ${O}px !important;
            ${X}px !important;
          }
        `),()=>{var J;(J=f.current)==null||J.removeAttribute("data-motion-pop-id"),z.contains(V)&&z.removeChild(V)}},[i]),t.jsx(Jj,{isPresent:i,childRef:f,sizeRef:x,pop:p,children:p===!1?e:b.cloneElement(e,{ref:j})})}const tC=({children:e,initial:i,isPresent:s,onExitComplete:l,custom:c,presenceAffectsLayout:p,mode:d,anchorX:f,anchorY:x,root:g})=>{const m=of(nC),j=b.useId(),C=b.useRef(s),k=b.useRef(l);lf(()=>{C.current=s,k.current=l});let S=!0,T=b.useMemo(()=>(S=!1,{id:j,initial:i,isPresent:s,custom:c,onExitComplete:P=>{m.set(P,!0);for(const R of m.values())if(!R)return;l&&l()},register:P=>(m.set(P,!1),()=>{var R;m.delete(P),!C.current&&!m.size&&((R=k.current)==null||R.call(k))})}),[s,m,l]);return p&&S&&(T={...T}),b.useMemo(()=>{m.forEach((P,R)=>m.set(R,!1))},[s]),b.useEffect(()=>{!s&&!m.size&&l&&l()},[s]),e=t.jsx(eC,{pop:d==="popLayout",isPresent:s,anchorX:f,anchorY:x,root:g,children:e}),t.jsx(ed.Provider,{value:T,children:e})};function nC(){return new Map}function d4(e=!0){const i=b.useContext(ed);if(i===null)return[!0,null];const{isPresent:s,onExitComplete:l,register:c}=i,p=b.useId();b.useEffect(()=>{if(e)return c(p)},[e]);const d=b.useCallback(()=>e&&l&&l(p),[p,l,e]);return!s&&l?[!1,d]:[!0]}const Ba=e=>e.key||"";function nm(e){const i=[];return b.Children.forEach(e,s=>{b.isValidElement(s)&&i.push(s)}),i}const ls=({children:e,custom:i,initial:s=!0,onExitComplete:l,presenceAffectsLayout:c=!0,mode:p="sync",propagate:d=!1,anchorX:f="left",anchorY:x="top",root:g})=>{const[m,j]=d4(d),C=b.useMemo(()=>nm(e),[e]),k=d&&!m?[]:C.map(Ba),S=b.useRef(!0),T=b.useRef(C),P=of(()=>new Map),R=b.useRef(new Set),[E,M]=b.useState(C),[F,O]=b.useState(C);lf(()=>{S.current=!1,T.current=C;for(let z=0;z<F.length;z++){const J=Ba(F[z]);k.includes(J)?(P.delete(J),R.current.delete(J)):P.get(J)!==!0&&P.set(J,!1)}},[F,k.length,k.join("-")]);const X=[];if(C!==E){let z=[...C];for(let J=0;J<F.length;J++){const Q=F[J],ae=Ba(Q);k.includes(ae)||(z.splice(J,0,Q),X.push(Q))}return p==="wait"&&X.length&&(z=X),O(nm(z)),M(C),null}const{forceRender:V}=b.useContext(sf);return t.jsx(t.Fragment,{children:F.map(z=>{const J=Ba(z),Q=d&&!m?!1:C===F||k.includes(J),ae=()=>{if(R.current.has(J))return;if(P.has(J))R.current.add(J),P.set(J,!0);else return;let me=!0;P.forEach(ge=>{ge||(me=!1)}),me&&(V==null||V(),O(T.current),d&&(j==null||j()),l&&l())};return t.jsx(tC,{isPresent:Q,initial:!S.current||s?void 0:!1,custom:i,presenceAffectsLayout:c,mode:p,root:g,onExitComplete:Q?void 0:ae,anchorX:f,anchorY:x,children:z},J)})})},u4=b.createContext({strict:!1}),im={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let rm=!1;function iC(){if(rm)return;const e={};for(const i in im)e[i]={isEnabled:s=>im[i].some(l=>!!s[l])};Og(e),rm=!0}function p4(){return iC(),O7()}function rC(e){const i=p4();for(const s in e)i[s]={...i[s],...e[s]};Og(i)}const sC=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Mc(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||sC.has(e)}let f4=e=>!Mc(e);function oC(e){typeof e=="function"&&(f4=i=>i.startsWith("on")?!Mc(i):e(i))}try{oC(require("@emotion/is-prop-valid").default)}catch{}function lC(e,i,s){const l={};for(const c in e)c==="values"&&typeof e.values=="object"||kt(e[c])||(f4(c)||s===!0&&Mc(c)||!i&&!Mc(c)||e.draggable&&c.startsWith("onDrag"))&&(l[c]=e[c]);return l}const sd=b.createContext({});function aC(e,i){if(rd(e)){const{initial:s,animate:l}=e;return{initial:s===!1||al(s)?s:void 0,animate:al(l)?l:void 0}}return e.inherit!==!1?i:{}}function cC(e){const{initial:i,animate:s}=aC(e,b.useContext(sd));return b.useMemo(()=>({initial:i,animate:s}),[sm(i),sm(s)])}function sm(e){return Array.isArray(e)?e.join(" "):e}const Df=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function h4(e,i,s){for(const l in i)!kt(i[l])&&!Kg(l,s)&&(e[l]=i[l])}function dC({transformTemplate:e},i){return b.useMemo(()=>{const s=Df();return Bf(s,i,e),Object.assign({},s.vars,s.style)},[i])}function uC(e,i){const s=e.style||{},l={};return h4(l,s,e),Object.assign(l,dC(e,i)),l}function pC(e,i){const s={},l=uC(e,i);return e.drag&&e.dragListener!==!1&&(s.draggable=!1,l.userSelect=l.WebkitUserSelect=l.WebkitTouchCallout="none",l.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(s.tabIndex=0),s.style=l,s}const x4=()=>({...Df(),attrs:{}});function fC(e,i,s,l){const c=b.useMemo(()=>{const p=x4();return qg(p,i,Xg(l),e.transformTemplate,e.style),{...p.attrs,style:{...p.style}}},[i]);if(e.style){const p={};h4(p,e.style,e),c.style={...p,...c.style}}return c}const hC=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Rf(e){return typeof e!="string"||e.includes("-")?!1:!!(hC.indexOf(e)>-1||/[A-Z]/u.test(e))}function xC(e,i,s,{latestValues:l},c,p=!1,d){const x=(d??Rf(e)?fC:pC)(i,l,c,e),g=lC(i,typeof e=="string",p),m=e!==b.Fragment?{...g,...x,ref:s}:{},{children:j}=i,C=b.useMemo(()=>kt(j)?j.get():j,[j]);return b.createElement(e,{...m,children:C})}function mC({scrapeMotionValuesFromProps:e,createRenderState:i},s,l,c){return{latestValues:gC(s,l,c,e),renderState:i()}}function gC(e,i,s,l){const c={},p=l(e,{});for(const C in p)c[C]=gc(p[C]);let{initial:d,animate:f}=e;const x=rd(e),g=Fg(e);i&&g&&!x&&e.inherit!==!1&&(d===void 0&&(d=i.initial),f===void 0&&(f=i.animate));let m=s?s.initial===!1:!1;m=m||d===!1;const j=m?f:d;if(j&&typeof j!="boolean"&&!id(j)){const C=Array.isArray(j)?j:[j];for(let k=0;k<C.length;k++){const S=Cf(e,C[k]);if(S){const{transitionEnd:T,transition:P,...R}=S;for(const E in R){let M=R[E];if(Array.isArray(M)){const F=m?M.length-1:0;M=M[F]}M!==null&&(c[E]=M)}for(const E in T)c[E]=T[E]}}}return c}const m4=e=>(i,s)=>{const l=b.useContext(sd),c=b.useContext(ed),p=()=>mC(e,i,l,c);return s?p():of(p)},vC=m4({scrapeMotionValuesFromProps:Pf,createRenderState:Df}),yC=m4({scrapeMotionValuesFromProps:Qg,createRenderState:x4}),jC=Symbol.for("motionComponentSymbol");function CC(e,i,s){const l=b.useRef(s);b.useInsertionEffect(()=>{l.current=s});const c=b.useRef(null);return b.useCallback(p=>{var f;p&&((f=e.onMount)==null||f.call(e,p)),i&&(p?i.mount(p):i.unmount());const d=l.current;if(typeof d=="function")if(p){const x=d(p);typeof x=="function"&&(c.current=x)}else c.current?(c.current(),c.current=null):d(p);else d&&(d.current=p)},[i])}const g4=b.createContext({});function as(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function wC(e,i,s,l,c,p){var M,F;const{visualElement:d}=b.useContext(sd),f=b.useContext(u4),x=b.useContext(ed),g=b.useContext(Ef),m=g.reducedMotion,j=g.skipAnimations,C=b.useRef(null),k=b.useRef(!1);l=l||f.renderer,!C.current&&l&&(C.current=l(e,{visualState:i,parent:d,props:s,presenceContext:x,blockInitialAnimation:x?x.initial===!1:!1,reducedMotionConfig:m,skipAnimations:j,isSVG:p}),k.current&&C.current&&(C.current.manuallyAnimateOnMount=!0));const S=C.current,T=b.useContext(g4);S&&!S.projection&&c&&(S.type==="html"||S.type==="svg")&&bC(C.current,s,c,T);const P=b.useRef(!1);b.useInsertionEffect(()=>{S&&P.current&&S.update(s,x)});const R=s[$g],E=b.useRef(!!R&&typeof window<"u"&&!((M=window.MotionHandoffIsComplete)!=null&&M.call(window,R))&&((F=window.MotionHasOptimisedAnimation)==null?void 0:F.call(window,R)));return lf(()=>{k.current=!0,S&&(P.current=!0,window.MotionIsMounted=!0,S.updateFeatures(),S.scheduleRenderMicrotask(),E.current&&S.animationState&&S.animationState.animateChanges())}),b.useEffect(()=>{S&&(!E.current&&S.animationState&&S.animationState.animateChanges(),E.current&&(queueMicrotask(()=>{var O;(O=window.MotionHandoffMarkAsComplete)==null||O.call(window,R)}),E.current=!1),S.enteringChildren=void 0)}),S}function bC(e,i,s,l){const{layoutId:c,layout:p,drag:d,dragConstraints:f,layoutScroll:x,layoutRoot:g,layoutAnchor:m,layoutCrossfade:j}=i;e.projection=new s(e.latestValues,i["data-framer-portal-id"]?void 0:v4(e.parent)),e.projection.setOptions({layoutId:c,layout:p,alwaysMeasureLayout:!!d||f&&as(f),visualElement:e,animationType:typeof p=="string"?p:"both",initialPromotionConfig:l,crossfade:j,layoutScroll:x,layoutRoot:g,layoutAnchor:m})}function v4(e){if(e)return e.options.allowProjection!==!1?e.projection:v4(e.parent)}function k1(e,{forwardMotionProps:i=!1,type:s}={},l,c){l&&rC(l);const p=s?s==="svg":Rf(e),d=p?yC:vC;function f(g,m){let j;const C={...b.useContext(Ef),...g,layoutId:SC(g)},{isStatic:k}=C,S=cC(g),T=d(g,k);if(!k&&typeof window<"u"){kC();const P=TC(C);j=P.MeasureLayout,S.visualElement=wC(e,T,C,c,P.ProjectionNode,p)}return t.jsxs(sd.Provider,{value:S,children:[j&&S.visualElement?t.jsx(j,{visualElement:S.visualElement,...C}):null,xC(e,g,CC(T,S.visualElement,m),T,k,i,p)]})}f.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const x=b.forwardRef(f);return x[jC]=e,x}function SC({layoutId:e}){const i=b.useContext(sf).id;return i&&e!==void 0?i+"-"+e:e}function kC(e,i){b.useContext(u4).strict}function TC(e){const i=p4(),{drag:s,layout:l}=i;if(!s&&!l)return{};const c={...s,...l};return{MeasureLayout:s!=null&&s.isEnabled(e)||l!=null&&l.isEnabled(e)?c.MeasureLayout:void 0,ProjectionNode:c.ProjectionNode}}function $C(e,i){if(typeof Proxy>"u")return k1;const s=new Map,l=(p,d)=>k1(p,d,e,i),c=(p,d)=>l(p,d);return new Proxy(c,{get:(p,d)=>d==="create"?l:(s.has(d)||s.set(d,k1(d,void 0,e,i)),s.get(d))})}const LC=(e,i)=>i.isSVG??Rf(e)?new rj(i):new Q7(i,{allowProjection:e!==b.Fragment});class BC extends Zi{constructor(i){super(i),i.animationState||(i.animationState=cj(i))}updateAnimationControlsSubscription(){const{animate:i}=this.node.getProps();id(i)&&(this.unmountControls=i.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:i}=this.node.getProps(),{animate:s}=this.node.prevProps||{};i!==s&&this.updateAnimationControlsSubscription()}unmount(){var i;this.node.animationState.reset(),(i=this.unmountControls)==null||i.call(this)}}let PC=0;class EC extends Zi{constructor(){super(...arguments),this.id=PC++,this.isExitComplete=!1}update(){var p;if(!this.node.presenceContext)return;const{isPresent:i,onExitComplete:s}=this.node.presenceContext,{isPresent:l}=this.node.prevPresenceContext||{};if(!this.node.animationState||i===l)return;if(i&&l===!1){if(this.isExitComplete){const{initial:d,custom:f}=this.node.getProps();if(typeof d=="string"||typeof d=="object"&&d!==null&&!Array.isArray(d)){const x=Pr(this.node,d,f);if(x){const{transition:g,transitionEnd:m,...j}=x;for(const C in j)(p=this.node.getValue(C))==null||p.jump(j[C])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const c=this.node.animationState.setActive("exit",!i);s&&!i&&c.then(()=>{this.isExitComplete=!0,s(this.id)})}mount(){const{register:i,onExitComplete:s}=this.node.presenceContext||{};s&&s(this.id),i&&(this.unmount=i(this.id))}unmount(){}}const DC={animation:{Feature:BC},exit:{Feature:EC}};function hl(e){return{point:{x:e.pageX,y:e.pageY}}}const RC=e=>i=>kf(i)&&e(i,hl(i));function qo(e,i,s,l){return cl(e,i,RC(s),l)}const y4=({current:e})=>e?e.ownerDocument.defaultView:null,om=(e,i)=>Math.abs(e-i);function IC(e,i){const s=om(e.x,i.x),l=om(e.y,i.y);return Math.sqrt(s**2+l**2)}const lm=new Set(["auto","scroll"]);class j4{constructor(i,s,{transformPagePoint:l,contextWindow:c=window,dragSnapToOrigin:p=!1,distanceThreshold:d=3,element:f}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=S=>{this.handleScroll(S.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Pa(this.lastRawMoveEventInfo,this.transformPagePoint));const S=T1(this.lastMoveEventInfo,this.history),T=this.startEvent!==null,P=IC(S.offset,{x:0,y:0})>=this.distanceThreshold;if(!T&&!P)return;const{point:R}=S,{timestamp:E}=bt;this.history.push({...R,timestamp:E});const{onStart:M,onMove:F}=this.handlers;T||(M&&M(this.lastMoveEvent,S),this.startEvent=this.lastMoveEvent),F&&F(this.lastMoveEvent,S)},this.handlePointerMove=(S,T)=>{this.lastMoveEvent=S,this.lastRawMoveEventInfo=T,this.lastMoveEventInfo=Pa(T,this.transformPagePoint),ze.update(this.updatePoint,!0)},this.handlePointerUp=(S,T)=>{this.end();const{onEnd:P,onSessionEnd:R,resumeAnimation:E}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&E&&E(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const M=T1(S.type==="pointercancel"?this.lastMoveEventInfo:Pa(T,this.transformPagePoint),this.history);this.startEvent&&P&&P(S,M),R&&R(S,M)},!kf(i))return;this.dragSnapToOrigin=p,this.handlers=s,this.transformPagePoint=l,this.distanceThreshold=d,this.contextWindow=c||window;const x=hl(i),g=Pa(x,this.transformPagePoint),{point:m}=g,{timestamp:j}=bt;this.history=[{...m,timestamp:j}];const{onSessionStart:C}=s;C&&C(i,T1(g,this.history));const k={passive:!0,capture:!0};this.removeListeners=ul(qo(this.contextWindow,"pointermove",this.handlePointerMove,k),qo(this.contextWindow,"pointerup",this.handlePointerUp,k),qo(this.contextWindow,"pointercancel",this.handlePointerUp,k)),f&&this.startScrollTracking(f)}startScrollTracking(i){let s=i.parentElement;for(;s;){const l=getComputedStyle(s);(lm.has(l.overflowX)||lm.has(l.overflowY))&&this.scrollPositions.set(s,{x:s.scrollLeft,y:s.scrollTop}),s=s.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(i){const s=this.scrollPositions.get(i);if(!s)return;const l=i===window,c=l?{x:window.scrollX,y:window.scrollY}:{x:i.scrollLeft,y:i.scrollTop},p={x:c.x-s.x,y:c.y-s.y};p.x===0&&p.y===0||(l?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=p.x,this.lastMoveEventInfo.point.y+=p.y):this.history.length>0&&(this.history[0].x-=p.x,this.history[0].y-=p.y),this.scrollPositions.set(i,c),ze.update(this.updatePoint,!0))}updateHandlers(i){this.handlers=i}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Ui(this.updatePoint)}}function Pa(e,i){return i?{point:i(e.point)}:e}function am(e,i){return{x:e.x-i.x,y:e.y-i.y}}function T1({point:e},i){return{point:e,delta:am(e,C4(i)),offset:am(e,AC(i)),velocity:zC(i,.1)}}function AC(e){return e[0]}function C4(e){return e[e.length-1]}function zC(e,i){if(e.length<2)return{x:0,y:0};let s=e.length-1,l=null;const c=C4(e);for(;s>=0&&(l=e[s],!(c.timestamp-l.timestamp>tn(i)));)s--;if(!l)return{x:0,y:0};l===e[0]&&e.length>2&&c.timestamp-l.timestamp>tn(i)*2&&(l=e[1]);const p=wn(c.timestamp-l.timestamp);if(p===0)return{x:0,y:0};const d={x:(c.x-l.x)/p,y:(c.y-l.y)/p};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function MC(e,{min:i,max:s},l){return i!==void 0&&e<i?e=l?Ae(i,e,l.min):Math.max(e,i):s!==void 0&&e>s&&(e=l?Ae(s,e,l.max):Math.min(e,s)),e}function cm(e,i,s){return{min:i!==void 0?e.min+i:void 0,max:s!==void 0?e.max+s-(e.max-e.min):void 0}}function VC(e,{top:i,left:s,bottom:l,right:c}){return{x:cm(e.x,s,c),y:cm(e.y,i,l)}}function dm(e,i){let s=i.min-e.min,l=i.max-e.max;return i.max-i.min<e.max-e.min&&([s,l]=[l,s]),{min:s,max:l}}function FC(e,i){return{x:dm(e.x,i.x),y:dm(e.y,i.y)}}function NC(e,i){let s=.5;const l=Ft(e),c=Ft(i);return c>l?s=ol(i.min,i.max-l,e.min):l>c&&(s=ol(e.min,e.max-c,i.min)),Xn(0,1,s)}function OC(e,i){const s={};return i.min!==void 0&&(s.min=i.min-e.min),i.max!==void 0&&(s.max=i.max-e.min),s}const Wp=.35;function _C(e=Wp){return e===!1?e=0:e===!0&&(e=Wp),{x:um(e,"left","right"),y:um(e,"top","bottom")}}function um(e,i,s){return{min:pm(e,i),max:pm(e,s)}}function pm(e,i){return typeof e=="number"?e:e[i]||0}const HC=new WeakMap;class WC{constructor(i){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=at(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=i}start(i,{snapToCursor:s=!1,distanceThreshold:l}={}){const{presenceContext:c}=this.visualElement;if(c&&c.isPresent===!1)return;const p=j=>{s&&this.snapToCursor(hl(j).point),this.stopAnimation()},d=(j,C)=>{const{drag:k,dragPropagation:S,onDragStart:T}=this.getProps();if(k&&!S&&(this.openDragLock&&this.openDragLock(),this.openDragLock=g7(k),!this.openDragLock))return;this.latestPointerEvent=j,this.latestPanInfo=C,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Wn(R=>{let E=this.getAxisMotionValue(R).get()||0;if(Yn.test(E)){const{projection:M}=this.visualElement;if(M&&M.layout){const F=M.layout.layoutBox[R];F&&(E=Ft(F)*(parseFloat(E)/100))}}this.originPoint[R]=E}),T&&ze.update(()=>T(j,C),!1,!0),Ip(this.visualElement,"transform");const{animationState:P}=this.visualElement;P&&P.setActive("whileDrag",!0)},f=(j,C)=>{this.latestPointerEvent=j,this.latestPanInfo=C;const{dragPropagation:k,dragDirectionLock:S,onDirectionLock:T,onDrag:P}=this.getProps();if(!k&&!this.openDragLock)return;const{offset:R}=C;if(S&&this.currentDirection===null){this.currentDirection=ZC(R),this.currentDirection!==null&&T&&T(this.currentDirection);return}this.updateAxis("x",C.point,R),this.updateAxis("y",C.point,R),this.visualElement.render(),P&&ze.update(()=>P(j,C),!1,!0)},x=(j,C)=>{this.latestPointerEvent=j,this.latestPanInfo=C,this.stop(j,C),this.latestPointerEvent=null,this.latestPanInfo=null},g=()=>{const{dragSnapToOrigin:j}=this.getProps();(j||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:m}=this.getProps();this.panSession=new j4(i,{onSessionStart:p,onStart:d,onMove:f,onSessionEnd:x,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:m,distanceThreshold:l,contextWindow:y4(this.visualElement),element:this.visualElement.current})}stop(i,s){const l=i||this.latestPointerEvent,c=s||this.latestPanInfo,p=this.isDragging;if(this.cancel(),!p||!c||!l)return;const{velocity:d}=c;this.startAnimation(d);const{onDragEnd:f}=this.getProps();f&&ze.postRender(()=>f(l,c))}cancel(){this.isDragging=!1;const{projection:i,animationState:s}=this.visualElement;i&&(i.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:l}=this.getProps();!l&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),s&&s.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(i,s,l){const{drag:c}=this.getProps();if(!l||!Ea(i,c,this.currentDirection))return;const p=this.getAxisMotionValue(i);let d=this.originPoint[i]+l[i];this.constraints&&this.constraints[i]&&(d=MC(d,this.constraints[i],this.elastic[i])),p.set(d)}resolveConstraints(){var p;const{dragConstraints:i,dragElastic:s}=this.getProps(),l=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(p=this.visualElement.projection)==null?void 0:p.layout,c=this.constraints;i&&as(i)?this.constraints||(this.constraints=this.resolveRefConstraints()):i&&l?this.constraints=VC(l.layoutBox,i):this.constraints=!1,this.elastic=_C(s),c!==this.constraints&&!as(i)&&l&&this.constraints&&!this.hasMutatedConstraints&&Wn(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=OC(l.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:i,onMeasureDragConstraints:s}=this.getProps();if(!i||!as(i))return!1;const l=i.current,{projection:c}=this.visualElement;if(!c||!c.layout)return!1;c.root&&(c.root.scroll=void 0,c.root.updateScroll());const p=Z7(l,c.root,this.visualElement.getTransformPagePoint());let d=FC(c.layout.layoutBox,p);if(s){const f=s(H7(d));this.hasMutatedConstraints=!!f,f&&(d=Hg(f))}return d}startAnimation(i){const{drag:s,dragMomentum:l,dragElastic:c,dragTransition:p,dragSnapToOrigin:d,onDragTransitionEnd:f}=this.getProps(),x=this.constraints||{},g=Wn(m=>{if(!Ea(m,s,this.currentDirection))return;let j=x&&x[m]||{};(d===!0||d===m)&&(j={min:0,max:0});const C=c?200:1e6,k=c?40:1e7,S={type:"inertia",velocity:l?i[m]:0,bounceStiffness:C,bounceDamping:k,timeConstant:750,restDelta:1,restSpeed:10,...p,...j};return this.startAxisValueAnimation(m,S)});return Promise.all(g).then(f)}startAxisValueAnimation(i,s){const l=this.getAxisMotionValue(i);return Ip(this.visualElement,i),l.start(jf(i,l,0,s,this.visualElement,!1))}stopAnimation(){Wn(i=>this.getAxisMotionValue(i).stop())}getAxisMotionValue(i){const s=`_drag${i.toUpperCase()}`,c=this.visualElement.getProps()[s];return c||this.visualElement.getValue(i,this.visualElement.latestValues[i]??0)}snapToCursor(i){Wn(s=>{const{drag:l}=this.getProps();if(!Ea(s,l,this.currentDirection))return;const{projection:c}=this.visualElement,p=this.getAxisMotionValue(s);if(c&&c.layout){const{min:d,max:f}=c.layout.layoutBox[s],x=p.get()||0;p.set(i[s]-Ae(d,f,.5)+x)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:i,dragConstraints:s}=this.getProps(),{projection:l}=this.visualElement;if(!as(s)||!l||!this.constraints)return;this.stopAnimation();const c={x:0,y:0};Wn(d=>{const f=this.getAxisMotionValue(d);if(f&&this.constraints!==!1){const x=f.get();c[d]=NC({min:x,max:x},this.constraints[d])}});const{transformTemplate:p}=this.visualElement.getProps();this.visualElement.current.style.transform=p?p({},""):"none",l.root&&l.root.updateScroll(),l.updateLayout(),this.constraints=!1,this.resolveConstraints(),Wn(d=>{if(!Ea(d,i,null))return;const f=this.getAxisMotionValue(d),{min:x,max:g}=this.constraints[d];f.set(Ae(x,g,c[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;HC.set(this.visualElement,this);const i=this.visualElement.current,s=qo(i,"pointerdown",g=>{const{drag:m,dragListener:j=!0}=this.getProps(),C=g.target,k=C!==i&&b7(C);m&&j&&!k&&this.start(g)});let l;const c=()=>{const{dragConstraints:g}=this.getProps();as(g)&&g.current&&(this.constraints=this.resolveRefConstraints(),l||(l=UC(i,g.current,()=>this.scalePositionWithinConstraints())))},{projection:p}=this.visualElement,d=p.addEventListener("measure",c);p&&!p.layout&&(p.root&&p.root.updateScroll(),p.updateLayout()),ze.read(c);const f=cl(window,"resize",()=>this.scalePositionWithinConstraints()),x=p.addEventListener("didUpdate",(({delta:g,hasLayoutChanged:m})=>{this.isDragging&&m&&(Wn(j=>{const C=this.getAxisMotionValue(j);C&&(this.originPoint[j]+=g[j].translate,C.set(C.get()+g[j].translate))}),this.visualElement.render())}));return()=>{f(),s(),d(),x&&x(),l&&l()}}getProps(){const i=this.visualElement.getProps(),{drag:s=!1,dragDirectionLock:l=!1,dragPropagation:c=!1,dragConstraints:p=!1,dragElastic:d=Wp,dragMomentum:f=!0}=i;return{...i,drag:s,dragDirectionLock:l,dragPropagation:c,dragConstraints:p,dragElastic:d,dragMomentum:f}}}function fm(e){let i=!0;return()=>{if(i){i=!1;return}e()}}function UC(e,i,s){const l=jx(e,fm(s)),c=jx(i,fm(s));return()=>{l(),c()}}function Ea(e,i,s){return(i===!0||i===e)&&(s===null||s===e)}function ZC(e,i=10){let s=null;return Math.abs(e.y)>i?s="y":Math.abs(e.x)>i&&(s="x"),s}class GC extends Zi{constructor(i){super(i),this.removeGroupControls=bn,this.removeListeners=bn,this.controls=new WC(i)}mount(){const{dragControls:i}=this.node.getProps();i&&(this.removeGroupControls=i.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||bn}update(){const{dragControls:i}=this.node.getProps(),{dragControls:s}=this.node.prevProps||{};i!==s&&(this.removeGroupControls(),i&&(this.removeGroupControls=i.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const $1=e=>(i,s)=>{e&&ze.update(()=>e(i,s),!1,!0)};class KC extends Zi{constructor(){super(...arguments),this.removePointerDownListener=bn}onPointerDown(i){this.session=new j4(i,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:y4(this.node)})}createPanHandlers(){const{onPanSessionStart:i,onPanStart:s,onPan:l,onPanEnd:c}=this.node.getProps();return{onSessionStart:$1(i),onStart:$1(s),onMove:$1(l),onEnd:(p,d)=>{delete this.session,c&&ze.postRender(()=>c(p,d))}}}mount(){this.removePointerDownListener=qo(this.node.current,"pointerdown",i=>this.onPointerDown(i))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let L1=!1;class qC extends b.Component{componentDidMount(){const{visualElement:i,layoutGroup:s,switchLayoutGroup:l,layoutId:c}=this.props,{projection:p}=i;p&&(s.group&&s.group.add(p),l&&l.register&&c&&l.register(p),L1&&p.root.didUpdate(),p.addEventListener("animationComplete",()=>{this.safeToRemove()}),p.setOptions({...p.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),vc.hasEverUpdated=!0}getSnapshotBeforeUpdate(i){const{layoutDependency:s,visualElement:l,drag:c,isPresent:p}=this.props,{projection:d}=l;return d&&(d.isPresent=p,i.layoutDependency!==s&&d.setOptions({...d.options,layoutDependency:s}),L1=!0,c||i.layoutDependency!==s||s===void 0||i.isPresent!==p?d.willUpdate():this.safeToRemove(),i.isPresent!==p&&(p?d.promote():d.relegate()||ze.postRender(()=>{const f=d.getStack();(!f||!f.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:i,layoutAnchor:s}=this.props,{projection:l}=i;l&&(l.options.layoutAnchor=s,l.root.didUpdate(),Sf.postRender(()=>{!l.currentAnimation&&l.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:i,layoutGroup:s,switchLayoutGroup:l}=this.props,{projection:c}=i;L1=!0,c&&(c.scheduleCheckAfterUnmount(),s&&s.group&&s.group.remove(c),l&&l.deregister&&l.deregister(c))}safeToRemove(){const{safeToRemove:i}=this.props;i&&i()}render(){return null}}function w4(e){const[i,s]=d4(),l=b.useContext(sf);return t.jsx(qC,{...e,layoutGroup:l,switchLayoutGroup:b.useContext(g4),isPresent:i,safeToRemove:s})}const YC={pan:{Feature:KC},drag:{Feature:GC,ProjectionNode:c4,MeasureLayout:w4}};function hm(e,i,s){const{props:l}=e;e.animationState&&l.whileHover&&e.animationState.setActive("whileHover",s==="Start");const c="onHover"+s,p=l[c];p&&ze.postRender(()=>p(i,hl(i)))}class XC extends Zi{mount(){const{current:i}=this.node;i&&(this.unmount=y7(i,(s,l)=>(hm(this.node,l,"Start"),c=>hm(this.node,c,"End"))))}unmount(){}}class QC extends Zi{constructor(){super(...arguments),this.isActive=!1}onFocus(){let i=!1;try{i=this.node.current.matches(":focus-visible")}catch{i=!0}!i||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ul(cl(this.node.current,"focus",()=>this.onFocus()),cl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function xm(e,i,s){const{props:l}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&l.whileTap&&e.animationState.setActive("whileTap",s==="Start");const c="onTap"+(s==="End"?"":s),p=l[c];p&&ze.postRender(()=>p(i,hl(i)))}class JC extends Zi{mount(){const{current:i}=this.node;if(!i)return;const{globalTapTarget:s,propagate:l}=this.node.props;this.unmount=k7(i,(c,p)=>(xm(this.node,p,"Start"),(d,{success:f})=>xm(this.node,d,f?"End":"Cancel")),{useGlobalTarget:s,stopPropagation:(l==null?void 0:l.tap)===!1})}unmount(){}}const Up=new WeakMap,B1=new WeakMap,ew=e=>{const i=Up.get(e.target);i&&i(e)},tw=e=>{e.forEach(ew)};function nw({root:e,...i}){const s=e||document;B1.has(s)||B1.set(s,{});const l=B1.get(s),c=JSON.stringify(i);return l[c]||(l[c]=new IntersectionObserver(tw,{root:e,...i})),l[c]}function iw(e,i,s){const l=nw(i);return Up.set(e,s),l.observe(e),()=>{Up.delete(e),l.unobserve(e)}}const rw={some:0,all:1};class sw extends Zi{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var x;(x=this.stopObserver)==null||x.call(this);const{viewport:i={}}=this.node.getProps(),{root:s,margin:l,amount:c="some",once:p}=i,d={root:s?s.current:void 0,rootMargin:l,threshold:typeof c=="number"?c:rw[c]},f=g=>{const{isIntersecting:m}=g;if(this.isInView===m||(this.isInView=m,p&&!m&&this.hasEnteredView))return;m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);const{onViewportEnter:j,onViewportLeave:C}=this.node.getProps(),k=m?j:C;k&&k(g)};this.stopObserver=iw(this.node.current,d,f)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:i,prevProps:s}=this.node;["amount","margin","root"].some(ow(i,s))&&this.startObserver()}unmount(){var i;(i=this.stopObserver)==null||i.call(this),this.hasEnteredView=!1,this.isInView=!1}}function ow({viewport:e={}},{viewport:i={}}={}){return s=>e[s]!==i[s]}const lw={inView:{Feature:sw},tap:{Feature:JC},focus:{Feature:QC},hover:{Feature:XC}},aw={layout:{ProjectionNode:c4,MeasureLayout:w4}},cw={...DC,...lw,...YC,...aw},_i=$C(cw,LC),vo={checkSquare:"M17.1177 5.3502C17.6146 5.8294 17.629 6.62072 17.1498 7.11767L9.43552 15.1177C9.19993 15.362 8.87512 15.5 8.53572 15.5C8.19631 15.5 7.8715 15.362 7.63591 15.1177L3.3502 10.6732C2.871 10.1763 2.88538 9.38495 3.38233 8.90575C3.87928 8.42655 4.67061 8.44094 5.14981 8.93789L8.53572 12.4492L15.3502 5.38233C15.8294 4.88538 16.6207 4.871 17.1177 5.3502Z",checkRounded:"M15.6836 6.30017C16.0949 6.71091 16.1068 7.38919 15.7102 7.81515L9.32595 14.6723C9.13098 14.8817 8.86217 15 8.58128 15C8.3004 15 8.03159 14.8817 7.83661 14.6723L4.28982 10.8628C3.89324 10.4368 3.90514 9.75853 4.31641 9.34779C4.72768 8.93704 5.38257 8.94938 5.77915 9.37533L8.58128 12.385L14.2208 6.32771C14.6174 5.90176 15.2723 5.88942 15.6836 6.30017Z",minimizeBold:"M3 10C3 9.17157 3.67157 8.5 4.5 8.5H15.5C16.3284 8.5 17 9.17157 17 10C17 10.8284 16.3284 11.5 15.5 11.5H4.5C3.67157 11.5 3 10.8284 3 10Z",bgSquare:"M0 3C0 1.34315 1.34315 0 3 0H17C18.6569 0 20 1.34315 20 3V17C20 18.6569 18.6569 20 17 20H3C1.34315 20 0 18.6569 0 17V3Z",bgRounded:"M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z"},dw=({path:e,viewBox:i,width:s,height:l,color:c})=>t.jsx("svg",{width:s,height:l,viewBox:i,fill:"none",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",style:{display:"block"},children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:e,fill:c})}),uw=({bgPath:e,checkPath:i,viewBox:s,width:l,height:c,bgColor:p,checkColor:d})=>t.jsx("svg",{width:l,height:c,viewBox:s,fill:"none",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",style:{display:"block"},children:t.jsxs("g",{children:[t.jsx("path",{d:e,fill:p}),t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:i,fill:d,id:"check bold"})]})}),pw=v.div`
  display: flex;
  align-items: center;
  gap: 16px; /* Gap between checkbox and label */
  cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
  user-select: none;
`,fw=v.div`
  width: ${e=>e.$size}px;
  height: ${e=>e.$size}px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: none; /* No animation - instant state change */
  flex-shrink: 0; /* Prevent flex compression */

  /* Shape */
  border-radius: ${e=>e.$shape==="rounded"?"9999px":"3px"};

  /* Default Border (Unchecked, Not Error) */
  border: 2px solid var(--Border-border-divider-03, rgba(213, 226, 242, 0.60));
  background: transparent;
  box-sizing: border-box;

  /* ================= State Logic ================= */

  /* 1. Disabled Unchecked */
  ${e=>e.$disabled&&!e.$checked&&!e.$indeterminate&&_`
      background: var(--Common-Control-Base-disabled, rgba(110, 124, 142, 0.30));
      border: 2px solid transparent; /* Keep border to maintain size */
    `}

  /* 2. Error Unchecked */
  ${e=>e.$error&&!e.$disabled&&!e.$checked&&!e.$indeterminate&&_`
      background: var(--Common-Control-Base-normal, #364356);
      border: 2px solid var(--Feedback-Red, #F53232);
    `}

  /* 3. Checked / Indeterminate (Active) */
  ${e=>(e.$checked||e.$indeterminate)&&_`
      background: var(--Common-Control-Active, #00B3E3);
      border: 2px solid transparent; /* Keep border to maintain size */
      
      /* If fully checked (not indeterminate), we use the full SVG so remove bg/border styles visually */
      ${e.$checked&&!e.$indeterminate&&_`
        background: transparent;
        border: none;
        /* Re-adjust size to full 20px if border is gone? 
           ControlWrapper size is set by width/height props. 
           If we remove border, content box is full size. 
           This is what we want for full SVG. */
      `}
    `}

  /* 4. Checked/Indeterminate Disabled */
  ${e=>(e.$checked||e.$indeterminate)&&e.$disabled&&_`
      background: var(--Common-Control-Base-disabled, rgba(110, 124, 142, 0.30));
      border: 2px solid transparent; /* Keep border to maintain size */

      /* If fully checked, remove CSS bg/border for SVG */
      ${e.$checked&&!e.$indeterminate&&_`
        background: transparent;
        border: none;
      `}
    `}
  
  /* Hover Effect (Removed as per request) */

  /* Pressed (Active) State - Removed as per request */

  /* Force Pressed / Hover for Demo - Removed */
`,hw=v.span`
  color: ${e=>e.$disabled?"var(--Button-content-disabled, rgba(182, 195, 214, 0.30))":"var(--Text-secondary, #D5E2F2)"};
  font-size: 14px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.2px;
  word-wrap: break-word;
`,H=({checked:e=!1,indeterminate:i=!1,disabled:s=!1,error:l=!1,shape:c="square",size:p=20,label:d,onChange:f,className:x,forcePressed:g,forceHover:m})=>{const j=k=>{s||f&&f(!e)},C=p/20;return t.jsxs(pw,{$disabled:s,className:x,onClick:j,onMouseDown:k=>k.preventDefault(),children:[t.jsx(fw,{$checked:e,$indeterminate:i,$disabled:s,$error:l,$shape:c,$size:p,$forcePressed:g,$forceHover:m,children:i?t.jsx(dw,{path:vo.minimizeBold,viewBox:"0 0 20 20",width:`${20*C}px`,height:`${20*C}px`,color:s?"var(--Common-Control-Content-disabled, rgba(182, 195, 214, 0.30))":"var(--Common-Control-Content-normal, #D5E2F2)"}):e?t.jsx(uw,{bgPath:c==="rounded"?vo.bgRounded:vo.bgSquare,checkPath:c==="rounded"?vo.checkRounded:vo.checkSquare,viewBox:"0 0 20 20",width:`${20*C}px`,height:`${20*C}px`,bgColor:s?"var(--Common-Control-Base-disabled, rgba(110, 124, 142, 0.30))":"var(--Common-Control-Active, #00B3E3)",checkColor:s?"var(--Common-Control-Content-disabled, rgba(182, 195, 214, 0.30))":"var(--Common-Control-Content-normal, #D5E2F2)"}):null}),d&&t.jsx(hw,{$disabled:s,children:d})]})},xw=v.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  width: 100%;
`,mw=v.div`
  display: grid;
  grid-template-columns: 100px 1fr 1fr;
  gap: 40px;
  margin-bottom: 24px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    & > :first-child { display: none; }
  }
`,lr=v.div`
  display: grid;
  grid-template-columns: 100px 1fr 1fr;
  gap: 40px;
  margin-bottom: 32px;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }
`,ar=v.div`
  display: contents;
  
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    width: 100%;
  }
`,mm=v.div`
  color: var(--Text-Assist, #B6C3D6);
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.2px;
`,cr=v.div`
  color: var(--Text-Assist, #B6C3D6);
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.2px;
`,gw=()=>t.jsx(H,{shape:"square"}),vw=()=>t.jsxs(xw,{children:[t.jsxs(mw,{children:[t.jsx("div",{}),t.jsx(mm,{children:"Default"}),t.jsx(mm,{children:"Round style"})]}),t.jsxs(lr,{children:[t.jsx(cr,{children:"Normal"}),t.jsxs(ar,{children:[t.jsx(H,{label:"Items",shape:"square"}),t.jsx(H,{label:"Items",shape:"rounded"})]})]}),t.jsxs(lr,{children:[t.jsx(cr,{children:"Disabled"}),t.jsxs(ar,{children:[t.jsx(H,{label:"Items",shape:"square",disabled:!0}),t.jsx(H,{label:"Items",shape:"rounded",disabled:!0})]})]}),t.jsxs(lr,{children:[t.jsx(cr,{children:"Error"}),t.jsxs(ar,{children:[t.jsx(H,{label:"Items",shape:"square",error:!0}),t.jsx(H,{label:"Items",shape:"rounded",error:!0})]})]}),t.jsxs(lr,{children:[t.jsx(cr,{children:"Active"}),t.jsxs(ar,{children:[t.jsx(H,{label:"Items",shape:"square",checked:!0}),t.jsx(H,{label:"Items",shape:"rounded",checked:!0})]})]}),t.jsxs(lr,{children:[t.jsx(cr,{children:"Active Disable"}),t.jsxs(ar,{children:[t.jsx(H,{label:"Items",shape:"square",checked:!0,disabled:!0}),t.jsx(H,{label:"Items",shape:"rounded",checked:!0,disabled:!0})]})]}),t.jsxs(lr,{children:[t.jsx(cr,{children:"Indeterminate"}),t.jsxs(ar,{children:[t.jsx(H,{label:"Items",shape:"square",indeterminate:!0}),t.jsx(H,{label:"Items",shape:"rounded",indeterminate:!0})]})]}),t.jsxs(lr,{children:[t.jsx(cr,{children:"Indeter. Disable"}),t.jsxs(ar,{children:[t.jsx(H,{label:"Items",shape:"square",indeterminate:!0,disabled:!0}),t.jsx(H,{label:"Items",shape:"rounded",indeterminate:!0,disabled:!0})]})]})]}),yw=v.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${e=>e.$color};
  font-size: 16px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.20px;
  word-wrap: break-word;
  text-align: left;
`,jw=v.button`
  width: 100%;
  min-height: 38px;
  padding: 8px 16px;
  border-radius: 7px;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  outline: none;
  text-decoration: none;

  /* Default Colors */
  --icon-color: var(--Common-Control-Content-normal, #D5E2F2);
  --text-color: var(--Common-Control-Content-normal, #D5E2F2);

  /* Active State (Selected) */
  ${e=>e.$active&&!e.$disabled&&_`
    --icon-color: var(--Common-Control-Active, #00B3E3);
    --text-color: var(--Common-Control-Active, #00B3E3);
  `}

  /* Disabled State */
  ${e=>e.$disabled&&_`
    cursor: not-allowed;
    --icon-color: var(--Common-Control-Content-disabled, rgba(182, 195, 214, 0.30));
    --text-color: var(--Common-Control-Content-disabled, rgba(182, 195, 214, 0.30));
  `}

  /* Pressed State (Click Interaction) */
  /* Applied via prop OR CSS active state */
  ${e=>(e.$pressed||!e.$disabled&&!e.$active)&&_`
    /* Ensure no hover effect */
    &:hover {
      background: transparent;
    }

    &:active {
      background: var(--Color-Common-Control-Base-pressed, #364356);
      --icon-color: var(--Color-Common-Control-Content-pressed, #9caabe);
      --text-color: var(--Color-Common-Control-Content-pressed, #9caabe);
    }
  `}

  /* Forced Pressed State (For Demo) */
  ${e=>e.$pressed&&_`
    background: var(--Color-Common-Control-Base-pressed, #364356);
    --icon-color: var(--Color-Common-Control-Content-pressed, #9caabe);
    --text-color: var(--Color-Common-Control-Content-pressed, #9caabe);
    
    /* Keep pressed state on hover for demo */
    &:hover {
      background: var(--Color-Common-Control-Base-pressed, #364356);
    }
  `}
`,br=({label:e,icon:i,active:s=!1,disabled:l=!1,pressed:c=!1,onClick:p,className:d,showLeadingIcon:f=!1,showTrailingIcon:x=!1,defaultLeadingIcon:g,defaultTrailingIcon:m})=>{const j=i||g,C=s?m||t.jsx(I3,{size:20}):m;return t.jsxs(jw,{$active:s,$disabled:l,$pressed:c,onClick:l?void 0:p,className:d,disabled:l,children:[f&&j&&t.jsx("div",{style:{color:"var(--icon-color)",display:"flex"},children:j}),t.jsx(yw,{$color:"var(--text-color)",children:e}),x&&C&&t.jsx("div",{style:{color:"var(--icon-color)",display:"flex"},children:C})]})},Cw=()=>{const[e,i]=b.useState(!1),[s,l]=b.useState(!1),[c,p]=b.useState(!1);return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"100%"},children:[t.jsxs("div",{style:{display:"flex",gap:"24px",marginBottom:"8px",flexWrap:"wrap"},children:[t.jsxs("div",{style:{color:"var(--Text-Secondary, #d5e2f2)",display:"flex",alignItems:"center",gap:"8px",fontSize:"14px",cursor:"pointer"},onClick:()=>i(!e),children:[t.jsx("div",{onClick:d=>d.stopPropagation(),children:t.jsx(H,{checked:e,onChange:i,shape:"square",size:20})}),"Active"]}),t.jsxs("div",{style:{color:"var(--Text-Secondary, #d5e2f2)",display:"flex",alignItems:"center",gap:"8px",fontSize:"14px",cursor:"pointer"},onClick:()=>l(!s),children:[t.jsx("div",{onClick:d=>d.stopPropagation(),children:t.jsx(H,{checked:s,onChange:l,shape:"square",size:20})}),"Disabled"]}),t.jsxs("div",{style:{color:"var(--Text-Secondary, #d5e2f2)",display:"flex",alignItems:"center",gap:"8px",fontSize:"14px",cursor:"pointer"},onClick:()=>p(!c),children:[t.jsx("div",{onClick:d=>d.stopPropagation(),children:t.jsx(H,{checked:c,onChange:p,shape:"square",size:20})}),"Show Icon"]})]}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",background:"var(--Colors-Surface-Backgronud--01, #131b26)",borderRadius:"16px",padding:"24px",width:"100%",alignItems:"center"},children:t.jsx("div",{style:{width:"100%",maxWidth:"300px"},children:t.jsx(br,{label:"Menu Item",active:e,disabled:s,icon:c?t.jsx(Ee,{}):void 0,onClick:()=>!s&&i(!e)})})})]})},ww=()=>{const[e,i]=b.useState(!1);return t.jsx("div",{style:{width:"100%",maxWidth:"300px"},children:t.jsx(br,{label:"Menu Item",active:e,onClick:()=>i(!e)})})},bw=v.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
`,Da=v.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Ra=v.div`
  color: var(--Text-Assist, #B6C3D6);
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.2px;
  margin-bottom: 4px;
`,Sw=()=>t.jsxs(bw,{children:[t.jsxs(Da,{children:[t.jsx(Ra,{children:"Normal"}),t.jsx("div",{style:{width:"100%",maxWidth:"300px"},children:t.jsx(br,{label:"List item",icon:t.jsx(Ee,{})})})]}),t.jsxs(Da,{children:[t.jsx(Ra,{children:"Pressed"}),t.jsx("div",{style:{width:"100%",maxWidth:"300px"},children:t.jsx(br,{label:"List item",pressed:!0,icon:t.jsx(Ee,{})})})]}),t.jsxs(Da,{children:[t.jsx(Ra,{children:"Active"}),t.jsx("div",{style:{width:"100%",maxWidth:"300px"},children:t.jsx(br,{label:"List item",active:!0,icon:t.jsx(Ee,{})})})]}),t.jsxs(Da,{children:[t.jsx(Ra,{children:"Disabled"}),t.jsx("div",{style:{width:"100%",maxWidth:"300px"},children:t.jsx(br,{label:"List item",disabled:!0,icon:t.jsx(Ee,{})})})]})]}),kw=()=>t.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("g",{id:"Icon_Arrow_Down",children:t.jsx("path",{d:"M8 9.79273L13.0343 4.63983C13.3467 4.32006 13.8533 4.32006 14.1657 4.63983C14.4781 4.95961 14.4781 5.47807 14.1657 5.79785L8.84853 11.2402C8.3799 11.7199 7.6201 11.7199 7.15147 11.2402L1.83431 5.79785C1.5219 5.47807 1.5219 4.95961 1.83431 4.63983C2.14673 4.32006 2.65327 4.32006 2.96569 4.63983L8 9.79273Z",fill:"currentColor"})})}),yc=()=>t.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("g",{id:"Icons/ icon_more",children:t.jsxs("g",{id:"Icon",children:[t.jsx("path",{d:"M13.8 5.4C13.8 6.39411 12.9941 7.2 12 7.2C11.0059 7.2 10.2 6.39411 10.2 5.4C10.2 4.40589 11.0059 3.6 12 3.6C12.9941 3.6 13.8 4.40589 13.8 5.4Z",fill:"currentColor"}),t.jsx("path",{d:"M12 13.8C12.9941 13.8 13.8 12.9941 13.8 12C13.8 11.0059 12.9941 10.2 12 10.2C11.0059 10.2 10.2 11.0059 10.2 12C10.2 12.9941 11.0059 13.8 12 13.8Z",fill:"currentColor"}),t.jsx("path",{d:"M12 20.4C12.9941 20.4 13.8 19.5941 13.8 18.6C13.8 17.6059 12.9941 16.8 12 16.8C11.0059 16.8 10.2 17.6059 10.2 18.6C10.2 19.5941 11.0059 20.4 12 20.4Z",fill:"currentColor"})]})})}),gm=()=>t.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 18.5C14.6944 18.5 18.5 14.6944 18.5 10C18.5 5.30558 14.6944 1.5 10 1.5C5.30558 1.5 1.5 5.30558 1.5 10C1.5 14.6944 5.30558 18.5 10 18.5ZM12 7.5C12 8.60457 11.1046 9.5 10 9.5C8.89543 9.5 8 8.60457 8 7.5C8 6.39543 8.89543 5.5 10 5.5C11.1046 5.5 12 6.39543 12 7.5ZM10 10.5C12.2091 10.5 14 11.7663 14 13.3284C14 14.8905 6 14.8905 6 13.3284C6 11.7663 7.79086 10.5 10 10.5Z",fill:"currentColor"})}),Tw=v.div`
  display: inline-flex;
  flex-direction: column;
  gap: 8px;
  width: ${e=>e.$variant==="icon"?"fit-content":"100%"};
`,$w=v.div`
  color: var(--Text-Secondary, #D5E2F2);
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.2px;
`,Lw=v.div`
  color: var(--Text-Assist, #B6C3D6);
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.2px;
`,Bw=v.div`
  position: relative;
  width: ${e=>e.$variant==="icon"?"fit-content":"100%"};
  min-width: ${e=>e.$variant==="icon"?"48px":"152px"};
  font-family: Roboto, sans-serif;
`,Pw=v.button`
  /* Common Styles */
  border: none;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;

  /* Variant Specific */
  ${e=>e.$variant==="icon"?_`
    width: 48px;
    height: 48px;
    border-radius: 9999px;
    justify-content: center;
    padding: 0;
  `:_`
    width: 100%;
    min-height: 38px;
    padding: 8px 16px;
    border-radius: 7px;
    justify-content: space-between;
    gap: 8px;
    text-align: left;
  `}

  /* Default Variables */
  --bg-color: var(--Common-Control-Base-normal, #364356);
  --text-color: var(--Common-Control-Content-normal, #D5E2F2);
  --icon-color: var(--Common-Control-Content-normal, #D5E2F2);

  /* Normal State */
  background: ${e=>e.$variant==="icon"?"transparent":"var(--bg-color)"}; 
  color: var(--text-color);
  outline: 1.5px solid transparent;
  outline-offset: -1.5px;

  /* Open / Pressed State */
  ${e=>e.$isOpen&&!e.$disabled&&!e.$error&&_`
    --bg-color: var(--Common-Control-Base-pressed, rgba(54, 67, 86, 0.60));
    --text-color: var(--Common-Control-Content-pressed, #6E7C8E);
    --icon-color: var(--Common-Control-Content-pressed, #6E7C8E);
    
    /* Icon variant specific pressed bg */
    ${e.$variant==="icon"&&_`
        background: var(--Button-secondary-base-pressed, rgba(110, 124, 142, 0.25)); 
    `}
  `}

  /* Disabled State */
  ${e=>e.$disabled&&_`
    cursor: not-allowed;
    --bg-color: var(--Common-Control-Base-disabled, rgba(110, 124, 142, 0.30));
    --text-color: var(--Common-Control-Content-disabled, rgba(182, 195, 214, 0.30));
    --icon-color: var(--Common-Control-Content-disabled, rgba(182, 195, 214, 0.30));
    
    ${e.$variant==="icon"&&_`
       opacity: 0.5;
    `}
  `}

  /* Error State */
  ${e=>e.$error&&!e.$disabled&&!e.$isOpen&&_`
    --bg-color: var(--Components-Common-Control-Default-base-normal, rgba(170, 173, 185, 0.20));
    outline: 1.5px solid var(--Components-Common-Control-content-error, #D93C50);
    outline-offset: -1.5px;
  `}
`,Ew=v.span`
  flex: 1;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.2px;
  word-wrap: break-word;
  color: inherit;
`,Dw=v.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--icon-color);
`,Rw=v(_i.div)`
  position: absolute;
  top: calc(100% + 8px);
  ${e=>e.$align==="right"?"right: 0;":"left: 0;"}
  width: ${e=>e.$variant==="icon"?"max-content":"100%"};
  min-width: 152px; 
  max-width: 300px;
  background: var(--Colors-Surface-Backgronud--02, #2a3649);
  border-radius: 7px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  z-index: 50;
  box-shadow: var(--card-shadow, 0px 8px 16px rgba(0, 0, 0, 0.15));
  overflow: hidden;
`,Rt=({options:e,value:i,onChange:s,placeholder:l="List item",disabled:c=!1,error:p=!1,className:d,variant:f="text",startIcon:x,icon:g,forceOpen:m=!1,title:j,supportText:C,align:k="left",showLeadingIcon:S=!1,showTrailingIcon:T=!1,defaultLeadingIcon:P,defaultTrailingIcon:R})=>{const[E,M]=b.useState(m),F=b.useRef(null);b.useEffect(()=>{m&&M(!0)},[m]),b.useEffect(()=>{const z=J=>{F.current&&!F.current.contains(J.target)&&(m||M(!1))};return document.addEventListener("mousedown",z),()=>document.removeEventListener("mousedown",z)},[m]);const O=()=>{!c&&!m&&M(!E)},X=z=>{s&&s(z),m||M(!1)},V=e.find(z=>z.value===i);return t.jsxs(Tw,{className:d,$variant:f,children:[j&&t.jsx($w,{children:j}),t.jsxs(Bw,{ref:F,$variant:f,children:[t.jsx(Pw,{onClick:O,$isOpen:E,$disabled:c,$error:p,$variant:f,type:"button",children:f==="text"?t.jsxs(t.Fragment,{children:[x&&t.jsx("div",{style:{marginRight:8,display:"flex",color:"var(--icon-color)"},children:x}),t.jsx(Ew,{children:V?V.label:l}),t.jsx(Dw,{children:t.jsx(_i.div,{animate:{rotate:E?180:0},transition:{duration:.2},children:t.jsx(kw,{})})})]}):t.jsx("div",{style:{display:"flex",color:"var(--icon-color)"},children:g||t.jsx(yc,{})})}),t.jsx(ls,{children:E&&t.jsx(Rw,{$variant:f,$align:k,initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},children:e.map(z=>t.jsx(br,{label:z.label,icon:z.icon,onClick:()=>X(z.value),active:z.value===i,showLeadingIcon:S,showTrailingIcon:T,defaultLeadingIcon:P,defaultTrailingIcon:R},z.value))})})]}),C&&t.jsx(Lw,{children:C})]})},Iw=v.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  padding: 40px;
  background: #131b26; /* Darker bg for demo to match image */
  border-radius: 16px;
`,Aw=v.div`
  display: grid;
  grid-template-columns: 80px 1fr 1fr;
  gap: 24px 40px;
  align-items: start;
`,P1=v.div`
  color: var(--Text-Primary, #ffffff);
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
`,dr=v.div`
  color: var(--Text-Assist, #B6C3D6);
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  padding-top: 10px; /* Align with input */
`,zw=()=>{const[e,i]=b.useState(""),s=[{label:"List item",value:"item1"},{label:"List item",value:"item2"},{label:"List item",value:"item3"},{label:"List item",value:"item4"}];return t.jsxs(Iw,{children:[t.jsxs(Aw,{children:[t.jsx("div",{}),t.jsx(P1,{children:"Default"}),t.jsx(P1,{children:"Pinned"}),t.jsx(dr,{children:"Normal"}),t.jsx(Rt,{options:s,placeholder:"List item",variant:"text"}),t.jsx(Rt,{options:s,placeholder:"List item",variant:"icon",icon:t.jsx(yc,{})}),t.jsx(dr,{children:"Pressed"}),t.jsxs("div",{style:{height:"220px"},children:[" ",t.jsx(Rt,{options:s,placeholder:"List item",variant:"text",forceOpen:!0})]}),t.jsx("div",{style:{height:"220px"},children:t.jsx(Rt,{options:s,placeholder:"List item",variant:"icon",icon:t.jsx(yc,{}),forceOpen:!0})}),t.jsx(dr,{children:"Disable"}),t.jsx(Rt,{options:s,placeholder:"List item",disabled:!0,variant:"text"}),t.jsx(Rt,{options:s,placeholder:"List item",disabled:!0,variant:"icon",icon:t.jsx(yc,{})}),t.jsx(dr,{children:"Error"}),t.jsx(Rt,{options:s,placeholder:"List item",error:!0,variant:"text"}),t.jsx("div",{})]}),t.jsxs("div",{style:{marginTop:"40px",paddingTop:"40px",borderTop:"1px solid var(--Border-border-divider-01, #4B596C)"},children:[t.jsx(P1,{style:{marginBottom:"24px"},children:"Figma Properties: Show Leading/Trailing Icons ⭐"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[t.jsxs("div",{children:[t.jsx(dr,{style:{marginBottom:"16px"},children:"Show Leading Icon = ON"}),t.jsx("div",{style:{height:"220px",maxWidth:"300px"},children:t.jsx(Rt,{options:s,placeholder:"List item",variant:"text",forceOpen:!0,value:"item1",showLeadingIcon:!0,defaultLeadingIcon:t.jsx(gm,{})})})]}),t.jsxs("div",{children:[t.jsx(dr,{style:{marginBottom:"16px"},children:"Show Trailing Icon = ON"}),t.jsx("div",{style:{height:"220px",maxWidth:"300px"},children:t.jsx(Rt,{options:s,placeholder:"List item",variant:"text",forceOpen:!0,value:"item2",showTrailingIcon:!0})})]}),t.jsxs("div",{children:[t.jsx(dr,{style:{marginBottom:"16px"},children:"Both Leading & Trailing Icons = ON"}),t.jsx("div",{style:{height:"220px",maxWidth:"300px"},children:t.jsx(Rt,{options:s,placeholder:"List item",variant:"text",forceOpen:!0,value:"item3",showLeadingIcon:!0,showTrailingIcon:!0,defaultLeadingIcon:t.jsx(gm,{})})})]})]})]})]})},E1={p3228d072:"M20 23C21.6569 23 23 21.6569 23 20C23 18.3431 21.6569 17 20 17C18.3431 17 17 18.3431 17 20C17 21.6569 18.3431 23 20 23Z",p51c7600:"M23 9C23 10.6569 21.6569 12 20 12C18.3431 12 17 10.6569 17 9C17 7.34315 18.3431 6 20 6C21.6569 6 23 7.34315 23 9Z",p8ea7e00:"M20 34C21.6569 34 23 32.6569 23 31C23 29.3431 21.6569 28 20 28C18.3431 28 17 29.3431 17 31C17 32.6569 18.3431 34 20 34Z"};function Mw(){return t.jsx("div",{className:"relative size-full","data-name":"Icons/ icon_more",children:t.jsx("svg",{className:"block size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 40 40",children:t.jsx("g",{id:"Icons/ icon_more",children:t.jsxs("g",{id:"Icon",children:[t.jsx("path",{d:E1.p51c7600,fill:"var(--fill-0, white)"}),t.jsx("path",{d:E1.p3228d072,fill:"var(--fill-0, white)"}),t.jsx("path",{d:E1.p8ea7e00,fill:"var(--fill-0, white)"})]})})})})}const Vw=Ss`
  0% { opacity: 1; }
  69% { opacity: 1; }      /* 0.9s / 1.3s */
  77% { opacity: 0; }      /* (0.9 + 0.1)s / 1.3s */
  92% { opacity: 0; }      /* (0.9 + 0.1 + 0.2)s / 1.3s */
  100% { opacity: 1; }     /* (0.9 + 0.1 + 0.2 + 0.1)s / 1.3s */
`,Fw=Ss`
  from { opacity: 0; }
  to { opacity: 1; }
`,Nw=Ss`
  from { opacity: 1; }
  to { opacity: 0; }
`,Ow=v.div`
  display: inline-flex;
  flex-direction: column;
  gap: 8px;
  width: ${e=>e.$fullWidth?"100%":"auto"};
`,_w=v.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  min-width: 0; /* Allow shrinking in flex/grid contexts */
  width: 100%;
  min-height: 38px;
  
  /* Shape */
  border-radius: ${e=>e.$shape==="round"?"9999px":"7px"};

  /* Background & Border Logic */
  background: var(--Common-Control-Base-normal, #364356);
  outline: 1.5px solid transparent;
  outline-offset: -1.5px;
  transition: all 0.2s ease-in-out;

  /* Pressed State (Active click) - User's code has a "Pressed" state with darker bg */
  ${e=>e.$pressed&&!e.$disabled&&!e.$active&&_`
      background: var(--Common-Control-Base-pressed, #2A3649);
      outline-color: transparent; /* Ensure outline disappears on press if previously error/active but now pressed (though logic separates them) */
    `}
  
  /* Error State - pressed state overrides error outline visual if pressed has higher specificity or logic */
  /* Re-ordering: Pressed should probably override Error outline if you want "Error -> Pressed -> Error outline disappears" */
  
  /* Let's adjust the logic slightly. */

  /* Default */

  /* Disabled */
  
  /* Error */
  ${e=>e.$error&&!e.$disabled&&!e.$pressed&&_`
      outline-color: var(--Components-Common-Control-content-error, #F53232);
    `}

  /* Active/Focus State */
  ${e=>e.$active&&!e.$disabled&&!e.$error&&_`
      outline-color: var(--Components-Common-Control-content-active-normal, #00A0CB);
    `}

  /* Pressed State */
  ${e=>e.$pressed&&!e.$disabled&&!e.$active&&_`
      background: var(--Common-Control-Base-pressed, #2A3649);
      /* Implicitly outline color remains transparent from default */
    `}

  &:active:not(:focus-within) {
    ${e=>!e.$disabled&&!e.$active&&_`
        background: var(--Common-Control-Base-pressed, #2A3649);
      `}
  }

  /* Hover State - Optional, not strictly in demo but good for UX */
  /*
  &:hover {
     ...
  }
  */
`,Hw=v.input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  
  /* Typography */
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.2px;
  
  /* Colors */
  color: var(--Text-Primary, #FFFFFF);
  caret-color: transparent;

  &::placeholder {
    color: var(--Common-Control-Content-normal, #D5E2F2);
    opacity: 1; /* Firefox fix */
  }

  &:disabled {
    color: var(--Common-Control-Content-disabled, #4B596C);
    cursor: not-allowed;
    &::placeholder {
      color: var(--Common-Control-Content-disabled, #4B596C);
    }
  }
`,Ww=v.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  padding: 0;
  cursor: pointer;
  flex-shrink: 0;
  animation: ${e=>e.$isExiting?Nw:Fw} 0.15s ease-in-out forwards;
  
  &:hover {
    opacity: 0.8;
  }
`,Uw=()=>t.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("g",{id:"Icons/ icon_close_round",children:t.jsxs("g",{id:"Icon",children:[t.jsx("path",{d:"M6.21967 6.21967C6.51256 5.92678 6.98744 5.92678 7.28033 6.21967L10.1088 9.0481L12.9372 6.21967C13.2301 5.92678 13.705 5.92678 13.9978 6.21967C14.2907 6.51256 14.2907 6.98744 13.9978 7.28033L11.1694 10.1088L13.9978 12.9372C14.2907 13.2301 14.2907 13.705 13.9978 13.9978C13.705 14.2907 13.2301 14.2907 12.9372 13.9978L10.1088 11.1694L7.28033 13.9978C6.98744 14.2907 6.51256 14.2907 6.21967 13.9978C5.92678 13.705 5.92678 13.2301 6.21967 12.9372L9.0481 10.1088L6.21967 7.28033C5.92678 6.98744 5.92678 6.51256 6.21967 6.21967Z",fill:"var(--Common-Control-Content-normal, #D5E2F2)"}),t.jsx("path",{clipRule:"evenodd",d:"M1.5 10C1.5 14.6944 5.30558 18.5 10 18.5C14.6944 18.5 18.5 14.6944 18.5 10C18.5 5.30558 14.6944 1.5 10 1.5C5.30558 1.5 1.5 5.30558 1.5 10ZM17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",fill:"var(--Common-Control-Content-normal, #D5E2F2)",fillRule:"evenodd"})]})})}),Zw=v.span`
  color: var(--Text-error, #F53232);
  font-size: 14px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.22px;
  padding-left: 0; /* Aligned with container */
`,Gw=v.div`
  color: var(--Text-Secondary, #D5E2F2);
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.2px;
`,Kw=v.div`
  color: var(--Text-Assist, #B6C3D6);
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.2px;
`,b4=v.div`
  position: absolute;
  /* Top calculation: (40px height - 8px*2 padding)/2 center? 
     InputWrapper height depends on padding. Input is 20px line-height.
     Wrapper padding 8px. Total height roughly 36px + borders.
     Let's center vertically. */
  top: 50%;
  transform: translateY(-50%);
  width: 2px;
  height: 20px;
  background-color: var(--Text-Secondary, #D5E2F2);
  border-radius: 3px;
  pointer-events: none;
  
  /* Animation */
  animation: ${e=>e.$visible?_`${Vw} 1.3s infinite ease-out`:"none"};
  display: ${e=>e.$visible?"block":"none"};
  
  /* Ensure it is above input text if needed, but usually text is fine */
  z-index: 1;
`,qw=(e,i)=>{if(typeof document>"u")return 0;const l=document.createElement("canvas").getContext("2d");return l?(l.font=i,l.measureText(e).width+e.length*.2):0},et=en.forwardRef(({value:e,onChange:i,onClear:s,placeholder:l="Placeholder",disabled:c=!1,error:p=!1,shape:d="default",title:f,supportText:x,fullWidth:g=!1,forceFocus:m=!1,forcePressed:j=!1,className:C,...k},S)=>{const[T,P]=b.useState(!1),[R,E]=b.useState(!1),[M,F]=b.useState(0),O=b.useRef(null),X=ne=>{O.current=ne,typeof S=="function"?S(ne):S&&(S.current=ne)},V=()=>{const ne=O.current;if(!ne)return;const ue=ne.selectionStart||0,je=ne.value.substring(0,ue),be=qw(je,"400 14px Roboto"),Se=ne.scrollLeft,Be=ue===0?-2:0;F(16+be+Be-Se)};b.useEffect(()=>{(T||m)&&V()},[e,T,m]);const z=ne=>{var ue;P(!0),(ue=k.onFocus)==null||ue.call(k,ne),requestAnimationFrame(V)},J=ne=>{var ue;P(!1),(ue=k.onBlur)==null||ue.call(k,ne)},Q=()=>E(!0),ae=()=>E(!1),me=()=>E(!1),ge=ne=>{i(ne.target.value)},ke=()=>{V()},Ie=()=>{V()},$e=()=>{requestAnimationFrame(V)},De=()=>{V()},[Z,ee]=b.useState(!1),[Y,B]=b.useState(!1),N=!c&&(T||m)&&e.length>0;b.useEffect(()=>{if(N)ee(!0),B(!1);else if(Z){B(!0);const ne=setTimeout(()=>{ee(!1),B(!1)},150);return()=>clearTimeout(ne)}},[N]);const pe=ne=>{ne.preventDefault(),ne.stopPropagation(),i(""),s==null||s()};return t.jsxs(Ow,{$fullWidth:g,className:C,children:[f&&t.jsx(Gw,{children:f}),t.jsxs(_w,{onMouseDown:Q,onMouseUp:ae,onMouseLeave:me,$disabled:c,$error:!!p&&!T,$active:(T||m)&&!R,$pressed:j||R,$shape:d,style:{position:"relative"},children:[t.jsx(b4,{$visible:!c&&(T||m),style:{left:`${M}px`}}),t.jsx(Hw,{ref:X,value:e,onChange:ge,onFocus:z,onBlur:J,onSelect:ke,onScroll:Ie,onKeyDown:$e,onKeyUp:De,placeholder:l,disabled:c,$disabled:c,...k}),Z&&t.jsx(Ww,{onMouseDown:pe,type:"button",tabIndex:-1,$isExiting:Y,style:{pointerEvents:Y?"none":"auto"},children:t.jsx(Uw,{})})]}),p&&typeof p=="string"&&!T?t.jsx(Zw,{children:p}):x&&t.jsx(Kw,{children:x})]})});et.displayName="InputField";const Yw=v.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  width: 100%;
`,Xw=v.div`
  display: grid;
  grid-template-columns: 100px 1fr 1fr;
  gap: 40px;
  margin-bottom: 24px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-left: 0;
    
    /* Hide the first column (spacer) visually or structurally */
    & > :first-child {
      display: none;
    }
  }
`,ur=v.div`
  display: grid;
  grid-template-columns: 100px 1fr 1fr;
  gap: 40px;
  margin-bottom: 32px;
  align-items: flex-start;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`,pr=v.div`
  display: contents; /* Default for desktop: let children participate in parent grid */
  
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    width: 100%;
  }
`,vm=v.div`
  color: var(--Text-Assist, #B6C3D6);
  font-family: Roboto, sans-serif;
  font-size: var(--font-subheader-2-size, 16px);
  font-weight: var(--font-subheader-2-weight, 500);
  line-height: var(--font-subheader-2-line-height, 22px);
  letter-spacing: var(--font-subheader-2-letter-spacing, 0.2px);
`,fr=v.div`
  color: var(--Text-Assist, #B6C3D6);
  font-family: Roboto, sans-serif;
  font-size: var(--font-body-2-size, 14px);
  font-weight: var(--font-body-2-weight, 400);
  line-height: var(--font-body-2-line-height, 20px);
  letter-spacing: var(--font-body-2-letter-spacing, 0.2px);
  padding-top: 10px;
`;v.div`
  width: 2px;
  height: 24px;
  background-color: #00A0CB;
  margin-left: 16px;
`;const Qw=()=>{const[e,i]=b.useState("Lorem ipsum dolor sit amet"),[s,l]=b.useState("Lorem ipsum dolor sit amet"),[c,p]=b.useState("Lorem ipsum dolor sit amet"),[d,f]=b.useState("Lorem ipsum dolor sit amet");return t.jsxs(Yw,{children:[t.jsxs(Xw,{children:[t.jsx("div",{})," ",t.jsx(vm,{children:"Default"}),t.jsx(vm,{children:"Round style"})]}),t.jsxs(ur,{children:[t.jsx(fr,{children:"Normal"}),t.jsxs(pr,{children:[t.jsx(et,{value:"",onChange:()=>{},placeholder:"Placeholder",shape:"default",fullWidth:!0}),t.jsx(et,{value:"",onChange:()=>{},placeholder:"Placeholder",shape:"round",fullWidth:!0})]})]}),t.jsxs(ur,{children:[t.jsx(fr,{children:"Pressed"}),t.jsxs(pr,{children:[t.jsx(et,{value:"",onChange:()=>{},placeholder:"Placeholder",shape:"default",fullWidth:!0,forcePressed:!0}),t.jsx(et,{value:"",onChange:()=>{},placeholder:"Placeholder",shape:"round",fullWidth:!0,forcePressed:!0})]})]}),t.jsxs(ur,{children:[t.jsx(fr,{children:"Active"}),t.jsxs(pr,{children:[t.jsx(et,{value:e,onChange:i,placeholder:"Placeholder",shape:"default",fullWidth:!0,forceFocus:!0}),t.jsx(et,{value:c,onChange:p,placeholder:"Placeholder",shape:"round",fullWidth:!0,forceFocus:!0})]})]}),t.jsxs(ur,{children:[t.jsx(fr,{children:"Filled"}),t.jsxs(pr,{children:[t.jsx(et,{value:s,onChange:l,placeholder:"Placeholder",shape:"default",fullWidth:!0}),t.jsx(et,{value:d,onChange:f,placeholder:"Placeholder",shape:"round",fullWidth:!0})]})]}),t.jsxs(ur,{children:[t.jsx(fr,{children:"Disable"}),t.jsxs(pr,{children:[t.jsx(et,{value:"",onChange:()=>{},placeholder:"Placeholder",shape:"default",disabled:!0,fullWidth:!0}),t.jsx(et,{value:"",onChange:()=>{},placeholder:"Placeholder",shape:"round",disabled:!0,fullWidth:!0})]})]}),t.jsxs(ur,{children:[t.jsx(fr,{children:"Error"}),t.jsxs(pr,{children:[t.jsx(et,{value:"",onChange:()=>{},placeholder:"Placeholder",shape:"default",error:"Error message",fullWidth:!0}),t.jsx(et,{value:"",onChange:()=>{},placeholder:"Placeholder",shape:"round",error:"Error message",fullWidth:!0})]})]}),t.jsxs(ur,{children:[t.jsx(fr,{children:"Caret"}),t.jsxs(pr,{children:[t.jsx("div",{style:{position:"relative",height:"40px",display:"flex",alignItems:"center"},children:t.jsx(b4,{$visible:!0,style:{position:"relative",left:"16px",top:"auto",transform:"none"}})}),t.jsx("div",{})]})]})]})},Jw=Ss`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,eb=v.div`
  width: 24px;
  height: 24px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`,tb=v.div`
  width: 19.2px;
  height: 19.2px;
  position: absolute;
  border-radius: 50%;
  border: 2.4px solid var(--Color-Neutral-70, #364356);
`,nb=v.div`
  width: 19.2px;
  height: 19.2px;
  position: absolute;
  border-radius: 50%;
  border: 2.4px solid transparent;
  border-top-color: #bccadc;
  border-right-color: #6e7c8e;
  animation: ${Jw} 1s linear infinite;
`,ib=(e,i)=>{const s=i==="pressed",l=i==="disabled",c=i==="loading",p={filled:_`
      background: var(--Button-primary-base-pressed, #0589c9);
      color: var(
        --Button-primary-content-pressed,
        rgba(255, 255, 255, 0.8)
      );
    `,"filled-secondary":_`
      background: var(
        --Button-secondary-base-pressed,
        rgba(110, 124, 142, 0.25)
      );
      color: var(--Button-secondary-content-pressed, #6e7c8e);
    `,outlined:_`
      background: var(
        --Button-secondary-base-pressed,
        rgba(110, 124, 142, 0.25)
      );
      border-color: var(
        --Button-secondary-content-pressed,
        #6e7c8e
      );
      color: var(--Button-secondary-content-pressed, #6e7c8e);
    `,text:_`
      background: var(
        --Button-secondary-base-pressed,
        rgba(110, 124, 142, 0.25)
      );
      color: var(--Button-secondary-content-pressed, #6e7c8e);
    `,hyperlink:_`
      color: var(
        --Text-Hyperlink-pressed,
        rgba(0, 179, 227, 0.6)
      );
    `,"hyperlink-white":_`
      color: var(--Button-secondary-content-pressed, #6e7c8e);
    `},d=!l&&!c?_`
          &:active {
            ${p[e]}
          }
        `:_``;switch(e){case"filled":return _`
        background: ${l||c?"var(--Button-base-disabled, rgba(110, 124, 142, 0.10))":s?"var(--Button-primary-base-pressed, #0589C9)":"var(--Button-primary-base-normal, #00B3E3)"};

        color: ${l?"var(--Button-content-disabled, rgba(182, 195, 214, 0.30))":s?"var(--Button-primary-content-pressed, rgba(255, 255, 255, 0.80))":"var(--Button-primary-content-normal, white)"};

        ${d}
      `;case"filled-secondary":return _`
        background: ${l||c?"var(--Button-base-disabled, rgba(110, 124, 142, 0.10))":s?"var(--Button-secondary-base-pressed, rgba(110, 124, 142, 0.25))":"var(--Surface-Backgronud--02, #2A3649)"};

        color: ${l?"var(--Button-content-disabled, rgba(182, 195, 214, 0.30))":s?"var(--Button-secondary-content-pressed, #6E7C8E)":"var(--Button-secondary-content-normal, white)"};

        ${d}
      `;case"outlined":return _`
        background: ${s?"var(--Button-secondary-base-pressed, rgba(110, 124, 142, 0.25))":c?"var(--Button-secondary-base-normal, rgba(255, 255, 255, 0.15))":"transparent"};

        border: 1.5px solid
          ${l?"var(--Button-content-disabled, rgba(182, 195, 214, 0.30))":s?"var(--Button-secondary-content-pressed, #6E7C8E)":"var(--Button-secondary-content-normal, white)"};

        color: ${l?"var(--Button-content-disabled, rgba(182, 195, 214, 0.30))":s?"var(--Button-secondary-content-pressed, #6E7C8E)":"var(--Button-secondary-content-normal, white)"};

        ${d}
      `;case"text":return _`
        background: ${l||c?"var(--Button-base-disabled, rgba(110, 124, 142, 0.10))":s?"var(--Button-secondary-base-pressed, rgba(110, 124, 142, 0.25))":"transparent"};

        color: ${l?"var(--Button-content-disabled, rgba(182, 195, 214, 0.30))":s?"var(--Button-secondary-content-pressed, #6E7C8E)":"var(--Button-secondary-content-normal, white)"};

        ${d}
      `;case"hyperlink":return _`
        background: transparent;
        text-decoration: underline;
        padding: 0;
        min-width: auto;
        height: auto;

        color: ${l?"var(--Button-content-disabled, rgba(182, 195, 214, 0.30))":s?"var(--Text-Hyperlink-pressed, rgba(0, 179, 227, 0.60))":"var(--Text-Hyperlink-normal, #00B3E3)"};

        &:visited {
          color: var(--Text-Hyperlink-visited, #0179fb);
        }

        ${d}
      `;case"hyperlink-white":return _`
        background: transparent;
        text-decoration: underline;
        padding: 0;
        min-width: auto;
        height: auto;

        color: ${l?"var(--Button-content-disabled, rgba(182, 195, 214, 0.30))":s?"var(--Button-secondary-content-pressed, #6E7C8E)":"var(--Button-secondary-content-normal, white)"};

        &:visited {
          color: var(
            --Button-content-disabled,
            rgba(182, 195, 214, 0.3)
          );
        }

        ${d}
      `}},rb=v.button`
  /* Base Layout */
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: ${e=>e.$size==="small"?"4px":"8px"};
  border-radius: ${e=>e.$variant.startsWith("hyperlink")?"0":"9999px"};
  cursor: ${e=>e.$state==="disabled"||e.$state==="loading"?"not-allowed":"pointer"};
  border: none;
  outline: none;
  transition: all 0.2s ease-in-out;

  /* Width & Text Overflow behavior */
  max-width: 100%;

  ${e=>e.$size==="large"&&!e.$variant.startsWith("hyperlink")?_`
          /* Large buttons: 328px default, 100% on mobile */
          width: 328px;

          @media (max-width: 768px) {
            width: 100%;
          }
        `:_`
          /* Small buttons and hyperlinks: Hug content implicitly */
        `}

  /* Size */
  ${e=>e.$variant.startsWith("hyperlink")?_`
          /* Hyperlink Sizes based on snippet */
          font-size: ${e.$size==="large"?"16px":"14px"};
          line-height: ${e.$size==="large"?"22px":"20px"};
          letter-spacing: 0.2px;
          font-weight: 500; /* Default weight */
        `:e.$size==="large"?_`
            height: 48px;
            padding: 6px 20px;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0.4px;
          `:_`
            height: 34px;
            padding: 6px 20px;
            font-size: 14px;
            line-height: 22px;
            letter-spacing: 0.2px;
          `}
  
  font-family: Roboto, sans-serif;
  font-weight: 500;

  /* Variant & State Styles */
  ${e=>ib(e.$variant,e.$state)}

  /* Hyperlink Visited Override */
  ${e=>e.$variant==="hyperlink"&&e.$visited&&_`
      color: var(--Text-Hyperlink-visited, #0179fb);
    `}
  ${e=>e.$variant==="hyperlink-white"&&e.$visited&&_`
      color: var(
        --Button-content-disabled,
        rgba(182, 195, 214, 0.3)
      );
    `}

  /* Specific overrides from design code */
  ${e=>e.$state==="loading"&&e.$variant==="filled"&&_`
      background: var(--Button-primary-base-normal, #00b3e3);
    `}
  ${e=>e.$state==="loading"&&e.$variant==="text"&&_`
      background: rgba(255, 255, 255, 0.15);
    `}
`,sb=v.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  flex-shrink: 1;
`,K=({variant:e="filled",size:i="small",state:s,loading:l=!1,disabled:c=!1,visited:p=!1,children:d,onClick:f,className:x,...g})=>{let m="normal";l?m="loading":c?m="disabled":s&&(m=s);const j=en.Children.map(d,C=>typeof C=="string"||typeof C=="number"?t.jsx(sb,{children:C}):C);return t.jsx(rb,{$variant:e,$size:i,$state:m,$visited:p,onClick:!c&&!l?f:void 0,className:x,disabled:c||l,...g,children:l?t.jsxs(eb,{children:[t.jsx(tb,{}),t.jsx(nb,{})]}):j})},ob=v.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  width: 100%;
  gap: 48px;
  padding: 24px 0;
`,yo=v.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,jo=v.h3`
  color: var(--Text-Primary, #ffffff);
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 16px;
`,Ia=v.div`
  display: grid;
  grid-template-columns: 100px 1fr 1fr;
  gap: 40px;
  margin-bottom: 24px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    & > :first-child {
      display: none;
    }
  }
`,Pt=v.div`
  display: grid;
  grid-template-columns: 100px 1fr 1fr;
  gap: 40px;
  margin-bottom: 32px;
  align-items: flex-start;
  justify-items: start;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }
`,Et=v.div`
  display: contents;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    width: 100%;
    justify-items: start;
  }
`,Ri=v.div`
  color: var(--Text-Assist, #b6c3d6);
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 500;
`,Dt=v.div`
  color: var(--Text-Assist, #b6c3d6);
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  padding-top: 8px;
`,S4=v.div`
  display: grid;
  grid-template-columns: 120px 1fr 1fr 1fr;
  gap: 40px;
  align-items: center;
  justify-items: start;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
    & > :first-child {
      display: none;
    }
  }
`,Co=v(S4)`
  margin-bottom: 32px;
  align-items: center;
`,D1=v.div`
  color: var(--Text-Assist, #b6c3d6);
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 500;
`,wo=v.div`
  color: var(--Text-Assist, #b6c3d6);
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 400;
  white-space: nowrap;
`,lb=v.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`,ym=v.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    gap: 16px;
  }
`,ab=v.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: var(--Colors-Surface-Backgronud--01, #131b26);
  border-radius: 16px;
  padding: 48px 24px;
  width: 100%;
  align-items: center;
  justify-content: center;
  min-height: 200px;

  @media (max-width: 768px) {
    padding: 24px 16px;
  }
`,k4=v.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(
      ${e=>e.$size==="large"?"320px":"110px"},
      1fr
    )
  );
  gap: 32px 24px;
  width: 100%;
  justify-items: center;

  @media (max-width: 768px) {
    gap: 24px 16px;
    grid-template-columns: repeat(
      auto-fit,
      minmax(
        ${e=>e.$size==="large"?"100%":"140px"},
        1fr
      )
    );
  }
`,Kn=v.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%; /* Ensure it takes full width of grid cell */
`;v.div`
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.22px;
  color: var(--Text-Assist, #b6c3d6);
  text-align: center;
  margin-top: 8px;
`;const bo=v.div`
  color: var(--Text-Secondary, #d5e2f2);
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  cursor: pointer;
  font-family: Roboto, sans-serif;
  user-select: none;
`,cb=()=>{const[e,i]=b.useState("small"),[s,l]=b.useState(!1),[c,p]=b.useState(!1),[d,f]=b.useState(!1),[x,g]=b.useState("");return t.jsxs(lb,{children:[t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[t.jsx("div",{style:{fontFamily:"Roboto, sans-serif",fontSize:"14px",fontWeight:500,color:"var(--Text-Primary, #ffffff)",marginBottom:"8px"},children:"Type"}),t.jsxs(ym,{children:[t.jsxs(bo,{onClick:()=>i("small"),children:[t.jsx(H,{checked:e==="small",onChange:m=>m&&i("small"),shape:"rounded",size:20}),"Small (34px)"]}),t.jsxs(bo,{onClick:()=>i("large"),children:[t.jsx(H,{checked:e==="large",onChange:m=>m&&i("large"),shape:"rounded",size:20}),"Large (48px)"]})]}),t.jsxs(ym,{children:[t.jsxs(bo,{onClick:()=>l(!s),children:[t.jsx(H,{checked:s,onChange:l,shape:"square",size:20}),"Disabled"]}),t.jsxs(bo,{onClick:()=>p(!c),children:[t.jsx(H,{checked:c,onChange:p,shape:"square",size:20}),"Loading"]}),t.jsxs(bo,{onClick:()=>f(!d),children:[t.jsx(H,{checked:d,onChange:f,shape:"square",size:20}),"With Icon"]})]}),t.jsx("div",{style:{width:"50%"},children:t.jsx(et,{value:x,onChange:g,placeholder:"Button Text",title:"Text",shape:"default",fullWidth:!0})})]}),t.jsx(ab,{children:t.jsxs(k4,{$size:e,children:[t.jsx(Kn,{children:t.jsxs(K,{variant:"filled",size:e,disabled:s,loading:c,children:[d&&t.jsx(Ee,{size:20}),x||"Filled"]})}),t.jsx(Kn,{children:t.jsxs(K,{variant:"filled-secondary",size:e,disabled:s,loading:c,children:[d&&t.jsx(Ee,{size:20}),x||"Filled Tonal"]})}),t.jsx(Kn,{children:t.jsxs(K,{variant:"outlined",size:e,disabled:s,loading:c,children:[d&&t.jsx(Ee,{size:20}),x||"Outlined"]})}),t.jsx(Kn,{children:t.jsxs(K,{variant:"text",size:e,disabled:s,loading:c,children:[d&&t.jsx(Ee,{size:20}),x||"Text"]})}),t.jsx(Kn,{children:t.jsxs(K,{variant:"hyperlink-white",size:e,disabled:s,loading:c,children:[d&&t.jsx(Ee,{size:20}),x||"Hyperlink (White)"]})})]})})]})},db=()=>t.jsxs(k4,{$size:"small",children:[t.jsx(Kn,{children:t.jsx(K,{variant:"filled",size:"small",children:"Filled"})}),t.jsx(Kn,{children:t.jsx(K,{variant:"filled-secondary",size:"small",children:"Filled Tonal"})}),t.jsx(Kn,{children:t.jsx(K,{variant:"outlined",size:"small",children:"Outlined"})}),t.jsx(Kn,{children:t.jsx(K,{variant:"text",size:"small",children:"Text"})}),t.jsx(Kn,{children:t.jsx(K,{variant:"hyperlink-white",size:"small",children:"Hyperlink (White)"})})]}),ub=()=>t.jsxs(ob,{children:[t.jsxs(yo,{children:[t.jsx(jo,{children:"Filled Button"}),t.jsxs(Ia,{children:[t.jsx("div",{}),t.jsx(Ri,{children:"Small"}),t.jsx(Ri,{children:"Large"})]}),t.jsxs(Pt,{children:[t.jsx(Dt,{children:"Normal"}),t.jsxs(Et,{children:[t.jsx(K,{variant:"filled",size:"small",children:"Button"}),t.jsx(K,{variant:"filled",size:"large",children:"Button"})]})]}),t.jsxs(Pt,{children:[t.jsx(Dt,{children:"Pressed"}),t.jsxs(Et,{children:[t.jsx(K,{variant:"filled",size:"small",state:"pressed",children:"Button"}),t.jsx(K,{variant:"filled",size:"large",state:"pressed",children:"Button"})]})]}),t.jsxs(Pt,{children:[t.jsx(Dt,{children:"Disabled"}),t.jsxs(Et,{children:[t.jsx(K,{variant:"filled",size:"small",disabled:!0,children:"Button"}),t.jsx(K,{variant:"filled",size:"large",disabled:!0,children:"Button"})]})]}),t.jsxs(Pt,{children:[t.jsx(Dt,{children:"Loading"}),t.jsxs(Et,{children:[t.jsx(K,{variant:"filled",size:"small",loading:!0,children:"Button"}),t.jsx(K,{variant:"filled",size:"large",loading:!0,children:"Button"})]})]})]}),t.jsxs(yo,{children:[t.jsx(jo,{children:"Filled Secondary Button"}),t.jsxs(Ia,{children:[t.jsx("div",{}),t.jsx(Ri,{children:"Small"}),t.jsx(Ri,{children:"Large"})]}),t.jsxs(Pt,{children:[t.jsx(Dt,{children:"Normal"}),t.jsxs(Et,{children:[t.jsx(K,{variant:"filled-secondary",size:"small",children:"Button"}),t.jsx(K,{variant:"filled-secondary",size:"large",children:"Button"})]})]}),t.jsxs(Pt,{children:[t.jsx(Dt,{children:"Pressed"}),t.jsxs(Et,{children:[t.jsx(K,{variant:"filled-secondary",size:"small",state:"pressed",children:"Button"}),t.jsx(K,{variant:"filled-secondary",size:"large",state:"pressed",children:"Button"})]})]}),t.jsxs(Pt,{children:[t.jsx(Dt,{children:"Disabled"}),t.jsxs(Et,{children:[t.jsx(K,{variant:"filled-secondary",size:"small",disabled:!0,children:"Button"}),t.jsx(K,{variant:"filled-secondary",size:"large",disabled:!0,children:"Button"})]})]}),t.jsxs(Pt,{children:[t.jsx(Dt,{children:"Loading"}),t.jsxs(Et,{children:[t.jsx(K,{variant:"filled-secondary",size:"small",loading:!0,children:"Button"}),t.jsx(K,{variant:"filled-secondary",size:"large",loading:!0,children:"Button"})]})]})]}),t.jsxs(yo,{children:[t.jsx(jo,{children:"Outlined Button"}),t.jsxs(Ia,{children:[t.jsx("div",{}),t.jsx(Ri,{children:"Small"}),t.jsx(Ri,{children:"Large"})]}),t.jsxs(Pt,{children:[t.jsx(Dt,{children:"Normal"}),t.jsxs(Et,{children:[t.jsx(K,{variant:"outlined",size:"small",children:"Button"}),t.jsx(K,{variant:"outlined",size:"large",children:"Button"})]})]}),t.jsxs(Pt,{children:[t.jsx(Dt,{children:"Pressed"}),t.jsxs(Et,{children:[t.jsx(K,{variant:"outlined",size:"small",state:"pressed",children:"Button"}),t.jsx(K,{variant:"outlined",size:"large",state:"pressed",children:"Button"})]})]}),t.jsxs(Pt,{children:[t.jsx(Dt,{children:"Disabled"}),t.jsxs(Et,{children:[t.jsx(K,{variant:"outlined",size:"small",disabled:!0,children:"Button"}),t.jsx(K,{variant:"outlined",size:"large",disabled:!0,children:"Button"})]})]}),t.jsxs(Pt,{children:[t.jsx(Dt,{children:"Loading"}),t.jsxs(Et,{children:[t.jsx(K,{variant:"outlined",size:"small",loading:!0,children:"Button"}),t.jsx(K,{variant:"outlined",size:"large",loading:!0,children:"Button"})]})]})]}),t.jsxs(yo,{children:[t.jsx(jo,{children:"Text Button"}),t.jsxs(Ia,{children:[t.jsx("div",{}),t.jsx(Ri,{children:"Small"}),t.jsx(Ri,{children:"Large"})]}),t.jsxs(Pt,{children:[t.jsx(Dt,{children:"Normal"}),t.jsxs(Et,{children:[t.jsx(K,{variant:"text",size:"small",children:"Button"}),t.jsx(K,{variant:"text",size:"large",children:"Button"})]})]}),t.jsxs(Pt,{children:[t.jsx(Dt,{children:"Pressed"}),t.jsxs(Et,{children:[t.jsx(K,{variant:"text",size:"small",state:"pressed",children:"Button"}),t.jsx(K,{variant:"text",size:"large",state:"pressed",children:"Button"})]})]}),t.jsxs(Pt,{children:[t.jsx(Dt,{children:"Disabled"}),t.jsxs(Et,{children:[t.jsx(K,{variant:"text",size:"small",disabled:!0,children:"Button"}),t.jsx(K,{variant:"text",size:"large",disabled:!0,children:"Button"})]})]}),t.jsxs(Pt,{children:[t.jsx(Dt,{children:"Loading"}),t.jsxs(Et,{children:[t.jsx(K,{variant:"text",size:"small",loading:!0,children:"Button"}),t.jsx(K,{variant:"text",size:"large",loading:!0,children:"Button"})]})]})]}),t.jsxs(yo,{children:[t.jsx(jo,{children:"Hyperlink"}),t.jsxs(S4,{children:[t.jsx("div",{}),t.jsx(D1,{children:"Normal"}),t.jsx(D1,{children:"Pressed"}),t.jsx(D1,{children:"Visited"})]}),t.jsxs(Co,{children:[t.jsx(wo,{children:"match Button L (White)"}),t.jsx(K,{variant:"hyperlink-white",size:"large",style:{fontWeight:500},children:"Hyperlink"}),t.jsx(K,{variant:"hyperlink-white",size:"large",state:"pressed",style:{fontWeight:500},children:"Hyperlink"}),t.jsx(K,{variant:"hyperlink-white",size:"large",visited:!0,style:{fontWeight:500},children:"Hyperlink"})]}),t.jsxs(Co,{children:[t.jsx(wo,{children:"match Button S (White)"}),t.jsx(K,{variant:"hyperlink-white",size:"small",style:{fontWeight:500},children:"Hyperlink"}),t.jsx(K,{variant:"hyperlink-white",size:"small",state:"pressed",style:{fontWeight:500},children:"Hyperlink"}),t.jsx(K,{variant:"hyperlink-white",size:"small",visited:!0,style:{fontWeight:500},children:"Hyperlink"})]}),t.jsxs(Co,{children:[t.jsx(wo,{children:"match Body 1 (Blue)"}),t.jsx(K,{variant:"hyperlink",size:"large",style:{fontWeight:400},children:"Hyperlink"}),t.jsx(K,{variant:"hyperlink",size:"large",state:"pressed",style:{fontWeight:400},children:"Hyperlink"}),t.jsx(K,{variant:"hyperlink",size:"large",visited:!0,style:{fontWeight:400},children:"Hyperlink"})]}),t.jsxs(Co,{children:[t.jsx(wo,{children:"match Body 2 (Blue)"}),t.jsx(K,{variant:"hyperlink",size:"small",style:{fontWeight:400},children:"Hyperlink"}),t.jsx(K,{variant:"hyperlink",size:"small",state:"pressed",style:{fontWeight:400},children:"Hyperlink"}),t.jsx(K,{variant:"hyperlink",size:"small",visited:!0,style:{fontWeight:400},children:"Hyperlink"})]}),t.jsxs(Co,{children:[t.jsx(wo,{children:"match Caption (Blue)"}),t.jsx(K,{variant:"hyperlink",style:{fontSize:"12px",lineHeight:"16px",fontWeight:400},children:"Hyperlink"}),t.jsx(K,{variant:"hyperlink",state:"pressed",style:{fontSize:"12px",lineHeight:"16px",fontWeight:400},children:"Hyperlink"}),t.jsx(K,{variant:"hyperlink",visited:!0,style:{fontSize:"12px",lineHeight:"16px",fontWeight:400},children:"Hyperlink"})]})]})]});v.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 48px 24px;
  background: var(--Colors-Surface-Backgronud--01, #131b26);
  border-radius: 16px;
  width: 100%;
`;const jm=v.div`
  display: grid;
  grid-template-columns: auto repeat(6, 1fr);
  gap: 24px 40px;
  align-items: center;
  width: 100%;
`,cn=v.div`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.2px;
  color: var(--Text-Secondary, #D5E2F2);
  text-align: left;
  min-width: 80px;
`,Je=v.div`
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.22px;
  color: var(--Text-Assist, #B6C3D6);
  text-align: center;
`,Ii=v.div`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.2px;
  color: var(--Text-Primary, #ffffff);
  text-align: center;
  grid-column: span 2;
`,de=v.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,pb=v.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`,Cm=v.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  margin-bottom: 8px;
`,So=v.div`
  color: var(--Text-Secondary, #d5e2f2);
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  cursor: pointer;
  font-family: Roboto, sans-serif;
`,fb=v.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: var(--Colors-Surface-Backgronud--01, #131b26);
  border-radius: 16px;
  padding: 48px 24px;
  width: 100%;
  align-items: center;
  justify-content: center;
  min-height: 200px;
`;v.div`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.2px;
  color: var(--Text-Secondary, #d5e2f2);
  margin-top: 16px;
`;const hb=v.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-radius: 16px;
  padding: 24px;
  width: 100%;
`,dn=v.div`
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.22px;
  color: var(--Text-Assist, #B6C3D6);
  text-align: center;
  margin-top: 8px;
`,Aa=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 32px 24px;
  width: 100%;
  justify-items: center;
`,un=v.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`,xb=v.button`
  height: 48px;
  ${({$showLabel:e})=>e?`
    max-width: 400px;
    min-width: 96px;
    padding: 12px 20px;
  `:`
    width: 48px;
    padding: 12px;
  `}
  border-radius: 9999px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: none;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  transition: all 0.2s ease;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.4px;
  
  ${({$variant:e,$disabled:i})=>{if(i)return`
        background: ${e==="outlined"?"transparent":"var(--Button-base-disabled, rgba(110, 124, 142, 0.10))"};
        color: var(--Button-content-disabled, rgba(182, 195, 214, 0.30));
        
        svg {
          color: var(--Button-content-disabled, rgba(182, 195, 214, 0.30));
        }
      `;switch(e){case"outlined":return`
          background: transparent;
          color: var(--Button-secondary-content-normal, white);
          
          svg {
            color: var(--Button-secondary-content-normal, white);
          }
          
          &:active {
            background: var(--Button-secondary-base-pressed, rgba(110, 124, 142, 0.25));
            color: var(--Button-secondary-content-pressed, #6E7C8E);
            
            svg {
              color: var(--Button-secondary-content-pressed, #6E7C8E);
            }
          }
        `;case"filled":return`
          background: var(--Surface-Backgronud--02, #2A3649);
          color: var(--Button-secondary-content-normal, white);
          
          svg {
            color: var(--Button-secondary-content-normal, white);
          }
          
          &:active {
            background: var(--Button-secondary-base-pressed, rgba(110, 124, 142, 0.25));
            color: var(--Button-secondary-content-pressed, #6E7C8E);
            
            svg {
              color: var(--Button-secondary-content-pressed, #6E7C8E);
            }
          }
        `;case"filled-primary":return`
          background: var(--Button-primary-base-normal, #00B3E3);
          color: var(--Button-primary-content-normal, white);
          
          svg {
            color: var(--Button-primary-content-normal, white);
          }
          
          &:active {
            background: var(--Button-primary-base-pressed, #0589C9);
            color: var(--Button-primary-content-pressed, rgba(255, 255, 255, 0.80));
            
            svg {
              color: var(--Button-primary-content-pressed, rgba(255, 255, 255, 0.80));
            }
          }
        `}}}
`,ot=v.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  svg {
    width: 20px;
    height: 20px;
  }
`,qe=({variant:e="outlined",showLabel:i=!1,label:s="Home",icon:l=t.jsx(Ce,{}),onClick:c,disabled:p=!1,className:d})=>t.jsxs(xb,{$variant:e,$showLabel:i,$disabled:p,onClick:c,disabled:p,className:d,children:[t.jsx(ot,{children:l}),i&&t.jsx("span",{children:s})]}),xt=v.div`
  height: 48px;
  ${({$showLabel:e})=>e?`
    max-width: 400px;
    min-width: 96px;
    padding: 12px 20px;
  `:`
    width: 48px;
    padding: 12px;
  `}
  border-radius: 9999px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: none;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.4px;
  
  ${({$variant:e,$state:i})=>{if(i==="disabled")return`
        background: ${e==="outlined"?"transparent":"var(--Button-base-disabled, rgba(110, 124, 142, 0.10))"};
        color: var(--Button-content-disabled, rgba(182, 195, 214, 0.30));
        
        svg {
          color: var(--Button-content-disabled, rgba(182, 195, 214, 0.30));
        }
      `;if(i==="pressed")switch(e){case"outlined":return`
            background: var(--Button-secondary-base-pressed, rgba(110, 124, 142, 0.25));
            color: var(--Button-secondary-content-pressed, #6E7C8E);
            
            svg {
              color: var(--Button-secondary-content-pressed, #6E7C8E);
            }
          `;case"filled":return`
            background: var(--Button-secondary-base-pressed, rgba(110, 124, 142, 0.25));
            color: var(--Button-secondary-content-pressed, #6E7C8E);
            
            svg {
              color: var(--Button-secondary-content-pressed, #6E7C8E);
            }
          `;case"filled-primary":return`
            background: var(--Button-primary-base-pressed, #0589C9);
            color: var(--Button-primary-content-pressed, rgba(255, 255, 255, 0.80));
            
            svg {
              color: var(--Button-primary-content-pressed, rgba(255, 255, 255, 0.80));
            }
          `}switch(e){case"outlined":return`
          background: transparent;
          color: var(--Button-secondary-content-normal, white);
          
          svg {
            color: var(--Button-secondary-content-normal, white);
          }
        `;case"filled":return`
          background: var(--Surface-Backgronud--02, #2A3649);
          color: var(--Button-secondary-content-normal, white);
          
          svg {
            color: var(--Button-secondary-content-normal, white);
          }
        `;case"filled-primary":return`
          background: var(--Button-primary-base-normal, #00B3E3);
          color: var(--Button-primary-content-normal, white);
          
          svg {
            color: var(--Button-primary-content-normal, white);
          }
        `}}}
`,mb=v.button`
  height: 34px;
  ${({$showLabel:e})=>e?`
    max-width: 400px;
    min-width: 80px;
    padding: 6px 20px;
  `:`
    width: 34px;
    padding: 6px;
  `}
  border-radius: 9999px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border: none;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  transition: all 0.2s ease;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.2px;
  
  ${({$variant:e,$disabled:i})=>{if(i)return`
        background: ${e==="outlined"?"transparent":"var(--Button-base-disabled, rgba(110, 124, 142, 0.10))"};
        color: var(--Button-content-disabled, rgba(182, 195, 214, 0.30));
        
        svg {
          color: var(--Button-content-disabled, rgba(182, 195, 214, 0.30));
        }
      `;switch(e){case"outlined":return`
          background: transparent;
          color: var(--Button-secondary-content-normal, white);
          
          svg {
            color: var(--Button-secondary-content-normal, white);
          }
          
          &:active {
            background: var(--Button-secondary-base-pressed, rgba(110, 124, 142, 0.25));
            color: var(--Button-secondary-content-pressed, #6E7C8E);
            
            svg {
              color: var(--Button-secondary-content-pressed, #6E7C8E);
            }
          }
        `;case"filled":return`
          background: var(--Surface-Backgronud--02, #2A3649);
          color: var(--Button-secondary-content-normal, white);
          
          svg {
            color: var(--Button-secondary-content-normal, white);
          }
          
          &:active {
            background: var(--Button-secondary-base-pressed, rgba(110, 124, 142, 0.25));
            color: var(--Button-secondary-content-pressed, #6E7C8E);
            
            svg {
              color: var(--Button-secondary-content-pressed, #6E7C8E);
            }
          }
        `;case"filled-primary":return`
          background: var(--Button-primary-base-normal, #00B3E3);
          color: var(--Button-primary-content-normal, white);
          
          svg {
            color: var(--Button-primary-content-normal, white);
          }
          
          &:active {
            background: var(--Button-primary-base-pressed, #0589C9);
            color: var(--Button-primary-content-pressed, rgba(255, 255, 255, 0.80));
            
            svg {
              color: var(--Button-primary-content-pressed, rgba(255, 255, 255, 0.80));
            }
          }
        `}}}
`,lt=v.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  svg {
    width: 16px;
    height: 16px;
  }
`,ms=({variant:e="outlined",showLabel:i=!1,label:s="Home",icon:l=t.jsx(Ce,{}),onClick:c,disabled:p=!1,className:d})=>t.jsxs(mb,{$variant:e,$showLabel:i,$disabled:p,onClick:c,disabled:p,className:d,children:[t.jsx(lt,{children:l}),i&&t.jsx("span",{children:s})]}),mt=v.div`
  height: 34px;
  ${({$showLabel:e})=>e?`
    max-width: 400px;
    min-width: 80px;
    padding: 6px 20px;
  `:`
    width: 34px;
    padding: 6px;
  `}
  border-radius: 9999px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border: none;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.2px;
  
  ${({$variant:e,$state:i})=>{if(i==="disabled")return`
        background: ${e==="outlined"?"transparent":"var(--Button-base-disabled, rgba(110, 124, 142, 0.10))"};
        color: var(--Button-content-disabled, rgba(182, 195, 214, 0.30));
        
        svg {
          color: var(--Button-content-disabled, rgba(182, 195, 214, 0.30));
        }
      `;if(i==="pressed")switch(e){case"outlined":return`
            background: var(--Button-secondary-base-pressed, rgba(110, 124, 142, 0.25));
            color: var(--Button-secondary-content-pressed, #6E7C8E);
            
            svg {
              color: var(--Button-secondary-content-pressed, #6E7C8E);
            }
          `;case"filled":return`
            background: var(--Button-secondary-base-pressed, rgba(110, 124, 142, 0.25));
            color: var(--Button-secondary-content-pressed, #6E7C8E);
            
            svg {
              color: var(--Button-secondary-content-pressed, #6E7C8E);
            }
          `;case"filled-primary":return`
            background: var(--Button-primary-base-pressed, #0589C9);
            color: var(--Button-primary-content-pressed, rgba(255, 255, 255, 0.80));
            
            svg {
              color: var(--Button-primary-content-pressed, rgba(255, 255, 255, 0.80));
            }
          `}switch(e){case"outlined":return`
          background: transparent;
          color: var(--Button-secondary-content-normal, white);
          
          svg {
            color: var(--Button-secondary-content-normal, white);
          }
        `;case"filled":return`
          background: var(--Surface-Backgronud--02, #2A3649);
          color: var(--Button-secondary-content-normal, white);
          
          svg {
            color: var(--Button-secondary-content-normal, white);
          }
        `;case"filled-primary":return`
          background: var(--Button-primary-base-normal, #00B3E3);
          color: var(--Button-primary-content-normal, white);
          
          svg {
            color: var(--Button-primary-content-normal, white);
          }
        `}}}
`,gb=v.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding: 48px 24px;
  background: var(--Colors-Surface-Backgronud--01, #131b26);
  border-radius: 16px;
  width: 100%;
`,za=v.div`
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0.2px;
  color: var(--Text-Primary, #ffffff);
  margin-bottom: -16px;
`,vb=()=>t.jsxs(gb,{children:[t.jsxs("div",{children:[t.jsx(za,{children:"Large (48px)"}),t.jsx("div",{style:{marginTop:"32px"},children:t.jsxs(jm,{children:[t.jsx("div",{}),t.jsx(Ii,{children:"Empty"}),t.jsx(Ii,{children:"Filled"}),t.jsx(Ii,{children:"Filled_Primary"}),t.jsx("div",{}),t.jsx(Je,{children:"Icon"}),t.jsx(Je,{children:"Icon + Label"}),t.jsx(Je,{children:"Icon"}),t.jsx(Je,{children:"Icon + Label"}),t.jsx(Je,{children:"Icon"}),t.jsx(Je,{children:"Icon + Label"}),t.jsx(cn,{children:"Normal"}),t.jsx(de,{children:t.jsx(xt,{$variant:"outlined",$showLabel:!1,$state:"normal",children:t.jsx(ot,{children:t.jsx(Ce,{})})})}),t.jsx(de,{children:t.jsxs(xt,{$variant:"outlined",$showLabel:!0,$state:"normal",children:[t.jsx(ot,{children:t.jsx(Ce,{})}),t.jsx("span",{children:"Home"})]})}),t.jsx(de,{children:t.jsx(xt,{$variant:"filled",$showLabel:!1,$state:"normal",children:t.jsx(ot,{children:t.jsx(Ce,{})})})}),t.jsx(de,{children:t.jsxs(xt,{$variant:"filled",$showLabel:!0,$state:"normal",children:[t.jsx(ot,{children:t.jsx(Ce,{})}),t.jsx("span",{children:"Home"})]})}),t.jsx(de,{children:t.jsx(xt,{$variant:"filled-primary",$showLabel:!1,$state:"normal",children:t.jsx(ot,{children:t.jsx(Ce,{})})})}),t.jsx(de,{children:t.jsxs(xt,{$variant:"filled-primary",$showLabel:!0,$state:"normal",children:[t.jsx(ot,{children:t.jsx(Ce,{})}),t.jsx("span",{children:"Home"})]})}),t.jsx(cn,{children:"Pressed"}),t.jsx(de,{children:t.jsx(xt,{$variant:"outlined",$showLabel:!1,$state:"pressed",children:t.jsx(ot,{children:t.jsx(Ce,{})})})}),t.jsx(de,{children:t.jsxs(xt,{$variant:"outlined",$showLabel:!0,$state:"pressed",children:[t.jsx(ot,{children:t.jsx(Ce,{})}),t.jsx("span",{children:"Home"})]})}),t.jsx(de,{children:t.jsx(xt,{$variant:"filled",$showLabel:!1,$state:"pressed",children:t.jsx(ot,{children:t.jsx(Ce,{})})})}),t.jsx(de,{children:t.jsxs(xt,{$variant:"filled",$showLabel:!0,$state:"pressed",children:[t.jsx(ot,{children:t.jsx(Ce,{})}),t.jsx("span",{children:"Home"})]})}),t.jsx(de,{children:t.jsx(xt,{$variant:"filled-primary",$showLabel:!1,$state:"pressed",children:t.jsx(ot,{children:t.jsx(Ce,{})})})}),t.jsx(de,{children:t.jsxs(xt,{$variant:"filled-primary",$showLabel:!0,$state:"pressed",children:[t.jsx(ot,{children:t.jsx(Ce,{})}),t.jsx("span",{children:"Home"})]})}),t.jsx(cn,{children:"Disabled"}),t.jsx(de,{children:t.jsx(xt,{$variant:"outlined",$showLabel:!1,$state:"disabled",children:t.jsx(ot,{children:t.jsx(Ce,{})})})}),t.jsx(de,{children:t.jsxs(xt,{$variant:"outlined",$showLabel:!0,$state:"disabled",children:[t.jsx(ot,{children:t.jsx(Ce,{})}),t.jsx("span",{children:"Home"})]})}),t.jsx(de,{children:t.jsx(xt,{$variant:"filled",$showLabel:!1,$state:"disabled",children:t.jsx(ot,{children:t.jsx(Ce,{})})})}),t.jsx(de,{children:t.jsxs(xt,{$variant:"filled",$showLabel:!0,$state:"disabled",children:[t.jsx(ot,{children:t.jsx(Ce,{})}),t.jsx("span",{children:"Home"})]})}),t.jsx(de,{children:t.jsx(xt,{$variant:"filled-primary",$showLabel:!1,$state:"disabled",children:t.jsx(ot,{children:t.jsx(Ce,{})})})}),t.jsx(de,{children:t.jsxs(xt,{$variant:"filled-primary",$showLabel:!0,$state:"disabled",children:[t.jsx(ot,{children:t.jsx(Ce,{})}),t.jsx("span",{children:"Home"})]})})]})})]}),t.jsxs("div",{children:[t.jsx(za,{children:"Small (34px)"}),t.jsx("div",{style:{marginTop:"32px"},children:t.jsxs(jm,{children:[t.jsx("div",{}),t.jsx(Ii,{children:"Empty"}),t.jsx(Ii,{children:"Filled"}),t.jsx(Ii,{children:"Filled_Primary"}),t.jsx("div",{}),t.jsx(Je,{children:"Icon"}),t.jsx(Je,{children:"Icon + Label"}),t.jsx(Je,{children:"Icon"}),t.jsx(Je,{children:"Icon + Label"}),t.jsx(Je,{children:"Icon"}),t.jsx(Je,{children:"Icon + Label"}),t.jsx(cn,{children:"Normal"}),t.jsx(de,{children:t.jsx(mt,{$variant:"outlined",$showLabel:!1,$state:"normal",children:t.jsx(lt,{children:t.jsx(Ce,{})})})}),t.jsx(de,{children:t.jsxs(mt,{$variant:"outlined",$showLabel:!0,$state:"normal",children:[t.jsx(lt,{children:t.jsx(Ce,{})}),t.jsx("span",{children:"Home"})]})}),t.jsx(de,{children:t.jsx(mt,{$variant:"filled",$showLabel:!1,$state:"normal",children:t.jsx(lt,{children:t.jsx(Ce,{})})})}),t.jsx(de,{children:t.jsxs(mt,{$variant:"filled",$showLabel:!0,$state:"normal",children:[t.jsx(lt,{children:t.jsx(Ce,{})}),t.jsx("span",{children:"Home"})]})}),t.jsx(de,{children:t.jsx(mt,{$variant:"filled-primary",$showLabel:!1,$state:"normal",children:t.jsx(lt,{children:t.jsx(Ce,{})})})}),t.jsx(de,{children:t.jsxs(mt,{$variant:"filled-primary",$showLabel:!0,$state:"normal",children:[t.jsx(lt,{children:t.jsx(Ce,{})}),t.jsx("span",{children:"Home"})]})}),t.jsx(cn,{children:"Pressed"}),t.jsx(de,{children:t.jsx(mt,{$variant:"outlined",$showLabel:!1,$state:"pressed",children:t.jsx(lt,{children:t.jsx(Ce,{})})})}),t.jsx(de,{children:t.jsxs(mt,{$variant:"outlined",$showLabel:!0,$state:"pressed",children:[t.jsx(lt,{children:t.jsx(Ce,{})}),t.jsx("span",{children:"Home"})]})}),t.jsx(de,{children:t.jsx(mt,{$variant:"filled",$showLabel:!1,$state:"pressed",children:t.jsx(lt,{children:t.jsx(Ce,{})})})}),t.jsx(de,{children:t.jsxs(mt,{$variant:"filled",$showLabel:!0,$state:"pressed",children:[t.jsx(lt,{children:t.jsx(Ce,{})}),t.jsx("span",{children:"Home"})]})}),t.jsx(de,{children:t.jsx(mt,{$variant:"filled-primary",$showLabel:!1,$state:"pressed",children:t.jsx(lt,{children:t.jsx(Ce,{})})})}),t.jsx(de,{children:t.jsxs(mt,{$variant:"filled-primary",$showLabel:!0,$state:"pressed",children:[t.jsx(lt,{children:t.jsx(Ce,{})}),t.jsx("span",{children:"Home"})]})}),t.jsx(cn,{children:"Disabled"}),t.jsx(de,{children:t.jsx(mt,{$variant:"outlined",$showLabel:!1,$state:"disabled",children:t.jsx(lt,{children:t.jsx(Ce,{})})})}),t.jsx(de,{children:t.jsxs(mt,{$variant:"outlined",$showLabel:!0,$state:"disabled",children:[t.jsx(lt,{children:t.jsx(Ce,{})}),t.jsx("span",{children:"Home"})]})}),t.jsx(de,{children:t.jsx(mt,{$variant:"filled",$showLabel:!1,$state:"disabled",children:t.jsx(lt,{children:t.jsx(Ce,{})})})}),t.jsx(de,{children:t.jsxs(mt,{$variant:"filled",$showLabel:!0,$state:"disabled",children:[t.jsx(lt,{children:t.jsx(Ce,{})}),t.jsx("span",{children:"Home"})]})}),t.jsx(de,{children:t.jsx(mt,{$variant:"filled-primary",$showLabel:!1,$state:"disabled",children:t.jsx(lt,{children:t.jsx(Ce,{})})})}),t.jsx(de,{children:t.jsxs(mt,{$variant:"filled-primary",$showLabel:!0,$state:"disabled",children:[t.jsx(lt,{children:t.jsx(Ce,{})}),t.jsx("span",{children:"Home"})]})})]})})]}),t.jsxs("div",{children:[t.jsx(za,{children:"Extra Small (20px)"}),t.jsx("div",{style:{marginTop:"32px"},children:t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto repeat(4, 1fr)",gap:"24px 40px",alignItems:"center",width:"100%"},children:[t.jsx("div",{}),t.jsx(Ii,{children:"Empty"}),t.jsx(Ii,{children:"Filled"}),t.jsx("div",{}),t.jsx(Je,{children:"Icon"}),t.jsx(Je,{children:"Icon + Label"}),t.jsx(Je,{children:"Icon"}),t.jsx(Je,{children:"Icon + Label"}),t.jsx(cn,{children:"Normal"}),t.jsx(de,{children:t.jsx(pn,{$variant:"outlined",$showLabel:!1,$state:"normal",children:t.jsx(Xt,{children:t.jsx(zt,{})})})}),t.jsx(de,{children:t.jsxs(pn,{$variant:"outlined",$showLabel:!0,$state:"normal",children:[t.jsx(Xt,{children:t.jsx(zt,{})}),t.jsx("span",{children:"Delete"})]})}),t.jsx(de,{children:t.jsx(pn,{$variant:"filled",$showLabel:!1,$state:"normal",children:t.jsx(Xt,{children:t.jsx(zt,{})})})}),t.jsx(de,{children:t.jsxs(pn,{$variant:"filled",$showLabel:!0,$state:"normal",children:[t.jsx(Xt,{children:t.jsx(zt,{})}),t.jsx("span",{children:"Delete"})]})}),t.jsx(cn,{children:"Pressed"}),t.jsx(de,{children:t.jsx(pn,{$variant:"outlined",$showLabel:!1,$state:"pressed",children:t.jsx(Xt,{children:t.jsx(zt,{})})})}),t.jsx(de,{children:t.jsxs(pn,{$variant:"outlined",$showLabel:!0,$state:"pressed",children:[t.jsx(Xt,{children:t.jsx(zt,{})}),t.jsx("span",{children:"Delete"})]})}),t.jsx(de,{children:t.jsx(pn,{$variant:"filled",$showLabel:!1,$state:"pressed",children:t.jsx(Xt,{children:t.jsx(zt,{})})})}),t.jsx(de,{children:t.jsxs(pn,{$variant:"filled",$showLabel:!0,$state:"pressed",children:[t.jsx(Xt,{children:t.jsx(zt,{})}),t.jsx("span",{children:"Delete"})]})}),t.jsx(cn,{children:"Disabled"}),t.jsx(de,{children:t.jsx(pn,{$variant:"outlined",$showLabel:!1,$state:"disabled",children:t.jsx(Xt,{children:t.jsx(zt,{})})})}),t.jsx(de,{children:t.jsxs(pn,{$variant:"outlined",$showLabel:!0,$state:"disabled",children:[t.jsx(Xt,{children:t.jsx(zt,{})}),t.jsx("span",{children:"Delete"})]})}),t.jsx(de,{children:t.jsx(pn,{$variant:"filled",$showLabel:!1,$state:"disabled",children:t.jsx(Xt,{children:t.jsx(zt,{})})})}),t.jsx(de,{children:t.jsxs(pn,{$variant:"filled",$showLabel:!0,$state:"disabled",children:[t.jsx(Xt,{children:t.jsx(zt,{})}),t.jsx("span",{children:"Delete"})]})})]})})]}),t.jsxs("div",{children:[t.jsx(za,{children:"Media (80px)"}),t.jsx("div",{style:{marginTop:"32px"},children:t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto repeat(4, 1fr)",gap:"24px 40px",alignItems:"center",width:"100%"},children:[t.jsx("div",{}),t.jsx(Je,{children:"Pause"}),t.jsx(Je,{children:"Play"}),t.jsx(Je,{children:"Stop"}),t.jsx(Je,{children:"Record"}),t.jsx(cn,{children:"Normal"}),t.jsx(de,{children:t.jsx(fn,{$type:"pause",$state:"normal",children:t.jsx(Qt,{children:t.jsx(xs,{})})})}),t.jsx(de,{children:t.jsx(fn,{$type:"play",$state:"normal",children:t.jsx(Qt,{children:t.jsx(Ho,{})})})}),t.jsx(de,{children:t.jsx(fn,{$type:"stop",$state:"normal",children:t.jsx(Qt,{children:t.jsx(Wo,{})})})}),t.jsx(de,{children:t.jsx(fn,{$type:"record",$state:"normal",children:t.jsx(Qt,{children:t.jsx(Uo,{})})})}),t.jsx(cn,{children:"Pressed"}),t.jsx(de,{children:t.jsx(fn,{$type:"pause",$state:"pressed",children:t.jsx(Qt,{children:t.jsx(xs,{})})})}),t.jsx(de,{children:t.jsx(fn,{$type:"play",$state:"pressed",children:t.jsx(Qt,{children:t.jsx(Ho,{})})})}),t.jsx(de,{children:t.jsx(fn,{$type:"stop",$state:"pressed",children:t.jsx(Qt,{children:t.jsx(Wo,{})})})}),t.jsx(de,{children:t.jsx(fn,{$type:"record",$state:"pressed",children:t.jsx(Qt,{children:t.jsx(Uo,{})})})}),t.jsx(cn,{children:"Disabled"}),t.jsx(de,{children:t.jsx(fn,{$type:"pause",$state:"disabled",children:t.jsx(Qt,{children:t.jsx(xs,{})})})}),t.jsx(de,{children:t.jsx(fn,{$type:"play",$state:"disabled",children:t.jsx(Qt,{children:t.jsx(Ho,{})})})}),t.jsx(de,{children:t.jsx(fn,{$type:"stop",$state:"disabled",children:t.jsx(Qt,{children:t.jsx(Wo,{})})})}),t.jsx(de,{children:t.jsx(fn,{$type:"record",$state:"disabled",children:t.jsx(Qt,{children:t.jsx(Uo,{})})})})]})})]})]}),yb=()=>{const[e,i]=b.useState("large"),[s,l]=b.useState(!1),c=()=>t.jsxs(Aa,{children:[t.jsxs(un,{children:[t.jsx(qe,{variant:"outlined",showLabel:s,label:"Home"}),t.jsxs(dn,{children:["Empty / ",s?"Icon + Label":"Icon"]})]}),t.jsxs(un,{children:[t.jsx(qe,{variant:"filled",showLabel:s,label:"Home"}),t.jsxs(dn,{children:["Filled / ",s?"Icon + Label":"Icon"]})]}),t.jsxs(un,{children:[t.jsx(qe,{variant:"filled-primary",showLabel:s,label:"Home"}),t.jsxs(dn,{children:["Filled_Primary / ",s?"Icon + Label":"Icon"]})]})]}),p=()=>t.jsxs(Aa,{children:[t.jsxs(un,{children:[t.jsx(ms,{variant:"outlined",showLabel:s,label:"Home"}),t.jsxs(dn,{children:["Empty / ",s?"Icon + Label":"Icon"]})]}),t.jsxs(un,{children:[t.jsx(ms,{variant:"filled",showLabel:s,label:"Home"}),t.jsxs(dn,{children:["Filled / ",s?"Icon + Label":"Icon"]})]}),t.jsxs(un,{children:[t.jsx(ms,{variant:"filled-primary",showLabel:s,label:"Home"}),t.jsxs(dn,{children:["Filled_Primary / ",s?"Icon + Label":"Icon"]})]})]}),d=()=>t.jsxs(Aa,{children:[t.jsxs(un,{children:[t.jsx(Vc,{variant:"outlined",showLabel:s,label:"Delete"}),t.jsxs(dn,{children:["Empty / ",s?"Icon + Label":"Icon"]})]}),t.jsxs(un,{children:[t.jsx(Vc,{variant:"filled",showLabel:s,label:"Delete"}),t.jsxs(dn,{children:["Filled / ",s?"Icon + Label":"Icon"]})]})]}),f=()=>t.jsxs(Aa,{children:[t.jsxs(un,{children:[t.jsx(Ma,{type:"pause"}),t.jsx(dn,{children:"Pause"})]}),t.jsxs(un,{children:[t.jsx(Ma,{type:"play"}),t.jsx(dn,{children:"Play"})]}),t.jsxs(un,{children:[t.jsx(Ma,{type:"stop"}),t.jsx(dn,{children:"Stop"})]}),t.jsxs(un,{children:[t.jsx(Ma,{type:"record"}),t.jsx(dn,{children:"Record"})]})]});return t.jsxs(pb,{children:[t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[t.jsx("div",{style:{fontFamily:"Roboto, sans-serif",fontSize:"14px",fontWeight:500,color:"var(--Text-Primary, #ffffff)",marginBottom:"8px"},children:"Type"}),t.jsxs(Cm,{children:[t.jsxs(So,{onClick:()=>i("large"),children:[t.jsx(H,{checked:e==="large",onChange:x=>x&&i("large"),shape:"rounded"}),"Large (48px)"]}),t.jsxs(So,{onClick:()=>i("small"),children:[t.jsx(H,{checked:e==="small",onChange:x=>x&&i("small"),shape:"rounded"}),"Small (34px)"]}),t.jsxs(So,{onClick:()=>i("xsmall"),children:[t.jsx(H,{checked:e==="xsmall",onChange:x=>x&&i("xsmall"),shape:"rounded"}),"Extra Small (20px)"]}),t.jsxs(So,{onClick:()=>i("media"),children:[t.jsx(H,{checked:e==="media",onChange:x=>x&&i("media"),shape:"rounded"}),"Media (80px)"]})]}),e!=="media"&&t.jsx(Cm,{children:t.jsxs(So,{onClick:()=>l(!s),children:[t.jsx(H,{checked:s,onChange:l,shape:"square"}),"with label"]})})]}),t.jsxs(fb,{children:[e==="large"&&c(),e==="small"&&p(),e==="xsmall"&&d(),e==="media"&&f()]})]})},jb=()=>t.jsx(hb,{children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",alignItems:"center"},children:[t.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[t.jsx(qe,{variant:"outlined",showLabel:!1}),t.jsx(qe,{variant:"filled",showLabel:!1}),t.jsx(qe,{variant:"filled-primary",showLabel:!1})]}),t.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[t.jsx(ms,{variant:"outlined",showLabel:!1}),t.jsx(ms,{variant:"filled",showLabel:!1}),t.jsx(ms,{variant:"filled-primary",showLabel:!1})]}),t.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[t.jsx(Vc,{variant:"outlined",showLabel:!1}),t.jsx(Vc,{variant:"filled",showLabel:!1})]})]})}),Cb=v.button`
  height: 20px;
  ${({$showLabel:e})=>e?`
    padding: 0px 8px;
  `:`
    padding: 4px;
  `}
  border-radius: 9999px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border: none;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  transition: all 0.2s ease;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.2px;
  
  ${({$variant:e,$disabled:i,$showLabel:s})=>{if(i)return`
        background: var(--Button-base-disabled, rgba(110, 124, 142, 0.10));
        color: var(--Button-content-disabled, rgba(182, 195, 214, 0.30));
        
        svg {
          color: var(--Button-content-disabled, rgba(182, 195, 214, 0.30));
        }
      `;switch(e){case"outlined":return`
          background: transparent;
          color: var(--Button-secondary-content-normal, white);
          
          svg {
            color: var(--Button-secondary-content-normal, white);
          }
          
          &:active {
            background: var(--Button-secondary-base-pressed, rgba(110, 124, 142, 0.25));
            color: var(--Button-secondary-content-pressed, #6E7C8E);
            
            svg {
              color: var(--Button-secondary-content-pressed, #6E7C8E);
            }
          }
        `;case"filled":return`
          background: ${s?"var(--Common-Control-Base-normal, #364356)":"var(--Button-secondary-base-normal, rgba(255, 255, 255, 0.15))"};
          color: var(--Button-secondary-content-normal, white);
          
          svg {
            color: var(--Button-secondary-content-normal, white);
          }
          
          &:active {
            background: var(--Button-secondary-base-pressed, rgba(110, 124, 142, 0.25));
            color: var(--Button-secondary-content-pressed, #6E7C8E);
            
            svg {
              color: var(--Button-secondary-content-pressed, #6E7C8E);
            }
          }
        `}}}
`,Xt=v.div`
  width: 12px;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  svg {
    width: 12px;
    height: 12px;
  }
`,Vc=({variant:e="outlined",showLabel:i=!1,label:s="Delete",icon:l=t.jsx(zt,{}),onClick:c,disabled:p=!1,className:d})=>t.jsxs(Cb,{$variant:e,$showLabel:i,$disabled:p,onClick:c,disabled:p,className:d,children:[t.jsx(Xt,{children:l}),i&&t.jsx("span",{children:s})]}),pn=v.div`
  height: 20px;
  ${({$showLabel:e})=>e?`
    padding: 0px 8px;
  `:`
    padding: 4px;
  `}
  border-radius: 9999px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border: none;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.2px;
  
  ${({$variant:e,$showLabel:i,$state:s})=>{if(s==="disabled")return`
        background: var(--Button-base-disabled, rgba(110, 124, 142, 0.10));
        color: var(--Button-content-disabled, rgba(182, 195, 214, 0.30));
        
        svg {
          color: var(--Button-content-disabled, rgba(182, 195, 214, 0.30));
        }
      `;if(s==="pressed")return`
        background: var(--Button-secondary-base-pressed, rgba(110, 124, 142, 0.25));
        color: var(--Button-secondary-content-pressed, #6E7C8E);
        
        svg {
          color: var(--Button-secondary-content-pressed, #6E7C8E);
        }
      `;switch(e){case"outlined":return`
          background: transparent;
          color: var(--Button-secondary-content-normal, white);
          
          svg {
            color: var(--Button-secondary-content-normal, white);
          }
        `;case"filled":return`
          background: ${i?"var(--Common-Control-Base-normal, #364356)":"var(--Button-secondary-base-normal, rgba(255, 255, 255, 0.15))"};
          color: var(--Button-secondary-content-normal, white);
          
          svg {
            color: var(--Button-secondary-content-normal, white);
          }
        `}}}
`,wb=v.button`
  width: 80px;
  height: 80px;
  border-radius: 9999px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  transition: all 0.2s ease;
  
  ${({$type:e,$disabled:i})=>i?`
        background: var(--Common-Control-Base-disabled, rgba(110, 124, 142, 0.30));
        
        svg {
          color: var(--Common-Control-Content-disabled, rgba(182, 195, 214, 0.30));
        }
      `:e==="record"?`
        background: var(--Common-Control-Base-normal, #364356);
        
        svg {
          color: var(--Color-Feedback-Red, #F53232);
        }
        
        &:active {
          background: var(--Common-Control-Base-pressed, rgba(54, 67, 86, 0.60));
          
          svg {
            color: rgba(245.44, 50.11, 50.11, 0.60);
          }
        }
      `:e==="stop"?`
        background: var(--Color-Feedback-Red, #F53232);
        
        svg {
          color: var(--Button-primary-content-normal, white);
        }
        
        &:active {
          background: rgba(245.44, 50.11, 50.11, 0.60);
          
          svg {
            color: var(--Color-Neutral-35, #AABDD6);
          }
        }
      `:`
      background: var(--Common-Control-Base-normal, #364356);
      
      svg {
        color: var(--Common-Control-Content-normal, #D5E2F2);
      }
      
      &:active {
        background: var(--Common-Control-Base-pressed, rgba(54, 67, 86, 0.60));
        
        svg {
          color: var(--Common-Control-Content-pressed, #6E7C8E);
        }
      }
    `}
`,Qt=v.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Ma=({type:e="pause",onClick:i,disabled:s=!1,className:l})=>{const c=()=>{switch(e){case"pause":return t.jsx(xs,{});case"play":return t.jsx(Ho,{});case"stop":return t.jsx(Wo,{});case"record":return t.jsx(Uo,{});default:return t.jsx(xs,{})}};return t.jsx(wb,{$type:e,$disabled:s,onClick:i,disabled:s,className:l,children:t.jsx(Qt,{children:c()})})},fn=v.div`
  width: 80px;
  height: 80px;
  border-radius: 9999px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  
  ${({$type:e,$state:i})=>i==="disabled"?`
        background: var(--Common-Control-Base-disabled, rgba(110, 124, 142, 0.30));
        
        svg {
          color: var(--Common-Control-Content-disabled, rgba(182, 195, 214, 0.30));
        }
      `:i==="pressed"?e==="record"?`
          background: var(--Common-Control-Base-pressed, rgba(54, 67, 86, 0.60));
          
          svg {
            color: rgba(245.44, 50.11, 50.11, 0.60);
          }
        `:e==="stop"?`
          background: rgba(245.44, 50.11, 50.11, 0.60);
          
          svg {
            color: var(--Color-Neutral-35, #AABDD6);
          }
        `:`
        background: var(--Common-Control-Base-pressed, rgba(54, 67, 86, 0.60));
        
        svg {
          color: var(--Common-Control-Content-pressed, #6E7C8E);
        }
      `:e==="record"?`
        background: var(--Common-Control-Base-normal, #364356);
        
        svg {
          color: var(--Color-Feedback-Red, #F53232);
        }
      `:e==="stop"?`
        background: var(--Color-Feedback-Red, #F53232);
        
        svg {
          color: var(--Button-primary-content-normal, white);
        }
      `:`
      background: var(--Common-Control-Base-normal, #364356);
      
      svg {
        color: var(--Common-Control-Content-normal, #D5E2F2);
      }
    `}
`,R1=v.div`
  width: 100%;
  background: linear-gradient(0deg, rgba(19, 27, 38, 0.50) 0%, #131B26 100%);
  display: flex;
  flex-direction: column;
  border-radius: 5px;
`,I1=v.div`
  width: 100%;
  height: 24px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 8px;
  gap: 4px;
`,A1=v.div`
  display: flex;
  gap: 4px;
  align-items: center;
  opacity: 0.5;
`,z1=()=>t.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"currentColor",style:{color:"#B6C3D6"},children:t.jsx("rect",{width:"10",height:"10"})}),M1=()=>t.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"currentColor",style:{color:"#B6C3D6"},children:t.jsx("circle",{cx:"5",cy:"5",r:"5"})}),V1=()=>t.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"currentColor",style:{color:"#B6C3D6"},children:t.jsx("path",{d:"M5 10L0 0H10L5 10Z",transform:"rotate(180 5 5)"})}),F1=v.div`
  width: 100%;
  height: 56px;
  padding: ${e=>e.$padding||"0 12px"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
`,N1=v.div`
  display: flex;
  align-items: center;
  gap: 4px;
  min-width: 48px;
`,wm=v.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`,O1=v.div`
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: flex-end;
  min-width: 48px;
`,Zp=v.div`
  color: var(--Text-primary, #FFFFFF);
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0.20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,bb=v.span`
  color: var(--Text-assist, #B6C3D6);
  font-size: 14px;
  font-family: Roboto;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.20px;
`,Sb=v.div`
  width: 32px;
  height: 8px;
  position: relative;
  display: flex;
  align-items: center;
`,kb=v.div`
  width: 100%;
  height: 100%;
  background: var(--Color-Neutral-70, #364356);
  border-radius: 7px;
  position: absolute;
`,Tb=v.div`
  width: ${e=>e.$width};
  height: 100%;
  background: ${e=>e.$color};
  border-radius: 7px;
  position: absolute;
  z-index: 1;
`,$b=v.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Lb=v.div`
  width: ${e=>e.$active?"24px":"6px"};
  height: 6px;
  background: white;
  opacity: ${e=>e.$active?"1":"0.4"};
  border-radius: ${e=>e.$active?"8px":"9999px"};
  transition: all 0.3s ease;
`,jt=({type:e="secondary",batteryLevel:i=80,title:s="Title",showBack:l=!0,showMore:c=!0,actions:p,onBack:d,onMore:f,onMenuSelect:x,menuOptions:g,showInfoIcon:m=!1,showTrailingIcon1:j=!1,showTrailingIcon2:C=!1,showTrailingIcon3:k=!1,currentStep:S=1,totalSteps:T=5,onClose:P,showSkip:R=!1,onSkip:E})=>{const M=[{label:"Settings",value:"settings"},{label:"About",value:"about"},{label:"Help",value:"help"}];if(e==="main")return t.jsxs(R1,{children:[t.jsx(I1,{children:t.jsxs(A1,{children:[t.jsx(z1,{}),t.jsx(M1,{}),t.jsx(V1,{})]})}),t.jsxs(F1,{$padding:"0 24px",children:[t.jsx(N1,{children:t.jsx(V3,{width:79,height:18,color:"#FFFFFF"})}),t.jsxs(O1,{children:[t.jsx(fi,{size:24,color:"#B6C3D6"}),t.jsxs(Sb,{children:[t.jsx(kb,{}),t.jsx(Tb,{$width:`${i}%`,$color:"var(--Feedback-Blue, #00B3E3)"})]}),t.jsxs(bb,{children:[i,"%"]})]})]})]});if(e==="stepper")return t.jsxs(R1,{children:[t.jsx(I1,{children:t.jsxs(A1,{children:[t.jsx(z1,{}),t.jsx(M1,{}),t.jsx(V1,{})]})}),t.jsxs(F1,{$padding:"0 12px",children:[t.jsx(N1,{children:t.jsx(qe,{icon:t.jsx($c,{}),onClick:d})}),t.jsx(wm,{style:{justifyContent:"center"},children:t.jsx($b,{children:Array.from({length:T}).map((V,z)=>t.jsx(Lb,{$active:z+1===S},z))})}),t.jsxs(O1,{children:[R&&t.jsx(K,{variant:"text",size:"small",onClick:E,style:{color:"white"},children:"Skip"}),P&&t.jsx(qe,{icon:t.jsx(H8,{}),onClick:P})]})]})]});const F=l?"0 12px":"0 12px 0 24px";let O=s;m&&typeof s=="string"&&(O=t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[t.jsx(Zp,{children:s}),t.jsx(rf,{size:20})]}));let X=null;if(p)X=p;else{const V=[];c&&V.push(t.jsx(Rt,{variant:"icon",icon:t.jsx("div",{style:{width:24,height:24},children:t.jsx(Mw,{})}),align:"right",options:g||M,onChange:z=>{x&&x(z),f&&f()}},"trailing-more")),C&&(V.push(t.jsx(qe,{icon:t.jsx(rl,{}),onClick:()=>console.log("Icon 2A")},"trailing-2a")),V.push(t.jsx(qe,{icon:t.jsx(sl,{}),onClick:()=>console.log("Icon 2B")},"trailing-2b"))),k&&(V.push(t.jsx(qe,{icon:t.jsx(rl,{}),onClick:()=>console.log("Icon 3A")},"trailing-3a")),V.push(t.jsx(qe,{icon:t.jsx(sl,{}),onClick:()=>console.log("Icon 3B")},"trailing-3b")),V.push(t.jsx(qe,{icon:t.jsx(Jc,{}),onClick:()=>console.log("Icon 3C")},"trailing-3c"))),V.length>0&&(X=t.jsx(t.Fragment,{children:V.filter(z=>z!==null)}))}return t.jsxs(R1,{children:[t.jsx(I1,{children:t.jsxs(A1,{children:[t.jsx(z1,{}),t.jsx(M1,{}),t.jsx(V1,{})]})}),t.jsxs(F1,{$padding:F,children:[l?t.jsx(N1,{children:t.jsx(qe,{icon:t.jsx($c,{}),onClick:d})}):t.jsx("div",{}),t.jsx(wm,{children:typeof O=="string"?t.jsx(Zp,{children:O}):O}),t.jsx(O1,{style:{gap:p?0:4},children:X})]})]})},Bb=({batteryLevel:e=80})=>t.jsx(jt,{type:"main",batteryLevel:e}),bm=e=>t.jsx(jt,{type:"secondary",...e}),Pb=v.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  align-items: flex-start;
  padding: 24px;
`,hn=v.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 360px;
`,xn=v.div`
  color: var(--Text-Assist, #B6C3D6);
  font-size: 14px;
  font-family: Roboto;
`,Eb=()=>t.jsxs(Pb,{children:[t.jsxs(hn,{children:[t.jsx(xn,{children:"Main Layer"}),t.jsx(jt,{type:"main"})]}),t.jsxs(hn,{children:[t.jsx(xn,{children:"Second Layer (Default)"}),t.jsx(jt,{type:"secondary",title:"Title"})]}),t.jsxs(hn,{children:[t.jsx(xn,{children:"Figma: Info Icon = ON"}),t.jsx(jt,{type:"secondary",title:"VIVE Sync",showInfoIcon:!0})]}),t.jsxs(hn,{children:[t.jsx(xn,{children:"Figma: Trailing 1 icon = ON"}),t.jsx(jt,{type:"secondary",title:"Settings",showTrailingIcon1:!0})]}),t.jsxs(hn,{children:[t.jsx(xn,{children:"Figma: Trailing 2 icons = ON ⭐"}),t.jsx(jt,{type:"secondary",title:"Gallery",showTrailingIcon2:!0})]}),t.jsxs(hn,{children:[t.jsx(xn,{children:"Figma: Trailing 3 icons = ON"}),t.jsx(jt,{type:"secondary",title:"Details",showTrailingIcon3:!0})]}),t.jsxs(hn,{children:[t.jsx(xn,{children:"Combined: Icon1 + Icon2 = ON"}),t.jsx(jt,{type:"secondary",title:"Advanced",showTrailingIcon1:!0,showTrailingIcon2:!0})]}),t.jsxs(hn,{children:[t.jsx(xn,{children:"Combined: All 3 icons = ON"}),t.jsx(jt,{type:"secondary",title:"Maximum",showTrailingIcon1:!0,showTrailingIcon2:!0,showTrailingIcon3:!0})]}),t.jsxs(hn,{children:[t.jsx(xn,{children:"Second Layer (Custom Actions)"}),t.jsx(jt,{type:"secondary",title:"Title",actions:t.jsxs(t.Fragment,{children:[t.jsx(qe,{icon:t.jsx(rl,{}),onClick:()=>{}}),t.jsx(qe,{icon:t.jsx(sl,{}),onClick:()=>{}}),t.jsx(qe,{icon:t.jsx(Jc,{}),onClick:()=>{}})]}),showMore:!1})]}),t.jsxs(hn,{children:[t.jsx(xn,{children:"Second Layer (Text Only)"}),t.jsx(jt,{type:"secondary",title:"Title",showBack:!1,showMore:!1})]}),t.jsxs(hn,{children:[t.jsx(xn,{children:"Stepper (OOBE)"}),t.jsx(jt,{type:"stepper",showSkip:!0})]}),t.jsxs(hn,{children:[t.jsx(xn,{children:"Stepper (Tutorial)"}),t.jsx(jt,{type:"stepper",onClose:()=>{}})]})]}),Sm=v.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  margin-bottom: 8px;
`,hr=v.div`
  color: var(--Text-Secondary, #d5e2f2);
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  cursor: pointer;
  font-family: Roboto, sans-serif;
`,Db=()=>{const[e,i]=b.useState("secondary"),[s,l]=b.useState(!0),[c,p]=b.useState(!0),[d,f]=b.useState(!1),[x,g]=b.useState(!1),[m,j]=b.useState(80);let C="Page Title";d&&(C=t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[t.jsx(Zp,{children:"Page Title"}),t.jsx(rf,{size:20})]}));let k;x&&(k=t.jsxs(t.Fragment,{children:[t.jsx(qe,{icon:t.jsx(rl,{}),onClick:()=>{}}),t.jsx(qe,{icon:t.jsx(sl,{}),onClick:()=>{}}),t.jsx(qe,{icon:t.jsx(Jc,{}),onClick:()=>{}})]}));const S=T=>{i(T),T==="main"?(l(!1),p(!1),f(!1),g(!1)):T==="secondary"?(l(!0),p(!0),f(!1),g(!1)):T==="stepper"&&(l(!0),p(!1),f(!1),g(!1))};return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"100%"},children:[t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[t.jsx("div",{style:{fontFamily:"Roboto, sans-serif",fontSize:"14px",fontWeight:500,color:"var(--Text-Primary, #ffffff)",marginBottom:"8px"},children:"Type"}),t.jsxs(Sm,{children:[t.jsxs(hr,{onClick:()=>S("main"),children:[t.jsx(H,{checked:e==="main",onChange:()=>S("main"),shape:"rounded"}),"Main Layer"]}),t.jsxs(hr,{onClick:()=>S("secondary"),children:[t.jsx(H,{checked:e==="secondary",onChange:()=>S("secondary"),shape:"rounded"}),"Second Layer"]}),t.jsxs(hr,{onClick:()=>S("stepper"),children:[t.jsx(H,{checked:e==="stepper",onChange:()=>S("stepper"),shape:"rounded"}),"Stepper (Tutorial)"]})]}),e==="main"&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{fontFamily:"Roboto, sans-serif",fontSize:"14px",fontWeight:500,color:"var(--Text-Primary, #ffffff)",marginBottom:"8px"},children:["Battery Level: ",m,"%"]}),t.jsx("input",{type:"range",min:"0",max:"100",value:m,onChange:T=>j(Number(T.target.value)),style:{width:"200px"}})]}),e==="secondary"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{style:{fontFamily:"Roboto, sans-serif",fontSize:"14px",fontWeight:500,color:"var(--Text-Primary, #ffffff)",marginBottom:"8px"},children:"Optional"}),t.jsxs(Sm,{children:[t.jsxs(hr,{onClick:()=>l(!s),children:[t.jsx(H,{checked:s,onChange:l,shape:"square"}),"Show Back"]}),t.jsxs(hr,{onClick:()=>p(!c),children:[t.jsx(H,{checked:c,onChange:p,shape:"square"}),"Show More"]}),t.jsxs(hr,{onClick:()=>f(!d),children:[t.jsx(H,{checked:d,onChange:f,shape:"square"}),"Show Info"]}),t.jsxs(hr,{onClick:()=>g(!x),children:[t.jsx(H,{checked:x,onChange:g,shape:"square"}),"Show Actions"]})]})]})]}),t.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",background:"#131b26",padding:"48px",borderRadius:"16px",minHeight:"200px"},children:t.jsx("div",{style:{width:"360px"},children:e==="stepper"?t.jsx(jt,{type:"stepper",currentStep:1,totalSteps:5,showSkip:!0,onSkip:()=>console.log("skip")}):e==="main"?t.jsx(jt,{type:"main",batteryLevel:m}):t.jsx(jt,{type:"secondary",title:C,showBack:s,showMore:!x&&c,actions:k,onBack:()=>console.log("back"),onMore:()=>console.log("more")})})})]})},Rb=()=>t.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",background:"#131b26",padding:"24px",borderRadius:"16px"},children:t.jsx("div",{style:{width:"360px"},children:t.jsx(jt,{type:"secondary",title:"Page Title"})})}),Ib=v.div`
  ${({orientation:e,type:i,thickness:s,length:l})=>{const c=i==="type-01"?"var(--Border-border-divider-01, #4B596C)":"var(--Border-border-divider-02, #2A3649)";return e==="horizontal"?`
        width: ${l||"100%"};
        height: ${s}px;
        background: ${c};
      `:`
        width: ${s}px;
        height: ${l||"100%"};
        background: ${c};
      `}}
`,zn=({orientation:e="horizontal",type:i="type-01",thickness:s=1,length:l,className:c,style:p})=>t.jsx(Ib,{orientation:e,type:i,thickness:s,length:l,className:c,style:p}),Ab=v.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding: 24px;
  background: var(--Colors-Surface-Backgronud--01, #131b26);
  border-radius: 16px;
  width: 100%;
`,km=v.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,Tm=v.div`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.2px;
  color: var(--Text-Primary, #ffffff);
`,$m=v.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
`,Va=v.div`
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.22px;
  color: var(--Text-Assist, #B6C3D6);
`,Lm=v.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,zb=v.div`
  display: flex;
  gap: 24px;
  align-items: flex-start;
`,Bm=v.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`,Mb=()=>t.jsxs(Ab,{children:[t.jsxs(km,{children:[t.jsx(Tm,{children:"Horizontal Dividers"}),t.jsxs($m,{children:[t.jsx(Va,{children:"Type 01 - 1.5px"}),t.jsx(Lm,{children:t.jsx(zn,{orientation:"horizontal",type:"type-01",thickness:1.5,length:"200px"})})]}),t.jsxs($m,{children:[t.jsx(Va,{children:"Type 02 - 1.5px"}),t.jsx(Lm,{children:t.jsx(zn,{orientation:"horizontal",type:"type-02",thickness:1.5,length:"200px"})})]})]}),t.jsxs(km,{children:[t.jsx(Tm,{children:"Vertical Dividers"}),t.jsxs(zb,{children:[t.jsxs(Bm,{children:[t.jsx(Va,{children:"Type 01 - 1.5px"}),t.jsx(zn,{orientation:"vertical",type:"type-01",thickness:1.5,length:"80px"})]}),t.jsxs(Bm,{children:[t.jsx(Va,{children:"Type 02 - 1.5px"}),t.jsx(zn,{orientation:"vertical",type:"type-02",thickness:1.5,length:"80px"})]})]})]})]}),Vb=()=>t.jsx("div",{style:{width:"200px"},children:t.jsx(zn,{orientation:"horizontal",type:"type-01",thickness:1.5,length:"200px"})}),_1={p13517500:"M1.6 8C1.6 11.5346 4.46538 14.4 8 14.4C11.5346 14.4 14.4 11.5346 14.4 8C14.4 4.46538 11.5346 1.6 8 1.6C4.46538 1.6 1.6 4.46538 1.6 8ZM13.2706 8C13.2706 10.9109 10.9109 13.2706 8 13.2706C5.08913 13.2706 2.72941 10.9109 2.72941 8C2.72941 5.08913 5.08913 2.72941 8 2.72941C10.9109 2.72941 13.2706 5.08913 13.2706 8Z",p156ab580:"M7.24706 8C7.24706 7.58416 7.58416 7.24706 8 7.24706C8.41584 7.24706 8.75294 7.58416 8.75294 8V10.6353C8.75294 11.0511 8.41584 11.3882 8 11.3882C7.58416 11.3882 7.24706 11.0511 7.24706 10.6353V8Z",p1c0c4200:"M8 4.42353C7.4802 4.42353 7.05882 4.84491 7.05882 5.36471C7.05882 5.8845 7.4802 6.30588 8 6.30588C8.5198 6.30588 8.94118 5.8845 8.94118 5.36471C8.94118 4.84491 8.5198 4.42353 8 4.42353Z"},T4=""+new URL("7783df25ead845e6f5978a03db3806e3501bf5ee-Byth4tD8.png",import.meta.url).href,$4=""+new URL("712d27211a5421d6cc525a82db3b14e2e6472b7e-D24Cg9Ki.png",import.meta.url).href,L4=""+new URL("13d454c1052e140dd1331e5e54dea7958f44e8bc-DKaz0IO6.png",import.meta.url).href,Fb=v.div`
  width: ${e=>e.$width||"312px"};
  background: var(--Surface-mobile-normal-02, #2A3649);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  position: relative;
  overflow: visible;
`,Fa=v.h2`
  color: var(--Text-primary, white);
  font-size: 20px;
  font-family: Roboto;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0.04px;
  margin: 0;
  word-wrap: break-word;
  text-align: center;
  width: 100%;
`,Na=v.p`
  color: var(--Text-secondary, #D5E2F2);
  font-size: 14px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.20px;
  margin: 0;
  word-wrap: break-word;
  white-space: pre-wrap;
  text-align: ${e=>e.$align||"left"};
`,H1=v.div`
  padding: ${e=>e.$padding||"24px 24px 16px 24px"};
  display: flex;
  flex-direction: column;
  gap: ${e=>e.$gap||"8px"};
  flex: 1;
  overflow: visible;
`,Nb=v.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 0 24px 24px 24px;
  flex-wrap: wrap;
  flex-direction: ${e=>e.$layout==="vertical"?"column":"row"};
`,Ob=v.img`
  width: 100%;
  height: 219px;
  object-fit: cover;
  border-radius: 15px 15px 0 0;
`,_b=v.img`
  width: 100%;
  height: 136px;
  object-fit: cover;
  border-radius: 7px;
  margin-bottom: 8px; 
`,Hb=v.div`
  position: relative;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  width: 100%;
`,Wb=v.div`
  overflow-y: auto;
  margin-right: 8px; /* Content indented to leave room for custom scrollbar */
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none; /* Firefox */
  
  &::-webkit-scrollbar {
    display: none; /* Chrome/Safari */
  }
`,Ub=v.div`
  position: absolute;
  right: 8px; /* Positioned at the margin area */
  top: 0;
  width: 4px;
  background-color: var(--Common-Control-Base-normal, #364356);
  border-radius: 9999px;
  opacity: ${e=>e.$visible?1:0};
  transition: opacity 0.3s ease-in-out;
  pointer-events: none;
`,Zb=v.div`
  height: 48px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 24px; /* Avoid covering the scrollbar area */
  background: linear-gradient(360deg, var(--Colors-Surface-Backgronud--02, #2A3649) 0%, rgba(42, 54, 73, 0) 100%);
  pointer-events: none;
`,Gb=v.div`
  position: relative;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
`,Kb=()=>t.jsx(Gb,{children:t.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[t.jsx("path",{d:_1.p156ab580,fill:"var(--Text-Assist, #B6C3D6)"}),t.jsx("path",{d:_1.p1c0c4200,fill:"var(--Text-Assist, #B6C3D6)"}),t.jsx("path",{clipRule:"evenodd",d:_1.p13517500,fill:"var(--Text-Assist, #B6C3D6)",fillRule:"evenodd"})]})}),qb=v.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  margin-top: 8px;
`,Yb=v.div`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  width: 100%;
`,Xb=v.p`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: var(--Text-Assist, #B6C3D6);
  margin: 0;
  flex: 1;
`,B4=({children:e})=>t.jsxs(qb,{children:[t.jsx(zn,{orientation:"horizontal",type:"type-01",thickness:1}),t.jsxs(Yb,{children:[t.jsx(Kb,{}),t.jsx(Xb,{children:e})]})]}),Qb=v.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  width: 100%;
`,Jb=v.div`
  flex: 1;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.2px;
  color: var(--Text-secondary, #D5E2F2);
`,P4=({checked:e,onChange:i,label:s})=>t.jsxs(Qb,{children:[t.jsx(H,{checked:e,onChange:i,shape:"square",size:20}),t.jsx(Jb,{children:s})]}),Fi=({variant:e="default",title:i="Dialog box title here",description:s="Lorem ipsum dolor sit amet, consectetur adipiscing elit.",image:l,confirmText:c="Button",cancelText:p,tertiaryText:d,onConfirm:f,onCancel:x,onTertiary:g,footerLayout:m="horizontal",className:j,topContent:C,children:k})=>{const[S,T]=b.useState(!1),P=b.useRef(null),R=b.useRef(null),E=b.useRef(null),M=()=>{if(!R.current||!E.current)return;const{scrollTop:X,scrollHeight:V,clientHeight:z}=R.current,J=z/V,Q=Math.max(20,J*z),ae=V-z,me=z-Q;if(ae<=0){E.current.style.display="none";return}else E.current.style.display="block";const ge=X/ae*me;E.current.style.height=`${Q}px`,E.current.style.transform=`translateY(${ge}px)`};b.useEffect(()=>()=>{P.current&&clearTimeout(P.current)},[]),b.useLayoutEffect(()=>{e==="scrollable"&&M()});const F=()=>{M(),T(!0),P.current&&clearTimeout(P.current),P.current=setTimeout(()=>{T(!1)},1e3)},O=()=>e==="image-top"?t.jsxs(t.Fragment,{children:[l&&t.jsx(Ob,{src:l}),t.jsxs(H1,{$padding:"16px 24px 16px 24px",children:[C,t.jsx(Fa,{children:i}),t.jsx(Na,{children:s}),k]})]}):e==="image-middle"?t.jsxs(H1,{children:[C,t.jsx(Fa,{children:i}),l&&t.jsx("div",{style:{paddingTop:"8px",paddingBottom:"8px"},children:t.jsx(_b,{src:l})}),t.jsx(Na,{children:s}),k]}):e==="scrollable"?t.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,overflow:"visible"},children:[t.jsxs("div",{style:{padding:"24px 24px 16px 24px",display:"flex",flexDirection:"column",gap:"8px"},children:[C,t.jsx(Fa,{children:i})]}),t.jsxs(Hb,{children:[t.jsx(Wb,{ref:R,style:{maxHeight:"250px"},onScroll:F,children:t.jsxs("div",{style:{padding:"0 16px 24px 24px",display:"flex",flexDirection:"column",gap:"8px"},children:[t.jsx(Na,{$align:"left",children:s}),k]})}),t.jsx(Ub,{ref:E,$visible:S}),t.jsx(Zb,{})]})]}):t.jsxs(H1,{children:[C,t.jsx(Fa,{children:i}),t.jsx(Na,{children:s}),k]});return t.jsxs(Fb,{className:j,children:[O(),t.jsx(Nb,{$layout:m,children:m==="horizontal"?t.jsxs(t.Fragment,{children:[p&&t.jsx(K,{variant:"text",onClick:x,style:{padding:"6px 12px",minWidth:"72px"},children:p}),c&&t.jsx(K,{variant:"filled",onClick:f,style:{padding:"6px 20px",minWidth:"80px"},children:c})]}):t.jsxs(t.Fragment,{children:[c&&t.jsx(K,{variant:"filled",onClick:f,style:{padding:"6px 20px",minWidth:"80px"},children:c}),p&&t.jsx(K,{variant:"text",onClick:x,style:{padding:"6px 12px",minWidth:"72px"},children:p}),d&&t.jsx(K,{variant:"text",onClick:g,style:{padding:"6px 12px",minWidth:"72px"},children:d})]})})]})},eS=v.div`
  display: flex;
  flex-wrap: wrap;
  gap: 56px;
  align-items: flex-start;
  padding: 24px;
`,tS=()=>t.jsxs(eS,{children:[t.jsx(Fi,{variant:"default",cancelText:"Cancel",confirmText:"Button"}),t.jsx(Fi,{variant:"scrollable",description:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare sed tincidunt lorem condimentum pellentesque. Quis est mauris, volutpat volutpat mi. Eleifend massa integer cursus sapien dictum netus. Tellus urna volutpat sed sit tortor. Tincidunt venenatis accumsan montes, diam, ullamcorper est molestie. Consectetur natoque nunc sagittis amet. Luctus placerat non augue feugiat.

Id malesuada congue massa amet ipsum magnis leo auctor et. Viverra magna ultrices nisl, blandit eget morbi consequat, lacus. Diam magna id viverra quisque dui eget. Enim, porttitor ullamcorper imperdiet mi ipsum magna consequat dolor praesent.`,cancelText:"Cancel",confirmText:"Button"}),t.jsx(Fi,{variant:"image-middle",image:$4,cancelText:"Cancel",confirmText:"Button"}),t.jsx(Fi,{variant:"image-top",image:T4,description:"Please make sure the glasses are turned on (press and hold AI button for two seconds) and its battery is charged.",cancelText:"Cancel",confirmText:"Button"}),t.jsxs(Fi,{variant:"default",title:"Dialog box title here",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",cancelText:"Cancel",confirmText:"Button",topContent:t.jsx("div",{style:{display:"flex",flexDirection:"column",justifyContent:"flex-end",alignItems:"center",height:16,width:"100%",marginBottom:8,position:"relative",zIndex:1},children:t.jsx("img",{src:L4,alt:"Special Offer",style:{width:140,height:105}})}),children:[t.jsx(et,{value:"",onChange:()=>{},placeholder:"Other comments (optional)",fullWidth:!0,supportText:"By sending feedback you agrees our consent of collection",style:{marginTop:0}}),t.jsx("div",{style:{marginTop:0},children:t.jsx(K,{variant:"hyperlink",size:"small",children:"Still can’t connect to glasses"})}),t.jsx("div",{style:{marginTop:8},children:t.jsx(P4,{checked:!1,onChange:()=>{},label:"I have read and agree to the documents mentioned above"})}),t.jsxs(B4,{children:["To back up photos and videos, please go to Settings ",">",' Glasses media and turn on "Save a copy when importing".']})]})]}),nS=()=>{const[e,i]=b.useState("default"),[s,l]=b.useState("2-btn-horiz"),[c,p]=b.useState(!1),[d,f]=b.useState(!1),[x,g]=b.useState(!1),[m,j]=b.useState(!1),[C,k]=b.useState(!1),[S,T]=b.useState(!1),[P,R]=b.useState(""),E=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare sed tincidunt lorem condimentum pellentesque. Quis est mauris, volutpat volutpat mi. Eleifend massa integer cursus sapien dictum netus. Tellus urna volutpat sed sit tortor. Tincidunt venenatis accumsan montes, diam, ullamcorper est molestie. Consectetur natoque nunc sagittis amet. Luctus placerat non augue feugiat.
  
  Id malesuada congue massa amet ipsum magnis leo auctor et. Viverra magna ultrices nisl, blandit eget morbi consequat, lacus. Diam magna id viverra quisque dui eget. Enim, porttitor ullamcorper imperdiet mi ipsum magna consequat dolor praesent. Vel at diam eget eget eget odio venenatis. Adipiscing auctor nulla sed viverra ut senectus. Euismod arcu dui mi ipsum viverra molestie accumsan. Hendrerit pellentesque molestie sapien vulputate purus. Eros feugiat augue augue placerat netus. Amet commodo nec non massa in laoreet mauris. Egestas tristique elit, mattis et enim ut risus. Vestibulum mollis scelerisque at cum enim eu at facilisis. Praesent sed ac in nec velit posuere consectetur. Facilisis volutpat tellus sed feugiat malesuada praesent. Arcu eget malesuada amet nibh dignissim eros nisi.`,F=(()=>{switch(s){case"1-btn":return{confirmText:"Button",cancelText:void 0,tertiaryText:void 0,footerLayout:"horizontal"};case"2-btn-horiz":return{confirmText:"Button",cancelText:"Cancel",tertiaryText:void 0,footerLayout:"horizontal"};case"2-btn-vert":return{confirmText:"ButtonButtonButton",cancelText:"ButtonButtonButton",tertiaryText:void 0,footerLayout:"vertical"};case"3-btn-vert":return{confirmText:"Button",cancelText:"Button",tertiaryText:"Button",footerLayout:"vertical"};default:return{confirmText:"Button",cancelText:"Cancel",tertiaryText:void 0,footerLayout:"horizontal"}}})();return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"100%"},children:[t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",marginBottom:"8px"},children:[t.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap",alignItems:"flex-start"},children:[t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[t.jsx("span",{style:{color:"white",fontSize:"14px",fontWeight:500},children:"Variant"}),t.jsx("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:["default","scrollable","image-middle","image-top"].map(O=>t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",cursor:"pointer"},onClick:()=>i(O),children:[t.jsx(H,{checked:e===O,onChange:()=>i(O),shape:"rounded",size:20}),O.charAt(0).toUpperCase()+O.slice(1)]},O))})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",minWidth:"200px"},children:[t.jsx("span",{style:{color:"white",fontSize:"14px",fontWeight:500},children:"Buttons Layout"}),t.jsx(Rt,{options:[{label:"layout 1 Button",value:"1-btn"},{label:"layout 2 Buttons",value:"2-btn-horiz"},{label:"layout 2 Buttons Vertical",value:"2-btn-vert"},{label:"layout 3 Buttons Vertical",value:"3-btn-vert"}],value:s,onChange:O=>l(O),placeholder:"Select Layout"})]})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[t.jsx("span",{style:{color:"white",fontSize:"14px",fontWeight:500},children:"Advanced Options"}),t.jsxs("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",cursor:"pointer"},onClick:()=>p(!c),children:[t.jsx(H,{checked:c,onChange:p,shape:"square",size:20}),"Top Content"]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",cursor:"pointer"},onClick:()=>f(!d),children:[t.jsx(H,{checked:d,onChange:f,shape:"square",size:20}),"Input Field"]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",cursor:"pointer"},onClick:()=>g(!x),children:[t.jsx(H,{checked:x,onChange:g,shape:"square",size:20}),"Hyperlink"]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",cursor:"pointer"},onClick:()=>j(!m),children:[t.jsx(H,{checked:m,onChange:j,shape:"square",size:20}),"Checkbox"]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",cursor:"pointer"},onClick:()=>k(!C),children:[t.jsx(H,{checked:C,onChange:k,shape:"square",size:20}),"Tips"]})]})]})]}),t.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",background:"#131b26",padding:"48px",borderRadius:"16px",minHeight:"400px"},children:t.jsx(Fi,{variant:e,description:e==="scrollable"?E:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",image:e==="image-top"?T4:e==="image-middle"?$4:void 0,onConfirm:()=>alert("Confirmed"),onCancel:()=>alert("Cancelled"),onTertiary:()=>alert("Tertiary"),...F,topContent:c?t.jsx("div",{style:{display:"flex",flexDirection:"column",justifyContent:"flex-end",alignItems:"center",height:16,width:"100%",marginBottom:8,position:"relative",zIndex:1},children:t.jsx("img",{src:L4,alt:"Special Offer",style:{width:140,height:105}})}):void 0,children:t.jsxs(t.Fragment,{children:[d&&t.jsx("div",{style:{marginTop:0},children:t.jsx(et,{value:P,onChange:R,placeholder:"Other comments (optional)",fullWidth:!0,supportText:"By sending feedback you agrees our consent of collection"})}),x&&t.jsx("div",{style:{marginTop:0},children:t.jsx(K,{variant:"hyperlink",size:"small",children:"Still can’t connect to glasses"})}),m&&t.jsx("div",{style:{marginTop:8},children:t.jsx(P4,{checked:S,onChange:T,label:"I have read and agree to the documents mentioned above"})}),C&&t.jsxs(B4,{children:["To back up photos and videos, please go to Settings ",">",' Glasses media and turn on "Save a copy when importing".']})]})})})]})},iS=()=>t.jsx(Fi,{title:"Example Dialog",description:"This is a preview of the dialog component.",confirmText:"Button",cancelText:"Cancel"}),rS=v.button`
  width: 40px;
  height: 20px;
  border-radius: 10px;
  position: relative;
  border: none;
  cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
  padding: 0;
  outline: none;
  transition: background-color 0.2s ease-in-out;

  /* Default (Off) */
  background-color: var(--Common-Control-Base-normal, #364356);

  /* Active (On) */
  ${e=>e.$checked&&!e.$disabled&&_`
    background-color: var(--Common-Control-Active, #00B3E3);
  `}

  /* Disabled (Off & On) */
  ${e=>e.$disabled&&_`
    background-color: var(--Common-Control-Base-disabled, rgba(110, 124, 142, 0.30));
  `}
`,sS=v.div`
  width: 20px;
  height: 20px;
  border-radius: 50%; /* 18px radius on 20px box is effectively circle */
  position: absolute;
  top: 0;
  left: ${e=>e.$checked?"20px":"0px"};
  transition: left 0.2s ease-in-out, background-color 0.2s;
  
  /* Default (Enabled) */
  background-color: var(--Common-Control-Content-normal, #D5E2F2);

  /* Disabled */
  ${e=>e.$disabled&&_`
    background-color: var(--Common-Control-Content-disabled, rgba(182, 195, 214, 0.30));
  `}
`,qn=({checked:e=!1,disabled:i=!1,onChange:s,className:l})=>{const c=()=>{!i&&s&&s(!e)};return t.jsx(rS,{$checked:e,$disabled:i,onClick:c,className:l,type:"button",children:t.jsx(sS,{$checked:e,$disabled:i})})},oS=v.div`
  width: 220px;
  padding: 16px;
  border-radius: 5px;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 108px;
  display: inline-flex;
  flex-wrap: wrap;
  align-content: flex-start;
`,Oa=v.div`
  font-family: Roboto, sans-serif;
  font-size: 12px;
  color: var(--Text-Assist, #B6C3D6);
  margin-bottom: 8px;
  letter-spacing: 0.22px;
`,Pm=v.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,lS=()=>t.jsxs(oS,{children:[t.jsxs(Pm,{children:[t.jsxs("div",{children:[t.jsx(Oa,{children:"Normal"}),t.jsx(qn,{checked:!1})]}),t.jsxs("div",{children:[t.jsx(Oa,{children:"Active"}),t.jsx(qn,{checked:!0})]})]}),t.jsxs(Pm,{children:[t.jsxs("div",{children:[t.jsx(Oa,{children:"Disabled Off"}),t.jsx(qn,{checked:!1,disabled:!0})]}),t.jsxs("div",{children:[t.jsx(Oa,{children:"Disabled On"}),t.jsx(qn,{checked:!0,disabled:!0})]})]})]}),aS=()=>{const[e,i]=b.useState(!1),[s,l]=b.useState(!1);return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"100%"},children:[t.jsxs("div",{style:{display:"flex",gap:"24px",marginBottom:"8px",flexWrap:"wrap"},children:[t.jsxs("div",{style:{color:"var(--Text-Secondary, #d5e2f2)",display:"flex",alignItems:"center",gap:"8px",fontSize:"14px",cursor:"pointer"},onClick:()=>i(!e),children:[t.jsx("div",{onClick:c=>c.stopPropagation(),children:t.jsx(H,{checked:e,onChange:i,shape:"square",size:20})}),"Checked"]}),t.jsxs("div",{style:{color:"var(--Text-Secondary, #d5e2f2)",display:"flex",alignItems:"center",gap:"8px",fontSize:"14px",cursor:"pointer"},onClick:()=>l(!s),children:[t.jsx("div",{onClick:c=>c.stopPropagation(),children:t.jsx(H,{checked:s,onChange:l,shape:"square",size:20})}),"Disabled"]})]}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",background:"var(--Colors-Surface-Backgronud--01, #131b26)",borderRadius:"16px",padding:"48px",width:"100%",alignItems:"center",justifyContent:"center"},children:t.jsx(qn,{checked:e,disabled:s,onChange:i})})]})},cS=()=>{const[e,i]=b.useState(!1);return t.jsx(qn,{checked:e,onChange:i})},dS=v.div`
  width: 100%;
  max-width: 100%;
  padding: 0 20px;
  background: linear-gradient(
    0deg,
    #131b26 0%,
    rgba(19, 27, 38, 0.5) 100%
  );
  border-top-left-radius: 36px;
  border-top-right-radius: 36px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  overflow: hidden;
`,uS=v.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 16px;
`,_a=v.button`
  width: 56px;
  height: 56px;
  border-radius: ${e=>e.$active?"999px":"0"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: none; /* No animation - instant state change */
  padding: 0;

  /* Removed: &:active { transform: scale(0.95); } */
`,pS=v.div`
  width: 100%;
  height: 16px;
  position: relative;
  
  /* The bar indicator */
  &::after {
    content: '';
    width: 64px;
    height: 2px;
    background: rgba(255, 255, 255, 0.20);
    border-radius: 32px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 8px;
  }
`,fS=()=>t.jsx("svg",{width:"0",height:"0",style:{position:"absolute",opacity:0,pointerEvents:"none"},children:t.jsx("defs",{children:t.jsxs("linearGradient",{id:"nav-active-gradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[t.jsx("stop",{offset:"35%",stopColor:"#33C2E9"}),t.jsx("stop",{offset:"100%",stopColor:"#1A5EFF"})]})})}),E4=({activeTab:e="gallery",onTabChange:i,className:s,style:l})=>{const c=f=>{i&&i(f)},p=f=>e===f?"url(#nav-active-gradient)":"rgba(213, 226, 242, 0.70)",d=f=>e===f?36:28;return t.jsxs(dS,{className:s,style:l,children:[t.jsx(fS,{}),t.jsxs(uS,{children:[t.jsx(_a,{$active:e==="vive",onClick:()=>c("vive"),children:t.jsx(il,{size:d("vive"),color:p("vive")})}),t.jsx(_a,{$active:e==="gallery",onClick:()=>c("gallery"),children:t.jsx(Sc,{size:d("gallery"),color:p("gallery")})}),t.jsx(_a,{$active:e==="explore",onClick:()=>c("explore"),children:t.jsx(kc,{size:d("explore"),color:p("explore")})}),t.jsx(_a,{$active:e==="settings",onClick:()=>c("settings"),children:t.jsx(Tc,{size:d("settings"),color:p("settings")})})]}),t.jsx(pS,{})]})},Ai=v.div`
  width: 56px;
  height: 56px;
  border-radius: ${e=>e.$active?"999px":"0"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`,hS=()=>t.jsxs("div",{style:{width:"100%",padding:"16px",overflow:"hidden",justifyContent:"flex-start",alignItems:"flex-start",gap:"40px",display:"flex",flexWrap:"wrap",alignContent:"flex-start"},children:[t.jsx("svg",{width:"0",height:"0",style:{position:"absolute",opacity:0,pointerEvents:"none"},children:t.jsx("defs",{children:t.jsxs("linearGradient",{id:"nav-active-gradient-demo",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[t.jsx("stop",{offset:"35%",stopColor:"#33C2E9"}),t.jsx("stop",{offset:"100%",stopColor:"#1A5EFF"})]})})}),t.jsx(Ai,{children:t.jsx(il,{size:28,color:"rgba(213, 226, 242, 0.70)"})}),t.jsx(Ai,{children:t.jsx(Sc,{size:28,color:"rgba(213, 226, 242, 0.70)"})}),t.jsx(Ai,{children:t.jsx(kc,{size:28,color:"rgba(213, 226, 242, 0.70)"})}),t.jsx(Ai,{children:t.jsx(Tc,{size:28,color:"rgba(213, 226, 242, 0.70)"})}),t.jsx(Ai,{$active:!0,children:t.jsx(il,{size:36,color:"url(#nav-active-gradient-demo)"})}),t.jsx(Ai,{$active:!0,children:t.jsx(Sc,{size:36,color:"url(#nav-active-gradient-demo)"})}),t.jsx(Ai,{$active:!0,children:t.jsx(kc,{size:36,color:"url(#nav-active-gradient-demo)"})}),t.jsx(Ai,{$active:!0,children:t.jsx(Tc,{size:36,color:"url(#nav-active-gradient-demo)"})})]}),gs={ai_1:"M11.9447 6.96843C11.8186 7.27719 11.3814 7.27719 11.2553 6.96843L10.6698 5.53419C10.6319 5.44156 10.5584 5.36806 10.4658 5.33024L9.03157 4.74467C8.72281 4.61861 8.72281 4.18139 9.03157 4.05533L10.4658 3.46976C10.5584 3.43194 10.6319 3.35844 10.6698 3.26581L11.2553 1.83157C11.3814 1.52281 11.8186 1.52281 11.9447 1.83157L12.5302 3.26581C12.5681 3.35844 12.6416 3.43194 12.7342 3.46976L14.1684 4.05533C14.4772 4.18139 14.4772 4.61861 14.1684 4.74467L12.7342 5.33024C12.6416 5.36806 12.5681 5.44156 12.5302 5.53419L11.9447 6.96843Z",ai_2:"M5.63376 5.96389C5.84086 5.4787 6.55914 5.4787 6.76624 5.96389L7.72825 8.21771C7.79038 8.36326 7.91114 8.47877 8.06331 8.53819L10.4196 9.45838C10.9268 9.65647 10.9268 10.3435 10.4196 10.5416L8.06331 11.4618C7.91114 11.5212 7.79038 11.6367 7.72825 11.7823L6.76624 14.0361C6.55914 14.5213 5.84086 14.5213 5.63376 14.0361L4.67175 11.7823C4.60962 11.6367 4.48886 11.5212 4.33669 11.4618L1.98043 10.5416C1.47319 10.3435 1.47319 9.65647 1.98043 9.45838L4.33669 8.53819C4.48886 8.47877 4.60962 8.36326 4.67175 8.21771L5.63376 5.96389Z",location:"M17 8.43466C17 13.336 11.0639 18.4102 10.6795 18.7337C10.5011 18.899 10.2624 19 10 19C9.73763 19 9.49887 18.899 9.32049 18.7337C8.93607 18.4102 3 13.336 3 8.43466C3 4.60475 6.13401 1.5 10 1.5C13.866 1.5 17 4.60475 17 8.43466ZM10 11.5C11.6569 11.5 13 10.1569 13 8.5C13 6.84315 11.6569 5.5 10 5.5C8.34315 5.5 7 6.84315 7 8.5C7 10.1569 8.34315 11.5 10 11.5Z",learn_more_1:"M9.05882 10C9.05882 9.4802 9.4802 9.05882 10 9.05882C10.5198 9.05882 10.9412 9.4802 10.9412 10V13.2941C10.9412 13.8139 10.5198 14.2353 10 14.2353C9.4802 14.2353 9.05882 13.8139 9.05882 13.2941V10Z",learn_more_2:"M10 5.52941C9.35025 5.52941 8.82353 6.05614 8.82353 6.70588C8.82353 7.35563 9.35025 7.88235 10 7.88235C10.6497 7.88235 11.1765 7.35563 11.1765 6.70588C11.1765 6.05614 10.6497 5.52941 10 5.52941Z",learn_more_3:"M2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10ZM16.5882 10C16.5882 13.6386 13.6386 16.5882 10 16.5882C6.36142 16.5882 3.41176 13.6386 3.41176 10C3.41176 6.36142 6.36142 3.41176 10 3.41176C13.6386 3.41176 16.5882 6.36142 16.5882 10Z"},xS=()=>t.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[t.jsx("path",{d:gs.ai_1,fill:"var(--Text-Assist, #B6C3D6)"}),t.jsx("path",{d:gs.ai_2,fill:"var(--Text-Assist, #B6C3D6)"})]}),Yo=()=>t.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:t.jsx("path",{clipRule:"evenodd",d:gs.location,fill:"var(--Text-Primary, #FFFFFF)",fillRule:"evenodd"})}),mS=()=>t.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:[t.jsx("path",{d:gs.learn_more_1,fill:"var(--Text-Assist, #B6C3D6)"}),t.jsx("path",{d:gs.learn_more_2,fill:"var(--Text-Assist, #B6C3D6)"}),t.jsx("path",{clipRule:"evenodd",d:gs.learn_more_3,fill:"var(--Text-Assist, #B6C3D6)",fillRule:"evenodd"})]}),gS=v.div`
  width: 100%;
  padding: 24px;
  background: var(--Colors-Surface-Backgronud--02, #2A3649);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
`,vS=v.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
`,yS=v.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`,jS=v.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,CS=v.span`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.2px;
  color: var(--Text-Primary, #ffffff);
`,wS=v.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-start;
`,bS=v.p`
  width: 100%;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.2px;
  color: var(--Text-Secondary, #d5e2f2);
  margin: 0;
`,SS=v.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4px;
`,kS=v.span`
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: var(--Text-Assist, #B6C3D6);
`,TS=v.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,$S=v.div`
  width: 100%;
  height: 1px;
  background: var(--Color-Common-Control-Content-disabled, #4B596C);
`,LS=v.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`,BS=v.span`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.2px;
  color: var(--Text-Assist, #B6C3D6);
  flex: 1;
`,PS=v.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`,Xo=({title:e,description:i,icon:s,caption:l,showCaption:c=!1,headerAction:p,showFooter:d=!1,footerInfo:f,footerAction:x,className:g})=>t.jsxs(gS,{className:g,children:[t.jsxs(vS,{children:[t.jsxs(yS,{children:[t.jsxs(jS,{children:[s,t.jsx(CS,{children:e})]}),p&&t.jsx("div",{children:p})]}),i&&t.jsxs(wS,{children:[t.jsx(bS,{children:i}),c&&l&&t.jsxs(SS,{children:[t.jsx(xS,{}),t.jsx(kS,{children:l})]})]})]}),d&&t.jsxs(TS,{children:[t.jsx($S,{}),f&&t.jsxs(LS,{children:[t.jsx(mS,{}),t.jsx(BS,{children:f})]}),x&&t.jsx(PS,{children:x})]})]}),ES=v.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,W1=v.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
`,DS=v.div`
  color: var(--Text-Assist, #B6C3D6);
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.2px;
`,D4=()=>t.jsxs(ES,{children:[t.jsx(DS,{style:{marginBottom:"24px",padding:"0 24px"},children:"Usages"}),t.jsxs(W1,{children:[t.jsx("div",{style:{color:"var(--Text-Secondary, #d5e2f2)",fontSize:"14px",marginBottom:"8px",padding:"0 24px"},children:"• Toggle on/off info, button"}),t.jsx("div",{style:{width:"100%",padding:"0 16px"},children:t.jsx(Xo,{title:"Card title",icon:t.jsx(Yo,{}),description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare sed tincidunt lorem condimentum pellentesque.",showFooter:!0,footerInfo:"Aenean eu tellus non neque semper blandit vitae ac dolor.",footerAction:t.jsx(K,{variant:"outlined",size:"small",children:"Button"})})})]}),t.jsxs(W1,{children:[t.jsx("div",{style:{color:"var(--Text-Secondary, #d5e2f2)",fontSize:"14px",marginBottom:"8px",padding:"0 24px"},children:"• Toggle on/off caption texts"}),t.jsx("div",{style:{width:"100%",padding:"0 16px"},children:t.jsx(Xo,{title:"Card title",icon:t.jsx(Yo,{}),description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",showCaption:!0,caption:"Caption texts"})})]}),t.jsxs(W1,{children:[t.jsx("div",{style:{color:"var(--Text-Secondary, #d5e2f2)",fontSize:"14px",marginBottom:"8px",padding:"0 24px"},children:"• Show title line with checkbox"}),t.jsx("div",{style:{width:"100%",padding:"0 16px"},children:t.jsx(Xo,{title:"Card title",icon:t.jsx(Yo,{}),headerAction:t.jsx(H,{checked:!0,shape:"rounded",size:20})})})]})]}),RS=v.div`
  width: 100%;
  height: 24px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 8px;
  gap: 4px;
`,IS=v.div`
  display: flex;
  gap: 4px;
  align-items: center;
  opacity: 0.5;
`,AS=()=>t.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"currentColor",style:{color:"#B6C3D6"},children:t.jsx("rect",{width:"10",height:"10"})}),zS=()=>t.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"currentColor",style:{color:"#B6C3D6"},children:t.jsx("circle",{cx:"5",cy:"5",r:"5"})}),MS=()=>t.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"currentColor",style:{color:"#B6C3D6"},children:t.jsx("path",{d:"M5 10L0 0H10L5 10Z",transform:"rotate(180 5 5)"})}),VS=()=>t.jsx(RS,{children:t.jsxs(IS,{children:[t.jsx(AS,{}),t.jsx(zS,{}),t.jsx(MS,{})]})}),FS=v.label`
  display: inline-flex;
  align-items: center;
  gap: 16px;
  cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
  user-select: none;
`,NS=v.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;

  /* Base Styles - 2px border width */
  border: 2px solid var(--Border-border-divider-03, rgba(213, 226, 242, 0.60));
  background: transparent;

  /* Checked State */
  ${e=>e.$checked&&_`
    border: 2px solid var(--Common-Control-Active, #00B3E3);
  `}

  /* Error State */
  ${e=>e.$error&&!e.$disabled&&!e.$checked&&_`
    border: 2px solid var(--Feedback-Red, #F53232);
  `}

  /* Disabled State */
  ${e=>e.$disabled&&_`
    /* Disabled Unchecked */
    background: var(--Common-Control-Base-disabled, rgba(110, 124, 142, 0.30));
    border: 2px solid transparent;

    /* Disabled Checked */
    ${e.$checked&&_`
      background: transparent;
      border: 2px solid var(--Common-Control-Base-disabled, rgba(110, 124, 142, 0.30));
    `}
  `}
`,OS=v.div`
  width: 12px; /* Increased from 10px to 12px */
  height: 12px; /* Increased from 10px to 12px */
  border-radius: 50%;
  background: var(--Common-Control-Active, #00B3E3);
  opacity: ${e=>e.$checked?1:0};
  transform: scale(${e=>e.$checked?1:.5});
  transition: all 0.1s ease-out; /* Faster transition: 0.2s -> 0.1s */

  /* Disabled State */
  ${e=>e.$disabled&&_`
    background: var(--Common-Control-Base-disabled, rgba(110, 124, 142, 0.30));
  `}
`,_S=v.span`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.2px;
  color: var(--Text-secondary, #D5E2F2);

  ${e=>e.$disabled&&_`
    color: var(--Common-Control-content-disabled, rgba(170, 173, 185, 0.20));
  `}
`,dt=({label:e,checked:i=!1,disabled:s=!1,error:l=!1,onChange:c,className:p,...d})=>{const f=x=>{s||(x.preventDefault(),c&&c(!i))};return t.jsxs(FS,{$disabled:s,className:p,onClick:f,children:[t.jsx(NS,{$checked:i,$disabled:s,$error:l,children:t.jsx(OS,{$checked:i,$disabled:s})}),e&&t.jsx(_S,{$disabled:s,children:e}),t.jsx("input",{type:"radio",checked:i,disabled:s,readOnly:!0,style:{display:"none"},...d})]})},HS=()=>{const[e,i]=b.useState(!1),[s,l]=b.useState(!1),[c,p]=b.useState(!1),[d,f]=b.useState(!0);return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"100%"},children:[t.jsxs("div",{style:{display:"flex",gap:"24px",marginBottom:"8px",flexWrap:"wrap"},children:[t.jsxs("div",{style:{color:"var(--Text-Secondary, #d5e2f2)",display:"flex",alignItems:"center",gap:"8px",fontSize:"14px",cursor:"pointer"},onClick:()=>l(!s),children:[t.jsx("div",{onClick:x=>x.stopPropagation(),children:t.jsx(H,{checked:s,onChange:l,shape:"square",size:20})}),"Disabled"]}),t.jsxs("div",{style:{color:"var(--Text-Secondary, #d5e2f2)",display:"flex",alignItems:"center",gap:"8px",fontSize:"14px",cursor:"pointer"},onClick:()=>p(!c),children:[t.jsx("div",{onClick:x=>x.stopPropagation(),children:t.jsx(H,{checked:c,onChange:p,shape:"square",size:20})}),"Error"]}),t.jsxs("div",{style:{color:"var(--Text-Secondary, #d5e2f2)",display:"flex",alignItems:"center",gap:"8px",fontSize:"14px",cursor:"pointer"},onClick:()=>f(!d),children:[t.jsx("div",{onClick:x=>x.stopPropagation(),children:t.jsx(H,{checked:d,onChange:f,shape:"square",size:20})}),"Show Label"]})]}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",background:"var(--Colors-Surface-Backgronud--01, #131b26)",borderRadius:"16px",padding:"24px",width:"100%",alignItems:"center"},children:t.jsx(dt,{checked:e,onChange:i,disabled:s,error:c,label:d?"Items":void 0})})]})},WS=()=>{const[e,i]=b.useState(!1);return t.jsx(dt,{checked:e,onChange:i})},US=v.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
`,ko=v.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,To=v.div`
  color: var(--Text-Assist, #B6C3D6);
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.2px;
  margin-bottom: 4px;
`,ZS=()=>t.jsxs(US,{children:[t.jsxs(ko,{children:[t.jsx(To,{children:"Normal"}),t.jsx(dt,{label:"Items",checked:!1})]}),t.jsxs(ko,{children:[t.jsx(To,{children:"Active"}),t.jsx(dt,{label:"Items",checked:!0})]}),t.jsxs(ko,{children:[t.jsx(To,{children:"Disabled (Unchecked)"}),t.jsx(dt,{label:"Items",checked:!1,disabled:!0})]}),t.jsxs(ko,{children:[t.jsx(To,{children:"Disabled (Checked)"}),t.jsx(dt,{label:"Items",checked:!0,disabled:!0})]}),t.jsxs(ko,{children:[t.jsx(To,{children:"Error"}),t.jsx(dt,{label:"Items",error:!0})]})]}),GS=v.div`
  width: 100%;
  border-radius: 15px;
  background: transparent;
  cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
  transition: background-color 0.2s ease;
  overflow: hidden;

  /* Forced Pressed State */
  ${e=>e.$pressed&&_`
    background: var(--Common-Control-Base-pressed, rgba(54, 67, 86, 0.60));
  `}

  /* Native Active State */
  ${e=>!e.$disabled&&!e.$pressed&&_`
    &:active {
      background: var(--Common-Control-Base-pressed, rgba(54, 67, 86, 0.60));
    }
  `}
`,Em=v.div`
  min-height: 64px;
  padding: 16px;
  display: flex;
  
  ${e=>e.$variant==="action-stacked"?_`
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  `:_`
    flex-direction: row;
    align-items: center;
    gap: 16px;
  `}
`,KS=v.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
`,Dm=v.div`
  flex: 1;
  display: flex;
  min-width: 0; /* Handle overflow */
  
  ${e=>e.$variant==="horizontal-text"?_`
    flex-direction: row;
    align-items: baseline;
    gap: 8px;
    flex-wrap: wrap;
  `:_`
    flex-direction: column;
    gap: 4px;
  `}
`,Rm=v.span`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.2px;
  color: ${e=>e.$disabled?"var(--Common-Control-Content-disabled, rgba(182, 195, 214, 0.30))":"var(--Text-Primary, #FFFFFF)"};
`,Im=v.span`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.2px;
  color: ${e=>e.$disabled?"var(--Common-Control-Content-disabled, rgba(182, 195, 214, 0.30))":"var(--Text-Secondary, #D5E2F2)"};
`,Qo=v.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>e.$disabled?"var(--Common-Control-Content-disabled, rgba(182, 195, 214, 0.30))":"var(--Text-Secondary, #D5E2F2)"};

  & > svg {
    width: 20px;
    height: 20px;
  }
`,qS=v.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
`,YS=v.span`
  color: var(--Accent-Accent-2, #FE625E);
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.20px;
  word-wrap: break-word;
`,Am=v.div`
  display: flex;
  align-items: center;
  gap: 16px;
  min-height: 24px;
`,nt=({title:e,subtitle:i,startIcon:s,endIcon:l,action:c,variant:p="standard",disabled:d=!1,pressed:f=!1,onClick:x,className:g})=>{const m=p==="action-stacked",j=()=>m?t.jsxs(Em,{$variant:p,children:[t.jsxs(KS,{children:[s&&t.jsx(Qo,{$disabled:d,children:s}),t.jsxs(Dm,{$variant:p,children:[t.jsx(Rm,{$disabled:d,children:e}),i&&t.jsx(Im,{$disabled:d,children:i})]})]}),c&&t.jsx(qS,{children:c})]}):t.jsxs(Em,{$variant:p,children:[s&&t.jsx(Qo,{$disabled:d,children:s}),t.jsxs(Dm,{$variant:p,children:[t.jsx(Rm,{$disabled:d,children:e}),i&&t.jsx(Im,{$disabled:d,children:i})]}),l&&t.jsx("div",{style:{display:"flex",alignItems:"center"},children:l})]});return t.jsx(GS,{$disabled:d,$pressed:f,$variant:p,onClick:d?void 0:x,className:g,children:j()})},XS=[{label:"None",value:"none"},{label:"Icon (Arrow)",value:"icon"},{label:"Number",value:"number"},{label:"Button",value:"button"},{label:"Radio",value:"radio"},{label:"Checkbox",value:"checkbox"},{label:"Switch",value:"switch"},{label:"Arrow + Switch",value:"arrow-switch"},{label:"Arrow + Radio",value:"arrow-radio"}],QS=()=>{const[e,i]=b.useState(!1),[s,l]=b.useState(!0),[c,p]=b.useState(!0),[d,f]=b.useState("icon"),[x,g]=b.useState(!1),[m,j]=b.useState(!1),[C,k]=b.useState(!1),S=()=>{switch(d){case"none":return;case"icon":return t.jsx(Qo,{$disabled:e,children:t.jsx(Oe,{color:e?"currentColor":void 0})});case"number":return t.jsx(YS,{children:"-30"});case"button":return t.jsx(K,{variant:"filled-secondary",size:"small",disabled:e,children:"Button"});case"radio":return t.jsx(dt,{checked:x,onChange:g,disabled:e});case"checkbox":return t.jsx(H,{checked:C,onChange:k,shape:"rounded",size:20,disabled:e});case"switch":return t.jsx(qn,{checked:m,onChange:j,disabled:e});case"arrow-switch":return t.jsxs(Am,{children:[t.jsx(Qo,{$disabled:e,children:t.jsx(Oe,{color:e?"currentColor":void 0})}),t.jsx(zn,{orientation:"vertical",type:"type-01",thickness:1.5,length:"24px"}),t.jsx(qn,{checked:m,onChange:j,disabled:e})]});case"arrow-radio":return t.jsxs(Am,{children:[t.jsx(Qo,{$disabled:e,children:t.jsx(Oe,{color:e?"currentColor":void 0})}),t.jsx(zn,{orientation:"vertical",type:"type-01",thickness:1.5,length:"24px"}),t.jsx(dt,{checked:x,onChange:g,disabled:e})]});default:return}};return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"100%"},children:[t.jsxs("div",{style:{display:"flex",gap:"24px",marginBottom:"8px",flexWrap:"wrap",alignItems:"flex-start"},children:[t.jsxs("div",{style:{width:"200px",display:"flex",flexDirection:"column",gap:"4px"},children:[t.jsx("span",{style:{color:"var(--Text-Assist, #B6C3D6)",fontSize:"12px"},children:"Trailing Content"}),t.jsx(Rt,{options:XS,value:d,onChange:f,placeholder:"Select trailing content"})]}),t.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center",marginTop:"28px"},children:[t.jsxs("div",{style:{color:"var(--Text-Secondary, #d5e2f2)",display:"flex",alignItems:"center",gap:"8px",fontSize:"14px",cursor:"pointer"},onClick:()=>l(!s),children:[t.jsx("div",{onClick:T=>T.stopPropagation(),children:t.jsx(H,{checked:s,onChange:l,shape:"square",size:20})}),"Show Subtitle"]}),t.jsxs("div",{style:{color:"var(--Text-Secondary, #d5e2f2)",display:"flex",alignItems:"center",gap:"8px",fontSize:"14px",cursor:"pointer"},onClick:()=>p(!c),children:[t.jsx("div",{onClick:T=>T.stopPropagation(),children:t.jsx(H,{checked:c,onChange:p,shape:"square",size:20})}),"Show Start Icon"]}),t.jsxs("div",{style:{color:"var(--Text-Secondary, #d5e2f2)",display:"flex",alignItems:"center",gap:"8px",fontSize:"14px",cursor:"pointer"},onClick:()=>i(!e),children:[t.jsx("div",{onClick:T=>T.stopPropagation(),children:t.jsx(H,{checked:e,onChange:i,shape:"square",size:20})}),"Disabled"]})]})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",background:"var(--Colors-Surface-Backgronud--01, #131b26)",borderRadius:"16px",padding:"24px",width:"100%",alignItems:"center",zIndex:0},children:[t.jsxs("div",{style:{width:"100%",maxWidth:"360px",display:"flex",flexDirection:"column",gap:"8px"},children:[t.jsx("span",{style:{color:"var(--Text-Assist, #B6C3D6)",fontSize:"12px"},children:"Standard"}),t.jsx(nt,{title:"List item",subtitle:s?"Supporting text":void 0,startIcon:c?t.jsx(Ee,{}):void 0,endIcon:S(),variant:"standard",disabled:e})]}),t.jsxs("div",{style:{width:"100%",maxWidth:"360px",display:"flex",flexDirection:"column",gap:"8px"},children:[t.jsx("span",{style:{color:"var(--Text-Assist, #B6C3D6)",fontSize:"12px"},children:"Horizontal Text"}),t.jsx(nt,{title:"List item",subtitle:s?"Supporting text":void 0,startIcon:c?t.jsx(Ee,{}):void 0,endIcon:S(),variant:"horizontal-text",disabled:e})]}),t.jsxs("div",{style:{width:"100%",maxWidth:"360px",display:"flex",flexDirection:"column",gap:"8px"},children:[t.jsx("span",{style:{color:"var(--Text-Assist, #B6C3D6)",fontSize:"12px"},children:"Action Stacked"}),t.jsx(nt,{title:"List item",subtitle:s?"Supporting text more than 2 line more than 2 line":void 0,startIcon:c?t.jsx(Ee,{}):void 0,action:t.jsx(K,{variant:"outlined",size:"small",disabled:e,children:"Button"}),variant:"action-stacked",disabled:e})]})]})]})},JS=()=>t.jsx("div",{style:{width:"100%",maxWidth:"312px"},children:t.jsx(nt,{title:"List item",subtitle:"Supporting text",startIcon:t.jsx(Ee,{}),endIcon:t.jsx(Oe,{})})}),ek=v.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 32px;
`,U1=v.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,oi=v.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Z1=v.div`
  color: var(--Text-Primary, #FFFFFF);
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 8px;
`,li=v.div`
  color: var(--Text-Assist, #B6C3D6);
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.2px;
  margin-bottom: 4px;
`,tk=()=>t.jsxs(ek,{children:[t.jsxs(U1,{children:[t.jsx(Z1,{children:"Standard"}),t.jsxs(oi,{children:[t.jsx(li,{children:"Normal"}),t.jsx("div",{style:{width:312},children:t.jsx(nt,{title:"List item",subtitle:"Supporting text",startIcon:t.jsx(Ee,{}),endIcon:t.jsx(Oe,{})})})]}),t.jsxs(oi,{children:[t.jsx(li,{children:"Pressed"}),t.jsx("div",{style:{width:312},children:t.jsx(nt,{title:"List item",subtitle:"Supporting text",startIcon:t.jsx(Ee,{}),endIcon:t.jsx(Oe,{}),pressed:!0})})]}),t.jsxs(oi,{children:[t.jsx(li,{children:"Disabled"}),t.jsx("div",{style:{width:312},children:t.jsx(nt,{title:"List item",subtitle:"Supporting text",startIcon:t.jsx(Ee,{}),endIcon:t.jsx(Oe,{color:"var(--Common-Control-Content-disabled, rgba(182, 195, 214, 0.30))"}),disabled:!0})})]})]}),t.jsxs(U1,{children:[t.jsx(Z1,{children:"Horizontal Text"}),t.jsxs(oi,{children:[t.jsx(li,{children:"Normal"}),t.jsx("div",{style:{width:312},children:t.jsx(nt,{title:"List item",subtitle:"Supporting text",startIcon:t.jsx(Ee,{}),endIcon:t.jsx(Oe,{}),variant:"horizontal-text"})})]}),t.jsxs(oi,{children:[t.jsx(li,{children:"Pressed"}),t.jsx("div",{style:{width:312},children:t.jsx(nt,{title:"List item",subtitle:"Supporting text",startIcon:t.jsx(Ee,{}),endIcon:t.jsx(Oe,{}),variant:"horizontal-text",pressed:!0})})]}),t.jsxs(oi,{children:[t.jsx(li,{children:"Disabled"}),t.jsx("div",{style:{width:312},children:t.jsx(nt,{title:"List item",subtitle:"Supporting text",startIcon:t.jsx(Ee,{}),endIcon:t.jsx(Oe,{color:"var(--Common-Control-Content-disabled, rgba(182, 195, 214, 0.30))"}),variant:"horizontal-text",disabled:!0})})]})]}),t.jsxs(U1,{children:[t.jsx(Z1,{children:"Stacked with Action"}),t.jsxs(oi,{children:[t.jsx(li,{children:"Normal"}),t.jsx("div",{style:{width:312},children:t.jsx(nt,{title:"List item",subtitle:"Supporting text more than 2 line more than 2 line more than 2 line",startIcon:t.jsx(Ee,{}),variant:"action-stacked",action:t.jsx(K,{variant:"outlined",size:"small",children:"Button"})})})]}),t.jsxs(oi,{children:[t.jsx(li,{children:"Pressed"}),t.jsx("div",{style:{width:312},children:t.jsx(nt,{title:"List item",subtitle:"Supporting text more than 2 line more than 2 line more than 2 line",startIcon:t.jsx(Ee,{}),variant:"action-stacked",pressed:!0,action:t.jsx(K,{variant:"outlined",size:"small",children:"Button"})})})]}),t.jsxs(oi,{children:[t.jsx(li,{children:"Disabled"}),t.jsx("div",{style:{width:312},children:t.jsx(nt,{title:"List item",subtitle:"Supporting text more than 2 line more than 2 line more than 2 line",startIcon:t.jsx(Ee,{}),variant:"action-stacked",disabled:!0,action:t.jsx(K,{variant:"outlined",size:"small",disabled:!0,children:"Button"})})})]})]})]}),nk=v.div`
  width: 100%;
  background: var(--Colors-Surface-Backgronud--02, #2A3649);
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,mn=v(nt)`
  border-radius: 0;
`,Nt=v(zn).attrs({length:"calc(100% - 32px)"})`
  margin-left: 16px; /* Indent the divider */
`,Hi=({children:e,className:i})=>t.jsx(nk,{className:i,children:e}),ik=()=>{const[e,i]=b.useState(!0),[s,l]=b.useState(!1);return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"100%"},children:[t.jsxs("div",{style:{display:"flex",gap:"24px",marginBottom:"8px",flexWrap:"wrap"},children:[t.jsxs("div",{style:{color:"var(--Text-Secondary, #d5e2f2)",display:"flex",alignItems:"center",gap:"8px",fontSize:"14px",cursor:"pointer"},onClick:()=>i(!e),children:[t.jsx("div",{onClick:c=>c.stopPropagation(),children:t.jsx(H,{checked:e,onChange:i,shape:"square",size:20})}),"Show Dividers"]}),t.jsxs("div",{style:{color:"var(--Text-Secondary, #d5e2f2)",display:"flex",alignItems:"center",gap:"8px",fontSize:"14px",cursor:"pointer"},onClick:()=>l(!s),children:[t.jsx("div",{onClick:c=>c.stopPropagation(),children:t.jsx(H,{checked:s,onChange:l,shape:"square",size:20})}),"Disabled"]})]}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",background:"var(--Colors-Surface-Backgronud--01, #131b26)",borderRadius:"16px",padding:"24px",width:"100%",alignItems:"center"},children:t.jsx("div",{style:{width:"100%",maxWidth:"360px"},children:t.jsxs(Hi,{children:[t.jsx(mn,{title:"List item 1",endIcon:t.jsx(Oe,{}),disabled:s}),e&&t.jsx(Nt,{orientation:"horizontal",type:"type-01",thickness:1.5}),t.jsx(mn,{title:"List item 2",endIcon:t.jsx(Oe,{}),disabled:s}),e&&t.jsx(Nt,{orientation:"horizontal",type:"type-01",thickness:1.5}),t.jsx(mn,{title:"List item 3",endIcon:t.jsx(Oe,{}),disabled:s})]})})})]})},rk=()=>t.jsx("div",{style:{width:"100%",maxWidth:"312px"},children:t.jsxs(Hi,{children:[t.jsx(mn,{title:"List item 1",endIcon:t.jsx(Oe,{})}),t.jsx(Nt,{orientation:"horizontal",type:"type-01",thickness:1.5}),t.jsx(mn,{title:"List item 2",endIcon:t.jsx(Oe,{})}),t.jsx(Nt,{orientation:"horizontal",type:"type-01",thickness:1.5}),t.jsx(mn,{title:"List item 3",endIcon:t.jsx(Oe,{})})]})}),sk=v.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 32px;
`,zm=v.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Mm=v.div`
  color: var(--Text-Primary, #FFFFFF);
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 8px;
`,ok=()=>t.jsxs(sk,{children:[t.jsxs(zm,{children:[t.jsx(Mm,{children:"Single Item Group"}),t.jsx("div",{style:{width:312},children:t.jsx(Hi,{children:t.jsx(mn,{title:"List item",endIcon:t.jsx(Oe,{})})})})]}),t.jsxs(zm,{children:[t.jsx(Mm,{children:"Multiple Items Group"}),t.jsx("div",{style:{width:312},children:t.jsxs(Hi,{children:[t.jsx(mn,{title:"List item",endIcon:t.jsx(Oe,{})}),t.jsx(Nt,{orientation:"horizontal",type:"type-01",thickness:1.5}),t.jsx(mn,{title:"List item",endIcon:t.jsx(Oe,{})}),t.jsx(Nt,{orientation:"horizontal",type:"type-01",thickness:1.5}),t.jsx(mn,{title:"List item",endIcon:t.jsx(Oe,{})}),t.jsx(Nt,{orientation:"horizontal",type:"type-01",thickness:1.5}),t.jsx(mn,{title:"List item",endIcon:t.jsx(Oe,{})}),t.jsx(Nt,{orientation:"horizontal",type:"type-01",thickness:1.5}),t.jsx(mn,{title:"List item",endIcon:t.jsx(Oe,{})})]})})]})]}),lk=v.div`
  width: 100%;
  padding: 0 8px; /* 8px horizontal padding */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  background: transparent;
  transition: background-color 0.2s ease;
  border-radius: 5px;
  min-height: 48px; /* Default min-height to ensure tap target */

  cursor: ${e=>e.$clickable?"pointer":"default"};

  ${e=>e.$pressed&&_`
    background: var(--Common-Control-Base-pressed, rgba(54, 67, 86, 0.60));
  `}

  ${e=>e.$clickable&&!e.$pressed&&_`
    &:active {
      background: var(--Common-Control-Base-pressed, rgba(54, 67, 86, 0.60));
    }
  `}
`,ak=v.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 4px;
`,ck=v.span`
  font-family: Roboto, sans-serif;
  letter-spacing: 0.20px;
  word-wrap: break-word;

  ${e=>e.$size==="L"&&_`
    color: var(--Text-primary, #ffffff);
    font-size: 18px;
    font-weight: 500;
    line-height: 28px;
  `}

  ${e=>e.$size==="M"&&_`
    color: var(--Text-primary, #ffffff);
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
  `}

  ${e=>e.$size==="S"&&_`
    color: var(--Text-secondary, #D5E2F2);
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  `}
`,dk=v.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`,Gn=({title:e,size:i="L",action:s,pressed:l=!1,onClick:c,className:p})=>t.jsxs(lk,{$pressed:l,$clickable:!!c,$size:i,onClick:c,className:p,children:[t.jsx(ak,{children:t.jsx(ck,{$size:i,children:e})}),s&&t.jsx(dk,{children:s})]}),uk=()=>{const[e,i]=b.useState("L"),[s,l]=b.useState("none"),[c,p]=b.useState(!1),[d,f]=b.useState(!1),x="Section title",g=()=>{switch(s){case"radio":return t.jsx(dt,{checked:c,onChange:p});case"switch":return t.jsx(qn,{checked:d,onChange:f});case"button":return t.jsx(K,{variant:"filled-secondary",size:"small",children:"Select"});default:return}};return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"100%"},children:[t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",marginBottom:"8px"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[t.jsx("span",{style:{color:"var(--Text-Assist, #B6C3D6)",fontSize:"14px"},children:"Size:"}),["L","M","S"].map(m=>t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",color:"var(--Text-Secondary, #d5e2f2)"},onClick:()=>i(m),children:[t.jsx(H,{checked:e===m,onChange:()=>i(m),shape:"rounded",size:20}),m]},m))]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap"},children:[t.jsx("span",{style:{color:"var(--Text-Assist, #B6C3D6)",fontSize:"14px"},children:"Action:"}),["none","radio","switch","button"].map(m=>t.jsxs("div",{style:{color:"var(--Text-Secondary, #d5e2f2)",display:"flex",alignItems:"center",gap:"8px",fontSize:"14px",cursor:"pointer"},onClick:()=>l(m),children:[t.jsx(H,{checked:s===m,onChange:()=>l(m),shape:"rounded",size:20}),m.charAt(0).toUpperCase()+m.slice(1)]},m))]})]}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",background:"var(--Colors-Surface-Backgronud--01, #131b26)",borderRadius:"16px",padding:"24px",width:"100%",alignItems:"center"},children:t.jsx(Gn,{title:x,size:e,action:g(),onClick:()=>{}})})]})},pk=()=>t.jsx("div",{style:{width:"100%",maxWidth:"328px"},children:t.jsx(Gn,{title:"Section title",size:"L"})}),fk=v.div`
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  overflow: hidden;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  gap: 80px;
  align-content: center;
  justify-content: flex-start;
`,Vm=v.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,hk=()=>t.jsxs(fk,{children:[t.jsxs(Vm,{children:[t.jsx(Gn,{title:"Section title",size:"L"}),t.jsx(Gn,{title:"Section title",size:"M"}),t.jsx(Gn,{title:"Section title",size:"S"})]}),t.jsxs(Vm,{children:[t.jsx(Gn,{title:"Section title",size:"L",action:t.jsx(dt,{})}),t.jsx(Gn,{title:"Section title",size:"M",action:t.jsx(qn,{})}),t.jsx(Gn,{title:"Section title",size:"S",action:t.jsx(K,{variant:"filled-secondary",size:"small",children:"Select"})})]})]}),xk=Ss`
  0% { background-color: var(--Color-Neutral-35, #AABDD6); }
  25% { background-color: var(--Color-Neutral-70, #364356); }
  50% { background-color: var(--Color-Neutral-50, #596677); }
  75% { background-color: var(--Color-Neutral-40, #6E7C8E); }
  100% { background-color: var(--Color-Neutral-35, #AABDD6); }
`,mk=Ss`
  0% { color: var(--Color-Neutral-35, #AABDD6); }
  25% { color: var(--Color-Neutral-70, #364356); }
  50% { color: var(--Color-Neutral-50, #596677); }
  75% { color: var(--Color-Neutral-40, #6E7C8E); }
  100% { color: var(--Color-Neutral-35, #AABDD6); }
`,gk=v.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  padding: 24px;
  background: transparent;
`,ss=v.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,$o=v.span`
  color: var(--Text-assist, #B6C3D6);
  font-size: 14px;
  font-family: Roboto;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.20px;
`,Lo=v.div`
  width: 32px;
  height: 8px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`,Bo=v.div`
  width: 100%;
  height: 100%;
  background: var(--Color-Neutral-70, #364356);
  border-radius: 7px;
  position: absolute;
  left: 0;
  top: 0;
`,Po=v.div`
  width: ${e=>e.$width};
  height: 100%;
  background: ${e=>e.$color};
  border-radius: 7px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
`,G1=v.div`
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`,xr=v.div`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  color: var(--Text-Assist, #B6C3D6);
  margin-bottom: -16px;
  margin-top: 8px;
`,vk=v.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: 4px;
`,K1=v.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: var(--Color-Neutral-35, #AABDD6); /* Initial fallback */
  animation: ${xk} 1.2s linear infinite;
  animation-delay: ${e=>e.$delay};
`,yk=v.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--Color-Neutral-35, #AABDD6); /* Initial fallback */
  animation: ${mk} 1.2s linear infinite;
  animation-delay: 0s;

  /* Ensure the icon SVG uses the current color */
  & > svg, & > svg path {
    fill: currentColor;
  }
`,jk=()=>t.jsxs(gk,{children:[t.jsx(xr,{children:"Connected"}),t.jsxs(ss,{children:[t.jsx(fi,{size:24,color:"var(--Text-assist, #B6C3D6)"}),t.jsxs(Lo,{children:[t.jsx(Bo,{}),t.jsx(Po,{$width:"80%",$color:"var(--Feedback-Blue, #00B3E3)"})]}),t.jsx($o,{children:"80%"})]}),t.jsx(xr,{children:"Connecting"}),t.jsxs(ss,{children:[t.jsx(yk,{children:t.jsx(fi,{size:24,color:"currentColor"})}),t.jsxs(vk,{children:[t.jsx(K1,{$delay:"-0.9s"}),t.jsx(K1,{$delay:"-0.6s"}),t.jsx(K1,{$delay:"-0.3s"})]})]}),t.jsx(xr,{children:"Low Battery"}),t.jsxs(ss,{children:[t.jsx(fi,{size:24,color:"var(--Text-assist, #B6C3D6)"}),t.jsxs(Lo,{children:[t.jsx(Bo,{}),t.jsx(Po,{$width:"20%",$color:"var(--Feedback-Red, #F53232)"})]}),t.jsx($o,{children:"10%"})]}),t.jsx(xr,{children:"Charging"}),t.jsxs(ss,{children:[t.jsx(fi,{size:24,color:"var(--Text-assist, #B6C3D6)"}),t.jsxs(Lo,{children:[t.jsx(Bo,{}),t.jsx(Po,{$width:"80%",$color:"var(--Feedback-Blue, #00B3E3)"}),t.jsx(G1,{children:t.jsx(jp,{size:12,color:"var(--Color-Neutral-White, white)"})})]}),t.jsx($o,{children:"80%"})]}),t.jsx(xr,{children:"Slow Charging"}),t.jsxs(ss,{children:[t.jsx(fi,{size:24,color:"var(--Text-assist, #B6C3D6)"}),t.jsxs(Lo,{children:[t.jsx(Bo,{}),t.jsx(Po,{$width:"80%",$color:"var(--Feedback-Yellow, #F8E64A)"}),t.jsx(G1,{children:t.jsx(jp,{size:12,color:"var(--Color-Neutral-White, white)"})})]}),t.jsx($o,{children:"80%"})]}),t.jsx(xr,{children:"Error"}),t.jsxs(ss,{children:[t.jsx(fi,{size:24,color:"var(--Text-assist, #B6C3D6)"}),t.jsxs(Lo,{children:[t.jsx(Bo,{}),t.jsx(Po,{$width:"80%",$color:"var(--Feedback-Red, #F53232)"}),t.jsx(G1,{children:t.jsx(F3,{size:12,color:"var(--Color-Neutral-White, white)"})})]}),t.jsx($o,{children:"80%"})]}),t.jsx(xr,{children:"Unpaired"}),t.jsxs(K,{variant:"filled-secondary",children:[t.jsx(fi,{size:18,color:"white"}),"Pair device"]})]}),Ck=v.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: ${e=>e.$size==="m"?"4px":"2px"};
  /* Padding adjustment for border in accent1 if needed, but we use consistent padding */
  padding: ${e=>e.$size==="m"?"4px 8px":"2px 4px"};
  border-radius: ${e=>e.$size==="m"?"5px":"3px"};
  cursor: ${e=>e.$interactive?"pointer":"default"};
  transition: all 0.2s ease;
  user-select: none;
  box-sizing: border-box; /* Ensure borders don't affect dimensions if added */

  /* Fonts */
  font-family: Roboto, sans-serif;
  font-weight: 500; /* User specified 500 for all */
  word-wrap: break-word;
  
  /* Size specific font settings */
  font-size: ${e=>e.$size==="m"?"12px":"10px"};
  line-height: ${e=>e.$size==="m"?"16px":"normal"};
  letter-spacing: ${e=>e.$size==="m"?"0.20px":"0.25px"};

  /* Variants */
  ${e=>{switch(e.$variant){case"default":return _`
          background: var(--Color-Neutral-60, #4B596C);
          color: var(--Text-primary, white);
          
          ${e.$interactive&&_`
            &:active {
              opacity: 0.8;
            }
          `}
        `;case"archived":return _`
          background: var(--Button-base-disabled, rgba(110, 124, 142, 0.10));
          color: var(--Common-Control-Content-disabled, rgba(182, 195, 214, 0.30));
          
          ${e.$interactive&&_`
            &:active {
              opacity: 0.8;
            }
          `}
        `;case"accent1":return _`
          background: transparent;
          /* Using box-shadow inset for border to match outline-offset -1px feel or standard border */
          /* User code: outline: 1px #33C2E9 solid; outline-offset: -1px; */
          /* Using border is safer for rounded corners than outline in some browsers */
          border: 1px solid #33C2E9;
          /* Adjust padding to compensate for border if strict sizing needed, 
             but typically box-sizing handles it. 
             Since others have no border, this might be 2px wider. 
             Let's keep it simple with border. */
          color: #33C2E9;
          
          ${e.$interactive&&_`
             &:active {
               background: rgba(51, 194, 233, 0.10);
             }
          `}
        `;case"accent2":return _`
          background: rgba(0, 179, 227, 0.30);
          color: var(--Text-secondary, #D5E2F2);
          
          ${e.$interactive&&_`
             &:active {
               background: rgba(0, 179, 227, 0.40);
             }
          `}
        `}}}
`,wk=v.span`
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  
  ${e=>e.$variant==="accent1"&&_`
    background: linear-gradient(90deg, #33C2E9 15%, #1A5EFF 90%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
  `}
`,In=({label:e,variant:i="default",size:s="m",onClick:l,className:c})=>t.jsx(Ck,{$variant:i,$size:s,onClick:l,$interactive:!!l,className:c,children:t.jsx(wk,{$variant:i,children:e})}),bk=v.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`,Sk=v.div`
  display: flex;
  gap: 24px;
  margin-bottom: 8px;
  flex-wrap: wrap;
`,Fm=v.div`
  color: var(--Text-Secondary, #d5e2f2);
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  cursor: pointer;
`,kk=v.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: var(--Colors-Surface-Backgronud--01, #131b26);
  border-radius: 16px;
  padding: 24px;
  width: 100%;
  align-items: center;
  justify-content: center;
  min-height: 150px;
`,Tk=()=>{const[e,i]=b.useState("Label"),[s,l]=b.useState("m"),[c,p]=b.useState("default"),d=["default","archived","accent1","accent2"];return t.jsxs(bk,{children:[t.jsxs(Sk,{children:[d.map(f=>t.jsxs(Fm,{onClick:()=>p(f),children:[t.jsx("div",{onClick:x=>x.stopPropagation(),children:t.jsx(H,{checked:c===f,onChange:()=>p(f),shape:"square",size:20})}),f.charAt(0).toUpperCase()+f.slice(1)]},f)),t.jsxs(Fm,{onClick:()=>l(s==="m"?"s":"m"),children:[t.jsx("div",{onClick:f=>f.stopPropagation(),children:t.jsx(H,{checked:s==="s",onChange:()=>l(s==="m"?"s":"m"),shape:"square",size:20})}),"Small Size"]})]}),t.jsx(kk,{children:t.jsx(In,{label:e,variant:c,size:s})})]})},$k=()=>t.jsx(In,{label:"Label",variant:"default",size:"m"}),Lk=v.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 32px;
`,Bk=v.div`
  display: grid;
  grid-template-columns: 100px 1fr 1fr;
  gap: 40px;
  margin-bottom: 24px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    & > :first-child { display: none; }
  }
`,Ha=v.div`
  display: grid;
  grid-template-columns: 100px 1fr 1fr;
  gap: 40px;
  margin-bottom: 32px;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }
`,Nm=v.div`
  color: var(--Text-Assist, #B6C3D6);
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 500;
`,Wa=v.div`
  color: var(--Text-Assist, #B6C3D6);
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
`,Ua=v.div`
  display: contents;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    width: 100%;
  }
`,Pk=()=>t.jsxs(Lk,{children:[t.jsxs(Bk,{children:[t.jsx("div",{}),t.jsx(Nm,{children:"Size M"}),t.jsx(Nm,{children:"Size S"})]}),t.jsxs(Ha,{children:[t.jsx(Wa,{children:"Default"}),t.jsxs(Ua,{children:[t.jsx("div",{children:t.jsx(In,{label:"Label",variant:"default",size:"m"})}),t.jsx("div",{children:t.jsx(In,{label:"Label",variant:"default",size:"s"})})]})]}),t.jsxs(Ha,{children:[t.jsx(Wa,{children:"Archived"}),t.jsxs(Ua,{children:[t.jsx("div",{children:t.jsx(In,{label:"Label",variant:"archived",size:"m"})}),t.jsx("div",{children:t.jsx(In,{label:"Label",variant:"archived",size:"s"})})]})]}),t.jsxs(Ha,{children:[t.jsx(Wa,{children:"Accent 1"}),t.jsxs(Ua,{children:[t.jsx("div",{children:t.jsx(In,{label:"Label",variant:"accent1",size:"m"})}),t.jsx("div",{children:t.jsx(In,{label:"Label",variant:"accent1",size:"s"})})]})]}),t.jsxs(Ha,{children:[t.jsx(Wa,{children:"Accent 2"}),t.jsxs(Ua,{children:[t.jsx("div",{children:t.jsx(In,{label:"Label",variant:"accent2",size:"m"})}),t.jsx("div",{children:t.jsx(In,{label:"Label",variant:"accent2",size:"s"})})]})]})]}),Ek=v.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`,Dk=v.div`
  height: 6px;
  border-radius: ${e=>e.$active?"8px":"9999px"};
  background: white;
  opacity: ${e=>e.$active?"1":"0.4"};
  
  /* Width transition for smooth effect */
  width: ${e=>e.$active?"24px":"6px"};
  transition: all 0.3s ease;
  
  ${e=>e.$interactive&&_`
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
      &:active {
        opacity: 0.6;
      }
    `}
`,If=({totalSteps:e=5,currentStep:i=1,onChange:s,interactive:l=!0,className:c})=>{const p=Math.max(1,Math.min(i,e)),d=f=>{l&&s&&s(f+1)};return t.jsx(Ek,{className:c,children:Array.from({length:e}).map((f,x)=>t.jsx(Dk,{$active:x+1===p,$interactive:l,onClick:()=>d(x)},x))})},Rk=v.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;v.div`
  display: flex;
  gap: 24px;
  margin-bottom: 8px;
  flex-wrap: wrap;
  align-items: center;
`;v.div`
  color: var(--Text-Secondary, #d5e2f2);
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  min-width: 200px;
`;v.span`
  font-weight: 500;
  color: var(--Text-Assist, #b6c3d6);
`;const Ik=v.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: var(--Colors-Surface-Backgronud--01, #131b26);
  border-radius: 16px;
  padding: 48px;
  width: 100%;
  align-items: center;
  justify-content: center;
  min-height: 150px;
`,Ak=()=>{const[e]=b.useState(10),[i,s]=b.useState(1),l=()=>{i>1&&s(i-1)},c=()=>{i<e&&s(i+1)};return t.jsx(Rk,{children:t.jsx(Ik,{children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"24px"},children:[t.jsx(qe,{variant:"outlined",icon:t.jsx(r8,{size:24}),onClick:l,disabled:i===1}),t.jsx(If,{totalSteps:e,currentStep:i,onChange:s,interactive:!0}),t.jsx(qe,{variant:"outlined",icon:t.jsx(A3,{size:24}),onClick:c,disabled:i===e})]})})})},zk=v.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 24px;
`,Mk=()=>t.jsx(zk,{children:t.jsx(If,{totalSteps:5,currentStep:1,interactive:!1})}),Vk=v.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 32px;
`;v.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 40px;
  margin-bottom: 24px;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;const Fk=v.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 40px;
  margin-bottom: 32px;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }
`;v.div`
  color: var(--Text-Assist, #B6C3D6);
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 500;
`;const Nk=v.div`
  color: var(--Text-Assist, #B6C3D6);
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
`,q1=({label:e,initialTotal:i,initialCurrent:s})=>{const[l,c]=b.useState(s);return t.jsxs(Fk,{children:[t.jsx(Nk,{children:e}),t.jsx("div",{children:t.jsx(If,{totalSteps:i,currentStep:l,onChange:c})})]})},Ok=()=>t.jsxs(Vk,{children:[t.jsx(q1,{label:"3 Steps",initialTotal:3,initialCurrent:1}),t.jsx(q1,{label:"5 Steps",initialTotal:5,initialCurrent:3}),t.jsx(q1,{label:"7 Steps",initialTotal:7,initialCurrent:5})]}),_k=v.div`
  display: flex;
  flex-direction: column;
  gap: 4px; /* Gap from Figma */
  width: ${e=>e.$width||"100%"};
`,Hk=v.div`
  position: relative;
  width: 100%;
  height: ${e=>{switch(e.$size){case"S":return"4px";case"M":return"8px";case"L":return"12px";default:return"8px"}}};
  cursor: ${e=>e.$interactive?"pointer":"default"};
  touch-action: none;
`,Wk=v.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--Common-Control-Base-normal, #364356);
  border-radius: 9999px;
`,Uk=v.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${e=>e.$percent}%;
  background: var(--Common-Control-Active, #00B3E3);
  border-radius: 9999px;
  transition: width 0.1s linear;
`,Zk=v.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,Gk=v.span`
  color: var(--Text-secondary, #D5E2F2);
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.20px;
`,Kk=v.span`
  color: var(--Text-secondary, #D5E2F2);
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.20px;
`,Jo=({value:e,size:i="M",currentStep:s,totalSteps:l,leftLabel:c,rightLabel:p,showText:d=!1,interactive:f=!1,onChange:x,width:g,className:m})=>{const j=b.useRef(null),C=R=>{if(j.current){const E=j.current.getBoundingClientRect(),M=R-E.left,F=E.width,O=Math.max(0,Math.min(100,M/F*100));return Math.round(O)}return 0},k=R=>{if(!f||!x)return;x(C(R.clientX));const E=F=>{x(C(F.clientX))},M=()=>{document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",M)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",M)},S=Math.max(0,Math.min(100,e)),T=c!==void 0?c:s!==void 0&&l!==void 0?`${s}/${l}`:void 0,P=p!==void 0?p:`${Math.round(S)}%`;return t.jsxs(_k,{$width:g,className:m,children:[t.jsxs(Hk,{ref:j,$interactive:f,$size:i,onMouseDown:k,children:[t.jsx(Wk,{$size:i}),t.jsx(Uk,{$percent:S})]}),d&&t.jsxs(Zk,{children:[t.jsx(Gk,{children:T}),t.jsx(Kk,{children:P})]})]})},qk=v.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`,Yk=v.div`
  display: flex;
  gap: 24px;
  margin-bottom: 8px;
  flex-wrap: wrap;
  align-items: center;
`,Xk=v.div`
  color: var(--Text-Secondary, #d5e2f2);
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  cursor: pointer;
  min-width: 150px;
`,Qk=v.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: var(--Colors-Surface-Backgronud--01, #131b26);
  border-radius: 16px;
  padding: 48px;
  width: 100%;
  align-items: center;
  justify-content: center;
  min-height: 150px;
`,Jk=()=>{const[e,i]=b.useState(50),[s,l]=b.useState("M"),[c,p]=b.useState(!0);return t.jsxs(qk,{children:[t.jsxs(Yk,{children:[t.jsxs(Xk,{onClick:()=>p(!c),children:[t.jsx("div",{onClick:d=>d.stopPropagation(),children:t.jsx(H,{checked:c,onChange:p,shape:"square",size:20})}),"Show Text"]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[t.jsx("span",{style:{color:"var(--Text-Assist, #b6c3d6)",fontSize:"14px"},children:"Size:"}),["S","M","L"].map(d=>t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",color:"var(--Text-Secondary, #d5e2f2)",marginLeft:"8px"},onClick:()=>l(d),children:[t.jsx(dt,{checked:s===d,onChange:()=>l(d)}),d]},d))]})]}),t.jsx(Qk,{children:t.jsx("div",{style:{width:"100%",maxWidth:"400px"},children:t.jsx(Jo,{value:e,size:s,showText:c,currentStep:2,totalSteps:4,interactive:!0,onChange:i})})})]})},eT=v.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 24px;
  gap: 16px;
`,tT=()=>t.jsxs(eT,{children:[t.jsx("div",{style:{width:"80%"},children:t.jsx(Jo,{value:40,size:"S"})}),t.jsx("div",{style:{width:"80%"},children:t.jsx(Jo,{value:70,size:"M"})}),t.jsx("div",{style:{width:"80%"},children:t.jsx(Jo,{value:90,size:"L"})})]}),nT=v.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 32px;
  overflow: hidden;
`,iT=v.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 40px;
  margin-bottom: 24px;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`,rT=v.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 40px;
  margin-bottom: 32px;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }
`,sT=v.div`
  color: var(--Text-Assist, #B6C3D6);
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 500;
`,oT=v.div`
  color: var(--Text-Assist, #B6C3D6);
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
`,Y1=({label:e,size:i,initialValue:s,leftLabel:l,rightLabel:c})=>{const[p,d]=b.useState(s);return t.jsxs(rT,{children:[t.jsx(oT,{children:e}),t.jsx("div",{style:{width:"100%",maxWidth:"400px"},children:t.jsx(Jo,{value:p,size:i,showText:!0,currentStep:2,totalSteps:4,leftLabel:l,rightLabel:c?c.replace(/\d+%/,`${Math.round(p)}%`):void 0,interactive:!0,onChange:d})})]})},lT=()=>t.jsxs(nT,{children:[t.jsxs(iT,{children:[t.jsx("div",{}),t.jsx(sT,{children:"Interactive Examples"})]}),t.jsx(Y1,{label:"Size S (4px)",size:"S",initialValue:50,leftLabel:"2/2",rightLabel:"50%"}),t.jsx(Y1,{label:"Size M (8px)",size:"M",initialValue:50,leftLabel:"",rightLabel:"50% (7.5 MB/ 15.0 MB)"}),t.jsx(Y1,{label:"Size L (12px)",size:"L",initialValue:70})]}),aT=v.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: ${e=>e.$width||"100%"};
`,cT=v.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
`,Om=v.div`
  color: var(--Text-Secondary, #D5E2F2);
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.2px;
  min-width: 34px; /* Matches Figma width */
  text-align: right;
  
  &:first-child {
    text-align: right; /* Based on Figma example */
  }
  
  &:last-child {
    text-align: left; /* Maybe? Figma example has both text-right but logical would be opposite or fixed width */
  }
`,dT=v.div`
  color: var(--Text-Assist, #B6C3D6);
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.22px;
`,uT=v.div`
  position: relative;
  flex: 1; /* Take remaining space */
  width: auto; /* Override width 100% from previous if needed, but flex:1 handles it */
  height: 24px;
  display: flex;
  align-items: center;
  cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
  touch-action: none;
  user-select: none;
`,R4=e=>{switch(e){case"S":return"4px";case"M":return"8px";case"L":return"12px";default:return"8px"}},pT=v.div`
  position: absolute;
  left: 0;
  right: 0;
  height: ${e=>R4(e.$size)};
  border-radius: 9999px;
  background: ${e=>e.$disabled?"var(--Color-Common-Control-Base-disabled, rgba(110, 124, 142, 0.30))":e.$pressed?"var(--Color-Common-Control-Base-pressed, #36435699)":"var(--Color-Common-Control-Base-normal, #364356)"};
`,fT=v.div`
  position: absolute;
  left: 0;
  height: ${e=>R4(e.$size)};
  width: ${e=>e.$percent}%;
  border-radius: 9999px;
  background: ${e=>e.$disabled?"var(--Color-Common-Control-Content-disabled, rgba(182, 195, 214, 0.30))":e.$pressed?"var(--Color-Common-Control-Active-pressed, #0589C9)":"var(--Color-Common-Control-Active, #00B3E3)"};
  pointer-events: none;
`,hT=v.div`
  position: absolute;
  left: calc(${e=>e.$percent}% - 12px); /* Center knob (24px width) */
  width: 24px;
  height: 24px;
  background: var(--Button-primary-content-normal, white);
  border-radius: 9999px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  opacity: ${e=>e.$visible?1:0};
  transform: scale(${e=>e.$visible?1:.8});
  transition: ${e=>e.$visible?"opacity 0.2s ease, transform 0.2s ease":"none"};
  pointer-events: none;
  z-index: 2;
`,el=({value:e,min:i=0,max:s=100,step:l=1,size:c="M",showValue:p=!1,leftLabel:d,rightLabel:f,disabled:x=!1,onChange:g,className:m,width:j})=>{const[C,k]=b.useState(!1),S=b.useRef(null),T=(Math.min(Math.max(e,i),s)-i)/(s-i)*100,P=X=>{if(x||!S.current)return;const V=S.current.getBoundingClientRect(),z=X-V.left,J=V.width;let Q=z/J;Q=Math.max(0,Math.min(1,Q));let ae=i+Q*(s-i);if(l>0){const me=Math.round((ae-i)/l);ae=i+me*l}ae=Math.max(i,Math.min(s,ae)),g&&g(ae)},R=X=>{if(x)return;k(!0),P(X.clientX);const V=J=>{P(J.clientX)},z=()=>{k(!1),document.removeEventListener("mousemove",V),document.removeEventListener("mouseup",z)};document.addEventListener("mousemove",V),document.addEventListener("mouseup",z)},E=X=>{x||(k(!0),P(X.touches[0].clientX))},M=X=>{x||!C||P(X.touches[0].clientX)},F=()=>{k(!1)},O=!x&&C;return t.jsxs(aT,{$width:j,className:m,children:[p&&t.jsxs(dT,{children:["Value: ",Math.round(e)]}),t.jsxs(cT,{children:[d&&t.jsx(Om,{children:d}),t.jsxs(uT,{ref:S,$disabled:x,$size:c,onMouseDown:R,onTouchStart:E,onTouchMove:M,onTouchEnd:F,children:[t.jsx(pT,{$disabled:x,$pressed:C,$size:c}),t.jsx(fT,{$disabled:x,$pressed:C,$percent:T,$size:c}),t.jsx(hT,{$visible:O,$percent:T})]}),f&&t.jsx(Om,{children:f})]})]})},xT=v.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`,mT=v.div`
  display: flex;
  gap: 24px;
  margin-bottom: 8px;
  flex-wrap: wrap;
  align-items: center;
`,_m=v.div`
  color: var(--Text-Secondary, #d5e2f2);
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  cursor: pointer;
  min-width: 150px;
`,gT=v.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: var(--Colors-Surface-Backgronud--01, #131b26);
  border-radius: 16px;
  padding: 48px;
  width: 100%;
  align-items: center;
  justify-content: center;
  min-height: 150px;
`,vT=()=>{const[e,i]=b.useState(50),[s,l]=b.useState(!1),[c,p]=b.useState("M"),[d,f]=b.useState(!1),x=g=>{const j=Math.round(g/100*150),C=Math.floor(j/60).toString().padStart(2,"0"),k=(j%60).toString().padStart(2,"0");return`${C}:${k}`};return t.jsxs(xT,{children:[t.jsxs(mT,{children:[t.jsxs(_m,{onClick:()=>l(!s),children:[t.jsx("div",{onClick:g=>g.stopPropagation(),children:t.jsx(H,{checked:s,onChange:l,shape:"square",size:20})}),"Disabled"]}),t.jsxs(_m,{onClick:()=>f(!d),children:[t.jsx("div",{onClick:g=>g.stopPropagation(),children:t.jsx(H,{checked:d,onChange:f,shape:"square",size:20})}),"Show Labels"]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[t.jsx("span",{style:{color:"var(--Text-Assist, #b6c3d6)",fontSize:"14px"},children:"Size:"}),["S","M","L"].map(g=>t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",color:"var(--Text-Secondary, #d5e2f2)",marginLeft:"8px"},onClick:()=>p(g),children:[t.jsx(dt,{checked:c===g,onChange:()=>p(g)}),g]},g))]})]}),t.jsx(gT,{children:t.jsx("div",{style:{width:"100%",maxWidth:"400px",display:"flex",flexDirection:"column",gap:"16px",alignItems:"center"},children:t.jsx(el,{value:e,onChange:i,disabled:s,size:c,showValue:!1,width:"100%",leftLabel:d?x(e):void 0,rightLabel:d?"02:30":void 0})})})]})},yT=v.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 24px;
  gap: 16px;
`,jT=()=>t.jsxs(yT,{children:[t.jsx("div",{style:{width:"80%"},children:t.jsx(el,{value:30,size:"S",onChange:()=>{}})}),t.jsx("div",{style:{width:"80%"},children:t.jsx(el,{value:60,size:"M",onChange:()=>{}})}),t.jsx("div",{style:{width:"80%"},children:t.jsx(el,{value:90,size:"L",onChange:()=>{}})})]}),CT=v.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 32px;
  overflow: hidden;
`,wT=v.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 40px;
  margin-bottom: 24px;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`,bT=v.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 40px;
  margin-bottom: 32px;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }
`,ST=v.div`
  color: var(--Text-Assist, #B6C3D6);
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 500;
`,kT=v.div`
  color: var(--Text-Assist, #B6C3D6);
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
`,Eo=({label:e,initialValue:i,size:s,disabled:l=!1,leftLabel:c,rightLabel:p})=>{const[d,f]=b.useState(i);return t.jsxs(bT,{children:[t.jsx(kT,{children:e}),t.jsx("div",{style:{width:"100%",maxWidth:"400px"},children:t.jsx(el,{value:d,onChange:f,disabled:l,size:s,leftLabel:c,rightLabel:p})})]})},TT=()=>t.jsxs(CT,{children:[t.jsxs(wT,{children:[t.jsx("div",{}),t.jsx(ST,{children:"Interactive Examples"})]}),t.jsx(Eo,{label:"Size S (4px)",initialValue:30,size:"S"}),t.jsx(Eo,{label:"Size M (8px)",initialValue:50,size:"M"}),t.jsx(Eo,{label:"Size L (12px)",initialValue:70,size:"L"}),t.jsx(Eo,{label:"w/ info text",initialValue:45,size:"M",leftLabel:"01:08",rightLabel:"02:30"}),t.jsx(Eo,{label:"Disabled",initialValue:50,size:"M",disabled:!0})]}),$T=v.div`
  position: relative;
  background: transparent; // Track is usually transparent or has a background? User's code has StyledTrack but no background color defined, just transparent?
  // User's code: StyledTrack has padding but no background color.
  // Actually, standard scrollbars usually have transparent track or light track.
  // User's StyledTrack code:
  // width: 6px; height: 160px; padding-top: 4px; padding-bottom: 4px; ...
  // It has flex layout? "justify-content: flex-start; align-items: center; gap: 8px;"
  // This implies the track might contain multiple things or it's just a container.
  // I'll make the track the container.
  
  border-radius: 9999px;
  
  ${e=>e.$orientation==="vertical"?_`
    width: ${e.$size==="m"?"6px":"4px"};
    height: ${typeof e.$length=="number"?`${e.$length}px`:e.$length};
    padding: 4px 0; // Top/Bottom padding
  `:_`
    height: ${e.$size==="m"?"6px":"4px"};
    width: ${typeof e.$length=="number"?`${e.$length}px`:e.$length};
    padding: 0 4px; // Left/Right padding
  `}
`,LT=v.div`
  position: absolute;
  background: var(--Common-Control-Base-normal, #364356);
  border-radius: 9999px;
  cursor: pointer;
  
  /* Pressed State */
  ${e=>e.$pressed&&_`
    background: var(--Common-Control-Base-pressed, #2A3649); // Use darker color for pressed
    // Or maybe lighter? InputField uses #2A3649 for pressed.
    // User provided #364356 for normal.
    // Wait, #2A3649 is Darker? #364356 is Lighter?
    // Let's check hex. 36 > 2A. So 364356 is lighter than 2A3649.
    // So Pressed is Darker.
  `}

  ${e=>e.$orientation==="vertical"?_`
    width: ${e.$size==="m"?"6px":"4px"};
    height: ${typeof e.$length=="number"?`${e.$length}px`:e.$length};
    left: 0; 
    // Top position will be set inline via style
  `:_`
    height: ${e.$size==="m"?"6px":"4px"};
    width: ${typeof e.$length=="number"?`${e.$length}px`:e.$length};
    top: 0;
    // Left position will be set inline via style
  `}
`,Un=({orientation:e="vertical",size:i="m",length:s="100%",thumbLength:l=50,value:c=0,onChange:p,interactive:d=!0,forcePressed:f=!1,className:x,style:g})=>{const m=b.useRef(null),[j,C]=b.useState(!1),k=E=>{d&&(E.preventDefault(),C(!0))},S=b.useCallback(E=>{if(!j||!m.current)return;const F=m.current.getBoundingClientRect(),O=8,X=e==="vertical"?F.height:F.width;let V=0;typeof l=="number"?V=l:V=parseFloat(l);const z=X-V-O;if(z<=0)return;let J=e==="vertical"?E.clientY:E.clientX,Q=e==="vertical"?F.top:F.left,me=(J-Q-O/2-V/2)/z;me=Math.max(0,Math.min(1,me)),p&&p(me)},[j,e,l,p,c]),T=b.useCallback(()=>{C(!1)},[]);b.useEffect(()=>(j?(document.addEventListener("mousemove",S),document.addEventListener("mouseup",T)):(document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",T)),()=>{document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",T)}),[j,S,T]);const R=(()=>{const E=Math.max(0,Math.min(1,c));return`calc(4px + (100% - 8px - ${typeof l=="number"?`${l}px`:l}) * ${E})`})();return t.jsx($T,{ref:m,$orientation:e,$size:i,$length:s,className:x,style:g,children:t.jsx(LT,{$orientation:e,$size:i,$length:l,$pressed:j||f,style:e==="vertical"?{top:R}:{left:R},onMouseDown:k})})},BT=v.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  width: 100%;
`,PT=v.div`
  display: grid;
  grid-template-columns: 100px 1fr 1fr;
  gap: 40px;
  margin-bottom: 24px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-left: 0;
    
    & > :first-child {
      display: none;
    }
  }
`,Za=v.div`
  display: grid;
  grid-template-columns: 100px 1fr 1fr;
  gap: 40px;
  margin-bottom: 32px;
  align-items: flex-start;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`,Ga=v.div`
  display: contents;
  
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    width: 100%;
  }
`,Hm=v.div`
  color: var(--Text-Assist, #B6C3D6);
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.2px;
`,Ka=v.div`
  color: var(--Text-Assist, #B6C3D6);
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.2px;
  padding-top: 10px;
`,zi=v.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 160px; // Ensure enough space for vertical scrollbar
  background: rgba(255,255,255,0.02);
  border-radius: 8px;
  padding: 16px;
`,ET=()=>t.jsxs(BT,{children:[t.jsxs(PT,{children:[t.jsx("div",{}),t.jsx(Hm,{children:"Size M (6px)"}),t.jsx(Hm,{children:"Size S (4px)"})]}),t.jsxs(Za,{children:[t.jsxs(Ka,{children:["Vertical",t.jsx("br",{}),"Normal"]}),t.jsxs(Ga,{children:[t.jsx(zi,{children:t.jsx(Un,{orientation:"vertical",size:"m",length:160,thumbLength:72,value:.3,interactive:!1})}),t.jsx(zi,{children:t.jsx(Un,{orientation:"vertical",size:"s",length:120,thumbLength:56,value:.3,interactive:!1})})]})]}),t.jsxs(Za,{children:[t.jsxs(Ka,{children:["Vertical",t.jsx("br",{}),"Pressed"]}),t.jsxs(Ga,{children:[t.jsx(zi,{children:t.jsx(Un,{orientation:"vertical",size:"m",length:160,thumbLength:72,value:.5,forcePressed:!0,interactive:!1})}),t.jsx(zi,{children:t.jsx(Un,{orientation:"vertical",size:"s",length:120,thumbLength:56,value:.5,forcePressed:!0,interactive:!1})})]})]}),t.jsxs(Za,{children:[t.jsxs(Ka,{children:["Horizontal",t.jsx("br",{}),"Normal"]}),t.jsxs(Ga,{children:[t.jsx(zi,{style:{minHeight:"60px"},children:t.jsx(Un,{orientation:"horizontal",size:"m",length:160,thumbLength:72,value:.3,interactive:!1})}),t.jsx(zi,{style:{minHeight:"60px"},children:t.jsx(Un,{orientation:"horizontal",size:"s",length:120,thumbLength:56,value:.3,interactive:!1})})]})]}),t.jsxs(Za,{children:[t.jsxs(Ka,{children:["Horizontal",t.jsx("br",{}),"Pressed"]}),t.jsxs(Ga,{children:[t.jsx(zi,{style:{minHeight:"60px"},children:t.jsx(Un,{orientation:"horizontal",size:"m",length:160,thumbLength:72,value:.5,forcePressed:!0,interactive:!1})}),t.jsx(zi,{style:{minHeight:"60px"},children:t.jsx(Un,{orientation:"horizontal",size:"s",length:120,thumbLength:56,value:.5,forcePressed:!0,interactive:!1})})]})]})]}),DT=()=>{const[e,i]=b.useState(.2),[s,l]=b.useState("vertical"),[c,p]=b.useState("m"),[d,f]=b.useState(50),[x,g]=b.useState(200);return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"100%"},children:[t.jsxs("div",{style:{display:"flex",gap:"24px",marginBottom:"8px",flexWrap:"wrap"},children:[t.jsxs("div",{style:{color:"var(--Text-Secondary, #d5e2f2)",display:"flex",alignItems:"center",gap:"8px",fontSize:"14px",cursor:"pointer"},onClick:()=>l(s==="horizontal"?"vertical":"horizontal"),children:[t.jsx("div",{onClick:m=>m.stopPropagation(),children:t.jsx(H,{checked:s==="horizontal",onChange:m=>l(m?"horizontal":"vertical"),shape:"square",size:20})}),"Horizontal"]}),t.jsxs("div",{style:{color:"var(--Text-Secondary, #d5e2f2)",display:"flex",alignItems:"center",gap:"8px",fontSize:"14px",cursor:"pointer"},onClick:()=>p(c==="s"?"m":"s"),children:[t.jsx("div",{onClick:m=>m.stopPropagation(),children:t.jsx(H,{checked:c==="s",onChange:m=>p(m?"s":"m"),shape:"square",size:20})}),"Size S"]})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",background:"var(--Colors-Surface-Backgronud--01, #131b26)",borderRadius:"16px",padding:"24px",width:"100%",alignItems:"center",justifyContent:"center",minHeight:"250px"},children:[t.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"200px"},children:t.jsx(Un,{orientation:s,size:c,length:s==="vertical"?180:250,thumbLength:s==="vertical"?60:80,value:e,onChange:i})}),t.jsxs("div",{style:{color:"var(--Text-Assist, #B6C3D6)",fontSize:"12px",marginTop:"-12px"},children:["Value: ",(e*100).toFixed(0),"%"]})]})]})},RT=()=>{const[e,i]=b.useState(.3);return t.jsx("div",{style:{width:"200px"},children:t.jsx(Un,{orientation:"horizontal",thumbLength:80,value:e,onChange:i})})},IT=v.div`
  width: 328px;
  padding: 16px;
  background: var(--Color-Neutral-60, #4B596C);
  box-shadow: 0px 4px 5px rgba(19, 27, 38, 0.20);
  border-radius: 7px;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  cursor: ${e=>e.$clickable?"pointer":"default"};
  transition: transform 0.1s ease-in-out;

  &:active {
    ${e=>e.$clickable&&_`
      transform: scale(0.98);
    `}
  }
`,AT=v.span`
  color: var(--Text-primary, white);
  font-size: 14px;
  font-family: Roboto;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.20px;
  word-wrap: break-word;
`,X1=v.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`,jc=({type:e="common",message:i="Toast Message",className:s,style:l,onClick:c,icon:p})=>{const d=()=>{c&&c()},f=()=>{if(p)return t.jsx(X1,{children:p});switch(e){case"success":return t.jsx(X1,{children:t.jsx(I3,{size:20,color:"white"})});case"error":return t.jsx(X1,{children:t.jsx(l8,{size:20,color:"white"})});case"common":default:return null}};return t.jsxs(IT,{$type:e,className:s,style:l,$clickable:!!c,onClick:d,children:[f(),t.jsx(AT,{children:i})]})},zT=v.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  width: 100%;
  padding: 24px 0;
  gap: 32px;
`,Q1=v.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,J1=v.div`
  color: var(--Text-Assist, #B6C3D6);
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.2px;
`,MT=()=>t.jsxs(zT,{children:[t.jsxs(Q1,{children:[t.jsx(J1,{children:"Common"}),t.jsx(jc,{type:"common",message:"Toast Message"})]}),t.jsxs(Q1,{children:[t.jsx(J1,{children:"Success"}),t.jsx(jc,{type:"success",message:"Toast Message"})]}),t.jsxs(Q1,{children:[t.jsx(J1,{children:"Error"}),t.jsx(jc,{type:"error",message:"Toast Message"})]})]}),VT=()=>t.jsx(jc,{type:"common",message:"Toast Message"}),FT=v.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 9999px;
  cursor: pointer;
  transition: all 0.1s ease;
  font-family: Roboto, sans-serif;
  word-wrap: normal;
  white-space: nowrap;
  user-select: none;
  flex-shrink: 0;

  ${({$size:e})=>{switch(e){case"medium":return _`
          height: 38px;
          min-width: 72px;
          padding: 8px 12px;
          font-size: 16px;
          line-height: 22px;
          letter-spacing: 0.20px;
        `;case"small":return _`
          height: 32px;
          min-width: 64px;
          padding: 0 12px;
          font-size: 14px;
          line-height: 20px;
          letter-spacing: 0.20px;
        `;case"xsmall":return _`
          height: 26px;
          min-width: 48px;
          padding: 0 8px;
          font-size: 12px;
          line-height: 16px;
          letter-spacing: 0.20px;
        `}}}

  ${({$state:e})=>{switch(e){case"normal":return _`
          background: var(--Common-Control-Base-normal, #364356);
          color: var(--Common-Control-Content-normal, #D5E2F2);
          border: 1px solid var(--Border-border-divider-01, #4B596C);
        `;case"pressed":return _`
          background: var(--Common-Control-Base-pressed, rgba(54, 67, 86, 0.60));
          color: var(--Common-Control-Content-pressed, #6E7C8E);
          border: 1px solid var(--Common-Control-Base-pressed, rgba(54, 67, 86, 0.60));
        `;case"active":return _`
          background: var(--Common-Control-Base-normal, #364356);
          color: var(--Common-Control-Active, #00B3E3);
          border: 1px solid var(--Common-Control-Active-pressed, #0589C9);
        `;case"active-pressed":return _`
          background: var(--Common-Control-Base-pressed, rgba(54, 67, 86, 0.60));
          color: var(--Common-Control-Active-pressed, #0589C9);
          border: 1px solid var(--Common-Control-Active-pressed, #0589C9);
        `;case"disabled":return _`
          background: var(--Common-Control-Base-disabled, rgba(110, 124, 142, 0.30));
          color: var(--Common-Control-Content-disabled, rgba(182, 195, 214, 0.30));
          border: none;
          cursor: not-allowed;
        `}}}
  
  /* Outline adjustments based on original code logic */
  ${({$size:e,$state:i})=>e==="medium"&&_`
      border: none;
      outline: 1.5px solid ${i==="normal"?"var(--Border-border-divider-01, #4B596C)":i==="pressed"?"var(--Common-Control-Base-pressed, rgba(54, 67, 86, 0.60))":i==="active"||i==="active-pressed"?"var(--Common-Control-Active-pressed, #0589C9)":"transparent"};
      outline-offset: -1.5px;
      ${i==="disabled"&&"outline: none;"}
  `}
  
  ${({$size:e,$state:i})=>(e==="small"||e==="xsmall")&&_`
      border: none;
      outline: 1px solid ${i==="normal"?"var(--Border-border-divider-01, #4B596C)":i==="pressed"?"var(--Common-Control-Base-pressed, rgba(54, 67, 86, 0.60))":i==="active"||i==="active-pressed"?"var(--Common-Control-Active-pressed, #0589C9)":"transparent"};
      outline-offset: -1px;
      ${i==="disabled"&&"outline: none;"}
  `}
`,Cn=({label:e,size:i="medium",active:s=!1,disabled:l=!1,state:c,icon:p,showBeta:d=!1,onClick:f,className:x})=>{const[g,m]=b.useState(!1);let j="normal";c?j=c:l?j="disabled":s?j=g?"active-pressed":"active":j=g?"pressed":"normal";const C=()=>{l||m(!0)},k=()=>{l||m(!1)},S=()=>{l||m(!1)},T=i==="medium"?"m":"s",P=l?"archived":"default";return t.jsxs(FT,{$size:i,$state:j,className:x,onMouseDown:C,onMouseUp:k,onMouseLeave:S,onClick:l?void 0:f,children:[d&&t.jsx(In,{label:"Beta",size:T,variant:P}),p,t.jsx("span",{children:e})]})},NT=v.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 48px 24px;
  background: var(--Colors-Surface-Backgronud--01, #131b26);
  border-radius: 16px;
  width: 100%;
  overflow-x: auto;
`,Do=v.div`
  display: flex;
  gap: 40px;
  align-items: center;
  min-width: max-content;
`,Ro=v.div`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  color: var(--Text-Secondary, #D5E2F2);
  min-width: 100px;
  flex-shrink: 0;
`,OT=v.div`
  display: flex;
  gap: 16px;
  align-items: center;
`,ep=v.div`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: var(--Text-Assist, #B6C3D6);
  margin-bottom: 16px;
  min-width: 280px; /* Width to hold 3 variants */
`,_T=v.div`
  display: flex;
  gap: 40px;
  padding-left: 140px; /* Offset for RowLabel */
`,HT=()=>{const e=(i,s,l,c)=>t.jsxs(OT,{children:[t.jsx(Cn,{label:"Tags",size:i,state:s,active:l,disabled:c}),t.jsx(Cn,{label:"Tags",size:i,state:s,active:l,disabled:c,icon:t.jsx(Ee,{size:i==="xsmall"?12:i==="small"?14:16,color:"currentColor"})}),t.jsx(Cn,{label:"Tags",size:i,state:s,active:l,disabled:c,showBeta:!0})]});return t.jsxs(NT,{children:[t.jsxs(_T,{children:[t.jsx(ep,{children:"Medium"}),t.jsx(ep,{children:"Small"}),t.jsx(ep,{children:"X-Small"})]}),t.jsxs(Do,{children:[t.jsx(Ro,{children:"Normal"}),e("medium"),e("small"),e("xsmall")]}),t.jsxs(Do,{children:[t.jsx(Ro,{children:"Pressed"}),e("medium","pressed"),e("small","pressed"),e("xsmall","pressed")]}),t.jsxs(Do,{children:[t.jsx(Ro,{children:"Active"}),e("medium",void 0,!0),e("small",void 0,!0),e("xsmall",void 0,!0)]}),t.jsxs(Do,{children:[t.jsx(Ro,{children:"Active_pressed"}),e("medium","active-pressed"),e("small","active-pressed"),e("xsmall","active-pressed")]}),t.jsxs(Do,{children:[t.jsx(Ro,{children:"Disable"}),e("medium",void 0,!1,!0),e("small",void 0,!1,!0),e("xsmall",void 0,!1,!0)]})]})},Wm=v.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  margin-bottom: 8px;
`,os=v.div`
  color: var(--Text-Secondary, #d5e2f2);
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  cursor: pointer;
  font-family: Roboto, sans-serif;
`,WT=()=>{const[e,i]=b.useState("medium"),[s,l]=b.useState(!1),[c,p]=b.useState(!1),[d,f]=b.useState(!1),[x,g]=b.useState(!1);return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"100%"},children:[t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[t.jsx("div",{style:{fontFamily:"Roboto, sans-serif",fontSize:"14px",fontWeight:500,color:"var(--Text-Primary, #ffffff)",marginBottom:"8px"},children:"Type (Size)"}),t.jsxs(Wm,{children:[t.jsxs(os,{onClick:()=>i("medium"),children:[t.jsx(H,{checked:e==="medium",onChange:()=>i("medium"),shape:"rounded"}),"Medium"]}),t.jsxs(os,{onClick:()=>i("small"),children:[t.jsx(H,{checked:e==="small",onChange:()=>i("small"),shape:"rounded"}),"Small"]}),t.jsxs(os,{onClick:()=>i("xsmall"),children:[t.jsx(H,{checked:e==="xsmall",onChange:()=>i("xsmall"),shape:"rounded"}),"XSmall"]})]}),t.jsx("div",{style:{fontFamily:"Roboto, sans-serif",fontSize:"14px",fontWeight:500,color:"var(--Text-Primary, #ffffff)",marginBottom:"8px"},children:"Optional"}),t.jsxs(Wm,{children:[t.jsxs(os,{onClick:()=>p(!c),children:[t.jsx(H,{checked:c,onChange:p,shape:"square"}),"Disabled"]}),t.jsxs(os,{onClick:()=>f(!d),children:[t.jsx(H,{checked:d,onChange:f,shape:"square"}),"Show Icon"]}),t.jsxs(os,{onClick:()=>g(!x),children:[t.jsx(H,{checked:x,onChange:g,shape:"square"}),"Show Beta"]})]})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",background:"var(--Colors-Surface-Backgronud--01, #131b26)",borderRadius:"16px",padding:"24px",width:"100%",alignItems:"center",justifyContent:"center",minHeight:"200px"},children:[t.jsx(Cn,{label:"Tags",size:e,active:s,onClick:()=>!c&&l(!s),disabled:c,icon:d?t.jsx(Ee,{size:e==="xsmall"?12:e==="small"?14:16,color:"currentColor"}):void 0,showBeta:x}),t.jsx("div",{style:{marginTop:"16px",color:"#B6C3D6",fontSize:"12px"},children:"Click to toggle state"})]})]})},UT=()=>{const[e,i]=b.useState(!1);return t.jsx(Cn,{label:"Tag",active:e,onClick:()=>i(!e)})},ZT=v.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  display: flex;
  align-items: center;
`,GT=v.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding: 8px 16px;
  width: 100%;
  
  /* Hide scrollbar */
  scrollbar-width: none;
  &::-webkit-scrollbar { 
    display: none; 
  }
`,KT=v.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;
  background: linear-gradient(90deg, var(--Colors-Surface-Backgronud--01, #131b26) 0%, transparent 8%, transparent 92%, var(--Colors-Surface-Backgronud--01, #131b26) 100%);
  z-index: 1;
`,Sr=({items:e,size:i="medium",withIcons:s=!1,fadeout:l=!0,className:c,selectedIndex:p,onSelect:d})=>{const[f,x]=b.useState([0]),g=en.useRef(null),[m,j]=b.useState(!1),[C,k]=b.useState(0),[S,T]=b.useState(0),[P,R]=b.useState(!1),E=p!==void 0,M=J=>{j(!0),R(!1),g.current&&(k(J.pageX-g.current.offsetLeft),T(g.current.scrollLeft))},F=()=>{j(!1)},O=()=>{j(!1),setTimeout(()=>R(!1),0)},X=J=>{if(m&&(J.preventDefault(),g.current)){const ae=(J.pageX-g.current.offsetLeft-C)*2;Math.abs(ae)>5&&R(!0),g.current.scrollLeft=S-ae}},V=J=>{P||(d&&d(J),E||(f.includes(J)?x(f.filter(Q=>Q!==J)):x([...f,J])))},z=J=>E?p===J:f.includes(J);return t.jsxs(ZT,{className:c,children:[l&&t.jsx(KT,{}),t.jsxs(GT,{ref:g,onMouseDown:M,onMouseLeave:F,onMouseUp:O,onMouseMove:X,style:{cursor:m?"grabbing":"grab"},children:[e.map((J,Q)=>t.jsxs("div",{style:{userSelect:"none"},children:[" ",t.jsx(Cn,{label:J,size:i,active:z(Q),onClick:()=>V(Q),icon:s?t.jsx(Ee,{size:i==="xsmall"?12:i==="small"?14:16,color:"currentColor"}):void 0})]},Q)),e.length<5&&Array.from({length:5}).map((J,Q)=>t.jsx("div",{style:{userSelect:"none"},children:t.jsx(Cn,{label:"Tag",size:i,icon:s?t.jsx(Ee,{size:i==="xsmall"?12:i==="small"?14:16,color:"currentColor"}):void 0,onClick:()=>{}})},`dummy-${Q}`))]})]})},qT=v.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 48px 24px;
  background: var(--Colors-Surface-Backgronud--01, #131b26);
  border-radius: 16px;
  width: 100%;
`,qa=v.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Ya=v.div`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  color: var(--Text-Assist, #B6C3D6);
`,Xa=["Tags","Tags","Tags","Tags","Tags","Tags","Tags"],YT=()=>t.jsxs(qT,{children:[t.jsxs(qa,{children:[t.jsx(Ya,{children:"Medium"}),t.jsx(Sr,{items:Xa,size:"medium",fadeout:!0})]}),t.jsxs(qa,{children:[t.jsx(Ya,{children:"Small"}),t.jsx(Sr,{items:Xa,size:"small",fadeout:!0})]}),t.jsxs(qa,{children:[t.jsx(Ya,{children:"Medium with Icon"}),t.jsx(Sr,{items:Xa,size:"medium",withIcons:!0,fadeout:!0})]}),t.jsxs(qa,{children:[t.jsx(Ya,{children:"Small with Icon"}),t.jsx(Sr,{items:Xa,size:"small",withIcons:!0,fadeout:!0})]})]}),Um=v.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  margin-bottom: 8px;
`,Io=v.div`
  color: var(--Text-Secondary, #d5e2f2);
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  cursor: pointer;
  font-family: Roboto, sans-serif;
`,XT=()=>{const[e,i]=b.useState("medium"),[s,l]=b.useState(!1),[c,p]=b.useState(!0),d=["All","Recent","Favorites","Shared","Archived","Deleted","Tags"];return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"100%"},children:[t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[t.jsx("div",{style:{fontFamily:"Roboto, sans-serif",fontSize:"14px",fontWeight:500,color:"var(--Text-Primary, #ffffff)",marginBottom:"8px"},children:"Type (Size)"}),t.jsxs(Um,{children:[t.jsxs(Io,{onClick:()=>i("medium"),children:[t.jsx(H,{checked:e==="medium",onChange:()=>i("medium"),shape:"rounded"}),"Medium"]}),t.jsxs(Io,{onClick:()=>i("small"),children:[t.jsx(H,{checked:e==="small",onChange:()=>i("small"),shape:"rounded"}),"Small"]}),t.jsxs(Io,{onClick:()=>i("xsmall"),children:[t.jsx(H,{checked:e==="xsmall",onChange:()=>i("xsmall"),shape:"rounded"}),"XSmall"]})]}),t.jsx("div",{style:{fontFamily:"Roboto, sans-serif",fontSize:"14px",fontWeight:500,color:"var(--Text-Primary, #ffffff)",marginBottom:"8px"},children:"Optional"}),t.jsxs(Um,{children:[t.jsxs(Io,{onClick:()=>l(!s),children:[t.jsx(H,{checked:s,onChange:l,shape:"square"}),"Show Icons"]}),t.jsxs(Io,{onClick:()=>p(!c),children:[t.jsx(H,{checked:c,onChange:p,shape:"square"}),"Fadeout Effect"]})]})]}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",background:"var(--Colors-Surface-Backgronud--01, #131b26)",borderRadius:"16px",padding:"24px 0",width:"100%",alignItems:"center",justifyContent:"center",minHeight:"200px",overflow:"hidden"},children:t.jsx("div",{style:{width:"100%",maxWidth:"360px"},children:t.jsx(Sr,{items:d,size:e,withIcons:s,fadeout:c})})})]})},QT=()=>{const e=["All","Recent","Favorites","Shared"];return t.jsx(Sr,{items:e})},Af=""+new URL("fac5f0cad9869d775e7ed5b17f78ef2396ad5c69-DRZAQHMT.png",import.meta.url).href,Qa={head:"M12 3C14.3203 3 16.2 4.87949 16.2 7.2C16.2 9.51516 14.3203 11.4 12 11.4C9.67921 11.4 7.8 9.51516 7.8 7.2C7.8 4.87949 9.67921 3 12 3Z",body:"M12 12.6C16.3078 12.6 19.8 15.2863 19.8 18.6C19.8 21.9137 4.2 21.9137 4.2 18.6C4.2 15.2863 7.69218 12.6 12 12.6Z"},JT=v.div`
  position: relative;
  /* Ring width (2px) + Gap (2px) on each side = +8px total */
  width: ${e=>e.$size+8}px;
  height: ${e=>e.$size+8}px;
  border-radius: 50%;
  
  /* Gradient Ring */
  background: linear-gradient(90deg, #33C2E9 15%, #1A5EFF 90%);
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  /* Interaction */
  cursor: ${e=>e.$interactive?"pointer":"default"};
  transition: transform 0.1s ease-out, opacity 0.1s ease-out;
  
  /* Pressed State */
  ${e=>(e.$pressed||e.$interactive&&_`&:active`)&&_`
    transform: scale(0.95);
    opacity: 0.8;
  `}
`,e$=v.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  padding: 2px; /* Gap width */
  background: var(--Colors-Surface-Backgronud--01, #131b26); /* Match background to create gap */
  display: flex;
  align-items: center;
  justify-content: center;
  /* Ensure the background clips to padding box so gradient shows behind? 
     No, this div sits ON TOP of the gradient div (PlusRingWrapper). 
     We need this div to be slightly smaller than wrapper? 
     
     Layout:
     PlusRingWrapper (Gradient Bg)
       -> Padding is built into size calc above, or use padding CSS?
       -> Let's use flex centering.
     
     PlusRingGap (Solid Bg)
       -> Width/Height = 100% - 4px (2px border on each side)
  */
  width: calc(100% - 4px);
  height: calc(100% - 4px);
`,t$=v.div`
  position: relative;
  width: ${e=>e.$size}px;
  height: ${e=>e.$size}px;
  border-radius: 50%; /* Standard circular avatar */
  overflow: hidden;
  flex-shrink: 0;
  
  /* Interaction - Only apply if NOT inside a Plus wrapper (handled by wrapper) */
  ${e=>e.$interactive&&_`
    cursor: pointer;
    transition: transform 0.1s ease-out, opacity 0.1s ease-out;
    
    /* Pressed State */
    ${(e.$pressed||_`&:active`)&&_`
      transform: scale(0.95);
      opacity: 0.8;
    `}
  `}
`,Ja=v.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #364356;
`,n$=v.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,Zm=v.div`
  position: absolute;
  inset: 25%; /* inset-1/4 from Tailwind = 25% */
  display: flex;
  align-items: center;
  justify-content: center;
`,i$=v.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  color: #D5E2F2;
  font-family: Roboto, sans-serif;
  font-weight: 700; /* Bold */
  font-size: ${e=>e.$fontSize}px;
  letter-spacing: 0.04px;
  line-height: 1;
`,fs=({src:e,alt:i="Avatar",size:s=48,type:l="image",text:c="AA",isPlus:p=!1,onClick:d,className:f,forcePressed:x})=>{const[g,m]=b.useState(!1);en.useEffect(()=>{m(!1)},[e]);const j=l==="image"&&(!e||g)?"icon":l,C=()=>{switch(j){case"image":return t.jsxs(t.Fragment,{children:[t.jsx(Ja,{})," ",t.jsx(n$,{src:e,alt:i,onError:()=>m(!0)})]});case"icon":return t.jsxs(t.Fragment,{children:[t.jsx(Ja,{}),t.jsx(Zm,{children:t.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 24 24",fill:"none",preserveAspectRatio:"none",children:[t.jsx("path",{d:Qa.head,fill:"#D5E2F2"}),t.jsx("path",{d:Qa.body,fill:"#D5E2F2"})]})})]});case"text":const S=Math.round(s*.42);return t.jsxs(t.Fragment,{children:[t.jsx(Ja,{}),t.jsx(i$,{$fontSize:S,children:c.substring(0,2)})]});default:return t.jsxs(t.Fragment,{children:[t.jsx(Ja,{}),t.jsx(Zm,{children:t.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 24 24",fill:"none",preserveAspectRatio:"none",children:[t.jsx("path",{d:Qa.head,fill:"#D5E2F2"}),t.jsx("path",{d:Qa.body,fill:"#D5E2F2"})]})})]})}},k=t.jsx(t$,{$size:s,$interactive:!p&&!!d,$pressed:x,onClick:p?void 0:d,className:p?void 0:f,children:C()});return p?t.jsx(JT,{$size:s,$interactive:!!d,$pressed:x,onClick:d,className:f,children:t.jsx(e$,{children:k})}):k},r$=v.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`,s$=v.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,ec=v.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,tp=v.div`
  color: var(--Text-Assist, #B6C3D6);
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 500;
`,np=v.div`
  color: var(--Text-Secondary, #d5e2f2);
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  cursor: pointer;
`,o$=v.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: var(--Colors-Surface-Backgronud--01, #131b26);
  border-radius: 16px;
  padding: 48px;
  width: 100%;
  align-items: center;
  justify-content: center;
  min-height: 200px;
`,l$=()=>{const[e,i]=b.useState(48),[s,l]=b.useState("image"),[c,p]=b.useState("AA"),[d,f]=b.useState(!1),x=[24,34,48,56,64,80,120],g=["image","icon","text"];return t.jsxs(r$,{children:[t.jsxs(s$,{children:[t.jsxs(ec,{children:[t.jsx(tp,{children:"Type"}),t.jsx("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap"},children:g.map(m=>t.jsxs(np,{onClick:()=>l(m),children:[t.jsx("div",{onClick:j=>j.stopPropagation(),children:t.jsx(H,{checked:s===m,onChange:()=>l(m),shape:"rounded",size:20})}),m.charAt(0).toUpperCase()+m.slice(1)]},m))})]}),t.jsx(ec,{children:t.jsxs(np,{onClick:()=>f(!d),children:[t.jsx("div",{onClick:m=>m.stopPropagation(),children:t.jsx(H,{checked:d,onChange:f,shape:"square",size:20})}),"Plus Account (Gradient Ring)"]})}),s==="text"&&t.jsxs(ec,{children:[t.jsx(tp,{children:"Text Content"}),t.jsx(et,{value:c,onChange:p,placeholder:"Initials",maxLength:2,style:{width:"150px"}})]}),t.jsxs(ec,{children:[t.jsx(tp,{children:"Size"}),t.jsx("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"center"},children:x.map(m=>t.jsxs(np,{onClick:()=>i(m),children:[t.jsx("div",{onClick:j=>j.stopPropagation(),children:t.jsx(H,{checked:e===m,onChange:()=>i(m),shape:"rounded",size:20})}),m,"px"]},m))})]})]}),t.jsx(o$,{children:t.jsx(fs,{size:e,type:s,text:c,isPlus:d,src:s==="image"?Af:void 0,onClick:()=>console.log("Avatar clicked")})})]})},a$=()=>t.jsx(fs,{size:56,type:"image",isPlus:!0,src:Af,onClick:()=>{}}),c$=v.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 32px;
`,tc=v.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,nc=v.div`
  color: var(--Text-Assist, #B6C3D6);
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 500;
`,ic=v.div`
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
`,rc=[24,34,48,56,64,80,120],d$=()=>t.jsxs(c$,{children:[t.jsxs(tc,{children:[t.jsx(nc,{children:"Image"}),t.jsx(ic,{children:rc.map(e=>t.jsx(fs,{size:e,type:"image",src:Af,onClick:()=>{}},`img-${e}`))})]}),t.jsxs(tc,{children:[t.jsx(nc,{children:"Icon"}),t.jsx(ic,{children:rc.map(e=>t.jsx(fs,{size:e,type:"icon",onClick:()=>{}},`icon-${e}`))})]}),t.jsxs(tc,{children:[t.jsx(nc,{children:"Text"}),t.jsx(ic,{children:rc.map(e=>t.jsx(fs,{size:e,type:"text",text:"AA",onClick:()=>{}},`text-${e}`))})]}),t.jsxs(tc,{children:[t.jsx(nc,{children:"Plus Account (Icon Default)"}),t.jsx(ic,{children:rc.map(e=>t.jsx(fs,{size:e,type:"icon",isPlus:!0,onClick:()=>{}},`plus-${e}`))})]})]}),u$=v.div`
  width: 328px;
  min-width: 328px;
  min-height: 70px;
  padding: 8px 16px;
  overflow: hidden;
  border-radius: 15px;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
  isolation: isolate;
  
  ${({$type:e})=>{switch(e){case"normal":return`
          background: linear-gradient(90deg, rgba(0, 179, 227, 0.50) 0%, rgba(0, 179, 227, 0) 50%), var(--Surface-Backgronud--02, #2A3649);
        `;case"notice":return`
          background: linear-gradient(90deg, rgba(251, 211, 90, 0.50) 0%, rgba(251, 211, 90, 0) 50%), var(--Surface-Backgronud--02, #2A3649);
        `;case"urgent":return`
          background: linear-gradient(90deg, rgba(254, 98, 94, 0.50) 0%, rgba(254, 98, 94, 0) 50%), var(--Surface-Backgronud--02, #2A3649);
        `}}}
`,p$=v.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  z-index: 3;
`,f$=v.div`
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 1px;
  min-width: 1px;
  z-index: 2;
`,h$=v.p`
  color: var(--Text-Primary, #ffffff);
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.2px;
  word-wrap: break-word;
  width: 100%;
`,x$=v.p`
  color: var(--Text-Primary, #ffffff);
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.2px;
  word-wrap: break-word;
  width: 100%;
`,m$=v.p`
  color: var(--Text-Secondary, #D5E2F2);
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.2px;
  word-wrap: break-word;
  width: 100%;
`,Gm=v.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  z-index: 1;
`,g$=v.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 9999px;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  
  &:active {
    background: rgba(255, 255, 255, 0.15);
  }
`,Jt=({type:e="normal",title:i,body:s,singleLineText:l,icon:c,showIcon:p=!1,trailingButton:d="none",onButtonClick:f,onClose:x,className:g})=>t.jsxs(u$,{$type:e,className:g,children:[p&&c&&t.jsx(p$,{children:c}),t.jsx(f$,{children:l?t.jsx(h$,{children:l}):t.jsxs(t.Fragment,{children:[i&&t.jsx(x$,{children:i}),s&&t.jsx(m$,{children:s})]})}),d==="button"&&t.jsx(Gm,{children:t.jsx(K,{variant:"outlined",onClick:f,children:"Button"})}),d==="close"&&t.jsx(Gm,{children:t.jsx(g$,{onClick:x,children:t.jsx(zt,{size:12,color:"var(--Text-Primary, #ffffff)"})})})]}),v$=v.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 48px 24px;
  background: var(--Colors-Surface-Backgronud--01, #131b26);
  border-radius: 16px;
  width: 100%;
`,ip=v.div`
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.22px;
  color: var(--Text-Assist, #B6C3D6);
  margin-bottom: 8px;
`,rp=v.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,ai=v.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,ci=v.div`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.2px;
  color: var(--Text-Secondary, #D5E2F2);
`,y$=()=>t.jsxs(v$,{children:[t.jsxs(rp,{children:[t.jsx(ip,{children:"w/ Button"}),t.jsxs(ai,{children:[t.jsx(ci,{children:"Normal"}),t.jsx(Jt,{type:"normal",singleLineText:"Lorem ipsum dolor sit amet",trailingButton:"button"})]}),t.jsxs(ai,{children:[t.jsx(ci,{children:"Notice"}),t.jsx(Jt,{type:"notice",singleLineText:"Lorem ipsum dolor sit amet",trailingButton:"button"})]}),t.jsxs(ai,{children:[t.jsx(ci,{children:"Urgent"}),t.jsx(Jt,{type:"urgent",singleLineText:"Lorem ipsum dolor sit amet",trailingButton:"button"})]})]}),t.jsxs(rp,{children:[t.jsx(ip,{children:"w/ Title & Body"}),t.jsxs(ai,{children:[t.jsx(ci,{children:"Normal"}),t.jsx(Jt,{type:"normal",title:"Title",body:"Lorem ipsum dolor sit amet, consectetur enim ad minim veniam.",trailingButton:"button"})]}),t.jsxs(ai,{children:[t.jsx(ci,{children:"Notice"}),t.jsx(Jt,{type:"notice",title:"Title",body:"Lorem ipsum dolor sit amet, consectetur enim ad minim veniam.",trailingButton:"button"})]}),t.jsxs(ai,{children:[t.jsx(ci,{children:"Urgent"}),t.jsx(Jt,{type:"urgent",title:"Title",body:"Lorem ipsum dolor sit amet, consectetur enim ad minim veniam.",trailingButton:"button"})]})]}),t.jsxs(rp,{children:[t.jsx(ip,{children:"w/ Icon & Close Button"}),t.jsxs(ai,{children:[t.jsx(ci,{children:"Normal"}),t.jsx(Jt,{type:"normal",showIcon:!0,icon:t.jsx(Lr,{size:20,color:"var(--Text-Primary, #ffffff)"}),title:"Title",body:"Lorem ipsum dolor sit amet, consectetur enim ad minim veniam.",trailingButton:"close"})]}),t.jsxs(ai,{children:[t.jsx(ci,{children:"Notice"}),t.jsx(Jt,{type:"notice",showIcon:!0,icon:t.jsx(Lr,{size:20,color:"var(--Text-Primary, #ffffff)"}),title:"Title",body:"Lorem ipsum dolor sit amet, consectetur enim ad minim veniam.",trailingButton:"close"})]}),t.jsxs(ai,{children:[t.jsx(ci,{children:"Urgent"}),t.jsx(Jt,{type:"urgent",showIcon:!0,icon:t.jsx(Lr,{size:20,color:"var(--Text-Primary, #ffffff)"}),title:"Title",body:"Lorem ipsum dolor sit amet, consectetur enim ad minim veniam.",trailingButton:"close"})]})]})]}),j$=v.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`,sp=v.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,op=v.div`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: var(--Text-Primary, #ffffff);
  margin-bottom: 8px;
`,lp=v.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`,mr=v.div`
  color: var(--Text-Secondary, #d5e2f2);
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  cursor: pointer;
  font-family: Roboto, sans-serif;
`,C$=v.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: var(--Colors-Surface-Backgronud--01, #131b26);
  border-radius: 16px;
  padding: 48px 24px;
  width: 100%;
  align-items: center;
  justify-content: center;
  min-height: 200px;
`,w$=()=>{const[e,i]=b.useState("normal"),[s,l]=b.useState("single"),[c,p]=b.useState(!1);return t.jsxs(j$,{children:[t.jsxs(sp,{children:[t.jsx(op,{children:"Type"}),t.jsxs(lp,{children:[t.jsxs(mr,{onClick:()=>i("normal"),children:[t.jsx(H,{checked:e==="normal",onChange:d=>d&&i("normal"),shape:"rounded"}),"Normal"]}),t.jsxs(mr,{onClick:()=>i("notice"),children:[t.jsx(H,{checked:e==="notice",onChange:d=>d&&i("notice"),shape:"rounded"}),"Notice"]}),t.jsxs(mr,{onClick:()=>i("urgent"),children:[t.jsx(H,{checked:e==="urgent",onChange:d=>d&&i("urgent"),shape:"rounded"}),"Urgent"]})]})]}),t.jsxs(sp,{children:[t.jsx(op,{children:"Layout"}),t.jsxs(lp,{children:[t.jsxs(mr,{onClick:()=>l("single"),children:[t.jsx(H,{checked:s==="single",onChange:d=>d&&l("single"),shape:"rounded"}),"Single Line + Button"]}),t.jsxs(mr,{onClick:()=>l("title-body"),children:[t.jsx(H,{checked:s==="title-body",onChange:d=>d&&l("title-body"),shape:"rounded"}),"Title & Body + Button"]}),t.jsxs(mr,{onClick:()=>l("icon-close"),children:[t.jsx(H,{checked:s==="icon-close",onChange:d=>d&&l("icon-close"),shape:"rounded"}),"Icon + Title & Body + Close"]})]})]}),t.jsxs(sp,{children:[t.jsx(op,{children:"Optional"}),t.jsx(lp,{children:t.jsxs(mr,{onClick:()=>p(!c),children:[t.jsx(H,{checked:c,onChange:p,shape:"square"}),"Show Icon (for Title & Body)"]})})]}),t.jsxs(C$,{children:[s==="single"&&t.jsx(Jt,{type:e,singleLineText:"Lorem ipsum dolor sit amet",trailingButton:"button",showIcon:c,icon:t.jsx(Lr,{size:20,color:"var(--Text-Primary, #ffffff)"})}),s==="title-body"&&t.jsx(Jt,{type:e,title:"Title",body:"Lorem ipsum dolor sit amet, consectetur enim ad minim veniam.",trailingButton:"button",showIcon:c,icon:t.jsx(Lr,{size:20,color:"var(--Text-Primary, #ffffff)"})}),s==="icon-close"&&t.jsx(Jt,{type:e,showIcon:!0,icon:t.jsx(Lr,{size:20,color:"var(--Text-Primary, #ffffff)"}),title:"Title",body:"Lorem ipsum dolor sit amet, consectetur enim ad minim veniam.",trailingButton:"close"})]})]})},b$=v.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-radius: 16px;
  padding: 24px;
  width: 100%;
`,S$=()=>t.jsx(b$,{children:t.jsx(Jt,{type:"normal",title:"Title",body:"Lorem ipsum dolor sit amet, consectetur.",trailingButton:"button"})}),k$=v.div`
  position: relative;
  background: linear-gradient(90deg, rgba(0, 179, 227, 0.50) 0%, rgba(0, 179, 227, 0) 50%), var(--Colors-Surface-Backgronud--02, #2A3649);
  border-radius: 5px;
  padding: 8px 12px;
  min-width: 200px;
  min-height: 32px; /* Minimum height 32px as per guidelines */
  max-width: 240px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0; 
  cursor: pointer;
  transition: opacity 0.2s ease, transform 0.1s ease;
  box-sizing: border-box;

  ${e=>e.$pressed&&_`
    opacity: 0.8;
    transform: scale(0.98);
  `}
`,T$=v.span`
  color: var(--Text-Primary, #FFFFFF);
  font-size: 14px; /* Title size from image, assuming 14px Medium */
  font-family: Roboto;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.20px;
  word-wrap: break-word;
`,$$=v.span`
  color: var(--Text-Secondary, #D5E2F2);
  font-size: 12px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.20px;
  word-wrap: break-word;
`,L$=({showGradient:e})=>t.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 12 20",fill:"none",preserveAspectRatio:"none",children:[t.jsxs("g",{children:[t.jsx("path",{d:"M12 20C12 19.3581 11.6184 18.7478 10.9543 18.3276L1.46401 12.3231C-0.491888 11.0856 -0.487321 8.86761 1.47366 7.63442L10.9474 1.67672C11.6157 1.25647 12 0.644236 12 0L12 20Z",fill:"var(--Colors-Surface-Backgronud--02, #2A3649)"}),e&&t.jsx("path",{d:"M12 20C12 19.3581 11.6184 18.7478 10.9543 18.3276L1.46401 12.3231C-0.491888 11.0856 -0.487321 8.86761 1.47366 7.63442L10.9474 1.67672C11.6157 1.25647 12 0.644236 12 0L12 20Z",fill:"url(#tooltip_pointer_gradient)",fillOpacity:"0.5"})]}),t.jsx("defs",{children:t.jsxs("linearGradient",{id:"tooltip_pointer_gradient",gradientUnits:"userSpaceOnUse",x1:"12",y1:"10",x2:"275.4",y2:"10",children:[t.jsx("stop",{stopColor:"#00B3E3"}),t.jsx("stop",{offset:"0.5",stopColor:"#00B3E3",stopOpacity:"0"})]})})]}),B$=v.div`
  position: absolute;
  width: 12px;
  height: 20px;
  z-index: 2;

  ${e=>{switch(e.$position){case"left":return _`
          left: -12px;
          top: 50%;
          transform: translateY(-50%);
        `;case"right":return _`
          right: -12px;
          top: 50%;
          transform: translateY(-50%) rotate(180deg);
        `;case"top-left":return _`
          top: -16px;
          left: 16px;
          transform: rotate(90deg);
        `;case"top-center":return _`
          top: -16px;
          left: 50%;
          transform: translateX(-50%) rotate(90deg);
        `;case"top-right":return _`
          top: -16px;
          right: 16px;
          transform: rotate(90deg);
        `;case"bottom-left":return _`
          bottom: -16px;
          left: 16px;
          transform: rotate(-90deg);
        `;case"bottom-center":return _`
          bottom: -16px;
          left: 50%;
          transform: translateX(-50%) rotate(-90deg);
        `;case"bottom-right":return _`
          bottom: -16px;
          right: 16px;
          transform: rotate(-90deg);
        `;default:return _`display: none;`}}}
`,jr=({title:e,text:i,position:s="none",className:l,onClick:c})=>{const[p,d]=b.useState(!1),f=()=>d(!0),x=()=>d(!1),g=()=>d(!1);return t.jsxs(k$,{$position:s,className:l,$pressed:p,onMouseDown:f,onMouseUp:x,onMouseLeave:g,onClick:c,children:[s!=="none"&&t.jsx(B$,{$position:s,children:t.jsx(L$,{showGradient:["left","top-left","bottom-left"].includes(s)})}),e&&t.jsx(T$,{children:e}),t.jsx($$,{children:i})]})},P$=v.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background: var(--Colors-Surface-Backgronud--01, #131b26);
  border-radius: 16px;
`,E$=()=>t.jsxs(P$,{children:[t.jsx(jr,{text:"Lorem ipsum dolor sit amet, cons ectetur adipiscing elit.",position:"none"}),t.jsx(jr,{text:"Tooltip Left",position:"left"}),t.jsx(jr,{text:"Tooltip Right",position:"right"}),t.jsx(jr,{text:"Tooltip Top Center",position:"top-center"}),t.jsx(jr,{text:"Tooltip Bottom Center",position:"bottom-center"})]}),D$=()=>{const[e,i]=b.useState("Lorem ipsum dolor sit amet, cons ectetur adipiscing elit."),[s,l]=b.useState("Title here"),[c,p]=b.useState(!0),[d,f]=b.useState("none"),x=[{label:"None",value:"none"},{label:"Left",value:"left"},{label:"Right",value:"right"},{label:"Top Left",value:"top-left"},{label:"Top Center",value:"top-center"},{label:"Top Right",value:"top-right"},{label:"Bottom Left",value:"bottom-left"},{label:"Bottom Center",value:"bottom-center"},{label:"Bottom Right",value:"bottom-right"}];return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"100%"},children:[t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[t.jsx("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap"},children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",color:"var(--Text-Secondary, #d5e2f2)",fontSize:"14px"},onClick:()=>p(!c),children:[t.jsx(H,{checked:c,onChange:p,shape:"square",size:20}),"Show Title"]})}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[t.jsx("span",{style:{color:"var(--Text-Secondary, #d5e2f2)",fontSize:"14px",fontWeight:500},children:"Position"}),t.jsx("div",{style:{width:"100%",overflow:"hidden"},children:t.jsx(Sr,{items:x.map(g=>g.label),selectedIndex:x.findIndex(g=>g.value===d),onSelect:g=>f(x[g].value),size:"small",fadeout:!1})})]})]}),t.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",background:"var(--Colors-Surface-Backgronud--01, #131b26)",borderRadius:"16px",padding:"60px",minHeight:"200px"},children:t.jsx(jr,{title:c?s:void 0,text:e,position:d})})]})},R$=()=>t.jsx(jr,{text:"Tooltip info",position:"bottom-center",onClick:()=>{}}),I$=v.div`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 14px; /* Ensure some height if not provided by parent, based on calculation */
`,A$=v.div`
  position: absolute;
  height: 34px;
  left: 0;
  right: 0; /* Use right: 0 instead of width: 360px for fluid width */
  top: -20px;
  /* Background transparent by default, can be useful for debugging touch area */
  /* background: rgba(255, 0, 0, 0.1); */ 
`,z$=v.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.2);
  bottom: 6px;
  height: 2px;
  width: 64px; /* Calculated from 360 - 148 - 148 */
  left: 50%;
  transform: translateX(-50%);
  border-radius: 32px;
`,od=({className:e,style:i})=>t.jsxs(I$,{className:e,style:i,"data-name":"systemBar",children:[t.jsx(A$,{"data-name":"TouchArea"}),t.jsx(z$,{"data-name":"Indicator"})]}),M$=v.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  width: 100%;
`,V$=v.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 40px;
  margin-bottom: 24px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
    margin-left: 0;
    
    & > :first-child {
      display: none;
    }
  }
`,F$=v.div`
  color: var(--Text-Assist, #B6C3D6);
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.2px;
`,N$=v.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 40px;
  margin-bottom: 32px;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }
`,O$=v.div`
  color: var(--Text-Assist, #B6C3D6);
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.2px;
`,_$=v.div`
  position: relative;
  width: 100%;
  max-width: 360px;
  height: 60px; /* Simulate bottom area height */
  background: var(--Colors-Surface-Backgronud--01, #131b26);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
`,H$=()=>t.jsxs(M$,{children:[t.jsxs(V$,{children:[t.jsx("div",{}),t.jsx(F$,{children:"Default"})]}),t.jsxs(N$,{children:[t.jsx(O$,{children:"Gesture Bar"}),t.jsx(_$,{children:t.jsx(od,{})})]})]}),W$=()=>t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"100%"},children:t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",background:"var(--Colors-Surface-Backgronud--01, #131b26)",borderRadius:"16px",padding:"24px",width:"100%",alignItems:"center",justifyContent:"center",minHeight:"200px"},children:t.jsxs("div",{style:{width:"100%",maxWidth:"360px",height:"640px",background:"#000",position:"relative",borderRadius:"16px",overflow:"hidden",border:"1px solid #333"},children:[t.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:"#555"},children:"Content Area"}),t.jsx("div",{style:{position:"absolute",bottom:0,left:0,width:"100%",height:"20px"},children:t.jsx(od,{})})]})})}),U$=()=>t.jsx("div",{style:{width:"100%",height:"40px",background:"var(--Colors-Surface-Backgronud--01, #131b26)",position:"relative",borderRadius:"8px",overflow:"hidden"},children:t.jsx("div",{style:{position:"absolute",bottom:0,left:0,width:"100%"},children:t.jsx(od,{})})}),Z$=""+new URL("04b823ff861e6aeecfb3e84631b82ae1fcdd2158-DmlQTGct.png",import.meta.url).href,G$=v.div`
  width: 100%;
  background: var(--Colors-Surface-Backgronud--02, #2A3649);
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.30);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;
`,K$=v.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`,q$=v.div`
  width: 32px;
  height: 4px;
  opacity: 0.80;
  background: var(--Border-border-divider-01, #4B596C);
  border-radius: 2px;
`,Y$=v.div`
  width: 100%;
  padding: 0 12px;
  min-height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`,X$=v.span`
  color: var(--Text-secondary, #D5E2F2);
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.20px;
`,Q$=v.div`
  width: 100%;
  padding: 16px 16px 32px 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,St=v.p`
  color: var(--Text-secondary, #D5E2F2);
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.20px;
  margin: 0;
`,cs=v(nt)`
  border-radius: 0;
`,J$=v.div`
  width: 100%;
  height: 16px;
  position: relative;
  margin-top: auto;
  
  &::after {
    content: '';
    width: 64px;
    height: 2px;
    background: rgba(255, 255, 255, 0.20);
    border-radius: 32px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 8px;
  }
`,Fc=v.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
  padding: 0;
`,gn=v.button`
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 0;
  width: 80px;
`,vn=v.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`,yn=v.span`
  color: var(--Text-secondary, #D5E2F2);
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.20px;
`,Nc=v.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`,I4=v.div`
  width: 100%;
  padding: 16px;
  background: var(--Common-Control-Base-normal, #364356);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Oc=v.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,_c=v.span`
  color: var(--Text-Primary, #ffffff);
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.20px;
`,jn=v.div`
  color: var(--Colors-Accent-Brand, #00B3E3);
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.20px;
  cursor: pointer;
  
  &:hover {
    opacity: 0.8;
  }
`,A4=v.div`
  height: 1px;
  width: 100%;
  background: var(--Border-border-divider-01, #4B596C);
`,Hc=v.div`
  width: calc(100% + 32px);
  margin-left: -16px;
  margin-right: -16px;
  margin-top: -16px; /* Pull up to touch the header if desired, or just fit */
  /* Actually, Content has 16px padding-top. 
     If we want the image to be immediately below header, we need to negate Content padding-top.
     Header min-height is 40px. 
  */
  margin-bottom: 16px;
  height: 160px;
  background: var(--Colors-Surface-Backgronud--02, #2A3649);
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;v.div`
  width: ${e=>e.width}px;
  height: ${e=>e.height}px;
  left: ${e=>e.left}px;
  top: ${e=>e.top}px;
  position: absolute;
  background: ${e=>e.bg};
  ${e=>e.rotate?`transform: rotate(${e.rotate}deg); transform-origin: top left;`:""}
`;v.div`
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  left: ${e=>e.left}px;
  top: ${e=>e.top}px;
  position: absolute;
  background: ${e=>e.bg};
  border-radius: 9999px;
  ${e=>e.rotate?`transform: rotate(${e.rotate}deg); transform-origin: top left;`:""}
  ${e=>e.blur?`filter: blur(${e.blur}px);`:""}
  ${e=>e.shadow?"box-shadow: 10px 10px 10px rgba(0,0,0,0.5);":""} /* Generic shadow */
`;const Gp=v.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
`,Mt=v.div`
  width: ${e=>e.active?"24px":"6px"};
  height: 6px;
  border-radius: ${e=>e.active?"8px":"50%"};
  background: var(--Button-primary-content-normal, white);
  opacity: ${e=>e.active?1:.4};
  transition: all 0.3s ease;
`,Wc=()=>t.jsx("div",{style:{width:"100%",height:"100%",overflow:"hidden"},children:t.jsx("img",{src:Z$,alt:"Top Art",style:{width:"100%",height:"100%",objectFit:"cover"}})}),yt=({title:e="Bottom sheets title",children:i,className:s,style:l,showTitleBar:c=!0,showCloseButton:p=!1,showBackButton:d=!1,showDragBar:f=!0,showGestureBar:x=!0,showInfoText:g=!0,infoText:m="Lorem ipsum dolor sit amet, consectetur adipiscing elit.",showButton:j=!1,buttonText:C="Button",onButtonClick:k,onBack:S,onClose:T,showSecondaryButton:P=!1,secondaryButtonText:R="Secondary Button",onSecondaryButtonClick:E})=>t.jsxs(G$,{className:s,style:l,children:[f&&t.jsx(K$,{children:t.jsx(q$,{})}),c&&t.jsxs(Y$,{children:[t.jsx("div",{style:{width:"24px",display:"flex",alignItems:"center"},children:d&&t.jsx(Ge,{name:"arrow-left",size:24,color:"white",style:{cursor:"pointer"},onClick:S})}),t.jsx("div",{style:{flex:1,display:"flex",justifyContent:"center"},children:t.jsx(X$,{children:e})}),t.jsx("div",{style:{width:"24px",display:"flex",alignItems:"center",justifyContent:"flex-end"},children:p&&t.jsx(Ge,{name:"close",size:24,color:"white",style:{cursor:"pointer"},onClick:T})})]}),t.jsxs(Q$,{children:[g&&t.jsx(St,{children:m}),i]}),x&&t.jsx(J$,{})]}),gt=v.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
`,vt=v.div`
  color: var(--Text-Assist, #B6C3D6);
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 400;
`,eL=()=>t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"40px",justifyContent:"flex-start",background:"transparent",padding:"20px",overflowX:"auto"},children:[t.jsxs(gt,{children:[t.jsx(vt,{children:"Default (All ON)"}),t.jsx(yt,{title:"Bottom sheets title",style:{width:"360px"},showTitleBar:!0,showDragBar:!0,showGestureBar:!0,children:t.jsxs(Fc,{children:[t.jsxs(gn,{children:[t.jsx(vn,{children:t.jsx(Ge,{name:"share",size:24,color:"white"})}),t.jsx(yn,{children:"Share"})]}),t.jsxs(gn,{children:[t.jsx(vn,{children:t.jsx(Ge,{name:"download",size:24,color:"white"})}),t.jsx(yn,{children:"Download"})]}),t.jsxs(gn,{children:[t.jsx(vn,{children:t.jsx(Ge,{name:"delete",size:24,color:"white"})}),t.jsx(yn,{children:"Delete"})]})]})})]}),t.jsxs(gt,{children:[t.jsx(vt,{children:"Figma: Close Button = ON ⭐"}),t.jsx(yt,{title:"Bottom sheets title",style:{width:"360px"},showCloseButton:!0,onClose:()=>console.log("Close clicked"),children:t.jsx(St,{children:"Close button is shown in the top-right corner."})})]}),t.jsxs(gt,{children:[t.jsx(vt,{children:"Figma: Back Button = ON ⭐"}),t.jsx(yt,{title:"Bottom sheets title",style:{width:"360px"},showBackButton:!0,onBack:()=>console.log("Back clicked"),children:t.jsx(St,{children:"Back button is shown in the top-left corner."})})]}),t.jsxs(gt,{children:[t.jsx(vt,{children:"Figma: Drag Bar = OFF"}),t.jsx(yt,{title:"Bottom sheets title",style:{width:"360px"},showDragBar:!1,children:t.jsx(St,{children:"Drag handle is hidden."})})]}),t.jsxs(gt,{children:[t.jsx(vt,{children:"Figma: Gesture Bar = OFF"}),t.jsx(yt,{title:"Bottom sheets title",style:{width:"360px"},showGestureBar:!1,children:t.jsx(St,{children:"Gesture bar at the bottom is hidden."})})]}),t.jsxs(gt,{children:[t.jsx(vt,{children:"Figma: Title Bar = OFF"}),t.jsx(yt,{style:{width:"360px"},showTitleBar:!1,children:t.jsx(St,{children:"The entire title bar is hidden, content starts right after drag handle."})})]}),t.jsxs(gt,{children:[t.jsx(vt,{children:"Combined: Back + Close Buttons"}),t.jsx(yt,{title:"Bottom sheets title",style:{width:"360px"},showBackButton:!0,showCloseButton:!0,onBack:()=>console.log("Back"),onClose:()=>console.log("Close"),children:t.jsx(St,{children:"Both back and close buttons are shown."})})]}),t.jsxs(gt,{children:[t.jsx(vt,{children:"Figma: Show Info Text = OFF ⭐"}),t.jsx(yt,{title:"Bottom sheets title",style:{width:"360px"},showInfoText:!1,children:t.jsxs(Nc,{children:[t.jsx(K,{variant:"outlined",size:"large",style:{width:"100%"},children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(Ge,{name:"phone",size:20,color:"white"}),t.jsx("span",{children:"Phone"})]})}),t.jsx(K,{variant:"outlined",size:"large",style:{width:"100%"},children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(Ge,{name:"library",size:20,color:"white"}),t.jsx("span",{children:"Other app"})]})})]})})]}),t.jsxs(gt,{children:[t.jsx(vt,{children:"Action icon"}),t.jsx(yt,{title:"Bottom sheets title",style:{width:"360px"},children:t.jsxs(Fc,{children:[t.jsxs(gn,{children:[t.jsx(vn,{children:t.jsx(Ge,{name:"share",size:24,color:"white"})}),t.jsx(yn,{children:"Share"})]}),t.jsxs(gn,{children:[t.jsx(vn,{children:t.jsx(Ge,{name:"download",size:24,color:"white"})}),t.jsx(yn,{children:"Download"})]}),t.jsxs(gn,{children:[t.jsx(vn,{children:t.jsx(Ge,{name:"delete",size:24,color:"white"})}),t.jsx(yn,{children:"Delete"})]})]})})]}),t.jsxs(gt,{children:[t.jsx(vt,{children:"Button"}),t.jsxs(yt,{title:"Bottom sheets title",style:{width:"360px"},children:[t.jsx(St,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),t.jsxs(Nc,{children:[t.jsx(K,{variant:"outlined",size:"large",style:{width:"100%"},children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(Ge,{name:"phone",size:20,color:"white"}),t.jsx("span",{children:"Phone"})]})}),t.jsx(K,{variant:"outlined",size:"large",style:{width:"100%"},children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[t.jsx(Ge,{name:"library",size:20,color:"white"}),t.jsx("span",{children:"Other app"})]})})]})]})]}),t.jsxs(gt,{children:[t.jsx(vt,{children:"Group - text"}),t.jsxs(yt,{title:"Bottom sheets title",style:{width:"360px"},children:[t.jsx(St,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),t.jsxs(I4,{children:[t.jsxs(Oc,{children:[t.jsx(_c,{children:"Subtitle"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[t.jsx(jn,{children:"Trigger word"}),t.jsx(jn,{children:"Trigger word"}),t.jsx(jn,{children:"Trigger word"})]})]}),t.jsx(A4,{}),t.jsxs(Oc,{children:[t.jsx(_c,{children:"Subtitle"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[t.jsx(jn,{children:"Trigger word"}),t.jsx(jn,{children:"Trigger word"}),t.jsx(jn,{children:"Trigger word"})]})]})]})]})]}),t.jsxs(gt,{children:[t.jsx(vt,{children:"Group - list item"}),t.jsxs(yt,{title:"Bottom sheets title",style:{width:"360px"},children:[t.jsx(St,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),t.jsxs(Hi,{children:[t.jsx(cs,{title:"List item",subtitle:"Supporting text",endIcon:t.jsx(dt,{checked:!0,onChange:()=>{}})}),t.jsx(Nt,{orientation:"horizontal",type:"type-01",thickness:1.5}),t.jsx(cs,{title:"List item",endIcon:t.jsx(dt,{checked:!1,onChange:()=>{}})}),t.jsx(Nt,{orientation:"horizontal",type:"type-01",thickness:1.5}),t.jsx(cs,{title:"List item",endIcon:t.jsx(dt,{checked:!1,onChange:()=>{}})}),t.jsx(Nt,{orientation:"horizontal",type:"type-01",thickness:1.5}),t.jsx(cs,{title:"List item",endIcon:t.jsx(dt,{checked:!1,onChange:()=>{}})}),t.jsx(Nt,{orientation:"horizontal",type:"type-01",thickness:1.5}),t.jsx(cs,{title:"List item",endIcon:t.jsx(dt,{checked:!1,onChange:()=>{}})})]}),t.jsx(K,{variant:"filled",size:"large",style:{width:"100%",marginTop:16},children:"Button"})]})]}),t.jsxs(gt,{children:[t.jsx(vt,{children:"Top Image"}),t.jsxs(yt,{title:"Bottom sheets title",style:{width:"360px"},children:[t.jsx(Hc,{children:t.jsx(Wc,{})}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[t.jsx("span",{style:{color:"white",fontSize:"18px",fontWeight:500,lineHeight:"28px"},children:"Title"}),t.jsx(St,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]}),t.jsx(K,{variant:"filled",size:"large",style:{width:"100%"},children:"Button"}),t.jsxs(Gp,{children:[t.jsx(Mt,{active:!0}),t.jsx(Mt,{}),t.jsx(Mt,{}),t.jsx(Mt,{}),t.jsx(Mt,{})]})]})]}),t.jsxs(gt,{children:[t.jsx(vt,{children:"Figma: Show Button = OFF (Top Image) ⭐"}),t.jsxs(yt,{title:"Bottom sheets title",style:{width:"360px"},showButton:!1,children:[t.jsx(Hc,{children:t.jsx(Wc,{})}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[t.jsx("span",{style:{color:"white",fontSize:"18px",fontWeight:500,lineHeight:"28px"},children:"Title"}),t.jsx(St,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]}),t.jsxs(Gp,{children:[t.jsx(Mt,{active:!0}),t.jsx(Mt,{}),t.jsx(Mt,{}),t.jsx(Mt,{}),t.jsx(Mt,{})]})]})]}),t.jsxs(gt,{children:[t.jsx(vt,{children:"Top Image and Text (NEW) ⭐"}),t.jsx(sc,{title:"Bottom sheets title",infoText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",showCloseButton:!0,showDragBar:!0,showGestureBar:!0,primaryButtonText:"Phone",secondaryButtonText:"Other app",onPrimaryButtonClick:()=>console.log("Phone clicked"),onSecondaryButtonClick:()=>console.log("Other app clicked"),onClose:()=>console.log("Close clicked")})]}),t.jsxs(gt,{children:[t.jsx(vt,{children:"Top Image and Text: Close Button = OFF"}),t.jsx(sc,{title:"Bottom sheets title",infoText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",showCloseButton:!1,primaryButtonText:"Phone",secondaryButtonText:"Other app"})]}),t.jsxs(gt,{children:[t.jsx(vt,{children:"Top Image and Text: Drag Bar = OFF"}),t.jsx(sc,{title:"Bottom sheets title",infoText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",showDragBar:!1,primaryButtonText:"Phone",secondaryButtonText:"Other app"})]}),t.jsxs(gt,{children:[t.jsx(vt,{children:"Top Image and Text: Gesture Bar = OFF"}),t.jsx(sc,{title:"Bottom sheets title",infoText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",showGestureBar:!1,primaryButtonText:"Phone",secondaryButtonText:"Other app"})]})]}),tL=()=>{const[e,i]=b.useState("action-icon"),[s,l]=b.useState("Bottom sheets title"),[c,p]=b.useState(!0),[d,f]=b.useState("item1"),x=()=>{switch(e){case"action-icon":return t.jsxs(Fc,{children:[t.jsxs(gn,{onClick:()=>console.log("Share clicked"),children:[t.jsx(vn,{children:t.jsx(Ge,{name:"share",size:24,color:"white"})}),t.jsx(yn,{children:"Share"})]}),t.jsxs(gn,{onClick:()=>console.log("Download clicked"),children:[t.jsx(vn,{children:t.jsx(Ge,{name:"download",size:24,color:"white"})}),t.jsx(yn,{children:"Download"})]}),t.jsxs(gn,{onClick:()=>console.log("Delete clicked"),children:[t.jsx(vn,{children:t.jsx(Ge,{name:"delete",size:24,color:"white"})}),t.jsx(yn,{children:"Delete"})]})]});case"button":return t.jsxs(t.Fragment,{children:[c&&t.jsx(St,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),t.jsxs(Nc,{children:[t.jsxs(K,{variant:"outlined",size:"large",style:{width:"100%"},onClick:()=>console.log("Phone clicked"),children:[t.jsx(Ge,{name:"phone",size:20,color:"currentColor"}),"Phone"]}),t.jsxs(K,{variant:"outlined",size:"large",style:{width:"100%"},onClick:()=>console.log("Other app clicked"),children:[t.jsx(Ge,{name:"library",size:20,color:"currentColor"}),"Other app"]})]})]});case"group-text":return t.jsxs(t.Fragment,{children:[c&&t.jsx(St,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),t.jsxs(I4,{children:[t.jsxs(Oc,{children:[t.jsx(_c,{children:"Subtitle"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[t.jsx(jn,{onClick:()=>console.log("Trigger 1"),children:"Trigger word"}),t.jsx(jn,{onClick:()=>console.log("Trigger 2"),children:"Trigger word"}),t.jsx(jn,{onClick:()=>console.log("Trigger 3"),children:"Trigger word"})]})]}),t.jsx(A4,{}),t.jsxs(Oc,{children:[t.jsx(_c,{children:"Subtitle"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[t.jsx(jn,{onClick:()=>console.log("Trigger 4"),children:"Trigger word"}),t.jsx(jn,{onClick:()=>console.log("Trigger 5"),children:"Trigger word"}),t.jsx(jn,{onClick:()=>console.log("Trigger 6"),children:"Trigger word"})]})]})]})]});case"group-list-item":return t.jsxs(t.Fragment,{children:[c&&t.jsx(St,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),t.jsx("div",{style:{width:"100%",background:"var(--Common-Control-Base-normal, #364356)",borderRadius:"15px",overflow:"hidden",display:"flex",flexDirection:"column"},children:[1,2,3,4,5].map((g,m,j)=>t.jsxs(en.Fragment,{children:[t.jsx(cs,{title:"List item",subtitle:g===1?"Supporting text":void 0,endIcon:t.jsx(dt,{checked:d===`item${g}`,onChange:()=>f(`item${g}`)}),onClick:()=>f(`item${g}`)}),m<j.length-1&&t.jsx(Nt,{orientation:"horizontal",type:"type-01",thickness:1.5})]},`item${g}`))}),t.jsx(K,{variant:"filled",size:"large",style:{width:"100%",marginTop:16},children:"Button"})]});case"top-image":return t.jsxs(t.Fragment,{children:[t.jsx(Hc,{children:t.jsx(Wc,{})}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[t.jsx("span",{style:{color:"white",fontSize:"18px",fontWeight:500,lineHeight:"28px"},children:"Title"}),c&&t.jsx(St,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]}),t.jsx(K,{variant:"filled",size:"large",style:{width:"100%"},children:"Button"}),t.jsxs(Gp,{children:[t.jsx(Mt,{active:!0}),t.jsx(Mt,{}),t.jsx(Mt,{}),t.jsx(Mt,{}),t.jsx(Mt,{})]})]})}};return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"100%"},children:[t.jsxs("div",{style:{display:"flex",gap:"24px",marginBottom:"8px",flexWrap:"wrap",flexDirection:"column"},children:[t.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[t.jsx("span",{style:{color:"var(--Text-Secondary, #d5e2f2)",fontSize:"14px"},children:"Variant:"}),t.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[t.jsx(Cn,{label:"Action icon",active:e==="action-icon",size:"small",onClick:()=>i("action-icon")}),t.jsx(Cn,{label:"Button",active:e==="button",size:"small",onClick:()=>i("button")}),t.jsx(Cn,{label:"Group - text",active:e==="group-text",size:"small",onClick:()=>i("group-text")}),t.jsx(Cn,{label:"Group - list item",active:e==="group-list-item",size:"small",onClick:()=>i("group-list-item")}),t.jsx(Cn,{label:"Top Image",active:e==="top-image",size:"small",onClick:()=>i("top-image")})]})]}),t.jsx("div",{style:{display:"flex",gap:"24px",flexWrap:"wrap"},children:t.jsxs("div",{style:{color:"var(--Text-Secondary, #d5e2f2)",display:"flex",alignItems:"center",gap:"8px",fontSize:"14px",cursor:"pointer"},onClick:()=>p(!c),children:[t.jsx("div",{onClick:g=>g.stopPropagation(),children:t.jsx(H,{checked:c,onChange:p,shape:"square",size:20})}),"Show Description"]})})]}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",background:"var(--Colors-Surface-Backgronud--01, #131b26)",borderRadius:"16px",padding:"24px",width:"100%",alignItems:"center",justifyContent:"center",minHeight:"600px"},children:t.jsx(yt,{title:s,style:{width:"360px"},children:x()})})]})},nL=()=>t.jsx("div",{style:{width:"100%",maxWidth:"300px",transform:"scale(0.9)"},children:t.jsx(yt,{title:"Action icon",children:t.jsxs(Fc,{children:[t.jsxs(gn,{children:[t.jsx(vn,{children:t.jsx(Ge,{name:"share",size:24,color:"white"})}),t.jsx(yn,{children:"Share"})]}),t.jsxs(gn,{children:[t.jsx(vn,{children:t.jsx(Ge,{name:"download",size:24,color:"white"})}),t.jsx(yn,{children:"Download"})]}),t.jsxs(gn,{children:[t.jsx(vn,{children:t.jsx(Ge,{name:"delete",size:24,color:"white"})}),t.jsx(yn,{children:"Delete"})]})]})})}),sc=({title:e="Bottom sheets title",infoText:i="Lorem ipsum dolor sit amet, consectetur adipiscing elit.",showCloseButton:s=!0,showDragBar:l=!0,showGestureBar:c=!0,primaryButtonText:p="Phone",secondaryButtonText:d="Other app",onPrimaryButtonClick:f,onSecondaryButtonClick:x,onClose:g})=>t.jsxs(yt,{title:e,style:{width:"360px"},showCloseButton:s,showDragBar:l,showGestureBar:c,showInfoText:!1,onClose:g,children:[t.jsx(Hc,{children:t.jsx(Wc,{})}),t.jsx(St,{style:{padding:"0 8px"},children:i}),t.jsxs(Nc,{children:[t.jsx(K,{variant:"filled",size:"large",style:{width:"100%"},onClick:f,children:p}),t.jsx(K,{variant:"outlined",size:"large",style:{width:"100%"},onClick:x,children:d})]})]}),iL=v.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${e=>e.$height||"auto"};
  max-height: ${e=>e.$maxHeight||"none"};
  overflow: hidden; /* Ensure thumb doesn't overflow */
`,rL=v.div`
  flex: 1;
  overflow-y: auto;
  padding-right: 8px; /* Content indented to leave room for custom scrollbar */
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none; /* Firefox */
  
  &::-webkit-scrollbar {
    display: none; /* Chrome/Safari */
  }
`,sL=v.div`
  position: absolute;
  right: 2px; /* Positioned at the edge */
  top: 0;
  width: 4px;
  background-color: var(--Common-Control-Base-normal, #364356);
  border-radius: 9999px;
  opacity: ${e=>e.$visible?1:0};
  transition: opacity 0.3s ease-in-out;
  pointer-events: none;
  z-index: 20; /* High z-index to be above masks */
`,oL=v.div`
  position: absolute;
  left: 0;
  width: 100%;
  pointer-events: none;
  z-index: 10; /* Above content, below thumb */
`,lL=v(oL)`
  bottom: 0;
  height: 40px;
  background: linear-gradient(to top, #131B26 0%, rgba(19, 27, 38, 0) 100%);
`,ap=({children:e,maxHeight:i,height:s,className:l,style:c,onScroll:p,showBottomMask:d=!1})=>{const[f,x]=b.useState(!1),g=b.useRef(null),m=b.useRef(null),j=b.useRef(null),C=()=>{if(!m.current||!j.current)return;const{scrollTop:S,scrollHeight:T,clientHeight:P}=m.current,R=P/T;if(R>=1){j.current.style.display="none";return}else j.current.style.display="block";const E=Math.max(20,R*P),M=T-P,F=P-E,O=M>0?S/M*F:0;j.current.style.height=`${E}px`,j.current.style.transform=`translateY(${O}px)`};b.useEffect(()=>()=>{g.current&&clearTimeout(g.current)},[]),b.useLayoutEffect(()=>{C();const S=new ResizeObserver(()=>{C()});return m.current&&(S.observe(m.current),m.current.firstElementChild&&S.observe(m.current.firstElementChild)),()=>S.disconnect()});const k=S=>{C(),x(!0),g.current&&clearTimeout(g.current),g.current=setTimeout(()=>{x(!1)},1e3),p&&p(S)};return t.jsxs(iL,{className:l,$maxHeight:i,$height:s,style:c,children:[t.jsx(rL,{ref:m,onScroll:k,children:e}),d&&t.jsx(lL,{}),t.jsx(sL,{ref:j,$visible:f})]})},aL=v.div`
  width: 100%;
  height: 100%;
  background: var(--Colors-Surface-Backgronud--01, #131b26);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`,cL=v.div`
  flex: 1;
  position: relative;
  overflow: hidden;
`,cp=v(_i.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,dL=v(_i.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  padding: 24px;
`,uL=v(_i.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 100;
  padding: 0;
`,pL=v.h2`
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0.2px;
  color: var(--Text-Primary, #ffffff);
  margin-bottom: 16px;
  margin-top: 0;
`,fL=v.h3`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.2px;
  color: var(--Text-Primary, #ffffff);
  margin: 0 0 8px 0;
`,di=v.p`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.2px;
  color: var(--Text-Secondary, #d5e2f2);
  margin: 0 0 16px 0;
`,hL=v.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 24px;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.2px;
  color: var(--Text-Secondary, #d5e2f2);
`,xL=()=>{const[e,i]=b.useState("home"),[s,l]=b.useState("vive"),[c,p]=b.useState(!1),[d,f]=b.useState(!1),[x,g]=b.useState(!0),m={initial:{x:"100%",opacity:1},animate:{x:0,opacity:1,transition:{duration:.2,ease:"easeOut"}},exit:{opacity:0,transition:{duration:.15,ease:"easeOut"}}},j={initial:{opacity:0},animate:{opacity:1,transition:{duration:.3,ease:"easeOut"}},exit:{opacity:0,transition:{duration:.15,ease:"easeOut"}}},C={initial:{opacity:1,height:"auto",marginBottom:0},exit:{opacity:0,height:0,marginBottom:0,transition:{duration:.2,ease:"easeOut"}}},k={initial:{y:"100%"},animate:{y:0,transition:{duration:.2,ease:"easeOut"}},exit:{y:"100%",transition:{duration:.15,ease:"easeOut"}}},S=(T,P)=>{P.offset.y>100&&f(!1)};return t.jsx("div",{style:{width:"100%",display:"flex",justifyContent:"center"},children:t.jsx("div",{style:{width:"360px",height:"800px",borderRadius:"25px",overflow:"hidden",position:"relative",boxShadow:"0 0 20px rgba(0,0,0,0.5)",border:"1px solid rgba(255,255,255,0.1)"},children:t.jsxs(aL,{children:[t.jsx(cL,{children:t.jsxs(ls,{initial:!1,mode:"wait",children:[e==="home"&&t.jsxs(cp,{variants:j,animate:"animate",exit:"exit",style:{padding:0},children:[t.jsx(Bb,{batteryLevel:100}),t.jsx(ap,{style:{flex:1},children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"8px 16px 80px 16px"},children:[t.jsxs(Hi,{children:[t.jsx(nt,{title:"Go to Details",subtitle:"Click to see transition",endIcon:t.jsx(Oe,{}),onClick:()=>i("details")}),t.jsx(Nt,{orientation:"horizontal",type:"type-01",thickness:1}),t.jsx(nt,{title:"Open Dialog",subtitle:"Click to see dialog transition",action:t.jsx(K,{variant:"filled-secondary",size:"small",onClick:()=>p(!0),children:"Open"}),variant:"action-stacked"}),t.jsx(Nt,{orientation:"horizontal",type:"type-01",thickness:1}),t.jsx(nt,{title:"Open Bottom Sheet",subtitle:"Click to see sheet transition",action:t.jsx(K,{variant:"filled-secondary",size:"small",onClick:()=>f(!0),children:"Open"}),variant:"action-stacked"})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[t.jsx(Gn,{title:"Delete Animation",size:"S",action:x?void 0:t.jsx(K,{variant:"text",size:"small",onClick:()=>g(!0),children:"Reset"})}),t.jsx(Hi,{children:t.jsx(ls,{children:x&&t.jsx(_i.div,{variants:C,initial:"initial",exit:"exit",style:{overflow:"hidden"},children:t.jsx(nt,{title:"Deletable Item",subtitle:"Click icon to delete",endIcon:t.jsx(M3,{size:24,color:"var(--Text-Secondary)"}),onClick:()=>g(!1)})},"delete-card")})})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[t.jsx(Gn,{title:"All other components",size:"S"}),t.jsx(Hi,{children:t.jsx(nt,{title:"Cards",subtitle:"Component Demo",endIcon:t.jsx(Oe,{}),onClick:()=>i("cards")})})]})]})})]},"home"),e==="details"&&t.jsxs(cp,{variants:m,initial:"initial",animate:"animate",exit:"exit",style:{padding:0},children:[t.jsx(bm,{title:"Details",showBack:!0,onBack:()=>i("home"),showMore:!0}),t.jsx(ap,{style:{flex:1},children:t.jsxs("div",{style:{color:"var(--Text-Secondary, #d5e2f2)",padding:"8px 24px 48px 24px"},children:[t.jsx(pL,{style:{marginBottom:"8px"},children:"Details Page"}),t.jsx(di,{children:'This page demonstrates the "Second Layer Transition" pattern. The content below is extended to demonstrate the scrolling behavior within the layout system.'}),t.jsxs(hL,{children:[t.jsx("div",{children:"• Enter: Move in from right (0.2s)"}),t.jsx("div",{children:"• Exit: Dissolve (0.15s)"})]}),t.jsx(fL,{children:"Design Principles"}),t.jsxs(di,{children:[t.jsx("strong",{children:"1. Composition Over Modification"}),t.jsx("br",{}),"Never modify core components. Create new components that work alongside them."]}),t.jsxs(di,{children:[t.jsx("strong",{children:"2. Consistency First"}),t.jsx("br",{}),"Use design tokens everywhere. No hard-coded values."]}),t.jsxs(di,{children:[t.jsx("strong",{children:"3. Mobile 360px First"}),t.jsx("br",{}),"Optimized for 360px mobile screens with touch-friendly interactions, but responsive across different devices."]}),t.jsxs(di,{children:[t.jsx("strong",{children:"4. Dark Theme Native"}),t.jsx("br",{}),"Built for dark mode aesthetics with gradients and modern UI elements."]}),t.jsxs(di,{children:[t.jsx("strong",{children:"5. Omni Components Default"}),t.jsx("br",{}),"All mobile UI elements must be built using components from /components/Omni whenever possible."]}),t.jsx(di,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}),t.jsx(di,{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})})]},"details"),e==="cards"&&t.jsxs(cp,{variants:m,initial:"initial",animate:"animate",exit:"exit",style:{padding:0},children:[t.jsx(bm,{title:"Cards",showBack:!0,onBack:()=>i("home")}),t.jsx(ap,{style:{flex:1},children:t.jsx("div",{style:{padding:"8px 0 48px 0"},children:t.jsx(D4,{})})})]},"cards")]})}),t.jsx(ls,{children:e==="home"&&!d&&t.jsx(_i.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},style:{position:"absolute",bottom:0,left:0,width:"100%",zIndex:90},children:t.jsx(E4,{activeTab:s,onTabChange:l,style:{position:"static",transform:"none",maxWidth:"100%"}})})}),e!=="home"&&!d&&t.jsx(od,{style:{position:"absolute",bottom:0,left:0,width:"100%",zIndex:9999,pointerEvents:"none"}}),t.jsx(ls,{children:c&&t.jsx(dL,{initial:{opacity:0},animate:{opacity:1,transition:{duration:.2,ease:"easeOut"}},exit:{opacity:0,transition:{duration:.15,ease:"easeOut"}},onClick:()=>p(!1),children:t.jsx("div",{onClick:T=>T.stopPropagation(),children:t.jsx(Fi,{title:"Example Dialog",description:"This dialog demonstrates the enter/exit transition defined in the guidelines.",confirmText:"OK",cancelText:"Cancel",onConfirm:()=>p(!1),onCancel:()=>p(!1)})})})}),t.jsx(ls,{children:d&&t.jsx(uL,{initial:{opacity:0},animate:{opacity:1,transition:{duration:.2,ease:"easeOut"}},exit:{opacity:0,transition:{duration:.15,ease:"easeOut"}},onClick:()=>f(!1),children:t.jsx(_i.div,{variants:k,initial:"initial",animate:"animate",exit:"exit",drag:"y",dragConstraints:{top:0,bottom:0},dragElastic:{top:0,bottom:.5},onDragEnd:S,onClick:T=>T.stopPropagation(),style:{width:"100%"},children:t.jsx(yt,{title:"Example Sheet",style:{width:"100%"},children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[t.jsxs(di,{children:["This bottom sheet demonstrates the transition pattern:",t.jsx("br",{}),"• Enter: Slide up (0.2s)",t.jsx("br",{}),"• Exit: Slide down (0.15s)",t.jsx("br",{}),"• Replaces Gesture Bar",t.jsx("br",{}),"• Drag down to close"]}),t.jsx(K,{variant:"filled",size:"large",onClick:()=>f(!1),style:{width:"100%"},children:"Close"})]})})})})})]})})})},Kp=["App Bars & System","Buttons","List","Menu","Tags","Toggles","All other components","Playground"],mL=["vive","gallery","explore","settings","glasses","share","download","delete","hand-point","headset","update","wifi","arrow-right","open","account","cloud-upload","language","information","arrow-left","reset","power-off","round-check","vive-logo","more","close","home","info","object","emoji","pause","play","stop","record","delete-outline","menu","reorder","convert","switch","back","upload","retry","loading","filter-with-search","font","zoom","create-solid","arrow-down","arrow-up","check","plus","minimize","disabled","round-back","round-plus","round-minus","round-check-outline","clear-all","close-round","filter","sort","favorite-disable","favorite-enable","rating-disable","rating-enable","search"],gL=["ai","memory","security"],vL=()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",width:"100%"},children:[t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(100px, 1fr))",gap:"24px",width:"100%"},children:mL.map(e=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"12px"},children:[t.jsx("div",{style:{width:"72px",height:"72px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%",background:"#0e141d"},children:t.jsx(Ge,{name:e,size:40,color:"white"})}),t.jsx("span",{style:{color:"#B6C3D6",fontSize:"12px",textAlign:"center",fontFamily:"Roboto, sans-serif"},children:e})]},e))}),t.jsx("div",{style:{height:"1px",background:"rgba(255,255,255,0.1)",width:"100%"}}),t.jsxs("div",{children:[t.jsx("h3",{style:{color:"var(--Text-Assist, #b6c3d6)",fontSize:"14px",fontWeight:500,marginBottom:"16px",textTransform:"uppercase",letterSpacing:"0.2px",fontFamily:"Roboto, sans-serif"},children:"Dual Color Icons"}),t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(100px, 1fr))",gap:"24px",width:"100%"},children:gL.map(e=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"12px"},children:[t.jsx("div",{style:{width:"72px",height:"72px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%",background:"#0e141d"},children:t.jsx(Ge,{name:e,size:40,color:"white"})}),t.jsx("span",{style:{color:"#B6C3D6",fontSize:"12px",textAlign:"center",fontFamily:"Roboto, sans-serif"},children:e})]},e))})]})]}),yL=()=>{const[e,i]=b.useState(!1),[s,l]=b.useState(!1),[c,p]=b.useState(!1),[d,f]=b.useState(!1),[x,g]=b.useState(!0);return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"100%"},children:[t.jsxs("div",{style:{display:"flex",gap:"24px",marginBottom:"8px",flexWrap:"wrap"},children:[t.jsxs("div",{style:{color:"var(--Text-Secondary, #d5e2f2)",display:"flex",alignItems:"center",gap:"8px",fontSize:"14px",cursor:"pointer"},onClick:()=>p(!c),children:[t.jsx("div",{onClick:m=>m.stopPropagation(),children:t.jsx(H,{checked:c,onChange:p,shape:"square",size:20})}),"Disabled"]}),t.jsxs("div",{style:{color:"var(--Text-Secondary, #d5e2f2)",display:"flex",alignItems:"center",gap:"8px",fontSize:"14px",cursor:"pointer"},onClick:()=>f(!d),children:[t.jsx("div",{onClick:m=>m.stopPropagation(),children:t.jsx(H,{checked:d,onChange:f,shape:"square",size:20})}),"Error"]}),t.jsxs("div",{style:{color:"var(--Text-Secondary, #d5e2f2)",display:"flex",alignItems:"center",gap:"8px",fontSize:"14px",cursor:"pointer"},onClick:()=>g(!x),children:[t.jsx("div",{onClick:m=>m.stopPropagation(),children:t.jsx(H,{checked:x,onChange:g,shape:"square",size:20})}),"Show Label"]})]}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",background:"var(--Colors-Surface-Backgronud--01, #131b26)",borderRadius:"16px",padding:"24px",width:"100%",alignItems:"center"},children:t.jsxs("div",{style:{display:"flex",gap:"48px",alignItems:"center",flexWrap:"wrap",justifyContent:"center"},children:[t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"16px"},children:[t.jsx("span",{style:{color:"var(--Text-Assist, #B6C3D6)",fontSize:"12px"},children:"Default (Square)"}),t.jsx(H,{checked:e,onChange:i,disabled:c,error:d,shape:"square",label:x?"Items":void 0})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"16px"},children:[t.jsx("span",{style:{color:"var(--Text-Assist, #B6C3D6)",fontSize:"12px"},children:"Rounded"}),t.jsx(H,{checked:s,onChange:l,disabled:c,error:d,shape:"rounded",label:x?"Items":void 0})]})]})})]})},jL=()=>{const[e,i]=b.useState(""),[s,l]=b.useState(""),[c,p]=b.useState(!1),[d,f]=b.useState(!1),[x,g]=b.useState(!1);return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"100%"},children:[t.jsxs("div",{style:{display:"flex",gap:"24px",marginBottom:"8px",flexWrap:"wrap"},children:[t.jsxs("div",{style:{color:"var(--Text-Secondary, #d5e2f2)",display:"flex",alignItems:"center",gap:"8px",fontSize:"14px",cursor:"pointer"},onClick:()=>p(!c),children:[t.jsx("div",{onClick:m=>m.stopPropagation(),children:t.jsx(H,{checked:c,onChange:p,shape:"square",size:20})}),"Show Title"]}),t.jsxs("div",{style:{color:"var(--Text-Secondary, #d5e2f2)",display:"flex",alignItems:"center",gap:"8px",fontSize:"14px",cursor:"pointer"},onClick:()=>f(!d),children:[t.jsx("div",{onClick:m=>m.stopPropagation(),children:t.jsx(H,{checked:d,onChange:f,shape:"square",size:20})}),"Show Support Text"]}),t.jsxs("div",{style:{color:"var(--Text-Secondary, #d5e2f2)",display:"flex",alignItems:"center",gap:"8px",fontSize:"14px",cursor:"pointer"},onClick:()=>g(!x),children:[t.jsx("div",{onClick:m=>m.stopPropagation(),children:t.jsx(H,{checked:x,onChange:g,shape:"square",size:20})}),"Show Error message"]})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",background:"var(--Colors-Surface-Backgronud--01, #131b26)",borderRadius:"16px",padding:"24px",width:"100%",alignItems:"center"},children:[t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",width:"100%",maxWidth:"300px"},children:[t.jsx("span",{style:{fontFamily:"Roboto, sans-serif",fontSize:"12px",fontWeight:400,lineHeight:"16px",letterSpacing:"0.22px",color:"var(--Text-Assist, #B6C3D6)"},children:"Default"}),t.jsx(et,{value:e,onChange:i,placeholder:"Type something...",fullWidth:!0,shape:"default",title:c?"Title":void 0,supportText:d?"Support text":void 0,error:x?"Error message":void 0})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",width:"100%",maxWidth:"300px"},children:[t.jsx("span",{style:{fontFamily:"Roboto, sans-serif",fontSize:"12px",fontWeight:400,lineHeight:"16px",letterSpacing:"0.22px",color:"var(--Text-Assist, #B6C3D6)"},children:"Round"}),t.jsx(et,{value:s,onChange:l,placeholder:"Type something...",fullWidth:!0,shape:"round",title:c?"Title":void 0,supportText:d?"Support text":void 0,error:x?"Error message":void 0})]})]})]})},CL=()=>{const[e,i]=b.useState(""),[s,l]=b.useState(""),[c,p]=b.useState(!1),[d,f]=b.useState(!1),[x,g]=b.useState(!1),[m,j]=b.useState(!1),[C,k]=b.useState(!1),S=[{label:"List item 1",value:"item1",icon:x?t.jsx(Ee,{}):void 0},{label:"List item 2",value:"item2",icon:x?t.jsx(Ee,{}):void 0},{label:"List item 3",value:"item3",icon:x?t.jsx(Ee,{}):void 0}];return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"100%"},children:[t.jsxs("div",{style:{display:"flex",gap:"24px",marginBottom:"8px",flexWrap:"wrap"},children:[t.jsxs("div",{style:{color:"var(--Text-Secondary, #d5e2f2)",display:"flex",alignItems:"center",gap:"8px",fontSize:"14px",cursor:"pointer"},onClick:()=>p(!c),children:[t.jsx("div",{onClick:T=>T.stopPropagation(),children:t.jsx(H,{checked:c,onChange:p,shape:"square",size:20})}),"Disabled"]}),t.jsxs("div",{style:{color:"var(--Text-Secondary, #d5e2f2)",display:"flex",alignItems:"center",gap:"8px",fontSize:"14px",cursor:"pointer"},onClick:()=>f(!d),children:[t.jsx("div",{onClick:T=>T.stopPropagation(),children:t.jsx(H,{checked:d,onChange:f,shape:"square",size:20})}),"Error"]}),t.jsxs("div",{style:{color:"var(--Text-Secondary, #d5e2f2)",display:"flex",alignItems:"center",gap:"8px",fontSize:"14px",cursor:"pointer"},onClick:()=>g(!x),children:[t.jsx("div",{onClick:T=>T.stopPropagation(),children:t.jsx(H,{checked:x,onChange:g,shape:"square",size:20})}),"Show Item Icons"]}),t.jsxs("div",{style:{color:"var(--Text-Secondary, #d5e2f2)",display:"flex",alignItems:"center",gap:"8px",fontSize:"14px",cursor:"pointer"},onClick:()=>j(!m),children:[t.jsx("div",{onClick:T=>T.stopPropagation(),children:t.jsx(H,{checked:m,onChange:j,shape:"square",size:20})}),"Show Title"]}),t.jsxs("div",{style:{color:"var(--Text-Secondary, #d5e2f2)",display:"flex",alignItems:"center",gap:"8px",fontSize:"14px",cursor:"pointer"},onClick:()=>k(!C),children:[t.jsx("div",{onClick:T=>T.stopPropagation(),children:t.jsx(H,{checked:C,onChange:k,shape:"square",size:20})}),"Show Support Text"]})]}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",background:"var(--Colors-Surface-Backgronud--01, #131b26)",borderRadius:"16px",padding:"24px",width:"100%",alignItems:"center",justifyContent:"center",minHeight:"220px"},children:t.jsxs("div",{style:{width:"100%",display:"flex",justifyContent:"space-evenly",alignItems:"flex-start"},children:[t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"center",width:"180px"},children:[t.jsx("span",{style:{fontFamily:"Roboto, sans-serif",fontSize:"14px",color:"var(--Text-Assist, #B6C3D6)"},children:"Default"}),t.jsx(Rt,{options:S,value:e,onChange:i,disabled:c,error:d,placeholder:"List item",variant:"text",title:m?"Title":void 0,supportText:C?"Support text":void 0})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"center"},children:[t.jsx("span",{style:{fontFamily:"Roboto, sans-serif",fontSize:"14px",color:"var(--Text-Assist, #B6C3D6)"},children:"Pinned"}),t.jsx(Rt,{options:S,value:s,onChange:l,disabled:c,placeholder:"List item",variant:"icon"})]})]})})]})},wL=()=>{const[e,i]=b.useState(""),s=[{label:"List item 1",value:"item1"},{label:"List item 2",value:"item2"},{label:"List item 3",value:"item3"}];return t.jsx("div",{style:{width:"100%",maxWidth:"200px"},children:t.jsx(Rt,{options:s,value:e,onChange:i,placeholder:"List item",variant:"text"})})},bL=()=>{const[e,i]=b.useState("");return t.jsx("div",{style:{width:"100%",maxWidth:"300px"},children:t.jsx(et,{value:e,onChange:i,placeholder:"Type something...",fullWidth:!0,shape:"default"})})},SL=()=>{const[e,i]=b.useState("gallery");return t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",borderRadius:"16px",padding:"24px",width:"100%",alignItems:"center"},children:t.jsx("div",{style:{position:"relative",height:"100px",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:t.jsx(E4,{activeTab:e,onTabChange:i,style:{position:"relative",transform:"none",left:"auto",bottom:"auto"}})})})},kL=()=>{const[e,i]=b.useState(!0),[s,l]=b.useState(!1),[c,p]=b.useState(!1),[d,f]=b.useState(!0);return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"100%"},children:[t.jsxs("div",{style:{display:"flex",gap:"24px",marginBottom:"8px",flexWrap:"wrap"},children:[t.jsxs("div",{style:{color:"var(--Text-Secondary, #d5e2f2)",display:"flex",alignItems:"center",gap:"8px",fontSize:"14px",cursor:"pointer"},onClick:()=>f(!d),children:[t.jsx("div",{onClick:x=>x.stopPropagation(),children:t.jsx(H,{checked:d,onChange:f,shape:"square",size:20})}),"Show Icon"]}),t.jsxs("div",{style:{color:"var(--Text-Secondary, #d5e2f2)",display:"flex",alignItems:"center",gap:"8px",fontSize:"14px",cursor:"pointer"},onClick:()=>i(!e),children:[t.jsx("div",{onClick:x=>x.stopPropagation(),children:t.jsx(H,{checked:e,onChange:i,shape:"square",size:20})}),"Show Caption"]}),t.jsxs("div",{style:{color:"var(--Text-Secondary, #d5e2f2)",display:"flex",alignItems:"center",gap:"8px",fontSize:"14px",cursor:"pointer"},onClick:()=>l(!s),children:[t.jsx("div",{onClick:x=>x.stopPropagation(),children:t.jsx(H,{checked:s,onChange:l,shape:"square",size:20})}),"Show Footer"]}),t.jsxs("div",{style:{color:"var(--Text-Secondary, #d5e2f2)",display:"flex",alignItems:"center",gap:"8px",fontSize:"14px",cursor:"pointer"},onClick:()=>p(!c),children:[t.jsx("div",{onClick:x=>x.stopPropagation(),children:t.jsx(H,{checked:c,onChange:p,shape:"square",size:20})}),"Show Header Checkbox"]})]}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",background:"var(--Colors-Surface-Backgronud--01, #131b26)",borderRadius:"16px",padding:"24px",width:"100%",alignItems:"center"},children:t.jsx("div",{style:{width:"100%",maxWidth:"328px"},children:t.jsx(Xo,{title:"Card title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare sed tincidunt lorem condimentum pellentesque.",icon:d?t.jsx(Yo,{}):void 0,showCaption:e,caption:"Caption texts",showFooter:s,footerInfo:"Aenean eu tellus non neque semper blandit vitae ac dolor.",footerAction:t.jsx(K,{variant:"outlined",size:"small",children:"Button"}),headerAction:c?t.jsx(H,{checked:!0,shape:"rounded",size:20}):void 0})})})]})},TL=()=>t.jsx("div",{style:{width:"100%",maxWidth:"300px"},children:t.jsx(Xo,{title:"Card title",icon:t.jsx(Yo,{}),description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",showCaption:!0})}),$L=()=>{const[e,i]=b.useState("horizontal"),[s,l]=b.useState("type-01"),[c,p]=b.useState(1);return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"100%"},children:[t.jsxs("div",{style:{display:"flex",gap:"24px",marginBottom:"8px",flexWrap:"wrap"},children:[t.jsxs("div",{style:{color:"var(--Text-Secondary, #d5e2f2)",display:"flex",alignItems:"center",gap:"8px",fontSize:"14px",cursor:"pointer"},onClick:()=>i(e==="horizontal"?"vertical":"horizontal"),children:[t.jsx("div",{onClick:d=>d.stopPropagation(),children:t.jsx(H,{checked:e==="vertical",onChange:d=>i(d?"vertical":"horizontal"),shape:"square",size:20})}),"Vertical"]}),t.jsxs("div",{style:{color:"var(--Text-Secondary, #d5e2f2)",display:"flex",alignItems:"center",gap:"8px",fontSize:"14px",cursor:"pointer"},onClick:()=>l(s==="type-01"?"type-02":"type-01"),children:[t.jsx("div",{onClick:d=>d.stopPropagation(),children:t.jsx(H,{checked:s==="type-02",onChange:d=>l(d?"type-02":"type-01"),shape:"square",size:20})}),"Type 02 (Lighter)"]})]}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",background:"var(--Colors-Surface-Backgronud--01, #131b26)",borderRadius:"16px",padding:"24px",width:"100%",alignItems:"center",justifyContent:"center",minHeight:"200px"},children:e==="horizontal"?t.jsx("div",{style:{width:"100%",maxWidth:"300px"},children:t.jsx(zn,{orientation:"horizontal",type:s,thickness:c})}):t.jsx("div",{style:{height:"150px"},children:t.jsx(zn,{orientation:"vertical",type:s,thickness:c})})})]})},LL=()=>t.jsx("div",{style:{width:"100%",maxWidth:"360px",background:"transparent",padding:"20px",borderRadius:"12px"},children:t.jsx(VS,{})}),vr=[{id:"icons-grid",title:"Icons",category:"System",component:vL,description:"System icons used throughout the application."},{id:"appbar",title:"App Bar",category:"App Bars & System",component:Eb,interactiveComponent:Db,previewComponent:Rb,description:"Navigation and status bars for top of the screen."},{id:"battery-level",title:"Glasses Status",category:"App Bars & System",component:jk,description:"Glasses status indicators including battery level and connection status."},{id:"status-bar",title:"Status Bar",category:"App Bars & System",component:LL,description:"System status bar."},{id:"gesture-bar",title:"Gesture Bar",category:"App Bars & System",component:H$,interactiveComponent:W$,previewComponent:U$,description:"Bottom gesture indicator bar."},{id:"buttons-small",title:"Buttons",category:"Buttons",component:ub,interactiveComponent:cb,previewComponent:db,description:"Small buttons in various states: Filled, Outlined, Text."},{id:"buttons-icon-combined",title:"Icon Buttons",category:"Buttons",component:vb,interactiveComponent:yb,previewComponent:jb,description:"Icon buttons in various states: Filled, Outlined, Text."},{id:"list-group",title:"List Group",category:"List",component:ok,interactiveComponent:ik,previewComponent:rk,description:"Grouped list items with dividers and container styling."},{id:"list-item",title:"List Item",category:"List",component:tk,interactiveComponent:QS,previewComponent:JS,description:"List items with different layouts and states."},{id:"dropdown",title:"Dropdown",category:"Menu",component:zw,interactiveComponent:CL,previewComponent:wL,description:"Dropdown menu with selection."},{id:"menu-item",title:"Menu Item",category:"Menu",component:Sw,interactiveComponent:Cw,previewComponent:ww,description:"Menu items with different states (Normal, Pressed, Active, Disabled)."},{id:"tag",title:"Tag",category:"Tags",component:HT,interactiveComponent:WT,previewComponent:UT,description:"Tags with various states and sizes."},{id:"tags-menu",title:"Tags Menu",category:"Tags",component:YT,interactiveComponent:XT,previewComponent:QT,description:"Horizontal scrollable menu of tags."},{id:"checkbox",title:"Checkbox",category:"Toggles",component:vw,interactiveComponent:yL,previewComponent:gw,description:"Checkboxes with various states."},{id:"radio",title:"Radio",category:"Toggles",component:ZS,interactiveComponent:HS,previewComponent:WS,description:"Radio buttons with various states."},{id:"switch",title:"Switch",category:"Toggles",component:lS,interactiveComponent:aS,previewComponent:cS,description:"Toggle switches."},{id:"avatar",title:"Avatar",category:"All other components",component:d$,interactiveComponent:l$,previewComponent:a$,description:"Avatars with various sizes and states."},{id:"banner",title:"Banner",category:"All other components",component:y$,interactiveComponent:w$,previewComponent:S$,description:"Banners with different types and states."},{id:"bottom-nav",title:"Bottom Navigation",category:"All other components",component:hS,interactiveComponent:SL,description:"Bottom navigation bar."},{id:"bottom-sheet",title:"Bottom Sheet",category:"All other components",component:eL,interactiveComponent:tL,previewComponent:nL,description:"Bottom sheets slide up from the bottom to show more content."},{id:"cards",title:"Cards",category:"All other components",component:D4,interactiveComponent:kL,previewComponent:TL,description:"Cards with title, description, and optional caption."},{id:"dialog-default",title:"Dialog",category:"All other components",component:tS,interactiveComponent:nS,previewComponent:iS,description:"Dialogs with various layouts (Default, Scrollable, Image)."},{id:"divider",title:"Divider",category:"All other components",component:Mb,interactiveComponent:$L,previewComponent:Vb,description:"Horizontal and vertical dividers with different styles."},{id:"input-field",title:"Input Field",category:"All other components",component:Qw,interactiveComponent:jL,previewComponent:bL,description:"Input fields with various states."},{id:"label",title:"Label",category:"All other components",component:Pk,interactiveComponent:Tk,previewComponent:$k,description:"Labels in various states: Default, Archived, Accent."},{id:"progress",title:"Progress Bar",category:"All other components",component:lT,interactiveComponent:Jk,previewComponent:tT,description:"Progress indicators with different sizes and states."},{id:"scrollbar",title:"Scrollbar",category:"All other components",component:ET,interactiveComponent:DT,previewComponent:RT,description:"Scrollbars with vertical and horizontal support."},{id:"separator",title:"Separator",category:"All other components",component:hk,interactiveComponent:uk,previewComponent:pk,description:"Section headers with optional actions and different sizes."},{id:"slider",title:"Slider",category:"All other components",component:TT,interactiveComponent:vT,previewComponent:jT,description:"Sliders allow users to make selections from a range of values."},{id:"stepper",title:"Stepper",category:"All other components",component:Ok,interactiveComponent:Ak,previewComponent:Mk,description:"A progress indicator that displays steps in a process."},{id:"toast",title:"Toast",category:"All other components",component:MT,previewComponent:VT,description:"Notification toasts with different states."},{id:"tooltips",title:"Tooltips",category:"All other components",component:E$,interactiveComponent:D$,previewComponent:R$,description:"Tooltips display informative text when users hover over, focus on, or tap an element."},{id:"template-playground",title:"Transition test",category:"Playground",component:xL,description:"Mobile App basic screen template with transitions."}],BL=v.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
  opacity: ${e=>e.$isOpen?1:0};
  pointer-events: ${e=>e.$isOpen?"auto":"none"};
  transition: opacity 0.3s ease;

  @media (min-width: 1024px) {
    display: none;
  }
`,PL=v.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  /* Use Surface Background 01 for both mobile and desktop as requested */
  background: var(--Colors-Surface-Backgronud--01, #131b26);
  color: var(--Text-Primary, #ffffff);
  z-index: 999;
  transform: translateX(${e=>e.$isOpen?"0":"-100%"});
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  box-shadow: 4px 0 24px rgba(0,0,0,0.5);
  overflow-y: auto;
  
  /* Hide Scrollbar */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  @media (min-width: 1024px) {
    position: relative;
    transform: none;
    height: 100%;
    z-index: 1;
    box-shadow: none;
    border-right: none; /* Remove right border divider */
    background: var(--Colors-Surface-Backgronud--01, #131b26); 
    flex-shrink: 0;
  }
`,EL=v.div`
  display: flex;
  align-items: center;
  padding: 16px 24px;
  gap: 16px;
  min-height: 64px;

  @media (min-width: 1024px) {
    display: none;
  }
`,DL=v.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 50%;
  color: var(--Text-Primary, #ffffff);
  
  &:hover {
    background: rgba(255,255,255,0.05);
  }

  @media (min-width: 1024px) {
    display: none;
  }
`,RL=v.h2`
  font-family: Roboto, sans-serif;
  font-size: 22px;
  font-weight: 400;
  margin: 0;
  color: var(--Text-Primary, #ffffff);
  display: none; /* Hide Main menu title as requested */
`,IL=v.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`,Km=v.div`
  padding: 0 16px 0 24px;
  height: 56px;
  display: flex;
  align-items: center;
  border-radius: 28px;
  cursor: pointer;
  
  /* Active state */
  background: ${e=>e.$active?"rgba(0, 179, 227, 0.15)":"transparent"};
  color: ${e=>e.$active?"var(--Colors-Accent-Brand, #00B3E3)":"var(--Text-Primary, #ffffff)"};
  
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 500;
  
  &:hover {
    background: ${e=>e.$active?"rgba(0, 179, 227, 0.25)":"rgba(255,255,255,0.05)"};
  }
`,AL=v.button`
  width: 100%;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: none;
  border: none;
  cursor: pointer;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: var(--Text-Primary, #ffffff);
  border-radius: 28px;

  &:hover {
    background: rgba(255,255,255,0.05);
  }
`,zL=v.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 4px;
  margin-bottom: 4px;
`,ML=v.div`
  padding: 0 24px 0 24px;
  height: 48px;
  margin-left: 12px;
  margin-right: 12px;
  display: flex;
  align-items: center;
  border-radius: 24px;
  cursor: pointer;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: ${e=>e.$active?"500":"400"};
  
  /* Active styling using brand color */
  background: ${e=>e.$active?"rgba(0, 179, 227, 0.15)":"transparent"};
  color: ${e=>e.$active?"var(--Colors-Accent-Brand, #00B3E3)":"var(--Text-Secondary, #d5e2f2)"};

  &:hover {
    background: ${e=>e.$active?"rgba(0, 179, 227, 0.25)":"rgba(255,255,255,0.05)"};
    color: ${e=>e.$active?"var(--Colors-Accent-Brand, #00B3E3)":"var(--Text-Primary, #ffffff)"};
  }
`,VL=({isOpen:e,onClose:i,selectedId:s,onSelect:l})=>{const[c,p]=b.useState(new Set(Kp)),d=f=>{const x=new Set(c);x.has(f)?x.delete(f):x.add(f),p(x)};return t.jsxs(t.Fragment,{children:[t.jsx(BL,{$isOpen:e,onClick:i}),t.jsxs(PL,{$isOpen:e,children:[t.jsxs(EL,{children:[t.jsx(DL,{onClick:i,children:t.jsx($c,{size:24,color:"var(--Text-Primary, #ffffff)"})}),t.jsx(RL,{children:"Main menu"})]}),t.jsxs(IL,{children:[t.jsx(Km,{$active:s===null,onClick:()=>{l(""),i()},children:"Components overview"}),t.jsx(Km,{$active:s==="icons-grid",onClick:()=>{l("icons-grid"),i()},children:"Icons"}),Kp.map(f=>{const x=vr.filter(m=>m.category===f);if(x.length===0)return null;const g=c.has(f);return t.jsxs("div",{children:[t.jsxs(AL,{$expanded:g,onClick:()=>d(f),children:[f,g?t.jsx(n8,{size:18,color:"var(--Text-Secondary, #d5e2f2)"}):t.jsx(A3,{size:18,color:"var(--Text-Secondary, #d5e2f2)"})]}),g&&t.jsx(zL,{children:x.map(m=>t.jsx(ML,{$active:s===m.id,onClick:()=>{l(m.id),i()},children:m.title},m.id))})]},f)})]})]})]})},dp=v.div`
  flex: 1;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background: black;
  padding: 24px 24px 80px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* Hide Scrollbar */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`,qm=v.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`,Ym=v.h1`
  color: var(--Text-Primary, #ffffff);
  font-family: Roboto, sans-serif;
  font-size: 32px;
  font-weight: 500;
  margin: 0;
`,Xm=v.p`
  color: var(--Text-Secondary, #d5e2f2);
  font-family: Roboto, sans-serif;
  font-size: var(--font-body-1-size, 16px);
  font-weight: var(--font-body-1-weight, 400);
  line-height: var(--font-body-1-line-height, 1.5);
  margin: 0;
`,FL=v.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Qm=v.div`
  background: transparent;
  border-radius: 16px;
  padding: 32px 0; /* Remove horizontal padding since it is transparent */
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align left to match transparency flow */
  gap: 24px;
  border: none;
  box-shadow: none;
`,Jm=v.div`
  align-self: flex-start;
  font-family: Roboto, sans-serif;
  font-size: var(--font-subheader-3-size, 14px);
  font-weight: var(--font-subheader-3-weight, 500);
  line-height: var(--font-subheader-3-line-height, 22px);
  letter-spacing: var(--font-subheader-3-letter-spacing, 0.2px);
  color: var(--Text-Assist, #b6c3d6);
  text-transform: uppercase;
  margin-bottom: 8px;
`,NL=v.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 48px;
`,e3=v.div`
  background: transparent;
  border-radius: 24px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: none;
`,OL=v.h1`
  color: var(--Text-Primary, #ffffff);
  font-family: Roboto, sans-serif;
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2;
  margin: 0;
  
  @media (max-width: 600px) {
    font-size: 32px;
  }
`,_L=v.p`
  color: var(--Text-Secondary, #d5e2f2);
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin: 0;
  max-width: 600px;
`,HL=v.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`,WL=v.h2`
  color: var(--Text-Primary, #ffffff);
  font-family: Roboto, sans-serif;
  font-size: 24px;
  font-weight: 500;
  margin: 0;
  padding-bottom: 12px;
`,UL=v.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  width: 100%;
`,ZL=v.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  cursor: pointer;
  
  &:hover .preview-card {
    border-color: rgba(255,255,255,0.2);
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.2);
    background: #323f52;
  }
`,GL=v.div`
  background: var(--Colors-Surface-Backgronud--01, #131b26);
  border-radius: 24px;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255,255,255,0.05);
  transition: all 0.2s ease;
  overflow: hidden;
  position: relative;
  /* Add class name for hover targeting */
  class-name: preview-card;
`,KL=v.div`
  pointer-events: none;
  transform: scale(0.85);
  transform-origin: center center;
  width: 100%;
  display: flex;
  justify-content: center;
`,qL=v.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0 8px;
`,YL=v.h3`
  color: var(--Text-Primary, #ffffff);
  font-family: Roboto, sans-serif;
  font-size: 20px;
  font-weight: 500;
  margin: 0;
`,XL=v.p`
  color: var(--Text-Secondary, #d5e2f2);
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  
  /* Text overflow handling */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,QL=v.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 64px;
  width: 100%;

  @media (max-width: 768px) {
    gap: 16px;
  }
`,t3=v.button`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px;
  background: var(--Colors-Surface-Backgronud--02, #2a3649);
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: 16px;
  cursor: pointer;
  text-align: left;
  transition: all 0.2s ease;
  width: 100%;

  &:hover {
    background: #323f52;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  }
`,n3=v.span`
  color: var(--Text-Assist, #b6c3d6);
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,i3=v.span`
  color: var(--Text-Primary, #ffffff);
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: 500;
  
  display: flex;
  align-items: center;
  gap: 8px;
`,JL=({componentId:e,onSelectComponent:i})=>{const s=en.useRef(null);if(en.useEffect(()=>{s.current&&(s.current.scrollTop=0)},[e]),!e)return t.jsx(dp,{ref:s,children:t.jsxs(NL,{children:[t.jsxs(e3,{children:[t.jsx(OL,{children:"Components"}),t.jsx(_L,{children:"Components are interactive building blocks for creating a user interface. They can be organized into categories based on their purpose: Action, containment, communication, navigation, selection, and text input."})]}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"48px"},children:Kp.map(g=>{if(g==="Playground")return null;const m=vr.filter(j=>j.category===g);return m.length===0?null:t.jsxs(HL,{children:[t.jsx(WL,{children:g}),t.jsx(UL,{children:m.map(j=>{const C=j.previewComponent||j.interactiveComponent||j.component;return t.jsxs(ZL,{onClick:()=>i==null?void 0:i(j.id),children:[t.jsx(GL,{className:"preview-card",children:t.jsx(KL,{children:t.jsx(C,{})})}),t.jsxs(qL,{children:[t.jsx(YL,{children:j.title}),t.jsx(XL,{children:j.description})]})]},j.id)})})]},g)})})]})});const l=vr.find(g=>g.id===e);if(!l)return t.jsx(dp,{ref:s,children:t.jsx(qm,{children:t.jsxs(e3,{children:[t.jsx(Ym,{children:"Component Not Found"}),t.jsx(Xm,{children:"The requested component could not be found."})]})})});const c=l.component,p=l.interactiveComponent,d=vr.findIndex(g=>g.id===e),f=d>0?vr[d-1]:null,x=d<vr.length-1?vr[d+1]:null;return t.jsx(dp,{ref:s,children:t.jsxs(qm,{children:[t.jsxs(FL,{children:[t.jsx(Ym,{children:l.title}),l.description&&t.jsx(Xm,{children:l.description})]}),p&&t.jsxs(Qm,{children:[t.jsx(Jm,{children:"Interactive Demo"}),t.jsx(p,{},l.id)]}),t.jsxs(Qm,{children:[t.jsx(Jm,{children:l.id==="template-playground"?"Interactive Demo":"Component styles & states"}),t.jsx(c,{},`grid-${l.id}`)]}),t.jsxs(QL,{children:[f?t.jsxs(t3,{onClick:()=>i==null?void 0:i(f.id),children:[t.jsx(n3,{children:"← Previous"}),t.jsx(i3,{children:f.title})]}):t.jsx("div",{})," ",x?t.jsxs(t3,{onClick:()=>i==null?void 0:i(x.id),children:[t.jsx(n3,{children:"Up next →"}),t.jsx(i3,{children:x.title})]}):t.jsx("div",{})]})]})})},eB=v.div`
  width: 100vw;
  height: 100vh;
  background: black;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,tB=v.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  position: relative;
`,nB=v.header`
  height: 64px;
  background: rgba(19, 27, 38, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--Border-Divider-01, rgba(255,255,255,0.1));
  display: flex;
  align-items: center;
  padding: 0 24px;
  gap: 24px;
  flex-shrink: 0;
  z-index: 10;
`,iB=v.button`
  background: transparent;
  border: none;
  color: var(--Text-Primary, #ffffff);
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: rgba(255,255,255,0.1);
  }

  @media (min-width: 1024px) {
    display: none;
  }
`,rB=v.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,sB=v.h1`
  color: var(--Text-Primary, #ffffff);
  font-family: Roboto, sans-serif;
  font-size: 20px;
  font-weight: 500;
  margin: 0;
`;function oB(){const[e,i]=b.useState(!1),[s,l]=b.useState(null),c=p=>{l(p),i(!1)};return t.jsxs(eB,{children:[t.jsxs(nB,{children:[t.jsx(iB,{onClick:()=>i(!0),children:t.jsx(c8,{size:24})}),t.jsx(rB,{children:t.jsx(sB,{children:"Omni for EAE"})})]}),t.jsxs(tB,{children:[t.jsx(VL,{isOpen:e,onClose:()=>i(!1),selectedId:s,onSelect:c}),t.jsx(JL,{componentId:s,onSelectComponent:c})]})]})}O6.createRoot(document.getElementById("root")).render(t.jsx(oB,{}));
