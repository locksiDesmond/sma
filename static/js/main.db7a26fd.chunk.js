(this.webpackJsonpsma=this.webpackJsonpsma||[]).push([[0],{31:function(e,t){var a=[{title:"English",isCompulsory:!0},{title:"Mathematics",isCompulsory:!0},{title:"Basic Science",isCompulsory:!0},{title:"Social studies",isCompulsory:!0},{title:"Security eductation",isCompulsory:!0},{title:"Geography",isCompulsory:!0},{title:"Literature",isCompulsory:!0},{title:"Agriculture science",isCompulsory:!0},{title:"Home Economics",isCompulsory:!0},{title:"French",isCompulsory:!1},{title:"CRS/IRK",isCompulsory:!0},{title:"Yoruba",isCompulsory:!0},{title:"Computer science",isCompulsory:!0},{title:"Music",isCompulsory:!1},{title:"P.H.E",isCompulsory:!0}],n={junior:[{title:"jss1",subjects:a},{title:"jss1",subjects:a},{title:"jss2",subjects:a}],senior:{title:"senior",department:{humanities:[{title:"Mathematics",isCompulsory:!0},{title:"English",isCompulsory:!0},{title:"CRS/IRK",isCompulsory:!0},{title:"French",isCompulsory:!1},{title:"Yoruba",isCompulsory:!1},{title:"History",isCompulsory:!0},{title:"Biology",isCompulsory:!0},{title:"Government",isCompulsory:!0},{title:"Civic Education",isCompulsory:!0},{title:"CRS/IRK",isCompulsory:!0},{title:"CRS/IRK",isCompulsory:!0},{title:"CRS/IRK",isCompulsory:!0},{title:"CRS/IRK",isCompulsory:!0}],sciences:[{title:"English",isCompulsory:!0},{title:"Mathematics",isCompulsory:!0},{title:"Biology",isCompulsory:!0},{title:"Physics",isCompulsory:!0},{title:"Chemistry",isCompulsory:!0},{title:"Agriculture",isCompulsory:!1},{title:"Geography",isCompulsory:!1},{title:"Social studies",isCompulsory:!0},{title:"Economics",isCompulsory:!1},{title:"Further Mathematics",isCompulsory:!1},{title:"Yoruba",isCompulsory:!0},{title:"Catering craft",isCompulsory:!1}],business:[{title:"English",isCompulsory:!0},{title:"Mathematics",isCompulsory:!0},{title:"Biology",isCompulsory:!0},{title:"Commerce",isCompulsory:!0},{title:"Econmics",isCompulsory:!0},{title:"Social studies",isCompulsory:!0}]}}};e.exports=n},40:function(e,t,a){e.exports=a.p+"static/media/welcome.548ac777.svg"},44:function(e,t,a){e.exports=a(82)},49:function(e,t,a){},50:function(e,t,a){},56:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},64:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),s=a.n(l),c=(a(49),a(50),a(40)),o=a.n(c),i=a(13);function m(){return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"board"},r.a.createElement("div",null,r.a.createElement("h2",null,"Welcome to SMA"),r.a.createElement("p",null,"Enroll your child(ren) into the best quality school"),r.a.createElement(i.b,{to:"/register"},r.a.createElement("button",{className:"btn btn-outline-dark"},"Enroll"))),r.a.createElement("div",null,r.a.createElement("img",{src:o.a,alt:"school nomad"}))))}var u=a(2),p=(a(56),a(5)),d=a(12),b=a.n(d),f=a(17),E=a(4);a(58),a(59);function h(e){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"register"},r.a.createElement("p",{style:{color:"#000"}},e.title),r.a.createElement("div",{className:"register-div"},e.children)))}var v=a(18),y=a.n(v),g=a(1);function C(){var e=Object(n.useState)(!1),t=Object(E.a)(e,2),a=t[0],l=t[1],s=Object(n.useState)({firstname:"",lastname:""}),c=Object(E.a)(s,2),o=c[0],i=c[1],m=Object(n.useState)(""),d=Object(E.a)(m,2),v=d[0],C=d[1],j=Object(n.useState)(!1),N=Object(E.a)(j,2),O=N[0],S=N[1],w=Object(n.useState)({firstname:"",lastname:""}),k=Object(E.a)(w,2),F=k[0],x=k[1],R=Object(n.useState)(""),A=Object(E.a)(R,2),M=A[0],T=A[1],B=Object(n.useState)({address:"",city:""}),J=Object(E.a)(B,2),D=J[0],I=J[1],P=Object(g.css)("\n    display: block;\n    margin: 0 auto;\n    border-color:#4BAEC6;\n  "),K=Object(n.useState)(""),G=Object(E.a)(K,2),H=G[0],Y=G[1],z=function(){var e=Object(f.a)(b.a.mark((function e(t){var a,n,r,s,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S(!0),t.preventDefault(),!(v&&F.firstname&&F.lastname&&o.lastname&&o.firstname&&M&&D.address&&D.city)){e.next=21;break}return e.prev=3,a={email:v,studentName:F,parentName:o,address:D,phoneNumber:M},e.next=7,fetch("https://peaceful-mountain-33242.herokuapp.com/",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}});case 7:return n=e.sent,e.next=10,n.json();case 10:r=e.sent,(s=r.error)?(c=s.details[0].message,Y(c),S(!1)):l(!0),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(3),console.log(e.t0),S(!1);case 19:e.next=23;break;case 21:Y("fill all inputs"),S(!1);case 23:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(h,{title:"Student registration"},a&&r.a.createElement(u.a,{to:{pathname:"/registercourse",state:{email:v,studentName:F,parentName:o,address:D,phoneNumber:M}}}),r.a.createElement("form",{onSubmit:z,className:"form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("p",null,"Parent name"),r.a.createElement("div",{className:"form-inline"},r.a.createElement("div",{className:"form-with-label"},r.a.createElement("input",{value:o.firstname,onChange:function(e){return i(Object(p.a)(Object(p.a)({},o),{},{firstname:e.currentTarget.value}))},type:"name",className:"form-control ",placeholder:"first name",name:"parent-firstname"}),r.a.createElement("label",{htmlFor:"parent-firstname"}," first name")),r.a.createElement("div",{className:"form-with-label"},r.a.createElement("input",{type:"name",className:"form-control",placeholder:"last name",name:"parent-lastname",value:o.lastname,onChange:function(e){return i(Object(p.a)(Object(p.a)({},o),{},{lastname:e.currentTarget.value}))}}),r.a.createElement("label",{htmlFor:"parent-lastname"},"last name")))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Parent Email"),r.a.createElement("input",{className:"form-control",type:"email",placeholder:"email",value:v,onChange:function(e){return C(e.currentTarget.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Phone Number"),r.a.createElement("input",{className:"form-control",type:"number",placeholder:"number",value:M,onChange:function(e){return T(e.currentTarget.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("p",null,"Student name"),r.a.createElement("div",{className:"form-inline"},r.a.createElement("div",{className:"form-with-label"},r.a.createElement("input",{type:"name",className:"form-control ",name:"student-firstname",placeholder:"first name",value:F.firstname,onChange:function(e){return x(Object(p.a)(Object(p.a)({},F),{},{firstname:e.currentTarget.value}))}}),r.a.createElement("label",{htmlFor:"student-firstname"}," first name")),r.a.createElement("div",{className:"form-with-label"},r.a.createElement("input",{type:"name",className:"form-control",name:"student-lastname",placeholder:"last name",value:F.lastname,onChange:function(e){return x(Object(p.a)(Object(p.a)({},F),{},{lastname:e.currentTarget.value}))}}),r.a.createElement("label",{htmlFor:"student-lastname"},"last name")))),r.a.createElement("div",{className:"form-group"},r.a.createElement("p",null,"Address"),r.a.createElement("div",{className:"form-inline"},r.a.createElement("div",{className:"form-with-label"},r.a.createElement("input",{type:"name",className:"form-control ",name:"address-address",placeholder:"address",value:D.address,onChange:function(e){return I(Object(p.a)(Object(p.a)({},D),{},{address:e.currentTarget.value}))}}),r.a.createElement("label",{htmlFor:"adress-address"},"Address ")),r.a.createElement("div",{className:"form-with-label"},r.a.createElement("input",{type:"name",className:"form-control",name:"address-city",placeholder:"city",value:D.city,onChange:function(e){return I(Object(p.a)(Object(p.a)({},D),{},{city:e.currentTarget.value}))}}),r.a.createElement("label",{htmlFor:"address-city"},"City")))),H&&r.a.createElement("span",{style:{color:"#AF502C"}},H),r.a.createElement("div",{className:"button-div"},O?r.a.createElement(y.a,{css:P,size:40,color:"blue",loading:O}):r.a.createElement("button",{className:"btn left btn-light-blue rounded"}," Next"))))}var j=a(21),N=a(19);function O(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{className:"form-control select",onChange:function(t){e.onChange(t.value)},options:[{value:"jss1",label:"Jss1"},{value:"jss2",label:"Jss2"},{value:"jss3",label:"Jss3"},{value:"ss1",label:"Ss1"},{value:"ss2",label:"Ss2"},{value:"ss3",label:"Ss3"}]}))}var S=a(31);function w(e){var t=function(){switch(e.class){case"ss1":case"ss2":case"ss3":return!0;default:return!1}}()?e.department?S.senior.department[e.department].filter((function(e){return!e.isCompulsory})).map((function(e){return{label:e.title,value:e.title}})):[]:S.junior[0].subjects.filter((function(e){return!e.isCompulsory})).map((function(e){return{label:e.title,value:e.title}}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",null,"Choose atleast 1 optional subjects"),r.a.createElement(N.a,{options:t,onChange:function(t){console.log(t),e.onChange(Object(j.a)(t))},isSearchable:"true",isMulti:!0,className:"form-control select"}))}function k(e){var t=function(){switch(e.class){case"ss1":case"ss2":case"ss3":return!0;default:return!1}};return r.a.createElement(r.a.Fragment,null,t()&&r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:"department"},"Department"),r.a.createElement(N.a,{className:"form-control select",name:"department",isDisabled:!t(),onChange:function(t){return e.onChange(t.value)},options:[{value:"humanities",label:"Humanities"},{value:"sciences",label:"Sciences"},{value:"business",label:"Business"}]})))}var F=a(31);function x(){var e=Object(n.useState)(""),t=Object(E.a)(e,2),a=t[0],l=t[1],s=Object(n.useState)(""),c=Object(E.a)(s,2),o=c[0],i=c[1],m=Object(n.useState)([]),d=Object(E.a)(m,2),v=d[0],C=d[1],N=Object(n.useState)(!1),S=Object(E.a)(N,2),x=S[0],R=S[1],A=Object(n.useState)(""),M=Object(E.a)(A,2),T=M[0],B=M[1],J=Object(n.useState)(!1),D=Object(E.a)(J,2),I=D[0],P=D[1],K=Object(g.css)("\n    display: block;\n    margin: 0 auto;\n    border-color:#4BAEC6;\n  "),G=Object(u.g)(),H=Object(u.h)(),Y=(H.state||{from:{pathname:"/"}}).from,z=H.state;Object(n.useEffect)((function(){H.state||G.replace(Y)}),[H.state,Y,G]);var W=function(){var e=Object(f.a)(b.a.mark((function e(t){var n,r,l,s,c,i,m;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),R(!0),!a||!v){e.next=22;break}return n=function(){switch(a){case"ss1":case"ss2":case"ss3":return!0;default:return!1}}()?F.senior.department[o].filter((function(e){return e.isCompulsory})):F.junior[0].subjects.filter((function(e){return e.isCompulsory})),r=[].concat(Object(j.a)(n),Object(j.a)(v)),e.prev=6,l=Object(p.a)({level:a,department:o||"a junior",subjects:r},z),e.next=10,fetch("https://peaceful-mountain-33242.herokuapp.com/create",{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",body:JSON.stringify(l),headers:{"Content-Type":"application/json"}});case 10:return s=e.sent,e.next=13,s.json();case 13:c=e.sent,(i=c.error)?(m=i.details[0].message,B(m),R(!1)):P(!0),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(6),console.log(e.t0),R(!1);case 22:case"end":return e.stop()}}),e,null,[[6,18]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(h,{title:"Course Registration"},r.a.createElement("form",{onSubmit:W},I&&r.a.createElement(u.a,{to:{pathname:"/dashboard"}}),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"class"},"Class"),r.a.createElement(O,{class:a,onChange:function(e){return l(e)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement(k,{class:a,onChange:function(e){i(e),C([])}})),r.a.createElement("div",{className:"form-group"},r.a.createElement(w,{class:a,department:o,onChange:function(e){return C(e)}})),T&&r.a.createElement("span",{style:{color:"red"}},T),r.a.createElement("div",{className:"course-r-btn"},x?r.a.createElement(y.a,{css:K,size:40,color:"blue",loading:x}):r.a.createElement("button",{className:"btn bd-10 btn-light-blue"},"Submit"))))}a(64);var R=a(43),A=a.n(R);function M(){var e=Object(n.useState)(!0),t=Object(E.a)(e,2),a=t[0],l=t[1],s=Object(n.useState)([]),c=Object(E.a)(s,2),o=c[0],m=c[1],u=Object(g.css)("\n    display: block;\n    margin: 0 auto;\n    border-color:#4BAEC6;\n  ");return Object(n.useEffect)((function(){(function(){var e=Object(f.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("https://peaceful-mountain-33242.herokuapp.com/students");case 2:(t=e.sent).data&&(m(t.data.data),l(!1));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement(i.b,{to:{pathname:"/"}},r.a.createElement("span",null," Sma"))),r.a.createElement("div",{className:"dashboard"},r.a.createElement("div",{className:"dashboard-table"},r.a.createElement("h3",null,"Students Registered"),r.a.createElement("div",{className:"title"},r.a.createElement("p",null,"Student"),r.a.createElement("p",null,"class"),r.a.createElement("p",{className:"web"},"joined"),r.a.createElement("p",{className:"web"},"street"),r.a.createElement("p",{className:"web"},"city"),r.a.createElement("p",{className:""},"Grade")),a?r.a.createElement(y.a,{css:u,size:40,color:"blue",loading:!0}):o.map((function(e){return r.a.createElement("div",{className:"items"},r.a.createElement("p",{className:"name"},e.studentName.lastname," ",e.studentName.firstname),r.a.createElement("p",null,e.level),r.a.createElement("p",{className:"web"},function(e){var t=new Date(e),a=new Array;return a[0]="January",a[1]="February",a[2]="March",a[3]="April",a[4]="May",a[5]="June",a[6]="July",a[7]="August",a[8]="September",a[9]="October",a[10]="November",a[11]="December",t.getDate()+" "+a[t.getMonth()]+" "+t.getFullYear()}(e.date)),r.a.createElement("p",{className:"web"},e.address.address),r.a.createElement("p",{className:"web"},e.address.city),r.a.createElement("p",{className:""},"tbd"))})))))}function T(){return r.a.createElement(i.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/register"},r.a.createElement(C,null)),r.a.createElement(u.b,{path:"/registercourse"},r.a.createElement(x,null)),r.a.createElement(u.b,{path:"/dashboard"},r.a.createElement(M,null)),r.a.createElement(u.b,{path:"/"},r.a.createElement(m,null)))))}var B=function(){return r.a.createElement(T,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.db7a26fd.chunk.js.map