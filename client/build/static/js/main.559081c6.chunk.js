(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{116:function(e,t,a){},117:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(9),c=a.n(r),i=a(50),s=a(163),o=a(164),l=a(158),u=a(167),d=a(162),p=a(17),j=a(18),b=a.n(j),f=a(36),m="CREATE",x="UPDATE",h="DELETE",O="FETCH_ALL",g="LIKE",v=a(37),y=a.n(v),C="https://memories-project33.herokuapp.com/posts",w=function(e){return y.a.post(C,e)},k=function(e,t){return y.a.patch("".concat(C,"/").concat(e),t)},N=function(e){return y.a.delete("".concat(C,"/").concat(e))},I=function(e){return y.a.patch("".concat(C,"/").concat(e,"/likePost"))},E=function(){return function(){var e=Object(f.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.get(C);case 3:a=e.sent,n=a.data,t({type:O,payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},S=a.p+"static/media/memories.9cfa8a46.png",D=a(161),_=a(152),T=Object(_.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),W=a(155),z=a(160),A=a(159),M=a(157),B=a(166),F=a(75),L=a.n(F),R=a(76),H=a.n(R),J=a(74),P=a.n(J),K=a(73),U=a.n(K),V=a(5),q=function(e){var t=e.post,a=e.setCurrentId,r=T(),c=Object(p.b)();return Object(n.useEffect)((function(){c(E())}),[c]),Object(V.jsx)("div",{children:Object(V.jsxs)(W.a,{className:r.card,children:[Object(V.jsx)(M.a,{className:r.media,image:t.selectedFile,title:t.title}),Object(V.jsxs)("div",{className:r.overlay,children:[Object(V.jsx)(l.a,{variant:"h6",children:t.creator}),Object(V.jsx)(l.a,{variant:"body2",children:U()(t.createdAt).fromNow()})]}),Object(V.jsx)("div",{className:r.overlay2,children:Object(V.jsx)(B.a,{style:{color:"white"},size:"small",onClick:function(){return a(t._id)},children:Object(V.jsx)(P.a,{fontSize:"default"})})}),Object(V.jsx)("div",{className:r.details,children:Object(V.jsx)(l.a,{variant:"body2",color:"textSecondary",children:t.tags})}),Object(V.jsx)(l.a,{className:r.title,variant:"h5",gutterBottom:!0,children:t.title}),Object(V.jsx)(A.a,{children:Object(V.jsx)(l.a,{variant:"body2",color:"textSecondary",component:"p",children:t.message})}),Object(V.jsxs)(z.a,{className:r.cardActions,children:[Object(V.jsxs)(B.a,{variant:"text",color:"primary",size:"small",onClick:function(){return c((e=t._id,function(){var t=Object(f.a)(b.a.mark((function t(a){var n,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,I(e);case 3:n=t.sent,r=n.data,a({type:g,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(V.jsx)(L.a,{fontSize:"small"}),"\xa0 Like \xa0",t.likeCount]}),Object(V.jsxs)(B.a,{variant:"text",color:"secondary",size:"small",onClick:function(){var e;console.log(t._id),c((e=t._id,function(){var t=Object(f.a)(b.a.mark((function t(a){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N(e);case 3:a({type:h,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}())).then((function(){return c(E())}))},children:[Object(V.jsx)(H.a,{fontSize:"small"}),"Delete"]})]})]})})},G=Object(_.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),Q=function(e){var t=e.setCurrentId,a=Object(p.c)((function(e){return e.posts})),n=G();return a.length?Object(V.jsx)(d.a,{className:n.mainContainer,container:!0,spacing:3,alignItems:"stretch",children:a.map((function(e){return Object(V.jsx)(d.a,{item:!0,xs:12,sm:6,children:Object(V.jsx)(q,{post:e,setCurrentId:t})},e._id)}))}):Object(V.jsx)(D.a,{})},X=a(19),Y=a(82),Z=a(165),$=a(77),ee=a.n($),te=Object(_.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),ae=function(e){var t=e.currentId,a=e.setCurrentId,r=te(),c=Object(p.b)(),s=Object(p.c)((function(e){return t?e.posts.find((function(e){return e._id===t})):null})),o=Object(n.useState)({creator:"",title:"",message:"",tags:"",selectedFile:""}),u=Object(i.a)(o,2),d=u[0],j=u[1];Object(n.useEffect)((function(){s&&j(s)}),[s]);var h=function(){a(null),j({creator:"",title:"",message:"",tags:"",selectedFile:""})};return Object(V.jsx)("div",{children:Object(V.jsx)(Y.a,{className:r.paper,children:Object(V.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(r.root," ").concat(r.form),onSubmit:function(e){var a,n,r;e.preventDefault(),c(t?(n=t,r=d,function(){var e=Object(f.a)(b.a.mark((function e(t){var a,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k(n,r);case 3:a=e.sent,c=a.data,t({type:x,payload:c}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()):(a=d,function(){var e=Object(f.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w(a);case 3:n=e.sent,r=n.data,t({type:m,payload:r}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())),h()},children:[Object(V.jsxs)(l.a,{variant:"h6",children:[t?"Edit":"Creating"," a Memory"]}),Object(V.jsx)(Z.a,{name:"creator",variant:"outlined",label:"Creator",value:d.creator,fullWidth:!0,onChange:function(e){return j(Object(X.a)(Object(X.a)({},d),{},{creator:e.target.value}))}}),Object(V.jsx)(Z.a,{name:"title",variant:"outlined",label:"Title",value:d.title,fullWidth:!0,onChange:function(e){return j(Object(X.a)(Object(X.a)({},d),{},{title:e.target.value}))}}),Object(V.jsx)(Z.a,{name:"message",variant:"outlined",label:"Message",value:d.message,fullWidth:!0,onChange:function(e){return j(Object(X.a)(Object(X.a)({},d),{},{message:e.target.value}))}}),Object(V.jsx)(Z.a,{name:"tags",placeholder:"Example: #happy #fun",variant:"outlined",label:"Tags",value:d.tags,fullWidth:!0,onChange:function(e){return j(Object(X.a)(Object(X.a)({},d),{},{tags:e.target.value}))}}),Object(V.jsx)("div",{className:r.fileInput,children:Object(V.jsx)(ee.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return j(Object(X.a)(Object(X.a)({},d),{},{selectedFile:t}))}})}),Object(V.jsx)(B.a,{className:r.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0,children:"Submit"}),Object(V.jsx)(B.a,{variant:"contained",color:"secondary",size:"small",onClick:h,fullWidth:!0,children:"Clear"})]})})})},ne=a(49),re=Object(_.a)((function(e){return Object(ne.a)({appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},heading:{color:"rgba(0,183,255, 1)"},image:{marginLeft:"15px"}},e.breakpoints.down("sm"),{mainContainer:{flexDirection:"column-reverse"}})}));var ce=function(){var e=re(),t=Object(p.b)(),a=Object(n.useState)(null),r=Object(i.a)(a,2),c=r[0],j=r[1];return Object(n.useEffect)((function(){t(E())}),[c,t]),Object(V.jsxs)(s.a,{maxWidth:"lg",children:[Object(V.jsxs)(o.a,{className:e.appBar,position:"static",color:"inherit",children:[Object(V.jsx)(l.a,{className:e.heading,variant:"h2",align:"center",children:"Memories"}),Object(V.jsx)("img",{className:e.image,src:S,alt:"memories",height:"60"})]}),Object(V.jsx)(u.a,{in:!0,children:Object(V.jsx)(s.a,{children:Object(V.jsxs)(d.a,{className:e.mainContainer,container:!0,justifyContent:"space-between",alignContent:"stretch",spacing:3,children:[Object(V.jsx)(d.a,{item:!0,xs:12,sm:7,children:Object(V.jsx)(Q,{setCurrentId:j})}),Object(V.jsx)(d.a,{item:!0,xs:12,sm:4,children:Object(V.jsx)(ae,{currentId:c,setCurrentId:j})})]})})})]})},ie=a(26),se=a(78),oe=a(80),le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return t.payload;case m:return[].concat(Object(oe.a)(e),[t.payload]);case x:case g:return e.map((function(a){return a._id===t.payload._id?t.payload:e}));case h:return e.filter((function(e){return e._id===t.payload}));default:return e}},ue=Object(ie.combineReducers)({posts:le}),de=a(79),pe=(a(116),Object(ie.createStore)(ue,Object(de.composeWithDevTools)(Object(ie.compose)(Object(ie.applyMiddleware)(se.a)))));c.a.render(Object(V.jsx)(p.a,{store:pe,children:Object(V.jsx)(ce,{})}),document.getElementById("root"))}},[[117,1,2]]]);
//# sourceMappingURL=main.559081c6.chunk.js.map