import{d as p,g as c}from"/build/_shared/chunk-WSBN333C.js";import{a as s}from"/build/_shared/chunk-J24LMM7T.js";import{d as o}from"/build/_shared/chunk-G6CDRCV7.js";import{j as l,y}from"/build/_shared/chunk-ZE7WC5SJ.js";import{d as u,g,h as e,i as a}from"/build/_shared/chunk-BQCUINC5.js";a();var d=u(g());function N({updateOn:i}){return(0,d.useEffect)(()=>{let m=document.createElement("script");m.src="https://platform.twitter.com/widgets.js",document.getElementsByTagName("body")[0].appendChild(m)},[i]),null}a();y();var w=({name:i,message:m,features:x,subscription:n})=>{let{t}=o(),f=(n==null?void 0:n.tier)==="premium";return e.createElement("div",{className:"mx-auto flex max-w-xl flex-col items-center px-4 pb-16"},e.createElement(c,{className:"h-16 w-16 text-wt-primary"}),e.createElement("div",{className:"flex flex-col space-y-2"},e.createElement(s,{as:"h2",type:"title",size:"3xl",theme:"content",className:"text-center text-3xl font-bold leading-tight tracking-normal"},t("gated.premium_content")),e.createElement(s,{as:"p",type:"body",size:"lg",theme:"content",className:"text-center leading-tight tracking-normal"},t("gated.cta_p1")," ",e.createElement("span",{className:"text-wt-primary"},i)," ",t("gated.cta_p2"))),e.createElement("div",{className:"mt-8 mb-2 h-0.5 w-full bg-wt-primary opacity-40"}),e.createElement("div",{className:"w-full py-6"},e.createElement(s,{as:"span",type:"title",size:"xl",theme:"content",className:"w-full text-left font-semibold"},t("gated.features")),e.createElement("ul",{className:"mt-4 flex flex-col space-y-4"},x.map(r=>r?e.createElement("li",{key:r,className:"flex items-center space-x-2"},e.createElement("div",null,e.createElement(p,{className:"h-6 w-6 text-green-500"})),e.createElement(s,{as:"span",type:"body",size:"md",theme:"content",className:"text-md flex-1"},r)):null))),e.createElement("div",{className:"pb-2"},!n&&e.createElement(s,{as:"span",type:"body",theme:"content",className:"flex items-center justify-center text-center text-sm tracking-wide opacity-75 sm:text-lg"},t("login.already_a_subscriber"),e.createElement(l,{to:"/login",className:"ml-1"},e.createElement("span",{className:"text-wt-primary underline underline-offset-1"},t("shared.cta.sign_in")),".")),!f&&e.createElement(s,{as:"span",type:"body",theme:"content",className:"flex items-center justify-center text-center text-sm tracking-wide opacity-75 sm:text-lg"},e.createElement(l,{to:"/upgrade",className:"ml-1"},e.createElement("span",{className:"text-wt-primary underline underline-offset-1"},t("nav.links.upgrade")," ",t("stripe.upgrade_warning.banner.login_reason"))))))},_=w;export{_ as a,N as b};