import{a as v}from"/build/_shared/chunk-MRY5SXDL.js";import{f as m}from"/build/_shared/chunk-CKAJJNIC.js";import{i as d}from"/build/_shared/chunk-BQCUINC5.js";d();var f=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(","),x=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(x||{}),N=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(N||{}),h=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(h||{});function E(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(f))}var p=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(p||{});function L(e,t=0){var r;return e===((r=v(e))==null?void 0:r.body)?!1:m(t,{[0](){return e.matches(f)},[1](){let n=e;for(;n!==null;){if(n.matches(f))return!0;n=n.parentElement}return!1}})}function D(e){e==null||e.focus({preventScroll:!0})}var O=["textarea","input"].join(",");function w(e){var t,r;return(r=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,O))!=null?r:!1}function S(e,t=r=>r){return e.slice().sort((r,n)=>{let o=t(r),s=t(n);if(o===null||s===null)return 0;let a=o.compareDocumentPosition(s);return a&Node.DOCUMENT_POSITION_FOLLOWING?-1:a&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function M(e,t,r=!0){let n=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,o=Array.isArray(e)?r?S(e):e:E(e),s=n.activeElement,a=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),F=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,o.indexOf(s))-1;if(t&4)return Math.max(0,o.indexOf(s))+1;if(t&8)return o.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),b=t&32?{preventScroll:!0}:{},c=0,l=o.length,u;do{if(c>=l||c+l<=0)return 0;let i=F+c;if(t&16)i=(i+l)%l;else{if(i<0)return 3;if(i>=l)return 1}u=o[i],u==null||u.focus(b),c+=a}while(u!==n.activeElement);return t&6&&w(u)&&u.select(),u.hasAttribute("tabindex")||u.setAttribute("tabindex","0"),2}export{x as a,N as b,E as c,p as d,L as e,D as f,S as g,M as h};