(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{2392:function(e,r,t){Promise.resolve().then(t.bind(t,4728))},4728:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return s}});var a=t(7437),l=t(2265);function s(){let[e,r]=(0,l.useState)(""),[t,s]=(0,l.useState)(""),n=async()=>{if(""===t||""===e){alert("Please enter your name and a message before you submit.");return}try{await fetch("/api/sendEmail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,message:e})}),alert("Message sent!")}catch(e){alert("Error in sending message.\n Sorry :(")}};return(0,a.jsxs)("div",{className:"p-4 dark:text-white/90 mt-4 mx-auto max-w-2xl",children:[(0,a.jsx)("h2",{className:"text-4xl font-bold dark:text-white/90 mb-4",children:"Hit me up!"}),(0,a.jsxs)("div",{className:"mb-6 mt-10",children:[(0,a.jsx)("label",{htmlFor:"name",className:"block mb-2 text-xl text-gray-900 dark:text-white",children:"Name"}),(0,a.jsx)("div",{className:"lg:w-3/4 w-full",children:(0,a.jsx)("input",{type:"text",id:"name",className:"block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:'"After all this time?"',value:t,onChange:e=>s(e.target.value)})})]}),(0,a.jsxs)("div",{className:"mb-6",children:[(0,a.jsx)("label",{htmlFor:"message",className:"block mb-2 text-xl text-gray-900 dark:text-white",children:"Message"}),(0,a.jsx)("textarea",{id:"message",className:"block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:'"Always"',value:e,onChange:e=>r(e.target.value),required:!0})]}),(0,a.jsx)("div",{className:"flex justify-center items-center h-full",children:(0,a.jsx)("button",{onClick:n,className:"py-2 text-2xl p-4 bg-slate-500 text-white rounded hover:bg-slate-600",children:"Send"})})]})}},622:function(e,r,t){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=t(2265),l=Symbol.for("react.element"),s=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),n=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var a,d={},i=null,u=null;for(a in void 0!==t&&(i=""+t),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(u=r.ref),r)s.call(r,a)&&!o.hasOwnProperty(a)&&(d[a]=r[a]);if(e&&e.defaultProps)for(a in r=e.defaultProps)void 0===d[a]&&(d[a]=r[a]);return{$$typeof:l,type:e,key:i,ref:u,props:d,_owner:n.current}}r.jsx=d,r.jsxs=d},7437:function(e,r,t){"use strict";e.exports=t(622)}},function(e){e.O(0,[971,596,744],function(){return e(e.s=2392)}),_N_E=e.O()}]);