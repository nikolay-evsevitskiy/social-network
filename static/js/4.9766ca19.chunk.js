/*! For license information please see 4.9766ca19.chunk.js.LICENSE.txt */
(this.webpackJsonpsocial_net=this.webpackJsonpsocial_net||[]).push([[4],{299:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(3),o=n(35),s=(n(1),n(10)),a=n(18),i=n(96),u=n(0),c=["isAuth"],l=function(e){return{isAuth:e.auth.data.isAuth}};function f(e){return Object(a.b)(l)((function(t){var n=t.isAuth,a=Object(o.a)(t,c);return n?Object(u.jsx)(e,Object(r.a)({},a)):Object(u.jsx)(s.a,{to:i.a.LOGIN})}))}},300:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(98);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,s=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(u){o=!0,s=u}finally{try{r||null==i.return||i.return()}finally{if(o)throw s}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},301:function(e,t,n){"use strict";t.a=n.p+"static/media/5546667.a94eb87e.png"},310:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__163DN",paginator:"Paginator_paginator__2zlfq",pageNumber:"Paginator_pageNumber__2OMki"}},311:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&e.push(a)}}else if("object"===s)if(r.toString===Object.prototype.toString)for(var i in r)n.call(r,i)&&r[i]&&e.push(i);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},312:function(e,t,n){e.exports={item:"Users_item__3g1gJ",message:"Users_message__3iEqZ"}},316:function(e,t,n){"use strict";n.r(t);var r=n(56),o=n(57),s=n(59),a=n(58),i=n(18),u=n(133),c=n(1),l=n.n(c),f=n(47),g=n(9),p=function(e){return e.usersPage},h=function(e){return e.usersPage.pageSize},j=function(e){return e.usersPage.totalUsersCount},b=function(e){return e.usersPage.currentPage},d=function(e){return e.usersPage.isFetching},P=function(e){return e.usersPage.followingInProgress},O=n(299),v=n(99),m=n(300),w=n(310),x=n.n(w),y=n(311),C=n.n(y),S=n(0),_=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,o=e.onPageChanged,s=e.portionSize,a=void 0===s?10:s,i=Math.ceil(t/n),u=[],l=1;l<=i;l++)u.push(l);var f=Math.ceil(i/a),g=Object(c.useState)(1),p=Object(m.a)(g,2),h=p[0],j=p[1],b=(h-1)*a+1,d=h*a;return Object(S.jsxs)("div",{className:x.a.paginator,children:[h>1&&Object(S.jsx)("button",{onClick:function(){j(h-1)},children:"PREV"}),u.filter((function(e){return e>=b&&e<=d})).map((function(e){return Object(S.jsx)("span",{className:C()(Object(v.a)({},x.a.selectedPage,r===e),x.a.pageNumber),onClick:function(){o(e)},children:e},e)})),f>h&&Object(S.jsx)("button",{onClick:function(){j(h+1)},children:"NEXT"})]})},I=n(312),z=n.n(I),U=n(19),k=n(301),A=function(e){var t=e.userId,n=e.follow,r=e.followed,o=e.followingInProgress,s=e.photoUrl,a=e.name,i=e.unfollow,u=e.status;return Object(S.jsxs)("div",{children:[Object(S.jsxs)("span",{children:[Object(S.jsx)("div",{className:z.a.item,children:Object(S.jsx)(U.c,{to:"/profile/"+t,children:Object(S.jsx)("img",{src:null!=s?s:k.a,alt:"avatar"})})}),Object(S.jsx)("div",{children:r?Object(S.jsx)("button",{disabled:o.some((function(e){return e===t})),onClick:function(){i(t)},children:"Unfollow"}):Object(S.jsx)("button",{disabled:o.some((function(e){return e===t})),onClick:function(){n(t)},children:"Follow"})})]}),Object(S.jsx)("span",{children:Object(S.jsxs)("span",{children:[Object(S.jsx)("div",{children:a}),Object(S.jsx)("div",{children:u})]})})]})},N=function(e){var t=e.usersCount,n=e.pageSize,r=e.onPageChanged,o=e.currentPage,s=e.usersPage,a=e.followingInProgress,i=e.follow,u=e.unfollow;return Object(S.jsxs)("div",{children:[Object(S.jsx)(_,{totalItemsCount:t,pageSize:n,currentPage:o,onPageChanged:r}),s.users.map((function(e){return Object(S.jsx)(A,{userId:e.id,photoUrl:e.photos.small,followed:e.followed,followingInProgress:a,unfollow:u,follow:i,name:e.name,status:e.status},e.id)}))]})},F=function(e){Object(s.a)(n,e);var t=Object(a.a)(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUser(t,n)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.usersPage,n=e.pageSize;this.props.getUser(t.currentPage,n)}},{key:"render",value:function(){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(f.a,{isFetching:this.props.usersPage.isFetching}),Object(S.jsx)(N,{usersCount:this.props.usersPage.totalUsersCount,pageSize:this.props.pageSize,onPageChanged:this.onPageChanged,currentPage:this.props.currentPage,unfollow:this.props.unfollow,follow:this.props.follow,usersPage:this.props.usersPage,followingInProgress:this.props.followingInProgress})]})}}]),n}(l.a.Component);t.default=Object(g.d)(O.a,Object(i.b)((function(e){return{usersPage:p(e),pageSize:h(e),totalUsersCount:j(e),currentPage:b(e),isFetching:d(e),followingInProgress:P(e)}}),{follow:u.b,unfollow:u.e,setCurrentPage:u.d,getUser:u.c}))(F)}}]);
//# sourceMappingURL=4.9766ca19.chunk.js.map