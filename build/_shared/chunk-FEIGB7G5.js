import{h as u,p as m,y as f}from"/build/_shared/chunk-ZE7WC5SJ.js";import{d as c,g as l,i as a}from"/build/_shared/chunk-BQCUINC5.js";a();f();var w=()=>{let r=m()[0];if(!r)throw new Error("This hook should only be called in child routes to root");return r.data.visitToken},y=w;a();f();var p=c(l());a();var g=c(l());function S(r,o){let[s,e]=(0,g.useState)(()=>{if(typeof window=="undefined")return o;try{let t=window.localStorage.getItem(r);return t?JSON.parse(t):o}catch(t){return console.error(t),o}});return[s,t=>{try{let n=t instanceof Function?t(s):t;e(n),typeof window!="undefined"&&window.localStorage.setItem(r,JSON.stringify(n))}catch(n){console.error(n)}}]}var h=S;var T=()=>{let[r]=u(),[o,s]=h("email",""),e=r.get("email"),i=e||o,t=n=>{s(n)};return(0,p.useEffect)(()=>{e&&!o&&s(e),e&&o&&e!==o&&s(e)},[]),[i,t]},v=T;export{y as a,v as b};