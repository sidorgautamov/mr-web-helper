(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{39:function(e,t,n){e.exports=n(49)},49:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(11),o=n.n(i),m=n(14),c=n.n(m),s=n(19),d=n(26),l=n(25),u=n(3),b=n(62),h=n(63),f=n(71),p=n(69),g=n(68),w=Object(b.a)((function(e){var t,n;return{container:{display:"flex",flexDirection:"column",alignItems:"center",margin:"0rem",padding:"1rem"},item:{display:"flex",flexDirection:"column",alignItems:"center",padding:"1rem",backgroundColor:"#fafafa",borderRadius:"4px",boxShadow:"#eceff1 0px 4px 4px"},textButton:(t={},Object(u.a)(t,e.breakpoints.up("xs"),{width:"10rem"}),Object(u.a)(t,e.breakpoints.up("sm"),{width:"12rem"}),Object(u.a)(t,e.breakpoints.up("md"),{width:"10rem"}),Object(u.a)(t,e.breakpoints.up("lg"),{width:"12rem"}),Object(u.a)(t,e.breakpoints.up("xl"),{width:"18rem"}),Object(u.a)(t,"display","flex"),Object(u.a)(t,"flexDirection","column"),Object(u.a)(t,"justifyContent","center"),Object(u.a)(t,"margin","2rem"),Object(u.a)(t,"border","1px solid rgba(0, 0, 0, 0)"),Object(u.a)(t,"&:hover",{transition:"border 0.5s ease-in 0.25s",border:"1px solid rgba(33, 33, 33, 1)","& $buttonUnderline":{transition:"width 0.5s ease-in 0s",width:"100%"}}),t),buttonUnderline:{transition:"width 0.5s ease-in 0s",width:"50%",height:"1px",position:"absolute",bottom:"-1px",backgroundColor:e.palette.text.secondary},inputForm:(n={fontFamily:'"Jost", sans-serif',fontWeight:"300"},Object(u.a)(n,e.breakpoints.up("xs"),{width:"10rem",fontSize:"1rem",height:"1rem"}),Object(u.a)(n,e.breakpoints.up("sm"),{width:"12rem",fontSize:"1.5rem",height:"1.5rem"}),Object(u.a)(n,e.breakpoints.up("md"),{width:"10rem",fontSize:"1.8rem",height:"1.8rem"}),Object(u.a)(n,e.breakpoints.up("lg"),{width:"12rem",fontSize:"2.2rem",height:"2.2rem"}),Object(u.a)(n,e.breakpoints.up("xl"),{width:"18rem",fontSize:"2.5rem",height:"2.5rem"}),Object(u.a)(n,"display","flex"),Object(u.a)(n,"flexDirection","column"),Object(u.a)(n,"textAlign","center"),Object(u.a)(n,"backgroundColor","#fafafa"),Object(u.a)(n,"border","0px"),Object(u.a)(n,"borderBottom","2px solid #ff6f00"),Object(u.a)(n,"outline","none"),n)}}));function x(){var e=w(),t=function(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),n=t[0],r=t[1];return{request:Object(a.useCallback)(function(){var e=Object(s.a)(c.a.mark((function e(t){var n,a,i,o,m,s=arguments;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:"POST",a=s.length>2&&void 0!==s[2]?s[2]:null,i=s.length>3&&void 0!==s[3]?s[3]:{},e.prev=3,a&&(a=JSON.stringify(a),i["Content-Type"]="application/json",console.log(a)),o=fetch(t,{method:n,body:a,headers:i}),e.next=8,o.json();case 8:if(m=e.sent,o.ok){e.next=11;break}throw new Error(m.message||"Something go wrong");case 11:return e.abrupt("return",m);case 14:return e.prev=14,e.t0=e.catch(3),r(e.t0.message),e.abrupt("return",e.t0);case 18:case"end":return e.stop()}}),e,null,[[3,14]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:n,clearError:function(){r(null)}}}().request,n=Object(a.useState)({name:"",number:""}),i=Object(l.a)(n,2),o=i[0],m=i[1],b=function(e){m(Object(d.a)(Object(d.a)({},o),{},Object(u.a)({},e.target.name,e.target.value)))},x=function(){var e=Object(s.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t("/api/bot/callback","POST",Object(d.a)({},o));case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(h.a,{container:!0,spacing:0,className:e.container},r.a.createElement(h.a,{item:!0,xs:10,md:8,xl:6,className:e.item},r.a.createElement(f.a,{variant:"h3",color:"textSecondary",align:"center"},"MrWebHelper - Telegram Bot ",r.a.createElement("span",{role:"img"},"\ud83e\udd16")),r.a.createElement(f.a,{variant:"body2",color:"textSecondary",align:"center"},"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f"),r.a.createElement("input",{id:"name",name:"name",className:e.inputForm,onChange:b}),r.a.createElement(f.a,{variant:"body2",color:"textSecondary",align:"center"},"\u0412\u0430\u0448 \u043d\u043e\u043c\u0435\u0440"),r.a.createElement("input",{id:"number",name:"number",className:e.inputForm,onChange:b}),r.a.createElement(p.a,{className:e.textButton,onClick:x},r.a.createElement(f.a,{variant:"button",color:"textSecondary",align:"center"},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"),r.a.createElement(g.a,{className:e.buttonUnderline}))))}var j=n(34),O=n(66),S=n(67),z=n(64),y=n(65),k=n(27),v=Object(j.a)({palette:{primary:{light:z.a[50],main:z.a[500],dark:z.a[900]},secondary:{light:y.a[50],main:y.a[500],dark:y.a[900]},text:{primary:k.a[50],secondary:k.a[900]}},breakpoints:{values:{xs:20,sm:35,md:60,lg:80,xl:128},unit:"rem"},typography:{fontFamily:'"Jost", sans-serif',fontSize:12,fontWeight:"600",h3:{transition:"font-size 1s ease-out 0s","@media screen and (min-width:20rem)":{fontSize:"1.75rem"},"@media screen and (min-width:35rem)":{fontSize:"2rem"},"@media screen and (min-width:60rem)":{fontSize:"2.25rem"},"@media screen and (min-width:80rem)":{fontSize:"2.5rem"},"@media screen and (min-width:120rem)":{fontSize:"3rem"}},body1:{transition:"font-size 1s ease-out 0s","@media screen and (min-width:20rem)":{fontSize:"1rem"},"@media screen and (min-width:35rem)":{fontSize:"1.5rem"},"@media screen and (min-width:60rem)":{fontSize:"1.8rem"},"@media screen and (min-width:80rem)":{fontSize:"2.2rem"},"@media screen and (min-width:120rem)":{fontSize:"2.5rem"}},body2:{transition:"font-size 1s ease-out 0s","@media screen and (min-width:20rem)":{fontSize:"0.75rem"},"@media screen and (min-width:35rem)":{fontSize:"1rem"},"@media screen and (min-width:60rem)":{fontSize:"1.25rem"},"@media screen and (min-width:80rem)":{fontSize:"1.5rem"},"@media screen and (min-width:120rem)":{fontSize:"1.75rem"}},button:{transition:"font-size 1s ease-out 0s",fontWeight:"300","@media screen and (min-width:20rem)":{fontSize:"1rem"},"@media screen and (min-width:35rem)":{fontSize:"1.25rem"},"@media screen and (min-width:60rem)":{fontSize:"1rem"},"@media screen and (min-width:80rem)":{fontSize:"1.25rem"},"@media screen and (min-width:120rem)":{fontSize:"1.8rem"}}}});function E(){return r.a.createElement(O.a,{theme:v},r.a.createElement(a.Fragment,null,r.a.createElement(S.a,null),r.a.createElement(x,null)))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.1a337004.chunk.js.map