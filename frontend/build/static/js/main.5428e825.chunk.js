(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{62:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(27),s=n.n(r),a=n(12),o=n(2),j=n(13),b=n(8),i=n(10),l=n(11),u=n.n(l),O=n(0),p={email:"",password:""},x=function(){var e=Object(c.useState)({}),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),a=Object(i.a)(s,2),l=a[0],x=a[1],m=Object(o.g)();function d(e){var t=e.target,n=t.value,c=t.name;r((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(j.a)({},c,n))}))}return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"login"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsxs)("form",{children:[Object(O.jsx)("input",{name:"email",value:n.email,onChange:d,placeholder:"email"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{name:"password",value:n.password,onChange:d,placeholder:"password",type:"password"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{onClick:function(e){e.preventDefault(),u.a.post("https://simplemerndeploy.herokuapp.com/api/login",n).then((function(e){x(e.data.message),e.data.accessToken&&localStorage.setItem("jwt",JSON.stringify({token:e.data.accessToken})),setTimeout((function(){m.push("/")}),500)})).catch((function(e){e.response?x("login error 1 is... "+e.response.data.message):e.request?console.log("login error 2 is... "+e.request):console.log("login error 3 is... "+e.message)})),setTimeout((function(){x("")}),1e3),r(p)},type:"submit"})]}),Object(O.jsx)("p",{children:l})]})},m={name:"",email:"",password:""};var d=function(){var e=Object(c.useState)({}),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),a=Object(i.a)(s,2),o=a[0],l=a[1];function p(e){var t=e.target,n=t.value,c=t.name;r((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(j.a)({},c,n))}))}return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"register"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsxs)("form",{children:[Object(O.jsx)("input",{name:"name",value:n.name,onChange:p,placeholder:"name"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{name:"email",value:n.email,onChange:p,placeholder:"email"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{name:"password",value:n.password,onChange:p,placeholder:"password",type:"password"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{onClick:function(e){e.preventDefault(),u.a.post("https://simplemerndeploy.herokuapp.com/api/register",n).then((function(e){l(e.data.message)})).catch((function(e){e.response?l(e.response.data.message):e.request?console.log("registration error 1 is... "+e.request):console.log("registration error 2 is... "+e.message)})),setTimeout((function(){l("")}),1e3),r(m)},type:"submit"})]}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("p",{children:o})]})};var h=function(){var e=Object(o.g)();return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"After login page"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("button",{onClick:function(){localStorage.removeItem("jwt"),e.push("/login")},type:"submit",children:"logout"})]})},g=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){u.a.get("https://simplemerndeploy.herokuapp.com/user/getaccinfo").then((function(e){r(e.data.user)})).catch((function(e){return console.error("There was an error!",e)}))}),[]),Object(O.jsxs)("div",{children:[Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsxs)("span",{children:[" ","user names : "+n.map((function(e){return e.name}))]}),Object(O.jsx)("br",{}),Object(O.jsxs)("span",{children:[" ","user emails : "+n.map((function(e){return e.email}))]})]})},f=n(29),v=n(30),w=["component"],k=function(e){var t=e.component,n=Object(f.a)(e,w);return Object(O.jsx)(o.b,Object(b.a)(Object(b.a)({},n),{},{render:function(e){return function(){if(null!==localStorage.getItem("jwt")){var e=localStorage.getItem("jwt"),t=Object(v.a)(e),n=new Date;return 1e3*t.exp<n.getTime()?(localStorage.removeItem("jwt"),console.log("Token expired."),!1):(console.log("Valid token"),!0)}return!1}()?Object(O.jsx)(t,Object(b.a)({},e)):Object(O.jsx)(o.a,{to:{pathname:"/login",state:{from:e.location}}})}}))};var S=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(a.a,{children:[Object(O.jsx)("h1",{children:"Learn Auth"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)(a.b,{to:"/",children:"Your Account"}),Object(O.jsx)("br",{}),Object(O.jsx)(a.b,{to:"/login",children:"login"}),Object(O.jsx)("br",{}),Object(O.jsx)(a.b,{to:"/register",children:"register"}),Object(O.jsx)("br",{}),Object(O.jsx)(a.b,{to:"/getinfo",children:"see accounts"}),Object(O.jsxs)(o.d,{children:[Object(O.jsx)(k,{exact:!0,path:"/",component:h}),Object(O.jsx)(k,{exact:!0,path:"/getinfo",component:g}),Object(O.jsxs)(o.b,{exact:!0,path:"/login",children:[" ",Object(O.jsx)(x,{})," "]}),Object(O.jsxs)(o.b,{exact:!0,path:"/register",children:[" ",Object(O.jsx)(d,{})," "]})]})]})})};s.a.render(Object(O.jsx)(S,{}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.5428e825.chunk.js.map