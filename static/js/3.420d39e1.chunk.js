(this.webpackJsonpsocial_net=this.webpackJsonpsocial_net||[]).push([[3],{299:function(t,e,s){"use strict";s.d(e,"a",(function(){return j}));var n=s(3),o=s(35),i=(s(1),s(10)),a=s(18),c=s(96),r=s(0),l=["isAuth"],u=function(t){return{isAuth:t.auth.data.isAuth}};function j(t){return Object(a.b)(u)((function(e){var s=e.isAuth,a=Object(o.a)(e,l);return s?Object(r.jsx)(t,Object(n.a)({},a)):Object(r.jsx)(i.a,{to:c.a.LOGIN})}))}},300:function(t,e,s){"use strict";s.d(e,"a",(function(){return o}));var n=s(98);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var s=[],n=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done)&&(s.push(a.value),!e||s.length!==e);n=!0);}catch(r){o=!0,i=r}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return s}}(t,e)||Object(n.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},301:function(t,e,s){"use strict";e.a=s.p+"static/media/5546667.a94eb87e.png"},302:function(t,e,s){t.exports={aboutMe:"ProfileInfo_aboutMe__3Si4J",mainPhoto:"ProfileInfo_mainPhoto__cY4Fn",contact:"ProfileInfo_contact__39OEQ",contacts:"ProfileInfo_contacts__3tzsv",editButton:"ProfileInfo_editButton__24EnB",profileInfo:"ProfileInfo_profileInfo__25o0i",job:"ProfileInfo_job__1zsgZ"}},306:function(t,e,s){t.exports={content:"Profile_content__1yZHD"}},307:function(t,e,s){t.exports={main:"MyPosts_main__2K2pE",inputBlock:"MyPosts_inputBlock__1vXGj"}},308:function(t,e,s){t.exports={item:"Post_item__1tFr0",message:"Post_message__1MNs1"}},309:function(t,e,s){t.exports={button:"ProfileformMyPosts_button__MeLET"}},314:function(t,e,s){"use strict";s.r(e);var n=s(56),o=s(57),i=s(59),a=s(58),c=s(1),r=s.n(c),l=s(18),u=s(97),j=s(10),d=s(299),b=s(9),f=s(306),p=s.n(f),h=s(300),O=s(47),m=s(302),x=s.n(m),v=s(0),P=function(t){var e=t.statusProps,s=t.updateStatus,n=Object(c.useState)(!1),o=Object(h.a)(n,2),i=o[0],a=o[1],r=Object(c.useState)(e),l=Object(h.a)(r,2),u=l[0],j=l[1];return Object(c.useEffect)((function(){e!==u&&j(e)}),[e]),Object(v.jsxs)("div",{children:[!i&&Object(v.jsx)("div",{children:Object(v.jsx)("span",{onDoubleClick:function(){a(!0)},children:Object(v.jsx)("b",{children:e||"No status"})})}),i&&Object(v.jsx)("div",{children:Object(v.jsx)("input",{onChange:function(t){j(t.currentTarget.value)},autoFocus:!0,onBlur:function(){a(!1),s(u)},type:"text",value:u})})]})},_=s(301),g=s(130),y=s(131),S=s(42),N=s(62),k=s(44),I=s.n(k),A=s(55),w=Object(y.a)({form:"edit-profile"})((function(t){var e=t.profile,s=t.handleSubmit,n=t.error,o=t.isOwner,i=t.savePhoto,a=Object.keys(e.contacts);return Object(v.jsxs)("form",{onSubmit:s,children:[Object(v.jsx)("div",{children:o&&Object(v.jsx)("input",{type:"file",onChange:function(t){t.target.files.length&&i(t.target.files[0])}})}),Object(v.jsx)("div",{children:Object(v.jsx)(A.a,{className:"green",children:"save"})}),n&&Object(v.jsx)("div",{className:I.a.formSummaryError,children:n}),Object(v.jsxs)("div",{children:[Object(v.jsx)("b",{children:"Full name:"})," ",Object(v.jsx)(g.a,{component:S.a,validate:[N.b],type:"text",name:"fullName",placeholder:"Full name"})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("b",{children:"About me:"})," ",Object(v.jsx)(g.a,{component:S.a,validate:[N.b],type:"text",name:"aboutMe",placeholder:"About me"})]}),Object(v.jsx)("div",{children:Object(v.jsx)("b",{children:"Contacts:"})}),Object(v.jsxs)("div",{children:[Object(v.jsx)("b",{children:"Contacts:"}),a.map((function(t){return Object(v.jsx)("div",{className:x.a.contact,children:Object(v.jsxs)("b",{children:[t,": ",Object(v.jsx)(g.a,{component:S.a,type:"text",name:"contacts."+t,placeholder:t})]})},t)}))]}),Object(v.jsxs)("div",{children:["LOOKING FOR A JOB: ",Object(v.jsx)(g.a,{component:S.a,type:"checkbox",name:"lookingForAJob"})," yes"]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("b",{children:"Professional skills:"})," ",Object(v.jsx)(g.a,{component:S.b,validate:[N.b],type:"text",name:"lookingForAJobDescription",placeholder:"Professional skills"})]})]})})),F=function(t){var e=t.profile,s=Object.keys(e.contacts);return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{className:x.a.aboutMe,children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("b",{children:"Full name:"})," ",e.fullName]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("b",{children:"About me:"})," ",e.aboutMe]}),e.lookingForAJob&&Object(v.jsxs)("div",{children:[Object(v.jsx)("b",{children:"Professional skills:"})," ",e.lookingForAJobDescription]})]}),Object(v.jsxs)("div",{className:x.a.contacts,children:[Object(v.jsx)("div",{children:Object(v.jsx)("h3",{children:"Contacts:"})}),Object(v.jsx)("div",{children:s.map((function(t){return Object(v.jsx)(M,{contactTitle:t,contactValue:e.contacts[t]},t)}))})]}),Object(v.jsxs)("div",{className:x.a.job,children:["LOOKING FOR A JOB: ",e.lookingForAJob?"YES!!!":"NO"]})]})},M=function(t){var e=t.contactTitle,s=t.contactValue;return Object(v.jsxs)("div",{className:x.a.contact,children:[Object(v.jsx)("b",{children:e}),": ",s]})},B=function(t){var e=t.profileUpdateStatus,s=t.profile,n=t.status,o=t.updateStatus,i=t.isOwner,a=t.savePhoto,r=t.saveProfile,l=Object(c.useState)(!1),u=Object(h.a)(l,2),j=u[0],d=u[1];if(!s.photos||!s)return Object(v.jsx)(O.a,{isFetching:!0});var b=function(){d(!0)};return Object(v.jsxs)("div",{children:[i&&Object(v.jsx)("div",{className:x.a.editButton,children:Object(v.jsx)(A.a,{onClick:b,className:"yellow",children:"edit"})}),Object(v.jsx)("div",{children:Object(v.jsxs)("div",{children:[Object(v.jsx)("img",{alt:"Profile",src:s.photos.large||_.a,className:x.a.mainPhoto}),Object(v.jsxs)("div",{className:x.a.profileInfo,children:[Object(v.jsx)("b",{children:"Status:"})," ",Object(v.jsx)(P,{statusProps:n,updateStatus:o})]}),j?Object(v.jsx)(w,{isOwner:i,savePhoto:a,onSubmit:function(t){r(t),"success"===e&&d(!1)},initialValues:s,profile:s}):Object(v.jsx)(F,{profile:s,isOwner:i,goEditMode:b})]})})]})},U=s(307),C=s.n(U),E=s(308),J=s.n(E);var D=function(t){return Object(v.jsxs)("div",{className:J.a.item,children:[Object(v.jsx)("img",{src:"https://www.esafety.gov.au/sites/default/files/2019-08/Remove%20images%20and%20video.jpg"}),Object(v.jsx)("div",{className:J.a.message,children:t.message})]})},T=s(309),G=s.n(T),L=Object(N.a)(10),z=Object(y.a)({form:"AddPostForm"})((function(t){return Object(v.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(v.jsx)("div",{children:Object(v.jsx)(g.a,{component:S.b,name:"addPostBody",placeholder:"Add post...",validate:[N.b,L]})}),Object(v.jsx)("div",{className:G.a.button,children:Object(v.jsx)(A.a,{children:"Add post"})})]})})),K=(r.a.PureComponent,r.a.memo((function(t){var e=t.posts.map((function(t){return Object(v.jsx)(D,{message:t.message,likes:t.likes},t.id)}));return Object(v.jsxs)("div",{className:C.a.main,children:[Object(v.jsxs)("div",{className:C.a.inputBlock,children:[Object(v.jsx)("div",{children:Object(v.jsx)("h3",{children:"My posts"})}),Object(v.jsx)("div",{children:Object(v.jsx)(z,{onSubmit:function(e){t.addPost(e.addPostBody)}})})]}),Object(v.jsx)("div",{children:e})]})}))),R=Object(l.b)((function(t){return{posts:t.profilePage.posts}}),(function(t){return{addPost:function(e){t(Object(u.d)(e))}}}))(K),V=function(t){var e=t.profileUpdateStatus,s=t.profile,n=t.status,o=t.updateStatus,i=t.isOwner,a=t.savePhoto,c=t.saveProfile;return Object(v.jsxs)("div",{className:p.a.content,children:[Object(v.jsx)(B,{profile:s,status:n,updateStatus:o,isOwner:i,savePhoto:a,saveProfile:c,profileUpdateStatus:e}),Object(v.jsx)(R,{newPostText:"CHECK"})]})},H=s(96),Y=function(t){Object(i.a)(s,t);var e=Object(a.a)(s);function s(){return Object(n.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"refreshProfile",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push(H.a.LOGIN),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,e,s){this.props.match.params.userId!==t.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(v.jsx)(V,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile,profileUpdateStatus:this.props.profileUpdateStatus})}}]),s}(r.a.Component);e.default=Object(b.d)(j.g,d.a,Object(l.b)((function(t){return{profile:t.profilePage.profile,isAuth:t.auth.data.isAuth,status:t.profilePage.status,authorizedUserId:t.auth.data.id,profileUpdateStatus:t.profilePage.profileUpdateStatus}}),{getUserProfile:u.c,updateStatus:u.g,getStatus:u.b,savePhoto:u.e,saveProfile:u.f}))(Y)}}]);
//# sourceMappingURL=3.420d39e1.chunk.js.map