var a=(r,e,t)=>{if(!e.has(r))throw TypeError("Cannot "+t)};var i=(r,e,t)=>(a(r,e,"read from private field"),t?t.call(r):e.get(r)),f=(r,e,t)=>{if(e.has(r))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(r):e.set(r,t)},h=(r,e,t,l)=>(a(r,e,"write to private field"),l?l.call(r,t):e.set(r,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();var c,n;class d{constructor(e){f(this,c,void 0);f(this,n,[]);h(this,c,e)}get value(){return i(this,c)}set value(e){this.triggerCallbacks(e,null),h(this,c,e)}set(e,t){this.checkObjectType(),this.triggerCallbacks(t,e),i(this,c)[e]=t}get(e){return this.checkObjectType(),i(this,c)[e]}subscribe(e,t=!0){i(this,n).push(e),t&&this.triggerCallbacks(i(this,c),null)}unsubscribe(e){const t=i(this,n).indexOf(e);t!==-1&&i(this,n).splice(t,1),console.log("unsubscribe",i(this,n))}triggerCallbacks(e,t){for(const l of i(this,n))t?l(e,i(this,c)[t],t):l(e,i(this,c),null)}checkObjectType(){if(typeof i(this,c)!="object"||i(this,c)===null)throw new Error("State is not an object")}}c=new WeakMap,n=new WeakMap;window.StateZ=d;