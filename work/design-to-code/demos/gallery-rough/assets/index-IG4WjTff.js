(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const d of l)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function i(l){const d={};return l.integrity&&(d.integrity=l.integrity),l.referrerPolicy&&(d.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?d.credentials="include":l.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(l){if(l.ep)return;l.ep=!0;const d=i(l);fetch(l.href,d)}})();function V5(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var fu={exports:{}},Vi={},pu={exports:{}},xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v2;function I5(){if(v2)return xe;v2=1;var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),p=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),x=Symbol.iterator;function C(E){return E===null||typeof E!="object"?null:(E=x&&E[x]||E["@@iterator"],typeof E=="function"?E:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,L={};function P(E,I,ce){this.props=E,this.context=I,this.refs=L,this.updater=ce||b}P.prototype.isReactComponent={},P.prototype.setState=function(E,I){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,I,"setState")},P.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function D(){}D.prototype=P.prototype;function A(E,I,ce){this.props=E,this.context=I,this.refs=L,this.updater=ce||b}var F=A.prototype=new D;F.constructor=A,j(F,P.prototype),F.isPureReactComponent=!0;var N=Array.isArray,W=Object.prototype.hasOwnProperty,q={current:null},V={key:!0,ref:!0,__self:!0,__source:!0};function B(E,I,ce){var ee,le={},ve=null,Ce=null;if(I!=null)for(ee in I.ref!==void 0&&(Ce=I.ref),I.key!==void 0&&(ve=""+I.key),I)W.call(I,ee)&&!V.hasOwnProperty(ee)&&(le[ee]=I[ee]);var Se=arguments.length-2;if(Se===1)le.children=ce;else if(1<Se){for(var Te=Array(Se),Ne=0;Ne<Se;Ne++)Te[Ne]=arguments[Ne+2];le.children=Te}if(E&&E.defaultProps)for(ee in Se=E.defaultProps,Se)le[ee]===void 0&&(le[ee]=Se[ee]);return{$$typeof:e,type:E,key:ve,ref:Ce,props:le,_owner:q.current}}function Q(E,I){return{$$typeof:e,type:E.type,key:I,ref:E.ref,props:E.props,_owner:E._owner}}function G(E){return typeof E=="object"&&E!==null&&E.$$typeof===e}function ae(E){var I={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(ce){return I[ce]})}var he=/\/+/g;function ue(E,I){return typeof E=="object"&&E!==null&&E.key!=null?ae(""+E.key):I.toString(36)}function we(E,I,ce,ee,le){var ve=typeof E;(ve==="undefined"||ve==="boolean")&&(E=null);var Ce=!1;if(E===null)Ce=!0;else switch(ve){case"string":case"number":Ce=!0;break;case"object":switch(E.$$typeof){case e:case r:Ce=!0}}if(Ce)return Ce=E,le=le(Ce),E=ee===""?"."+ue(Ce,0):ee,N(le)?(ce="",E!=null&&(ce=E.replace(he,"$&/")+"/"),we(le,I,ce,"",function(Ne){return Ne})):le!=null&&(G(le)&&(le=Q(le,ce+(!le.key||Ce&&Ce.key===le.key?"":(""+le.key).replace(he,"$&/")+"/")+E)),I.push(le)),1;if(Ce=0,ee=ee===""?".":ee+":",N(E))for(var Se=0;Se<E.length;Se++){ve=E[Se];var Te=ee+ue(ve,Se);Ce+=we(ve,I,ce,Te,le)}else if(Te=C(E),typeof Te=="function")for(E=Te.call(E),Se=0;!(ve=E.next()).done;)ve=ve.value,Te=ee+ue(ve,Se++),Ce+=we(ve,I,ce,Te,le);else if(ve==="object")throw I=String(E),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.");return Ce}function Le(E,I,ce){if(E==null)return E;var ee=[],le=0;return we(E,ee,"","",function(ve){return I.call(ce,ve,le++)}),ee}function ke(E){if(E._status===-1){var I=E._result;I=I(),I.then(function(ce){(E._status===0||E._status===-1)&&(E._status=1,E._result=ce)},function(ce){(E._status===0||E._status===-1)&&(E._status=2,E._result=ce)}),E._status===-1&&(E._status=0,E._result=I)}if(E._status===1)return E._result.default;throw E._result}var me={current:null},H={transition:null},X={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:H,ReactCurrentOwner:q};function Z(){throw Error("act(...) is not supported in production builds of React.")}return xe.Children={map:Le,forEach:function(E,I,ce){Le(E,function(){I.apply(this,arguments)},ce)},count:function(E){var I=0;return Le(E,function(){I++}),I},toArray:function(E){return Le(E,function(I){return I})||[]},only:function(E){if(!G(E))throw Error("React.Children.only expected to receive a single React element child.");return E}},xe.Component=P,xe.Fragment=i,xe.Profiler=l,xe.PureComponent=A,xe.StrictMode=s,xe.Suspense=m,xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X,xe.act=Z,xe.cloneElement=function(E,I,ce){if(E==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+E+".");var ee=j({},E.props),le=E.key,ve=E.ref,Ce=E._owner;if(I!=null){if(I.ref!==void 0&&(ve=I.ref,Ce=q.current),I.key!==void 0&&(le=""+I.key),E.type&&E.type.defaultProps)var Se=E.type.defaultProps;for(Te in I)W.call(I,Te)&&!V.hasOwnProperty(Te)&&(ee[Te]=I[Te]===void 0&&Se!==void 0?Se[Te]:I[Te])}var Te=arguments.length-2;if(Te===1)ee.children=ce;else if(1<Te){Se=Array(Te);for(var Ne=0;Ne<Te;Ne++)Se[Ne]=arguments[Ne+2];ee.children=Se}return{$$typeof:e,type:E.type,key:le,ref:ve,props:ee,_owner:Ce}},xe.createContext=function(E){return E={$$typeof:p,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},E.Provider={$$typeof:d,_context:E},E.Consumer=E},xe.createElement=B,xe.createFactory=function(E){var I=B.bind(null,E);return I.type=E,I},xe.createRef=function(){return{current:null}},xe.forwardRef=function(E){return{$$typeof:h,render:E}},xe.isValidElement=G,xe.lazy=function(E){return{$$typeof:y,_payload:{_status:-1,_result:E},_init:ke}},xe.memo=function(E,I){return{$$typeof:v,type:E,compare:I===void 0?null:I}},xe.startTransition=function(E){var I=H.transition;H.transition={};try{E()}finally{H.transition=I}},xe.unstable_act=Z,xe.useCallback=function(E,I){return me.current.useCallback(E,I)},xe.useContext=function(E){return me.current.useContext(E)},xe.useDebugValue=function(){},xe.useDeferredValue=function(E){return me.current.useDeferredValue(E)},xe.useEffect=function(E,I){return me.current.useEffect(E,I)},xe.useId=function(){return me.current.useId()},xe.useImperativeHandle=function(E,I,ce){return me.current.useImperativeHandle(E,I,ce)},xe.useInsertionEffect=function(E,I){return me.current.useInsertionEffect(E,I)},xe.useLayoutEffect=function(E,I){return me.current.useLayoutEffect(E,I)},xe.useMemo=function(E,I){return me.current.useMemo(E,I)},xe.useReducer=function(E,I,ce){return me.current.useReducer(E,I,ce)},xe.useRef=function(E){return me.current.useRef(E)},xe.useState=function(E){return me.current.useState(E)},xe.useSyncExternalStore=function(E,I,ce){return me.current.useSyncExternalStore(E,I,ce)},xe.useTransition=function(){return me.current.useTransition()},xe.version="18.3.1",xe}var x2;function zc(){return x2||(x2=1,pu.exports=I5()),pu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C2;function F5(){if(C2)return Vi;C2=1;var e=zc(),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function p(h,m,v){var y,x={},C=null,b=null;v!==void 0&&(C=""+v),m.key!==void 0&&(C=""+m.key),m.ref!==void 0&&(b=m.ref);for(y in m)s.call(m,y)&&!d.hasOwnProperty(y)&&(x[y]=m[y]);if(h&&h.defaultProps)for(y in m=h.defaultProps,m)x[y]===void 0&&(x[y]=m[y]);return{$$typeof:r,type:h,key:C,ref:b,props:x,_owner:l.current}}return Vi.Fragment=i,Vi.jsx=p,Vi.jsxs=p,Vi}var w2;function N5(){return w2||(w2=1,fu.exports=F5()),fu.exports}var c=N5(),ws={},hu={exports:{}},vt={},mu={exports:{}},gu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S2;function z5(){return S2||(S2=1,(function(e){function r(H,X){var Z=H.length;H.push(X);e:for(;0<Z;){var E=Z-1>>>1,I=H[E];if(0<l(I,X))H[E]=X,H[Z]=I,Z=E;else break e}}function i(H){return H.length===0?null:H[0]}function s(H){if(H.length===0)return null;var X=H[0],Z=H.pop();if(Z!==X){H[0]=Z;e:for(var E=0,I=H.length,ce=I>>>1;E<ce;){var ee=2*(E+1)-1,le=H[ee],ve=ee+1,Ce=H[ve];if(0>l(le,Z))ve<I&&0>l(Ce,le)?(H[E]=Ce,H[ve]=Z,E=ve):(H[E]=le,H[ee]=Z,E=ee);else if(ve<I&&0>l(Ce,Z))H[E]=Ce,H[ve]=Z,E=ve;else break e}}return X}function l(H,X){var Z=H.sortIndex-X.sortIndex;return Z!==0?Z:H.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;e.unstable_now=function(){return d.now()}}else{var p=Date,h=p.now();e.unstable_now=function(){return p.now()-h}}var m=[],v=[],y=1,x=null,C=3,b=!1,j=!1,L=!1,P=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(H){for(var X=i(v);X!==null;){if(X.callback===null)s(v);else if(X.startTime<=H)s(v),X.sortIndex=X.expirationTime,r(m,X);else break;X=i(v)}}function N(H){if(L=!1,F(H),!j)if(i(m)!==null)j=!0,ke(W);else{var X=i(v);X!==null&&me(N,X.startTime-H)}}function W(H,X){j=!1,L&&(L=!1,D(B),B=-1),b=!0;var Z=C;try{for(F(X),x=i(m);x!==null&&(!(x.expirationTime>X)||H&&!ae());){var E=x.callback;if(typeof E=="function"){x.callback=null,C=x.priorityLevel;var I=E(x.expirationTime<=X);X=e.unstable_now(),typeof I=="function"?x.callback=I:x===i(m)&&s(m),F(X)}else s(m);x=i(m)}if(x!==null)var ce=!0;else{var ee=i(v);ee!==null&&me(N,ee.startTime-X),ce=!1}return ce}finally{x=null,C=Z,b=!1}}var q=!1,V=null,B=-1,Q=5,G=-1;function ae(){return!(e.unstable_now()-G<Q)}function he(){if(V!==null){var H=e.unstable_now();G=H;var X=!0;try{X=V(!0,H)}finally{X?ue():(q=!1,V=null)}}else q=!1}var ue;if(typeof A=="function")ue=function(){A(he)};else if(typeof MessageChannel<"u"){var we=new MessageChannel,Le=we.port2;we.port1.onmessage=he,ue=function(){Le.postMessage(null)}}else ue=function(){P(he,0)};function ke(H){V=H,q||(q=!0,ue())}function me(H,X){B=P(function(){H(e.unstable_now())},X)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(H){H.callback=null},e.unstable_continueExecution=function(){j||b||(j=!0,ke(W))},e.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<H?Math.floor(1e3/H):5},e.unstable_getCurrentPriorityLevel=function(){return C},e.unstable_getFirstCallbackNode=function(){return i(m)},e.unstable_next=function(H){switch(C){case 1:case 2:case 3:var X=3;break;default:X=C}var Z=C;C=X;try{return H()}finally{C=Z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(H,X){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var Z=C;C=H;try{return X()}finally{C=Z}},e.unstable_scheduleCallback=function(H,X,Z){var E=e.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?E+Z:E):Z=E,H){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=Z+I,H={id:y++,callback:X,priorityLevel:H,startTime:Z,expirationTime:I,sortIndex:-1},Z>E?(H.sortIndex=Z,r(v,H),i(m)===null&&H===i(v)&&(L?(D(B),B=-1):L=!0,me(N,Z-E))):(H.sortIndex=I,r(m,H),j||b||(j=!0,ke(W))),H},e.unstable_shouldYield=ae,e.unstable_wrapCallback=function(H){var X=C;return function(){var Z=C;C=X;try{return H.apply(this,arguments)}finally{C=Z}}}})(gu)),gu}var k2;function O5(){return k2||(k2=1,mu.exports=z5()),mu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j2;function _5(){if(j2)return vt;j2=1;var e=zc(),r=O5();function i(t){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)n+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function d(t,n){p(t,n),p(t+"Capture",n)}function p(t,n){for(l[t]=n,t=0;t<n.length;t++)s.add(n[t])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},x={};function C(t){return m.call(x,t)?!0:m.call(y,t)?!1:v.test(t)?x[t]=!0:(y[t]=!0,!1)}function b(t,n,o,a){if(o!==null&&o.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return a?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function j(t,n,o,a){if(n===null||typeof n>"u"||b(t,n,o,a))return!0;if(a)return!1;if(o!==null)switch(o.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function L(t,n,o,a,u,f,g){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=a,this.attributeNamespace=u,this.mustUseProperty=o,this.propertyName=t,this.type=n,this.sanitizeURL=f,this.removeEmptyString=g}var P={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){P[t]=new L(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var n=t[0];P[n]=new L(n,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){P[t]=new L(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){P[t]=new L(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){P[t]=new L(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){P[t]=new L(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){P[t]=new L(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){P[t]=new L(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){P[t]=new L(t,5,!1,t.toLowerCase(),null,!1,!1)});var D=/[\-:]([a-z])/g;function A(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var n=t.replace(D,A);P[n]=new L(n,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var n=t.replace(D,A);P[n]=new L(n,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var n=t.replace(D,A);P[n]=new L(n,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){P[t]=new L(t,1,!1,t.toLowerCase(),null,!1,!1)}),P.xlinkHref=new L("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){P[t]=new L(t,1,!1,t.toLowerCase(),null,!0,!0)});function F(t,n,o,a){var u=P.hasOwnProperty(n)?P[n]:null;(u!==null?u.type!==0:a||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(j(n,o,u,a)&&(o=null),a||u===null?C(n)&&(o===null?t.removeAttribute(n):t.setAttribute(n,""+o)):u.mustUseProperty?t[u.propertyName]=o===null?u.type===3?!1:"":o:(n=u.attributeName,a=u.attributeNamespace,o===null?t.removeAttribute(n):(u=u.type,o=u===3||u===4&&o===!0?"":""+o,a?t.setAttributeNS(a,n,o):t.setAttribute(n,o))))}var N=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,W=Symbol.for("react.element"),q=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),G=Symbol.for("react.provider"),ae=Symbol.for("react.context"),he=Symbol.for("react.forward_ref"),ue=Symbol.for("react.suspense"),we=Symbol.for("react.suspense_list"),Le=Symbol.for("react.memo"),ke=Symbol.for("react.lazy"),me=Symbol.for("react.offscreen"),H=Symbol.iterator;function X(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var Z=Object.assign,E;function I(t){if(E===void 0)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);E=n&&n[1]||""}return`
`+E+t}var ce=!1;function ee(t,n){if(!t||ce)return"";ce=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch($){var a=$}Reflect.construct(t,[],n)}else{try{n.call()}catch($){a=$}t.call(n.prototype)}else{try{throw Error()}catch($){a=$}t()}}catch($){if($&&a&&typeof $.stack=="string"){for(var u=$.stack.split(`
`),f=a.stack.split(`
`),g=u.length-1,w=f.length-1;1<=g&&0<=w&&u[g]!==f[w];)w--;for(;1<=g&&0<=w;g--,w--)if(u[g]!==f[w]){if(g!==1||w!==1)do if(g--,w--,0>w||u[g]!==f[w]){var k=`
`+u[g].replace(" at new "," at ");return t.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",t.displayName)),k}while(1<=g&&0<=w);break}}}finally{ce=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?I(t):""}function le(t){switch(t.tag){case 5:return I(t.type);case 16:return I("Lazy");case 13:return I("Suspense");case 19:return I("SuspenseList");case 0:case 2:case 15:return t=ee(t.type,!1),t;case 11:return t=ee(t.type.render,!1),t;case 1:return t=ee(t.type,!0),t;default:return""}}function ve(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case V:return"Fragment";case q:return"Portal";case Q:return"Profiler";case B:return"StrictMode";case ue:return"Suspense";case we:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ae:return(t.displayName||"Context")+".Consumer";case G:return(t._context.displayName||"Context")+".Provider";case he:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Le:return n=t.displayName||null,n!==null?n:ve(t.type)||"Memo";case ke:n=t._payload,t=t._init;try{return ve(t(n))}catch{}}return null}function Ce(t){var n=t.type;switch(t.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=n.render,t=t.displayName||t.name||"",n.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ve(n);case 8:return n===B?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Se(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Te(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ne(t){var n=Te(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),a=""+t[n];if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function co(t){t._valueTracker||(t._valueTracker=Ne(t))}function k1(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var o=n.getValue(),a="";return t&&(a=Te(t)?t.checked?"true":"false":t.value),t=a,t!==o?(n.setValue(t),!0):!1}function fo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function xa(t,n){var o=n.checked;return Z({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function j1(t,n){var o=n.defaultValue==null?"":n.defaultValue,a=n.checked!=null?n.checked:n.defaultChecked;o=Se(n.value!=null?n.value:o),t._wrapperState={initialChecked:a,initialValue:o,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function b1(t,n){n=n.checked,n!=null&&F(t,"checked",n,!1)}function Ca(t,n){b1(t,n);var o=Se(n.value),a=n.type;if(o!=null)a==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(a==="submit"||a==="reset"){t.removeAttribute("value");return}n.hasOwnProperty("value")?wa(t,n.type,o):n.hasOwnProperty("defaultValue")&&wa(t,n.type,Se(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(t.defaultChecked=!!n.defaultChecked)}function T1(t,n,o){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var a=n.type;if(!(a!=="submit"&&a!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+t._wrapperState.initialValue,o||n===t.value||(t.value=n),t.defaultValue=n}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function wa(t,n,o){(n!=="number"||fo(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Xr=Array.isArray;function dr(t,n,o,a){if(t=t.options,n){n={};for(var u=0;u<o.length;u++)n["$"+o[u]]=!0;for(o=0;o<t.length;o++)u=n.hasOwnProperty("$"+t[o].value),t[o].selected!==u&&(t[o].selected=u),u&&a&&(t[o].defaultSelected=!0)}else{for(o=""+Se(o),n=null,u=0;u<t.length;u++){if(t[u].value===o){t[u].selected=!0,a&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Sa(t,n){if(n.dangerouslySetInnerHTML!=null)throw Error(i(91));return Z({},n,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function E1(t,n){var o=n.value;if(o==null){if(o=n.children,n=n.defaultValue,o!=null){if(n!=null)throw Error(i(92));if(Xr(o)){if(1<o.length)throw Error(i(93));o=o[0]}n=o}n==null&&(n=""),o=n}t._wrapperState={initialValue:Se(o)}}function L1(t,n){var o=Se(n.value),a=Se(n.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),n.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),a!=null&&(t.defaultValue=""+a)}function P1(t){var n=t.textContent;n===t._wrapperState.initialValue&&n!==""&&n!==null&&(t.value=n)}function R1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ka(t,n){return t==null||t==="http://www.w3.org/1999/xhtml"?R1(n):t==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var po,M1=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,o,a,u){MSApp.execUnsafeLocalFunction(function(){return t(n,o,a,u)})}:t})(function(t,n){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=n;else{for(po=po||document.createElement("div"),po.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=po.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;n.firstChild;)t.appendChild(n.firstChild)}});function qr(t,n){if(n){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=n;return}}t.textContent=n}var Jr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},z3=["Webkit","ms","Moz","O"];Object.keys(Jr).forEach(function(t){z3.forEach(function(n){n=n+t.charAt(0).toUpperCase()+t.substring(1),Jr[n]=Jr[t]})});function A1(t,n,o){return n==null||typeof n=="boolean"||n===""?"":o||typeof n!="number"||n===0||Jr.hasOwnProperty(t)&&Jr[t]?(""+n).trim():n+"px"}function B1(t,n){t=t.style;for(var o in n)if(n.hasOwnProperty(o)){var a=o.indexOf("--")===0,u=A1(o,n[o],a);o==="float"&&(o="cssFloat"),a?t.setProperty(o,u):t[o]=u}}var O3=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ja(t,n){if(n){if(O3[t]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(i(137,t));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(i(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(i(61))}if(n.style!=null&&typeof n.style!="object")throw Error(i(62))}}function ba(t,n){if(t.indexOf("-")===-1)return typeof n.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ta=null;function Ea(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var La=null,fr=null,pr=null;function $1(t){if(t=wi(t)){if(typeof La!="function")throw Error(i(280));var n=t.stateNode;n&&(n=Vo(n),La(t.stateNode,t.type,n))}}function D1(t){fr?pr?pr.push(t):pr=[t]:fr=t}function V1(){if(fr){var t=fr,n=pr;if(pr=fr=null,$1(t),n)for(t=0;t<n.length;t++)$1(n[t])}}function I1(t,n){return t(n)}function F1(){}var Pa=!1;function N1(t,n,o){if(Pa)return t(n,o);Pa=!0;try{return I1(t,n,o)}finally{Pa=!1,(fr!==null||pr!==null)&&(F1(),V1())}}function ei(t,n){var o=t.stateNode;if(o===null)return null;var a=Vo(o);if(a===null)return null;o=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(i(231,n,typeof o));return o}var Ra=!1;if(h)try{var ti={};Object.defineProperty(ti,"passive",{get:function(){Ra=!0}}),window.addEventListener("test",ti,ti),window.removeEventListener("test",ti,ti)}catch{Ra=!1}function _3(t,n,o,a,u,f,g,w,k){var $=Array.prototype.slice.call(arguments,3);try{n.apply(o,$)}catch(O){this.onError(O)}}var ni=!1,ho=null,mo=!1,Ma=null,H3={onError:function(t){ni=!0,ho=t}};function U3(t,n,o,a,u,f,g,w,k){ni=!1,ho=null,_3.apply(H3,arguments)}function W3(t,n,o,a,u,f,g,w,k){if(U3.apply(this,arguments),ni){if(ni){var $=ho;ni=!1,ho=null}else throw Error(i(198));mo||(mo=!0,Ma=$)}}function zn(t){var n=t,o=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(o=n.return),t=n.return;while(t)}return n.tag===3?o:null}function z1(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function O1(t){if(zn(t)!==t)throw Error(i(188))}function Z3(t){var n=t.alternate;if(!n){if(n=zn(t),n===null)throw Error(i(188));return n!==t?null:t}for(var o=t,a=n;;){var u=o.return;if(u===null)break;var f=u.alternate;if(f===null){if(a=u.return,a!==null){o=a;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===o)return O1(u),t;if(f===a)return O1(u),n;f=f.sibling}throw Error(i(188))}if(o.return!==a.return)o=u,a=f;else{for(var g=!1,w=u.child;w;){if(w===o){g=!0,o=u,a=f;break}if(w===a){g=!0,a=u,o=f;break}w=w.sibling}if(!g){for(w=f.child;w;){if(w===o){g=!0,o=f,a=u;break}if(w===a){g=!0,a=f,o=u;break}w=w.sibling}if(!g)throw Error(i(189))}}if(o.alternate!==a)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?t:n}function _1(t){return t=Z3(t),t!==null?H1(t):null}function H1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var n=H1(t);if(n!==null)return n;t=t.sibling}return null}var U1=r.unstable_scheduleCallback,W1=r.unstable_cancelCallback,K3=r.unstable_shouldYield,G3=r.unstable_requestPaint,_e=r.unstable_now,Y3=r.unstable_getCurrentPriorityLevel,Aa=r.unstable_ImmediatePriority,Z1=r.unstable_UserBlockingPriority,go=r.unstable_NormalPriority,Q3=r.unstable_LowPriority,K1=r.unstable_IdlePriority,yo=null,Wt=null;function X3(t){if(Wt&&typeof Wt.onCommitFiberRoot=="function")try{Wt.onCommitFiberRoot(yo,t,void 0,(t.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:e4,q3=Math.log,J3=Math.LN2;function e4(t){return t>>>=0,t===0?32:31-(q3(t)/J3|0)|0}var vo=64,xo=4194304;function ri(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Co(t,n){var o=t.pendingLanes;if(o===0)return 0;var a=0,u=t.suspendedLanes,f=t.pingedLanes,g=o&268435455;if(g!==0){var w=g&~u;w!==0?a=ri(w):(f&=g,f!==0&&(a=ri(f)))}else g=o&~u,g!==0?a=ri(g):f!==0&&(a=ri(f));if(a===0)return 0;if(n!==0&&n!==a&&(n&u)===0&&(u=a&-a,f=n&-n,u>=f||u===16&&(f&4194240)!==0))return n;if((a&4)!==0&&(a|=o&16),n=t.entangledLanes,n!==0)for(t=t.entanglements,n&=a;0<n;)o=31-Bt(n),u=1<<o,a|=t[o],n&=~u;return a}function t4(t,n){switch(t){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function n4(t,n){for(var o=t.suspendedLanes,a=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes;0<f;){var g=31-Bt(f),w=1<<g,k=u[g];k===-1?((w&o)===0||(w&a)!==0)&&(u[g]=t4(w,n)):k<=n&&(t.expiredLanes|=w),f&=~w}}function Ba(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function G1(){var t=vo;return vo<<=1,(vo&4194240)===0&&(vo=64),t}function $a(t){for(var n=[],o=0;31>o;o++)n.push(t);return n}function ii(t,n,o){t.pendingLanes|=n,n!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,n=31-Bt(n),t[n]=o}function r4(t,n){var o=t.pendingLanes&~n;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=n,t.mutableReadLanes&=n,t.entangledLanes&=n,n=t.entanglements;var a=t.eventTimes;for(t=t.expirationTimes;0<o;){var u=31-Bt(o),f=1<<u;n[u]=0,a[u]=-1,t[u]=-1,o&=~f}}function Da(t,n){var o=t.entangledLanes|=n;for(t=t.entanglements;o;){var a=31-Bt(o),u=1<<a;u&n|t[a]&n&&(t[a]|=n),o&=~u}}var Pe=0;function Y1(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Q1,Va,X1,q1,J1,Ia=!1,wo=[],dn=null,fn=null,pn=null,oi=new Map,si=new Map,hn=[],i4="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ed(t,n){switch(t){case"focusin":case"focusout":dn=null;break;case"dragenter":case"dragleave":fn=null;break;case"mouseover":case"mouseout":pn=null;break;case"pointerover":case"pointerout":oi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":si.delete(n.pointerId)}}function ai(t,n,o,a,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:o,eventSystemFlags:a,nativeEvent:f,targetContainers:[u]},n!==null&&(n=wi(n),n!==null&&Va(n)),t):(t.eventSystemFlags|=a,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function o4(t,n,o,a,u){switch(n){case"focusin":return dn=ai(dn,t,n,o,a,u),!0;case"dragenter":return fn=ai(fn,t,n,o,a,u),!0;case"mouseover":return pn=ai(pn,t,n,o,a,u),!0;case"pointerover":var f=u.pointerId;return oi.set(f,ai(oi.get(f)||null,t,n,o,a,u)),!0;case"gotpointercapture":return f=u.pointerId,si.set(f,ai(si.get(f)||null,t,n,o,a,u)),!0}return!1}function td(t){var n=On(t.target);if(n!==null){var o=zn(n);if(o!==null){if(n=o.tag,n===13){if(n=z1(o),n!==null){t.blockedOn=n,J1(t.priority,function(){X1(o)});return}}else if(n===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function So(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var o=Na(t.domEventName,t.eventSystemFlags,n[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var a=new o.constructor(o.type,o);Ta=a,o.target.dispatchEvent(a),Ta=null}else return n=wi(o),n!==null&&Va(n),t.blockedOn=o,!1;n.shift()}return!0}function nd(t,n,o){So(t)&&o.delete(n)}function s4(){Ia=!1,dn!==null&&So(dn)&&(dn=null),fn!==null&&So(fn)&&(fn=null),pn!==null&&So(pn)&&(pn=null),oi.forEach(nd),si.forEach(nd)}function li(t,n){t.blockedOn===n&&(t.blockedOn=null,Ia||(Ia=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,s4)))}function ui(t){function n(u){return li(u,t)}if(0<wo.length){li(wo[0],t);for(var o=1;o<wo.length;o++){var a=wo[o];a.blockedOn===t&&(a.blockedOn=null)}}for(dn!==null&&li(dn,t),fn!==null&&li(fn,t),pn!==null&&li(pn,t),oi.forEach(n),si.forEach(n),o=0;o<hn.length;o++)a=hn[o],a.blockedOn===t&&(a.blockedOn=null);for(;0<hn.length&&(o=hn[0],o.blockedOn===null);)td(o),o.blockedOn===null&&hn.shift()}var hr=N.ReactCurrentBatchConfig,ko=!0;function a4(t,n,o,a){var u=Pe,f=hr.transition;hr.transition=null;try{Pe=1,Fa(t,n,o,a)}finally{Pe=u,hr.transition=f}}function l4(t,n,o,a){var u=Pe,f=hr.transition;hr.transition=null;try{Pe=4,Fa(t,n,o,a)}finally{Pe=u,hr.transition=f}}function Fa(t,n,o,a){if(ko){var u=Na(t,n,o,a);if(u===null)nl(t,n,a,jo,o),ed(t,a);else if(o4(u,t,n,o,a))a.stopPropagation();else if(ed(t,a),n&4&&-1<i4.indexOf(t)){for(;u!==null;){var f=wi(u);if(f!==null&&Q1(f),f=Na(t,n,o,a),f===null&&nl(t,n,a,jo,o),f===u)break;u=f}u!==null&&a.stopPropagation()}else nl(t,n,a,null,o)}}var jo=null;function Na(t,n,o,a){if(jo=null,t=Ea(a),t=On(t),t!==null)if(n=zn(t),n===null)t=null;else if(o=n.tag,o===13){if(t=z1(n),t!==null)return t;t=null}else if(o===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null);return jo=t,null}function rd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Y3()){case Aa:return 1;case Z1:return 4;case go:case Q3:return 16;case K1:return 536870912;default:return 16}default:return 16}}var mn=null,za=null,bo=null;function id(){if(bo)return bo;var t,n=za,o=n.length,a,u="value"in mn?mn.value:mn.textContent,f=u.length;for(t=0;t<o&&n[t]===u[t];t++);var g=o-t;for(a=1;a<=g&&n[o-a]===u[f-a];a++);return bo=u.slice(t,1<a?1-a:void 0)}function To(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Eo(){return!0}function od(){return!1}function xt(t){function n(o,a,u,f,g){this._reactName=o,this._targetInst=u,this.type=a,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(o=t[w],this[w]=o?o(f):f[w]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Eo:od,this.isPropagationStopped=od,this}return Z(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Eo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Eo)},persist:function(){},isPersistent:Eo}),n}var mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Oa=xt(mr),ci=Z({},mr,{view:0,detail:0}),u4=xt(ci),_a,Ha,di,Lo=Z({},ci,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wa,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==di&&(di&&t.type==="mousemove"?(_a=t.screenX-di.screenX,Ha=t.screenY-di.screenY):Ha=_a=0,di=t),_a)},movementY:function(t){return"movementY"in t?t.movementY:Ha}}),sd=xt(Lo),c4=Z({},Lo,{dataTransfer:0}),d4=xt(c4),f4=Z({},ci,{relatedTarget:0}),Ua=xt(f4),p4=Z({},mr,{animationName:0,elapsedTime:0,pseudoElement:0}),h4=xt(p4),m4=Z({},mr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),g4=xt(m4),y4=Z({},mr,{data:0}),ad=xt(y4),v4={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},x4={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},C4={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function w4(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=C4[t])?!!n[t]:!1}function Wa(){return w4}var S4=Z({},ci,{key:function(t){if(t.key){var n=v4[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=To(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?x4[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wa,charCode:function(t){return t.type==="keypress"?To(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?To(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),k4=xt(S4),j4=Z({},Lo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ld=xt(j4),b4=Z({},ci,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wa}),T4=xt(b4),E4=Z({},mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),L4=xt(E4),P4=Z({},Lo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),R4=xt(P4),M4=[9,13,27,32],Za=h&&"CompositionEvent"in window,fi=null;h&&"documentMode"in document&&(fi=document.documentMode);var A4=h&&"TextEvent"in window&&!fi,ud=h&&(!Za||fi&&8<fi&&11>=fi),cd=" ",dd=!1;function fd(t,n){switch(t){case"keyup":return M4.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var gr=!1;function B4(t,n){switch(t){case"compositionend":return pd(n);case"keypress":return n.which!==32?null:(dd=!0,cd);case"textInput":return t=n.data,t===cd&&dd?null:t;default:return null}}function $4(t,n){if(gr)return t==="compositionend"||!Za&&fd(t,n)?(t=id(),bo=za=mn=null,gr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ud&&n.locale!=="ko"?null:n.data;default:return null}}var D4={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hd(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!D4[t.type]:n==="textarea"}function md(t,n,o,a){D1(a),n=Bo(n,"onChange"),0<n.length&&(o=new Oa("onChange","change",null,o,a),t.push({event:o,listeners:n}))}var pi=null,hi=null;function V4(t){Bd(t,0)}function Po(t){var n=wr(t);if(k1(n))return t}function I4(t,n){if(t==="change")return n}var gd=!1;if(h){var Ka;if(h){var Ga="oninput"in document;if(!Ga){var yd=document.createElement("div");yd.setAttribute("oninput","return;"),Ga=typeof yd.oninput=="function"}Ka=Ga}else Ka=!1;gd=Ka&&(!document.documentMode||9<document.documentMode)}function vd(){pi&&(pi.detachEvent("onpropertychange",xd),hi=pi=null)}function xd(t){if(t.propertyName==="value"&&Po(hi)){var n=[];md(n,hi,t,Ea(t)),N1(V4,n)}}function F4(t,n,o){t==="focusin"?(vd(),pi=n,hi=o,pi.attachEvent("onpropertychange",xd)):t==="focusout"&&vd()}function N4(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Po(hi)}function z4(t,n){if(t==="click")return Po(n)}function O4(t,n){if(t==="input"||t==="change")return Po(n)}function _4(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var $t=typeof Object.is=="function"?Object.is:_4;function mi(t,n){if($t(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var o=Object.keys(t),a=Object.keys(n);if(o.length!==a.length)return!1;for(a=0;a<o.length;a++){var u=o[a];if(!m.call(n,u)||!$t(t[u],n[u]))return!1}return!0}function Cd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wd(t,n){var o=Cd(t);t=0;for(var a;o;){if(o.nodeType===3){if(a=t+o.textContent.length,t<=n&&a>=n)return{node:o,offset:n-t};t=a}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Cd(o)}}function Sd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Sd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function kd(){for(var t=window,n=fo();n instanceof t.HTMLIFrameElement;){try{var o=typeof n.contentWindow.location.href=="string"}catch{o=!1}if(o)t=n.contentWindow;else break;n=fo(t.document)}return n}function Ya(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function H4(t){var n=kd(),o=t.focusedElem,a=t.selectionRange;if(n!==o&&o&&o.ownerDocument&&Sd(o.ownerDocument.documentElement,o)){if(a!==null&&Ya(o)){if(n=a.start,t=a.end,t===void 0&&(t=n),"selectionStart"in o)o.selectionStart=n,o.selectionEnd=Math.min(t,o.value.length);else if(t=(n=o.ownerDocument||document)&&n.defaultView||window,t.getSelection){t=t.getSelection();var u=o.textContent.length,f=Math.min(a.start,u);a=a.end===void 0?f:Math.min(a.end,u),!t.extend&&f>a&&(u=a,a=f,f=u),u=wd(o,f);var g=wd(o,a);u&&g&&(t.rangeCount!==1||t.anchorNode!==u.node||t.anchorOffset!==u.offset||t.focusNode!==g.node||t.focusOffset!==g.offset)&&(n=n.createRange(),n.setStart(u.node,u.offset),t.removeAllRanges(),f>a?(t.addRange(n),t.extend(g.node,g.offset)):(n.setEnd(g.node,g.offset),t.addRange(n)))}}for(n=[],t=o;t=t.parentNode;)t.nodeType===1&&n.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<n.length;o++)t=n[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var U4=h&&"documentMode"in document&&11>=document.documentMode,yr=null,Qa=null,gi=null,Xa=!1;function jd(t,n,o){var a=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Xa||yr==null||yr!==fo(a)||(a=yr,"selectionStart"in a&&Ya(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),gi&&mi(gi,a)||(gi=a,a=Bo(Qa,"onSelect"),0<a.length&&(n=new Oa("onSelect","select",null,n,o),t.push({event:n,listeners:a}),n.target=yr)))}function Ro(t,n){var o={};return o[t.toLowerCase()]=n.toLowerCase(),o["Webkit"+t]="webkit"+n,o["Moz"+t]="moz"+n,o}var vr={animationend:Ro("Animation","AnimationEnd"),animationiteration:Ro("Animation","AnimationIteration"),animationstart:Ro("Animation","AnimationStart"),transitionend:Ro("Transition","TransitionEnd")},qa={},bd={};h&&(bd=document.createElement("div").style,"AnimationEvent"in window||(delete vr.animationend.animation,delete vr.animationiteration.animation,delete vr.animationstart.animation),"TransitionEvent"in window||delete vr.transitionend.transition);function Mo(t){if(qa[t])return qa[t];if(!vr[t])return t;var n=vr[t],o;for(o in n)if(n.hasOwnProperty(o)&&o in bd)return qa[t]=n[o];return t}var Td=Mo("animationend"),Ed=Mo("animationiteration"),Ld=Mo("animationstart"),Pd=Mo("transitionend"),Rd=new Map,Md="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gn(t,n){Rd.set(t,n),d(n,[t])}for(var Ja=0;Ja<Md.length;Ja++){var el=Md[Ja],W4=el.toLowerCase(),Z4=el[0].toUpperCase()+el.slice(1);gn(W4,"on"+Z4)}gn(Td,"onAnimationEnd"),gn(Ed,"onAnimationIteration"),gn(Ld,"onAnimationStart"),gn("dblclick","onDoubleClick"),gn("focusin","onFocus"),gn("focusout","onBlur"),gn(Pd,"onTransitionEnd"),p("onMouseEnter",["mouseout","mouseover"]),p("onMouseLeave",["mouseout","mouseover"]),p("onPointerEnter",["pointerout","pointerover"]),p("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),K4=new Set("cancel close invalid load scroll toggle".split(" ").concat(yi));function Ad(t,n,o){var a=t.type||"unknown-event";t.currentTarget=o,W3(a,n,void 0,t),t.currentTarget=null}function Bd(t,n){n=(n&4)!==0;for(var o=0;o<t.length;o++){var a=t[o],u=a.event;a=a.listeners;e:{var f=void 0;if(n)for(var g=a.length-1;0<=g;g--){var w=a[g],k=w.instance,$=w.currentTarget;if(w=w.listener,k!==f&&u.isPropagationStopped())break e;Ad(u,w,$),f=k}else for(g=0;g<a.length;g++){if(w=a[g],k=w.instance,$=w.currentTarget,w=w.listener,k!==f&&u.isPropagationStopped())break e;Ad(u,w,$),f=k}}}if(mo)throw t=Ma,mo=!1,Ma=null,t}function Be(t,n){var o=n[ll];o===void 0&&(o=n[ll]=new Set);var a=t+"__bubble";o.has(a)||($d(n,t,2,!1),o.add(a))}function tl(t,n,o){var a=0;n&&(a|=4),$d(o,t,a,n)}var Ao="_reactListening"+Math.random().toString(36).slice(2);function vi(t){if(!t[Ao]){t[Ao]=!0,s.forEach(function(o){o!=="selectionchange"&&(K4.has(o)||tl(o,!1,t),tl(o,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Ao]||(n[Ao]=!0,tl("selectionchange",!1,n))}}function $d(t,n,o,a){switch(rd(n)){case 1:var u=a4;break;case 4:u=l4;break;default:u=Fa}o=u.bind(null,n,o,t),u=void 0,!Ra||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),a?u!==void 0?t.addEventListener(n,o,{capture:!0,passive:u}):t.addEventListener(n,o,!0):u!==void 0?t.addEventListener(n,o,{passive:u}):t.addEventListener(n,o,!1)}function nl(t,n,o,a,u){var f=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var g=a.tag;if(g===3||g===4){var w=a.stateNode.containerInfo;if(w===u||w.nodeType===8&&w.parentNode===u)break;if(g===4)for(g=a.return;g!==null;){var k=g.tag;if((k===3||k===4)&&(k=g.stateNode.containerInfo,k===u||k.nodeType===8&&k.parentNode===u))return;g=g.return}for(;w!==null;){if(g=On(w),g===null)return;if(k=g.tag,k===5||k===6){a=f=g;continue e}w=w.parentNode}}a=a.return}N1(function(){var $=f,O=Ea(o),U=[];e:{var z=Rd.get(t);if(z!==void 0){var te=Oa,re=t;switch(t){case"keypress":if(To(o)===0)break e;case"keydown":case"keyup":te=k4;break;case"focusin":re="focus",te=Ua;break;case"focusout":re="blur",te=Ua;break;case"beforeblur":case"afterblur":te=Ua;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":te=sd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":te=d4;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":te=T4;break;case Td:case Ed:case Ld:te=h4;break;case Pd:te=L4;break;case"scroll":te=u4;break;case"wheel":te=R4;break;case"copy":case"cut":case"paste":te=g4;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":te=ld}var oe=(n&4)!==0,He=!oe&&t==="scroll",R=oe?z!==null?z+"Capture":null:z;oe=[];for(var T=$,M;T!==null;){M=T;var K=M.stateNode;if(M.tag===5&&K!==null&&(M=K,R!==null&&(K=ei(T,R),K!=null&&oe.push(xi(T,K,M)))),He)break;T=T.return}0<oe.length&&(z=new te(z,re,null,o,O),U.push({event:z,listeners:oe}))}}if((n&7)===0){e:{if(z=t==="mouseover"||t==="pointerover",te=t==="mouseout"||t==="pointerout",z&&o!==Ta&&(re=o.relatedTarget||o.fromElement)&&(On(re)||re[en]))break e;if((te||z)&&(z=O.window===O?O:(z=O.ownerDocument)?z.defaultView||z.parentWindow:window,te?(re=o.relatedTarget||o.toElement,te=$,re=re?On(re):null,re!==null&&(He=zn(re),re!==He||re.tag!==5&&re.tag!==6)&&(re=null)):(te=null,re=$),te!==re)){if(oe=sd,K="onMouseLeave",R="onMouseEnter",T="mouse",(t==="pointerout"||t==="pointerover")&&(oe=ld,K="onPointerLeave",R="onPointerEnter",T="pointer"),He=te==null?z:wr(te),M=re==null?z:wr(re),z=new oe(K,T+"leave",te,o,O),z.target=He,z.relatedTarget=M,K=null,On(O)===$&&(oe=new oe(R,T+"enter",re,o,O),oe.target=M,oe.relatedTarget=He,K=oe),He=K,te&&re)t:{for(oe=te,R=re,T=0,M=oe;M;M=xr(M))T++;for(M=0,K=R;K;K=xr(K))M++;for(;0<T-M;)oe=xr(oe),T--;for(;0<M-T;)R=xr(R),M--;for(;T--;){if(oe===R||R!==null&&oe===R.alternate)break t;oe=xr(oe),R=xr(R)}oe=null}else oe=null;te!==null&&Dd(U,z,te,oe,!1),re!==null&&He!==null&&Dd(U,He,re,oe,!0)}}e:{if(z=$?wr($):window,te=z.nodeName&&z.nodeName.toLowerCase(),te==="select"||te==="input"&&z.type==="file")var se=I4;else if(hd(z))if(gd)se=O4;else{se=N4;var de=F4}else(te=z.nodeName)&&te.toLowerCase()==="input"&&(z.type==="checkbox"||z.type==="radio")&&(se=z4);if(se&&(se=se(t,$))){md(U,se,o,O);break e}de&&de(t,z,$),t==="focusout"&&(de=z._wrapperState)&&de.controlled&&z.type==="number"&&wa(z,"number",z.value)}switch(de=$?wr($):window,t){case"focusin":(hd(de)||de.contentEditable==="true")&&(yr=de,Qa=$,gi=null);break;case"focusout":gi=Qa=yr=null;break;case"mousedown":Xa=!0;break;case"contextmenu":case"mouseup":case"dragend":Xa=!1,jd(U,o,O);break;case"selectionchange":if(U4)break;case"keydown":case"keyup":jd(U,o,O)}var fe;if(Za)e:{switch(t){case"compositionstart":var pe="onCompositionStart";break e;case"compositionend":pe="onCompositionEnd";break e;case"compositionupdate":pe="onCompositionUpdate";break e}pe=void 0}else gr?fd(t,o)&&(pe="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(pe="onCompositionStart");pe&&(ud&&o.locale!=="ko"&&(gr||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&gr&&(fe=id()):(mn=O,za="value"in mn?mn.value:mn.textContent,gr=!0)),de=Bo($,pe),0<de.length&&(pe=new ad(pe,t,null,o,O),U.push({event:pe,listeners:de}),fe?pe.data=fe:(fe=pd(o),fe!==null&&(pe.data=fe)))),(fe=A4?B4(t,o):$4(t,o))&&($=Bo($,"onBeforeInput"),0<$.length&&(O=new ad("onBeforeInput","beforeinput",null,o,O),U.push({event:O,listeners:$}),O.data=fe))}Bd(U,n)})}function xi(t,n,o){return{instance:t,listener:n,currentTarget:o}}function Bo(t,n){for(var o=n+"Capture",a=[];t!==null;){var u=t,f=u.stateNode;u.tag===5&&f!==null&&(u=f,f=ei(t,o),f!=null&&a.unshift(xi(t,f,u)),f=ei(t,n),f!=null&&a.push(xi(t,f,u))),t=t.return}return a}function xr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Dd(t,n,o,a,u){for(var f=n._reactName,g=[];o!==null&&o!==a;){var w=o,k=w.alternate,$=w.stateNode;if(k!==null&&k===a)break;w.tag===5&&$!==null&&(w=$,u?(k=ei(o,f),k!=null&&g.unshift(xi(o,k,w))):u||(k=ei(o,f),k!=null&&g.push(xi(o,k,w)))),o=o.return}g.length!==0&&t.push({event:n,listeners:g})}var G4=/\r\n?/g,Y4=/\u0000|\uFFFD/g;function Vd(t){return(typeof t=="string"?t:""+t).replace(G4,`
`).replace(Y4,"")}function $o(t,n,o){if(n=Vd(n),Vd(t)!==n&&o)throw Error(i(425))}function Do(){}var rl=null,il=null;function ol(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var sl=typeof setTimeout=="function"?setTimeout:void 0,Q4=typeof clearTimeout=="function"?clearTimeout:void 0,Id=typeof Promise=="function"?Promise:void 0,X4=typeof queueMicrotask=="function"?queueMicrotask:typeof Id<"u"?function(t){return Id.resolve(null).then(t).catch(q4)}:sl;function q4(t){setTimeout(function(){throw t})}function al(t,n){var o=n,a=0;do{var u=o.nextSibling;if(t.removeChild(o),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(a===0){t.removeChild(u),ui(n);return}a--}else o!=="$"&&o!=="$?"&&o!=="$!"||a++;o=u}while(o);ui(n)}function yn(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return t}function Fd(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(n===0)return t;n--}else o==="/$"&&n++}t=t.previousSibling}return null}var Cr=Math.random().toString(36).slice(2),Zt="__reactFiber$"+Cr,Ci="__reactProps$"+Cr,en="__reactContainer$"+Cr,ll="__reactEvents$"+Cr,J4="__reactListeners$"+Cr,e5="__reactHandles$"+Cr;function On(t){var n=t[Zt];if(n)return n;for(var o=t.parentNode;o;){if(n=o[en]||o[Zt]){if(o=n.alternate,n.child!==null||o!==null&&o.child!==null)for(t=Fd(t);t!==null;){if(o=t[Zt])return o;t=Fd(t)}return n}t=o,o=t.parentNode}return null}function wi(t){return t=t[Zt]||t[en],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function wr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(i(33))}function Vo(t){return t[Ci]||null}var ul=[],Sr=-1;function vn(t){return{current:t}}function $e(t){0>Sr||(t.current=ul[Sr],ul[Sr]=null,Sr--)}function Ae(t,n){Sr++,ul[Sr]=t.current,t.current=n}var xn={},ot=vn(xn),pt=vn(!1),_n=xn;function kr(t,n){var o=t.type.contextTypes;if(!o)return xn;var a=t.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===n)return a.__reactInternalMemoizedMaskedChildContext;var u={},f;for(f in o)u[f]=n[f];return a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=n,t.__reactInternalMemoizedMaskedChildContext=u),u}function ht(t){return t=t.childContextTypes,t!=null}function Io(){$e(pt),$e(ot)}function Nd(t,n,o){if(ot.current!==xn)throw Error(i(168));Ae(ot,n),Ae(pt,o)}function zd(t,n,o){var a=t.stateNode;if(n=n.childContextTypes,typeof a.getChildContext!="function")return o;a=a.getChildContext();for(var u in a)if(!(u in n))throw Error(i(108,Ce(t)||"Unknown",u));return Z({},o,a)}function Fo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||xn,_n=ot.current,Ae(ot,t),Ae(pt,pt.current),!0}function Od(t,n,o){var a=t.stateNode;if(!a)throw Error(i(169));o?(t=zd(t,n,_n),a.__reactInternalMemoizedMergedChildContext=t,$e(pt),$e(ot),Ae(ot,t)):$e(pt),Ae(pt,o)}var tn=null,No=!1,cl=!1;function _d(t){tn===null?tn=[t]:tn.push(t)}function t5(t){No=!0,_d(t)}function Cn(){if(!cl&&tn!==null){cl=!0;var t=0,n=Pe;try{var o=tn;for(Pe=1;t<o.length;t++){var a=o[t];do a=a(!0);while(a!==null)}tn=null,No=!1}catch(u){throw tn!==null&&(tn=tn.slice(t+1)),U1(Aa,Cn),u}finally{Pe=n,cl=!1}}return null}var jr=[],br=0,zo=null,Oo=0,jt=[],bt=0,Hn=null,nn=1,rn="";function Un(t,n){jr[br++]=Oo,jr[br++]=zo,zo=t,Oo=n}function Hd(t,n,o){jt[bt++]=nn,jt[bt++]=rn,jt[bt++]=Hn,Hn=t;var a=nn;t=rn;var u=32-Bt(a)-1;a&=~(1<<u),o+=1;var f=32-Bt(n)+u;if(30<f){var g=u-u%5;f=(a&(1<<g)-1).toString(32),a>>=g,u-=g,nn=1<<32-Bt(n)+u|o<<u|a,rn=f+t}else nn=1<<f|o<<u|a,rn=t}function dl(t){t.return!==null&&(Un(t,1),Hd(t,1,0))}function fl(t){for(;t===zo;)zo=jr[--br],jr[br]=null,Oo=jr[--br],jr[br]=null;for(;t===Hn;)Hn=jt[--bt],jt[bt]=null,rn=jt[--bt],jt[bt]=null,nn=jt[--bt],jt[bt]=null}var Ct=null,wt=null,Ve=!1,Dt=null;function Ud(t,n){var o=Pt(5,null,null,0);o.elementType="DELETED",o.stateNode=n,o.return=t,n=t.deletions,n===null?(t.deletions=[o],t.flags|=16):n.push(o)}function Wd(t,n){switch(t.tag){case 5:var o=t.type;return n=n.nodeType!==1||o.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(t.stateNode=n,Ct=t,wt=yn(n.firstChild),!0):!1;case 6:return n=t.pendingProps===""||n.nodeType!==3?null:n,n!==null?(t.stateNode=n,Ct=t,wt=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(o=Hn!==null?{id:nn,overflow:rn}:null,t.memoizedState={dehydrated:n,treeContext:o,retryLane:1073741824},o=Pt(18,null,null,0),o.stateNode=n,o.return=t,t.child=o,Ct=t,wt=null,!0):!1;default:return!1}}function pl(t){return(t.mode&1)!==0&&(t.flags&128)===0}function hl(t){if(Ve){var n=wt;if(n){var o=n;if(!Wd(t,n)){if(pl(t))throw Error(i(418));n=yn(o.nextSibling);var a=Ct;n&&Wd(t,n)?Ud(a,o):(t.flags=t.flags&-4097|2,Ve=!1,Ct=t)}}else{if(pl(t))throw Error(i(418));t.flags=t.flags&-4097|2,Ve=!1,Ct=t}}}function Zd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ct=t}function _o(t){if(t!==Ct)return!1;if(!Ve)return Zd(t),Ve=!0,!1;var n;if((n=t.tag!==3)&&!(n=t.tag!==5)&&(n=t.type,n=n!=="head"&&n!=="body"&&!ol(t.type,t.memoizedProps)),n&&(n=wt)){if(pl(t))throw Kd(),Error(i(418));for(;n;)Ud(t,n),n=yn(n.nextSibling)}if(Zd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(i(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(n===0){wt=yn(t.nextSibling);break e}n--}else o!=="$"&&o!=="$!"&&o!=="$?"||n++}t=t.nextSibling}wt=null}}else wt=Ct?yn(t.stateNode.nextSibling):null;return!0}function Kd(){for(var t=wt;t;)t=yn(t.nextSibling)}function Tr(){wt=Ct=null,Ve=!1}function ml(t){Dt===null?Dt=[t]:Dt.push(t)}var n5=N.ReactCurrentBatchConfig;function Si(t,n,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(i(309));var a=o.stateNode}if(!a)throw Error(i(147,t));var u=a,f=""+t;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===f?n.ref:(n=function(g){var w=u.refs;g===null?delete w[f]:w[f]=g},n._stringRef=f,n)}if(typeof t!="string")throw Error(i(284));if(!o._owner)throw Error(i(290,t))}return t}function Ho(t,n){throw t=Object.prototype.toString.call(n),Error(i(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t))}function Gd(t){var n=t._init;return n(t._payload)}function Yd(t){function n(R,T){if(t){var M=R.deletions;M===null?(R.deletions=[T],R.flags|=16):M.push(T)}}function o(R,T){if(!t)return null;for(;T!==null;)n(R,T),T=T.sibling;return null}function a(R,T){for(R=new Map;T!==null;)T.key!==null?R.set(T.key,T):R.set(T.index,T),T=T.sibling;return R}function u(R,T){return R=Ln(R,T),R.index=0,R.sibling=null,R}function f(R,T,M){return R.index=M,t?(M=R.alternate,M!==null?(M=M.index,M<T?(R.flags|=2,T):M):(R.flags|=2,T)):(R.flags|=1048576,T)}function g(R){return t&&R.alternate===null&&(R.flags|=2),R}function w(R,T,M,K){return T===null||T.tag!==6?(T=su(M,R.mode,K),T.return=R,T):(T=u(T,M),T.return=R,T)}function k(R,T,M,K){var se=M.type;return se===V?O(R,T,M.props.children,K,M.key):T!==null&&(T.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===ke&&Gd(se)===T.type)?(K=u(T,M.props),K.ref=Si(R,T,M),K.return=R,K):(K=ps(M.type,M.key,M.props,null,R.mode,K),K.ref=Si(R,T,M),K.return=R,K)}function $(R,T,M,K){return T===null||T.tag!==4||T.stateNode.containerInfo!==M.containerInfo||T.stateNode.implementation!==M.implementation?(T=au(M,R.mode,K),T.return=R,T):(T=u(T,M.children||[]),T.return=R,T)}function O(R,T,M,K,se){return T===null||T.tag!==7?(T=qn(M,R.mode,K,se),T.return=R,T):(T=u(T,M),T.return=R,T)}function U(R,T,M){if(typeof T=="string"&&T!==""||typeof T=="number")return T=su(""+T,R.mode,M),T.return=R,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case W:return M=ps(T.type,T.key,T.props,null,R.mode,M),M.ref=Si(R,null,T),M.return=R,M;case q:return T=au(T,R.mode,M),T.return=R,T;case ke:var K=T._init;return U(R,K(T._payload),M)}if(Xr(T)||X(T))return T=qn(T,R.mode,M,null),T.return=R,T;Ho(R,T)}return null}function z(R,T,M,K){var se=T!==null?T.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return se!==null?null:w(R,T,""+M,K);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case W:return M.key===se?k(R,T,M,K):null;case q:return M.key===se?$(R,T,M,K):null;case ke:return se=M._init,z(R,T,se(M._payload),K)}if(Xr(M)||X(M))return se!==null?null:O(R,T,M,K,null);Ho(R,M)}return null}function te(R,T,M,K,se){if(typeof K=="string"&&K!==""||typeof K=="number")return R=R.get(M)||null,w(T,R,""+K,se);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case W:return R=R.get(K.key===null?M:K.key)||null,k(T,R,K,se);case q:return R=R.get(K.key===null?M:K.key)||null,$(T,R,K,se);case ke:var de=K._init;return te(R,T,M,de(K._payload),se)}if(Xr(K)||X(K))return R=R.get(M)||null,O(T,R,K,se,null);Ho(T,K)}return null}function re(R,T,M,K){for(var se=null,de=null,fe=T,pe=T=0,et=null;fe!==null&&pe<M.length;pe++){fe.index>pe?(et=fe,fe=null):et=fe.sibling;var be=z(R,fe,M[pe],K);if(be===null){fe===null&&(fe=et);break}t&&fe&&be.alternate===null&&n(R,fe),T=f(be,T,pe),de===null?se=be:de.sibling=be,de=be,fe=et}if(pe===M.length)return o(R,fe),Ve&&Un(R,pe),se;if(fe===null){for(;pe<M.length;pe++)fe=U(R,M[pe],K),fe!==null&&(T=f(fe,T,pe),de===null?se=fe:de.sibling=fe,de=fe);return Ve&&Un(R,pe),se}for(fe=a(R,fe);pe<M.length;pe++)et=te(fe,R,pe,M[pe],K),et!==null&&(t&&et.alternate!==null&&fe.delete(et.key===null?pe:et.key),T=f(et,T,pe),de===null?se=et:de.sibling=et,de=et);return t&&fe.forEach(function(Pn){return n(R,Pn)}),Ve&&Un(R,pe),se}function oe(R,T,M,K){var se=X(M);if(typeof se!="function")throw Error(i(150));if(M=se.call(M),M==null)throw Error(i(151));for(var de=se=null,fe=T,pe=T=0,et=null,be=M.next();fe!==null&&!be.done;pe++,be=M.next()){fe.index>pe?(et=fe,fe=null):et=fe.sibling;var Pn=z(R,fe,be.value,K);if(Pn===null){fe===null&&(fe=et);break}t&&fe&&Pn.alternate===null&&n(R,fe),T=f(Pn,T,pe),de===null?se=Pn:de.sibling=Pn,de=Pn,fe=et}if(be.done)return o(R,fe),Ve&&Un(R,pe),se;if(fe===null){for(;!be.done;pe++,be=M.next())be=U(R,be.value,K),be!==null&&(T=f(be,T,pe),de===null?se=be:de.sibling=be,de=be);return Ve&&Un(R,pe),se}for(fe=a(R,fe);!be.done;pe++,be=M.next())be=te(fe,R,pe,be.value,K),be!==null&&(t&&be.alternate!==null&&fe.delete(be.key===null?pe:be.key),T=f(be,T,pe),de===null?se=be:de.sibling=be,de=be);return t&&fe.forEach(function(D5){return n(R,D5)}),Ve&&Un(R,pe),se}function He(R,T,M,K){if(typeof M=="object"&&M!==null&&M.type===V&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case W:e:{for(var se=M.key,de=T;de!==null;){if(de.key===se){if(se=M.type,se===V){if(de.tag===7){o(R,de.sibling),T=u(de,M.props.children),T.return=R,R=T;break e}}else if(de.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===ke&&Gd(se)===de.type){o(R,de.sibling),T=u(de,M.props),T.ref=Si(R,de,M),T.return=R,R=T;break e}o(R,de);break}else n(R,de);de=de.sibling}M.type===V?(T=qn(M.props.children,R.mode,K,M.key),T.return=R,R=T):(K=ps(M.type,M.key,M.props,null,R.mode,K),K.ref=Si(R,T,M),K.return=R,R=K)}return g(R);case q:e:{for(de=M.key;T!==null;){if(T.key===de)if(T.tag===4&&T.stateNode.containerInfo===M.containerInfo&&T.stateNode.implementation===M.implementation){o(R,T.sibling),T=u(T,M.children||[]),T.return=R,R=T;break e}else{o(R,T);break}else n(R,T);T=T.sibling}T=au(M,R.mode,K),T.return=R,R=T}return g(R);case ke:return de=M._init,He(R,T,de(M._payload),K)}if(Xr(M))return re(R,T,M,K);if(X(M))return oe(R,T,M,K);Ho(R,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,T!==null&&T.tag===6?(o(R,T.sibling),T=u(T,M),T.return=R,R=T):(o(R,T),T=su(M,R.mode,K),T.return=R,R=T),g(R)):o(R,T)}return He}var Er=Yd(!0),Qd=Yd(!1),Uo=vn(null),Wo=null,Lr=null,gl=null;function yl(){gl=Lr=Wo=null}function vl(t){var n=Uo.current;$e(Uo),t._currentValue=n}function xl(t,n,o){for(;t!==null;){var a=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),t===o)break;t=t.return}}function Pr(t,n){Wo=t,gl=Lr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&n)!==0&&(mt=!0),t.firstContext=null)}function Tt(t){var n=t._currentValue;if(gl!==t)if(t={context:t,memoizedValue:n,next:null},Lr===null){if(Wo===null)throw Error(i(308));Lr=t,Wo.dependencies={lanes:0,firstContext:t}}else Lr=Lr.next=t;return n}var Wn=null;function Cl(t){Wn===null?Wn=[t]:Wn.push(t)}function Xd(t,n,o,a){var u=n.interleaved;return u===null?(o.next=o,Cl(n)):(o.next=u.next,u.next=o),n.interleaved=o,on(t,a)}function on(t,n){t.lanes|=n;var o=t.alternate;for(o!==null&&(o.lanes|=n),o=t,t=t.return;t!==null;)t.childLanes|=n,o=t.alternate,o!==null&&(o.childLanes|=n),o=t,t=t.return;return o.tag===3?o.stateNode:null}var wn=!1;function wl(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function qd(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function sn(t,n){return{eventTime:t,lane:n,tag:0,payload:null,callback:null,next:null}}function Sn(t,n,o){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(je&2)!==0){var u=a.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),a.pending=n,on(t,o)}return u=a.interleaved,u===null?(n.next=n,Cl(a)):(n.next=u.next,u.next=n),a.interleaved=n,on(t,o)}function Zo(t,n,o){if(n=n.updateQueue,n!==null&&(n=n.shared,(o&4194240)!==0)){var a=n.lanes;a&=t.pendingLanes,o|=a,n.lanes=o,Da(t,o)}}function Jd(t,n){var o=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,o===a)){var u=null,f=null;if(o=o.firstBaseUpdate,o!==null){do{var g={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};f===null?u=f=g:f=f.next=g,o=o.next}while(o!==null);f===null?u=f=n:f=f.next=n}else u=f=n;o={baseState:a.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:a.shared,effects:a.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=n:t.next=n,o.lastBaseUpdate=n}function Ko(t,n,o,a){var u=t.updateQueue;wn=!1;var f=u.firstBaseUpdate,g=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var k=w,$=k.next;k.next=null,g===null?f=$:g.next=$,g=k;var O=t.alternate;O!==null&&(O=O.updateQueue,w=O.lastBaseUpdate,w!==g&&(w===null?O.firstBaseUpdate=$:w.next=$,O.lastBaseUpdate=k))}if(f!==null){var U=u.baseState;g=0,O=$=k=null,w=f;do{var z=w.lane,te=w.eventTime;if((a&z)===z){O!==null&&(O=O.next={eventTime:te,lane:0,tag:w.tag,payload:w.payload,callback:w.callback,next:null});e:{var re=t,oe=w;switch(z=n,te=o,oe.tag){case 1:if(re=oe.payload,typeof re=="function"){U=re.call(te,U,z);break e}U=re;break e;case 3:re.flags=re.flags&-65537|128;case 0:if(re=oe.payload,z=typeof re=="function"?re.call(te,U,z):re,z==null)break e;U=Z({},U,z);break e;case 2:wn=!0}}w.callback!==null&&w.lane!==0&&(t.flags|=64,z=u.effects,z===null?u.effects=[w]:z.push(w))}else te={eventTime:te,lane:z,tag:w.tag,payload:w.payload,callback:w.callback,next:null},O===null?($=O=te,k=U):O=O.next=te,g|=z;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;z=w,w=z.next,z.next=null,u.lastBaseUpdate=z,u.shared.pending=null}}while(!0);if(O===null&&(k=U),u.baseState=k,u.firstBaseUpdate=$,u.lastBaseUpdate=O,n=u.shared.interleaved,n!==null){u=n;do g|=u.lane,u=u.next;while(u!==n)}else f===null&&(u.shared.lanes=0);Gn|=g,t.lanes=g,t.memoizedState=U}}function ef(t,n,o){if(t=n.effects,n.effects=null,t!==null)for(n=0;n<t.length;n++){var a=t[n],u=a.callback;if(u!==null){if(a.callback=null,a=o,typeof u!="function")throw Error(i(191,u));u.call(a)}}}var ki={},Kt=vn(ki),ji=vn(ki),bi=vn(ki);function Zn(t){if(t===ki)throw Error(i(174));return t}function Sl(t,n){switch(Ae(bi,n),Ae(ji,t),Ae(Kt,ki),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ka(null,"");break;default:t=t===8?n.parentNode:n,n=t.namespaceURI||null,t=t.tagName,n=ka(n,t)}$e(Kt),Ae(Kt,n)}function Rr(){$e(Kt),$e(ji),$e(bi)}function tf(t){Zn(bi.current);var n=Zn(Kt.current),o=ka(n,t.type);n!==o&&(Ae(ji,t),Ae(Kt,o))}function kl(t){ji.current===t&&($e(Kt),$e(ji))}var Ie=vn(0);function Go(t){for(var n=t;n!==null;){if(n.tag===13){var o=n.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var jl=[];function bl(){for(var t=0;t<jl.length;t++)jl[t]._workInProgressVersionPrimary=null;jl.length=0}var Yo=N.ReactCurrentDispatcher,Tl=N.ReactCurrentBatchConfig,Kn=0,Fe=null,Ke=null,qe=null,Qo=!1,Ti=!1,Ei=0,r5=0;function st(){throw Error(i(321))}function El(t,n){if(n===null)return!1;for(var o=0;o<n.length&&o<t.length;o++)if(!$t(t[o],n[o]))return!1;return!0}function Ll(t,n,o,a,u,f){if(Kn=f,Fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Yo.current=t===null||t.memoizedState===null?a5:l5,t=o(a,u),Ti){f=0;do{if(Ti=!1,Ei=0,25<=f)throw Error(i(301));f+=1,qe=Ke=null,n.updateQueue=null,Yo.current=u5,t=o(a,u)}while(Ti)}if(Yo.current=Jo,n=Ke!==null&&Ke.next!==null,Kn=0,qe=Ke=Fe=null,Qo=!1,n)throw Error(i(300));return t}function Pl(){var t=Ei!==0;return Ei=0,t}function Gt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?Fe.memoizedState=qe=t:qe=qe.next=t,qe}function Et(){if(Ke===null){var t=Fe.alternate;t=t!==null?t.memoizedState:null}else t=Ke.next;var n=qe===null?Fe.memoizedState:qe.next;if(n!==null)qe=n,Ke=t;else{if(t===null)throw Error(i(310));Ke=t,t={memoizedState:Ke.memoizedState,baseState:Ke.baseState,baseQueue:Ke.baseQueue,queue:Ke.queue,next:null},qe===null?Fe.memoizedState=qe=t:qe=qe.next=t}return qe}function Li(t,n){return typeof n=="function"?n(t):n}function Rl(t){var n=Et(),o=n.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=t;var a=Ke,u=a.baseQueue,f=o.pending;if(f!==null){if(u!==null){var g=u.next;u.next=f.next,f.next=g}a.baseQueue=u=f,o.pending=null}if(u!==null){f=u.next,a=a.baseState;var w=g=null,k=null,$=f;do{var O=$.lane;if((Kn&O)===O)k!==null&&(k=k.next={lane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),a=$.hasEagerState?$.eagerState:t(a,$.action);else{var U={lane:O,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null};k===null?(w=k=U,g=a):k=k.next=U,Fe.lanes|=O,Gn|=O}$=$.next}while($!==null&&$!==f);k===null?g=a:k.next=w,$t(a,n.memoizedState)||(mt=!0),n.memoizedState=a,n.baseState=g,n.baseQueue=k,o.lastRenderedState=a}if(t=o.interleaved,t!==null){u=t;do f=u.lane,Fe.lanes|=f,Gn|=f,u=u.next;while(u!==t)}else u===null&&(o.lanes=0);return[n.memoizedState,o.dispatch]}function Ml(t){var n=Et(),o=n.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=t;var a=o.dispatch,u=o.pending,f=n.memoizedState;if(u!==null){o.pending=null;var g=u=u.next;do f=t(f,g.action),g=g.next;while(g!==u);$t(f,n.memoizedState)||(mt=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),o.lastRenderedState=f}return[f,a]}function nf(){}function rf(t,n){var o=Fe,a=Et(),u=n(),f=!$t(a.memoizedState,u);if(f&&(a.memoizedState=u,mt=!0),a=a.queue,Al(af.bind(null,o,a,t),[t]),a.getSnapshot!==n||f||qe!==null&&qe.memoizedState.tag&1){if(o.flags|=2048,Pi(9,sf.bind(null,o,a,u,n),void 0,null),Je===null)throw Error(i(349));(Kn&30)!==0||of(o,n,u)}return u}function of(t,n,o){t.flags|=16384,t={getSnapshot:n,value:o},n=Fe.updateQueue,n===null?(n={lastEffect:null,stores:null},Fe.updateQueue=n,n.stores=[t]):(o=n.stores,o===null?n.stores=[t]:o.push(t))}function sf(t,n,o,a){n.value=o,n.getSnapshot=a,lf(n)&&uf(t)}function af(t,n,o){return o(function(){lf(n)&&uf(t)})}function lf(t){var n=t.getSnapshot;t=t.value;try{var o=n();return!$t(t,o)}catch{return!0}}function uf(t){var n=on(t,1);n!==null&&Nt(n,t,1,-1)}function cf(t){var n=Gt();return typeof t=="function"&&(t=t()),n.memoizedState=n.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Li,lastRenderedState:t},n.queue=t,t=t.dispatch=s5.bind(null,Fe,t),[n.memoizedState,t]}function Pi(t,n,o,a){return t={tag:t,create:n,destroy:o,deps:a,next:null},n=Fe.updateQueue,n===null?(n={lastEffect:null,stores:null},Fe.updateQueue=n,n.lastEffect=t.next=t):(o=n.lastEffect,o===null?n.lastEffect=t.next=t:(a=o.next,o.next=t,t.next=a,n.lastEffect=t)),t}function df(){return Et().memoizedState}function Xo(t,n,o,a){var u=Gt();Fe.flags|=t,u.memoizedState=Pi(1|n,o,void 0,a===void 0?null:a)}function qo(t,n,o,a){var u=Et();a=a===void 0?null:a;var f=void 0;if(Ke!==null){var g=Ke.memoizedState;if(f=g.destroy,a!==null&&El(a,g.deps)){u.memoizedState=Pi(n,o,f,a);return}}Fe.flags|=t,u.memoizedState=Pi(1|n,o,f,a)}function ff(t,n){return Xo(8390656,8,t,n)}function Al(t,n){return qo(2048,8,t,n)}function pf(t,n){return qo(4,2,t,n)}function hf(t,n){return qo(4,4,t,n)}function mf(t,n){if(typeof n=="function")return t=t(),n(t),function(){n(null)};if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function gf(t,n,o){return o=o!=null?o.concat([t]):null,qo(4,4,mf.bind(null,n,t),o)}function Bl(){}function yf(t,n){var o=Et();n=n===void 0?null:n;var a=o.memoizedState;return a!==null&&n!==null&&El(n,a[1])?a[0]:(o.memoizedState=[t,n],t)}function vf(t,n){var o=Et();n=n===void 0?null:n;var a=o.memoizedState;return a!==null&&n!==null&&El(n,a[1])?a[0]:(t=t(),o.memoizedState=[t,n],t)}function xf(t,n,o){return(Kn&21)===0?(t.baseState&&(t.baseState=!1,mt=!0),t.memoizedState=o):($t(o,n)||(o=G1(),Fe.lanes|=o,Gn|=o,t.baseState=!0),n)}function i5(t,n){var o=Pe;Pe=o!==0&&4>o?o:4,t(!0);var a=Tl.transition;Tl.transition={};try{t(!1),n()}finally{Pe=o,Tl.transition=a}}function Cf(){return Et().memoizedState}function o5(t,n,o){var a=Tn(t);if(o={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null},wf(t))Sf(n,o);else if(o=Xd(t,n,o,a),o!==null){var u=ct();Nt(o,t,a,u),kf(o,n,a)}}function s5(t,n,o){var a=Tn(t),u={lane:a,action:o,hasEagerState:!1,eagerState:null,next:null};if(wf(t))Sf(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,w=f(g,o);if(u.hasEagerState=!0,u.eagerState=w,$t(w,g)){var k=n.interleaved;k===null?(u.next=u,Cl(n)):(u.next=k.next,k.next=u),n.interleaved=u;return}}catch{}finally{}o=Xd(t,n,u,a),o!==null&&(u=ct(),Nt(o,t,a,u),kf(o,n,a))}}function wf(t){var n=t.alternate;return t===Fe||n!==null&&n===Fe}function Sf(t,n){Ti=Qo=!0;var o=t.pending;o===null?n.next=n:(n.next=o.next,o.next=n),t.pending=n}function kf(t,n,o){if((o&4194240)!==0){var a=n.lanes;a&=t.pendingLanes,o|=a,n.lanes=o,Da(t,o)}}var Jo={readContext:Tt,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useInsertionEffect:st,useLayoutEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useMutableSource:st,useSyncExternalStore:st,useId:st,unstable_isNewReconciler:!1},a5={readContext:Tt,useCallback:function(t,n){return Gt().memoizedState=[t,n===void 0?null:n],t},useContext:Tt,useEffect:ff,useImperativeHandle:function(t,n,o){return o=o!=null?o.concat([t]):null,Xo(4194308,4,mf.bind(null,n,t),o)},useLayoutEffect:function(t,n){return Xo(4194308,4,t,n)},useInsertionEffect:function(t,n){return Xo(4,2,t,n)},useMemo:function(t,n){var o=Gt();return n=n===void 0?null:n,t=t(),o.memoizedState=[t,n],t},useReducer:function(t,n,o){var a=Gt();return n=o!==void 0?o(n):n,a.memoizedState=a.baseState=n,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},a.queue=t,t=t.dispatch=o5.bind(null,Fe,t),[a.memoizedState,t]},useRef:function(t){var n=Gt();return t={current:t},n.memoizedState=t},useState:cf,useDebugValue:Bl,useDeferredValue:function(t){return Gt().memoizedState=t},useTransition:function(){var t=cf(!1),n=t[0];return t=i5.bind(null,t[1]),Gt().memoizedState=t,[n,t]},useMutableSource:function(){},useSyncExternalStore:function(t,n,o){var a=Fe,u=Gt();if(Ve){if(o===void 0)throw Error(i(407));o=o()}else{if(o=n(),Je===null)throw Error(i(349));(Kn&30)!==0||of(a,n,o)}u.memoizedState=o;var f={value:o,getSnapshot:n};return u.queue=f,ff(af.bind(null,a,f,t),[t]),a.flags|=2048,Pi(9,sf.bind(null,a,f,o,n),void 0,null),o},useId:function(){var t=Gt(),n=Je.identifierPrefix;if(Ve){var o=rn,a=nn;o=(a&~(1<<32-Bt(a)-1)).toString(32)+o,n=":"+n+"R"+o,o=Ei++,0<o&&(n+="H"+o.toString(32)),n+=":"}else o=r5++,n=":"+n+"r"+o.toString(32)+":";return t.memoizedState=n},unstable_isNewReconciler:!1},l5={readContext:Tt,useCallback:yf,useContext:Tt,useEffect:Al,useImperativeHandle:gf,useInsertionEffect:pf,useLayoutEffect:hf,useMemo:vf,useReducer:Rl,useRef:df,useState:function(){return Rl(Li)},useDebugValue:Bl,useDeferredValue:function(t){var n=Et();return xf(n,Ke.memoizedState,t)},useTransition:function(){var t=Rl(Li)[0],n=Et().memoizedState;return[t,n]},useMutableSource:nf,useSyncExternalStore:rf,useId:Cf,unstable_isNewReconciler:!1},u5={readContext:Tt,useCallback:yf,useContext:Tt,useEffect:Al,useImperativeHandle:gf,useInsertionEffect:pf,useLayoutEffect:hf,useMemo:vf,useReducer:Ml,useRef:df,useState:function(){return Ml(Li)},useDebugValue:Bl,useDeferredValue:function(t){var n=Et();return Ke===null?n.memoizedState=t:xf(n,Ke.memoizedState,t)},useTransition:function(){var t=Ml(Li)[0],n=Et().memoizedState;return[t,n]},useMutableSource:nf,useSyncExternalStore:rf,useId:Cf,unstable_isNewReconciler:!1};function Vt(t,n){if(t&&t.defaultProps){n=Z({},n),t=t.defaultProps;for(var o in t)n[o]===void 0&&(n[o]=t[o]);return n}return n}function $l(t,n,o,a){n=t.memoizedState,o=o(a,n),o=o==null?n:Z({},n,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var es={isMounted:function(t){return(t=t._reactInternals)?zn(t)===t:!1},enqueueSetState:function(t,n,o){t=t._reactInternals;var a=ct(),u=Tn(t),f=sn(a,u);f.payload=n,o!=null&&(f.callback=o),n=Sn(t,f,u),n!==null&&(Nt(n,t,u,a),Zo(n,t,u))},enqueueReplaceState:function(t,n,o){t=t._reactInternals;var a=ct(),u=Tn(t),f=sn(a,u);f.tag=1,f.payload=n,o!=null&&(f.callback=o),n=Sn(t,f,u),n!==null&&(Nt(n,t,u,a),Zo(n,t,u))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var o=ct(),a=Tn(t),u=sn(o,a);u.tag=2,n!=null&&(u.callback=n),n=Sn(t,u,a),n!==null&&(Nt(n,t,a,o),Zo(n,t,a))}};function jf(t,n,o,a,u,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,f,g):n.prototype&&n.prototype.isPureReactComponent?!mi(o,a)||!mi(u,f):!0}function bf(t,n,o){var a=!1,u=xn,f=n.contextType;return typeof f=="object"&&f!==null?f=Tt(f):(u=ht(n)?_n:ot.current,a=n.contextTypes,f=(a=a!=null)?kr(t,u):xn),n=new n(o,f),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=es,t.stateNode=n,n._reactInternals=t,a&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=u,t.__reactInternalMemoizedMaskedChildContext=f),n}function Tf(t,n,o,a){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(o,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(o,a),n.state!==t&&es.enqueueReplaceState(n,n.state,null)}function Dl(t,n,o,a){var u=t.stateNode;u.props=o,u.state=t.memoizedState,u.refs={},wl(t);var f=n.contextType;typeof f=="object"&&f!==null?u.context=Tt(f):(f=ht(n)?_n:ot.current,u.context=kr(t,f)),u.state=t.memoizedState,f=n.getDerivedStateFromProps,typeof f=="function"&&($l(t,n,f,o),u.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(n=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),n!==u.state&&es.enqueueReplaceState(u,u.state,null),Ko(t,o,u,a),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308)}function Mr(t,n){try{var o="",a=n;do o+=le(a),a=a.return;while(a);var u=o}catch(f){u=`
Error generating stack: `+f.message+`
`+f.stack}return{value:t,source:n,stack:u,digest:null}}function Vl(t,n,o){return{value:t,source:null,stack:o??null,digest:n??null}}function Il(t,n){try{console.error(n.value)}catch(o){setTimeout(function(){throw o})}}var c5=typeof WeakMap=="function"?WeakMap:Map;function Ef(t,n,o){o=sn(-1,o),o.tag=3,o.payload={element:null};var a=n.value;return o.callback=function(){as||(as=!0,ql=a),Il(t,n)},o}function Lf(t,n,o){o=sn(-1,o),o.tag=3;var a=t.type.getDerivedStateFromError;if(typeof a=="function"){var u=n.value;o.payload=function(){return a(u)},o.callback=function(){Il(t,n)}}var f=t.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(o.callback=function(){Il(t,n),typeof a!="function"&&(jn===null?jn=new Set([this]):jn.add(this));var g=n.stack;this.componentDidCatch(n.value,{componentStack:g!==null?g:""})}),o}function Pf(t,n,o){var a=t.pingCache;if(a===null){a=t.pingCache=new c5;var u=new Set;a.set(n,u)}else u=a.get(n),u===void 0&&(u=new Set,a.set(n,u));u.has(o)||(u.add(o),t=j5.bind(null,t,n,o),n.then(t,t))}function Rf(t){do{var n;if((n=t.tag===13)&&(n=t.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return t;t=t.return}while(t!==null);return null}function Mf(t,n,o,a,u){return(t.mode&1)===0?(t===n?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(n=sn(-1,1),n.tag=2,Sn(o,n,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=u,t)}var d5=N.ReactCurrentOwner,mt=!1;function ut(t,n,o,a){n.child=t===null?Qd(n,null,o,a):Er(n,t.child,o,a)}function Af(t,n,o,a,u){o=o.render;var f=n.ref;return Pr(n,u),a=Ll(t,n,o,a,f,u),o=Pl(),t!==null&&!mt?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~u,an(t,n,u)):(Ve&&o&&dl(n),n.flags|=1,ut(t,n,a,u),n.child)}function Bf(t,n,o,a,u){if(t===null){var f=o.type;return typeof f=="function"&&!ou(f)&&f.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(n.tag=15,n.type=f,$f(t,n,f,a,u)):(t=ps(o.type,null,a,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,(t.lanes&u)===0){var g=f.memoizedProps;if(o=o.compare,o=o!==null?o:mi,o(g,a)&&t.ref===n.ref)return an(t,n,u)}return n.flags|=1,t=Ln(f,a),t.ref=n.ref,t.return=n,n.child=t}function $f(t,n,o,a,u){if(t!==null){var f=t.memoizedProps;if(mi(f,a)&&t.ref===n.ref)if(mt=!1,n.pendingProps=a=f,(t.lanes&u)!==0)(t.flags&131072)!==0&&(mt=!0);else return n.lanes=t.lanes,an(t,n,u)}return Fl(t,n,o,a,u)}function Df(t,n,o){var a=n.pendingProps,u=a.children,f=t!==null?t.memoizedState:null;if(a.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ae(Br,St),St|=o;else{if((o&1073741824)===0)return t=f!==null?f.baseLanes|o:o,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:t,cachePool:null,transitions:null},n.updateQueue=null,Ae(Br,St),St|=t,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=f!==null?f.baseLanes:o,Ae(Br,St),St|=a}else f!==null?(a=f.baseLanes|o,n.memoizedState=null):a=o,Ae(Br,St),St|=a;return ut(t,n,u,o),n.child}function Vf(t,n){var o=n.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(n.flags|=512,n.flags|=2097152)}function Fl(t,n,o,a,u){var f=ht(o)?_n:ot.current;return f=kr(n,f),Pr(n,u),o=Ll(t,n,o,a,f,u),a=Pl(),t!==null&&!mt?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~u,an(t,n,u)):(Ve&&a&&dl(n),n.flags|=1,ut(t,n,o,u),n.child)}function If(t,n,o,a,u){if(ht(o)){var f=!0;Fo(n)}else f=!1;if(Pr(n,u),n.stateNode===null)ns(t,n),bf(n,o,a),Dl(n,o,a,u),a=!0;else if(t===null){var g=n.stateNode,w=n.memoizedProps;g.props=w;var k=g.context,$=o.contextType;typeof $=="object"&&$!==null?$=Tt($):($=ht(o)?_n:ot.current,$=kr(n,$));var O=o.getDerivedStateFromProps,U=typeof O=="function"||typeof g.getSnapshotBeforeUpdate=="function";U||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(w!==a||k!==$)&&Tf(n,g,a,$),wn=!1;var z=n.memoizedState;g.state=z,Ko(n,a,g,u),k=n.memoizedState,w!==a||z!==k||pt.current||wn?(typeof O=="function"&&($l(n,o,O,a),k=n.memoizedState),(w=wn||jf(n,o,w,a,z,k,$))?(U||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(n.flags|=4194308)):(typeof g.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=k),g.props=a,g.state=k,g.context=$,a=w):(typeof g.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{g=n.stateNode,qd(t,n),w=n.memoizedProps,$=n.type===n.elementType?w:Vt(n.type,w),g.props=$,U=n.pendingProps,z=g.context,k=o.contextType,typeof k=="object"&&k!==null?k=Tt(k):(k=ht(o)?_n:ot.current,k=kr(n,k));var te=o.getDerivedStateFromProps;(O=typeof te=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(w!==U||z!==k)&&Tf(n,g,a,k),wn=!1,z=n.memoizedState,g.state=z,Ko(n,a,g,u);var re=n.memoizedState;w!==U||z!==re||pt.current||wn?(typeof te=="function"&&($l(n,o,te,a),re=n.memoizedState),($=wn||jf(n,o,$,a,z,re,k)||!1)?(O||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(a,re,k),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(a,re,k)),typeof g.componentDidUpdate=="function"&&(n.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof g.componentDidUpdate!="function"||w===t.memoizedProps&&z===t.memoizedState||(n.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||w===t.memoizedProps&&z===t.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=re),g.props=a,g.state=re,g.context=k,a=$):(typeof g.componentDidUpdate!="function"||w===t.memoizedProps&&z===t.memoizedState||(n.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||w===t.memoizedProps&&z===t.memoizedState||(n.flags|=1024),a=!1)}return Nl(t,n,o,a,f,u)}function Nl(t,n,o,a,u,f){Vf(t,n);var g=(n.flags&128)!==0;if(!a&&!g)return u&&Od(n,o,!1),an(t,n,f);a=n.stateNode,d5.current=n;var w=g&&typeof o.getDerivedStateFromError!="function"?null:a.render();return n.flags|=1,t!==null&&g?(n.child=Er(n,t.child,null,f),n.child=Er(n,null,w,f)):ut(t,n,w,f),n.memoizedState=a.state,u&&Od(n,o,!0),n.child}function Ff(t){var n=t.stateNode;n.pendingContext?Nd(t,n.pendingContext,n.pendingContext!==n.context):n.context&&Nd(t,n.context,!1),Sl(t,n.containerInfo)}function Nf(t,n,o,a,u){return Tr(),ml(u),n.flags|=256,ut(t,n,o,a),n.child}var zl={dehydrated:null,treeContext:null,retryLane:0};function Ol(t){return{baseLanes:t,cachePool:null,transitions:null}}function zf(t,n,o){var a=n.pendingProps,u=Ie.current,f=!1,g=(n.flags&128)!==0,w;if((w=g)||(w=t!==null&&t.memoizedState===null?!1:(u&2)!==0),w?(f=!0,n.flags&=-129):(t===null||t.memoizedState!==null)&&(u|=1),Ae(Ie,u&1),t===null)return hl(n),t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((n.mode&1)===0?n.lanes=1:t.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(g=a.children,t=a.fallback,f?(a=n.mode,f=n.child,g={mode:"hidden",children:g},(a&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=g):f=hs(g,a,0,null),t=qn(t,a,o,null),f.return=n,t.return=n,f.sibling=t,n.child=f,n.child.memoizedState=Ol(o),n.memoizedState=zl,t):_l(n,g));if(u=t.memoizedState,u!==null&&(w=u.dehydrated,w!==null))return f5(t,n,g,a,w,u,o);if(f){f=a.fallback,g=n.mode,u=t.child,w=u.sibling;var k={mode:"hidden",children:a.children};return(g&1)===0&&n.child!==u?(a=n.child,a.childLanes=0,a.pendingProps=k,n.deletions=null):(a=Ln(u,k),a.subtreeFlags=u.subtreeFlags&14680064),w!==null?f=Ln(w,f):(f=qn(f,g,o,null),f.flags|=2),f.return=n,a.return=n,a.sibling=f,n.child=a,a=f,f=n.child,g=t.child.memoizedState,g=g===null?Ol(o):{baseLanes:g.baseLanes|o,cachePool:null,transitions:g.transitions},f.memoizedState=g,f.childLanes=t.childLanes&~o,n.memoizedState=zl,a}return f=t.child,t=f.sibling,a=Ln(f,{mode:"visible",children:a.children}),(n.mode&1)===0&&(a.lanes=o),a.return=n,a.sibling=null,t!==null&&(o=n.deletions,o===null?(n.deletions=[t],n.flags|=16):o.push(t)),n.child=a,n.memoizedState=null,a}function _l(t,n){return n=hs({mode:"visible",children:n},t.mode,0,null),n.return=t,t.child=n}function ts(t,n,o,a){return a!==null&&ml(a),Er(n,t.child,null,o),t=_l(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function f5(t,n,o,a,u,f,g){if(o)return n.flags&256?(n.flags&=-257,a=Vl(Error(i(422))),ts(t,n,g,a)):n.memoizedState!==null?(n.child=t.child,n.flags|=128,null):(f=a.fallback,u=n.mode,a=hs({mode:"visible",children:a.children},u,0,null),f=qn(f,u,g,null),f.flags|=2,a.return=n,f.return=n,a.sibling=f,n.child=a,(n.mode&1)!==0&&Er(n,t.child,null,g),n.child.memoizedState=Ol(g),n.memoizedState=zl,f);if((n.mode&1)===0)return ts(t,n,g,null);if(u.data==="$!"){if(a=u.nextSibling&&u.nextSibling.dataset,a)var w=a.dgst;return a=w,f=Error(i(419)),a=Vl(f,a,void 0),ts(t,n,g,a)}if(w=(g&t.childLanes)!==0,mt||w){if(a=Je,a!==null){switch(g&-g){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(a.suspendedLanes|g))!==0?0:u,u!==0&&u!==f.retryLane&&(f.retryLane=u,on(t,u),Nt(a,t,u,-1))}return iu(),a=Vl(Error(i(421))),ts(t,n,g,a)}return u.data==="$?"?(n.flags|=128,n.child=t.child,n=b5.bind(null,t),u._reactRetry=n,null):(t=f.treeContext,wt=yn(u.nextSibling),Ct=n,Ve=!0,Dt=null,t!==null&&(jt[bt++]=nn,jt[bt++]=rn,jt[bt++]=Hn,nn=t.id,rn=t.overflow,Hn=n),n=_l(n,a.children),n.flags|=4096,n)}function Of(t,n,o){t.lanes|=n;var a=t.alternate;a!==null&&(a.lanes|=n),xl(t.return,n,o)}function Hl(t,n,o,a,u){var f=t.memoizedState;f===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:o,tailMode:u}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=a,f.tail=o,f.tailMode=u)}function _f(t,n,o){var a=n.pendingProps,u=a.revealOrder,f=a.tail;if(ut(t,n,a.children,o),a=Ie.current,(a&2)!==0)a=a&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Of(t,o,n);else if(t.tag===19)Of(t,o,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}if(Ae(Ie,a),(n.mode&1)===0)n.memoizedState=null;else switch(u){case"forwards":for(o=n.child,u=null;o!==null;)t=o.alternate,t!==null&&Go(t)===null&&(u=o),o=o.sibling;o=u,o===null?(u=n.child,n.child=null):(u=o.sibling,o.sibling=null),Hl(n,!1,u,o,f);break;case"backwards":for(o=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Go(t)===null){n.child=u;break}t=u.sibling,u.sibling=o,o=u,u=t}Hl(n,!0,o,null,f);break;case"together":Hl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ns(t,n){(n.mode&1)===0&&t!==null&&(t.alternate=null,n.alternate=null,n.flags|=2)}function an(t,n,o){if(t!==null&&(n.dependencies=t.dependencies),Gn|=n.lanes,(o&n.childLanes)===0)return null;if(t!==null&&n.child!==t.child)throw Error(i(153));if(n.child!==null){for(t=n.child,o=Ln(t,t.pendingProps),n.child=o,o.return=n;t.sibling!==null;)t=t.sibling,o=o.sibling=Ln(t,t.pendingProps),o.return=n;o.sibling=null}return n.child}function p5(t,n,o){switch(n.tag){case 3:Ff(n),Tr();break;case 5:tf(n);break;case 1:ht(n.type)&&Fo(n);break;case 4:Sl(n,n.stateNode.containerInfo);break;case 10:var a=n.type._context,u=n.memoizedProps.value;Ae(Uo,a._currentValue),a._currentValue=u;break;case 13:if(a=n.memoizedState,a!==null)return a.dehydrated!==null?(Ae(Ie,Ie.current&1),n.flags|=128,null):(o&n.child.childLanes)!==0?zf(t,n,o):(Ae(Ie,Ie.current&1),t=an(t,n,o),t!==null?t.sibling:null);Ae(Ie,Ie.current&1);break;case 19:if(a=(o&n.childLanes)!==0,(t.flags&128)!==0){if(a)return _f(t,n,o);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Ae(Ie,Ie.current),a)break;return null;case 22:case 23:return n.lanes=0,Df(t,n,o)}return an(t,n,o)}var Hf,Ul,Uf,Wf;Hf=function(t,n){for(var o=n.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===n)break;for(;o.sibling===null;){if(o.return===null||o.return===n)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Ul=function(){},Uf=function(t,n,o,a){var u=t.memoizedProps;if(u!==a){t=n.stateNode,Zn(Kt.current);var f=null;switch(o){case"input":u=xa(t,u),a=xa(t,a),f=[];break;case"select":u=Z({},u,{value:void 0}),a=Z({},a,{value:void 0}),f=[];break;case"textarea":u=Sa(t,u),a=Sa(t,a),f=[];break;default:typeof u.onClick!="function"&&typeof a.onClick=="function"&&(t.onclick=Do)}ja(o,a);var g;o=null;for($ in u)if(!a.hasOwnProperty($)&&u.hasOwnProperty($)&&u[$]!=null)if($==="style"){var w=u[$];for(g in w)w.hasOwnProperty(g)&&(o||(o={}),o[g]="")}else $!=="dangerouslySetInnerHTML"&&$!=="children"&&$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&$!=="autoFocus"&&(l.hasOwnProperty($)?f||(f=[]):(f=f||[]).push($,null));for($ in a){var k=a[$];if(w=u!=null?u[$]:void 0,a.hasOwnProperty($)&&k!==w&&(k!=null||w!=null))if($==="style")if(w){for(g in w)!w.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(o||(o={}),o[g]="");for(g in k)k.hasOwnProperty(g)&&w[g]!==k[g]&&(o||(o={}),o[g]=k[g])}else o||(f||(f=[]),f.push($,o)),o=k;else $==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,w=w?w.__html:void 0,k!=null&&w!==k&&(f=f||[]).push($,k)):$==="children"?typeof k!="string"&&typeof k!="number"||(f=f||[]).push($,""+k):$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&(l.hasOwnProperty($)?(k!=null&&$==="onScroll"&&Be("scroll",t),f||w===k||(f=[])):(f=f||[]).push($,k))}o&&(f=f||[]).push("style",o);var $=f;(n.updateQueue=$)&&(n.flags|=4)}},Wf=function(t,n,o,a){o!==a&&(n.flags|=4)};function Ri(t,n){if(!Ve)switch(t.tailMode){case"hidden":n=t.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var a=null;o!==null;)o.alternate!==null&&(a=o),o=o.sibling;a===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function at(t){var n=t.alternate!==null&&t.alternate.child===t.child,o=0,a=0;if(n)for(var u=t.child;u!==null;)o|=u.lanes|u.childLanes,a|=u.subtreeFlags&14680064,a|=u.flags&14680064,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)o|=u.lanes|u.childLanes,a|=u.subtreeFlags,a|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=a,t.childLanes=o,n}function h5(t,n,o){var a=n.pendingProps;switch(fl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(n),null;case 1:return ht(n.type)&&Io(),at(n),null;case 3:return a=n.stateNode,Rr(),$e(pt),$e(ot),bl(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(_o(n)?n.flags|=4:t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Dt!==null&&(tu(Dt),Dt=null))),Ul(t,n),at(n),null;case 5:kl(n);var u=Zn(bi.current);if(o=n.type,t!==null&&n.stateNode!=null)Uf(t,n,o,a,u),t.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!a){if(n.stateNode===null)throw Error(i(166));return at(n),null}if(t=Zn(Kt.current),_o(n)){a=n.stateNode,o=n.type;var f=n.memoizedProps;switch(a[Zt]=n,a[Ci]=f,t=(n.mode&1)!==0,o){case"dialog":Be("cancel",a),Be("close",a);break;case"iframe":case"object":case"embed":Be("load",a);break;case"video":case"audio":for(u=0;u<yi.length;u++)Be(yi[u],a);break;case"source":Be("error",a);break;case"img":case"image":case"link":Be("error",a),Be("load",a);break;case"details":Be("toggle",a);break;case"input":j1(a,f),Be("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!f.multiple},Be("invalid",a);break;case"textarea":E1(a,f),Be("invalid",a)}ja(o,f),u=null;for(var g in f)if(f.hasOwnProperty(g)){var w=f[g];g==="children"?typeof w=="string"?a.textContent!==w&&(f.suppressHydrationWarning!==!0&&$o(a.textContent,w,t),u=["children",w]):typeof w=="number"&&a.textContent!==""+w&&(f.suppressHydrationWarning!==!0&&$o(a.textContent,w,t),u=["children",""+w]):l.hasOwnProperty(g)&&w!=null&&g==="onScroll"&&Be("scroll",a)}switch(o){case"input":co(a),T1(a,f,!0);break;case"textarea":co(a),P1(a);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(a.onclick=Do)}a=u,n.updateQueue=a,a!==null&&(n.flags|=4)}else{g=u.nodeType===9?u:u.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=R1(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=g.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof a.is=="string"?t=g.createElement(o,{is:a.is}):(t=g.createElement(o),o==="select"&&(g=t,a.multiple?g.multiple=!0:a.size&&(g.size=a.size))):t=g.createElementNS(t,o),t[Zt]=n,t[Ci]=a,Hf(t,n,!1,!1),n.stateNode=t;e:{switch(g=ba(o,a),o){case"dialog":Be("cancel",t),Be("close",t),u=a;break;case"iframe":case"object":case"embed":Be("load",t),u=a;break;case"video":case"audio":for(u=0;u<yi.length;u++)Be(yi[u],t);u=a;break;case"source":Be("error",t),u=a;break;case"img":case"image":case"link":Be("error",t),Be("load",t),u=a;break;case"details":Be("toggle",t),u=a;break;case"input":j1(t,a),u=xa(t,a),Be("invalid",t);break;case"option":u=a;break;case"select":t._wrapperState={wasMultiple:!!a.multiple},u=Z({},a,{value:void 0}),Be("invalid",t);break;case"textarea":E1(t,a),u=Sa(t,a),Be("invalid",t);break;default:u=a}ja(o,u),w=u;for(f in w)if(w.hasOwnProperty(f)){var k=w[f];f==="style"?B1(t,k):f==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&M1(t,k)):f==="children"?typeof k=="string"?(o!=="textarea"||k!=="")&&qr(t,k):typeof k=="number"&&qr(t,""+k):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(l.hasOwnProperty(f)?k!=null&&f==="onScroll"&&Be("scroll",t):k!=null&&F(t,f,k,g))}switch(o){case"input":co(t),T1(t,a,!1);break;case"textarea":co(t),P1(t);break;case"option":a.value!=null&&t.setAttribute("value",""+Se(a.value));break;case"select":t.multiple=!!a.multiple,f=a.value,f!=null?dr(t,!!a.multiple,f,!1):a.defaultValue!=null&&dr(t,!!a.multiple,a.defaultValue,!0);break;default:typeof u.onClick=="function"&&(t.onclick=Do)}switch(o){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return at(n),null;case 6:if(t&&n.stateNode!=null)Wf(t,n,t.memoizedProps,a);else{if(typeof a!="string"&&n.stateNode===null)throw Error(i(166));if(o=Zn(bi.current),Zn(Kt.current),_o(n)){if(a=n.stateNode,o=n.memoizedProps,a[Zt]=n,(f=a.nodeValue!==o)&&(t=Ct,t!==null))switch(t.tag){case 3:$o(a.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&$o(a.nodeValue,o,(t.mode&1)!==0)}f&&(n.flags|=4)}else a=(o.nodeType===9?o:o.ownerDocument).createTextNode(a),a[Zt]=n,n.stateNode=a}return at(n),null;case 13:if($e(Ie),a=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ve&&wt!==null&&(n.mode&1)!==0&&(n.flags&128)===0)Kd(),Tr(),n.flags|=98560,f=!1;else if(f=_o(n),a!==null&&a.dehydrated!==null){if(t===null){if(!f)throw Error(i(318));if(f=n.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(i(317));f[Zt]=n}else Tr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;at(n),f=!1}else Dt!==null&&(tu(Dt),Dt=null),f=!0;if(!f)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=o,n):(a=a!==null,a!==(t!==null&&t.memoizedState!==null)&&a&&(n.child.flags|=8192,(n.mode&1)!==0&&(t===null||(Ie.current&1)!==0?Ge===0&&(Ge=3):iu())),n.updateQueue!==null&&(n.flags|=4),at(n),null);case 4:return Rr(),Ul(t,n),t===null&&vi(n.stateNode.containerInfo),at(n),null;case 10:return vl(n.type._context),at(n),null;case 17:return ht(n.type)&&Io(),at(n),null;case 19:if($e(Ie),f=n.memoizedState,f===null)return at(n),null;if(a=(n.flags&128)!==0,g=f.rendering,g===null)if(a)Ri(f,!1);else{if(Ge!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(g=Go(t),g!==null){for(n.flags|=128,Ri(f,!1),a=g.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),n.subtreeFlags=0,a=o,o=n.child;o!==null;)f=o,t=a,f.flags&=14680066,g=f.alternate,g===null?(f.childLanes=0,f.lanes=t,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,t=g.dependencies,f.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Ae(Ie,Ie.current&1|2),n.child}t=t.sibling}f.tail!==null&&_e()>$r&&(n.flags|=128,a=!0,Ri(f,!1),n.lanes=4194304)}else{if(!a)if(t=Go(g),t!==null){if(n.flags|=128,a=!0,o=t.updateQueue,o!==null&&(n.updateQueue=o,n.flags|=4),Ri(f,!0),f.tail===null&&f.tailMode==="hidden"&&!g.alternate&&!Ve)return at(n),null}else 2*_e()-f.renderingStartTime>$r&&o!==1073741824&&(n.flags|=128,a=!0,Ri(f,!1),n.lanes=4194304);f.isBackwards?(g.sibling=n.child,n.child=g):(o=f.last,o!==null?o.sibling=g:n.child=g,f.last=g)}return f.tail!==null?(n=f.tail,f.rendering=n,f.tail=n.sibling,f.renderingStartTime=_e(),n.sibling=null,o=Ie.current,Ae(Ie,a?o&1|2:o&1),n):(at(n),null);case 22:case 23:return ru(),a=n.memoizedState!==null,t!==null&&t.memoizedState!==null!==a&&(n.flags|=8192),a&&(n.mode&1)!==0?(St&1073741824)!==0&&(at(n),n.subtreeFlags&6&&(n.flags|=8192)):at(n),null;case 24:return null;case 25:return null}throw Error(i(156,n.tag))}function m5(t,n){switch(fl(n),n.tag){case 1:return ht(n.type)&&Io(),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Rr(),$e(pt),$e(ot),bl(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 5:return kl(n),null;case 13:if($e(Ie),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(i(340));Tr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return $e(Ie),null;case 4:return Rr(),null;case 10:return vl(n.type._context),null;case 22:case 23:return ru(),null;case 24:return null;default:return null}}var rs=!1,lt=!1,g5=typeof WeakSet=="function"?WeakSet:Set,ne=null;function Ar(t,n){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(a){ze(t,n,a)}else o.current=null}function Wl(t,n,o){try{o()}catch(a){ze(t,n,a)}}var Zf=!1;function y5(t,n){if(rl=ko,t=kd(),Ya(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var a=o.getSelection&&o.getSelection();if(a&&a.rangeCount!==0){o=a.anchorNode;var u=a.anchorOffset,f=a.focusNode;a=a.focusOffset;try{o.nodeType,f.nodeType}catch{o=null;break e}var g=0,w=-1,k=-1,$=0,O=0,U=t,z=null;t:for(;;){for(var te;U!==o||u!==0&&U.nodeType!==3||(w=g+u),U!==f||a!==0&&U.nodeType!==3||(k=g+a),U.nodeType===3&&(g+=U.nodeValue.length),(te=U.firstChild)!==null;)z=U,U=te;for(;;){if(U===t)break t;if(z===o&&++$===u&&(w=g),z===f&&++O===a&&(k=g),(te=U.nextSibling)!==null)break;U=z,z=U.parentNode}U=te}o=w===-1||k===-1?null:{start:w,end:k}}else o=null}o=o||{start:0,end:0}}else o=null;for(il={focusedElem:t,selectionRange:o},ko=!1,ne=n;ne!==null;)if(n=ne,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,ne=t;else for(;ne!==null;){n=ne;try{var re=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(re!==null){var oe=re.memoizedProps,He=re.memoizedState,R=n.stateNode,T=R.getSnapshotBeforeUpdate(n.elementType===n.type?oe:Vt(n.type,oe),He);R.__reactInternalSnapshotBeforeUpdate=T}break;case 3:var M=n.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(K){ze(n,n.return,K)}if(t=n.sibling,t!==null){t.return=n.return,ne=t;break}ne=n.return}return re=Zf,Zf=!1,re}function Mi(t,n,o){var a=n.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var u=a=a.next;do{if((u.tag&t)===t){var f=u.destroy;u.destroy=void 0,f!==void 0&&Wl(n,o,f)}u=u.next}while(u!==a)}}function is(t,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&t)===t){var a=o.create;o.destroy=a()}o=o.next}while(o!==n)}}function Zl(t){var n=t.ref;if(n!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof n=="function"?n(t):n.current=t}}function Kf(t){var n=t.alternate;n!==null&&(t.alternate=null,Kf(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&(delete n[Zt],delete n[Ci],delete n[ll],delete n[J4],delete n[e5])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Gf(t){return t.tag===5||t.tag===3||t.tag===4}function Yf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Gf(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Kl(t,n,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,n?o.nodeType===8?o.parentNode.insertBefore(t,n):o.insertBefore(t,n):(o.nodeType===8?(n=o.parentNode,n.insertBefore(t,o)):(n=o,n.appendChild(t)),o=o._reactRootContainer,o!=null||n.onclick!==null||(n.onclick=Do));else if(a!==4&&(t=t.child,t!==null))for(Kl(t,n,o),t=t.sibling;t!==null;)Kl(t,n,o),t=t.sibling}function Gl(t,n,o){var a=t.tag;if(a===5||a===6)t=t.stateNode,n?o.insertBefore(t,n):o.appendChild(t);else if(a!==4&&(t=t.child,t!==null))for(Gl(t,n,o),t=t.sibling;t!==null;)Gl(t,n,o),t=t.sibling}var tt=null,It=!1;function kn(t,n,o){for(o=o.child;o!==null;)Qf(t,n,o),o=o.sibling}function Qf(t,n,o){if(Wt&&typeof Wt.onCommitFiberUnmount=="function")try{Wt.onCommitFiberUnmount(yo,o)}catch{}switch(o.tag){case 5:lt||Ar(o,n);case 6:var a=tt,u=It;tt=null,kn(t,n,o),tt=a,It=u,tt!==null&&(It?(t=tt,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):tt.removeChild(o.stateNode));break;case 18:tt!==null&&(It?(t=tt,o=o.stateNode,t.nodeType===8?al(t.parentNode,o):t.nodeType===1&&al(t,o),ui(t)):al(tt,o.stateNode));break;case 4:a=tt,u=It,tt=o.stateNode.containerInfo,It=!0,kn(t,n,o),tt=a,It=u;break;case 0:case 11:case 14:case 15:if(!lt&&(a=o.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){u=a=a.next;do{var f=u,g=f.destroy;f=f.tag,g!==void 0&&((f&2)!==0||(f&4)!==0)&&Wl(o,n,g),u=u.next}while(u!==a)}kn(t,n,o);break;case 1:if(!lt&&(Ar(o,n),a=o.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=o.memoizedProps,a.state=o.memoizedState,a.componentWillUnmount()}catch(w){ze(o,n,w)}kn(t,n,o);break;case 21:kn(t,n,o);break;case 22:o.mode&1?(lt=(a=lt)||o.memoizedState!==null,kn(t,n,o),lt=a):kn(t,n,o);break;default:kn(t,n,o)}}function Xf(t){var n=t.updateQueue;if(n!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new g5),n.forEach(function(a){var u=T5.bind(null,t,a);o.has(a)||(o.add(a),a.then(u,u))})}}function Ft(t,n){var o=n.deletions;if(o!==null)for(var a=0;a<o.length;a++){var u=o[a];try{var f=t,g=n,w=g;e:for(;w!==null;){switch(w.tag){case 5:tt=w.stateNode,It=!1;break e;case 3:tt=w.stateNode.containerInfo,It=!0;break e;case 4:tt=w.stateNode.containerInfo,It=!0;break e}w=w.return}if(tt===null)throw Error(i(160));Qf(f,g,u),tt=null,It=!1;var k=u.alternate;k!==null&&(k.return=null),u.return=null}catch($){ze(u,n,$)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)qf(n,t),n=n.sibling}function qf(t,n){var o=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ft(n,t),Yt(t),a&4){try{Mi(3,t,t.return),is(3,t)}catch(oe){ze(t,t.return,oe)}try{Mi(5,t,t.return)}catch(oe){ze(t,t.return,oe)}}break;case 1:Ft(n,t),Yt(t),a&512&&o!==null&&Ar(o,o.return);break;case 5:if(Ft(n,t),Yt(t),a&512&&o!==null&&Ar(o,o.return),t.flags&32){var u=t.stateNode;try{qr(u,"")}catch(oe){ze(t,t.return,oe)}}if(a&4&&(u=t.stateNode,u!=null)){var f=t.memoizedProps,g=o!==null?o.memoizedProps:f,w=t.type,k=t.updateQueue;if(t.updateQueue=null,k!==null)try{w==="input"&&f.type==="radio"&&f.name!=null&&b1(u,f),ba(w,g);var $=ba(w,f);for(g=0;g<k.length;g+=2){var O=k[g],U=k[g+1];O==="style"?B1(u,U):O==="dangerouslySetInnerHTML"?M1(u,U):O==="children"?qr(u,U):F(u,O,U,$)}switch(w){case"input":Ca(u,f);break;case"textarea":L1(u,f);break;case"select":var z=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!f.multiple;var te=f.value;te!=null?dr(u,!!f.multiple,te,!1):z!==!!f.multiple&&(f.defaultValue!=null?dr(u,!!f.multiple,f.defaultValue,!0):dr(u,!!f.multiple,f.multiple?[]:"",!1))}u[Ci]=f}catch(oe){ze(t,t.return,oe)}}break;case 6:if(Ft(n,t),Yt(t),a&4){if(t.stateNode===null)throw Error(i(162));u=t.stateNode,f=t.memoizedProps;try{u.nodeValue=f}catch(oe){ze(t,t.return,oe)}}break;case 3:if(Ft(n,t),Yt(t),a&4&&o!==null&&o.memoizedState.isDehydrated)try{ui(n.containerInfo)}catch(oe){ze(t,t.return,oe)}break;case 4:Ft(n,t),Yt(t);break;case 13:Ft(n,t),Yt(t),u=t.child,u.flags&8192&&(f=u.memoizedState!==null,u.stateNode.isHidden=f,!f||u.alternate!==null&&u.alternate.memoizedState!==null||(Xl=_e())),a&4&&Xf(t);break;case 22:if(O=o!==null&&o.memoizedState!==null,t.mode&1?(lt=($=lt)||O,Ft(n,t),lt=$):Ft(n,t),Yt(t),a&8192){if($=t.memoizedState!==null,(t.stateNode.isHidden=$)&&!O&&(t.mode&1)!==0)for(ne=t,O=t.child;O!==null;){for(U=ne=O;ne!==null;){switch(z=ne,te=z.child,z.tag){case 0:case 11:case 14:case 15:Mi(4,z,z.return);break;case 1:Ar(z,z.return);var re=z.stateNode;if(typeof re.componentWillUnmount=="function"){a=z,o=z.return;try{n=a,re.props=n.memoizedProps,re.state=n.memoizedState,re.componentWillUnmount()}catch(oe){ze(a,o,oe)}}break;case 5:Ar(z,z.return);break;case 22:if(z.memoizedState!==null){t2(U);continue}}te!==null?(te.return=z,ne=te):t2(U)}O=O.sibling}e:for(O=null,U=t;;){if(U.tag===5){if(O===null){O=U;try{u=U.stateNode,$?(f=u.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(w=U.stateNode,k=U.memoizedProps.style,g=k!=null&&k.hasOwnProperty("display")?k.display:null,w.style.display=A1("display",g))}catch(oe){ze(t,t.return,oe)}}}else if(U.tag===6){if(O===null)try{U.stateNode.nodeValue=$?"":U.memoizedProps}catch(oe){ze(t,t.return,oe)}}else if((U.tag!==22&&U.tag!==23||U.memoizedState===null||U===t)&&U.child!==null){U.child.return=U,U=U.child;continue}if(U===t)break e;for(;U.sibling===null;){if(U.return===null||U.return===t)break e;O===U&&(O=null),U=U.return}O===U&&(O=null),U.sibling.return=U.return,U=U.sibling}}break;case 19:Ft(n,t),Yt(t),a&4&&Xf(t);break;case 21:break;default:Ft(n,t),Yt(t)}}function Yt(t){var n=t.flags;if(n&2){try{e:{for(var o=t.return;o!==null;){if(Gf(o)){var a=o;break e}o=o.return}throw Error(i(160))}switch(a.tag){case 5:var u=a.stateNode;a.flags&32&&(qr(u,""),a.flags&=-33);var f=Yf(t);Gl(t,f,u);break;case 3:case 4:var g=a.stateNode.containerInfo,w=Yf(t);Kl(t,w,g);break;default:throw Error(i(161))}}catch(k){ze(t,t.return,k)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function v5(t,n,o){ne=t,Jf(t)}function Jf(t,n,o){for(var a=(t.mode&1)!==0;ne!==null;){var u=ne,f=u.child;if(u.tag===22&&a){var g=u.memoizedState!==null||rs;if(!g){var w=u.alternate,k=w!==null&&w.memoizedState!==null||lt;w=rs;var $=lt;if(rs=g,(lt=k)&&!$)for(ne=u;ne!==null;)g=ne,k=g.child,g.tag===22&&g.memoizedState!==null?n2(u):k!==null?(k.return=g,ne=k):n2(u);for(;f!==null;)ne=f,Jf(f),f=f.sibling;ne=u,rs=w,lt=$}e2(t)}else(u.subtreeFlags&8772)!==0&&f!==null?(f.return=u,ne=f):e2(t)}}function e2(t){for(;ne!==null;){var n=ne;if((n.flags&8772)!==0){var o=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:lt||is(5,n);break;case 1:var a=n.stateNode;if(n.flags&4&&!lt)if(o===null)a.componentDidMount();else{var u=n.elementType===n.type?o.memoizedProps:Vt(n.type,o.memoizedProps);a.componentDidUpdate(u,o.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var f=n.updateQueue;f!==null&&ef(n,f,a);break;case 3:var g=n.updateQueue;if(g!==null){if(o=null,n.child!==null)switch(n.child.tag){case 5:o=n.child.stateNode;break;case 1:o=n.child.stateNode}ef(n,g,o)}break;case 5:var w=n.stateNode;if(o===null&&n.flags&4){o=w;var k=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&o.focus();break;case"img":k.src&&(o.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var $=n.alternate;if($!==null){var O=$.memoizedState;if(O!==null){var U=O.dehydrated;U!==null&&ui(U)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}lt||n.flags&512&&Zl(n)}catch(z){ze(n,n.return,z)}}if(n===t){ne=null;break}if(o=n.sibling,o!==null){o.return=n.return,ne=o;break}ne=n.return}}function t2(t){for(;ne!==null;){var n=ne;if(n===t){ne=null;break}var o=n.sibling;if(o!==null){o.return=n.return,ne=o;break}ne=n.return}}function n2(t){for(;ne!==null;){var n=ne;try{switch(n.tag){case 0:case 11:case 15:var o=n.return;try{is(4,n)}catch(k){ze(n,o,k)}break;case 1:var a=n.stateNode;if(typeof a.componentDidMount=="function"){var u=n.return;try{a.componentDidMount()}catch(k){ze(n,u,k)}}var f=n.return;try{Zl(n)}catch(k){ze(n,f,k)}break;case 5:var g=n.return;try{Zl(n)}catch(k){ze(n,g,k)}}}catch(k){ze(n,n.return,k)}if(n===t){ne=null;break}var w=n.sibling;if(w!==null){w.return=n.return,ne=w;break}ne=n.return}}var x5=Math.ceil,os=N.ReactCurrentDispatcher,Yl=N.ReactCurrentOwner,Lt=N.ReactCurrentBatchConfig,je=0,Je=null,Ue=null,nt=0,St=0,Br=vn(0),Ge=0,Ai=null,Gn=0,ss=0,Ql=0,Bi=null,gt=null,Xl=0,$r=1/0,ln=null,as=!1,ql=null,jn=null,ls=!1,bn=null,us=0,$i=0,Jl=null,cs=-1,ds=0;function ct(){return(je&6)!==0?_e():cs!==-1?cs:cs=_e()}function Tn(t){return(t.mode&1)===0?1:(je&2)!==0&&nt!==0?nt&-nt:n5.transition!==null?(ds===0&&(ds=G1()),ds):(t=Pe,t!==0||(t=window.event,t=t===void 0?16:rd(t.type)),t)}function Nt(t,n,o,a){if(50<$i)throw $i=0,Jl=null,Error(i(185));ii(t,o,a),((je&2)===0||t!==Je)&&(t===Je&&((je&2)===0&&(ss|=o),Ge===4&&En(t,nt)),yt(t,a),o===1&&je===0&&(n.mode&1)===0&&($r=_e()+500,No&&Cn()))}function yt(t,n){var o=t.callbackNode;n4(t,n);var a=Co(t,t===Je?nt:0);if(a===0)o!==null&&W1(o),t.callbackNode=null,t.callbackPriority=0;else if(n=a&-a,t.callbackPriority!==n){if(o!=null&&W1(o),n===1)t.tag===0?t5(i2.bind(null,t)):_d(i2.bind(null,t)),X4(function(){(je&6)===0&&Cn()}),o=null;else{switch(Y1(a)){case 1:o=Aa;break;case 4:o=Z1;break;case 16:o=go;break;case 536870912:o=K1;break;default:o=go}o=f2(o,r2.bind(null,t))}t.callbackPriority=n,t.callbackNode=o}}function r2(t,n){if(cs=-1,ds=0,(je&6)!==0)throw Error(i(327));var o=t.callbackNode;if(Dr()&&t.callbackNode!==o)return null;var a=Co(t,t===Je?nt:0);if(a===0)return null;if((a&30)!==0||(a&t.expiredLanes)!==0||n)n=fs(t,a);else{n=a;var u=je;je|=2;var f=s2();(Je!==t||nt!==n)&&(ln=null,$r=_e()+500,Qn(t,n));do try{S5();break}catch(w){o2(t,w)}while(!0);yl(),os.current=f,je=u,Ue!==null?n=0:(Je=null,nt=0,n=Ge)}if(n!==0){if(n===2&&(u=Ba(t),u!==0&&(a=u,n=eu(t,u))),n===1)throw o=Ai,Qn(t,0),En(t,a),yt(t,_e()),o;if(n===6)En(t,a);else{if(u=t.current.alternate,(a&30)===0&&!C5(u)&&(n=fs(t,a),n===2&&(f=Ba(t),f!==0&&(a=f,n=eu(t,f))),n===1))throw o=Ai,Qn(t,0),En(t,a),yt(t,_e()),o;switch(t.finishedWork=u,t.finishedLanes=a,n){case 0:case 1:throw Error(i(345));case 2:Xn(t,gt,ln);break;case 3:if(En(t,a),(a&130023424)===a&&(n=Xl+500-_e(),10<n)){if(Co(t,0)!==0)break;if(u=t.suspendedLanes,(u&a)!==a){ct(),t.pingedLanes|=t.suspendedLanes&u;break}t.timeoutHandle=sl(Xn.bind(null,t,gt,ln),n);break}Xn(t,gt,ln);break;case 4:if(En(t,a),(a&4194240)===a)break;for(n=t.eventTimes,u=-1;0<a;){var g=31-Bt(a);f=1<<g,g=n[g],g>u&&(u=g),a&=~f}if(a=u,a=_e()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*x5(a/1960))-a,10<a){t.timeoutHandle=sl(Xn.bind(null,t,gt,ln),a);break}Xn(t,gt,ln);break;case 5:Xn(t,gt,ln);break;default:throw Error(i(329))}}}return yt(t,_e()),t.callbackNode===o?r2.bind(null,t):null}function eu(t,n){var o=Bi;return t.current.memoizedState.isDehydrated&&(Qn(t,n).flags|=256),t=fs(t,n),t!==2&&(n=gt,gt=o,n!==null&&tu(n)),t}function tu(t){gt===null?gt=t:gt.push.apply(gt,t)}function C5(t){for(var n=t;;){if(n.flags&16384){var o=n.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var a=0;a<o.length;a++){var u=o[a],f=u.getSnapshot;u=u.value;try{if(!$t(f(),u))return!1}catch{return!1}}}if(o=n.child,n.subtreeFlags&16384&&o!==null)o.return=n,n=o;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function En(t,n){for(n&=~Ql,n&=~ss,t.suspendedLanes|=n,t.pingedLanes&=~n,t=t.expirationTimes;0<n;){var o=31-Bt(n),a=1<<o;t[o]=-1,n&=~a}}function i2(t){if((je&6)!==0)throw Error(i(327));Dr();var n=Co(t,0);if((n&1)===0)return yt(t,_e()),null;var o=fs(t,n);if(t.tag!==0&&o===2){var a=Ba(t);a!==0&&(n=a,o=eu(t,a))}if(o===1)throw o=Ai,Qn(t,0),En(t,n),yt(t,_e()),o;if(o===6)throw Error(i(345));return t.finishedWork=t.current.alternate,t.finishedLanes=n,Xn(t,gt,ln),yt(t,_e()),null}function nu(t,n){var o=je;je|=1;try{return t(n)}finally{je=o,je===0&&($r=_e()+500,No&&Cn())}}function Yn(t){bn!==null&&bn.tag===0&&(je&6)===0&&Dr();var n=je;je|=1;var o=Lt.transition,a=Pe;try{if(Lt.transition=null,Pe=1,t)return t()}finally{Pe=a,Lt.transition=o,je=n,(je&6)===0&&Cn()}}function ru(){St=Br.current,$e(Br)}function Qn(t,n){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,Q4(o)),Ue!==null)for(o=Ue.return;o!==null;){var a=o;switch(fl(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Io();break;case 3:Rr(),$e(pt),$e(ot),bl();break;case 5:kl(a);break;case 4:Rr();break;case 13:$e(Ie);break;case 19:$e(Ie);break;case 10:vl(a.type._context);break;case 22:case 23:ru()}o=o.return}if(Je=t,Ue=t=Ln(t.current,null),nt=St=n,Ge=0,Ai=null,Ql=ss=Gn=0,gt=Bi=null,Wn!==null){for(n=0;n<Wn.length;n++)if(o=Wn[n],a=o.interleaved,a!==null){o.interleaved=null;var u=a.next,f=o.pending;if(f!==null){var g=f.next;f.next=u,a.next=g}o.pending=a}Wn=null}return t}function o2(t,n){do{var o=Ue;try{if(yl(),Yo.current=Jo,Qo){for(var a=Fe.memoizedState;a!==null;){var u=a.queue;u!==null&&(u.pending=null),a=a.next}Qo=!1}if(Kn=0,qe=Ke=Fe=null,Ti=!1,Ei=0,Yl.current=null,o===null||o.return===null){Ge=1,Ai=n,Ue=null;break}e:{var f=t,g=o.return,w=o,k=n;if(n=nt,w.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var $=k,O=w,U=O.tag;if((O.mode&1)===0&&(U===0||U===11||U===15)){var z=O.alternate;z?(O.updateQueue=z.updateQueue,O.memoizedState=z.memoizedState,O.lanes=z.lanes):(O.updateQueue=null,O.memoizedState=null)}var te=Rf(g);if(te!==null){te.flags&=-257,Mf(te,g,w,f,n),te.mode&1&&Pf(f,$,n),n=te,k=$;var re=n.updateQueue;if(re===null){var oe=new Set;oe.add(k),n.updateQueue=oe}else re.add(k);break e}else{if((n&1)===0){Pf(f,$,n),iu();break e}k=Error(i(426))}}else if(Ve&&w.mode&1){var He=Rf(g);if(He!==null){(He.flags&65536)===0&&(He.flags|=256),Mf(He,g,w,f,n),ml(Mr(k,w));break e}}f=k=Mr(k,w),Ge!==4&&(Ge=2),Bi===null?Bi=[f]:Bi.push(f),f=g;do{switch(f.tag){case 3:f.flags|=65536,n&=-n,f.lanes|=n;var R=Ef(f,k,n);Jd(f,R);break e;case 1:w=k;var T=f.type,M=f.stateNode;if((f.flags&128)===0&&(typeof T.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(jn===null||!jn.has(M)))){f.flags|=65536,n&=-n,f.lanes|=n;var K=Lf(f,w,n);Jd(f,K);break e}}f=f.return}while(f!==null)}l2(o)}catch(se){n=se,Ue===o&&o!==null&&(Ue=o=o.return);continue}break}while(!0)}function s2(){var t=os.current;return os.current=Jo,t===null?Jo:t}function iu(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),Je===null||(Gn&268435455)===0&&(ss&268435455)===0||En(Je,nt)}function fs(t,n){var o=je;je|=2;var a=s2();(Je!==t||nt!==n)&&(ln=null,Qn(t,n));do try{w5();break}catch(u){o2(t,u)}while(!0);if(yl(),je=o,os.current=a,Ue!==null)throw Error(i(261));return Je=null,nt=0,Ge}function w5(){for(;Ue!==null;)a2(Ue)}function S5(){for(;Ue!==null&&!K3();)a2(Ue)}function a2(t){var n=d2(t.alternate,t,St);t.memoizedProps=t.pendingProps,n===null?l2(t):Ue=n,Yl.current=null}function l2(t){var n=t;do{var o=n.alternate;if(t=n.return,(n.flags&32768)===0){if(o=h5(o,n,St),o!==null){Ue=o;return}}else{if(o=m5(o,n),o!==null){o.flags&=32767,Ue=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ge=6,Ue=null;return}}if(n=n.sibling,n!==null){Ue=n;return}Ue=n=t}while(n!==null);Ge===0&&(Ge=5)}function Xn(t,n,o){var a=Pe,u=Lt.transition;try{Lt.transition=null,Pe=1,k5(t,n,o,a)}finally{Lt.transition=u,Pe=a}return null}function k5(t,n,o,a){do Dr();while(bn!==null);if((je&6)!==0)throw Error(i(327));o=t.finishedWork;var u=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(i(177));t.callbackNode=null,t.callbackPriority=0;var f=o.lanes|o.childLanes;if(r4(t,f),t===Je&&(Ue=Je=null,nt=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||ls||(ls=!0,f2(go,function(){return Dr(),null})),f=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||f){f=Lt.transition,Lt.transition=null;var g=Pe;Pe=1;var w=je;je|=4,Yl.current=null,y5(t,o),qf(o,t),H4(il),ko=!!rl,il=rl=null,t.current=o,v5(o),G3(),je=w,Pe=g,Lt.transition=f}else t.current=o;if(ls&&(ls=!1,bn=t,us=u),f=t.pendingLanes,f===0&&(jn=null),X3(o.stateNode),yt(t,_e()),n!==null)for(a=t.onRecoverableError,o=0;o<n.length;o++)u=n[o],a(u.value,{componentStack:u.stack,digest:u.digest});if(as)throw as=!1,t=ql,ql=null,t;return(us&1)!==0&&t.tag!==0&&Dr(),f=t.pendingLanes,(f&1)!==0?t===Jl?$i++:($i=0,Jl=t):$i=0,Cn(),null}function Dr(){if(bn!==null){var t=Y1(us),n=Lt.transition,o=Pe;try{if(Lt.transition=null,Pe=16>t?16:t,bn===null)var a=!1;else{if(t=bn,bn=null,us=0,(je&6)!==0)throw Error(i(331));var u=je;for(je|=4,ne=t.current;ne!==null;){var f=ne,g=f.child;if((ne.flags&16)!==0){var w=f.deletions;if(w!==null){for(var k=0;k<w.length;k++){var $=w[k];for(ne=$;ne!==null;){var O=ne;switch(O.tag){case 0:case 11:case 15:Mi(8,O,f)}var U=O.child;if(U!==null)U.return=O,ne=U;else for(;ne!==null;){O=ne;var z=O.sibling,te=O.return;if(Kf(O),O===$){ne=null;break}if(z!==null){z.return=te,ne=z;break}ne=te}}}var re=f.alternate;if(re!==null){var oe=re.child;if(oe!==null){re.child=null;do{var He=oe.sibling;oe.sibling=null,oe=He}while(oe!==null)}}ne=f}}if((f.subtreeFlags&2064)!==0&&g!==null)g.return=f,ne=g;else e:for(;ne!==null;){if(f=ne,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:Mi(9,f,f.return)}var R=f.sibling;if(R!==null){R.return=f.return,ne=R;break e}ne=f.return}}var T=t.current;for(ne=T;ne!==null;){g=ne;var M=g.child;if((g.subtreeFlags&2064)!==0&&M!==null)M.return=g,ne=M;else e:for(g=T;ne!==null;){if(w=ne,(w.flags&2048)!==0)try{switch(w.tag){case 0:case 11:case 15:is(9,w)}}catch(se){ze(w,w.return,se)}if(w===g){ne=null;break e}var K=w.sibling;if(K!==null){K.return=w.return,ne=K;break e}ne=w.return}}if(je=u,Cn(),Wt&&typeof Wt.onPostCommitFiberRoot=="function")try{Wt.onPostCommitFiberRoot(yo,t)}catch{}a=!0}return a}finally{Pe=o,Lt.transition=n}}return!1}function u2(t,n,o){n=Mr(o,n),n=Ef(t,n,1),t=Sn(t,n,1),n=ct(),t!==null&&(ii(t,1,n),yt(t,n))}function ze(t,n,o){if(t.tag===3)u2(t,t,o);else for(;n!==null;){if(n.tag===3){u2(n,t,o);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(jn===null||!jn.has(a))){t=Mr(o,t),t=Lf(n,t,1),n=Sn(n,t,1),t=ct(),n!==null&&(ii(n,1,t),yt(n,t));break}}n=n.return}}function j5(t,n,o){var a=t.pingCache;a!==null&&a.delete(n),n=ct(),t.pingedLanes|=t.suspendedLanes&o,Je===t&&(nt&o)===o&&(Ge===4||Ge===3&&(nt&130023424)===nt&&500>_e()-Xl?Qn(t,0):Ql|=o),yt(t,n)}function c2(t,n){n===0&&((t.mode&1)===0?n=1:(n=xo,xo<<=1,(xo&130023424)===0&&(xo=4194304)));var o=ct();t=on(t,n),t!==null&&(ii(t,n,o),yt(t,o))}function b5(t){var n=t.memoizedState,o=0;n!==null&&(o=n.retryLane),c2(t,o)}function T5(t,n){var o=0;switch(t.tag){case 13:var a=t.stateNode,u=t.memoizedState;u!==null&&(o=u.retryLane);break;case 19:a=t.stateNode;break;default:throw Error(i(314))}a!==null&&a.delete(n),c2(t,o)}var d2;d2=function(t,n,o){if(t!==null)if(t.memoizedProps!==n.pendingProps||pt.current)mt=!0;else{if((t.lanes&o)===0&&(n.flags&128)===0)return mt=!1,p5(t,n,o);mt=(t.flags&131072)!==0}else mt=!1,Ve&&(n.flags&1048576)!==0&&Hd(n,Oo,n.index);switch(n.lanes=0,n.tag){case 2:var a=n.type;ns(t,n),t=n.pendingProps;var u=kr(n,ot.current);Pr(n,o),u=Ll(null,n,a,t,u,o);var f=Pl();return n.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ht(a)?(f=!0,Fo(n)):f=!1,n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,wl(n),u.updater=es,n.stateNode=u,u._reactInternals=n,Dl(n,a,t,o),n=Nl(null,n,a,!0,f,o)):(n.tag=0,Ve&&f&&dl(n),ut(null,n,u,o),n=n.child),n;case 16:a=n.elementType;e:{switch(ns(t,n),t=n.pendingProps,u=a._init,a=u(a._payload),n.type=a,u=n.tag=L5(a),t=Vt(a,t),u){case 0:n=Fl(null,n,a,t,o);break e;case 1:n=If(null,n,a,t,o);break e;case 11:n=Af(null,n,a,t,o);break e;case 14:n=Bf(null,n,a,Vt(a.type,t),o);break e}throw Error(i(306,a,""))}return n;case 0:return a=n.type,u=n.pendingProps,u=n.elementType===a?u:Vt(a,u),Fl(t,n,a,u,o);case 1:return a=n.type,u=n.pendingProps,u=n.elementType===a?u:Vt(a,u),If(t,n,a,u,o);case 3:e:{if(Ff(n),t===null)throw Error(i(387));a=n.pendingProps,f=n.memoizedState,u=f.element,qd(t,n),Ko(n,a,null,o);var g=n.memoizedState;if(a=g.element,f.isDehydrated)if(f={element:a,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){u=Mr(Error(i(423)),n),n=Nf(t,n,a,o,u);break e}else if(a!==u){u=Mr(Error(i(424)),n),n=Nf(t,n,a,o,u);break e}else for(wt=yn(n.stateNode.containerInfo.firstChild),Ct=n,Ve=!0,Dt=null,o=Qd(n,null,a,o),n.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Tr(),a===u){n=an(t,n,o);break e}ut(t,n,a,o)}n=n.child}return n;case 5:return tf(n),t===null&&hl(n),a=n.type,u=n.pendingProps,f=t!==null?t.memoizedProps:null,g=u.children,ol(a,u)?g=null:f!==null&&ol(a,f)&&(n.flags|=32),Vf(t,n),ut(t,n,g,o),n.child;case 6:return t===null&&hl(n),null;case 13:return zf(t,n,o);case 4:return Sl(n,n.stateNode.containerInfo),a=n.pendingProps,t===null?n.child=Er(n,null,a,o):ut(t,n,a,o),n.child;case 11:return a=n.type,u=n.pendingProps,u=n.elementType===a?u:Vt(a,u),Af(t,n,a,u,o);case 7:return ut(t,n,n.pendingProps,o),n.child;case 8:return ut(t,n,n.pendingProps.children,o),n.child;case 12:return ut(t,n,n.pendingProps.children,o),n.child;case 10:e:{if(a=n.type._context,u=n.pendingProps,f=n.memoizedProps,g=u.value,Ae(Uo,a._currentValue),a._currentValue=g,f!==null)if($t(f.value,g)){if(f.children===u.children&&!pt.current){n=an(t,n,o);break e}}else for(f=n.child,f!==null&&(f.return=n);f!==null;){var w=f.dependencies;if(w!==null){g=f.child;for(var k=w.firstContext;k!==null;){if(k.context===a){if(f.tag===1){k=sn(-1,o&-o),k.tag=2;var $=f.updateQueue;if($!==null){$=$.shared;var O=$.pending;O===null?k.next=k:(k.next=O.next,O.next=k),$.pending=k}}f.lanes|=o,k=f.alternate,k!==null&&(k.lanes|=o),xl(f.return,o,n),w.lanes|=o;break}k=k.next}}else if(f.tag===10)g=f.type===n.type?null:f.child;else if(f.tag===18){if(g=f.return,g===null)throw Error(i(341));g.lanes|=o,w=g.alternate,w!==null&&(w.lanes|=o),xl(g,o,n),g=f.sibling}else g=f.child;if(g!==null)g.return=f;else for(g=f;g!==null;){if(g===n){g=null;break}if(f=g.sibling,f!==null){f.return=g.return,g=f;break}g=g.return}f=g}ut(t,n,u.children,o),n=n.child}return n;case 9:return u=n.type,a=n.pendingProps.children,Pr(n,o),u=Tt(u),a=a(u),n.flags|=1,ut(t,n,a,o),n.child;case 14:return a=n.type,u=Vt(a,n.pendingProps),u=Vt(a.type,u),Bf(t,n,a,u,o);case 15:return $f(t,n,n.type,n.pendingProps,o);case 17:return a=n.type,u=n.pendingProps,u=n.elementType===a?u:Vt(a,u),ns(t,n),n.tag=1,ht(a)?(t=!0,Fo(n)):t=!1,Pr(n,o),bf(n,a,u),Dl(n,a,u,o),Nl(null,n,a,!0,t,o);case 19:return _f(t,n,o);case 22:return Df(t,n,o)}throw Error(i(156,n.tag))};function f2(t,n){return U1(t,n)}function E5(t,n,o,a){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pt(t,n,o,a){return new E5(t,n,o,a)}function ou(t){return t=t.prototype,!(!t||!t.isReactComponent)}function L5(t){if(typeof t=="function")return ou(t)?1:0;if(t!=null){if(t=t.$$typeof,t===he)return 11;if(t===Le)return 14}return 2}function Ln(t,n){var o=t.alternate;return o===null?(o=Pt(t.tag,n,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=n,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,n=t.dependencies,o.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function ps(t,n,o,a,u,f){var g=2;if(a=t,typeof t=="function")ou(t)&&(g=1);else if(typeof t=="string")g=5;else e:switch(t){case V:return qn(o.children,u,f,n);case B:g=8,u|=8;break;case Q:return t=Pt(12,o,n,u|2),t.elementType=Q,t.lanes=f,t;case ue:return t=Pt(13,o,n,u),t.elementType=ue,t.lanes=f,t;case we:return t=Pt(19,o,n,u),t.elementType=we,t.lanes=f,t;case me:return hs(o,u,f,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case G:g=10;break e;case ae:g=9;break e;case he:g=11;break e;case Le:g=14;break e;case ke:g=16,a=null;break e}throw Error(i(130,t==null?t:typeof t,""))}return n=Pt(g,o,n,u),n.elementType=t,n.type=a,n.lanes=f,n}function qn(t,n,o,a){return t=Pt(7,t,a,n),t.lanes=o,t}function hs(t,n,o,a){return t=Pt(22,t,a,n),t.elementType=me,t.lanes=o,t.stateNode={isHidden:!1},t}function su(t,n,o){return t=Pt(6,t,null,n),t.lanes=o,t}function au(t,n,o){return n=Pt(4,t.children!==null?t.children:[],t.key,n),n.lanes=o,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function P5(t,n,o,a,u){this.tag=n,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$a(0),this.expirationTimes=$a(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$a(0),this.identifierPrefix=a,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function lu(t,n,o,a,u,f,g,w,k){return t=new P5(t,n,o,w,k),n===1?(n=1,f===!0&&(n|=8)):n=0,f=Pt(3,null,null,n),t.current=f,f.stateNode=t,f.memoizedState={element:a,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},wl(f),t}function R5(t,n,o){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:q,key:a==null?null:""+a,children:t,containerInfo:n,implementation:o}}function p2(t){if(!t)return xn;t=t._reactInternals;e:{if(zn(t)!==t||t.tag!==1)throw Error(i(170));var n=t;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ht(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(i(171))}if(t.tag===1){var o=t.type;if(ht(o))return zd(t,o,n)}return n}function h2(t,n,o,a,u,f,g,w,k){return t=lu(o,a,!0,t,u,f,g,w,k),t.context=p2(null),o=t.current,a=ct(),u=Tn(o),f=sn(a,u),f.callback=n??null,Sn(o,f,u),t.current.lanes=u,ii(t,u,a),yt(t,a),t}function ms(t,n,o,a){var u=n.current,f=ct(),g=Tn(u);return o=p2(o),n.context===null?n.context=o:n.pendingContext=o,n=sn(f,g),n.payload={element:t},a=a===void 0?null:a,a!==null&&(n.callback=a),t=Sn(u,n,g),t!==null&&(Nt(t,u,g,f),Zo(t,u,g)),g}function gs(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function m2(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<n?o:n}}function uu(t,n){m2(t,n),(t=t.alternate)&&m2(t,n)}function M5(){return null}var g2=typeof reportError=="function"?reportError:function(t){console.error(t)};function cu(t){this._internalRoot=t}ys.prototype.render=cu.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(i(409));ms(t,n,null,null)},ys.prototype.unmount=cu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Yn(function(){ms(null,t,null,null)}),n[en]=null}};function ys(t){this._internalRoot=t}ys.prototype.unstable_scheduleHydration=function(t){if(t){var n=q1();t={blockedOn:null,target:t,priority:n};for(var o=0;o<hn.length&&n!==0&&n<hn[o].priority;o++);hn.splice(o,0,t),o===0&&td(t)}};function du(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function vs(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function y2(){}function A5(t,n,o,a,u){if(u){if(typeof a=="function"){var f=a;a=function(){var $=gs(g);f.call($)}}var g=h2(n,a,t,0,null,!1,!1,"",y2);return t._reactRootContainer=g,t[en]=g.current,vi(t.nodeType===8?t.parentNode:t),Yn(),g}for(;u=t.lastChild;)t.removeChild(u);if(typeof a=="function"){var w=a;a=function(){var $=gs(k);w.call($)}}var k=lu(t,0,!1,null,null,!1,!1,"",y2);return t._reactRootContainer=k,t[en]=k.current,vi(t.nodeType===8?t.parentNode:t),Yn(function(){ms(n,k,o,a)}),k}function xs(t,n,o,a,u){var f=o._reactRootContainer;if(f){var g=f;if(typeof u=="function"){var w=u;u=function(){var k=gs(g);w.call(k)}}ms(n,g,t,u)}else g=A5(o,n,t,u,a);return gs(g)}Q1=function(t){switch(t.tag){case 3:var n=t.stateNode;if(n.current.memoizedState.isDehydrated){var o=ri(n.pendingLanes);o!==0&&(Da(n,o|1),yt(n,_e()),(je&6)===0&&($r=_e()+500,Cn()))}break;case 13:Yn(function(){var a=on(t,1);if(a!==null){var u=ct();Nt(a,t,1,u)}}),uu(t,1)}},Va=function(t){if(t.tag===13){var n=on(t,134217728);if(n!==null){var o=ct();Nt(n,t,134217728,o)}uu(t,134217728)}},X1=function(t){if(t.tag===13){var n=Tn(t),o=on(t,n);if(o!==null){var a=ct();Nt(o,t,n,a)}uu(t,n)}},q1=function(){return Pe},J1=function(t,n){var o=Pe;try{return Pe=t,n()}finally{Pe=o}},La=function(t,n,o){switch(n){case"input":if(Ca(t,o),n=o.name,o.type==="radio"&&n!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<o.length;n++){var a=o[n];if(a!==t&&a.form===t.form){var u=Vo(a);if(!u)throw Error(i(90));k1(a),Ca(a,u)}}}break;case"textarea":L1(t,o);break;case"select":n=o.value,n!=null&&dr(t,!!o.multiple,n,!1)}},I1=nu,F1=Yn;var B5={usingClientEntryPoint:!1,Events:[wi,wr,Vo,D1,V1,nu]},Di={findFiberByHostInstance:On,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$5={bundleType:Di.bundleType,version:Di.version,rendererPackageName:Di.rendererPackageName,rendererConfig:Di.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:N.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=_1(t),t===null?null:t.stateNode},findFiberByHostInstance:Di.findFiberByHostInstance||M5,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cs.isDisabled&&Cs.supportsFiber)try{yo=Cs.inject($5),Wt=Cs}catch{}}return vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B5,vt.createPortal=function(t,n){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!du(n))throw Error(i(200));return R5(t,n,null,o)},vt.createRoot=function(t,n){if(!du(t))throw Error(i(299));var o=!1,a="",u=g2;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),n=lu(t,1,!1,null,null,o,!1,a,u),t[en]=n.current,vi(t.nodeType===8?t.parentNode:t),new cu(n)},vt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(i(188)):(t=Object.keys(t).join(","),Error(i(268,t)));return t=_1(n),t=t===null?null:t.stateNode,t},vt.flushSync=function(t){return Yn(t)},vt.hydrate=function(t,n,o){if(!vs(n))throw Error(i(200));return xs(null,t,n,!0,o)},vt.hydrateRoot=function(t,n,o){if(!du(t))throw Error(i(405));var a=o!=null&&o.hydratedSources||null,u=!1,f="",g=g2;if(o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(f=o.identifierPrefix),o.onRecoverableError!==void 0&&(g=o.onRecoverableError)),n=h2(n,null,t,1,o??null,u,!1,f,g),t[en]=n.current,vi(t),a)for(t=0;t<a.length;t++)o=a[t],u=o._getVersion,u=u(o._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[o,u]:n.mutableSourceEagerHydrationData.push(o,u);return new ys(n)},vt.render=function(t,n,o){if(!vs(n))throw Error(i(200));return xs(null,t,n,!1,o)},vt.unmountComponentAtNode=function(t){if(!vs(t))throw Error(i(40));return t._reactRootContainer?(Yn(function(){xs(null,null,t,!1,function(){t._reactRootContainer=null,t[en]=null})}),!0):!1},vt.unstable_batchedUpdates=nu,vt.unstable_renderSubtreeIntoContainer=function(t,n,o,a){if(!vs(o))throw Error(i(200));if(t==null||t._reactInternals===void 0)throw Error(i(38));return xs(t,n,o,!1,a)},vt.version="18.3.1-next-f1338f8080-20240426",vt}var b2;function H5(){if(b2)return hu.exports;b2=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(r){console.error(r)}}return e(),hu.exports=_5(),hu.exports}var T2;function U5(){if(T2)return ws;T2=1;var e=H5();return ws.createRoot=e.createRoot,ws.hydrateRoot=e.hydrateRoot,ws}var W5=U5(),_=zc();const Vn=V5(_);var De="-ms-",Wi="-moz-",Ee="-webkit-",gp="comm",ia="rule",Oc="decl",Z5="@import",K5="@namespace",yp="@keyframes",G5="@layer",vp=Math.abs,_c=String.fromCharCode,nc=Object.assign;function Y5(e,r){return Qe(e,0)^45?(((r<<2^Qe(e,0))<<2^Qe(e,1))<<2^Qe(e,2))<<2^Qe(e,3):0}function xp(e){return e.trim()}function cn(e,r){return(e=r.exec(e))?e[0]:e}function ye(e,r,i){return e.replace(r,i)}function As(e,r,i){return e.indexOf(r,i)}function Qe(e,r){return e.charCodeAt(r)|0}function ur(e,r,i){return e.slice(r,i)}function _t(e){return e.length}function Cp(e){return e.length}function zi(e,r){return r.push(e),e}function Q5(e,r){return e.map(r).join("")}function E2(e,r){return e.filter(function(i){return!cn(i,r)})}var oa=1,_r=1,wp=0,At=0,Ze=0,Kr="";function sa(e,r,i,s,l,d,p,h){return{value:e,root:r,parent:i,type:s,props:l,children:d,line:oa,column:_r,length:p,return:"",siblings:h}}function Mn(e,r){return nc(sa("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},r)}function Vr(e){for(;e.root;)e=Mn(e.root,{children:[e]});zi(e,e.siblings)}function X5(){return Ze}function q5(){return Ze=At>0?Qe(Kr,--At):0,_r--,Ze===10&&(_r=1,oa--),Ze}function Ht(){return Ze=At<wp?Qe(Kr,At++):0,_r++,Ze===10&&(_r=1,oa++),Ze}function $n(){return Qe(Kr,At)}function Bs(){return At}function aa(e,r){return ur(Kr,e,r)}function Ji(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function J5(e){return oa=_r=1,wp=_t(Kr=e),At=0,[]}function e6(e){return Kr="",e}function yu(e){return xp(aa(At-1,rc(e===91?e+2:e===40?e+1:e)))}function t6(e){for(;(Ze=$n())&&Ze<33;)Ht();return Ji(e)>2||Ji(Ze)>3?"":" "}function n6(e,r){for(;--r&&Ht()&&!(Ze<48||Ze>102||Ze>57&&Ze<65||Ze>70&&Ze<97););return aa(e,Bs()+(r<6&&$n()==32&&Ht()==32))}function rc(e){for(;Ht();)switch(Ze){case e:return At;case 34:case 39:e!==34&&e!==39&&rc(Ze);break;case 40:e===41&&rc(e);break;case 92:Ht();break}return At}function r6(e,r){for(;Ht()&&e+Ze!==57;)if(e+Ze===84&&$n()===47)break;return"/*"+aa(r,At-1)+"*"+_c(e===47?e:Ht())}function i6(e){for(;!Ji($n());)Ht();return aa(e,At)}function o6(e){return e6($s("",null,null,null,[""],e=J5(e),0,[0],e))}function $s(e,r,i,s,l,d,p,h,m){for(var v=0,y=0,x=p,C=0,b=0,j=0,L=1,P=1,D=1,A=0,F="",N=l,W=d,q=s,V=F;P;)switch(j=A,A=Ht()){case 40:if(j!=108&&Qe(V,x-1)==58){As(V+=ye(yu(A),"&","&\f"),"&\f",vp(v?h[v-1]:0))!=-1&&(D=-1);break}case 34:case 39:case 91:V+=yu(A);break;case 9:case 10:case 13:case 32:V+=t6(j);break;case 92:V+=n6(Bs()-1,7);continue;case 47:switch($n()){case 42:case 47:zi(s6(r6(Ht(),Bs()),r,i,m),m),(Ji(j||1)==5||Ji($n()||1)==5)&&_t(V)&&ur(V,-1,void 0)!==" "&&(V+=" ");break;default:V+="/"}break;case 123*L:h[v++]=_t(V)*D;case 125*L:case 59:case 0:switch(A){case 0:case 125:P=0;case 59+y:D==-1&&(V=ye(V,/\f/g,"")),b>0&&(_t(V)-x||L===0&&j===47)&&zi(b>32?P2(V+";",s,i,x-1,m):P2(ye(V," ","")+";",s,i,x-2,m),m);break;case 59:V+=";";default:if(zi(q=L2(V,r,i,v,y,l,h,F,N=[],W=[],x,d),d),A===123)if(y===0)$s(V,r,q,q,N,d,x,h,W);else{switch(C){case 99:if(Qe(V,3)===110)break;case 108:if(Qe(V,2)===97)break;default:y=0;case 100:case 109:case 115:}y?$s(e,q,q,s&&zi(L2(e,q,q,0,0,l,h,F,l,N=[],x,W),W),l,W,x,h,s?N:W):$s(V,q,q,q,[""],W,0,h,W)}}v=y=b=0,L=D=1,F=V="",x=p;break;case 58:x=1+_t(V),b=j;default:if(L<1){if(A==123)--L;else if(A==125&&L++==0&&q5()==125)continue}switch(V+=_c(A),A*L){case 38:D=y>0?1:(V+="\f",-1);break;case 44:h[v++]=(_t(V)-1)*D,D=1;break;case 64:$n()===45&&(V+=yu(Ht())),C=$n(),y=x=_t(F=V+=i6(Bs())),A++;break;case 45:j===45&&_t(V)==2&&(L=0)}}return d}function L2(e,r,i,s,l,d,p,h,m,v,y,x){for(var C=l-1,b=l===0?d:[""],j=Cp(b),L=0,P=0,D=0;L<s;++L)for(var A=0,F=ur(e,C+1,C=vp(P=p[L])),N=e;A<j;++A)(N=xp(P>0?b[A]+" "+F:ye(F,/&\f/g,b[A])))&&(m[D++]=N);return sa(e,r,i,l===0?ia:h,m,v,y,x)}function s6(e,r,i,s){return sa(e,r,i,gp,_c(X5()),ur(e,2,-2),0,s)}function P2(e,r,i,s,l){return sa(e,r,i,Oc,ur(e,0,s),ur(e,s+1,-1),s,l)}function Sp(e,r,i){switch(Y5(e,r)){case 5103:return Ee+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Ee+e+e;case 4855:return Ee+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return Wi+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Ee+e+Wi+e+De+e+e;case 5936:switch(Qe(e,r+11)){case 114:return Ee+e+De+ye(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Ee+e+De+ye(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Ee+e+De+ye(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Ee+e+De+e+e;case 6165:return Ee+e+De+"flex-"+e+e;case 5187:return Ee+e+ye(e,/(\w+).+(:[^]+)/,Ee+"box-$1$2"+De+"flex-$1$2")+e;case 5443:return Ee+e+De+"flex-item-"+ye(e,/flex-|-self/g,"")+(cn(e,/flex-|baseline/)?"":De+"grid-row-"+ye(e,/flex-|-self/g,""))+e;case 4675:return Ee+e+De+"flex-line-pack"+ye(e,/align-content|flex-|-self/g,"")+e;case 5548:return Ee+e+De+ye(e,"shrink","negative")+e;case 5292:return Ee+e+De+ye(e,"basis","preferred-size")+e;case 6060:return Ee+"box-"+ye(e,"-grow","")+Ee+e+De+ye(e,"grow","positive")+e;case 4554:return Ee+ye(e,/([^-])(transform)/g,"$1"+Ee+"$2")+e;case 6187:return ye(ye(ye(e,/(zoom-|grab)/,Ee+"$1"),/(image-set)/,Ee+"$1"),e,"")+e;case 5495:case 3959:return ye(e,/(image-set\([^]*)/,Ee+"$1$`$1");case 4968:return ye(ye(e,/(.+:)(flex-)?(.*)/,Ee+"box-pack:$3"+De+"flex-pack:$3"),/space-between/,"justify")+Ee+e+e;case 4200:if(!cn(e,/flex-|baseline/))return De+"grid-column-align"+ur(e,r)+e;break;case 2592:case 3360:return De+ye(e,"template-","")+e;case 4384:case 3616:return i&&i.some(function(s,l){return r=l,cn(s.props,/grid-\w+-end/)})?~As(e+(i=i[r].value),"span",0)?e:De+ye(e,"-start","")+e+De+"grid-row-span:"+(~As(i,"span",0)?cn(i,/\d+/):+cn(i,/\d+/)-+cn(e,/\d+/))+";":De+ye(e,"-start","")+e;case 4896:case 4128:return i&&i.some(function(s){return cn(s.props,/grid-\w+-start/)})?e:De+ye(ye(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ye(e,/(.+)-inline(.+)/,Ee+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_t(e)-1-r>6)switch(Qe(e,r+1)){case 109:if(Qe(e,r+4)!==45)break;case 102:return ye(e,/(.+:)(.+)-([^]+)/,"$1"+Ee+"$2-$3$1"+Wi+(Qe(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~As(e,"stretch",0)?Sp(ye(e,"stretch","fill-available"),r,i)+e:e}break;case 5152:case 5920:return ye(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,l,d,p,h,m,v){return De+l+":"+d+v+(p?De+l+"-span:"+(h?m:+m-+d)+v:"")+e});case 4949:if(Qe(e,r+6)===121)return ye(e,":",":"+Ee)+e;break;case 6444:switch(Qe(e,Qe(e,14)===45?18:11)){case 120:return ye(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ee+(Qe(e,14)===45?"inline-":"")+"box$3$1"+Ee+"$2$3$1"+De+"$2box$3")+e;case 100:return ye(e,":",":"+De)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ye(e,"scroll-","scroll-snap-")+e}return e}function Ws(e,r){for(var i="",s=0;s<e.length;s++)i+=r(e[s],s,e,r)||"";return i}function a6(e,r,i,s){switch(e.type){case G5:if(e.children.length)break;case Z5:case K5:case Oc:return e.return=e.return||e.value;case gp:return"";case yp:return e.return=e.value+"{"+Ws(e.children,s)+"}";case ia:if(!_t(e.value=e.props.join(",")))return""}return _t(i=Ws(e.children,s))?e.return=e.value+"{"+i+"}":""}function l6(e){var r=Cp(e);return function(i,s,l,d){for(var p="",h=0;h<r;h++)p+=e[h](i,s,l,d)||"";return p}}function u6(e){return function(r){r.root||(r=r.return)&&e(r)}}function c6(e,r,i,s){if(e.length>-1&&!e.return)switch(e.type){case Oc:e.return=Sp(e.value,e.length,i);return;case yp:return Ws([Mn(e,{value:ye(e.value,"@","@"+Ee)})],s);case ia:if(e.length)return Q5(i=e.props,function(l){switch(cn(l,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Vr(Mn(e,{props:[ye(l,/:(read-\w+)/,":"+Wi+"$1")]})),Vr(Mn(e,{props:[l]})),nc(e,{props:E2(i,s)});break;case"::placeholder":Vr(Mn(e,{props:[ye(l,/:(plac\w+)/,":"+Ee+"input-$1")]})),Vr(Mn(e,{props:[ye(l,/:(plac\w+)/,":"+Wi+"$1")]})),Vr(Mn(e,{props:[ye(l,/:(plac\w+)/,De+"input-$1")]})),Vr(Mn(e,{props:[l]})),nc(e,{props:E2(i,s)});break}return""})}}var Or={},vu,xu;const Hr=typeof process<"u"&&Or!==void 0&&(Or.REACT_APP_SC_ATTR||Or.SC_ATTR)||"data-styled",kp="active",jp="data-styled-version",la="6.5.3",Hc=`/*!sc*/
`,Zi=typeof window<"u"&&typeof document<"u";function R2(e){if(typeof process<"u"&&Or!==void 0){const r=Or[e];if(r!==void 0&&r!=="")return r!=="false"}}const d6=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(xu=(vu=R2("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&vu!==void 0?vu:R2("SC_DISABLE_SPEEDY"))!==null&&xu!==void 0?xu:typeof process<"u"&&Or!==void 0&&!1),bp="sc-keyframes-";function oo(e,...r){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${r.length>0?` Args: ${r.join(", ")}`:""}`)}let Ds=new Map,Zs=new Map,Vs=1;const Oi=e=>{if(Ds.has(e))return Ds.get(e);for(;Zs.has(Vs);)Vs++;const r=Vs++;return Ds.set(e,r),Zs.set(r,e),r},f6=e=>Zs.get(e),p6=(e,r)=>{Vs=r+1,Ds.set(e,r),Zs.set(r,e)},Uc=Object.freeze([]),Ur=Object.freeze({});function h6(e,r,i=Ur){return e.theme!==i.theme&&e.theme||r||i.theme}const m6=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,g6=/(^-|-$)/g;function Tp(e){return e.replace(m6,"-").replace(g6,"")}const y6=/(a)(d)/gi,M2=e=>String.fromCharCode(e+(e>25?39:97));function Wc(e){let r,i="";for(r=Math.abs(e);r>52;r=r/52|0)i=M2(r%52)+i;return(M2(r%52)+i).replace(y6,"$1-$2")}const ic=5381,ir=(e,r)=>{let i=r.length;for(;i;)e=33*e^r.charCodeAt(--i);return e},Ep=e=>ir(ic,e);function Lp(e){return Wc(Ep(e)>>>0)}function v6(e){return e.displayName||e.name||"Component"}function oc(e){return typeof e=="string"&&!0}function x6(e){return oc(e)?`styled.${e}`:`Styled(${v6(e)})`}const Pp=Symbol.for("react.memo"),C6=Symbol.for("react.forward_ref"),w6={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},S6={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Rp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},k6={[C6]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Pp]:Rp};function A2(e){return("type"in(r=e)&&r.type.$$typeof)===Pp?Rp:"$$typeof"in e?k6[e.$$typeof]:w6;var r}const j6=Object.defineProperty,b6=Object.getOwnPropertyNames,T6=Object.getOwnPropertySymbols,E6=Object.getOwnPropertyDescriptor,L6=Object.getPrototypeOf,P6=Object.prototype;function Mp(e,r,i){if(typeof r!="string"){const s=L6(r);s&&s!==P6&&Mp(e,s,i);const l=b6(r).concat(T6(r)),d=A2(e),p=A2(r);for(let h=0;h<l.length;++h){const m=l[h];if(!(m in S6||i&&i[m]||p&&m in p||d&&m in d)){const v=E6(r,m);try{j6(e,m,v)}catch{}}}}return e}function ua(e){return typeof e=="function"}const R6=Symbol.for("react.forward_ref");function Ap(e){return e!=null&&(typeof e=="object"||typeof e=="function")&&e.$$typeof===R6&&"styledComponentId"in e}function _i(e,r){return e&&r?e+" "+r:e||r||""}function sc(e,r){return e.join("")}function eo(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ac(e,r,i=!1){if(!i&&!eo(e)&&!Array.isArray(e))return r;if(Array.isArray(r))for(let s=0;s<r.length;s++)e[s]=ac(e[s],r[s]);else if(eo(r))for(const s in r)e[s]=ac(e[s],r[s]);return e}function Zc(e,r){Object.defineProperty(e,"toString",{value:r})}const M6=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let r=this._cIndex;if(e>this._cGroup)for(let i=this._cGroup;i<e;i++)r+=this.groupSizes[i];else for(let i=this._cGroup-1;i>=e;i--)r-=this.groupSizes[i];return this._cGroup=e,this._cIndex=r,r}insertRules(e,r){if(e>=this.groupSizes.length){const l=this.groupSizes,d=l.length;let p=d;for(;e>=p;)if(p<<=1,p<0)throw oo(16,`${e}`);this.groupSizes=new Uint32Array(p),this.groupSizes.set(l),this.length=p;for(let h=d;h<p;h++)this.groupSizes[h]=0}let i=this.indexOfGroup(e+1),s=0;for(let l=0,d=r.length;l<d;l++)this.tag.insertRule(i,r[l])&&(this.groupSizes[e]++,i++,s++);s>0&&this._cGroup>e&&(this._cIndex+=s)}clearGroup(e){if(e<this.length){const r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r;this.groupSizes[e]=0;for(let l=i;l<s;l++)this.tag.deleteRule(i);r>0&&this._cGroup>e&&(this._cIndex-=r)}}getGroup(e){let r="";if(e>=this.length||this.groupSizes[e]===0)return r;const i=this.groupSizes[e],s=this.indexOfGroup(e),l=s+i;for(let d=s;d<l;d++)r+=this.tag.getRule(d)+Hc;return r}},A6=`style[${Hr}][${jp}="${la}"]`,B6=new RegExp(`^${Hr}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),B2=e=>typeof ShadowRoot<"u"&&e instanceof ShadowRoot||"host"in e&&e.nodeType===11,lc=e=>{if(!e)return document;if(B2(e))return e;if("getRootNode"in e){const r=e.getRootNode();if(B2(r))return r}return document},$6=(e,r,i)=>{const s=i.split(",");let l;for(let d=0,p=s.length;d<p;d++)(l=s[d])&&e.registerName(r,l)},D6=(e,r)=>{var i;const s=((i=r.textContent)!==null&&i!==void 0?i:"").split(Hc),l=[];for(let d=0,p=s.length;d<p;d++){const h=s[d].trim();if(!h)continue;const m=h.match(B6);if(m){const v=0|parseInt(m[1],10),y=m[2];v!==0&&(p6(y,v),$6(e,y,m[3]),e.getTag().insertRules(v,l)),l.length=0}else l.push(h)}},Cu=e=>{const r=lc(e.options.target).querySelectorAll(A6);for(let i=0,s=r.length;i<s;i++){const l=r[i];l&&l.getAttribute(Hr)!==kp&&(D6(e,l),l.parentNode&&l.parentNode.removeChild(l))}};let Ii=!1;function V6(){if(Ii!==!1)return Ii;if(typeof document<"u"){const e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return Ii=e.nonce||e.getAttribute("content")||void 0;const r=document.head.querySelector('meta[name="sc-nonce"]');if(r)return Ii=r.getAttribute("content")||void 0}return Ii=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const Bp=(e,r)=>{const i=document.head,s=e||i,l=document.createElement("style"),d=(m=>{const v=Array.from(m.querySelectorAll(`style[${Hr}]`));return v[v.length-1]})(s),p=d!==void 0?d.nextSibling:null;l.setAttribute(Hr,kp),l.setAttribute(jp,la);const h=r||V6();return h&&l.setAttribute("nonce",h),s.insertBefore(l,p),l},I6=class{constructor(e,r){this.element=Bp(e,r),this.element.appendChild(document.createTextNode("")),this.sheet=(i=>{var s;if(i.sheet)return i.sheet;const l=(s=i.getRootNode().styleSheets)!==null&&s!==void 0?s:document.styleSheets;for(let d=0,p=l.length;d<p;d++){const h=l[d];if(h.ownerNode===i)return h}throw oo(17)})(this.element),this.length=0}insertRule(e,r){try{return this.sheet.insertRule(r,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){const r=this.sheet.cssRules[e];return r&&r.cssText?r.cssText:""}},F6=class{constructor(e,r){this.element=Bp(e,r),this.nodes=this.element.childNodes,this.length=0}insertRule(e,r){if(e<=this.length&&e>=0){const i=document.createTextNode(r);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}};let $2=Zi;const N6={isServer:!Zi,useCSSOMInjection:!d6};class ca{static registerId(r){return Oi(r)}constructor(r=Ur,i={},s){this.options=Object.assign(Object.assign({},N6),r),this.gs=i,this.keyframeIds=new Set,this.names=new Map(s),this.server=!!r.isServer,!this.server&&Zi&&$2&&($2=!1,Cu(this)),Zc(this,()=>(l=>{const d=l.getTag(),{length:p}=d;let h="";for(let m=0;m<p;m++){const v=f6(m);if(v===void 0)continue;const y=l.names.get(v);if(y===void 0||!y.size)continue;const x=d.getGroup(m);if(x.length===0)continue;const C=Hr+".g"+m+'[id="'+v+'"]';let b="";for(const j of y)j.length>0&&(b+=j+",");h+=x+C+'{content:"'+b+'"}'+Hc}return h})(this))}rehydrate(){!this.server&&Zi&&Cu(this)}reconstructWithOptions(r,i=!0){const s=new ca(Object.assign(Object.assign({},this.options),r),this.gs,i&&this.names||void 0);return s.keyframeIds=new Set(this.keyframeIds),!this.server&&Zi&&r.target!==this.options.target&&lc(this.options.target)!==lc(r.target)&&Cu(s),s}allocateGSInstance(r){return this.gs[r]=(this.gs[r]||0)+1}getTag(){return this.tag||(this.tag=(r=(({useCSSOMInjection:i,target:s,nonce:l})=>i?new I6(s,l):new F6(s,l))(this.options),new M6(r)));var r}hasNameForId(r,i){var s,l;return(l=(s=this.names.get(r))===null||s===void 0?void 0:s.has(i))!==null&&l!==void 0&&l}registerName(r,i){Oi(r),r.startsWith(bp)&&this.keyframeIds.add(r);const s=this.names.get(r);s?s.add(i):this.names.set(r,new Set([i]))}insertRules(r,i,s){this.registerName(r,i),this.getTag().insertRules(Oi(r),s)}clearNames(r){this.names.has(r)&&this.names.get(r).clear()}clearRules(r){this.getTag().clearGroup(Oi(r)),this.clearNames(r)}clearTag(){this.tag=void 0}}const $p=new WeakSet,z6={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function O6(e,r){return r==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||e in z6||e.startsWith("--")?String(r).trim():r+"px"}const tr=47;function D2(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let r="";for(let i=0;i<e.length;i++){const s=e.charCodeAt(i);r+=s>=65&&s<=90?"-"+String.fromCharCode(s+32):e[i]}return r.startsWith("ms-")?"-"+r:r}const Dp=Symbol.for("sc-keyframes");function _6(e){return typeof e=="object"&&e!==null&&Dp in e}function Vp(e){return ua(e)&&!(e.prototype&&e.prototype.isReactComponent)}const Ip=e=>e==null||e===!1||e==="",H6=Symbol.for("react.client.reference");function V2(e){return e.$$typeof===H6}function Fp(e,r){for(const i in e){const s=e[i];e.hasOwnProperty(i)&&!Ip(s)&&(Array.isArray(s)&&$p.has(s)||ua(s)?r.push(D2(i)+":",s,";"):eo(s)?(r.push(i+" {"),Fp(s,r),r.push("}")):r.push(D2(i)+": "+O6(i,s)+";"))}}function or(e,r,i,s,l=[]){if(Ip(e))return l;const d=typeof e;if(d==="string")return l.push(e),l;if(d==="function"){if(V2(e))return l;if(Vp(e)&&r){const p=e(r);return or(p,r,i,s,l)}return l.push(e),l}if(Array.isArray(e)){for(let p=0;p<e.length;p++)or(e[p],r,i,s,l);return l}return Ap(e)?(l.push(`.${e.styledComponentId}`),l):_6(e)?(i?(e.inject(i,s),l.push(e.getName(s))):l.push(e),l):V2(e)?l:eo(e)?e.toString!==Object.prototype.toString?(l.push(e.toString()),l):(Fp(e,l),l):(l.push(e.toString()),l)}const U6=Ep(la);class W6{constructor(r,i,s){this.rules=r,this.componentId=i,this.baseHash=ir(U6,i),this.baseStyle=s,ca.registerId(i)}generateAndInjectStyles(r,i,s){let l=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,i,s):"";{let d="";for(let p=0;p<this.rules.length;p++){const h=this.rules[p];if(typeof h=="string")d+=h;else if(h)if(Vp(h)){const m=h(r);typeof m=="string"?d+=m:m!=null&&m!==!1&&(d+=sc(or(m,r,i,s)))}else d+=sc(or(h,r,i,s))}if(d){this.dynamicNameCache||(this.dynamicNameCache=new Map);const p=s.hash?s.hash+d:d;let h=this.dynamicNameCache.get(p);if(!h){if(h=Wc(ir(ir(this.baseHash,s.hash),d)>>>0),this.dynamicNameCache.size>=200){const m=this.dynamicNameCache.keys().next().value;m!==void 0&&this.dynamicNameCache.delete(m)}this.dynamicNameCache.set(p,h)}if(!i.hasNameForId(this.componentId,h)){const m=s(d,"."+h,void 0,this.componentId);i.insertRules(this.componentId,h,m)}l=_i(l,h)}}return l}}const Z6=/&/g;function Np(e,r){let i=0;for(;--r>=0&&e.charCodeAt(r)===92;)i++;return!(1&~i)}function wu(e){const r=e.length;let i="",s=0,l=0,d=0,p=!1,h=!1;for(let m=0;m<r;m++){const v=e.charCodeAt(m);if(d!==0||p||v!==tr||e.charCodeAt(m+1)!==42)if(p)v===42&&e.charCodeAt(m+1)===tr&&(p=!1,m++);else if(v!==34&&v!==39||Np(e,m)){if(d===0)if(v===123)l++;else if(v===125){if(l--,l<0){h=!0;let y=m+1;for(;y<r;){const x=e.charCodeAt(y);if(x===59||x===10)break;y++}y<r&&e.charCodeAt(y)===59&&y++,l=0,m=y-1,s=y;continue}l===0&&(i+=e.substring(s,m+1),s=m+1)}else v===59&&l===0&&(i+=e.substring(s,m+1),s=m+1)}else d===0?d=v:d===v&&(d=0);else p=!0,m++}return h||l!==0||d!==0?(s<r&&l===0&&d===0&&(i+=e.substring(s)),i):e}function zp(e,r){const i=r+" ",s=","+i;for(let l=0;l<e.length;l++){const d=e[l];if(d.type==="rule"){d.value=(i+d.value).replaceAll(",",s);const p=d.props,h=[];for(let m=0;m<p.length;m++)h[m]=i+p[m];d.props=h}Array.isArray(d.children)&&d.type!=="@keyframes"&&zp(d.children,r)}return e}function K6({options:e=Ur,plugins:r=Uc}=Ur){let i,s,l;const d=(C,b,j)=>j.startsWith(s)&&j.endsWith(s)&&j.replaceAll(s,"").length>0?`.${i}`:C,p=r.slice();p.push(C=>{C.type===ia&&C.value.includes("&")&&(l||(l=new RegExp(`\\${s}\\b`,"g")),C.props[0]=C.props[0].replace(Z6,s).replace(l,d))}),e.prefix&&p.push(c6),p.push(a6);let h=[];const m=l6(p.concat(u6(C=>h.push(C)))),v=(C,b="",j="",L="&")=>{i=L,s=b,l=void 0;const P=(function(A){const F=A.indexOf("//")!==-1,N=A.indexOf("}")!==-1;if(!F&&!N)return A;if(!F)return wu(A);const W=A.length;let q="",V=0,B=0,Q=0,G=0,ae=0,he=!1;for(;B<W;){const ue=A.charCodeAt(B);if(ue!==34&&ue!==39||Np(A,B))if(Q===0)if(ue===tr&&B+1<W&&A.charCodeAt(B+1)===42){for(B+=2;B+1<W&&(A.charCodeAt(B)!==42||A.charCodeAt(B+1)!==tr);)B++;B+=2}else if(ue!==40)if(ue!==41)if(G>0)B++;else if(ue===42&&B+1<W&&A.charCodeAt(B+1)===tr)q+=A.substring(V,B),B+=2,V=B,he=!0;else if(ue===tr&&B+1<W&&A.charCodeAt(B+1)===tr){for(q+=A.substring(V,B);B<W&&A.charCodeAt(B)!==10;)B++;V=B,he=!0}else ue===123?ae++:ue===125&&ae--,B++;else G>0&&G--,B++;else G++,B++;else B++;else Q===0?Q=ue:Q===ue&&(Q=0),B++}return he?(V<W&&(q+=A.substring(V)),ae===0?q:wu(q)):ae===0?A:wu(A)})(C);let D=o6(j||b?j+" "+b+" { "+P+" }":P);return e.namespace&&(D=zp(D,e.namespace)),h=[],Ws(D,m),h},y=e;let x=ic;for(let C=0;C<r.length;C++)r[C].name||oo(15),x=ir(x,r[C].name);return y!=null&&y.namespace&&(x=ir(x,y.namespace)),y!=null&&y.prefix&&(x=ir(x,"p")),v.hash=x!==ic?x.toString():"",v}const G6=new ca,uc=K6(),Op=Vn.createContext({shouldForwardProp:void 0,styleSheet:G6,stylis:uc,stylisPlugins:void 0});Op.Consumer;function Y6(){return Vn.useContext(Op)}const _p=Vn.createContext(void 0);_p.Consumer;const I2=Object.prototype.hasOwnProperty,Su={};function Q6(e,r){const i=typeof e!="string"?"sc":Tp(e);Su[i]=(Su[i]||0)+1;const s=i+"-"+Lp(la+i+Su[i]);return r?r+"-"+s:s}function X6(e,r,i){const s=Ap(e),l=e,d=!oc(e),{attrs:p=Uc,componentId:h=Q6(r.displayName,r.parentComponentId),displayName:m=x6(e)}=r,v=r.displayName&&r.componentId?Tp(r.displayName)+"-"+r.componentId:r.componentId||h,y=s&&l.attrs?l.attrs.concat(p).filter(Boolean):p;let{shouldForwardProp:x}=r;if(s&&l.shouldForwardProp){const L=l.shouldForwardProp;if(r.shouldForwardProp){const P=r.shouldForwardProp;x=(D,A)=>L(D,A)&&P(D,A)}else x=L}const C=new W6(i,v,s?l.componentStyle:void 0);function b(L,P){return(function(D,A,F){const{attrs:N,componentStyle:W,defaultProps:q,foldedComponentIds:V,styledComponentId:B,target:Q}=D,G=Vn.useContext(_p),ae=Y6(),he=D.shouldForwardProp||ae.shouldForwardProp,ue=h6(A,G,q)||Ur;let we,Le;{const X=Vn.useRef(null),Z=X.current;if(Z!==null&&Z[1]===ue&&Z[2]===ae.styleSheet&&Z[3]===ae.stylis&&Z[7]===W&&(function(E,I,ce){const ee=E,le=I;let ve=0;for(const Ce in le)if(I2.call(le,Ce)&&(ve++,ee[Ce]!==le[Ce]))return!1;return ve===ce})(Z[0],A,Z[4]))we=Z[5],Le=Z[6];else{we=(function(I,ce,ee){const le=Object.assign(Object.assign({},ce),{className:void 0,theme:ee}),ve=I.length>1;for(let Ce=0;Ce<I.length;Ce++){const Se=I[Ce],Te=ua(Se)?Se(ve?Object.assign({},le):le):Se;for(const Ne in Te)Ne==="className"?le.className=_i(le.className,Te[Ne]):Ne==="style"?le.style=Object.assign(Object.assign({},le.style),Te[Ne]):Ne in ce&&ce[Ne]===void 0||(le[Ne]=Te[Ne])}return"className"in ce&&typeof ce.className=="string"&&(le.className=_i(le.className,ce.className)),le})(N,A,ue),Le=W.generateAndInjectStyles(we,ae.styleSheet,ae.stylis);let E=0;for(const I in A)I2.call(A,I)&&E++;X.current=[A,ue,ae.styleSheet,ae.stylis,E,we,Le,W]}}const ke=we.as||Q,me=(function(X,Z,E,I){const ce={};for(const ee in X)X[ee]===void 0||ee[0]==="$"||ee==="as"||ee==="theme"&&X.theme===E||(ee==="forwardedAs"?ce.as=X.forwardedAs:I&&!I(ee,Z)||(ce[ee]=X[ee]));return ce})(we,ke,ue,he);let H=_i(V,B);return Le&&(H+=" "+Le),we.className&&(H+=" "+we.className),me[oc(ke)&&ke.includes("-")?"class":"className"]=H,F&&(me.ref=F),_.createElement(ke,me)})(j,L,P)}b.displayName=m;let j=Vn.forwardRef(b);return j.attrs=y,j.componentStyle=C,j.displayName=m,j.shouldForwardProp=x,j.foldedComponentIds=s?_i(l.foldedComponentIds,l.styledComponentId):"",j.styledComponentId=v,j.target=s?l.target:e,Object.defineProperty(j,"defaultProps",{get(){return this._foldedDefaultProps},set(L){this._foldedDefaultProps=s?(function(P,...D){for(const A of D)ac(P,A,!0);return P})({},l.defaultProps,L):L}}),Zc(j,()=>`.${j.styledComponentId}`),d&&Mp(j,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),j}var q6=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function F2(e,r){const i=[e[0]];for(let s=0,l=r.length;s<l;s+=1)i.push(r[s],e[s+1]);return i}const N2=e=>($p.add(e),e);function Y(e,...r){if(ua(e)||eo(e))return N2(or(F2(Uc,[e,...r])));const i=e;return r.length===0&&i.length===1&&typeof i[0]=="string"?or(i):N2(or(F2(i,r)))}function cc(e,r,i=Ur){if(!r)throw oo(1,r);const s=(l,...d)=>e(r,i,Y(l,...d));return s.attrs=l=>cc(e,r,Object.assign(Object.assign({},i),{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)})),s.withConfig=l=>cc(e,r,Object.assign(Object.assign({},i),l)),s}const Hp=e=>cc(X6,e),S=Hp;q6.forEach(e=>{S[e]=Hp(e)});var Up;class J6{constructor(r,i){this[Up]=!0,this.inject=(s,l=uc)=>{const d=this.getName(l);if(!s.hasNameForId(this.id,d)){const p=l(this.rules,d,"@keyframes");s.insertRules(this.id,d,p)}},this.name=r,this.id=bp+r,this.rules=i,Oi(this.id),Zc(this,()=>{throw oo(12,String(this.name))})}getName(r=uc){return r.hash?this.name+Wc(+r.hash>>>0):this.name}}function da(e,...r){const i=sc(Y(e,...r)),s=Lp(i);return new J6(s,i)}Up=Dp;const sr={p10f70780:"M27.2 5.6H4.8C3.91634 5.6 3.2 6.31634 3.2 7.2V24.8C3.2 25.6837 3.91634 26.4 4.8 26.4H27.2C28.0837 26.4 28.8 25.6837 28.8 24.8V7.2C28.8 6.31634 28.0837 5.6 27.2 5.6ZM11.0392 12.3314L5.6 17.7706V8H26.4V24H24.9706L13.3019 12.3314C12.6771 11.7065 11.664 11.7065 11.0392 12.3314Z",p1110b800:"M25.7969 11.4267C25.6628 11.1386 25.515 10.854 25.3531 10.5737C22.3708 5.40812 15.7656 3.63827 10.6 6.6206C5.43447 9.60294 3.66461 16.2081 6.64695 21.3737C6.80882 21.654 6.98136 21.9244 7.16377 22.1845C9.77937 21.6039 13.5507 20.1592 17.2001 18.0522C20.8494 15.9453 23.9863 13.4016 25.7969 11.4267ZM17.1999 7.51019C17.3438 7.14803 17.8564 7.14803 18.0002 7.5102L18.5349 8.85645C18.7974 9.5176 19.3211 10.0412 19.9822 10.3038L21.3285 10.8384C21.6906 10.9823 21.6906 11.4949 21.3285 11.6387L19.9822 12.1734C19.3211 12.4359 18.7974 12.9595 18.5349 13.6207L18.0002 14.9669C17.8564 15.3291 17.3438 15.3291 17.1999 14.967L16.6653 13.6207C16.4027 12.9595 15.8791 12.4359 15.218 12.1734L13.8717 11.6387C13.5095 11.4949 13.5095 10.9823 13.8717 10.8384L15.218 10.3038C15.8791 10.0412 16.4027 9.5176 16.6653 8.85645L17.1999 7.51019Z",p1699a100:"M24.8 12.8C24.8 14.5673 23.3673 16 21.6 16C19.8327 16 18.4 14.5673 18.4 12.8C18.4 11.0327 19.8327 9.6 21.6 9.6C23.3673 9.6 24.8 11.0327 24.8 12.8Z",p18d7b780:"M26.516 18.4343C24.638 19.9759 22.4245 21.5022 20.0001 22.902C17.5756 24.3017 15.147 25.4555 12.873 26.3111C15.6291 27.1442 18.7098 26.88 21.4 25.3268C24.0903 23.7735 25.8595 21.2377 26.516 18.4343Z",p25c8a0b0:"M3.55107 22.006C3.84627 21.4126 3.60455 20.6923 3.01118 20.3971C2.41781 20.1019 1.69749 20.3436 1.40229 20.937C0.816652 22.1142 0.490658 23.5107 1.18412 24.7118C1.80966 25.7953 2.99269 26.2381 4.15364 26.374C5.34197 26.5131 6.77465 26.3704 8.32377 26.0265C11.4364 25.3356 15.2976 23.7688 19.1998 21.5159C23.102 19.2629 26.3895 16.7025 28.5442 14.3523C29.6165 13.1826 30.4564 12.0132 30.9301 10.9146C31.3929 9.8412 31.6009 8.59526 30.9754 7.5118C30.2819 6.31069 28.9095 5.89475 27.5972 5.81333C26.9357 5.7723 26.3662 6.27525 26.3252 6.93672C26.2842 7.59819 26.7871 8.16769 27.4486 8.20873C28.5008 8.27401 28.8174 8.5741 28.8969 8.7118C28.9673 8.83365 29.0628 9.18369 28.7262 9.96437C28.4006 10.7197 27.7543 11.6625 26.7751 12.7304C24.8269 14.8554 21.7503 17.2721 17.9998 19.4374C14.2493 21.6027 10.6181 23.0588 7.80369 23.6836C6.38926 23.9975 5.24969 24.0859 4.43269 23.9902C3.58831 23.8914 3.33293 23.6336 3.26258 23.5118C3.18308 23.3741 3.0815 22.9498 3.55107 22.006Z",p28dd5f00:"M19.0921 4.82596L28.5768 21.0946C28.8744 21.6061 28.8744 22.2363 28.5768 22.7478L26.928 25.5753C26.6303 26.0855 26.0798 26.4 25.4846 26.4H6.51525C5.91868 26.4 5.36819 26.0855 5.07056 25.574L3.42306 22.7478C3.12543 22.2363 3.12543 21.6061 3.42438 21.0946L12.9064 4.82726C13.204 4.31577 13.7545 4 14.3498 4H17.6487C18.244 4 18.7945 4.31577 19.0921 4.82596ZM15.9986 23.3519C17.575 23.3519 19.0947 23.1118 20.5236 22.6656C22.1935 22.1436 23.2234 20.4656 22.8639 18.7668C22.2106 15.6769 20.5882 12.9394 18.327 10.8804C17.0087 9.67862 14.9898 9.67992 13.6716 10.8804C11.4104 12.9407 9.78919 15.6782 9.13598 18.7681C8.77645 20.4669 9.80763 22.145 11.4775 22.6669C12.9051 23.1118 14.4235 23.3519 15.9986 23.3519Z",p300dea40:"M11.9039 4.8C11.9039 3.91634 12.6375 3.2 13.5424 3.2H18.4576C19.3625 3.2 20.0961 3.91634 20.0961 4.8V6.39706C20.9477 6.74387 21.7433 7.19556 22.466 7.73561L23.8844 6.9359C24.6681 6.49407 25.6701 6.75627 26.1226 7.52154L28.5802 11.6785C29.0327 12.4437 28.7642 13.4223 27.9805 13.8641L26.5627 14.6635C26.6202 15.1011 26.6498 15.5472 26.6498 16C26.6498 16.4528 26.6202 16.8989 26.5627 17.3365L27.9805 18.1359C28.7642 18.5777 29.0327 19.5563 28.5802 20.3215L26.1226 24.4785C25.6701 25.2437 24.6681 25.5059 23.8844 25.0641L22.466 24.2644C21.7433 24.8044 20.9477 25.2561 20.0961 25.6029V27.2C20.0961 28.0837 19.3625 28.8 18.4576 28.8H13.5424C12.6375 28.8 11.9039 28.0837 11.9039 27.2V25.6029C11.0523 25.2561 10.2567 24.8044 9.53398 24.2644L8.11557 25.0641C7.33192 25.5059 6.32987 25.2437 5.87743 24.4785L3.41978 20.3215C2.96734 19.5563 3.23584 18.5777 4.01949 18.1359L5.43731 17.3365C5.37983 16.8989 5.35019 16.4528 5.35019 16C5.35019 15.5472 5.37983 15.1011 5.43731 14.6635L4.01949 13.8641C3.23584 13.4223 2.96734 12.4437 3.41978 11.6785L5.87743 7.52154C6.32987 6.75627 7.33192 6.49407 8.11557 6.9359L9.53398 7.73561C10.2567 7.19556 11.0523 6.74387 11.9039 6.39706V4.8ZM20.0961 16C20.0961 18.2091 18.2622 20 16 20C13.7378 20 11.9039 18.2091 11.9039 16C11.9039 13.7909 13.7378 12 16 12C18.2622 12 20.0961 13.7909 20.0961 16Z"},Wp={p2f5ec580:"M9.67005 7.86935C10.0283 8.02293 10.332 8.17634 10.554 8.29623L10.569 8.29137C10.8983 8.18505 11.3614 8.1 12 8.1C12.6386 8.1 13.1017 8.18505 13.4311 8.29137L13.446 8.29623C13.668 8.17634 13.9717 8.02293 14.33 7.86935C15.0734 7.55066 16.123 7.2 17.1918 7.2C18.8809 7.2 20 7.6335 20.7664 7.93038C20.9345 7.9955 21.0856 8.05405 21.2221 8.1H21.9243C22.4079 8.1 22.8 8.50294 22.8 9C22.8 9.47646 22.4398 9.86645 21.9839 9.89795L21.9887 10.0428C22 10.3825 22.0111 10.7317 22.0062 11.0755C21.9964 11.77 21.9222 12.4933 21.6306 13.2366C21.2241 14.2725 20.6434 15.0433 19.861 15.5405C19.0875 16.0321 18.2051 16.2 17.2911 16.2C16.4989 16.2 15.7104 16.0169 14.9903 15.5241C14.2754 15.035 13.697 14.2879 13.2409 13.2793C13.0899 12.9454 12.9889 12.5146 12.9162 12.1213C12.8402 11.7095 12.7823 11.2627 12.7389 10.8572C12.7028 10.5198 12.6759 10.2037 12.6568 9.94933C12.5002 9.92218 12.2851 9.9 12 9.9C11.7149 9.9 11.4998 9.92218 11.3432 9.94933C11.3241 10.2037 11.2972 10.5198 11.2611 10.8572C11.2176 11.2627 11.1598 11.7095 11.0838 12.1213C11.0111 12.5146 10.9101 12.9454 10.7591 13.2793C10.303 14.2879 9.72457 15.035 9.00971 15.5241C8.28962 16.0169 7.5011 16.2 6.70895 16.2C5.79494 16.2 4.91254 16.0321 4.13903 15.5405C3.35664 15.0433 2.77585 14.2725 2.36943 13.2366C2.07783 12.4933 2.00357 11.77 1.99378 11.0755C1.98894 10.7317 2.00001 10.3825 2.01127 10.0428L2.01606 9.89795C1.56024 9.86645 1.2 9.47646 1.2 9C1.2 8.50294 1.59205 8.1 2.07568 8.1H2.77791C2.91437 8.05404 3.0655 7.9955 3.2336 7.93038C3.99999 7.6335 5.11908 7.2 6.80824 7.2C7.87697 7.2 8.9266 7.55066 9.67005 7.86935Z",p65d1800:"M17.4 10.2C19.3882 10.2 21 8.58823 21 6.6C21 4.61177 19.3882 3 17.4 3C15.4118 3 13.8 4.61177 13.8 6.6C13.8 6.85868 13.8273 7.11099 13.8791 7.3542L9.31525 9.63615C8.65527 8.8787 7.68354 8.4 6.6 8.4C4.61177 8.4 3 10.0118 3 12C3 13.9882 4.61177 15.6 6.6 15.6C7.68354 15.6 8.65527 15.1213 9.31525 14.3639L13.8791 16.6458C13.8273 16.889 13.8 17.1413 13.8 17.4C13.8 19.3882 15.4118 21 17.4 21C19.3882 21 21 19.3882 21 17.4C21 15.4118 19.3882 13.8 17.4 13.8C16.3165 13.8 15.3447 14.2787 14.6848 15.0361L10.1209 12.7542C10.1727 12.511 10.2 12.2587 10.2 12C10.2 11.7413 10.1727 11.489 10.1209 11.2458L14.6848 8.96385C15.3447 9.7213 16.3165 10.2 17.4 10.2Z"},Ss={p1c50b080:"M21.2197 2.93117L12.7664 19.5574C12.6308 19.8243 12.355 19.9933 12.0503 19.9933H9.26371C8.96348 19.9933 8.68993 19.8243 8.54982 19.5574L0.101032 2.93117C-0.0435252 2.65317 -0.0301815 2.32181 0.123271 2.05271L1.0262 0.487045C1.20189 0.186812 1.52214 0 1.8713 0H2.69416C2.90543 0 3.10337 0.117869 3.19677 0.313577L10.3001 14.4423C10.4491 14.7381 10.8716 14.7381 11.0206 14.4423L18.1195 0.313577C18.2129 0.120093 18.4108 0 18.6266 0H19.445C19.7941 0 20.1166 0.184588 20.2901 0.487045L21.1974 2.05493C21.3531 2.32403 21.362 2.65317 21.2197 2.92894",p1fa0f800:"M63.0812 2.93117L54.628 19.5574C54.4923 19.8243 54.2188 19.9933 53.9141 19.9933H51.1275C50.8273 19.9933 50.5515 19.8243 50.4136 19.5574L41.9626 2.93117C41.818 2.65317 41.8314 2.32181 41.9826 2.05271L42.8855 0.491493C43.0612 0.186812 43.3859 0.00222395 43.7351 0.00222395H44.5535C44.7648 0.00222395 44.9627 0.120093 45.0561 0.315801L52.1594 14.4446C52.3084 14.7404 52.731 14.7404 52.88 14.4446L59.9811 0.313577C60.0745 0.120093 60.2724 0 60.4881 0H61.3021C61.6535 0 61.9759 0.186812 62.1516 0.489269L63.0568 2.05493C63.2125 2.32403 63.2213 2.65317 63.079 2.92894",p22754900:"M33.325 0.237963C33.1804 0.091182 32.9758 0 32.7512 0H31.4858C31.1366 0 30.8142 0.186812 30.6407 0.489269L29.74 2.05493C29.6599 2.19504 29.6177 2.35294 29.6177 2.51529V19.186C29.6177 19.633 29.9802 19.9956 30.4272 19.9956H32.7601C33.2049 19.9956 33.563 19.6353 33.563 19.1927V0.811742C33.563 0.587123 33.4718 0.384744 33.325 0.235739",p35c3fa00:"M72.506 0.489269C72.6817 0.186812 73.0041 0 73.3533 0H85.4583C85.8008 0 86.1166 0.182364 86.2878 0.47815L87.1396 1.94373C87.2619 2.15501 87.3242 2.39297 87.3242 2.63538V3.00011C87.3242 3.30034 87.0773 3.54943 86.7749 3.54943H75.7418C75.5194 3.54943 75.3371 3.73179 75.3371 3.95419V7.78161C75.3371 8.004 75.5172 8.18414 75.7396 8.18414H83.2188C83.5813 8.18859 83.877 8.48438 83.877 8.84911V11.0486C83.877 11.4133 83.579 11.7136 83.2121 11.7136H75.7396C75.5172 11.7136 75.3371 11.8937 75.3371 12.1161V16.0458C75.3371 16.2682 75.5172 16.4483 75.7396 16.4483H86.7749C87.0795 16.4483 87.3242 16.693 87.3242 16.9932V17.3602C87.3242 17.6048 87.2597 17.8428 87.1396 18.054L86.2878 19.5219C86.1166 19.8176 85.8008 20 85.4583 20H73.3533C73.0041 20 72.6817 19.8154 72.506 19.513L71.6653 18.0585C71.543 17.8472 71.4785 17.607 71.4785 17.3646V2.63316C71.4785 2.39075 71.5452 2.15279 71.6653 1.94151L72.506 0.489269Z"},Ki={p21eedc00:"M1.2 10.9714C1.2 8.88853 2.88853 7.2 4.97143 7.2H19.0286C21.1115 7.2 22.8 8.88853 22.8 10.9714V12C22.8 14.651 20.651 16.8 18 16.8C15.349 16.8 13.2 14.651 13.2 12V10.2H10.8V12C10.8 14.651 8.65097 16.8 6 16.8C3.34903 16.8 1.2 14.651 1.2 12V10.9714Z",p33480b00:"M8.60033 16.6035C10.4779 14.6986 13.5221 14.6986 15.3997 16.6035L12.425 19.6214C12.1903 19.8595 11.8097 19.8595 11.575 19.6214L8.60033 16.6035Z",p3b765800:"M4.7757 12.7233C8.76557 8.67546 15.2344 8.67546 19.2243 12.7233L16.6746 15.3101C14.0929 12.6909 9.90713 12.6909 7.32545 15.3101L4.7757 12.7233Z",p3c404700:"M6.59993 3.15C6.59993 2.40442 7.20434 1.8 7.94993 1.8C8.69551 1.8 9.29993 2.40442 9.29993 3.15V11.7L10.1999 11.7V9.15C10.1999 8.40442 10.8043 7.8 11.5499 7.8C12.2955 7.8 12.8999 8.40442 12.8999 9.15V11.7L13.7999 11.7V9.75C13.7999 9.00442 14.4043 8.4 15.1499 8.4C15.8955 8.4 16.4999 9.00442 16.4999 9.75V11.7L17.3999 11.7V10.65C17.3999 9.90442 18.0043 9.3 18.7499 9.3C19.4955 9.3 20.0999 9.90442 20.0999 10.65L20.0999 15.3C20.0999 19.1108 17.0779 22.2 13.3499 22.2C9.62201 22.2 6.59993 18.9 6.59993 18.9L2.23961 14.545C1.65346 13.9596 1.65346 13.0104 2.23961 12.425C2.82576 11.8396 3.77609 11.8396 4.36224 12.425L6.59993 14.6599V13.6541C6.59993 13.6527 6.59993 13.6514 6.59993 13.65V3.15Z",p3cef400:"M1.31237 8.48794C7.31585 2.77068 16.6841 2.77069 22.6876 8.48794C22.8563 8.72618 22.8351 9.06006 22.624 9.27423L20.4965 11.4326C20.4277 11.3592 20.3577 11.2864 20.2867 11.2143C15.7101 6.57123 8.28992 6.57123 3.7133 11.2143C3.64226 11.2864 3.57232 11.3592 3.50349 11.4326L1.37602 9.27423C1.16491 9.06006 1.1437 8.72618 1.31237 8.48794Z"},e9={p3398d140:"M7.29979 3.70711C6.90007 3.31658 6.90007 2.68342 7.29979 2.29289C7.69951 1.90237 8.34759 1.90237 8.74732 2.29289L15.5503 8.93934C16.1499 9.52513 16.1499 10.4749 15.5503 11.0607L8.74732 17.7071C8.34759 18.0976 7.69951 18.0976 7.29979 17.7071C6.90007 17.3166 6.90007 16.6834 7.29979 16.2929L13.7409 10L7.29979 3.70711Z"},Kc={p19152e00:"M18.5353 10.806C18.5779 10.5102 18.6 10.2077 18.6 9.9C18.6 6.42061 15.7794 3.6 12.3 3.6C8.91838 3.6 6.15904 6.26432 6.00663 9.6083C3.32649 9.7603 1.2 11.9818 1.2 14.7C1.2 17.4159 3.32299 19.636 6 19.7913V19.8H18.6V19.7902C20.9454 19.6358 22.8 17.6845 22.8 15.3C22.8 12.8937 20.9112 10.9285 18.5353 10.806ZM9 17.4C8.66863 17.4 8.4 17.1314 8.4 16.8C8.4 16.4686 8.66863 16.2 9 16.2H15C15.3314 16.2 15.6 16.4686 15.6 16.8C15.6 17.1314 15.3314 17.4 15 17.4H9ZM14.897 10.9669C15.2873 11.341 15.0225 12 14.4818 12H12.6V14.7C12.6 15.0314 12.3314 15.3 12 15.3C11.6686 15.3 11.4 15.0314 11.4 14.7V12H9.51809C8.97744 12 8.71259 11.3411 9.10286 10.9669L11.5845 8.58763C11.8166 8.36511 12.1828 8.3651 12.415 8.58759L14.897 10.9669Z",p1f0efb00:"M2.4 12C2.4 6.69807 6.69807 2.4 12 2.4C17.3019 2.4 21.6 6.69807 21.6 12C21.6 17.3019 17.3019 21.6 12 21.6C6.69807 21.6 2.4 17.3019 2.4 12ZM10.8 11.7C10.8 11.0373 11.3373 10.5 12 10.5C12.6627 10.5 13.2 11.0373 13.2 11.7V16.5C13.2 17.1627 12.6627 17.7 12 17.7C11.3373 17.7 10.8 17.1627 10.8 16.5V11.7ZM12 6.3C11.1716 6.3 10.5 6.97157 10.5 7.8C10.5 8.62843 11.1716 9.3 12 9.3C12.8284 9.3 13.5 8.62843 13.5 7.8C13.5 6.97157 12.8284 6.3 12 6.3Z",p3e090b80:"M12 22.2C6.3667 22.2 1.8 17.6333 1.8 12C1.8 6.3667 6.3667 1.8 12 1.8C17.6333 1.8 22.2 6.3667 22.2 12C22.2 17.6333 17.6333 22.2 12 22.2ZM20.0421 14.4336C20.2749 13.6633 20.4 12.8463 20.4 12C20.4 11.1433 20.2718 10.3166 20.0334 9.53803C18.7349 9.8393 17.4358 10.0675 16.1365 10.2227C16.1782 10.7999 16.2 11.3938 16.2 12C16.2 12.5957 16.179 13.1795 16.1386 13.7472C17.4402 13.9027 18.7414 14.1315 20.0421 14.4336ZM19.3241 16.1162C18.1959 15.8648 17.0682 15.6716 15.9407 15.5363C15.6722 17.3006 15.2085 18.8352 14.6133 19.9855C16.6248 19.3277 18.3019 17.931 19.3241 16.1162ZM14.3459 13.5794C14.3815 13.0642 14.4 12.5362 14.4 12C14.4 11.4533 14.3808 10.9151 14.3437 10.3903C13.5626 10.4432 12.7813 10.4696 12 10.4696C11.2187 10.4696 10.4374 10.4432 9.65626 10.3903C9.61919 10.9151 9.6 11.4533 9.6 12C9.6 12.5362 9.61846 13.0642 9.65414 13.5794C10.436 13.5265 11.218 13.5 12 13.5C12.782 13.5 13.564 13.5265 14.3459 13.5794ZM9.85488 15.37C10.57 15.3233 11.285 15.3 12 15.3C12.715 15.3 13.43 15.3233 14.1451 15.37C13.9571 16.5628 13.6708 17.6397 13.3054 18.5271C13.0038 19.2597 12.6672 19.8119 12.3451 20.1428C12.148 20.3453 12.0379 20.4 12 20.4C11.9621 20.4 11.852 20.3453 11.6549 20.1428C11.3328 19.8119 10.9962 19.2597 10.6946 18.5271C10.3292 17.6397 10.0429 16.5628 9.85488 15.37ZM7.86138 13.7472C7.82103 13.1795 7.8 12.5957 7.8 12C7.8 11.3938 7.82178 10.7999 7.86354 10.2227C6.56416 10.0675 5.26512 9.8393 3.96656 9.53803C3.72824 10.3166 3.6 11.1433 3.6 12C3.6 12.8463 3.72514 13.6633 3.95792 14.4336C5.25864 14.1315 6.55984 13.9027 7.86138 13.7472ZM4.67593 16.1162C5.80407 15.8648 6.93182 15.6716 8.05928 15.5363C8.32782 17.3006 8.7915 18.8352 9.3867 19.9855C7.37522 19.3277 5.69807 17.931 4.67593 16.1162ZM14.6133 4.01446C16.6148 4.66904 18.2853 6.05514 19.3088 7.85681C18.1842 8.10685 17.0601 8.29917 15.9361 8.43382C15.6669 6.68207 15.2051 5.15832 14.6133 4.01446ZM13.3054 5.47286C13.6678 6.3528 13.9523 7.41911 14.1404 8.59988C13.4268 8.64637 12.7134 8.66961 12 8.66961C11.2866 8.66961 10.5732 8.64637 9.85964 8.59988C10.0477 7.41911 10.3322 6.3528 10.6946 5.47286C10.9962 4.74025 11.3328 4.18807 11.6549 3.85717C11.852 3.65473 11.9621 3.6 12 3.6C12.0379 3.6 12.148 3.65473 12.3451 3.85717C12.6672 4.18807 13.0038 4.74025 13.3054 5.47286ZM9.3867 4.01446C8.79486 5.15832 8.33306 6.68207 8.06385 8.43382C6.93995 8.29917 5.81577 8.10685 4.6912 7.85681C5.71473 6.05514 7.38521 4.66904 9.3867 4.01446Z"},ku={p1e6cb280:"M17.9169 10.4526C17.7278 10.9157 17.072 10.9157 16.8829 10.4526L16.0045 8.30118C15.9478 8.16224 15.8376 8.05199 15.6986 7.99526L13.5473 7.1169C13.0841 6.92781 13.0841 6.27199 13.5473 6.0829L15.6986 5.20454C15.8376 5.14782 15.9478 5.03756 16.0045 4.89862L16.8829 2.74725C17.072 2.28412 17.7278 2.28412 17.9169 2.74725L18.7953 4.89862C18.852 5.03756 18.9622 5.14782 19.1012 5.20454L21.2526 6.0829C21.7157 6.27199 21.7157 6.92781 21.2526 7.1169L19.1012 7.99526C18.9622 8.05199 18.852 8.16225 18.7953 8.30118L17.9169 10.4526Z",p3f723180:"M17.9171 10.4528C17.728 10.9159 17.0722 10.9159 16.8831 10.4528L16.0048 8.3014C15.948 8.16246 15.8378 8.05221 15.6988 7.99548L13.5475 7.11712C13.0843 6.92803 13.0843 6.27221 13.5475 6.08312L15.6988 5.20476C15.8378 5.14804 15.948 5.03778 16.0048 4.89884L16.8831 2.74747C17.0722 2.28434 17.728 2.28434 17.9171 2.74747L18.7955 4.89884C18.8522 5.03778 18.9625 5.14804 19.1014 5.20476L21.2528 6.08312C21.7159 6.27221 21.7159 6.92803 21.2528 7.11712L19.1014 7.99548C18.9625 8.05221 18.8522 8.16247 18.7955 8.3014L17.9171 10.4528Z",p9a06a40:"M8.45077 8.94596C8.76141 8.21818 9.83883 8.21818 10.1495 8.94596L11.5925 12.3267C11.6857 12.545 11.8668 12.7183 12.0951 12.8074L15.6295 14.1877C16.3903 14.4848 16.3903 15.5154 15.6295 15.8125L12.0951 17.1928C11.8668 17.282 11.6857 17.4552 11.5925 17.6736L10.1495 21.0543C9.83883 21.7821 8.76141 21.7821 8.45077 21.0543L7.00774 17.6736C6.91455 17.4552 6.73341 17.282 6.50516 17.1928L2.97077 15.8125C2.20991 15.5154 2.20991 14.4848 2.97077 14.1877L6.50516 12.8074C6.73341 12.7183 6.91455 12.545 7.00774 12.3267L8.45077 8.94596Z"},ju={p2b3bf100:"M15.1168 8.46764C14.9435 7.95298 13.7436 6.46587 11.105 7.02845C9.26423 7.42091 8.54931 8.25959 8.25984 8.95986C7.94164 9.72964 8.06252 10.5133 8.17478 10.8121C8.6613 12.1073 9.86661 12.0407 10.2688 11.6456C10.6234 11.2973 11.1933 11.3023 11.5416 11.6569C11.8899 12.0115 11.8848 12.5813 11.5302 12.9297C10.1421 14.2932 7.40547 13.8829 6.48974 11.4451C6.24577 10.7956 6.07505 9.53337 6.59637 8.27223C7.14641 6.94158 8.40213 5.76426 10.7296 5.26802C14.2409 4.51938 16.3507 6.49118 16.8227 7.89329C17.0411 8.5419 17.0363 9.17909 16.9726 9.66185C16.9115 10.1252 16.7832 10.5373 16.6648 10.7594C16.0014 12.0041 14.5043 12.357 13.3028 11.9665C12.83 11.8129 12.5714 11.3051 12.725 10.8324C12.8786 10.3597 13.3864 10.101 13.8591 10.2546C14.4412 10.4438 14.9196 10.2069 15.0764 9.91275C15.0735 9.91823 15.0748 9.91429 15.0792 9.9016C15.0955 9.85405 15.1542 9.68364 15.1881 9.42641C15.2285 9.11999 15.2211 8.77742 15.1168 8.46764Z",p2dad2c00:"M15.1166 8.46764C14.9433 7.95298 13.7434 6.46587 11.1048 7.02845C9.26404 7.42091 8.54912 8.25959 8.25965 8.95986C7.94145 9.72964 8.06233 10.5133 8.17459 10.8121C8.66111 12.1073 9.86641 12.0407 10.2686 11.6456C10.6232 11.2973 11.1931 11.3023 11.5414 11.6569C11.8897 12.0115 11.8846 12.5813 11.53 12.9297C10.1419 14.2932 7.40528 13.8829 6.48955 11.4451C6.24557 10.7956 6.07486 9.53337 6.59617 8.27223C7.14622 6.94158 8.40193 5.76426 10.7294 5.26802C14.2407 4.51938 16.3505 6.49118 16.8225 7.89329C17.0409 8.5419 17.0361 9.17909 16.9725 9.66185C16.9113 10.1252 16.783 10.5373 16.6646 10.7594C16.0012 12.0041 14.5041 12.357 13.3026 11.9665C12.8298 11.8129 12.5712 11.3051 12.7248 10.8324C12.8784 10.3597 13.3862 10.101 13.8589 10.2546C14.441 10.4438 14.9194 10.2069 15.0762 9.91275C15.0733 9.91823 15.0746 9.91429 15.079 9.9016C15.0953 9.85405 15.154 9.68364 15.1879 9.42641C15.2283 9.11999 15.2209 8.77742 15.1166 8.46764Z",pcc2a100:"M11.7 3.3C7.87079 3.3 4.5 5.9814 4.5 10.2C4.5 12.4424 5.03266 13.7036 5.60924 14.517C5.90565 14.9352 6.23361 15.2634 6.56747 15.5665C6.64696 15.6386 6.73402 15.7153 6.82441 15.7949C7.07617 16.0167 7.35381 16.2612 7.56595 16.4946C7.71655 16.6603 7.8 16.8761 7.8 17.1V21C7.8 21.4971 7.39706 21.9 6.9 21.9C6.40294 21.9 6 21.4971 6 21V17.472C5.91661 17.3949 5.82444 17.3138 5.71929 17.2213C5.6133 17.128 5.49414 17.0232 5.35753 16.8992C4.97889 16.5554 4.54435 16.1273 4.14076 15.558C3.31734 14.3964 2.7 12.7576 2.7 10.2C2.7 4.8186 7.05421 1.5 11.7 1.5C13.7547 1.5 15.5279 1.98454 16.9565 2.92272C18.3885 3.86309 19.4203 5.22425 20.0427 6.88399C20.7944 8.88849 21.3855 11.8388 21.5878 13.052C21.6312 13.313 21.5577 13.5799 21.3867 13.7817C21.2157 13.9836 20.9646 14.1 20.7 14.1H18.6V17.4C18.6 17.7009 18.5378 18.1594 18.3119 18.5776C18.065 19.0348 17.5761 19.5 16.8 19.5H14.7V21C14.7 21.4971 14.2971 21.9 13.8 21.9C13.3029 21.9 12.9 21.4971 12.9 21V18.6C12.9 18.1029 13.3029 17.7 13.8 17.7H16.739C16.7537 17.6675 16.7688 17.6228 16.7806 17.5677C16.7953 17.4993 16.8 17.4375 16.8 17.4V13.2C16.8 12.7029 17.2029 12.3 17.7 12.3H19.6193C19.3458 10.9173 18.8869 8.92828 18.3573 7.51601C17.8547 6.17575 17.049 5.13691 15.9685 4.42728C14.8846 3.71546 13.4703 3.3 11.7 3.3Z"},Ks={p1100e400:"M3.42421 4.02397L4.91856 5.51796C5.68636 4.67916 6.60308 3.97683 7.63173 3.45122C9.67645 2.40643 12.0279 2.12913 14.2596 2.66963C16.4913 3.21013 18.4553 4.53263 19.7954 6.39721C21.1354 8.26179 21.7628 10.5449 21.5637 12.8325C21.3645 15.12 20.3521 17.2604 18.7099 18.8654C17.0678 20.4703 14.9048 21.4335 12.6133 21.5803C10.3218 21.727 8.05362 21.0475 6.2202 19.6651C5.00082 18.7457 4.02749 17.5558 3.36835 16.202C3.19707 15.8502 3.04701 15.4873 2.91936 15.1152C2.89678 15.0494 2.8749 14.9832 2.85372 14.9169C2.7023 14.442 3.01506 13.9594 3.50199 13.8532C3.93277 13.7592 4.35486 13.9919 4.55847 14.3732C4.58501 14.4229 4.60784 14.4751 4.6265 14.5295C4.73545 14.8471 4.8645 15.1564 5.01254 15.4557C5.54733 16.5369 6.3298 17.4874 7.30677 18.224C8.79551 19.3466 10.6373 19.8983 12.498 19.7791C14.3587 19.66 16.115 18.8779 17.4484 17.5746C18.7818 16.2714 19.604 14.5334 19.7657 12.6759C19.9274 10.8185 19.418 8.96455 18.3298 7.45051C17.2417 5.93647 15.6469 4.8626 13.8348 4.42372C12.0227 3.98483 10.1132 4.21 8.45293 5.05837C7.59369 5.49742 6.83061 6.08833 6.19642 6.79552L7.97544 8.57411C8.35349 8.95207 8.08581 9.59842 7.55123 9.59842H3C2.66863 9.59842 2.4 9.3298 2.4 8.99842V4.44828C2.4 3.91378 3.04621 3.64606 3.42421 4.02397Z",p1e4eed80:"M12.0028 2.4C11.3401 2.4 10.8028 2.93726 10.8028 3.6V9C10.8028 9.66274 11.3401 10.2 12.0028 10.2C12.6655 10.2 13.2028 9.66274 13.2028 9V3.6C13.2028 2.93726 12.6655 2.4 12.0028 2.4ZM7.92224 4.29185C7.63533 3.86648 7.05791 3.75424 6.63253 4.04116C2.23703 7.00596 1.07722 12.9727 4.04203 17.3682C7.00683 21.7637 12.9735 22.9235 17.369 19.9587C21.7645 16.9939 22.9243 11.0272 19.9595 6.63167C19.2445 5.57152 18.3402 4.67917 17.2947 3.98881C16.8665 3.70608 16.2902 3.82399 16.0075 4.25216C15.7248 4.68034 15.8427 5.25663 16.2709 5.53935C17.1131 6.09547 17.8415 6.81429 18.4191 7.67069C20.8101 11.2154 19.8748 16.0273 16.33 18.4183C12.7853 20.8092 7.9734 19.8739 5.58243 16.3292C3.19146 12.7844 4.12679 7.97254 7.67155 5.58157C8.09692 5.29465 8.20916 4.71723 7.92224 4.29185Z",p20c9f000:"M12 14.0972C13.1598 14.0972 14.1 13.1572 14.1 11.9977C14.1 10.8382 13.1598 9.89821 12 9.89821C10.8402 9.89821 9.9 10.8382 9.9 11.9977C9.9 13.1572 10.8402 14.0972 12 14.0972Z",p3581f900:"M15.2402 4.44853C15.7199 3.9799 15.7199 3.2201 15.2402 2.75147C14.7606 2.28284 13.9829 2.28284 13.5032 2.75147L5.33963 10.7272C4.62012 11.4302 4.62012 12.5698 5.33963 13.2728L13.5032 21.2485C13.9829 21.7172 14.7606 21.7172 15.2402 21.2485C15.7199 20.7799 15.7199 20.0201 15.2402 19.5515L7.51091 12L15.2402 4.44853Z"},t9={p3fcc4900:"M10 18.5C14.6944 18.5 18.5 14.6944 18.5 10C18.5 5.30558 14.6944 1.5 10 1.5C5.30558 1.5 1.5 5.30558 1.5 10C1.5 14.6944 5.30558 18.5 10 18.5ZM12 7.5C12 8.60457 11.1046 9.5 10 9.5C8.89543 9.5 8 8.60457 8 7.5C8 6.39543 8.89543 5.5 10 5.5C11.1046 5.5 12 6.39543 12 7.5ZM10 10.5C12.2091 10.5 14 11.7663 14 13.3284C14 14.8905 6 14.8905 6 13.3284C6 11.7663 7.79086 10.5 10 10.5Z"},n9={p373efc80:"M5.5709 0.958117C6.14563 0.0508935 7.50047 0.623479 7.32676 1.63976L7.3248 1.65245L7.32188 1.66515L6.6373 4.71007H9.13926C9.90407 4.71007 10.3481 5.55351 9.95078 6.18761L9.95176 6.18859L6.43125 11.8575L6.4293 11.8614C5.85658 12.7659 4.50866 12.2004 4.67148 11.1905L5.13145 8.10948H2.86094C2.09446 8.10948 1.64856 7.26162 2.05039 6.62706L5.56895 0.962023L5.5709 0.958117Z"},bu={p21f1a600:"M5.29898 1.05176C5.72137 0.316167 6.78088 0.316169 7.20327 1.05176L11.8537 9.15137C12.2736 9.88274 11.7487 10.7998 10.9015 10.7998H1.60074C0.75357 10.7998 0.228655 9.88274 0.648587 9.15137L5.29898 1.05176Z",p2dac4d00:"M6.25152 3.50034C6.63265 3.50046 6.93975 3.81915 6.92241 4.20151L6.82085 6.45542C6.80704 6.76009 6.55627 7.0012 6.25152 7.00132C5.94667 7.00132 5.69599 6.76016 5.68218 6.45542L5.57964 4.20151C5.56231 3.81907 5.87028 3.50034 6.25152 3.50034Z",p91f5200:"M6.25152 8.00034C6.63749 8.00041 6.94976 8.31415 6.94976 8.70054C6.94953 9.08673 6.63735 9.40066 6.25152 9.40073C5.86562 9.40073 5.5535 9.08677 5.55327 8.70054C5.55327 8.31411 5.86548 8.00034 6.25152 8.00034Z"},cr={p14736900:"M20 35.999C28.8364 35.999 36 28.8364 36 19.999C36 11.1626 28.8364 4 20 4C11.1636 4 4 11.1626 4 19.999C4 28.8364 11.1636 35.999 20 35.999ZM29 19.9294C29 19.14 28.4182 18.5 27.7005 18.5H12.2995C11.5818 18.5 11 19.14 11 19.9294V20.0706C11 20.86 11.5818 21.5 12.2995 21.5H27.7005C28.4182 21.5 29 20.86 29 20.0706V19.9294Z",p1994a170:"M22 6C22 4.89543 21.1046 4 20 4C18.8954 4 18 4.89543 18 6V18H6C4.89543 18 4 18.8954 4 20C4 21.1046 4.89543 22 6 22H18V34C18 35.1046 18.8954 36 20 36C21.1046 36 22 35.1046 22 34V22H34C35.1046 22 36 21.1046 36 20C36 18.8954 35.1046 18 34 18H22V6Z",p1f352f00:"M20 35.999C28.8364 35.999 36 28.8364 36 19.999C36 11.1626 28.8364 4 20 4C11.1636 4 4 11.1626 4 19.999C4 28.8364 11.1636 35.999 20 35.999ZM21.5 12.2995V18.5H27.7005C28.4182 18.5 29 19.14 29 19.9294V20.0706C29 20.86 28.4182 21.5 27.7005 21.5H21.5V27.7005C21.5 28.4182 20.86 29 20.0706 29H19.9294C19.14 29 18.5 28.4182 18.5 27.7005V21.5H12.2995C11.5818 21.5 11 20.86 11 20.0706V19.9294C11 19.14 11.5818 18.5 12.2995 18.5H18.5V12.2995C18.5 11.5818 19.14 11 19.9294 11H20.0706C20.86 11 21.5 11.5818 21.5 12.2995Z",p25aa3d70:"M29 9L31.1213 11.1213L10.9081 31.3345L8.7868 29.2132L29 9Z",p3256d072:"M19.9995 36C28.8365 36 36 28.8365 36 19.9995C36 11.1625 28.8365 4 19.9995 4C11.1625 4 4 11.1625 4 19.9995C4 28.8365 11.1625 36 19.9995 36ZM23.1057 11.4006C23.6314 11.9329 23.6314 12.7944 23.1057 13.3267L16.5148 20L23.1057 26.6733C23.6314 27.2056 23.6314 28.0671 23.1057 28.5994C22.5782 29.1335 21.7215 29.1335 21.1939 28.5994L14.0328 21.3487C13.2967 20.6035 13.2967 19.3965 14.0328 18.6513L21.1939 11.4006C21.7215 10.8665 22.5782 10.8665 23.1057 11.4006Z",p3e6de5f0:"M3 20C3 29.3888 10.6112 37 20 37C29.3888 37 37 29.3888 37 20C37 10.6112 29.3888 3 20 3C10.6112 3 3 10.6112 3 20ZM34 20C34 27.732 27.732 34 20 34C12.268 34 6 27.732 6 20C6 12.268 12.268 6 20 6C27.732 6 34 12.268 34 20Z",pf082e80:"M4 20C4 18.8954 4.89543 18 6 18H34C35.1046 18 36 18.8954 36 20C36 21.1046 35.1046 22 34 22H6C4.89543 22 4 21.1046 4 20Z"},Xe={p10b6d300:"M10 21C10 19.8954 10.8954 19 12 19H28C29.1046 19 30 19.8954 30 21C30 22.1046 29.1046 23 28 23H12C10.8954 23 10 22.1046 10 21Z",p17b7de00:"M12.4393 12.4393C13.0251 11.8536 13.9749 11.8536 14.5607 12.4393L20.2175 18.0962L25.8744 12.4393C26.4602 11.8536 27.4099 11.8536 27.9957 12.4393C28.5815 13.0251 28.5815 13.9749 27.9957 14.5607L22.3388 20.2175L27.9957 25.8744C28.5815 26.4602 28.5815 27.4099 27.9957 27.9957C27.4099 28.5815 26.4602 28.5815 25.8744 27.9957L20.2175 22.3388L14.5607 27.9957C13.9749 28.5815 13.0251 28.5815 12.4393 27.9957C11.8536 27.4099 11.8536 26.4602 12.4393 25.8744L18.0962 20.2175L12.4393 14.5607C11.8536 13.9749 11.8536 13.0251 12.4393 12.4393Z",p184aa700:"M20 30.0296L11.2266 34.8729C10.4869 35.2813 9.60569 34.646 9.75721 33.8137L11.579 23.8066L4.30781 16.7859C3.70418 16.2031 4.03931 15.1796 4.87025 15.0682L14.7955 13.7375L19.0931 4.57685C19.454 3.80772 20.546 3.80772 20.9069 4.57685L25.2045 13.7375L35.1298 15.0682C35.9607 15.1796 36.2958 16.2031 35.6922 16.7859L28.421 23.8066L30.2428 33.8137C30.3943 34.646 29.5131 35.2813 28.7734 34.8729L20 30.0296Z",p184eb400:"M29.7246 14.7878C29.1444 14.2076 28.2037 14.2076 27.6234 14.7878L17.7467 24.6645L12.7266 19.6444C12.1464 19.0641 11.2057 19.0641 10.6254 19.6444C10.0452 20.2246 10.0452 21.1653 10.6254 21.7456L16.2669 27.387C17.0842 28.2043 18.4093 28.2043 19.2266 27.387L29.7246 16.889C30.3049 16.3088 30.3049 15.368 29.7246 14.7878Z",p1a0aca80:"M19.5319 33.2404L19.5354 33.2436L20.0068 33.6654L20.4659 33.2574L20.4693 33.2544C24.9068 29.2886 28.3439 26.2102 30.7082 23.3647C33.0403 20.558 34 18.356 34 16.1971C34 12.75 31.276 10 27.65 10C25.582 10 23.5641 10.9614 22.2681 12.4585L20 15.0784L17.7319 12.4585C16.4359 10.9614 14.418 10 12.35 10C8.72403 10 6 12.75 6 16.1971C6 18.3559 6.95967 20.5578 9.29121 23.3621C11.6555 26.2059 15.0934 29.2814 19.5319 33.2404ZM22.465 35.4943L21.3407 36.4934C20.5787 37.1706 19.4231 37.1686 18.6634 36.4889L17.535 35.4792L17.5204 35.4662C8.77357 27.6643 3 22.5145 3 16.1971C3 11.0467 7.114 7 12.35 7C14.3285 7 16.2538 7.60599 17.8664 8.64782C18.6647 9.16358 19.3864 9.78615 20 10.4949C20.6136 9.78615 21.3353 9.16358 22.1336 8.64782C23.7462 7.60599 25.6715 7 27.65 7C32.886 7 37 11.0467 37 16.1971C37 22.5046 31.2445 27.6482 22.5207 35.4445L22.465 35.4943Z",p1b403400:"M20 35.999C28.8364 35.999 36 28.8364 36 19.999C36 11.1626 28.8364 4 20 4C11.1636 4 4 11.1626 4 19.999C4 28.8364 11.1636 35.999 20 35.999ZM29.7246 14.7878C29.1444 14.2076 28.2037 14.2076 27.6234 14.7878L17.7467 24.6645L12.7266 19.6444C12.1464 19.0641 11.2057 19.0641 10.6254 19.6444C10.0452 20.2246 10.0452 21.1653 10.6254 21.7456L16.2669 27.387C17.0842 28.2043 18.4093 28.2043 19.2266 27.387L29.7246 16.889C30.3049 16.3088 30.3049 15.368 29.7246 14.7878Z",p1bf31d80:"M11.2259 34.8752L19.9999 30.0315L28.774 34.8752C28.9761 34.9867 29.2104 35.025 29.4374 34.9835C29.9819 34.8841 30.3427 34.3613 30.2434 33.8158L28.4215 23.8081L35.6932 16.787C35.8561 16.6298 35.961 16.4219 35.991 16.1974C36.0644 15.6478 35.6793 15.1427 35.1307 15.0692L25.2048 13.7383L20.9069 4.57712C20.8075 4.3654 20.6375 4.19508 20.4262 4.09557C19.9253 3.85975 19.3284 4.07535 19.093 4.57712L14.7951 13.7383L4.86916 15.0692C4.64497 15.0992 4.43754 15.2044 4.28057 15.3675C3.89651 15.7667 3.9082 16.4022 4.30668 16.787L11.5784 23.8081L9.75645 33.8158C9.71506 34.0432 9.75326 34.278 9.86463 34.4804C10.1317 34.966 10.7412 35.1427 11.2259 34.8752ZM26.5288 30.1971L19.9999 26.5929L13.4711 30.1971L14.825 22.7601L9.38012 17.5028L16.8187 16.5055L19.9999 9.72442L23.1812 16.5055L30.6198 17.5028L25.1749 22.7601L26.5288 30.1971Z",p1f7d3280:"M21.3407 36.4934C20.5787 37.1706 19.4231 37.1686 18.6634 36.4889L17.535 35.4792C8.78 27.6701 3 22.518 3 16.1971C3 11.0467 7.114 7 12.35 7C15.308 7 18.147 8.35448 20 10.4949C21.853 8.35448 24.692 7 27.65 7C32.886 7 37 11.0467 37 16.1971C37 22.518 31.22 27.6701 22.465 35.4943L21.3407 36.4934Z",p288a75f0:"M13.5862 26.4142C12.8052 25.6331 12.8052 24.3668 13.5862 23.5857L30.5862 6.58573C31.3673 5.80468 32.6336 5.80468 33.4146 6.58573C34.1957 7.36678 34.1957 8.63311 33.4146 9.41416L16.4146 26.4142C15.6336 27.1952 14.3673 27.1952 13.5862 26.4142Z",p29872300:"M20 36C11.1634 36 4 28.8366 4 20C4 11.1634 11.1634 4 20 4C28.8366 4 36 11.1634 36 20C36 28.8366 28.8366 36 20 36ZM20 33.1765C27.2772 33.1765 33.1765 27.2772 33.1765 20C33.1765 12.7228 27.2772 6.82353 20 6.82353C12.7228 6.82353 6.82353 12.7228 6.82353 20C6.82353 27.2772 12.7228 33.1765 20 33.1765Z",p2b953612:"M33.2928 17.2929C33.9228 17.9229 34.9999 17.4767 34.9999 16.5858V6.00003C34.9999 5.44774 34.5522 5.00003 33.9999 5.00003H23.4141C22.5232 5.00003 22.077 6.07717 22.707 6.70713L26.5155 10.5157L18.3877 18.6435C17.6066 19.4246 17.6066 20.6909 18.3877 21.472C19.1687 22.253 20.435 22.253 21.2161 21.472L29.344 13.3441L33.2928 17.2929Z",p2c7da900:"M20 36C28.8366 36 36 28.8366 36 20C36 11.1634 28.8366 4 20 4C11.1634 4 4 11.1634 4 20C4 28.8366 11.1634 36 20 36ZM12.4277 12.4277C12.998 11.8574 13.9226 11.8574 14.4929 12.4277L20 17.9348L25.5071 12.4277C26.0774 11.8574 27.002 11.8574 27.5723 12.4277C28.1426 12.998 28.1426 13.9226 27.5723 14.4929L22.0652 20L27.5723 25.5071C28.1426 26.0774 28.1426 27.002 27.5723 27.5723C27.002 28.1426 26.0774 28.1426 25.5071 27.5723L20 22.0652L14.4929 27.5723C13.9226 28.1426 12.998 28.1426 12.4277 27.5723C11.8574 27.002 11.8574 26.0774 12.4277 25.5071L17.9348 20L12.4277 14.4929C11.8574 13.9226 11.8574 12.998 12.4277 12.4277Z",p31de9980:"M16 30C16 28.8954 16.8954 28 18 28H22C23.1046 28 24 28.8954 24 30C24 31.1046 23.1046 32 22 32H18C16.8954 32 16 31.1046 16 30Z",p328ca900:"M6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14H34C35.1046 14 36 13.1046 36 12C36 10.8954 35.1046 10 34 10H6Z",p32fce00:"M18 31C10.8203 31 5 25.1797 5 18C5 10.8203 10.8203 5 18 5C25.1797 5 31 10.8203 31 18C31 20.8682 30.0711 23.5195 28.4978 25.6694L34.4142 31.5858C35.1953 32.3668 35.1953 33.6332 34.4142 34.4142C33.6332 35.1953 32.3668 35.1953 31.5858 34.4142L25.6694 28.4978C23.5195 30.0711 20.8682 31 18 31ZM27 18C27 22.9706 22.9706 27 18 27C13.0294 27 9 22.9706 9 18C9 13.0294 13.0294 9 18 9C22.9706 9 27 13.0294 27 18Z",p34cda700:"M20.8999 15H26V30C26 31.1046 26.8954 32 28 32C29.1046 32 30 31.1046 30 30V15H35.1C35.8849 15 36.2922 14.1058 35.7573 13.5571L28.6567 6.27326C28.3015 5.90889 27.6973 5.90892 27.3421 6.27331L20.2426 13.5571C19.7078 14.1059 20.1151 15 20.8999 15Z",p3e6de5f0:"M3 20C3 29.3888 10.6112 37 20 37C29.3888 37 37 29.3888 37 20C37 10.6112 29.3888 3 20 3C10.6112 3 3 10.6112 3 20ZM34 20C34 27.732 27.732 34 20 34C12.268 34 6 27.732 6 20C6 12.268 12.268 6 20 6C27.732 6 34 12.268 34 20Z",pd1903e0:"M19.1001 25H14V10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10V25H4.89994C4.11505 25 3.70775 25.8942 4.24269 26.4429L11.3433 33.7267C11.6985 34.0911 12.3027 34.0911 12.6579 33.7267L19.7574 26.4429C20.2922 25.8941 19.8849 25 19.1001 25Z",pead0f00:"M8 8H15.5C16.3284 8 17 7.32843 17 6.5C17 5.67157 16.3284 5 15.5 5H7C5.89543 5 5 5.89543 5 7V33C5 34.1046 5.89543 35 7 35H33C34.1046 35 35 34.1046 35 33V24.5C35 23.6716 34.3284 23 33.5 23C32.6716 23 32 23.6716 32 24.5V32H8V8Z"},z2={p12e0b880:"M23.3273 6.09668C23.767 5.96824 24.2344 5.96819 24.674 6.09668L41.4738 11.0068C42.6187 11.3416 43.3435 12.4665 43.176 13.6475L41.0598 28.5645C40.2109 34.5467 36.4173 39.7042 30.9592 42.2959L25.0285 45.1113C24.3771 45.4205 23.6213 45.4206 22.9699 45.1113L17.0412 42.2959C11.5834 39.7042 7.78954 34.5474 6.94063 28.5654L6.8625 28.0156C6.85886 27.9907 6.8553 27.9654 6.85176 27.9404L4.82441 13.6475C4.65684 12.4664 5.3817 11.3417 6.52656 11.0068L20.927 6.79785C20.9415 6.7936 20.9564 6.78912 20.9709 6.78516L23.3273 6.09668ZM24.0002 41.6152L29.4143 39.0439C33.7809 36.9706 36.8162 32.8445 37.4953 28.0586L39.466 14.1709L24.0002 9.65039V41.6152Z"},r9="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABACAYAAABY1SR7AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAiESURBVHgB1VrdaxxVFD/3zhirPnSrf0Cmjz5Itn6AFiUbC4r6YKsi9TMbsbU10KZUWlqxm61IKX4kFcSCQjY+KIKQxBdRwWwErRU0EURRHzq++aRbC5WmO/d4zv2YubvpR9Jum8lpuvfO3Zm753fP5z13BHSINm/bGwmEMQGiVwjZAMCfQMBcAHJOYjhTO1qN4QqSgA4Qg5Aopqkb6UmFyCanvrkWJ0DgVJCER64EqM4AeWHvmAQoIwIKQ2byttb26R6YQZS1D945OA4dIgkdIGIzciD8UbQ9JNIj/DUjAVGiz1r/4IETA4MH+qED1BEgRGQTqXTRNXagBaAFZe4RGKGEWnlHZba8rRLBZVBHgKASU5ACWKBOLQDZYiA1n7RbFF1w4rkdlWG4ROqIjTA9sXVPjbxVvwXgScGwngET9s/dZ680Jj1WR4EDtdGlOYQAOkQ///DN5C133M3rHhHTa4BNgWQgpIVgvRf9oYFCrdQQjaRkCrWbuht77uydmvtuprHY3++YRHx6csv+Ii1RUUjoJTAlKWQEZvVBWjTezxup+B6O7IieaQhI7n1vtDq3mN+8IkDa6Zntr/TKULvnssjUznoy6YIO6ksh0vhD1JCY9C0GzFUB4mjz0N7o2qSrQj/b70Ub8+cFUUKELDn2b9Q0QmyuO3oRm7mqQByVh8jVKpymtWd70kYDWRyyrZOM/osD1ey7EJhOxZElEXuk2tsH15LbHjZMaEfASoW2hRYrAtHdFNeMXWjOjnmtS6G57+szt97V+xMxej+xfp3HPxj7t3HGdKPb1m9o/Hjsq+PnmmtZVKudSNWKAQQTxG3kxrTKmS6KLNKQO4Nb33v95QXGvyyq1U6kanMJJJuI2wbYwOi8dKsP0J8j55ojF0CYGAyxu8nZB+dkIkt3EGxaHQhZen73q6X253MDhOn9N1+pUxAd5phioj67YdmS4JBzwzAIFxh+Lmyknbbsfm2aWC+ZDDqL+KivpU6fhcR7jx7eV3fP5EoiKUnYZfyVACsQE/YJBLh0TYmK/8iyut/z0Y/ffvXX7es3FIjlO92YDY6crZHaaYuJ1q3vm+J7+at8SoTouuaZqhSpYnGyYo2fknw0GfM1Qfiwuz+3QEZHq1yJmbRuWLgMmaO/dPgQ0m1yboEwkQiOpAklWTePCZml/NSuHXz5jW7u5hqI8UqCN1doii8ZpQ5ZQYmbXANhIoYnpdlJ8gWhka1lJoVF7uceCNGMM26/jiGsqhGCkmlyTl2Y1I2xSzStq7yYbYtLNHMZ2dtpcN/rmG1/OUkR3jVAeFreuBJUiwoWMraSSG3E5mKazt6QrA5hpZArgKXdrFXzas2KkAhxHLv6lzcGeozaYFW4MiRiva9AbPtCj+lSC6wIIGQPttoPXjE8LbdiMzl7cqUAKVAEB6Ne6NmHCfdi1fX/5N79DlVGClKEfxsAGRClEF2EH6nukLmXSBCGRbvuoLfxuqUtsLQpPaCuqOQeiJSyx6hVligyIDS1fu7oin3+gYDc6BIp9NyWM3zCVOc210D2HnqXjry5CMFeVrUeUbqxcAUAoepjyUpDcInRqFN6GCZQSTy8f/sMX+QbSBBUlGbfMK+UclmKASVhyt2bWyCVN8fKxHgkdbVO6MNgMnztfw0wXY2YdPfnWSIVYjw1cNGWbNH4P/+d7sq3RA6OjA0pkN3gQJAEyKztKRbq4gPFw6nR6kB6WJq77PfQyEeRkGFFH5pKYXSIJCOzjTpnvJxfVf3ncicRFSg+kitwX29uaWtOttL6PgvC+OF922P/uVwBOfTOh6OkTVH6EovukDSkCYa6kM1RfR6r7c/mBsjhdz8eJiZ3Zm+CcKnH5CZozhad4Ver+8px+/O5yH7fOPrJKK3zTsUprc6jTOQD18/+xweGnl17rjmWVSIjYxMFSGCCAJSAD3Wsu9U2AVxE1OmtcGXT+eZ83/nmWjavRSBKtOazxGSJz0C86iFmb6+YFyPs9VB110B8vvlaVOuL738vJokorIIw7rtrbQxXgMZICv9KOUzLvdOpDNjXuDgF8a+tmiFJ5sj+FzfvutC8Gshnx34vh0K+RSWjNSxWo6NYxyZWH7jn5jp0gBjA6bBriLoMoICalCCzgDY7cDhMXoJqfM/2zQMXm198fvy3jSTMCSqC6TM686zpJYliVxErVKNN1ZzZ1LduUW/qZMxPF9QNaiMtTn+ikhJzaBfKrLSVgP1vDN38thur7dn2+EVBaCBfHv9jlnSwx6yAdnf0A4ngLgFIJ6c+pwUxfcxRfy5B+FMkKm5CE6CpP/mYMlIoVhPTRUygqJBay2gq6YUA0jGwsjBjyfhLWxcHgom9Vg9oFbPn8Wi9Hqi0WuxcIl10E5iIxh5mpPSPTZPcTYiSmdMrqbSboezIbEZN5ipcC+41GfdaY/Y96JhNK0DfVAlEFZZA5LVkwzc6XhnrAZzVUZqgWXK2AxlDmWTBe8YyCK5gIEzBIK2k6zRKpuccrqrOj59MQD2ye8ujSwKhgdB8R3wQ3CHVEegHI4XCW0GPe5FZphGq272hu9W+sQRmK5G1rYB1r45ncN1Lzz82CZdAehaykxECMWQcCSuFSQ18vWZg2TU4j6OdY+Y6rX21Gi6qxKndQvug34ppS1t+8dkHZ+AyKF3ez479GgkFFeKtDM6PGyO3LlL56me3naTRSXI+w0XfyP0YYfsxzVIbfOqhJavRBYGkgKZnIwi6GFCJWIj8VWRAAOmqW6a12qX3gMafAdWL4J7Xnk/VJcrhrU/ed1kSuCgQnz79+pdelcyXibkiMaYPHe0Ko+17AM+hNnwvIDuTOgfY4NSp8YGBTYt+BbZjQHwam5gt3LQae+abimIDVcdBkbTUakxsKgF6+RskjgZdxWQXcXBts/70Qxv+hKtA/wNkhSGysIEHQAAAAABJRU5ErkJggg==",fa={p283f5760:"M20 24.4818L32.5858 11.5996C33.3668 10.8001 34.6332 10.8001 35.4142 11.5996C36.1953 12.399 36.1953 13.6952 35.4142 14.4946L22.1213 28.1006C20.9497 29.2998 19.0503 29.2998 17.8787 28.1006L4.58579 14.4946C3.80474 13.6952 3.80474 12.399 4.58579 11.5996C5.36684 10.8001 6.63316 10.8001 7.41421 11.5996L20 24.4818Z",p28bea880:"M30.554 6.58492C31.3327 5.80503 32.5952 5.80503 33.3739 6.58492C34.1527 7.36481 34.1527 8.62926 33.3739 9.40914L22.82 19.979L33.416 30.5909C34.1947 31.3707 34.1947 32.6352 33.416 33.4151C32.6372 34.195 31.3747 34.195 30.596 33.4151L20 22.8032L9.40403 33.4151C8.62531 34.195 7.36276 34.195 6.58404 33.4151C5.80532 32.6352 5.80532 31.3707 6.58404 30.5909L17.18 19.979L6.62606 9.40914C5.84734 8.62926 5.84734 7.36481 6.62606 6.58492C7.40478 5.80503 8.66733 5.80503 9.44605 6.58492L20 17.1547L30.554 6.58492Z",p28d9a880:"M20 12.5182L32.5858 25.4004C33.3668 26.1999 34.6332 26.1999 35.4142 25.4004C36.1953 24.601 36.1953 23.3048 35.4142 22.5054L22.1213 8.89938C20.9497 7.70021 19.0503 7.70021 17.8787 8.89938L4.58579 22.5054C3.80474 23.3048 3.80474 24.601 4.58579 25.4004C5.36684 26.1999 6.63316 26.1999 7.41421 25.4004L20 12.5182Z",pacd0700:"M35.4142 9.59703C34.6332 8.80099 33.3668 8.80099 32.5858 9.59703L16 26.5011L7.41421 17.7505C6.63316 16.9545 5.36683 16.9545 4.58579 17.7505C3.80474 18.5466 3.80474 19.8372 4.58579 20.6332L13.8787 30.1045C15.0503 31.2985 16.9497 31.2985 18.1213 30.1045L35.4142 12.4797C36.1953 11.6837 36.1953 10.3931 35.4142 9.59703Z"},ge={p10fccd60:"M5.00002 17C3.89545 17 3.00002 17.8954 3.00002 19C3.00002 20.1046 3.89545 21 5.00002 21H11C12.1046 21 13 20.1046 13 19C13 17.8954 12.1046 17 11 17H5.00002Z",p1776ec80:"M16 22C16 17.0294 20.0295 13 25 13C29.9706 13 34 17.0294 34 22C34 23.7611 33.4942 25.4041 32.6199 26.7916L36.9143 31.0859C37.6953 31.867 37.6953 33.1333 36.9143 33.9144C36.1332 34.6954 34.8669 34.6954 34.0858 33.9144L29.7914 29.62C28.404 30.4942 26.7611 31 25 31C20.0295 31 16 26.9706 16 22ZM25 17C22.2386 17 20 19.2386 20 22C20 24.7614 22.2386 27 25 27C27.7614 27 30 24.7614 30 22C30 19.2386 27.7614 17 25 17Z",p179f4400:"M10.1599 11.5001L10.1587 11.5001C10.1466 11.5 10.059 11.4993 9.97212 11.5064C9.86268 11.5154 9.63096 11.5433 9.37356 11.6745C9.0725 11.8279 8.82773 12.0726 8.67433 12.3737C8.54318 12.6311 8.51523 12.8628 8.50629 12.9722C8.49917 13.0594 8.49985 13.1471 8.49994 13.1588L8.49994 13.1601L8.49994 29.2579C8.49992 30.0486 8.49989 30.7307 8.5458 31.2926C8.59425 31.8856 8.70122 32.4755 8.99041 33.043C9.42184 33.8898 10.1103 34.5782 10.957 35.0096C11.5246 35.2988 12.1144 35.4058 12.7074 35.4542C13.2693 35.5001 13.9514 35.5001 14.7421 35.5001H25.2577C26.0484 35.5001 26.7306 35.5001 27.2925 35.4542C27.8855 35.4058 28.4753 35.2988 29.0429 35.0096C29.8896 34.5782 30.578 33.8898 31.0095 33.043C31.2987 32.4755 31.4056 31.8856 31.4541 31.2926C31.5 30.7308 31.5 30.0486 31.4999 29.2579V13.1601L31.5 13.1588C31.5 13.1471 31.5007 13.0593 31.4936 12.9722C31.4847 12.8628 31.4567 12.6311 31.3256 12.3737C31.1722 12.0726 30.9274 11.8279 30.6263 11.6745C30.3689 11.5433 30.1372 11.5154 30.0278 11.5064C29.9408 11.4993 29.8531 11.5 29.8412 11.5001L29.8399 11.5001H10.1599ZM11.4999 29.2001V14.5001H28.4999V29.2001C28.4999 30.0649 28.4988 30.6233 28.4641 31.0483C28.4308 31.4558 28.3742 31.6069 28.3365 31.681C28.1926 31.9633 27.9632 32.1928 27.6809 32.3366C27.6068 32.3744 27.4557 32.4309 27.0482 32.4642C26.6232 32.4989 26.0648 32.5001 25.1999 32.5001H14.7999C13.9351 32.5001 13.3767 32.4989 12.9517 32.4642C12.5442 32.4309 12.3931 32.3744 12.319 32.3366C12.0367 32.1928 11.8072 31.9633 11.6634 31.681C11.6256 31.6069 11.5691 31.4558 11.5358 31.0483C11.5011 30.6233 11.4999 30.0649 11.4999 29.2001Z",p17b85200:"M16.5 13.5C16.5 12.6716 17.1716 12 18 12C18.8284 12 19.5 12.6716 19.5 13.5V16.5H22.5C23.3284 16.5 24 17.1716 24 18C24 18.8284 23.3284 19.5 22.5 19.5H19.5V22.5C19.5 23.3284 18.8284 24 18 24C17.1716 24 16.5 23.3284 16.5 22.5V19.5H13.5C12.6716 19.5 12 18.8284 12 18C12 17.1716 12.6716 16.5 13.5 16.5H16.5V13.5Z",p183a7180:"M5 20C5 18.8954 5.89543 18 7 18H33C34.1046 18 35 18.8954 35 20C35 21.1046 34.1046 22 33 22H7C5.89543 22 5 21.1046 5 20Z",p1b167f00:"M8 16C8 14.8954 8.89543 14 10 14H17.6522C26.6343 14 34 21.1175 34 30V32C34 33.1046 33.1046 34 32 34C30.8954 34 30 33.1046 30 32V30C30 23.4186 24.5182 18 17.6522 18H10C8.89543 18 8 17.1046 8 16Z",p1f7b34c0:"M28.5785 29.7572C30.11 28.4107 31.2915 26.7332 32.045 24.8693C32.2536 24.3534 32.4294 23.8231 32.5708 23.2817C32.595 23.189 32.6264 23.0993 32.6643 23.0134C32.955 22.3542 33.6273 21.9147 34.355 22.017C35.1776 22.1325 35.7578 22.8956 35.5655 23.7037C35.5386 23.8166 35.5105 23.9293 35.4812 24.0415C35.3156 24.6758 35.1116 25.2977 34.871 25.9038C33.9449 28.2364 32.4761 30.3356 30.5646 32.0162C27.6905 34.5431 24.0058 35.9562 20.1791 35.999C16.3524 36.0418 12.637 34.7116 9.70705 32.2497C6.7771 29.7877 4.82663 26.3572 4.20946 22.5803C3.5923 18.8034 4.34933 14.9304 6.34322 11.6639C8.33711 8.39733 11.4358 5.95367 15.0771 4.77618C18.7184 3.59868 22.6612 3.76535 26.1902 5.24595C27.8994 5.96306 29.4567 6.96538 30.8027 8.19734L34.2929 4.70709C34.9229 4.07712 36 4.52329 36 5.4142V16C36 16.5523 35.5523 17 35 17H24.4142C23.5233 17 23.0772 15.9228 23.7071 15.2929L28.6731 10.3269C27.603 9.36735 26.3727 8.58457 25.0264 8.01971C22.1609 6.81747 18.9594 6.68213 16.0026 7.63826C13.0459 8.59438 10.5297 10.5786 8.9107 13.2311C7.29166 15.8835 6.67695 19.0283 7.17809 22.0952C7.67923 25.162 9.26301 27.9476 11.6421 29.9467C14.0213 31.9458 17.0381 33.026 20.1454 32.9912C23.2527 32.9564 26.2447 31.809 28.5785 29.7572Z",p225ac300:"M7.73058 9.73058L4.70711 6.70711C4.07714 6.07714 3 6.52331 3 7.41421V16C3 16.5523 3.44771 17 4 17H12.5858C13.4767 17 13.9229 15.9229 13.2929 15.2929L9.87954 11.8795C10.7686 10.7715 11.839 9.81031 13.0532 9.04066C15.3262 7.59985 17.991 6.90145 20.6785 7.04218C23.3661 7.18292 25.9434 8.15582 28.0535 9.82616C29.3301 10.8367 30.3975 12.0723 31.2085 13.4628C31.4859 13.9385 31.7334 14.4322 31.9489 14.9413C31.9866 15.0305 32.0312 15.1156 32.0818 15.1961C32.467 15.8089 33.199 16.1483 33.9077 15.9415C34.7094 15.7075 35.1764 14.8644 34.8678 14.0883C34.8244 13.9791 34.7798 13.8704 34.734 13.7622C34.4809 13.1644 34.1922 12.5837 33.8698 12.0232C32.8639 10.2742 31.5305 8.72121 29.9306 7.45478C27.3287 5.39511 24.1507 4.19544 20.8367 4.0219C17.5227 3.84836 14.2368 4.70954 11.434 6.48619C10.0311 7.37542 8.78404 8.47195 7.73058 9.73058Z",p240e4300:"M31 24C32.1046 24 33 24.8954 33 26C33 27.1046 32.1046 28 31 28H9C7.89543 28 7 27.1046 7 26C7 24.8954 7.89543 24 9 24H31ZM31 12C32.1046 12 33 12.8954 33 14C33 15.1046 32.1046 16 31 16H9C7.89543 16 7 15.1046 7 14C7 12.8954 7.89543 12 9 12H31Z",p266a4b40:"M15.5 20C15.5 19.1716 16.1716 18.5 17 18.5C17.8284 18.5 18.5 19.1716 18.5 20V27C18.5 27.8284 17.8284 28.5 17 28.5C16.1716 28.5 15.5 27.8284 15.5 27V20Z",p2706c700:"M15 19.1001V14H30C31.1046 14 32 13.1046 32 12C32 10.8954 31.1046 10 30 10H15V4.89994C15 4.11506 14.1058 3.70775 13.5571 4.24269L6.27326 11.3433C5.90889 11.6985 5.90892 12.3027 6.27332 12.6579L13.5571 19.7574C14.1059 20.2922 15 19.8849 15 19.1001Z",p2945cf00:"M24 5V6H32.5C33.3284 6 34 6.67157 34 7.5C34 8.32843 33.3284 9 32.5 9H7.5C6.67157 9 6 8.32843 6 7.5C6 6.67157 6.67157 6 7.5 6H16V5C16 3.89543 16.8954 3 18 3H22C23.1046 3 24 3.89543 24 5Z",p2b0c900:"M7 9C5.89543 9 5 9.89543 5 11C5 12.1046 5.89543 13 7 13H33C34.1046 13 35 12.1046 35 11C35 9.89543 34.1046 9 33 9H7Z",p2e23da80:"M5 5C3.89543 5 3 5.89543 3 7C3 8.10457 3.89543 9 5 9H19C20.1046 9 21 8.10457 21 7C21 5.89543 20.1046 5 19 5H5Z",p2f4e8800:"M32.2694 17.5542C32.4388 17.9219 32.5235 18.364 32.5235 18.8808V19.8794H30.5956C29.3602 19.8794 28.2743 19.9986 27.3377 20.2371C26.4012 20.4657 25.6191 20.8085 24.9915 21.2656C24.3738 21.7127 23.9055 22.2642 23.5867 22.9201C23.2679 23.5759 23.1085 24.3261 23.1085 25.1707C23.1085 26.1048 23.3476 26.9395 23.8258 27.6748C24.314 28.4002 24.9715 28.9715 25.7985 29.3889C26.6354 29.7963 27.5669 30 28.5931 30C29.4001 30 30.0975 29.8808 30.6853 29.6423C31.2731 29.3939 31.7763 29.0808 32.1947 28.7033C32.3753 28.536 32.542 28.3641 32.6947 28.1876C32.7562 28.528 32.8318 28.8376 32.9213 29.1164C33.0389 29.4827 33.3956 29.7019 33.7797 29.7019H37.2955C37.4084 29.7019 37.5 29.6102 37.5 29.4971C37.5 29.4651 37.4925 29.4337 37.4785 29.405C37.2798 28.9974 37.1276 28.525 37.0218 27.9878C36.9122 27.4214 36.8574 26.696 36.8574 25.8117V18.9106C36.8574 17.6585 36.5734 16.6152 36.0056 15.7805C35.4476 14.9458 34.6805 14.3198 33.7041 13.9024C32.7277 13.4851 31.6119 13.2764 30.3565 13.2764C29.3104 13.2764 28.3639 13.4106 27.5171 13.6789C26.6802 13.9472 25.9579 14.3198 25.3501 14.7967C24.7424 15.2638 24.2791 15.8053 23.9603 16.4214C23.799 16.7331 23.6785 17.0537 23.5988 17.3832C23.469 17.92 23.929 18.374 24.4804 18.374H26.7878C27.3391 18.374 27.7485 17.8955 28.0136 17.4112C28.0314 17.3788 28.0502 17.347 28.07 17.3157C28.2593 17.0077 28.5283 16.7742 28.877 16.6152C29.2257 16.4463 29.6392 16.3618 30.1174 16.3618C30.6754 16.3618 31.1287 16.4661 31.4774 16.6748C31.836 16.8835 32.1001 17.1766 32.2694 17.5542ZM30.7152 22.3089C30.1473 22.3089 29.6541 22.3735 29.2357 22.5027C28.8173 22.6319 28.4735 22.8157 28.2045 23.0542C27.9355 23.2827 27.7363 23.551 27.6068 23.8591C27.4872 24.1671 27.4274 24.505 27.4274 24.8726C27.4274 25.2403 27.5121 25.5732 27.6815 25.8713C27.8508 26.1594 28.0949 26.388 28.4138 26.5569C28.7326 26.7159 29.1062 26.7954 29.5346 26.7954C30.1822 26.7954 30.7451 26.6662 31.2233 26.4079C31.7015 26.1495 32.0702 25.8315 32.3292 25.4539C32.5235 25.1707 32.5235 24.6608 32.5235 24.6608V22.3089H30.7152Z",p2fdffe00:"M6 34.0606C6 32.9895 6.86829 32.1212 7.93938 32.1212H32.0606C33.1317 32.1212 34 32.9895 34 34.0606C34 35.1317 33.1317 36 32.0606 36H7.93938C6.86829 36 6 35.1317 6 34.0606Z",p305db300:"M18 16.6059H10.0731C9.17548 16.6059 8.73243 17.697 9.376 18.3228L19.3017 27.9746C19.6898 28.352 20.3078 28.352 20.6959 27.9746L30.6232 18.3228C31.2668 17.6971 30.8238 16.6059 29.9261 16.6059H22V6C22 4.89543 21.1046 4 20 4C18.8954 4 18 4.89543 18 6V16.6059Z",p3084a600:"M3.00002 13C3.00002 11.8954 3.89545 11 5.00002 11H15C16.1046 11 17 11.8954 17 13C17 14.1046 16.1046 15 15 15H5.00002C3.89545 15 3.00002 14.1046 3.00002 13Z",p3228d072:"M20 23C21.6569 23 23 21.6569 23 20C23 18.3431 21.6569 17 20 17C18.3431 17 17 18.3431 17 20C17 21.6569 18.3431 23 20 23Z",p32fce00:"M18 31C10.8203 31 5 25.1797 5 18C5 10.8203 10.8203 5 18 5C25.1797 5 31 10.8203 31 18C31 20.8682 30.0711 23.5195 28.4978 25.6694L34.4142 31.5858C35.1953 32.3668 35.1953 33.6332 34.4142 34.4142C33.6332 35.1953 32.3668 35.1953 31.5858 34.4142L25.6694 28.4978C23.5195 30.0711 20.8682 31 18 31ZM27 18C27 22.9706 22.9706 27 18 27C13.0294 27 9 22.9706 9 18C9 13.0294 13.0294 9 18 9C22.9706 9 27 13.0294 27 18Z",p34ac9ec0:"M9 13.1C9 12.4925 9.49249 12 10.1 12H29.9C30.5075 12 31 12.4925 31 13.1V32.8C31 34.015 30.015 35 28.8 35H11.2C9.98497 35 9 34.015 9 32.8V13.1ZM15 19.5C15 18.6716 15.6716 18 16.5 18C17.3284 18 18 18.6716 18 19.5V27.5C18 28.3284 17.3284 29 16.5 29C15.6716 29 15 28.3284 15 27.5V19.5ZM23.5 18C22.6716 18 22 18.6716 22 19.5V27.5C22 28.3284 22.6716 29 23.5 29C24.3284 29 25 28.3284 25 27.5V19.5C25 18.6716 24.3284 18 23.5 18Z",p35a2e1f0:"M17.0001 13V18.1001C17.0001 18.8849 16.1059 19.2922 15.5572 18.7574L8.2734 11.6579C7.909 11.3027 7.90898 10.6985 8.27335 10.3433L15.5571 3.24269C16.1059 2.70775 17.0001 3.11506 17.0001 3.89995V9H21.2222C26.7581 9 31.6657 11.6967 34.6253 15.8369C35.2677 16.7355 35.06 17.9847 34.1614 18.627C33.2628 19.2694 32.0136 19.0617 31.3713 18.1631C29.1454 15.0493 25.4376 13 21.2222 13H17.0001Z",p39200380:"M5 29C5 27.8954 5.89543 27 7 27H33C34.1046 27 35 27.8954 35 29C35 30.1046 34.1046 31 33 31H7C5.89543 31 5 30.1046 5 29Z",p3adc2c00:"M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z",p3b110300:"M5.60624 29.7019C6.03721 29.7019 6.41952 29.4249 6.5544 29.0149L7.83364 25.126H15.6541L16.9368 29.0156C17.0719 29.4252 17.454 29.7019 17.8847 29.7019H20.5045C21.2016 29.7019 21.6841 29.0044 21.4392 28.3506L14.0586 8.64867C13.9124 8.25848 13.54 8 13.1239 8H10.3391C9.92235 8 9.54947 8.25929 9.40378 8.65037L2.0639 28.3523C1.82044 29.0058 2.30286 29.7019 2.9992 29.7019H5.60624ZM11.7389 13.2541L8.98586 21.6233H14.499L11.7389 13.2541Z",p3b255100:"M23.0001 31V36.1001C23.0001 36.8849 23.8942 37.2922 24.443 36.7574L31.7268 29.6579C32.0912 29.3027 32.0912 28.6985 31.7268 28.3433L24.443 21.2427C23.8943 20.7078 23.0001 21.1151 23.0001 21.8999V27H18.7761C14.5607 27 10.8529 24.9506 8.62706 21.8369C7.98471 20.9383 6.73553 20.7306 5.83695 21.373C4.93836 22.0153 4.73065 23.2645 5.373 24.1631C8.33263 28.3033 13.2402 31 18.7761 31H23.0001Z",p3c1eec00:"M35.2929 33.2929C35.9229 33.9229 37 33.4767 37 32.5858V24C37 23.4477 36.5523 23 36 23H27.4142C26.5233 23 26.0771 24.0771 26.7071 24.7071L30.1328 28.1328C29.4775 28.9492 28.7223 29.688 27.8805 30.3302C25.7379 31.9646 23.1402 32.8925 20.447 32.9852C17.7538 33.0779 15.0984 32.3309 12.8485 30.8476C11.4894 29.9516 10.3188 28.8136 9.38981 27.4992C9.06818 27.0442 8.7755 26.568 8.51397 26.0734C8.46921 25.9887 8.41813 25.9086 8.36158 25.8337C7.9278 25.2587 7.17283 24.985 6.48807 25.2511C5.71407 25.5519 5.32417 26.4273 5.69627 27.1696C5.74827 27.2734 5.80138 27.3765 5.85556 27.479C6.16196 28.0585 6.50307 28.6174 6.87657 29.1529C8.02965 30.8062 9.49142 32.2362 11.1934 33.3583C13.964 35.1848 17.2339 36.1047 20.5505 35.9905C23.867 35.8764 27.066 34.7338 29.7044 32.721C30.6529 31.9975 31.5121 31.1743 32.2694 30.2694L35.2929 33.2929Z",p3fc31700:"M14.3543 8.01244C14.3543 7.12948 13.3256 6.67124 12.6943 7.27297L4.31444 15.2599C3.89521 15.6595 3.89518 16.3392 4.31438 16.7388L12.6942 24.727C13.3255 25.3288 14.3543 24.8706 14.3543 23.9876V8.01244Z",p51c7600:"M23 9C23 10.6569 21.6569 12 20 12C18.3431 12 17 10.6569 17 9C17 7.34315 18.3431 6 20 6C21.6569 6 23 7.34315 23 9Z",p71ad600:"M30.0327 16.3883H21.999V26.7724C21.999 27.8769 21.1036 28.7724 19.999 28.7724C18.8945 28.7724 17.999 27.8769 17.999 26.7724V16.3883H9.96607C9.0835 16.3883 8.63365 15.3284 9.2468 14.6936L19.2809 4.30526C19.6741 3.89822 20.3264 3.89825 20.7195 4.30532L30.752 14.6937C31.3651 15.3285 30.9153 16.3883 30.0327 16.3883Z",p8ea7e00:"M20 34C21.6569 34 23 32.6569 23 31C23 29.3431 21.6569 28 20 28C18.3431 28 17 29.3431 17 31C17 32.6569 18.3431 34 20 34Z",p999a4f0:"M8 31.8696C6.89543 31.8696 6 32.7651 6 33.8696V33.9999C6 35.1045 6.89543 35.9999 8 35.9999H32C33.1046 35.9999 34 35.1045 34 33.9999V33.8696C34 32.7651 33.1046 31.8696 32 31.8696H8Z",pd473480:"M25 20.8999V26H10C8.89543 26 8 26.8954 8 28C8 29.1046 8.89543 30 10 30H25V35.1C25 35.8849 25.8942 36.2922 26.4429 35.7573L33.7267 28.6567C34.0911 28.3015 34.0911 27.6973 33.7267 27.3421L26.4429 20.2426C25.8941 19.7078 25 20.1151 25 20.8999Z",pe4b180:"M21.5 20C21.5 19.1716 22.1716 18.5 23 18.5C23.8284 18.5 24.5 19.1716 24.5 20V27C24.5 27.8284 23.8284 28.5 23 28.5C22.1716 28.5 21.5 27.8284 21.5 27V20Z",pe6f8200:"M14.6329 3.47154C17.9414 1.50823 22.0588 1.5082 25.3673 3.47154L28.4776 5.31822L31.6319 7.08873C34.9867 8.97177 37.0454 12.5363 36.9991 16.3827L36.9561 19.9999L36.9991 23.6161C37.0455 27.4625 34.9868 31.027 31.6319 32.91L28.4776 34.6805L25.3673 36.5272C22.0588 38.4906 17.9414 38.4906 14.6329 36.5272L11.5225 34.6805L8.36726 32.91C5.01266 31.0269 2.95469 27.4623 3.00105 23.6161L3.04402 19.9999L3.00105 16.3827C2.95474 12.5364 5.01263 8.97181 8.36726 7.08873L11.5225 5.31822L14.6329 3.47154ZM20.0001 10.9999C18.8956 10.9999 18.0001 11.8953 18.0001 12.9999V17.9999H13.0001C11.8956 17.9999 11.0001 18.8953 11.0001 19.9999C11.0001 21.1043 11.8956 21.9998 13.0001 21.9999H18.0001V26.9999C18.0001 28.1043 18.8956 28.9998 20.0001 28.9999C21.1045 28.9997 22 28.1043 22.0001 26.9999V21.9999H27.0001C28.1045 21.9997 29 21.1043 29.0001 19.9999C29.0001 18.8954 28.1045 18 27.0001 17.9999H22.0001V12.9999C22.0001 11.8954 21.1045 11 20.0001 10.9999Z",p26293800:"M29.4331 34.8554L26.7394 37.5491C26.6788 37.6097 26.6174 37.6687 26.555 37.7263L26.3974 37.8911C22.62 41.6686 14.0459 39.2188 7.24655 32.4194C0.447231 25.62 -2.00252 17.0458 1.77488 13.2684L1.94104 13.1093L2.11686 12.9264L4.81059 10.2326C5.56607 9.47714 6.79095 9.47714 7.54643 10.2326C7.65827 10.3445 7.75598 10.4696 7.83735 10.6052L11.7692 17.1583C12.3005 18.0438 12.0426 19.1905 11.1834 19.7633L6.26964 23.0389C6.74578 25.0712 8.10824 27.4185 10.1778 29.4881C12.2474 31.5577 14.5947 32.9202 16.6269 33.3963L19.9025 28.4825C20.4753 27.6233 21.622 27.3654 22.5074 27.8967L29.0605 31.8286C29.9766 32.3783 30.2737 33.5666 29.724 34.4828C29.6426 34.6184 29.5449 34.7435 29.4331 34.8554Z",p3d4c6bc0:"M28.4189 11.7108C25.6243 8.82699 21.4924 7.12257 17.4519 7.12257C16.6234 7.12257 15.9519 6.451 15.9519 5.62257C15.9519 4.79415 16.6234 4.12257 17.4519 4.12257C22.2794 4.12257 27.1964 6.13842 30.5732 9.62302C33.9707 13.129 35.5936 17.8944 35.443 22.688C35.417 23.516 34.7246 24.1661 33.8966 24.1401C33.0686 24.1141 32.4184 23.4218 32.4445 22.5937C32.5724 18.5237 31.1928 14.5732 28.4189 11.7108Z",p3f2bf300:"M23.4623 16.4028C22.6233 15.5369 21.6188 14.8485 20.5086 14.3784C19.3983 13.9083 18.2049 13.666 16.9992 13.666C16.1708 13.666 15.4992 12.9944 15.4992 12.166C15.4992 11.3376 16.1708 10.666 16.9992 10.666C18.6068 10.666 20.198 10.989 21.6783 11.6159C23.1587 12.2427 24.498 13.1606 25.6167 14.315C26.7355 15.4695 27.6108 16.837 28.1909 18.3363C28.7709 19.8356 29.0438 21.4361 28.9933 23.0429C28.9673 23.8709 28.2749 24.5211 27.4469 24.4951C26.6189 24.4691 25.9687 23.7767 25.9948 22.9487C26.0326 21.7436 25.828 20.5432 25.393 19.4187C24.9579 18.2942 24.3014 17.2686 23.4623 16.4028Z"},Hi={phoneAnswer:"M17.2071 15.0145L15.8153 16.4063C15.7841 16.4376 15.7523 16.4681 15.7201 16.4978L15.6386 16.583C13.687 18.5346 9.25703 17.2689 5.74405 13.7559C2.23107 10.2429 0.965366 5.81289 2.91702 3.86122L3.00287 3.77904L3.09371 3.68453L4.48547 2.29275C4.8758 1.90242 5.50866 1.90242 5.89899 2.29275C5.95677 2.35054 6.00725 2.41519 6.0493 2.48527L8.08074 5.87104C8.35524 6.32854 8.22202 6.92098 7.7781 7.21693L5.23931 8.90934C5.48532 9.95936 6.18926 11.1721 7.25853 12.2414C8.3278 13.3107 9.54057 14.0146 10.5906 14.2607L12.283 11.7218C12.5789 11.2779 13.1714 11.1447 13.6288 11.4192L17.0146 13.4507C17.4879 13.7347 17.6414 14.3486 17.3574 14.822C17.3154 14.8921 17.2649 14.9567 17.2071 15.0145Z",lib1:"M11.25 10.75C10.9739 10.75 10.75 10.9739 10.75 11.25V16.75C10.75 17.0261 10.9739 17.25 11.25 17.25H16.75C17.0261 17.25 17.25 17.0261 17.25 16.75V11.25C17.25 10.9739 17.0261 10.75 16.75 10.75H11.25Z",lib2:"M2.75 11.25C2.75 10.9739 2.97386 10.75 3.25 10.75H8.75C9.02614 10.75 9.25 10.9739 9.25 11.25V16.75C9.25 17.0261 9.02614 17.25 8.75 17.25H3.25C2.97386 17.25 2.75 17.0261 2.75 16.75V11.25Z",lib3:"M2.75 3.25C2.75 2.97386 2.97386 2.75 3.25 2.75H8.75C9.02614 2.75 9.25 2.97386 9.25 3.25V8.75C9.25 9.02614 9.02614 9.25 8.75 9.25H3.25C2.97386 9.25 2.75 9.02614 2.75 8.75V3.25Z",lib4:"M11.25 2.75H16.75C17.0261 2.75 17.25 2.97386 17.25 3.25V8.75C17.25 9.02614 17.0261 9.25 16.75 9.25H11.25C10.9739 9.25 10.75 9.02614 10.75 8.75V3.25C10.75 2.97386 10.9739 2.75 11.25 2.75ZM12.25 7.75V4.25H15.75V7.75H12.25Z"},J=S.div`
  width: ${e=>e.$size}px;
  height: ${e=>e.$size}px;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,i9=S.div`
  width: ${e=>e.$width}px;
  height: ${e=>e.$height}px;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,dc=({size:e=32,color:r="var(--Text-Secondary, #D5E2F2)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"none",style:{display:"block"},children:c.jsx("path",{clipRule:"evenodd",d:sr.p28dd5f00,fill:r,fillRule:"evenodd"})})}),Zp=({size:e=32,color:r="var(--Text-Secondary, #D5E2F2)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsxs("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"none",style:{display:"block"},children:[c.jsx("path",{d:sr.p1699a100,fill:r}),c.jsx("path",{clipRule:"evenodd",d:sr.p10f70780,fill:r,fillRule:"evenodd"})]})}),Kp=({size:e=32,color:r="var(--Text-Secondary, #D5E2F2)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsxs("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"none",style:{display:"block"},children:[c.jsx("path",{clipRule:"evenodd",d:sr.p1110b800,fill:r,fillRule:"evenodd"}),c.jsx("path",{d:sr.p18d7b780,fill:r}),c.jsx("path",{d:sr.p25c8a0b0,fill:r})]})}),Gp=({size:e=32,color:r="var(--Text-Secondary, #D5E2F2)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 32 32",fill:"none",style:{display:"block"},children:c.jsx("path",{clipRule:"evenodd",d:sr.p300dea40,fill:r,fillRule:"evenodd"})})}),Yp=({size:e=24,color:r="var(--Text-Assist, #B6C3D6)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:{display:"block"},children:c.jsx("path",{d:Wp.p2f5ec580,fill:r})})}),o9=({size:e=24,color:r="var(--Text-Primary, #ffffff)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:{display:"block"},children:c.jsx("path",{d:Wp.p65d1800,fill:r})})}),s9=({size:e=40,color:r="var(--Text-Primary, #ffffff)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:c.jsxs("g",{children:[c.jsx("path",{d:ge.p305db300,fill:r}),c.jsx("path",{d:ge.p2fdffe00,fill:r})]})})}),a9=({size:e=40,color:r="var(--Text-Primary, #ffffff)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:c.jsxs("g",{children:[c.jsx("path",{d:ge.p2945cf00,fill:r}),c.jsx("path",{clipRule:"evenodd",d:ge.p34ac9ec0,fill:r,fillRule:"evenodd"})]})})}),l9=({size:e=40,color:r="var(--Text-Primary, #ffffff)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:c.jsxs("g",{children:[c.jsx("path",{d:ge.p19152e00,fill:r}),c.jsx("path",{d:ge.p266a4b40,fill:r}),c.jsx("path",{d:ge.pe4b180,fill:r}),c.jsx("path",{clipRule:"evenodd",d:ge.p179f4400,fill:r,fillRule:"evenodd"})]})})}),Qp=({width:e=87.324,height:r=20,color:i="var(--Text-Primary, #ffffff)",className:s})=>c.jsx(i9,{$width:e,$height:r,className:s,children:c.jsx("svg",{width:e,height:r,viewBox:"0 0 88 20",fill:"none",style:{display:"block"},children:c.jsxs("g",{children:[c.jsx("path",{d:Ss.p1c50b080,fill:i}),c.jsx("path",{d:Ss.p22754900,fill:i}),c.jsx("path",{d:Ss.p1fa0f800,fill:i}),c.jsx("path",{d:Ss.p35c3fa00,fill:i})]})})}),u9=({size:e=24,color:r="var(--Text-Secondary, #D5E2F2)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:{display:"block"},children:c.jsx("path",{d:Ki.p3c404700,fill:r})})}),c9=({size:e=24,color:r="var(--Text-Secondary, #D5E2F2)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:{display:"block"},children:c.jsx("path",{d:Ki.p21eedc00,fill:r})})}),d9=({size:e=40,color:r="var(--Text-Secondary, #D5E2F2)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:c.jsxs("g",{children:[c.jsx("path",{d:ge.p225ac300,fill:r}),c.jsx("path",{d:ge.p3c1eec00,fill:r})]})})}),f9=({size:e=40,color:r="var(--Text-Secondary, #D5E2F2)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:c.jsxs("g",{children:[c.jsx("path",{d:ge.p3b255100,fill:r}),c.jsx("path",{d:ge.p35a2e1f0,fill:r})]})})}),p9=({size:e=40,color:r="var(--Text-Secondary, #D5E2F2)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:c.jsxs("g",{children:[c.jsx("path",{d:ge.p2706c700,fill:r}),c.jsx("path",{d:ge.pd473480,fill:r})]})})}),h9=({size:e=40,color:r,className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:c.jsxs("g",{children:[c.jsx("path",{d:ge.p2706c700,fill:"#00B3E3"}),c.jsx("path",{d:ge.pd473480,fill:"#FF9771"})]})})}),m9=({size:e=40,color:r="var(--Text-Primary, #ffffff)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:c.jsxs("g",{children:[c.jsx("path",{clipRule:"evenodd",d:ge.p1b167f00,fill:r,fillRule:"evenodd"}),c.jsx("path",{d:ge.p3fc31700,fill:r})]})})}),g9=({size:e=40,color:r="var(--Text-Primary, #ffffff)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:c.jsxs("g",{children:[c.jsx("path",{d:ge.p71ad600,fill:r}),c.jsx("path",{d:ge.p999a4f0,fill:r})]})})}),y9=({size:e=40,color:r="var(--Text-Primary, #ffffff)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:c.jsx("path",{d:ge.p1f7b34c0,fill:r})})}),v9=({size:e=40,color:r="var(--Colors-Surface-Backgronud--02, #364356)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsxs("div",{style:{position:"relative",width:"100%",height:"100%"},children:[c.jsx("div",{style:{position:"absolute",inset:"10%"},children:c.jsx("svg",{width:"100%",height:"100%",viewBox:"0 0 32 32",fill:"none",style:{display:"block"},children:c.jsx("path",{clipRule:"evenodd",d:ge.p3adc2c00,fill:r,fillRule:"evenodd"})})}),c.jsx("div",{style:{position:"absolute",inset:"10%"},children:c.jsx("div",{style:{position:"absolute",inset:"0.35% 0 0 23.1%",width:"76.9%",height:"99.65%"},children:c.jsx("img",{src:r9,alt:"",style:{width:"100%",height:"100%",display:"block"}})})})]})}),x9=({size:e=40,color:r="var(--Text-Primary, #ffffff)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:c.jsxs("g",{children:[c.jsx("path",{d:ge.p2e23da80,fill:r}),c.jsx("path",{clipRule:"evenodd",d:ge.p1776ec80,fill:r,fillRule:"evenodd"}),c.jsx("path",{d:ge.p3084a600,fill:r}),c.jsx("path",{d:ge.p10fccd60,fill:r})]})})}),C9=({size:e=40,color:r="var(--Text-Primary, #ffffff)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:c.jsxs("g",{children:[c.jsx("path",{clipRule:"evenodd",d:ge.p3b110300,fill:r,fillRule:"evenodd"}),c.jsx("path",{clipRule:"evenodd",d:ge.p2f4e8800,fill:r,fillRule:"evenodd"})]})})}),w9=({size:e=40,color:r="var(--Text-Primary, #ffffff)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:c.jsxs("g",{children:[c.jsx("path",{d:ge.p17b85200,fill:r}),c.jsx("path",{clipRule:"evenodd",d:ge.p32fce00,fill:r,fillRule:"evenodd"})]})})}),S9=({size:e=40,color:r="var(--Text-Primary, #ffffff)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:c.jsx("path",{clipRule:"evenodd",d:ge.pe6f8200,fill:r,fillRule:"evenodd"})})}),k9=({size:e=40,color:r="var(--Text-Primary, #ffffff)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:c.jsxs("g",{children:[c.jsx("path",{d:ge.p2b0c900,fill:r}),c.jsx("path",{d:ge.p183a7180,fill:r}),c.jsx("path",{d:ge.p39200380,fill:r})]})})}),j9=({size:e=40,color:r="var(--Text-Primary, #ffffff)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:c.jsx("path",{d:ge.p240e4300,fill:r})})}),b9=({size:e=24,color:r,className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:{display:"block"},children:[c.jsxs("g",{children:[c.jsx("path",{d:ku.p3f723180,fill:"#62D4F3"}),c.jsx("path",{d:ku.p9a06a40,fill:"#62D4F3"})]}),c.jsx("path",{d:ku.p1e6cb280,fill:"#FF9771"})]})}),T9=({size:e=24,color:r,className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:{display:"block"},children:[c.jsxs("g",{children:[c.jsx("path",{clipRule:"evenodd",d:ju.pcc2a100,fill:"#62D4F3",fillRule:"evenodd"}),c.jsx("path",{clipRule:"evenodd",d:ju.p2dad2c00,fill:"#62D4F3",fillRule:"evenodd"})]}),c.jsx("path",{clipRule:"evenodd",d:ju.p2b3bf100,fill:"#FF9771",fillRule:"evenodd"})]})}),E9=({size:e=24,color:r="var(--Text-Secondary, #D5E2F2)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:{display:"block"},children:[c.jsx("path",{d:Ki.p3cef400,fill:r}),c.jsx("path",{d:Ki.p3b765800,fill:r}),c.jsx("path",{d:Ki.p33480b00,fill:r})]})}),fc=({size:e=24,color:r="var(--Text-Primary, #ffffff)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:{display:"block"},children:c.jsx("path",{d:Ks.p3581f900,fill:r})})}),L9=({size:e=24,color:r="var(--Text-Primary, #ffffff)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:{display:"block"},children:[c.jsx("path",{d:Ks.p1100e400,fill:r}),c.jsx("path",{d:Ks.p20c9f000,fill:r})]})}),P9=({size:e=24,color:r="var(--Text-Primary, #ffffff)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:{display:"block"},children:c.jsx("path",{clipRule:"evenodd",d:Ks.p1e4eed80,fill:r,fillRule:"evenodd"})})}),R9=({size:e=20,color:r="var(--Text-Assist, #B6C3D6)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",style:{display:"block"},children:c.jsx("path",{d:e9.p3398d140,fill:r})})}),Xp=({size:e=40,color:r="var(--Text-Primary, #ffffff)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:c.jsxs("g",{children:[c.jsx("path",{clipRule:"evenodd",d:Xe.pead0f00,fill:r,fillRule:"evenodd"}),c.jsx("path",{clipRule:"evenodd",d:Xe.p288a75f0,fill:r,fillRule:"evenodd"}),c.jsx("path",{clipRule:"evenodd",d:Xe.p2b953612,fill:r,fillRule:"evenodd"})]})})}),M9=({size:e=20,color:r="currentColor",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",style:{display:"block"},children:c.jsx("path",{clipRule:"evenodd",d:t9.p3fcc4900,fill:r,fillRule:"evenodd"})})}),A9=({size:e=24,color:r="var(--Text-Secondary, #D5E2F2)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:{display:"block"},children:c.jsx("path",{clipRule:"evenodd",d:Kc.p19152e00,fill:r,fillRule:"evenodd"})})}),B9=({size:e=24,color:r="var(--Text-Secondary, #D5E2F2)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:{display:"block"},children:c.jsx("path",{clipRule:"evenodd",d:Kc.p3e090b80,fill:r,fillRule:"evenodd"})})}),$9=({size:e=24,color:r="var(--Text-Secondary, #D5E2F2)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:{display:"block"},children:c.jsx("path",{clipRule:"evenodd",d:Kc.p1f0efb00,fill:r,fillRule:"evenodd"})})}),D9=({size:e=40,color:r="var(--Text-Primary, #ffffff)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:c.jsx("path",{clipRule:"evenodd",d:Xe.p1b403400,fill:r,fillRule:"evenodd"})})}),V9=({size:e=48,color:r,className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsxs("svg",{width:e,height:e,viewBox:"0 0 48 48",fill:"none",preserveAspectRatio:"none",style:{display:"block"},children:[c.jsx("g",{id:"Icons/ icon_security",children:c.jsxs("g",{id:"Icon",children:[c.jsx("path",{d:z2.p12e0b880,fill:"url(#paint0_linear_4313_84)"}),c.jsx("path",{d:z2.p12e0b880,stroke:"var(--stroke-0, #364356)"})]})}),c.jsx("defs",{children:c.jsxs("linearGradient",{gradientUnits:"userSpaceOnUse",id:"paint0_linear_4313_84",x1:"24.0002",x2:"24.0002",y1:"6",y2:"45.3435",children:[c.jsx("stop",{offset:"0.35",stopColor:"#33C2E9"}),c.jsx("stop",{offset:"1",stopColor:"#1A5EFF"})]})})]})}),I9=({size:e=12,color:r="var(--Text-Primary, #ffffff)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 12 13",fill:"none",style:{display:"block"},children:c.jsx("g",{children:c.jsx("path",{d:n9.p373efc80,fill:r,stroke:"var(--Colors-Surface-Backgronud--01, #131B26)"})})})}),F9=({size:e=12,color:r="var(--Text-Primary, #ffffff)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 13 13",fill:"none",style:{display:"block"},children:c.jsxs("g",{children:[c.jsx("path",{d:bu.p21f1a600,fill:r,stroke:"var(--Colors-Surface-Backgronud--01, #131B26)"}),c.jsx("path",{d:bu.p91f5200,fill:"var(--Colors-Surface-Backgronud--01, #131B26)",stroke:"var(--Colors-Surface-Backgronud--01, #131B26)",strokeWidth:"0.2"}),c.jsx("path",{d:bu.p2dac4d00,fill:"var(--Colors-Surface-Backgronud--01, #131B26)",stroke:"var(--Colors-Surface-Backgronud--01, #131B26)",strokeWidth:"0.2"})]})})}),N9=({size:e=12,color:r="currentColor",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:c.jsx("path",{d:fa.p28bea880,fill:r})})}),z9=({size:e=24,color:r="currentColor",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:{display:"block"},children:c.jsx("path",{d:"M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z",fill:r})})}),qp=({size:e=20,color:r="var(--Text-Assist, #B6C3D6)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsxs("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",style:{display:"block"},children:[c.jsx("path",{d:"M9.05882 10C9.05882 9.4802 9.4802 9.05882 10 9.05882C10.5198 9.05882 10.9412 9.4802 10.9412 10V13.2941C10.9412 13.8139 10.5198 14.2353 10 14.2353C9.4802 14.2353 9.05882 13.8139 9.05882 13.2941V10Z",fill:r}),c.jsx("path",{d:"M10 5.52941C9.35025 5.52941 8.82353 6.05614 8.82353 6.70588C8.82353 7.35563 9.35025 7.88235 10 7.88235C10.6497 7.88235 11.1765 7.35563 11.1765 6.70588C11.1765 6.05614 10.6497 5.52941 10 5.52941Z",fill:r}),c.jsx("path",{clipRule:"evenodd",d:"M2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10ZM16.5882 10C16.5882 13.6386 13.6386 16.5882 10 16.5882C6.36142 16.5882 3.41176 13.6386 3.41176 10C3.41176 6.36142 6.36142 3.41176 10 3.41176C13.6386 3.41176 16.5882 6.36142 16.5882 10Z",fill:r,fillRule:"evenodd"})]})}),pc=({size:e=24,color:r="var(--Text-Secondary, #D5E2F2)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:{display:"block"},children:c.jsx("path",{clipRule:"evenodd",d:"M12.5605 1.34222C12.2098 1.15259 11.7902 1.15259 11.4395 1.34222L2.71943 6.05765C2.50651 6.17278 2.40004 6.38632 2.4 6.59988V17.3997C2.39999 17.6134 2.50647 17.8271 2.71943 17.9423L11.4395 22.6577C11.7902 22.8473 12.2098 22.8473 12.5605 22.6577L21.2806 17.9423C21.4935 17.8271 21.6 17.6135 21.6 17.3999V6.59988C21.6 6.38632 21.4935 6.17278 21.2806 6.05765L12.5605 1.34222ZM12 3.08546L5.50067 6.6L12 10.1145L18.4993 6.6L12 3.08546ZM19.8 7.94297V16.9425L12.9 20.6737V11.6742L19.8 7.94297ZM11.1 11.6742V20.6737L4.2 16.9425V7.94297L11.1 11.6742Z",fill:r,fillRule:"evenodd"})})}),hc=({size:e=24,color:r="var(--Text-Secondary, #D5E2F2)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsxs("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:{display:"block"},children:[c.jsx("path",{d:"M7.88338 14.2631C7.47636 14.5484 7.37768 15.1096 7.66298 15.5166C8.58936 16.8382 10.3063 17.7 11.9932 17.7C13.6787 17.7 15.3918 16.8401 16.3324 15.5231C16.6212 15.1186 16.5275 14.5565 16.123 14.2676C15.7185 13.9788 15.1564 14.0725 14.8676 14.477C14.2689 15.3153 13.104 15.9 11.9932 15.9C10.8838 15.9 9.72066 15.3162 9.13695 14.4835C8.85165 14.0764 8.29041 13.9778 7.88338 14.2631Z",fill:r}),c.jsx("path",{d:"M8.4 9.3C8.4 8.80294 8.80294 8.4 9.3 8.4C9.79705 8.4 10.2 8.80294 10.2 9.3V11.1C10.2 11.5971 9.79705 12 9.3 12C8.80294 12 8.4 11.5971 8.4 11.1V9.3Z",fill:r}),c.jsx("path",{d:"M14.7 8.4C14.2029 8.4 13.8 8.80294 13.8 9.3V11.1C13.8 11.5971 14.2029 12 14.7 12C15.1971 12 15.6 11.5971 15.6 11.1V9.3C15.6 8.80294 15.1971 8.4 14.7 8.4Z",fill:r}),c.jsx("path",{clipRule:"evenodd",d:"M12 22.2C6.36669 22.2 1.8 17.6333 1.8 12C1.8 6.36669 6.36669 1.8 12 1.8C17.6333 1.8 22.2 6.36669 22.2 12C22.2 17.6333 17.6333 22.2 12 22.2ZM12 20.4C16.6392 20.4 20.4 16.6392 20.4 12C20.4 7.36081 16.6392 3.6 12 3.6C7.36081 3.6 3.6 7.36081 3.6 12C3.6 16.6392 7.36081 20.4 12 20.4Z",fill:r,fillRule:"evenodd"})]})}),Jp=({size:e=24,color:r="currentColor",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none",style:{display:"block"},children:c.jsx("path",{d:"M2.59704 11.0617C2.19205 11.427 2.45308 12.0943 3.00094 12.0943H4.2034V19.8126C4.2034 20.4684 4.74043 21 5.40288 21H10.5824V17.6191C10.5824 16.9633 11.1195 16.4317 11.7819 16.4317H12.2181C12.8805 16.4317 13.4176 16.9633 13.4176 17.6191V21H18.5971C19.2596 21 19.7966 20.4684 19.7966 19.8126V12.0943H20.9991C21.5469 12.0943 21.8079 11.427 21.403 11.0617L12.8078 3.30966C12.35 2.89678 11.65 2.89678 11.1922 3.30966L2.59704 11.0617Z",fill:r})})}),O9=({size:e=40,color:r="var(--Text-Primary, #ffffff)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:c.jsxs("g",{children:[c.jsx("path",{d:ge.p51c7600,fill:r}),c.jsx("path",{d:ge.p3228d072,fill:r}),c.jsx("path",{d:ge.p8ea7e00,fill:r})]})})}),_9=({size:e=40,color:r="currentColor",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsxs("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{display:"block"},children:[c.jsx("rect",{x:"12",y:"5",width:"4",height:"30",rx:"1",fill:r}),c.jsx("rect",{x:"24",y:"5",width:"4",height:"30",rx:"1",fill:r})]})}),H9=({size:e=40,color:r="currentColor",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{display:"block"},children:c.jsx("path",{d:"M12 5L34 20L12 35V5Z",fill:r})})}),U9=({size:e=40,color:r="currentColor",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{display:"block"},children:c.jsx("rect",{x:"8",y:"8",width:"24",height:"24",rx:"2",fill:r})})}),W9=({size:e=40,color:r="currentColor",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{display:"block"},children:c.jsx("circle",{cx:"20",cy:"20",r:"12",fill:r})})}),Z9=({size:e=40,color:r="var(--Text-Primary, #ffffff)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:c.jsx("path",{d:fa.p283f5760,fill:r})})}),K9=({size:e=40,color:r="var(--Text-Primary, #ffffff)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:c.jsx("path",{d:fa.p28d9a880,fill:r})})}),G9=({size:e=40,color:r="var(--Text-Primary, #ffffff)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:c.jsx("path",{d:cr.p1994a170,fill:r})})}),Y9=({size:e=40,color:r="var(--Text-Primary, #ffffff)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:c.jsx("path",{d:cr.pf082e80,fill:r})})}),Q9=({size:e=40,color:r="var(--Text-Primary, #ffffff)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:c.jsxs("g",{children:[c.jsx("path",{clipRule:"evenodd",d:cr.p3e6de5f0,fill:r,fillRule:"evenodd"}),c.jsx("path",{d:cr.p25aa3d70,fill:r})]})})}),X9=({size:e=40,color:r="var(--Text-Primary, #ffffff)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:c.jsx("path",{clipRule:"evenodd",d:cr.p3256d072,fill:r,fillRule:"evenodd"})})}),q9=({size:e=40,color:r="var(--Text-Primary, #ffffff)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:c.jsx("path",{clipRule:"evenodd",d:cr.p1f352f00,fill:r,fillRule:"evenodd"})})}),J9=({size:e=40,color:r="var(--Text-Primary, #ffffff)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:c.jsx("path",{clipRule:"evenodd",d:cr.p14736900,fill:r,fillRule:"evenodd"})})}),em=({size:e=40,color:r="var(--Text-Primary, #ffffff)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:c.jsx("path",{d:fa.pacd0700,fill:r})})}),tm=({size:e=40,color:r="var(--Text-Primary, #ffffff)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:c.jsxs("g",{children:[c.jsx("path",{clipRule:"evenodd",d:Xe.p184eb400,fill:r,fillRule:"evenodd"}),c.jsx("path",{clipRule:"evenodd",d:Xe.p29872300,fill:r,fillRule:"evenodd"})]})})}),nm=({size:e=40,color:r="var(--Text-Primary, #ffffff)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:c.jsx("path",{clipRule:"evenodd",d:Xe.p2c7da900,fill:r,fillRule:"evenodd"})})}),rm=({size:e=40,color:r="var(--Text-Primary, #ffffff)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:c.jsxs("g",{children:[c.jsx("path",{d:Xe.p17b7de00,fill:r}),c.jsx("path",{clipRule:"evenodd",d:Xe.p3e6de5f0,fill:r,fillRule:"evenodd"})]})})}),im=({size:e=40,color:r="var(--Text-Primary, #ffffff)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:c.jsxs("g",{children:[c.jsx("path",{d:Xe.p328ca900,fill:r}),c.jsx("path",{d:Xe.p10b6d300,fill:r}),c.jsx("path",{d:Xe.p31de9980,fill:r})]})})}),om=({size:e=40,color:r="var(--Text-Primary, #ffffff)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:c.jsxs("g",{children:[c.jsx("path",{d:Xe.pd1903e0,fill:r}),c.jsx("path",{d:Xe.p34cda700,fill:r})]})})}),sm=({size:e=40,color:r="var(--Text-Primary, #ffffff)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:c.jsx("path",{clipRule:"evenodd",d:Xe.p1a0aca80,fill:r,fillRule:"evenodd"})})}),am=({size:e=40,color:r="var(--Text-Primary, #ffffff)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:c.jsx("path",{clipRule:"evenodd",d:Xe.p1f7d3280,fill:r,fillRule:"evenodd"})})}),lm=({size:e=40,color:r="var(--Text-Primary, #ffffff)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:c.jsx("path",{clipRule:"evenodd",d:Xe.p1bf31d80,fill:r,fillRule:"evenodd"})})}),um=({size:e=40,color:r="var(--Text-Primary, #ffffff)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:c.jsx("path",{d:Xe.p184aa700,fill:r})})}),cm=({size:e=40,color:r="var(--Text-Primary, #ffffff)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:c.jsx("path",{clipRule:"evenodd",d:Xe.p32fce00,fill:r,fillRule:"evenodd"})})}),dm=({size:e=40,color:r,className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 40 40",fill:"none",style:{display:"block"},children:c.jsxs("g",{children:[c.jsx("path",{clipRule:"evenodd",d:ge.p26293800,fill:"#62D4F3",fillRule:"evenodd"}),c.jsx("path",{clipRule:"evenodd",d:ge.p3f2bf300,fill:"#FF9771",fillRule:"evenodd"}),c.jsx("path",{clipRule:"evenodd",d:ge.p3d4c6bc0,fill:"#FF9771",fillRule:"evenodd"})]})})}),fm=({size:e=20,color:r="var(--Text-Primary, #ffffff)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",preserveAspectRatio:"none",style:{display:"block"},children:c.jsx("g",{children:c.jsx("path",{clipRule:"evenodd",d:Hi.phoneAnswer,fill:r,fillRule:"evenodd"})})})}),pm=({size:e=20,color:r="var(--Text-Primary, #ffffff)",className:i})=>c.jsx(J,{$size:e,className:i,children:c.jsx("svg",{width:e,height:e,viewBox:"0 0 20 20",fill:"none",preserveAspectRatio:"none",style:{display:"block"},children:c.jsxs("g",{children:[c.jsx("path",{d:Hi.lib1,fill:r}),c.jsx("path",{d:Hi.lib2,fill:r}),c.jsx("path",{d:Hi.lib3,fill:r}),c.jsx("path",{clipRule:"evenodd",d:Hi.lib4,fill:r,fillRule:"evenodd"})]})})}),Gi=({name:e,...r})=>{switch(e){case"vive":return c.jsx(dc,{...r});case"gallery":return c.jsx(Zp,{...r});case"explore":return c.jsx(Kp,{...r});case"settings":return c.jsx(Gp,{...r});case"glasses":return c.jsx(Yp,{...r});case"share":return c.jsx(o9,{...r});case"download":return c.jsx(s9,{...r});case"delete":return c.jsx(a9,{...r});case"delete-outline":return c.jsx(l9,{...r});case"vive-logo":return c.jsx(Qp,{...r});case"hand-point":return c.jsx(u9,{...r});case"headset":return c.jsx(c9,{...r});case"update":return c.jsx(d9,{...r});case"ai":return c.jsx(b9,{...r});case"memory":return c.jsx(T9,{...r});case"wifi":return c.jsx(E9,{...r});case"arrow-right":return c.jsx(R9,{...r});case"open":return c.jsx(Xp,{...r});case"account":return c.jsx(M9,{...r});case"cloud-upload":return c.jsx(A9,{...r});case"language":return c.jsx(B9,{...r});case"information":return c.jsx($9,{...r});case"arrow-left":return c.jsx(fc,{...r});case"reset":return c.jsx(L9,{...r});case"power-off":return c.jsx(P9,{...r});case"round-check":return c.jsx(D9,{...r});case"security":return c.jsx(V9,{...r});case"charging":return c.jsx(I9,{...r});case"error":return c.jsx(F9,{...r});case"close":return c.jsx(N9,{...r});case"home":return c.jsx(Jp,{...r});case"more":return c.jsx(O9,{...r});case"info":return c.jsx(qp,{...r});case"object":return c.jsx(pc,{...r});case"emoji":return c.jsx(hc,{...r});case"pause":return c.jsx(_9,{...r});case"play":return c.jsx(H9,{...r});case"stop":return c.jsx(U9,{...r});case"record":return c.jsx(W9,{...r});case"menu":return c.jsx(k9,{...r});case"reorder":return c.jsx(j9,{...r});case"convert":return c.jsx(f9,{...r});case"switch":return c.jsx(p9,{...r});case"switch-dual":return c.jsx(h9,{...r});case"back":return c.jsx(m9,{...r});case"upload":return c.jsx(g9,{...r});case"retry":return c.jsx(y9,{...r});case"loading":return c.jsx(v9,{...r});case"filter-with-search":return c.jsx(x9,{...r});case"font":return c.jsx(C9,{...r});case"zoom":return c.jsx(w9,{...r});case"create-solid":return c.jsx(S9,{...r});case"arrow-down":return c.jsx(Z9,{...r});case"arrow-up":return c.jsx(K9,{...r});case"plus":return c.jsx(G9,{...r});case"minimize":return c.jsx(Y9,{...r});case"disabled":return c.jsx(Q9,{...r});case"round-back":return c.jsx(X9,{...r});case"round-plus":return c.jsx(q9,{...r});case"round-minus":return c.jsx(J9,{...r});case"check":return c.jsx(em,{...r});case"round-check-outline":return c.jsx(tm,{...r});case"clear-all":return c.jsx(nm,{...r});case"close-round":return c.jsx(rm,{...r});case"filter":return c.jsx(im,{...r});case"sort":return c.jsx(om,{...r});case"favorite-disable":return c.jsx(sm,{...r});case"favorite-enable":return c.jsx(am,{...r});case"rating-disable":return c.jsx(lm,{...r});case"rating-enable":return c.jsx(um,{...r});case"search":return c.jsx(cm,{...r});case"phone-answer":return c.jsx(dm,{...r});case"phone":return c.jsx(fm,{...r});case"library":return c.jsx(pm,{...r});default:return c.jsx(dc,{...r})}},Tu={p3228d072:"M20 23C21.6569 23 23 21.6569 23 20C23 18.3431 21.6569 17 20 17C18.3431 17 17 18.3431 17 20C17 21.6569 18.3431 23 20 23Z",p51c7600:"M23 9C23 10.6569 21.6569 12 20 12C18.3431 12 17 10.6569 17 9C17 7.34315 18.3431 6 20 6C21.6569 6 23 7.34315 23 9Z",p8ea7e00:"M20 34C21.6569 34 23 32.6569 23 31C23 29.3431 21.6569 28 20 28C18.3431 28 17 29.3431 17 31C17 32.6569 18.3431 34 20 34Z"};function hm(){return c.jsx("div",{className:"relative size-full","data-name":"Icons/ icon_more",children:c.jsx("svg",{className:"block size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 40 40",children:c.jsx("g",{id:"Icons/ icon_more",children:c.jsxs("g",{id:"Icon",children:[c.jsx("path",{d:Tu.p51c7600,fill:"var(--fill-0, white)"}),c.jsx("path",{d:Tu.p3228d072,fill:"var(--fill-0, white)"}),c.jsx("path",{d:Tu.p8ea7e00,fill:"var(--fill-0, white)"})]})})})})}const Fi={checkSquare:"M17.1177 5.3502C17.6146 5.8294 17.629 6.62072 17.1498 7.11767L9.43552 15.1177C9.19993 15.362 8.87512 15.5 8.53572 15.5C8.19631 15.5 7.8715 15.362 7.63591 15.1177L3.3502 10.6732C2.871 10.1763 2.88538 9.38495 3.38233 8.90575C3.87928 8.42655 4.67061 8.44094 5.14981 8.93789L8.53572 12.4492L15.3502 5.38233C15.8294 4.88538 16.6207 4.871 17.1177 5.3502Z",checkRounded:"M15.6836 6.30017C16.0949 6.71091 16.1068 7.38919 15.7102 7.81515L9.32595 14.6723C9.13098 14.8817 8.86217 15 8.58128 15C8.3004 15 8.03159 14.8817 7.83661 14.6723L4.28982 10.8628C3.89324 10.4368 3.90514 9.75853 4.31641 9.34779C4.72768 8.93704 5.38257 8.94938 5.77915 9.37533L8.58128 12.385L14.2208 6.32771C14.6174 5.90176 15.2723 5.88942 15.6836 6.30017Z",minimizeBold:"M3 10C3 9.17157 3.67157 8.5 4.5 8.5H15.5C16.3284 8.5 17 9.17157 17 10C17 10.8284 16.3284 11.5 15.5 11.5H4.5C3.67157 11.5 3 10.8284 3 10Z",bgSquare:"M0 3C0 1.34315 1.34315 0 3 0H17C18.6569 0 20 1.34315 20 3V17C20 18.6569 18.6569 20 17 20H3C1.34315 20 0 18.6569 0 17V3Z",bgRounded:"M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z"},mm=({path:e,viewBox:r,width:i,height:s,color:l})=>c.jsx("svg",{width:i,height:s,viewBox:r,fill:"none",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",style:{display:"block"},children:c.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:e,fill:l})}),gm=({bgPath:e,checkPath:r,viewBox:i,width:s,height:l,bgColor:d,checkColor:p})=>c.jsx("svg",{width:s,height:l,viewBox:i,fill:"none",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",style:{display:"block"},children:c.jsxs("g",{children:[c.jsx("path",{d:e,fill:d}),c.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:r,fill:p,id:"check bold"})]})}),ym=S.div`
  display: flex;
  align-items: center;
  gap: 16px; /* Gap between checkbox and label */
  cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
  user-select: none;
`,vm=S.div`
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
  ${e=>e.$disabled&&!e.$checked&&!e.$indeterminate&&Y`
      background: var(--Common-Control-Base-disabled, rgba(110, 124, 142, 0.30));
      border: 2px solid transparent; /* Keep border to maintain size */
    `}

  /* 2. Error Unchecked */
  ${e=>e.$error&&!e.$disabled&&!e.$checked&&!e.$indeterminate&&Y`
      background: var(--Common-Control-Base-normal, #364356);
      border: 2px solid var(--Feedback-Red, #F53232);
    `}

  /* 3. Checked / Indeterminate (Active) */
  ${e=>(e.$checked||e.$indeterminate)&&Y`
      background: var(--Common-Control-Active, #00B3E3);
      border: 2px solid transparent; /* Keep border to maintain size */
      
      /* If fully checked (not indeterminate), we use the full SVG so remove bg/border styles visually */
      ${e.$checked&&!e.$indeterminate&&Y`
        background: transparent;
        border: none;
        /* Re-adjust size to full 20px if border is gone? 
           ControlWrapper size is set by width/height props. 
           If we remove border, content box is full size. 
           This is what we want for full SVG. */
      `}
    `}

  /* 4. Checked/Indeterminate Disabled */
  ${e=>(e.$checked||e.$indeterminate)&&e.$disabled&&Y`
      background: var(--Common-Control-Base-disabled, rgba(110, 124, 142, 0.30));
      border: 2px solid transparent; /* Keep border to maintain size */

      /* If fully checked, remove CSS bg/border for SVG */
      ${e.$checked&&!e.$indeterminate&&Y`
        background: transparent;
        border: none;
      `}
    `}
  
  /* Hover Effect (Removed as per request) */

  /* Pressed (Active) State - Removed as per request */

  /* Force Pressed / Hover for Demo - Removed */
`,xm=S.span`
  color: ${e=>e.$disabled?"var(--Button-content-disabled, rgba(182, 195, 214, 0.30))":"var(--Text-secondary, #D5E2F2)"};
  font-size: 14px;
  font-family: Roboto, sans-serif;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.2px;
  word-wrap: break-word;
`,O2=({checked:e=!1,indeterminate:r=!1,disabled:i=!1,error:s=!1,shape:l="square",size:d=20,label:p,onChange:h,className:m,forcePressed:v,forceHover:y})=>{const x=b=>{i||h&&h(!e)},C=d/20;return c.jsxs(ym,{$disabled:i,className:m,onClick:x,onMouseDown:b=>b.preventDefault(),children:[c.jsx(vm,{$checked:e,$indeterminate:r,$disabled:i,$error:s,$shape:l,$size:d,$forcePressed:v,$forceHover:y,children:r?c.jsx(mm,{path:Fi.minimizeBold,viewBox:"0 0 20 20",width:`${20*C}px`,height:`${20*C}px`,color:i?"var(--Common-Control-Content-disabled, rgba(182, 195, 214, 0.30))":"var(--Common-Control-Content-normal, #D5E2F2)"}):e?c.jsx(gm,{bgPath:l==="rounded"?Fi.bgRounded:Fi.bgSquare,checkPath:l==="rounded"?Fi.checkRounded:Fi.checkSquare,viewBox:"0 0 20 20",width:`${20*C}px`,height:`${20*C}px`,bgColor:i?"var(--Common-Control-Base-disabled, rgba(110, 124, 142, 0.30))":"var(--Common-Control-Active, #00B3E3)",checkColor:i?"var(--Common-Control-Content-disabled, rgba(182, 195, 214, 0.30))":"var(--Common-Control-Content-normal, #D5E2F2)"}):null}),p&&c.jsx(xm,{$disabled:i,children:p})]})};S.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  width: 100%;
`;S.div`
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
`;S.div`
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
`;S.div`
  display: contents;
  
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    width: 100%;
  }
`;S.div`
  color: var(--Text-Assist, #B6C3D6);
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.2px;
`;S.div`
  color: var(--Text-Assist, #B6C3D6);
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.2px;
`;const Cm=da`
  0% { opacity: 1; }
  69% { opacity: 1; }      /* 0.9s / 1.3s */
  77% { opacity: 0; }      /* (0.9 + 0.1)s / 1.3s */
  92% { opacity: 0; }      /* (0.9 + 0.1 + 0.2)s / 1.3s */
  100% { opacity: 1; }     /* (0.9 + 0.1 + 0.2 + 0.1)s / 1.3s */
`,wm=da`
  from { opacity: 0; }
  to { opacity: 1; }
`,Sm=da`
  from { opacity: 1; }
  to { opacity: 0; }
`,km=S.div`
  display: inline-flex;
  flex-direction: column;
  gap: 8px;
  width: ${e=>e.$fullWidth?"100%":"auto"};
`,jm=S.div`
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
  ${e=>e.$pressed&&!e.$disabled&&!e.$active&&Y`
      background: var(--Common-Control-Base-pressed, #2A3649);
      outline-color: transparent; /* Ensure outline disappears on press if previously error/active but now pressed (though logic separates them) */
    `}
  
  /* Error State - pressed state overrides error outline visual if pressed has higher specificity or logic */
  /* Re-ordering: Pressed should probably override Error outline if you want "Error -> Pressed -> Error outline disappears" */
  
  /* Let's adjust the logic slightly. */

  /* Default */

  /* Disabled */
  
  /* Error */
  ${e=>e.$error&&!e.$disabled&&!e.$pressed&&Y`
      outline-color: var(--Components-Common-Control-content-error, #F53232);
    `}

  /* Active/Focus State */
  ${e=>e.$active&&!e.$disabled&&!e.$error&&Y`
      outline-color: var(--Components-Common-Control-content-active-normal, #00A0CB);
    `}

  /* Pressed State */
  ${e=>e.$pressed&&!e.$disabled&&!e.$active&&Y`
      background: var(--Common-Control-Base-pressed, #2A3649);
      /* Implicitly outline color remains transparent from default */
    `}

  &:active:not(:focus-within) {
    ${e=>!e.$disabled&&!e.$active&&Y`
        background: var(--Common-Control-Base-pressed, #2A3649);
      `}
  }

  /* Hover State - Optional, not strictly in demo but good for UX */
  /*
  &:hover {
     ...
  }
  */
`,bm=S.input`
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
`,Tm=S.button`
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
  animation: ${e=>e.$isExiting?Sm:wm} 0.15s ease-in-out forwards;
  
  &:hover {
    opacity: 0.8;
  }
`,Em=()=>c.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("g",{id:"Icons/ icon_close_round",children:c.jsxs("g",{id:"Icon",children:[c.jsx("path",{d:"M6.21967 6.21967C6.51256 5.92678 6.98744 5.92678 7.28033 6.21967L10.1088 9.0481L12.9372 6.21967C13.2301 5.92678 13.705 5.92678 13.9978 6.21967C14.2907 6.51256 14.2907 6.98744 13.9978 7.28033L11.1694 10.1088L13.9978 12.9372C14.2907 13.2301 14.2907 13.705 13.9978 13.9978C13.705 14.2907 13.2301 14.2907 12.9372 13.9978L10.1088 11.1694L7.28033 13.9978C6.98744 14.2907 6.51256 14.2907 6.21967 13.9978C5.92678 13.705 5.92678 13.2301 6.21967 12.9372L9.0481 10.1088L6.21967 7.28033C5.92678 6.98744 5.92678 6.51256 6.21967 6.21967Z",fill:"var(--Common-Control-Content-normal, #D5E2F2)"}),c.jsx("path",{clipRule:"evenodd",d:"M1.5 10C1.5 14.6944 5.30558 18.5 10 18.5C14.6944 18.5 18.5 14.6944 18.5 10C18.5 5.30558 14.6944 1.5 10 1.5C5.30558 1.5 1.5 5.30558 1.5 10ZM17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z",fill:"var(--Common-Control-Content-normal, #D5E2F2)",fillRule:"evenodd"})]})})}),Lm=S.span`
  color: var(--Text-error, #F53232);
  font-size: 14px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.22px;
  padding-left: 0; /* Aligned with container */
`,Pm=S.div`
  color: var(--Text-Secondary, #D5E2F2);
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.2px;
`,Rm=S.div`
  color: var(--Text-Assist, #B6C3D6);
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.2px;
`,Mm=S.div`
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
  animation: ${e=>e.$visible?Y`${Cm} 1.3s infinite ease-out`:"none"};
  display: ${e=>e.$visible?"block":"none"};
  
  /* Ensure it is above input text if needed, but usually text is fine */
  z-index: 1;
`,Am=(e,r)=>{if(typeof document>"u")return 0;const s=document.createElement("canvas").getContext("2d");return s?(s.font=r,s.measureText(e).width+e.length*.2):0},Bm=Vn.forwardRef(({value:e,onChange:r,onClear:i,placeholder:s="Placeholder",disabled:l=!1,error:d=!1,shape:p="default",title:h,supportText:m,fullWidth:v=!1,forceFocus:y=!1,forcePressed:x=!1,className:C,...b},j)=>{const[L,P]=_.useState(!1),[D,A]=_.useState(!1),[F,N]=_.useState(0),W=_.useRef(null),q=ee=>{W.current=ee,typeof j=="function"?j(ee):j&&(j.current=ee)},V=()=>{const ee=W.current;if(!ee)return;const le=ee.selectionStart||0,ve=ee.value.substring(0,le),Ce=Am(ve,"400 14px Roboto"),Se=ee.scrollLeft,Te=le===0?-2:0;N(16+Ce+Te-Se)};_.useEffect(()=>{(L||y)&&V()},[e,L,y]);const B=ee=>{var le;P(!0),(le=b.onFocus)==null||le.call(b,ee),requestAnimationFrame(V)},Q=ee=>{var le;P(!1),(le=b.onBlur)==null||le.call(b,ee)},G=()=>A(!0),ae=()=>A(!1),he=()=>A(!1),ue=ee=>{r(ee.target.value)},we=()=>{V()},Le=()=>{V()},ke=()=>{requestAnimationFrame(V)},me=()=>{V()},[H,X]=_.useState(!1),[Z,E]=_.useState(!1),I=!l&&(L||y)&&e.length>0;_.useEffect(()=>{if(I)X(!0),E(!1);else if(H){E(!0);const ee=setTimeout(()=>{X(!1),E(!1)},150);return()=>clearTimeout(ee)}},[I]);const ce=ee=>{ee.preventDefault(),ee.stopPropagation(),r(""),i==null||i()};return c.jsxs(km,{$fullWidth:v,className:C,children:[h&&c.jsx(Pm,{children:h}),c.jsxs(jm,{onMouseDown:G,onMouseUp:ae,onMouseLeave:he,$disabled:l,$error:!!d&&!L,$active:(L||y)&&!D,$pressed:x||D,$shape:p,style:{position:"relative"},children:[c.jsx(Mm,{$visible:!l&&(L||y),style:{left:`${F}px`}}),c.jsx(bm,{ref:q,value:e,onChange:ue,onFocus:B,onBlur:Q,onSelect:we,onScroll:Le,onKeyDown:ke,onKeyUp:me,placeholder:s,disabled:l,$disabled:l,...b}),H&&c.jsx(Tm,{onMouseDown:ce,type:"button",tabIndex:-1,$isExiting:Z,style:{pointerEvents:Z?"none":"auto"},children:c.jsx(Em,{})})]}),d&&typeof d=="string"&&!L?c.jsx(Lm,{children:d}):m&&c.jsx(Rm,{children:m})]})});Bm.displayName="InputField";S.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  width: 100%;
`;S.div`
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
`;S.div`
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
`;S.div`
  display: contents; /* Default for desktop: let children participate in parent grid */
  
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    width: 100%;
  }
`;S.div`
  color: var(--Text-Assist, #B6C3D6);
  font-family: Roboto, sans-serif;
  font-size: var(--font-subheader-2-size, 16px);
  font-weight: var(--font-subheader-2-weight, 500);
  line-height: var(--font-subheader-2-line-height, 22px);
  letter-spacing: var(--font-subheader-2-letter-spacing, 0.2px);
`;S.div`
  color: var(--Text-Assist, #B6C3D6);
  font-family: Roboto, sans-serif;
  font-size: var(--font-body-2-size, 14px);
  font-weight: var(--font-body-2-weight, 400);
  line-height: var(--font-body-2-line-height, 20px);
  letter-spacing: var(--font-body-2-letter-spacing, 0.2px);
  padding-top: 10px;
`;S.div`
  width: 2px;
  height: 24px;
  background-color: #00A0CB;
  margin-left: 16px;
`;const $m=da`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`,Dm=S.div`
  width: 24px;
  height: 24px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`,Vm=S.div`
  width: 19.2px;
  height: 19.2px;
  position: absolute;
  border-radius: 50%;
  border: 2.4px solid var(--Color-Neutral-70, #364356);
`,Im=S.div`
  width: 19.2px;
  height: 19.2px;
  position: absolute;
  border-radius: 50%;
  border: 2.4px solid transparent;
  border-top-color: #BCCADC;
  border-right-color: #6E7C8E;
  animation: ${$m} 1s linear infinite;
`,Fm=(e,r)=>{const i=r==="pressed",s=r==="disabled",l=r==="loading",d={filled:Y`
      background: var(--Button-primary-base-pressed, #0589C9);
      color: var(--Button-primary-content-pressed, rgba(255, 255, 255, 0.80));
    `,"filled-secondary":Y`
      background: var(--Button-secondary-base-pressed, rgba(110, 124, 142, 0.25));
      color: var(--Button-secondary-content-pressed, #6E7C8E);
    `,outlined:Y`
      background: var(--Button-secondary-base-pressed, rgba(110, 124, 142, 0.25));
      border-color: var(--Button-secondary-content-pressed, #6E7C8E);
      color: var(--Button-secondary-content-pressed, #6E7C8E);
    `,text:Y`
      background: var(--Button-secondary-base-pressed, rgba(110, 124, 142, 0.25));
      color: var(--Button-secondary-content-pressed, #6E7C8E);
    `,hyperlink:Y`
      color: var(--Text-Hyperlink-pressed, rgba(0, 179, 227, 0.60));
    `,"hyperlink-white":Y`
      color: var(--Button-secondary-content-pressed, #6E7C8E);
    `},p=!s&&!l?Y`
    &:active {
      ${d[e]}
    }
  `:Y``;switch(e){case"filled":return Y`
        background: ${s||l?"var(--Button-base-disabled, rgba(110, 124, 142, 0.10))":i?"var(--Button-primary-base-pressed, #0589C9)":"var(--Button-primary-base-normal, #00B3E3)"};
        
        color: ${s?"var(--Button-content-disabled, rgba(182, 195, 214, 0.30))":i?"var(--Button-primary-content-pressed, rgba(255, 255, 255, 0.80))":"var(--Button-primary-content-normal, white)"};
          
        ${p}
      `;case"filled-secondary":return Y`
        background: ${s||l?"var(--Button-base-disabled, rgba(110, 124, 142, 0.10))":i?"var(--Button-secondary-base-pressed, rgba(110, 124, 142, 0.25))":"var(--Surface-Backgronud--02, #2A3649)"};
          
        color: ${s?"var(--Button-content-disabled, rgba(182, 195, 214, 0.30))":i?"var(--Button-secondary-content-pressed, #6E7C8E)":"var(--Button-secondary-content-normal, white)"};
          
        ${p}
      `;case"outlined":return Y`
        background: ${i?"var(--Button-secondary-base-pressed, rgba(110, 124, 142, 0.25))":l?"var(--Button-secondary-base-normal, rgba(255, 255, 255, 0.15))":"transparent"};
          
        border: 1.5px solid ${s?"var(--Button-content-disabled, rgba(182, 195, 214, 0.30))":i?"var(--Button-secondary-content-pressed, #6E7C8E)":"var(--Button-secondary-content-normal, white)"};
          
        color: ${s?"var(--Button-content-disabled, rgba(182, 195, 214, 0.30))":i?"var(--Button-secondary-content-pressed, #6E7C8E)":"var(--Button-secondary-content-normal, white)"};
          
        ${p}
      `;case"text":return Y`
        background: ${s||l?"var(--Button-base-disabled, rgba(110, 124, 142, 0.10))":i?"var(--Button-secondary-base-pressed, rgba(110, 124, 142, 0.25))":"transparent"};
          
        color: ${s?"var(--Button-content-disabled, rgba(182, 195, 214, 0.30))":i?"var(--Button-secondary-content-pressed, #6E7C8E)":"var(--Button-secondary-content-normal, white)"};
          
        ${p}
      `;case"hyperlink":return Y`
        background: transparent;
        text-decoration: underline;
        padding: 0;
        min-width: auto;
        height: auto;
        
        color: ${s?"var(--Button-content-disabled, rgba(182, 195, 214, 0.30))":i?"var(--Text-Hyperlink-pressed, rgba(0, 179, 227, 0.60))":"var(--Text-Hyperlink-normal, #00B3E3)"};
          
        &:visited {
           color: var(--Text-Hyperlink-visited, #0179FB);
        }
        
        ${p}
      `;case"hyperlink-white":return Y`
        background: transparent;
        text-decoration: underline;
        padding: 0;
        min-width: auto;
        height: auto;
        
        color: ${s?"var(--Button-content-disabled, rgba(182, 195, 214, 0.30))":i?"var(--Button-secondary-content-pressed, #6E7C8E)":"var(--Button-secondary-content-normal, white)"};
          
        &:visited {
           color: var(--Button-content-disabled, rgba(182, 195, 214, 0.30));
        }
        
        ${p}
      `}},Nm=S.button`
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
  
  ${e=>e.$size==="large"&&!e.$variant.startsWith("hyperlink")?Y`
    /* Large buttons: 328px default, 100% on mobile */
    width: 328px;
    
    @media (max-width: 768px) {
      width: 100%;
    }
  `:Y`
    /* Small buttons and hyperlinks: Hug content implicitly */
  `}
  
  /* Size */
  ${e=>e.$variant.startsWith("hyperlink")?Y`
    /* Hyperlink Sizes based on snippet */
    font-size: ${e.$size==="large"?"16px":"14px"};
    line-height: ${e.$size==="large"?"22px":"20px"};
    letter-spacing: 0.2px;
    font-weight: 500; /* Default weight */
  `:e.$size==="large"?Y`
    height: 48px;
    padding: 6px 20px;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.4px;
  `:Y`
    height: 34px;
    padding: 6px 20px;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.2px;
  `}
  
  font-family: Roboto, sans-serif;
  font-weight: 500;
  
  /* Variant & State Styles */
  ${e=>Fm(e.$variant,e.$state)}
  
  /* Hyperlink Visited Override */
  ${e=>e.$variant==="hyperlink"&&e.$visited&&Y`
    color: var(--Text-Hyperlink-visited, #0179FB);
  `}
  ${e=>e.$variant==="hyperlink-white"&&e.$visited&&Y`
    color: var(--Button-content-disabled, rgba(182, 195, 214, 0.30));
  `}

  /* Specific overrides from design code */
  ${e=>e.$state==="loading"&&e.$variant==="filled"&&Y`
    background: var(--Button-primary-base-normal, #00B3E3);
  `}
  ${e=>e.$state==="loading"&&e.$variant==="text"&&Y`
    background: rgba(255, 255, 255, 0.15);
  `}
`,zm=S.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  flex-shrink: 1;
`,Bn=({variant:e="filled",size:r="small",state:i,loading:s=!1,disabled:l=!1,visited:d=!1,children:p,onClick:h,className:m,...v})=>{let y="normal";s?y="loading":l?y="disabled":i&&(y=i);const x=Vn.Children.map(p,C=>typeof C=="string"||typeof C=="number"?c.jsx(zm,{children:C}):C);return c.jsx(Nm,{$variant:e,$size:r,$state:y,$visited:d,onClick:!l&&!s?h:void 0,className:m,disabled:l||s,...v,children:s?c.jsxs(Dm,{children:[c.jsx(Vm,{}),c.jsx(Im,{})]}):x})};S.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  width: 100%;
  gap: 48px;
  padding: 24px 0;
`;S.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;S.h3`
  color: var(--Text-Primary, #FFFFFF);
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 16px;
`;S.div`
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
`;S.div`
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
`;S.div`
  display: contents;
  
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    width: 100%;
    justify-items: start;
  }
`;S.div`
  color: var(--Text-Assist, #B6C3D6);
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 500;
`;S.div`
  color: var(--Text-Assist, #B6C3D6);
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  padding-top: 8px;
`;const Om=S.div`
  display: grid;
  grid-template-columns: 120px 1fr 1fr 1fr;
  gap: 40px;
  align-items: center;
  justify-items: start;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
    & > :first-child { display: none; }
  }
`;S(Om)`
  margin-bottom: 32px;
  align-items: center;
`;S.div`
  color: var(--Text-Assist, #B6C3D6);
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 500;
`;S.div`
  color: var(--Text-Assist, #B6C3D6);
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 400;
  white-space: nowrap;
`;S.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;S.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;S.div`
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
`;S.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${e=>e.$size==="large"?"320px":"110px"}, 1fr));
  gap: 32px 24px;
  width: 100%;
  justify-items: center;

  @media (max-width: 768px) {
    gap: 24px 16px;
    grid-template-columns: repeat(auto-fit, minmax(${e=>e.$size==="large"?"100%":"140px"}, 1fr));
  }
`;S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%; /* Ensure it takes full width of grid cell */
`;S.div`
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.22px;
  color: var(--Text-Assist, #B6C3D6);
  text-align: center;
  margin-top: 8px;
`;S.div`
  color: var(--Text-Secondary, #d5e2f2);
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  cursor: pointer;
  font-family: Roboto, sans-serif;
  user-select: none;
`;S.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 48px 24px;
  background: var(--Colors-Surface-Backgronud--01, #131b26);
  border-radius: 16px;
  width: 100%;
`;S.div`
  display: grid;
  grid-template-columns: auto repeat(6, 1fr);
  gap: 24px 40px;
  align-items: center;
  width: 100%;
`;S.div`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.2px;
  color: var(--Text-Secondary, #D5E2F2);
  text-align: left;
  min-width: 80px;
`;S.div`
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.22px;
  color: var(--Text-Assist, #B6C3D6);
  text-align: center;
`;S.div`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.2px;
  color: var(--Text-Primary, #ffffff);
  text-align: center;
  grid-column: span 2;
`;S.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;S.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;S.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  margin-bottom: 8px;
`;S.div`
  color: var(--Text-Secondary, #d5e2f2);
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  cursor: pointer;
  font-family: Roboto, sans-serif;
`;S.div`
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
`;S.div`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.2px;
  color: var(--Text-Secondary, #d5e2f2);
  margin-top: 16px;
`;S.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-radius: 16px;
  padding: 24px;
  width: 100%;
`;S.div`
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.22px;
  color: var(--Text-Assist, #B6C3D6);
  text-align: center;
  margin-top: 8px;
`;S.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 32px 24px;
  width: 100%;
  justify-items: center;
`;S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;const _m=S.button`
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
  
  ${({$variant:e,$disabled:r})=>{if(r)return`
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
`,Hm=S.div`
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
`,Rn=({variant:e="outlined",showLabel:r=!1,label:i="Home",icon:s=c.jsx(Jp,{}),onClick:l,disabled:d=!1,className:p})=>c.jsxs(_m,{$variant:e,$showLabel:r,$disabled:d,onClick:l,disabled:d,className:p,children:[c.jsx(Hm,{children:s}),r&&c.jsx("span",{children:i})]});S.div`
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
  
  ${({$variant:e,$state:r})=>{if(r==="disabled")return`
        background: ${e==="outlined"?"transparent":"var(--Button-base-disabled, rgba(110, 124, 142, 0.10))"};
        color: var(--Button-content-disabled, rgba(182, 195, 214, 0.30));
        
        svg {
          color: var(--Button-content-disabled, rgba(182, 195, 214, 0.30));
        }
      `;if(r==="pressed")switch(e){case"outlined":return`
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
`;S.button`
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
  
  ${({$variant:e,$disabled:r})=>{if(r)return`
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
`;S.div`
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
`;S.div`
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
  
  ${({$variant:e,$state:r})=>{if(r==="disabled")return`
        background: ${e==="outlined"?"transparent":"var(--Button-base-disabled, rgba(110, 124, 142, 0.10))"};
        color: var(--Button-content-disabled, rgba(182, 195, 214, 0.30));
        
        svg {
          color: var(--Button-content-disabled, rgba(182, 195, 214, 0.30));
        }
      `;if(r==="pressed")switch(e){case"outlined":return`
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
`;S.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding: 48px 24px;
  background: var(--Colors-Surface-Backgronud--01, #131b26);
  border-radius: 16px;
  width: 100%;
`;S.div`
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0.2px;
  color: var(--Text-Primary, #ffffff);
  margin-bottom: -16px;
`;S.button`
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
  
  ${({$variant:e,$disabled:r,$showLabel:i})=>{if(r)return`
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
          background: ${i?"var(--Common-Control-Base-normal, #364356)":"var(--Button-secondary-base-normal, rgba(255, 255, 255, 0.15))"};
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
`;S.div`
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
`;S.div`
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
  
  ${({$variant:e,$showLabel:r,$state:i})=>{if(i==="disabled")return`
        background: var(--Button-base-disabled, rgba(110, 124, 142, 0.10));
        color: var(--Button-content-disabled, rgba(182, 195, 214, 0.30));
        
        svg {
          color: var(--Button-content-disabled, rgba(182, 195, 214, 0.30));
        }
      `;if(i==="pressed")return`
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
          background: ${r?"var(--Common-Control-Base-normal, #364356)":"var(--Button-secondary-base-normal, rgba(255, 255, 255, 0.15))"};
          color: var(--Button-secondary-content-normal, white);
          
          svg {
            color: var(--Button-secondary-content-normal, white);
          }
        `}}}
`;S.button`
  width: 80px;
  height: 80px;
  border-radius: 9999px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  transition: all 0.2s ease;
  
  ${({$type:e,$disabled:r})=>r?`
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
`;S.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;S.div`
  width: 80px;
  height: 80px;
  border-radius: 9999px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  
  ${({$type:e,$state:r})=>r==="disabled"?`
        background: var(--Common-Control-Base-disabled, rgba(110, 124, 142, 0.30));
        
        svg {
          color: var(--Common-Control-Content-disabled, rgba(182, 195, 214, 0.30));
        }
      `:r==="pressed"?e==="record"?`
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
`;const Gc=_.createContext({});function Yc(e){const r=_.useRef(null);return r.current===null&&(r.current=e()),r.current}const Um=typeof window<"u",Qc=Um?_.useLayoutEffect:_.useEffect,pa=_.createContext(null);function Xc(e,r){e.indexOf(r)===-1&&e.push(r)}function Gs(e,r){const i=e.indexOf(r);i>-1&&e.splice(i,1)}const Jt=(e,r,i)=>i>r?r:i<e?e:i;let ha=()=>{};const In={},eh=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),th=e=>typeof e=="object"&&e!==null,nh=e=>/^0[^.\s]+$/u.test(e);function rh(e){let r;return()=>(r===void 0&&(r=e()),r)}const Mt=e=>e,so=(...e)=>e.reduce((r,i)=>s=>i(r(s))),to=(e,r,i)=>{const s=r-e;return s?(i-e)/s:1};class qc{constructor(){this.subscriptions=[]}add(r){return Xc(this.subscriptions,r),()=>Gs(this.subscriptions,r)}notify(r,i,s){const l=this.subscriptions.length;if(l)if(l===1)this.subscriptions[0](r,i,s);else for(let d=0;d<l;d++){const p=this.subscriptions[d];p&&p(r,i,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const kt=e=>e*1e3,Rt=e=>e/1e3,ih=(e,r)=>r?e*(1e3/r):0,oh=(e,r,i)=>(((1-3*i+3*r)*e+(3*i-6*r))*e+3*r)*e,Wm=1e-7,Zm=12;function Km(e,r,i,s,l){let d,p,h=0;do p=r+(i-r)/2,d=oh(p,s,l)-e,d>0?i=p:r=p;while(Math.abs(d)>Wm&&++h<Zm);return p}function ao(e,r,i,s){if(e===r&&i===s)return Mt;const l=d=>Km(d,0,1,e,i);return d=>d===0||d===1?d:oh(l(d),r,s)}const sh=e=>r=>r<=.5?e(2*r)/2:(2-e(2*(1-r)))/2,ah=e=>r=>1-e(1-r),lh=ao(.33,1.53,.69,.99),Jc=ah(lh),uh=sh(Jc),ch=e=>e>=1?1:(e*=2)<1?.5*Jc(e):.5*(2-Math.pow(2,-10*(e-1))),e1=e=>1-Math.sin(Math.acos(e)),dh=ah(e1),fh=sh(e1),Gm=ao(.42,0,1,1),Ym=ao(0,0,.58,1),ph=ao(.42,0,.58,1),Qm=e=>Array.isArray(e)&&typeof e[0]!="number",hh=e=>Array.isArray(e)&&typeof e[0]=="number",Xm={linear:Mt,easeIn:Gm,easeInOut:ph,easeOut:Ym,circIn:e1,circInOut:fh,circOut:dh,backIn:Jc,backInOut:uh,backOut:lh,anticipate:ch},qm=e=>typeof e=="string",_2=e=>{if(hh(e)){ha(e.length===4);const[r,i,s,l]=e;return ao(r,i,s,l)}else if(qm(e))return Xm[e];return e},ks=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function Jm(e){let r=new Set,i=new Set,s=!1,l=!1;const d=new WeakSet;let p={delta:0,timestamp:0,isProcessing:!1};function h(v){d.has(v)&&(m.schedule(v),e()),v(p)}const m={schedule:(v,y=!1,x=!1)=>{const b=x&&s?r:i;return y&&d.add(v),b.add(v),v},cancel:v=>{i.delete(v),d.delete(v)},process:v=>{if(p=v,s){l=!0;return}s=!0;const y=r;r=i,i=y,r.forEach(h),r.clear(),s=!1,l&&(l=!1,m.process(v))}};return m}const e8=40;function mh(e,r){let i=!1,s=!0;const l={delta:0,timestamp:0,isProcessing:!1},d=()=>i=!0,p=ks.reduce((F,N)=>(F[N]=Jm(d),F),{}),{setup:h,read:m,resolveKeyframes:v,preUpdate:y,update:x,preRender:C,render:b,postRender:j}=p,L=()=>{const F=In.useManualTiming,N=F?l.timestamp:performance.now();i=!1,F||(l.delta=s?1e3/60:Math.max(Math.min(N-l.timestamp,e8),1)),l.timestamp=N,l.isProcessing=!0,h.process(l),m.process(l),v.process(l),y.process(l),x.process(l),C.process(l),b.process(l),j.process(l),l.isProcessing=!1,i&&r&&(s=!1,e(L))},P=()=>{i=!0,s=!0,l.isProcessing||e(L)};return{schedule:ks.reduce((F,N)=>{const W=p[N];return F[N]=(q,V=!1,B=!1)=>(i||P(),W.schedule(q,V,B)),F},{}),cancel:F=>{for(let N=0;N<ks.length;N++)p[ks[N]].cancel(F)},state:l,steps:p}}const{schedule:Me,cancel:Fn,state:rt,steps:Eu}=mh(typeof requestAnimationFrame<"u"?requestAnimationFrame:Mt,!0);let Is;function t8(){Is=void 0}const dt={now:()=>(Is===void 0&&dt.set(rt.isProcessing||In.useManualTiming?rt.timestamp:performance.now()),Is),set:e=>{Is=e,queueMicrotask(t8)}},gh=e=>r=>typeof r=="string"&&r.startsWith(e),yh=gh("--"),n8=gh("var(--"),t1=e=>n8(e)?r8.test(e.split("/*")[0].trim()):!1,r8=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function H2(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}const Gr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},no={...Gr,transform:e=>Jt(0,1,e)},js={...Gr,default:1},Yi=e=>Math.round(e*1e5)/1e5,n1=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function i8(e){return e==null}const o8=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,r1=(e,r)=>i=>!!(typeof i=="string"&&o8.test(i)&&i.startsWith(e)||r&&!i8(i)&&Object.prototype.hasOwnProperty.call(i,r)),vh=(e,r,i)=>s=>{if(typeof s!="string")return s;const[l,d,p,h]=s.match(n1);return{[e]:parseFloat(l),[r]:parseFloat(d),[i]:parseFloat(p),alpha:h!==void 0?parseFloat(h):1}},s8=e=>Jt(0,255,e),Lu={...Gr,transform:e=>Math.round(s8(e))},nr={test:r1("rgb","red"),parse:vh("red","green","blue"),transform:({red:e,green:r,blue:i,alpha:s=1})=>"rgba("+Lu.transform(e)+", "+Lu.transform(r)+", "+Lu.transform(i)+", "+Yi(no.transform(s))+")"};function a8(e){let r="",i="",s="",l="";return e.length>5?(r=e.substring(1,3),i=e.substring(3,5),s=e.substring(5,7),l=e.substring(7,9)):(r=e.substring(1,2),i=e.substring(2,3),s=e.substring(3,4),l=e.substring(4,5),r+=r,i+=i,s+=s,l+=l),{red:parseInt(r,16),green:parseInt(i,16),blue:parseInt(s,16),alpha:l?parseInt(l,16)/255:1}}const mc={test:r1("#"),parse:a8,transform:nr.transform},lo=e=>({test:r=>typeof r=="string"&&r.endsWith(e)&&r.split(" ").length===1,parse:parseFloat,transform:r=>`${r}${e}`}),un=lo("deg"),qt=lo("%"),ie=lo("px"),l8=lo("vh"),u8=lo("vw"),U2={...qt,parse:e=>qt.parse(e)/100,transform:e=>qt.transform(e*100)},Fr={test:r1("hsl","hue"),parse:vh("hue","saturation","lightness"),transform:({hue:e,saturation:r,lightness:i,alpha:s=1})=>"hsla("+Math.round(e)+", "+qt.transform(Yi(r))+", "+qt.transform(Yi(i))+", "+Yi(no.transform(s))+")"},We={test:e=>nr.test(e)||mc.test(e)||Fr.test(e),parse:e=>nr.test(e)?nr.parse(e):Fr.test(e)?Fr.parse(e):mc.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?nr.transform(e):Fr.transform(e),getAnimatableNone:e=>{const r=We.parse(e);return r.alpha=0,We.transform(r)}},c8=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function d8(e){var r,i;return isNaN(e)&&typeof e=="string"&&(((r=e.match(n1))==null?void 0:r.length)||0)+(((i=e.match(c8))==null?void 0:i.length)||0)>0}const xh="number",Ch="color",f8="var",p8="var(",W2="${}",h8=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Wr(e){const r=e.toString(),i=[],s={color:[],number:[],var:[]},l=[];let d=0;const h=r.replace(h8,m=>(We.test(m)?(s.color.push(d),l.push(Ch),i.push(We.parse(m))):m.startsWith(p8)?(s.var.push(d),l.push(f8),i.push(m)):(s.number.push(d),l.push(xh),i.push(parseFloat(m))),++d,W2)).split(W2);return{values:i,split:h,indexes:s,types:l}}function m8(e){return Wr(e).values}function wh({split:e,types:r}){const i=e.length;return s=>{let l="";for(let d=0;d<i;d++)if(l+=e[d],s[d]!==void 0){const p=r[d];p===xh?l+=Yi(s[d]):p===Ch?l+=We.transform(s[d]):l+=s[d]}return l}}function g8(e){return wh(Wr(e))}const y8=e=>typeof e=="number"?0:We.test(e)?We.getAnimatableNone(e):e,v8=(e,r)=>typeof e=="number"?r!=null&&r.trim().endsWith("/")?e:0:y8(e);function x8(e){const r=Wr(e);return wh(r)(r.values.map((s,l)=>v8(s,r.split[l])))}const Ut={test:d8,parse:m8,createTransformer:g8,getAnimatableNone:x8};function Pu(e,r,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(r-e)*6*i:i<1/2?r:i<2/3?e+(r-e)*(2/3-i)*6:e}function C8({hue:e,saturation:r,lightness:i,alpha:s}){e/=360,r/=100,i/=100;let l=0,d=0,p=0;if(!r)l=d=p=i;else{const h=i<.5?i*(1+r):i+r-i*r,m=2*i-h;l=Pu(m,h,e+1/3),d=Pu(m,h,e),p=Pu(m,h,e-1/3)}return{red:Math.round(l*255),green:Math.round(d*255),blue:Math.round(p*255),alpha:s}}function Ys(e,r){return i=>i>0?r:e}const Re=(e,r,i)=>e+(r-e)*i,Ru=(e,r,i)=>{const s=e*e,l=i*(r*r-s)+s;return l<0?0:Math.sqrt(l)},w8=[mc,nr,Fr],S8=e=>w8.find(r=>r.test(e));function Z2(e){const r=S8(e);if(!r)return!1;let i=r.parse(e);return r===Fr&&(i=C8(i)),i}const K2=(e,r)=>{const i=Z2(e),s=Z2(r);if(!i||!s)return Ys(e,r);const l={...i};return d=>(l.red=Ru(i.red,s.red,d),l.green=Ru(i.green,s.green,d),l.blue=Ru(i.blue,s.blue,d),l.alpha=Re(i.alpha,s.alpha,d),nr.transform(l))},gc=new Set(["none","hidden"]);function k8(e,r){return gc.has(e)?i=>i<=0?e:r:i=>i>=1?r:e}function j8(e,r){return i=>Re(e,r,i)}function i1(e){return typeof e=="number"?j8:typeof e=="string"?t1(e)?Ys:We.test(e)?K2:E8:Array.isArray(e)?Sh:typeof e=="object"?We.test(e)?K2:b8:Ys}function Sh(e,r){const i=[...e],s=i.length,l=e.map((d,p)=>i1(d)(d,r[p]));return d=>{for(let p=0;p<s;p++)i[p]=l[p](d);return i}}function b8(e,r){const i={...e,...r},s={};for(const l in i)e[l]!==void 0&&r[l]!==void 0&&(s[l]=i1(e[l])(e[l],r[l]));return l=>{for(const d in s)i[d]=s[d](l);return i}}function T8(e,r){const i=[],s={color:0,var:0,number:0};for(let l=0;l<r.values.length;l++){const d=r.types[l],p=e.indexes[d][s[d]],h=e.values[p]??0;i[l]=h,s[d]++}return i}const E8=(e,r)=>{const i=Ut.createTransformer(r),s=Wr(e),l=Wr(r);return s.indexes.var.length===l.indexes.var.length&&s.indexes.color.length===l.indexes.color.length&&s.indexes.number.length>=l.indexes.number.length?gc.has(e)&&!l.values.length||gc.has(r)&&!s.values.length?k8(e,r):so(Sh(T8(s,l),l.values),i):Ys(e,r)};function kh(e,r,i){return typeof e=="number"&&typeof r=="number"&&typeof i=="number"?Re(e,r,i):i1(e)(e,r)}const L8=e=>{const r=({timestamp:i})=>e(i);return{start:(i=!0)=>Me.update(r,i),stop:()=>Fn(r),now:()=>rt.isProcessing?rt.timestamp:dt.now()}},jh=(e,r,i=10)=>{let s="";const l=Math.max(Math.round(r/i),2);for(let d=0;d<l;d++)s+=Math.round(e(d/(l-1))*1e4)/1e4+", ";return`linear(${s.substring(0,s.length-2)})`},Qs=2e4;function o1(e){let r=0;const i=50;let s=e.next(r);for(;!s.done&&r<Qs;)r+=i,s=e.next(r);return r>=Qs?1/0:r}function P8(e,r=100,i){const s=i({...e,keyframes:[0,r]}),l=Math.min(o1(s),Qs);return{type:"keyframes",ease:d=>s.next(l*d).value/r,duration:Rt(l)}}const Oe={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function yc(e,r){return e*Math.sqrt(1-r*r)}const R8=12;function M8(e,r,i){let s=i;for(let l=1;l<R8;l++)s=s-e(s)/r(s);return s}const Mu=.001;function A8({duration:e=Oe.duration,bounce:r=Oe.bounce,velocity:i=Oe.velocity,mass:s=Oe.mass}){let l,d,p=1-r;p=Jt(Oe.minDamping,Oe.maxDamping,p),e=Jt(Oe.minDuration,Oe.maxDuration,Rt(e)),p<1?(l=v=>{const y=v*p,x=y*e,C=y-i,b=yc(v,p),j=Math.exp(-x);return Mu-C/b*j},d=v=>{const x=v*p*e,C=x*i+i,b=Math.pow(p,2)*Math.pow(v,2)*e,j=Math.exp(-x),L=yc(Math.pow(v,2),p);return(-l(v)+Mu>0?-1:1)*((C-b)*j)/L}):(l=v=>{const y=Math.exp(-v*e),x=(v-i)*e+1;return-Mu+y*x},d=v=>{const y=Math.exp(-v*e),x=(i-v)*(e*e);return y*x});const h=5/e,m=M8(l,d,h);if(e=kt(e),isNaN(m))return{stiffness:Oe.stiffness,damping:Oe.damping,duration:e};{const v=Math.pow(m,2)*s;return{stiffness:v,damping:p*2*Math.sqrt(s*v),duration:e}}}const B8=["duration","bounce"],$8=["stiffness","damping","mass"];function G2(e,r){return r.some(i=>e[i]!==void 0)}function D8(e){let r={velocity:Oe.velocity,stiffness:Oe.stiffness,damping:Oe.damping,mass:Oe.mass,isResolvedFromDuration:!1,...e};if(!G2(e,$8)&&G2(e,B8))if(r.velocity=0,e.visualDuration){const i=e.visualDuration,s=2*Math.PI/(i*1.2),l=s*s,d=2*Jt(.05,1,1-(e.bounce||0))*Math.sqrt(l);r={...r,mass:Oe.mass,stiffness:l,damping:d}}else{const i=A8({...e,velocity:0});r={...r,...i,mass:Oe.mass},r.isResolvedFromDuration=!0}return r}function Xs(e=Oe.visualDuration,r=Oe.bounce){const i=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:r}:e;let{restSpeed:s,restDelta:l}=i;const d=i.keyframes[0],p=i.keyframes[i.keyframes.length-1],h={done:!1,value:d},{stiffness:m,damping:v,mass:y,duration:x,velocity:C,isResolvedFromDuration:b}=D8({...i,velocity:-Rt(i.velocity||0)}),j=C||0,L=v/(2*Math.sqrt(m*y)),P=p-d,D=Rt(Math.sqrt(m/y)),A=Math.abs(P)<5;s||(s=A?Oe.restSpeed.granular:Oe.restSpeed.default),l||(l=A?Oe.restDelta.granular:Oe.restDelta.default);let F,N,W,q,V,B;if(L<1)W=yc(D,L),q=(j+L*D*P)/W,F=G=>{const ae=Math.exp(-L*D*G);return p-ae*(q*Math.sin(W*G)+P*Math.cos(W*G))},V=L*D*q+P*W,B=L*D*P-q*W,N=G=>Math.exp(-L*D*G)*(V*Math.sin(W*G)+B*Math.cos(W*G));else if(L===1){F=ae=>p-Math.exp(-D*ae)*(P+(j+D*P)*ae);const G=j+D*P;N=ae=>Math.exp(-D*ae)*(D*G*ae-j)}else{const G=D*Math.sqrt(L*L-1);F=we=>{const Le=Math.exp(-L*D*we),ke=Math.min(G*we,300);return p-Le*((j+L*D*P)*Math.sinh(ke)+G*P*Math.cosh(ke))/G};const ae=(j+L*D*P)/G,he=L*D*ae-P*G,ue=L*D*P-ae*G;N=we=>{const Le=Math.exp(-L*D*we),ke=Math.min(G*we,300);return Le*(he*Math.sinh(ke)+ue*Math.cosh(ke))}}const Q={calculatedDuration:b&&x||null,velocity:G=>kt(N(G)),next:G=>{if(!b&&L<1){const he=Math.exp(-L*D*G),ue=Math.sin(W*G),we=Math.cos(W*G),Le=p-he*(q*ue+P*we),ke=kt(he*(V*ue+B*we));return h.done=Math.abs(ke)<=s&&Math.abs(p-Le)<=l,h.value=h.done?p:Le,h}const ae=F(G);if(b)h.done=G>=x;else{const he=kt(N(G));h.done=Math.abs(he)<=s&&Math.abs(p-ae)<=l}return h.value=h.done?p:ae,h},toString:()=>{const G=Math.min(o1(Q),Qs),ae=jh(he=>Q.next(G*he).value,G,30);return G+"ms "+ae},toTransition:()=>{}};return Q}Xs.applyToOptions=e=>{const r=P8(e,100,Xs);return e.ease=r.ease,e.duration=kt(r.duration),e.type="keyframes",e};const V8=5;function bh(e,r,i){const s=Math.max(r-V8,0);return ih(i-e(s),r-s)}function vc({keyframes:e,velocity:r=0,power:i=.8,timeConstant:s=325,bounceDamping:l=10,bounceStiffness:d=500,modifyTarget:p,min:h,max:m,restDelta:v=.5,restSpeed:y}){const x=e[0],C={done:!1,value:x},b=B=>h!==void 0&&B<h||m!==void 0&&B>m,j=B=>h===void 0?m:m===void 0||Math.abs(h-B)<Math.abs(m-B)?h:m;let L=i*r;const P=x+L,D=p===void 0?P:p(P);D!==P&&(L=D-x);const A=B=>-L*Math.exp(-B/s),F=B=>D+A(B),N=B=>{const Q=A(B),G=F(B);C.done=Math.abs(Q)<=v,C.value=C.done?D:G};let W,q;const V=B=>{b(C.value)&&(W=B,q=Xs({keyframes:[C.value,j(C.value)],velocity:bh(F,B,C.value),damping:l,stiffness:d,restDelta:v,restSpeed:y}))};return V(0),{calculatedDuration:null,next:B=>{let Q=!1;return!q&&W===void 0&&(Q=!0,N(B),V(B)),W!==void 0&&B>=W?q.next(B-W):(!Q&&N(B),C)}}}function I8(e,r,i){const s=[],l=i||In.mix||kh,d=e.length-1;for(let p=0;p<d;p++){let h=l(e[p],e[p+1]);if(r){const m=Array.isArray(r)?r[p]||Mt:r;h=so(m,h)}s.push(h)}return s}function F8(e,r,{clamp:i=!0,ease:s,mixer:l}={}){const d=e.length;if(ha(d===r.length),d===1)return()=>r[0];if(d===2&&r[0]===r[1])return()=>r[1];const p=e[0]===e[1];e[0]>e[d-1]&&(e=[...e].reverse(),r=[...r].reverse());const h=I8(r,s,l),m=h.length,v=y=>{if(p&&y<e[0])return r[0];let x=0;if(m>1)for(;x<e.length-2&&!(y<e[x+1]);x++);const C=to(e[x],e[x+1],y);return h[x](C)};return i?y=>v(Jt(e[0],e[d-1],y)):v}function N8(e,r){const i=e[e.length-1];for(let s=1;s<=r;s++){const l=to(0,r,s);e.push(Re(i,1,l))}}function z8(e){const r=[0];return N8(r,e.length-1),r}function O8(e,r){return e.map(i=>i*r)}function _8(e,r){return e.map(()=>r||ph).splice(0,e.length-1)}function Qi({duration:e=300,keyframes:r,times:i,ease:s="easeInOut"}){const l=Qm(s)?s.map(_2):_2(s),d={done:!1,value:r[0]},p=O8(i&&i.length===r.length?i:z8(r),e),h=F8(p,r,{ease:Array.isArray(l)?l:_8(r,l)});return{calculatedDuration:e,next:m=>(d.value=h(m),d.done=m>=e,d)}}const H8=e=>e!==null;function ma(e,{repeat:r,repeatType:i="loop"},s,l=1){const d=e.filter(H8),h=l<0||r&&i!=="loop"&&r%2===1?0:d.length-1;return!h||s===void 0?d[h]:s}const U8={decay:vc,inertia:vc,tween:Qi,keyframes:Qi,spring:Xs};function Th(e){typeof e.type=="string"&&(e.type=U8[e.type])}class s1{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(r=>{this.resolve=r})}notifyFinished(){this.resolve()}then(r,i){return this.finished.then(r,i)}}const W8=e=>e/100;class qs extends s1{constructor(r){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var s,l;const{motionValue:i}=this.options;i&&i.updatedAt!==dt.now()&&this.tick(dt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(l=(s=this.options).onStop)==null||l.call(s))},this.options=r,this.initAnimation(),this.play(),r.autoplay===!1&&this.pause()}initAnimation(){const{options:r}=this;Th(r);const{type:i=Qi,repeat:s=0,repeatDelay:l=0,repeatType:d,velocity:p=0}=r;let{keyframes:h}=r;const m=i||Qi;m!==Qi&&typeof h[0]!="number"&&(this.mixKeyframes=so(W8,kh(h[0],h[1])),h=[0,100]);const v=m({...r,keyframes:h});d==="mirror"&&(this.mirroredGenerator=m({...r,keyframes:[...h].reverse(),velocity:-p})),v.calculatedDuration===null&&(v.calculatedDuration=o1(v));const{calculatedDuration:y}=v;this.calculatedDuration=y,this.resolvedDuration=y+l,this.totalDuration=this.resolvedDuration*(s+1)-l,this.generator=v}updateTime(r){const i=Math.round(r-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(r,i=!1){const{generator:s,totalDuration:l,mixKeyframes:d,mirroredGenerator:p,resolvedDuration:h,calculatedDuration:m}=this;if(this.startTime===null)return s.next(0);const{delay:v=0,keyframes:y,repeat:x,repeatType:C,repeatDelay:b,type:j,onUpdate:L,finalKeyframe:P}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,r):this.speed<0&&(this.startTime=Math.min(r-l/this.speed,this.startTime)),i?this.currentTime=r:this.updateTime(r);const D=this.currentTime-v*(this.playbackSpeed>=0?1:-1),A=this.playbackSpeed>=0?D<0:D>l;this.currentTime=Math.max(D,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=l);let F=this.currentTime,N=s;if(x){const B=Math.min(this.currentTime,l)/h;let Q=Math.floor(B),G=B%1;!G&&B>=1&&(G=1),G===1&&Q--,Q=Math.min(Q,x+1),!!(Q%2)&&(C==="reverse"?(G=1-G,b&&(G-=b/h)):C==="mirror"&&(N=p)),F=Jt(0,1,G)*h}let W;A?(this.delayState.value=y[0],W=this.delayState):W=N.next(F),d&&!A&&(W.value=d(W.value));let{done:q}=W;!A&&m!==null&&(q=this.playbackSpeed>=0?this.currentTime>=l:this.currentTime<=0);const V=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&q);return V&&j!==vc&&(W.value=ma(y,this.options,P,this.speed)),L&&L(W.value),V&&this.finish(),W}then(r,i){return this.finished.then(r,i)}get duration(){return Rt(this.calculatedDuration)}get iterationDuration(){const{delay:r=0}=this.options||{};return this.duration+Rt(r)}get time(){return Rt(this.currentTime)}set time(r){r=kt(r),this.currentTime=r,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=r:this.driver&&(this.startTime=this.driver.now()-r/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=r,this.tick(r))}getGeneratorVelocity(){const r=this.currentTime;if(r<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(r);const i=this.generator.next(r).value;return bh(s=>this.generator.next(s).value,r,i)}get speed(){return this.playbackSpeed}set speed(r){const i=this.playbackSpeed!==r;i&&this.driver&&this.updateTime(dt.now()),this.playbackSpeed=r,i&&this.driver&&(this.time=Rt(this.currentTime))}play(){var l,d;if(this.isStopped)return;const{driver:r=L8,startTime:i}=this.options;this.driver||(this.driver=r(p=>this.tick(p))),(d=(l=this.options).onPlay)==null||d.call(l);const s=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=s):this.holdTime!==null?this.startTime=s-this.holdTime:this.startTime||(this.startTime=i??s),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(dt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var r,i;this.notifyFinished(),this.teardown(),this.state="finished",(i=(r=this.options).onComplete)==null||i.call(r)}cancel(){var r,i;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(i=(r=this.options).onCancel)==null||i.call(r)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(r){return this.startTime=0,this.tick(r,!0)}attachTimeline(r){var i;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(i=this.driver)==null||i.stop(),r.observe(this)}}function Z8(e){for(let r=1;r<e.length;r++)e[r]??(e[r]=e[r-1])}const rr=e=>e*180/Math.PI,xc=e=>{const r=rr(Math.atan2(e[1],e[0]));return Cc(r)},K8={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:xc,rotateZ:xc,skewX:e=>rr(Math.atan(e[1])),skewY:e=>rr(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Cc=e=>(e=e%360,e<0&&(e+=360),e),Y2=xc,Q2=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),X2=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),G8={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Q2,scaleY:X2,scale:e=>(Q2(e)+X2(e))/2,rotateX:e=>Cc(rr(Math.atan2(e[6],e[5]))),rotateY:e=>Cc(rr(Math.atan2(-e[2],e[0]))),rotateZ:Y2,rotate:Y2,skewX:e=>rr(Math.atan(e[4])),skewY:e=>rr(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function wc(e){return e.includes("scale")?1:0}function Sc(e,r){if(!e||e==="none")return wc(r);const i=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let s,l;if(i)s=G8,l=i;else{const h=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);s=K8,l=h}if(!l)return wc(r);const d=s[r],p=l[1].split(",").map(Q8);return typeof d=="function"?d(p):p[d]}const Y8=(e,r)=>{const{transform:i="none"}=getComputedStyle(e);return Sc(i,r)};function Q8(e){return parseFloat(e.trim())}const Yr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Qr=new Set([...Yr,"pathRotation"]),q2=e=>e===Gr||e===ie,X8=new Set(["x","y","z"]),q8=Yr.filter(e=>!X8.has(e));function J8(e){const r=[];return q8.forEach(i=>{const s=e.getValue(i);s!==void 0&&(r.push([i,s.get()]),s.set(i.startsWith("scale")?1:0))}),r}const Dn={width:({x:e},{paddingLeft:r="0",paddingRight:i="0",boxSizing:s})=>{const l=e.max-e.min;return s==="border-box"?l:l-parseFloat(r)-parseFloat(i)},height:({y:e},{paddingTop:r="0",paddingBottom:i="0",boxSizing:s})=>{const l=e.max-e.min;return s==="border-box"?l:l-parseFloat(r)-parseFloat(i)},top:(e,{top:r})=>parseFloat(r),left:(e,{left:r})=>parseFloat(r),bottom:({y:e},{top:r})=>parseFloat(r)+(e.max-e.min),right:({x:e},{left:r})=>parseFloat(r)+(e.max-e.min),x:(e,{transform:r})=>Sc(r,"x"),y:(e,{transform:r})=>Sc(r,"y")};Dn.translateX=Dn.x;Dn.translateY=Dn.y;const ar=new Set;let kc=!1,jc=!1,bc=!1;function Eh(){if(jc){const e=Array.from(ar).filter(s=>s.needsMeasurement),r=new Set(e.map(s=>s.element)),i=new Map;r.forEach(s=>{const l=J8(s);l.length&&(i.set(s,l),s.render())}),e.forEach(s=>s.measureInitialState()),r.forEach(s=>{s.render();const l=i.get(s);l&&l.forEach(([d,p])=>{var h;(h=s.getValue(d))==null||h.set(p)})}),e.forEach(s=>s.measureEndState()),e.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}jc=!1,kc=!1,ar.forEach(e=>e.complete(bc)),ar.clear()}function Lh(){ar.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(jc=!0)})}function e7(){bc=!0,Lh(),Eh(),bc=!1}class a1{constructor(r,i,s,l,d,p=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...r],this.onComplete=i,this.name=s,this.motionValue=l,this.element=d,this.isAsync=p}scheduleResolve(){this.state="scheduled",this.isAsync?(ar.add(this),kc||(kc=!0,Me.read(Lh),Me.resolveKeyframes(Eh))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:r,name:i,element:s,motionValue:l}=this;if(r[0]===null){const d=l==null?void 0:l.get(),p=r[r.length-1];if(d!==void 0)r[0]=d;else if(s&&i){const h=s.readValue(i,p);h!=null&&(r[0]=h)}r[0]===void 0&&(r[0]=p),l&&d===void 0&&l.set(r[0])}Z8(r)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(r=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,r),ar.delete(this)}cancel(){this.state==="scheduled"&&(ar.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const t7=e=>e.startsWith("--");function Ph(e,r,i){t7(r)?e.style.setProperty(r,i):e.style[r]=i}const n7={};function Rh(e,r){const i=rh(e);return()=>n7[r]??i()}const r7=Rh(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Mh=Rh(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ui=([e,r,i,s])=>`cubic-bezier(${e}, ${r}, ${i}, ${s})`,J2={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ui([0,.65,.55,1]),circOut:Ui([.55,0,1,.45]),backIn:Ui([.31,.01,.66,-.59]),backOut:Ui([.33,1.53,.69,.99])};function Ah(e,r){if(e)return typeof e=="function"?Mh()?jh(e,r):"ease-out":hh(e)?Ui(e):Array.isArray(e)?e.map(i=>Ah(i,r)||J2.easeOut):J2[e]}function i7(e,r,i,{delay:s=0,duration:l=300,repeat:d=0,repeatType:p="loop",ease:h="easeOut",times:m}={},v=void 0){const y={[r]:i};m&&(y.offset=m);const x=Ah(h,l);Array.isArray(x)&&(y.easing=x);const C={delay:s,duration:l,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:d+1,direction:p==="reverse"?"alternate":"normal"};return v&&(C.pseudoElement=v),e.animate(y,C)}function Bh(e){return typeof e=="function"&&"applyToOptions"in e}function o7({type:e,...r}){return Bh(e)&&Mh()?e.applyToOptions(r):(r.duration??(r.duration=300),r.ease??(r.ease="easeOut"),r)}class $h extends s1{constructor(r){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!r)return;const{element:i,name:s,keyframes:l,pseudoElement:d,allowFlatten:p=!1,finalKeyframe:h,onComplete:m}=r;this.isPseudoElement=!!d,this.allowFlatten=p,this.options=r,ha(typeof r.type!="string");const v=o7(r);this.animation=i7(i,s,l,v,d),v.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!d){const y=ma(l,this.options,h,this.speed);this.updateMotionValue&&this.updateMotionValue(y),Ph(i,s,y),this.animation.cancel()}m==null||m(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var r,i;(i=(r=this.animation).finish)==null||i.call(r)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:r}=this;r==="idle"||r==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var i,s,l;const r=(i=this.options)==null?void 0:i.element;!this.isPseudoElement&&(r!=null&&r.isConnected)&&((l=(s=this.animation).commitStyles)==null||l.call(s))}get duration(){var i,s;const r=((s=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:s.call(i).duration)||0;return Rt(Number(r))}get iterationDuration(){const{delay:r=0}=this.options||{};return this.duration+Rt(r)}get time(){return Rt(Number(this.animation.currentTime)||0)}set time(r){const i=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=kt(r),i&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(r){r<0&&(this.finishedTime=null),this.animation.playbackRate=r}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(r){this.manualStartTime=this.animation.startTime=r}attachTimeline({timeline:r,rangeStart:i,rangeEnd:s,observe:l}){var d;return this.allowFlatten&&((d=this.animation.effect)==null||d.updateTiming({easing:"linear"})),this.animation.onfinish=null,r&&r7()?(this.animation.timeline=r,i&&(this.animation.rangeStart=i),s&&(this.animation.rangeEnd=s),Mt):l(this)}}const Dh={anticipate:ch,backInOut:uh,circInOut:fh};function s7(e){return e in Dh}function a7(e){typeof e.ease=="string"&&s7(e.ease)&&(e.ease=Dh[e.ease])}const Au=10;class l7 extends $h{constructor(r){a7(r),Th(r),super(r),r.startTime!==void 0&&r.autoplay!==!1&&(this.startTime=r.startTime),this.options=r}updateMotionValue(r){const{motionValue:i,onUpdate:s,onComplete:l,element:d,...p}=this.options;if(!i)return;if(r!==void 0){i.set(r);return}const h=new qs({...p,autoplay:!1}),m=Math.max(Au,dt.now()-this.startTime),v=Jt(0,Au,m-Au),y=h.sample(m).value,{name:x}=this.options;d&&x&&Ph(d,x,y),i.setWithVelocity(h.sample(Math.max(0,m-v)).value,y,v),h.stop()}}const e0=(e,r)=>r==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Ut.test(e)||e==="0")&&!e.startsWith("url("));function u7(e){const r=e[0];if(e.length===1)return!0;for(let i=0;i<e.length;i++)if(e[i]!==r)return!0}function c7(e,r,i,s){const l=e[0];if(l===null)return!1;if(r==="display"||r==="visibility")return!0;const d=e[e.length-1],p=e0(l,r),h=e0(d,r);return!p||!h?!1:u7(e)||(i==="spring"||Bh(i))&&s}function Tc(e){e.duration=0,e.type="keyframes"}const Vh=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),d7=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function f7(e){for(let r=0;r<e.length;r++)if(typeof e[r]=="string"&&d7.test(e[r]))return!0;return!1}const p7=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),h7=rh(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function m7(e){var x;const{motionValue:r,name:i,repeatDelay:s,repeatType:l,damping:d,type:p,keyframes:h}=e,m=(x=r==null?void 0:r.owner)==null?void 0:x.current;if(!(m instanceof HTMLElement)&&!(m instanceof SVGElement))return!1;const{onUpdate:v,transformTemplate:y}=r.owner.getProps();return h7()&&i&&(Vh.has(i)||p7.has(i)&&f7(h))&&(i!=="transform"||!y)&&!v&&!s&&l!=="mirror"&&d!==0&&p!=="inertia"}const g7=40;class y7 extends s1{constructor({autoplay:r=!0,delay:i=0,type:s="keyframes",repeat:l=0,repeatDelay:d=0,repeatType:p="loop",keyframes:h,name:m,motionValue:v,element:y,...x}){var j;super(),this.stop=()=>{var L,P;this._animation&&(this._animation.stop(),(L=this.stopTimeline)==null||L.call(this)),(P=this.keyframeResolver)==null||P.cancel()},this.createdAt=dt.now();const C={autoplay:r,delay:i,type:s,repeat:l,repeatDelay:d,repeatType:p,name:m,motionValue:v,element:y,...x},b=(y==null?void 0:y.KeyframeResolver)||a1;this.keyframeResolver=new b(h,(L,P,D)=>this.onKeyframesResolved(L,P,C,!D),m,v,y),(j=this.keyframeResolver)==null||j.scheduleResolve()}onKeyframesResolved(r,i,s,l){var D,A;this.keyframeResolver=void 0;const{name:d,type:p,velocity:h,delay:m,isHandoff:v,onUpdate:y}=s;this.resolvedAt=dt.now();let x=!0;c7(r,d,p,h)||(x=!1,(In.instantAnimations||!m)&&(y==null||y(ma(r,s,i))),r[0]=r[r.length-1],Tc(s),s.repeat=0);const b={startTime:l?this.resolvedAt?this.resolvedAt-this.createdAt>g7?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...s,keyframes:r},j=x&&!v&&m7(b),L=(A=(D=b.motionValue)==null?void 0:D.owner)==null?void 0:A.current;let P;if(j)try{P=new l7({...b,element:L})}catch{P=new qs(b)}else P=new qs(b);P.finished.then(()=>{this.notifyFinished()}).catch(Mt),this.pendingTimeline&&(this.stopTimeline=P.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=P}get finished(){return this._animation?this.animation.finished:this._finished}then(r,i){return this.finished.finally(r).then(()=>{})}get animation(){var r;return this._animation||((r=this.keyframeResolver)==null||r.resume(),e7()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(r){this.animation.time=r}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(r){this.animation.speed=r}get startTime(){return this.animation.startTime}attachTimeline(r){return this._animation?this.stopTimeline=this.animation.attachTimeline(r):this.pendingTimeline=r,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var r;this._animation&&this.animation.cancel(),(r=this.keyframeResolver)==null||r.cancel()}}function Ih(e,r,i,s=0,l=1){const d=Array.from(e).sort((v,y)=>v.sortNodePosition(y)).indexOf(r),p=e.size,h=(p-1)*s;return typeof i=="function"?i(d,p):l===1?d*s:h-d*s}const t0=30,v7=e=>!isNaN(parseFloat(e));class x7{constructor(r,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=s=>{var d;const l=dt.now();if(this.updatedAt!==l&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&((d=this.events.change)==null||d.notify(this.current),this.dependents))for(const p of this.dependents)p.dirty()},this.hasAnimated=!1,this.setCurrent(r),this.owner=i.owner}setCurrent(r){this.current=r,this.updatedAt=dt.now(),this.canTrackVelocity===null&&r!==void 0&&(this.canTrackVelocity=v7(this.current))}setPrevFrameValue(r=this.current){this.prevFrameValue=r,this.prevUpdatedAt=this.updatedAt}onChange(r){return this.on("change",r)}on(r,i){this.events[r]||(this.events[r]=new qc);const s=this.events[r].add(i);return r==="change"?()=>{s(),Me.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const r in this.events)this.events[r].clear()}attach(r,i){this.passiveEffect=r,this.stopPassiveEffect=i}set(r){this.passiveEffect?this.passiveEffect(r,this.updateAndNotify):this.updateAndNotify(r)}setWithVelocity(r,i,s){this.set(i),this.prev=void 0,this.prevFrameValue=r,this.prevUpdatedAt=this.updatedAt-s}jump(r,i=!0){this.updateAndNotify(r),this.prev=r,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var r;(r=this.events.change)==null||r.notify(this.current)}addDependent(r){this.dependents||(this.dependents=new Set),this.dependents.add(r)}removeDependent(r){this.dependents&&this.dependents.delete(r)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const r=dt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||r-this.updatedAt>t0)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,t0);return ih(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(r){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=r(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var r,i;(r=this.dependents)==null||r.clear(),(i=this.events.destroy)==null||i.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Zr(e,r){return new x7(e,r)}function Fh(e,r){if(e!=null&&e.inherit&&r){const{inherit:i,...s}=e;return{...r,...s}}return e}function l1(e,r){const i=(e==null?void 0:e[r])??(e==null?void 0:e.default)??e;return i!==e?Fh(i,e):i}const C7={type:"spring",stiffness:500,damping:25,restSpeed:10},w7=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),S7={type:"keyframes",duration:.8},k7={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},j7=(e,{keyframes:r})=>r.length>2?S7:Qr.has(e)?e.startsWith("scale")?w7(r[1]):C7:k7,b7=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function T7(e){for(const r in e)if(!b7.has(r))return!0;return!1}const u1=(e,r,i,s={},l,d)=>p=>{const h=l1(s,e)||{},m=h.delay||s.delay||0;let{elapsed:v=0}=s;v=v-kt(m);const y={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:r.getVelocity(),...h,delay:-v,onUpdate:C=>{r.set(C),h.onUpdate&&h.onUpdate(C)},onComplete:()=>{p(),h.onComplete&&h.onComplete()},name:e,motionValue:r,element:d?void 0:l};T7(h)||Object.assign(y,j7(e,y)),y.duration&&(y.duration=kt(y.duration)),y.repeatDelay&&(y.repeatDelay=kt(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let x=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(Tc(y),y.delay===0&&(x=!0)),(In.instantAnimations||In.skipAnimations||l!=null&&l.shouldSkipAnimations||h.skipAnimations)&&(x=!0,Tc(y),y.delay=0),y.allowFlatten=!h.type&&!h.ease,x&&!d&&r.get()!==void 0){const C=ma(y.keyframes,h);if(C!==void 0){Me.update(()=>{y.onUpdate(C),y.onComplete()});return}}return h.isSync?new qs(y):new y7(y)},E7=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function L7(e){const r=E7.exec(e);if(!r)return[,];const[,i,s,l]=r;return[`--${i??s}`,l]}function Nh(e,r,i=1){const[s,l]=L7(e);if(!s)return;const d=window.getComputedStyle(r).getPropertyValue(s);if(d){const p=d.trim();return eh(p)?parseFloat(p):p}return t1(l)?Nh(l,r,i+1):l}function n0(e){const r=[{},{}];return e==null||e.values.forEach((i,s)=>{r[0][s]=i.get(),r[1][s]=i.getVelocity()}),r}function c1(e,r,i,s){if(typeof r=="function"){const[l,d]=n0(s);r=r(i!==void 0?i:e.custom,l,d)}if(typeof r=="string"&&(r=e.variants&&e.variants[r]),typeof r=="function"){const[l,d]=n0(s);r=r(i!==void 0?i:e.custom,l,d)}return r}function lr(e,r,i){const s=e.getProps();return c1(s,r,i!==void 0?i:s.custom,e)}const zh=new Set(["width","height","top","left","right","bottom",...Yr]),Ec=e=>Array.isArray(e);function P7(e,r,i){e.hasValue(r)?e.getValue(r).set(i):e.addValue(r,Zr(i))}function R7(e){return Ec(e)?e[e.length-1]||0:e}function M7(e,r){const i=lr(e,r);let{transitionEnd:s={},transition:l={},...d}=i||{};d={...d,...s};for(const p in d){const h=R7(d[p]);P7(e,p,h)}}const it=e=>!!(e&&e.getVelocity);function A7(e){return!!(it(e)&&e.add)}function Lc(e,r){const i=e.getValue("willChange");if(A7(i))return i.add(r);if(!i&&In.WillChange){const s=new In.WillChange("auto");e.addValue("willChange",s),s.add(r)}}function d1(e){return e.replace(/([A-Z])/g,r=>`-${r.toLowerCase()}`)}const B7="framerAppearId",Oh="data-"+d1(B7);function _h(e){return e.props[Oh]}function $7({protectedKeys:e,needsAnimating:r},i){const s=e.hasOwnProperty(i)&&r[i]!==!0;return r[i]=!1,s}function Hh(e,r,{delay:i=0,transitionOverride:s,type:l}={}){let{transition:d,transitionEnd:p,...h}=r;const m=e.getDefaultTransition();d=d?Fh(d,m):m;const v=d==null?void 0:d.reduceMotion,y=d==null?void 0:d.skipAnimations;s&&(d=s);const x=[],C=l&&e.animationState&&e.animationState.getState()[l],b=d==null?void 0:d.path;b&&b.animateVisualElement(e,h,d,i,x);for(const j in h){const L=e.getValue(j,e.latestValues[j]??null),P=h[j];if(P===void 0||C&&$7(C,j))continue;const D={delay:i,...l1(d||{},j)};y&&(D.skipAnimations=!0);const A=L.get();if(A!==void 0&&!L.isAnimating()&&!Array.isArray(P)&&P===A&&!D.velocity){Me.update(()=>L.set(P));continue}let F=!1;if(window.MotionHandoffAnimation){const q=_h(e);if(q){const V=window.MotionHandoffAnimation(q,j,Me);V!==null&&(D.startTime=V,F=!0)}}Lc(e,j);const N=v??e.shouldReduceMotion;L.start(u1(j,L,P,N&&zh.has(j)?{type:!1}:D,e,F));const W=L.animation;W&&x.push(W)}if(p){const j=()=>Me.update(()=>{p&&M7(e,p)});x.length?Promise.all(x).then(j):j()}return x}function Pc(e,r,i={}){var m;const s=lr(e,r,i.type==="exit"?(m=e.presenceContext)==null?void 0:m.custom:void 0);let{transition:l=e.getDefaultTransition()||{}}=s||{};i.transitionOverride&&(l=i.transitionOverride);const d=s?()=>Promise.all(Hh(e,s,i)):()=>Promise.resolve(),p=e.variantChildren&&e.variantChildren.size?(v=0)=>{const{delayChildren:y=0,staggerChildren:x,staggerDirection:C}=l;return D7(e,r,v,y,x,C,i)}:()=>Promise.resolve(),{when:h}=l;if(h){const[v,y]=h==="beforeChildren"?[d,p]:[p,d];return v().then(()=>y())}else return Promise.all([d(),p(i.delay)])}function D7(e,r,i=0,s=0,l=0,d=1,p){const h=[];for(const m of e.variantChildren)m.notify("AnimationStart",r),h.push(Pc(m,r,{...p,delay:i+(typeof s=="function"?0:s)+Ih(e.variantChildren,m,s,l,d)}).then(()=>m.notify("AnimationComplete",r)));return Promise.all(h)}function V7(e,r,i={}){e.notify("AnimationStart",r);let s;if(Array.isArray(r)){const l=r.map(d=>Pc(e,d,i));s=Promise.all(l)}else if(typeof r=="string")s=Pc(e,r,i);else{const l=typeof r=="function"?lr(e,r,i.custom):r;s=Promise.all(Hh(e,l,i))}return s.then(()=>{e.notify("AnimationComplete",r)})}const I7={test:e=>e==="auto",parse:e=>e},Uh=e=>r=>r.test(e),Wh=[Gr,ie,qt,un,u8,l8,I7],r0=e=>Wh.find(Uh(e));function F7(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||nh(e):!0}const N7=new Set(["brightness","contrast","saturate","opacity"]);function z7(e){const[r,i]=e.slice(0,-1).split("(");if(r==="drop-shadow")return e;const[s]=i.match(n1)||[];if(!s)return e;const l=i.replace(s,"");let d=N7.has(r)?1:0;return s!==i&&(d*=100),r+"("+d+l+")"}const O7=/\b([a-z-]*)\(.*?\)/gu,Rc={...Ut,getAnimatableNone:e=>{const r=e.match(O7);return r?r.map(z7).join(" "):e}},Mc={...Ut,getAnimatableNone:e=>{const r=Ut.parse(e);return Ut.createTransformer(e)(r.map(s=>typeof s=="number"?0:typeof s=="object"?{...s,alpha:1}:s))}},i0={...Gr,transform:Math.round},_7={rotate:un,pathRotation:un,rotateX:un,rotateY:un,rotateZ:un,scale:js,scaleX:js,scaleY:js,scaleZ:js,skew:un,skewX:un,skewY:un,distance:ie,translateX:ie,translateY:ie,translateZ:ie,x:ie,y:ie,z:ie,perspective:ie,transformPerspective:ie,opacity:no,originX:U2,originY:U2,originZ:ie},Js={borderWidth:ie,borderTopWidth:ie,borderRightWidth:ie,borderBottomWidth:ie,borderLeftWidth:ie,borderRadius:ie,borderTopLeftRadius:ie,borderTopRightRadius:ie,borderBottomRightRadius:ie,borderBottomLeftRadius:ie,width:ie,maxWidth:ie,height:ie,maxHeight:ie,top:ie,right:ie,bottom:ie,left:ie,inset:ie,insetBlock:ie,insetBlockStart:ie,insetBlockEnd:ie,insetInline:ie,insetInlineStart:ie,insetInlineEnd:ie,padding:ie,paddingTop:ie,paddingRight:ie,paddingBottom:ie,paddingLeft:ie,paddingBlock:ie,paddingBlockStart:ie,paddingBlockEnd:ie,paddingInline:ie,paddingInlineStart:ie,paddingInlineEnd:ie,margin:ie,marginTop:ie,marginRight:ie,marginBottom:ie,marginLeft:ie,marginBlock:ie,marginBlockStart:ie,marginBlockEnd:ie,marginInline:ie,marginInlineStart:ie,marginInlineEnd:ie,fontSize:ie,backgroundPositionX:ie,backgroundPositionY:ie,..._7,zIndex:i0,fillOpacity:no,strokeOpacity:no,numOctaves:i0},H7={...Js,color:We,backgroundColor:We,outlineColor:We,fill:We,stroke:We,borderColor:We,borderTopColor:We,borderRightColor:We,borderBottomColor:We,borderLeftColor:We,filter:Rc,WebkitFilter:Rc,mask:Mc,WebkitMask:Mc},Zh=e=>H7[e],U7=new Set([Rc,Mc]);function Kh(e,r){let i=Zh(e);return U7.has(i)||(i=Ut),i.getAnimatableNone?i.getAnimatableNone(r):void 0}const W7=new Set(["auto","none","0"]);function Z7(e,r,i){let s=0,l;for(;s<e.length&&!l;){const d=e[s];typeof d=="string"&&!W7.has(d)&&Wr(d).values.length&&(l=e[s]),s++}if(l&&i)for(const d of r)e[d]=Kh(i,l)}class K7 extends a1{constructor(r,i,s,l,d){super(r,i,s,l,d,!0)}readKeyframes(){const{unresolvedKeyframes:r,element:i,name:s}=this;if(!i||!i.current)return;super.readKeyframes();for(let y=0;y<r.length;y++){let x=r[y];if(typeof x=="string"&&(x=x.trim(),t1(x))){const C=Nh(x,i.current);C!==void 0&&(r[y]=C),y===r.length-1&&(this.finalKeyframe=x)}}if(this.resolveNoneKeyframes(),!zh.has(s)||r.length!==2)return;const[l,d]=r,p=r0(l),h=r0(d),m=H2(l),v=H2(d);if(m!==v&&Dn[s]){this.needsMeasurement=!0;return}if(p!==h)if(q2(p)&&q2(h))for(let y=0;y<r.length;y++){const x=r[y];typeof x=="string"&&(r[y]=parseFloat(x))}else Dn[s]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:r,name:i}=this,s=[];for(let l=0;l<r.length;l++)(r[l]===null||F7(r[l]))&&s.push(l);s.length&&Z7(r,s,i)}measureInitialState(){const{element:r,unresolvedKeyframes:i,name:s}=this;if(!r||!r.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Dn[s](r.measureViewportBox(),window.getComputedStyle(r.current)),i[0]=this.measuredOrigin;const l=i[i.length-1];l!==void 0&&r.getValue(s,l).jump(l,!1)}measureEndState(){var h;const{element:r,name:i,unresolvedKeyframes:s}=this;if(!r||!r.current)return;const l=r.getValue(i);l&&l.jump(this.measuredOrigin,!1);const d=s.length-1,p=s[d];s[d]=Dn[i](r.measureViewportBox(),window.getComputedStyle(r.current)),p!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=p),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([m,v])=>{r.getValue(m).set(v)}),this.resolveNoneKeyframes()}}const f1=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"];function Gh(e,r,i){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e=="string"){let s=document;const l=(i==null?void 0:i[e])??s.querySelectorAll(e);return l?Array.from(l):[]}return Array.from(e).filter(s=>s!=null)}const Ac=(e,r)=>r&&typeof e=="number"?r.transform(e):e;function Fs(e){return th(e)&&"offsetHeight"in e&&!("ownerSVGElement"in e)}const{schedule:p1}=mh(queueMicrotask,!1),Ot={x:!1,y:!1};function Yh(){return Ot.x||Ot.y}function G7(e){return e==="x"||e==="y"?Ot[e]?null:(Ot[e]=!0,()=>{Ot[e]=!1}):Ot.x||Ot.y?null:(Ot.x=Ot.y=!0,()=>{Ot.x=Ot.y=!1})}function Qh(e,r){const i=Gh(e),s=new AbortController,l={passive:!0,...r,signal:s.signal};return[i,l,()=>s.abort()]}function Y7(e){return!(e.pointerType==="touch"||Yh())}function Q7(e,r,i={}){const[s,l,d]=Qh(e,i);return s.forEach(p=>{let h=!1,m=!1,v;const y=()=>{p.removeEventListener("pointerleave",j)},x=P=>{v&&(v(P),v=void 0),y()},C=P=>{h=!1,window.removeEventListener("pointerup",C),window.removeEventListener("pointercancel",C),m&&(m=!1,x(P))},b=()=>{h=!0,window.addEventListener("pointerup",C,l),window.addEventListener("pointercancel",C,l)},j=P=>{if(P.pointerType!=="touch"){if(h){m=!0;return}x(P)}},L=P=>{if(!Y7(P))return;m=!1;const D=r(p,P);typeof D=="function"&&(v=D,p.addEventListener("pointerleave",j,l))};p.addEventListener("pointerenter",L,l),p.addEventListener("pointerdown",b,l)}),d}const Xh=(e,r)=>r?e===r?!0:Xh(e,r.parentElement):!1,h1=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,X7=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function q7(e){return X7.has(e.tagName)||e.isContentEditable===!0}const J7=new Set(["INPUT","SELECT","TEXTAREA"]);function eg(e){return J7.has(e.tagName)||e.isContentEditable===!0}const Ns=new WeakSet;function o0(e){return r=>{r.key==="Enter"&&e(r)}}function Bu(e,r){e.dispatchEvent(new PointerEvent("pointer"+r,{isPrimary:!0,bubbles:!0}))}const tg=(e,r)=>{const i=e.currentTarget;if(!i)return;const s=o0(()=>{if(Ns.has(i))return;Bu(i,"down");const l=o0(()=>{Bu(i,"up")}),d=()=>Bu(i,"cancel");i.addEventListener("keyup",l,r),i.addEventListener("blur",d,r)});i.addEventListener("keydown",s,r),i.addEventListener("blur",()=>i.removeEventListener("keydown",s),r)};function s0(e){return h1(e)&&!Yh()}const a0=new WeakSet;function ng(e,r,i={}){const[s,l,d]=Qh(e,i),p=h=>{const m=h.currentTarget;if(!s0(h)||a0.has(h))return;Ns.add(m),i.stopPropagation&&a0.add(h);const v=r(m,h),y={...l,capture:!0},x=(j,L)=>{window.removeEventListener("pointerup",C,y),window.removeEventListener("pointercancel",b,y),Ns.has(m)&&Ns.delete(m),s0(j)&&typeof v=="function"&&v(j,{success:L})},C=j=>{x(j,m===window||m===document||i.useGlobalTarget||Xh(m,j.target))},b=j=>{x(j,!1)};window.addEventListener("pointerup",C,y),window.addEventListener("pointercancel",b,y)};return s.forEach(h=>{(i.useGlobalTarget?window:h).addEventListener("pointerdown",p,l),Fs(h)&&(h.addEventListener("focus",v=>tg(v,l)),!q7(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),d}function m1(e){return th(e)&&"ownerSVGElement"in e}const zs=new WeakMap;let An;const qh=(e,r,i)=>(s,l)=>l&&l[0]?l[0][e+"Size"]:m1(s)&&"getBBox"in s?s.getBBox()[r]:s[i],rg=qh("inline","width","offsetWidth"),ig=qh("block","height","offsetHeight");function og({target:e,borderBoxSize:r}){var i;(i=zs.get(e))==null||i.forEach(s=>{s(e,{get width(){return rg(e,r)},get height(){return ig(e,r)}})})}function sg(e){e.forEach(og)}function ag(){typeof ResizeObserver>"u"||(An=new ResizeObserver(sg))}function lg(e,r){An||ag();const i=Gh(e);return i.forEach(s=>{let l=zs.get(s);l||(l=new Set,zs.set(s,l)),l.add(r),An==null||An.observe(s)}),()=>{i.forEach(s=>{const l=zs.get(s);l==null||l.delete(r),l!=null&&l.size||An==null||An.unobserve(s)})}}const Os=new Set;let Nr;function ug(){Nr=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};Os.forEach(r=>r(e))},window.addEventListener("resize",Nr)}function cg(e){return Os.add(e),Nr||ug(),()=>{Os.delete(e),!Os.size&&typeof Nr=="function"&&(window.removeEventListener("resize",Nr),Nr=void 0)}}function l0(e,r){return typeof e=="function"?cg(e):lg(e,r)}function dg(e){return m1(e)&&e.tagName==="svg"}const fg=[...Wh,We,Ut],pg=e=>fg.find(Uh(e)),u0=()=>({translate:0,scale:1,origin:0,originPoint:0}),zr=()=>({x:u0(),y:u0()}),c0=()=>({min:0,max:0}),Ye=()=>({x:c0(),y:c0()}),hg=new WeakMap;function ga(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function ro(e){return typeof e=="string"||Array.isArray(e)}const g1=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],y1=["initial",...g1];function ya(e){return ga(e.animate)||y1.some(r=>ro(e[r]))}function Jh(e){return!!(ya(e)||e.variants)}function mg(e,r,i){for(const s in r){const l=r[s],d=i[s];if(it(l))e.addValue(s,l);else if(it(d))e.addValue(s,Zr(l,{owner:e}));else if(d!==l)if(e.hasValue(s)){const p=e.getValue(s);p.liveStyle===!0?p.jump(l):p.hasAnimated||p.set(l)}else{const p=e.getStaticValue(s);e.addValue(s,Zr(p!==void 0?p:l,{owner:e}))}}for(const s in i)r[s]===void 0&&e.removeValue(s);return r}const Bc={current:null},e3={current:!1},gg=typeof window<"u";function yg(){if(e3.current=!0,!!gg)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),r=()=>Bc.current=e.matches;e.addEventListener("change",r),r()}else Bc.current=!1}const d0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let ea={};function t3(e){ea=e}function vg(){return ea}class xg{scrapeMotionValuesFromProps(r,i,s){return{}}constructor({parent:r,props:i,presenceContext:s,reducedMotionConfig:l,skipAnimations:d,blockInitialAnimation:p,visualState:h},m={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=a1,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const b=dt.now();this.renderScheduledAt<b&&(this.renderScheduledAt=b,Me.render(this.render,!1,!0))};const{latestValues:v,renderState:y}=h;this.latestValues=v,this.baseTarget={...v},this.initialValues=i.initial?{...v}:{},this.renderState=y,this.parent=r,this.props=i,this.presenceContext=s,this.depth=r?r.depth+1:0,this.reducedMotionConfig=l,this.skipAnimationsConfig=d,this.options=m,this.blockInitialAnimation=!!p,this.isControllingVariants=ya(i),this.isVariantNode=Jh(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(r&&r.current);const{willChange:x,...C}=this.scrapeMotionValuesFromProps(i,{},this);for(const b in C){const j=C[b];v[b]!==void 0&&it(j)&&j.set(v[b])}}mount(r){var i,s;if(this.hasBeenMounted)for(const l in this.initialValues)(i=this.values.get(l))==null||i.jump(this.initialValues[l]),this.latestValues[l]=this.initialValues[l];this.current=r,hg.set(r,this),this.projection&&!this.projection.instance&&this.projection.mount(r),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((l,d)=>this.bindToMotionValue(d,l)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(e3.current||yg(),this.shouldReduceMotion=Bc.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(s=this.parent)==null||s.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var r;this.projection&&this.projection.unmount(),Fn(this.notifyUpdate),Fn(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(r=this.parent)==null||r.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const s=this.features[i];s&&(s.unmount(),s.isMounted=!1)}this.current=null}addChild(r){this.children.add(r),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(r)}removeChild(r){this.children.delete(r),this.enteringChildren&&this.enteringChildren.delete(r)}bindToMotionValue(r,i){if(this.valueSubscriptions.has(r)&&this.valueSubscriptions.get(r)(),i.accelerate&&Vh.has(r)&&this.current instanceof HTMLElement){const{factory:p,keyframes:h,times:m,ease:v,duration:y}=i.accelerate,x=new $h({element:this.current,name:r,keyframes:h,times:m,ease:v,duration:kt(y)}),C=p(x);this.valueSubscriptions.set(r,()=>{C(),x.cancel()});return}const s=Qr.has(r);s&&this.onBindTransform&&this.onBindTransform();const l=i.on("change",p=>{this.latestValues[r]=p,this.props.onUpdate&&Me.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let d;typeof window<"u"&&window.MotionCheckAppearSync&&(d=window.MotionCheckAppearSync(this,r,i)),this.valueSubscriptions.set(r,()=>{l(),d&&d()})}sortNodePosition(r){return!this.current||!this.sortInstanceNodePosition||this.type!==r.type?0:this.sortInstanceNodePosition(this.current,r.current)}updateFeatures(){let r="animation";for(r in ea){const i=ea[r];if(!i)continue;const{isEnabled:s,Feature:l}=i;if(!this.features[r]&&l&&s(this.props)&&(this.features[r]=new l(this)),this.features[r]){const d=this.features[r];d.isMounted?d.update():(d.mount(),d.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ye()}getStaticValue(r){return this.latestValues[r]}setStaticValue(r,i){this.latestValues[r]=i}update(r,i){(r.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=r,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let s=0;s<d0.length;s++){const l=d0[s];this.propEventSubscriptions[l]&&(this.propEventSubscriptions[l](),delete this.propEventSubscriptions[l]);const d="on"+l,p=r[d];p&&(this.propEventSubscriptions[l]=this.on(l,p))}this.prevMotionValues=mg(this,this.scrapeMotionValuesFromProps(r,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(r){return this.props.variants?this.props.variants[r]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(r){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(r),()=>i.variantChildren.delete(r)}addValue(r,i){const s=this.values.get(r);i!==s&&(s&&this.removeValue(r),this.bindToMotionValue(r,i),this.values.set(r,i),this.latestValues[r]=i.get())}removeValue(r){this.values.delete(r);const i=this.valueSubscriptions.get(r);i&&(i(),this.valueSubscriptions.delete(r)),delete this.latestValues[r],this.removeValueFromRenderState(r,this.renderState)}hasValue(r){return this.values.has(r)}getValue(r,i){if(this.props.values&&this.props.values[r])return this.props.values[r];let s=this.values.get(r);return s===void 0&&i!==void 0&&(s=Zr(i===null?void 0:i,{owner:this}),this.addValue(r,s)),s}readValue(r,i){let s=this.latestValues[r]!==void 0||!this.current?this.latestValues[r]:this.getBaseTargetFromProps(this.props,r)??this.readValueFromInstance(this.current,r,this.options);return s!=null&&(typeof s=="string"&&(eh(s)||nh(s))?s=parseFloat(s):!pg(s)&&Ut.test(i)&&(s=Kh(r,i)),this.setBaseTarget(r,it(s)?s.get():s)),it(s)?s.get():s}setBaseTarget(r,i){this.baseTarget[r]=i}getBaseTarget(r){var d;const{initial:i}=this.props;let s;if(typeof i=="string"||typeof i=="object"){const p=c1(this.props,i,(d=this.presenceContext)==null?void 0:d.custom);p&&(s=p[r])}if(i&&s!==void 0)return s;const l=this.getBaseTargetFromProps(this.props,r);return l!==void 0&&!it(l)?l:this.initialValues[r]!==void 0&&s===void 0?void 0:this.baseTarget[r]}on(r,i){return this.events[r]||(this.events[r]=new qc),this.events[r].add(i)}notify(r,...i){this.events[r]&&this.events[r].notify(...i)}scheduleRenderMicrotask(){p1.render(this.render)}}class n3 extends xg{constructor(){super(...arguments),this.KeyframeResolver=K7}sortInstanceNodePosition(r,i){return r.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(r,i){const s=r.style;return s?s[i]:void 0}removeValueFromRenderState(r,{vars:i,style:s}){delete i[r],delete s[r]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:r}=this.props;it(r)&&(this.childSubscription=r.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}class Nn{constructor(r){this.isMounted=!1,this.node=r}update(){}}function r3({top:e,left:r,right:i,bottom:s}){return{x:{min:r,max:i},y:{min:e,max:s}}}function Cg({x:e,y:r}){return{top:r.min,right:e.max,bottom:r.max,left:e.min}}function wg(e,r){if(!r)return e;const i=r({x:e.left,y:e.top}),s=r({x:e.right,y:e.bottom});return{top:i.y,left:i.x,bottom:s.y,right:s.x}}function $u(e){return e===void 0||e===1}function $c({scale:e,scaleX:r,scaleY:i}){return!$u(e)||!$u(r)||!$u(i)}function er(e){return $c(e)||i3(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function i3(e){return f0(e.x)||f0(e.y)}function f0(e){return e&&e!=="0%"}function ta(e,r,i){const s=e-i,l=r*s;return i+l}function p0(e,r,i,s,l){return l!==void 0&&(e=ta(e,l,s)),ta(e,i,s)+r}function Dc(e,r=0,i=1,s,l){e.min=p0(e.min,r,i,s,l),e.max=p0(e.max,r,i,s,l)}function o3(e,{x:r,y:i}){Dc(e.x,r.translate,r.scale,r.originPoint),Dc(e.y,i.translate,i.scale,i.originPoint)}const h0=.999999999999,m0=1.0000000000001;function Sg(e,r,i,s=!1){var h;const l=i.length;if(!l)return;r.x=r.y=1;let d,p;for(let m=0;m<l;m++){d=i[m],p=d.projectionDelta;const{visualElement:v}=d.options;v&&v.props.style&&v.props.style.display==="contents"||(s&&d.options.layoutScroll&&d.scroll&&d!==d.root&&(Xt(e.x,-d.scroll.offset.x),Xt(e.y,-d.scroll.offset.y)),p&&(r.x*=p.x.scale,r.y*=p.y.scale,o3(e,p)),s&&er(d.latestValues)&&_s(e,d.latestValues,(h=d.layout)==null?void 0:h.layoutBox))}r.x<m0&&r.x>h0&&(r.x=1),r.y<m0&&r.y>h0&&(r.y=1)}function Xt(e,r){e.min+=r,e.max+=r}function g0(e,r,i,s,l=.5){const d=Re(e.min,e.max,l);Dc(e,r,i,d,s)}function y0(e,r){return typeof e=="string"?parseFloat(e)/100*(r.max-r.min):e}function _s(e,r,i){const s=i??e;g0(e.x,y0(r.x,s.x),r.scaleX,r.scale,r.originX),g0(e.y,y0(r.y,s.y),r.scaleY,r.scale,r.originY)}function s3(e,r){return r3(wg(e.getBoundingClientRect(),r))}function kg(e,r,i){const s=s3(e,i),{scroll:l}=r;return l&&(Xt(s.x,l.offset.x),Xt(s.y,l.offset.y)),s}const jg={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},bg=Yr.length;function Tg(e,r,i){let s="",l=!0;for(let p=0;p<bg;p++){const h=Yr[p],m=e[h];if(m===void 0)continue;let v=!0;if(typeof m=="number")v=m===(h.startsWith("scale")?1:0);else{const y=parseFloat(m);v=h.startsWith("scale")?y===1:y===0}if(!v||i){const y=Ac(m,Js[h]);if(!v){l=!1;const x=jg[h]||h;s+=`${x}(${y}) `}i&&(r[h]=y)}}const d=e.pathRotation;return d&&(l=!1,s+=`rotate(${Ac(d,Js.pathRotation)}) `),s=s.trim(),i?s=i(r,l?"":s):l&&(s="none"),s}function v1(e,r,i){const{style:s,vars:l,transformOrigin:d}=e;let p=!1,h=!1;for(const m in r){const v=r[m];if(Qr.has(m)){p=!0;continue}else if(yh(m)){l[m]=v;continue}else{const y=Ac(v,Js[m]);m.startsWith("origin")?(h=!0,d[m]=y):s[m]=y}}if(r.transform||(p||i?s.transform=Tg(r,e.transform,i):s.transform&&(s.transform="none")),h){const{originX:m="50%",originY:v="50%",originZ:y=0}=d;s.transformOrigin=`${m} ${v} ${y}`}}function a3(e,{style:r,vars:i},s,l){const d=e.style;let p;for(p in r)d[p]=r[p];l==null||l.applyProjectionStyles(d,s);for(p in i)d.setProperty(p,i[p])}function v0(e,r){return r.max===r.min?0:e/(r.max-r.min)*100}const Ni={correct:(e,r)=>{if(!r.target)return e;if(typeof e=="string")if(ie.test(e))e=parseFloat(e);else return e;const i=v0(e,r.target.x),s=v0(e,r.target.y);return`${i}% ${s}%`}},Eg={correct:(e,{treeScale:r,projectionDelta:i})=>{const s=e,l=Ut.parse(e);if(l.length>5)return s;const d=Ut.createTransformer(e),p=typeof l[0]!="number"?1:0,h=i.x.scale*r.x,m=i.y.scale*r.y;l[0+p]/=h,l[1+p]/=m;const v=Re(h,m,.5);return typeof l[2+p]=="number"&&(l[2+p]/=v),typeof l[3+p]=="number"&&(l[3+p]/=v),d(l)}},Vc={borderRadius:{...Ni,applyTo:[...f1]},borderTopLeftRadius:Ni,borderTopRightRadius:Ni,borderBottomLeftRadius:Ni,borderBottomRightRadius:Ni,boxShadow:Eg};function l3(e,{layout:r,layoutId:i}){return Qr.has(e)||e.startsWith("origin")||(r||i!==void 0)&&(!!Vc[e]||e==="opacity")}function x1(e,r,i){var p;const s=e.style,l=r==null?void 0:r.style,d={};if(!s)return d;for(const h in s)(it(s[h])||l&&it(l[h])||l3(h,e)||((p=i==null?void 0:i.getValue(h))==null?void 0:p.liveStyle)!==void 0)&&(d[h]=s[h]);return d}function Lg(e){return window.getComputedStyle(e)}class Pg extends n3{constructor(){super(...arguments),this.type="html",this.renderInstance=a3}mount(r){ha(!!r.style),super.mount(r)}readValueFromInstance(r,i){var s;if(Qr.has(i))return(s=this.projection)!=null&&s.isProjecting?wc(i):Y8(r,i);{const l=Lg(r),d=(yh(i)?l.getPropertyValue(i):l[i])||0;return typeof d=="string"?d.trim():d}}measureInstanceViewportBox(r,{transformPagePoint:i}){return s3(r,i)}build(r,i,s){v1(r,i,s.transformTemplate)}scrapeMotionValuesFromProps(r,i,s){return x1(r,i,s)}}const Rg={offset:"stroke-dashoffset",array:"stroke-dasharray"},Mg={offset:"strokeDashoffset",array:"strokeDasharray"};function Ag(e,r,i=1,s=0,l=!0){e.pathLength=1;const d=l?Rg:Mg;e[d.offset]=`${-s}`,e[d.array]=`${r} ${i}`}const Bg=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function u3(e,{attrX:r,attrY:i,attrScale:s,pathLength:l,pathSpacing:d=1,pathOffset:p=0,...h},m,v,y){if(v1(e,h,v),m){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:x,style:C}=e;x.transform&&(C.transform=x.transform,delete x.transform),(C.transform||x.transformOrigin)&&(C.transformOrigin=x.transformOrigin??"50% 50%",delete x.transformOrigin),C.transform&&(C.transformBox=(y==null?void 0:y.transformBox)??"fill-box",delete x.transformBox);for(const b of Bg)x[b]!==void 0&&(C[b]=x[b],delete x[b]);r!==void 0&&(x.x=r),i!==void 0&&(x.y=i),s!==void 0&&(x.scale=s),l!==void 0&&Ag(x,l,d,p,!1)}const c3=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),d3=e=>typeof e=="string"&&e.toLowerCase()==="svg";function $g(e,r,i,s){a3(e,r,void 0,s);for(const l in r.attrs)e.setAttribute(c3.has(l)?l:d1(l),r.attrs[l])}function f3(e,r,i){const s=x1(e,r,i);for(const l in e)if(it(e[l])||it(r[l])){const d=Yr.indexOf(l)!==-1?"attr"+l.charAt(0).toUpperCase()+l.substring(1):l;s[d]=e[l]}return s}class Dg extends n3{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ye}getBaseTargetFromProps(r,i){return r[i]}readValueFromInstance(r,i){if(Qr.has(i)){const s=Zh(i);return s&&s.default||0}return i=c3.has(i)?i:d1(i),r.getAttribute(i)}scrapeMotionValuesFromProps(r,i,s){return f3(r,i,s)}build(r,i,s){u3(r,i,this.isSVGTag,s.transformTemplate,s.style)}renderInstance(r,i,s,l){$g(r,i,s,l)}mount(r){this.isSVGTag=d3(r.tagName),super.mount(r)}}const Vg=y1.length;function p3(e){if(!e)return;if(!e.isControllingVariants){const i=e.parent?p3(e.parent)||{}:{};return e.props.initial!==void 0&&(i.initial=e.props.initial),i}const r={};for(let i=0;i<Vg;i++){const s=y1[i],l=e.props[s];(ro(l)||l===!1)&&(r[s]=l)}return r}function h3(e,r){if(!Array.isArray(r))return!1;const i=r.length;if(i!==e.length)return!1;for(let s=0;s<i;s++)if(r[s]!==e[s])return!1;return!0}const Ig=[...g1].reverse(),Fg=g1.length;function Ng(e){return r=>Promise.all(r.map(({animation:i,options:s})=>V7(e,i,s)))}function zg(e){let r=Ng(e),i=x0(),s=!0,l=!1;const d=v=>(y,x)=>{var b;const C=lr(e,x,v==="exit"?(b=e.presenceContext)==null?void 0:b.custom:void 0);if(C){const{transition:j,transitionEnd:L,...P}=C;y={...y,...P,...L}}return y};function p(v){r=v(e)}function h(v){const{props:y}=e,x=p3(e.parent)||{},C=[],b=new Set;let j={},L=1/0;for(let D=0;D<Fg;D++){const A=Ig[D],F=i[A],N=y[A]!==void 0?y[A]:x[A],W=ro(N),q=A===v?F.isActive:null;q===!1&&(L=D);let V=N===x[A]&&N!==y[A]&&W;if(V&&(s||l)&&e.manuallyAnimateOnMount&&(V=!1),F.protectedKeys={...j},!F.isActive&&q===null||!N&&!F.prevProp||ga(N)||typeof N=="boolean")continue;if(A==="exit"&&F.isActive&&q!==!0){F.prevResolvedValues&&(j={...j,...F.prevResolvedValues});continue}const B=Og(F.prevProp,N);let Q=B||A===v&&F.isActive&&!V&&W||D>L&&W,G=!1;const ae=Array.isArray(N)?N:[N];let he=ae.reduce(d(A),{});q===!1&&(he={});const{prevResolvedValues:ue={}}=F,we={...ue,...he},Le=H=>{Q=!0,b.has(H)&&(G=!0,b.delete(H)),F.needsAnimating[H]=!0;const X=e.getValue(H);X&&(X.liveStyle=!1)};for(const H in we){const X=he[H],Z=ue[H];if(j.hasOwnProperty(H))continue;let E=!1;Ec(X)&&Ec(Z)?E=!h3(X,Z)||B:E=X!==Z,E?X!=null?Le(H):b.add(H):X!==void 0&&b.has(H)?Le(H):F.protectedKeys[H]=!0}F.prevProp=N,F.prevResolvedValues=he,F.isActive&&(j={...j,...he}),(s||l)&&e.blockInitialAnimation&&(Q=!1);const ke=V&&B;Q&&(!ke||G)&&C.push(...ae.map(H=>{const X={type:A};if(typeof H=="string"&&(s||l)&&!ke&&e.manuallyAnimateOnMount&&e.parent){const{parent:Z}=e,E=lr(Z,H);if(Z.enteringChildren&&E){const{delayChildren:I}=E.transition||{};X.delay=Ih(Z.enteringChildren,e,I)}}return{animation:H,options:X}}))}if(b.size){const D={};if(typeof y.initial!="boolean"){const A=lr(e,Array.isArray(y.initial)?y.initial[0]:y.initial);A&&A.transition&&(D.transition=A.transition)}b.forEach(A=>{const F=e.getBaseTarget(A),N=e.getValue(A);N&&(N.liveStyle=!0),D[A]=F??null}),C.push({animation:D})}let P=!!C.length;return s&&(y.initial===!1||y.initial===y.animate)&&!e.manuallyAnimateOnMount&&(P=!1),s=!1,l=!1,P?r(C):Promise.resolve()}function m(v,y){var C;if(i[v].isActive===y)return Promise.resolve();(C=e.variantChildren)==null||C.forEach(b=>{var j;return(j=b.animationState)==null?void 0:j.setActive(v,y)}),i[v].isActive=y;const x=h(v);for(const b in i)i[b].protectedKeys={};return x}return{animateChanges:h,setActive:m,setAnimateFunction:p,getState:()=>i,reset:()=>{i=x0(),l=!0}}}function Og(e,r){return typeof r=="string"?r!==e:Array.isArray(r)?!h3(r,e):!1}function Jn(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function x0(){return{animate:Jn(!0),whileInView:Jn(),whileHover:Jn(),whileTap:Jn(),whileDrag:Jn(),whileFocus:Jn(),exit:Jn()}}function Ic(e,r){e.min=r.min,e.max=r.max}function zt(e,r){Ic(e.x,r.x),Ic(e.y,r.y)}function C0(e,r){e.translate=r.translate,e.scale=r.scale,e.originPoint=r.originPoint,e.origin=r.origin}const m3=1e-4,_g=1-m3,Hg=1+m3,g3=.01,Ug=0-g3,Wg=0+g3;function ft(e){return e.max-e.min}function Zg(e,r,i){return Math.abs(e-r)<=i}function w0(e,r,i,s=.5){e.origin=s,e.originPoint=Re(r.min,r.max,e.origin),e.scale=ft(i)/ft(r),e.translate=Re(i.min,i.max,e.origin)-e.originPoint,(e.scale>=_g&&e.scale<=Hg||isNaN(e.scale))&&(e.scale=1),(e.translate>=Ug&&e.translate<=Wg||isNaN(e.translate))&&(e.translate=0)}function Xi(e,r,i,s){w0(e.x,r.x,i.x,s?s.originX:void 0),w0(e.y,r.y,i.y,s?s.originY:void 0)}function S0(e,r,i,s=0){const l=s?Re(i.min,i.max,s):i.min;e.min=l+r.min,e.max=e.min+ft(r)}function Kg(e,r,i,s){S0(e.x,r.x,i.x,s==null?void 0:s.x),S0(e.y,r.y,i.y,s==null?void 0:s.y)}function k0(e,r,i,s=0){const l=s?Re(i.min,i.max,s):i.min;e.min=r.min-l,e.max=e.min+ft(r)}function na(e,r,i,s){k0(e.x,r.x,i.x,s==null?void 0:s.x),k0(e.y,r.y,i.y,s==null?void 0:s.y)}function j0(e,r,i,s,l){return e-=r,e=ta(e,1/i,s),l!==void 0&&(e=ta(e,1/l,s)),e}function Gg(e,r=0,i=1,s=.5,l,d=e,p=e){if(qt.test(r)&&(r=parseFloat(r),r=Re(p.min,p.max,r/100)-p.min),typeof r!="number")return;let h=Re(d.min,d.max,s);e===d&&(h-=r),e.min=j0(e.min,r,i,h,l),e.max=j0(e.max,r,i,h,l)}function b0(e,r,[i,s,l],d,p){Gg(e,r[i],r[s],r[l],r.scale,d,p)}const Yg=["x","scaleX","originX"],Qg=["y","scaleY","originY"];function T0(e,r,i,s){b0(e.x,r,Yg,i?i.x:void 0,s?s.x:void 0),b0(e.y,r,Qg,i?i.y:void 0,s?s.y:void 0)}function E0(e){return e.translate===0&&e.scale===1}function y3(e){return E0(e.x)&&E0(e.y)}function L0(e,r){return e.min===r.min&&e.max===r.max}function Xg(e,r){return L0(e.x,r.x)&&L0(e.y,r.y)}function P0(e,r){return Math.round(e.min)===Math.round(r.min)&&Math.round(e.max)===Math.round(r.max)}function v3(e,r){return P0(e.x,r.x)&&P0(e.y,r.y)}function R0(e){return ft(e.x)/ft(e.y)}function M0(e,r){return e.translate===r.translate&&e.scale===r.scale&&e.originPoint===r.originPoint}function Qt(e){return[e("x"),e("y")]}function qg(e,r,i){let s="";const l=e.x.translate/r.x,d=e.y.translate/r.y,p=(i==null?void 0:i.z)||0;if((l||d||p)&&(s=`translate3d(${l}px, ${d}px, ${p}px) `),(r.x!==1||r.y!==1)&&(s+=`scale(${1/r.x}, ${1/r.y}) `),i){const{transformPerspective:v,rotate:y,pathRotation:x,rotateX:C,rotateY:b,skewX:j,skewY:L}=i;v&&(s=`perspective(${v}px) ${s}`),y&&(s+=`rotate(${y}deg) `),x&&(s+=`rotate(${x}deg) `),C&&(s+=`rotateX(${C}deg) `),b&&(s+=`rotateY(${b}deg) `),j&&(s+=`skewX(${j}deg) `),L&&(s+=`skewY(${L}deg) `)}const h=e.x.scale*r.x,m=e.y.scale*r.y;return(h!==1||m!==1)&&(s+=`scale(${h}, ${m})`),s||"none"}const Jg=f1.length,A0=e=>typeof e=="string"?parseFloat(e):e,B0=e=>typeof e=="number"||ie.test(e);function ey(e,r,i,s,l,d){l?(e.opacity=Re(0,i.opacity??1,ty(s)),e.opacityExit=Re(r.opacity??1,0,ny(s))):d&&(e.opacity=Re(r.opacity??1,i.opacity??1,s));for(let p=0;p<Jg;p++){const h=f1[p];let m=$0(r,h),v=$0(i,h);if(m===void 0&&v===void 0)continue;m||(m=0),v||(v=0),m===0||v===0||B0(m)===B0(v)?(e[h]=Math.max(Re(A0(m),A0(v),s),0),(qt.test(v)||qt.test(m))&&(e[h]+="%")):e[h]=v}(r.rotate||i.rotate)&&(e.rotate=Re(r.rotate||0,i.rotate||0,s))}function $0(e,r){return e[r]!==void 0?e[r]:e.borderRadius}const ty=x3(0,.5,dh),ny=x3(.5,.95,Mt);function x3(e,r,i){return s=>s<e?0:s>r?1:i(to(e,r,s))}function ry(e,r,i){const s=it(e)?e:Zr(e);return s.start(u1("",s,r,i)),s.animation}function io(e,r,i,s={passive:!0}){return e.addEventListener(r,i,s),()=>e.removeEventListener(r,i,s)}const iy=(e,r)=>e.depth-r.depth;class oy{constructor(){this.children=[],this.isDirty=!1}add(r){Xc(this.children,r),this.isDirty=!0}remove(r){Gs(this.children,r),this.isDirty=!0}forEach(r){this.isDirty&&this.children.sort(iy),this.isDirty=!1,this.children.forEach(r)}}function sy(e,r){const i=dt.now(),s=({timestamp:l})=>{const d=l-i;d>=r&&(Fn(s),e(d-r))};return Me.setup(s,!0),()=>Fn(s)}function Hs(e){return it(e)?e.get():e}class ay{constructor(){this.members=[]}add(r){Xc(this.members,r);for(let i=this.members.length-1;i>=0;i--){const s=this.members[i];if(s===r||s===this.lead||s===this.prevLead)continue;const l=s.instance;(!l||l.isConnected===!1)&&!s.snapshot&&(Gs(this.members,s),s.unmount())}r.scheduleRender()}remove(r){if(Gs(this.members,r),r===this.prevLead&&(this.prevLead=void 0),r===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(r){var i;for(let s=this.members.indexOf(r)-1;s>=0;s--){const l=this.members[s];if(l.isPresent!==!1&&((i=l.instance)==null?void 0:i.isConnected)!==!1)return this.promote(l),!0}return!1}promote(r,i){var l;const s=this.lead;if(r!==s&&(this.prevLead=s,this.lead=r,r.show(),s)){s.updateSnapshot(),r.scheduleRender();const{layoutDependency:d}=s.options,{layoutDependency:p}=r.options;(d===void 0||d!==p)&&(r.resumeFrom=s,i&&(s.preserveOpacity=!0),s.snapshot&&(r.snapshot=s.snapshot,r.snapshot.latestValues=s.animationValues||s.latestValues),(l=r.root)!=null&&l.isUpdating&&(r.isLayoutDirty=!0)),r.options.crossfade===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(r=>{var i,s,l,d,p;(s=(i=r.options).onExitComplete)==null||s.call(i),(p=(l=r.resumingFrom)==null?void 0:(d=l.options).onExitComplete)==null||p.call(d)})}scheduleRender(){this.members.forEach(r=>r.instance&&r.scheduleRender(!1))}removeLeadSnapshot(){var r;(r=this.lead)!=null&&r.snapshot&&(this.lead.snapshot=void 0)}}const Us={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Du=["","X","Y","Z"],ly=1e3;let uy=0;function Vu(e,r,i,s){const{latestValues:l}=r;l[e]&&(i[e]=l[e],r.setStaticValue(e,0),s&&(s[e]=0))}function C3(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:r}=e.options;if(!r)return;const i=_h(r);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:l,layoutId:d}=e.options;window.MotionCancelOptimisedAnimation(i,"transform",Me,!(l||d))}const{parent:s}=e;s&&!s.hasCheckedOptimisedAppear&&C3(s)}function w3({attachResizeListener:e,defaultParent:r,measureScroll:i,checkIsScrollRoot:s,resetTransform:l}){return class{constructor(p={},h=r==null?void 0:r()){this.id=uy++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(fy),this.nodes.forEach(vy),this.nodes.forEach(xy),this.nodes.forEach(py)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=p,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let m=0;m<this.path.length;m++)this.path[m].shouldResetTransform=!0;this.root===this&&(this.nodes=new oy)}addEventListener(p,h){return this.eventHandlers.has(p)||this.eventHandlers.set(p,new qc),this.eventHandlers.get(p).add(h)}notifyListeners(p,...h){const m=this.eventHandlers.get(p);m&&m.notify(...h)}hasListeners(p){return this.eventHandlers.has(p)}mount(p){if(this.instance)return;this.isSVG=m1(p)&&!dg(p),this.instance=p;const{layoutId:h,layout:m,visualElement:v}=this.options;if(v&&!v.current&&v.mount(p),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(m||h)&&(this.isLayoutDirty=!0),e){let y,x=0;const C=()=>this.root.updateBlockedByResize=!1;Me.read(()=>{x=window.innerWidth}),e(p,()=>{const b=window.innerWidth;b!==x&&(x=b,this.root.updateBlockedByResize=!0,y&&y(),y=sy(C,250),Us.hasAnimatedSinceResize&&(Us.hasAnimatedSinceResize=!1,this.nodes.forEach(I0)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&v&&(h||m)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:x,hasRelativeLayoutChanged:C,layout:b})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const j=this.options.transition||v.getDefaultTransition()||jy,{onLayoutAnimationStart:L,onLayoutAnimationComplete:P}=v.getProps(),D=!this.targetLayout||!v3(this.targetLayout,b),A=!x&&C;if(this.options.layoutRoot||this.resumeFrom||A||x&&(D||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const F={...l1(j,"layout"),onPlay:L,onComplete:P};(v.shouldReduceMotion||this.options.layoutRoot)&&(F.delay=0,F.type=!1),this.startAnimation(F),this.setAnimationOrigin(y,A,F.path)}else x||I0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=b})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const p=this.getStack();p&&p.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Fn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Cy),this.animationId++)}getTransformTemplate(){const{visualElement:p}=this.options;return p&&p.getProps().transformTemplate}willUpdate(p=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&C3(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const x=this.path[y];x.shouldResetTransform=!0,(typeof x.latestValues.x=="string"||typeof x.latestValues.y=="string")&&(x.isLayoutDirty=!0),x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:h,layout:m}=this.options;if(h===void 0&&!m)return;const v=this.getTransformTemplate();this.prevTransformTemplateValue=v?v(this.latestValues,""):void 0,this.updateSnapshot(),p&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const m=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),m&&this.nodes.forEach(my),this.nodes.forEach(D0);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(V0);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(gy),this.nodes.forEach(yy),this.nodes.forEach(cy),this.nodes.forEach(dy)):this.nodes.forEach(V0),this.clearAllSnapshots();const h=dt.now();rt.delta=Jt(0,1e3/60,h-rt.timestamp),rt.timestamp=h,rt.isProcessing=!0,Eu.update.process(rt),Eu.preRender.process(rt),Eu.render.process(rt),rt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,p1.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(hy),this.sharedNodes.forEach(wy)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Me.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Me.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ft(this.snapshot.measuredBox.x)&&!ft(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let m=0;m<this.path.length;m++)this.path[m].updateScroll();const p=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=Ye()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,p?p.layoutBox:void 0)}updateScroll(p="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===p&&(h=!1),h&&this.instance){const m=s(this.instance);this.scroll={animationId:this.root.animationId,phase:p,isRoot:m,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:m}}}resetTransform(){if(!l)return;const p=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!y3(this.projectionDelta),m=this.getTransformTemplate(),v=m?m(this.latestValues,""):void 0,y=v!==this.prevTransformTemplateValue;p&&this.instance&&(h||er(this.latestValues)||y)&&(l(this.instance,v),this.shouldResetTransform=!1,this.scheduleRender())}measure(p=!0){const h=this.measurePageBox();let m=this.removeElementScroll(h);return p&&(m=this.removeTransform(m)),by(m),{animationId:this.root.animationId,measuredBox:h,layoutBox:m,latestValues:{},source:this.id}}measurePageBox(){var v;const{visualElement:p}=this.options;if(!p)return Ye();const h=p.measureViewportBox();if(!(((v=this.scroll)==null?void 0:v.wasRoot)||this.path.some(Ty))){const{scroll:y}=this.root;y&&(Xt(h.x,y.offset.x),Xt(h.y,y.offset.y))}return h}removeElementScroll(p){var m;const h=Ye();if(zt(h,p),(m=this.scroll)!=null&&m.wasRoot)return h;for(let v=0;v<this.path.length;v++){const y=this.path[v],{scroll:x,options:C}=y;y!==this.root&&x&&C.layoutScroll&&(x.wasRoot&&zt(h,p),Xt(h.x,x.offset.x),Xt(h.y,x.offset.y))}return h}applyTransform(p,h=!1,m){var y,x;const v=m||Ye();zt(v,p);for(let C=0;C<this.path.length;C++){const b=this.path[C];!h&&b.options.layoutScroll&&b.scroll&&b!==b.root&&(Xt(v.x,-b.scroll.offset.x),Xt(v.y,-b.scroll.offset.y)),er(b.latestValues)&&_s(v,b.latestValues,(y=b.layout)==null?void 0:y.layoutBox)}return er(this.latestValues)&&_s(v,this.latestValues,(x=this.layout)==null?void 0:x.layoutBox),v}removeTransform(p){var m;const h=Ye();zt(h,p);for(let v=0;v<this.path.length;v++){const y=this.path[v];if(!er(y.latestValues))continue;let x;y.instance&&($c(y.latestValues)&&y.updateSnapshot(),x=Ye(),zt(x,y.measurePageBox())),T0(h,y.latestValues,(m=y.snapshot)==null?void 0:m.layoutBox,x)}return er(this.latestValues)&&T0(h,this.latestValues),h}setTargetDelta(p){this.targetDelta=p,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(p){this.options={...this.options,...p,crossfade:p.crossfade!==void 0?p.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==rt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(p=!1){var b;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const m=!!this.resumingFrom||this!==h;if(!(p||m&&this.isSharedProjectionDirty||this.isProjectionDirty||(b=this.parent)!=null&&b.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:x}=this.options;if(!this.layout||!(y||x))return;this.resolvedRelativeTargetAt=rt.timestamp;const C=this.getClosestProjectingParent();C&&this.linkedParentVersion!==C.layoutVersion&&!C.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&C&&C.layout?this.createRelativeTarget(C,this.layout.layoutBox,C.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Ye(),this.targetWithTransforms=Ye()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Kg(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):zt(this.target,this.layout.layoutBox),o3(this.target,this.targetDelta)):zt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&C&&!!C.resumingFrom==!!this.resumingFrom&&!C.options.layoutScroll&&C.target&&this.animationProgress!==1?this.createRelativeTarget(C,this.target,C.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||$c(this.parent.latestValues)||i3(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(p,h,m){this.relativeParent=p,this.linkedParentVersion=p.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ye(),this.relativeTargetOrigin=Ye(),na(this.relativeTargetOrigin,h,m,this.options.layoutAnchor||void 0),zt(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var j;const p=this.getLead(),h=!!this.resumingFrom||this!==p;let m=!0;if((this.isProjectionDirty||(j=this.parent)!=null&&j.isProjectionDirty)&&(m=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(m=!1),this.resolvedRelativeTargetAt===rt.timestamp&&(m=!1),m)return;const{layout:v,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(v||y))return;zt(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,C=this.treeScale.y;Sg(this.layoutCorrected,this.treeScale,this.path,h),p.layout&&!p.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(p.target=p.layout.layoutBox,p.targetWithTransforms=Ye());const{target:b}=p;if(!b){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(C0(this.prevProjectionDelta.x,this.projectionDelta.x),C0(this.prevProjectionDelta.y,this.projectionDelta.y)),Xi(this.projectionDelta,this.layoutCorrected,b,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==C||!M0(this.projectionDelta.x,this.prevProjectionDelta.x)||!M0(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",b))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(p=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),p){const m=this.getStack();m&&m.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=zr(),this.projectionDelta=zr(),this.projectionDeltaWithTransform=zr()}setAnimationOrigin(p,h=!1,m){const v=this.snapshot,y=v?v.latestValues:{},x={...this.latestValues},C=zr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const b=Ye(),j=v?v.source:void 0,L=this.layout?this.layout.source:void 0,P=j!==L,D=this.getStack(),A=!D||D.members.length<=1,F=!!(P&&!A&&this.options.crossfade===!0&&!this.path.some(ky));this.animationProgress=0;let N;const W=m==null?void 0:m.interpolateProjection(p);this.mixTargetDelta=q=>{const V=q/1e3,B=W==null?void 0:W(V);B?(C.x.translate=B.x,C.x.scale=Re(p.x.scale,1,V),C.x.origin=p.x.origin,C.x.originPoint=p.x.originPoint,C.y.translate=B.y,C.y.scale=Re(p.y.scale,1,V),C.y.origin=p.y.origin,C.y.originPoint=p.y.originPoint):(F0(C.x,p.x,V),F0(C.y,p.y,V)),this.setTargetDelta(C),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(na(b,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),Sy(this.relativeTarget,this.relativeTargetOrigin,b,V),N&&Xg(this.relativeTarget,N)&&(this.isProjectionDirty=!1),N||(N=Ye()),zt(N,this.relativeTarget)),P&&(this.animationValues=x,ey(x,y,this.latestValues,V,F,A)),B&&B.rotate!==void 0&&(this.animationValues||(this.animationValues=x),this.animationValues.pathRotation=B.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=V},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(p){var h,m,v;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(v=(m=this.resumingFrom)==null?void 0:m.currentAnimation)==null||v.stop(),this.pendingAnimation&&(Fn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Me.update(()=>{Us.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Zr(0)),this.motionValue.jump(0,!1),this.currentAnimation=ry(this.motionValue,[0,1e3],{...p,velocity:0,isSync:!0,onUpdate:y=>{this.mixTargetDelta(y),p.onUpdate&&p.onUpdate(y)},onComplete:()=>{p.onComplete&&p.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const p=this.getStack();p&&p.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(ly),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const p=this.getLead();let{targetWithTransforms:h,target:m,layout:v,latestValues:y}=p;if(!(!h||!m||!v)){if(this!==p&&this.layout&&v&&S3(this.options.animationType,this.layout.layoutBox,v.layoutBox)){m=this.target||Ye();const x=ft(this.layout.layoutBox.x);m.x.min=p.target.x.min,m.x.max=m.x.min+x;const C=ft(this.layout.layoutBox.y);m.y.min=p.target.y.min,m.y.max=m.y.min+C}zt(h,m),_s(h,y),Xi(this.projectionDeltaWithTransform,this.layoutCorrected,h,y)}}registerSharedNode(p,h){this.sharedNodes.has(p)||this.sharedNodes.set(p,new ay),this.sharedNodes.get(p).add(h);const v=h.options.initialPromotionConfig;h.promote({transition:v?v.transition:void 0,preserveFollowOpacity:v&&v.shouldPreserveFollowOpacity?v.shouldPreserveFollowOpacity(h):void 0})}isLead(){const p=this.getStack();return p?p.lead===this:!0}getLead(){var h;const{layoutId:p}=this.options;return p?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:p}=this.options;return p?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:p}=this.options;if(p)return this.root.sharedNodes.get(p)}promote({needsReset:p,transition:h,preserveFollowOpacity:m}={}){const v=this.getStack();v&&v.promote(this,m),p&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const p=this.getStack();return p?p.relegate(this):!1}resetSkewAndRotation(){const{visualElement:p}=this.options;if(!p)return;let h=!1;const{latestValues:m}=p;if((m.z||m.rotate||m.rotateX||m.rotateY||m.rotateZ||m.skewX||m.skewY)&&(h=!0),!h)return;const v={};m.z&&Vu("z",p,v,this.animationValues);for(let y=0;y<Du.length;y++)Vu(`rotate${Du[y]}`,p,v,this.animationValues),Vu(`skew${Du[y]}`,p,v,this.animationValues);p.render();for(const y in v)p.setStaticValue(y,v[y]),this.animationValues&&(this.animationValues[y]=v[y]);p.scheduleRender()}applyProjectionStyles(p,h){if(!this.instance||this.isSVG)return;if(!this.isVisible){p.visibility="hidden";return}const m=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,p.visibility="",p.opacity="",p.pointerEvents=Hs(h==null?void 0:h.pointerEvents)||"",p.transform=m?m(this.latestValues,""):"none";return}const v=this.getLead();if(!this.projectionDelta||!this.layout||!v.target){this.options.layoutId&&(p.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,p.pointerEvents=Hs(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!er(this.latestValues)&&(p.transform=m?m({},""):"none",this.hasProjected=!1);return}p.visibility="";const y=v.animationValues||v.latestValues;this.applyTransformsToTarget();let x=qg(this.projectionDeltaWithTransform,this.treeScale,y);m&&(x=m(y,x)),p.transform=x;const{x:C,y:b}=this.projectionDelta;p.transformOrigin=`${C.origin*100}% ${b.origin*100}% 0`,v.animationValues?p.opacity=v===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:p.opacity=v===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const j in Vc){if(y[j]===void 0)continue;const{correct:L,applyTo:P,isCSSVariable:D}=Vc[j],A=x==="none"?y[j]:L(y[j],v);if(P){const F=P.length;for(let N=0;N<F;N++)p[P[N]]=A}else D?this.options.visualElement.renderState.vars[j]=A:p[j]=A}this.options.layoutId&&(p.pointerEvents=v===this?Hs(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(p=>{var h;return(h=p.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(D0),this.root.sharedNodes.clear()}}}function cy(e){e.updateLayout()}function dy(e){var i;const r=((i=e.resumeFrom)==null?void 0:i.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&r&&e.hasListeners("didUpdate")){const{layoutBox:s,measuredBox:l}=e.layout,{animationType:d}=e.options,p=r.source!==e.layout.source;if(d==="size")Qt(x=>{const C=p?r.measuredBox[x]:r.layoutBox[x],b=ft(C);C.min=s[x].min,C.max=C.min+b});else if(d==="x"||d==="y"){const x=d==="x"?"y":"x";Ic(p?r.measuredBox[x]:r.layoutBox[x],s[x])}else S3(d,r.layoutBox,s)&&Qt(x=>{const C=p?r.measuredBox[x]:r.layoutBox[x],b=ft(s[x]);C.max=C.min+b,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[x].max=e.relativeTarget[x].min+b)});const h=zr();Xi(h,s,r.layoutBox);const m=zr();p?Xi(m,e.applyTransform(l,!0),r.measuredBox):Xi(m,s,r.layoutBox);const v=!y3(h);let y=!1;if(!e.resumeFrom){const x=e.getClosestProjectingParent();if(x&&!x.resumeFrom){const{snapshot:C,layout:b}=x;if(C&&b){const j=e.options.layoutAnchor||void 0,L=Ye();na(L,r.layoutBox,C.layoutBox,j);const P=Ye();na(P,s,b.layoutBox,j),v3(L,P)||(y=!0),x.options.layoutRoot&&(e.relativeTarget=P,e.relativeTargetOrigin=L,e.relativeParent=x)}}}e.notifyListeners("didUpdate",{layout:s,snapshot:r,delta:m,layoutDelta:h,hasLayoutChanged:v,hasRelativeLayoutChanged:y})}else if(e.isLead()){const{onExitComplete:s}=e.options;s&&s()}e.options.transition=void 0}function fy(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function py(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function hy(e){e.clearSnapshot()}function D0(e){e.clearMeasurements()}function my(e){e.isLayoutDirty=!0,e.updateLayout()}function V0(e){e.isLayoutDirty=!1}function gy(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function yy(e){const{visualElement:r}=e.options;r&&r.getProps().onBeforeLayoutMeasure&&r.notify("BeforeLayoutMeasure"),e.resetTransform()}function I0(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function vy(e){e.resolveTargetDelta()}function xy(e){e.calcProjection()}function Cy(e){e.resetSkewAndRotation()}function wy(e){e.removeLeadSnapshot()}function F0(e,r,i){e.translate=Re(r.translate,0,i),e.scale=Re(r.scale,1,i),e.origin=r.origin,e.originPoint=r.originPoint}function N0(e,r,i,s){e.min=Re(r.min,i.min,s),e.max=Re(r.max,i.max,s)}function Sy(e,r,i,s){N0(e.x,r.x,i.x,s),N0(e.y,r.y,i.y,s)}function ky(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const jy={duration:.45,ease:[.4,0,.1,1]},z0=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),O0=z0("applewebkit/")&&!z0("chrome/")?Math.round:Mt;function _0(e){e.min=O0(e.min),e.max=O0(e.max)}function by(e){_0(e.x),_0(e.y)}function S3(e,r,i){return e==="position"||e==="preserve-aspect"&&!Zg(R0(r),R0(i),.2)}function Ty(e){var r;return e!==e.root&&((r=e.scroll)==null?void 0:r.wasRoot)}const Ey=w3({attachResizeListener:(e,r)=>io(e,"resize",r),measureScroll:()=>{var e,r;return{x:document.documentElement.scrollLeft||((e=document.body)==null?void 0:e.scrollLeft)||0,y:document.documentElement.scrollTop||((r=document.body)==null?void 0:r.scrollTop)||0}},checkIsScrollRoot:()=>!0}),Iu={current:void 0},k3=w3({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Iu.current){const e=new Ey({});e.mount(window),e.setOptions({layoutScroll:!0}),Iu.current=e}return Iu.current},resetTransform:(e,r)=>{e.style.transform=r!==void 0?r:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),C1=_.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function H0(e,r){if(typeof e=="function")return e(r);e!=null&&(e.current=r)}function Ly(...e){return r=>{let i=!1;const s=e.map(l=>{const d=H0(l,r);return!i&&typeof d=="function"&&(i=!0),d});if(i)return()=>{for(let l=0;l<s.length;l++){const d=s[l];typeof d=="function"?d():H0(e[l],null)}}}}function Py(...e){return _.useCallback(Ly(...e),e)}class Ry extends _.Component{getSnapshotBeforeUpdate(r){const i=this.props.childRef.current;if(Fs(i)&&r.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const s=i.offsetParent,l=Fs(s)&&s.offsetWidth||0,d=Fs(s)&&s.offsetHeight||0,p=getComputedStyle(i),h=this.props.sizeRef.current;h.height=parseFloat(p.height),h.width=parseFloat(p.width),h.top=i.offsetTop,h.left=i.offsetLeft,h.right=l-h.width-h.left,h.bottom=d-h.height-h.top,h.direction=p.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function My({children:e,isPresent:r,anchorX:i,anchorY:s,root:l,pop:d}){var C;const p=_.useId(),h=_.useRef(null),m=_.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:v}=_.useContext(C1),y=d!==!1?((C=e.props)==null?void 0:C.ref)??(e==null?void 0:e.ref):void 0,x=Py(h,y);return _.useInsertionEffect(()=>{const{width:b,height:j,top:L,left:P,right:D,bottom:A,direction:F}=m.current;if(r||d===!1||!h.current||!b||!j)return;const N=F==="rtl",W=i==="left"?N?`right: ${D}`:`left: ${P}`:N?`left: ${P}`:`right: ${D}`,q=s==="bottom"?`bottom: ${A}`:`top: ${L}`;h.current.dataset.motionPopId=p;const V=document.createElement("style");v&&(V.nonce=v);const B=l??document.head;return B.appendChild(V),V.sheet&&V.sheet.insertRule(`
          [data-motion-pop-id="${p}"] {
            position: absolute !important;
            width: ${b}px !important;
            height: ${j}px !important;
            ${W}px !important;
            ${q}px !important;
          }
        `),()=>{var Q;(Q=h.current)==null||Q.removeAttribute("data-motion-pop-id"),B.contains(V)&&B.removeChild(V)}},[r]),c.jsx(Ry,{isPresent:r,childRef:h,sizeRef:m,pop:d,children:d===!1?e:_.cloneElement(e,{ref:x})})}const Ay=({children:e,initial:r,isPresent:i,onExitComplete:s,custom:l,presenceAffectsLayout:d,mode:p,anchorX:h,anchorY:m,root:v})=>{const y=Yc(By),x=_.useId(),C=_.useRef(i),b=_.useRef(s);Qc(()=>{C.current=i,b.current=s});let j=!0,L=_.useMemo(()=>(j=!1,{id:x,initial:r,isPresent:i,custom:l,onExitComplete:P=>{y.set(P,!0);for(const D of y.values())if(!D)return;s&&s()},register:P=>(y.set(P,!1),()=>{var D;y.delete(P),!C.current&&!y.size&&((D=b.current)==null||D.call(b))})}),[i,y,s]);return d&&j&&(L={...L}),_.useMemo(()=>{y.forEach((P,D)=>y.set(D,!1))},[i]),_.useEffect(()=>{!i&&!y.size&&s&&s()},[i]),e=c.jsx(My,{pop:p==="popLayout",isPresent:i,anchorX:h,anchorY:m,root:v,children:e}),c.jsx(pa.Provider,{value:L,children:e})};function By(){return new Map}function j3(e=!0){const r=_.useContext(pa);if(r===null)return[!0,null];const{isPresent:i,onExitComplete:s,register:l}=r,d=_.useId();_.useEffect(()=>{if(e)return l(d)},[e]);const p=_.useCallback(()=>e&&s&&s(d),[d,s,e]);return!i&&s?[!1,p]:[!0]}const bs=e=>e.key||"";function U0(e){const r=[];return _.Children.forEach(e,i=>{_.isValidElement(i)&&r.push(i)}),r}const $y=({children:e,custom:r,initial:i=!0,onExitComplete:s,presenceAffectsLayout:l=!0,mode:d="sync",propagate:p=!1,anchorX:h="left",anchorY:m="top",root:v})=>{const[y,x]=j3(p),C=_.useMemo(()=>U0(e),[e]),b=p&&!y?[]:C.map(bs),j=_.useRef(!0),L=_.useRef(C),P=Yc(()=>new Map),D=_.useRef(new Set),[A,F]=_.useState(C),[N,W]=_.useState(C);Qc(()=>{j.current=!1,L.current=C;for(let B=0;B<N.length;B++){const Q=bs(N[B]);b.includes(Q)?(P.delete(Q),D.current.delete(Q)):P.get(Q)!==!0&&P.set(Q,!1)}},[N,b.length,b.join("-")]);const q=[];if(C!==A){let B=[...C];for(let Q=0;Q<N.length;Q++){const G=N[Q],ae=bs(G);b.includes(ae)||(B.splice(Q,0,G),q.push(G))}return d==="wait"&&q.length&&(B=q),W(U0(B)),F(C),null}const{forceRender:V}=_.useContext(Gc);return c.jsx(c.Fragment,{children:N.map(B=>{const Q=bs(B),G=p&&!y?!1:C===N||b.includes(Q),ae=()=>{if(D.current.has(Q))return;if(P.has(Q))D.current.add(Q),P.set(Q,!0);else return;let he=!0;P.forEach(ue=>{ue||(he=!1)}),he&&(V==null||V(),W(L.current),p&&(x==null||x()),s&&s())};return c.jsx(Ay,{isPresent:G,initial:!j.current||i?void 0:!1,custom:r,presenceAffectsLayout:l,mode:d,root:v,onExitComplete:G?void 0:ae,anchorX:h,anchorY:m,children:B},Q)})})},b3=_.createContext({strict:!1}),W0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Z0=!1;function Dy(){if(Z0)return;const e={};for(const r in W0)e[r]={isEnabled:i=>W0[r].some(s=>!!i[s])};t3(e),Z0=!0}function T3(){return Dy(),vg()}function Vy(e){const r=T3();for(const i in e)r[i]={...r[i],...e[i]};t3(r)}const Iy=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function ra(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||Iy.has(e)}let E3=e=>!ra(e);function Fy(e){typeof e=="function"&&(E3=r=>r.startsWith("on")?!ra(r):e(r))}try{Fy(require("@emotion/is-prop-valid").default)}catch{}function Ny(e,r,i){const s={};for(const l in e)l==="values"&&typeof e.values=="object"||it(e[l])||(E3(l)||i===!0&&ra(l)||!r&&!ra(l)||e.draggable&&l.startsWith("onDrag"))&&(s[l]=e[l]);return s}const va=_.createContext({});function zy(e,r){if(ya(e)){const{initial:i,animate:s}=e;return{initial:i===!1||ro(i)?i:void 0,animate:ro(s)?s:void 0}}return e.inherit!==!1?r:{}}function Oy(e){const{initial:r,animate:i}=zy(e,_.useContext(va));return _.useMemo(()=>({initial:r,animate:i}),[K0(r),K0(i)])}function K0(e){return Array.isArray(e)?e.join(" "):e}const w1=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function L3(e,r,i){for(const s in r)!it(r[s])&&!l3(s,i)&&(e[s]=r[s])}function _y({transformTemplate:e},r){return _.useMemo(()=>{const i=w1();return v1(i,r,e),Object.assign({},i.vars,i.style)},[r])}function Hy(e,r){const i=e.style||{},s={};return L3(s,i,e),Object.assign(s,_y(e,r)),s}function Uy(e,r){const i={},s=Hy(e,r);return e.drag&&e.dragListener!==!1&&(i.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(i.tabIndex=0),i.style=s,i}const P3=()=>({...w1(),attrs:{}});function Wy(e,r,i,s){const l=_.useMemo(()=>{const d=P3();return u3(d,r,d3(s),e.transformTemplate,e.style),{...d.attrs,style:{...d.style}}},[r]);if(e.style){const d={};L3(d,e.style,e),l.style={...d,...l.style}}return l}const Zy=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function S1(e){return typeof e!="string"||e.includes("-")?!1:!!(Zy.indexOf(e)>-1||/[A-Z]/u.test(e))}function Ky(e,r,i,{latestValues:s},l,d=!1,p){const m=(p??S1(e)?Wy:Uy)(r,s,l,e),v=Ny(r,typeof e=="string",d),y=e!==_.Fragment?{...v,...m,ref:i}:{},{children:x}=r,C=_.useMemo(()=>it(x)?x.get():x,[x]);return _.createElement(e,{...y,children:C})}function Gy({scrapeMotionValuesFromProps:e,createRenderState:r},i,s,l){return{latestValues:Yy(i,s,l,e),renderState:r()}}function Yy(e,r,i,s){const l={},d=s(e,{});for(const C in d)l[C]=Hs(d[C]);let{initial:p,animate:h}=e;const m=ya(e),v=Jh(e);r&&v&&!m&&e.inherit!==!1&&(p===void 0&&(p=r.initial),h===void 0&&(h=r.animate));let y=i?i.initial===!1:!1;y=y||p===!1;const x=y?h:p;if(x&&typeof x!="boolean"&&!ga(x)){const C=Array.isArray(x)?x:[x];for(let b=0;b<C.length;b++){const j=c1(e,C[b]);if(j){const{transitionEnd:L,transition:P,...D}=j;for(const A in D){let F=D[A];if(Array.isArray(F)){const N=y?F.length-1:0;F=F[N]}F!==null&&(l[A]=F)}for(const A in L)l[A]=L[A]}}}return l}const R3=e=>(r,i)=>{const s=_.useContext(va),l=_.useContext(pa),d=()=>Gy(e,r,s,l);return i?d():Yc(d)},Qy=R3({scrapeMotionValuesFromProps:x1,createRenderState:w1}),Xy=R3({scrapeMotionValuesFromProps:f3,createRenderState:P3}),qy=Symbol.for("motionComponentSymbol");function Jy(e,r,i){const s=_.useRef(i);_.useInsertionEffect(()=>{s.current=i});const l=_.useRef(null);return _.useCallback(d=>{var h;d&&((h=e.onMount)==null||h.call(e,d)),r&&(d?r.mount(d):r.unmount());const p=s.current;if(typeof p=="function")if(d){const m=p(d);typeof m=="function"&&(l.current=m)}else l.current?(l.current(),l.current=null):p(d);else p&&(p.current=d)},[r])}const M3=_.createContext({});function Ir(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function ev(e,r,i,s,l,d){var F,N;const{visualElement:p}=_.useContext(va),h=_.useContext(b3),m=_.useContext(pa),v=_.useContext(C1),y=v.reducedMotion,x=v.skipAnimations,C=_.useRef(null),b=_.useRef(!1);s=s||h.renderer,!C.current&&s&&(C.current=s(e,{visualState:r,parent:p,props:i,presenceContext:m,blockInitialAnimation:m?m.initial===!1:!1,reducedMotionConfig:y,skipAnimations:x,isSVG:d}),b.current&&C.current&&(C.current.manuallyAnimateOnMount=!0));const j=C.current,L=_.useContext(M3);j&&!j.projection&&l&&(j.type==="html"||j.type==="svg")&&tv(C.current,i,l,L);const P=_.useRef(!1);_.useInsertionEffect(()=>{j&&P.current&&j.update(i,m)});const D=i[Oh],A=_.useRef(!!D&&typeof window<"u"&&!((F=window.MotionHandoffIsComplete)!=null&&F.call(window,D))&&((N=window.MotionHasOptimisedAnimation)==null?void 0:N.call(window,D)));return Qc(()=>{b.current=!0,j&&(P.current=!0,window.MotionIsMounted=!0,j.updateFeatures(),j.scheduleRenderMicrotask(),A.current&&j.animationState&&j.animationState.animateChanges())}),_.useEffect(()=>{j&&(!A.current&&j.animationState&&j.animationState.animateChanges(),A.current&&(queueMicrotask(()=>{var W;(W=window.MotionHandoffMarkAsComplete)==null||W.call(window,D)}),A.current=!1),j.enteringChildren=void 0)}),j}function tv(e,r,i,s){const{layoutId:l,layout:d,drag:p,dragConstraints:h,layoutScroll:m,layoutRoot:v,layoutAnchor:y,layoutCrossfade:x}=r;e.projection=new i(e.latestValues,r["data-framer-portal-id"]?void 0:A3(e.parent)),e.projection.setOptions({layoutId:l,layout:d,alwaysMeasureLayout:!!p||h&&Ir(h),visualElement:e,animationType:typeof d=="string"?d:"both",initialPromotionConfig:s,crossfade:x,layoutScroll:m,layoutRoot:v,layoutAnchor:y})}function A3(e){if(e)return e.options.allowProjection!==!1?e.projection:A3(e.parent)}function Fu(e,{forwardMotionProps:r=!1,type:i}={},s,l){s&&Vy(s);const d=i?i==="svg":S1(e),p=d?Xy:Qy;function h(v,y){let x;const C={..._.useContext(C1),...v,layoutId:nv(v)},{isStatic:b}=C,j=Oy(v),L=p(v,b);if(!b&&typeof window<"u"){rv();const P=iv(C);x=P.MeasureLayout,j.visualElement=ev(e,L,C,l,P.ProjectionNode,d)}return c.jsxs(va.Provider,{value:j,children:[x&&j.visualElement?c.jsx(x,{visualElement:j.visualElement,...C}):null,Ky(e,v,Jy(L,j.visualElement,y),L,b,r,d)]})}h.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const m=_.forwardRef(h);return m[qy]=e,m}function nv({layoutId:e}){const r=_.useContext(Gc).id;return r&&e!==void 0?r+"-"+e:e}function rv(e,r){_.useContext(b3).strict}function iv(e){const r=T3(),{drag:i,layout:s}=r;if(!i&&!s)return{};const l={...i,...s};return{MeasureLayout:i!=null&&i.isEnabled(e)||s!=null&&s.isEnabled(e)?l.MeasureLayout:void 0,ProjectionNode:l.ProjectionNode}}function ov(e,r){if(typeof Proxy>"u")return Fu;const i=new Map,s=(d,p)=>Fu(d,p,e,r),l=(d,p)=>s(d,p);return new Proxy(l,{get:(d,p)=>p==="create"?s:(i.has(p)||i.set(p,Fu(p,void 0,e,r)),i.get(p))})}const sv=(e,r)=>r.isSVG??S1(e)?new Dg(r):new Pg(r,{allowProjection:e!==_.Fragment});class av extends Nn{constructor(r){super(r),r.animationState||(r.animationState=zg(r))}updateAnimationControlsSubscription(){const{animate:r}=this.node.getProps();ga(r)&&(this.unmountControls=r.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:r}=this.node.getProps(),{animate:i}=this.node.prevProps||{};r!==i&&this.updateAnimationControlsSubscription()}unmount(){var r;this.node.animationState.reset(),(r=this.unmountControls)==null||r.call(this)}}let lv=0;class uv extends Nn{constructor(){super(...arguments),this.id=lv++,this.isExitComplete=!1}update(){var d;if(!this.node.presenceContext)return;const{isPresent:r,onExitComplete:i}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||r===s)return;if(r&&s===!1){if(this.isExitComplete){const{initial:p,custom:h}=this.node.getProps();if(typeof p=="string"||typeof p=="object"&&p!==null&&!Array.isArray(p)){const m=lr(this.node,p,h);if(m){const{transition:v,transitionEnd:y,...x}=m;for(const C in x)(d=this.node.getValue(C))==null||d.jump(x[C])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const l=this.node.animationState.setActive("exit",!r);i&&!r&&l.then(()=>{this.isExitComplete=!0,i(this.id)})}mount(){const{register:r,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),r&&(this.unmount=r(this.id))}unmount(){}}const cv={animation:{Feature:av},exit:{Feature:uv}};function uo(e){return{point:{x:e.pageX,y:e.pageY}}}const dv=e=>r=>h1(r)&&e(r,uo(r));function qi(e,r,i,s){return io(e,r,dv(i),s)}const B3=({current:e})=>e?e.ownerDocument.defaultView:null,G0=(e,r)=>Math.abs(e-r);function fv(e,r){const i=G0(e.x,r.x),s=G0(e.y,r.y);return Math.sqrt(i**2+s**2)}const Y0=new Set(["auto","scroll"]);class $3{constructor(r,i,{transformPagePoint:s,contextWindow:l=window,dragSnapToOrigin:d=!1,distanceThreshold:p=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=j=>{this.handleScroll(j.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Ts(this.lastRawMoveEventInfo,this.transformPagePoint));const j=Nu(this.lastMoveEventInfo,this.history),L=this.startEvent!==null,P=fv(j.offset,{x:0,y:0})>=this.distanceThreshold;if(!L&&!P)return;const{point:D}=j,{timestamp:A}=rt;this.history.push({...D,timestamp:A});const{onStart:F,onMove:N}=this.handlers;L||(F&&F(this.lastMoveEvent,j),this.startEvent=this.lastMoveEvent),N&&N(this.lastMoveEvent,j)},this.handlePointerMove=(j,L)=>{this.lastMoveEvent=j,this.lastRawMoveEventInfo=L,this.lastMoveEventInfo=Ts(L,this.transformPagePoint),Me.update(this.updatePoint,!0)},this.handlePointerUp=(j,L)=>{this.end();const{onEnd:P,onSessionEnd:D,resumeAnimation:A}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&A&&A(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const F=Nu(j.type==="pointercancel"?this.lastMoveEventInfo:Ts(L,this.transformPagePoint),this.history);this.startEvent&&P&&P(j,F),D&&D(j,F)},!h1(r))return;this.dragSnapToOrigin=d,this.handlers=i,this.transformPagePoint=s,this.distanceThreshold=p,this.contextWindow=l||window;const m=uo(r),v=Ts(m,this.transformPagePoint),{point:y}=v,{timestamp:x}=rt;this.history=[{...y,timestamp:x}];const{onSessionStart:C}=i;C&&C(r,Nu(v,this.history));const b={passive:!0,capture:!0};this.removeListeners=so(qi(this.contextWindow,"pointermove",this.handlePointerMove,b),qi(this.contextWindow,"pointerup",this.handlePointerUp,b),qi(this.contextWindow,"pointercancel",this.handlePointerUp,b)),h&&this.startScrollTracking(h)}startScrollTracking(r){let i=r.parentElement;for(;i;){const s=getComputedStyle(i);(Y0.has(s.overflowX)||Y0.has(s.overflowY))&&this.scrollPositions.set(i,{x:i.scrollLeft,y:i.scrollTop}),i=i.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(r){const i=this.scrollPositions.get(r);if(!i)return;const s=r===window,l=s?{x:window.scrollX,y:window.scrollY}:{x:r.scrollLeft,y:r.scrollTop},d={x:l.x-i.x,y:l.y-i.y};d.x===0&&d.y===0||(s?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=d.x,this.lastMoveEventInfo.point.y+=d.y):this.history.length>0&&(this.history[0].x-=d.x,this.history[0].y-=d.y),this.scrollPositions.set(r,l),Me.update(this.updatePoint,!0))}updateHandlers(r){this.handlers=r}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Fn(this.updatePoint)}}function Ts(e,r){return r?{point:r(e.point)}:e}function Q0(e,r){return{x:e.x-r.x,y:e.y-r.y}}function Nu({point:e},r){return{point:e,delta:Q0(e,D3(r)),offset:Q0(e,pv(r)),velocity:hv(r,.1)}}function pv(e){return e[0]}function D3(e){return e[e.length-1]}function hv(e,r){if(e.length<2)return{x:0,y:0};let i=e.length-1,s=null;const l=D3(e);for(;i>=0&&(s=e[i],!(l.timestamp-s.timestamp>kt(r)));)i--;if(!s)return{x:0,y:0};s===e[0]&&e.length>2&&l.timestamp-s.timestamp>kt(r)*2&&(s=e[1]);const d=Rt(l.timestamp-s.timestamp);if(d===0)return{x:0,y:0};const p={x:(l.x-s.x)/d,y:(l.y-s.y)/d};return p.x===1/0&&(p.x=0),p.y===1/0&&(p.y=0),p}function mv(e,{min:r,max:i},s){return r!==void 0&&e<r?e=s?Re(r,e,s.min):Math.max(e,r):i!==void 0&&e>i&&(e=s?Re(i,e,s.max):Math.min(e,i)),e}function X0(e,r,i){return{min:r!==void 0?e.min+r:void 0,max:i!==void 0?e.max+i-(e.max-e.min):void 0}}function gv(e,{top:r,left:i,bottom:s,right:l}){return{x:X0(e.x,i,l),y:X0(e.y,r,s)}}function q0(e,r){let i=r.min-e.min,s=r.max-e.max;return r.max-r.min<e.max-e.min&&([i,s]=[s,i]),{min:i,max:s}}function yv(e,r){return{x:q0(e.x,r.x),y:q0(e.y,r.y)}}function vv(e,r){let i=.5;const s=ft(e),l=ft(r);return l>s?i=to(r.min,r.max-s,e.min):s>l&&(i=to(e.min,e.max-l,r.min)),Jt(0,1,i)}function xv(e,r){const i={};return r.min!==void 0&&(i.min=r.min-e.min),r.max!==void 0&&(i.max=r.max-e.min),i}const Fc=.35;function Cv(e=Fc){return e===!1?e=0:e===!0&&(e=Fc),{x:J0(e,"left","right"),y:J0(e,"top","bottom")}}function J0(e,r,i){return{min:ep(e,r),max:ep(e,i)}}function ep(e,r){return typeof e=="number"?e:e[r]||0}const wv=new WeakMap;class Sv{constructor(r){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ye(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=r}start(r,{snapToCursor:i=!1,distanceThreshold:s}={}){const{presenceContext:l}=this.visualElement;if(l&&l.isPresent===!1)return;const d=x=>{i&&this.snapToCursor(uo(x).point),this.stopAnimation()},p=(x,C)=>{const{drag:b,dragPropagation:j,onDragStart:L}=this.getProps();if(b&&!j&&(this.openDragLock&&this.openDragLock(),this.openDragLock=G7(b),!this.openDragLock))return;this.latestPointerEvent=x,this.latestPanInfo=C,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Qt(D=>{let A=this.getAxisMotionValue(D).get()||0;if(qt.test(A)){const{projection:F}=this.visualElement;if(F&&F.layout){const N=F.layout.layoutBox[D];N&&(A=ft(N)*(parseFloat(A)/100))}}this.originPoint[D]=A}),L&&Me.update(()=>L(x,C),!1,!0),Lc(this.visualElement,"transform");const{animationState:P}=this.visualElement;P&&P.setActive("whileDrag",!0)},h=(x,C)=>{this.latestPointerEvent=x,this.latestPanInfo=C;const{dragPropagation:b,dragDirectionLock:j,onDirectionLock:L,onDrag:P}=this.getProps();if(!b&&!this.openDragLock)return;const{offset:D}=C;if(j&&this.currentDirection===null){this.currentDirection=jv(D),this.currentDirection!==null&&L&&L(this.currentDirection);return}this.updateAxis("x",C.point,D),this.updateAxis("y",C.point,D),this.visualElement.render(),P&&Me.update(()=>P(x,C),!1,!0)},m=(x,C)=>{this.latestPointerEvent=x,this.latestPanInfo=C,this.stop(x,C),this.latestPointerEvent=null,this.latestPanInfo=null},v=()=>{const{dragSnapToOrigin:x}=this.getProps();(x||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:y}=this.getProps();this.panSession=new $3(r,{onSessionStart:d,onStart:p,onMove:h,onSessionEnd:m,resumeAnimation:v},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,distanceThreshold:s,contextWindow:B3(this.visualElement),element:this.visualElement.current})}stop(r,i){const s=r||this.latestPointerEvent,l=i||this.latestPanInfo,d=this.isDragging;if(this.cancel(),!d||!l||!s)return;const{velocity:p}=l;this.startAnimation(p);const{onDragEnd:h}=this.getProps();h&&Me.postRender(()=>h(s,l))}cancel(){this.isDragging=!1;const{projection:r,animationState:i}=this.visualElement;r&&(r.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(r,i,s){const{drag:l}=this.getProps();if(!s||!Es(r,l,this.currentDirection))return;const d=this.getAxisMotionValue(r);let p=this.originPoint[r]+s[r];this.constraints&&this.constraints[r]&&(p=mv(p,this.constraints[r],this.elastic[r])),d.set(p)}resolveConstraints(){var d;const{dragConstraints:r,dragElastic:i}=this.getProps(),s=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(d=this.visualElement.projection)==null?void 0:d.layout,l=this.constraints;r&&Ir(r)?this.constraints||(this.constraints=this.resolveRefConstraints()):r&&s?this.constraints=gv(s.layoutBox,r):this.constraints=!1,this.elastic=Cv(i),l!==this.constraints&&!Ir(r)&&s&&this.constraints&&!this.hasMutatedConstraints&&Qt(p=>{this.constraints!==!1&&this.getAxisMotionValue(p)&&(this.constraints[p]=xv(s.layoutBox[p],this.constraints[p]))})}resolveRefConstraints(){const{dragConstraints:r,onMeasureDragConstraints:i}=this.getProps();if(!r||!Ir(r))return!1;const s=r.current,{projection:l}=this.visualElement;if(!l||!l.layout)return!1;l.root&&(l.root.scroll=void 0,l.root.updateScroll());const d=kg(s,l.root,this.visualElement.getTransformPagePoint());let p=yv(l.layout.layoutBox,d);if(i){const h=i(Cg(p));this.hasMutatedConstraints=!!h,h&&(p=r3(h))}return p}startAnimation(r){const{drag:i,dragMomentum:s,dragElastic:l,dragTransition:d,dragSnapToOrigin:p,onDragTransitionEnd:h}=this.getProps(),m=this.constraints||{},v=Qt(y=>{if(!Es(y,i,this.currentDirection))return;let x=m&&m[y]||{};(p===!0||p===y)&&(x={min:0,max:0});const C=l?200:1e6,b=l?40:1e7,j={type:"inertia",velocity:s?r[y]:0,bounceStiffness:C,bounceDamping:b,timeConstant:750,restDelta:1,restSpeed:10,...d,...x};return this.startAxisValueAnimation(y,j)});return Promise.all(v).then(h)}startAxisValueAnimation(r,i){const s=this.getAxisMotionValue(r);return Lc(this.visualElement,r),s.start(u1(r,s,0,i,this.visualElement,!1))}stopAnimation(){Qt(r=>this.getAxisMotionValue(r).stop())}getAxisMotionValue(r){const i=`_drag${r.toUpperCase()}`,l=this.visualElement.getProps()[i];return l||this.visualElement.getValue(r,this.visualElement.latestValues[r]??0)}snapToCursor(r){Qt(i=>{const{drag:s}=this.getProps();if(!Es(i,s,this.currentDirection))return;const{projection:l}=this.visualElement,d=this.getAxisMotionValue(i);if(l&&l.layout){const{min:p,max:h}=l.layout.layoutBox[i],m=d.get()||0;d.set(r[i]-Re(p,h,.5)+m)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:r,dragConstraints:i}=this.getProps(),{projection:s}=this.visualElement;if(!Ir(i)||!s||!this.constraints)return;this.stopAnimation();const l={x:0,y:0};Qt(p=>{const h=this.getAxisMotionValue(p);if(h&&this.constraints!==!1){const m=h.get();l[p]=vv({min:m,max:m},this.constraints[p])}});const{transformTemplate:d}=this.visualElement.getProps();this.visualElement.current.style.transform=d?d({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.constraints=!1,this.resolveConstraints(),Qt(p=>{if(!Es(p,r,null))return;const h=this.getAxisMotionValue(p),{min:m,max:v}=this.constraints[p];h.set(Re(m,v,l[p]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;wv.set(this.visualElement,this);const r=this.visualElement.current,i=qi(r,"pointerdown",v=>{const{drag:y,dragListener:x=!0}=this.getProps(),C=v.target,b=C!==r&&eg(C);y&&x&&!b&&this.start(v)});let s;const l=()=>{const{dragConstraints:v}=this.getProps();Ir(v)&&v.current&&(this.constraints=this.resolveRefConstraints(),s||(s=kv(r,v.current,()=>this.scalePositionWithinConstraints())))},{projection:d}=this.visualElement,p=d.addEventListener("measure",l);d&&!d.layout&&(d.root&&d.root.updateScroll(),d.updateLayout()),Me.read(l);const h=io(window,"resize",()=>this.scalePositionWithinConstraints()),m=d.addEventListener("didUpdate",(({delta:v,hasLayoutChanged:y})=>{this.isDragging&&y&&(Qt(x=>{const C=this.getAxisMotionValue(x);C&&(this.originPoint[x]+=v[x].translate,C.set(C.get()+v[x].translate))}),this.visualElement.render())}));return()=>{h(),i(),p(),m&&m(),s&&s()}}getProps(){const r=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:s=!1,dragPropagation:l=!1,dragConstraints:d=!1,dragElastic:p=Fc,dragMomentum:h=!0}=r;return{...r,drag:i,dragDirectionLock:s,dragPropagation:l,dragConstraints:d,dragElastic:p,dragMomentum:h}}}function tp(e){let r=!0;return()=>{if(r){r=!1;return}e()}}function kv(e,r,i){const s=l0(e,tp(i)),l=l0(r,tp(i));return()=>{s(),l()}}function Es(e,r,i){return(r===!0||r===e)&&(i===null||i===e)}function jv(e,r=10){let i=null;return Math.abs(e.y)>r?i="y":Math.abs(e.x)>r&&(i="x"),i}class bv extends Nn{constructor(r){super(r),this.removeGroupControls=Mt,this.removeListeners=Mt,this.controls=new Sv(r)}mount(){const{dragControls:r}=this.node.getProps();r&&(this.removeGroupControls=r.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Mt}update(){const{dragControls:r}=this.node.getProps(),{dragControls:i}=this.node.prevProps||{};r!==i&&(this.removeGroupControls(),r&&(this.removeGroupControls=r.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const zu=e=>(r,i)=>{e&&Me.update(()=>e(r,i),!1,!0)};class Tv extends Nn{constructor(){super(...arguments),this.removePointerDownListener=Mt}onPointerDown(r){this.session=new $3(r,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:B3(this.node)})}createPanHandlers(){const{onPanSessionStart:r,onPanStart:i,onPan:s,onPanEnd:l}=this.node.getProps();return{onSessionStart:zu(r),onStart:zu(i),onMove:zu(s),onEnd:(d,p)=>{delete this.session,l&&Me.postRender(()=>l(d,p))}}}mount(){this.removePointerDownListener=qi(this.node.current,"pointerdown",r=>this.onPointerDown(r))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Ou=!1;class Ev extends _.Component{componentDidMount(){const{visualElement:r,layoutGroup:i,switchLayoutGroup:s,layoutId:l}=this.props,{projection:d}=r;d&&(i.group&&i.group.add(d),s&&s.register&&l&&s.register(d),Ou&&d.root.didUpdate(),d.addEventListener("animationComplete",()=>{this.safeToRemove()}),d.setOptions({...d.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Us.hasEverUpdated=!0}getSnapshotBeforeUpdate(r){const{layoutDependency:i,visualElement:s,drag:l,isPresent:d}=this.props,{projection:p}=s;return p&&(p.isPresent=d,r.layoutDependency!==i&&p.setOptions({...p.options,layoutDependency:i}),Ou=!0,l||r.layoutDependency!==i||i===void 0||r.isPresent!==d?p.willUpdate():this.safeToRemove(),r.isPresent!==d&&(d?p.promote():p.relegate()||Me.postRender(()=>{const h=p.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:r,layoutAnchor:i}=this.props,{projection:s}=r;s&&(s.options.layoutAnchor=i,s.root.didUpdate(),p1.postRender(()=>{!s.currentAnimation&&s.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:r,layoutGroup:i,switchLayoutGroup:s}=this.props,{projection:l}=r;Ou=!0,l&&(l.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(l),s&&s.deregister&&s.deregister(l))}safeToRemove(){const{safeToRemove:r}=this.props;r&&r()}render(){return null}}function V3(e){const[r,i]=j3(),s=_.useContext(Gc);return c.jsx(Ev,{...e,layoutGroup:s,switchLayoutGroup:_.useContext(M3),isPresent:r,safeToRemove:i})}const Lv={pan:{Feature:Tv},drag:{Feature:bv,ProjectionNode:k3,MeasureLayout:V3}};function np(e,r,i){const{props:s}=e;e.animationState&&s.whileHover&&e.animationState.setActive("whileHover",i==="Start");const l="onHover"+i,d=s[l];d&&Me.postRender(()=>d(r,uo(r)))}class Pv extends Nn{mount(){const{current:r}=this.node;r&&(this.unmount=Q7(r,(i,s)=>(np(this.node,s,"Start"),l=>np(this.node,l,"End"))))}unmount(){}}class Rv extends Nn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let r=!1;try{r=this.node.current.matches(":focus-visible")}catch{r=!0}!r||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=so(io(this.node.current,"focus",()=>this.onFocus()),io(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function rp(e,r,i){const{props:s}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&s.whileTap&&e.animationState.setActive("whileTap",i==="Start");const l="onTap"+(i==="End"?"":i),d=s[l];d&&Me.postRender(()=>d(r,uo(r)))}class Mv extends Nn{mount(){const{current:r}=this.node;if(!r)return;const{globalTapTarget:i,propagate:s}=this.node.props;this.unmount=ng(r,(l,d)=>(rp(this.node,d,"Start"),(p,{success:h})=>rp(this.node,p,h?"End":"Cancel")),{useGlobalTarget:i,stopPropagation:(s==null?void 0:s.tap)===!1})}unmount(){}}const Nc=new WeakMap,_u=new WeakMap,Av=e=>{const r=Nc.get(e.target);r&&r(e)},Bv=e=>{e.forEach(Av)};function $v({root:e,...r}){const i=e||document;_u.has(i)||_u.set(i,{});const s=_u.get(i),l=JSON.stringify(r);return s[l]||(s[l]=new IntersectionObserver(Bv,{root:e,...r})),s[l]}function Dv(e,r,i){const s=$v(r);return Nc.set(e,i),s.observe(e),()=>{Nc.delete(e),s.unobserve(e)}}const Vv={some:0,all:1};class Iv extends Nn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var m;(m=this.stopObserver)==null||m.call(this);const{viewport:r={}}=this.node.getProps(),{root:i,margin:s,amount:l="some",once:d}=r,p={root:i?i.current:void 0,rootMargin:s,threshold:typeof l=="number"?l:Vv[l]},h=v=>{const{isIntersecting:y}=v;if(this.isInView===y||(this.isInView=y,d&&!y&&this.hasEnteredView))return;y&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",y);const{onViewportEnter:x,onViewportLeave:C}=this.node.getProps(),b=y?x:C;b&&b(v)};this.stopObserver=Dv(this.node.current,p,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:r,prevProps:i}=this.node;["amount","margin","root"].some(Fv(r,i))&&this.startObserver()}unmount(){var r;(r=this.stopObserver)==null||r.call(this),this.hasEnteredView=!1,this.isInView=!1}}function Fv({viewport:e={}},{viewport:r={}}={}){return i=>e[i]!==r[i]}const Nv={inView:{Feature:Iv},tap:{Feature:Mv},focus:{Feature:Rv},hover:{Feature:Pv}},zv={layout:{ProjectionNode:k3,MeasureLayout:V3}},Ov={...cv,...Nv,...Lv,...zv},I3=ov(Ov,sv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Hv=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,i,s)=>s?s.toUpperCase():i.toLowerCase()),ip=e=>{const r=Hv(e);return r.charAt(0).toUpperCase()+r.slice(1)},F3=(...e)=>e.filter((r,i,s)=>!!r&&r.trim()!==""&&s.indexOf(r)===i).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Uv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=_.forwardRef(({color:e="currentColor",size:r=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:d,iconNode:p,...h},m)=>_.createElement("svg",{ref:m,...Uv,width:r,height:r,stroke:e,strokeWidth:s?Number(i)*24/Number(r):i,className:F3("lucide",l),...h},[...p.map(([v,y])=>_.createElement(v,y)),...Array.isArray(d)?d:[d]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=(e,r)=>{const i=_.forwardRef(({className:s,...l},d)=>_.createElement(Wv,{ref:d,iconNode:r,className:F3(`lucide-${_v(ip(e))}`,`lucide-${e}`,s),...l}));return i.displayName=ip(e),i};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Gv=Zv("check",Kv),Yv=S.div`
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
`,Qv=S.button`
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
  ${e=>e.$active&&!e.$disabled&&Y`
    --icon-color: var(--Common-Control-Active, #00B3E3);
    --text-color: var(--Common-Control-Active, #00B3E3);
  `}

  /* Disabled State */
  ${e=>e.$disabled&&Y`
    cursor: not-allowed;
    --icon-color: var(--Common-Control-Content-disabled, rgba(182, 195, 214, 0.30));
    --text-color: var(--Common-Control-Content-disabled, rgba(182, 195, 214, 0.30));
  `}

  /* Pressed State (Click Interaction) */
  /* Applied via prop OR CSS active state */
  ${e=>(e.$pressed||!e.$disabled&&!e.$active)&&Y`
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
  ${e=>e.$pressed&&Y`
    background: var(--Color-Common-Control-Base-pressed, #364356);
    --icon-color: var(--Color-Common-Control-Content-pressed, #9caabe);
    --text-color: var(--Color-Common-Control-Content-pressed, #9caabe);
    
    /* Keep pressed state on hover for demo */
    &:hover {
      background: var(--Color-Common-Control-Base-pressed, #364356);
    }
  `}
`,Xv=({label:e,icon:r,active:i=!1,disabled:s=!1,pressed:l=!1,onClick:d,className:p,showLeadingIcon:h=!1,showTrailingIcon:m=!1,defaultLeadingIcon:v,defaultTrailingIcon:y})=>{const x=r||v,C=i?y||c.jsx(Gv,{size:20}):y;return c.jsxs(Qv,{$active:i,$disabled:s,$pressed:l,onClick:s?void 0:d,className:p,disabled:s,children:[h&&x&&c.jsx("div",{style:{color:"var(--icon-color)",display:"flex"},children:x}),c.jsx(Yv,{$color:"var(--text-color)",children:e}),m&&C&&c.jsx("div",{style:{color:"var(--icon-color)",display:"flex"},children:C})]})};S.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
`;S.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;S.div`
  color: var(--Text-Assist, #B6C3D6);
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.2px;
  margin-bottom: 4px;
`;const qv=()=>c.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("g",{id:"Icon_Arrow_Down",children:c.jsx("path",{d:"M8 9.79273L13.0343 4.63983C13.3467 4.32006 13.8533 4.32006 14.1657 4.63983C14.4781 4.95961 14.4781 5.47807 14.1657 5.79785L8.84853 11.2402C8.3799 11.7199 7.6201 11.7199 7.15147 11.2402L1.83431 5.79785C1.5219 5.47807 1.5219 4.95961 1.83431 4.63983C2.14673 4.32006 2.65327 4.32006 2.96569 4.63983L8 9.79273Z",fill:"currentColor"})})}),Jv=()=>c.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:c.jsx("g",{id:"Icons/ icon_more",children:c.jsxs("g",{id:"Icon",children:[c.jsx("path",{d:"M13.8 5.4C13.8 6.39411 12.9941 7.2 12 7.2C11.0059 7.2 10.2 6.39411 10.2 5.4C10.2 4.40589 11.0059 3.6 12 3.6C12.9941 3.6 13.8 4.40589 13.8 5.4Z",fill:"currentColor"}),c.jsx("path",{d:"M12 13.8C12.9941 13.8 13.8 12.9941 13.8 12C13.8 11.0059 12.9941 10.2 12 10.2C11.0059 10.2 10.2 11.0059 10.2 12C10.2 12.9941 11.0059 13.8 12 13.8Z",fill:"currentColor"}),c.jsx("path",{d:"M12 20.4C12.9941 20.4 13.8 19.5941 13.8 18.6C13.8 17.6059 12.9941 16.8 12 16.8C11.0059 16.8 10.2 17.6059 10.2 18.6C10.2 19.5941 11.0059 20.4 12 20.4Z",fill:"currentColor"})]})})}),ex=S.div`
  display: inline-flex;
  flex-direction: column;
  gap: 8px;
  width: ${e=>e.$variant==="icon"?"fit-content":"100%"};
`,tx=S.div`
  color: var(--Text-Secondary, #D5E2F2);
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.2px;
`,nx=S.div`
  color: var(--Text-Assist, #B6C3D6);
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.2px;
`,rx=S.div`
  position: relative;
  width: ${e=>e.$variant==="icon"?"fit-content":"100%"};
  min-width: ${e=>e.$variant==="icon"?"48px":"152px"};
  font-family: Roboto, sans-serif;
`,ix=S.button`
  /* Common Styles */
  border: none;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;

  /* Variant Specific */
  ${e=>e.$variant==="icon"?Y`
    width: 48px;
    height: 48px;
    border-radius: 9999px;
    justify-content: center;
    padding: 0;
  `:Y`
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
  ${e=>e.$isOpen&&!e.$disabled&&!e.$error&&Y`
    --bg-color: var(--Common-Control-Base-pressed, rgba(54, 67, 86, 0.60));
    --text-color: var(--Common-Control-Content-pressed, #6E7C8E);
    --icon-color: var(--Common-Control-Content-pressed, #6E7C8E);
    
    /* Icon variant specific pressed bg */
    ${e.$variant==="icon"&&Y`
        background: var(--Button-secondary-base-pressed, rgba(110, 124, 142, 0.25)); 
    `}
  `}

  /* Disabled State */
  ${e=>e.$disabled&&Y`
    cursor: not-allowed;
    --bg-color: var(--Common-Control-Base-disabled, rgba(110, 124, 142, 0.30));
    --text-color: var(--Common-Control-Content-disabled, rgba(182, 195, 214, 0.30));
    --icon-color: var(--Common-Control-Content-disabled, rgba(182, 195, 214, 0.30));
    
    ${e.$variant==="icon"&&Y`
       opacity: 0.5;
    `}
  `}

  /* Error State */
  ${e=>e.$error&&!e.$disabled&&!e.$isOpen&&Y`
    --bg-color: var(--Components-Common-Control-Default-base-normal, rgba(170, 173, 185, 0.20));
    outline: 1.5px solid var(--Components-Common-Control-content-error, #D93C50);
    outline-offset: -1.5px;
  `}
`,ox=S.span`
  flex: 1;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.2px;
  word-wrap: break-word;
  color: inherit;
`,sx=S.div`
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--icon-color);
`,ax=S(I3.div)`
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
`,lx=({options:e,value:r,onChange:i,placeholder:s="List item",disabled:l=!1,error:d=!1,className:p,variant:h="text",startIcon:m,icon:v,forceOpen:y=!1,title:x,supportText:C,align:b="left",showLeadingIcon:j=!1,showTrailingIcon:L=!1,defaultLeadingIcon:P,defaultTrailingIcon:D})=>{const[A,F]=_.useState(y),N=_.useRef(null);_.useEffect(()=>{y&&F(!0)},[y]),_.useEffect(()=>{const B=Q=>{N.current&&!N.current.contains(Q.target)&&(y||F(!1))};return document.addEventListener("mousedown",B),()=>document.removeEventListener("mousedown",B)},[y]);const W=()=>{!l&&!y&&F(!A)},q=B=>{i&&i(B),y||F(!1)},V=e.find(B=>B.value===r);return c.jsxs(ex,{className:p,$variant:h,children:[x&&c.jsx(tx,{children:x}),c.jsxs(rx,{ref:N,$variant:h,children:[c.jsx(ix,{onClick:W,$isOpen:A,$disabled:l,$error:d,$variant:h,type:"button",children:h==="text"?c.jsxs(c.Fragment,{children:[m&&c.jsx("div",{style:{marginRight:8,display:"flex",color:"var(--icon-color)"},children:m}),c.jsx(ox,{children:V?V.label:s}),c.jsx(sx,{children:c.jsx(I3.div,{animate:{rotate:A?180:0},transition:{duration:.2},children:c.jsx(qv,{})})})]}):c.jsx("div",{style:{display:"flex",color:"var(--icon-color)"},children:v||c.jsx(Jv,{})})}),c.jsx($y,{children:A&&c.jsx(ax,{$variant:h,$align:b,initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},children:e.map(B=>c.jsx(Xv,{label:B.label,icon:B.icon,onClick:()=>q(B.value),active:B.value===r,showLeadingIcon:j,showTrailingIcon:L,defaultLeadingIcon:P,defaultTrailingIcon:D},B.value))})})]}),C&&c.jsx(nx,{children:C})]})};S.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  padding: 40px;
  background: #131b26; /* Darker bg for demo to match image */
  border-radius: 16px;
`;S.div`
  display: grid;
  grid-template-columns: 80px 1fr 1fr;
  gap: 24px 40px;
  align-items: start;
`;S.div`
  color: var(--Text-Primary, #ffffff);
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
`;S.div`
  color: var(--Text-Assist, #B6C3D6);
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  padding-top: 10px; /* Align with input */
`;const Hu=S.div`
  width: 100%;
  background: linear-gradient(0deg, rgba(19, 27, 38, 0.50) 0%, #131B26 100%);
  display: flex;
  flex-direction: column;
  border-radius: 5px;
`,Uu=S.div`
  width: 100%;
  height: 24px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 8px;
  gap: 4px;
`,Wu=S.div`
  display: flex;
  gap: 4px;
  align-items: center;
  opacity: 0.5;
`,Zu=()=>c.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"currentColor",style:{color:"#B6C3D6"},children:c.jsx("rect",{width:"10",height:"10"})}),Ku=()=>c.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"currentColor",style:{color:"#B6C3D6"},children:c.jsx("circle",{cx:"5",cy:"5",r:"5"})}),Gu=()=>c.jsx("svg",{width:"10",height:"10",viewBox:"0 0 10 10",fill:"currentColor",style:{color:"#B6C3D6"},children:c.jsx("path",{d:"M5 10L0 0H10L5 10Z",transform:"rotate(180 5 5)"})}),Yu=S.div`
  width: 100%;
  height: 56px;
  padding: ${e=>e.$padding||"0 12px"};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
`,Qu=S.div`
  display: flex;
  align-items: center;
  gap: 4px;
  min-width: 48px;
`,op=S.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`,Xu=S.div`
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: flex-end;
  min-width: 48px;
`,sp=S.div`
  color: var(--Text-primary, #FFFFFF);
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0.20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ux=S.span`
  color: var(--Text-assist, #B6C3D6);
  font-size: 14px;
  font-family: Roboto;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.20px;
`,cx=S.div`
  width: 32px;
  height: 8px;
  position: relative;
  display: flex;
  align-items: center;
`,dx=S.div`
  width: 100%;
  height: 100%;
  background: var(--Color-Neutral-70, #364356);
  border-radius: 7px;
  position: absolute;
`,fx=S.div`
  width: ${e=>e.$width};
  height: 100%;
  background: ${e=>e.$color};
  border-radius: 7px;
  position: absolute;
  z-index: 1;
`,px=S.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,hx=S.div`
  width: ${e=>e.$active?"24px":"6px"};
  height: 6px;
  background: white;
  opacity: ${e=>e.$active?"1":"0.4"};
  border-radius: ${e=>e.$active?"8px":"9999px"};
  transition: all 0.3s ease;
`,mx=({type:e="secondary",batteryLevel:r=80,title:i="Title",showBack:s=!0,showMore:l=!0,actions:d,onBack:p,onMore:h,onMenuSelect:m,menuOptions:v,showInfoIcon:y=!1,showTrailingIcon1:x=!1,showTrailingIcon2:C=!1,showTrailingIcon3:b=!1,currentStep:j=1,totalSteps:L=5,onClose:P,showSkip:D=!1,onSkip:A})=>{const F=[{label:"Settings",value:"settings"},{label:"About",value:"about"},{label:"Help",value:"help"}];if(e==="main")return c.jsxs(Hu,{children:[c.jsx(Uu,{children:c.jsxs(Wu,{children:[c.jsx(Zu,{}),c.jsx(Ku,{}),c.jsx(Gu,{})]})}),c.jsxs(Yu,{$padding:"0 24px",children:[c.jsx(Qu,{children:c.jsx(Qp,{width:79,height:18,color:"#FFFFFF"})}),c.jsxs(Xu,{children:[c.jsx(Yp,{size:24,color:"#B6C3D6"}),c.jsxs(cx,{children:[c.jsx(dx,{}),c.jsx(fx,{$width:`${r}%`,$color:"var(--Feedback-Blue, #00B3E3)"})]}),c.jsxs(ux,{children:[r,"%"]})]})]})]});if(e==="stepper")return c.jsxs(Hu,{children:[c.jsx(Uu,{children:c.jsxs(Wu,{children:[c.jsx(Zu,{}),c.jsx(Ku,{}),c.jsx(Gu,{})]})}),c.jsxs(Yu,{$padding:"0 12px",children:[c.jsx(Qu,{children:c.jsx(Rn,{icon:c.jsx(fc,{}),onClick:p})}),c.jsx(op,{style:{justifyContent:"center"},children:c.jsx(px,{children:Array.from({length:L}).map((V,B)=>c.jsx(hx,{$active:B+1===j},B))})}),c.jsxs(Xu,{children:[D&&c.jsx(Bn,{variant:"text",size:"small",onClick:A,style:{color:"white"},children:"Skip"}),P&&c.jsx(Rn,{icon:c.jsx(z9,{}),onClick:P})]})]})]});const N=s?"0 12px":"0 12px 0 24px";let W=i;y&&typeof i=="string"&&(W=c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[c.jsx(sp,{children:i}),c.jsx(qp,{size:20})]}));let q=null;if(d)q=d;else{const V=[];x&&V.push(l?c.jsx(lx,{variant:"icon",icon:c.jsx("div",{style:{width:24,height:24},children:c.jsx(hm,{})}),align:"right",options:v||F,onChange:B=>{m&&m(B),h&&h()}},"trailing-1"):null),C&&(V.push(c.jsx(Rn,{icon:c.jsx(pc,{}),onClick:()=>console.log("Icon 2A")},"trailing-2a")),V.push(c.jsx(Rn,{icon:c.jsx(hc,{}),onClick:()=>console.log("Icon 2B")},"trailing-2b"))),b&&(V.push(c.jsx(Rn,{icon:c.jsx(pc,{}),onClick:()=>console.log("Icon 3A")},"trailing-3a")),V.push(c.jsx(Rn,{icon:c.jsx(hc,{}),onClick:()=>console.log("Icon 3B")},"trailing-3b")),V.push(c.jsx(Rn,{icon:c.jsx(Xp,{}),onClick:()=>console.log("Icon 3C")},"trailing-3c"))),V.length>0&&(q=c.jsx(c.Fragment,{children:V.filter(B=>B!==null)}))}return c.jsxs(Hu,{children:[c.jsx(Uu,{children:c.jsxs(Wu,{children:[c.jsx(Zu,{}),c.jsx(Ku,{}),c.jsx(Gu,{})]})}),c.jsxs(Yu,{$padding:N,children:[s?c.jsx(Qu,{children:c.jsx(Rn,{icon:c.jsx(fc,{}),onClick:p})}):c.jsx("div",{}),c.jsx(op,{children:typeof W=="string"?c.jsx(sp,{children:W}):W}),c.jsx(Xu,{style:{gap:d?0:4},children:q})]})]})},gx=({batteryLevel:e=80})=>c.jsx(mx,{type:"main",batteryLevel:e});S.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  align-items: flex-start;
  padding: 24px;
`;S.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 360px;
`;S.div`
  color: var(--Text-Assist, #B6C3D6);
  font-size: 14px;
  font-family: Roboto;
`;S.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  margin-bottom: 8px;
`;S.div`
  color: var(--Text-Secondary, #d5e2f2);
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  cursor: pointer;
  font-family: Roboto, sans-serif;
`;const yx=S.div`
  ${({orientation:e,type:r,thickness:i,length:s})=>{const l=r==="type-01"?"var(--Border-border-divider-01, #4B596C)":"var(--Border-border-divider-02, #2A3649)";return e==="horizontal"?`
        width: ${s||"100%"};
        height: ${i}px;
        background: ${l};
      `:`
        width: ${i}px;
        height: ${s||"100%"};
        background: ${l};
      `}}
`,vx=({orientation:e="horizontal",type:r="type-01",thickness:i=1,length:s,className:l,style:d})=>c.jsx(yx,{orientation:e,type:r,thickness:i,length:s,className:l,style:d});S.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding: 24px;
  background: var(--Colors-Surface-Backgronud--01, #131b26);
  border-radius: 16px;
  width: 100%;
`;S.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;S.div`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.2px;
  color: var(--Text-Primary, #ffffff);
`;S.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
`;S.div`
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.22px;
  color: var(--Text-Assist, #B6C3D6);
`;S.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;S.div`
  display: flex;
  gap: 24px;
  align-items: flex-start;
`;S.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;const xx=S.div`
  width: ${e=>e.$width||"312px"};
  background: var(--Surface-mobile-normal-02, #2A3649);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  position: relative;
  overflow: visible;
`,Ls=S.h2`
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
`,Ps=S.p`
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
`,qu=S.div`
  padding: ${e=>e.$padding||"24px 24px 16px 24px"};
  display: flex;
  flex-direction: column;
  gap: ${e=>e.$gap||"8px"};
  flex: 1;
  overflow: visible;
`,Cx=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 0 24px 24px 24px;
  flex-wrap: wrap;
  flex-direction: ${e=>e.$layout==="vertical"?"column":"row"};
`,wx=S.img`
  width: 100%;
  height: 219px;
  object-fit: cover;
  border-radius: 15px 15px 0 0;
`,Sx=S.img`
  width: 100%;
  height: 136px;
  object-fit: cover;
  border-radius: 7px;
  margin-bottom: 8px; 
`,kx=S.div`
  position: relative;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  width: 100%;
`,jx=S.div`
  overflow-y: auto;
  margin-right: 8px; /* Content indented to leave room for custom scrollbar */
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none; /* Firefox */
  
  &::-webkit-scrollbar {
    display: none; /* Chrome/Safari */
  }
`,bx=S.div`
  position: absolute;
  right: 8px; /* Positioned at the margin area */
  top: 0;
  width: 4px;
  background-color: var(--Common-Control-Base-normal, #364356);
  border-radius: 9999px;
  opacity: ${e=>e.$visible?1:0};
  transition: opacity 0.3s ease-in-out;
  pointer-events: none;
`,Tx=S.div`
  height: 48px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 24px; /* Avoid covering the scrollbar area */
  background: linear-gradient(360deg, var(--Colors-Surface-Backgronud--02, #2A3649) 0%, rgba(42, 54, 73, 0) 100%);
  pointer-events: none;
`;S.div`
  position: relative;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
`;S.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  margin-top: 8px;
`;S.div`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  width: 100%;
`;S.p`
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: var(--Text-Assist, #B6C3D6);
  margin: 0;
  flex: 1;
`;S.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  width: 100%;
`;S.div`
  flex: 1;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.2px;
  color: var(--Text-secondary, #D5E2F2);
`;const Ex=({variant:e="default",title:r="Dialog box title here",description:i="Lorem ipsum dolor sit amet, consectetur adipiscing elit.",image:s,confirmText:l="Button",cancelText:d,tertiaryText:p,onConfirm:h,onCancel:m,onTertiary:v,footerLayout:y="horizontal",className:x,topContent:C,children:b})=>{const[j,L]=_.useState(!1),P=_.useRef(null),D=_.useRef(null),A=_.useRef(null),F=()=>{if(!D.current||!A.current)return;const{scrollTop:q,scrollHeight:V,clientHeight:B}=D.current,Q=B/V,G=Math.max(20,Q*B),ae=V-B,he=B-G;if(ae<=0){A.current.style.display="none";return}else A.current.style.display="block";const ue=q/ae*he;A.current.style.height=`${G}px`,A.current.style.transform=`translateY(${ue}px)`};_.useEffect(()=>()=>{P.current&&clearTimeout(P.current)},[]),_.useLayoutEffect(()=>{e==="scrollable"&&F()});const N=()=>{F(),L(!0),P.current&&clearTimeout(P.current),P.current=setTimeout(()=>{L(!1)},1e3)},W=()=>e==="image-top"?c.jsxs(c.Fragment,{children:[s&&c.jsx(wx,{src:s}),c.jsxs(qu,{$padding:"16px 24px 16px 24px",children:[C,c.jsx(Ls,{children:r}),c.jsx(Ps,{children:i}),b]})]}):e==="image-middle"?c.jsxs(qu,{children:[C,c.jsx(Ls,{children:r}),s&&c.jsx("div",{style:{paddingTop:"8px",paddingBottom:"8px"},children:c.jsx(Sx,{src:s})}),c.jsx(Ps,{children:i}),b]}):e==="scrollable"?c.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,overflow:"visible"},children:[c.jsxs("div",{style:{padding:"24px 24px 16px 24px",display:"flex",flexDirection:"column",gap:"8px"},children:[C,c.jsx(Ls,{children:r})]}),c.jsxs(kx,{children:[c.jsx(jx,{ref:D,style:{maxHeight:"250px"},onScroll:N,children:c.jsxs("div",{style:{padding:"0 16px 24px 24px",display:"flex",flexDirection:"column",gap:"8px"},children:[c.jsx(Ps,{$align:"left",children:i}),b]})}),c.jsx(bx,{ref:A,$visible:j}),c.jsx(Tx,{})]})]}):c.jsxs(qu,{children:[C,c.jsx(Ls,{children:r}),c.jsx(Ps,{children:i}),b]});return c.jsxs(xx,{className:x,children:[W(),c.jsx(Cx,{$layout:y,children:y==="horizontal"?c.jsxs(c.Fragment,{children:[d&&c.jsx(Bn,{variant:"text",onClick:m,style:{padding:"6px 12px",minWidth:"72px"},children:d}),l&&c.jsx(Bn,{variant:"filled",onClick:h,style:{padding:"6px 20px",minWidth:"80px"},children:l})]}):c.jsxs(c.Fragment,{children:[l&&c.jsx(Bn,{variant:"filled",onClick:h,style:{padding:"6px 20px",minWidth:"80px"},children:l}),d&&c.jsx(Bn,{variant:"text",onClick:m,style:{padding:"6px 12px",minWidth:"72px"},children:d}),p&&c.jsx(Bn,{variant:"text",onClick:v,style:{padding:"6px 12px",minWidth:"72px"},children:p})]})})]})};S.div`
  display: flex;
  flex-wrap: wrap;
  gap: 56px;
  align-items: flex-start;
  padding: 24px;
`;S.div`
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
  ${e=>{switch(e.$variant){case"default":return Y`
          background: var(--Color-Neutral-60, #4B596C);
          color: var(--Text-primary, white);
          
          ${e.$interactive&&Y`
            &:active {
              opacity: 0.8;
            }
          `}
        `;case"archived":return Y`
          background: var(--Button-base-disabled, rgba(110, 124, 142, 0.10));
          color: var(--Common-Control-Content-disabled, rgba(182, 195, 214, 0.30));
          
          ${e.$interactive&&Y`
            &:active {
              opacity: 0.8;
            }
          `}
        `;case"accent1":return Y`
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
          
          ${e.$interactive&&Y`
             &:active {
               background: rgba(51, 194, 233, 0.10);
             }
          `}
        `;case"accent2":return Y`
          background: rgba(0, 179, 227, 0.30);
          color: var(--Text-secondary, #D5E2F2);
          
          ${e.$interactive&&Y`
             &:active {
               background: rgba(0, 179, 227, 0.40);
             }
          `}
        `}}}
`;S.span`
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  
  ${e=>e.$variant==="accent1"&&Y`
    background: linear-gradient(90deg, #33C2E9 15%, #1A5EFF 90%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
  `}
`;S.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;S.div`
  display: flex;
  gap: 24px;
  margin-bottom: 8px;
  flex-wrap: wrap;
`;S.div`
  color: var(--Text-Secondary, #d5e2f2);
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  cursor: pointer;
`;S.div`
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
`;S.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 32px;
`;S.div`
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
`;S.div`
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
`;S.div`
  color: var(--Text-Assist, #B6C3D6);
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 500;
`;S.div`
  color: var(--Text-Assist, #B6C3D6);
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
`;S.div`
  display: contents;
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    width: 100%;
  }
`;S.div`
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

  ${({$size:e})=>{switch(e){case"medium":return Y`
          height: 38px;
          min-width: 72px;
          padding: 8px 12px;
          font-size: 16px;
          line-height: 22px;
          letter-spacing: 0.20px;
        `;case"small":return Y`
          height: 32px;
          min-width: 64px;
          padding: 0 12px;
          font-size: 14px;
          line-height: 20px;
          letter-spacing: 0.20px;
        `;case"xsmall":return Y`
          height: 26px;
          min-width: 48px;
          padding: 0 8px;
          font-size: 12px;
          line-height: 16px;
          letter-spacing: 0.20px;
        `}}}

  ${({$state:e})=>{switch(e){case"normal":return Y`
          background: var(--Common-Control-Base-normal, #364356);
          color: var(--Common-Control-Content-normal, #D5E2F2);
          border: 1px solid var(--Border-border-divider-01, #4B596C);
        `;case"pressed":return Y`
          background: var(--Common-Control-Base-pressed, rgba(54, 67, 86, 0.60));
          color: var(--Common-Control-Content-pressed, #6E7C8E);
          border: 1px solid var(--Common-Control-Base-pressed, rgba(54, 67, 86, 0.60));
        `;case"active":return Y`
          background: var(--Common-Control-Base-normal, #364356);
          color: var(--Common-Control-Active, #00B3E3);
          border: 1px solid var(--Common-Control-Active-pressed, #0589C9);
        `;case"active-pressed":return Y`
          background: var(--Common-Control-Base-pressed, rgba(54, 67, 86, 0.60));
          color: var(--Common-Control-Active-pressed, #0589C9);
          border: 1px solid var(--Common-Control-Active-pressed, #0589C9);
        `;case"disabled":return Y`
          background: var(--Common-Control-Base-disabled, rgba(110, 124, 142, 0.30));
          color: var(--Common-Control-Content-disabled, rgba(182, 195, 214, 0.30));
          border: none;
          cursor: not-allowed;
        `}}}
  
  /* Outline adjustments based on original code logic */
  ${({$size:e,$state:r})=>e==="medium"&&Y`
      border: none;
      outline: 1.5px solid ${r==="normal"?"var(--Border-border-divider-01, #4B596C)":r==="pressed"?"var(--Common-Control-Base-pressed, rgba(54, 67, 86, 0.60))":r==="active"||r==="active-pressed"?"var(--Common-Control-Active-pressed, #0589C9)":"transparent"};
      outline-offset: -1.5px;
      ${r==="disabled"&&"outline: none;"}
  `}
  
  ${({$size:e,$state:r})=>(e==="small"||e==="xsmall")&&Y`
      border: none;
      outline: 1px solid ${r==="normal"?"var(--Border-border-divider-01, #4B596C)":r==="pressed"?"var(--Common-Control-Base-pressed, rgba(54, 67, 86, 0.60))":r==="active"||r==="active-pressed"?"var(--Common-Control-Active-pressed, #0589C9)":"transparent"};
      outline-offset: -1px;
      ${r==="disabled"&&"outline: none;"}
  `}
`;S.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 48px 24px;
  background: var(--Colors-Surface-Backgronud--01, #131b26);
  border-radius: 16px;
  width: 100%;
  overflow-x: auto;
`;S.div`
  display: flex;
  gap: 40px;
  align-items: center;
  min-width: max-content;
`;S.div`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  color: var(--Text-Secondary, #D5E2F2);
  min-width: 100px;
  flex-shrink: 0;
`;S.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;S.div`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: var(--Text-Assist, #B6C3D6);
  margin-bottom: 16px;
  min-width: 280px; /* Width to hold 3 variants */
`;S.div`
  display: flex;
  gap: 40px;
  padding-left: 140px; /* Offset for RowLabel */
`;S.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  margin-bottom: 8px;
`;S.div`
  color: var(--Text-Secondary, #d5e2f2);
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  cursor: pointer;
  font-family: Roboto, sans-serif;
`;S.label`
  display: inline-flex;
  align-items: center;
  gap: 16px;
  cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
  user-select: none;
`;S.div`
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
  ${e=>e.$checked&&Y`
    border: 2px solid var(--Common-Control-Active, #00B3E3);
  `}

  /* Error State */
  ${e=>e.$error&&!e.$disabled&&!e.$checked&&Y`
    border: 2px solid var(--Feedback-Red, #F53232);
  `}

  /* Disabled State */
  ${e=>e.$disabled&&Y`
    /* Disabled Unchecked */
    background: var(--Common-Control-Base-disabled, rgba(110, 124, 142, 0.30));
    border: 2px solid transparent;

    /* Disabled Checked */
    ${e.$checked&&Y`
      background: transparent;
      border: 2px solid var(--Common-Control-Base-disabled, rgba(110, 124, 142, 0.30));
    `}
  `}
`;S.div`
  width: 12px; /* Increased from 10px to 12px */
  height: 12px; /* Increased from 10px to 12px */
  border-radius: 50%;
  background: var(--Common-Control-Active, #00B3E3);
  opacity: ${e=>e.$checked?1:0};
  transform: scale(${e=>e.$checked?1:.5});
  transition: all 0.1s ease-out; /* Faster transition: 0.2s -> 0.1s */

  /* Disabled State */
  ${e=>e.$disabled&&Y`
    background: var(--Common-Control-Base-disabled, rgba(110, 124, 142, 0.30));
  `}
`;S.span`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.2px;
  color: var(--Text-secondary, #D5E2F2);

  ${e=>e.$disabled&&Y`
    color: var(--Common-Control-content-disabled, rgba(170, 173, 185, 0.20));
  `}
`;S.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
`;S.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;S.div`
  color: var(--Text-Assist, #B6C3D6);
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.2px;
  margin-bottom: 4px;
`;S.button`
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
  ${e=>e.$checked&&!e.$disabled&&Y`
    background-color: var(--Common-Control-Active, #00B3E3);
  `}

  /* Disabled (Off & On) */
  ${e=>e.$disabled&&Y`
    background-color: var(--Common-Control-Base-disabled, rgba(110, 124, 142, 0.30));
  `}
`;S.div`
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
  ${e=>e.$disabled&&Y`
    background-color: var(--Common-Control-Content-disabled, rgba(182, 195, 214, 0.30));
  `}
`;S.div`
  width: 220px;
  padding: 16px;
  border-radius: 5px;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 108px;
  display: inline-flex;
  flex-wrap: wrap;
  align-content: flex-start;
`;S.div`
  font-family: Roboto, sans-serif;
  font-size: 12px;
  color: var(--Text-Assist, #B6C3D6);
  margin-bottom: 8px;
  letter-spacing: 0.22px;
`;S.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;const Lx=S.div`
  width: 100%;
  border-radius: 15px;
  background: transparent;
  cursor: ${e=>e.$disabled?"not-allowed":"pointer"};
  transition: background-color 0.2s ease;
  overflow: hidden;

  /* Forced Pressed State */
  ${e=>e.$pressed&&Y`
    background: var(--Common-Control-Base-pressed, rgba(54, 67, 86, 0.60));
  `}

  /* Native Active State */
  ${e=>!e.$disabled&&!e.$pressed&&Y`
    &:active {
      background: var(--Common-Control-Base-pressed, rgba(54, 67, 86, 0.60));
    }
  `}
`,ap=S.div`
  min-height: 64px;
  padding: 16px;
  display: flex;
  
  ${e=>e.$variant==="action-stacked"?Y`
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  `:Y`
    flex-direction: row;
    align-items: center;
    gap: 16px;
  `}
`,Px=S.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
`,lp=S.div`
  flex: 1;
  display: flex;
  min-width: 0; /* Handle overflow */
  
  ${e=>e.$variant==="horizontal-text"?Y`
    flex-direction: row;
    align-items: baseline;
    gap: 8px;
    flex-wrap: wrap;
  `:Y`
    flex-direction: column;
    gap: 4px;
  `}
`,up=S.span`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.2px;
  color: ${e=>e.$disabled?"var(--Common-Control-Content-disabled, rgba(182, 195, 214, 0.30))":"var(--Text-Primary, #FFFFFF)"};
`,cp=S.span`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.2px;
  color: ${e=>e.$disabled?"var(--Common-Control-Content-disabled, rgba(182, 195, 214, 0.30))":"var(--Text-Secondary, #D5E2F2)"};
`,dp=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${e=>e.$disabled?"var(--Common-Control-Content-disabled, rgba(182, 195, 214, 0.30))":"var(--Text-Secondary, #D5E2F2)"};

  & > svg {
    width: 20px;
    height: 20px;
  }
`,Rx=S.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
`;S.span`
  color: var(--Accent-Accent-2, #FE625E);
  font-size: 16px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.20px;
  word-wrap: break-word;
`;S.div`
  display: flex;
  align-items: center;
  gap: 16px;
  min-height: 24px;
`;const N3=({title:e,subtitle:r,startIcon:i,endIcon:s,action:l,variant:d="standard",disabled:p=!1,pressed:h=!1,onClick:m,className:v})=>{const y=d==="action-stacked",x=()=>y?c.jsxs(ap,{$variant:d,children:[c.jsxs(Px,{children:[i&&c.jsx(dp,{$disabled:p,children:i}),c.jsxs(lp,{$variant:d,children:[c.jsx(up,{$disabled:p,children:e}),r&&c.jsx(cp,{$disabled:p,children:r})]})]}),l&&c.jsx(Rx,{children:l})]}):c.jsxs(ap,{$variant:d,children:[i&&c.jsx(dp,{$disabled:p,children:i}),c.jsxs(lp,{$variant:d,children:[c.jsx(up,{$disabled:p,children:e}),r&&c.jsx(cp,{$disabled:p,children:r})]}),s&&c.jsx("div",{style:{display:"flex",alignItems:"center"},children:s})]});return c.jsx(Lx,{$disabled:p,$pressed:h,$variant:d,onClick:p?void 0:m,className:v,children:x()})};S.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 32px;
`;S.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;S.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;S.div`
  color: var(--Text-Primary, #FFFFFF);
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 8px;
`;S.div`
  color: var(--Text-Assist, #B6C3D6);
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.2px;
  margin-bottom: 4px;
`;S.div`
  width: 100%;
  background: var(--Colors-Surface-Backgronud--02, #2A3649);
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;S(N3)`
  border-radius: 0;
`;S(vx).attrs({length:"calc(100% - 32px)"})`
  margin-left: 16px; /* Indent the divider */
`;S.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 32px;
`;S.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;S.div`
  color: var(--Text-Primary, #FFFFFF);
  font-family: Roboto, sans-serif;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 8px;
`;const Mx=S.div`
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
`,Ax=S.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`,Bx=S.div`
  width: 32px;
  height: 4px;
  opacity: 0.80;
  background: var(--Border-border-divider-01, #4B596C);
  border-radius: 2px;
`,$x=S.div`
  width: 100%;
  padding: 0 12px;
  min-height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`,Dx=S.span`
  color: var(--Text-secondary, #D5E2F2);
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.20px;
`,Vx=S.div`
  width: 100%;
  padding: 16px 16px 32px 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Ix=S.p`
  color: var(--Text-secondary, #D5E2F2);
  font-family: Roboto, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.20px;
  margin: 0;
`;S(N3)`
  border-radius: 0;
`;const Fx=S.div`
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
`,Nx=S.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
  padding: 0;
`,Ju=S.button`
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 0;
  width: 80px;
`,ec=S.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`,tc=S.span`
  color: var(--Text-secondary, #D5E2F2);
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.20px;
`;S.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;S.div`
  width: 100%;
  padding: 16px;
  background: var(--Common-Control-Base-normal, #364356);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;S.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;S.span`
  color: var(--Text-Primary, #ffffff);
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.20px;
`;S.div`
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
`;S.div`
  height: 1px;
  width: 100%;
  background: var(--Border-border-divider-01, #4B596C);
`;S.div`
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
`;S.div`
  width: ${e=>e.width}px;
  height: ${e=>e.height}px;
  left: ${e=>e.left}px;
  top: ${e=>e.top}px;
  position: absolute;
  background: ${e=>e.bg};
  ${e=>e.rotate?`transform: rotate(${e.rotate}deg); transform-origin: top left;`:""}
`;S.div`
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
`;S.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
`;S.div`
  width: ${e=>e.active?"24px":"6px"};
  height: 6px;
  border-radius: ${e=>e.active?"8px":"50%"};
  background: var(--Button-primary-content-normal, white);
  opacity: ${e=>e.active?1:.4};
  transition: all 0.3s ease;
`;const zx=({title:e="Bottom sheets title",children:r,className:i,style:s,showTitleBar:l=!0,showCloseButton:d=!1,showBackButton:p=!1,showDragBar:h=!0,showGestureBar:m=!0,showInfoText:v=!0,infoText:y="Lorem ipsum dolor sit amet, consectetur adipiscing elit.",showButton:x=!1,buttonText:C="Button",onButtonClick:b,onBack:j,onClose:L,showSecondaryButton:P=!1,secondaryButtonText:D="Secondary Button",onSecondaryButtonClick:A})=>c.jsxs(Mx,{className:i,style:s,children:[h&&c.jsx(Ax,{children:c.jsx(Bx,{})}),l&&c.jsxs($x,{children:[c.jsx("div",{style:{width:"24px",display:"flex",alignItems:"center"},children:p&&c.jsx(Gi,{name:"arrow-left",size:24,color:"white",style:{cursor:"pointer"},onClick:j})}),c.jsx("div",{style:{flex:1,display:"flex",justifyContent:"center"},children:c.jsx(Dx,{children:e})}),c.jsx("div",{style:{width:"24px",display:"flex",alignItems:"center",justifyContent:"flex-end"},children:d&&c.jsx(Gi,{name:"close",size:24,color:"white",style:{cursor:"pointer"},onClick:L})})]}),c.jsxs(Vx,{children:[v&&c.jsx(Ix,{children:y}),r]}),m&&c.jsx(Fx,{})]});S.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
`;S.div`
  color: var(--Text-Assist, #B6C3D6);
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 400;
`;const Ox=S.div`
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
`,_x=S.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 16px;
`,Rs=S.button`
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
`,Hx=S.div`
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
`,Ux=()=>c.jsx("svg",{width:"0",height:"0",style:{position:"absolute",opacity:0,pointerEvents:"none"},children:c.jsx("defs",{children:c.jsxs("linearGradient",{id:"nav-active-gradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[c.jsx("stop",{offset:"35%",stopColor:"#33C2E9"}),c.jsx("stop",{offset:"100%",stopColor:"#1A5EFF"})]})})}),Wx=({activeTab:e="gallery",onTabChange:r,className:i,style:s})=>{const l=h=>{r&&r(h)},d=h=>e===h?"url(#nav-active-gradient)":"rgba(213, 226, 242, 0.70)",p=h=>e===h?36:28;return c.jsxs(Ox,{className:i,style:s,children:[c.jsx(Ux,{}),c.jsxs(_x,{children:[c.jsx(Rs,{$active:e==="vive",onClick:()=>l("vive"),children:c.jsx(dc,{size:p("vive"),color:d("vive")})}),c.jsx(Rs,{$active:e==="gallery",onClick:()=>l("gallery"),children:c.jsx(Zp,{size:p("gallery"),color:d("gallery")})}),c.jsx(Rs,{$active:e==="explore",onClick:()=>l("explore"),children:c.jsx(Kp,{size:p("explore"),color:d("explore")})}),c.jsx(Rs,{$active:e==="settings",onClick:()=>l("settings"),children:c.jsx(Gp,{size:p("settings"),color:d("settings")})})]}),c.jsx(Hx,{})]})};S.div`
  width: 56px;
  height: 56px;
  border-radius: ${e=>e.$active?"999px":"0"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;const Zx={p3bc5e4f0:"M0.47644 8.94429C0.277476 9.08382 0 8.94524 0 8.70633V0.293666C0 0.0547732 0.277455 -0.08381 0.476422 0.0557019L6.47488 4.2617C6.6417 4.37867 6.64171 4.62063 6.4749 4.73761L0.47644 8.94429Z"},fp=""+new URL("a925da9a632a62c6688a36630c32e8262a543064-6rjdPHjm.png",import.meta.url).href,pp=""+new URL("5dd438242519d928627f577f107e32a60f8d5b60-S1QzgIXr.png",import.meta.url).href,hp=""+new URL("f6443d6bac0ed38f8af9a609a03ba10208b9d301-DTZP8pWM.png",import.meta.url).href,mp=""+new URL("cf4527f77029fc7b4749f6da2193dd4fdce44e71-B-99GF7n.png",import.meta.url).href,Ms=""+new URL("532b7e68debe672948f0f63954b5332da9d71b2b-BjP_uuxc.png",import.meta.url).href,Kx=S.div`
  position: relative;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  height: 100vh;
  background: var(--Colors-Surface-Backgronud--01);
  overflow: hidden;
`,Gx=S.div`
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  bottom: ${e=>e.$isSelectMode?"0":"56px"};
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 16px;
  padding-bottom: ${e=>e.$isSelectMode?"16px":"48px"};

  /* 自定義滾動條 */
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--Common-Control-Base-normal);
    border-radius: 9999px;
  }
`,Yx=S.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 16px 8px 8px;
  gap: 8px;
`,Qx=S.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
  transition: all 0.2s ease-out;

  ${e=>e.$isDeleting&&`
    opacity: 0;
    transform: scaleY(0);
    max-height: 0;
    margin-bottom: 0;
    overflow: hidden;
  `}
`,Xx=S.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  gap: 8px;
  min-height: 28px;
`,qx=S.p`
  flex: 1;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0.2px;
  color: var(--Text-Primary);
  margin: 0;
`,Jx=S.div`
  position: relative;
  width: 100%;
  max-width: 328px;
  height: ${e=>e.$height}px;
  transition: height 0.2s ease-out;
`,eC=S.div`
  position: absolute;
  left: ${e=>e.$position.left}px;
  top: ${e=>e.$position.top}px;
  width: ${e=>e.$size.width}px;
  height: ${e=>e.$size.height}px;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s ease-out;

  ${e=>e.$isDeleting&&`
    opacity: 0;
    transform: scale(0);
  `}
`,tC=S.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,nC=S.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 40px;
  background: linear-gradient(
    to top,
    rgba(33, 42, 57, 0) 0%,
    rgba(33, 42, 57, 0.05) 20.5%,
    rgba(33, 42, 57, 0.8) 100%
  );
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 8px;
  pointer-events: ${e=>e.$isSelectMode?"auto":"none"};
  opacity: ${e=>e.$isSelectMode?1:0};
  transition: opacity 0.2s ease-out;
`,rC=S.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 179, 227, 0.3);
  opacity: ${e=>e.$isSelected?1:0};
  transition: opacity 0.2s ease-out;
  pointer-events: none;
`,iC=S.div`
  position: absolute;
  left: 8px;
  top: 8px;
  display: flex;
  align-items: center;
  gap: 4px;
  pointer-events: none;
`,oC=S.p`
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: var(--Text-Primary);
  margin: 0;
`,sC=S.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${e=>e.$show?1:0};
  pointer-events: ${e=>e.$show?"auto":"none"};
  transition: opacity 0.2s ease-out;
`,aC=S.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  transform: translateY(${e=>e.$show?"0":"100%"});
  transition: transform 0.2s ease-out;
`,lC=[{id:"may18-1",type:"video",thumbnail:fp,duration:"00:08",date:"May 18"},{id:"may18-2",type:"image",thumbnail:pp,date:"May 18"},{id:"may18-3",type:"image",thumbnail:hp,date:"May 18"},{id:"may18-4",type:"image",thumbnail:mp,date:"May 18"},{id:"may18-5",type:"image",thumbnail:Ms,date:"May 18"},{id:"may18-6",type:"image",thumbnail:Ms,date:"May 18"},{id:"may17-1",type:"image",thumbnail:mp,date:"May 17"},{id:"may17-2",type:"image",thumbnail:Ms,date:"May 17"},{id:"may17-3",type:"image",thumbnail:Ms,date:"May 17"},{id:"may17-4",type:"image",thumbnail:fp,date:"May 17"},{id:"may17-5",type:"image",thumbnail:pp,date:"May 17"},{id:"may17-6",type:"image",thumbnail:hp,date:"May 17"}],uC=e=>e<=3?216:328,cC=[{left:0,top:0,width:216,height:216},{left:224,top:0,width:104,height:104},{left:224,top:112,width:104,height:104},{left:0,top:224,width:104,height:104},{left:112,top:224,width:104,height:104},{left:224,top:224,width:104,height:104}];function dC(){const[e,r]=_.useState(lC),[i,s]=_.useState(!1),[l,d]=_.useState(new Set),[p,h]=_.useState(!1),[m,v]=_.useState(!1),[y,x]=_.useState(new Set),[C,b]=_.useState("gallery"),j=e.reduce((B,Q)=>(B[Q.date]||(B[Q.date]=[]),B[Q.date].push(Q),B),{}),L=()=>{s(!0)},P=()=>{s(!1),d(new Set),h(!1)},D=B=>{const Q=new Set(l);Q.has(B)?Q.delete(B):Q.add(B),d(Q),Q.size>0?h(!0):h(!1)},A=B=>{const G=(j[B]||[]).map(ue=>ue.id),ae=G.every(ue=>l.has(ue)),he=new Set(l);ae?G.forEach(ue=>he.delete(ue)):G.forEach(ue=>he.add(ue)),d(he),he.size>0?h(!0):h(!1)},F=()=>{v(!0)},N=()=>{x(new Set(l)),v(!1),h(!1),setTimeout(()=>{r(B=>B.filter(Q=>!l.has(Q.id))),d(new Set),x(new Set),s(!1)},200)},W=()=>{v(!1)},q=()=>{console.log("分享選中的項目:",Array.from(l))},V=()=>{console.log("下載選中的項目:",Array.from(l))};return c.jsxs(Kx,{children:[c.jsx(gx,{batteryLevel:80}),c.jsxs(Gx,{$isSelectMode:i,children:[c.jsx(Yx,{children:i?c.jsxs(c.Fragment,{children:[c.jsxs("span",{style:{flex:1,fontFamily:"Roboto",fontSize:"16px",fontWeight:500,lineHeight:"22px",letterSpacing:"0.2px",color:"var(--Text-Primary)"},children:[l.size," items selected"]}),c.jsx(Bn,{variant:"outlined",onClick:P,children:"Cancel"})]}):c.jsx(Bn,{variant:"filled-secondary",onClick:L,children:"Select"})}),Object.entries(j).map(([B,Q])=>{const G=Q.map(me=>me.id),ae=G.filter(me=>l.has(me)).length,he=ae===G.length&&G.length>0,ue=ae>0&&ae<G.length,we=G.every(me=>y.has(me)),Le=Math.min(Q.length,6),ke=uC(Le);return c.jsxs(Qx,{$isDeleting:we,children:[c.jsxs(Xx,{children:[c.jsx(qx,{children:B}),i&&c.jsx(O2,{checked:he,indeterminate:ue,onChange:()=>A(B),size:20,shape:"rounded"})]}),c.jsx(Jx,{style:{margin:"0 auto"},$height:ke,children:Q.slice(0,6).map((me,H)=>{const X=cC[H],Z=l.has(me.id),E=y.has(me.id);return c.jsxs(eC,{$position:{left:X.left,top:X.top},$size:{width:X.width,height:X.height},$isDeleting:E,onClick:()=>i&&D(me.id),children:[c.jsx(tC,{src:me.thumbnail,alt:""}),me.type==="video"&&c.jsxs(iC,{children:[c.jsx("div",{style:{width:"12px",height:"12px"},children:c.jsx("svg",{viewBox:"0 0 6.6 9",fill:"none",children:c.jsx("path",{d:Zx.p3bc5e4f0,fill:"white"})})}),c.jsx(oC,{children:me.duration})]}),c.jsx(nC,{$isSelectMode:i,$isSelected:Z,children:c.jsx(O2,{checked:Z,onChange:()=>D(me.id),size:20,shape:"rounded"})}),c.jsx(rC,{$isSelected:Z&&i})]},me.id)})})]},B)})]}),!i&&c.jsx(Wx,{activeTab:C,onTabChange:b}),i&&p&&c.jsx("div",{style:{height:"56px"}}),c.jsx(aC,{$show:p&&i,children:c.jsx(zx,{title:`${l.size} items selected`,showTitleBar:!1,showDragBar:!1,showInfoText:!1,showGestureBar:!0,children:c.jsxs(Nx,{children:[c.jsxs(Ju,{onClick:q,children:[c.jsx(ec,{children:c.jsx(Gi,{name:"share",size:24,color:"white"})}),c.jsx(tc,{children:"Share"})]}),c.jsxs(Ju,{onClick:V,children:[c.jsx(ec,{children:c.jsx(Gi,{name:"download",size:24,color:"white"})}),c.jsx(tc,{children:"Download"})]}),c.jsxs(Ju,{onClick:F,children:[c.jsx(ec,{children:c.jsx(Gi,{name:"delete",size:24,color:"white"})}),c.jsx(tc,{children:"Delete"})]})]})})}),c.jsx(sC,{$show:m,onClick:W,children:c.jsx("div",{onClick:B=>B.stopPropagation(),children:c.jsx(Ex,{title:`Delete ${l.size} files`,description:"The selected files will be deleted from your phone.",cancelText:"Cancel",confirmText:"Delete",onCancel:W,onConfirm:N})})})]})}W5.createRoot(document.getElementById("root")).render(c.jsx(dC,{}));
