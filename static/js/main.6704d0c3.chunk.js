(this.webpackJsonpsma=this.webpackJsonpsma||[]).push([[0],{25:function(e,t){var a=[{title:"English",isCompulsory:!0},{title:"Mathematics",isCompulsory:!0},{title:"Basic Science",isCompulsory:!0},{title:"Social studies",isCompulsory:!0},{title:"Security eductation",isCompulsory:!0},{title:"Geography",isCompulsory:!0},{title:"Literature",isCompulsory:!0},{title:"Agriculture science",isCompulsory:!0},{title:"Home Economics",isCompulsory:!0},{title:"French",isCompulsory:!1},{title:"CRS/IRK",isCompulsory:!0},{title:"Yoruba",isCompulsory:!0},{title:"Computer science",isCompulsory:!0},{title:"Music",isCompulsory:!1},{title:"P.H.E",isCompulsory:!0}],n={junior:[{title:"jss1",subjects:a},{title:"jss1",subjects:a},{title:"jss2",subjects:a}],senior:{title:"senior",department:{humanities:[{title:"Mathematics",isCompulsory:!0},{title:"English",isCompulsory:!0},{title:"CRS/IRK",isCompulsory:!0},{title:"French",isCompulsory:!1},{title:"Yoruba",isCompulsory:!1},{title:"History",isCompulsory:!0},{title:"Biology",isCompulsory:!0},{title:"Government",isCompulsory:!0},{title:"Civic Education",isCompulsory:!0},{title:"CRS/IRK",isCompulsory:!0},{title:"CRS/IRK",isCompulsory:!0},{title:"CRS/IRK",isCompulsory:!0},{title:"CRS/IRK",isCompulsory:!0}],sciences:[{title:"English",isCompulsory:!0},{title:"Mathematics",isCompulsory:!0},{title:"Biology",isCompulsory:!0},{title:"Physics",isCompulsory:!0},{title:"Chemistry",isCompulsory:!0},{title:"Agriculture",isCompulsory:!1},{title:"Geography",isCompulsory:!1},{title:"Social studies",isCompulsory:!0},{title:"Economics",isCompulsory:!1},{title:"Further Mathematics",isCompulsory:!1},{title:"Yoruba",isCompulsory:!0},{title:"Catering craft",isCompulsory:!1}],business:[{title:"English",isCompulsory:!0},{title:"Mathematics",isCompulsory:!0},{title:"Biology",isCompulsory:!0},{title:"Commerce",isCompulsory:!0},{title:"Econmics",isCompulsory:!0},{title:"Social studies",isCompulsory:!0}]}}};e.exports=n},34:function(e,t,a){e.exports=a.p+"static/media/welcome.548ac777.svg"},38:function(e,t,a){e.exports=a(72)},43:function(e,t,a){},44:function(e,t,a){},50:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),s=a.n(l),c=(a(43),a(1)),o=(a(44),a(34)),i=a.n(o),m=a(11);function u(){Object(c.g)(),Object(c.h)().state;return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"board"},r.a.createElement("div",null,r.a.createElement("h2",null,"Welcome to SMA"),r.a.createElement("p",null,"Enroll your child(ren) into the best quality school"),r.a.createElement(m.b,{to:"/register"},r.a.createElement("button",{className:"btn btn-outline-dark"},"Enroll"))),r.a.createElement("div",null,r.a.createElement("img",{src:i.a,alt:"school nomad"}))))}a(50);var p=a(4),b=a(10),d=a.n(b),f=a(14),E=a(2);a(52),a(53);function h(e){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"register"},r.a.createElement("p",null,e.title),r.a.createElement("div",{className:"register-div"},e.children)))}function v(){var e=Object(n.useState)(!1),t=Object(E.a)(e,2),a=t[0],l=t[1],s=Object(n.useState)({firstname:"",lastname:""}),o=Object(E.a)(s,2),i=o[0],m=o[1],u=Object(n.useState)(""),b=Object(E.a)(u,2),v=b[0],y=b[1],g=Object(n.useState)(!1),C=Object(E.a)(g,2),j=C[0],N=C[1],O=Object(n.useState)({firstname:"",lastname:""}),S=Object(E.a)(O,2),w=S[0],x=S[1],k=Object(n.useState)(""),R=Object(E.a)(k,2),F=R[0],M=R[1],T=Object(n.useState)({address:"",city:""}),J=Object(E.a)(T,2),A=J[0],B=J[1],D=Object(n.useState)(""),I=Object(E.a)(D,2),P=I[0],K=I[1],G=function(){var e=Object(f.a)(d.a.mark((function e(t){var a,n,r,s,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(N(!0),t.preventDefault(),!(v&&w.firstname&&w.lastname&&i.lastname&&i.firstname&&F&&A.address&&A.city)){e.next=21;break}return e.prev=3,a={email:v,studentName:w,parentName:i,address:A,phoneNumber:F},e.next=7,fetch("https://peaceful-mountain-33242.herokuapp.com/",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}});case 7:return n=e.sent,e.next=10,n.json();case 10:r=e.sent,(s=r.error)?(c=s.details[0].message,K(c),N(!1)):l(!0),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(3),console.log(e.t0),N(!1);case 19:e.next=23;break;case 21:K("fill all inputs"),N(!1);case 23:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(h,{title:"Student registration"},a&&r.a.createElement(c.a,{to:{pathname:"/registercourse",state:{email:v,studentName:w,parentName:i,address:A,phoneNumber:F}}}),r.a.createElement("form",{onSubmit:G,className:"form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Parent name"),r.a.createElement("div",{className:"form-inline"},r.a.createElement("div",{className:"form-with-label"},r.a.createElement("input",{value:i.firstname,onChange:function(e){return m(Object(p.a)(Object(p.a)({},i),{},{firstname:e.currentTarget.value}))},type:"name",className:"form-control ",name:"master"}),r.a.createElement("span",null," first name")),r.a.createElement("div",{className:"form-with-label"},r.a.createElement("input",{type:"name",className:"form-control",value:i.lastname,onChange:function(e){return m(Object(p.a)(Object(p.a)({},i),{},{lastname:e.currentTarget.value}))}}),r.a.createElement("span",null,"last name")))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Parent Email"),r.a.createElement("input",{className:"form-control",type:"email",value:v,onChange:function(e){return y(e.currentTarget.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Phone Number"),r.a.createElement("input",{className:"form-control",type:"number",value:F,onChange:function(e){return M(e.currentTarget.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Student name"),r.a.createElement("div",{className:"form-inline"},r.a.createElement("div",{className:"form-with-label"},r.a.createElement("input",{type:"name",className:"form-control ",name:"master",value:w.firstname,onChange:function(e){return x(Object(p.a)(Object(p.a)({},w),{},{firstname:e.currentTarget.value}))}}),r.a.createElement("span",null," first name")),r.a.createElement("div",{className:"form-with-label"},r.a.createElement("input",{type:"name",className:"form-control",value:w.lastname,onChange:function(e){return x(Object(p.a)(Object(p.a)({},w),{},{lastname:e.currentTarget.value}))}}),r.a.createElement("span",null,"last name")))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Address"),r.a.createElement("div",{className:"form-inline"},r.a.createElement("div",{className:"form-with-label"},r.a.createElement("input",{type:"name",className:"form-control ",name:"master",value:A.address,onChange:function(e){return B(Object(p.a)(Object(p.a)({},A),{},{address:e.currentTarget.value}))}}),r.a.createElement("span",null,"Address ")),r.a.createElement("div",{className:"form-with-label"},r.a.createElement("input",{type:"name",className:"form-control",value:A.city,onChange:function(e){return B(Object(p.a)(Object(p.a)({},A),{},{city:e.currentTarget.value}))}}),r.a.createElement("span",null,"City")))),P&&r.a.createElement("span",{style:{color:"red"}},P),r.a.createElement("div",{className:"button-div"},j?r.a.createElement("span",null,"Loading"):r.a.createElement("button",{className:"btn left btn-light-blue rounded"}," Next"))))}var y=a(17),g=a(15);function C(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{className:"form-control select",onChange:function(t){e.onChange(t.value)},options:[{value:"jss1",label:"Jss1"},{value:"jss2",label:"Jss2"},{value:"jss3",label:"Jss3"},{value:"ss1",label:"Ss1"},{value:"ss2",label:"Ss2"},{value:"ss3",label:"Ss3"}]}))}var j=a(25);function N(e){var t=function(){switch(e.class){case"ss1":case"ss2":case"ss3":return!0;default:return!1}}()?e.department?j.senior.department[e.department].filter((function(e){return!e.isCompulsory})).map((function(e){return{label:e.title,value:e.title}})):[]:j.junior[0].subjects.filter((function(e){return!e.isCompulsory})).map((function(e){return{label:e.title,value:e.title}}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",null,"choose atleast 1 optional subjects"),r.a.createElement(g.a,{options:t,onChange:function(t){console.log(t),e.onChange(Object(y.a)(t))},isSearchable:"true",isMulti:!0,className:"form-control select"}))}function O(e){var t=function(){switch(e.class){case"ss1":case"ss2":case"ss3":return!0;default:return!1}};return r.a.createElement(r.a.Fragment,null,t()&&r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:"department"},"Department"),r.a.createElement(g.a,{className:"form-control select",name:"department",isDisabled:!t(),onChange:function(t){return e.onChange(t.value)},options:[{value:"humanities",label:"Humanities"},{value:"sciences",label:"Sciences"},{value:"business",label:"Business"}]})))}var S=a(25);function w(){var e=Object(n.useState)(""),t=Object(E.a)(e,2),a=t[0],l=t[1],s=Object(n.useState)(""),o=Object(E.a)(s,2),i=o[0],m=o[1],u=Object(n.useState)([]),b=Object(E.a)(u,2),v=b[0],g=b[1],j=Object(n.useState)(!1),w=Object(E.a)(j,2),x=w[0],k=w[1],R=Object(n.useState)(""),F=Object(E.a)(R,2),M=F[0],T=F[1],J=Object(n.useState)(!1),A=Object(E.a)(J,2),B=A[0],D=A[1],I=Object(n.useState)({}),P=Object(E.a)(I,2),K=(P[0],P[1]),G=Object(c.g)(),H=Object(c.h)(),L=(H.state||{from:{pathname:"/"}}).from,Y=H.state;Object(n.useEffect)((function(){H.state||G.replace(L)}),[H.state,L,G]);var W=function(){var e=Object(f.a)(d.a.mark((function e(t){var n,r,l,s,c,o,m;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!a||!v){e.next=22;break}return n=function(){switch(a){case"ss1":case"ss2":case"ss3":return!0;default:return!1}}()?S.senior.department[i].filter((function(e){return e.isCompulsory})):S.junior[0].subjects.filter((function(e){return e.isCompulsory})),r=[].concat(Object(y.a)(n),Object(y.a)(v)),e.prev=5,l=Object(p.a)({level:a,department:i||"a junior",subjects:r},Y),K(l),e.next=10,fetch("https://peaceful-mountain-33242.herokuapp.com/done",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",body:JSON.stringify(l),headers:{"Content-Type":"application/json"}});case 10:return s=e.sent,e.next=13,s.json();case 13:c=e.sent,(o=c.error)?(m=o.details[0].message,T(m),k(!1)):D(!0),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(5),console.log(e.t0),k(!1);case 22:case"end":return e.stop()}}),e,null,[[5,18]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(h,{title:"Course Registration"},r.a.createElement("form",{onSubmit:W},B&&r.a.createElement(c.a,{to:{pathname:"/dashboard"}}),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"class"},"Class"),r.a.createElement(C,{class:a,onChange:function(e){return l(e)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement(O,{class:a,onChange:function(e){m(e),g([])}})),r.a.createElement("div",{className:"form-group"},r.a.createElement(N,{class:a,department:i,onChange:function(e){return g(e)}})),M&&r.a.createElement("span",{style:{color:"red"}},M),r.a.createElement("div",{className:"course-r-btn"},x?r.a.createElement("span",null,"Loading ...."):r.a.createElement("button",{className:"btn bd-10 btn-light-blue"},"Submit"))))}a(54);var x=a(37),k=a.n(x);function R(){var e=Object(n.useState)(!0),t=Object(E.a)(e,2),a=t[0],l=t[1],s=Object(n.useState)([]),c=Object(E.a)(s,2),o=c[0],i=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(f.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("https://peaceful-mountain-33242.herokuapp.com/students");case 2:(t=e.sent).data&&(i(t.data.data),l(!1));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement(m.b,{to:{pathname:"/"}},r.a.createElement("span",null," Sma"))),r.a.createElement("div",{className:"dashboard"},r.a.createElement("div",{className:"dashboard-table"},r.a.createElement("div",{className:"title"},r.a.createElement("p",null,"Student"),r.a.createElement("p",null,"class"),r.a.createElement("p",{className:"web"},"joined"),r.a.createElement("p",{className:"web"},"street"),r.a.createElement("p",{className:"web"},"city"),r.a.createElement("p",{className:""},"Grade")),a?r.a.createElement("p",null,"Loading..."):o.map((function(e){return r.a.createElement("div",{className:"items"},r.a.createElement("p",{className:"name"},e.studentName.lastname," ",e.studentName.firstname),r.a.createElement("p",null,e.level),r.a.createElement("p",{className:"web"},function(e){var t=new Date(e),a=new Array;return a[0]="January",a[1]="February",a[2]="March",a[3]="April",a[4]="May",a[5]="June",a[6]="July",a[7]="August",a[8]="September",a[9]="October",a[10]="November",a[11]="December",t.getDate()+" "+a[t.getMonth()]+" "+t.getFullYear()}(e.date)),r.a.createElement("p",{className:"web"},e.address.address),r.a.createElement("p",{className:"web"},e.address.city),r.a.createElement("p",{className:""},"tbd"))})))))}function F(){return r.a.createElement(m.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(c.d,null,r.a.createElement(c.b,{exact:!0,path:"/"},r.a.createElement(u,null)),r.a.createElement(c.b,{path:"/register"},r.a.createElement(v,null)),r.a.createElement(c.b,{path:"/registercourse"},r.a.createElement(w,null)),r.a.createElement(c.b,{path:"/dashboard"},r.a.createElement(R,null)))))}var M=function(){return r.a.createElement(F,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.6704d0c3.chunk.js.map