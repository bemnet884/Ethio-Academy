(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1456],{34199:function(){},14846:function(){},69042:function(){},3793:function(){},55005:function(){},92628:function(){},80354:function(){},69557:function(e,t,n){"use strict";n.d(t,{VY:function(){return y},fC:function(){return T},xz:function(){return _}});var r=n(7896),o=n(2784),a=n(17998),i=n(92211),l=n(87695),u=n(61644),c=n(62656),s=n(72714),d=n(79616),f=n(23372);let p="Collapsible",[b,m]=(0,i.b)(p),[v,g]=b(p),w=(0,o.forwardRef)((e,t)=>{let{__scopeCollapsible:n,open:a,defaultOpen:i,disabled:u,onOpenChange:c,...d}=e,[p=!1,b]=(0,l.T)({prop:a,defaultProp:i,onChange:c});return(0,o.createElement)(v,{scope:n,disabled:u,contentId:(0,f.M)(),open:p,onOpenToggle:(0,o.useCallback)(()=>b(e=>!e),[b])},(0,o.createElement)(s.WV.div,(0,r.Z)({"data-state":I(p),"data-disabled":u?"":void 0},d,{ref:t})))}),C=(0,o.forwardRef)((e,t)=>{let{__scopeCollapsible:n,...i}=e,l=g("CollapsibleTrigger",n);return(0,o.createElement)(s.WV.button,(0,r.Z)({type:"button","aria-controls":l.contentId,"aria-expanded":l.open||!1,"data-state":I(l.open),"data-disabled":l.disabled?"":void 0,disabled:l.disabled},i,{ref:t,onClick:(0,a.M)(e.onClick,l.onOpenToggle)}))}),E="CollapsibleContent",h=(0,o.forwardRef)((e,t)=>{let{forceMount:n,...a}=e,i=g(E,e.__scopeCollapsible);return(0,o.createElement)(d.z,{present:n||i.open},({present:e})=>(0,o.createElement)(R,(0,r.Z)({},a,{ref:t,present:e})))}),R=(0,o.forwardRef)((e,t)=>{let{__scopeCollapsible:n,present:a,children:i,...l}=e,d=g(E,n),[f,p]=(0,o.useState)(a),b=(0,o.useRef)(null),m=(0,c.e)(t,b),v=(0,o.useRef)(0),w=v.current,C=(0,o.useRef)(0),h=C.current,R=d.open||f,T=(0,o.useRef)(R),_=(0,o.useRef)();return(0,o.useEffect)(()=>{let e=requestAnimationFrame(()=>T.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,u.b)(()=>{let e=b.current;if(e){_.current=_.current||{transitionDuration:e.style.transitionDuration,animationName:e.style.animationName},e.style.transitionDuration="0s",e.style.animationName="none";let t=e.getBoundingClientRect();v.current=t.height,C.current=t.width,T.current||(e.style.transitionDuration=_.current.transitionDuration,e.style.animationName=_.current.animationName),p(a)}},[d.open,a]),(0,o.createElement)(s.WV.div,(0,r.Z)({"data-state":I(d.open),"data-disabled":d.disabled?"":void 0,id:d.contentId,hidden:!R},l,{ref:m,style:{"--radix-collapsible-content-height":w?`${w}px`:void 0,"--radix-collapsible-content-width":h?`${h}px`:void 0,...e.style}}),R&&i)});function I(e){return e?"open":"closed"}let T=w,_=C,y=h},2923:function(e,t,n){"use strict";n.d(t,{Pc:function(){return h},ck:function(){return A},fC:function(){return D}});var r=n(7896),o=n(2784),a=n(17998),i=n(62172),l=n(62656),u=n(92211),c=n(23372),s=n(72714),d=n(27757),f=n(87695),p=n(59241);let b="rovingFocusGroup.onEntryFocus",m={bubbles:!1,cancelable:!0},v="RovingFocusGroup",[g,w,C]=(0,i.B)(v),[E,h]=(0,u.b)(v,[C]),[R,I]=E(v),T=(0,o.forwardRef)((e,t)=>(0,o.createElement)(g.Provider,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(g.Slot,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(_,(0,r.Z)({},e,{ref:t}))))),_=(0,o.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:n,orientation:i,loop:u=!1,dir:c,currentTabStopId:v,defaultCurrentTabStopId:g,onCurrentTabStopIdChange:C,onEntryFocus:E,...h}=e,I=(0,o.useRef)(null),T=(0,l.e)(t,I),_=(0,p.gm)(c),[y=null,F]=(0,f.T)({prop:v,defaultProp:g,onChange:C}),[D,A]=(0,o.useState)(!1),V=(0,d.W)(E),k=w(n),x=(0,o.useRef)(!1),[S,Z]=(0,o.useState)(0);return(0,o.useEffect)(()=>{let e=I.current;if(e)return e.addEventListener(b,V),()=>e.removeEventListener(b,V)},[V]),(0,o.createElement)(R,{scope:n,orientation:i,dir:_,loop:u,currentTabStopId:y,onItemFocus:(0,o.useCallback)(e=>F(e),[F]),onItemShiftTab:(0,o.useCallback)(()=>A(!0),[]),onFocusableItemAdd:(0,o.useCallback)(()=>Z(e=>e+1),[]),onFocusableItemRemove:(0,o.useCallback)(()=>Z(e=>e-1),[])},(0,o.createElement)(s.WV.div,(0,r.Z)({tabIndex:D||0===S?-1:0,"data-orientation":i},h,{ref:T,style:{outline:"none",...e.style},onMouseDown:(0,a.M)(e.onMouseDown,()=>{x.current=!0}),onFocus:(0,a.M)(e.onFocus,e=>{let t=!x.current;if(e.target===e.currentTarget&&t&&!D){let t=new CustomEvent(b,m);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=k().filter(e=>e.focusable);M([e.find(e=>e.active),e.find(e=>e.id===y),...e].filter(Boolean).map(e=>e.ref.current))}}x.current=!1}),onBlur:(0,a.M)(e.onBlur,()=>A(!1))})))}),y=(0,o.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:n,focusable:i=!0,active:l=!1,tabStopId:u,...d}=e,f=(0,c.M)(),p=u||f,b=I("RovingFocusGroupItem",n),m=b.currentTabStopId===p,v=w(n),{onFocusableItemAdd:C,onFocusableItemRemove:E}=b;return(0,o.useEffect)(()=>{if(i)return C(),()=>E()},[i,C,E]),(0,o.createElement)(g.ItemSlot,{scope:n,id:p,focusable:i,active:l},(0,o.createElement)(s.WV.span,(0,r.Z)({tabIndex:m?0:-1,"data-orientation":b.orientation},d,{ref:t,onMouseDown:(0,a.M)(e.onMouseDown,e=>{i?b.onItemFocus(p):e.preventDefault()}),onFocus:(0,a.M)(e.onFocus,()=>b.onItemFocus(p)),onKeyDown:(0,a.M)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){b.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,n){var r;let o=(r=e.key,"rtl"!==n?r:"ArrowLeft"===r?"ArrowRight":"ArrowRight"===r?"ArrowLeft":r);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(o)))return F[o]}(e,b.orientation,b.dir);if(void 0!==t){e.preventDefault();let o=v().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===t)o.reverse();else if("prev"===t||"next"===t){var n,r;"prev"===t&&o.reverse();let a=o.indexOf(e.currentTarget);o=b.loop?(n=o,r=a+1,n.map((e,t)=>n[(r+t)%n.length])):o.slice(a+1)}setTimeout(()=>M(o))}})})))}),F={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function M(e){let t=document.activeElement;for(let n of e)if(n===t||(n.focus(),document.activeElement!==t))return}let D=T,A=y},64266:function(e,t,n){"use strict";n.d(t,{VY:function(){return M},aV:function(){return y},fC:function(){return _},xz:function(){return F}});var r=n(7896),o=n(2784),a=n(17998),i=n(92211),l=n(2923),u=n(79616),c=n(72714),s=n(59241),d=n(87695),f=n(23372);let p="Tabs",[b,m]=(0,i.b)(p,[l.Pc]),v=(0,l.Pc)(),[g,w]=b(p),C=(0,o.forwardRef)((e,t)=>{let{__scopeTabs:n,value:a,onValueChange:i,defaultValue:l,orientation:u="horizontal",dir:p,activationMode:b="automatic",...m}=e,v=(0,s.gm)(p),[w,C]=(0,d.T)({prop:a,onChange:i,defaultProp:l});return(0,o.createElement)(g,{scope:n,baseId:(0,f.M)(),value:w,onValueChange:C,orientation:u,dir:v,activationMode:b},(0,o.createElement)(c.WV.div,(0,r.Z)({dir:v,"data-orientation":u},m,{ref:t})))}),E=(0,o.forwardRef)((e,t)=>{let{__scopeTabs:n,loop:a=!0,...i}=e,u=w("TabsList",n),s=v(n);return(0,o.createElement)(l.fC,(0,r.Z)({asChild:!0},s,{orientation:u.orientation,dir:u.dir,loop:a}),(0,o.createElement)(c.WV.div,(0,r.Z)({role:"tablist","aria-orientation":u.orientation},i,{ref:t})))}),h=(0,o.forwardRef)((e,t)=>{let{__scopeTabs:n,value:i,disabled:u=!1,...s}=e,d=w("TabsTrigger",n),f=v(n),p=I(d.baseId,i),b=T(d.baseId,i),m=i===d.value;return(0,o.createElement)(l.ck,(0,r.Z)({asChild:!0},f,{focusable:!u,active:m}),(0,o.createElement)(c.WV.button,(0,r.Z)({type:"button",role:"tab","aria-selected":m,"aria-controls":b,"data-state":m?"active":"inactive","data-disabled":u?"":void 0,disabled:u,id:p},s,{ref:t,onMouseDown:(0,a.M)(e.onMouseDown,e=>{u||0!==e.button||!1!==e.ctrlKey?e.preventDefault():d.onValueChange(i)}),onKeyDown:(0,a.M)(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&d.onValueChange(i)}),onFocus:(0,a.M)(e.onFocus,()=>{let e="manual"!==d.activationMode;m||u||!e||d.onValueChange(i)})})))}),R=(0,o.forwardRef)((e,t)=>{let{__scopeTabs:n,value:a,forceMount:i,children:l,...s}=e,d=w("TabsContent",n),f=I(d.baseId,a),p=T(d.baseId,a),b=a===d.value,m=(0,o.useRef)(b);return(0,o.useEffect)(()=>{let e=requestAnimationFrame(()=>m.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,o.createElement)(u.z,{present:i||b},({present:n})=>(0,o.createElement)(c.WV.div,(0,r.Z)({"data-state":b?"active":"inactive","data-orientation":d.orientation,role:"tabpanel","aria-labelledby":f,hidden:!n,id:p,tabIndex:0},s,{ref:t,style:{...e.style,animationDuration:m.current?"0s":void 0}}),n&&l))});function I(e,t){return`${e}-trigger-${t}`}function T(e,t){return`${e}-content-${t}`}let _=C,y=E,F=h,M=R}}]);