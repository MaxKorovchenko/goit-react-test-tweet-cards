"use strict";(self.webpackChunkgoit_react_test_tweet_cards=self.webpackChunkgoit_react_test_tweet_cards||[]).push([[621],{621:function(e,n,s){s.r(n),s.d(n,{default:function(){return y}});var t=s(791),r=s(434),i=s(328),o=s(683),l=s(925),c=s(439),a=function(e){return e.tweets.users},d="UserCard_wrapper__wKH4n",u="UserCard_image__EioKu",_="UserCard_info__Eq+Ym",w="UserCard_stats__8PX26",f="UserCard_btn__3EaGU",m="UserCard_active__Xq6J3 UserCard_btn__3EaGU",h=s(184),j=function(e){var n=e.id,s=e.user,t=e.avatar,o=e.tweets,l=e.followers,c=e.isFollowing,a=(0,r.I0)();return(0,h.jsxs)("div",{className:d,children:[(0,h.jsx)("img",{className:u,src:t,alt:s}),(0,h.jsxs)("div",{className:_,children:[(0,h.jsxs)("p",{className:w,children:[o.toLocaleString("en-US")," Tweets"]}),(0,h.jsxs)("p",{className:w,children:[l.toLocaleString("en-US")," Followers"]})]}),(0,h.jsx)("button",{className:c?m:f,type:"button",onClick:function(){a((0,i.u)(c?{id:n,followers:l-1,isFollowing:!1}:{id:n,followers:l+1,isFollowing:!0}))},children:c?"Following":"Follow"})]})},x="UsersList_list__cvnrs",p="UsersList_item__3Iudx",v="UsersList_btn__J3Rt3",g=["id"],C=function(){var e=(0,r.v9)(a),n=(0,t.useState)(1),s=(0,c.Z)(n,2),i=s[0],d=s[1],u=e.slice(0,3*i),_=3*i>=e.length;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("ul",{className:x,children:u.map((function(e){var n=e.id,s=(0,l.Z)(e,g);return(0,h.jsx)("li",{className:p,children:(0,h.jsx)(j,(0,o.Z)({id:n},s))},n)}))}),_?null:(0,h.jsx)("button",{className:v,type:"button",onClick:function(){d((function(e){return e+1}))},children:"Load More"})]})},N=s(87),U=s(494),F="BackLink_link__Echxs",b=function(e){var n=e.to,s=e.children;return(0,h.jsxs)(N.rU,{className:F,to:n,children:[(0,h.jsx)(U.Fjg,{}),s]})},k="Dropdown_trigger__5u3gj",L="Dropdown_active__z+dyi Dropdown_dropdownMenu__dfinC",E="Dropdown_inactive__LAinl Dropdown_dropdownMenu__dfinC",S=function(){var e=(0,t.useState)(!1),n=(0,c.Z)(e,2),s=n[0],r=n[1],i=(0,t.useRef)();return(0,t.useEffect)((function(){var e=function(e){i.current.contains(e.target)||r(!1)};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}})),(0,h.jsxs)("div",{ref:i,children:[(0,h.jsx)("button",{className:k,onClick:function(){r(!s)},children:"Filter Tweets"}),(0,h.jsx)("div",{className:s?L:E,children:(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{className:"dropdownItem",children:(0,h.jsx)("p",{children:"Show All"})}),(0,h.jsx)("li",{className:"dropdownItem",children:(0,h.jsx)("p",{children:"Follow"})}),(0,h.jsx)("li",{className:"dropdownItem",children:(0,h.jsx)("p",{children:"Following"})})]})})]})},y=function(){var e=(0,r.I0)();return(0,t.useEffect)((function(){e((0,i.m)())}),[e]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,h.jsx)(b,{to:"/",children:"Back to the Home Page"}),(0,h.jsx)(S,{})]}),(0,h.jsx)(C,{})]})}}}]);
//# sourceMappingURL=621.d5aecd6e.chunk.js.map