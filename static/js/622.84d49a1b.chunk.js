"use strict";(self.webpackChunkgoit_react_test_tweet_cards=self.webpackChunkgoit_react_test_tweet_cards||[]).push([[622],{5622:function(n,e,r){r.r(e),r.d(e,{default:function(){return K}});var t=r(2791),s=r(9434),o=r(6328),i=r(8683),l=r(4925),c=r(9439),a=r(6916),u=function(n){return n.tweets.isLoading},d=function(n){return n.tweets.error},_=(0,a.P1)([function(n){return n.filter},function(n){return n.tweets.users}],(function(n,e){switch(n){case"follow":return e.filter((function(n){return!n.isFollowing}));case"following":return e.filter((function(n){return n.isFollowing}));default:return e}})),f="UserCard_wrapper__wKH4n",w="UserCard_image__EioKu",h="UserCard_info__Eq+Ym",m="UserCard_stats__8PX26",x="UserCard_btn__3EaGU",j="UserCard_active__Xq6J3 UserCard_btn__3EaGU",p=r(184),v=function(n){var e=n.id,r=n.user,t=n.avatar,i=n.tweets,l=n.followers,c=n.isFollowing,a=(0,s.I0)();return(0,p.jsxs)("div",{className:f,children:[(0,p.jsx)("img",{className:w,src:t,alt:r}),(0,p.jsxs)("div",{className:h,children:[(0,p.jsxs)("p",{className:m,children:[i.toLocaleString("en-US")," Tweets"]}),(0,p.jsxs)("p",{className:m,children:[l.toLocaleString("en-US")," Followers"]})]}),(0,p.jsx)("button",{className:c?j:x,type:"button",onClick:function(){a((0,o.u)(c?{id:e,followers:l-1,isFollowing:!1}:{id:e,followers:l+1,isFollowing:!0}))},children:c?"Following":"Follow"})]})},g="UsersList_list__cvnrs",C="UsersList_item__3Iudx",N="UsersList_btn__J3Rt3",L=["id"],U=function(){var n=(0,s.v9)(_),e=(0,t.useState)(1),r=(0,c.Z)(e,2),o=r[0],a=r[1],u=n.slice(0,3*o),d=3*o>=n.length;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("ul",{className:g,children:u.map((function(n){var e=n.id,r=(0,l.Z)(n,L);return(0,p.jsx)("li",{className:C,children:(0,p.jsx)(v,(0,i.Z)({id:e},r))},e)}))}),d?null:(0,p.jsx)("button",{className:N,type:"button",onClick:function(){a((function(n){return n+1}))},children:"Load More"})]})},b=r(1087),k=r(828),F="BackLink_link__Echxs",E=function(n){var e=n.to,r=n.children;return(0,p.jsxs)(b.rU,{className:F,to:e,children:[(0,p.jsx)(k.Fjg,{}),r]})},S=r(1273),y="Dropdown_dropdown__QEFz6",I="Dropdown_trigger__5u3gj",D="Dropdown_active__z+dyi Dropdown_dropdownMenu__dfinC",T="Dropdown_inactive__LAinl Dropdown_dropdownMenu__dfinC",Z=function(){var n=(0,t.useState)(!1),e=(0,c.Z)(n,2),r=e[0],o=e[1],i=(0,t.useRef)();(0,t.useEffect)((function(){var n=function(n){i.current.contains(n.target)||o(!1)};return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}));var l=(0,s.I0)(),a=function(n){l((0,S.x)(n)),o(!1)};return(0,p.jsxs)("div",{ref:i,className:y,children:[(0,p.jsx)("button",{className:I,onClick:function(){o((function(n){return!n}))},children:"Filter Tweets"}),(0,p.jsx)("div",{className:r?D:T,children:(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{className:"dropdownItem",onClick:function(){return a("all")},children:(0,p.jsx)("p",{children:"Show All"})}),(0,p.jsx)("li",{className:"dropdownItem",onClick:function(){return a("follow")},children:(0,p.jsx)("p",{children:"Follow"})}),(0,p.jsx)("li",{className:"dropdownItem",onClick:function(){return a("following")},children:(0,p.jsx)("p",{children:"Following"})})]})})]})},P=r(643),q="Loader_loader__+lRPl",B=function(){return(0,p.jsx)("div",{className:q,children:(0,p.jsx)(P.W0,{height:100,width:100,radius:5,color:"#2f362f",ariaLabel:"ball-triangle-loading",wrapperClass:{},wrapperStyle:"",visible:!0})})},J=r(3881),M=r.n(J),R=r(5880),z="Scroll_toTop__U-6Lg",A="Scroll_visible__quvBL Scroll_toTop__U-6Lg",G="Scroll_icon__aJtrn",H=function(){var n=(0,t.useState)(!1),e=(0,c.Z)(n,2),r=e[0],s=e[1];(0,t.useEffect)((function(){var n=M()((function(){window.scrollY>200?s(!0):s(!1)}),500);return document.addEventListener("scroll",n),function(){return document.removeEventListener("scroll",n)}}));return(0,p.jsx)("div",{className:r?A:z,onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:(0,p.jsx)(R.Nt3,{className:G})})},K=function(){var n=(0,s.v9)(u),e=(0,s.v9)(d),r=(0,s.I0)();return(0,t.useEffect)((function(){r((0,o.m)())}),[r]),(0,p.jsxs)(p.Fragment,{children:[n&&(0,p.jsx)(B,{}),e&&(0,p.jsxs)("p",{children:["Ooooops... something went wrong \ud83d\ude25 ",e]}),(0,p.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,p.jsx)(E,{to:"/",children:"Back to the Home Page"}),(0,p.jsx)(Z,{})]}),(0,p.jsx)(U,{}),(0,p.jsx)(H,{})]})}}}]);
//# sourceMappingURL=622.84d49a1b.chunk.js.map