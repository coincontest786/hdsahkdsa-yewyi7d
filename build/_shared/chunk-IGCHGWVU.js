import{a as r}from"/build/_shared/chunk-CKAJJNIC.js";import{d as a,g as f,i as u}from"/build/_shared/chunk-BQCUINC5.js";u();var i=a(f(),1);function s(t){var e;if(t.type)return t.type;let n=(e=t.as)!=null?e:"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function l(t,e){let[n,o]=(0,i.useState)(()=>s(t));return r(()=>{o(s(t))},[t.type,t.as]),r(()=>{n||!e.current||e.current instanceof HTMLButtonElement&&!e.current.hasAttribute("type")&&o("button")},[n,e]),n}export{l as a};