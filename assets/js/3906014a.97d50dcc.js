"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[176],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4916:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={slug:"/swcfx",sidebar_position:5},i="sWCFX",s={unversionedId:"sWCFX",id:"sWCFX",title:"sWCFX",description:"Introduction",source:"@site/docs/sWCFX.md",sourceDirName:".",slug:"/swcfx",permalink:"/swcfx",draft:!1,editUrl:"https://github.com/phx-verse/docs/tree/main/docs/sWCFX.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{slug:"/swcfx",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Pool V2",permalink:"/poolv2"},next:{title:"RoadMaps",permalink:"/roadmap"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"FAQs",id:"faqs",level:2},{value:"Whether sWCFX has a run risk",id:"whether-swcfx-has-a-run-risk",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"swcfx"},"sWCFX"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"sWCFX")," is a modern and new WCFX deployed on Conflux eSpace. It is fully compatible with WCFX and has the following new features:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Add multiple convenient methods: ",(0,a.kt)("inlineCode",{parentName:"li"},"depositTo"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"withdrawTo"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"withdrawFrom"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"depositToAndCall"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"approveAndCall"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"transferAndCall")),(0,a.kt)("li",{parentName:"ol"},"Support FlashMint (ERC3156)"),(0,a.kt)("li",{parentName:"ol"},"Support ERC20Permit (EIP-2612)"),(0,a.kt)("li",{parentName:"ol"},"Provide estimated annualized yield of 2%-6%.")),(0,a.kt)("h2",{id:"how-it-works"},"How it works"),(0,a.kt)("p",null,"When the issuance of sWCFX exceeds a certain amount (such as 1M), a certain proportion (such as 50%) of all newly deposited CFX will be staked into PoS to enhance the security of the network. At the same time, PoS earnings can also be obtained, and this part of the earnings will be distributed to sWCFX holders. The exchange ratio between sWCFX and CFX is 1:1, and can be exchanged at any time."),(0,a.kt)("p",null,"By setting a reasonable staking ratio, most redemption requests can be exchanged in real time. For large redemption requests in extremely special scenarios, it is usually guaranteed to be completed within 24 hours."),(0,a.kt)("p",null,"We will also set up an independent liquidity pool to further ensure the real-time redemption of sWCFX"),(0,a.kt)("p",null,"sWCFX holders can earn estimated annualized returns of 2%-6%. All earnings can be withdrawn in real-time, and unwithdrawn earnings will also be used to increase the liquidity of sWCFX redemption"),(0,a.kt)("h2",{id:"use-cases"},"Use Cases"),(0,a.kt)("p",null,"Currently, most of the use cases for WCFX can theoretically be replaced by sWCFX. DeFi protocols can use sWCFX as a CFX ERC20 wrapper and can earn additional income to increase their revenue or reward users."),(0,a.kt)("p",null,"If DeFi projects want to provide flash loan services, they can also integrate sWCFX."),(0,a.kt)("p",null,"sWCFX supports ERC20Permit (EIP-2612), which can save DeFi project users the gas cost of the Approve operation."),(0,a.kt)("h2",{id:"faqs"},"FAQs"),(0,a.kt)("h3",{id:"whether-swcfx-has-a-run-risk"},"Whether sWCFX has a run risk"),(0,a.kt)("p",null,"sWCFX has more than 100% reserve, so there is no run risk. For extremely special large redemptions, it may not be possible to complete in real-time, but it is usually completed within 24 hours."))}d.isMDXComponent=!0}}]);