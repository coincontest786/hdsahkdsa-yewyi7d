import{d as w,g as E,i as O}from"/build/_shared/chunk-BQCUINC5.js";O();var P=w(E(),1),D=w(E(),1),y=w(E(),1);O();var G={data:""},J=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||G;var K=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Q=/\/\*[^]*?\*\/|  +/g,L=/\n+/g,h=(t,e)=>{let a="",i="",s="";for(let r in t){let o=t[r];r[0]=="@"?r[1]=="i"?a=r+" "+o+";":i+=r[1]=="f"?h(o,r):r+"{"+h(o,r[1]=="k"?"":e)+"}":typeof o=="object"?i+=h(o,e?e.replace(/([^,])+/g,n=>r.replace(/(^:.*)|([^,])+/g,d=>/&/.test(d)?d.replace(/&/g,n):n?n+" "+d:d)):r):o!=null&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=h.p?h.p(r,o):r+":"+o+";")}return a+(e&&s?e+"{"+s+"}":s)+i},k={},H=t=>{if(typeof t=="object"){let e="";for(let a in t)e+=a+H(t[a]);return e}return t},U=(t,e,a,i,s)=>{let r=H(t),o=k[r]||(k[r]=(n=>{let d=0,l=11;for(;d<n.length;)l=101*l+n.charCodeAt(d++)>>>0;return"go"+l})(r));if(!k[o]){let n=r!==t?t:(d=>{let l,g,f=[{}];for(;l=K.exec(d.replace(Q,""));)l[4]?f.shift():l[3]?(g=l[3].replace(L," ").trim(),f.unshift(f[0][g]=f[0][g]||{})):f[0][l[1]]=l[2].replace(L," ").trim();return f[0]})(t);k[o]=h(s?{["@keyframes "+o]:n}:n,a?"":"."+o)}return((n,d,l)=>{d.data.indexOf(n)==-1&&(d.data=l?n+d.data:d.data+n)})(k[o],e,i),o},W=(t,e,a)=>t.reduce((i,s,r)=>{let o=e[r];if(o&&o.call){let n=o(a),d=n&&n.props&&n.props.className||/^go/.test(n)&&n;o=d?"."+d:n&&typeof n=="object"?n.props?"":h(n,""):n===!1?"":n}return i+s+(o??"")},"");function $(t){let e=this||{},a=t.call?t(e.p):t;return U(a.unshift?a.raw?W(a,[].slice.call(arguments,1),e.p):a.reduce((i,s)=>Object.assign(i,s&&s.call?s(e.p):s),{}):a,J(e.target),e.g,e.o,e.k)}var R,M,S,Ct=$.bind({g:1}),c=$.bind({k:1});function _(t,e,a,i){h.p=e,R=t,M=a,S=i}function p(t,e){let a=this||{};return function(){let i=arguments;function s(r,o){let n=Object.assign({},r),d=n.className||s.className;a.p=Object.assign({theme:M&&M()},n),a.o=/ *go\d+/.test(d),n.className=$.apply(a,i)+(d?" "+d:""),e&&(n.ref=o);let l=t;return t[0]&&(l=n.as||t,delete n.as),S&&l[0]&&S(n),R(l,n)}return e?e(s):s}}var b=w(E(),1);var T=w(E(),1),X=t=>typeof t=="function",N=(t,e)=>X(t)?t(e):t,Y=(()=>{let t=0;return()=>(++t).toString()})(),tt=t=>e=>{e&&setTimeout(()=>{let a=e.getBoundingClientRect();t(a)})},q=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),et=20,z=new Map,B=t=>{if(z.has(t))return;let e=setTimeout(()=>{z.delete(t),x({type:4,toastId:t})},1e3);z.set(t,e)},at=t=>{let e=z.get(t);e&&clearTimeout(e)},F=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,et)};case 1:return e.toast.id&&at(e.toast.id),{...t,toasts:t.toasts.map(r=>r.id===e.toast.id?{...r,...e.toast}:r)};case 2:let{toast:a}=e;return t.toasts.find(r=>r.id===a.id)?F(t,{type:1,toast:a}):F(t,{type:0,toast:a});case 3:let{toastId:i}=e;return i?B(i):t.toasts.forEach(r=>{B(r.id)}),{...t,toasts:t.toasts.map(r=>r.id===i||i===void 0?{...r,visible:!1}:r)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(r=>r.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let s=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+s}))}}},A=[],C={toasts:[],pausedAt:void 0},x=t=>{C=F(C,t),A.forEach(e=>{e(C)})},rt={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},st=(t={})=>{let[e,a]=(0,P.useState)(C);(0,P.useEffect)(()=>(A.push(a),()=>{let s=A.indexOf(a);s>-1&&A.splice(s,1)}),[e]);let i=e.toasts.map(s=>{var r,o;return{...t,...t[s.type],...s,duration:s.duration||((r=t[s.type])==null?void 0:r.duration)||(t==null?void 0:t.duration)||rt[s.type],style:{...t.style,...(o=t[s.type])==null?void 0:o.style,...s.style}}});return{...e,toasts:i}},ot=(t,e="blank",a)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...a,id:(a==null?void 0:a.id)||Y()}),j=t=>(e,a)=>{let i=ot(e,t,a);return x({type:2,toast:i}),i.id},u=(t,e)=>j("blank")(t,e);u.error=j("error");u.success=j("success");u.loading=j("loading");u.custom=j("custom");u.dismiss=t=>{x({type:3,toastId:t})};u.remove=t=>x({type:4,toastId:t});u.promise=(t,e,a)=>{let i=u.loading(e.loading,{...a,...a==null?void 0:a.loading});return t.then(s=>(u.success(N(e.success,s),{id:i,...a,...a==null?void 0:a.success}),s)).catch(s=>{u.error(N(e.error,s),{id:i,...a,...a==null?void 0:a.error})}),t};var it=t=>{let{toasts:e,pausedAt:a}=st(t);(0,D.useEffect)(()=>{if(a)return;let s=Date.now(),r=e.map(o=>{if(o.duration===1/0)return;let n=(o.duration||0)+o.pauseDuration-(s-o.createdAt);if(n<0){o.visible&&u.dismiss(o.id);return}return setTimeout(()=>u.dismiss(o.id),n)});return()=>{r.forEach(o=>o&&clearTimeout(o))}},[e,a]);let i=(0,D.useMemo)(()=>({startPause:()=>{x({type:5,time:Date.now()})},endPause:()=>{a&&x({type:6,time:Date.now()})},updateHeight:(s,r)=>x({type:1,toast:{id:s,height:r}}),calculateOffset:(s,r)=>{let{reverseOrder:o=!1,gutter:n=8,defaultPosition:d}=r||{},l=e.filter(m=>(m.position||d)===(s.position||d)&&m.height),g=l.findIndex(m=>m.id===s.id),f=l.filter((m,v)=>v<g&&m.visible).length;return l.filter(m=>m.visible).slice(...o?[f+1]:[0,f]).reduce((m,v)=>m+(v.height||0)+n,0)}}),[e,a]);return{toasts:e,handlers:i}},nt=c`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,lt=c`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,dt=c`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ct=p("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${nt} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${lt} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${dt} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,pt=c`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,ut=p("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${pt} 1s linear infinite;
`,mt=c`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,ft=c`
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
}`,yt=p("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${mt} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ft} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,gt=p("div")`
  position: absolute;
`,ht=p("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,bt=c`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,xt=p("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${bt} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,vt=({toast:t})=>{let{icon:e,type:a,iconTheme:i}=t;return e!==void 0?typeof e=="string"?b.createElement(xt,null,e):e:a==="blank"?null:b.createElement(ht,null,b.createElement(ut,{...i}),a!=="loading"&&b.createElement(gt,null,a==="error"?b.createElement(ct,{...i}):b.createElement(yt,{...i})))},wt=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Et=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,kt="0%{opacity:0;} 100%{opacity:1;}",$t="0%{opacity:1;} 100%{opacity:0;}",Tt=p("div",y.forwardRef)`
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
`,jt=p("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ot=(t,e)=>{let a=t.includes("top")?1:-1,[i,s]=q()?[kt,$t]:[wt(a),Et(a)];return{animation:e?`${c(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${c(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},It=y.memo(({toast:t,position:e,style:a,children:i})=>{let s=t!=null&&t.height?Ot(t.position||e||"top-center",t.visible):{opacity:0},r=y.createElement(vt,{toast:t}),o=y.createElement(jt,{...t.ariaProps},N(t.message,t));return y.createElement(Tt,{className:t.className,style:{...s,...a,...t.style}},typeof i=="function"?i({icon:r,message:o}):y.createElement(y.Fragment,null,r,o))});_(T.createElement);var zt=(t,e)=>{let a=t.includes("top"),i=a?{top:0}:{bottom:0},s=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:q()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(a?1:-1)}px)`,...i,...s}},At=$`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,I=16,Ht=({reverseOrder:t,position:e="top-center",toastOptions:a,gutter:i,children:s,containerStyle:r,containerClassName:o})=>{let{toasts:n,handlers:d}=it(a);return T.createElement("div",{style:{position:"fixed",zIndex:9999,top:I,left:I,right:I,bottom:I,pointerEvents:"none",...r},className:o,onMouseEnter:d.startPause,onMouseLeave:d.endPause},n.map(l=>{let g=l.position||e,f=d.calculateOffset(l,{reverseOrder:t,gutter:i,defaultPosition:e}),m=zt(g,f),v=l.height?void 0:tt(V=>{d.updateHeight(l.id,V.height)});return T.createElement("div",{ref:v,className:l.visible?At:"",key:l.id,style:m},l.type==="custom"?N(l.message,l):s?s(l):T.createElement(It,{toast:l,position:g}))}))},Rt=u;export{u as a,Ht as b,Rt as c};