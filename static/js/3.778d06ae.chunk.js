(this.webpackJsonpsocial_net=this.webpackJsonpsocial_net||[]).push([[3],{299:function(e,t,s){"use strict";s.d(t,"a",(function(){return u}));var n=s(3),o=s(35),i=(s(1),s(10)),a=s(18),r=s(96),c=s(0),l=["isAuth"],j=function(e){return{isAuth:e.auth.data.isAuth}};function u(e){return Object(a.b)(j)((function(t){var s=t.isAuth,a=Object(o.a)(t,l);return s?Object(c.jsx)(e,Object(n.a)({},a)):Object(c.jsx)(i.a,{to:r.a.LOGIN})}))}},300:function(e,t,s){"use strict";s.d(t,"a",(function(){return o}));var n=s(98);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var s=[],n=!0,o=!1,i=void 0;try{for(var a,r=e[Symbol.iterator]();!(n=(a=r.next()).done)&&(s.push(a.value),!t||s.length!==t);n=!0);}catch(c){o=!0,i=c}finally{try{n||null==r.return||r.return()}finally{if(o)throw i}}return s}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},301:function(e,t,s){e.exports={aboutMe:"ProfileInfo_aboutMe__2S6Ra",mainPhoto:"ProfileInfo_mainPhoto__3nI76",contact:"ProfileInfo_contact__OeY-b",contacts:"ProfileInfo_contacts__2l8ea",editButton:"ProfileInfo_editButton__3x3Fw",profileInfo:"ProfileInfo_profileInfo__2amDX",job:"ProfileInfo_job__332Pt"}},305:function(e,t,s){e.exports={content:"Profile_content__1tuP6"}},306:function(e,t,s){e.exports={main:"MyPosts_main__2wbN9",inputBlock:"MyPosts_inputBlock__2G0OD"}},307:function(e,t,s){e.exports={item:"Post_item__3g4jw",message:"Post_message__10sAs"}},308:function(e,t,s){e.exports={button:"ProfileformMyPosts_button__32OoT"}},313:function(e,t,s){"use strict";s.r(t);var n=s(56),o=s(57),i=s(59),a=s(58),r=s(1),c=s.n(r),l=s(18),j=s(97),u=s(10),d=s(299),b=s(9),f=s(305),h=s.n(f),p=s(300),O=s(47),m=s(301),x=s.n(m),v=s(130),P=s(131),_=s(42),g=s(62),y=s(44),S=s.n(y),N=s(55),k=s(0),I=Object(P.a)({form:"edit-profile"})((function(e){var t=e.profile,s=e.handleSubmit,n=e.error,o=e.isOwner,i=e.savePhoto,a=Object.keys(t.contacts);return Object(k.jsxs)("form",{onSubmit:s,children:[Object(k.jsx)("div",{children:o&&Object(k.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&i(e.target.files[0])}})}),Object(k.jsx)("div",{children:Object(k.jsx)(N.a,{className:"green",children:"save"})}),n&&Object(k.jsx)("div",{className:S.a.formSummaryError,children:n}),Object(k.jsxs)("div",{children:[Object(k.jsx)("b",{children:"Full name:"})," ",Object(k.jsx)(v.a,{component:_.a,validate:[g.b],type:"text",name:"fullName",placeholder:"Full name"})]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("b",{children:"About me:"})," ",Object(k.jsx)(v.a,{component:_.a,validate:[g.b],type:"text",name:"aboutMe",placeholder:"About me"})]}),Object(k.jsx)("div",{children:Object(k.jsx)("b",{children:"Contacts:"})}),Object(k.jsxs)("div",{children:[Object(k.jsx)("b",{children:"Contacts:"}),a.map((function(e){return Object(k.jsx)("div",{className:x.a.contact,children:Object(k.jsxs)("b",{children:[e,": ",Object(k.jsx)(v.a,{component:_.a,type:"text",name:"contacts."+e,placeholder:e})]})},e)}))]}),Object(k.jsxs)("div",{children:["LOOKING FOR A JOB: ",Object(k.jsx)(v.a,{component:_.a,type:"checkbox",name:"lookingForAJob"})," yes"]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("b",{children:"Professional skills:"})," ",Object(k.jsx)(v.a,{component:_.b,validate:[g.b],type:"text",name:"lookingForAJobDescription",placeholder:"Professional skills"})]})]})})),A=function(e){var t=e.profile,s=Object.keys(t.contacts);return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)("div",{className:x.a.aboutMe,children:[Object(k.jsxs)("div",{children:[Object(k.jsx)("b",{children:"Full name:"})," ",t.fullName]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("b",{children:"About me:"})," ",t.aboutMe]}),t.lookingForAJob&&Object(k.jsxs)("div",{children:[Object(k.jsx)("b",{children:"Professional skills:"})," ",t.lookingForAJobDescription]})]}),Object(k.jsxs)("div",{className:x.a.contacts,children:[Object(k.jsx)("div",{children:Object(k.jsx)("h3",{children:"Contacts:"})}),Object(k.jsx)("div",{children:s.map((function(e){return Object(k.jsx)(w,{contactTitle:e,contactValue:t.contacts[e]},e)}))})]}),Object(k.jsxs)("div",{className:x.a.job,children:["LOOKING FOR A JOB: ",t.lookingForAJob?"YES!!!":"NO"]})]})},w=function(e){var t=e.contactTitle,s=e.contactValue;return Object(k.jsxs)("div",{className:x.a.contact,children:[Object(k.jsx)("b",{children:t}),": ",s]})},F=function(e){var t=e.profileUpdateStatus,s=e.profile,n=(e.status,e.updateStatus,e.isOwner),o=e.savePhoto,i=e.saveProfile,a=Object(r.useState)(!1),c=Object(p.a)(a,2),l=c[0],j=c[1];if(!s.photos||!s)return Object(k.jsx)(O.a,{isFetching:!0});var u=function(){j(!0)};return Object(k.jsxs)("div",{children:[n&&Object(k.jsx)("div",{className:x.a.editButton,children:Object(k.jsx)(N.a,{onClick:u,className:"yellow",children:"edit"})}),Object(k.jsx)("div",{children:Object(k.jsxs)("div",{children:[Object(k.jsx)("img",{alt:"Profile",src:s.photos.large,className:x.a.mainPhoto}),Object(k.jsx)("div",{className:x.a.profileInfo,children:Object(k.jsx)("b",{children:"Status:"})}),l?Object(k.jsx)(I,{isOwner:n,savePhoto:o,onSubmit:function(e){i(e),"success"===t&&j(!1)},initialValues:s,profile:s}):Object(k.jsx)(A,{profile:s,isOwner:n,goEditMode:u})]})})]})},U=s(306),M=s.n(U),B=s(307),C=s.n(B);var J=function(e){return Object(k.jsxs)("div",{className:C.a.item,children:[Object(k.jsx)("img",{src:"https://www.esafety.gov.au/sites/default/files/2019-08/Remove%20images%20and%20video.jpg"}),Object(k.jsx)("div",{className:C.a.message,children:e.message})]})},D=s(308),E=s.n(D),G=Object(g.a)(10),T=Object(P.a)({form:"AddPostForm"})((function(e){return Object(k.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(k.jsx)("div",{children:Object(k.jsx)(v.a,{component:_.b,name:"addPostBody",placeholder:"Add post...",validate:[g.b,G]})}),Object(k.jsx)("div",{className:E.a.button,children:Object(k.jsx)(N.a,{children:"Add post"})})]})})),L=(c.a.PureComponent,c.a.memo((function(e){var t=e.posts.map((function(e){return Object(k.jsx)(J,{message:e.message,likes:e.likes},e.id)}));return Object(k.jsxs)("div",{className:M.a.main,children:[Object(k.jsxs)("div",{className:M.a.inputBlock,children:[Object(k.jsx)("div",{children:Object(k.jsx)("h3",{children:"My posts"})}),Object(k.jsx)("div",{children:Object(k.jsx)(T,{onSubmit:function(t){e.addPost(t.addPostBody)}})})]}),Object(k.jsx)("div",{children:t})]})}))),R=Object(l.b)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{addPost:function(t){e(Object(j.d)(t))}}}))(L),K=function(e){var t=e.profileUpdateStatus,s=e.profile,n=e.status,o=e.updateStatus,i=e.isOwner,a=e.savePhoto,r=e.saveProfile;return Object(k.jsxs)("div",{className:h.a.content,children:[Object(k.jsx)(F,{profile:s,status:n,updateStatus:o,isOwner:i,savePhoto:a,saveProfile:r,profileUpdateStatus:t}),Object(k.jsx)(R,{newPostText:"CHECK"})]})},V=s(96),z=function(e){Object(i.a)(s,e);var t=Object(a.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push(V.a.LOGIN),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,s){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(k.jsx)(K,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile,profileUpdateStatus:this.props.profileUpdateStatus})}}]),s}(c.a.Component);t.default=Object(b.d)(u.g,d.a,Object(l.b)((function(e){return{profile:e.profilePage.profile,isAuth:e.auth.data.isAuth,status:e.profilePage.status,authorizedUserId:e.auth.data.id,profileUpdateStatus:e.profilePage.profileUpdateStatus}}),{getUserProfile:j.c,updateStatus:j.g,getStatus:j.b,savePhoto:j.e,saveProfile:j.f}))(z)}}]);
//# sourceMappingURL=3.778d06ae.chunk.js.map