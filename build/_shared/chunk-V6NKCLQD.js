import{b as G,i as q}from"/build/_shared/chunk-BQCUINC5.js";var K=G((U,F)=>{q();(function(b,D){typeof U=="object"&&typeof F<"u"?F.exports=D():typeof define=="function"&&define.amd?define(D):(b=typeof globalThis<"u"?globalThis:b||self).dayjs=D()})(U,function(){"use strict";var b=1e3,D=6e4,J=36e5,k="millisecond",p="second",w="minute",O="hour",m="day",W="week",l="month",Z="quarter",y="year",_="date",z="Invalid Date",B=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,E=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,P={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},I=function(u,e,t){var i=String(u);return!i||i.length>=e?u:""+Array(e+1-i.length).join(t)+u},Q={s:I,z:function(u){var e=-u.utcOffset(),t=Math.abs(e),i=Math.floor(t/60),n=t%60;return(e<=0?"+":"-")+I(i,2,"0")+":"+I(n,2,"0")},m:function u(e,t){if(e.date()<t.date())return-u(t,e);var i=12*(t.year()-e.year())+(t.month()-e.month()),n=e.clone().add(i,l),s=t-n<0,r=e.clone().add(i+(s?-1:1),l);return+(-(i+(t-n)/(s?n-r:r-n))||0)},a:function(u){return u<0?Math.ceil(u)||0:Math.floor(u)},p:function(u){return{M:l,y,w:W,d:m,D:_,h:O,m:w,s:p,ms:k,Q:Z}[u]||String(u||"").toLowerCase().replace(/s$/,"")},u:function(u){return u===void 0}},Y="en",S={};S[Y]=P;var j=function(u){return u instanceof x},C=function u(e,t,i){var n;if(!e)return Y;if(typeof e=="string"){var s=e.toLowerCase();S[s]&&(n=s),t&&(S[s]=t,n=s);var r=e.split("-");if(!n&&r.length>1)return u(r[0])}else{var a=e.name;S[a]=e,n=a}return!i&&n&&(Y=n),n||!i&&Y},c=function(u,e){if(j(u))return u.clone();var t=typeof e=="object"?e:{};return t.date=u,t.args=arguments,new x(t)},o=Q;o.l=C,o.i=j,o.w=function(u,e){return c(u,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var x=function(){function u(t){this.$L=C(t.locale,null,!0),this.parse(t)}var e=u.prototype;return e.parse=function(t){this.$d=function(i){var n=i.date,s=i.utc;if(n===null)return new Date(NaN);if(o.u(n))return new Date;if(n instanceof Date)return new Date(n);if(typeof n=="string"&&!/Z$/i.test(n)){var r=n.match(B);if(r){var a=r[2]-1||0,h=(r[7]||"0").substring(0,3);return s?new Date(Date.UTC(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,h)):new Date(r[1],a,r[3]||1,r[4]||0,r[5]||0,r[6]||0,h)}}return new Date(n)}(t),this.$x=t.x||{},this.init()},e.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},e.$utils=function(){return o},e.isValid=function(){return this.$d.toString()!==z},e.isSame=function(t,i){var n=c(t);return this.startOf(i)<=n&&n<=this.endOf(i)},e.isAfter=function(t,i){return c(t)<this.startOf(i)},e.isBefore=function(t,i){return this.endOf(i)<c(t)},e.$g=function(t,i,n){return o.u(t)?this[i]:this.set(n,t)},e.unix=function(){return Math.floor(this.valueOf()/1e3)},e.valueOf=function(){return this.$d.getTime()},e.startOf=function(t,i){var n=this,s=!!o.u(i)||i,r=o.p(t),a=function(T,$){var v=o.w(n.$u?Date.UTC(n.$y,$,T):new Date(n.$y,$,T),n);return s?v:v.endOf(m)},h=function(T,$){return o.w(n.toDate()[T].apply(n.toDate("s"),(s?[0,0,0,0]:[23,59,59,999]).slice($)),n)},f=this.$W,d=this.$M,g=this.$D,M="set"+(this.$u?"UTC":"");switch(r){case y:return s?a(1,0):a(31,11);case l:return s?a(1,d):a(0,d+1);case W:var H=this.$locale().weekStart||0,L=(f<H?f+7:f)-H;return a(s?g-L:g+(6-L),d);case m:case _:return h(M+"Hours",0);case O:return h(M+"Minutes",1);case w:return h(M+"Seconds",2);case p:return h(M+"Milliseconds",3);default:return this.clone()}},e.endOf=function(t){return this.startOf(t,!1)},e.$set=function(t,i){var n,s=o.p(t),r="set"+(this.$u?"UTC":""),a=(n={},n[m]=r+"Date",n[_]=r+"Date",n[l]=r+"Month",n[y]=r+"FullYear",n[O]=r+"Hours",n[w]=r+"Minutes",n[p]=r+"Seconds",n[k]=r+"Milliseconds",n)[s],h=s===m?this.$D+(i-this.$W):i;if(s===l||s===y){var f=this.clone().set(_,1);f.$d[a](h),f.init(),this.$d=f.set(_,Math.min(this.$D,f.daysInMonth())).$d}else a&&this.$d[a](h);return this.init(),this},e.set=function(t,i){return this.clone().$set(t,i)},e.get=function(t){return this[o.p(t)]()},e.add=function(t,i){var n,s=this;t=Number(t);var r=o.p(i),a=function(d){var g=c(s);return o.w(g.date(g.date()+Math.round(d*t)),s)};if(r===l)return this.set(l,this.$M+t);if(r===y)return this.set(y,this.$y+t);if(r===m)return a(1);if(r===W)return a(7);var h=(n={},n[w]=D,n[O]=J,n[p]=b,n)[r]||1,f=this.$d.getTime()+t*h;return o.w(f,this)},e.subtract=function(t,i){return this.add(-1*t,i)},e.format=function(t){var i=this,n=this.$locale();if(!this.isValid())return n.invalidDate||z;var s=t||"YYYY-MM-DDTHH:mm:ssZ",r=o.z(this),a=this.$H,h=this.$m,f=this.$M,d=n.weekdays,g=n.months,M=function($,v,N,A){return $&&($[v]||$(i,s))||N[v].slice(0,A)},H=function($){return o.s(a%12||12,$,"0")},L=n.meridiem||function($,v,N){var A=$<12?"AM":"PM";return N?A.toLowerCase():A},T={YY:String(this.$y).slice(-2),YYYY:this.$y,M:f+1,MM:o.s(f+1,2,"0"),MMM:M(n.monthsShort,f,g,3),MMMM:M(g,f),D:this.$D,DD:o.s(this.$D,2,"0"),d:String(this.$W),dd:M(n.weekdaysMin,this.$W,d,2),ddd:M(n.weekdaysShort,this.$W,d,3),dddd:d[this.$W],H:String(a),HH:o.s(a,2,"0"),h:H(1),hh:H(2),a:L(a,h,!0),A:L(a,h,!1),m:String(h),mm:o.s(h,2,"0"),s:String(this.$s),ss:o.s(this.$s,2,"0"),SSS:o.s(this.$ms,3,"0"),Z:r};return s.replace(E,function($,v){return v||T[$]||r.replace(":","")})},e.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},e.diff=function(t,i,n){var s,r=o.p(i),a=c(t),h=(a.utcOffset()-this.utcOffset())*D,f=this-a,d=o.m(this,a);return d=(s={},s[y]=d/12,s[l]=d,s[Z]=d/3,s[W]=(f-h)/6048e5,s[m]=(f-h)/864e5,s[O]=f/J,s[w]=f/D,s[p]=f/b,s)[r]||f,n?d:o.a(d)},e.daysInMonth=function(){return this.endOf(l).$D},e.$locale=function(){return S[this.$L]},e.locale=function(t,i){if(!t)return this.$L;var n=this.clone(),s=C(t,i,!0);return s&&(n.$L=s),n},e.clone=function(){return o.w(this.$d,this)},e.toDate=function(){return new Date(this.valueOf())},e.toJSON=function(){return this.isValid()?this.toISOString():null},e.toISOString=function(){return this.$d.toISOString()},e.toString=function(){return this.$d.toUTCString()},u}(),V=x.prototype;return c.prototype=V,[["$ms",k],["$s",p],["$m",w],["$H",O],["$W",m],["$M",l],["$y",y],["$D",_]].forEach(function(u){V[u[1]]=function(e){return this.$g(e,u[0],u[1])}}),c.extend=function(u,e){return u.$i||(u(e,x,c),u.$i=!0),c},c.locale=C,c.isDayjs=j,c.unix=function(u){return c(1e3*u)},c.en=S[Y],c.Ls=S,c.p={},c})});export{K as a};