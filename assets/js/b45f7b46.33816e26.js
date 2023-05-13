"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[576],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9437:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={slug:"/poolv1",sidebar_position:2},i="PHX V1",l={unversionedId:"PoolV1",id:"PoolV1",title:"PHX V1",description:"Introduction",source:"@site/docs/PoolV1.md",sourceDirName:".",slug:"/poolv1",permalink:"/poolv1",draft:!1,editUrl:"https://github.com/phx-verse/docs/tree/main/docs/PoolV1.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{slug:"/poolv1",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/"},next:{title:"PHX DAO",permalink:"/phxdao"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Stake Rules",id:"stake-rules",level:2},{value:"FAQs",id:"faqs",level:2},{value:"Why does the staking lock-up completion time keep changing?",id:"why-does-the-staking-lock-up-completion-time-keep-changing",level:4}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"phx-v1"},"PHX V1"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://pospool.phxverse.com/"},"pospool.phxverse.com")," is the first Conflux PoS Stake Pool developed by PHXVerse\uff0cit has the following features\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Users can participate in PoS and earn rewards without having to set up their own nodes."),(0,o.kt)("li",{parentName:"ul"},"Deployed on both Conflux Core and eSpace, users can choose freely."),(0,o.kt)("li",{parentName:"ul"},"All funds are controlled by smart contracts, fully decentralization."),(0,o.kt)("li",{parentName:"ul"},"Our PoS node operator have rich experience and there have been no accidents since the Conflux PoS hard fork was launched."),(0,o.kt)("li",{parentName:"ul"},"High yield and earnings can be withdrawn at any time.")),(0,o.kt)("h2",{id:"stake-rules"},"Stake Rules"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The amount of staking must be a multiple of 1000 and the minimum amount of staking is 1000 CFX."),(0,o.kt)("li",{parentName:"ol"},"The staking lock-up period is 13 days and earnings start to be calculated immediately after staking."),(0,o.kt)("li",{parentName:"ol"},"After the staking lock-up is completed, you can unstake at any time and the unstaking lock-up period is 1 day."),(0,o.kt)("li",{parentName:"ol"},"After unstaking lock-up is completed, you can withdraw at any time."),(0,o.kt)("li",{parentName:"ol"},"Staking rewards are settled every hour and can be withdrawn at any time. The service charges 8% of the rewards as service fee.")),(0,o.kt)("h2",{id:"faqs"},"FAQs"),(0,o.kt)("h4",{id:"why-does-the-staking-lock-up-completion-time-keep-changing"},"Why does the staking lock-up completion time keep changing?"),(0,o.kt)("p",null,"The staking lock-up completion time is estimated by calculating the number of blocks. Due to the fact that the time of block generation is not fixed, there will be some changes and errors in the estimated time. This is normal."))}d.isMDXComponent=!0}}]);