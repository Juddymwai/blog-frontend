(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(7),c=a.n(r),o=(a(17),a(5)),m=a(2);var i=function(e){var t=e.onHandleAddReview,a=e.id,r=(e.reviews,Object(n.useState)("")),c=Object(m.a)(r,2),o=c[0],i=c[1];return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n={comment:o,post_id:a};fetch("https://new-blog22.herokuapp.com/reviews",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(function(e){return e.json()}).then(function(e){return t(e)})}},l.a.createElement("input",{style:{width:"40vw",margin:"auto"},type:"text",class:"form-control",id:"exampleFormControlTextarea1",rows:"5",onChange:function(e){return i(e.target.value)},required:!0}),l.a.createElement("button",{type:"submit"},"Add a Comment")))};var s=function(e){var t=e.onDeletePost,a=e.id;return e.onUpdatedBody,e.currentUser,l.a.createElement("div",null,l.a.createElement("p",null," ",l.a.createElement("span",{type:"button",onClick:function(){fetch("https://new-blog22.herokuapp.com/posts/".concat(a),{method:"DELETE",headers:{"Content-Type":"application/json"}}),t(a)},role:"img","aria-label":"delete"},"\ud83d\uddd1")," "))};var u=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),u=Object(m.a)(c,2),d=u[0],p=u[1],E=Object(n.useState)(!1),b=Object(m.a)(E,2),h=b[0],v=b[1];function f(e){p([].concat(Object(o.a)(d),[e]))}function g(e){var t=a.filter(function(t){return t.id!==e});r(t)}function x(){v(function(e){return!e})}return Object(n.useEffect)(function(){fetch("https://new-blog22.herokuapp.com/posts").then(function(e){return e.json()}).then(function(e){return r(e)})},[d]),l.a.createElement("div",{style:{margin:"auto",width:"60%",marginTop:"0px",marginBottom:"30px"}},l.a.createElement("h3",{style:{textAlign:"center"}}),l.a.createElement("div",{style:{overflow:"scroll",height:"700px"}},a.map(function(e){return l.a.createElement("div",{style:{marginBottom:"20px"},class:"card text-center",key:e.id},l.a.createElement("div",{class:"card-header"},l.a.createElement("p",null," Published ~ ",new Date(e.created_at).toLocaleDateString()," - ",new Date(e.created_at).toLocaleTimeString()," ")),l.a.createElement("div",{className:"card-body",key:e.id},l.a.createElement("h5",{className:"card-title"},l.a.createElement("span",null,l.a.createElement("h4",{class:"btn btn-primary"},e.Author)," ")," |",e.Title," "),l.a.createElement("p",{className:"card-text"},e.Content),l.a.createElement("div",{className:"review"},h?l.a.createElement("div",null,l.a.createElement("h5",{style:{color:"blue",textAlign:"center"}},"Reviews"),l.a.createElement("div",{className:"reviews-card"},e.reviews.map(function(e){return l.a.createElement("div",{className:"reviews",style:{textAlign:"left"}},l.a.createElement("p",null," ",l.a.createElement("span",{style:{color:"blue"}},e.name," "),"  ~",e.comment,l.a.createElement("span",{style:{color:"blue"}},new Date(e.created_at).toLocaleTimeString())))})),l.a.createElement(i,{onHandleAddReview:f,id:e.id}),l.a.createElement(s,{onDeletePost:g,id:e.id})):null,l.a.createElement("button",{onClick:x},"See Reviews"))),l.a.createElement("div",{class:"card-footer text-muted"}))})))};var d=function(e){return e.LogIn,l.a.createElement("div",{style:{margin:"auto",width:"60%",marginTop:"50px",height:"100vh",color:"blue"}},l.a.createElement("h2",{style:{textAlign:"center"}},"Login Page"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),e.target.reset(),alert("Welcome back")}},l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{className:"form-label",for:"exampleFormControlInput1"},"Email address"),l.a.createElement("input",{type:"email",name:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",required:!0}),l.a.createElement("div",{id:"emailHelp",className:"form-text"},"We'll never share your email with anyone else.")),l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{for:"exampleFormControlInput1",className:"form-label"},"Password"),l.a.createElement("input",{type:"password",name:"password",class:"form-control",id:"exampleInputPassword1",required:!0})),l.a.createElement("div",{className:"mb-3 form-check"},l.a.createElement("input",{type:"checkbox",class:"form-check-input",id:"exampleCheck1"}),l.a.createElement("label",{className:"form-check-label",for:"exampleCheck1"},"Check me out")),l.a.createElement("input",{type:"submit",value:"Submit"})))},p=a(4);var E=function(){return l.a.createElement("div",{style:{padding:"40px",marginLeft:"100px"}},l.a.createElement("ul",{className:"nav nav-pills",style:{marginTop:"20px",marginLeft:"1.6em"}},l.a.createElement("li",{className:"nav-item"},l.a.createElement(p.b,{to:"/",exact:!0,class:"nav-link ","aria-current":"page"},"HomePage")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(p.b,{to:"/publish",exact:!0,class:"nav-link"},"Publish")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(p.b,{to:"/login",class:"nav-link"},"Login"))),l.a.createElement("div",{className:"navName"},l.a.createElement("p",null," "),l.a.createElement("h1",{style:{paddingTop:"60px"}},"THE BLOG"),l.a.createElement("p",{style:{paddingTop:"10px"}}," - Follow the latest news and thoughts ",l.a.createElement("br",null)," from the developer's Blog")))};var b=function(e){var t=e.onHandleAddPost,a=(e.setIsFilledIn,Object(n.useState)("")),r=Object(m.a)(a,2),c=r[0],o=r[1],i=Object(n.useState)(""),s=Object(m.a)(i,2),u=s[0],d=s[1],p=Object(n.useState)(""),E=Object(m.a)(p,2),b=E[0],h=E[1];return l.a.createElement("div",{style:{margin:"auto",width:"60%",height:"100vh",color:"blue"}},l.a.createElement("h1",{style:{textAlign:"center",marginTop:"50px"}},"Create A New Post"),l.a.createElement("form",{className:"mb-3",onSubmit:function(e){e.preventDefault(),e.target.reset();var a={Title:c,Content:u,Author:b};fetch("https://new-blog22.herokuapp.com/posts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then(function(e){return e.json()}).then(function(e){return t(e)}),alert("You have a new Post Added, navigate to the home page to view it")}},l.a.createElement("div",null,l.a.createElement("label",{for:"exampleFormControlInput1",class:"form-label"},"Title:      "),l.a.createElement("input",{type:"text",class:"form-control",id:"exampleFormControlInput1",placeholder:"Title",onChange:function(e){return o(e.target.value)},required:!0})),l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{for:"exampleFormControlTextarea1",class:"form-label"},"Content: "),l.a.createElement("textarea",{type:"text",class:"form-control",id:"exampleFormControlTextarea1",rows:"5",onChange:function(e){return d(e.target.value)},required:!0})),l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",null,"Author: "),l.a.createElement("input",{type:"text",class:"form-control",id:"exampleFormControlInput1",placeholder:"Author",onChange:function(e){return h(e.target.value)},required:!0})),l.a.createElement("button",{type:"submit"},"Submit New Post")))};var h=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),i=Object(m.a)(c,2);return i[0],i[1],l.a.createElement("div",null,l.a.createElement(b,{onHandleAddPost:function(e){r([].concat(Object(o.a)(a),[e]))}}))};var v=function(){return l.a.createElement("div",{style:{padding:"40px",backgroundColor:"black",color:"white"}},l.a.createElement("h6",{style:{textAlign:"center"}},"Designed By Judy Mwai"))},f=a(0);var g=function(){return l.a.createElement("div",null,l.a.createElement(p.a,null,l.a.createElement("div",{style:{background:" white"}},l.a.createElement(E,null)),l.a.createElement(f.c,null,l.a.createElement(f.a,{exact:!0,path:"/",element:l.a.createElement(u,null)}),l.a.createElement(f.a,{exact:!0,path:"/publish",element:l.a.createElement(h,null)}),l.a.createElement(f.a,{exact:!0,path:"/login",element:l.a.createElement(d,null)}))),l.a.createElement(v,null))};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null)))},8:function(e,t,a){e.exports=a(19)}},[[8,2,1]]]);
//# sourceMappingURL=main.2afedd17.chunk.js.map