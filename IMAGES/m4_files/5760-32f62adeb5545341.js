"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5760],{85459:function(e,t,s){var n=s(52322);t.Z=e=>(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-49 141 512 512",width:16,height:16,"aria-hidden":!0,...e,children:(0,n.jsx)("path",{d:"M262.145 397 98.822 560.323c-9.763 9.763-9.763 25.592 0 35.355s25.592 9.763 35.355 0l181-181c4.882-4.881 7.323-11.279 7.323-17.677s-2.441-12.796-7.322-17.678l-181-181c-9.764-9.763-25.592-9.763-35.355 0s-9.763 25.592 0 35.355z"})})},43943:function(e,t,s){var n=s(52322);t.Z=e=>(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-49 141 512 512",width:16,height:16,"aria-hidden":!0,...e,children:(0,n.jsx)("path",{d:"m151.856 397 163.322-163.322c9.763-9.763 9.763-25.592 0-35.355s-25.592-9.763-35.355 0l-181 181C93.941 384.203 91.5 390.602 91.5 397s2.441 12.796 7.322 17.678l181 181c9.764 9.763 25.592 9.763 35.355 0s9.763-25.592 0-35.355z"})})},25760:function(e,t,s){let n;s.d(t,{_:function(){return c},S:function(){return b}});var l=s(52322),a=s(2784);s(5945),s(21595),s(32272);var o=s(46724),r="_12ftov2p _1286nb19f _1286nb117f",i=(0,o.c)({defaultClassName:"_12ftov2f _1286nb12i9 _1286nb1289 _1286nb123f _1286nb12df _1286nb12t9 _1286nb12tx _1286nb199 _1286nb19x _1286nb1ql _1286nb18l _1286nb168s _1286nb16eg",variantClassNames:{position:{left:"_12ftov2g _1286nb1153 _1286nb1yz",right:"_12ftov2h _1286nb1of _1286nb1ib"},style:{default:"_12ftov2e _1286nb187s",resources:"_12ftov29 _1286nb12t9 _1286nb12tx _1286nb16xs"}},defaultVariants:{position:"left",style:"default"},compoundVariants:[[{position:"left",style:"default"},"_12ftov2k"],[{position:"right",style:"default"},"_12ftov2l"],[{position:"right",style:"resources"},"_12ftov2m"],[{position:"left",style:"resources"},"_12ftov2n"]]}),f=(0,o.c)({defaultClassName:"_12ftov25 _12ftov22 _1286nb1g _1286nb1j _1286nb19f _1286nb18l _1286nb17u",variantClassNames:{fit:{false:"_12ftov26",true:"_12ftov24 _1286nb1213 _1286nb11mf _1286nb1k"}},defaultVariants:{fit:!1},compoundVariants:[]});let u=e=>{let{active:t=!1,ref:s}=e,[n,l]=(0,a.useState)(t),[o,r]=(0,a.useState)(!1),[i,f]=(0,a.useState)(!1),[u,c]=(0,a.useState)(0),[v,d]=(0,a.useState)(0),[_,b]=(0,a.useState)(0),[m]=(0,a.useState)(5),h=(0,a.useCallback)(e=>{let t=s.current;t&&(r(!0),b(e.pageX-t.offsetLeft),c(t.scrollLeft))},[s]),p=(0,a.useCallback)(()=>{r(!1)},[]),x=(0,a.useCallback)(e=>{let t=s.current;if(t&&o){e.preventDefault();let s=u-(e.pageX-t.offsetLeft-_);Math.abs(t.scrollLeft-s)>m&&(f(!0),d(s),t.scrollLeft=s)}},[o,s,u,_,m]),g=(0,a.useCallback)(e=>{i&&(e.preventDefault(),e.stopPropagation()),f(!1)},[i]);return(0,a.useEffect)(()=>{if(l(t),n){let e=s.current;return e&&(e.addEventListener("mousedown",h),e.addEventListener("mouseleave",p),e.addEventListener("mouseup",p),e.addEventListener("mousemove",x),e.addEventListener("click",g)),()=>{e&&(e.removeEventListener("mousedown",h),e.removeEventListener("mouseleave",p),e.removeEventListener("mouseup",p),e.removeEventListener("mousemove",x),e.removeEventListener("click",g))}}},[t,n,h,p,x,g,s]),{isActive:n,position:v}},c=e=>{let{active:t=!0,children:s,fit:n=!1}=e,o=(0,a.useRef)(null),{isActive:r}=u({active:t,ref:o});return(0,l.jsx)("div",{ref:o,className:r?f({fit:n}):void 0,children:s})};var v=s(94951),d=s(85459),_=s(43943);let b=e=>{let{children:t,style:s="default"}=e,o=(0,a.useRef)(null),c=(0,a.useRef)(null),[b,m]=(0,a.useState)(!1),[h,p]=(0,a.useState)(!1),{position:x}=u({active:!0,ref:o}),g=(0,a.useCallback)(()=>{let e=null==o?void 0:o.current,t=null==c?void 0:c.current;if(e&&t){let s=e.offsetWidth,n=t.offsetWidth,l=e.scrollLeft>=n-s;m(e.scrollLeft>0),p(n>s&&!l)}},[]),L=(0,a.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=null==o?void 0:o.current;if(t){let s=t.offsetWidth*(e?1:-1);t.scroll({left:t.scrollLeft+s/2,behavior:"smooth"}),clearTimeout(n),n=setTimeout(g,500)}},[g]);return(0,a.useEffect)(()=>{g()},[x,g]),(0,a.useEffect)(()=>{let e=null==c?void 0:c.current,t=new ResizeObserver(g);return e&&t.observe(e),()=>{e&&t.unobserve(e)}},[g]),(0,l.jsxs)("div",{className:"_12ftov20",children:[(0,l.jsx)("div",{ref:o,className:f(),children:(0,l.jsx)("div",{ref:c,children:t})}),b&&(0,l.jsx)("button",{className:i({position:"left",style:s}),onClick:()=>L(),children:(0,l.jsx)(v.J,{as:_.Z,size:"base",className:r})}),h&&(0,l.jsx)("button",{className:i({position:"right",style:s}),onClick:()=>L(!0),children:(0,l.jsx)(v.J,{as:d.Z,size:"base",className:r})})]})}}}]);