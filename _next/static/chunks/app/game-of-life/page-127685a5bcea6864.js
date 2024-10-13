(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[32],{5506:function(e,t,r){Promise.resolve().then(r.bind(r,2883))},2883:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return n}});var a=r(7437),s=r(2265);class i{setupBoardArray(e){this.initializeBoard(e)}getNextStateArray(){let e=[];return this.getNextBoard().forEach(t=>t.forEach(t=>e.push(t))),e}getNextBoard(){let e=Array.from({length:this.rows},()=>Array(this.cols).fill(!1));for(let t=0;t<this.rows;t++)for(let r=0;r<this.cols;r++)e[t][r]=this.getNewCell(t,r);return e}getNewCell(e,t){return this.runAllRules(e,t,this.performSumOfNeighbours(e,t))}runAllRules(e,t,r){let a=this.board[e][t];return this.executeResurrectionRule(a,r,this.resurrectionNumber)||this.executeUnderPopulationRule(a,r,this.underpopulationLimit)&&this.executeOverPopulationRule(a,r,this.overpopulationLimit)}performSumOfNeighbours(e,t){let r=this.getXOperations(e),a=this.getYOperations(t),s=0;for(let i of r)for(let r of a)s+=this.board[e+i][t+r]?1:0;return s+=this.getOutOfBoundsAddition(e,t),s-=this.board[e][t]?1:0}getOutOfBoundsAddition(e,t){return this.outsideCells?this.isCornerCell(e,t)?5:this.isEdgeCell(e,t)?3:0:0}isCornerCell(e,t){return 0==e&&0==t||e==this.rows-1&&t==this.cols-1||0==e&&t==this.cols-1||e==this.rows-1&&0==t}isEdgeCell(e,t){return 0==e||e==this.rows-1||0==t||t==this.cols-1}getXOperations(e){let t=[];return 0===e?t.push(0,1):e===this.rows-1?t.push(-1,0):t.push(-1,0,1),t}getYOperations(e){let t=[];return 0===e?t.push(0,1):e===this.cols-1?t.push(-1,0):t.push(-1,0,1),t}initializeBoard(e){for(let t=0;t<this.rows;t++)for(let r=0;r<this.cols;r++){if((t+1)*(r+1)>e.length)return;this.board[t][r]=e[t*this.cols+r]}}constructor(e,t,r=2,a=3,s=3,i=!1){this.executeUnderPopulationRule=(e,t,r)=>e&&t>=r,this.executeOverPopulationRule=(e,t,r)=>e&&t<=r,this.executeResurrectionRule=(e,t,r)=>!e&&t===r,this.rows=e,this.cols=t,this.underpopulationLimit=r,this.overpopulationLimit=a,this.resurrectionNumber=s,this.board=Array.from({length:e},()=>Array(t).fill(!1)),this.outsideCells=i}}var n=()=>{let[e,t]=(0,s.useState)(20),[r,n]=(0,s.useState)(20),[l,o]=(0,s.useState)([]),[u,c]=(0,s.useState)(!1),[d,h]=(0,s.useState)(!1),[g,x]=(0,s.useState)("White"),[p,m]=(0,s.useState)("bg-white"),[b,f]=(0,s.useState)("bg-black"),[y,v]=(0,s.useState)(!0),w=(0,s.useRef)(null),[k,N]=(0,s.useState)(!1),[j,C]=(0,s.useState)(2),[O,S]=(0,s.useState)(3),[E,_]=(0,s.useState)(3),[A,L]=(0,s.useState)(!1),[R,B]=(0,s.useState)(!1),[M,D]=(0,s.useState)(!1);(0,s.useEffect)(()=>{let e=()=>{window.matchMedia("(max-width: 640px)").matches?(t(10),n(10)):window.matchMedia("(max-width: 768px)").matches?(t(15),n(15)):(t(20),n(20))};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,s.useEffect)(()=>{o(Array(e*r).fill(!1))},[e,r]),(0,s.useEffect)(()=>{let t;return u&&(t=setInterval(()=>{o(t=>(function(e,t,r,a){let{underpopLimit:s,overpopLimit:n,resurNumber:l,valueOfCellsOutsideTheBoard:o}=a,u=new i(t,r,s,n,l,o);return u.setupBoardArray(e),u.getNextStateArray()})(t,e,r,{overpopLimit:O,underpopLimit:j,resurNumber:E,valueOfCellsOutsideTheBoard:k}))},200)),()=>{t&&clearInterval(t)}},[u,e,r,k,O,j,E]);let P=(0,s.useCallback)(e=>{o(t=>{let r=[...t];return r[e]=y?"White"===g:"Black"===g,r})},[g,y]),z=e=>{h(!0),P(e)},I=e=>{d&&P(e)},W=()=>{h(!1)},T=e=>{e?(v(!0),m("bg-white"),f("bg-black")):(v(!1),f("bg-white"),m("bg-black"))};(0,s.useEffect)(()=>(window.addEventListener("mouseup",W),()=>{window.removeEventListener("mouseup",W)}),[]);let U=e=>{let{path:t}=e;return(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",className:"w-4 h-4",children:(0,a.jsx)("path",{d:t})})},Y=e=>{let{value:t,onIncrement:r,onDecrement:s,label:i}=e;return(0,a.jsxs)("div",{className:"flex justify-center items-center space-x-4",children:[(0,a.jsx)("label",{className:"text-base font-medium text-slate-700 dark:text-slate-300 w-40",children:i}),(0,a.jsxs)("div",{className:"items-center h-10 w-auto inline-flex",children:[(0,a.jsx)("button",{onClick:s,className:"h-full px-3 rounded-l bg-slate-800 dark:bg-slate-600 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:bg-slate-700 dark:hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-300 active:bg-slate-700 dark:active:bg-slate-500 disabled:opacity-50 flex items-center justify-center",type:"button",children:(0,a.jsx)(U,{path:"M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z"})}),(0,a.jsx)("input",{type:"number",value:t,readOnly:!0,className:"h-full w-16 flex-grow-0 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-center text-lg border-y border-slate-200 dark:border-slate-600 py-1 transition duration-300 ease focus:outline-none focus:border-slate-400 dark:focus:border-slate-500 hover:border-slate-300 dark:hover:border-slate-500 shadow-sm appearance-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"}),(0,a.jsx)("button",{onClick:r,className:"h-full px-3 rounded-r bg-slate-800 dark:bg-slate-600 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:bg-slate-700 dark:hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-300 active:bg-slate-700 dark:active:bg-slate-500 disabled:opacity-50 flex items-center justify-center",type:"button",children:(0,a.jsx)(U,{path:"M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z"})})]})]})};return(0,a.jsxs)("div",{className:"container p-4 mx-auto max-w-3xl overflow-hidden",children:[(0,a.jsx)("h1",{className:"text-3xl font-bold dark:text-white/90 mb-3 text-center",children:"Conway's Game of Life"}),(0,a.jsx)("div",{className:"grid gap-1 mt-4 mb-4 mx-auto",style:{gridTemplateColumns:"repeat(".concat(r,", minmax(0, 1fr))"),width:"fit-content",touchAction:"none"},children:l.map((e,t)=>(0,a.jsx)("div",{className:"w-6 h-6 border ".concat(e?p:b),onMouseDown:e=>{e.preventDefault(),z(t)},onMouseEnter:()=>I(t),onTouchStart:e=>{e.preventDefault(),P(t)},onTouchMove:e=>{e.preventDefault();let t=e.touches[0],r=document.elementFromPoint(t.clientX,t.clientY);if(null==r?void 0:r.classList.contains("w-6")){let e=Array.from(r.parentNode.children).indexOf(r);P(e)}}},t))}),(0,a.jsxs)("div",{className:"flex flex-wrap justify-center space-x-2 space-y-2 mb-4",children:[(0,a.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold mt-2 py-2 px-4 rounded",onClick:()=>c(!u),children:u?"Stop":"Start"}),(0,a.jsx)("button",{className:"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded",onClick:()=>{o(Array(e*r).fill(!1).map(()=>Math.random()>.7))},children:"Randomize"}),(0,a.jsx)("button",{className:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",onClick:()=>{o(Array(e*r).fill(!1))},children:"Clear"})]}),(0,a.jsxs)("div",{className:"space-y-6 p-4 bg-white dark:bg-slate-900 rounded-lg shadow",children:[(0,a.jsxs)("div",{ref:w,onClick:()=>L(!A),className:"relative",children:[(0,a.jsxs)("div",{className:"cursor-pointer mx-auto max-w-xs text-gray-700 dark:text-white/90 mt-2 px-4 py-2 rounded bg-gray-50 ring-1 ring-gray-300 dark:bg-gray-800 dark:ring-gray-600",children:["Live Cells Are: ",y?"White":"Black"]}),A&&(0,a.jsxs)("ul",{className:"z-10 absolute left-0 mt-2 w-full rounded bg-gray-50 ring-1 ring-gray-300 dark:bg-gray-800 dark:ring-gray-600",children:[(0,a.jsx)("li",{className:"cursor-pointer select-none px-4 py-2 dark:text-white/90 dark:hover:bg-gray-700 hover:bg-gray-200",onClick:()=>T(!0),children:"White"}),(0,a.jsx)("li",{className:"cursor-pointer select-none px-4 py-2 dark:text-white/90 dark:hover:bg-gray-700 hover:bg-gray-200",onClick:()=>T(!1),children:"Black"})]})]}),(0,a.jsxs)("div",{ref:w,onClick:()=>B(!R),className:"relative",children:[(0,a.jsxs)("div",{className:"cursor-pointer mx-auto max-w-xs text-gray-700 dark:text-white/90 mt-2 px-4 py-2 rounded bg-gray-50 ring-1 ring-gray-300 dark:bg-gray-800 dark:ring-gray-600",children:["Paint With Color: ",g]}),R&&(0,a.jsxs)("ul",{className:"z-10 absolute left-0 mt-2 w-full rounded bg-gray-50 ring-1 ring-gray-300 dark:bg-gray-800 dark:ring-gray-600",children:[(0,a.jsx)("li",{className:"cursor-pointer select-none px-4 py-2 dark:text-white/90 dark:hover:bg-gray-700 hover:bg-gray-200",onClick:()=>x("White"),children:"White"}),(0,a.jsx)("li",{className:"cursor-pointer select-none px-4 py-2 dark:text-white/90 dark:hover:bg-gray-700 hover:bg-gray-200",onClick:()=>x("Black"),children:"Black"})]})]}),(0,a.jsxs)("div",{ref:w,onClick:()=>D(!M),className:"relative",children:[(0,a.jsxs)("div",{className:"cursor-pointer mx-auto max-w-xs text-gray-700 dark:text-white/90 mt-2 px-4 py-2 rounded bg-gray-50 ring-1 ring-gray-300 dark:bg-gray-800 dark:ring-gray-600",children:["Cells Outside the Border Are: ",k?"Live":"Dead"]}),M&&(0,a.jsxs)("ul",{className:"z-10 absolute left-0 mt-2 w-full rounded bg-gray-50 ring-1 ring-gray-300 dark:bg-gray-800 dark:ring-gray-600",children:[(0,a.jsx)("li",{className:"cursor-pointer select-none px-4 py-2 dark:text-white/90 dark:hover:bg-gray-700 hover:bg-gray-200",onClick:()=>N(!0),children:"Live"}),(0,a.jsx)("li",{className:"cursor-pointer select-none px-4 py-2 dark:text-white/90 dark:hover:bg-gray-700 hover:bg-gray-200",onClick:()=>N(!1),children:"Dead"})]})]}),(0,a.jsx)(Y,{value:j,onIncrement:()=>{C(e=>Math.min(e+1,O))},onDecrement:()=>{C(e=>Math.max(e-1,0))},label:"Underpopulation Limit"}),(0,a.jsx)(Y,{value:O,onIncrement:()=>{S(e=>Math.min(e+1,8))},onDecrement:()=>{S(e=>Math.max(e-1,j))},label:"Overpopulation Limit"}),(0,a.jsx)(Y,{value:E,onIncrement:()=>{_(e=>Math.min(e+1,8))},onDecrement:()=>{_(e=>Math.max(e-1,0))},label:"Resurrection Number"})]})]})}},622:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=r(2265),s=Symbol.for("react.element"),i=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),n=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,r){var a,o={},u=null,c=null;for(a in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,a)&&!l.hasOwnProperty(a)&&(o[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===o[a]&&(o[a]=t[a]);return{$$typeof:s,type:e,key:u,ref:c,props:o,_owner:n.current}}t.jsx=o,t.jsxs=o},7437:function(e,t,r){"use strict";e.exports=r(622)}},function(e){e.O(0,[971,596,744],function(){return e(e.s=5506)}),_N_E=e.O()}]);