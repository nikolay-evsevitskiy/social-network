(this.webpackJsonpsocial_net=this.webpackJsonpsocial_net||[]).push([[5],{299:function(e,a,s){"use strict";s.d(a,"a",(function(){return u}));var t=s(3),i=s(35),n=(s(1),s(10)),c=s(18),d=s(96),o=s(0),l=["isAuth"],r=function(e){return{isAuth:e.auth.data.isAuth}};function u(e){return Object(c.b)(r)((function(a){var s=a.isAuth,c=Object(i.a)(a,l);return s?Object(o.jsx)(e,Object(t.a)({},c)):Object(o.jsx)(n.a,{to:d.a.LOGIN})}))}},303:function(e,a,s){e.exports={dialogs:"Dialogs_dialogs__2FFqO",dialog_item:"Dialogs_dialog_item__1lBu5",active:"Dialogs_active__252Ch",dialog:"Dialogs_dialog__3sTL-",messages:"Dialogs_messages__24QOH"}},304:function(e,a,s){e.exports={dialog:"DialogItem_dialog__2u-K9",active:"DialogItem_active__3BkDp"}},305:function(e,a,s){e.exports={message:"Message_message__3uaRk"}},315:function(e,a,s){"use strict";s.r(a);var t=s(129),i=s(18),n=s(9),c=s(299),d=(s(1),s(303)),o=s.n(d),l=s(19),r=s(304),u=s.n(r),j=s(0),g=function(e){var a=e.id,s=e.name;return Object(j.jsx)("div",{className:u.a.dialog,children:Object(j.jsx)(l.c,{to:"/dialogs/"+a,activeClassName:u.a.active,children:s})})},b=s(305),m=s.n(b),O=function(e){var a=e.text;return Object(j.jsx)("div",{className:m.a.message,children:a})},_=s(130),h=s(131),x=s(62),f=s(42),v=s(55),p=Object(x.a)(30),A=Object(h.a)({form:"AddMessageForm"})((function(e){var a=e.handleSubmit;return Object(j.jsxs)("form",{onSubmit:a,children:[Object(j.jsx)("div",{children:Object(j.jsx)(_.a,{component:f.b,name:"addMessageBody",placeholder:"Add message",validate:[x.b,p]})}),Object(j.jsx)("div",{children:Object(j.jsx)(v.a,{className:"btn-jelly",children:"Send"})})]})})),N=s(10),D=s(96);a.default=Object(n.d)(c.a,Object(i.b)((function(e){return{dialogs:e.dialogPage.dialogs,messages:e.dialogPage.messages,isAuth:e.auth.data.isAuth}}),(function(e){return{addMessage:function(a){e(Object(t.a)(a))}}})))((function(e){var a=e.dialogs,s=e.messages,t=e.addMessage,i=e.isAuth,n=a.map((function(e){return Object(j.jsx)(g,{id:e.id,name:e.name},e.id)})),c=s.map((function(e){return Object(j.jsx)(O,{text:e.message},e.id)}));return i?Object(j.jsxs)("div",{className:o.a.dialogs,children:[Object(j.jsx)("div",{className:o.a.dialog_item,children:n}),Object(j.jsxs)("div",{className:o.a.messages,children:[c,Object(j.jsx)("div",{children:Object(j.jsx)(A,{onSubmit:function(e){t(e.addMessageBody)}})})]})]}):Object(j.jsx)(N.a,{to:D.a.LOGIN})}))}}]);
//# sourceMappingURL=5.85753a0e.chunk.js.map