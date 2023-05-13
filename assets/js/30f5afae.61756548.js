"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[238],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),d=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return n?o.createElement(h,r(r({ref:t},s),{},{components:n})):o.createElement(h,r({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:i,r[1]=l;for(var d=2;d<a;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7393:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=n(7462),i=(n(7294),n(3905));const a={slug:"/poolv2",sidebar_position:4},r="Pool V2",l={unversionedId:"PoolV2",id:"PoolV2",title:"Pool V2",description:"Introduction",source:"@site/docs/PoolV2.md",sourceDirName:".",slug:"/poolv2",permalink:"/poolv2",draft:!1,editUrl:"https://github.com/phx-verse/docs/tree/main/docs/PoolV2.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{slug:"/poolv2",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"PHX DAO",permalink:"/phxdao"},next:{title:"sWCFX",permalink:"/swcfx"}},c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"cCFX",id:"ccfx",level:2},{value:"PoS Oracle",id:"pos-oracle",level:2},{value:"Redeem",id:"redeem",level:2},{value:"Turbo Mode",id:"turbo-mode",level:3},{value:"Farming",id:"farming",level:2},{value:"FAQs",id:"faqs",level:2},{value:"1. Why is the amount of cCFX I received less than the amount of CFX pledged?",id:"1-why-is-the-amount-of-ccfx-i-received-less-than-the-amount-of-cfx-pledged",level:4},{value:"2. Can I redeem it immediately after pledging CFX?",id:"2-can-i-redeem-it-immediately-after-pledging-cfx",level:4}],s={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pool-v2"},"Pool V2"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Pool V2 is the next-generation PHX PoS Pool, deployed on Conflux eSpace. Its main improvement is to improve liquidity and yield, and it has the following characteristics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Support small amount of pledge, unlimited quantity, more flexible and convenient"),(0,i.kt)("li",{parentName:"ul"},"After CFX is pledged, the pledge certificate cCFX (Compound CFX) will be issued at the same time. cCFX is an ERC20 token that can circulate freely on the Conflux network and is integrated into other DeFi protocols."),(0,i.kt)("li",{parentName:"ul"},"Support compound interest, automatically reinvest every hour, and the yield is several percentage points higher than the current generation of PoS mining pools"),(0,i.kt)("li",{parentName:"ul"},"Support dynamic redemption, and real-time arrival can be achieved under Turbo redemption mode")),(0,i.kt)("h2",{id:"ccfx"},"cCFX"),(0,i.kt)("p",null,"cCFX is an ERC20 token and serves as the pledge certificate for Pool v2. When users pledge CFX into Pool v2, they will receive a certain amount of cCFX at the same time. cCFX represents the user\u2019s pledge share in Pool v2."),(0,i.kt)("p",null,"All pledged CFX will be put into PoS, and PoS will generate income for the pledger. The income is automatically reinvested once an hour. The total amount of CFX corresponding to cCFX will continue to increase, so the value of cCFX will increase."),(0,i.kt)("p",null,"cCFX and CFX have an exchange ratio, which is initially 1. With the participation of PoS to obtain income, this ratio will gradually increase. When users redeem cCFX, they will exchange cCFX for CFX according to the current exchange ratio."),(0,i.kt)("h2",{id:"pos-oracle"},"PoS Oracle"),(0,i.kt)("p",null,"Pool V2 contains a PoS Oracle smart contract that is deployed on Core Space and can provide PoS data for any contract, including:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Latest PoS Epoch height, Block height"),(0,i.kt)("li",{parentName:"ol"},"PoS earnings of each node per Epoch"),(0,i.kt)("li",{parentName:"ol"},"Current status data of each node: current votes, pending locked votes, pending unlocked votes, locked queue, and unlocked queue")),(0,i.kt)("p",null,"Currently, the contract data is maintained by PHX administrators to ensure the accuracy and timeliness of the data. PHX v2 obtains the following data from this Oracle:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Node earnings data per Epoch, used to calculate APY"),(0,i.kt)("li",{parentName:"ol"},"The node\u2019s locked queue and unlocked queue are used to calculate the redemption time, which can greatly improve the accuracy of the estimated redemption time and speed up the redemption process.")),(0,i.kt)("p",null,"The contract is open source, and any project can deploy its own PoS Oracle to provide PoS data for its own project."),(0,i.kt)("h2",{id:"redeem"},"Redeem"),(0,i.kt)("p",null,"Users can redeem cCFX held at any time. Pool V2 implements a dynamic redemption mechanism, and we will complete the user\u2019s redemption request as soon as possible. In Turbo mode, users can immediately obtain the redeemed CFX without any waiting\nIn other cases, users need to wait for a period of time, which is calculated based on the current node\u2019s locked queue and unlocked queue of the mining pool. Through PoS Oracle, we can calculate a much more accurate redemption time. This can speed up the redemption process."),(0,i.kt)("h3",{id:"turbo-mode"},"Turbo Mode"),(0,i.kt)("p",null,"Turbo mode is a redemption mode of Pool V2. In this mode, users can immediately obtain the redeemed CFX without waiting. As a PoS mining pool, Pool V2 can use some funds to speed up the user\u2019s redemption process, including:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The part of the mining pool that is less than 1000 CFX cannot participate in PoS. This part of the funds can be used for fast redemption."),(0,i.kt)("li",{parentName:"ul"},"The handling fee income of Pool V2 (10% of PoS income) can also be used for fast redemption."),(0,i.kt)("li",{parentName:"ul"},"Newly pledged CFX will be used first for redemption requests, and the remaining part will be put into PoS."),(0,i.kt)("li",{parentName:"ul"},"When performing the unpledge operation from PoS, only multiples of 1000 can be unpledged. Therefore, it is inevitable to unpledge more than the required amount of CFX. This part of the CFX can also be used for fast redemption.")),(0,i.kt)("h2",{id:"farming"},"Farming"),(0,i.kt)("p",null,"After the launch of Pool V2, in order to incentivize users who participate in pledging, Farming will be launched. All users holding cCFX will receive PHX tokens. The specific rules are as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Farming total amount is 24 million PHX, released in 24 months, 1 million PHX per month"),(0,i.kt)("li",{parentName:"ul"},"Distribute PHX according to the proportion of cCFX held by users, which can be claimed at any time"),(0,i.kt)("li",{parentName:"ul"},"PHX can be re-pledged into the Farming pool to increase PHX acquisition speed")),(0,i.kt)("p",null,"After Pool V2 is launched, PHX and cCFX will also create transaction pairs on Swap. We will also provide incentives to liquidity providers for transaction pairs, and LP tokens of transaction pairs can also participate in Farming. Specific rules will be announced later."),(0,i.kt)("h2",{id:"faqs"},"FAQs"),(0,i.kt)("h4",{id:"1-why-is-the-amount-of-ccfx-i-received-less-than-the-amount-of-cfx-pledged"},"1. Why is the amount of cCFX I received less than the amount of CFX pledged?"),(0,i.kt)("p",null,"The exchange ratio between cCFX and CFX is slightly greater than 1, and it increases with time. Therefore, the amount of cCFX obtained by pledging is usually less than the amount of CFX pledged."),(0,i.kt)("h4",{id:"2-can-i-redeem-it-immediately-after-pledging-cfx"},"2. Can I redeem it immediately after pledging CFX?"),(0,i.kt)("p",null,"Yes, cCFX can be redeemed at any time. However, there may be a certain waiting time for the redeemed CFX, and the specific waiting time can be viewed when redeeming."))}p.isMDXComponent=!0}}]);