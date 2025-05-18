(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();var Md={exports:{}},_l={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z_;function YS(){if(z_)return _l;z_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:r,type:s,key:f,ref:o!==void 0?o:null,props:u}}return _l.Fragment=t,_l.jsx=n,_l.jsxs=n,_l}var j_;function XS(){return j_||(j_=1,Md.exports=YS()),Md.exports}var K=XS(),Vd={exports:{}},Rt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B_;function $S(){if(B_)return Rt;B_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),S=Symbol.iterator;function C(D){return D===null||typeof D!="object"?null:(D=S&&D[S]||D["@@iterator"],typeof D=="function"?D:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,et={};function W(D,Z,it){this.props=D,this.context=Z,this.refs=et,this.updater=it||B}W.prototype.isReactComponent={},W.prototype.setState=function(D,Z){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,Z,"setState")},W.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function lt(){}lt.prototype=W.prototype;function mt(D,Z,it){this.props=D,this.context=Z,this.refs=et,this.updater=it||B}var rt=mt.prototype=new lt;rt.constructor=mt,$(rt,W.prototype),rt.isPureReactComponent=!0;var Et=Array.isArray,ut={H:null,A:null,T:null,S:null,V:null},wt=Object.prototype.hasOwnProperty;function M(D,Z,it,J,dt,Dt){return it=Dt.ref,{$$typeof:r,type:D,key:Z,ref:it!==void 0?it:null,props:Dt}}function w(D,Z){return M(D.type,Z,void 0,void 0,void 0,D.props)}function b(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function N(D){var Z={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(it){return Z[it]})}var V=/\/+/g;function k(D,Z){return typeof D=="object"&&D!==null&&D.key!=null?N(""+D.key):Z.toString(36)}function I(){}function Pe(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(I,I):(D.status="pending",D.then(function(Z){D.status==="pending"&&(D.status="fulfilled",D.value=Z)},function(Z){D.status==="pending"&&(D.status="rejected",D.reason=Z)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function se(D,Z,it,J,dt){var Dt=typeof D;(Dt==="undefined"||Dt==="boolean")&&(D=null);var Tt=!1;if(D===null)Tt=!0;else switch(Dt){case"bigint":case"string":case"number":Tt=!0;break;case"object":switch(D.$$typeof){case r:case t:Tt=!0;break;case E:return Tt=D._init,se(Tt(D._payload),Z,it,J,dt)}}if(Tt)return dt=dt(D),Tt=J===""?"."+k(D,0):J,Et(dt)?(it="",Tt!=null&&(it=Tt.replace(V,"$&/")+"/"),se(dt,Z,it,"",function(Qn){return Qn})):dt!=null&&(b(dt)&&(dt=w(dt,it+(dt.key==null||D&&D.key===dt.key?"":(""+dt.key).replace(V,"$&/")+"/")+Tt)),Z.push(dt)),1;Tt=0;var Ie=J===""?".":J+":";if(Et(D))for(var Wt=0;Wt<D.length;Wt++)J=D[Wt],Dt=Ie+k(J,Wt),Tt+=se(J,Z,it,Dt,dt);else if(Wt=C(D),typeof Wt=="function")for(D=Wt.call(D),Wt=0;!(J=D.next()).done;)J=J.value,Dt=Ie+k(J,Wt++),Tt+=se(J,Z,it,Dt,dt);else if(Dt==="object"){if(typeof D.then=="function")return se(Pe(D),Z,it,J,dt);throw Z=String(D),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return Tt}function H(D,Z,it){if(D==null)return D;var J=[],dt=0;return se(D,J,"","",function(Dt){return Z.call(it,Dt,dt++)}),J}function nt(D){if(D._status===-1){var Z=D._result;Z=Z(),Z.then(function(it){(D._status===0||D._status===-1)&&(D._status=1,D._result=it)},function(it){(D._status===0||D._status===-1)&&(D._status=2,D._result=it)}),D._status===-1&&(D._status=0,D._result=Z)}if(D._status===1)return D._result.default;throw D._result}var ht=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function jt(){}return Rt.Children={map:H,forEach:function(D,Z,it){H(D,function(){Z.apply(this,arguments)},it)},count:function(D){var Z=0;return H(D,function(){Z++}),Z},toArray:function(D){return H(D,function(Z){return Z})||[]},only:function(D){if(!b(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Rt.Component=W,Rt.Fragment=n,Rt.Profiler=o,Rt.PureComponent=mt,Rt.StrictMode=s,Rt.Suspense=p,Rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ut,Rt.__COMPILER_RUNTIME={__proto__:null,c:function(D){return ut.H.useMemoCache(D)}},Rt.cache=function(D){return function(){return D.apply(null,arguments)}},Rt.cloneElement=function(D,Z,it){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var J=$({},D.props),dt=D.key,Dt=void 0;if(Z!=null)for(Tt in Z.ref!==void 0&&(Dt=void 0),Z.key!==void 0&&(dt=""+Z.key),Z)!wt.call(Z,Tt)||Tt==="key"||Tt==="__self"||Tt==="__source"||Tt==="ref"&&Z.ref===void 0||(J[Tt]=Z[Tt]);var Tt=arguments.length-2;if(Tt===1)J.children=it;else if(1<Tt){for(var Ie=Array(Tt),Wt=0;Wt<Tt;Wt++)Ie[Wt]=arguments[Wt+2];J.children=Ie}return M(D.type,dt,void 0,void 0,Dt,J)},Rt.createContext=function(D){return D={$$typeof:f,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:u,_context:D},D},Rt.createElement=function(D,Z,it){var J,dt={},Dt=null;if(Z!=null)for(J in Z.key!==void 0&&(Dt=""+Z.key),Z)wt.call(Z,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(dt[J]=Z[J]);var Tt=arguments.length-2;if(Tt===1)dt.children=it;else if(1<Tt){for(var Ie=Array(Tt),Wt=0;Wt<Tt;Wt++)Ie[Wt]=arguments[Wt+2];dt.children=Ie}if(D&&D.defaultProps)for(J in Tt=D.defaultProps,Tt)dt[J]===void 0&&(dt[J]=Tt[J]);return M(D,Dt,void 0,void 0,null,dt)},Rt.createRef=function(){return{current:null}},Rt.forwardRef=function(D){return{$$typeof:m,render:D}},Rt.isValidElement=b,Rt.lazy=function(D){return{$$typeof:E,_payload:{_status:-1,_result:D},_init:nt}},Rt.memo=function(D,Z){return{$$typeof:y,type:D,compare:Z===void 0?null:Z}},Rt.startTransition=function(D){var Z=ut.T,it={};ut.T=it;try{var J=D(),dt=ut.S;dt!==null&&dt(it,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(jt,ht)}catch(Dt){ht(Dt)}finally{ut.T=Z}},Rt.unstable_useCacheRefresh=function(){return ut.H.useCacheRefresh()},Rt.use=function(D){return ut.H.use(D)},Rt.useActionState=function(D,Z,it){return ut.H.useActionState(D,Z,it)},Rt.useCallback=function(D,Z){return ut.H.useCallback(D,Z)},Rt.useContext=function(D){return ut.H.useContext(D)},Rt.useDebugValue=function(){},Rt.useDeferredValue=function(D,Z){return ut.H.useDeferredValue(D,Z)},Rt.useEffect=function(D,Z,it){var J=ut.H;if(typeof it=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return J.useEffect(D,Z)},Rt.useId=function(){return ut.H.useId()},Rt.useImperativeHandle=function(D,Z,it){return ut.H.useImperativeHandle(D,Z,it)},Rt.useInsertionEffect=function(D,Z){return ut.H.useInsertionEffect(D,Z)},Rt.useLayoutEffect=function(D,Z){return ut.H.useLayoutEffect(D,Z)},Rt.useMemo=function(D,Z){return ut.H.useMemo(D,Z)},Rt.useOptimistic=function(D,Z){return ut.H.useOptimistic(D,Z)},Rt.useReducer=function(D,Z,it){return ut.H.useReducer(D,Z,it)},Rt.useRef=function(D){return ut.H.useRef(D)},Rt.useState=function(D){return ut.H.useState(D)},Rt.useSyncExternalStore=function(D,Z,it){return ut.H.useSyncExternalStore(D,Z,it)},Rt.useTransition=function(){return ut.H.useTransition()},Rt.version="19.1.0",Rt}var q_;function Rm(){return q_||(q_=1,Vd.exports=$S()),Vd.exports}var bt=Rm(),Pd={exports:{}},vl={},kd={exports:{}},xd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H_;function ZS(){return H_||(H_=1,function(r){function t(H,nt){var ht=H.length;H.push(nt);t:for(;0<ht;){var jt=ht-1>>>1,D=H[jt];if(0<o(D,nt))H[jt]=nt,H[ht]=D,ht=jt;else break t}}function n(H){return H.length===0?null:H[0]}function s(H){if(H.length===0)return null;var nt=H[0],ht=H.pop();if(ht!==nt){H[0]=ht;t:for(var jt=0,D=H.length,Z=D>>>1;jt<Z;){var it=2*(jt+1)-1,J=H[it],dt=it+1,Dt=H[dt];if(0>o(J,ht))dt<D&&0>o(Dt,J)?(H[jt]=Dt,H[dt]=ht,jt=dt):(H[jt]=J,H[it]=ht,jt=it);else if(dt<D&&0>o(Dt,ht))H[jt]=Dt,H[dt]=ht,jt=dt;else break t}}return nt}function o(H,nt){var ht=H.sortIndex-nt.sortIndex;return ht!==0?ht:H.id-nt.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,m=f.now();r.unstable_now=function(){return f.now()-m}}var p=[],y=[],E=1,S=null,C=3,B=!1,$=!1,et=!1,W=!1,lt=typeof setTimeout=="function"?setTimeout:null,mt=typeof clearTimeout=="function"?clearTimeout:null,rt=typeof setImmediate<"u"?setImmediate:null;function Et(H){for(var nt=n(y);nt!==null;){if(nt.callback===null)s(y);else if(nt.startTime<=H)s(y),nt.sortIndex=nt.expirationTime,t(p,nt);else break;nt=n(y)}}function ut(H){if(et=!1,Et(H),!$)if(n(p)!==null)$=!0,wt||(wt=!0,k());else{var nt=n(y);nt!==null&&se(ut,nt.startTime-H)}}var wt=!1,M=-1,w=5,b=-1;function N(){return W?!0:!(r.unstable_now()-b<w)}function V(){if(W=!1,wt){var H=r.unstable_now();b=H;var nt=!0;try{t:{$=!1,et&&(et=!1,mt(M),M=-1),B=!0;var ht=C;try{e:{for(Et(H),S=n(p);S!==null&&!(S.expirationTime>H&&N());){var jt=S.callback;if(typeof jt=="function"){S.callback=null,C=S.priorityLevel;var D=jt(S.expirationTime<=H);if(H=r.unstable_now(),typeof D=="function"){S.callback=D,Et(H),nt=!0;break e}S===n(p)&&s(p),Et(H)}else s(p);S=n(p)}if(S!==null)nt=!0;else{var Z=n(y);Z!==null&&se(ut,Z.startTime-H),nt=!1}}break t}finally{S=null,C=ht,B=!1}nt=void 0}}finally{nt?k():wt=!1}}}var k;if(typeof rt=="function")k=function(){rt(V)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,Pe=I.port2;I.port1.onmessage=V,k=function(){Pe.postMessage(null)}}else k=function(){lt(V,0)};function se(H,nt){M=lt(function(){H(r.unstable_now())},nt)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(H){H.callback=null},r.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<H?Math.floor(1e3/H):5},r.unstable_getCurrentPriorityLevel=function(){return C},r.unstable_next=function(H){switch(C){case 1:case 2:case 3:var nt=3;break;default:nt=C}var ht=C;C=nt;try{return H()}finally{C=ht}},r.unstable_requestPaint=function(){W=!0},r.unstable_runWithPriority=function(H,nt){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ht=C;C=H;try{return nt()}finally{C=ht}},r.unstable_scheduleCallback=function(H,nt,ht){var jt=r.unstable_now();switch(typeof ht=="object"&&ht!==null?(ht=ht.delay,ht=typeof ht=="number"&&0<ht?jt+ht:jt):ht=jt,H){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=ht+D,H={id:E++,callback:nt,priorityLevel:H,startTime:ht,expirationTime:D,sortIndex:-1},ht>jt?(H.sortIndex=ht,t(y,H),n(p)===null&&H===n(y)&&(et?(mt(M),M=-1):et=!0,se(ut,ht-jt))):(H.sortIndex=D,t(p,H),$||B||($=!0,wt||(wt=!0,k()))),H},r.unstable_shouldYield=N,r.unstable_wrapCallback=function(H){var nt=C;return function(){var ht=C;C=nt;try{return H.apply(this,arguments)}finally{C=ht}}}}(xd)),xd}var F_;function WS(){return F_||(F_=1,kd.exports=ZS()),kd.exports}var Ud={exports:{}},Ge={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G_;function JS(){if(G_)return Ge;G_=1;var r=Rm();function t(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)y+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(p,y,E){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:S==null?null:""+S,children:p,containerInfo:y,implementation:E}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Ge.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ge.createPortal=function(p,y){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(t(299));return u(p,y,null,E)},Ge.flushSync=function(p){var y=f.T,E=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=y,s.p=E,s.d.f()}},Ge.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(p,y))},Ge.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Ge.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var E=y.as,S=m(E,y.crossOrigin),C=typeof y.integrity=="string"?y.integrity:void 0,B=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;E==="style"?s.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:S,integrity:C,fetchPriority:B}):E==="script"&&s.d.X(p,{crossOrigin:S,integrity:C,fetchPriority:B,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Ge.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var E=m(y.as,y.crossOrigin);s.d.M(p,{crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(p)},Ge.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var E=y.as,S=m(E,y.crossOrigin);s.d.L(p,E,{crossOrigin:S,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Ge.preloadModule=function(p,y){if(typeof p=="string")if(y){var E=m(y.as,y.crossOrigin);s.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:E,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(p)},Ge.requestFormReset=function(p){s.d.r(p)},Ge.unstable_batchedUpdates=function(p,y){return p(y)},Ge.useFormState=function(p,y,E){return f.H.useFormState(p,y,E)},Ge.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ge.version="19.1.0",Ge}var K_;function tw(){if(K_)return Ud.exports;K_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Ud.exports=JS(),Ud.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q_;function ew(){if(Q_)return vl;Q_=1;var r=WS(),t=Rm(),n=tw();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(s(188))}function p(e){var i=e.alternate;if(!i){if(i=u(e),i===null)throw Error(s(188));return i!==e?null:e}for(var a=e,l=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return m(h),e;if(d===l)return m(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=h,l=d;else{for(var v=!1,T=h.child;T;){if(T===a){v=!0,a=h,l=d;break}if(T===l){v=!0,l=h,a=d;break}T=T.sibling}if(!v){for(T=d.child;T;){if(T===a){v=!0,a=d,l=h;break}if(T===l){v=!0,l=d,a=h;break}T=T.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:i}function y(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=y(e),i!==null)return i;e=e.sibling}return null}var E=Object.assign,S=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),B=Symbol.for("react.portal"),$=Symbol.for("react.fragment"),et=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),lt=Symbol.for("react.provider"),mt=Symbol.for("react.consumer"),rt=Symbol.for("react.context"),Et=Symbol.for("react.forward_ref"),ut=Symbol.for("react.suspense"),wt=Symbol.for("react.suspense_list"),M=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function k(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var I=Symbol.for("react.client.reference");function Pe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===I?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $:return"Fragment";case W:return"Profiler";case et:return"StrictMode";case ut:return"Suspense";case wt:return"SuspenseList";case b:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case B:return"Portal";case rt:return(e.displayName||"Context")+".Provider";case mt:return(e._context.displayName||"Context")+".Consumer";case Et:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case M:return i=e.displayName||null,i!==null?i:Pe(e.type)||"Memo";case w:i=e._payload,e=e._init;try{return Pe(e(i))}catch{}}return null}var se=Array.isArray,H=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,nt=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ht={pending:!1,data:null,method:null,action:null},jt=[],D=-1;function Z(e){return{current:e}}function it(e){0>D||(e.current=jt[D],jt[D]=null,D--)}function J(e,i){D++,jt[D]=e.current,e.current=i}var dt=Z(null),Dt=Z(null),Tt=Z(null),Ie=Z(null);function Wt(e,i){switch(J(Tt,i),J(Dt,e),J(dt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?d_(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=d_(i),e=m_(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}it(dt),J(dt,e)}function Qn(){it(dt),it(Dt),it(Tt)}function Zi(e){e.memoizedState!==null&&J(Ie,e);var i=dt.current,a=m_(i,e.type);i!==a&&(J(Dt,e),J(dt,a))}function _i(e){Dt.current===e&&(it(dt),it(Dt)),Ie.current===e&&(it(Ie),dl._currentValue=ht)}var Yr=Object.prototype.hasOwnProperty,Xr=r.unstable_scheduleCallback,$r=r.unstable_cancelCallback,uo=r.unstable_shouldYield,Wl=r.unstable_requestPaint,vn=r.unstable_now,Nh=r.unstable_getCurrentPriorityLevel,co=r.unstable_ImmediatePriority,Qs=r.unstable_UserBlockingPriority,Zr=r.unstable_NormalPriority,Mh=r.unstable_LowPriority,Ys=r.unstable_IdlePriority,ho=r.log,Jl=r.unstable_setDisableYieldValue,ae=null,Ft=null;function on(e){if(typeof ho=="function"&&Jl(e),Ft&&typeof Ft.setStrictMode=="function")try{Ft.setStrictMode(ae,e)}catch{}}var He=Math.clz32?Math.clz32:Wr,tu=Math.log,Vh=Math.LN2;function Wr(e){return e>>>=0,e===0?32:31-(tu(e)/Vh|0)|0}var Jr=256,ts=4194304;function Pn(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xs(e,i,a){var l=e.pendingLanes;if(l===0)return 0;var h=0,d=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var T=l&134217727;return T!==0?(l=T&~d,l!==0?h=Pn(l):(v&=T,v!==0?h=Pn(v):a||(a=T&~e,a!==0&&(h=Pn(a))))):(T=l&~d,T!==0?h=Pn(T):v!==0?h=Pn(v):a||(a=l&~e,a!==0&&(h=Pn(a)))),h===0?0:i!==0&&i!==h&&(i&d)===0&&(d=h&-h,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:h}function es(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function fo(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mo(){var e=Jr;return Jr<<=1,(Jr&4194048)===0&&(Jr=256),e}function go(){var e=ts;return ts<<=1,(ts&62914560)===0&&(ts=4194304),e}function vi(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function Ei(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function po(e,i,a,l,h,d){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,R=e.expirationTimes,L=e.hiddenUpdates;for(a=v&~a;0<a;){var F=31-He(a),Q=1<<F;T[F]=0,R[F]=-1;var z=L[F];if(z!==null)for(L[F]=null,F=0;F<z.length;F++){var j=z[F];j!==null&&(j.lane&=-536870913)}a&=~Q}l!==0&&Yn(e,l,0),d!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=d&~(v&~i))}function Yn(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-He(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194090}function yo(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var l=31-He(a),h=1<<l;h&i|e[l]&i&&(e[l]|=i),a&=~h}}function Wi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function $s(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ji(){var e=nt.p;return e!==0?e:(e=window.event,e===void 0?32:V_(e.type))}function eu(e,i){var a=nt.p;try{return nt.p=e,i()}finally{nt.p=a}}var ee=Math.random().toString(36).slice(2),Ee="__reactFiber$"+ee,de="__reactProps$"+ee,En="__reactContainer$"+ee,_o="__reactEvents$"+ee,Ph="__reactListeners$"+ee,tr="__reactHandles$"+ee,nu="__reactResources$"+ee,ns="__reactMarker$"+ee;function er(e){delete e[Ee],delete e[de],delete e[_o],delete e[Ph],delete e[tr]}function Ti(e){var i=e[Ee];if(i)return i;for(var a=e.parentNode;a;){if(i=a[En]||a[Ee]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=__(e);e!==null;){if(a=e[Ee])return a;e=__(e)}return i}e=a,a=e.parentNode}return null}function Xn(e){if(e=e[Ee]||e[En]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function $n(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function $e(e){var i=e[nu];return i||(i=e[nu]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function ue(e){e[ns]=!0}var vo=new Set,Zs={};function kn(e,i){Ai(e,i),Ai(e+"Capture",i)}function Ai(e,i){for(Zs[e]=i,e=0;e<i.length;e++)vo.add(i[e])}var iu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ru={},is={};function su(e){return Yr.call(is,e)?!0:Yr.call(ru,e)?!1:iu.test(e)?is[e]=!0:(ru[e]=!0,!1)}function nr(e,i,a){if(su(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function Zn(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function ke(e,i,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+l)}}var rs,au;function Si(e){if(rs===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);rs=i&&i[1]||"",au=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+rs+e+au}var Ws=!1;function Js(e,i){if(!e||Ws)return"";Ws=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(j){var z=j}Reflect.construct(e,[],Q)}else{try{Q.call()}catch(j){z=j}e.call(Q.prototype)}}else{try{throw Error()}catch(j){z=j}(Q=e())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(j){if(j&&z&&typeof j.stack=="string")return[j.stack,z.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),v=d[0],T=d[1];if(v&&T){var R=v.split(`
`),L=T.split(`
`);for(h=l=0;l<R.length&&!R[l].includes("DetermineComponentFrameRoot");)l++;for(;h<L.length&&!L[h].includes("DetermineComponentFrameRoot");)h++;if(l===R.length||h===L.length)for(l=R.length-1,h=L.length-1;1<=l&&0<=h&&R[l]!==L[h];)h--;for(;1<=l&&0<=h;l--,h--)if(R[l]!==L[h]){if(l!==1||h!==1)do if(l--,h--,0>h||R[l]!==L[h]){var F=`
`+R[l].replace(" at new "," at ");return e.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",e.displayName)),F}while(1<=l&&0<=h);break}}}finally{Ws=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Si(a):""}function Eo(e){switch(e.tag){case 26:case 27:case 5:return Si(e.type);case 16:return Si("Lazy");case 13:return Si("Suspense");case 19:return Si("SuspenseList");case 0:case 15:return Js(e.type,!1);case 11:return Js(e.type.render,!1);case 1:return Js(e.type,!0);case 31:return Si("Activity");default:return""}}function ta(e){try{var i="";do i+=Eo(e),e=e.return;while(e);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Ze(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function To(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function kh(e){var i=To(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),l=""+e[i];if(!e.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,d=a.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(v){l=""+v,d.call(this,v)}}),Object.defineProperty(e,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(v){l=""+v},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function ea(e){e._valueTracker||(e._valueTracker=kh(e))}function Ao(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return e&&(l=To(e)?e.checked?"true":"false":e.value),e=l,e!==a?(i.setValue(e),!0):!1}function ss(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var xh=/[\n"\\]/g;function me(e){return e.replace(xh,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function ln(e,i,a,l,h,d,v,T){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),i!=null?v==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+Ze(i)):e.value!==""+Ze(i)&&(e.value=""+Ze(i)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),i!=null?ir(e,v,Ze(i)):a!=null?ir(e,v,Ze(a)):l!=null&&e.removeAttribute("value"),h==null&&d!=null&&(e.defaultChecked=!!d),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+Ze(T):e.removeAttribute("name")}function as(e,i,a,l,h,d,v,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+Ze(a):"",i=i!=null?""+Ze(i):a,T||i===e.value||(e.value=i),e.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=T?e.checked:!!l,e.defaultChecked=!!l,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v)}function ir(e,i,a){i==="number"&&ss(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function wi(e,i,a,l){if(e=e.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<e.length;a++)h=i.hasOwnProperty("$"+e[a].value),e[a].selected!==h&&(e[a].selected=h),h&&l&&(e[a].defaultSelected=!0)}else{for(a=""+Ze(a),i=null,h=0;h<e.length;h++){if(e[h].value===a){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function Qt(e,i,a){if(i!=null&&(i=""+Ze(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+Ze(a):""}function os(e,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(se(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=Ze(i),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function Tn(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var ls=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ou(e,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,a):typeof a!="number"||a===0||ls.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function So(e,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&ou(e,h,l)}else for(var d in i)i.hasOwnProperty(d)&&ou(e,d,i[d])}function wo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Uh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Lh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function na(e){return Lh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var bi=null;function An(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ri=null,Ii=null;function bo(e){var i=Xn(e);if(i&&(e=i.stateNode)){var a=e[de]||null;t:switch(e=i.stateNode,i.type){case"input":if(ln(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+me(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==e&&l.form===e.form){var h=l[de]||null;if(!h)throw Error(s(90));ln(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===e.form&&Ao(l)}break t;case"textarea":Qt(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&wi(e,!!a.multiple,i,!1)}}}var Wn=!1;function lu(e,i,a){if(Wn)return e(i,a);Wn=!0;try{var l=e(i);return l}finally{if(Wn=!1,(Ri!==null||Ii!==null)&&(ec(),Ri&&(i=Ri,e=Ii,Ii=Ri=null,bo(i),e)))for(i=0;i<e.length;i++)bo(e[i])}}function us(e,i){var a=e.stateNode;if(a===null)return null;var l=a[de]||null;if(l===null)return null;a=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sn=!1;if(xn)try{var cs={};Object.defineProperty(cs,"passive",{get:function(){Sn=!0}}),window.addEventListener("test",cs,cs),window.removeEventListener("test",cs,cs)}catch{Sn=!1}var Jn=null,rr=null,Ci=null;function Ro(){if(Ci)return Ci;var e,i=rr,a=i.length,l,h="value"in Jn?Jn.value:Jn.textContent,d=h.length;for(e=0;e<a&&i[e]===h[e];e++);var v=a-e;for(l=1;l<=v&&i[a-l]===h[d-l];l++);return Ci=h.slice(e,1<l?1-l:void 0)}function ti(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function ei(){return!0}function Io(){return!1}function Ce(e){function i(a,l,h,d,v){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=v,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ei:Io,this.isPropagationStopped=Io,this}return E(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ei)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ei)},persist:function(){},isPersistent:ei}),i}var qt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ia=Ce(qt),hs=E({},qt,{view:0,detail:0}),uu=Ce(hs),ra,sa,ni,fs=E({},hs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ni&&(ni&&e.type==="mousemove"?(ra=e.screenX-ni.screenX,sa=e.screenY-ni.screenY):sa=ra=0,ni=e),ra)},movementY:function(e){return"movementY"in e?e.movementY:sa}}),wn=Ce(fs),cu=E({},fs,{dataTransfer:0}),zh=Ce(cu),ds=E({},hs,{relatedTarget:0}),aa=Ce(ds),Co=E({},qt,{animationName:0,elapsedTime:0,pseudoElement:0}),oa=Ce(Co),hu=E({},qt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),la=Ce(hu),jh=E({},qt,{data:0}),Do=Ce(jh),ms={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},du={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Oo(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=du[e])?!!i[e]:!1}function gs(){return Oo}var mu=E({},hs,{key:function(e){if(e.key){var i=ms[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=ti(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gs,charCode:function(e){return e.type==="keypress"?ti(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ti(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ua=Ce(mu),gu=E({},fs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),No=Ce(gu),Di=E({},hs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gs}),pu=Ce(Di),yu=E({},qt,{propertyName:0,elapsedTime:0,pseudoElement:0}),_u=Ce(yu),vu=E({},fs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ca=Ce(vu),We=E({},qt,{newState:0,oldState:0}),Eu=Ce(We),Tu=[9,13,27,32],ii=xn&&"CompositionEvent"in window,c=null;xn&&"documentMode"in document&&(c=document.documentMode);var g=xn&&"TextEvent"in window&&!c,_=xn&&(!ii||c&&8<c&&11>=c),A=" ",x=!1;function q(e,i){switch(e){case"keyup":return Tu.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tt(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kt=!1;function Te(e,i){switch(e){case"compositionend":return tt(i);case"keypress":return i.which!==32?null:(x=!0,A);case"textInput":return e=i.data,e===A&&x?null:e;default:return null}}function xt(e,i){if(kt)return e==="compositionend"||!ii&&q(e,i)?(e=Ro(),Ci=rr=Jn=null,kt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _&&i.locale!=="ko"?null:i.data;default:return null}}var De={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ae(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!De[e.type]:i==="textarea"}function Oi(e,i,a,l){Ri?Ii?Ii.push(l):Ii=[l]:Ri=l,i=oc(i,"onChange"),0<i.length&&(a=new ia("onChange","change",null,a,l),e.push({event:a,listeners:i}))}var xe=null,ri=null;function Mo(e){l_(e,0)}function Au(e){var i=$n(e);if(Ao(i))return e}function Dg(e,i){if(e==="change")return i}var Og=!1;if(xn){var Bh;if(xn){var qh="oninput"in document;if(!qh){var Ng=document.createElement("div");Ng.setAttribute("oninput","return;"),qh=typeof Ng.oninput=="function"}Bh=qh}else Bh=!1;Og=Bh&&(!document.documentMode||9<document.documentMode)}function Mg(){xe&&(xe.detachEvent("onpropertychange",Vg),ri=xe=null)}function Vg(e){if(e.propertyName==="value"&&Au(ri)){var i=[];Oi(i,ri,e,An(e)),lu(Mo,i)}}function wA(e,i,a){e==="focusin"?(Mg(),xe=i,ri=a,xe.attachEvent("onpropertychange",Vg)):e==="focusout"&&Mg()}function bA(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Au(ri)}function RA(e,i){if(e==="click")return Au(i)}function IA(e,i){if(e==="input"||e==="change")return Au(i)}function CA(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var un=typeof Object.is=="function"?Object.is:CA;function Vo(e,i){if(un(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!Yr.call(i,h)||!un(e[h],i[h]))return!1}return!0}function Pg(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kg(e,i){var a=Pg(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=i&&l>=i)return{node:a,offset:i-e};e=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Pg(a)}}function xg(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?xg(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Ug(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=ss(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=ss(e.document)}return i}function Hh(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var DA=xn&&"documentMode"in document&&11>=document.documentMode,ha=null,Fh=null,Po=null,Gh=!1;function Lg(e,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Gh||ha==null||ha!==ss(l)||(l=ha,"selectionStart"in l&&Hh(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Po&&Vo(Po,l)||(Po=l,l=oc(Fh,"onSelect"),0<l.length&&(i=new ia("onSelect","select",null,i,a),e.push({event:i,listeners:l}),i.target=ha)))}function ps(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var fa={animationend:ps("Animation","AnimationEnd"),animationiteration:ps("Animation","AnimationIteration"),animationstart:ps("Animation","AnimationStart"),transitionrun:ps("Transition","TransitionRun"),transitionstart:ps("Transition","TransitionStart"),transitioncancel:ps("Transition","TransitionCancel"),transitionend:ps("Transition","TransitionEnd")},Kh={},zg={};xn&&(zg=document.createElement("div").style,"AnimationEvent"in window||(delete fa.animationend.animation,delete fa.animationiteration.animation,delete fa.animationstart.animation),"TransitionEvent"in window||delete fa.transitionend.transition);function ys(e){if(Kh[e])return Kh[e];if(!fa[e])return e;var i=fa[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in zg)return Kh[e]=i[a];return e}var jg=ys("animationend"),Bg=ys("animationiteration"),qg=ys("animationstart"),OA=ys("transitionrun"),NA=ys("transitionstart"),MA=ys("transitioncancel"),Hg=ys("transitionend"),Fg=new Map,Qh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Qh.push("scrollEnd");function Un(e,i){Fg.set(e,i),kn(i,[e])}var Gg=new WeakMap;function bn(e,i){if(typeof e=="object"&&e!==null){var a=Gg.get(e);return a!==void 0?a:(i={value:e,source:i,stack:ta(i)},Gg.set(e,i),i)}return{value:e,source:i,stack:ta(i)}}var Rn=[],da=0,Yh=0;function Su(){for(var e=da,i=Yh=da=0;i<e;){var a=Rn[i];Rn[i++]=null;var l=Rn[i];Rn[i++]=null;var h=Rn[i];Rn[i++]=null;var d=Rn[i];if(Rn[i++]=null,l!==null&&h!==null){var v=l.pending;v===null?h.next=h:(h.next=v.next,v.next=h),l.pending=h}d!==0&&Kg(a,h,d)}}function wu(e,i,a,l){Rn[da++]=e,Rn[da++]=i,Rn[da++]=a,Rn[da++]=l,Yh|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Xh(e,i,a,l){return wu(e,i,a,l),bu(e)}function ma(e,i){return wu(e,null,null,i),bu(e)}function Kg(e,i,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=e.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(h=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,h&&i!==null&&(h=31-He(a),e=d.hiddenUpdates,l=e[h],l===null?e[h]=[i]:l.push(i),i.lane=a|536870912),d):null}function bu(e){if(50<sl)throw sl=0,nd=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var ga={};function VA(e,i,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function cn(e,i,a,l){return new VA(e,i,a,l)}function $h(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ni(e,i){var a=e.alternate;return a===null?(a=cn(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Qg(e,i){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Ru(e,i,a,l,h,d){var v=0;if(l=e,typeof e=="function")$h(e)&&(v=1);else if(typeof e=="string")v=kS(e,a,dt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case b:return e=cn(31,a,i,h),e.elementType=b,e.lanes=d,e;case $:return _s(a.children,h,d,i);case et:v=8,h|=24;break;case W:return e=cn(12,a,i,h|2),e.elementType=W,e.lanes=d,e;case ut:return e=cn(13,a,i,h),e.elementType=ut,e.lanes=d,e;case wt:return e=cn(19,a,i,h),e.elementType=wt,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case lt:case rt:v=10;break t;case mt:v=9;break t;case Et:v=11;break t;case M:v=14;break t;case w:v=16,l=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),l=null}return i=cn(v,a,i,h),i.elementType=e,i.type=l,i.lanes=d,i}function _s(e,i,a,l){return e=cn(7,e,l,i),e.lanes=a,e}function Zh(e,i,a){return e=cn(6,e,null,i),e.lanes=a,e}function Wh(e,i,a){return i=cn(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var pa=[],ya=0,Iu=null,Cu=0,In=[],Cn=0,vs=null,Mi=1,Vi="";function Es(e,i){pa[ya++]=Cu,pa[ya++]=Iu,Iu=e,Cu=i}function Yg(e,i,a){In[Cn++]=Mi,In[Cn++]=Vi,In[Cn++]=vs,vs=e;var l=Mi;e=Vi;var h=32-He(l)-1;l&=~(1<<h),a+=1;var d=32-He(i)+h;if(30<d){var v=h-h%5;d=(l&(1<<v)-1).toString(32),l>>=v,h-=v,Mi=1<<32-He(i)+h|a<<h|l,Vi=d+e}else Mi=1<<d|a<<h|l,Vi=e}function Jh(e){e.return!==null&&(Es(e,1),Yg(e,1,0))}function tf(e){for(;e===Iu;)Iu=pa[--ya],pa[ya]=null,Cu=pa[--ya],pa[ya]=null;for(;e===vs;)vs=In[--Cn],In[Cn]=null,Vi=In[--Cn],In[Cn]=null,Mi=In[--Cn],In[Cn]=null}var Je=null,oe=null,Bt=!1,Ts=null,si=!1,ef=Error(s(519));function As(e){var i=Error(s(418,""));throw Uo(bn(i,e)),ef}function Xg(e){var i=e.stateNode,a=e.type,l=e.memoizedProps;switch(i[Ee]=e,i[de]=l,a){case"dialog":Mt("cancel",i),Mt("close",i);break;case"iframe":case"object":case"embed":Mt("load",i);break;case"video":case"audio":for(a=0;a<ol.length;a++)Mt(ol[a],i);break;case"source":Mt("error",i);break;case"img":case"image":case"link":Mt("error",i),Mt("load",i);break;case"details":Mt("toggle",i);break;case"input":Mt("invalid",i),as(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),ea(i);break;case"select":Mt("invalid",i);break;case"textarea":Mt("invalid",i),os(i,l.value,l.defaultValue,l.children),ea(i)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||f_(i.textContent,a)?(l.popover!=null&&(Mt("beforetoggle",i),Mt("toggle",i)),l.onScroll!=null&&Mt("scroll",i),l.onScrollEnd!=null&&Mt("scrollend",i),l.onClick!=null&&(i.onclick=lc),i=!0):i=!1,i||As(e)}function $g(e){for(Je=e.return;Je;)switch(Je.tag){case 5:case 13:si=!1;return;case 27:case 3:si=!0;return;default:Je=Je.return}}function ko(e){if(e!==Je)return!1;if(!Bt)return $g(e),Bt=!0,!1;var i=e.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||_d(e.type,e.memoizedProps)),a=!a),a&&oe&&As(e),$g(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));t:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(i===0){oe=zn(e.nextSibling);break t}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;e=e.nextSibling}oe=null}}else i===27?(i=oe,Er(e.type)?(e=Ad,Ad=null,oe=e):oe=i):oe=Je?zn(e.stateNode.nextSibling):null;return!0}function xo(){oe=Je=null,Bt=!1}function Zg(){var e=Ts;return e!==null&&(nn===null?nn=e:nn.push.apply(nn,e),Ts=null),e}function Uo(e){Ts===null?Ts=[e]:Ts.push(e)}var nf=Z(null),Ss=null,Pi=null;function sr(e,i,a){J(nf,i._currentValue),i._currentValue=a}function ki(e){e._currentValue=nf.current,it(nf)}function rf(e,i,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===a)break;e=e.return}}function sf(e,i,a,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var d=h.dependencies;if(d!==null){var v=h.child;d=d.firstContext;t:for(;d!==null;){var T=d;d=h;for(var R=0;R<i.length;R++)if(T.context===i[R]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),rf(d.return,a,e),l||(v=null);break t}d=T.next}}else if(h.tag===18){if(v=h.return,v===null)throw Error(s(341));v.lanes|=a,d=v.alternate,d!==null&&(d.lanes|=a),rf(v,a,e),v=null}else v=h.child;if(v!==null)v.return=h;else for(v=h;v!==null;){if(v===e){v=null;break}if(h=v.sibling,h!==null){h.return=v.return,v=h;break}v=v.return}h=v}}function Lo(e,i,a,l){e=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var v=h.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var T=h.type;un(h.pendingProps.value,v.value)||(e!==null?e.push(T):e=[T])}}else if(h===Ie.current){if(v=h.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(dl):e=[dl])}h=h.return}e!==null&&sf(i,e,a,l),i.flags|=262144}function Du(e){for(e=e.firstContext;e!==null;){if(!un(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ws(e){Ss=e,Pi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Fe(e){return Wg(Ss,e)}function Ou(e,i){return Ss===null&&ws(e),Wg(e,i)}function Wg(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Pi===null){if(e===null)throw Error(s(308));Pi=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Pi=Pi.next=i;return a}var PA=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},kA=r.unstable_scheduleCallback,xA=r.unstable_NormalPriority,Se={$$typeof:rt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function af(){return{controller:new PA,data:new Map,refCount:0}}function zo(e){e.refCount--,e.refCount===0&&kA(xA,function(){e.controller.abort()})}var jo=null,of=0,_a=0,va=null;function UA(e,i){if(jo===null){var a=jo=[];of=0,_a=ud(),va={status:"pending",value:void 0,then:function(l){a.push(l)}}}return of++,i.then(Jg,Jg),i}function Jg(){if(--of===0&&jo!==null){va!==null&&(va.status="fulfilled");var e=jo;jo=null,_a=0,va=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function LA(e,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var tp=H.S;H.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&UA(e,i),tp!==null&&tp(e,i)};var bs=Z(null);function lf(){var e=bs.current;return e!==null?e:Jt.pooledCache}function Nu(e,i){i===null?J(bs,bs.current):J(bs,i.pool)}function ep(){var e=lf();return e===null?null:{parent:Se._currentValue,pool:e}}var Bo=Error(s(460)),np=Error(s(474)),Mu=Error(s(542)),uf={then:function(){}};function ip(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Vu(){}function rp(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(Vu,Vu),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,ap(e),e;default:if(typeof i.status=="string")i.then(Vu,Vu);else{if(e=Jt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,ap(e),e}throw qo=i,Bo}}var qo=null;function sp(){if(qo===null)throw Error(s(459));var e=qo;return qo=null,e}function ap(e){if(e===Bo||e===Mu)throw Error(s(483))}var ar=!1;function cf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function hf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function or(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function lr(e,i,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Gt&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=bu(e),Kg(e,null,a),i}return wu(e,l,i,a),bu(e)}function Ho(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,yo(e,a)}}function ff(e,i){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=v:d=d.next=v,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var df=!1;function Fo(){if(df){var e=va;if(e!==null)throw e}}function Go(e,i,a,l){df=!1;var h=e.updateQueue;ar=!1;var d=h.firstBaseUpdate,v=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var R=T,L=R.next;R.next=null,v===null?d=L:v.next=L,v=R;var F=e.alternate;F!==null&&(F=F.updateQueue,T=F.lastBaseUpdate,T!==v&&(T===null?F.firstBaseUpdate=L:T.next=L,F.lastBaseUpdate=R))}if(d!==null){var Q=h.baseState;v=0,F=L=R=null,T=d;do{var z=T.lane&-536870913,j=z!==T.lane;if(j?(Ut&z)===z:(l&z)===z){z!==0&&z===_a&&(df=!0),F!==null&&(F=F.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var vt=e,gt=T;z=i;var $t=a;switch(gt.tag){case 1:if(vt=gt.payload,typeof vt=="function"){Q=vt.call($t,Q,z);break t}Q=vt;break t;case 3:vt.flags=vt.flags&-65537|128;case 0:if(vt=gt.payload,z=typeof vt=="function"?vt.call($t,Q,z):vt,z==null)break t;Q=E({},Q,z);break t;case 2:ar=!0}}z=T.callback,z!==null&&(e.flags|=64,j&&(e.flags|=8192),j=h.callbacks,j===null?h.callbacks=[z]:j.push(z))}else j={lane:z,tag:T.tag,payload:T.payload,callback:T.callback,next:null},F===null?(L=F=j,R=Q):F=F.next=j,v|=z;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;j=T,T=j.next,j.next=null,h.lastBaseUpdate=j,h.shared.pending=null}}while(!0);F===null&&(R=Q),h.baseState=R,h.firstBaseUpdate=L,h.lastBaseUpdate=F,d===null&&(h.shared.lanes=0),pr|=v,e.lanes=v,e.memoizedState=Q}}function op(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function lp(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)op(a[e],i)}var Ea=Z(null),Pu=Z(0);function up(e,i){e=qi,J(Pu,e),J(Ea,i),qi=e|i.baseLanes}function mf(){J(Pu,qi),J(Ea,Ea.current)}function gf(){qi=Pu.current,it(Ea),it(Pu)}var ur=0,It=null,Yt=null,ge=null,ku=!1,Ta=!1,Rs=!1,xu=0,Ko=0,Aa=null,zA=0;function ce(){throw Error(s(321))}function pf(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!un(e[a],i[a]))return!1;return!0}function yf(e,i,a,l,h,d){return ur=d,It=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,H.H=e===null||e.memoizedState===null?Kp:Qp,Rs=!1,d=a(l,h),Rs=!1,Ta&&(d=hp(i,a,l,h)),cp(e),d}function cp(e){H.H=qu;var i=Yt!==null&&Yt.next!==null;if(ur=0,ge=Yt=It=null,ku=!1,Ko=0,Aa=null,i)throw Error(s(300));e===null||Oe||(e=e.dependencies,e!==null&&Du(e)&&(Oe=!0))}function hp(e,i,a,l){It=e;var h=0;do{if(Ta&&(Aa=null),Ko=0,Ta=!1,25<=h)throw Error(s(301));if(h+=1,ge=Yt=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}H.H=KA,d=i(a,l)}while(Ta);return d}function jA(){var e=H.H,i=e.useState()[0];return i=typeof i.then=="function"?Qo(i):i,e=e.useState()[0],(Yt!==null?Yt.memoizedState:null)!==e&&(It.flags|=1024),i}function _f(){var e=xu!==0;return xu=0,e}function vf(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function Ef(e){if(ku){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}ku=!1}ur=0,ge=Yt=It=null,Ta=!1,Ko=xu=0,Aa=null}function tn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?It.memoizedState=ge=e:ge=ge.next=e,ge}function pe(){if(Yt===null){var e=It.alternate;e=e!==null?e.memoizedState:null}else e=Yt.next;var i=ge===null?It.memoizedState:ge.next;if(i!==null)ge=i,Yt=e;else{if(e===null)throw It.alternate===null?Error(s(467)):Error(s(310));Yt=e,e={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},ge===null?It.memoizedState=ge=e:ge=ge.next=e}return ge}function Tf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Qo(e){var i=Ko;return Ko+=1,Aa===null&&(Aa=[]),e=rp(Aa,e,i),i=It,(ge===null?i.memoizedState:ge.next)===null&&(i=i.alternate,H.H=i===null||i.memoizedState===null?Kp:Qp),e}function Uu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Qo(e);if(e.$$typeof===rt)return Fe(e)}throw Error(s(438,String(e)))}function Af(e){var i=null,a=It.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=It.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Tf(),It.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),l=0;l<e;l++)a[l]=N;return i.index++,a}function xi(e,i){return typeof i=="function"?i(e):i}function Lu(e){var i=pe();return Sf(i,Yt,e)}function Sf(e,i,a){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var h=e.baseQueue,d=l.pending;if(d!==null){if(h!==null){var v=h.next;h.next=d.next,d.next=v}i.baseQueue=h=d,l.pending=null}if(d=e.baseState,h===null)e.memoizedState=d;else{i=h.next;var T=v=null,R=null,L=i,F=!1;do{var Q=L.lane&-536870913;if(Q!==L.lane?(Ut&Q)===Q:(ur&Q)===Q){var z=L.revertLane;if(z===0)R!==null&&(R=R.next={lane:0,revertLane:0,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),Q===_a&&(F=!0);else if((ur&z)===z){L=L.next,z===_a&&(F=!0);continue}else Q={lane:0,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},R===null?(T=R=Q,v=d):R=R.next=Q,It.lanes|=z,pr|=z;Q=L.action,Rs&&a(d,Q),d=L.hasEagerState?L.eagerState:a(d,Q)}else z={lane:Q,revertLane:L.revertLane,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},R===null?(T=R=z,v=d):R=R.next=z,It.lanes|=Q,pr|=Q;L=L.next}while(L!==null&&L!==i);if(R===null?v=d:R.next=T,!un(d,e.memoizedState)&&(Oe=!0,F&&(a=va,a!==null)))throw a;e.memoizedState=d,e.baseState=v,e.baseQueue=R,l.lastRenderedState=d}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function wf(e){var i=pe(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var l=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var v=h=h.next;do d=e(d,v.action),v=v.next;while(v!==h);un(d,i.memoizedState)||(Oe=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function fp(e,i,a){var l=It,h=pe(),d=Bt;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var v=!un((Yt||h).memoizedState,a);v&&(h.memoizedState=a,Oe=!0),h=h.queue;var T=gp.bind(null,l,h,e);if(Yo(2048,8,T,[e]),h.getSnapshot!==i||v||ge!==null&&ge.memoizedState.tag&1){if(l.flags|=2048,Sa(9,zu(),mp.bind(null,l,h,a,i),null),Jt===null)throw Error(s(349));d||(ur&124)!==0||dp(l,i,a)}return a}function dp(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=It.updateQueue,i===null?(i=Tf(),It.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function mp(e,i,a,l){i.value=a,i.getSnapshot=l,pp(i)&&yp(e)}function gp(e,i,a){return a(function(){pp(i)&&yp(e)})}function pp(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!un(e,a)}catch{return!0}}function yp(e){var i=ma(e,2);i!==null&&gn(i,e,2)}function bf(e){var i=tn();if(typeof e=="function"){var a=e;if(e=a(),Rs){on(!0);try{a()}finally{on(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:e},i}function _p(e,i,a,l){return e.baseState=a,Sf(e,Yt,typeof l=="function"?l:xi)}function BA(e,i,a,l,h){if(Bu(e))throw Error(s(485));if(e=i.action,e!==null){var d={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){d.listeners.push(v)}};H.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,vp(i,d)):(d.next=a.next,i.pending=a.next=d)}}function vp(e,i){var a=i.action,l=i.payload,h=e.state;if(i.isTransition){var d=H.T,v={};H.T=v;try{var T=a(h,l),R=H.S;R!==null&&R(v,T),Ep(e,i,T)}catch(L){Rf(e,i,L)}finally{H.T=d}}else try{d=a(h,l),Ep(e,i,d)}catch(L){Rf(e,i,L)}}function Ep(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Tp(e,i,l)},function(l){return Rf(e,i,l)}):Tp(e,i,a)}function Tp(e,i,a){i.status="fulfilled",i.value=a,Ap(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,vp(e,a)))}function Rf(e,i,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,Ap(i),i=i.next;while(i!==l)}e.action=null}function Ap(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Sp(e,i){return i}function wp(e,i){if(Bt){var a=Jt.formState;if(a!==null){t:{var l=It;if(Bt){if(oe){e:{for(var h=oe,d=si;h.nodeType!==8;){if(!d){h=null;break e}if(h=zn(h.nextSibling),h===null){h=null;break e}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){oe=zn(h.nextSibling),l=h.data==="F!";break t}}As(l)}l=!1}l&&(i=a[0])}}return a=tn(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sp,lastRenderedState:i},a.queue=l,a=Hp.bind(null,It,l),l.dispatch=a,l=bf(!1),d=Nf.bind(null,It,!1,l.queue),l=tn(),h={state:i,dispatch:null,action:e,pending:null},l.queue=h,a=BA.bind(null,It,h,d,a),h.dispatch=a,l.memoizedState=e,[i,a,!1]}function bp(e){var i=pe();return Rp(i,Yt,e)}function Rp(e,i,a){if(i=Sf(e,i,Sp)[0],e=Lu(xi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Qo(i)}catch(v){throw v===Bo?Mu:v}else l=i;i=pe();var h=i.queue,d=h.dispatch;return a!==i.memoizedState&&(It.flags|=2048,Sa(9,zu(),qA.bind(null,h,a),null)),[l,d,e]}function qA(e,i){e.action=i}function Ip(e){var i=pe(),a=Yt;if(a!==null)return Rp(i,a,e);pe(),i=i.memoizedState,a=pe();var l=a.queue.dispatch;return a.memoizedState=e,[i,l,!1]}function Sa(e,i,a,l){return e={tag:e,create:a,deps:l,inst:i,next:null},i=It.updateQueue,i===null&&(i=Tf(),It.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,i.lastEffect=e),e}function zu(){return{destroy:void 0,resource:void 0}}function Cp(){return pe().memoizedState}function ju(e,i,a,l){var h=tn();l=l===void 0?null:l,It.flags|=e,h.memoizedState=Sa(1|i,zu(),a,l)}function Yo(e,i,a,l){var h=pe();l=l===void 0?null:l;var d=h.memoizedState.inst;Yt!==null&&l!==null&&pf(l,Yt.memoizedState.deps)?h.memoizedState=Sa(i,d,a,l):(It.flags|=e,h.memoizedState=Sa(1|i,d,a,l))}function Dp(e,i){ju(8390656,8,e,i)}function Op(e,i){Yo(2048,8,e,i)}function Np(e,i){return Yo(4,2,e,i)}function Mp(e,i){return Yo(4,4,e,i)}function Vp(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Pp(e,i,a){a=a!=null?a.concat([e]):null,Yo(4,4,Vp.bind(null,i,e),a)}function If(){}function kp(e,i){var a=pe();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&pf(i,l[1])?l[0]:(a.memoizedState=[e,i],e)}function xp(e,i){var a=pe();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&pf(i,l[1]))return l[0];if(l=e(),Rs){on(!0);try{e()}finally{on(!1)}}return a.memoizedState=[l,i],l}function Cf(e,i,a){return a===void 0||(ur&1073741824)!==0?e.memoizedState=i:(e.memoizedState=a,e=zy(),It.lanes|=e,pr|=e,a)}function Up(e,i,a,l){return un(a,i)?a:Ea.current!==null?(e=Cf(e,a,l),un(e,i)||(Oe=!0),e):(ur&42)===0?(Oe=!0,e.memoizedState=a):(e=zy(),It.lanes|=e,pr|=e,i)}function Lp(e,i,a,l,h){var d=nt.p;nt.p=d!==0&&8>d?d:8;var v=H.T,T={};H.T=T,Nf(e,!1,i,a);try{var R=h(),L=H.S;if(L!==null&&L(T,R),R!==null&&typeof R=="object"&&typeof R.then=="function"){var F=LA(R,l);Xo(e,i,F,mn(e))}else Xo(e,i,l,mn(e))}catch(Q){Xo(e,i,{then:function(){},status:"rejected",reason:Q},mn())}finally{nt.p=d,H.T=v}}function HA(){}function Df(e,i,a,l){if(e.tag!==5)throw Error(s(476));var h=zp(e).queue;Lp(e,h,i,ht,a===null?HA:function(){return jp(e),a(l)})}function zp(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:ht,baseState:ht,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:ht},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xi,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function jp(e){var i=zp(e).next.queue;Xo(e,i,{},mn())}function Of(){return Fe(dl)}function Bp(){return pe().memoizedState}function qp(){return pe().memoizedState}function FA(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=mn();e=or(a);var l=lr(i,e,a);l!==null&&(gn(l,i,a),Ho(l,i,a)),i={cache:af()},e.payload=i;return}i=i.return}}function GA(e,i,a){var l=mn();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Bu(e)?Fp(i,a):(a=Xh(e,i,a,l),a!==null&&(gn(a,e,l),Gp(a,i,l)))}function Hp(e,i,a){var l=mn();Xo(e,i,a,l)}function Xo(e,i,a,l){var h={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Bu(e))Fp(i,h);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var v=i.lastRenderedState,T=d(v,a);if(h.hasEagerState=!0,h.eagerState=T,un(T,v))return wu(e,i,h,0),Jt===null&&Su(),!1}catch{}finally{}if(a=Xh(e,i,h,l),a!==null)return gn(a,e,l),Gp(a,i,l),!0}return!1}function Nf(e,i,a,l){if(l={lane:2,revertLane:ud(),action:l,hasEagerState:!1,eagerState:null,next:null},Bu(e)){if(i)throw Error(s(479))}else i=Xh(e,a,l,2),i!==null&&gn(i,e,2)}function Bu(e){var i=e.alternate;return e===It||i!==null&&i===It}function Fp(e,i){Ta=ku=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function Gp(e,i,a){if((a&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,yo(e,a)}}var qu={readContext:Fe,use:Uu,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useLayoutEffect:ce,useInsertionEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useSyncExternalStore:ce,useId:ce,useHostTransitionStatus:ce,useFormState:ce,useActionState:ce,useOptimistic:ce,useMemoCache:ce,useCacheRefresh:ce},Kp={readContext:Fe,use:Uu,useCallback:function(e,i){return tn().memoizedState=[e,i===void 0?null:i],e},useContext:Fe,useEffect:Dp,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,ju(4194308,4,Vp.bind(null,i,e),a)},useLayoutEffect:function(e,i){return ju(4194308,4,e,i)},useInsertionEffect:function(e,i){ju(4,2,e,i)},useMemo:function(e,i){var a=tn();i=i===void 0?null:i;var l=e();if(Rs){on(!0);try{e()}finally{on(!1)}}return a.memoizedState=[l,i],l},useReducer:function(e,i,a){var l=tn();if(a!==void 0){var h=a(i);if(Rs){on(!0);try{a(i)}finally{on(!1)}}}else h=i;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=GA.bind(null,It,e),[l.memoizedState,e]},useRef:function(e){var i=tn();return e={current:e},i.memoizedState=e},useState:function(e){e=bf(e);var i=e.queue,a=Hp.bind(null,It,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:If,useDeferredValue:function(e,i){var a=tn();return Cf(a,e,i)},useTransition:function(){var e=bf(!1);return e=Lp.bind(null,It,e.queue,!0,!1),tn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var l=It,h=tn();if(Bt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),Jt===null)throw Error(s(349));(Ut&124)!==0||dp(l,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,Dp(gp.bind(null,l,d,e),[e]),l.flags|=2048,Sa(9,zu(),mp.bind(null,l,d,a,i),null),a},useId:function(){var e=tn(),i=Jt.identifierPrefix;if(Bt){var a=Vi,l=Mi;a=(l&~(1<<32-He(l)-1)).toString(32)+a,i="«"+i+"R"+a,a=xu++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=zA++,i="«"+i+"r"+a.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:Of,useFormState:wp,useActionState:wp,useOptimistic:function(e){var i=tn();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=Nf.bind(null,It,!0,a),a.dispatch=i,[e,i]},useMemoCache:Af,useCacheRefresh:function(){return tn().memoizedState=FA.bind(null,It)}},Qp={readContext:Fe,use:Uu,useCallback:kp,useContext:Fe,useEffect:Op,useImperativeHandle:Pp,useInsertionEffect:Np,useLayoutEffect:Mp,useMemo:xp,useReducer:Lu,useRef:Cp,useState:function(){return Lu(xi)},useDebugValue:If,useDeferredValue:function(e,i){var a=pe();return Up(a,Yt.memoizedState,e,i)},useTransition:function(){var e=Lu(xi)[0],i=pe().memoizedState;return[typeof e=="boolean"?e:Qo(e),i]},useSyncExternalStore:fp,useId:Bp,useHostTransitionStatus:Of,useFormState:bp,useActionState:bp,useOptimistic:function(e,i){var a=pe();return _p(a,Yt,e,i)},useMemoCache:Af,useCacheRefresh:qp},KA={readContext:Fe,use:Uu,useCallback:kp,useContext:Fe,useEffect:Op,useImperativeHandle:Pp,useInsertionEffect:Np,useLayoutEffect:Mp,useMemo:xp,useReducer:wf,useRef:Cp,useState:function(){return wf(xi)},useDebugValue:If,useDeferredValue:function(e,i){var a=pe();return Yt===null?Cf(a,e,i):Up(a,Yt.memoizedState,e,i)},useTransition:function(){var e=wf(xi)[0],i=pe().memoizedState;return[typeof e=="boolean"?e:Qo(e),i]},useSyncExternalStore:fp,useId:Bp,useHostTransitionStatus:Of,useFormState:Ip,useActionState:Ip,useOptimistic:function(e,i){var a=pe();return Yt!==null?_p(a,Yt,e,i):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Af,useCacheRefresh:qp},wa=null,$o=0;function Hu(e){var i=$o;return $o+=1,wa===null&&(wa=[]),rp(wa,e,i)}function Zo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Fu(e,i){throw i.$$typeof===S?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Yp(e){var i=e._init;return i(e._payload)}function Xp(e){function i(P,O){if(e){var U=P.deletions;U===null?(P.deletions=[O],P.flags|=16):U.push(O)}}function a(P,O){if(!e)return null;for(;O!==null;)i(P,O),O=O.sibling;return null}function l(P){for(var O=new Map;P!==null;)P.key!==null?O.set(P.key,P):O.set(P.index,P),P=P.sibling;return O}function h(P,O){return P=Ni(P,O),P.index=0,P.sibling=null,P}function d(P,O,U){return P.index=U,e?(U=P.alternate,U!==null?(U=U.index,U<O?(P.flags|=67108866,O):U):(P.flags|=67108866,O)):(P.flags|=1048576,O)}function v(P){return e&&P.alternate===null&&(P.flags|=67108866),P}function T(P,O,U,G){return O===null||O.tag!==6?(O=Zh(U,P.mode,G),O.return=P,O):(O=h(O,U),O.return=P,O)}function R(P,O,U,G){var at=U.type;return at===$?F(P,O,U.props.children,G,U.key):O!==null&&(O.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===w&&Yp(at)===O.type)?(O=h(O,U.props),Zo(O,U),O.return=P,O):(O=Ru(U.type,U.key,U.props,null,P.mode,G),Zo(O,U),O.return=P,O)}function L(P,O,U,G){return O===null||O.tag!==4||O.stateNode.containerInfo!==U.containerInfo||O.stateNode.implementation!==U.implementation?(O=Wh(U,P.mode,G),O.return=P,O):(O=h(O,U.children||[]),O.return=P,O)}function F(P,O,U,G,at){return O===null||O.tag!==7?(O=_s(U,P.mode,G,at),O.return=P,O):(O=h(O,U),O.return=P,O)}function Q(P,O,U){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=Zh(""+O,P.mode,U),O.return=P,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case C:return U=Ru(O.type,O.key,O.props,null,P.mode,U),Zo(U,O),U.return=P,U;case B:return O=Wh(O,P.mode,U),O.return=P,O;case w:var G=O._init;return O=G(O._payload),Q(P,O,U)}if(se(O)||k(O))return O=_s(O,P.mode,U,null),O.return=P,O;if(typeof O.then=="function")return Q(P,Hu(O),U);if(O.$$typeof===rt)return Q(P,Ou(P,O),U);Fu(P,O)}return null}function z(P,O,U,G){var at=O!==null?O.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return at!==null?null:T(P,O,""+U,G);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case C:return U.key===at?R(P,O,U,G):null;case B:return U.key===at?L(P,O,U,G):null;case w:return at=U._init,U=at(U._payload),z(P,O,U,G)}if(se(U)||k(U))return at!==null?null:F(P,O,U,G,null);if(typeof U.then=="function")return z(P,O,Hu(U),G);if(U.$$typeof===rt)return z(P,O,Ou(P,U),G);Fu(P,U)}return null}function j(P,O,U,G,at){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return P=P.get(U)||null,T(O,P,""+G,at);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case C:return P=P.get(G.key===null?U:G.key)||null,R(O,P,G,at);case B:return P=P.get(G.key===null?U:G.key)||null,L(O,P,G,at);case w:var Ot=G._init;return G=Ot(G._payload),j(P,O,U,G,at)}if(se(G)||k(G))return P=P.get(U)||null,F(O,P,G,at,null);if(typeof G.then=="function")return j(P,O,U,Hu(G),at);if(G.$$typeof===rt)return j(P,O,U,Ou(O,G),at);Fu(O,G)}return null}function vt(P,O,U,G){for(var at=null,Ot=null,ct=O,pt=O=0,Me=null;ct!==null&&pt<U.length;pt++){ct.index>pt?(Me=ct,ct=null):Me=ct.sibling;var zt=z(P,ct,U[pt],G);if(zt===null){ct===null&&(ct=Me);break}e&&ct&&zt.alternate===null&&i(P,ct),O=d(zt,O,pt),Ot===null?at=zt:Ot.sibling=zt,Ot=zt,ct=Me}if(pt===U.length)return a(P,ct),Bt&&Es(P,pt),at;if(ct===null){for(;pt<U.length;pt++)ct=Q(P,U[pt],G),ct!==null&&(O=d(ct,O,pt),Ot===null?at=ct:Ot.sibling=ct,Ot=ct);return Bt&&Es(P,pt),at}for(ct=l(ct);pt<U.length;pt++)Me=j(ct,P,pt,U[pt],G),Me!==null&&(e&&Me.alternate!==null&&ct.delete(Me.key===null?pt:Me.key),O=d(Me,O,pt),Ot===null?at=Me:Ot.sibling=Me,Ot=Me);return e&&ct.forEach(function(br){return i(P,br)}),Bt&&Es(P,pt),at}function gt(P,O,U,G){if(U==null)throw Error(s(151));for(var at=null,Ot=null,ct=O,pt=O=0,Me=null,zt=U.next();ct!==null&&!zt.done;pt++,zt=U.next()){ct.index>pt?(Me=ct,ct=null):Me=ct.sibling;var br=z(P,ct,zt.value,G);if(br===null){ct===null&&(ct=Me);break}e&&ct&&br.alternate===null&&i(P,ct),O=d(br,O,pt),Ot===null?at=br:Ot.sibling=br,Ot=br,ct=Me}if(zt.done)return a(P,ct),Bt&&Es(P,pt),at;if(ct===null){for(;!zt.done;pt++,zt=U.next())zt=Q(P,zt.value,G),zt!==null&&(O=d(zt,O,pt),Ot===null?at=zt:Ot.sibling=zt,Ot=zt);return Bt&&Es(P,pt),at}for(ct=l(ct);!zt.done;pt++,zt=U.next())zt=j(ct,P,pt,zt.value,G),zt!==null&&(e&&zt.alternate!==null&&ct.delete(zt.key===null?pt:zt.key),O=d(zt,O,pt),Ot===null?at=zt:Ot.sibling=zt,Ot=zt);return e&&ct.forEach(function(QS){return i(P,QS)}),Bt&&Es(P,pt),at}function $t(P,O,U,G){if(typeof U=="object"&&U!==null&&U.type===$&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case C:t:{for(var at=U.key;O!==null;){if(O.key===at){if(at=U.type,at===$){if(O.tag===7){a(P,O.sibling),G=h(O,U.props.children),G.return=P,P=G;break t}}else if(O.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===w&&Yp(at)===O.type){a(P,O.sibling),G=h(O,U.props),Zo(G,U),G.return=P,P=G;break t}a(P,O);break}else i(P,O);O=O.sibling}U.type===$?(G=_s(U.props.children,P.mode,G,U.key),G.return=P,P=G):(G=Ru(U.type,U.key,U.props,null,P.mode,G),Zo(G,U),G.return=P,P=G)}return v(P);case B:t:{for(at=U.key;O!==null;){if(O.key===at)if(O.tag===4&&O.stateNode.containerInfo===U.containerInfo&&O.stateNode.implementation===U.implementation){a(P,O.sibling),G=h(O,U.children||[]),G.return=P,P=G;break t}else{a(P,O);break}else i(P,O);O=O.sibling}G=Wh(U,P.mode,G),G.return=P,P=G}return v(P);case w:return at=U._init,U=at(U._payload),$t(P,O,U,G)}if(se(U))return vt(P,O,U,G);if(k(U)){if(at=k(U),typeof at!="function")throw Error(s(150));return U=at.call(U),gt(P,O,U,G)}if(typeof U.then=="function")return $t(P,O,Hu(U),G);if(U.$$typeof===rt)return $t(P,O,Ou(P,U),G);Fu(P,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,O!==null&&O.tag===6?(a(P,O.sibling),G=h(O,U),G.return=P,P=G):(a(P,O),G=Zh(U,P.mode,G),G.return=P,P=G),v(P)):a(P,O)}return function(P,O,U,G){try{$o=0;var at=$t(P,O,U,G);return wa=null,at}catch(ct){if(ct===Bo||ct===Mu)throw ct;var Ot=cn(29,ct,null,P.mode);return Ot.lanes=G,Ot.return=P,Ot}finally{}}}var ba=Xp(!0),$p=Xp(!1),Dn=Z(null),ai=null;function cr(e){var i=e.alternate;J(we,we.current&1),J(Dn,e),ai===null&&(i===null||Ea.current!==null||i.memoizedState!==null)&&(ai=e)}function Zp(e){if(e.tag===22){if(J(we,we.current),J(Dn,e),ai===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(ai=e)}}else hr()}function hr(){J(we,we.current),J(Dn,Dn.current)}function Ui(e){it(Dn),ai===e&&(ai=null),it(we)}var we=Z(0);function Gu(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Td(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Mf(e,i,a,l){i=e.memoizedState,a=a(l,i),a=a==null?i:E({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Vf={enqueueSetState:function(e,i,a){e=e._reactInternals;var l=mn(),h=or(l);h.payload=i,a!=null&&(h.callback=a),i=lr(e,h,l),i!==null&&(gn(i,e,l),Ho(i,e,l))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var l=mn(),h=or(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=lr(e,h,l),i!==null&&(gn(i,e,l),Ho(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=mn(),l=or(a);l.tag=2,i!=null&&(l.callback=i),i=lr(e,l,a),i!==null&&(gn(i,e,a),Ho(i,e,a))}};function Wp(e,i,a,l,h,d,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,v):i.prototype&&i.prototype.isPureReactComponent?!Vo(a,l)||!Vo(h,d):!0}function Jp(e,i,a,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==e&&Vf.enqueueReplaceState(i,i.state,null)}function Is(e,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(e=e.defaultProps){a===i&&(a=E({},a));for(var h in e)a[h]===void 0&&(a[h]=e[h])}return a}var Ku=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function ty(e){Ku(e)}function ey(e){console.error(e)}function ny(e){Ku(e)}function Qu(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function iy(e,i,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Pf(e,i,a){return a=or(a),a.tag=3,a.payload={element:null},a.callback=function(){Qu(e,i)},a}function ry(e){return e=or(e),e.tag=3,e}function sy(e,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;e.payload=function(){return h(d)},e.callback=function(){iy(i,a,l)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){iy(i,a,l),typeof h!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function QA(e,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&Lo(i,a,h,!0),a=Dn.current,a!==null){switch(a.tag){case 13:return ai===null?rd():a.alternate===null&&le===0&&(le=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===uf?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),ad(e,l,h)),!1;case 22:return a.flags|=65536,l===uf?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),ad(e,l,h)),!1}throw Error(s(435,a.tag))}return ad(e,l,h),rd(),!1}if(Bt)return i=Dn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==ef&&(e=Error(s(422),{cause:l}),Uo(bn(e,a)))):(l!==ef&&(i=Error(s(423),{cause:l}),Uo(bn(i,a))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=bn(l,a),h=Pf(e.stateNode,l,h),ff(e,h),le!==4&&(le=2)),!1;var d=Error(s(520),{cause:l});if(d=bn(d,a),rl===null?rl=[d]:rl.push(d),le!==4&&(le=2),i===null)return!0;l=bn(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=h&-h,a.lanes|=e,e=Pf(a.stateNode,l,e),ff(a,e),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(yr===null||!yr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=ry(h),sy(h,e,a,l),ff(a,h),!1}a=a.return}while(a!==null);return!1}var ay=Error(s(461)),Oe=!1;function Ue(e,i,a,l){i.child=e===null?$p(i,null,a,l):ba(i,e.child,a,l)}function oy(e,i,a,l,h){a=a.render;var d=i.ref;if("ref"in l){var v={};for(var T in l)T!=="ref"&&(v[T]=l[T])}else v=l;return ws(i),l=yf(e,i,a,v,d,h),T=_f(),e!==null&&!Oe?(vf(e,i,h),Li(e,i,h)):(Bt&&T&&Jh(i),i.flags|=1,Ue(e,i,l,h),i.child)}function ly(e,i,a,l,h){if(e===null){var d=a.type;return typeof d=="function"&&!$h(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,uy(e,i,d,l,h)):(e=Ru(a.type,null,l,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!qf(e,h)){var v=d.memoizedProps;if(a=a.compare,a=a!==null?a:Vo,a(v,l)&&e.ref===i.ref)return Li(e,i,h)}return i.flags|=1,e=Ni(d,l),e.ref=i.ref,e.return=i,i.child=e}function uy(e,i,a,l,h){if(e!==null){var d=e.memoizedProps;if(Vo(d,l)&&e.ref===i.ref)if(Oe=!1,i.pendingProps=l=d,qf(e,h))(e.flags&131072)!==0&&(Oe=!0);else return i.lanes=e.lanes,Li(e,i,h)}return kf(e,i,a,l,h)}function cy(e,i,a){var l=i.pendingProps,h=l.children,d=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=d!==null?d.baseLanes|a:a,e!==null){for(h=i.child=e.child,d=0;h!==null;)d=d|h.lanes|h.childLanes,h=h.sibling;i.childLanes=d&~l}else i.childLanes=0,i.child=null;return hy(e,i,l,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Nu(i,d!==null?d.cachePool:null),d!==null?up(i,d):mf(),Zp(i);else return i.lanes=i.childLanes=536870912,hy(e,i,d!==null?d.baseLanes|a:a,a)}else d!==null?(Nu(i,d.cachePool),up(i,d),hr(),i.memoizedState=null):(e!==null&&Nu(i,null),mf(),hr());return Ue(e,i,h,a),i.child}function hy(e,i,a,l){var h=lf();return h=h===null?null:{parent:Se._currentValue,pool:h},i.memoizedState={baseLanes:a,cachePool:h},e!==null&&Nu(i,null),mf(),Zp(i),e!==null&&Lo(e,i,l,!0),null}function Yu(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(i.flags|=4194816)}}function kf(e,i,a,l,h){return ws(i),a=yf(e,i,a,l,void 0,h),l=_f(),e!==null&&!Oe?(vf(e,i,h),Li(e,i,h)):(Bt&&l&&Jh(i),i.flags|=1,Ue(e,i,a,h),i.child)}function fy(e,i,a,l,h,d){return ws(i),i.updateQueue=null,a=hp(i,l,a,h),cp(e),l=_f(),e!==null&&!Oe?(vf(e,i,d),Li(e,i,d)):(Bt&&l&&Jh(i),i.flags|=1,Ue(e,i,a,d),i.child)}function dy(e,i,a,l,h){if(ws(i),i.stateNode===null){var d=ga,v=a.contextType;typeof v=="object"&&v!==null&&(d=Fe(v)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Vf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},cf(i),v=a.contextType,d.context=typeof v=="object"&&v!==null?Fe(v):ga,d.state=i.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Mf(i,a,v,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(v=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),v!==d.state&&Vf.enqueueReplaceState(d,d.state,null),Go(i,l,d,h),Fo(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){d=i.stateNode;var T=i.memoizedProps,R=Is(a,T);d.props=R;var L=d.context,F=a.contextType;v=ga,typeof F=="object"&&F!==null&&(v=Fe(F));var Q=a.getDerivedStateFromProps;F=typeof Q=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,F||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||L!==v)&&Jp(i,d,l,v),ar=!1;var z=i.memoizedState;d.state=z,Go(i,l,d,h),Fo(),L=i.memoizedState,T||z!==L||ar?(typeof Q=="function"&&(Mf(i,a,Q,l),L=i.memoizedState),(R=ar||Wp(i,a,R,l,z,L,v))?(F||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=L),d.props=l,d.state=L,d.context=v,l=R):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,hf(e,i),v=i.memoizedProps,F=Is(a,v),d.props=F,Q=i.pendingProps,z=d.context,L=a.contextType,R=ga,typeof L=="object"&&L!==null&&(R=Fe(L)),T=a.getDerivedStateFromProps,(L=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(v!==Q||z!==R)&&Jp(i,d,l,R),ar=!1,z=i.memoizedState,d.state=z,Go(i,l,d,h),Fo();var j=i.memoizedState;v!==Q||z!==j||ar||e!==null&&e.dependencies!==null&&Du(e.dependencies)?(typeof T=="function"&&(Mf(i,a,T,l),j=i.memoizedState),(F=ar||Wp(i,a,F,l,z,j,R)||e!==null&&e.dependencies!==null&&Du(e.dependencies))?(L||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,j,R),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,j,R)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=j),d.props=l,d.state=j,d.context=R,l=F):(typeof d.componentDidUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),l=!1)}return d=l,Yu(e,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&l?(i.child=ba(i,e.child,null,h),i.child=ba(i,null,a,h)):Ue(e,i,a,h),i.memoizedState=d.state,e=i.child):e=Li(e,i,h),e}function my(e,i,a,l){return xo(),i.flags|=256,Ue(e,i,a,l),i.child}var xf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uf(e){return{baseLanes:e,cachePool:ep()}}function Lf(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=On),e}function gy(e,i,a){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,v;if((v=d)||(v=e!==null&&e.memoizedState===null?!1:(we.current&2)!==0),v&&(h=!0,i.flags&=-129),v=(i.flags&32)!==0,i.flags&=-33,e===null){if(Bt){if(h?cr(i):hr(),Bt){var T=oe,R;if(R=T){t:{for(R=T,T=si;R.nodeType!==8;){if(!T){T=null;break t}if(R=zn(R.nextSibling),R===null){T=null;break t}}T=R}T!==null?(i.memoizedState={dehydrated:T,treeContext:vs!==null?{id:Mi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},R=cn(18,null,null,0),R.stateNode=T,R.return=i,i.child=R,Je=i,oe=null,R=!0):R=!1}R||As(i)}if(T=i.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Td(T)?i.lanes=32:i.lanes=536870912,null;Ui(i)}return T=l.children,l=l.fallback,h?(hr(),h=i.mode,T=Xu({mode:"hidden",children:T},h),l=_s(l,h,a,null),T.return=i,l.return=i,T.sibling=l,i.child=T,h=i.child,h.memoizedState=Uf(a),h.childLanes=Lf(e,v,a),i.memoizedState=xf,l):(cr(i),zf(i,T))}if(R=e.memoizedState,R!==null&&(T=R.dehydrated,T!==null)){if(d)i.flags&256?(cr(i),i.flags&=-257,i=jf(e,i,a)):i.memoizedState!==null?(hr(),i.child=e.child,i.flags|=128,i=null):(hr(),h=l.fallback,T=i.mode,l=Xu({mode:"visible",children:l.children},T),h=_s(h,T,a,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,ba(i,e.child,null,a),l=i.child,l.memoizedState=Uf(a),l.childLanes=Lf(e,v,a),i.memoizedState=xf,i=h);else if(cr(i),Td(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var L=v.dgst;v=L,l=Error(s(419)),l.stack="",l.digest=v,Uo({value:l,source:null,stack:null}),i=jf(e,i,a)}else if(Oe||Lo(e,i,a,!1),v=(a&e.childLanes)!==0,Oe||v){if(v=Jt,v!==null&&(l=a&-a,l=(l&42)!==0?1:Wi(l),l=(l&(v.suspendedLanes|a))!==0?0:l,l!==0&&l!==R.retryLane))throw R.retryLane=l,ma(e,l),gn(v,e,l),ay;T.data==="$?"||rd(),i=jf(e,i,a)}else T.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=R.treeContext,oe=zn(T.nextSibling),Je=i,Bt=!0,Ts=null,si=!1,e!==null&&(In[Cn++]=Mi,In[Cn++]=Vi,In[Cn++]=vs,Mi=e.id,Vi=e.overflow,vs=i),i=zf(i,l.children),i.flags|=4096);return i}return h?(hr(),h=l.fallback,T=i.mode,R=e.child,L=R.sibling,l=Ni(R,{mode:"hidden",children:l.children}),l.subtreeFlags=R.subtreeFlags&65011712,L!==null?h=Ni(L,h):(h=_s(h,T,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,T=e.child.memoizedState,T===null?T=Uf(a):(R=T.cachePool,R!==null?(L=Se._currentValue,R=R.parent!==L?{parent:L,pool:L}:R):R=ep(),T={baseLanes:T.baseLanes|a,cachePool:R}),h.memoizedState=T,h.childLanes=Lf(e,v,a),i.memoizedState=xf,l):(cr(i),a=e.child,e=a.sibling,a=Ni(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,e!==null&&(v=i.deletions,v===null?(i.deletions=[e],i.flags|=16):v.push(e)),i.child=a,i.memoizedState=null,a)}function zf(e,i){return i=Xu({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Xu(e,i){return e=cn(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function jf(e,i,a){return ba(i,e.child,null,a),e=zf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function py(e,i,a){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),rf(e.return,i,a)}function Bf(e,i,a,l,h){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=a,d.tailMode=h)}function yy(e,i,a){var l=i.pendingProps,h=l.revealOrder,d=l.tail;if(Ue(e,i,l.children,a),l=we.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&py(e,a,i);else if(e.tag===19)py(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(J(we,l),h){case"forwards":for(a=i.child,h=null;a!==null;)e=a.alternate,e!==null&&Gu(e)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Bf(i,!1,h,a,d);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&Gu(e)===null){i.child=h;break}e=h.sibling,h.sibling=a,a=h,h=e}Bf(i,!0,a,null,d);break;case"together":Bf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Li(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),pr|=i.lanes,(a&i.childLanes)===0)if(e!==null){if(Lo(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,a=Ni(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=Ni(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function qf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Du(e)))}function YA(e,i,a){switch(i.tag){case 3:Wt(i,i.stateNode.containerInfo),sr(i,Se,e.memoizedState.cache),xo();break;case 27:case 5:Zi(i);break;case 4:Wt(i,i.stateNode.containerInfo);break;case 10:sr(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(cr(i),i.flags|=128,null):(a&i.child.childLanes)!==0?gy(e,i,a):(cr(i),e=Li(e,i,a),e!==null?e.sibling:null);cr(i);break;case 19:var h=(e.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(Lo(e,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return yy(e,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),J(we,we.current),l)break;return null;case 22:case 23:return i.lanes=0,cy(e,i,a);case 24:sr(i,Se,e.memoizedState.cache)}return Li(e,i,a)}function _y(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)Oe=!0;else{if(!qf(e,a)&&(i.flags&128)===0)return Oe=!1,YA(e,i,a);Oe=(e.flags&131072)!==0}else Oe=!1,Bt&&(i.flags&1048576)!==0&&Yg(i,Cu,i.index);switch(i.lanes=0,i.tag){case 16:t:{e=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")$h(l)?(e=Is(l,e),i.tag=1,i=dy(null,i,l,e,a)):(i.tag=0,i=kf(null,i,l,e,a));else{if(l!=null){if(h=l.$$typeof,h===Et){i.tag=11,i=oy(null,i,l,e,a);break t}else if(h===M){i.tag=14,i=ly(null,i,l,e,a);break t}}throw i=Pe(l)||l,Error(s(306,i,""))}}return i;case 0:return kf(e,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=Is(l,i.pendingProps),dy(e,i,l,h,a);case 3:t:{if(Wt(i,i.stateNode.containerInfo),e===null)throw Error(s(387));l=i.pendingProps;var d=i.memoizedState;h=d.element,hf(e,i),Go(i,l,null,a);var v=i.memoizedState;if(l=v.cache,sr(i,Se,l),l!==d.cache&&sf(i,[Se],a,!0),Fo(),l=v.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:v.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=my(e,i,l,a);break t}else if(l!==h){h=bn(Error(s(424)),i),Uo(h),i=my(e,i,l,a);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(oe=zn(e.firstChild),Je=i,Bt=!0,Ts=null,si=!0,a=$p(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(xo(),l===h){i=Li(e,i,a);break t}Ue(e,i,l,a)}i=i.child}return i;case 26:return Yu(e,i),e===null?(a=A_(i.type,null,i.pendingProps,null))?i.memoizedState=a:Bt||(a=i.type,e=i.pendingProps,l=uc(Tt.current).createElement(a),l[Ee]=i,l[de]=e,ze(l,a,e),ue(l),i.stateNode=l):i.memoizedState=A_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Zi(i),e===null&&Bt&&(l=i.stateNode=v_(i.type,i.pendingProps,Tt.current),Je=i,si=!0,h=oe,Er(i.type)?(Ad=h,oe=zn(l.firstChild)):oe=h),Ue(e,i,i.pendingProps.children,a),Yu(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Bt&&((h=l=oe)&&(l=AS(l,i.type,i.pendingProps,si),l!==null?(i.stateNode=l,Je=i,oe=zn(l.firstChild),si=!1,h=!0):h=!1),h||As(i)),Zi(i),h=i.type,d=i.pendingProps,v=e!==null?e.memoizedProps:null,l=d.children,_d(h,d)?l=null:v!==null&&_d(h,v)&&(i.flags|=32),i.memoizedState!==null&&(h=yf(e,i,jA,null,null,a),dl._currentValue=h),Yu(e,i),Ue(e,i,l,a),i.child;case 6:return e===null&&Bt&&((e=a=oe)&&(a=SS(a,i.pendingProps,si),a!==null?(i.stateNode=a,Je=i,oe=null,e=!0):e=!1),e||As(i)),null;case 13:return gy(e,i,a);case 4:return Wt(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=ba(i,null,l,a):Ue(e,i,l,a),i.child;case 11:return oy(e,i,i.type,i.pendingProps,a);case 7:return Ue(e,i,i.pendingProps,a),i.child;case 8:return Ue(e,i,i.pendingProps.children,a),i.child;case 12:return Ue(e,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,sr(i,i.type,l.value),Ue(e,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,ws(i),h=Fe(h),l=l(h),i.flags|=1,Ue(e,i,l,a),i.child;case 14:return ly(e,i,i.type,i.pendingProps,a);case 15:return uy(e,i,i.type,i.pendingProps,a);case 19:return yy(e,i,a);case 31:return l=i.pendingProps,a=i.mode,l={mode:l.mode,children:l.children},e===null?(a=Xu(l,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=Ni(e.child,l),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return cy(e,i,a);case 24:return ws(i),l=Fe(Se),e===null?(h=lf(),h===null&&(h=Jt,d=af(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:l,cache:h},cf(i),sr(i,Se,h)):((e.lanes&a)!==0&&(hf(e,i),Go(i,null,null,a),Fo()),h=e.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),sr(i,Se,l)):(l=d.cache,sr(i,Se,l),l!==h.cache&&sf(i,[Se],a,!0))),Ue(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function zi(e){e.flags|=4}function vy(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!I_(i)){if(i=Dn.current,i!==null&&((Ut&4194048)===Ut?ai!==null:(Ut&62914560)!==Ut&&(Ut&536870912)===0||i!==ai))throw qo=uf,np;e.flags|=8192}}function $u(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?go():536870912,e.lanes|=i,Da|=i)}function Wo(e,i){if(!Bt)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ie(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(i)for(var h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=a,i}function XA(e,i,a){var l=i.pendingProps;switch(tf(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(i),null;case 1:return ie(i),null;case 3:return a=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ki(Se),Qn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ko(i)?zi(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Zg())),ie(i),null;case 26:return a=i.memoizedState,e===null?(zi(i),a!==null?(ie(i),vy(i,a)):(ie(i),i.flags&=-16777217)):a?a!==e.memoizedState?(zi(i),ie(i),vy(i,a)):(ie(i),i.flags&=-16777217):(e.memoizedProps!==l&&zi(i),ie(i),i.flags&=-16777217),null;case 27:_i(i),a=Tt.current;var h=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==l&&zi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ie(i),null}e=dt.current,ko(i)?Xg(i):(e=v_(h,l,a),i.stateNode=e,zi(i))}return ie(i),null;case 5:if(_i(i),a=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&zi(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return ie(i),null}if(e=dt.current,ko(i))Xg(i);else{switch(h=uc(Tt.current),e){case 1:e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=h.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=h.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?h.createElement(a,{is:l.is}):h.createElement(a)}}e[Ee]=i,e[de]=l;t:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)e.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break t;for(;h.sibling===null;){if(h.return===null||h.return===i)break t;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=e;t:switch(ze(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&zi(i)}}return ie(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&zi(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(e=Tt.current,ko(i)){if(e=i.stateNode,a=i.memoizedProps,l=null,h=Je,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[Ee]=i,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||f_(e.nodeValue,a)),e||As(i)}else e=uc(e).createTextNode(l),e[Ee]=i,i.stateNode=e}return ie(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=ko(i),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[Ee]=i}else xo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ie(i),h=!1}else h=Zg(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(Ui(i),i):(Ui(i),null)}if(Ui(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var d=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)}return a!==e&&a&&(i.child.flags|=8192),$u(i,i.updateQueue),ie(i),null;case 4:return Qn(),e===null&&dd(i.stateNode.containerInfo),ie(i),null;case 10:return ki(i.type),ie(i),null;case 19:if(it(we),h=i.memoizedState,h===null)return ie(i),null;if(l=(i.flags&128)!==0,d=h.rendering,d===null)if(l)Wo(h,!1);else{if(le!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=Gu(e),d!==null){for(i.flags|=128,Wo(h,!1),e=d.updateQueue,i.updateQueue=e,$u(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)Qg(a,e),a=a.sibling;return J(we,we.current&1|2),i.child}e=e.sibling}h.tail!==null&&vn()>Ju&&(i.flags|=128,l=!0,Wo(h,!1),i.lanes=4194304)}else{if(!l)if(e=Gu(d),e!==null){if(i.flags|=128,l=!0,e=e.updateQueue,i.updateQueue=e,$u(i,e),Wo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!d.alternate&&!Bt)return ie(i),null}else 2*vn()-h.renderingStartTime>Ju&&a!==536870912&&(i.flags|=128,l=!0,Wo(h,!1),i.lanes=4194304);h.isBackwards?(d.sibling=i.child,i.child=d):(e=h.last,e!==null?e.sibling=d:i.child=d,h.last=d)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=vn(),i.sibling=null,e=we.current,J(we,l?e&1|2:e&1),i):(ie(i),null);case 22:case 23:return Ui(i),gf(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(ie(i),i.subtreeFlags&6&&(i.flags|=8192)):ie(i),a=i.updateQueue,a!==null&&$u(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),e!==null&&it(bs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),ki(Se),ie(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function $A(e,i){switch(tf(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return ki(Se),Qn(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return _i(i),null;case 13:if(Ui(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));xo()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return it(we),null;case 4:return Qn(),null;case 10:return ki(i.type),null;case 22:case 23:return Ui(i),gf(),e!==null&&it(bs),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return ki(Se),null;case 25:return null;default:return null}}function Ey(e,i){switch(tf(i),i.tag){case 3:ki(Se),Qn();break;case 26:case 27:case 5:_i(i);break;case 4:Qn();break;case 13:Ui(i);break;case 19:it(we);break;case 10:ki(i.type);break;case 22:case 23:Ui(i),gf(),e!==null&&it(bs);break;case 24:ki(Se)}}function Jo(e,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&e)===e){l=void 0;var d=a.create,v=a.inst;l=d(),v.destroy=l}a=a.next}while(a!==h)}}catch(T){Zt(i,i.return,T)}}function fr(e,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&e)===e){var v=l.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,h=i;var R=a,L=T;try{L()}catch(F){Zt(h,R,F)}}}l=l.next}while(l!==d)}}catch(F){Zt(i,i.return,F)}}function Ty(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{lp(i,a)}catch(l){Zt(e,e.return,l)}}}function Ay(e,i,a){a.props=Is(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Zt(e,i,l)}}function tl(e,i){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(h){Zt(e,i,h)}}function oi(e,i){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){Zt(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Zt(e,i,h)}else a.current=null}function Sy(e){var i=e.type,a=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){Zt(e,e.return,h)}}function Hf(e,i,a){try{var l=e.stateNode;yS(l,e.type,a,i),l[de]=i}catch(h){Zt(e,e.return,h)}}function wy(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Er(e.type)||e.tag===4}function Ff(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||wy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Er(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gf(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(e),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=lc));else if(l!==4&&(l===27&&Er(e.type)&&(a=e.stateNode,i=null),e=e.child,e!==null))for(Gf(e,i,a),e=e.sibling;e!==null;)Gf(e,i,a),e=e.sibling}function Zu(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(l!==4&&(l===27&&Er(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Zu(e,i,a),e=e.sibling;e!==null;)Zu(e,i,a),e=e.sibling}function by(e){var i=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);ze(i,l,a),i[Ee]=e,i[de]=a}catch(d){Zt(e,e.return,d)}}var ji=!1,he=!1,Kf=!1,Ry=typeof WeakSet=="function"?WeakSet:Set,Ne=null;function ZA(e,i){if(e=e.containerInfo,pd=gc,e=Ug(e),Hh(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var v=0,T=-1,R=-1,L=0,F=0,Q=e,z=null;e:for(;;){for(var j;Q!==a||h!==0&&Q.nodeType!==3||(T=v+h),Q!==d||l!==0&&Q.nodeType!==3||(R=v+l),Q.nodeType===3&&(v+=Q.nodeValue.length),(j=Q.firstChild)!==null;)z=Q,Q=j;for(;;){if(Q===e)break e;if(z===a&&++L===h&&(T=v),z===d&&++F===l&&(R=v),(j=Q.nextSibling)!==null)break;Q=z,z=Q.parentNode}Q=j}a=T===-1||R===-1?null:{start:T,end:R}}else a=null}a=a||{start:0,end:0}}else a=null;for(yd={focusedElem:e,selectionRange:a},gc=!1,Ne=i;Ne!==null;)if(i=Ne,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,Ne=e;else for(;Ne!==null;){switch(i=Ne,d=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var vt=Is(a.type,h,a.elementType===a.type);e=l.getSnapshotBeforeUpdate(vt,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(gt){Zt(a,a.return,gt)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)Ed(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ed(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,Ne=e;break}Ne=i.return}}function Iy(e,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:dr(e,a),l&4&&Jo(5,a);break;case 1:if(dr(e,a),l&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(v){Zt(a,a.return,v)}else{var h=Is(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Zt(a,a.return,v)}}l&64&&Ty(a),l&512&&tl(a,a.return);break;case 3:if(dr(e,a),l&64&&(e=a.updateQueue,e!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{lp(e,i)}catch(v){Zt(a,a.return,v)}}break;case 27:i===null&&l&4&&by(a);case 26:case 5:dr(e,a),i===null&&l&4&&Sy(a),l&512&&tl(a,a.return);break;case 12:dr(e,a);break;case 13:dr(e,a),l&4&&Oy(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=aS.bind(null,a),wS(e,a))));break;case 22:if(l=a.memoizedState!==null||ji,!l){i=i!==null&&i.memoizedState!==null||he,h=ji;var d=he;ji=l,(he=i)&&!d?mr(e,a,(a.subtreeFlags&8772)!==0):dr(e,a),ji=h,he=d}break;case 30:break;default:dr(e,a)}}function Cy(e){var i=e.alternate;i!==null&&(e.alternate=null,Cy(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&er(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ne=null,en=!1;function Bi(e,i,a){for(a=a.child;a!==null;)Dy(e,i,a),a=a.sibling}function Dy(e,i,a){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(ae,a)}catch{}switch(a.tag){case 26:he||oi(a,i),Bi(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:he||oi(a,i);var l=ne,h=en;Er(a.type)&&(ne=a.stateNode,en=!1),Bi(e,i,a),ul(a.stateNode),ne=l,en=h;break;case 5:he||oi(a,i);case 6:if(l=ne,h=en,ne=null,Bi(e,i,a),ne=l,en=h,ne!==null)if(en)try{(ne.nodeType===9?ne.body:ne.nodeName==="HTML"?ne.ownerDocument.body:ne).removeChild(a.stateNode)}catch(d){Zt(a,i,d)}else try{ne.removeChild(a.stateNode)}catch(d){Zt(a,i,d)}break;case 18:ne!==null&&(en?(e=ne,y_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),yl(e)):y_(ne,a.stateNode));break;case 4:l=ne,h=en,ne=a.stateNode.containerInfo,en=!0,Bi(e,i,a),ne=l,en=h;break;case 0:case 11:case 14:case 15:he||fr(2,a,i),he||fr(4,a,i),Bi(e,i,a);break;case 1:he||(oi(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Ay(a,i,l)),Bi(e,i,a);break;case 21:Bi(e,i,a);break;case 22:he=(l=he)||a.memoizedState!==null,Bi(e,i,a),he=l;break;default:Bi(e,i,a)}}function Oy(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{yl(e)}catch(a){Zt(i,i.return,a)}}function WA(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Ry),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Ry),i;default:throw Error(s(435,e.tag))}}function Qf(e,i){var a=WA(e);i.forEach(function(l){var h=oS.bind(null,e,l);a.has(l)||(a.add(l),l.then(h,h))})}function hn(e,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=e,v=i,T=v;t:for(;T!==null;){switch(T.tag){case 27:if(Er(T.type)){ne=T.stateNode,en=!1;break t}break;case 5:ne=T.stateNode,en=!1;break t;case 3:case 4:ne=T.stateNode.containerInfo,en=!0;break t}T=T.return}if(ne===null)throw Error(s(160));Dy(d,v,h),ne=null,en=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)Ny(i,e),i=i.sibling}var Ln=null;function Ny(e,i){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:hn(i,e),fn(e),l&4&&(fr(3,e,e.return),Jo(3,e),fr(5,e,e.return));break;case 1:hn(i,e),fn(e),l&512&&(he||a===null||oi(a,a.return)),l&64&&ji&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=Ln;if(hn(i,e),fn(e),l&512&&(he||a===null||oi(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){t:{l=e.type,a=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[ns]||d[Ee]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),ze(d,l,a),d[Ee]=e,ue(d),l=d;break t;case"link":var v=b_("link","href",h).get(l+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(d=v[T],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break e}}d=h.createElement(l),ze(d,l,a),h.head.appendChild(d);break;case"meta":if(v=b_("meta","content",h).get(l+(a.content||""))){for(T=0;T<v.length;T++)if(d=v[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break e}}d=h.createElement(l),ze(d,l,a),h.head.appendChild(d);break;default:throw Error(s(468,l))}d[Ee]=e,ue(d),l=d}e.stateNode=l}else R_(h,e.type,e.stateNode);else e.stateNode=w_(h,l,e.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?R_(h,e.type,e.stateNode):w_(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Hf(e,e.memoizedProps,a.memoizedProps)}break;case 27:hn(i,e),fn(e),l&512&&(he||a===null||oi(a,a.return)),a!==null&&l&4&&Hf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(hn(i,e),fn(e),l&512&&(he||a===null||oi(a,a.return)),e.flags&32){h=e.stateNode;try{Tn(h,"")}catch(j){Zt(e,e.return,j)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,Hf(e,h,a!==null?a.memoizedProps:h)),l&1024&&(Kf=!0);break;case 6:if(hn(i,e),fn(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(j){Zt(e,e.return,j)}}break;case 3:if(fc=null,h=Ln,Ln=cc(i.containerInfo),hn(i,e),Ln=h,fn(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{yl(i.containerInfo)}catch(j){Zt(e,e.return,j)}Kf&&(Kf=!1,My(e));break;case 4:l=Ln,Ln=cc(e.stateNode.containerInfo),hn(i,e),fn(e),Ln=l;break;case 12:hn(i,e),fn(e);break;case 13:hn(i,e),fn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Jf=vn()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Qf(e,l)));break;case 22:h=e.memoizedState!==null;var R=a!==null&&a.memoizedState!==null,L=ji,F=he;if(ji=L||h,he=F||R,hn(i,e),he=F,ji=L,fn(e),l&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||R||ji||he||Cs(e)),a=null,i=e;;){if(i.tag===5||i.tag===26){if(a===null){R=a=i;try{if(d=R.stateNode,h)v=d.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=R.stateNode;var Q=R.memoizedProps.style,z=Q!=null&&Q.hasOwnProperty("display")?Q.display:null;T.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(j){Zt(R,R.return,j)}}}else if(i.tag===6){if(a===null){R=i;try{R.stateNode.nodeValue=h?"":R.memoizedProps}catch(j){Zt(R,R.return,j)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Qf(e,a))));break;case 19:hn(i,e),fn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Qf(e,l)));break;case 30:break;case 21:break;default:hn(i,e),fn(e)}}function fn(e){var i=e.flags;if(i&2){try{for(var a,l=e.return;l!==null;){if(wy(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,d=Ff(e);Zu(e,d,h);break;case 5:var v=a.stateNode;a.flags&32&&(Tn(v,""),a.flags&=-33);var T=Ff(e);Zu(e,T,v);break;case 3:case 4:var R=a.stateNode.containerInfo,L=Ff(e);Gf(e,L,R);break;default:throw Error(s(161))}}catch(F){Zt(e,e.return,F)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function My(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;My(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function dr(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Iy(e,i.alternate,i),i=i.sibling}function Cs(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:fr(4,i,i.return),Cs(i);break;case 1:oi(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&Ay(i,i.return,a),Cs(i);break;case 27:ul(i.stateNode);case 26:case 5:oi(i,i.return),Cs(i);break;case 22:i.memoizedState===null&&Cs(i);break;case 30:Cs(i);break;default:Cs(i)}e=e.sibling}}function mr(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=e,d=i,v=d.flags;switch(d.tag){case 0:case 11:case 15:mr(h,d,a),Jo(4,d);break;case 1:if(mr(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(L){Zt(l,l.return,L)}if(l=d,h=l.updateQueue,h!==null){var T=l.stateNode;try{var R=h.shared.hiddenCallbacks;if(R!==null)for(h.shared.hiddenCallbacks=null,h=0;h<R.length;h++)op(R[h],T)}catch(L){Zt(l,l.return,L)}}a&&v&64&&Ty(d),tl(d,d.return);break;case 27:by(d);case 26:case 5:mr(h,d,a),a&&l===null&&v&4&&Sy(d),tl(d,d.return);break;case 12:mr(h,d,a);break;case 13:mr(h,d,a),a&&v&4&&Oy(h,d);break;case 22:d.memoizedState===null&&mr(h,d,a),tl(d,d.return);break;case 30:break;default:mr(h,d,a)}i=i.sibling}}function Yf(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&zo(a))}function Xf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&zo(e))}function li(e,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Vy(e,i,a,l),i=i.sibling}function Vy(e,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:li(e,i,a,l),h&2048&&Jo(9,i);break;case 1:li(e,i,a,l);break;case 3:li(e,i,a,l),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&zo(e)));break;case 12:if(h&2048){li(e,i,a,l),e=i.stateNode;try{var d=i.memoizedProps,v=d.id,T=d.onPostCommit;typeof T=="function"&&T(v,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(R){Zt(i,i.return,R)}}else li(e,i,a,l);break;case 13:li(e,i,a,l);break;case 23:break;case 22:d=i.stateNode,v=i.alternate,i.memoizedState!==null?d._visibility&2?li(e,i,a,l):el(e,i):d._visibility&2?li(e,i,a,l):(d._visibility|=2,Ra(e,i,a,l,(i.subtreeFlags&10256)!==0)),h&2048&&Yf(v,i);break;case 24:li(e,i,a,l),h&2048&&Xf(i.alternate,i);break;default:li(e,i,a,l)}}function Ra(e,i,a,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=e,v=i,T=a,R=l,L=v.flags;switch(v.tag){case 0:case 11:case 15:Ra(d,v,T,R,h),Jo(8,v);break;case 23:break;case 22:var F=v.stateNode;v.memoizedState!==null?F._visibility&2?Ra(d,v,T,R,h):el(d,v):(F._visibility|=2,Ra(d,v,T,R,h)),h&&L&2048&&Yf(v.alternate,v);break;case 24:Ra(d,v,T,R,h),h&&L&2048&&Xf(v.alternate,v);break;default:Ra(d,v,T,R,h)}i=i.sibling}}function el(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,l=i,h=l.flags;switch(l.tag){case 22:el(a,l),h&2048&&Yf(l.alternate,l);break;case 24:el(a,l),h&2048&&Xf(l.alternate,l);break;default:el(a,l)}i=i.sibling}}var nl=8192;function Ia(e){if(e.subtreeFlags&nl)for(e=e.child;e!==null;)Py(e),e=e.sibling}function Py(e){switch(e.tag){case 26:Ia(e),e.flags&nl&&e.memoizedState!==null&&US(Ln,e.memoizedState,e.memoizedProps);break;case 5:Ia(e);break;case 3:case 4:var i=Ln;Ln=cc(e.stateNode.containerInfo),Ia(e),Ln=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=nl,nl=16777216,Ia(e),nl=i):Ia(e));break;default:Ia(e)}}function ky(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function il(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Ne=l,Uy(l,e)}ky(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)xy(e),e=e.sibling}function xy(e){switch(e.tag){case 0:case 11:case 15:il(e),e.flags&2048&&fr(9,e,e.return);break;case 3:il(e);break;case 12:il(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Wu(e)):il(e);break;default:il(e)}}function Wu(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];Ne=l,Uy(l,e)}ky(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:fr(8,i,i.return),Wu(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,Wu(i));break;default:Wu(i)}e=e.sibling}}function Uy(e,i){for(;Ne!==null;){var a=Ne;switch(a.tag){case 0:case 11:case 15:fr(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:zo(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ne=l;else t:for(a=e;Ne!==null;){l=Ne;var h=l.sibling,d=l.return;if(Cy(l),l===a){Ne=null;break t}if(h!==null){h.return=d,Ne=h;break t}Ne=d}}}var JA={getCacheForType:function(e){var i=Fe(Se),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a}},tS=typeof WeakMap=="function"?WeakMap:Map,Gt=0,Jt=null,Nt=null,Ut=0,Kt=0,dn=null,gr=!1,Ca=!1,$f=!1,qi=0,le=0,pr=0,Ds=0,Zf=0,On=0,Da=0,rl=null,nn=null,Wf=!1,Jf=0,Ju=1/0,tc=null,yr=null,Le=0,_r=null,Oa=null,Na=0,td=0,ed=null,Ly=null,sl=0,nd=null;function mn(){if((Gt&2)!==0&&Ut!==0)return Ut&-Ut;if(H.T!==null){var e=_a;return e!==0?e:ud()}return Ji()}function zy(){On===0&&(On=(Ut&536870912)===0||Bt?mo():536870912);var e=Dn.current;return e!==null&&(e.flags|=32),On}function gn(e,i,a){(e===Jt&&(Kt===2||Kt===9)||e.cancelPendingCommit!==null)&&(Ma(e,0),vr(e,Ut,On,!1)),Ei(e,a),((Gt&2)===0||e!==Jt)&&(e===Jt&&((Gt&2)===0&&(Ds|=a),le===4&&vr(e,Ut,On,!1)),ui(e))}function jy(e,i,a){if((Gt&6)!==0)throw Error(s(327));var l=!a&&(i&124)===0&&(i&e.expiredLanes)===0||es(e,i),h=l?iS(e,i):sd(e,i,!0),d=l;do{if(h===0){Ca&&!l&&vr(e,i,0,!1);break}else{if(a=e.current.alternate,d&&!eS(a)){h=sd(e,i,!1),d=!1;continue}if(h===2){if(d=i,e.errorRecoveryDisabledLanes&d)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){i=v;t:{var T=e;h=rl;var R=T.current.memoizedState.isDehydrated;if(R&&(Ma(T,v).flags|=256),v=sd(T,v,!1),v!==2){if($f&&!R){T.errorRecoveryDisabledLanes|=d,Ds|=d,h=4;break t}d=nn,nn=h,d!==null&&(nn===null?nn=d:nn.push.apply(nn,d))}h=v}if(d=!1,h!==2)continue}}if(h===1){Ma(e,0),vr(e,i,0,!0);break}t:{switch(l=e,d=h,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:vr(l,i,On,!gr);break t;case 2:nn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(h=Jf+300-vn(),10<h)){if(vr(l,i,On,!gr),Xs(l,0,!0)!==0)break t;l.timeoutHandle=g_(By.bind(null,l,a,nn,tc,Wf,i,On,Ds,Da,gr,d,2,-0,0),h);break t}By(l,a,nn,tc,Wf,i,On,Ds,Da,gr,d,0,-0,0)}}break}while(!0);ui(e)}function By(e,i,a,l,h,d,v,T,R,L,F,Q,z,j){if(e.timeoutHandle=-1,Q=i.subtreeFlags,(Q&8192||(Q&16785408)===16785408)&&(fl={stylesheets:null,count:0,unsuspend:xS},Py(i),Q=LS(),Q!==null)){e.cancelPendingCommit=Q(Yy.bind(null,e,i,d,a,l,h,v,T,R,F,1,z,j)),vr(e,d,v,!L);return}Yy(e,i,d,a,l,h,v,T,R)}function eS(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!un(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function vr(e,i,a,l){i&=~Zf,i&=~Ds,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var h=i;0<h;){var d=31-He(h),v=1<<d;l[d]=-1,h&=~v}a!==0&&Yn(e,a,i)}function ec(){return(Gt&6)===0?(al(0),!1):!0}function id(){if(Nt!==null){if(Kt===0)var e=Nt.return;else e=Nt,Pi=Ss=null,Ef(e),wa=null,$o=0,e=Nt;for(;e!==null;)Ey(e.alternate,e),e=e.return;Nt=null}}function Ma(e,i){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,vS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),id(),Jt=e,Nt=a=Ni(e.current,null),Ut=i,Kt=0,dn=null,gr=!1,Ca=es(e,i),$f=!1,Da=On=Zf=Ds=pr=le=0,nn=rl=null,Wf=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var h=31-He(l),d=1<<h;i|=e[h],l&=~d}return qi=i,Su(),a}function qy(e,i){It=null,H.H=qu,i===Bo||i===Mu?(i=sp(),Kt=3):i===np?(i=sp(),Kt=4):Kt=i===ay?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,dn=i,Nt===null&&(le=1,Qu(e,bn(i,e.current)))}function Hy(){var e=H.H;return H.H=qu,e===null?qu:e}function Fy(){var e=H.A;return H.A=JA,e}function rd(){le=4,gr||(Ut&4194048)!==Ut&&Dn.current!==null||(Ca=!0),(pr&134217727)===0&&(Ds&134217727)===0||Jt===null||vr(Jt,Ut,On,!1)}function sd(e,i,a){var l=Gt;Gt|=2;var h=Hy(),d=Fy();(Jt!==e||Ut!==i)&&(tc=null,Ma(e,i)),i=!1;var v=le;t:do try{if(Kt!==0&&Nt!==null){var T=Nt,R=dn;switch(Kt){case 8:id(),v=6;break t;case 3:case 2:case 9:case 6:Dn.current===null&&(i=!0);var L=Kt;if(Kt=0,dn=null,Va(e,T,R,L),a&&Ca){v=0;break t}break;default:L=Kt,Kt=0,dn=null,Va(e,T,R,L)}}nS(),v=le;break}catch(F){qy(e,F)}while(!0);return i&&e.shellSuspendCounter++,Pi=Ss=null,Gt=l,H.H=h,H.A=d,Nt===null&&(Jt=null,Ut=0,Su()),v}function nS(){for(;Nt!==null;)Gy(Nt)}function iS(e,i){var a=Gt;Gt|=2;var l=Hy(),h=Fy();Jt!==e||Ut!==i?(tc=null,Ju=vn()+500,Ma(e,i)):Ca=es(e,i);t:do try{if(Kt!==0&&Nt!==null){i=Nt;var d=dn;e:switch(Kt){case 1:Kt=0,dn=null,Va(e,i,d,1);break;case 2:case 9:if(ip(d)){Kt=0,dn=null,Ky(i);break}i=function(){Kt!==2&&Kt!==9||Jt!==e||(Kt=7),ui(e)},d.then(i,i);break t;case 3:Kt=7;break t;case 4:Kt=5;break t;case 7:ip(d)?(Kt=0,dn=null,Ky(i)):(Kt=0,dn=null,Va(e,i,d,7));break;case 5:var v=null;switch(Nt.tag){case 26:v=Nt.memoizedState;case 5:case 27:var T=Nt;if(!v||I_(v)){Kt=0,dn=null;var R=T.sibling;if(R!==null)Nt=R;else{var L=T.return;L!==null?(Nt=L,nc(L)):Nt=null}break e}}Kt=0,dn=null,Va(e,i,d,5);break;case 6:Kt=0,dn=null,Va(e,i,d,6);break;case 8:id(),le=6;break t;default:throw Error(s(462))}}rS();break}catch(F){qy(e,F)}while(!0);return Pi=Ss=null,H.H=l,H.A=h,Gt=a,Nt!==null?0:(Jt=null,Ut=0,Su(),le)}function rS(){for(;Nt!==null&&!uo();)Gy(Nt)}function Gy(e){var i=_y(e.alternate,e,qi);e.memoizedProps=e.pendingProps,i===null?nc(e):Nt=i}function Ky(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=fy(a,i,i.pendingProps,i.type,void 0,Ut);break;case 11:i=fy(a,i,i.pendingProps,i.type.render,i.ref,Ut);break;case 5:Ef(i);default:Ey(a,i),i=Nt=Qg(i,qi),i=_y(a,i,qi)}e.memoizedProps=e.pendingProps,i===null?nc(e):Nt=i}function Va(e,i,a,l){Pi=Ss=null,Ef(i),wa=null,$o=0;var h=i.return;try{if(QA(e,h,i,a,Ut)){le=1,Qu(e,bn(a,e.current)),Nt=null;return}}catch(d){if(h!==null)throw Nt=h,d;le=1,Qu(e,bn(a,e.current)),Nt=null;return}i.flags&32768?(Bt||l===1?e=!0:Ca||(Ut&536870912)!==0?e=!1:(gr=e=!0,(l===2||l===9||l===3||l===6)&&(l=Dn.current,l!==null&&l.tag===13&&(l.flags|=16384))),Qy(i,e)):nc(i)}function nc(e){var i=e;do{if((i.flags&32768)!==0){Qy(i,gr);return}e=i.return;var a=XA(i.alternate,i,qi);if(a!==null){Nt=a;return}if(i=i.sibling,i!==null){Nt=i;return}Nt=i=e}while(i!==null);le===0&&(le=5)}function Qy(e,i){do{var a=$A(e.alternate,e);if(a!==null){a.flags&=32767,Nt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){Nt=e;return}Nt=e=a}while(e!==null);le=6,Nt=null}function Yy(e,i,a,l,h,d,v,T,R){e.cancelPendingCommit=null;do ic();while(Le!==0);if((Gt&6)!==0)throw Error(s(327));if(i!==null){if(i===e.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=Yh,po(e,a,d,v,T,R),e===Jt&&(Nt=Jt=null,Ut=0),Oa=i,_r=e,Na=a,td=d,ed=h,Ly=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,lS(Zr,function(){return Jy(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=H.T,H.T=null,h=nt.p,nt.p=2,v=Gt,Gt|=4;try{ZA(e,i,a)}finally{Gt=v,nt.p=h,H.T=l}}Le=1,Xy(),$y(),Zy()}}function Xy(){if(Le===1){Le=0;var e=_r,i=Oa,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=H.T,H.T=null;var l=nt.p;nt.p=2;var h=Gt;Gt|=4;try{Ny(i,e);var d=yd,v=Ug(e.containerInfo),T=d.focusedElem,R=d.selectionRange;if(v!==T&&T&&T.ownerDocument&&xg(T.ownerDocument.documentElement,T)){if(R!==null&&Hh(T)){var L=R.start,F=R.end;if(F===void 0&&(F=L),"selectionStart"in T)T.selectionStart=L,T.selectionEnd=Math.min(F,T.value.length);else{var Q=T.ownerDocument||document,z=Q&&Q.defaultView||window;if(z.getSelection){var j=z.getSelection(),vt=T.textContent.length,gt=Math.min(R.start,vt),$t=R.end===void 0?gt:Math.min(R.end,vt);!j.extend&&gt>$t&&(v=$t,$t=gt,gt=v);var P=kg(T,gt),O=kg(T,$t);if(P&&O&&(j.rangeCount!==1||j.anchorNode!==P.node||j.anchorOffset!==P.offset||j.focusNode!==O.node||j.focusOffset!==O.offset)){var U=Q.createRange();U.setStart(P.node,P.offset),j.removeAllRanges(),gt>$t?(j.addRange(U),j.extend(O.node,O.offset)):(U.setEnd(O.node,O.offset),j.addRange(U))}}}}for(Q=[],j=T;j=j.parentNode;)j.nodeType===1&&Q.push({element:j,left:j.scrollLeft,top:j.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<Q.length;T++){var G=Q[T];G.element.scrollLeft=G.left,G.element.scrollTop=G.top}}gc=!!pd,yd=pd=null}finally{Gt=h,nt.p=l,H.T=a}}e.current=i,Le=2}}function $y(){if(Le===2){Le=0;var e=_r,i=Oa,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=H.T,H.T=null;var l=nt.p;nt.p=2;var h=Gt;Gt|=4;try{Iy(e,i.alternate,i)}finally{Gt=h,nt.p=l,H.T=a}}Le=3}}function Zy(){if(Le===4||Le===3){Le=0,Wl();var e=_r,i=Oa,a=Na,l=Ly;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Le=5:(Le=0,Oa=_r=null,Wy(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(yr=null),$s(a),i=i.stateNode,Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(ae,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=H.T,h=nt.p,nt.p=2,H.T=null;try{for(var d=e.onRecoverableError,v=0;v<l.length;v++){var T=l[v];d(T.value,{componentStack:T.stack})}}finally{H.T=i,nt.p=h}}(Na&3)!==0&&ic(),ui(e),h=e.pendingLanes,(a&4194090)!==0&&(h&42)!==0?e===nd?sl++:(sl=0,nd=e):sl=0,al(0)}}function Wy(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,zo(i)))}function ic(e){return Xy(),$y(),Zy(),Jy()}function Jy(){if(Le!==5)return!1;var e=_r,i=td;td=0;var a=$s(Na),l=H.T,h=nt.p;try{nt.p=32>a?32:a,H.T=null,a=ed,ed=null;var d=_r,v=Na;if(Le=0,Oa=_r=null,Na=0,(Gt&6)!==0)throw Error(s(331));var T=Gt;if(Gt|=4,xy(d.current),Vy(d,d.current,v,a),Gt=T,al(0,!1),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(ae,d)}catch{}return!0}finally{nt.p=h,H.T=l,Wy(e,i)}}function t_(e,i,a){i=bn(a,i),i=Pf(e.stateNode,i,2),e=lr(e,i,2),e!==null&&(Ei(e,2),ui(e))}function Zt(e,i,a){if(e.tag===3)t_(e,e,a);else for(;i!==null;){if(i.tag===3){t_(i,e,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(yr===null||!yr.has(l))){e=bn(a,e),a=ry(2),l=lr(i,a,2),l!==null&&(sy(a,l,i,e),Ei(l,2),ui(l));break}}i=i.return}}function ad(e,i,a){var l=e.pingCache;if(l===null){l=e.pingCache=new tS;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||($f=!0,h.add(a),e=sS.bind(null,e,i,a),i.then(e,e))}function sS(e,i,a){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Jt===e&&(Ut&a)===a&&(le===4||le===3&&(Ut&62914560)===Ut&&300>vn()-Jf?(Gt&2)===0&&Ma(e,0):Zf|=a,Da===Ut&&(Da=0)),ui(e)}function e_(e,i){i===0&&(i=go()),e=ma(e,i),e!==null&&(Ei(e,i),ui(e))}function aS(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),e_(e,a)}function oS(e,i){var a=0;switch(e.tag){case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),e_(e,a)}function lS(e,i){return Xr(e,i)}var rc=null,Pa=null,od=!1,sc=!1,ld=!1,Os=0;function ui(e){e!==Pa&&e.next===null&&(Pa===null?rc=Pa=e:Pa=Pa.next=e),sc=!0,od||(od=!0,cS())}function al(e,i){if(!ld&&sc){ld=!0;do for(var a=!1,l=rc;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var v=l.suspendedLanes,T=l.pingedLanes;d=(1<<31-He(42|e)+1)-1,d&=h&~(v&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,s_(l,d))}else d=Ut,d=Xs(l,l===Jt?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||es(l,d)||(a=!0,s_(l,d));l=l.next}while(a);ld=!1}}function uS(){n_()}function n_(){sc=od=!1;var e=0;Os!==0&&(_S()&&(e=Os),Os=0);for(var i=vn(),a=null,l=rc;l!==null;){var h=l.next,d=i_(l,i);d===0?(l.next=null,a===null?rc=h:a.next=h,h===null&&(Pa=a)):(a=l,(e!==0||(d&3)!==0)&&(sc=!0)),l=h}al(e)}function i_(e,i){for(var a=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var v=31-He(d),T=1<<v,R=h[v];R===-1?((T&a)===0||(T&l)!==0)&&(h[v]=fo(T,i)):R<=i&&(e.expiredLanes|=T),d&=~T}if(i=Jt,a=Ut,a=Xs(e,e===i?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===i&&(Kt===2||Kt===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&$r(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||es(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(l!==null&&$r(l),$s(a)){case 2:case 8:a=Qs;break;case 32:a=Zr;break;case 268435456:a=Ys;break;default:a=Zr}return l=r_.bind(null,e),a=Xr(a,l),e.callbackPriority=i,e.callbackNode=a,i}return l!==null&&l!==null&&$r(l),e.callbackPriority=2,e.callbackNode=null,2}function r_(e,i){if(Le!==0&&Le!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ic()&&e.callbackNode!==a)return null;var l=Ut;return l=Xs(e,e===Jt?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(jy(e,l,i),i_(e,vn()),e.callbackNode!=null&&e.callbackNode===a?r_.bind(null,e):null)}function s_(e,i){if(ic())return null;jy(e,i,!0)}function cS(){ES(function(){(Gt&6)!==0?Xr(co,uS):n_()})}function ud(){return Os===0&&(Os=mo()),Os}function a_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:na(""+e)}function o_(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function hS(e,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var d=a_((h[de]||null).action),v=l.submitter;v&&(i=(i=v[de]||null)?a_(i.formAction):v.getAttribute("formAction"),i!==null&&(d=i,v=null));var T=new ia("action","action",null,l,h);e.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Os!==0){var R=v?o_(h,v):new FormData(h);Df(a,{pending:!0,data:R,method:h.method,action:d},null,R)}}else typeof d=="function"&&(T.preventDefault(),R=v?o_(h,v):new FormData(h),Df(a,{pending:!0,data:R,method:h.method,action:d},d,R))},currentTarget:h}]})}}for(var cd=0;cd<Qh.length;cd++){var hd=Qh[cd],fS=hd.toLowerCase(),dS=hd[0].toUpperCase()+hd.slice(1);Un(fS,"on"+dS)}Un(jg,"onAnimationEnd"),Un(Bg,"onAnimationIteration"),Un(qg,"onAnimationStart"),Un("dblclick","onDoubleClick"),Un("focusin","onFocus"),Un("focusout","onBlur"),Un(OA,"onTransitionRun"),Un(NA,"onTransitionStart"),Un(MA,"onTransitionCancel"),Un(Hg,"onTransitionEnd"),Ai("onMouseEnter",["mouseout","mouseover"]),Ai("onMouseLeave",["mouseout","mouseover"]),Ai("onPointerEnter",["pointerout","pointerover"]),Ai("onPointerLeave",["pointerout","pointerover"]),kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),kn("onBeforeInput",["compositionend","keypress","textInput","paste"]),kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ol="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ol));function l_(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],h=l.event;l=l.listeners;t:{var d=void 0;if(i)for(var v=l.length-1;0<=v;v--){var T=l[v],R=T.instance,L=T.currentTarget;if(T=T.listener,R!==d&&h.isPropagationStopped())break t;d=T,h.currentTarget=L;try{d(h)}catch(F){Ku(F)}h.currentTarget=null,d=R}else for(v=0;v<l.length;v++){if(T=l[v],R=T.instance,L=T.currentTarget,T=T.listener,R!==d&&h.isPropagationStopped())break t;d=T,h.currentTarget=L;try{d(h)}catch(F){Ku(F)}h.currentTarget=null,d=R}}}}function Mt(e,i){var a=i[_o];a===void 0&&(a=i[_o]=new Set);var l=e+"__bubble";a.has(l)||(u_(i,e,2,!1),a.add(l))}function fd(e,i,a){var l=0;i&&(l|=4),u_(a,e,l,i)}var ac="_reactListening"+Math.random().toString(36).slice(2);function dd(e){if(!e[ac]){e[ac]=!0,vo.forEach(function(a){a!=="selectionchange"&&(mS.has(a)||fd(a,!1,e),fd(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[ac]||(i[ac]=!0,fd("selectionchange",!1,i))}}function u_(e,i,a,l){switch(V_(i)){case 2:var h=BS;break;case 8:h=qS;break;default:h=Id}a=h.bind(null,i,a,e),h=void 0,!Sn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(i,a,{capture:!0,passive:h}):e.addEventListener(i,a,!0):h!==void 0?e.addEventListener(i,a,{passive:h}):e.addEventListener(i,a,!1)}function md(e,i,a,l,h){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var v=l.tag;if(v===3||v===4){var T=l.stateNode.containerInfo;if(T===h)break;if(v===4)for(v=l.return;v!==null;){var R=v.tag;if((R===3||R===4)&&v.stateNode.containerInfo===h)return;v=v.return}for(;T!==null;){if(v=Ti(T),v===null)return;if(R=v.tag,R===5||R===6||R===26||R===27){l=d=v;continue t}T=T.parentNode}}l=l.return}lu(function(){var L=d,F=An(a),Q=[];t:{var z=Fg.get(e);if(z!==void 0){var j=ia,vt=e;switch(e){case"keypress":if(ti(a)===0)break t;case"keydown":case"keyup":j=ua;break;case"focusin":vt="focus",j=aa;break;case"focusout":vt="blur",j=aa;break;case"beforeblur":case"afterblur":j=aa;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=wn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=zh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=pu;break;case jg:case Bg:case qg:j=oa;break;case Hg:j=_u;break;case"scroll":case"scrollend":j=uu;break;case"wheel":j=ca;break;case"copy":case"cut":case"paste":j=la;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=No;break;case"toggle":case"beforetoggle":j=Eu}var gt=(i&4)!==0,$t=!gt&&(e==="scroll"||e==="scrollend"),P=gt?z!==null?z+"Capture":null:z;gt=[];for(var O=L,U;O!==null;){var G=O;if(U=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||U===null||P===null||(G=us(O,P),G!=null&&gt.push(ll(O,G,U))),$t)break;O=O.return}0<gt.length&&(z=new j(z,vt,null,a,F),Q.push({event:z,listeners:gt}))}}if((i&7)===0){t:{if(z=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",z&&a!==bi&&(vt=a.relatedTarget||a.fromElement)&&(Ti(vt)||vt[En]))break t;if((j||z)&&(z=F.window===F?F:(z=F.ownerDocument)?z.defaultView||z.parentWindow:window,j?(vt=a.relatedTarget||a.toElement,j=L,vt=vt?Ti(vt):null,vt!==null&&($t=u(vt),gt=vt.tag,vt!==$t||gt!==5&&gt!==27&&gt!==6)&&(vt=null)):(j=null,vt=L),j!==vt)){if(gt=wn,G="onMouseLeave",P="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(gt=No,G="onPointerLeave",P="onPointerEnter",O="pointer"),$t=j==null?z:$n(j),U=vt==null?z:$n(vt),z=new gt(G,O+"leave",j,a,F),z.target=$t,z.relatedTarget=U,G=null,Ti(F)===L&&(gt=new gt(P,O+"enter",vt,a,F),gt.target=U,gt.relatedTarget=$t,G=gt),$t=G,j&&vt)e:{for(gt=j,P=vt,O=0,U=gt;U;U=ka(U))O++;for(U=0,G=P;G;G=ka(G))U++;for(;0<O-U;)gt=ka(gt),O--;for(;0<U-O;)P=ka(P),U--;for(;O--;){if(gt===P||P!==null&&gt===P.alternate)break e;gt=ka(gt),P=ka(P)}gt=null}else gt=null;j!==null&&c_(Q,z,j,gt,!1),vt!==null&&$t!==null&&c_(Q,$t,vt,gt,!0)}}t:{if(z=L?$n(L):window,j=z.nodeName&&z.nodeName.toLowerCase(),j==="select"||j==="input"&&z.type==="file")var at=Dg;else if(Ae(z))if(Og)at=IA;else{at=bA;var Ot=wA}else j=z.nodeName,!j||j.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?L&&wo(L.elementType)&&(at=Dg):at=RA;if(at&&(at=at(e,L))){Oi(Q,at,a,F);break t}Ot&&Ot(e,z,L),e==="focusout"&&L&&z.type==="number"&&L.memoizedProps.value!=null&&ir(z,"number",z.value)}switch(Ot=L?$n(L):window,e){case"focusin":(Ae(Ot)||Ot.contentEditable==="true")&&(ha=Ot,Fh=L,Po=null);break;case"focusout":Po=Fh=ha=null;break;case"mousedown":Gh=!0;break;case"contextmenu":case"mouseup":case"dragend":Gh=!1,Lg(Q,a,F);break;case"selectionchange":if(DA)break;case"keydown":case"keyup":Lg(Q,a,F)}var ct;if(ii)t:{switch(e){case"compositionstart":var pt="onCompositionStart";break t;case"compositionend":pt="onCompositionEnd";break t;case"compositionupdate":pt="onCompositionUpdate";break t}pt=void 0}else kt?q(e,a)&&(pt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(pt="onCompositionStart");pt&&(_&&a.locale!=="ko"&&(kt||pt!=="onCompositionStart"?pt==="onCompositionEnd"&&kt&&(ct=Ro()):(Jn=F,rr="value"in Jn?Jn.value:Jn.textContent,kt=!0)),Ot=oc(L,pt),0<Ot.length&&(pt=new Do(pt,e,null,a,F),Q.push({event:pt,listeners:Ot}),ct?pt.data=ct:(ct=tt(a),ct!==null&&(pt.data=ct)))),(ct=g?Te(e,a):xt(e,a))&&(pt=oc(L,"onBeforeInput"),0<pt.length&&(Ot=new Do("onBeforeInput","beforeinput",null,a,F),Q.push({event:Ot,listeners:pt}),Ot.data=ct)),hS(Q,e,L,a,F)}l_(Q,i)})}function ll(e,i,a){return{instance:e,listener:i,currentTarget:a}}function oc(e,i){for(var a=i+"Capture",l=[];e!==null;){var h=e,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=us(e,a),h!=null&&l.unshift(ll(e,h,d)),h=us(e,i),h!=null&&l.push(ll(e,h,d))),e.tag===3)return l;e=e.return}return[]}function ka(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function c_(e,i,a,l,h){for(var d=i._reactName,v=[];a!==null&&a!==l;){var T=a,R=T.alternate,L=T.stateNode;if(T=T.tag,R!==null&&R===l)break;T!==5&&T!==26&&T!==27||L===null||(R=L,h?(L=us(a,d),L!=null&&v.unshift(ll(a,L,R))):h||(L=us(a,d),L!=null&&v.push(ll(a,L,R)))),a=a.return}v.length!==0&&e.push({event:i,listeners:v})}var gS=/\r\n?/g,pS=/\u0000|\uFFFD/g;function h_(e){return(typeof e=="string"?e:""+e).replace(gS,`
`).replace(pS,"")}function f_(e,i){return i=h_(i),h_(e)===i}function lc(){}function Xt(e,i,a,l,h,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Tn(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Tn(e,""+l);break;case"className":Zn(e,"class",l);break;case"tabIndex":Zn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Zn(e,a,l);break;case"style":So(e,l,d);break;case"data":if(i!=="object"){Zn(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=na(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Xt(e,i,"name",h.name,h,null),Xt(e,i,"formEncType",h.formEncType,h,null),Xt(e,i,"formMethod",h.formMethod,h,null),Xt(e,i,"formTarget",h.formTarget,h,null)):(Xt(e,i,"encType",h.encType,h,null),Xt(e,i,"method",h.method,h,null),Xt(e,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=na(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=lc);break;case"onScroll":l!=null&&Mt("scroll",e);break;case"onScrollEnd":l!=null&&Mt("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=na(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":Mt("beforetoggle",e),Mt("toggle",e),nr(e,"popover",l);break;case"xlinkActuate":ke(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ke(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ke(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ke(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ke(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ke(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ke(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ke(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ke(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":nr(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Uh.get(a)||a,nr(e,a,l))}}function gd(e,i,a,l,h,d){switch(a){case"style":So(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Tn(e,l):(typeof l=="number"||typeof l=="bigint")&&Tn(e,""+l);break;case"onScroll":l!=null&&Mt("scroll",e);break;case"onScrollEnd":l!=null&&Mt("scrollend",e);break;case"onClick":l!=null&&(e.onclick=lc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Zs.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=e[de]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,l,h);break t}a in e?e[a]=l:l===!0?e.setAttribute(a,""):nr(e,a,l)}}}function ze(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Mt("error",e),Mt("load",e);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var v=a[d];if(v!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Xt(e,i,d,v,a,null)}}h&&Xt(e,i,"srcSet",a.srcSet,a,null),l&&Xt(e,i,"src",a.src,a,null);return;case"input":Mt("invalid",e);var T=d=v=h=null,R=null,L=null;for(l in a)if(a.hasOwnProperty(l)){var F=a[l];if(F!=null)switch(l){case"name":h=F;break;case"type":v=F;break;case"checked":R=F;break;case"defaultChecked":L=F;break;case"value":d=F;break;case"defaultValue":T=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(s(137,i));break;default:Xt(e,i,l,F,a,null)}}as(e,d,T,R,L,v,h,!1),ea(e);return;case"select":Mt("invalid",e),l=v=d=null;for(h in a)if(a.hasOwnProperty(h)&&(T=a[h],T!=null))switch(h){case"value":d=T;break;case"defaultValue":v=T;break;case"multiple":l=T;default:Xt(e,i,h,T,a,null)}i=d,a=v,e.multiple=!!l,i!=null?wi(e,!!l,i,!1):a!=null&&wi(e,!!l,a,!0);return;case"textarea":Mt("invalid",e),d=h=l=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":l=T;break;case"defaultValue":h=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Xt(e,i,v,T,a,null)}os(e,l,h,d),ea(e);return;case"option":for(R in a)if(a.hasOwnProperty(R)&&(l=a[R],l!=null))switch(R){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Xt(e,i,R,l,a,null)}return;case"dialog":Mt("beforetoggle",e),Mt("toggle",e),Mt("cancel",e),Mt("close",e);break;case"iframe":case"object":Mt("load",e);break;case"video":case"audio":for(l=0;l<ol.length;l++)Mt(ol[l],e);break;case"image":Mt("error",e),Mt("load",e);break;case"details":Mt("toggle",e);break;case"embed":case"source":case"link":Mt("error",e),Mt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in a)if(a.hasOwnProperty(L)&&(l=a[L],l!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Xt(e,i,L,l,a,null)}return;default:if(wo(i)){for(F in a)a.hasOwnProperty(F)&&(l=a[F],l!==void 0&&gd(e,i,F,l,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!=null&&Xt(e,i,T,l,a,null))}function yS(e,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,v=null,T=null,R=null,L=null,F=null;for(j in a){var Q=a[j];if(a.hasOwnProperty(j)&&Q!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":R=Q;default:l.hasOwnProperty(j)||Xt(e,i,j,null,l,Q)}}for(var z in l){var j=l[z];if(Q=a[z],l.hasOwnProperty(z)&&(j!=null||Q!=null))switch(z){case"type":d=j;break;case"name":h=j;break;case"checked":L=j;break;case"defaultChecked":F=j;break;case"value":v=j;break;case"defaultValue":T=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,i));break;default:j!==Q&&Xt(e,i,z,j,l,Q)}}ln(e,v,T,R,L,F,d,h);return;case"select":j=v=T=z=null;for(d in a)if(R=a[d],a.hasOwnProperty(d)&&R!=null)switch(d){case"value":break;case"multiple":j=R;default:l.hasOwnProperty(d)||Xt(e,i,d,null,l,R)}for(h in l)if(d=l[h],R=a[h],l.hasOwnProperty(h)&&(d!=null||R!=null))switch(h){case"value":z=d;break;case"defaultValue":T=d;break;case"multiple":v=d;default:d!==R&&Xt(e,i,h,d,l,R)}i=T,a=v,l=j,z!=null?wi(e,!!a,z,!1):!!l!=!!a&&(i!=null?wi(e,!!a,i,!0):wi(e,!!a,a?[]:"",!1));return;case"textarea":j=z=null;for(T in a)if(h=a[T],a.hasOwnProperty(T)&&h!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Xt(e,i,T,null,l,h)}for(v in l)if(h=l[v],d=a[v],l.hasOwnProperty(v)&&(h!=null||d!=null))switch(v){case"value":z=h;break;case"defaultValue":j=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&Xt(e,i,v,h,l,d)}Qt(e,z,j);return;case"option":for(var vt in a)if(z=a[vt],a.hasOwnProperty(vt)&&z!=null&&!l.hasOwnProperty(vt))switch(vt){case"selected":e.selected=!1;break;default:Xt(e,i,vt,null,l,z)}for(R in l)if(z=l[R],j=a[R],l.hasOwnProperty(R)&&z!==j&&(z!=null||j!=null))switch(R){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Xt(e,i,R,z,l,j)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var gt in a)z=a[gt],a.hasOwnProperty(gt)&&z!=null&&!l.hasOwnProperty(gt)&&Xt(e,i,gt,null,l,z);for(L in l)if(z=l[L],j=a[L],l.hasOwnProperty(L)&&z!==j&&(z!=null||j!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,i));break;default:Xt(e,i,L,z,l,j)}return;default:if(wo(i)){for(var $t in a)z=a[$t],a.hasOwnProperty($t)&&z!==void 0&&!l.hasOwnProperty($t)&&gd(e,i,$t,void 0,l,z);for(F in l)z=l[F],j=a[F],!l.hasOwnProperty(F)||z===j||z===void 0&&j===void 0||gd(e,i,F,z,l,j);return}}for(var P in a)z=a[P],a.hasOwnProperty(P)&&z!=null&&!l.hasOwnProperty(P)&&Xt(e,i,P,null,l,z);for(Q in l)z=l[Q],j=a[Q],!l.hasOwnProperty(Q)||z===j||z==null&&j==null||Xt(e,i,Q,z,l,j)}var pd=null,yd=null;function uc(e){return e.nodeType===9?e:e.ownerDocument}function d_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function m_(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function _d(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var vd=null;function _S(){var e=window.event;return e&&e.type==="popstate"?e===vd?!1:(vd=e,!0):(vd=null,!1)}var g_=typeof setTimeout=="function"?setTimeout:void 0,vS=typeof clearTimeout=="function"?clearTimeout:void 0,p_=typeof Promise=="function"?Promise:void 0,ES=typeof queueMicrotask=="function"?queueMicrotask:typeof p_<"u"?function(e){return p_.resolve(null).then(e).catch(TS)}:g_;function TS(e){setTimeout(function(){throw e})}function Er(e){return e==="head"}function y_(e,i){var a=i,l=0,h=0;do{var d=a.nextSibling;if(e.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<l&&8>l){a=l;var v=e.ownerDocument;if(a&1&&ul(v.documentElement),a&2&&ul(v.body),a&4)for(a=v.head,ul(a),v=a.firstChild;v;){var T=v.nextSibling,R=v.nodeName;v[ns]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&v.rel.toLowerCase()==="stylesheet"||a.removeChild(v),v=T}}if(h===0){e.removeChild(d),yl(i);return}h--}else a==="$"||a==="$?"||a==="$!"?h++:l=a.charCodeAt(0)-48;else l=0;a=d}while(a);yl(i)}function Ed(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ed(a),er(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function AS(e,i,a,l){for(;e.nodeType===1;){var h=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ns])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=zn(e.nextSibling),e===null)break}return null}function SS(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=zn(e.nextSibling),e===null))return null;return e}function Td(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function wS(e,i){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function zn(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var Ad=null;function __(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return e;i--}else a==="/$"&&i++}e=e.previousSibling}return null}function v_(e,i,a){switch(i=uc(a),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function ul(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);er(e)}var Nn=new Map,E_=new Set;function cc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Hi=nt.d;nt.d={f:bS,r:RS,D:IS,C:CS,L:DS,m:OS,X:MS,S:NS,M:VS};function bS(){var e=Hi.f(),i=ec();return e||i}function RS(e){var i=Xn(e);i!==null&&i.tag===5&&i.type==="form"?jp(i):Hi.r(e)}var xa=typeof document>"u"?null:document;function T_(e,i,a){var l=xa;if(l&&typeof i=="string"&&i){var h=me(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),E_.has(h)||(E_.add(h),e={rel:e,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),ze(i,"link",e),ue(i),l.head.appendChild(i)))}}function IS(e){Hi.D(e),T_("dns-prefetch",e,null)}function CS(e,i){Hi.C(e,i),T_("preconnect",e,i)}function DS(e,i,a){Hi.L(e,i,a);var l=xa;if(l&&e&&i){var h='link[rel="preload"][as="'+me(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+me(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+me(a.imageSizes)+'"]')):h+='[href="'+me(e)+'"]';var d=h;switch(i){case"style":d=Ua(e);break;case"script":d=La(e)}Nn.has(d)||(e=E({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),Nn.set(d,e),l.querySelector(h)!==null||i==="style"&&l.querySelector(cl(d))||i==="script"&&l.querySelector(hl(d))||(i=l.createElement("link"),ze(i,"link",e),ue(i),l.head.appendChild(i)))}}function OS(e,i){Hi.m(e,i);var a=xa;if(a&&e){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+me(l)+'"][href="'+me(e)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=La(e)}if(!Nn.has(d)&&(e=E({rel:"modulepreload",href:e},i),Nn.set(d,e),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(hl(d)))return}l=a.createElement("link"),ze(l,"link",e),ue(l),a.head.appendChild(l)}}}function NS(e,i,a){Hi.S(e,i,a);var l=xa;if(l&&e){var h=$e(l).hoistableStyles,d=Ua(e);i=i||"default";var v=h.get(d);if(!v){var T={loading:0,preload:null};if(v=l.querySelector(cl(d)))T.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":i},a),(a=Nn.get(d))&&Sd(e,a);var R=v=l.createElement("link");ue(R),ze(R,"link",e),R._p=new Promise(function(L,F){R.onload=L,R.onerror=F}),R.addEventListener("load",function(){T.loading|=1}),R.addEventListener("error",function(){T.loading|=2}),T.loading|=4,hc(v,i,l)}v={type:"stylesheet",instance:v,count:1,state:T},h.set(d,v)}}}function MS(e,i){Hi.X(e,i);var a=xa;if(a&&e){var l=$e(a).hoistableScripts,h=La(e),d=l.get(h);d||(d=a.querySelector(hl(h)),d||(e=E({src:e,async:!0},i),(i=Nn.get(h))&&wd(e,i),d=a.createElement("script"),ue(d),ze(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function VS(e,i){Hi.M(e,i);var a=xa;if(a&&e){var l=$e(a).hoistableScripts,h=La(e),d=l.get(h);d||(d=a.querySelector(hl(h)),d||(e=E({src:e,async:!0,type:"module"},i),(i=Nn.get(h))&&wd(e,i),d=a.createElement("script"),ue(d),ze(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function A_(e,i,a,l){var h=(h=Tt.current)?cc(h):null;if(!h)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=Ua(a.href),a=$e(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ua(a.href);var d=$e(h).hoistableStyles,v=d.get(e);if(v||(h=h.ownerDocument||h,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,v),(d=h.querySelector(cl(e)))&&!d._p&&(v.instance=d,v.state.loading=5),Nn.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Nn.set(e,a),d||PS(h,e,a,v.state))),i&&l===null)throw Error(s(528,""));return v}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=La(a),a=$e(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Ua(e){return'href="'+me(e)+'"'}function cl(e){return'link[rel="stylesheet"]['+e+"]"}function S_(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function PS(e,i,a,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),ze(i,"link",a),ue(i),e.head.appendChild(i))}function La(e){return'[src="'+me(e)+'"]'}function hl(e){return"script[async]"+e}function w_(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+me(a.href)+'"]');if(l)return i.instance=l,ue(l),l;var h=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),ue(l),ze(l,"style",h),hc(l,a.precedence,e),i.instance=l;case"stylesheet":h=Ua(a.href);var d=e.querySelector(cl(h));if(d)return i.state.loading|=4,i.instance=d,ue(d),d;l=S_(a),(h=Nn.get(h))&&Sd(l,h),d=(e.ownerDocument||e).createElement("link"),ue(d);var v=d;return v._p=new Promise(function(T,R){v.onload=T,v.onerror=R}),ze(d,"link",l),i.state.loading|=4,hc(d,a.precedence,e),i.instance=d;case"script":return d=La(a.src),(h=e.querySelector(hl(d)))?(i.instance=h,ue(h),h):(l=a,(h=Nn.get(d))&&(l=E({},a),wd(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),ue(h),ze(h,"link",l),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,hc(l,a.precedence,e));return i.instance}function hc(e,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,v=0;v<l.length;v++){var T=l[v];if(T.dataset.precedence===i)d=T;else if(d!==h)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function Sd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function wd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var fc=null;function b_(e,i,a){if(fc===null){var l=new Map,h=fc=new Map;h.set(a,l)}else h=fc,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),h=0;h<a.length;h++){var d=a[h];if(!(d[ns]||d[Ee]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var v=d.getAttribute(i)||"";v=e+v;var T=l.get(v);T?T.push(d):l.set(v,[d])}}return l}function R_(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function kS(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function I_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var fl=null;function xS(){}function US(e,i,a){if(fl===null)throw Error(s(475));var l=fl;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=Ua(a.href),d=e.querySelector(cl(h));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=dc.bind(l),e.then(l,l)),i.state.loading|=4,i.instance=d,ue(d);return}d=e.ownerDocument||e,a=S_(a),(h=Nn.get(h))&&Sd(a,h),d=d.createElement("link"),ue(d);var v=d;v._p=new Promise(function(T,R){v.onload=T,v.onerror=R}),ze(d,"link",a),i.instance=d}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=dc.bind(l),e.addEventListener("load",i),e.addEventListener("error",i))}}function LS(){if(fl===null)throw Error(s(475));var e=fl;return e.stylesheets&&e.count===0&&bd(e,e.stylesheets),0<e.count?function(i){var a=setTimeout(function(){if(e.stylesheets&&bd(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(a)}}:null}function dc(){if(this.count--,this.count===0){if(this.stylesheets)bd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var mc=null;function bd(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,mc=new Map,i.forEach(zS,e),mc=null,dc.call(e))}function zS(e,i){if(!(i.state.loading&4)){var a=mc.get(e);if(a)var l=a.get(null);else{a=new Map,mc.set(e,a);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var v=h[d];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),l=v)}l&&a.set(null,l)}h=i.instance,v=h.getAttribute("data-precedence"),d=a.get(v)||l,d===l&&a.set(null,h),a.set(v,h),this.count++,l=dc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var dl={$$typeof:rt,Provider:null,Consumer:null,_currentValue:ht,_currentValue2:ht,_threadCount:0};function jS(e,i,a,l,h,d,v,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=vi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vi(0),this.hiddenUpdates=vi(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function C_(e,i,a,l,h,d,v,T,R,L,F,Q){return e=new jS(e,i,a,v,T,R,L,Q),i=1,d===!0&&(i|=24),d=cn(3,null,null,i),e.current=d,d.stateNode=e,i=af(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},cf(d),e}function D_(e){return e?(e=ga,e):ga}function O_(e,i,a,l,h,d){h=D_(h),l.context===null?l.context=h:l.pendingContext=h,l=or(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=lr(e,l,i),a!==null&&(gn(a,e,i),Ho(a,e,i))}function N_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function Rd(e,i){N_(e,i),(e=e.alternate)&&N_(e,i)}function M_(e){if(e.tag===13){var i=ma(e,67108864);i!==null&&gn(i,e,67108864),Rd(e,67108864)}}var gc=!0;function BS(e,i,a,l){var h=H.T;H.T=null;var d=nt.p;try{nt.p=2,Id(e,i,a,l)}finally{nt.p=d,H.T=h}}function qS(e,i,a,l){var h=H.T;H.T=null;var d=nt.p;try{nt.p=8,Id(e,i,a,l)}finally{nt.p=d,H.T=h}}function Id(e,i,a,l){if(gc){var h=Cd(l);if(h===null)md(e,i,l,pc,a),P_(e,l);else if(FS(h,e,i,a,l))l.stopPropagation();else if(P_(e,l),i&4&&-1<HS.indexOf(e)){for(;h!==null;){var d=Xn(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var v=Pn(d.pendingLanes);if(v!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var R=1<<31-He(v);T.entanglements[1]|=R,v&=~R}ui(d),(Gt&6)===0&&(Ju=vn()+500,al(0))}}break;case 13:T=ma(d,2),T!==null&&gn(T,d,2),ec(),Rd(d,2)}if(d=Cd(l),d===null&&md(e,i,l,pc,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else md(e,i,l,null,a)}}function Cd(e){return e=An(e),Dd(e)}var pc=null;function Dd(e){if(pc=null,e=Ti(e),e!==null){var i=u(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=f(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return pc=e,null}function V_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Nh()){case co:return 2;case Qs:return 8;case Zr:case Mh:return 32;case Ys:return 268435456;default:return 32}default:return 32}}var Od=!1,Tr=null,Ar=null,Sr=null,ml=new Map,gl=new Map,wr=[],HS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function P_(e,i){switch(e){case"focusin":case"focusout":Tr=null;break;case"dragenter":case"dragleave":Ar=null;break;case"mouseover":case"mouseout":Sr=null;break;case"pointerover":case"pointerout":ml.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":gl.delete(i.pointerId)}}function pl(e,i,a,l,h,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=Xn(i),i!==null&&M_(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function FS(e,i,a,l,h){switch(i){case"focusin":return Tr=pl(Tr,e,i,a,l,h),!0;case"dragenter":return Ar=pl(Ar,e,i,a,l,h),!0;case"mouseover":return Sr=pl(Sr,e,i,a,l,h),!0;case"pointerover":var d=h.pointerId;return ml.set(d,pl(ml.get(d)||null,e,i,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,gl.set(d,pl(gl.get(d)||null,e,i,a,l,h)),!0}return!1}function k_(e){var i=Ti(e.target);if(i!==null){var a=u(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){e.blockedOn=i,eu(e.priority,function(){if(a.tag===13){var l=mn();l=Wi(l);var h=ma(a,l);h!==null&&gn(h,a,l),Rd(a,l)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=Cd(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);bi=l,a.target.dispatchEvent(l),bi=null}else return i=Xn(a),i!==null&&M_(i),e.blockedOn=a,!1;i.shift()}return!0}function x_(e,i,a){yc(e)&&a.delete(i)}function GS(){Od=!1,Tr!==null&&yc(Tr)&&(Tr=null),Ar!==null&&yc(Ar)&&(Ar=null),Sr!==null&&yc(Sr)&&(Sr=null),ml.forEach(x_),gl.forEach(x_)}function _c(e,i){e.blockedOn===i&&(e.blockedOn=null,Od||(Od=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,GS)))}var vc=null;function U_(e){vc!==e&&(vc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){vc===e&&(vc=null);for(var i=0;i<e.length;i+=3){var a=e[i],l=e[i+1],h=e[i+2];if(typeof l!="function"){if(Dd(l||a)===null)continue;break}var d=Xn(a);d!==null&&(e.splice(i,3),i-=3,Df(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function yl(e){function i(R){return _c(R,e)}Tr!==null&&_c(Tr,e),Ar!==null&&_c(Ar,e),Sr!==null&&_c(Sr,e),ml.forEach(i),gl.forEach(i);for(var a=0;a<wr.length;a++){var l=wr[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<wr.length&&(a=wr[0],a.blockedOn===null);)k_(a),a.blockedOn===null&&wr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],v=h[de]||null;if(typeof d=="function")v||U_(a);else if(v){var T=null;if(d&&d.hasAttribute("formAction")){if(h=d,v=d[de]||null)T=v.formAction;else if(Dd(h)!==null)continue}else T=v.action;typeof T=="function"?a[l+1]=T:(a.splice(l,3),l-=3),U_(a)}}}function Nd(e){this._internalRoot=e}Ec.prototype.render=Nd.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=mn();O_(a,l,e,i,null,null)},Ec.prototype.unmount=Nd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;O_(e.current,2,null,e,null,null),ec(),i[En]=null}};function Ec(e){this._internalRoot=e}Ec.prototype.unstable_scheduleHydration=function(e){if(e){var i=Ji();e={blockedOn:null,target:e,priority:i};for(var a=0;a<wr.length&&i!==0&&i<wr[a].priority;a++);wr.splice(a,0,e),a===0&&k_(e)}};var L_=t.version;if(L_!=="19.1.0")throw Error(s(527,L_,"19.1.0"));nt.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(i),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var KS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tc.isDisabled&&Tc.supportsFiber)try{ae=Tc.inject(KS),Ft=Tc}catch{}}return vl.createRoot=function(e,i){if(!o(e))throw Error(s(299));var a=!1,l="",h=ty,d=ey,v=ny,T=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(v=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(T=i.unstable_transitionCallbacks)),i=C_(e,1,!1,null,null,a,l,h,d,v,T,null),e[En]=i.current,dd(e),new Nd(i)},vl.hydrateRoot=function(e,i,a){if(!o(e))throw Error(s(299));var l=!1,h="",d=ty,v=ey,T=ny,R=null,L=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(R=a.unstable_transitionCallbacks),a.formState!==void 0&&(L=a.formState)),i=C_(e,1,!0,i,a??null,l,h,d,v,T,R,L),i.context=D_(null),a=i.current,l=mn(),l=Wi(l),h=or(l),h.callback=null,lr(a,h,l),a=l,i.current.lanes=a,Ei(i,a),ui(i),e[En]=i.current,dd(e),new Ec(i)},vl.version="19.1.0",vl}var Y_;function nw(){if(Y_)return Pd.exports;Y_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Pd.exports=ew(),Pd.exports}var iw=nw();const rw=()=>{};var X_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE=function(r){const t=[];let n=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},sw=function(r){const t=[];let n=0,s=0;for(;n<r.length;){const o=r[n++];if(o<128)t[s++]=String.fromCharCode(o);else if(o>191&&o<224){const u=r[n++];t[s++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=r[n++],f=r[n++],m=r[n++],p=((o&7)<<18|(u&63)<<12|(f&63)<<6|m&63)-65536;t[s++]=String.fromCharCode(55296+(p>>10)),t[s++]=String.fromCharCode(56320+(p&1023))}else{const u=r[n++],f=r[n++];t[s++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return t.join("")},PE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const u=r[o],f=o+1<r.length,m=f?r[o+1]:0,p=o+2<r.length,y=p?r[o+2]:0,E=u>>2,S=(u&3)<<4|m>>4;let C=(m&15)<<2|y>>6,B=y&63;p||(B=64,f||(C=64)),s.push(n[E],n[S],n[C],n[B])}return s.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(VE(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):sw(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const u=n[r.charAt(o++)],m=o<r.length?n[r.charAt(o)]:0;++o;const y=o<r.length?n[r.charAt(o)]:64;++o;const S=o<r.length?n[r.charAt(o)]:64;if(++o,u==null||m==null||y==null||S==null)throw new aw;const C=u<<2|m>>4;if(s.push(C),y!==64){const B=m<<4&240|y>>2;if(s.push(B),S!==64){const $=y<<6&192|S;s.push($)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class aw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ow=function(r){const t=VE(r);return PE.encodeByteArray(t,!0)},jc=function(r){return ow(r).replace(/\./g,"")},kE=function(r){try{return PE.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw=()=>lw().__FIREBASE_DEFAULTS__,cw=()=>{if(typeof process>"u"||typeof X_>"u")return;const r=X_.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},hw=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&kE(r[1]);return t&&JSON.parse(t)},lh=()=>{try{return rw()||uw()||cw()||hw()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},xE=r=>{var t,n;return(n=(t=lh())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[r]},fw=r=>{const t=xE(r);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},UE=()=>{var r;return(r=lh())===null||r===void 0?void 0:r.config},LE=r=>{var t;return(t=lh())===null||t===void 0?void 0:t[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mw(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",o=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[jc(JSON.stringify(n)),jc(JSON.stringify(f)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Xe())}function pw(){var r;const t=(r=lh())===null||r===void 0?void 0:r.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function yw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function zE(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function _w(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vw(){const r=Xe();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Ew(){return!pw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function jE(){try{return typeof indexedDB=="object"}catch{return!1}}function BE(){return new Promise((r,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var u;t(((u=o.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){t(n)}})}function Tw(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw="FirebaseError";class Kn extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=Aw,Object.setPrototypeOf(this,Kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qs.prototype.create)}}class qs{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},o=`${this.service}/${t}`,u=this.errors[t],f=u?Sw(u,s):"Error",m=`${this.serviceName}: ${f} (${o}).`;return new Kn(o,m,s)}}function Sw(r,t){return r.replace(ww,(n,s)=>{const o=t[s];return o!=null?String(o):`<${s}?>`})}const ww=/\{\$([^}]+)}/g;function bw(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}function Ur(r,t){if(r===t)return!0;const n=Object.keys(r),s=Object.keys(t);for(const o of n){if(!s.includes(o))return!1;const u=r[o],f=t[o];if($_(u)&&$_(f)){if(!Ur(u,f))return!1}else if(u!==f)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function $_(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(r){const t=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function El(r){const t={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,u]=s.split("=");t[decodeURIComponent(o)]=decodeURIComponent(u)}}),t}function Tl(r){const t=r.indexOf("?");if(!t)return"";const n=r.indexOf("#",t);return r.substring(t,n>0?n:void 0)}function Rw(r,t){const n=new Iw(r,t);return n.subscribe.bind(n)}class Iw{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let o;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Cw(t,["next","error","complete"])?o=t:o={next:t,error:n,complete:s},o.next===void 0&&(o.next=Ld),o.error===void 0&&(o.error=Ld),o.complete===void 0&&(o.complete=Ld);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Cw(r,t){if(typeof r!="object"||r===null)return!1;for(const n of t)if(n in r&&typeof r[n]=="function")return!0;return!1}function Ld(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw=1e3,Ow=2,Nw=4*60*60*1e3,Mw=.5;function Z_(r,t=Dw,n=Ow){const s=t*Math.pow(n,r),o=Math.round(Mw*s*(Math.random()-.5)*2);return Math.min(Nw,s+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(r){return r&&r._delegate?r._delegate:r}class Hn{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vw{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new dw;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),o=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(o)return null;throw u}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(kw(t))try{this.getOrInitializeService({instanceIdentifier:Ns})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});s.resolve(u)}catch{}}}}clearInstance(t=Ns){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Ns){return this.instances.has(t)}getOptions(t=Ns){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,f]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&f.resolve(o)}return o}onInit(t,n){var s;const o=this.normalizeInstanceIdentifier(n),u=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;u.add(t),this.onInitCallbacks.set(o,u);const f=this.instances.get(o);return f&&t(f,o),()=>{u.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Pw(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Ns){return this.component?this.component.multipleInstances?t:Ns:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Pw(r){return r===Ns?void 0:r}function kw(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Vw(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vt;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Vt||(Vt={}));const Uw={debug:Vt.DEBUG,verbose:Vt.VERBOSE,info:Vt.INFO,warn:Vt.WARN,error:Vt.ERROR,silent:Vt.SILENT},Lw=Vt.INFO,zw={[Vt.DEBUG]:"log",[Vt.VERBOSE]:"log",[Vt.INFO]:"info",[Vt.WARN]:"warn",[Vt.ERROR]:"error"},jw=(r,t,...n)=>{if(t<r.logLevel)return;const s=new Date().toISOString(),o=zw[t];if(o)console[o](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class uh{constructor(t){this.name=t,this._logLevel=Lw,this._logHandler=jw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Vt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Uw[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Vt.DEBUG,...t),this._logHandler(this,Vt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Vt.VERBOSE,...t),this._logHandler(this,Vt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Vt.INFO,...t),this._logHandler(this,Vt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Vt.WARN,...t),this._logHandler(this,Vt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Vt.ERROR,...t),this._logHandler(this,Vt.ERROR,...t)}}const Bw=(r,t)=>t.some(n=>r instanceof n);let W_,J_;function qw(){return W_||(W_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Hw(){return J_||(J_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qE=new WeakMap,Wd=new WeakMap,HE=new WeakMap,zd=new WeakMap,Im=new WeakMap;function Fw(r){const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("success",u),r.removeEventListener("error",f)},u=()=>{n(Mr(r.result)),o()},f=()=>{s(r.error),o()};r.addEventListener("success",u),r.addEventListener("error",f)});return t.then(n=>{n instanceof IDBCursor&&qE.set(n,r)}).catch(()=>{}),Im.set(t,r),t}function Gw(r){if(Wd.has(r))return;const t=new Promise((n,s)=>{const o=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",f),r.removeEventListener("abort",f)},u=()=>{n(),o()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",u),r.addEventListener("error",f),r.addEventListener("abort",f)});Wd.set(r,t)}let Jd={get(r,t,n){if(r instanceof IDBTransaction){if(t==="done")return Wd.get(r);if(t==="objectStoreNames")return r.objectStoreNames||HE.get(r);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mr(r[t])},set(r,t,n){return r[t]=n,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function Kw(r){Jd=r(Jd)}function Qw(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=r.call(jd(this),t,...n);return HE.set(s,t.sort?t.sort():[t]),Mr(s)}:Hw().includes(r)?function(...t){return r.apply(jd(this),t),Mr(qE.get(this))}:function(...t){return Mr(r.apply(jd(this),t))}}function Yw(r){return typeof r=="function"?Qw(r):(r instanceof IDBTransaction&&Gw(r),Bw(r,qw())?new Proxy(r,Jd):r)}function Mr(r){if(r instanceof IDBRequest)return Fw(r);if(zd.has(r))return zd.get(r);const t=Yw(r);return t!==r&&(zd.set(r,t),Im.set(t,r)),t}const jd=r=>Im.get(r);function FE(r,t,{blocked:n,upgrade:s,blocking:o,terminated:u}={}){const f=indexedDB.open(r,t),m=Mr(f);return s&&f.addEventListener("upgradeneeded",p=>{s(Mr(f.result),p.oldVersion,p.newVersion,Mr(f.transaction),p)}),n&&f.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),m.then(p=>{u&&p.addEventListener("close",()=>u()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),m}const Xw=["get","getKey","getAll","getAllKeys","count"],$w=["put","add","delete","clear"],Bd=new Map;function tv(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(Bd.get(t))return Bd.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,o=$w.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||Xw.includes(n)))return;const u=async function(f,...m){const p=this.transaction(f,o?"readwrite":"readonly");let y=p.store;return s&&(y=y.index(m.shift())),(await Promise.all([y[n](...m),o&&p.done]))[0]};return Bd.set(t,u),u}Kw(r=>({...r,get:(t,n,s)=>tv(t,n)||r.get(t,n,s),has:(t,n)=>!!tv(t,n)||r.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ww(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Ww(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const tm="@firebase/app",ev="0.11.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi=new uh("@firebase/app"),Jw="@firebase/app-compat",tb="@firebase/analytics-compat",eb="@firebase/analytics",nb="@firebase/app-check-compat",ib="@firebase/app-check",rb="@firebase/auth",sb="@firebase/auth-compat",ab="@firebase/database",ob="@firebase/data-connect",lb="@firebase/database-compat",ub="@firebase/functions",cb="@firebase/functions-compat",hb="@firebase/installations",fb="@firebase/installations-compat",db="@firebase/messaging",mb="@firebase/messaging-compat",gb="@firebase/performance",pb="@firebase/performance-compat",yb="@firebase/remote-config",_b="@firebase/remote-config-compat",vb="@firebase/storage",Eb="@firebase/storage-compat",Tb="@firebase/firestore",Ab="@firebase/vertexai",Sb="@firebase/firestore-compat",wb="firebase",bb="11.6.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em="[DEFAULT]",Rb={[tm]:"fire-core",[Jw]:"fire-core-compat",[eb]:"fire-analytics",[tb]:"fire-analytics-compat",[ib]:"fire-app-check",[nb]:"fire-app-check-compat",[rb]:"fire-auth",[sb]:"fire-auth-compat",[ab]:"fire-rtdb",[ob]:"fire-data-connect",[lb]:"fire-rtdb-compat",[ub]:"fire-fn",[cb]:"fire-fn-compat",[hb]:"fire-iid",[fb]:"fire-iid-compat",[db]:"fire-fcm",[mb]:"fire-fcm-compat",[gb]:"fire-perf",[pb]:"fire-perf-compat",[yb]:"fire-rc",[_b]:"fire-rc-compat",[vb]:"fire-gcs",[Eb]:"fire-gcs-compat",[Tb]:"fire-fst",[Sb]:"fire-fst-compat",[Ab]:"fire-vertex","fire-js":"fire-js",[wb]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc=new Map,Ib=new Map,nm=new Map;function nv(r,t){try{r.container.addComponent(t)}catch(n){Qi.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,n)}}function pi(r){const t=r.name;if(nm.has(t))return Qi.debug(`There were multiple attempts to register component ${t}.`),!1;nm.set(t,r);for(const n of Bc.values())nv(n,r);for(const n of Ib.values())nv(n,r);return!0}function Hs(r,t){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(t)}function Mn(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vr=new qs("app","Firebase",Cb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Vr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no=bb;function GE(r,t={}){let n=r;typeof t!="object"&&(t={name:t});const s=Object.assign({name:em,automaticDataCollectionEnabled:!1},t),o=s.name;if(typeof o!="string"||!o)throw Vr.create("bad-app-name",{appName:String(o)});if(n||(n=UE()),!n)throw Vr.create("no-options");const u=Bc.get(o);if(u){if(Ur(n,u.options)&&Ur(s,u.config))return u;throw Vr.create("duplicate-app",{appName:o})}const f=new xw(o);for(const p of nm.values())f.addComponent(p);const m=new Db(n,s,f);return Bc.set(o,m),m}function Cm(r=em){const t=Bc.get(r);if(!t&&r===em&&UE())return GE();if(!t)throw Vr.create("no-app",{appName:r});return t}function Vn(r,t,n){var s;let o=(s=Rb[r])!==null&&s!==void 0?s:r;n&&(o+=`-${n}`);const u=o.match(/\s|\//),f=t.match(/\s|\//);if(u||f){const m=[`Unable to register library "${o}" with version "${t}":`];u&&m.push(`library name "${o}" contains illegal characters (whitespace or "/")`),u&&f&&m.push("and"),f&&m.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Qi.warn(m.join(" "));return}pi(new Hn(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob="firebase-heartbeat-database",Nb=1,Nl="firebase-heartbeat-store";let qd=null;function KE(){return qd||(qd=FE(Ob,Nb,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(Nl)}catch(n){console.warn(n)}}}}).catch(r=>{throw Vr.create("idb-open",{originalErrorMessage:r.message})})),qd}async function Mb(r){try{const n=(await KE()).transaction(Nl),s=await n.objectStore(Nl).get(QE(r));return await n.done,s}catch(t){if(t instanceof Kn)Qi.warn(t.message);else{const n=Vr.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Qi.warn(n.message)}}}async function iv(r,t){try{const s=(await KE()).transaction(Nl,"readwrite");await s.objectStore(Nl).put(t,QE(r)),await s.done}catch(n){if(n instanceof Kn)Qi.warn(n.message);else{const s=Vr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qi.warn(s.message)}}}function QE(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb=1024,Pb=30;class kb{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ub(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=rv();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(f=>f.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>Pb){const f=Lb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Qi.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=rv(),{heartbeatsToSend:s,unsentEntries:o}=xb(this._heartbeatsCache.heartbeats),u=jc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return Qi.warn(n),""}}}function rv(){return new Date().toISOString().substring(0,10)}function xb(r,t=Vb){const n=[];let s=r.slice();for(const o of r){const u=n.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),sv(n)>t){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),sv(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Ub{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jE()?BE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Mb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return iv(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return iv(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function sv(r){return jc(JSON.stringify({version:2,heartbeats:r})).length}function Lb(r){if(r.length===0)return-1;let t=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,t=s);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zb(r){pi(new Hn("platform-logger",t=>new Zw(t),"PRIVATE")),pi(new Hn("heartbeat",t=>new kb(t),"PRIVATE")),Vn(tm,ev,r),Vn(tm,ev,"esm2017"),Vn("fire-js","")}zb("");var jb="firebase",Bb="11.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vn(jb,Bb,"app");const YE="@firebase/installations",Dm="0.6.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE=1e4,$E=`w:${Dm}`,ZE="FIS_v2",qb="https://firebaseinstallations.googleapis.com/v1",Hb=60*60*1e3,Fb="installations",Gb="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kb={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ps=new qs(Fb,Gb,Kb);function WE(r){return r instanceof Kn&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JE({projectId:r}){return`${qb}/projects/${r}/installations`}function tT(r){return{token:r.token,requestStatus:2,expiresIn:Yb(r.expiresIn),creationTime:Date.now()}}async function eT(r,t){const s=(await t.json()).error;return Ps.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function nT({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function Qb(r,{refreshToken:t}){const n=nT(r);return n.append("Authorization",Xb(t)),n}async function iT(r){const t=await r();return t.status>=500&&t.status<600?r():t}function Yb(r){return Number(r.replace("s","000"))}function Xb(r){return`${ZE} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $b({appConfig:r,heartbeatServiceProvider:t},{fid:n}){const s=JE(r),o=nT(r),u=t.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={fid:n,authVersion:ZE,appId:r.appId,sdkVersion:$E},m={method:"POST",headers:o,body:JSON.stringify(f)},p=await iT(()=>fetch(s,m));if(p.ok){const y=await p.json();return{fid:y.fid||n,registrationStatus:2,refreshToken:y.refreshToken,authToken:tT(y.authToken)}}else throw await eT("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rT(r){return new Promise(t=>{setTimeout(t,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zb(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb=/^[cdef][\w-]{21}$/,im="";function Jb(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=tR(r);return Wb.test(n)?n:im}catch{return im}}function tR(r){return Zb(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sT=new Map;function aT(r,t){const n=ch(r);oT(n,t),eR(n,t)}function oT(r,t){const n=sT.get(r);if(n)for(const s of n)s(t)}function eR(r,t){const n=nR();n&&n.postMessage({key:r,fid:t}),iR()}let Ms=null;function nR(){return!Ms&&"BroadcastChannel"in self&&(Ms=new BroadcastChannel("[Firebase] FID Change"),Ms.onmessage=r=>{oT(r.data.key,r.data.fid)}),Ms}function iR(){sT.size===0&&Ms&&(Ms.close(),Ms=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR="firebase-installations-database",sR=1,ks="firebase-installations-store";let Hd=null;function Om(){return Hd||(Hd=FE(rR,sR,{upgrade:(r,t)=>{switch(t){case 0:r.createObjectStore(ks)}}})),Hd}async function qc(r,t){const n=ch(r),o=(await Om()).transaction(ks,"readwrite"),u=o.objectStore(ks),f=await u.get(n);return await u.put(t,n),await o.done,(!f||f.fid!==t.fid)&&aT(r,t.fid),t}async function lT(r){const t=ch(r),s=(await Om()).transaction(ks,"readwrite");await s.objectStore(ks).delete(t),await s.done}async function hh(r,t){const n=ch(r),o=(await Om()).transaction(ks,"readwrite"),u=o.objectStore(ks),f=await u.get(n),m=t(f);return m===void 0?await u.delete(n):await u.put(m,n),await o.done,m&&(!f||f.fid!==m.fid)&&aT(r,m.fid),m}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nm(r){let t;const n=await hh(r.appConfig,s=>{const o=aR(s),u=oR(r,o);return t=u.registrationPromise,u.installationEntry});return n.fid===im?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function aR(r){const t=r||{fid:Jb(),registrationStatus:0};return uT(t)}function oR(r,t){if(t.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Ps.create("app-offline"));return{installationEntry:t,registrationPromise:o}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=lR(r,n);return{installationEntry:n,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:uR(r)}:{installationEntry:t}}async function lR(r,t){try{const n=await $b(r,t);return qc(r.appConfig,n)}catch(n){throw WE(n)&&n.customData.serverCode===409?await lT(r.appConfig):await qc(r.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function uR(r){let t=await av(r.appConfig);for(;t.registrationStatus===1;)await rT(100),t=await av(r.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Nm(r);return s||n}return t}function av(r){return hh(r,t=>{if(!t)throw Ps.create("installation-not-found");return uT(t)})}function uT(r){return cR(r)?{fid:r.fid,registrationStatus:0}:r}function cR(r){return r.registrationStatus===1&&r.registrationTime+XE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hR({appConfig:r,heartbeatServiceProvider:t},n){const s=fR(r,n),o=Qb(r,n),u=t.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const f={installation:{sdkVersion:$E,appId:r.appId}},m={method:"POST",headers:o,body:JSON.stringify(f)},p=await iT(()=>fetch(s,m));if(p.ok){const y=await p.json();return tT(y)}else throw await eT("Generate Auth Token",p)}function fR(r,{fid:t}){return`${JE(r)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mm(r,t=!1){let n;const s=await hh(r.appConfig,u=>{if(!cT(u))throw Ps.create("not-registered");const f=u.authToken;if(!t&&gR(f))return u;if(f.requestStatus===1)return n=dR(r,t),u;{if(!navigator.onLine)throw Ps.create("app-offline");const m=yR(u);return n=mR(r,m),m}});return n?await n:s.authToken}async function dR(r,t){let n=await ov(r.appConfig);for(;n.authToken.requestStatus===1;)await rT(100),n=await ov(r.appConfig);const s=n.authToken;return s.requestStatus===0?Mm(r,t):s}function ov(r){return hh(r,t=>{if(!cT(t))throw Ps.create("not-registered");const n=t.authToken;return _R(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function mR(r,t){try{const n=await hR(r,t),s=Object.assign(Object.assign({},t),{authToken:n});return await qc(r.appConfig,s),n}catch(n){if(WE(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await lT(r.appConfig);else{const s=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await qc(r.appConfig,s)}throw n}}function cT(r){return r!==void 0&&r.registrationStatus===2}function gR(r){return r.requestStatus===2&&!pR(r)}function pR(r){const t=Date.now();return t<r.creationTime||r.creationTime+r.expiresIn<t+Hb}function yR(r){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:t})}function _R(r){return r.requestStatus===1&&r.requestTime+XE<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vR(r){const t=r,{installationEntry:n,registrationPromise:s}=await Nm(t);return s?s.catch(console.error):Mm(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ER(r,t=!1){const n=r;return await TR(n),(await Mm(n,t)).token}async function TR(r){const{registrationPromise:t}=await Nm(r);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AR(r){if(!r||!r.options)throw Fd("App Configuration");if(!r.name)throw Fd("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!r.options[n])throw Fd(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function Fd(r){return Ps.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT="installations",SR="installations-internal",wR=r=>{const t=r.getProvider("app").getImmediate(),n=AR(t),s=Hs(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},bR=r=>{const t=r.getProvider("app").getImmediate(),n=Hs(t,hT).getImmediate();return{getId:()=>vR(n),getToken:o=>ER(n,o)}};function RR(){pi(new Hn(hT,wR,"PUBLIC")),pi(new Hn(SR,bR,"PRIVATE"))}RR();Vn(YE,Dm);Vn(YE,Dm,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hc="analytics",IR="firebase_id",CR="origin",DR=60*1e3,OR="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Vm="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an=new uh("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},yn=new qs("analytics","Analytics",NR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MR(r){if(!r.startsWith(Vm)){const t=yn.create("invalid-gtag-resource",{gtagURL:r});return an.warn(t.message),""}return r}function fT(r){return Promise.all(r.map(t=>t.catch(n=>n)))}function VR(r,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,t)),n}function PR(r,t){const n=VR("firebase-js-sdk-policy",{createScriptURL:MR}),s=document.createElement("script"),o=`${Vm}?l=${r}&id=${t}`;s.src=n?n==null?void 0:n.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function kR(r){let t=[];return Array.isArray(window[r])?t=window[r]:window[r]=t,t}async function xR(r,t,n,s,o,u){const f=s[o];try{if(f)await t[f];else{const p=(await fT(n)).find(y=>y.measurementId===o);p&&await t[p.appId]}}catch(m){an.error(m)}r("config",o,u)}async function UR(r,t,n,s,o){try{let u=[];if(o&&o.send_to){let f=o.send_to;Array.isArray(f)||(f=[f]);const m=await fT(n);for(const p of f){const y=m.find(S=>S.measurementId===p),E=y&&t[y.appId];if(E)u.push(E);else{u=[];break}}}u.length===0&&(u=Object.values(t)),await Promise.all(u),r("event",s,o||{})}catch(u){an.error(u)}}function LR(r,t,n,s){async function o(u,...f){try{if(u==="event"){const[m,p]=f;await UR(r,t,n,m,p)}else if(u==="config"){const[m,p]=f;await xR(r,t,n,s,m,p)}else if(u==="consent"){const[m,p]=f;r("consent",m,p)}else if(u==="get"){const[m,p,y]=f;r("get",m,p,y)}else if(u==="set"){const[m]=f;r("set",m)}else r(u,...f)}catch(m){an.error(m)}}return o}function zR(r,t,n,s,o){let u=function(...f){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(u=window[o]),window[o]=LR(u,r,t,n),{gtagCore:u,wrappedGtag:window[o]}}function jR(r){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Vm)&&n.src.includes(r))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR=30,qR=1e3;class HR{constructor(t={},n=qR){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const dT=new HR;function FR(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function GR(r){var t;const{appId:n,apiKey:s}=r,o={method:"GET",headers:FR(s)},u=OR.replace("{app-id}",n),f=await fetch(u,o);if(f.status!==200&&f.status!==304){let m="";try{const p=await f.json();!((t=p.error)===null||t===void 0)&&t.message&&(m=p.error.message)}catch{}throw yn.create("config-fetch-failed",{httpStatus:f.status,responseMessage:m})}return f.json()}async function KR(r,t=dT,n){const{appId:s,apiKey:o,measurementId:u}=r.options;if(!s)throw yn.create("no-app-id");if(!o){if(u)return{measurementId:u,appId:s};throw yn.create("no-api-key")}const f=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},m=new XR;return setTimeout(async()=>{m.abort()},DR),mT({appId:s,apiKey:o,measurementId:u},f,m,t)}async function mT(r,{throttleEndTimeMillis:t,backoffCount:n},s,o=dT){var u;const{appId:f,measurementId:m}=r;try{await QR(s,t)}catch(p){if(m)return an.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${m} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:f,measurementId:m};throw p}try{const p=await GR(r);return o.deleteThrottleMetadata(f),p}catch(p){const y=p;if(!YR(y)){if(o.deleteThrottleMetadata(f),m)return an.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${m} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:f,measurementId:m};throw p}const E=Number((u=y==null?void 0:y.customData)===null||u===void 0?void 0:u.httpStatus)===503?Z_(n,o.intervalMillis,BR):Z_(n,o.intervalMillis),S={throttleEndTimeMillis:Date.now()+E,backoffCount:n+1};return o.setThrottleMetadata(f,S),an.debug(`Calling attemptFetch again in ${E} millis`),mT(r,S,s,o)}}function QR(r,t){return new Promise((n,s)=>{const o=Math.max(t-Date.now(),0),u=setTimeout(n,o);r.addEventListener(()=>{clearTimeout(u),s(yn.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function YR(r){if(!(r instanceof Kn)||!r.customData)return!1;const t=Number(r.customData.httpStatus);return t===429||t===500||t===503||t===504}class XR{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function $R(r,t,n,s,o){if(o&&o.global){r("event",n,s);return}else{const u=await t,f=Object.assign(Object.assign({},s),{send_to:u});r("event",n,f)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZR(){if(jE())try{await BE()}catch(r){return an.warn(yn.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return an.warn(yn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function WR(r,t,n,s,o,u,f){var m;const p=KR(r);p.then(B=>{n[B.measurementId]=B.appId,r.options.measurementId&&B.measurementId!==r.options.measurementId&&an.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${B.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(B=>an.error(B)),t.push(p);const y=ZR().then(B=>{if(B)return s.getId()}),[E,S]=await Promise.all([p,y]);jR(u)||PR(u,E.measurementId),o("js",new Date);const C=(m=f==null?void 0:f.config)!==null&&m!==void 0?m:{};return C[CR]="firebase",C.update=!0,S!=null&&(C[IR]=S),o("config",E.measurementId,C),E.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(t){this.app=t}_delete(){return delete bl[this.app.options.appId],Promise.resolve()}}let bl={},lv=[];const uv={};let Gd="dataLayer",tI="gtag",cv,gT,hv=!1;function eI(){const r=[];if(zE()&&r.push("This is a browser extension environment."),Tw()||r.push("Cookies are not available."),r.length>0){const t=r.map((s,o)=>`(${o+1}) ${s}`).join(" "),n=yn.create("invalid-analytics-context",{errorInfo:t});an.warn(n.message)}}function nI(r,t,n){eI();const s=r.options.appId;if(!s)throw yn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)an.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw yn.create("no-api-key");if(bl[s]!=null)throw yn.create("already-exists",{id:s});if(!hv){kR(Gd);const{wrappedGtag:u,gtagCore:f}=zR(bl,lv,uv,Gd,tI);gT=u,cv=f,hv=!0}return bl[s]=WR(r,lv,uv,t,cv,Gd,n),new JR(r)}function iI(r=Cm()){r=ve(r);const t=Hs(r,Hc);return t.isInitialized()?t.getImmediate():rI(r)}function rI(r,t={}){const n=Hs(r,Hc);if(n.isInitialized()){const o=n.getImmediate();if(Ur(t,n.getOptions()))return o;throw yn.create("already-initialized")}return n.initialize({options:t})}function sI(r,t,n,s){r=ve(r),$R(gT,bl[r.app.options.appId],t,n,s).catch(o=>an.error(o))}const fv="@firebase/analytics",dv="0.10.12";function aI(){pi(new Hn(Hc,(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("installations-internal").getImmediate();return nI(s,o,n)},"PUBLIC")),pi(new Hn("analytics-internal",r,"PRIVATE")),Vn(fv,dv),Vn(fv,dv,"esm2017");function r(t){try{const n=t.getProvider(Hc).getImmediate();return{logEvent:(s,o,u)=>sI(n,s,o,u)}}catch(n){throw yn.create("interop-component-reg-failed",{reason:n})}}}aI();function Pm(r,t){var n={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&t.indexOf(s)<0&&(n[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(n[s[o]]=r[s[o]]);return n}function pT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const oI=pT,yT=new qs("auth","Firebase",pT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc=new uh("@firebase/auth");function lI(r,...t){Fc.logLevel<=Vt.WARN&&Fc.warn(`Auth (${no}): ${r}`,...t)}function Dc(r,...t){Fc.logLevel<=Vt.ERROR&&Fc.error(`Auth (${no}): ${r}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fn(r,...t){throw km(r,...t)}function fi(r,...t){return km(r,...t)}function _T(r,t,n){const s=Object.assign(Object.assign({},oI()),{[t]:n});return new qs("auth","Firebase",s).create(t,{appName:r.name})}function Ki(r){return _T(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function km(r,...t){if(typeof r!="string"){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return yT.create(r,...t)}function yt(r,t,...n){if(!r)throw km(t,...n)}function Fi(r){const t="INTERNAL ASSERTION FAILED: "+r;throw Dc(t),new Error(t)}function Yi(r,t){r||Fi(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rm(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function uI(){return mv()==="http:"||mv()==="https:"}function mv(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(uI()||zE()||"connection"in navigator)?navigator.onLine:!0}function hI(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(t,n){this.shortDelay=t,this.longDelay=n,Yi(n>t,"Short delay should be less than long delay!"),this.isMobile=gw()||_w()}get(){return cI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(r,t){Yi(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{static initialize(t,n,s){this.fetchImpl=t,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Fi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Fi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Fi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],mI=new Bl(3e4,6e4);function Fr(r,t){return r.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:r.tenantId}):t}async function Gr(r,t,n,s,o={}){return ET(r,o,async()=>{let u={},f={};s&&(t==="GET"?f=s:u={body:JSON.stringify(s)});const m=jl(Object.assign({key:r.config.apiKey},f)).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const y=Object.assign({method:t,headers:p},u);return yw()||(y.referrerPolicy="no-referrer"),vT.fetch()(await TT(r,r.config.apiHost,n,m),y)})}async function ET(r,t,n){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},fI),t);try{const o=new pI(r),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw Ac(r,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const m=u.ok?f.errorMessage:f.error.message,[p,y]=m.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ac(r,"credential-already-in-use",f);if(p==="EMAIL_EXISTS")throw Ac(r,"email-already-in-use",f);if(p==="USER_DISABLED")throw Ac(r,"user-disabled",f);const E=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw _T(r,E,y);Fn(r,E)}}catch(o){if(o instanceof Kn)throw o;Fn(r,"network-request-failed",{message:String(o)})}}async function ql(r,t,n,s,o={}){const u=await Gr(r,t,n,s,o);return"mfaPendingCredential"in u&&Fn(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function TT(r,t,n,s){const o=`${t}${n}?${s}`,u=r,f=u.config.emulator?xm(r.config,o):`${r.config.apiScheme}://${o}`;return dI.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(f).toString():f}function gI(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class pI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(fi(this.auth,"network-request-failed")),mI.get())})}}function Ac(r,t,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=fi(r,t,s);return o.customData._tokenResponse=n,o}function gv(r){return r!==void 0&&r.enterprise!==void 0}class yI{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return gI(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function _I(r,t){return Gr(r,"GET","/v2/recaptchaConfig",Fr(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vI(r,t){return Gr(r,"POST","/v1/accounts:delete",t)}async function Gc(r,t){return Gr(r,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(r){if(r)try{const t=new Date(Number(r));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function EI(r,t=!1){const n=ve(r),s=await n.getIdToken(t),o=Um(s);yt(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u==null?void 0:u.sign_in_provider;return{claims:o,token:s,authTime:Rl(Kd(o.auth_time)),issuedAtTime:Rl(Kd(o.iat)),expirationTime:Rl(Kd(o.exp)),signInProvider:f||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Kd(r){return Number(r)*1e3}function Um(r){const[t,n,s]=r.split(".");if(t===void 0||n===void 0||s===void 0)return Dc("JWT malformed, contained fewer than 3 sections"),null;try{const o=kE(n);return o?JSON.parse(o):(Dc("Failed to decode base64 JWT payload"),null)}catch(o){return Dc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function pv(r){const t=Um(r);return yt(t,"internal-error"),yt(typeof t.exp<"u","internal-error"),yt(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ml(r,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof Kn&&TI(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function TI({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Rl(this.lastLoginAt),this.creationTime=Rl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kc(r){var t;const n=r.auth,s=await r.getIdToken(),o=await Ml(r,Gc(n,{idToken:s}));yt(o==null?void 0:o.users.length,n,"internal-error");const u=o.users[0];r._notifyReloadListener(u);const f=!((t=u.providerUserInfo)===null||t===void 0)&&t.length?AT(u.providerUserInfo):[],m=wI(r.providerData,f),p=r.isAnonymous,y=!(r.email&&u.passwordHash)&&!(m!=null&&m.length),E=p?y:!1,S={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:m,metadata:new sm(u.createdAt,u.lastLoginAt),isAnonymous:E};Object.assign(r,S)}async function SI(r){const t=ve(r);await Kc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function wI(r,t){return[...r.filter(s=>!t.some(o=>o.providerId===s.providerId)),...t]}function AT(r){return r.map(t=>{var{providerId:n}=t,s=Pm(t,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bI(r,t){const n=await ET(r,{},async()=>{const s=jl({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:u}=r.config,f=await TT(r,o,"/v1/token",`key=${u}`),m=await r._getAdditionalHeaders();return m["Content-Type"]="application/x-www-form-urlencoded",vT.fetch()(f,{method:"POST",headers:m,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function RI(r,t){return Gr(r,"POST","/v2/accounts:revokeToken",Fr(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){yt(t.idToken,"internal-error"),yt(typeof t.idToken<"u","internal-error"),yt(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):pv(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){yt(t.length!==0,"internal-error");const n=pv(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(yt(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:s,refreshToken:o,expiresIn:u}=await bI(t,n);this.updateTokensAndExpiration(s,o,Number(u))}updateTokensAndExpiration(t,n,s){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,n){const{refreshToken:s,accessToken:o,expirationTime:u}=n,f=new Fa;return s&&(yt(typeof s=="string","internal-error",{appName:t}),f.refreshToken=s),o&&(yt(typeof o=="string","internal-error",{appName:t}),f.accessToken=o),u&&(yt(typeof u=="number","internal-error",{appName:t}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Fa,this.toJSON())}_performRefresh(){return Fi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(r,t){yt(typeof r=="string"||typeof r>"u","internal-error",{appName:t})}class Bn{constructor(t){var{uid:n,auth:s,stsTokenManager:o}=t,u=Pm(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new AI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new sm(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(t){const n=await Ml(this,this.stsTokenManager.getToken(this.auth,t));return yt(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return EI(this,t)}reload(){return SI(this)}_assign(t){this!==t&&(yt(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Bn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){yt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),n&&await Kc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Mn(this.auth.app))return Promise.reject(Ki(this.auth));const t=await this.getIdToken();return await Ml(this,vI(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var s,o,u,f,m,p,y,E;const S=(s=n.displayName)!==null&&s!==void 0?s:void 0,C=(o=n.email)!==null&&o!==void 0?o:void 0,B=(u=n.phoneNumber)!==null&&u!==void 0?u:void 0,$=(f=n.photoURL)!==null&&f!==void 0?f:void 0,et=(m=n.tenantId)!==null&&m!==void 0?m:void 0,W=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,lt=(y=n.createdAt)!==null&&y!==void 0?y:void 0,mt=(E=n.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:rt,emailVerified:Et,isAnonymous:ut,providerData:wt,stsTokenManager:M}=n;yt(rt&&M,t,"internal-error");const w=Fa.fromJSON(this.name,M);yt(typeof rt=="string",t,"internal-error"),Rr(S,t.name),Rr(C,t.name),yt(typeof Et=="boolean",t,"internal-error"),yt(typeof ut=="boolean",t,"internal-error"),Rr(B,t.name),Rr($,t.name),Rr(et,t.name),Rr(W,t.name),Rr(lt,t.name),Rr(mt,t.name);const b=new Bn({uid:rt,auth:t,email:C,emailVerified:Et,displayName:S,isAnonymous:ut,photoURL:$,phoneNumber:B,tenantId:et,stsTokenManager:w,createdAt:lt,lastLoginAt:mt});return wt&&Array.isArray(wt)&&(b.providerData=wt.map(N=>Object.assign({},N))),W&&(b._redirectEventId=W),b}static async _fromIdTokenResponse(t,n,s=!1){const o=new Fa;o.updateFromServerResponse(n);const u=new Bn({uid:n.localId,auth:t,stsTokenManager:o,isAnonymous:s});return await Kc(u),u}static async _fromGetAccountInfoResponse(t,n,s){const o=n.users[0];yt(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?AT(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),m=new Fa;m.updateFromIdToken(s);const p=new Bn({uid:o.localId,auth:t,stsTokenManager:m,isAnonymous:f}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new sm(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(p,y),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv=new Map;function Gi(r){Yi(r instanceof Function,"Expected a class definition");let t=yv.get(r);return t?(Yi(t instanceof r,"Instance stored in cache mismatched with class"),t):(t=new r,yv.set(r,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}ST.type="NONE";const _v=ST;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oc(r,t,n){return`firebase:${r}:${t}:${n}`}class Ga{constructor(t,n,s){this.persistence=t,this.auth=n,this.userKey=s;const{config:o,name:u}=this.auth;this.fullUserKey=Oc(this.userKey,o.apiKey,u),this.fullPersistenceKey=Oc("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await Gc(this.auth,{idToken:t}).catch(()=>{});return n?Bn._fromGetAccountInfoResponse(this.auth,n,t):null}return Bn._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,s="authUser"){if(!n.length)return new Ga(Gi(_v),t,s);const o=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let u=o[0]||Gi(_v);const f=Oc(s,t.config.apiKey,t.name);let m=null;for(const y of n)try{const E=await y._get(f);if(E){let S;if(typeof E=="string"){const C=await Gc(t,{idToken:E}).catch(()=>{});if(!C)break;S=await Bn._fromGetAccountInfoResponse(t,C,E)}else S=Bn._fromJSON(t,E);y!==u&&(m=S),u=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!u._shouldAllowMigration||!p.length?new Ga(u,t,s):(u=p[0],m&&await u._set(f,m.toJSON()),await Promise.all(n.map(async y=>{if(y!==u)try{await y._remove(f)}catch{}})),new Ga(u,t,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vv(r){const t=r.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(IT(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(wT(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(DT(t))return"Blackberry";if(OT(t))return"Webos";if(bT(t))return"Safari";if((t.includes("chrome/")||RT(t))&&!t.includes("edge/"))return"Chrome";if(CT(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function wT(r=Xe()){return/firefox\//i.test(r)}function bT(r=Xe()){const t=r.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function RT(r=Xe()){return/crios\//i.test(r)}function IT(r=Xe()){return/iemobile/i.test(r)}function CT(r=Xe()){return/android/i.test(r)}function DT(r=Xe()){return/blackberry/i.test(r)}function OT(r=Xe()){return/webos/i.test(r)}function Lm(r=Xe()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function II(r=Xe()){var t;return Lm(r)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function CI(){return vw()&&document.documentMode===10}function NT(r=Xe()){return Lm(r)||CT(r)||OT(r)||DT(r)||/windows phone/i.test(r)||IT(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MT(r,t=[]){let n;switch(r){case"Browser":n=vv(Xe());break;case"Worker":n=`${vv(Xe())}-${r}`;break;default:n=r}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${no}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const s=u=>new Promise((f,m)=>{try{const p=t(u);f(p)}catch(p){m(p)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const s of this.queue)await s(t),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OI(r,t={}){return Gr(r,"GET","/v2/passwordPolicy",Fr(r,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI=6;class MI{constructor(t){var n,s,o,u;const f=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=f.minPasswordLength)!==null&&n!==void 0?n:NI,f.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=f.maxPasswordLength),f.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=f.containsLowercaseCharacter),f.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=f.containsUppercaseCharacter),f.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=f.containsNumericCharacter),f.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=f.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=t.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(u=t.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,s,o,u,f,m;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,p),this.validatePasswordCharacterOptions(t,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(u=p.containsUppercaseLetter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(f=p.containsNumericCharacter)!==null&&f!==void 0?f:!0),p.isValid&&(p.isValid=(m=p.containsNonAlphanumericCharacter)!==null&&m!==void 0?m:!0),p}validatePasswordLengthOptions(t,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=t.length>=s),o&&(n.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<t.length;o++)s=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,n,s,o,u){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(t,n,s,o){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ev(this),this.idTokenSubscription=new Ev(this),this.beforeStateQueue=new DI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Gi(n)),this._initializationPromise=this.queue(async()=>{var s,o,u;if(!this._deleted&&(this.persistenceManager=await Ga.create(this,t),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((u=this.currentUser)===null||u===void 0?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Gc(this,{idToken:t}),s=await Bn._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(Mn(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(m=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(m,m))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,u=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,m=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(t);(!f||f===m)&&(p!=null&&p.user)&&(o=p.user,u=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(o)}catch(f){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return yt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Kc(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=hI()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Mn(this.app))return Promise.reject(Ki(this));const n=t?ve(t):null;return n&&yt(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&yt(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Mn(this.app)?Promise.reject(Ki(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Mn(this.app)?Promise.reject(Ki(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Gi(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await OI(this),n=new MI(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new qs("auth","Firebase",t())}onAuthStateChanged(t,n,s){return this.registerStateListener(this.authStateSubscription,t,n,s)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,s){return this.registerStateListener(this.idTokenSubscription,t,n,s)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await RI(this,s)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const s=await this.getOrInitRedirectPersistenceManager(n);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Gi(t)||this._popupRedirectResolver;yt(n,this,"argument-error"),this.redirectPersistenceManager=await Ga.create(this,[Gi(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,s,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let f=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(yt(m,this,"internal-error"),m.then(()=>{f||u(this.currentUser)}),typeof n=="function"){const p=t.addObserver(n,s,o);return()=>{f=!0,p()}}else{const p=t.addObserver(n);return()=>{f=!0,p()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return yt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=MT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var t;if(Mn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&lI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Fs(r){return ve(r)}class Ev{constructor(t){this.auth=t,this.observer=null,this.addObserver=Rw(n=>this.observer=n)}get next(){return yt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function PI(r){fh=r}function VT(r){return fh.loadJS(r)}function kI(){return fh.recaptchaEnterpriseScript}function xI(){return fh.gapiScript}function UI(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class LI{constructor(){this.enterprise=new zI}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class zI{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const jI="recaptcha-enterprise",PT="NO_RECAPTCHA";class BI{constructor(t){this.type=jI,this.auth=Fs(t)}async verify(t="verify",n=!1){async function s(u){if(!n){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(f,m)=>{_I(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)m(new Error("recaptcha Enterprise site key undefined"));else{const y=new yI(p);return u.tenantId==null?u._agentRecaptchaConfig=y:u._tenantRecaptchaConfigs[u.tenantId]=y,f(y.siteKey)}}).catch(p=>{m(p)})})}function o(u,f,m){const p=window.grecaptcha;gv(p)?p.enterprise.ready(()=>{p.enterprise.execute(u,{action:t}).then(y=>{f(y)}).catch(()=>{f(PT)})}):m(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new LI().execute("siteKey",{action:"verify"}):new Promise((u,f)=>{s(this.auth).then(m=>{if(!n&&gv(window.grecaptcha))o(m,u,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let p=kI();p.length!==0&&(p+=m),VT(p).then(()=>{o(m,u,f)}).catch(y=>{f(y)})}}).catch(m=>{f(m)})})}}async function Tv(r,t,n,s=!1,o=!1){const u=new BI(r);let f;if(o)f=PT;else try{f=await u.verify(n)}catch{f=await u.verify(n,!0)}const m=Object.assign({},t);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in m){const p=m.phoneEnrollmentInfo.phoneNumber,y=m.phoneEnrollmentInfo.recaptchaToken;Object.assign(m,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in m){const p=m.phoneSignInInfo.recaptchaToken;Object.assign(m,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return m}return s?Object.assign(m,{captchaResp:f}):Object.assign(m,{captchaResponse:f}),Object.assign(m,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(m,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),m}async function am(r,t,n,s,o){var u;if(!((u=r._getRecaptchaConfig())===null||u===void 0)&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const f=await Tv(r,t,n,n==="getOobCode");return s(r,f)}else return s(r,t).catch(async f=>{if(f.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await Tv(r,t,n,n==="getOobCode");return s(r,m)}else return Promise.reject(f)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qI(r,t){const n=Hs(r,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(Ur(u,t??{}))return o;Fn(o,"already-initialized")}return n.initialize({options:t})}function HI(r,t){const n=(t==null?void 0:t.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Gi);t!=null&&t.errorMap&&r._updateErrorMap(t.errorMap),r._initializeWithPersistence(s,t==null?void 0:t.popupRedirectResolver)}function FI(r,t,n){const s=Fs(r);yt(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const o=!1,u=kT(t),{host:f,port:m}=GI(t),p=m===null?"":`:${m}`,y={url:`${u}//${f}${p}/`},E=Object.freeze({host:f,port:m,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){yt(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),yt(Ur(y,s.config.emulator)&&Ur(E,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=E,s.settings.appVerificationDisabledForTesting=!0,KI()}function kT(r){const t=r.indexOf(":");return t<0?"":r.substr(0,t+1)}function GI(r){const t=kT(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const u=o[1];return{host:u,port:Av(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:Av(f)}}}function Av(r){if(!r)return null;const t=Number(r);return isNaN(t)?null:t}function KI(){function r(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Fi("not implemented")}_getIdTokenResponse(t){return Fi("not implemented")}_linkToIdToken(t,n){return Fi("not implemented")}_getReauthenticationResolver(t){return Fi("not implemented")}}async function QI(r,t){return Gr(r,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YI(r,t){return ql(r,"POST","/v1/accounts:signInWithPassword",Fr(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XI(r,t){return ql(r,"POST","/v1/accounts:signInWithEmailLink",Fr(r,t))}async function $I(r,t){return ql(r,"POST","/v1/accounts:signInWithEmailLink",Fr(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl extends zm{constructor(t,n,s,o=null){super("password",s),this._email=t,this._password=n,this._tenantId=o}static _fromEmailAndPassword(t,n){return new Vl(t,n,"password")}static _fromEmailAndCode(t,n,s=null){return new Vl(t,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return am(t,n,"signInWithPassword",YI);case"emailLink":return XI(t,{email:this._email,oobCode:this._password});default:Fn(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return am(t,s,"signUpPassword",QI);case"emailLink":return $I(t,{idToken:n,email:this._email,oobCode:this._password});default:Fn(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ka(r,t){return ql(r,"POST","/v1/accounts:signInWithIdp",Fr(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI="http://localhost";class xs extends zm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new xs(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Fn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:o}=n,u=Pm(n,["providerId","signInMethod"]);if(!s||!o)return null;const f=new xs(s,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(t){const n=this.buildRequest();return Ka(t,n)}_linkToIdToken(t,n){const s=this.buildRequest();return s.idToken=n,Ka(t,s)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Ka(t,n)}buildRequest(){const t={requestUri:ZI,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=jl(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WI(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function JI(r){const t=El(Tl(r)).link,n=t?El(Tl(t)).deep_link_id:null,s=El(Tl(r)).deep_link_id;return(s?El(Tl(s)).link:null)||s||n||t||r}class jm{constructor(t){var n,s,o,u,f,m;const p=El(Tl(t)),y=(n=p.apiKey)!==null&&n!==void 0?n:null,E=(s=p.oobCode)!==null&&s!==void 0?s:null,S=WI((o=p.mode)!==null&&o!==void 0?o:null);yt(y&&E&&S,"argument-error"),this.apiKey=y,this.operation=S,this.code=E,this.continueUrl=(u=p.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(f=p.lang)!==null&&f!==void 0?f:null,this.tenantId=(m=p.tenantId)!==null&&m!==void 0?m:null}static parseLink(t){const n=JI(t);try{return new jm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(){this.providerId=io.PROVIDER_ID}static credential(t,n){return Vl._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const s=jm.parseLink(n);return yt(s,"argument-error"),Vl._fromEmailAndCode(t,s.code,s.tenantId)}}io.PROVIDER_ID="password";io.EMAIL_PASSWORD_SIGN_IN_METHOD="password";io.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl extends xT{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends Hl{constructor(){super("facebook.com")}static credential(t){return xs._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ir.credentialFromTaggedObject(t)}static credentialFromError(t){return Ir.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ir.credential(t.oauthAccessToken)}catch{return null}}}Ir.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ir.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends Hl{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return xs._fromParams({providerId:Cr.PROVIDER_ID,signInMethod:Cr.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Cr.credentialFromTaggedObject(t)}static credentialFromError(t){return Cr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:s}=t;if(!n&&!s)return null;try{return Cr.credential(n,s)}catch{return null}}}Cr.GOOGLE_SIGN_IN_METHOD="google.com";Cr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr extends Hl{constructor(){super("github.com")}static credential(t){return xs._fromParams({providerId:Dr.PROVIDER_ID,signInMethod:Dr.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Dr.credentialFromTaggedObject(t)}static credentialFromError(t){return Dr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Dr.credential(t.oauthAccessToken)}catch{return null}}}Dr.GITHUB_SIGN_IN_METHOD="github.com";Dr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or extends Hl{constructor(){super("twitter.com")}static credential(t,n){return xs._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Or.credentialFromTaggedObject(t)}static credentialFromError(t){return Or.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=t;if(!n||!s)return null;try{return Or.credential(n,s)}catch{return null}}}Or.TWITTER_SIGN_IN_METHOD="twitter.com";Or.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t1(r,t){return ql(r,"POST","/v1/accounts:signUp",Fr(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,s,o=!1){const u=await Bn._fromIdTokenResponse(t,s,o),f=Sv(s);return new Us({user:u,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(t,n,s){await t._updateTokensIfNecessary(s,!0);const o=Sv(s);return new Us({user:t,providerId:o,_tokenResponse:s,operationType:n})}}function Sv(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc extends Kn{constructor(t,n,s,o){var u;super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Qc.prototype),this.customData={appName:t.name,tenantId:(u=t.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,n,s,o){return new Qc(t,n,s,o)}}function UT(r,t,n,s){return(t==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Qc._fromErrorAndOperation(r,u,t,s):u})}async function e1(r,t,n=!1){const s=await Ml(r,t._linkToIdToken(r.auth,await r.getIdToken()),n);return Us._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n1(r,t,n=!1){const{auth:s}=r;if(Mn(s.app))return Promise.reject(Ki(s));const o="reauthenticate";try{const u=await Ml(r,UT(s,o,t,r),n);yt(u.idToken,s,"internal-error");const f=Um(u.idToken);yt(f,s,"internal-error");const{sub:m}=f;return yt(r.uid===m,s,"user-mismatch"),Us._forOperation(r,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Fn(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LT(r,t,n=!1){if(Mn(r.app))return Promise.reject(Ki(r));const s="signIn",o=await UT(r,s,t),u=await Us._fromIdTokenResponse(r,s,o);return n||await r._updateCurrentUser(u.user),u}async function i1(r,t){return LT(Fs(r),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zT(r){const t=Fs(r);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function r1(r,t,n){if(Mn(r.app))return Promise.reject(Ki(r));const s=Fs(r),f=await am(s,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",t1).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&zT(r),p}),m=await Us._fromIdTokenResponse(s,"signIn",f);return await s._updateCurrentUser(m.user),m}function s1(r,t,n){return Mn(r.app)?Promise.reject(Ki(r)):i1(ve(r),io.credential(t,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&zT(r),s})}function a1(r,t,n,s){return ve(r).onIdTokenChanged(t,n,s)}function o1(r,t,n){return ve(r).beforeAuthStateChanged(t,n)}function l1(r,t,n,s){return ve(r).onAuthStateChanged(t,n,s)}function u1(r){return ve(r).signOut()}const Yc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Yc,"1"),this.storage.removeItem(Yc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c1=1e3,h1=10;class BT extends jT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=NT(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&t(n,o,s)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((f,m,p)=>{this.notifyListeners(f,p)});return}const s=t.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);CI()&&u!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,h1):o()}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:s}),!0)})},c1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}BT.type="LOCAL";const f1=BT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT extends jT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}qT.type="SESSION";const HT=qT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d1(r){return Promise.all(r.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(o=>o.isListeningto(t));if(n)return n;const s=new dh(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:s,eventType:o,data:u}=n.data,f=this.handlersMap[o];if(!(f!=null&&f.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const m=Array.from(f).map(async y=>y(n.origin,u)),p=await d1(m);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:p})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}dh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(r="",t=10){let n="";for(let s=0;s<t;s++)n+=Math.floor(Math.random()*10);return r+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((m,p)=>{const y=Bm("",20);o.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},s);f={messageChannel:o,onMessage(S){const C=S;if(C.data.eventId===y)switch(C.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),m(C.data.response);break;default:clearTimeout(E),clearTimeout(u),p(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:t,eventId:y,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(){return window}function g1(r){di().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FT(){return typeof di().WorkerGlobalScope<"u"&&typeof di().importScripts=="function"}async function p1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function y1(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function _1(){return FT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT="firebaseLocalStorageDb",v1=1,Xc="firebaseLocalStorage",KT="fbase_key";class Fl{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function mh(r,t){return r.transaction([Xc],t?"readwrite":"readonly").objectStore(Xc)}function E1(){const r=indexedDB.deleteDatabase(GT);return new Fl(r).toPromise()}function om(){const r=indexedDB.open(GT,v1);return new Promise((t,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Xc,{keyPath:KT})}catch(o){n(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Xc)?t(s):(s.close(),await E1(),t(await om()))})})}async function wv(r,t,n){const s=mh(r,!0).put({[KT]:t,value:n});return new Fl(s).toPromise()}async function T1(r,t){const n=mh(r,!1).get(t),s=await new Fl(n).toPromise();return s===void 0?null:s.value}function bv(r,t){const n=mh(r,!0).delete(t);return new Fl(n).toPromise()}const A1=800,S1=3;class QT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await om(),this.db)}async _withRetries(t){let n=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(n++>S1)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return FT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=dh._getInstance(_1()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await p1(),!this.activeServiceWorker)return;this.sender=new m1(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((t=s[0])===null||t===void 0)&&t.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||y1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await om();return await wv(t,Yc,"1"),await bv(t,Yc),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>wv(s,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(s=>T1(s,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>bv(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const u=mh(o,!1).getAll();return new Fl(u).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(t.length!==0)for(const{fbase_key:o,value:u}of t)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),A1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}QT.type="LOCAL";const w1=QT;new Bl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b1(r,t){return t?Gi(t):(yt(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm extends zm{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Ka(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Ka(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Ka(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function R1(r){return LT(r.auth,new qm(r),r.bypassAuthState)}function I1(r){const{auth:t,user:n}=r;return yt(n,t,"internal-error"),n1(n,new qm(r),r.bypassAuthState)}async function C1(r){const{auth:t,user:n}=r;return yt(n,t,"internal-error"),e1(n,new qm(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(t,n,s,o,u=!1){this.auth=t,this.resolver=s,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:s,postBody:o,tenantId:u,error:f,type:m}=t;if(f){this.reject(f);return}const p={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(p))}catch(y){this.reject(y)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return R1;case"linkViaPopup":case"linkViaRedirect":return C1;case"reauthViaPopup":case"reauthViaRedirect":return I1;default:Fn(this.auth,"internal-error")}}resolve(t){Yi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Yi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D1=new Bl(2e3,1e4);class Ha extends YT{constructor(t,n,s,o,u){super(t,n,o,u),this.provider=s,this.authWindow=null,this.pollId=null,Ha.currentPopupAction&&Ha.currentPopupAction.cancel(),Ha.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return yt(t,this.auth,"internal-error"),t}async onExecution(){Yi(this.filter.length===1,"Popup operations only handle one event");const t=Bm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fi(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(fi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ha.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fi(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,D1.get())};t()}}Ha.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O1="pendingRedirect",Nc=new Map;class N1 extends YT{constructor(t,n,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let t=Nc.get(this.auth._key());if(!t){try{const s=await M1(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(n){t=()=>Promise.reject(n)}Nc.set(this.auth._key(),t)}return this.bypassAuthState||Nc.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function M1(r,t){const n=k1(t),s=P1(r);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function V1(r,t){Nc.set(r._key(),t)}function P1(r){return Gi(r._redirectPersistence)}function k1(r){return Oc(O1,r.config.apiKey,r.name)}async function x1(r,t,n=!1){if(Mn(r.app))return Promise.reject(Ki(r));const s=Fs(r),o=b1(s,t),f=await new N1(s,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,t)),f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U1=10*60*1e3;class L1{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(n=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!z1(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var s;if(t.error&&!XT(t)){const o=((s=t.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(fi(this.auth,o))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const s=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=U1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Rv(t))}saveEventToCache(t){this.cachedEventUids.add(Rv(t)),this.lastProcessedEventTime=Date.now()}}function Rv(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(t=>t).join("-")}function XT({type:r,error:t}){return r==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function z1(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return XT(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j1(r,t={}){return Gr(r,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,q1=/^https?/;async function H1(r){if(r.config.emulator)return;const{authorizedDomains:t}=await j1(r);for(const n of t)try{if(F1(n))return}catch{}Fn(r,"unauthorized-domain")}function F1(r){const t=rm(),{protocol:n,hostname:s}=new URL(t);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!q1.test(n))return!1;if(B1.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G1=new Bl(3e4,6e4);function Iv(){const r=di().___jsl;if(r!=null&&r.H){for(const t of Object.keys(r.H))if(r.H[t].r=r.H[t].r||[],r.H[t].L=r.H[t].L||[],r.H[t].r=[...r.H[t].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function K1(r){return new Promise((t,n)=>{var s,o,u;function f(){Iv(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Iv(),n(fi(r,"network-request-failed"))},timeout:G1.get()})}if(!((o=(s=di().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)t(gapi.iframes.getContext());else if(!((u=di().gapi)===null||u===void 0)&&u.load)f();else{const m=UI("iframefcb");return di()[m]=()=>{gapi.load?f():n(fi(r,"network-request-failed"))},VT(`${xI()}?onload=${m}`).catch(p=>n(p))}}).catch(t=>{throw Mc=null,t})}let Mc=null;function Q1(r){return Mc=Mc||K1(r),Mc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y1=new Bl(5e3,15e3),X1="__/auth/iframe",$1="emulator/auth/iframe",Z1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},W1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function J1(r){const t=r.config;yt(t.authDomain,r,"auth-domain-config-required");const n=t.emulator?xm(t,$1):`https://${r.config.authDomain}/${X1}`,s={apiKey:t.apiKey,appName:r.name,v:no},o=W1.get(r.config.apiHost);o&&(s.eid=o);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${jl(s).slice(1)}`}async function tC(r){const t=await Q1(r),n=di().gapi;return yt(n,r,"internal-error"),t.open({where:document.body,url:J1(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Z1,dontclear:!0},s=>new Promise(async(o,u)=>{await s.restyle({setHideOnLeave:!1});const f=fi(r,"network-request-failed"),m=di().setTimeout(()=>{u(f)},Y1.get());function p(){di().clearTimeout(m),o(s)}s.ping(p).then(p,()=>{u(f)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nC=500,iC=600,rC="_blank",sC="http://localhost";class Cv{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function aC(r,t,n,s=nC,o=iC){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const p=Object.assign(Object.assign({},eC),{width:s.toString(),height:o.toString(),top:u,left:f}),y=Xe().toLowerCase();n&&(m=RT(y)?rC:n),wT(y)&&(t=t||sC,p.scrollbars="yes");const E=Object.entries(p).reduce((C,[B,$])=>`${C}${B}=${$},`,"");if(II(y)&&m!=="_self")return oC(t||"",m),new Cv(null);const S=window.open(t||"",m,E);yt(S,r,"popup-blocked");try{S.focus()}catch{}return new Cv(S)}function oC(r,t){const n=document.createElement("a");n.href=r,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC="__/auth/handler",uC="emulator/auth/handler",cC=encodeURIComponent("fac");async function Dv(r,t,n,s,o,u){yt(r.config.authDomain,r,"auth-domain-config-required"),yt(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:no,eventId:o};if(t instanceof xT){t.setDefaultLanguage(r.languageCode),f.providerId=t.providerId||"",bw(t.getCustomParameters())||(f.customParameters=JSON.stringify(t.getCustomParameters()));for(const[E,S]of Object.entries({}))f[E]=S}if(t instanceof Hl){const E=t.getScopes().filter(S=>S!=="");E.length>0&&(f.scopes=E.join(","))}r.tenantId&&(f.tid=r.tenantId);const m=f;for(const E of Object.keys(m))m[E]===void 0&&delete m[E];const p=await r._getAppCheckToken(),y=p?`#${cC}=${encodeURIComponent(p)}`:"";return`${hC(r)}?${jl(m).slice(1)}${y}`}function hC({config:r}){return r.emulator?xm(r,uC):`https://${r.authDomain}/${lC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="webStorageSupport";class fC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=HT,this._completeRedirectFn=x1,this._overrideRedirectResult=V1}async _openPopup(t,n,s,o){var u;Yi((u=this.eventManagers[t._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const f=await Dv(t,n,s,rm(),o);return aC(t,f,Bm())}async _openRedirect(t,n,s,o){await this._originValidation(t);const u=await Dv(t,n,s,rm(),o);return g1(u),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(Yi(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(t);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(t){const n=await tC(t),s=new L1(t);return n.register("authEvent",o=>(yt(o==null?void 0:o.authEvent,t,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=n,s}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Qd,{type:Qd},o=>{var u;const f=(u=o==null?void 0:o[0])===null||u===void 0?void 0:u[Qd];f!==void 0&&n(!!f),Fn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=H1(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return NT()||bT()||Lm()}}const dC=fC;var Ov="@firebase/auth",Nv="1.10.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(s=>{t((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){yt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gC(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function pC(r){pi(new Hn("auth",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),u=t.getProvider("app-check-internal"),{apiKey:f,authDomain:m}=s.options;yt(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:f,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:MT(r)},y=new VI(s,o,u,p);return HI(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,s)=>{t.getProvider("auth-internal").initialize()})),pi(new Hn("auth-internal",t=>{const n=Fs(t.getProvider("auth").getImmediate());return(s=>new mC(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vn(Ov,Nv,gC(r)),Vn(Ov,Nv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC=5*60,_C=LE("authIdTokenMaxAge")||yC;let Mv=null;const vC=r=>async t=>{const n=t&&await t.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>_C)return;const o=n==null?void 0:n.token;Mv!==o&&(Mv=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function EC(r=Cm()){const t=Hs(r,"auth");if(t.isInitialized())return t.getImmediate();const n=qI(r,{popupRedirectResolver:dC,persistence:[w1,f1,HT]}),s=LE("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const f=vC(u.toString());o1(n,f,()=>f(n.currentUser)),a1(n,m=>f(m))}}const o=xE("auth");return o&&FI(n,`http://${o}`),n}function TC(){var r,t;return(t=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&t!==void 0?t:document}PI({loadJS(r){return new Promise((t,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=t,s.onerror=o=>{const u=fi("internal-error");u.customData=o,n(u)},s.type="text/javascript",s.charset="UTF-8",TC().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});pC("Browser");var Vv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pr,$T;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(M,w){function b(){}b.prototype=w.prototype,M.D=w.prototype,M.prototype=new b,M.prototype.constructor=M,M.C=function(N,V,k){for(var I=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)I[Pe-2]=arguments[Pe];return w.prototype[V].apply(N,I)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(M,w,b){b||(b=0);var N=Array(16);if(typeof w=="string")for(var V=0;16>V;++V)N[V]=w.charCodeAt(b++)|w.charCodeAt(b++)<<8|w.charCodeAt(b++)<<16|w.charCodeAt(b++)<<24;else for(V=0;16>V;++V)N[V]=w[b++]|w[b++]<<8|w[b++]<<16|w[b++]<<24;w=M.g[0],b=M.g[1],V=M.g[2];var k=M.g[3],I=w+(k^b&(V^k))+N[0]+3614090360&4294967295;w=b+(I<<7&4294967295|I>>>25),I=k+(V^w&(b^V))+N[1]+3905402710&4294967295,k=w+(I<<12&4294967295|I>>>20),I=V+(b^k&(w^b))+N[2]+606105819&4294967295,V=k+(I<<17&4294967295|I>>>15),I=b+(w^V&(k^w))+N[3]+3250441966&4294967295,b=V+(I<<22&4294967295|I>>>10),I=w+(k^b&(V^k))+N[4]+4118548399&4294967295,w=b+(I<<7&4294967295|I>>>25),I=k+(V^w&(b^V))+N[5]+1200080426&4294967295,k=w+(I<<12&4294967295|I>>>20),I=V+(b^k&(w^b))+N[6]+2821735955&4294967295,V=k+(I<<17&4294967295|I>>>15),I=b+(w^V&(k^w))+N[7]+4249261313&4294967295,b=V+(I<<22&4294967295|I>>>10),I=w+(k^b&(V^k))+N[8]+1770035416&4294967295,w=b+(I<<7&4294967295|I>>>25),I=k+(V^w&(b^V))+N[9]+2336552879&4294967295,k=w+(I<<12&4294967295|I>>>20),I=V+(b^k&(w^b))+N[10]+4294925233&4294967295,V=k+(I<<17&4294967295|I>>>15),I=b+(w^V&(k^w))+N[11]+2304563134&4294967295,b=V+(I<<22&4294967295|I>>>10),I=w+(k^b&(V^k))+N[12]+1804603682&4294967295,w=b+(I<<7&4294967295|I>>>25),I=k+(V^w&(b^V))+N[13]+4254626195&4294967295,k=w+(I<<12&4294967295|I>>>20),I=V+(b^k&(w^b))+N[14]+2792965006&4294967295,V=k+(I<<17&4294967295|I>>>15),I=b+(w^V&(k^w))+N[15]+1236535329&4294967295,b=V+(I<<22&4294967295|I>>>10),I=w+(V^k&(b^V))+N[1]+4129170786&4294967295,w=b+(I<<5&4294967295|I>>>27),I=k+(b^V&(w^b))+N[6]+3225465664&4294967295,k=w+(I<<9&4294967295|I>>>23),I=V+(w^b&(k^w))+N[11]+643717713&4294967295,V=k+(I<<14&4294967295|I>>>18),I=b+(k^w&(V^k))+N[0]+3921069994&4294967295,b=V+(I<<20&4294967295|I>>>12),I=w+(V^k&(b^V))+N[5]+3593408605&4294967295,w=b+(I<<5&4294967295|I>>>27),I=k+(b^V&(w^b))+N[10]+38016083&4294967295,k=w+(I<<9&4294967295|I>>>23),I=V+(w^b&(k^w))+N[15]+3634488961&4294967295,V=k+(I<<14&4294967295|I>>>18),I=b+(k^w&(V^k))+N[4]+3889429448&4294967295,b=V+(I<<20&4294967295|I>>>12),I=w+(V^k&(b^V))+N[9]+568446438&4294967295,w=b+(I<<5&4294967295|I>>>27),I=k+(b^V&(w^b))+N[14]+3275163606&4294967295,k=w+(I<<9&4294967295|I>>>23),I=V+(w^b&(k^w))+N[3]+4107603335&4294967295,V=k+(I<<14&4294967295|I>>>18),I=b+(k^w&(V^k))+N[8]+1163531501&4294967295,b=V+(I<<20&4294967295|I>>>12),I=w+(V^k&(b^V))+N[13]+2850285829&4294967295,w=b+(I<<5&4294967295|I>>>27),I=k+(b^V&(w^b))+N[2]+4243563512&4294967295,k=w+(I<<9&4294967295|I>>>23),I=V+(w^b&(k^w))+N[7]+1735328473&4294967295,V=k+(I<<14&4294967295|I>>>18),I=b+(k^w&(V^k))+N[12]+2368359562&4294967295,b=V+(I<<20&4294967295|I>>>12),I=w+(b^V^k)+N[5]+4294588738&4294967295,w=b+(I<<4&4294967295|I>>>28),I=k+(w^b^V)+N[8]+2272392833&4294967295,k=w+(I<<11&4294967295|I>>>21),I=V+(k^w^b)+N[11]+1839030562&4294967295,V=k+(I<<16&4294967295|I>>>16),I=b+(V^k^w)+N[14]+4259657740&4294967295,b=V+(I<<23&4294967295|I>>>9),I=w+(b^V^k)+N[1]+2763975236&4294967295,w=b+(I<<4&4294967295|I>>>28),I=k+(w^b^V)+N[4]+1272893353&4294967295,k=w+(I<<11&4294967295|I>>>21),I=V+(k^w^b)+N[7]+4139469664&4294967295,V=k+(I<<16&4294967295|I>>>16),I=b+(V^k^w)+N[10]+3200236656&4294967295,b=V+(I<<23&4294967295|I>>>9),I=w+(b^V^k)+N[13]+681279174&4294967295,w=b+(I<<4&4294967295|I>>>28),I=k+(w^b^V)+N[0]+3936430074&4294967295,k=w+(I<<11&4294967295|I>>>21),I=V+(k^w^b)+N[3]+3572445317&4294967295,V=k+(I<<16&4294967295|I>>>16),I=b+(V^k^w)+N[6]+76029189&4294967295,b=V+(I<<23&4294967295|I>>>9),I=w+(b^V^k)+N[9]+3654602809&4294967295,w=b+(I<<4&4294967295|I>>>28),I=k+(w^b^V)+N[12]+3873151461&4294967295,k=w+(I<<11&4294967295|I>>>21),I=V+(k^w^b)+N[15]+530742520&4294967295,V=k+(I<<16&4294967295|I>>>16),I=b+(V^k^w)+N[2]+3299628645&4294967295,b=V+(I<<23&4294967295|I>>>9),I=w+(V^(b|~k))+N[0]+4096336452&4294967295,w=b+(I<<6&4294967295|I>>>26),I=k+(b^(w|~V))+N[7]+1126891415&4294967295,k=w+(I<<10&4294967295|I>>>22),I=V+(w^(k|~b))+N[14]+2878612391&4294967295,V=k+(I<<15&4294967295|I>>>17),I=b+(k^(V|~w))+N[5]+4237533241&4294967295,b=V+(I<<21&4294967295|I>>>11),I=w+(V^(b|~k))+N[12]+1700485571&4294967295,w=b+(I<<6&4294967295|I>>>26),I=k+(b^(w|~V))+N[3]+2399980690&4294967295,k=w+(I<<10&4294967295|I>>>22),I=V+(w^(k|~b))+N[10]+4293915773&4294967295,V=k+(I<<15&4294967295|I>>>17),I=b+(k^(V|~w))+N[1]+2240044497&4294967295,b=V+(I<<21&4294967295|I>>>11),I=w+(V^(b|~k))+N[8]+1873313359&4294967295,w=b+(I<<6&4294967295|I>>>26),I=k+(b^(w|~V))+N[15]+4264355552&4294967295,k=w+(I<<10&4294967295|I>>>22),I=V+(w^(k|~b))+N[6]+2734768916&4294967295,V=k+(I<<15&4294967295|I>>>17),I=b+(k^(V|~w))+N[13]+1309151649&4294967295,b=V+(I<<21&4294967295|I>>>11),I=w+(V^(b|~k))+N[4]+4149444226&4294967295,w=b+(I<<6&4294967295|I>>>26),I=k+(b^(w|~V))+N[11]+3174756917&4294967295,k=w+(I<<10&4294967295|I>>>22),I=V+(w^(k|~b))+N[2]+718787259&4294967295,V=k+(I<<15&4294967295|I>>>17),I=b+(k^(V|~w))+N[9]+3951481745&4294967295,M.g[0]=M.g[0]+w&4294967295,M.g[1]=M.g[1]+(V+(I<<21&4294967295|I>>>11))&4294967295,M.g[2]=M.g[2]+V&4294967295,M.g[3]=M.g[3]+k&4294967295}s.prototype.u=function(M,w){w===void 0&&(w=M.length);for(var b=w-this.blockSize,N=this.B,V=this.h,k=0;k<w;){if(V==0)for(;k<=b;)o(this,M,k),k+=this.blockSize;if(typeof M=="string"){for(;k<w;)if(N[V++]=M.charCodeAt(k++),V==this.blockSize){o(this,N),V=0;break}}else for(;k<w;)if(N[V++]=M[k++],V==this.blockSize){o(this,N),V=0;break}}this.h=V,this.o+=w},s.prototype.v=function(){var M=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);M[0]=128;for(var w=1;w<M.length-8;++w)M[w]=0;var b=8*this.o;for(w=M.length-8;w<M.length;++w)M[w]=b&255,b/=256;for(this.u(M),M=Array(16),w=b=0;4>w;++w)for(var N=0;32>N;N+=8)M[b++]=this.g[w]>>>N&255;return M};function u(M,w){var b=m;return Object.prototype.hasOwnProperty.call(b,M)?b[M]:b[M]=w(M)}function f(M,w){this.h=w;for(var b=[],N=!0,V=M.length-1;0<=V;V--){var k=M[V]|0;N&&k==w||(b[V]=k,N=!1)}this.g=b}var m={};function p(M){return-128<=M&&128>M?u(M,function(w){return new f([w|0],0>w?-1:0)}):new f([M|0],0>M?-1:0)}function y(M){if(isNaN(M)||!isFinite(M))return S;if(0>M)return W(y(-M));for(var w=[],b=1,N=0;M>=b;N++)w[N]=M/b|0,b*=4294967296;return new f(w,0)}function E(M,w){if(M.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(M.charAt(0)=="-")return W(E(M.substring(1),w));if(0<=M.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=y(Math.pow(w,8)),N=S,V=0;V<M.length;V+=8){var k=Math.min(8,M.length-V),I=parseInt(M.substring(V,V+k),w);8>k?(k=y(Math.pow(w,k)),N=N.j(k).add(y(I))):(N=N.j(b),N=N.add(y(I)))}return N}var S=p(0),C=p(1),B=p(16777216);r=f.prototype,r.m=function(){if(et(this))return-W(this).m();for(var M=0,w=1,b=0;b<this.g.length;b++){var N=this.i(b);M+=(0<=N?N:4294967296+N)*w,w*=4294967296}return M},r.toString=function(M){if(M=M||10,2>M||36<M)throw Error("radix out of range: "+M);if($(this))return"0";if(et(this))return"-"+W(this).toString(M);for(var w=y(Math.pow(M,6)),b=this,N="";;){var V=Et(b,w).g;b=lt(b,V.j(w));var k=((0<b.g.length?b.g[0]:b.h)>>>0).toString(M);if(b=V,$(b))return k+N;for(;6>k.length;)k="0"+k;N=k+N}},r.i=function(M){return 0>M?0:M<this.g.length?this.g[M]:this.h};function $(M){if(M.h!=0)return!1;for(var w=0;w<M.g.length;w++)if(M.g[w]!=0)return!1;return!0}function et(M){return M.h==-1}r.l=function(M){return M=lt(this,M),et(M)?-1:$(M)?0:1};function W(M){for(var w=M.g.length,b=[],N=0;N<w;N++)b[N]=~M.g[N];return new f(b,~M.h).add(C)}r.abs=function(){return et(this)?W(this):this},r.add=function(M){for(var w=Math.max(this.g.length,M.g.length),b=[],N=0,V=0;V<=w;V++){var k=N+(this.i(V)&65535)+(M.i(V)&65535),I=(k>>>16)+(this.i(V)>>>16)+(M.i(V)>>>16);N=I>>>16,k&=65535,I&=65535,b[V]=I<<16|k}return new f(b,b[b.length-1]&-2147483648?-1:0)};function lt(M,w){return M.add(W(w))}r.j=function(M){if($(this)||$(M))return S;if(et(this))return et(M)?W(this).j(W(M)):W(W(this).j(M));if(et(M))return W(this.j(W(M)));if(0>this.l(B)&&0>M.l(B))return y(this.m()*M.m());for(var w=this.g.length+M.g.length,b=[],N=0;N<2*w;N++)b[N]=0;for(N=0;N<this.g.length;N++)for(var V=0;V<M.g.length;V++){var k=this.i(N)>>>16,I=this.i(N)&65535,Pe=M.i(V)>>>16,se=M.i(V)&65535;b[2*N+2*V]+=I*se,mt(b,2*N+2*V),b[2*N+2*V+1]+=k*se,mt(b,2*N+2*V+1),b[2*N+2*V+1]+=I*Pe,mt(b,2*N+2*V+1),b[2*N+2*V+2]+=k*Pe,mt(b,2*N+2*V+2)}for(N=0;N<w;N++)b[N]=b[2*N+1]<<16|b[2*N];for(N=w;N<2*w;N++)b[N]=0;return new f(b,0)};function mt(M,w){for(;(M[w]&65535)!=M[w];)M[w+1]+=M[w]>>>16,M[w]&=65535,w++}function rt(M,w){this.g=M,this.h=w}function Et(M,w){if($(w))throw Error("division by zero");if($(M))return new rt(S,S);if(et(M))return w=Et(W(M),w),new rt(W(w.g),W(w.h));if(et(w))return w=Et(M,W(w)),new rt(W(w.g),w.h);if(30<M.g.length){if(et(M)||et(w))throw Error("slowDivide_ only works with positive integers.");for(var b=C,N=w;0>=N.l(M);)b=ut(b),N=ut(N);var V=wt(b,1),k=wt(N,1);for(N=wt(N,2),b=wt(b,2);!$(N);){var I=k.add(N);0>=I.l(M)&&(V=V.add(b),k=I),N=wt(N,1),b=wt(b,1)}return w=lt(M,V.j(w)),new rt(V,w)}for(V=S;0<=M.l(w);){for(b=Math.max(1,Math.floor(M.m()/w.m())),N=Math.ceil(Math.log(b)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),k=y(b),I=k.j(w);et(I)||0<I.l(M);)b-=N,k=y(b),I=k.j(w);$(k)&&(k=C),V=V.add(k),M=lt(M,I)}return new rt(V,M)}r.A=function(M){return Et(this,M).h},r.and=function(M){for(var w=Math.max(this.g.length,M.g.length),b=[],N=0;N<w;N++)b[N]=this.i(N)&M.i(N);return new f(b,this.h&M.h)},r.or=function(M){for(var w=Math.max(this.g.length,M.g.length),b=[],N=0;N<w;N++)b[N]=this.i(N)|M.i(N);return new f(b,this.h|M.h)},r.xor=function(M){for(var w=Math.max(this.g.length,M.g.length),b=[],N=0;N<w;N++)b[N]=this.i(N)^M.i(N);return new f(b,this.h^M.h)};function ut(M){for(var w=M.g.length+1,b=[],N=0;N<w;N++)b[N]=M.i(N)<<1|M.i(N-1)>>>31;return new f(b,M.h)}function wt(M,w){var b=w>>5;w%=32;for(var N=M.g.length-b,V=[],k=0;k<N;k++)V[k]=0<w?M.i(k+b)>>>w|M.i(k+b+1)<<32-w:M.i(k+b);return new f(V,M.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,$T=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.A,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=y,f.fromString=E,Pr=f}).apply(typeof Vv<"u"?Vv:typeof self<"u"?self:typeof window<"u"?window:{});var Sc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ZT,Al,WT,Vc,lm,JT,t0,e0;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,g,_){return c==Array.prototype||c==Object.prototype||(c[g]=_.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Sc=="object"&&Sc];for(var g=0;g<c.length;++g){var _=c[g];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=n(this);function o(c,g){if(g)t:{var _=s;c=c.split(".");for(var A=0;A<c.length-1;A++){var x=c[A];if(!(x in _))break t;_=_[x]}c=c[c.length-1],A=_[c],g=g(A),g!=A&&g!=null&&t(_,c,{configurable:!0,writable:!0,value:g})}}function u(c,g){c instanceof String&&(c+="");var _=0,A=!1,x={next:function(){if(!A&&_<c.length){var q=_++;return{value:g(q,c[q]),done:!1}}return A=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}o("Array.prototype.values",function(c){return c||function(){return u(this,function(g,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var f=f||{},m=this||self;function p(c){var g=typeof c;return g=g!="object"?g:c?Array.isArray(c)?"array":g:"null",g=="array"||g=="object"&&typeof c.length=="number"}function y(c){var g=typeof c;return g=="object"&&c!=null||g=="function"}function E(c,g,_){return c.call.apply(c.bind,arguments)}function S(c,g,_){if(!c)throw Error();if(2<arguments.length){var A=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,A),c.apply(g,x)}}return function(){return c.apply(g,arguments)}}function C(c,g,_){return C=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:S,C.apply(null,arguments)}function B(c,g){var _=Array.prototype.slice.call(arguments,1);return function(){var A=_.slice();return A.push.apply(A,arguments),c.apply(this,A)}}function $(c,g){function _(){}_.prototype=g.prototype,c.aa=g.prototype,c.prototype=new _,c.prototype.constructor=c,c.Qb=function(A,x,q){for(var tt=Array(arguments.length-2),kt=2;kt<arguments.length;kt++)tt[kt-2]=arguments[kt];return g.prototype[x].apply(A,tt)}}function et(c){const g=c.length;if(0<g){const _=Array(g);for(let A=0;A<g;A++)_[A]=c[A];return _}return[]}function W(c,g){for(let _=1;_<arguments.length;_++){const A=arguments[_];if(p(A)){const x=c.length||0,q=A.length||0;c.length=x+q;for(let tt=0;tt<q;tt++)c[x+tt]=A[tt]}else c.push(A)}}class lt{constructor(g,_){this.i=g,this.j=_,this.h=0,this.g=null}get(){let g;return 0<this.h?(this.h--,g=this.g,this.g=g.next,g.next=null):g=this.i(),g}}function mt(c){return/^[\s\xa0]*$/.test(c)}function rt(){var c=m.navigator;return c&&(c=c.userAgent)?c:""}function Et(c){return Et[" "](c),c}Et[" "]=function(){};var ut=rt().indexOf("Gecko")!=-1&&!(rt().toLowerCase().indexOf("webkit")!=-1&&rt().indexOf("Edge")==-1)&&!(rt().indexOf("Trident")!=-1||rt().indexOf("MSIE")!=-1)&&rt().indexOf("Edge")==-1;function wt(c,g,_){for(const A in c)g.call(_,c[A],A,c)}function M(c,g){for(const _ in c)g.call(void 0,c[_],_,c)}function w(c){const g={};for(const _ in c)g[_]=c[_];return g}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(c,g){let _,A;for(let x=1;x<arguments.length;x++){A=arguments[x];for(_ in A)c[_]=A[_];for(let q=0;q<b.length;q++)_=b[q],Object.prototype.hasOwnProperty.call(A,_)&&(c[_]=A[_])}}function V(c){var g=1;c=c.split(":");const _=[];for(;0<g&&c.length;)_.push(c.shift()),g--;return c.length&&_.push(c.join(":")),_}function k(c){m.setTimeout(()=>{throw c},0)}function I(){var c=jt;let g=null;return c.g&&(g=c.g,c.g=c.g.next,c.g||(c.h=null),g.next=null),g}class Pe{constructor(){this.h=this.g=null}add(g,_){const A=se.get();A.set(g,_),this.h?this.h.next=A:this.g=A,this.h=A}}var se=new lt(()=>new H,c=>c.reset());class H{constructor(){this.next=this.g=this.h=null}set(g,_){this.h=g,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let nt,ht=!1,jt=new Pe,D=()=>{const c=m.Promise.resolve(void 0);nt=()=>{c.then(Z)}};var Z=()=>{for(var c;c=I();){try{c.h.call(c.g)}catch(_){k(_)}var g=se;g.j(c),100>g.h&&(g.h++,c.next=g.g,g.g=c)}ht=!1};function it(){this.s=this.s,this.C=this.C}it.prototype.s=!1,it.prototype.ma=function(){this.s||(this.s=!0,this.N())},it.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function J(c,g){this.type=c,this.g=this.target=g,this.defaultPrevented=!1}J.prototype.h=function(){this.defaultPrevented=!0};var dt=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var c=!1,g=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const _=()=>{};m.addEventListener("test",_,g),m.removeEventListener("test",_,g)}catch{}return c}();function Dt(c,g){if(J.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var _=this.type=c.type,A=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=g,g=c.relatedTarget){if(ut){t:{try{Et(g.nodeName);var x=!0;break t}catch{}x=!1}x||(g=null)}}else _=="mouseover"?g=c.fromElement:_=="mouseout"&&(g=c.toElement);this.relatedTarget=g,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Tt[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Dt.aa.h.call(this)}}$(Dt,J);var Tt={2:"touch",3:"pen",4:"mouse"};Dt.prototype.h=function(){Dt.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Ie="closure_listenable_"+(1e6*Math.random()|0),Wt=0;function Qn(c,g,_,A,x){this.listener=c,this.proxy=null,this.src=g,this.type=_,this.capture=!!A,this.ha=x,this.key=++Wt,this.da=this.fa=!1}function Zi(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function _i(c){this.src=c,this.g={},this.h=0}_i.prototype.add=function(c,g,_,A,x){var q=c.toString();c=this.g[q],c||(c=this.g[q]=[],this.h++);var tt=Xr(c,g,A,x);return-1<tt?(g=c[tt],_||(g.fa=!1)):(g=new Qn(g,this.src,q,!!A,x),g.fa=_,c.push(g)),g};function Yr(c,g){var _=g.type;if(_ in c.g){var A=c.g[_],x=Array.prototype.indexOf.call(A,g,void 0),q;(q=0<=x)&&Array.prototype.splice.call(A,x,1),q&&(Zi(g),c.g[_].length==0&&(delete c.g[_],c.h--))}}function Xr(c,g,_,A){for(var x=0;x<c.length;++x){var q=c[x];if(!q.da&&q.listener==g&&q.capture==!!_&&q.ha==A)return x}return-1}var $r="closure_lm_"+(1e6*Math.random()|0),uo={};function Wl(c,g,_,A,x){if(Array.isArray(g)){for(var q=0;q<g.length;q++)Wl(c,g[q],_,A,x);return null}return _=Jl(_),c&&c[Ie]?c.K(g,_,y(A)?!!A.capture:!1,x):vn(c,g,_,!1,A,x)}function vn(c,g,_,A,x,q){if(!g)throw Error("Invalid event type");var tt=y(x)?!!x.capture:!!x,kt=Ys(c);if(kt||(c[$r]=kt=new _i(c)),_=kt.add(g,_,A,tt,q),_.proxy)return _;if(A=Nh(),_.proxy=A,A.src=c,A.listener=_,c.addEventListener)dt||(x=tt),x===void 0&&(x=!1),c.addEventListener(g.toString(),A,x);else if(c.attachEvent)c.attachEvent(Zr(g.toString()),A);else if(c.addListener&&c.removeListener)c.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return _}function Nh(){function c(_){return g.call(c.src,c.listener,_)}const g=Mh;return c}function co(c,g,_,A,x){if(Array.isArray(g))for(var q=0;q<g.length;q++)co(c,g[q],_,A,x);else A=y(A)?!!A.capture:!!A,_=Jl(_),c&&c[Ie]?(c=c.i,g=String(g).toString(),g in c.g&&(q=c.g[g],_=Xr(q,_,A,x),-1<_&&(Zi(q[_]),Array.prototype.splice.call(q,_,1),q.length==0&&(delete c.g[g],c.h--)))):c&&(c=Ys(c))&&(g=c.g[g.toString()],c=-1,g&&(c=Xr(g,_,A,x)),(_=-1<c?g[c]:null)&&Qs(_))}function Qs(c){if(typeof c!="number"&&c&&!c.da){var g=c.src;if(g&&g[Ie])Yr(g.i,c);else{var _=c.type,A=c.proxy;g.removeEventListener?g.removeEventListener(_,A,c.capture):g.detachEvent?g.detachEvent(Zr(_),A):g.addListener&&g.removeListener&&g.removeListener(A),(_=Ys(g))?(Yr(_,c),_.h==0&&(_.src=null,g[$r]=null)):Zi(c)}}}function Zr(c){return c in uo?uo[c]:uo[c]="on"+c}function Mh(c,g){if(c.da)c=!0;else{g=new Dt(g,this);var _=c.listener,A=c.ha||c.src;c.fa&&Qs(c),c=_.call(A,g)}return c}function Ys(c){return c=c[$r],c instanceof _i?c:null}var ho="__closure_events_fn_"+(1e9*Math.random()>>>0);function Jl(c){return typeof c=="function"?c:(c[ho]||(c[ho]=function(g){return c.handleEvent(g)}),c[ho])}function ae(){it.call(this),this.i=new _i(this),this.M=this,this.F=null}$(ae,it),ae.prototype[Ie]=!0,ae.prototype.removeEventListener=function(c,g,_,A){co(this,c,g,_,A)};function Ft(c,g){var _,A=c.F;if(A)for(_=[];A;A=A.F)_.push(A);if(c=c.M,A=g.type||g,typeof g=="string")g=new J(g,c);else if(g instanceof J)g.target=g.target||c;else{var x=g;g=new J(A,c),N(g,x)}if(x=!0,_)for(var q=_.length-1;0<=q;q--){var tt=g.g=_[q];x=on(tt,A,!0,g)&&x}if(tt=g.g=c,x=on(tt,A,!0,g)&&x,x=on(tt,A,!1,g)&&x,_)for(q=0;q<_.length;q++)tt=g.g=_[q],x=on(tt,A,!1,g)&&x}ae.prototype.N=function(){if(ae.aa.N.call(this),this.i){var c=this.i,g;for(g in c.g){for(var _=c.g[g],A=0;A<_.length;A++)Zi(_[A]);delete c.g[g],c.h--}}this.F=null},ae.prototype.K=function(c,g,_,A){return this.i.add(String(c),g,!1,_,A)},ae.prototype.L=function(c,g,_,A){return this.i.add(String(c),g,!0,_,A)};function on(c,g,_,A){if(g=c.i.g[String(g)],!g)return!0;g=g.concat();for(var x=!0,q=0;q<g.length;++q){var tt=g[q];if(tt&&!tt.da&&tt.capture==_){var kt=tt.listener,Te=tt.ha||tt.src;tt.fa&&Yr(c.i,tt),x=kt.call(Te,A)!==!1&&x}}return x&&!A.defaultPrevented}function He(c,g,_){if(typeof c=="function")_&&(c=C(c,_));else if(c&&typeof c.handleEvent=="function")c=C(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(g)?-1:m.setTimeout(c,g||0)}function tu(c){c.g=He(()=>{c.g=null,c.i&&(c.i=!1,tu(c))},c.l);const g=c.h;c.h=null,c.m.apply(null,g)}class Vh extends it{constructor(g,_){super(),this.m=g,this.l=_,this.h=null,this.i=!1,this.g=null}j(g){this.h=arguments,this.g?this.i=!0:tu(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wr(c){it.call(this),this.h=c,this.g={}}$(Wr,it);var Jr=[];function ts(c){wt(c.g,function(g,_){this.g.hasOwnProperty(_)&&Qs(g)},c),c.g={}}Wr.prototype.N=function(){Wr.aa.N.call(this),ts(this)},Wr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Pn=m.JSON.stringify,Xs=m.JSON.parse,es=class{stringify(c){return m.JSON.stringify(c,void 0)}parse(c){return m.JSON.parse(c,void 0)}};function fo(){}fo.prototype.h=null;function mo(c){return c.h||(c.h=c.i())}function go(){}var vi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ei(){J.call(this,"d")}$(Ei,J);function po(){J.call(this,"c")}$(po,J);var Yn={},yo=null;function Wi(){return yo=yo||new ae}Yn.La="serverreachability";function $s(c){J.call(this,Yn.La,c)}$($s,J);function Ji(c){const g=Wi();Ft(g,new $s(g))}Yn.STAT_EVENT="statevent";function eu(c,g){J.call(this,Yn.STAT_EVENT,c),this.stat=g}$(eu,J);function ee(c){const g=Wi();Ft(g,new eu(g,c))}Yn.Ma="timingevent";function Ee(c,g){J.call(this,Yn.Ma,c),this.size=g}$(Ee,J);function de(c,g){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){c()},g)}function En(){this.g=!0}En.prototype.xa=function(){this.g=!1};function _o(c,g,_,A,x,q){c.info(function(){if(c.g)if(q)for(var tt="",kt=q.split("&"),Te=0;Te<kt.length;Te++){var xt=kt[Te].split("=");if(1<xt.length){var De=xt[0];xt=xt[1];var Ae=De.split("_");tt=2<=Ae.length&&Ae[1]=="type"?tt+(De+"="+xt+"&"):tt+(De+"=redacted&")}}else tt=null;else tt=q;return"XMLHTTP REQ ("+A+") [attempt "+x+"]: "+g+`
`+_+`
`+tt})}function Ph(c,g,_,A,x,q,tt){c.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+x+"]: "+g+`
`+_+`
`+q+" "+tt})}function tr(c,g,_,A){c.info(function(){return"XMLHTTP TEXT ("+g+"): "+ns(c,_)+(A?" "+A:"")})}function nu(c,g){c.info(function(){return"TIMEOUT: "+g})}En.prototype.info=function(){};function ns(c,g){if(!c.g)return g;if(!g)return null;try{var _=JSON.parse(g);if(_){for(c=0;c<_.length;c++)if(Array.isArray(_[c])){var A=_[c];if(!(2>A.length)){var x=A[1];if(Array.isArray(x)&&!(1>x.length)){var q=x[0];if(q!="noop"&&q!="stop"&&q!="close")for(var tt=1;tt<x.length;tt++)x[tt]=""}}}}return Pn(_)}catch{return g}}var er={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ti={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Xn;function $n(){}$($n,fo),$n.prototype.g=function(){return new XMLHttpRequest},$n.prototype.i=function(){return{}},Xn=new $n;function $e(c,g,_,A){this.j=c,this.i=g,this.l=_,this.R=A||1,this.U=new Wr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ue}function ue(){this.i=null,this.g="",this.h=!1}var vo={},Zs={};function kn(c,g,_){c.L=1,c.v=os(ln(g)),c.m=_,c.P=!0,Ai(c,null)}function Ai(c,g){c.F=Date.now(),is(c),c.A=ln(c.v);var _=c.A,A=c.R;Array.isArray(A)||(A=[String(A)]),bo(_.i,"t",A),c.C=0,_=c.j.J,c.h=new ue,c.g=_u(c.j,_?g:null,!c.m),0<c.O&&(c.M=new Vh(C(c.Y,c,c.g),c.O)),g=c.U,_=c.g,A=c.ca;var x="readystatechange";Array.isArray(x)||(x&&(Jr[0]=x.toString()),x=Jr);for(var q=0;q<x.length;q++){var tt=Wl(_,x[q],A||g.handleEvent,!1,g.h||g);if(!tt)break;g.g[tt.key]=tt}g=c.H?w(c.H):{},c.m?(c.u||(c.u="POST"),g["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,g)):(c.u="GET",c.g.ea(c.A,c.u,null,g)),Ji(),_o(c.i,c.u,c.A,c.l,c.R,c.m)}$e.prototype.ca=function(c){c=c.target;const g=this.M;g&&wn(c)==3?g.j():this.Y(c)},$e.prototype.Y=function(c){try{if(c==this.g)t:{const Ae=wn(this.g);var g=this.g.Ba();const Oi=this.g.Z();if(!(3>Ae)&&(Ae!=3||this.g&&(this.h.h||this.g.oa()||cu(this.g)))){this.J||Ae!=4||g==7||(g==8||0>=Oi?Ji(3):Ji(2)),nr(this);var _=this.g.Z();this.X=_;e:if(iu(this)){var A=cu(this.g);c="";var x=A.length,q=wn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ke(this),Zn(this);var tt="";break e}this.h.i=new m.TextDecoder}for(g=0;g<x;g++)this.h.h=!0,c+=this.h.i.decode(A[g],{stream:!(q&&g==x-1)});A.length=0,this.h.g+=c,this.C=0,tt=this.h.g}else tt=this.g.oa();if(this.o=_==200,Ph(this.i,this.u,this.A,this.l,this.R,Ae,_),this.o){if(this.T&&!this.K){e:{if(this.g){var kt,Te=this.g;if((kt=Te.g?Te.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!mt(kt)){var xt=kt;break e}}xt=null}if(_=xt)tr(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,rs(this,_);else{this.o=!1,this.s=3,ee(12),ke(this),Zn(this);break t}}if(this.P){_=!0;let xe;for(;!this.J&&this.C<tt.length;)if(xe=ru(this,tt),xe==Zs){Ae==4&&(this.s=4,ee(14),_=!1),tr(this.i,this.l,null,"[Incomplete Response]");break}else if(xe==vo){this.s=4,ee(15),tr(this.i,this.l,tt,"[Invalid Chunk]"),_=!1;break}else tr(this.i,this.l,xe,null),rs(this,xe);if(iu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ae!=4||tt.length!=0||this.h.h||(this.s=1,ee(16),_=!1),this.o=this.o&&_,!_)tr(this.i,this.l,tt,"[Invalid Chunked Response]"),ke(this),Zn(this);else if(0<tt.length&&!this.W){this.W=!0;var De=this.j;De.g==this&&De.ba&&!De.M&&(De.j.info("Great, no buffering proxy detected. Bytes received: "+tt.length),gs(De),De.M=!0,ee(11))}}else tr(this.i,this.l,tt,null),rs(this,tt);Ae==4&&ke(this),this.o&&!this.J&&(Ae==4?gu(this.j,this):(this.o=!1,is(this)))}else zh(this.g),_==400&&0<tt.indexOf("Unknown SID")?(this.s=3,ee(12)):(this.s=0,ee(13)),ke(this),Zn(this)}}}catch{}finally{}};function iu(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function ru(c,g){var _=c.C,A=g.indexOf(`
`,_);return A==-1?Zs:(_=Number(g.substring(_,A)),isNaN(_)?vo:(A+=1,A+_>g.length?Zs:(g=g.slice(A,A+_),c.C=A+_,g)))}$e.prototype.cancel=function(){this.J=!0,ke(this)};function is(c){c.S=Date.now()+c.I,su(c,c.I)}function su(c,g){if(c.B!=null)throw Error("WatchDog timer not null");c.B=de(C(c.ba,c),g)}function nr(c){c.B&&(m.clearTimeout(c.B),c.B=null)}$e.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(nu(this.i,this.A),this.L!=2&&(Ji(),ee(17)),ke(this),this.s=2,Zn(this)):su(this,this.S-c)};function Zn(c){c.j.G==0||c.J||gu(c.j,c)}function ke(c){nr(c);var g=c.M;g&&typeof g.ma=="function"&&g.ma(),c.M=null,ts(c.U),c.g&&(g=c.g,c.g=null,g.abort(),g.ma())}function rs(c,g){try{var _=c.j;if(_.G!=0&&(_.g==c||Eo(_.h,c))){if(!c.K&&Eo(_.h,c)&&_.G==3){try{var A=_.Da.g.parse(g)}catch{A=null}if(Array.isArray(A)&&A.length==3){var x=A;if(x[0]==0){t:if(!_.u){if(_.g)if(_.g.F+3e3<c.F)ua(_),oa(_);else break t;Oo(_),ee(18)}}else _.za=x[1],0<_.za-_.T&&37500>x[2]&&_.F&&_.v==0&&!_.C&&(_.C=de(C(_.Za,_),6e3));if(1>=Js(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Di(_,11)}else if((c.K||_.g==c)&&ua(_),!mt(g))for(x=_.Da.g.parse(g),g=0;g<x.length;g++){let xt=x[g];if(_.T=xt[0],xt=xt[1],_.G==2)if(xt[0]=="c"){_.K=xt[1],_.ia=xt[2];const De=xt[3];De!=null&&(_.la=De,_.j.info("VER="+_.la));const Ae=xt[4];Ae!=null&&(_.Aa=Ae,_.j.info("SVER="+_.Aa));const Oi=xt[5];Oi!=null&&typeof Oi=="number"&&0<Oi&&(A=1.5*Oi,_.L=A,_.j.info("backChannelRequestTimeoutMs_="+A)),A=_;const xe=c.g;if(xe){const ri=xe.g?xe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ri){var q=A.h;q.g||ri.indexOf("spdy")==-1&&ri.indexOf("quic")==-1&&ri.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(ta(q,q.h),q.h=null))}if(A.D){const Mo=xe.g?xe.g.getResponseHeader("X-HTTP-Session-Id"):null;Mo&&(A.ya=Mo,Qt(A.I,A.D,Mo))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-c.F,_.j.info("Handshake RTT: "+_.R+"ms")),A=_;var tt=c;if(A.qa=yu(A,A.J?A.ia:null,A.W),tt.K){Ze(A.h,tt);var kt=tt,Te=A.L;Te&&(kt.I=Te),kt.B&&(nr(kt),is(kt)),A.g=tt}else du(A);0<_.i.length&&la(_)}else xt[0]!="stop"&&xt[0]!="close"||Di(_,7);else _.G==3&&(xt[0]=="stop"||xt[0]=="close"?xt[0]=="stop"?Di(_,7):Co(_):xt[0]!="noop"&&_.l&&_.l.ta(xt),_.v=0)}}Ji(4)}catch{}}var au=class{constructor(c,g){this.g=c,this.map=g}};function Si(c){this.l=c||10,m.PerformanceNavigationTiming?(c=m.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ws(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Js(c){return c.h?1:c.g?c.g.size:0}function Eo(c,g){return c.h?c.h==g:c.g?c.g.has(g):!1}function ta(c,g){c.g?c.g.add(g):c.h=g}function Ze(c,g){c.h&&c.h==g?c.h=null:c.g&&c.g.has(g)&&c.g.delete(g)}Si.prototype.cancel=function(){if(this.i=To(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function To(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let g=c.i;for(const _ of c.g.values())g=g.concat(_.D);return g}return et(c.i)}function kh(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(p(c)){for(var g=[],_=c.length,A=0;A<_;A++)g.push(c[A]);return g}g=[],_=0;for(A in c)g[_++]=c[A];return g}function ea(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(p(c)||typeof c=="string"){var g=[];c=c.length;for(var _=0;_<c;_++)g.push(_);return g}g=[],_=0;for(const A in c)g[_++]=A;return g}}}function Ao(c,g){if(c.forEach&&typeof c.forEach=="function")c.forEach(g,void 0);else if(p(c)||typeof c=="string")Array.prototype.forEach.call(c,g,void 0);else for(var _=ea(c),A=kh(c),x=A.length,q=0;q<x;q++)g.call(void 0,A[q],_&&_[q],c)}var ss=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xh(c,g){if(c){c=c.split("&");for(var _=0;_<c.length;_++){var A=c[_].indexOf("="),x=null;if(0<=A){var q=c[_].substring(0,A);x=c[_].substring(A+1)}else q=c[_];g(q,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function me(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof me){this.h=c.h,as(this,c.j),this.o=c.o,this.g=c.g,ir(this,c.s),this.l=c.l;var g=c.i,_=new bi;_.i=g.i,g.g&&(_.g=new Map(g.g),_.h=g.h),wi(this,_),this.m=c.m}else c&&(g=String(c).match(ss))?(this.h=!1,as(this,g[1]||"",!0),this.o=Tn(g[2]||""),this.g=Tn(g[3]||"",!0),ir(this,g[4]),this.l=Tn(g[5]||"",!0),wi(this,g[6]||"",!0),this.m=Tn(g[7]||"")):(this.h=!1,this.i=new bi(null,this.h))}me.prototype.toString=function(){var c=[],g=this.j;g&&c.push(ls(g,So,!0),":");var _=this.g;return(_||g=="file")&&(c.push("//"),(g=this.o)&&c.push(ls(g,So,!0),"@"),c.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&c.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&c.push("/"),c.push(ls(_,_.charAt(0)=="/"?Uh:wo,!0))),(_=this.i.toString())&&c.push("?",_),(_=this.m)&&c.push("#",ls(_,na)),c.join("")};function ln(c){return new me(c)}function as(c,g,_){c.j=_?Tn(g,!0):g,c.j&&(c.j=c.j.replace(/:$/,""))}function ir(c,g){if(g){if(g=Number(g),isNaN(g)||0>g)throw Error("Bad port number "+g);c.s=g}else c.s=null}function wi(c,g,_){g instanceof bi?(c.i=g,lu(c.i,c.h)):(_||(g=ls(g,Lh)),c.i=new bi(g,c.h))}function Qt(c,g,_){c.i.set(g,_)}function os(c){return Qt(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Tn(c,g){return c?g?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function ls(c,g,_){return typeof c=="string"?(c=encodeURI(c).replace(g,ou),_&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function ou(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var So=/[#\/\?@]/g,wo=/[#\?:]/g,Uh=/[#\?]/g,Lh=/[#\?@]/g,na=/#/g;function bi(c,g){this.h=this.g=null,this.i=c||null,this.j=!!g}function An(c){c.g||(c.g=new Map,c.h=0,c.i&&xh(c.i,function(g,_){c.add(decodeURIComponent(g.replace(/\+/g," ")),_)}))}r=bi.prototype,r.add=function(c,g){An(this),this.i=null,c=Wn(this,c);var _=this.g.get(c);return _||this.g.set(c,_=[]),_.push(g),this.h+=1,this};function Ri(c,g){An(c),g=Wn(c,g),c.g.has(g)&&(c.i=null,c.h-=c.g.get(g).length,c.g.delete(g))}function Ii(c,g){return An(c),g=Wn(c,g),c.g.has(g)}r.forEach=function(c,g){An(this),this.g.forEach(function(_,A){_.forEach(function(x){c.call(g,x,A,this)},this)},this)},r.na=function(){An(this);const c=Array.from(this.g.values()),g=Array.from(this.g.keys()),_=[];for(let A=0;A<g.length;A++){const x=c[A];for(let q=0;q<x.length;q++)_.push(g[A])}return _},r.V=function(c){An(this);let g=[];if(typeof c=="string")Ii(this,c)&&(g=g.concat(this.g.get(Wn(this,c))));else{c=Array.from(this.g.values());for(let _=0;_<c.length;_++)g=g.concat(c[_])}return g},r.set=function(c,g){return An(this),this.i=null,c=Wn(this,c),Ii(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[g]),this.h+=1,this},r.get=function(c,g){return c?(c=this.V(c),0<c.length?String(c[0]):g):g};function bo(c,g,_){Ri(c,g),0<_.length&&(c.i=null,c.g.set(Wn(c,g),et(_)),c.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],g=Array.from(this.g.keys());for(var _=0;_<g.length;_++){var A=g[_];const q=encodeURIComponent(String(A)),tt=this.V(A);for(A=0;A<tt.length;A++){var x=q;tt[A]!==""&&(x+="="+encodeURIComponent(String(tt[A]))),c.push(x)}}return this.i=c.join("&")};function Wn(c,g){return g=String(g),c.j&&(g=g.toLowerCase()),g}function lu(c,g){g&&!c.j&&(An(c),c.i=null,c.g.forEach(function(_,A){var x=A.toLowerCase();A!=x&&(Ri(this,A),bo(this,x,_))},c)),c.j=g}function us(c,g){const _=new En;if(m.Image){const A=new Image;A.onload=B(Sn,_,"TestLoadImage: loaded",!0,g,A),A.onerror=B(Sn,_,"TestLoadImage: error",!1,g,A),A.onabort=B(Sn,_,"TestLoadImage: abort",!1,g,A),A.ontimeout=B(Sn,_,"TestLoadImage: timeout",!1,g,A),m.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=c}else g(!1)}function xn(c,g){const _=new En,A=new AbortController,x=setTimeout(()=>{A.abort(),Sn(_,"TestPingServer: timeout",!1,g)},1e4);fetch(c,{signal:A.signal}).then(q=>{clearTimeout(x),q.ok?Sn(_,"TestPingServer: ok",!0,g):Sn(_,"TestPingServer: server error",!1,g)}).catch(()=>{clearTimeout(x),Sn(_,"TestPingServer: error",!1,g)})}function Sn(c,g,_,A,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),A(_)}catch{}}function cs(){this.g=new es}function Jn(c,g,_){const A=_||"";try{Ao(c,function(x,q){let tt=x;y(x)&&(tt=Pn(x)),g.push(A+q+"="+encodeURIComponent(tt))})}catch(x){throw g.push(A+"type="+encodeURIComponent("_badmap")),x}}function rr(c){this.l=c.Ub||null,this.j=c.eb||!1}$(rr,fo),rr.prototype.g=function(){return new Ci(this.l,this.j)},rr.prototype.i=function(c){return function(){return c}}({});function Ci(c,g){ae.call(this),this.D=c,this.o=g,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}$(Ci,ae),r=Ci.prototype,r.open=function(c,g){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=g,this.readyState=1,ei(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const g={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(g.body=c),(this.D||m).fetch(new Request(this.A,g)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ti(this)),this.readyState=0},r.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,ei(this)),this.g&&(this.readyState=3,ei(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ro(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ro(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}r.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var g=c.value?c.value:new Uint8Array(0);(g=this.v.decode(g,{stream:!c.done}))&&(this.response=this.responseText+=g)}c.done?ti(this):ei(this),this.readyState==3&&Ro(this)}},r.Ra=function(c){this.g&&(this.response=this.responseText=c,ti(this))},r.Qa=function(c){this.g&&(this.response=c,ti(this))},r.ga=function(){this.g&&ti(this)};function ti(c){c.readyState=4,c.l=null,c.j=null,c.v=null,ei(c)}r.setRequestHeader=function(c,g){this.u.append(c,g)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],g=this.h.entries();for(var _=g.next();!_.done;)_=_.value,c.push(_[0]+": "+_[1]),_=g.next();return c.join(`\r
`)};function ei(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Ci.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Io(c){let g="";return wt(c,function(_,A){g+=A,g+=":",g+=_,g+=`\r
`}),g}function Ce(c,g,_){t:{for(A in _){var A=!1;break t}A=!0}A||(_=Io(_),typeof c=="string"?_!=null&&encodeURIComponent(String(_)):Qt(c,g,_))}function qt(c){ae.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}$(qt,ae);var ia=/^https?$/i,hs=["POST","PUT"];r=qt.prototype,r.Ha=function(c){this.J=c},r.ea=function(c,g,_,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);g=g?g.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Xn.g(),this.v=this.o?mo(this.o):mo(Xn),this.g.onreadystatechange=C(this.Ea,this);try{this.B=!0,this.g.open(g,String(c),!0),this.B=!1}catch(q){uu(this,q);return}if(c=_||"",_=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var x in A)_.set(x,A[x]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const q of A.keys())_.set(q,A.get(q));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(_.keys()).find(q=>q.toLowerCase()=="content-type"),x=m.FormData&&c instanceof m.FormData,!(0<=Array.prototype.indexOf.call(hs,g,void 0))||A||x||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,tt]of _)this.g.setRequestHeader(q,tt);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{fs(this),this.u=!0,this.g.send(c),this.u=!1}catch(q){uu(this,q)}};function uu(c,g){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=g,c.m=5,ra(c),ni(c)}function ra(c){c.A||(c.A=!0,Ft(c,"complete"),Ft(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Ft(this,"complete"),Ft(this,"abort"),ni(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ni(this,!0)),qt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?sa(this):this.bb())},r.bb=function(){sa(this)};function sa(c){if(c.h&&typeof f<"u"&&(!c.v[1]||wn(c)!=4||c.Z()!=2)){if(c.u&&wn(c)==4)He(c.Ea,0,c);else if(Ft(c,"readystatechange"),wn(c)==4){c.h=!1;try{const tt=c.Z();t:switch(tt){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var g=!0;break t;default:g=!1}var _;if(!(_=g)){var A;if(A=tt===0){var x=String(c.D).match(ss)[1]||null;!x&&m.self&&m.self.location&&(x=m.self.location.protocol.slice(0,-1)),A=!ia.test(x?x.toLowerCase():"")}_=A}if(_)Ft(c,"complete"),Ft(c,"success");else{c.m=6;try{var q=2<wn(c)?c.g.statusText:""}catch{q=""}c.l=q+" ["+c.Z()+"]",ra(c)}}finally{ni(c)}}}}function ni(c,g){if(c.g){fs(c);const _=c.g,A=c.v[0]?()=>{}:null;c.g=null,c.v=null,g||Ft(c,"ready");try{_.onreadystatechange=A}catch{}}}function fs(c){c.I&&(m.clearTimeout(c.I),c.I=null)}r.isActive=function(){return!!this.g};function wn(c){return c.g?c.g.readyState:0}r.Z=function(){try{return 2<wn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(c){if(this.g){var g=this.g.responseText;return c&&g.indexOf(c)==0&&(g=g.substring(c.length)),Xs(g)}};function cu(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function zh(c){const g={};c=(c.g&&2<=wn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<c.length;A++){if(mt(c[A]))continue;var _=V(c[A]);const x=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const q=g[x]||[];g[x]=q,q.push(_)}M(g,function(A){return A.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ds(c,g,_){return _&&_.internalChannelParams&&_.internalChannelParams[c]||g}function aa(c){this.Aa=0,this.i=[],this.j=new En,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ds("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ds("baseRetryDelayMs",5e3,c),this.cb=ds("retryDelaySeedMs",1e4,c),this.Wa=ds("forwardChannelMaxRetries",2,c),this.wa=ds("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Si(c&&c.concurrentRequestLimit),this.Da=new cs,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=aa.prototype,r.la=8,r.G=1,r.connect=function(c,g,_,A){ee(0),this.W=c,this.H=g||{},_&&A!==void 0&&(this.H.OSID=_,this.H.OAID=A),this.F=this.X,this.I=yu(this,null,this.W),la(this)};function Co(c){if(hu(c),c.G==3){var g=c.U++,_=ln(c.I);if(Qt(_,"SID",c.K),Qt(_,"RID",g),Qt(_,"TYPE","terminate"),ms(c,_),g=new $e(c,c.j,g),g.L=2,g.v=os(ln(_)),_=!1,m.navigator&&m.navigator.sendBeacon)try{_=m.navigator.sendBeacon(g.v.toString(),"")}catch{}!_&&m.Image&&(new Image().src=g.v,_=!0),_||(g.g=_u(g.j,null),g.g.ea(g.v)),g.F=Date.now(),is(g)}pu(c)}function oa(c){c.g&&(gs(c),c.g.cancel(),c.g=null)}function hu(c){oa(c),c.u&&(m.clearTimeout(c.u),c.u=null),ua(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&m.clearTimeout(c.s),c.s=null)}function la(c){if(!Ws(c.h)&&!c.s){c.s=!0;var g=c.Ga;nt||D(),ht||(nt(),ht=!0),jt.add(g,c),c.B=0}}function jh(c,g){return Js(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=g.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=de(C(c.Ga,c,g),No(c,c.B)),c.B++,!0)}r.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const x=new $e(this,this.j,c);let q=this.o;if(this.S&&(q?(q=w(q),N(q,this.S)):q=this.S),this.m!==null||this.O||(x.H=q,q=null),this.P)t:{for(var g=0,_=0;_<this.i.length;_++){e:{var A=this.i[_];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break e}A=void 0}if(A===void 0)break;if(g+=A,4096<g){g=_;break t}if(g===4096||_===this.i.length-1){g=_+1;break t}}g=1e3}else g=1e3;g=fu(this,x,g),_=ln(this.I),Qt(_,"RID",c),Qt(_,"CVER",22),this.D&&Qt(_,"X-HTTP-Session-Id",this.D),ms(this,_),q&&(this.O?g="headers="+encodeURIComponent(String(Io(q)))+"&"+g:this.m&&Ce(_,this.m,q)),ta(this.h,x),this.Ua&&Qt(_,"TYPE","init"),this.P?(Qt(_,"$req",g),Qt(_,"SID","null"),x.T=!0,kn(x,_,null)):kn(x,_,g),this.G=2}}else this.G==3&&(c?Do(this,c):this.i.length==0||Ws(this.h)||Do(this))};function Do(c,g){var _;g?_=g.l:_=c.U++;const A=ln(c.I);Qt(A,"SID",c.K),Qt(A,"RID",_),Qt(A,"AID",c.T),ms(c,A),c.m&&c.o&&Ce(A,c.m,c.o),_=new $e(c,c.j,_,c.B+1),c.m===null&&(_.H=c.o),g&&(c.i=g.D.concat(c.i)),g=fu(c,_,1e3),_.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),ta(c.h,_),kn(_,A,g)}function ms(c,g){c.H&&wt(c.H,function(_,A){Qt(g,A,_)}),c.l&&Ao({},function(_,A){Qt(g,A,_)})}function fu(c,g,_){_=Math.min(c.i.length,_);var A=c.l?C(c.l.Na,c.l,c):null;t:{var x=c.i;let q=-1;for(;;){const tt=["count="+_];q==-1?0<_?(q=x[0].g,tt.push("ofs="+q)):q=0:tt.push("ofs="+q);let kt=!0;for(let Te=0;Te<_;Te++){let xt=x[Te].g;const De=x[Te].map;if(xt-=q,0>xt)q=Math.max(0,x[Te].g-100),kt=!1;else try{Jn(De,tt,"req"+xt+"_")}catch{A&&A(De)}}if(kt){A=tt.join("&");break t}}}return c=c.i.splice(0,_),g.D=c,A}function du(c){if(!c.g&&!c.u){c.Y=1;var g=c.Fa;nt||D(),ht||(nt(),ht=!0),jt.add(g,c),c.v=0}}function Oo(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=de(C(c.Fa,c),No(c,c.v)),c.v++,!0)}r.Fa=function(){if(this.u=null,mu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=de(C(this.ab,this),c)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ee(10),oa(this),mu(this))};function gs(c){c.A!=null&&(m.clearTimeout(c.A),c.A=null)}function mu(c){c.g=new $e(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var g=ln(c.qa);Qt(g,"RID","rpc"),Qt(g,"SID",c.K),Qt(g,"AID",c.T),Qt(g,"CI",c.F?"0":"1"),!c.F&&c.ja&&Qt(g,"TO",c.ja),Qt(g,"TYPE","xmlhttp"),ms(c,g),c.m&&c.o&&Ce(g,c.m,c.o),c.L&&(c.g.I=c.L);var _=c.g;c=c.ia,_.L=1,_.v=os(ln(g)),_.m=null,_.P=!0,Ai(_,c)}r.Za=function(){this.C!=null&&(this.C=null,oa(this),Oo(this),ee(19))};function ua(c){c.C!=null&&(m.clearTimeout(c.C),c.C=null)}function gu(c,g){var _=null;if(c.g==g){ua(c),gs(c),c.g=null;var A=2}else if(Eo(c.h,g))_=g.D,Ze(c.h,g),A=1;else return;if(c.G!=0){if(g.o)if(A==1){_=g.m?g.m.length:0,g=Date.now()-g.F;var x=c.B;A=Wi(),Ft(A,new Ee(A,_)),la(c)}else du(c);else if(x=g.s,x==3||x==0&&0<g.X||!(A==1&&jh(c,g)||A==2&&Oo(c)))switch(_&&0<_.length&&(g=c.h,g.i=g.i.concat(_)),x){case 1:Di(c,5);break;case 4:Di(c,10);break;case 3:Di(c,6);break;default:Di(c,2)}}}function No(c,g){let _=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(_*=2),_*g}function Di(c,g){if(c.j.info("Error code "+g),g==2){var _=C(c.fb,c),A=c.Xa;const x=!A;A=new me(A||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||as(A,"https"),os(A),x?us(A.toString(),_):xn(A.toString(),_)}else ee(2);c.G=0,c.l&&c.l.sa(g),pu(c),hu(c)}r.fb=function(c){c?(this.j.info("Successfully pinged google.com"),ee(2)):(this.j.info("Failed to ping google.com"),ee(1))};function pu(c){if(c.G=0,c.ka=[],c.l){const g=To(c.h);(g.length!=0||c.i.length!=0)&&(W(c.ka,g),W(c.ka,c.i),c.h.i.length=0,et(c.i),c.i.length=0),c.l.ra()}}function yu(c,g,_){var A=_ instanceof me?ln(_):new me(_);if(A.g!="")g&&(A.g=g+"."+A.g),ir(A,A.s);else{var x=m.location;A=x.protocol,g=g?g+"."+x.hostname:x.hostname,x=+x.port;var q=new me(null);A&&as(q,A),g&&(q.g=g),x&&ir(q,x),_&&(q.l=_),A=q}return _=c.D,g=c.ya,_&&g&&Qt(A,_,g),Qt(A,"VER",c.la),ms(c,A),A}function _u(c,g,_){if(g&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return g=c.Ca&&!c.pa?new qt(new rr({eb:_})):new qt(c.pa),g.Ha(c.J),g}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function vu(){}r=vu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function ca(){}ca.prototype.g=function(c,g){return new We(c,g)};function We(c,g){ae.call(this),this.g=new aa(g),this.l=c,this.h=g&&g.messageUrlParams||null,c=g&&g.messageHeaders||null,g&&g.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=g&&g.initMessageHeaders||null,g&&g.messageContentType&&(c?c["X-WebChannel-Content-Type"]=g.messageContentType:c={"X-WebChannel-Content-Type":g.messageContentType}),g&&g.va&&(c?c["X-WebChannel-Client-Profile"]=g.va:c={"X-WebChannel-Client-Profile":g.va}),this.g.S=c,(c=g&&g.Sb)&&!mt(c)&&(this.g.m=c),this.v=g&&g.supportsCrossDomainXhr||!1,this.u=g&&g.sendRawJson||!1,(g=g&&g.httpSessionIdParam)&&!mt(g)&&(this.g.D=g,c=this.h,c!==null&&g in c&&(c=this.h,g in c&&delete c[g])),this.j=new ii(this)}$(We,ae),We.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},We.prototype.close=function(){Co(this.g)},We.prototype.o=function(c){var g=this.g;if(typeof c=="string"){var _={};_.__data__=c,c=_}else this.u&&(_={},_.__data__=Pn(c),c=_);g.i.push(new au(g.Ya++,c)),g.G==3&&la(g)},We.prototype.N=function(){this.g.l=null,delete this.j,Co(this.g),delete this.g,We.aa.N.call(this)};function Eu(c){Ei.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var g=c.__sm__;if(g){t:{for(const _ in g){c=_;break t}c=void 0}(this.i=c)&&(c=this.i,g=g!==null&&c in g?g[c]:void 0),this.data=g}else this.data=c}$(Eu,Ei);function Tu(){po.call(this),this.status=1}$(Tu,po);function ii(c){this.g=c}$(ii,vu),ii.prototype.ua=function(){Ft(this.g,"a")},ii.prototype.ta=function(c){Ft(this.g,new Eu(c))},ii.prototype.sa=function(c){Ft(this.g,new Tu)},ii.prototype.ra=function(){Ft(this.g,"b")},ca.prototype.createWebChannel=ca.prototype.g,We.prototype.send=We.prototype.o,We.prototype.open=We.prototype.m,We.prototype.close=We.prototype.close,e0=function(){return new ca},t0=function(){return Wi()},JT=Yn,lm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},er.NO_ERROR=0,er.TIMEOUT=8,er.HTTP_ERROR=6,Vc=er,Ti.COMPLETE="complete",WT=Ti,go.EventType=vi,vi.OPEN="a",vi.CLOSE="b",vi.ERROR="c",vi.MESSAGE="d",ae.prototype.listen=ae.prototype.K,Al=go,qt.prototype.listenOnce=qt.prototype.L,qt.prototype.getLastError=qt.prototype.Ka,qt.prototype.getLastErrorCode=qt.prototype.Ba,qt.prototype.getStatus=qt.prototype.Z,qt.prototype.getResponseJson=qt.prototype.Oa,qt.prototype.getResponseText=qt.prototype.oa,qt.prototype.send=qt.prototype.ea,qt.prototype.setWithCredentials=qt.prototype.Ha,ZT=qt}).apply(typeof Sc<"u"?Sc:typeof self<"u"?self:typeof window<"u"?window:{});const Pv="@firebase/firestore",kv="4.7.11";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Qe.UNAUTHENTICATED=new Qe(null),Qe.GOOGLE_CREDENTIALS=new Qe("google-credentials-uid"),Qe.FIRST_PARTY=new Qe("first-party-uid"),Qe.MOCK_USER=new Qe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ro="11.6.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls=new uh("@firebase/firestore");function za(){return Ls.logLevel}function st(r,...t){if(Ls.logLevel<=Vt.DEBUG){const n=t.map(Hm);Ls.debug(`Firestore (${ro}): ${r}`,...n)}}function Xi(r,...t){if(Ls.logLevel<=Vt.ERROR){const n=t.map(Hm);Ls.error(`Firestore (${ro}): ${r}`,...n)}}function Xa(r,...t){if(Ls.logLevel<=Vt.WARN){const n=t.map(Hm);Ls.warn(`Firestore (${ro}): ${r}`,...n)}}function Hm(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(r,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,n0(r,s,n)}function n0(r,t,n){let s=`FIRESTORE (${ro}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw Xi(s),new Error(s)}function Ht(r,t,n,s){let o="Unexpected state";typeof n=="string"?o=n:s=n,r||n0(t,o,s)}function St(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ot extends Kn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i0{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class AC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Qe.UNAUTHENTICATED))}shutdown(){}}class SC{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class wC{constructor(t){this.t=t,this.currentUser=Qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Ht(this.o===void 0,42304);let s=this.i;const o=p=>this.i!==s?(s=this.i,n(p)):Promise.resolve();let u=new kr;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new kr,t.enqueueRetryable(()=>o(this.currentUser))};const f=()=>{const p=u;t.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},m=p=>{st("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit(p=>m(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?m(p):(st("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new kr)}},0),f()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(st("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ht(typeof s.accessToken=="string",31837,{l:s}),new i0(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Ht(t===null||typeof t=="string",2055,{h:t}),new Qe(t)}}class bC{constructor(t,n,s){this.P=t,this.T=n,this.I=s,this.type="FirstParty",this.user=Qe.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class RC{constructor(t,n,s){this.P=t,this.T=n,this.I=s}getToken(){return Promise.resolve(new bC(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable(()=>n(Qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class xv{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class IC{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Mn(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){Ht(this.o===void 0,3512);const s=u=>{u.error!=null&&st("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.m;return this.m=u.token,st("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(u.token):Promise.resolve()};this.o=u=>{t.enqueueRetryable(()=>s(u))};const o=u=>{st("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(u=>o(u)),setTimeout(()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):st("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new xv(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Ht(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new xv(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CC(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r0(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=CC(40);for(let u=0;u<o.length;++u)s.length<20&&o[u]<n&&(s+=t.charAt(o[u]%62))}return s}}function Ct(r,t){return r<t?-1:r>t?1:0}function um(r,t){let n=0;for(;n<r.length&&n<t.length;){const s=r.codePointAt(n),o=t.codePointAt(n);if(s!==o){if(s<128&&o<128)return Ct(s,o);{const u=r0(),f=DC(u.encode(Uv(r,n)),u.encode(Uv(t,n)));return f!==0?f:Ct(s,o)}}n+=s>65535?2:1}return Ct(r.length,t.length)}function Uv(r,t){return r.codePointAt(t)>65535?r.substring(t,t+2):r.substring(t,t+1)}function DC(r,t){for(let n=0;n<r.length&&n<t.length;++n)if(r[n]!==t[n])return Ct(r[n],t[n]);return Ct(r.length,t.length)}function $a(r,t,n){return r.length===t.length&&r.every((s,o)=>n(s,t[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv=-62135596800,zv=1e6;class be{static now(){return be.fromMillis(Date.now())}static fromDate(t){return be.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor((t-1e3*n)*zv);return new be(n,s)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new ot(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ot(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<Lv)throw new ot(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ot(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/zv}_compareTo(t){return this.seconds===t.seconds?Ct(this.nanoseconds,t.nanoseconds):Ct(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Lv;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{static fromTimestamp(t){return new At(t)}static min(){return new At(new be(0,0))}static max(){return new At(new be(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv="__name__";class ci{constructor(t,n,s){n===void 0?n=0:n>t.length&&_t(637,{offset:n,range:t.length}),s===void 0?s=t.length-n:s>t.length-n&&_t(1746,{length:s,range:t.length-n}),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return ci.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof ci?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let o=0;o<s;o++){const u=ci.compareSegments(t.get(o),n.get(o));if(u!==0)return u}return Ct(t.length,n.length)}static compareSegments(t,n){const s=ci.isNumericId(t),o=ci.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?ci.extractNumericId(t).compare(ci.extractNumericId(n)):um(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Pr.fromString(t.substring(4,t.length-2))}}class te extends ci{construct(t,n,s){return new te(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new ot(X.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(o=>o.length>0))}return new te(n)}static emptyPath(){return new te([])}}const OC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Be extends ci{construct(t,n,s){return new Be(t,n,s)}static isValidIdentifier(t){return OC.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Be.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===jv}static keyField(){return new Be([jv])}static fromServerFormat(t){const n=[];let s="",o=0;const u=()=>{if(s.length===0)throw new ot(X.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;o<t.length;){const m=t[o];if(m==="\\"){if(o+1===t.length)throw new ot(X.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const p=t[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ot(X.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=p,o+=2}else m==="`"?(f=!f,o++):m!=="."||f?(s+=m,o++):(u(),o++)}if(u(),f)throw new ot(X.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Be(n)}static emptyPath(){return new Be([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(t){this.path=t}static fromPath(t){return new ft(te.fromString(t))}static fromName(t){return new ft(te.fromString(t).popFirst(5))}static empty(){return new ft(te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&te.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return te.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ft(new te(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl=-1;function NC(r,t){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=At.fromTimestamp(s===1e9?new be(n+1,0):new be(n,s));return new Lr(o,ft.empty(),t)}function MC(r){return new Lr(r.readTime,r.key,Pl)}class Lr{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new Lr(At.min(),ft.empty(),Pl)}static max(){return new Lr(At.max(),ft.empty(),Pl)}}function VC(r,t){let n=r.readTime.compareTo(t.readTime);return n!==0?n:(n=ft.comparator(r.documentKey,t.documentKey),n!==0?n:Ct(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function so(r){if(r.code!==X.FAILED_PRECONDITION||r.message!==PC)throw r;st("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&_t(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new Y((s,o)=>{this.nextCallback=u=>{this.wrapSuccess(t,u).next(s,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(s,o)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof Y?n:Y.resolve(n)}catch(n){return Y.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):Y.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):Y.reject(n)}static resolve(t){return new Y((n,s)=>{n(t)})}static reject(t){return new Y((n,s)=>{s(t)})}static waitFor(t){return new Y((n,s)=>{let o=0,u=0,f=!1;t.forEach(m=>{++o,m.next(()=>{++u,f&&u===o&&n()},p=>s(p))}),f=!0,u===o&&n()})}static or(t){let n=Y.resolve(!1);for(const s of t)n=n.next(o=>o?Y.resolve(o):s());return n}static forEach(t,n){const s=[];return t.forEach((o,u)=>{s.push(n.call(this,o,u))}),this.waitFor(s)}static mapArray(t,n){return new Y((s,o)=>{const u=t.length,f=new Array(u);let m=0;for(let p=0;p<u;p++){const y=p;n(t[y]).next(E=>{f[y]=E,++m,m===u&&s(f)},E=>o(E))}})}static doWhile(t,n){return new Y((s,o)=>{const u=()=>{t()===!0?n().next(()=>{u()},o):s()};u()})}}function xC(r){const t=r.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ao(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ue(s),this.ce=s=>n.writeSequenceNumber(s))}ue(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ce&&this.ce(t),t}}gh.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm=-1;function ph(r){return r==null}function $c(r){return r===0&&1/r==-1/0}function UC(r){return typeof r=="number"&&Number.isInteger(r)&&!$c(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a0="";function LC(r){let t="";for(let n=0;n<r.length;n++)t.length>0&&(t=Bv(t)),t=zC(r.get(n),t);return Bv(t)}function zC(r,t){let n=t;const s=r.length;for(let o=0;o<s;o++){const u=r.charAt(o);switch(u){case"\0":n+="";break;case a0:n+="";break;default:n+=u}}return n}function Bv(r){return r+a0+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qv(r){let t=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t++;return t}function Kr(r,t){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t(n,r[n])}function o0(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t,n){this.comparator=t,this.root=n||je.EMPTY}insert(t,n){return new re(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,je.BLACK,null,null))}remove(t){return new re(this.comparator,this.root.remove(t,this.comparator).copy(null,null,je.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(t,s.key);if(o===0)return n+s.left.size;o<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new wc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new wc(this.root,t,this.comparator,!1)}getReverseIterator(){return new wc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new wc(this.root,t,this.comparator,!0)}}class wc{constructor(t,n,s,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!t.isEmpty();)if(u=n?s(t.key,n):1,n&&o&&(u*=-1),u<0)t=this.isReverse?t.left:t.right;else{if(u===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class je{constructor(t,n,s,o,u){this.key=t,this.value=n,this.color=s??je.RED,this.left=o??je.EMPTY,this.right=u??je.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,o,u){return new je(t??this.key,n??this.value,s??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let o=this;const u=s(t,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(t,n,s),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(t,n,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return je.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,o=this;if(n(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(t,o.key)===0){if(o.right.isEmpty())return je.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _t(43730,{key:this.key,value:this.value});if(this.right.isRed())throw _t(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw _t(27949);return t+(this.isRed()?0:1)}}je.EMPTY=null,je.RED=!0,je.BLACK=!1;je.EMPTY=new class{constructor(){this.size=0}get key(){throw _t(57766)}get value(){throw _t(16141)}get color(){throw _t(16727)}get left(){throw _t(29726)}get right(){throw _t(36894)}copy(t,n,s,o,u){return this}insert(t,n,s){return new je(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(t){this.comparator=t,this.data=new re(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,t[1])>=0)return;n(o.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Hv(this.data.getIterator())}getIteratorFrom(t){return new Hv(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof Re)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Re(this.comparator);return n.data=t,n}}class Hv{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(t){this.fields=t,t.sort(Be.comparator)}static empty(){return new pn([])}unionWith(t){let n=new Re(Be.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new pn(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return $a(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new l0("Invalid base64 string: "+u):u}}(t);return new qe(n)}static fromUint8Array(t){const n=function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u}(t);return new qe(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Ct(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}qe.EMPTY_BYTE_STRING=new qe("");const jC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zr(r){if(Ht(!!r,39018),typeof r=="string"){let t=0;const n=jC.exec(r);if(Ht(!!n,46558,{timestamp:r}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),t=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:fe(r.seconds),nanos:fe(r.nanos)}}function fe(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function jr(r){return typeof r=="string"?qe.fromBase64String(r):qe.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0="server_timestamp",c0="__type__",h0="__previous_value__",f0="__local_write_time__";function Gm(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[c0])===null||n===void 0?void 0:n.stringValue)===u0}function yh(r){const t=r.mapValue.fields[h0];return Gm(t)?yh(t):t}function kl(r){const t=zr(r.mapValue.fields[f0].timestampValue);return new be(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(t,n,s,o,u,f,m,p,y){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=m,this.longPollingOptions=p,this.useFetchStreams=y}}const Zc="(default)";class xl{constructor(t,n){this.projectId=t,this.database=n||Zc}static empty(){return new xl("","")}get isDefaultDatabase(){return this.database===Zc}isEqual(t){return t instanceof xl&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0="__type__",qC="__max__",bc={mapValue:{}},m0="__vector__",Wc="value";function Br(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Gm(r)?4:FC(r)?9007199254740991:HC(r)?10:11:_t(28295,{value:r})}function yi(r,t){if(r===t)return!0;const n=Br(r);if(n!==Br(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return kl(r).isEqual(kl(t));case 3:return function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=zr(o.timestampValue),m=zr(u.timestampValue);return f.seconds===m.seconds&&f.nanos===m.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(o,u){return jr(o.bytesValue).isEqual(jr(u.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(o,u){return fe(o.geoPointValue.latitude)===fe(u.geoPointValue.latitude)&&fe(o.geoPointValue.longitude)===fe(u.geoPointValue.longitude)}(r,t);case 2:return function(o,u){if("integerValue"in o&&"integerValue"in u)return fe(o.integerValue)===fe(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=fe(o.doubleValue),m=fe(u.doubleValue);return f===m?$c(f)===$c(m):isNaN(f)&&isNaN(m)}return!1}(r,t);case 9:return $a(r.arrayValue.values||[],t.arrayValue.values||[],yi);case 10:case 11:return function(o,u){const f=o.mapValue.fields||{},m=u.mapValue.fields||{};if(qv(f)!==qv(m))return!1;for(const p in f)if(f.hasOwnProperty(p)&&(m[p]===void 0||!yi(f[p],m[p])))return!1;return!0}(r,t);default:return _t(52216,{left:r})}}function Ul(r,t){return(r.values||[]).find(n=>yi(n,t))!==void 0}function Za(r,t){if(r===t)return 0;const n=Br(r),s=Br(t);if(n!==s)return Ct(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ct(r.booleanValue,t.booleanValue);case 2:return function(u,f){const m=fe(u.integerValue||u.doubleValue),p=fe(f.integerValue||f.doubleValue);return m<p?-1:m>p?1:m===p?0:isNaN(m)?isNaN(p)?0:-1:1}(r,t);case 3:return Fv(r.timestampValue,t.timestampValue);case 4:return Fv(kl(r),kl(t));case 5:return um(r.stringValue,t.stringValue);case 6:return function(u,f){const m=jr(u),p=jr(f);return m.compareTo(p)}(r.bytesValue,t.bytesValue);case 7:return function(u,f){const m=u.split("/"),p=f.split("/");for(let y=0;y<m.length&&y<p.length;y++){const E=Ct(m[y],p[y]);if(E!==0)return E}return Ct(m.length,p.length)}(r.referenceValue,t.referenceValue);case 8:return function(u,f){const m=Ct(fe(u.latitude),fe(f.latitude));return m!==0?m:Ct(fe(u.longitude),fe(f.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return Gv(r.arrayValue,t.arrayValue);case 10:return function(u,f){var m,p,y,E;const S=u.fields||{},C=f.fields||{},B=(m=S[Wc])===null||m===void 0?void 0:m.arrayValue,$=(p=C[Wc])===null||p===void 0?void 0:p.arrayValue,et=Ct(((y=B==null?void 0:B.values)===null||y===void 0?void 0:y.length)||0,((E=$==null?void 0:$.values)===null||E===void 0?void 0:E.length)||0);return et!==0?et:Gv(B,$)}(r.mapValue,t.mapValue);case 11:return function(u,f){if(u===bc.mapValue&&f===bc.mapValue)return 0;if(u===bc.mapValue)return 1;if(f===bc.mapValue)return-1;const m=u.fields||{},p=Object.keys(m),y=f.fields||{},E=Object.keys(y);p.sort(),E.sort();for(let S=0;S<p.length&&S<E.length;++S){const C=um(p[S],E[S]);if(C!==0)return C;const B=Za(m[p[S]],y[E[S]]);if(B!==0)return B}return Ct(p.length,E.length)}(r.mapValue,t.mapValue);default:throw _t(23264,{Pe:n})}}function Fv(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return Ct(r,t);const n=zr(r),s=zr(t),o=Ct(n.seconds,s.seconds);return o!==0?o:Ct(n.nanos,s.nanos)}function Gv(r,t){const n=r.values||[],s=t.values||[];for(let o=0;o<n.length&&o<s.length;++o){const u=Za(n[o],s[o]);if(u)return u}return Ct(n.length,s.length)}function Wa(r){return cm(r)}function cm(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(n){const s=zr(n);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(n){return jr(n).toBase64()}(r.bytesValue):"referenceValue"in r?function(n){return ft.fromName(n).toString()}(r.referenceValue):"geoPointValue"in r?function(n){return`geo(${n.latitude},${n.longitude})`}(r.geoPointValue):"arrayValue"in r?function(n){let s="[",o=!0;for(const u of n.values||[])o?o=!1:s+=",",s+=cm(u);return s+"]"}(r.arrayValue):"mapValue"in r?function(n){const s=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const f of s)u?u=!1:o+=",",o+=`${f}:${cm(n.fields[f])}`;return o+"}"}(r.mapValue):_t(61005,{value:r})}function Pc(r){switch(Br(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=yh(r);return t?16+Pc(t):16;case 5:return 2*r.stringValue.length;case 6:return jr(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,u)=>o+Pc(u),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return Kr(s.fields,(u,f)=>{o+=u.length+Pc(f)}),o}(r.mapValue);default:throw _t(13486,{value:r})}}function Kv(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function hm(r){return!!r&&"integerValue"in r}function Km(r){return!!r&&"arrayValue"in r}function Qv(r){return!!r&&"nullValue"in r}function Yv(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function kc(r){return!!r&&"mapValue"in r}function HC(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{})[d0])===null||n===void 0?void 0:n.stringValue)===m0}function Il(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return Kr(r.mapValue.fields,(n,s)=>t.mapValue.fields[n]=Il(s)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Il(r.arrayValue.values[n]);return t}return Object.assign({},r)}function FC(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===qC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(t){this.value=t}static empty(){return new sn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!kc(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Il(n)}setAll(t){let n=Be.emptyPath(),s={},o=[];t.forEach((f,m)=>{if(!n.isImmediateParentOf(m)){const p=this.getFieldsMap(n);this.applyChanges(p,s,o),s={},o=[],n=m.popLast()}f?s[m.lastSegment()]=Il(f):o.push(m.lastSegment())});const u=this.getFieldsMap(n);this.applyChanges(u,s,o)}delete(t){const n=this.field(t.popLast());kc(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return yi(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let o=n.mapValue.fields[t.get(s)];kc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=o),n=o}return n.mapValue.fields}applyChanges(t,n,s){Kr(n,(o,u)=>t[o]=u);for(const o of s)delete t[o]}clone(){return new sn(Il(this.value))}}function g0(r){const t=[];return Kr(r.fields,(n,s)=>{const o=new Be([n]);if(kc(s)){const u=g0(s.mapValue).fields;if(u.length===0)t.push(o);else for(const f of u)t.push(o.child(f))}else t.push(o)}),new pn(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(t,n,s,o,u,f,m){this.key=t,this.documentType=n,this.version=s,this.readTime=o,this.createTime=u,this.data=f,this.documentState=m}static newInvalidDocument(t){return new Ye(t,0,At.min(),At.min(),At.min(),sn.empty(),0)}static newFoundDocument(t,n,s,o){return new Ye(t,1,n,At.min(),s,o,0)}static newNoDocument(t,n){return new Ye(t,2,n,At.min(),At.min(),sn.empty(),0)}static newUnknownDocument(t,n){return new Ye(t,3,n,At.min(),At.min(),sn.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(At.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=sn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=sn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=At.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Ye&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ye(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(t,n){this.position=t,this.inclusive=n}}function Xv(r,t,n){let s=0;for(let o=0;o<r.position.length;o++){const u=t[o],f=r.position[o];if(u.field.isKeyField()?s=ft.comparator(ft.fromName(f.referenceValue),n.key):s=Za(f,n.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function $v(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!yi(r.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(t,n="asc"){this.field=t,this.dir=n}}function GC(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{}class _e extends p0{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new QC(t,n,s):n==="array-contains"?new $C(t,s):n==="in"?new ZC(t,s):n==="not-in"?new WC(t,s):n==="array-contains-any"?new JC(t,s):new _e(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new YC(t,s):new XC(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Za(n,this.value)):n!==null&&Br(this.value)===Br(n)&&this.matchesComparison(Za(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return _t(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Gn extends p0{constructor(t,n){super(),this.filters=t,this.op=n,this.Te=null}static create(t,n){return new Gn(t,n)}matches(t){return y0(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function y0(r){return r.op==="and"}function _0(r){return KC(r)&&y0(r)}function KC(r){for(const t of r.filters)if(t instanceof Gn)return!1;return!0}function fm(r){if(r instanceof _e)return r.field.canonicalString()+r.op.toString()+Wa(r.value);if(_0(r))return r.filters.map(t=>fm(t)).join(",");{const t=r.filters.map(n=>fm(n)).join(",");return`${r.op}(${t})`}}function v0(r,t){return r instanceof _e?function(s,o){return o instanceof _e&&s.op===o.op&&s.field.isEqual(o.field)&&yi(s.value,o.value)}(r,t):r instanceof Gn?function(s,o){return o instanceof Gn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((u,f,m)=>u&&v0(f,o.filters[m]),!0):!1}(r,t):void _t(19439)}function E0(r){return r instanceof _e?function(n){return`${n.field.canonicalString()} ${n.op} ${Wa(n.value)}`}(r):r instanceof Gn?function(n){return n.op.toString()+" {"+n.getFilters().map(E0).join(" ,")+"}"}(r):"Filter"}class QC extends _e{constructor(t,n,s){super(t,n,s),this.key=ft.fromName(s.referenceValue)}matches(t){const n=ft.comparator(t.key,this.key);return this.matchesComparison(n)}}class YC extends _e{constructor(t,n){super(t,"in",n),this.keys=T0("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class XC extends _e{constructor(t,n){super(t,"not-in",n),this.keys=T0("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function T0(r,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>ft.fromName(s.referenceValue))}class $C extends _e{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Km(n)&&Ul(n.arrayValue,this.value)}}class ZC extends _e{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Ul(this.value.arrayValue,n)}}class WC extends _e{constructor(t,n){super(t,"not-in",n)}matches(t){if(Ul(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ul(this.value.arrayValue,n)}}class JC extends _e{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Km(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ul(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD{constructor(t,n=null,s=[],o=[],u=null,f=null,m=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=o,this.limit=u,this.startAt=f,this.endAt=m,this.Ie=null}}function Zv(r,t=null,n=[],s=[],o=null,u=null,f=null){return new tD(r,t,n,s,o,u,f)}function Qm(r){const t=St(r);if(t.Ie===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>fm(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),ph(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Wa(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Wa(s)).join(",")),t.Ie=n}return t.Ie}function Ym(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!GC(r.orderBy[n],t.orderBy[n]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!v0(r.filters[n],t.filters[n]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!$v(r.startAt,t.startAt)&&$v(r.endAt,t.endAt)}function dm(r){return ft.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(t,n=null,s=[],o=[],u=null,f="F",m=null,p=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=u,this.limitType=f,this.startAt=m,this.endAt=p,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function eD(r,t,n,s,o,u,f,m){return new Gl(r,t,n,s,o,u,f,m)}function A0(r){return new Gl(r)}function Wv(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function S0(r){return r.collectionGroup!==null}function Cl(r){const t=St(r);if(t.Ee===null){t.Ee=[];const n=new Set;for(const u of t.explicitOrderBy)t.Ee.push(u),n.add(u.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(f){let m=new Re(Be.comparator);return f.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(m=m.add(y.field))})}),m})(t).forEach(u=>{n.has(u.canonicalString())||u.isKeyField()||t.Ee.push(new th(u,s))}),n.has(Be.keyField().canonicalString())||t.Ee.push(new th(Be.keyField(),s))}return t.Ee}function mi(r){const t=St(r);return t.de||(t.de=nD(t,Cl(r))),t.de}function nD(r,t){if(r.limitType==="F")return Zv(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(o=>{const u=o.dir==="desc"?"asc":"desc";return new th(o.field,u)});const n=r.endAt?new Jc(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Jc(r.startAt.position,r.startAt.inclusive):null;return Zv(r.path,r.collectionGroup,t,r.filters,r.limit,n,s)}}function mm(r,t){const n=r.filters.concat([t]);return new Gl(r.path,r.collectionGroup,r.explicitOrderBy.slice(),n,r.limit,r.limitType,r.startAt,r.endAt)}function gm(r,t,n){return new Gl(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,n,r.startAt,r.endAt)}function _h(r,t){return Ym(mi(r),mi(t))&&r.limitType===t.limitType}function w0(r){return`${Qm(mi(r))}|lt:${r.limitType}`}function ja(r){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(o=>E0(o)).join(", ")}]`),ph(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(o=>function(f){return`${f.field.canonicalString()} (${f.dir})`}(o)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(o=>Wa(o)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(o=>Wa(o)).join(",")),`Target(${s})`}(mi(r))}; limitType=${r.limitType})`}function vh(r,t){return t.isFoundDocument()&&function(s,o){const u=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):ft.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(r,t)&&function(s,o){for(const u of Cl(s))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0}(r,t)&&function(s,o){for(const u of s.filters)if(!u.matches(o))return!1;return!0}(r,t)&&function(s,o){return!(s.startAt&&!function(f,m,p){const y=Xv(f,m,p);return f.inclusive?y<=0:y<0}(s.startAt,Cl(s),o)||s.endAt&&!function(f,m,p){const y=Xv(f,m,p);return f.inclusive?y>=0:y>0}(s.endAt,Cl(s),o))}(r,t)}function iD(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function b0(r){return(t,n)=>{let s=!1;for(const o of Cl(r)){const u=rD(o,t,n);if(u!==0)return u;s=s||o.field.isKeyField()}return 0}}function rD(r,t,n){const s=r.field.isKeyField()?ft.comparator(t.key,n.key):function(u,f,m){const p=f.data.field(u),y=m.data.field(u);return p!==null&&y!==null?Za(p,y):_t(42886)}(r.field,t,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return _t(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[o,u]of s)if(this.equalsFn(o,t))return u}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),o=this.inner[s];if(o===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],t))return void(o[u]=[t,n]);o.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return s.length===1?delete this.inner[n]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(t){Kr(this.inner,(n,s)=>{for(const[o,u]of s)t(o,u)})}isEmpty(){return o0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sD=new re(ft.comparator);function $i(){return sD}const R0=new re(ft.comparator);function Sl(...r){let t=R0;for(const n of r)t=t.insert(n.key,n);return t}function I0(r){let t=R0;return r.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function Vs(){return Dl()}function C0(){return Dl()}function Dl(){return new Gs(r=>r.toString(),(r,t)=>r.isEqual(t))}const aD=new re(ft.comparator),oD=new Re(ft.comparator);function Pt(...r){let t=oD;for(const n of r)t=t.add(n);return t}const lD=new Re(Ct);function uD(){return lD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:$c(t)?"-0":t}}function D0(r){return{integerValue:""+r}}function cD(r,t){return UC(t)?D0(t):Xm(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(){this._=void 0}}function hD(r,t,n){return r instanceof eh?function(o,u){const f={fields:{[c0]:{stringValue:u0},[f0]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Gm(u)&&(u=yh(u)),u&&(f.fields[h0]=u),{mapValue:f}}(n,t):r instanceof Ll?N0(r,t):r instanceof zl?M0(r,t):function(o,u){const f=O0(o,u),m=Jv(f)+Jv(o.Re);return hm(f)&&hm(o.Re)?D0(m):Xm(o.serializer,m)}(r,t)}function fD(r,t,n){return r instanceof Ll?N0(r,t):r instanceof zl?M0(r,t):n}function O0(r,t){return r instanceof nh?function(s){return hm(s)||function(u){return!!u&&"doubleValue"in u}(s)}(t)?t:{integerValue:0}:null}class eh extends Eh{}class Ll extends Eh{constructor(t){super(),this.elements=t}}function N0(r,t){const n=V0(t);for(const s of r.elements)n.some(o=>yi(o,s))||n.push(s);return{arrayValue:{values:n}}}class zl extends Eh{constructor(t){super(),this.elements=t}}function M0(r,t){let n=V0(t);for(const s of r.elements)n=n.filter(o=>!yi(o,s));return{arrayValue:{values:n}}}class nh extends Eh{constructor(t,n){super(),this.serializer=t,this.Re=n}}function Jv(r){return fe(r.integerValue||r.doubleValue)}function V0(r){return Km(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function dD(r,t){return r.field.isEqual(t.field)&&function(s,o){return s instanceof Ll&&o instanceof Ll||s instanceof zl&&o instanceof zl?$a(s.elements,o.elements,yi):s instanceof nh&&o instanceof nh?yi(s.Re,o.Re):s instanceof eh&&o instanceof eh}(r.transform,t.transform)}class mD{constructor(t,n){this.version=t,this.transformResults=n}}class qn{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new qn}static exists(t){return new qn(void 0,t)}static updateTime(t){return new qn(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function xc(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Th{}function P0(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new $m(r.key,qn.none()):new Kl(r.key,r.data,qn.none());{const n=r.data,s=sn.empty();let o=new Re(Be.comparator);for(let u of t.fields)if(!o.has(u)){let f=n.field(u);f===null&&u.length>1&&(u=u.popLast(),f=n.field(u)),f===null?s.delete(u):s.set(u,f),o=o.add(u)}return new Qr(r.key,s,new pn(o.toArray()),qn.none())}}function gD(r,t,n){r instanceof Kl?function(o,u,f){const m=o.value.clone(),p=eE(o.fieldTransforms,u,f.transformResults);m.setAll(p),u.convertToFoundDocument(f.version,m).setHasCommittedMutations()}(r,t,n):r instanceof Qr?function(o,u,f){if(!xc(o.precondition,u))return void u.convertToUnknownDocument(f.version);const m=eE(o.fieldTransforms,u,f.transformResults),p=u.data;p.setAll(k0(o)),p.setAll(m),u.convertToFoundDocument(f.version,p).setHasCommittedMutations()}(r,t,n):function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()}(0,t,n)}function Ol(r,t,n,s){return r instanceof Kl?function(u,f,m,p){if(!xc(u.precondition,f))return m;const y=u.value.clone(),E=nE(u.fieldTransforms,p,f);return y.setAll(E),f.convertToFoundDocument(f.version,y).setHasLocalMutations(),null}(r,t,n,s):r instanceof Qr?function(u,f,m,p){if(!xc(u.precondition,f))return m;const y=nE(u.fieldTransforms,p,f),E=f.data;return E.setAll(k0(u)),E.setAll(y),f.convertToFoundDocument(f.version,E).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(S=>S.field))}(r,t,n,s):function(u,f,m){return xc(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):m}(r,t,n)}function pD(r,t){let n=null;for(const s of r.fieldTransforms){const o=t.data.field(s.field),u=O0(s.transform,o||null);u!=null&&(n===null&&(n=sn.empty()),n.set(s.field,u))}return n||null}function tE(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&$a(s,o,(u,f)=>dD(u,f))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Kl extends Th{constructor(t,n,s,o=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Qr extends Th{constructor(t,n,s,o,u=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function k0(r){const t=new Map;return r.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=r.data.field(n);t.set(n,s)}}),t}function eE(r,t,n){const s=new Map;Ht(r.length===n.length,32656,{Ve:n.length,me:r.length});for(let o=0;o<n.length;o++){const u=r[o],f=u.transform,m=t.data.field(u.field);s.set(u.field,fD(f,m,n[o]))}return s}function nE(r,t,n){const s=new Map;for(const o of r){const u=o.transform,f=n.data.field(o.field);s.set(o.field,hD(u,f,t))}return s}class $m extends Th{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yD extends Th{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _D{constructor(t,n,s,o){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(t.key)&&gD(u,t,s[o])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=Ol(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=Ol(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=C0();return this.mutations.forEach(o=>{const u=t.get(o.key),f=u.overlayedDocument;let m=this.applyToLocalView(f,u.mutatedFields);m=n.has(o.key)?null:m;const p=P0(f,m);p!==null&&s.set(o.key,p),f.isValidDocument()||f.convertToNoDocument(At.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Pt())}isEqual(t){return this.batchId===t.batchId&&$a(this.mutations,t.mutations,(n,s)=>tE(n,s))&&$a(this.baseMutations,t.baseMutations,(n,s)=>tE(n,s))}}class Zm{constructor(t,n,s,o){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=o}static from(t,n,s){Ht(t.mutations.length===s.length,58842,{fe:t.mutations.length,ge:s.length});let o=function(){return aD}();const u=t.mutations;for(let f=0;f<u.length;f++)o=o.insert(u[f].key,s[f].version);return new Zm(t,n,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vD{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ED{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye,Lt;function TD(r){switch(r){case X.OK:return _t(64938);case X.CANCELLED:case X.UNKNOWN:case X.DEADLINE_EXCEEDED:case X.RESOURCE_EXHAUSTED:case X.INTERNAL:case X.UNAVAILABLE:case X.UNAUTHENTICATED:return!1;case X.INVALID_ARGUMENT:case X.NOT_FOUND:case X.ALREADY_EXISTS:case X.PERMISSION_DENIED:case X.FAILED_PRECONDITION:case X.ABORTED:case X.OUT_OF_RANGE:case X.UNIMPLEMENTED:case X.DATA_LOSS:return!0;default:return _t(15467,{code:r})}}function x0(r){if(r===void 0)return Xi("GRPC error has no .code"),X.UNKNOWN;switch(r){case ye.OK:return X.OK;case ye.CANCELLED:return X.CANCELLED;case ye.UNKNOWN:return X.UNKNOWN;case ye.DEADLINE_EXCEEDED:return X.DEADLINE_EXCEEDED;case ye.RESOURCE_EXHAUSTED:return X.RESOURCE_EXHAUSTED;case ye.INTERNAL:return X.INTERNAL;case ye.UNAVAILABLE:return X.UNAVAILABLE;case ye.UNAUTHENTICATED:return X.UNAUTHENTICATED;case ye.INVALID_ARGUMENT:return X.INVALID_ARGUMENT;case ye.NOT_FOUND:return X.NOT_FOUND;case ye.ALREADY_EXISTS:return X.ALREADY_EXISTS;case ye.PERMISSION_DENIED:return X.PERMISSION_DENIED;case ye.FAILED_PRECONDITION:return X.FAILED_PRECONDITION;case ye.ABORTED:return X.ABORTED;case ye.OUT_OF_RANGE:return X.OUT_OF_RANGE;case ye.UNIMPLEMENTED:return X.UNIMPLEMENTED;case ye.DATA_LOSS:return X.DATA_LOSS;default:return _t(39323,{code:r})}}(Lt=ye||(ye={}))[Lt.OK=0]="OK",Lt[Lt.CANCELLED=1]="CANCELLED",Lt[Lt.UNKNOWN=2]="UNKNOWN",Lt[Lt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Lt[Lt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Lt[Lt.NOT_FOUND=5]="NOT_FOUND",Lt[Lt.ALREADY_EXISTS=6]="ALREADY_EXISTS",Lt[Lt.PERMISSION_DENIED=7]="PERMISSION_DENIED",Lt[Lt.UNAUTHENTICATED=16]="UNAUTHENTICATED",Lt[Lt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Lt[Lt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Lt[Lt.ABORTED=10]="ABORTED",Lt[Lt.OUT_OF_RANGE=11]="OUT_OF_RANGE",Lt[Lt.UNIMPLEMENTED=12]="UNIMPLEMENTED",Lt[Lt.INTERNAL=13]="INTERNAL",Lt[Lt.UNAVAILABLE=14]="UNAVAILABLE",Lt[Lt.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AD=new Pr([4294967295,4294967295],0);function iE(r){const t=r0().encode(r),n=new $T;return n.update(t),new Uint8Array(n.digest())}function rE(r){const t=new DataView(r.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),o=t.getUint32(8,!0),u=t.getUint32(12,!0);return[new Pr([n,s],0),new Pr([o,u],0)]}class Wm{constructor(t,n,s){if(this.bitmap=t,this.padding=n,this.hashCount=s,n<0||n>=8)throw new wl(`Invalid padding: ${n}`);if(s<0)throw new wl(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new wl(`Invalid hash count: ${s}`);if(t.length===0&&n!==0)throw new wl(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*t.length-n,this.ye=Pr.fromNumber(this.pe)}we(t,n,s){let o=t.add(n.multiply(Pr.fromNumber(s)));return o.compare(AD)===1&&(o=new Pr([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ye).toNumber()}be(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.pe===0)return!1;const n=iE(t),[s,o]=rE(n);for(let u=0;u<this.hashCount;u++){const f=this.we(s,o,u);if(!this.be(f))return!1}return!0}static create(t,n,s){const o=t%8==0?0:8-t%8,u=new Uint8Array(Math.ceil(t/8)),f=new Wm(u,o,n);return s.forEach(m=>f.insert(m)),f}insert(t){if(this.pe===0)return;const n=iE(t),[s,o]=rE(n);for(let u=0;u<this.hashCount;u++){const f=this.we(s,o,u);this.Se(f)}}Se(t){const n=Math.floor(t/8),s=t%8;this.bitmap[n]|=1<<s}}class wl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(t,n,s,o,u){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const o=new Map;return o.set(t,Ql.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new Ah(At.min(),o,new re(Ct),$i(),Pt())}}class Ql{constructor(t,n,s,o,u){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new Ql(s,n,Pt(),Pt(),Pt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(t,n,s,o){this.De=t,this.removedTargetIds=n,this.key=s,this.ve=o}}class U0{constructor(t,n){this.targetId=t,this.Ce=n}}class L0{constructor(t,n,s=qe.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=o}}class sE{constructor(){this.Fe=0,this.Me=aE(),this.xe=qe.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(t){t.approximateByteSize()>0&&(this.Ne=!0,this.xe=t)}qe(){let t=Pt(),n=Pt(),s=Pt();return this.Me.forEach((o,u)=>{switch(u){case 0:t=t.add(o);break;case 2:n=n.add(o);break;case 1:s=s.add(o);break;default:_t(38017,{changeType:u})}}),new Ql(this.xe,this.Oe,t,n,s)}Qe(){this.Ne=!1,this.Me=aE()}$e(t,n){this.Ne=!0,this.Me=this.Me.insert(t,n)}Ue(t){this.Ne=!0,this.Me=this.Me.remove(t)}Ke(){this.Fe+=1}We(){this.Fe-=1,Ht(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class SD{constructor(t){this.ze=t,this.je=new Map,this.He=$i(),this.Je=Rc(),this.Ye=Rc(),this.Ze=new re(Ct)}Xe(t){for(const n of t.De)t.ve&&t.ve.isFoundDocument()?this.et(n,t.ve):this.tt(n,t.key,t.ve);for(const n of t.removedTargetIds)this.tt(n,t.key,t.ve)}nt(t){this.forEachTarget(t,n=>{const s=this.rt(n);switch(t.state){case 0:this.it(n)&&s.ke(t.resumeToken);break;case 1:s.We(),s.Be||s.Qe(),s.ke(t.resumeToken);break;case 2:s.We(),s.Be||this.removeTarget(n);break;case 3:this.it(n)&&(s.Ge(),s.ke(t.resumeToken));break;case 4:this.it(n)&&(this.st(n),s.ke(t.resumeToken));break;default:_t(56790,{state:t.state})}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.je.forEach((s,o)=>{this.it(o)&&n(o)})}ot(t){const n=t.targetId,s=t.Ce.count,o=this._t(n);if(o){const u=o.target;if(dm(u))if(s===0){const f=new ft(u.path);this.tt(n,f,Ye.newNoDocument(f,At.min()))}else Ht(s===1,20013,{expectedCount:s});else{const f=this.ut(n);if(f!==s){const m=this.ct(t),p=m?this.lt(m,t,f):1;if(p!==0){this.st(n);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,y)}}}}}ct(t){const n=t.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:u=0}=n;let f,m;try{f=jr(s).toUint8Array()}catch(p){if(p instanceof l0)return Xa("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{m=new Wm(f,o,u)}catch(p){return Xa(p instanceof wl?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return m.pe===0?null:m}lt(t,n,s){return n.Ce.count===s-this.Tt(t,n.targetId)?0:2}Tt(t,n){const s=this.ze.getRemoteKeysForTarget(n);let o=0;return s.forEach(u=>{const f=this.ze.Pt(),m=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;t.mightContain(m)||(this.tt(n,u,null),o++)}),o}It(t){const n=new Map;this.je.forEach((u,f)=>{const m=this._t(f);if(m){if(u.current&&dm(m.target)){const p=new ft(m.target.path);this.Et(p).has(f)||this.dt(f,p)||this.tt(f,p,Ye.newNoDocument(p,t))}u.Le&&(n.set(f,u.qe()),u.Qe())}});let s=Pt();this.Ye.forEach((u,f)=>{let m=!0;f.forEachWhile(p=>{const y=this._t(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.He.forEach((u,f)=>f.setReadTime(t));const o=new Ah(t,n,this.Ze,this.He,s);return this.He=$i(),this.Je=Rc(),this.Ye=Rc(),this.Ze=new re(Ct),o}et(t,n){if(!this.it(t))return;const s=this.dt(t,n.key)?2:0;this.rt(t).$e(n.key,s),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(t)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(t))}tt(t,n,s){if(!this.it(t))return;const o=this.rt(t);this.dt(t,n)?o.$e(n,1):o.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(t)),this.Ye=this.Ye.insert(n,this.At(n).add(t)),s&&(this.He=this.He.insert(n,s))}removeTarget(t){this.je.delete(t)}ut(t){const n=this.rt(t).qe();return this.ze.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ke(t){this.rt(t).Ke()}rt(t){let n=this.je.get(t);return n||(n=new sE,this.je.set(t,n)),n}At(t){let n=this.Ye.get(t);return n||(n=new Re(Ct),this.Ye=this.Ye.insert(t,n)),n}Et(t){let n=this.Je.get(t);return n||(n=new Re(Ct),this.Je=this.Je.insert(t,n)),n}it(t){const n=this._t(t)!==null;return n||st("WatchChangeAggregator","Detected inactive target",t),n}_t(t){const n=this.je.get(t);return n&&n.Be?null:this.ze.Rt(t)}st(t){this.je.set(t,new sE),this.ze.getRemoteKeysForTarget(t).forEach(n=>{this.tt(t,n,null)})}dt(t,n){return this.ze.getRemoteKeysForTarget(t).has(n)}}function Rc(){return new re(ft.comparator)}function aE(){return new re(ft.comparator)}const wD={asc:"ASCENDING",desc:"DESCENDING"},bD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},RD={and:"AND",or:"OR"};class ID{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function pm(r,t){return r.useProto3Json||ph(t)?t:{value:t}}function ih(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function z0(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function CD(r,t){return ih(r,t.toTimestamp())}function gi(r){return Ht(!!r,49232),At.fromTimestamp(function(n){const s=zr(n);return new be(s.seconds,s.nanos)}(r))}function Jm(r,t){return ym(r,t).canonicalString()}function ym(r,t){const n=function(o){return new te(["projects",o.projectId,"databases",o.database])}(r).child("documents");return t===void 0?n:n.child(t)}function j0(r){const t=te.fromString(r);return Ht(G0(t),10190,{key:t.toString()}),t}function _m(r,t){return Jm(r.databaseId,t.path)}function Yd(r,t){const n=j0(t);if(n.get(1)!==r.databaseId.projectId)throw new ot(X.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new ot(X.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new ft(q0(n))}function B0(r,t){return Jm(r.databaseId,t)}function DD(r){const t=j0(r);return t.length===4?te.emptyPath():q0(t)}function vm(r){return new te(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function q0(r){return Ht(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function oE(r,t,n){return{name:_m(r,t),fields:n.value.mapValue.fields}}function OD(r,t){let n;if("targetChange"in t){t.targetChange;const s=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:_t(39313,{state:y})}(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],u=function(y,E){return y.useProto3Json?(Ht(E===void 0||typeof E=="string",58123),qe.fromBase64String(E||"")):(Ht(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),qe.fromUint8Array(E||new Uint8Array))}(r,t.targetChange.resumeToken),f=t.targetChange.cause,m=f&&function(y){const E=y.code===void 0?X.UNKNOWN:x0(y.code);return new ot(E,y.message||"")}(f);n=new L0(s,o,u,m||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const o=Yd(r,s.document.name),u=gi(s.document.updateTime),f=s.document.createTime?gi(s.document.createTime):At.min(),m=new sn({mapValue:{fields:s.document.fields}}),p=Ye.newFoundDocument(o,u,f,m),y=s.targetIds||[],E=s.removedTargetIds||[];n=new Uc(y,E,p.key,p)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const o=Yd(r,s.document),u=s.readTime?gi(s.readTime):At.min(),f=Ye.newNoDocument(o,u),m=s.removedTargetIds||[];n=new Uc([],m,f.key,f)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const o=Yd(r,s.document),u=s.removedTargetIds||[];n=new Uc([],u,o,null)}else{if(!("filter"in t))return _t(11601,{Vt:t});{t.filter;const s=t.filter;s.targetId;const{count:o=0,unchangedNames:u}=s,f=new ED(o,u),m=s.targetId;n=new U0(m,f)}}return n}function ND(r,t){let n;if(t instanceof Kl)n={update:oE(r,t.key,t.value)};else if(t instanceof $m)n={delete:_m(r,t.key)};else if(t instanceof Qr)n={update:oE(r,t.key,t.data),updateMask:jD(t.fieldMask)};else{if(!(t instanceof yD))return _t(16599,{ft:t.type});n={verify:_m(r,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(u,f){const m=f.transform;if(m instanceof eh)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof Ll)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof zl)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof nh)return{fieldPath:f.field.canonicalString(),increment:m.Re};throw _t(20930,{transform:f.transform})}(0,s))),t.precondition.isNone||(n.currentDocument=function(o,u){return u.updateTime!==void 0?{updateTime:CD(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:_t(27497)}(r,t.precondition)),n}function MD(r,t){return r&&r.length>0?(Ht(t!==void 0,14353),r.map(n=>function(o,u){let f=o.updateTime?gi(o.updateTime):gi(u);return f.isEqual(At.min())&&(f=gi(u)),new mD(f,o.transformResults||[])}(n,t))):[]}function VD(r,t){return{documents:[B0(r,t.path)]}}function PD(r,t){const n={structuredQuery:{}},s=t.path;let o;t.collectionGroup!==null?(o=s,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=B0(r,o);const u=function(y){if(y.length!==0)return F0(Gn.create(y,"and"))}(t.filters);u&&(n.structuredQuery.where=u);const f=function(y){if(y.length!==0)return y.map(E=>function(C){return{field:Ba(C.field),direction:UD(C.dir)}}(E))}(t.orderBy);f&&(n.structuredQuery.orderBy=f);const m=pm(r,t.limit);return m!==null&&(n.structuredQuery.limit=m),t.startAt&&(n.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(t.endAt)),{gt:n,parent:o}}function kD(r){let t=DD(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let o=null;if(s>0){Ht(s===1,65062);const E=n.from[0];E.allDescendants?o=E.collectionId:t=t.child(E.collectionId)}let u=[];n.where&&(u=function(S){const C=H0(S);return C instanceof Gn&&_0(C)?C.getFilters():[C]}(n.where));let f=[];n.orderBy&&(f=function(S){return S.map(C=>function($){return new th(qa($.field),function(W){switch(W){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}($.direction))}(C))}(n.orderBy));let m=null;n.limit&&(m=function(S){let C;return C=typeof S=="object"?S.value:S,ph(C)?null:C}(n.limit));let p=null;n.startAt&&(p=function(S){const C=!!S.before,B=S.values||[];return new Jc(B,C)}(n.startAt));let y=null;return n.endAt&&(y=function(S){const C=!S.before,B=S.values||[];return new Jc(B,C)}(n.endAt)),eD(t,o,f,u,m,"F",p,y)}function xD(r,t){const n=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _t(28987,{purpose:o})}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function H0(r){return r.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=qa(n.unaryFilter.field);return _e.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=qa(n.unaryFilter.field);return _e.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=qa(n.unaryFilter.field);return _e.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=qa(n.unaryFilter.field);return _e.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return _t(61313);default:return _t(60726)}}(r):r.fieldFilter!==void 0?function(n){return _e.create(qa(n.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return _t(58110);default:return _t(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(n){return Gn.create(n.compositeFilter.filters.map(s=>H0(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return _t(1026)}}(n.compositeFilter.op))}(r):_t(30097,{filter:r})}function UD(r){return wD[r]}function LD(r){return bD[r]}function zD(r){return RD[r]}function Ba(r){return{fieldPath:r.canonicalString()}}function qa(r){return Be.fromServerFormat(r.fieldPath)}function F0(r){return r instanceof _e?function(n){if(n.op==="=="){if(Yv(n.value))return{unaryFilter:{field:Ba(n.field),op:"IS_NAN"}};if(Qv(n.value))return{unaryFilter:{field:Ba(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Yv(n.value))return{unaryFilter:{field:Ba(n.field),op:"IS_NOT_NAN"}};if(Qv(n.value))return{unaryFilter:{field:Ba(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ba(n.field),op:LD(n.op),value:n.value}}}(r):r instanceof Gn?function(n){const s=n.getFilters().map(o=>F0(o));return s.length===1?s[0]:{compositeFilter:{op:zD(n.op),filters:s}}}(r):_t(54877,{filter:r})}function jD(r){const t=[];return r.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function G0(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(t,n,s,o,u=At.min(),f=At.min(),m=qe.EMPTY_BYTE_STRING,p=null){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=m,this.expectedCount=p}withSequenceNumber(t){return new Nr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{constructor(t){this.wt=t}}function qD(r){const t=kD({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?gm(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HD{constructor(){this.yn=new FD}addToCollectionParentIndex(t,n){return this.yn.add(n),Y.resolve()}getCollectionParents(t,n){return Y.resolve(this.yn.getEntries(n))}addFieldIndex(t,n){return Y.resolve()}deleteFieldIndex(t,n){return Y.resolve()}deleteAllFieldIndexes(t){return Y.resolve()}createTargetIndexes(t,n){return Y.resolve()}getDocumentsMatchingTarget(t,n){return Y.resolve(null)}getIndexType(t,n){return Y.resolve(0)}getFieldIndexes(t,n){return Y.resolve([])}getNextCollectionGroupToUpdate(t){return Y.resolve(null)}getMinOffset(t,n){return Y.resolve(Lr.min())}getMinOffsetFromCollectionGroup(t,n){return Y.resolve(Lr.min())}updateCollectionGroup(t,n,s){return Y.resolve()}updateIndexEntries(t,n){return Y.resolve()}}class FD{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n]||new Re(te.comparator),u=!o.has(s);return this.index[n]=o.add(s),u}has(t){const n=t.lastSegment(),s=t.popLast(),o=this.index[n];return o&&o.has(s)}getEntries(t){return(this.index[t]||new Re(te.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},K0=41943040;class rn{static withCacheSize(t){return new rn(t,rn.DEFAULT_COLLECTION_PERCENTILE,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,s){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rn.DEFAULT_COLLECTION_PERCENTILE=10,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,rn.DEFAULT=new rn(K0,rn.DEFAULT_COLLECTION_PERCENTILE,rn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),rn.DISABLED=new rn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(t){this.nr=t}next(){return this.nr+=2,this.nr}static rr(){return new Ja(0)}static ir(){return new Ja(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE="LruGarbageCollector",GD=1048576;function cE([r,t],[n,s]){const o=Ct(r,n);return o===0?Ct(t,s):o}class KD{constructor(t){this.cr=t,this.buffer=new Re(cE),this.lr=0}hr(){return++this.lr}Pr(t){const n=[t,this.hr()];if(this.buffer.size<this.cr)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();cE(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class QD{constructor(t,n,s){this.garbageCollector=t,this.asyncQueue=n,this.localStore=s,this.Tr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ir(6e4)}stop(){this.Tr&&(this.Tr.cancel(),this.Tr=null)}get started(){return this.Tr!==null}Ir(t){st(uE,`Garbage collection scheduled in ${t}ms`),this.Tr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Tr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ao(n)?st(uE,"Ignoring IndexedDB error during garbage collection: ",n):await so(n)}await this.Ir(3e5)})}}class YD{constructor(t,n){this.Er=t,this.params=n}calculateTargetCount(t,n){return this.Er.dr(t).next(s=>Math.floor(n/100*s))}nthSequenceNumber(t,n){if(n===0)return Y.resolve(gh.le);const s=new KD(n);return this.Er.forEachTarget(t,o=>s.Pr(o.sequenceNumber)).next(()=>this.Er.Ar(t,o=>s.Pr(o))).next(()=>s.maxValue)}removeTargets(t,n,s){return this.Er.removeTargets(t,n,s)}removeOrphanedDocuments(t,n){return this.Er.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(st("LruGarbageCollector","Garbage collection skipped; disabled"),Y.resolve(lE)):this.getCacheSize(t).next(s=>s<this.params.cacheSizeCollectionThreshold?(st("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),lE):this.Rr(t,n))}getCacheSize(t){return this.Er.getCacheSize(t)}Rr(t,n){let s,o,u,f,m,p,y;const E=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(S=>(S>this.params.maximumSequenceNumbersToCollect?(st("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),o=this.params.maximumSequenceNumbersToCollect):o=S,f=Date.now(),this.nthSequenceNumber(t,o))).next(S=>(s=S,m=Date.now(),this.removeTargets(t,s,n))).next(S=>(u=S,p=Date.now(),this.removeOrphanedDocuments(t,s))).next(S=>(y=Date.now(),za()<=Vt.DEBUG&&st("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-E}ms
	Determined least recently used ${o} in `+(m-f)+`ms
	Removed ${u} targets in `+(p-m)+`ms
	Removed ${S} documents in `+(y-p)+`ms
Total Duration: ${y-E}ms`),Y.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:S})))}}function XD(r,t){return new YD(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{constructor(){this.changes=new Gs(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Ye.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?Y.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZD{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WD{constructor(t,n,s,o){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=o}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(o=>(s=o,this.remoteDocumentCache.getEntry(t,n))).next(o=>(s!==null&&Ol(s.mutation,o,pn.empty(),be.now()),o))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,Pt()).next(()=>s))}getLocalViewOfDocuments(t,n,s=Pt()){const o=Vs();return this.populateOverlays(t,o,n).next(()=>this.computeViews(t,n,o,s).next(u=>{let f=Sl();return u.forEach((m,p)=>{f=f.insert(m,p.overlayedDocument)}),f}))}getOverlayedDocuments(t,n){const s=Vs();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,Pt()))}populateOverlays(t,n,s){const o=[];return s.forEach(u=>{n.has(u)||o.push(u)}),this.documentOverlayCache.getOverlays(t,o).next(u=>{u.forEach((f,m)=>{n.set(f,m)})})}computeViews(t,n,s,o){let u=$i();const f=Dl(),m=function(){return Dl()}();return n.forEach((p,y)=>{const E=s.get(y.key);o.has(y.key)&&(E===void 0||E.mutation instanceof Qr)?u=u.insert(y.key,y):E!==void 0?(f.set(y.key,E.mutation.getFieldMask()),Ol(E.mutation,y,E.mutation.getFieldMask(),be.now())):f.set(y.key,pn.empty())}),this.recalculateAndSaveOverlays(t,u).next(p=>(p.forEach((y,E)=>f.set(y,E)),n.forEach((y,E)=>{var S;return m.set(y,new ZD(E,(S=f.get(y))!==null&&S!==void 0?S:null))}),m))}recalculateAndSaveOverlays(t,n){const s=Dl();let o=new re((f,m)=>f-m),u=Pt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(f=>{for(const m of f)m.keys().forEach(p=>{const y=n.get(p);if(y===null)return;let E=s.get(p)||pn.empty();E=m.applyToLocalView(y,E),s.set(p,E);const S=(o.get(m.batchId)||Pt()).add(p);o=o.insert(m.batchId,S)})}).next(()=>{const f=[],m=o.getReverseIterator();for(;m.hasNext();){const p=m.getNext(),y=p.key,E=p.value,S=C0();E.forEach(C=>{if(!u.has(C)){const B=P0(n.get(C),s.get(C));B!==null&&S.set(C,B),u=u.add(C)}}),f.push(this.documentOverlayCache.saveOverlays(t,y,S))}return Y.waitFor(f)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s,o){return function(f){return ft.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):S0(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s,o):this.getDocumentsMatchingCollectionQuery(t,n,s,o)}getNextDocuments(t,n,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,o).next(u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,o-u.size):Y.resolve(Vs());let m=Pl,p=u;return f.next(y=>Y.forEach(y,(E,S)=>(m<S.largestBatchId&&(m=S.largestBatchId),u.get(E)?Y.resolve():this.remoteDocumentCache.getEntry(t,E).next(C=>{p=p.insert(E,C)}))).next(()=>this.populateOverlays(t,y,u)).next(()=>this.computeViews(t,p,y,Pt())).next(E=>({batchId:m,changes:I0(E)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new ft(n)).next(s=>{let o=Sl();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(t,n,s,o){const u=n.collectionGroup;let f=Sl();return this.indexManager.getCollectionParents(t,u).next(m=>Y.forEach(m,p=>{const y=function(S,C){return new Gl(C,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)}(n,p.child(u));return this.getDocumentsMatchingCollectionQuery(t,y,s,o).next(E=>{E.forEach((S,C)=>{f=f.insert(S,C)})})}).next(()=>f))}getDocumentsMatchingCollectionQuery(t,n,s,o){let u;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,u,o))).next(f=>{u.forEach((p,y)=>{const E=y.getKey();f.get(E)===null&&(f=f.insert(E,Ye.newInvalidDocument(E)))});let m=Sl();return f.forEach((p,y)=>{const E=u.get(p);E!==void 0&&Ol(E.mutation,y,pn.empty(),be.now()),vh(n,y)&&(m=m.insert(p,y))}),m})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(t){this.serializer=t,this.Fr=new Map,this.Mr=new Map}getBundleMetadata(t,n){return Y.resolve(this.Fr.get(n))}saveBundleMetadata(t,n){return this.Fr.set(n.id,function(o){return{id:o.id,version:o.version,createTime:gi(o.createTime)}}(n)),Y.resolve()}getNamedQuery(t,n){return Y.resolve(this.Mr.get(n))}saveNamedQuery(t,n){return this.Mr.set(n.name,function(o){return{name:o.name,query:qD(o.bundledQuery),readTime:gi(o.readTime)}}(n)),Y.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{constructor(){this.overlays=new re(ft.comparator),this.Or=new Map}getOverlay(t,n){return Y.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Vs();return Y.forEach(n,o=>this.getOverlay(t,o).next(u=>{u!==null&&s.set(o,u)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((o,u)=>{this.St(t,n,u)}),Y.resolve()}removeOverlaysForBatchId(t,n,s){const o=this.Or.get(s);return o!==void 0&&(o.forEach(u=>this.overlays=this.overlays.remove(u)),this.Or.delete(s)),Y.resolve()}getOverlaysForCollection(t,n,s){const o=Vs(),u=n.length+1,f=new ft(n.child("")),m=this.overlays.getIteratorFrom(f);for(;m.hasNext();){const p=m.getNext().value,y=p.getKey();if(!n.isPrefixOf(y.path))break;y.path.length===u&&p.largestBatchId>s&&o.set(p.getKey(),p)}return Y.resolve(o)}getOverlaysForCollectionGroup(t,n,s,o){let u=new re((y,E)=>y-E);const f=this.overlays.getIterator();for(;f.hasNext();){const y=f.getNext().value;if(y.getKey().getCollectionGroup()===n&&y.largestBatchId>s){let E=u.get(y.largestBatchId);E===null&&(E=Vs(),u=u.insert(y.largestBatchId,E)),E.set(y.getKey(),y)}}const m=Vs(),p=u.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,E)=>m.set(y,E)),!(m.size()>=o)););return Y.resolve(m)}St(t,n,s){const o=this.overlays.get(s.key);if(o!==null){const f=this.Or.get(o.largestBatchId).delete(s.key);this.Or.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new vD(n,s));let u=this.Or.get(n);u===void 0&&(u=Pt(),this.Or.set(n,u)),this.Or.set(n,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(){this.sessionToken=qe.EMPTY_BYTE_STRING}getSessionToken(t){return Y.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,Y.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(){this.Nr=new Re(Ve.Br),this.Lr=new Re(Ve.kr)}isEmpty(){return this.Nr.isEmpty()}addReference(t,n){const s=new Ve(t,n);this.Nr=this.Nr.add(s),this.Lr=this.Lr.add(s)}qr(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.Qr(new Ve(t,n))}$r(t,n){t.forEach(s=>this.removeReference(s,n))}Ur(t){const n=new ft(new te([])),s=new Ve(n,t),o=new Ve(n,t+1),u=[];return this.Lr.forEachInRange([s,o],f=>{this.Qr(f),u.push(f.key)}),u}Kr(){this.Nr.forEach(t=>this.Qr(t))}Qr(t){this.Nr=this.Nr.delete(t),this.Lr=this.Lr.delete(t)}Wr(t){const n=new ft(new te([])),s=new Ve(n,t),o=new Ve(n,t+1);let u=Pt();return this.Lr.forEachInRange([s,o],f=>{u=u.add(f.key)}),u}containsKey(t){const n=new Ve(t,0),s=this.Nr.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class Ve{constructor(t,n){this.key=t,this.Gr=n}static Br(t,n){return ft.comparator(t.key,n.key)||Ct(t.Gr,n.Gr)}static kr(t,n){return Ct(t.Gr,n.Gr)||ft.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.Jn=1,this.zr=new Re(Ve.Br)}checkEmpty(t){return Y.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,o){const u=this.Jn;this.Jn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new _D(u,n,s,o);this.mutationQueue.push(f);for(const m of o)this.zr=this.zr.add(new Ve(m.key,u)),this.indexManager.addToCollectionParentIndex(t,m.key.path.popLast());return Y.resolve(f)}lookupMutationBatch(t,n){return Y.resolve(this.jr(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,o=this.Hr(s),u=o<0?0:o;return Y.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return Y.resolve(this.mutationQueue.length===0?Fm:this.Jn-1)}getAllMutationBatches(t){return Y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new Ve(n,0),o=new Ve(n,Number.POSITIVE_INFINITY),u=[];return this.zr.forEachInRange([s,o],f=>{const m=this.jr(f.Gr);u.push(m)}),Y.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new Re(Ct);return n.forEach(o=>{const u=new Ve(o,0),f=new Ve(o,Number.POSITIVE_INFINITY);this.zr.forEachInRange([u,f],m=>{s=s.add(m.Gr)})}),Y.resolve(this.Jr(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,o=s.length+1;let u=s;ft.isDocumentKey(u)||(u=u.child(""));const f=new Ve(new ft(u),0);let m=new Re(Ct);return this.zr.forEachWhile(p=>{const y=p.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(m=m.add(p.Gr)),!0)},f),Y.resolve(this.Jr(m))}Jr(t){const n=[];return t.forEach(s=>{const o=this.jr(s);o!==null&&n.push(o)}),n}removeMutationBatch(t,n){Ht(this.Yr(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.zr;return Y.forEach(n.mutations,o=>{const u=new Ve(o.key,n.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)}).next(()=>{this.zr=s})}Xn(t){}containsKey(t,n){const s=new Ve(n,0),o=this.zr.firstAfterOrEqual(s);return Y.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,Y.resolve()}Yr(t,n){return this.Hr(t)}Hr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}jr(t){const n=this.Hr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{constructor(t){this.Zr=t,this.docs=function(){return new re(ft.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,o=this.docs.get(s),u=o?o.size:0,f=this.Zr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return Y.resolve(s?s.document.mutableCopy():Ye.newInvalidDocument(n))}getEntries(t,n){let s=$i();return n.forEach(o=>{const u=this.docs.get(o);s=s.insert(o,u?u.document.mutableCopy():Ye.newInvalidDocument(o))}),Y.resolve(s)}getDocumentsMatchingQuery(t,n,s,o){let u=$i();const f=n.path,m=new ft(f.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(m);for(;p.hasNext();){const{key:y,value:{document:E}}=p.getNext();if(!f.isPrefixOf(y.path))break;y.path.length>f.length+1||VC(MC(E),s)<=0||(o.has(E.key)||vh(n,E))&&(u=u.insert(E.key,E.mutableCopy()))}return Y.resolve(u)}getAllFromCollectionGroup(t,n,s,o){_t(9500)}Xr(t,n){return Y.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new r2(this)}getSize(t){return Y.resolve(this.size)}}class r2 extends $D{constructor(t){super(),this.vr=t}applyChanges(t){const n=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?n.push(this.vr.addEntry(t,o)):this.vr.removeEntry(s)}),Y.waitFor(n)}getFromCache(t,n){return this.vr.getEntry(t,n)}getAllFromCache(t,n){return this.vr.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(t){this.persistence=t,this.ei=new Gs(n=>Qm(n),Ym),this.lastRemoteSnapshotVersion=At.min(),this.highestTargetId=0,this.ti=0,this.ni=new tg,this.targetCount=0,this.ri=Ja.rr()}forEachTarget(t,n){return this.ei.forEach((s,o)=>n(o)),Y.resolve()}getLastRemoteSnapshotVersion(t){return Y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Y.resolve(this.ti)}allocateTargetId(t){return this.highestTargetId=this.ri.next(),Y.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.ti&&(this.ti=n),Y.resolve()}ar(t){this.ei.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.ri=new Ja(n),this.highestTargetId=n),t.sequenceNumber>this.ti&&(this.ti=t.sequenceNumber)}addTargetData(t,n){return this.ar(n),this.targetCount+=1,Y.resolve()}updateTargetData(t,n){return this.ar(n),Y.resolve()}removeTargetData(t,n){return this.ei.delete(n.target),this.ni.Ur(n.targetId),this.targetCount-=1,Y.resolve()}removeTargets(t,n,s){let o=0;const u=[];return this.ei.forEach((f,m)=>{m.sequenceNumber<=n&&s.get(m.targetId)===null&&(this.ei.delete(f),u.push(this.removeMatchingKeysForTargetId(t,m.targetId)),o++)}),Y.waitFor(u).next(()=>o)}getTargetCount(t){return Y.resolve(this.targetCount)}getTargetData(t,n){const s=this.ei.get(n)||null;return Y.resolve(s)}addMatchingKeys(t,n,s){return this.ni.qr(n,s),Y.resolve()}removeMatchingKeys(t,n,s){this.ni.$r(n,s);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach(f=>{u.push(o.markPotentiallyOrphaned(t,f))}),Y.waitFor(u)}removeMatchingKeysForTargetId(t,n){return this.ni.Ur(n),Y.resolve()}getMatchingKeysForTargetId(t,n){const s=this.ni.Wr(n);return Y.resolve(s)}containsKey(t,n){return Y.resolve(this.ni.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(t,n){this.ii={},this.overlays={},this.si=new gh(0),this.oi=!1,this.oi=!0,this._i=new e2,this.referenceDelegate=t(this),this.ai=new s2(this),this.indexManager=new HD,this.remoteDocumentCache=function(o){return new i2(o)}(s=>this.referenceDelegate.ui(s)),this.serializer=new BD(n),this.ci=new JD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.oi=!1,Promise.resolve()}get started(){return this.oi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new t2,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.ii[t.toKey()];return s||(s=new n2(n,this.referenceDelegate),this.ii[t.toKey()]=s),s}getGlobalsCache(){return this._i}getTargetCache(){return this.ai}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.ci}runTransaction(t,n,s){st("MemoryPersistence","Starting transaction:",t);const o=new a2(this.si.next());return this.referenceDelegate.li(),s(o).next(u=>this.referenceDelegate.hi(o).next(()=>u)).toPromise().then(u=>(o.raiseOnCommittedEvent(),u))}Pi(t,n){return Y.or(Object.values(this.ii).map(s=>()=>s.containsKey(t,n)))}}class a2 extends kC{constructor(t){super(),this.currentSequenceNumber=t}}class eg{constructor(t){this.persistence=t,this.Ti=new tg,this.Ii=null}static Ei(t){return new eg(t)}get di(){if(this.Ii)return this.Ii;throw _t(60996)}addReference(t,n,s){return this.Ti.addReference(s,n),this.di.delete(s.toString()),Y.resolve()}removeReference(t,n,s){return this.Ti.removeReference(s,n),this.di.add(s.toString()),Y.resolve()}markPotentiallyOrphaned(t,n){return this.di.add(n.toString()),Y.resolve()}removeTarget(t,n){this.Ti.Ur(n.targetId).forEach(o=>this.di.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(o=>{o.forEach(u=>this.di.add(u.toString()))}).next(()=>s.removeTargetData(t,n))}li(){this.Ii=new Set}hi(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Y.forEach(this.di,s=>{const o=ft.fromPath(s);return this.Ai(t,o).next(u=>{u||n.removeEntry(o,At.min())})}).next(()=>(this.Ii=null,n.apply(t)))}updateLimboDocument(t,n){return this.Ai(t,n).next(s=>{s?this.di.delete(n.toString()):this.di.add(n.toString())})}ui(t){return 0}Ai(t,n){return Y.or([()=>Y.resolve(this.Ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Pi(t,n)])}}class rh{constructor(t,n){this.persistence=t,this.Ri=new Gs(s=>LC(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=XD(this,n)}static Ei(t,n){return new rh(t,n)}li(){}hi(t){return Y.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}dr(t){const n=this.Vr(t);return this.persistence.getTargetCache().getTargetCount(t).next(s=>n.next(o=>s+o))}Vr(t){let n=0;return this.Ar(t,s=>{n++}).next(()=>n)}Ar(t,n){return Y.forEach(this.Ri,(s,o)=>this.gr(t,s,o).next(u=>u?Y.resolve():n(o)))}removeTargets(t,n,s){return this.persistence.getTargetCache().removeTargets(t,n,s)}removeOrphanedDocuments(t,n){let s=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.Xr(t,f=>this.gr(t,f,n).next(m=>{m||(s++,u.removeEntry(f,At.min()))})).next(()=>u.apply(t)).next(()=>s)}markPotentiallyOrphaned(t,n){return this.Ri.set(n,t.currentSequenceNumber),Y.resolve()}removeTarget(t,n){const s=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,s)}addReference(t,n,s){return this.Ri.set(s,t.currentSequenceNumber),Y.resolve()}removeReference(t,n,s){return this.Ri.set(s,t.currentSequenceNumber),Y.resolve()}updateLimboDocument(t,n){return this.Ri.set(n,t.currentSequenceNumber),Y.resolve()}ui(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=Pc(t.data.value)),n}gr(t,n,s){return Y.or([()=>this.persistence.Pi(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const o=this.Ri.get(n);return Y.resolve(o!==void 0&&o>s)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(t,n,s,o){this.targetId=t,this.fromCache=n,this.ls=s,this.hs=o}static Ps(t,n){let s=Pt(),o=Pt();for(const u of n.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new ng(t,n.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2{constructor(){this.Ts=!1,this.Is=!1,this.Es=100,this.ds=function(){return Ew()?8:xC(Xe())>0?6:4}()}initialize(t,n){this.As=t,this.indexManager=n,this.Ts=!0}getDocumentsMatchingQuery(t,n,s,o){const u={result:null};return this.Rs(t,n).next(f=>{u.result=f}).next(()=>{if(!u.result)return this.Vs(t,n,o,s).next(f=>{u.result=f})}).next(()=>{if(u.result)return;const f=new o2;return this.fs(t,n,f).next(m=>{if(u.result=m,this.Is)return this.gs(t,n,f,m.size)})}).next(()=>u.result)}gs(t,n,s,o){return s.documentReadCount<this.Es?(za()<=Vt.DEBUG&&st("QueryEngine","SDK will not create cache indexes for query:",ja(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Es,"documents"),Y.resolve()):(za()<=Vt.DEBUG&&st("QueryEngine","Query:",ja(n),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.ds*o?(za()<=Vt.DEBUG&&st("QueryEngine","The SDK decides to create cache indexes for query:",ja(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,mi(n))):Y.resolve())}Rs(t,n){if(Wv(n))return Y.resolve(null);let s=mi(n);return this.indexManager.getIndexType(t,s).next(o=>o===0?null:(n.limit!==null&&o===1&&(n=gm(n,null,"F"),s=mi(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(u=>{const f=Pt(...u);return this.As.getDocuments(t,f).next(m=>this.indexManager.getMinOffset(t,s).next(p=>{const y=this.ps(n,m);return this.ys(n,y,f,p.readTime)?this.Rs(t,gm(n,null,"F")):this.ws(t,y,n,p)}))})))}Vs(t,n,s,o){return Wv(n)||o.isEqual(At.min())?Y.resolve(null):this.As.getDocuments(t,s).next(u=>{const f=this.ps(n,u);return this.ys(n,f,s,o)?Y.resolve(null):(za()<=Vt.DEBUG&&st("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),ja(n)),this.ws(t,f,n,NC(o,Pl)).next(m=>m))})}ps(t,n){let s=new Re(b0(t));return n.forEach((o,u)=>{vh(t,u)&&(s=s.add(u))}),s}ys(t,n,s,o){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const u=t.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}fs(t,n,s){return za()<=Vt.DEBUG&&st("QueryEngine","Using full collection scan to execute query:",ja(n)),this.As.getDocumentsMatchingQuery(t,n,Lr.min(),s)}ws(t,n,s,o){return this.As.getDocumentsMatchingQuery(t,s,o).next(u=>(n.forEach(f=>{u=u.insert(f.key,f)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig="LocalStore",u2=3e8;class c2{constructor(t,n,s,o){this.persistence=t,this.bs=n,this.serializer=o,this.Ss=new re(Ct),this.Ds=new Gs(u=>Qm(u),Ym),this.vs=new Map,this.Cs=t.getRemoteDocumentCache(),this.ai=t.getTargetCache(),this.ci=t.getBundleCache(),this.Fs(s)}Fs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new WD(this.Cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Cs.setIndexManager(this.indexManager),this.bs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ss))}}function h2(r,t,n,s){return new c2(r,t,n,s)}async function Y0(r,t){const n=St(r);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let o;return n.mutationQueue.getAllMutationBatches(s).next(u=>(o=u,n.Fs(t),n.mutationQueue.getAllMutationBatches(s))).next(u=>{const f=[],m=[];let p=Pt();for(const y of o){f.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}for(const y of u){m.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}return n.localDocuments.getDocuments(s,p).next(y=>({Ms:y,removedBatchIds:f,addedBatchIds:m}))})})}function f2(r,t){const n=St(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=t.batch.keys(),u=n.Cs.newChangeBuffer({trackRemovals:!0});return function(m,p,y,E){const S=y.batch,C=S.keys();let B=Y.resolve();return C.forEach($=>{B=B.next(()=>E.getEntry(p,$)).next(et=>{const W=y.docVersions.get($);Ht(W!==null,48541),et.version.compareTo(W)<0&&(S.applyToRemoteDocument(et,y),et.isValidDocument()&&(et.setReadTime(y.commitVersion),E.addEntry(et)))})}),B.next(()=>m.mutationQueue.removeMutationBatch(p,S))}(n,s,t,u).next(()=>u.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,o,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(m){let p=Pt();for(let y=0;y<m.mutationResults.length;++y)m.mutationResults[y].transformResults.length>0&&(p=p.add(m.batch.mutations[y].key));return p}(t))).next(()=>n.localDocuments.getDocuments(s,o))})}function X0(r){const t=St(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.ai.getLastRemoteSnapshotVersion(n))}function d2(r,t){const n=St(r),s=t.snapshotVersion;let o=n.Ss;return n.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const f=n.Cs.newChangeBuffer({trackRemovals:!0});o=n.Ss;const m=[];t.targetChanges.forEach((E,S)=>{const C=o.get(S);if(!C)return;m.push(n.ai.removeMatchingKeys(u,E.removedDocuments,S).next(()=>n.ai.addMatchingKeys(u,E.addedDocuments,S)));let B=C.withSequenceNumber(u.currentSequenceNumber);t.targetMismatches.get(S)!==null?B=B.withResumeToken(qe.EMPTY_BYTE_STRING,At.min()).withLastLimboFreeSnapshotVersion(At.min()):E.resumeToken.approximateByteSize()>0&&(B=B.withResumeToken(E.resumeToken,s)),o=o.insert(S,B),function(et,W,lt){return et.resumeToken.approximateByteSize()===0||W.snapshotVersion.toMicroseconds()-et.snapshotVersion.toMicroseconds()>=u2?!0:lt.addedDocuments.size+lt.modifiedDocuments.size+lt.removedDocuments.size>0}(C,B,E)&&m.push(n.ai.updateTargetData(u,B))});let p=$i(),y=Pt();if(t.documentUpdates.forEach(E=>{t.resolvedLimboDocuments.has(E)&&m.push(n.persistence.referenceDelegate.updateLimboDocument(u,E))}),m.push(m2(u,f,t.documentUpdates).next(E=>{p=E.xs,y=E.Os})),!s.isEqual(At.min())){const E=n.ai.getLastRemoteSnapshotVersion(u).next(S=>n.ai.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(E)}return Y.waitFor(m).next(()=>f.apply(u)).next(()=>n.localDocuments.getLocalViewOfDocuments(u,p,y)).next(()=>p)}).then(u=>(n.Ss=o,u))}function m2(r,t,n){let s=Pt(),o=Pt();return n.forEach(u=>s=s.add(u)),t.getEntries(r,s).next(u=>{let f=$i();return n.forEach((m,p)=>{const y=u.get(m);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(m)),p.isNoDocument()&&p.version.isEqual(At.min())?(t.removeEntry(m,p.readTime),f=f.insert(m,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(t.addEntry(p),f=f.insert(m,p)):st(ig,"Ignoring outdated watch update for ",m,". Current version:",y.version," Watch version:",p.version)}),{xs:f,Os:o}})}function g2(r,t){const n=St(r);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=Fm),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}function p2(r,t){const n=St(r);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return n.ai.getTargetData(s,t).next(u=>u?(o=u,Y.resolve(o)):n.ai.allocateTargetId(s).next(f=>(o=new Nr(t,f,"TargetPurposeListen",s.currentSequenceNumber),n.ai.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=n.Ss.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.Ss=n.Ss.insert(s.targetId,s),n.Ds.set(t,s.targetId)),s})}async function Em(r,t,n){const s=St(r),o=s.Ss.get(t),u=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",u,f=>s.persistence.referenceDelegate.removeTarget(f,o))}catch(f){if(!ao(f))throw f;st(ig,`Failed to update sequence numbers for target ${t}: ${f}`)}s.Ss=s.Ss.remove(t),s.Ds.delete(o.target)}function hE(r,t,n){const s=St(r);let o=At.min(),u=Pt();return s.persistence.runTransaction("Execute query","readwrite",f=>function(p,y,E){const S=St(p),C=S.Ds.get(E);return C!==void 0?Y.resolve(S.Ss.get(C)):S.ai.getTargetData(y,E)}(s,f,mi(t)).next(m=>{if(m)return o=m.lastLimboFreeSnapshotVersion,s.ai.getMatchingKeysForTargetId(f,m.targetId).next(p=>{u=p})}).next(()=>s.bs.getDocumentsMatchingQuery(f,t,n?o:At.min(),n?u:Pt())).next(m=>(y2(s,iD(t),m),{documents:m,Ns:u})))}function y2(r,t,n){let s=r.vs.get(t)||At.min();n.forEach((o,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),r.vs.set(t,s)}class fE{constructor(){this.activeTargetIds=uD()}$s(t){this.activeTargetIds=this.activeTargetIds.add(t)}Us(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Qs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class _2{constructor(){this.So=new fE,this.Do={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t,n=!0){return n&&this.So.$s(t),this.Do[t]||"not-current"}updateQueryState(t,n,s){this.Do[t]=n}removeLocalQueryTarget(t){this.So.Us(t)}isLocalQueryTarget(t){return this.So.activeTargetIds.has(t)}clearQueryState(t){delete this.Do[t]}getAllActiveQueryTargets(){return this.So.activeTargetIds}isActiveQueryTarget(t){return this.So.activeTargetIds.has(t)}start(){return this.So=new fE,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v2{vo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE="ConnectivityMonitor";class mE{constructor(){this.Co=()=>this.Fo(),this.Mo=()=>this.xo(),this.Oo=[],this.No()}vo(t){this.Oo.push(t)}shutdown(){window.removeEventListener("online",this.Co),window.removeEventListener("offline",this.Mo)}No(){window.addEventListener("online",this.Co),window.addEventListener("offline",this.Mo)}Fo(){st(dE,"Network connectivity changed: AVAILABLE");for(const t of this.Oo)t(0)}xo(){st(dE,"Network connectivity changed: UNAVAILABLE");for(const t of this.Oo)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ic=null;function Tm(){return Ic===null?Ic=function(){return 268435456+Math.round(2147483648*Math.random())}():Ic++,"0x"+Ic.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd="RestConnection",E2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class T2{get Bo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Lo=n+"://"+t.host,this.ko=`projects/${s}/databases/${o}`,this.qo=this.databaseId.database===Zc?`project_id=${s}`:`project_id=${s}&database_id=${o}`}Qo(t,n,s,o,u){const f=Tm(),m=this.$o(t,n.toUriEncodedString());st(Xd,`Sending RPC '${t}' ${f}:`,m,s);const p={"google-cloud-resource-prefix":this.ko,"x-goog-request-params":this.qo};return this.Uo(p,o,u),this.Ko(t,m,p,s).then(y=>(st(Xd,`Received RPC '${t}' ${f}: `,y),y),y=>{throw Xa(Xd,`RPC '${t}' ${f} failed with error: `,y,"url: ",m,"request:",s),y})}Wo(t,n,s,o,u,f){return this.Qo(t,n,s,o,u)}Uo(t,n,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ro}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((o,u)=>t[u]=o),s&&s.headers.forEach((o,u)=>t[u]=o)}$o(t,n){const s=E2[t];return`${this.Lo}/v1/${n}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A2{constructor(t){this.Go=t.Go,this.zo=t.zo}jo(t){this.Ho=t}Jo(t){this.Yo=t}Zo(t){this.Xo=t}onMessage(t){this.e_=t}close(){this.zo()}send(t){this.Go(t)}t_(){this.Ho()}n_(){this.Yo()}r_(t){this.Xo(t)}i_(t){this.e_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke="WebChannelConnection";class S2 extends T2{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Ko(t,n,s,o){const u=Tm();return new Promise((f,m)=>{const p=new ZT;p.setWithCredentials(!0),p.listenOnce(WT.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case Vc.NO_ERROR:const E=p.getResponseJson();st(Ke,`XHR for RPC '${t}' ${u} received:`,JSON.stringify(E)),f(E);break;case Vc.TIMEOUT:st(Ke,`RPC '${t}' ${u} timed out`),m(new ot(X.DEADLINE_EXCEEDED,"Request time out"));break;case Vc.HTTP_ERROR:const S=p.getStatus();if(st(Ke,`RPC '${t}' ${u} failed with status:`,S,"response text:",p.getResponseText()),S>0){let C=p.getResponseJson();Array.isArray(C)&&(C=C[0]);const B=C==null?void 0:C.error;if(B&&B.status&&B.message){const $=function(W){const lt=W.toLowerCase().replace(/_/g,"-");return Object.values(X).indexOf(lt)>=0?lt:X.UNKNOWN}(B.status);m(new ot($,B.message))}else m(new ot(X.UNKNOWN,"Server responded with status "+p.getStatus()))}else m(new ot(X.UNAVAILABLE,"Connection failed."));break;default:_t(9055,{s_:t,streamId:u,o_:p.getLastErrorCode(),__:p.getLastError()})}}finally{st(Ke,`RPC '${t}' ${u} completed.`)}});const y=JSON.stringify(o);st(Ke,`RPC '${t}' ${u} sending request:`,o),p.send(n,"POST",y,s,15)})}a_(t,n,s){const o=Tm(),u=[this.Lo,"/","google.firestore.v1.Firestore","/",t,"/channel"],f=e0(),m=t0(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Uo(p.initMessageHeaders,n,s),p.encodeInitMessageHeaders=!0;const E=u.join("");st(Ke,`Creating RPC '${t}' stream ${o}: ${E}`,p);const S=f.createWebChannel(E,p);let C=!1,B=!1;const $=new A2({Go:W=>{B?st(Ke,`Not sending because RPC '${t}' stream ${o} is closed:`,W):(C||(st(Ke,`Opening RPC '${t}' stream ${o} transport.`),S.open(),C=!0),st(Ke,`RPC '${t}' stream ${o} sending:`,W),S.send(W))},zo:()=>S.close()}),et=(W,lt,mt)=>{W.listen(lt,rt=>{try{mt(rt)}catch(Et){setTimeout(()=>{throw Et},0)}})};return et(S,Al.EventType.OPEN,()=>{B||(st(Ke,`RPC '${t}' stream ${o} transport opened.`),$.t_())}),et(S,Al.EventType.CLOSE,()=>{B||(B=!0,st(Ke,`RPC '${t}' stream ${o} transport closed`),$.r_())}),et(S,Al.EventType.ERROR,W=>{B||(B=!0,Xa(Ke,`RPC '${t}' stream ${o} transport errored. Name:`,W.name,"Message:",W.message),$.r_(new ot(X.UNAVAILABLE,"The operation could not be completed")))}),et(S,Al.EventType.MESSAGE,W=>{var lt;if(!B){const mt=W.data[0];Ht(!!mt,16349);const rt=mt,Et=(rt==null?void 0:rt.error)||((lt=rt[0])===null||lt===void 0?void 0:lt.error);if(Et){st(Ke,`RPC '${t}' stream ${o} received error:`,Et);const ut=Et.status;let wt=function(b){const N=ye[b];if(N!==void 0)return x0(N)}(ut),M=Et.message;wt===void 0&&(wt=X.INTERNAL,M="Unknown error status: "+ut+" with message "+Et.message),B=!0,$.r_(new ot(wt,M)),S.close()}else st(Ke,`RPC '${t}' stream ${o} received:`,mt),$.i_(mt)}}),et(m,JT.STAT_EVENT,W=>{W.stat===lm.PROXY?st(Ke,`RPC '${t}' stream ${o} detected buffering proxy`):W.stat===lm.NOPROXY&&st(Ke,`RPC '${t}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{$.n_()},0),$}}function $d(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sh(r){return new ID(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(t,n,s=1e3,o=1.5,u=6e4){this.bi=t,this.timerId=n,this.u_=s,this.c_=o,this.l_=u,this.h_=0,this.P_=null,this.T_=Date.now(),this.reset()}reset(){this.h_=0}I_(){this.h_=this.l_}E_(t){this.cancel();const n=Math.floor(this.h_+this.d_()),s=Math.max(0,Date.now()-this.T_),o=Math.max(0,n-s);o>0&&st("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.h_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.P_=this.bi.enqueueAfterDelay(this.timerId,o,()=>(this.T_=Date.now(),t())),this.h_*=this.c_,this.h_<this.u_&&(this.h_=this.u_),this.h_>this.l_&&(this.h_=this.l_)}A_(){this.P_!==null&&(this.P_.skipDelay(),this.P_=null)}cancel(){this.P_!==null&&(this.P_.cancel(),this.P_=null)}d_(){return(Math.random()-.5)*this.h_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE="PersistentStream";class Z0{constructor(t,n,s,o,u,f,m,p){this.bi=t,this.R_=s,this.V_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=m,this.listener=p,this.state=0,this.m_=0,this.f_=null,this.g_=null,this.stream=null,this.p_=0,this.y_=new $0(t,n)}w_(){return this.state===1||this.state===5||this.b_()}b_(){return this.state===2||this.state===3}start(){this.p_=0,this.state!==4?this.auth():this.S_()}async stop(){this.w_()&&await this.close(0)}D_(){this.state=0,this.y_.reset()}v_(){this.b_()&&this.f_===null&&(this.f_=this.bi.enqueueAfterDelay(this.R_,6e4,()=>this.C_()))}F_(t){this.M_(),this.stream.send(t)}async C_(){if(this.b_())return this.close(0)}M_(){this.f_&&(this.f_.cancel(),this.f_=null)}x_(){this.g_&&(this.g_.cancel(),this.g_=null)}async close(t,n){this.M_(),this.x_(),this.y_.cancel(),this.m_++,t!==4?this.y_.reset():n&&n.code===X.RESOURCE_EXHAUSTED?(Xi(n.toString()),Xi("Using maximum backoff delay to prevent overloading the backend."),this.y_.I_()):n&&n.code===X.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.O_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zo(n)}O_(){}auth(){this.state=1;const t=this.N_(this.m_),n=this.m_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.m_===n&&this.B_(s,o)},s=>{t(()=>{const o=new ot(X.UNKNOWN,"Fetching auth token failed: "+s.message);return this.L_(o)})})}B_(t,n){const s=this.N_(this.m_);this.stream=this.k_(t,n),this.stream.jo(()=>{s(()=>this.listener.jo())}),this.stream.Jo(()=>{s(()=>(this.state=2,this.g_=this.bi.enqueueAfterDelay(this.V_,1e4,()=>(this.b_()&&(this.state=3),Promise.resolve())),this.listener.Jo()))}),this.stream.Zo(o=>{s(()=>this.L_(o))}),this.stream.onMessage(o=>{s(()=>++this.p_==1?this.q_(o):this.onNext(o))})}S_(){this.state=5,this.y_.E_(async()=>{this.state=0,this.start()})}L_(t){return st(gE,`close with error: ${t}`),this.stream=null,this.close(4,t)}N_(t){return n=>{this.bi.enqueueAndForget(()=>this.m_===t?n():(st(gE,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class w2 extends Z0{constructor(t,n,s,o,u,f){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}k_(t,n){return this.connection.a_("Listen",t,n)}q_(t){return this.onNext(t)}onNext(t){this.y_.reset();const n=OD(this.serializer,t),s=function(u){if(!("targetChange"in u))return At.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?At.min():f.readTime?gi(f.readTime):At.min()}(t);return this.listener.Q_(n,s)}U_(t){const n={};n.database=vm(this.serializer),n.addTarget=function(u,f){let m;const p=f.target;if(m=dm(p)?{documents:VD(u,p)}:{query:PD(u,p).gt},m.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){m.resumeToken=z0(u,f.resumeToken);const y=pm(u,f.expectedCount);y!==null&&(m.expectedCount=y)}else if(f.snapshotVersion.compareTo(At.min())>0){m.readTime=ih(u,f.snapshotVersion.toTimestamp());const y=pm(u,f.expectedCount);y!==null&&(m.expectedCount=y)}return m}(this.serializer,t);const s=xD(this.serializer,t);s&&(n.labels=s),this.F_(n)}K_(t){const n={};n.database=vm(this.serializer),n.removeTarget=t,this.F_(n)}}class b2 extends Z0{constructor(t,n,s,o,u,f){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,o,f),this.serializer=u}get W_(){return this.p_>0}start(){this.lastStreamToken=void 0,super.start()}O_(){this.W_&&this.G_([])}k_(t,n){return this.connection.a_("Write",t,n)}q_(t){return Ht(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Ht(!t.writeResults||t.writeResults.length===0,55816),this.listener.z_()}onNext(t){Ht(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.y_.reset();const n=MD(t.writeResults,t.commitTime),s=gi(t.commitTime);return this.listener.j_(s,n)}H_(){const t={};t.database=vm(this.serializer),this.F_(t)}G_(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>ND(this.serializer,s))};this.F_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R2{}class I2 extends R2{constructor(t,n,s,o){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=o,this.J_=!1}Y_(){if(this.J_)throw new ot(X.FAILED_PRECONDITION,"The client has already been terminated.")}Qo(t,n,s,o){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,f])=>this.connection.Qo(t,ym(n,s),o,u,f)).catch(u=>{throw u.name==="FirebaseError"?(u.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ot(X.UNKNOWN,u.toString())})}Wo(t,n,s,o,u){return this.Y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,m])=>this.connection.Wo(t,ym(n,s),o,f,m,u)).catch(f=>{throw f.name==="FirebaseError"?(f.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new ot(X.UNKNOWN,f.toString())})}terminate(){this.J_=!0,this.connection.terminate()}}class C2{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.Z_=0,this.X_=null,this.ea=!0}ta(){this.Z_===0&&(this.na("Unknown"),this.X_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.X_=null,this.ra("Backend didn't respond within 10 seconds."),this.na("Offline"),Promise.resolve())))}ia(t){this.state==="Online"?this.na("Unknown"):(this.Z_++,this.Z_>=1&&(this.sa(),this.ra(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.na("Offline")))}set(t){this.sa(),this.Z_=0,t==="Online"&&(this.ea=!1),this.na(t)}na(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ra(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ea?(Xi(n),this.ea=!1):st("OnlineStateTracker",n)}sa(){this.X_!==null&&(this.X_.cancel(),this.X_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs="RemoteStore";class D2{constructor(t,n,s,o,u){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.oa=[],this._a=new Map,this.aa=new Set,this.ua=[],this.ca=u,this.ca.vo(f=>{s.enqueueAndForget(async()=>{Ks(this)&&(st(zs,"Restarting streams for network reachability change."),await async function(p){const y=St(p);y.aa.add(4),await Yl(y),y.la.set("Unknown"),y.aa.delete(4),await wh(y)}(this))})}),this.la=new C2(s,o)}}async function wh(r){if(Ks(r))for(const t of r.ua)await t(!0)}async function Yl(r){for(const t of r.ua)await t(!1)}function W0(r,t){const n=St(r);n._a.has(t.targetId)||(n._a.set(t.targetId,t),og(n)?ag(n):oo(n).b_()&&sg(n,t))}function rg(r,t){const n=St(r),s=oo(n);n._a.delete(t),s.b_()&&J0(n,t),n._a.size===0&&(s.b_()?s.v_():Ks(n)&&n.la.set("Unknown"))}function sg(r,t){if(r.ha.Ke(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(At.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}oo(r).U_(t)}function J0(r,t){r.ha.Ke(t),oo(r).K_(t)}function ag(r){r.ha=new SD({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),Rt:t=>r._a.get(t)||null,Pt:()=>r.datastore.serializer.databaseId}),oo(r).start(),r.la.ta()}function og(r){return Ks(r)&&!oo(r).w_()&&r._a.size>0}function Ks(r){return St(r).aa.size===0}function tA(r){r.ha=void 0}async function O2(r){r.la.set("Online")}async function N2(r){r._a.forEach((t,n)=>{sg(r,t)})}async function M2(r,t){tA(r),og(r)?(r.la.ia(t),ag(r)):r.la.set("Unknown")}async function V2(r,t,n){if(r.la.set("Online"),t instanceof L0&&t.state===2&&t.cause)try{await async function(o,u){const f=u.cause;for(const m of u.targetIds)o._a.has(m)&&(await o.remoteSyncer.rejectListen(m,f),o._a.delete(m),o.ha.removeTarget(m))}(r,t)}catch(s){st(zs,"Failed to remove targets %s: %s ",t.targetIds.join(","),s),await sh(r,s)}else if(t instanceof Uc?r.ha.Xe(t):t instanceof U0?r.ha.ot(t):r.ha.nt(t),!n.isEqual(At.min()))try{const s=await X0(r.localStore);n.compareTo(s)>=0&&await function(u,f){const m=u.ha.It(f);return m.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const E=u._a.get(y);E&&u._a.set(y,E.withResumeToken(p.resumeToken,f))}}),m.targetMismatches.forEach((p,y)=>{const E=u._a.get(p);if(!E)return;u._a.set(p,E.withResumeToken(qe.EMPTY_BYTE_STRING,E.snapshotVersion)),J0(u,p);const S=new Nr(E.target,p,y,E.sequenceNumber);sg(u,S)}),u.remoteSyncer.applyRemoteEvent(m)}(r,n)}catch(s){st(zs,"Failed to raise snapshot:",s),await sh(r,s)}}async function sh(r,t,n){if(!ao(t))throw t;r.aa.add(1),await Yl(r),r.la.set("Offline"),n||(n=()=>X0(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{st(zs,"Retrying IndexedDB access"),await n(),r.aa.delete(1),await wh(r)})}function eA(r,t){return t().catch(n=>sh(r,n,t))}async function bh(r){const t=St(r),n=qr(t);let s=t.oa.length>0?t.oa[t.oa.length-1].batchId:Fm;for(;P2(t);)try{const o=await g2(t.localStore,s);if(o===null){t.oa.length===0&&n.v_();break}s=o.batchId,k2(t,o)}catch(o){await sh(t,o)}nA(t)&&iA(t)}function P2(r){return Ks(r)&&r.oa.length<10}function k2(r,t){r.oa.push(t);const n=qr(r);n.b_()&&n.W_&&n.G_(t.mutations)}function nA(r){return Ks(r)&&!qr(r).w_()&&r.oa.length>0}function iA(r){qr(r).start()}async function x2(r){qr(r).H_()}async function U2(r){const t=qr(r);for(const n of r.oa)t.G_(n.mutations)}async function L2(r,t,n){const s=r.oa.shift(),o=Zm.from(s,t,n);await eA(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await bh(r)}async function z2(r,t){t&&qr(r).W_&&await async function(s,o){if(function(f){return TD(f)&&f!==X.ABORTED}(o.code)){const u=s.oa.shift();qr(s).D_(),await eA(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,o)),await bh(s)}}(r,t),nA(r)&&iA(r)}async function pE(r,t){const n=St(r);n.asyncQueue.verifyOperationInProgress(),st(zs,"RemoteStore received new credentials");const s=Ks(n);n.aa.add(3),await Yl(n),s&&n.la.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.aa.delete(3),await wh(n)}async function j2(r,t){const n=St(r);t?(n.aa.delete(2),await wh(n)):t||(n.aa.add(2),await Yl(n),n.la.set("Unknown"))}function oo(r){return r.Pa||(r.Pa=function(n,s,o){const u=St(n);return u.Y_(),new w2(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{jo:O2.bind(null,r),Jo:N2.bind(null,r),Zo:M2.bind(null,r),Q_:V2.bind(null,r)}),r.ua.push(async t=>{t?(r.Pa.D_(),og(r)?ag(r):r.la.set("Unknown")):(await r.Pa.stop(),tA(r))})),r.Pa}function qr(r){return r.Ta||(r.Ta=function(n,s,o){const u=St(n);return u.Y_(),new b2(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)}(r.datastore,r.asyncQueue,{jo:()=>Promise.resolve(),Jo:x2.bind(null,r),Zo:z2.bind(null,r),z_:U2.bind(null,r),j_:L2.bind(null,r)}),r.ua.push(async t=>{t?(r.Ta.D_(),await bh(r)):(await r.Ta.stop(),r.oa.length>0&&(st(zs,`Stopping write stream with ${r.oa.length} pending writes`),r.oa=[]))})),r.Ta}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(t,n,s,o,u){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=u,this.deferred=new kr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(f=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,s,o,u){const f=Date.now()+s,m=new lg(t,n,f,o,u);return m.start(s),m}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ot(X.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ug(r,t){if(Xi("AsyncQueue",`${t}: ${r}`),ao(r))return new ot(X.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{static emptySet(t){return new Qa(t.comparator)}constructor(t){this.comparator=t?(n,s)=>t(n,s)||ft.comparator(n.key,s.key):(n,s)=>ft.comparator(n.key,s.key),this.keyedMap=Sl(),this.sortedSet=new re(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Qa)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=s.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Qa;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(){this.Ia=new re(ft.comparator)}track(t){const n=t.doc.key,s=this.Ia.get(n);s?t.type!==0&&s.type===3?this.Ia=this.Ia.insert(n,t):t.type===3&&s.type!==1?this.Ia=this.Ia.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Ia=this.Ia.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Ia=this.Ia.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Ia=this.Ia.remove(n):t.type===1&&s.type===2?this.Ia=this.Ia.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Ia=this.Ia.insert(n,{type:2,doc:t.doc}):_t(63341,{Vt:t,Ea:s}):this.Ia=this.Ia.insert(n,t)}da(){const t=[];return this.Ia.inorderTraversal((n,s)=>{t.push(s)}),t}}class to{constructor(t,n,s,o,u,f,m,p,y){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=m,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(t,n,s,o,u){const f=[];return n.forEach(m=>{f.push({type:0,doc:m})}),new to(t,n,Qa.emptySet(n),f,s,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&_h(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==s[o].type||!n[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B2{constructor(){this.Aa=void 0,this.Ra=[]}Va(){return this.Ra.some(t=>t.ma())}}class q2{constructor(){this.queries=_E(),this.onlineState="Unknown",this.fa=new Set}terminate(){(function(n,s){const o=St(n),u=o.queries;o.queries=_E(),u.forEach((f,m)=>{for(const p of m.Ra)p.onError(s)})})(this,new ot(X.ABORTED,"Firestore shutting down"))}}function _E(){return new Gs(r=>w0(r),_h)}async function H2(r,t){const n=St(r);let s=3;const o=t.query;let u=n.queries.get(o);u?!u.Va()&&t.ma()&&(s=2):(u=new B2,s=t.ma()?0:1);try{switch(s){case 0:u.Aa=await n.onListen(o,!0);break;case 1:u.Aa=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const m=ug(f,`Initialization of query '${ja(t.query)}' failed`);return void t.onError(m)}n.queries.set(o,u),u.Ra.push(t),t.ga(n.onlineState),u.Aa&&t.pa(u.Aa)&&cg(n)}async function F2(r,t){const n=St(r),s=t.query;let o=3;const u=n.queries.get(s);if(u){const f=u.Ra.indexOf(t);f>=0&&(u.Ra.splice(f,1),u.Ra.length===0?o=t.ma()?0:1:!u.Va()&&t.ma()&&(o=2))}switch(o){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function G2(r,t){const n=St(r);let s=!1;for(const o of t){const u=o.query,f=n.queries.get(u);if(f){for(const m of f.Ra)m.pa(o)&&(s=!0);f.Aa=o}}s&&cg(n)}function K2(r,t,n){const s=St(r),o=s.queries.get(t);if(o)for(const u of o.Ra)u.onError(n);s.queries.delete(t)}function cg(r){r.fa.forEach(t=>{t.next()})}var Am,vE;(vE=Am||(Am={})).ya="default",vE.Cache="cache";class Q2{constructor(t,n,s){this.query=t,this.wa=n,this.ba=!1,this.Sa=null,this.onlineState="Unknown",this.options=s||{}}pa(t){if(!this.options.includeMetadataChanges){const s=[];for(const o of t.docChanges)o.type!==3&&s.push(o);t=new to(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.ba?this.Da(t)&&(this.wa.next(t),n=!0):this.va(t,this.onlineState)&&(this.Ca(t),n=!0),this.Sa=t,n}onError(t){this.wa.error(t)}ga(t){this.onlineState=t;let n=!1;return this.Sa&&!this.ba&&this.va(this.Sa,t)&&(this.Ca(this.Sa),n=!0),n}va(t,n){if(!t.fromCache||!this.ma())return!0;const s=n!=="Offline";return(!this.options.Fa||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Da(t){if(t.docChanges.length>0)return!0;const n=this.Sa&&this.Sa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Ca(t){t=to.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ba=!0,this.wa.next(t)}ma(){return this.options.source!==Am.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(t){this.key=t}}class sA{constructor(t){this.key=t}}class Y2{constructor(t,n){this.query=t,this.qa=n,this.Qa=null,this.hasCachedResults=!1,this.current=!1,this.$a=Pt(),this.mutatedKeys=Pt(),this.Ua=b0(t),this.Ka=new Qa(this.Ua)}get Wa(){return this.qa}Ga(t,n){const s=n?n.za:new yE,o=n?n.Ka:this.Ka;let u=n?n.mutatedKeys:this.mutatedKeys,f=o,m=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal((E,S)=>{const C=o.get(E),B=vh(this.query,S)?S:null,$=!!C&&this.mutatedKeys.has(C.key),et=!!B&&(B.hasLocalMutations||this.mutatedKeys.has(B.key)&&B.hasCommittedMutations);let W=!1;C&&B?C.data.isEqual(B.data)?$!==et&&(s.track({type:3,doc:B}),W=!0):this.ja(C,B)||(s.track({type:2,doc:B}),W=!0,(p&&this.Ua(B,p)>0||y&&this.Ua(B,y)<0)&&(m=!0)):!C&&B?(s.track({type:0,doc:B}),W=!0):C&&!B&&(s.track({type:1,doc:C}),W=!0,(p||y)&&(m=!0)),W&&(B?(f=f.add(B),u=et?u.add(E):u.delete(E)):(f=f.delete(E),u=u.delete(E)))}),this.query.limit!==null)for(;f.size>this.query.limit;){const E=this.query.limitType==="F"?f.last():f.first();f=f.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{Ka:f,za:s,ys:m,mutatedKeys:u}}ja(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s,o){const u=this.Ka;this.Ka=t.Ka,this.mutatedKeys=t.mutatedKeys;const f=t.za.da();f.sort((E,S)=>function(B,$){const et=W=>{switch(W){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _t(20277,{Vt:W})}};return et(B)-et($)}(E.type,S.type)||this.Ua(E.doc,S.doc)),this.Ha(s),o=o!=null&&o;const m=n&&!o?this.Ja():[],p=this.$a.size===0&&this.current&&!o?1:0,y=p!==this.Qa;return this.Qa=p,f.length!==0||y?{snapshot:new to(this.query,t.Ka,u,f,t.mutatedKeys,p===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ya:m}:{Ya:m}}ga(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ka:this.Ka,za:new yE,mutatedKeys:this.mutatedKeys,ys:!1},!1)):{Ya:[]}}Za(t){return!this.qa.has(t)&&!!this.Ka.has(t)&&!this.Ka.get(t).hasLocalMutations}Ha(t){t&&(t.addedDocuments.forEach(n=>this.qa=this.qa.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.qa=this.qa.delete(n)),this.current=t.current)}Ja(){if(!this.current)return[];const t=this.$a;this.$a=Pt(),this.Ka.forEach(s=>{this.Za(s.key)&&(this.$a=this.$a.add(s.key))});const n=[];return t.forEach(s=>{this.$a.has(s)||n.push(new sA(s))}),this.$a.forEach(s=>{t.has(s)||n.push(new rA(s))}),n}Xa(t){this.qa=t.Ns,this.$a=Pt();const n=this.Ga(t.documents);return this.applyChanges(n,!0)}eu(){return to.fromInitialDocuments(this.query,this.Ka,this.mutatedKeys,this.Qa===0,this.hasCachedResults)}}const hg="SyncEngine";class X2{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class $2{constructor(t){this.key=t,this.tu=!1}}class Z2{constructor(t,n,s,o,u,f){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.nu={},this.ru=new Gs(m=>w0(m),_h),this.iu=new Map,this.su=new Set,this.ou=new re(ft.comparator),this._u=new Map,this.au=new tg,this.uu={},this.cu=new Map,this.lu=Ja.ir(),this.onlineState="Unknown",this.hu=void 0}get isPrimaryClient(){return this.hu===!0}}async function W2(r,t,n=!0){const s=hA(r);let o;const u=s.ru.get(t);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.eu()):o=await aA(s,t,n,!0),o}async function J2(r,t){const n=hA(r);await aA(n,t,!0,!1)}async function aA(r,t,n,s){const o=await p2(r.localStore,mi(t)),u=o.targetId,f=r.sharedClientState.addLocalQueryTarget(u,n);let m;return s&&(m=await tO(r,t,u,f==="current",o.resumeToken)),r.isPrimaryClient&&n&&W0(r.remoteStore,o),m}async function tO(r,t,n,s,o){r.Pu=(S,C,B)=>async function(et,W,lt,mt){let rt=W.view.Ga(lt);rt.ys&&(rt=await hE(et.localStore,W.query,!1).then(({documents:M})=>W.view.Ga(M,rt)));const Et=mt&&mt.targetChanges.get(W.targetId),ut=mt&&mt.targetMismatches.get(W.targetId)!=null,wt=W.view.applyChanges(rt,et.isPrimaryClient,Et,ut);return TE(et,W.targetId,wt.Ya),wt.snapshot}(r,S,C,B);const u=await hE(r.localStore,t,!0),f=new Y2(t,u.Ns),m=f.Ga(u.documents),p=Ql.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",o),y=f.applyChanges(m,r.isPrimaryClient,p);TE(r,n,y.Ya);const E=new X2(t,n,f);return r.ru.set(t,E),r.iu.has(n)?r.iu.get(n).push(t):r.iu.set(n,[t]),y.snapshot}async function eO(r,t,n){const s=St(r),o=s.ru.get(t),u=s.iu.get(o.targetId);if(u.length>1)return s.iu.set(o.targetId,u.filter(f=>!_h(f,t))),void s.ru.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Em(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),n&&rg(s.remoteStore,o.targetId),Sm(s,o.targetId)}).catch(so)):(Sm(s,o.targetId),await Em(s.localStore,o.targetId,!0))}async function nO(r,t){const n=St(r),s=n.ru.get(t),o=n.iu.get(s.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),rg(n.remoteStore,s.targetId))}async function iO(r,t,n){const s=cO(r);try{const o=await function(f,m){const p=St(f),y=be.now(),E=m.reduce((B,$)=>B.add($.key),Pt());let S,C;return p.persistence.runTransaction("Locally write mutations","readwrite",B=>{let $=$i(),et=Pt();return p.Cs.getEntries(B,E).next(W=>{$=W,$.forEach((lt,mt)=>{mt.isValidDocument()||(et=et.add(lt))})}).next(()=>p.localDocuments.getOverlayedDocuments(B,$)).next(W=>{S=W;const lt=[];for(const mt of m){const rt=pD(mt,S.get(mt.key).overlayedDocument);rt!=null&&lt.push(new Qr(mt.key,rt,g0(rt.value.mapValue),qn.exists(!0)))}return p.mutationQueue.addMutationBatch(B,y,lt,m)}).next(W=>{C=W;const lt=W.applyToLocalDocumentSet(S,et);return p.documentOverlayCache.saveOverlays(B,W.batchId,lt)})}).then(()=>({batchId:C.batchId,changes:I0(S)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(o.batchId),function(f,m,p){let y=f.uu[f.currentUser.toKey()];y||(y=new re(Ct)),y=y.insert(m,p),f.uu[f.currentUser.toKey()]=y}(s,o.batchId,n),await Xl(s,o.changes),await bh(s.remoteStore)}catch(o){const u=ug(o,"Failed to persist write");n.reject(u)}}async function oA(r,t){const n=St(r);try{const s=await d2(n.localStore,t);t.targetChanges.forEach((o,u)=>{const f=n._u.get(u);f&&(Ht(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?f.tu=!0:o.modifiedDocuments.size>0?Ht(f.tu,14607):o.removedDocuments.size>0&&(Ht(f.tu,42227),f.tu=!1))}),await Xl(n,s,t)}catch(s){await so(s)}}function EE(r,t,n){const s=St(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const o=[];s.ru.forEach((u,f)=>{const m=f.view.ga(t);m.snapshot&&o.push(m.snapshot)}),function(f,m){const p=St(f);p.onlineState=m;let y=!1;p.queries.forEach((E,S)=>{for(const C of S.Ra)C.ga(m)&&(y=!0)}),y&&cg(p)}(s.eventManager,t),o.length&&s.nu.Q_(o),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function rO(r,t,n){const s=St(r);s.sharedClientState.updateQueryState(t,"rejected",n);const o=s._u.get(t),u=o&&o.key;if(u){let f=new re(ft.comparator);f=f.insert(u,Ye.newNoDocument(u,At.min()));const m=Pt().add(u),p=new Ah(At.min(),new Map,new re(Ct),f,m);await oA(s,p),s.ou=s.ou.remove(u),s._u.delete(t),fg(s)}else await Em(s.localStore,t,!1).then(()=>Sm(s,t,n)).catch(so)}async function sO(r,t){const n=St(r),s=t.batch.batchId;try{const o=await f2(n.localStore,t);uA(n,s,null),lA(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Xl(n,o)}catch(o){await so(o)}}async function aO(r,t,n){const s=St(r);try{const o=await function(f,m){const p=St(f);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let E;return p.mutationQueue.lookupMutationBatch(y,m).next(S=>(Ht(S!==null,37113),E=S.keys(),p.mutationQueue.removeMutationBatch(y,S))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,E,m)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,E)).next(()=>p.localDocuments.getDocuments(y,E))})}(s.localStore,t);uA(s,t,n),lA(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Xl(s,o)}catch(o){await so(o)}}function lA(r,t){(r.cu.get(t)||[]).forEach(n=>{n.resolve()}),r.cu.delete(t)}function uA(r,t,n){const s=St(r);let o=s.uu[s.currentUser.toKey()];if(o){const u=o.get(t);u&&(n?u.reject(n):u.resolve(),o=o.remove(t)),s.uu[s.currentUser.toKey()]=o}}function Sm(r,t,n=null){r.sharedClientState.removeLocalQueryTarget(t);for(const s of r.iu.get(t))r.ru.delete(s),n&&r.nu.Tu(s,n);r.iu.delete(t),r.isPrimaryClient&&r.au.Ur(t).forEach(s=>{r.au.containsKey(s)||cA(r,s)})}function cA(r,t){r.su.delete(t.path.canonicalString());const n=r.ou.get(t);n!==null&&(rg(r.remoteStore,n),r.ou=r.ou.remove(t),r._u.delete(n),fg(r))}function TE(r,t,n){for(const s of n)s instanceof rA?(r.au.addReference(s.key,t),oO(r,s)):s instanceof sA?(st(hg,"Document no longer in limbo: "+s.key),r.au.removeReference(s.key,t),r.au.containsKey(s.key)||cA(r,s.key)):_t(19791,{Iu:s})}function oO(r,t){const n=t.key,s=n.path.canonicalString();r.ou.get(n)||r.su.has(s)||(st(hg,"New document in limbo: "+n),r.su.add(s),fg(r))}function fg(r){for(;r.su.size>0&&r.ou.size<r.maxConcurrentLimboResolutions;){const t=r.su.values().next().value;r.su.delete(t);const n=new ft(te.fromString(t)),s=r.lu.next();r._u.set(s,new $2(n)),r.ou=r.ou.insert(n,s),W0(r.remoteStore,new Nr(mi(A0(n.path)),s,"TargetPurposeLimboResolution",gh.le))}}async function Xl(r,t,n){const s=St(r),o=[],u=[],f=[];s.ru.isEmpty()||(s.ru.forEach((m,p)=>{f.push(s.Pu(p,t,n).then(y=>{var E;if((y||n)&&s.isPrimaryClient){const S=y?!y.fromCache:(E=n==null?void 0:n.targetChanges.get(p.targetId))===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(p.targetId,S?"current":"not-current")}if(y){o.push(y);const S=ng.Ps(p.targetId,y);u.push(S)}}))}),await Promise.all(f),s.nu.Q_(o),await async function(p,y){const E=St(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",S=>Y.forEach(y,C=>Y.forEach(C.ls,B=>E.persistence.referenceDelegate.addReference(S,C.targetId,B)).next(()=>Y.forEach(C.hs,B=>E.persistence.referenceDelegate.removeReference(S,C.targetId,B)))))}catch(S){if(!ao(S))throw S;st(ig,"Failed to update sequence numbers: "+S)}for(const S of y){const C=S.targetId;if(!S.fromCache){const B=E.Ss.get(C),$=B.snapshotVersion,et=B.withLastLimboFreeSnapshotVersion($);E.Ss=E.Ss.insert(C,et)}}}(s.localStore,u))}async function lO(r,t){const n=St(r);if(!n.currentUser.isEqual(t)){st(hg,"User change. New user:",t.toKey());const s=await Y0(n.localStore,t);n.currentUser=t,function(u,f){u.cu.forEach(m=>{m.forEach(p=>{p.reject(new ot(X.CANCELLED,f))})}),u.cu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Xl(n,s.Ms)}}function uO(r,t){const n=St(r),s=n._u.get(t);if(s&&s.tu)return Pt().add(s.key);{let o=Pt();const u=n.iu.get(t);if(!u)return o;for(const f of u){const m=n.ru.get(f);o=o.unionWith(m.view.Wa)}return o}}function hA(r){const t=St(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=oA.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=uO.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=rO.bind(null,t),t.nu.Q_=G2.bind(null,t.eventManager),t.nu.Tu=K2.bind(null,t.eventManager),t}function cO(r){const t=St(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=sO.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=aO.bind(null,t),t}class ah{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Sh(t.databaseInfo.databaseId),this.sharedClientState=this.Au(t),this.persistence=this.Ru(t),await this.persistence.start(),this.localStore=this.Vu(t),this.gcScheduler=this.mu(t,this.localStore),this.indexBackfillerScheduler=this.fu(t,this.localStore)}mu(t,n){return null}fu(t,n){return null}Vu(t){return h2(this.persistence,new l2,t.initialUser,this.serializer)}Ru(t){return new Q0(eg.Ei,this.serializer)}Au(t){return new _2}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ah.provider={build:()=>new ah};class hO extends ah{constructor(t){super(),this.cacheSizeBytes=t}mu(t,n){Ht(this.persistence.referenceDelegate instanceof rh,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new QD(s,t.asyncQueue,n)}Ru(t){const n=this.cacheSizeBytes!==void 0?rn.withCacheSize(this.cacheSizeBytes):rn.DEFAULT;return new Q0(s=>rh.Ei(s,n),this.serializer)}}class wm{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>EE(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=lO.bind(null,this.syncEngine),await j2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new q2}()}createDatastore(t){const n=Sh(t.databaseInfo.databaseId),s=function(u){return new S2(u)}(t.databaseInfo);return function(u,f,m,p){return new I2(u,f,m,p)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return function(s,o,u,f,m){return new D2(s,o,u,f,m)}(this.localStore,this.datastore,t.asyncQueue,n=>EE(this.syncEngine,n,0),function(){return mE.C()?new mE:new v2}())}createSyncEngine(t,n){return function(o,u,f,m,p,y,E){const S=new Z2(o,u,f,m,p,y);return E&&(S.hu=!0),S}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(o){const u=St(o);st(zs,"RemoteStore shutting down."),u.aa.add(5),await Yl(u),u.ca.shutdown(),u.la.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}wm.provider={build:()=>new wm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fO{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.pu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.pu(this.observer.error,t):Xi("Uncaught Error in snapshot listener:",t.toString()))}yu(){this.muted=!0}pu(t,n){setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr="FirestoreClient";class dO{constructor(t,n,s,o,u){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=o,this.user=Qe.UNAUTHENTICATED,this.clientId=s0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async f=>{st(Hr,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f}),this.appCheckCredentials.start(s,f=>(st(Hr,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new kr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=ug(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Zd(r,t){r.asyncQueue.verifyOperationInProgress(),st(Hr,"Initializing OfflineComponentProvider");const n=r.configuration;await t.initialize(n);let s=n.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await Y0(t.localStore,o),s=o)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function AE(r,t){r.asyncQueue.verifyOperationInProgress();const n=await mO(r);st(Hr,"Initializing OnlineComponentProvider"),await t.initialize(n,r.configuration),r.setCredentialChangeListener(s=>pE(t.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>pE(t.remoteStore,o)),r._onlineComponents=t}async function mO(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){st(Hr,"Using user provided OfflineComponentProvider");try{await Zd(r,r._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(o){return o.name==="FirebaseError"?o.code===X.FAILED_PRECONDITION||o.code===X.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(n))throw n;Xa("Error using user provided cache. Falling back to memory cache: "+n),await Zd(r,new ah)}}else st(Hr,"Using default OfflineComponentProvider"),await Zd(r,new hO(void 0));return r._offlineComponents}async function fA(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(st(Hr,"Using user provided OnlineComponentProvider"),await AE(r,r._uninitializedComponentsProvider._online)):(st(Hr,"Using default OnlineComponentProvider"),await AE(r,new wm))),r._onlineComponents}function gO(r){return fA(r).then(t=>t.syncEngine)}async function pO(r){const t=await fA(r),n=t.eventManager;return n.onListen=W2.bind(null,t.syncEngine),n.onUnlisten=eO.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=J2.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=nO.bind(null,t.syncEngine),n}function yO(r,t,n={}){const s=new kr;return r.asyncQueue.enqueueAndForget(async()=>function(u,f,m,p,y){const E=new fO({next:C=>{E.yu(),f.enqueueAndForget(()=>F2(u,S)),C.fromCache&&p.source==="server"?y.reject(new ot(X.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(C)},error:C=>y.reject(C)}),S=new Q2(m,E,{includeMetadataChanges:!0,Fa:!0});return H2(u,S)}(await pO(r),r.asyncQueue,t,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dA(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mA(r,t,n){if(!n)throw new ot(X.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function _O(r,t,n,s){if(t===!0&&s===!0)throw new ot(X.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function wE(r){if(!ft.isDocumentKey(r))throw new ot(X.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function bE(r){if(ft.isDocumentKey(r))throw new ot(X.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Rh(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(s){return s.constructor?s.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":_t(12329,{type:typeof r})}function js(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new ot(X.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Rh(r);throw new ot(X.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA="firestore.googleapis.com",RE=!0;class IE{constructor(t){var n,s;if(t.host===void 0){if(t.ssl!==void 0)throw new ot(X.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=gA,this.ssl=RE}else this.host=t.host,this.ssl=(n=t.ssl)!==null&&n!==void 0?n:RE;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=K0;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<GD)throw new ot(X.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}_O("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dA((s=t.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new ot(X.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new ot(X.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new ot(X.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ih{constructor(t,n,s,o){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new IE({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ot(X.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new ot(X.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new IE(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new AC;switch(s.type){case"firstParty":return new RC(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ot(X.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=SE.get(n);s&&(st("ComponentProvider","Removing Datastore"),SE.delete(n),s.terminate())}(this),Promise.resolve()}}function vO(r,t,n,s={}){var o;const u=(r=js(r,Ih))._getSettings(),f=Object.assign(Object.assign({},u),{emulatorOptions:r._getEmulatorOptions()}),m=`${t}:${n}`;u.host!==gA&&u.host!==m&&Xa("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p=Object.assign(Object.assign({},u),{host:m,ssl:!1,emulatorOptions:s});if(!Ur(p,f)&&(r._setSettings(p),s.mockUserToken)){let y,E;if(typeof s.mockUserToken=="string")y=s.mockUserToken,E=Qe.MOCK_USER;else{y=mw(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const S=s.mockUserToken.sub||s.mockUserToken.user_id;if(!S)throw new ot(X.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new Qe(S)}r._authCredentials=new SC(new i0(y,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new lo(this.firestore,t,this._query)}}class _n{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new _n(this.firestore,t,this._key)}}class xr extends lo{constructor(t,n,s){super(t,n,A0(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new _n(this.firestore,null,new ft(t))}withConverter(t){return new xr(this.firestore,t,this._path)}}function hi(r,t,...n){if(r=ve(r),mA("collection","path",t),r instanceof Ih){const s=te.fromString(t,...n);return bE(s),new xr(r,null,s)}{if(!(r instanceof _n||r instanceof xr))throw new ot(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(te.fromString(t,...n));return bE(s),new xr(r.firestore,null,s)}}function Ya(r,t,...n){if(r=ve(r),arguments.length===1&&(t=s0.newId()),mA("doc","path",t),r instanceof Ih){const s=te.fromString(t,...n);return wE(s),new _n(r,null,new ft(s))}{if(!(r instanceof _n||r instanceof xr))throw new ot(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(te.fromString(t,...n));return wE(s),new _n(r.firestore,r instanceof xr?r.converter:null,new ft(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE="AsyncQueue";class DE{constructor(t=Promise.resolve()){this.Qu=[],this.$u=!1,this.Uu=[],this.Ku=null,this.Wu=!1,this.Gu=!1,this.zu=[],this.y_=new $0(this,"async_queue_retry"),this.ju=()=>{const s=$d();s&&st(CE,"Visibility state changed to "+s.visibilityState),this.y_.A_()},this.Hu=t;const n=$d();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.ju)}get isShuttingDown(){return this.$u}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ju(),this.Yu(t)}enterRestrictedMode(t){if(!this.$u){this.$u=!0,this.Gu=t||!1;const n=$d();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ju)}}enqueue(t){if(this.Ju(),this.$u)return new Promise(()=>{});const n=new kr;return this.Yu(()=>this.$u&&this.Gu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Qu.push(t),this.Zu()))}async Zu(){if(this.Qu.length!==0){try{await this.Qu[0](),this.Qu.shift(),this.y_.reset()}catch(t){if(!ao(t))throw t;st(CE,"Operation failed with retryable error: "+t)}this.Qu.length>0&&this.y_.E_(()=>this.Zu())}}Yu(t){const n=this.Hu.then(()=>(this.Wu=!0,t().catch(s=>{throw this.Ku=s,this.Wu=!1,Xi("INTERNAL UNHANDLED ERROR: ",OE(s)),s}).then(s=>(this.Wu=!1,s))));return this.Hu=n,n}enqueueAfterDelay(t,n,s){this.Ju(),this.zu.indexOf(t)>-1&&(n=0);const o=lg.createAndSchedule(this,t,n,s,u=>this.Xu(u));return this.Uu.push(o),o}Ju(){this.Ku&&_t(47125,{ec:OE(this.Ku)})}verifyOperationInProgress(){}async tc(){let t;do t=this.Hu,await t;while(t!==this.Hu)}nc(t){for(const n of this.Uu)if(n.timerId===t)return!0;return!1}rc(t){return this.tc().then(()=>{this.Uu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Uu)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.tc()})}sc(t){this.zu.push(t)}Xu(t){const n=this.Uu.indexOf(t);this.Uu.splice(n,1)}}function OE(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}class $l extends Ih{constructor(t,n,s,o){super(t,n,s,o),this.type="firestore",this._queue=new DE,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new DE(t),this._firestoreClient=void 0,await t}}}function EO(r,t){const n=typeof r=="object"?r:Cm(),s=typeof r=="string"?r:Zc,o=Hs(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const u=fw("firestore");u&&vO(o,...u)}return o}function pA(r){if(r._terminated)throw new ot(X.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||TO(r),r._firestoreClient}function TO(r){var t,n,s;const o=r._freezeSettings(),u=function(m,p,y,E){return new BC(m,p,y,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,dA(E.experimentalLongPollingOptions),E.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((n=o.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new dO(r._authCredentials,r._appCheckCredentials,r._queue,u,r._componentsProvider&&function(m){const p=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(p),_online:p}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(t){this._byteString=t}static fromBase64String(t){try{return new eo(qe.fromBase64String(t))}catch(n){throw new ot(X.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new eo(qe.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new ot(X.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Be(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new ot(X.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new ot(X.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Ct(this._lat,t._lat)||Ct(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(t){this._values=(t||[]).map(n=>n)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(s,o){if(s.length!==o.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==o[u])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AO=/^__.*__$/;class SO{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Qr(t,this.data,this.fieldMask,n,this.fieldTransforms):new Kl(t,this.data,n,this.fieldTransforms)}}class yA{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return new Qr(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function _A(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _t(40011,{oc:r})}}class pg{constructor(t,n,s,o,u,f){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=o,u===void 0&&this._c(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get oc(){return this.settings.oc}ac(t){return new pg(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}uc(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),o=this.ac({path:s,cc:!1});return o.lc(t),o}hc(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),o=this.ac({path:s,cc:!1});return o._c(),o}Pc(t){return this.ac({path:void 0,cc:!0})}Tc(t){return oh(t,this.settings.methodName,this.settings.Ic||!1,this.path,this.settings.Ec)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}_c(){if(this.path)for(let t=0;t<this.path.length;t++)this.lc(this.path.get(t))}lc(t){if(t.length===0)throw this.Tc("Document fields must not be empty");if(_A(this.oc)&&AO.test(t))throw this.Tc('Document fields cannot begin and end with "__"')}}class wO{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||Sh(t)}dc(t,n,s,o=!1){return new pg({oc:t,methodName:n,Ec:s,path:Be.emptyPath(),cc:!1,Ic:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function yg(r){const t=r._freezeSettings(),n=Sh(r._databaseId);return new wO(r._databaseId,!!t.ignoreUndefinedProperties,n)}function bO(r,t,n,s,o,u={}){const f=r.dc(u.merge||u.mergeFields?2:0,t,n,o);_g("Data must be an object, but it was:",f,s);const m=vA(s,f);let p,y;if(u.merge)p=new pn(f.fieldMask),y=f.fieldTransforms;else if(u.mergeFields){const E=[];for(const S of u.mergeFields){const C=bm(t,S,n);if(!f.contains(C))throw new ot(X.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);TA(E,C)||E.push(C)}p=new pn(E),y=f.fieldTransforms.filter(S=>p.covers(S.field))}else p=null,y=f.fieldTransforms;return new SO(new sn(m),p,y)}class Dh extends dg{_toFieldTransform(t){if(t.oc!==2)throw t.oc===1?t.Tc(`${this._methodName}() can only appear at the top level of your update data`):t.Tc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Dh}}function RO(r,t,n,s){const o=r.dc(1,t,n);_g("Data must be an object, but it was:",o,s);const u=[],f=sn.empty();Kr(s,(p,y)=>{const E=vg(t,p,n);y=ve(y);const S=o.hc(E);if(y instanceof Dh)u.push(E);else{const C=Zl(y,S);C!=null&&(u.push(E),f.set(E,C))}});const m=new pn(u);return new yA(f,m,o.fieldTransforms)}function IO(r,t,n,s,o,u){const f=r.dc(1,t,n),m=[bm(t,s,n)],p=[o];if(u.length%2!=0)throw new ot(X.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let C=0;C<u.length;C+=2)m.push(bm(t,u[C])),p.push(u[C+1]);const y=[],E=sn.empty();for(let C=m.length-1;C>=0;--C)if(!TA(y,m[C])){const B=m[C];let $=p[C];$=ve($);const et=f.hc(B);if($ instanceof Dh)y.push(B);else{const W=Zl($,et);W!=null&&(y.push(B),E.set(B,W))}}const S=new pn(y);return new yA(E,S,f.fieldTransforms)}function CO(r,t,n,s=!1){return Zl(n,r.dc(s?4:3,t))}function Zl(r,t){if(EA(r=ve(r)))return _g("Unsupported field value:",t,r),vA(r,t);if(r instanceof dg)return function(s,o){if(!_A(o.oc))throw o.Tc(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Tc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(o);u&&o.fieldTransforms.push(u)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.cc&&t.oc!==4)throw t.Tc("Nested arrays are not supported");return function(s,o){const u=[];let f=0;for(const m of s){let p=Zl(m,o.Pc(f));p==null&&(p={nullValue:"NULL_VALUE"}),u.push(p),f++}return{arrayValue:{values:u}}}(r,t)}return function(s,o){if((s=ve(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return cD(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=be.fromDate(s);return{timestampValue:ih(o.serializer,u)}}if(s instanceof be){const u=new be(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ih(o.serializer,u)}}if(s instanceof mg)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof eo)return{bytesValue:z0(o.serializer,s._byteString)};if(s instanceof _n){const u=o.databaseId,f=s.firestore._databaseId;if(!f.isEqual(u))throw o.Tc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Jm(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof gg)return function(f,m){return{mapValue:{fields:{[d0]:{stringValue:m0},[Wc]:{arrayValue:{values:f.toArray().map(y=>{if(typeof y!="number")throw m.Tc("VectorValues must only contain numeric values.");return Xm(m.serializer,y)})}}}}}}(s,o);throw o.Tc(`Unsupported field value: ${Rh(s)}`)}(r,t)}function vA(r,t){const n={};return o0(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Kr(r,(s,o)=>{const u=Zl(o,t.uc(s));u!=null&&(n[s]=u)}),{mapValue:{fields:n}}}function EA(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof be||r instanceof mg||r instanceof eo||r instanceof _n||r instanceof dg||r instanceof gg)}function _g(r,t,n){if(!EA(n)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(n)){const s=Rh(n);throw s==="an object"?t.Tc(r+" a custom object"):t.Tc(r+" "+s)}}function bm(r,t,n){if((t=ve(t))instanceof Ch)return t._internalPath;if(typeof t=="string")return vg(r,t);throw oh("Field path arguments must be of type string or ",r,!1,void 0,n)}const DO=new RegExp("[~\\*/\\[\\]]");function vg(r,t,n){if(t.search(DO)>=0)throw oh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new Ch(...t.split("."))._internalPath}catch{throw oh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function oh(r,t,n,s,o){const u=s&&!s.isEmpty(),f=o!==void 0;let m=`Function ${t}() called with invalid data`;n&&(m+=" (via `toFirestore()`)"),m+=". ";let p="";return(u||f)&&(p+=" (found",u&&(p+=` in field ${s}`),f&&(p+=` in document ${o}`),p+=")"),new ot(X.INVALID_ARGUMENT,m+r+p)}function TA(r,t){return r.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(t,n,s,o,u){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new _n(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new OO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Eg("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class OO extends AA{data(){return super.data()}}function Eg(r,t){return typeof t=="string"?vg(r,t):t instanceof Ch?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NO(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ot(X.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Tg{}class MO extends Tg{}function Ag(r,t,...n){let s=[];t instanceof Tg&&s.push(t),s=s.concat(n),function(u){const f=u.filter(p=>p instanceof wg).length,m=u.filter(p=>p instanceof Oh).length;if(f>1||f>0&&m>0)throw new ot(X.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)r=o._apply(r);return r}class Oh extends MO{constructor(t,n,s){super(),this._field=t,this._op=n,this._value=s,this.type="where"}static _create(t,n,s){return new Oh(t,n,s)}_apply(t){const n=this._parse(t);return SA(t._query,n),new lo(t.firestore,t.converter,mm(t._query,n))}_parse(t){const n=yg(t.firestore);return function(u,f,m,p,y,E,S){let C;if(y.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new ot(X.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){ME(S,E);const $=[];for(const et of S)$.push(NE(p,u,et));C={arrayValue:{values:$}}}else C=NE(p,u,S)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||ME(S,E),C=CO(m,f,S,E==="in"||E==="not-in");return _e.create(y,E,C)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function Sg(r,t,n){const s=t,o=Eg("where",r);return Oh._create(o,s,n)}class wg extends Tg{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new wg(t,n)}_parse(t){const n=this._queryConstraints.map(s=>s._parse(t)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Gn.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(o,u){let f=o;const m=u.getFlattenedFilters();for(const p of m)SA(f,p),f=mm(f,p)}(t._query,n),new lo(t.firestore,t.converter,mm(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function NE(r,t,n){if(typeof(n=ve(n))=="string"){if(n==="")throw new ot(X.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!S0(t)&&n.indexOf("/")!==-1)throw new ot(X.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=t.path.child(te.fromString(n));if(!ft.isDocumentKey(s))throw new ot(X.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Kv(r,new ft(s))}if(n instanceof _n)return Kv(r,n._key);throw new ot(X.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Rh(n)}.`)}function ME(r,t){if(!Array.isArray(r)||r.length===0)throw new ot(X.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function SA(r,t){const n=function(o,u){for(const f of o)for(const m of f.getFlattenedFilters())if(u.indexOf(m.op)>=0)return m.op;return null}(r.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new ot(X.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new ot(X.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class VO{convertValue(t,n="none"){switch(Br(t)){case 0:return null;case 1:return t.booleanValue;case 2:return fe(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(jr(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw _t(62114,{value:t})}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const s={};return Kr(t,(o,u)=>{s[o]=this.convertValue(u,n)}),s}convertVectorValue(t){var n,s,o;const u=(o=(s=(n=t.fields)===null||n===void 0?void 0:n[Wc].arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(f=>fe(f.doubleValue));return new gg(u)}convertGeoPoint(t){return new mg(fe(t.latitude),fe(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=yh(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(kl(t));default:return null}}convertTimestamp(t){const n=zr(t);return new be(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=te.fromString(t);Ht(G0(s),9688,{name:t});const o=new xl(s.get(1),s.get(3)),u=new ft(s.popFirst(5));return o.isEqual(n)||Xi(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PO(r,t,n){let s;return s=r?r.toFirestore(t):t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class kO extends AA{constructor(t,n,s,o,u,f){super(t,n,s,o,f),this._firestore=t,this._firestoreImpl=t,this.metadata=u}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Lc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(Eg("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Lc extends kO{data(t={}){return super.data(t)}}class xO{constructor(t,n,s,o){this._firestore=t,this._userDataWriter=n,this._snapshot=o,this.metadata=new Cc(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new Lc(this._firestore,this._userDataWriter,s.key,s,new Cc(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ot(X.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map(m=>{const p=new Lc(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Cc(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);return m.doc,{type:"added",doc:p,oldIndex:-1,newIndex:f++}})}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(m=>u||m.type!==3).map(m=>{const p=new Lc(o._firestore,o._userDataWriter,m.doc.key,m.doc,new Cc(o._snapshot.mutatedKeys.has(m.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,E=-1;return m.type!==0&&(y=f.indexOf(m.doc.key),f=f.delete(m.doc.key)),m.type!==1&&(f=f.add(m.doc),E=f.indexOf(m.doc.key)),{type:UO(m.type),doc:p,oldIndex:y,newIndex:E}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function UO(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return _t(61501,{type:r})}}class LO extends VO{constructor(t){super(),this.firestore=t}convertBytes(t){return new eo(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new _n(this.firestore,null,n)}}function bg(r){r=js(r,lo);const t=js(r.firestore,$l),n=pA(t),s=new LO(t);return NO(r._query),yO(n,r._query).then(o=>new xO(t,s,r,o))}function zc(r,t,n,...s){r=js(r,_n);const o=js(r.firestore,$l),u=yg(o);let f;return f=typeof(t=ve(t))=="string"||t instanceof Ch?IO(u,"updateDoc",r._key,t,n,s):RO(u,"updateDoc",r._key,t),Ig(o,[f.toMutation(r._key,qn.exists(!0))])}function zO(r){return Ig(js(r.firestore,$l),[new $m(r._key,qn.none())])}function Rg(r,t){const n=js(r.firestore,$l),s=Ya(r),o=PO(r.converter,t);return Ig(n,[bO(yg(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,qn.exists(!1))]).then(()=>s)}function Ig(r,t){return function(s,o){const u=new kr;return s.asyncQueue.enqueueAndForget(async()=>iO(await gO(s),o,u)),u.promise}(pA(r),t)}(function(t,n=!0){(function(o){ro=o})(no),pi(new Hn("firestore",(s,{instanceIdentifier:o,options:u})=>{const f=s.getProvider("app").getImmediate(),m=new $l(new wC(s.getProvider("auth-internal")),new IC(f,s.getProvider("app-check-internal")),function(y,E){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new ot(X.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xl(y.options.projectId,E)}(f,o),f);return u=Object.assign({useFetchStreams:n},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),Vn(Pv,kv,t),Vn(Pv,kv,"esm2017")})();const jO={apiKey:"AIzaSyCEipbFhzU8ul6goGa2cts73jj4SQER9v0",authDomain:"budgetme-84ef2.firebaseapp.com",projectId:"budgetme-84ef2",storageBucket:"budgetme-84ef2.firebasestorage.app",messagingSenderId:"757066442495",appId:"1:757066442495:web:3d4809d249975cac7aceca",measurementId:"G-RCGK2RDHQX"},Cg=GE(jO);iI(Cg);const Bs=EC(Cg),jn=EO(Cg);function BO({setIsRegistered:r}){const[t,n]=bt.useState(""),[s,o]=bt.useState(""),[u,f]=bt.useState(null);async function m(){try{await r1(Bs,t,s),f("Zarejestrowano"),r(!0)}catch{f("Coś poszło nie tak")}}return K.jsx(K.Fragment,{children:K.jsxs("div",{className:"SignUpContainer",children:[K.jsx("h2",{children:"Zarejestruj się"}),K.jsx("input",{type:"text",placeholder:"E-mail",onChange:p=>n(p.target.value)}),K.jsx("input",{type:"password",placeholder:"Password",onChange:p=>o(p.target.value)}),K.jsx("button",{onClick:m,children:"Zarejestruj"}),K.jsx("p",{onClick:()=>r(!0),children:"Masz już konto? Zaloguj się"}),u&&K.jsx("h2",{children:u})]})})}function qO({setIsLogged:r,setIsRegistered:t}){const[n,s]=bt.useState(""),[o,u]=bt.useState(""),[f,m]=bt.useState(null);async function p(){try{await s1(Bs,n,o),m(`Zalogowano jako ${n}`),r(!0)}catch{m("Coś poszło nie tak")}}return K.jsx(K.Fragment,{children:K.jsxs("div",{className:"LogInContainer",children:[K.jsx("h2",{children:"Zaloguj się"}),K.jsx("input",{type:"text",placeholder:"E-mail",onChange:y=>s(y.target.value)}),K.jsx("input",{type:"password",placeholder:"Password",onChange:y=>u(y.target.value)}),K.jsx("button",{onClick:p,children:"Zaloguj"}),K.jsx("p",{onClick:()=>t(!1),children:"Nie masz konta? Zarejestruj się"}),f&&K.jsxs("h2",{children:[f," "]})]})})}function HO({isLogged:r,fetchExpenses:t}){const[n,s]=bt.useState(""),[o,u]=bt.useState(""),[f,m]=bt.useState(""),[p,y]=bt.useState("");async function E(){if(r)if(n&&o&&f!==""){const S={userID:Bs.currentUser.uid,name:n,number:p,amount:o,category:f,date:new Date};console.log(S),await Rg(hi(jn,"expenses"),S),t(),alert("Dodano wydatek!"),s(""),y(""),u("")}else alert("Uzupełnij wszystkie dane");else alert("Musisz być zalogowany żeby dodać wydatek")}return K.jsxs("div",{className:"AddExpenseContainer",children:[K.jsx("h2",{children:"Dodaj wydatek"}),K.jsx("input",{value:n,type:"text",placeholder:"Nazwa",onChange:S=>s(S.target.value)}),K.jsx("input",{value:p,type:"number",placeholder:"Liczba",onChange:S=>y(S.target.value)}),K.jsx("input",{value:o,type:"number",placeholder:"Kwota",onChange:S=>u(S.target.value)}),K.jsxs("select",{name:"Kategoria",id:"",onChange:S=>m(S.target.value),children:[K.jsx("option",{value:"Wybierz kategorię",children:"Wybierz kategorię"}),K.jsx("option",{value:"Jedzenie",children:"Jedzenie"}),K.jsx("option",{value:"Rozrywka",children:"Rozrywka"}),K.jsx("option",{value:"Sport",children:"Sport"}),K.jsx("option",{value:"Pojazdy",children:"Pojazdy"}),K.jsx("option",{value:"Rachunki",children:"Rachunki"}),K.jsx("option",{value:"Inne",children:"Inne"})]}),K.jsx("button",{onClick:E,children:"Dodaj"})]})}function FO({expensesList:r,setExpensesList:t,DeleteExpense:n,displayedExpensesList:s,setDisplayedExpensesList:o}){const u=new Date,f=new Date;f.setDate(u.getDate()-1);const m=new Date;m.setMonth(u.getMonth()-1),new Date().setFullYear(u.getFullYear()-1);function y(){const C=r.filter(B=>B.date.seconds*1e3>=f&&B.date.seconds*1e3<=u);o(C)}function E(){const C=r.filter(B=>B.date.seconds*1e3>=m&&B.date.seconds*1e3<=u);o(C)}function S(C){switch(C.target.value){case"All":o(r);break;case"LastWeek":y();break;case"LastMonth":E();break}}return bt.useEffect(()=>{o(r),console.log(r)},[r]),K.jsx(K.Fragment,{children:K.jsxs("div",{className:"ExpensesContainer",children:[K.jsxs("select",{onChange:S,name:"",id:"",children:[K.jsx("option",{value:"All",children:"Wszystkie"}),K.jsx("option",{value:"LastWeek",children:"Ostatni tydzień"}),K.jsx("option",{value:"LastMonth",children:"Ostatni miesiąc"}),K.jsx("option",{value:"LastYear",children:"Ostatni rok"})]}),s.map((C,B)=>K.jsx(K.Fragment,{children:K.jsxs("div",{className:"SingleExpenseContainer",children:[K.jsx("h1",{children:`${C.name} - ${C.number}`}),K.jsx("h2",{children:`${C.amount} zł - ${C.category}  `}),K.jsx("h2",{children:`${new Date(C.date.seconds*1e3).toLocaleDateString("pl-PL")} ${new Date(C.date.seconds*1e3).toLocaleTimeString("pl-PL",{hour:"2-digit",minute:"2-digit"})}`}),K.jsx("button",{onClick:()=>{n(C.id)},children:"Usuń"})]},B)}))]})})}function GO({expensesList:r,setExpenseSum:t,expenseSum:n,displayedExpensesList:s}){function o(E){let S=0;for(let C=0;C<E.length;C++)S+=parseFloat(E[C].amount);return S}bt.useEffect(()=>{const E=o(s);t(E)},[s]);const[u,f]=bt.useState({Food:0,Attractions:0,Sport:0,Vehicles:0,Bills:0,Others:0});function m(){let E=0,S=0,C=0,B=0,$=0,et=0;for(let W=0;W<s.length;W++){let lt=parseFloat(s[W].amount);switch(s[W].category){case"Jedzenie":E+=lt;break;case"Rozrywka":S+=lt;break;case"Sport":C+=lt;break;case"Pojazdy":B+=lt;break;case"Rachunki":$+=lt;break;case"Inne":et+=lt;break}}f({Food:E,Attractions:S,Sport:C,Vehicles:B,Bills:$,Others:et})}function p(){let E="",S=0;for(let C in u)u[C]>S&&(S=u[C],E=C);return{maxCategory:E,maxAmount:S}}bt.useEffect(()=>{m()},[s]);const y=p();return K.jsx(K.Fragment,{children:K.jsxs("div",{className:"SummaryContainer",children:[K.jsxs("h3",{children:["Łącznie wydałeś ",K.jsxs("strong",{children:[n," zł"]})]}),K.jsxs("h3",{children:["🍕 Jedzenie: ",u.Food," zł"]}),K.jsxs("h3",{children:["🎉 Rozrywka: ",u.Attractions," zł"]}),K.jsxs("h3",{children:["🤾 Sport: ",u.Sport," zł"]}),K.jsxs("h3",{children:["🚗 Pojazdy: ",u.Vehicles," zł"]}),K.jsxs("h3",{children:["💴 Rachunki: ",u.Bills," zł"]}),K.jsxs("h3",{children:["➕ Inne: ",u.Others," zł"]}),K.jsxs("h3",{children:["Najwięcej wydajesz na ",y.maxCategory," - ",y.maxAmount," zł"]})]})})}function KO({budget:r,setBudget:t,expenseSum:n,user:s,collectedMoney:o}){const[u,f]=bt.useState(0),[m,p]=bt.useState(null),[y,E]=bt.useState(null),[S,C]=bt.useState(!1),[B,$]=bt.useState("");async function et(){if(u!==0){if(y){const rt=Ya(hi(jn,"budget"),y);await zc(rt,{budget:parseFloat(u)})}else{const rt={userID:Bs.currentUser.uid,budget:parseFloat(u)},Et=await Rg(hi(jn,"budget"),rt);E(Et.id)}alert("Zmieniono budżet"),W(),C(!1)}}async function W(){const rt=Ag(hi(jn,"budget"),Sg("userID","==",s.uid)),Et=await bg(rt);if(!Et.empty){const ut=Et.docs[Et.docs.length-1],wt=ut.data();t(wt.budget),E(ut.id)}}bt.useEffect(()=>{W()},[s]);let lt=0;bt.useEffect(()=>{lt=r-n-o,p(lt),mt()},[n,r,o]);function mt(){lt>=.8*r?$("Super ci idzie!"):lt>=.5*r&&lt<.8*r?$("Jeszcze jest okej"):lt>=.3*r&&lt<.5*r?$("Może zaczniemy oszczędzać?"):lt>=0*r&&lt<.3*r?$("Klepiemy biede :(("):lt<=0&&$("Nie masz już środków do wydania!!!")}return K.jsxs("div",{className:"BudgetContainer",children:[K.jsxs("h1",{children:["Twój budżet to: ",r," zł"]}),K.jsxs("h2",{children:["Pozostało ci jeszcze ",m," zł"]}),K.jsx("p",{onClick:()=>C(rt=>!rt),children:"Zmień"}),S&&K.jsxs(K.Fragment,{children:[K.jsx("input",{type:"number",placeholder:"Wpisz swój budżet",onChange:rt=>f(parseFloat(rt.target.value))}),K.jsx("button",{onClick:et,children:"Zmień"})]}),K.jsx("h1",{children:B})]})}function QO({user:r,collectedMoney:t,setCollectedMoney:n}){const[s,o]=bt.useState(""),[u,f]=bt.useState("Brak Celu"),[m,p]=bt.useState(""),[y,E]=bt.useState(0),[S,C]=bt.useState(null),[B,$]=bt.useState(0),[et,W]=bt.useState(!1),[lt,mt]=bt.useState(null),[rt,Et]=bt.useState(0);async function ut(){const b=Ag(hi(jn,"Goal"),Sg("userID","==",r.uid)),N=await bg(b);if(!N.empty){const V=N.docs[N.docs.length-1],k=V.data();f(k.name),E(parseFloat(k.price)),n(parseFloat(k.collectedMoney)),C(V.id)}}async function wt(){const b=Ya(hi(jn,"Goal"),S);await zc(b,{collectedMoney:0}),await ut(),mt("")}async function M(){if(s!==""&&m>0){if(S){const b=Ya(hi(jn,"Goal"),S);await zc(b,{name:s,price:parseFloat(m)})}else{const b={userID:Bs.currentUser.uid,name:s,price:parseFloat(m),collectedMoney:0},N=await Rg(hi(jn,"Goal"),b);C(N.id)}alert("Zmieniono cel!"),ut(),f(s),E(m),mt(""),o(""),p("")}else alert("Podaj wszystkie informacje")}async function w(){if(rt!==0){let b=t+rt;if(S){const N=Ya(hi(jn,"Goal"),S);await zc(N,{collectedMoney:b}),await ut(),alert("Dodano kwotę"),Et("")}}else alert("Podaj poprawną kwotę")}return bt.useEffect(()=>{ut(),wt()},[r]),bt.useEffect(()=>{$(t/y*100),t>=y&&mt("Gratulacje! Uzbierałeś całą sumę!")},[t,y]),K.jsxs("div",{className:"GoalBudgetContainer",children:[K.jsxs("h1",{children:["Twój cel to: ",u]}),K.jsxs("h1",{children:["Zebrałeś już ",t,"/",y," zł"]}),K.jsx("progress",{value:B,max:100,id:"myProgress"}),K.jsxs("h2",{children:["Procentowo to ",B.toFixed(2,0),"%"]}),K.jsx("h2",{children:lt}),K.jsx("p",{children:"Dodaj na swój cel"}),K.jsx("input",{value:rt,type:"number",placeholder:"Podaj kwotę",onChange:b=>Et(parseFloat(b.target.value))}),K.jsx("button",{onClick:w,children:"Dodaj"}),K.jsx("br",{}),K.jsx("br",{}),K.jsx("button",{onClick:wt,children:"Usuń zebrane pieniądze"}),K.jsx("p",{onClick:()=>W(b=>!b),children:"Zmień cel"}),et&&K.jsxs(K.Fragment,{children:[K.jsx("input",{value:s,type:"text",placeholder:"Podaj nazwę",onChange:b=>o(b.target.value)}),K.jsx("input",{value:m,type:"number",placeholder:"Podaj cenę",onChange:b=>p(parseFloat(b.target.value))}),K.jsx("button",{onClick:M,children:"Zmień"})]})]})}function YO(){const[r,t]=bt.useState(!0),[n,s]=bt.useState(!0),[o,u]=bt.useState([]),[f,m]=bt.useState(null),[p,y]=bt.useState(0),[E,S]=bt.useState(0),[C,B]=bt.useState(o),[$,et]=bt.useState(0);function W(){u1(Bs),s(!1)}async function lt(rt){try{const Et=Ya(jn,"expenses",rt);await zO(Et),u(o.filter(ut=>ut.id!==rt))}catch{console.log("Nie udało sie usunąć")}}bt.useEffect(()=>{l1(Bs,rt=>{m(rt)})},[]);async function mt(){const rt=Ag(hi(jn,"expenses"),Sg("userID","==",f.uid)),ut=(await bg(rt)).docs.map(wt=>({id:wt.id,...wt.data()}));u(ut)}return bt.useEffect(()=>{f&&mt()},[f]),K.jsxs(K.Fragment,{children:[K.jsx("nav",{children:K.jsxs("ul",{children:[K.jsx("li",{id:"BudgetMe",children:"BudgetMe"}),K.jsx("li",{children:"Strona główna"}),K.jsx("li",{children:"Wydatki"}),K.jsx("li",{children:"Budżet"}),K.jsx("li",{children:"Cele"}),K.jsx("li",{children:"Statystyki"}),K.jsx("li",{children:"Ustawienia"}),K.jsx("li",{children:"Profil"}),K.jsx("li",{onClick:W,children:"Wyloguj"})]})}),K.jsx("h1",{id:"Options",children:"..."}),n?K.jsx(K.Fragment,{children:f&&K.jsxs(K.Fragment,{children:[K.jsx(HO,{isLogged:n,fetchExpenses:mt}),K.jsx(FO,{setDisplayedExpensesList:B,displayedExpensesList:C,DeleteExpense:lt,setExpensesList:u,expensesList:o}),K.jsx(GO,{displayedExpensesList:C,expensesList:o,setExpenseSum:y,expenseSum:p}),K.jsx(QO,{collectedMoney:E,setCollectedMoney:S,user:f}),K.jsx(KO,{collectedMoney:E,user:f,budget:$,setBudget:et,expenseSum:p})]})}):K.jsx(K.Fragment,{children:r?K.jsx(qO,{setIsLogged:s,setIsRegistered:t}):K.jsx(BO,{setIsRegistered:t})})]})}iw.createRoot(document.getElementById("root")).render(K.jsx(bt.StrictMode,{children:K.jsx(YO,{})}));
