(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1791],{51791:function(e,n,s){"use strict";s.d(n,{c:function(){return S}});var t=s(52322),r=s(98008),i=s(51298),l=s(7415),c=s(93584),o=s(38140),a=s(96308),u=s(1087),h=s(813),d=s(13844),b=s(94951),_=s(61909),f=s(17581),x=s(5632),m=s(2784);s(5945),s(21595),s(76661);let j="familyIconGeneratorAdviceClosed",g=e=>{let{children:n,selected:s,iconsQuantity:r,familiesUrl:i}=e,{closedFixedAdvice:l,closeFixedAdvice:c}=y();return(0,h.q)()&&"families"!==s&&void 0!==i?l||void 0===r?(0,t.jsx)(p,{children:n}):(0,t.jsx)(v,{close:c,familiesUrl:i,children:n}):n},v=e=>{let{children:n,close:s,familiesUrl:r}=e,{t:i}=(0,l.$G)("iconsSearch"),c=(0,u.a)("mdMax"),{push:o}=(0,x.useRouter)();return(0,t.jsxs)(d.fC,{defaultOpen:!0,children:[(0,t.jsx)(d.xz,{asChild:!0,children:n}),(0,t.jsx)(d.h_,{children:(0,t.jsxs)(d.VY,{side:c?"bottom":"right",sideOffset:5,align:"center",alignOffset:-25,onInteractOutside:e=>e.preventDefault(),onOpenAutoFocus:e=>e.preventDefault(),children:[(0,t.jsx)("button",{onClick:()=>{o(r)},children:(0,t.jsxs)("div",{className:"_10rnj401 _1286nb1239 _1286nb12d9 _1286nb14k3 _1286nb14lf _1286nb14mr _1286nb14o3 _1286nb187s _1286nb17x _1286nb144r _1286nb12il _1286nb128x _1286nb16ea _1286nb12rr _1286nb12q9",children:[(0,t.jsx)("span",{className:"_1286nb12i3 _1286nb1283 _1286nb122f _1286nb12cf _1286nb14jr _1286nb14l3 _1286nb14mf _1286nb14nr _1286nb177a _1286nb12o9 _1286nb13k9 _1286nb111 _1286nb15ns _1286nb11h3 _1286nb12r3 _1286nb18f",children:i("new")}),(0,t.jsx)(l.cC,{i18nKey:i("family.generateIconsAdvice"),components:{strong:(0,t.jsx)("strong",{})}})]})}),(0,t.jsxs)(d.x8,{"aria-label":"close",onClick:s,className:"_1286nb199 _1286nb1ax _1286nb1j9 _1286nb15x1 _1286nb16eg",children:[(0,t.jsx)(b.J,{as:f.Z}),(0,t.jsx)(_.T,{children:"Close"})]}),(0,t.jsx)(d.Eh,{className:"_1286nb16os",width:16,height:8})]})})]})},p=e=>{let{children:n}=e,{t:s}=(0,l.$G)("iconsSearch"),r=(0,u.a)("mdMax");return(0,t.jsx)(a.u,{trigger:n,side:r?"bottom":"right",backgroundColor:"white",colorText:"grayBayoux",className:"_1286nb146f",children:(0,t.jsx)(l.cC,{role:"tooltip",i18nKey:s("family.generateIconsAdvice"),components:{strong:(0,t.jsx)("strong",{})}})})},y=()=>{let[e,n]=(0,m.useState)(!0);return(0,m.useEffect)(()=>{n(!!localStorage.getItem(j))},[]),{closedFixedAdvice:e,closeFixedAdvice:()=>{localStorage.setItem(j,"1"),n(!0)}}},{format:w}=o.FILTERS_NAMES,{search:C,families:E}=o.FILTERS_VALUES.format,S=e=>{let{selected:n="resources",quantity:s}=e,{t:i}=(0,l.$G)("common"),a=A(n),u=!!(0,o.fU)("author"),h="resources"===n,d="families"===n,b=h?s:void 0,_=d?s:void 0;return(0,t.jsxs)(c.f,{children:[(0,t.jsx)(c.A,{label:i("icons"),icon:r.Z,selected:h,quantity:b,showQuantity:h,url:a}),!u&&(0,t.jsx)(k,{selected:n,familiesQuantity:_,isFamiliesSelected:d,iconsQuantity:b})]})},k=e=>{let{familiesQuantity:n,isFamiliesSelected:s,selected:r,iconsQuantity:o}=e,{t:a}=(0,l.$G)("common"),u=I(r);return(0,t.jsx)(g,{selected:r,iconsQuantity:o,familiesUrl:u,children:(0,t.jsx)(c.A,{label:a("families"),icon:i.Z,selected:s,quantity:n,showQuantity:s,url:u})})},A=e=>{let n=(0,o.oh)();if("resources"===e)return;let s=n.filter(e=>{let[n]=e;return n!==w});s.push([w,C]);let t=(0,o.oq)(s);return"/search?".concat((0,o.E$)(t))},I=e=>{let n=(0,o.oh)();if("families"===e)return;let s=n.filter(e=>{let[n]=e;return n!==w});s.push([w,E]);let t=(0,o.oq)(s);return"/search?".concat((0,o.E$)(t))}},51298:function(e,n,s){"use strict";var t=s(52322);n.Z=e=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"-49 141 512 512",width:16,height:16,"aria-hidden":!0,...e,children:[(0,t.jsx)("path",{d:"M123.9 451.397c-1.286 2.265-3.047 5.367-3.812 6.36-14.319 18.615-28.724 29.184-29.567 29.794-8.989 6.212-12.82 17.486-9.577 27.926C84.193 525.934 93.954 533 104.904 533h70c33.084 0 60-26.916 60-60s-26.916-60-60-60c-29.201 0-43.383 24.978-51.004 38.397m331.345-273.498c-9.997-9.523-25.819-9.141-35.346.855l-196.853 206.62a100.76 100.76 0 0 1 36.403 34.278l196.652-206.407c9.523-9.997 9.14-25.821-.856-35.346"}),(0,t.jsx)("path",{d:"M393 337.465V558c0 8.271-6.729 15-15 15H16c-8.271 0-15-6.729-15-15s6.729-15 15-15c13.807 0 25-11.193 25-25V271h235.767l47.636-50H41v-25c0-13.807-11.193-25-25-25-35.841 0-65 29.159-65 65v322c0 35.409 28.465 64.276 63.712 64.968q.64.032 1.288.032h362c35.841 0 65-29.159 65-65V286c0-.332-.02-.658-.025-.989z"})]})},76661:function(){}}]);