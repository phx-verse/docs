"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[238],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7393:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={slug:"/poolv2",sidebar_position:3},i="PHX V2",l={unversionedId:"PoolV2",id:"PoolV2",title:"PHX V2",description:"PHXVerse will continue to improve the product features and experience of PHX PoS, and all PHXVerse products put safety first, and security is the foundation of all other functions. In any case, the safety of users' funds will be guaranteed first.",source:"@site/docs/PoolV2.md",sourceDirName:".",slug:"/poolv2",permalink:"/poolv2",draft:!1,editUrl:"https://github.com/phx-verse/docs/tree/main/docs/PoolV2.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{slug:"/poolv2",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"PHX V1",permalink:"/poolv1"},next:{title:"PHX DAO",permalink:"/phxdao"}},c={},s=[{value:"Introduction",id:"introduction",level:2},{value:"cCFX",id:"ccfx",level:2},{value:"PoS Oracle",id:"pos-oracle",level:2},{value:"Redeem",id:"redeem",level:2},{value:"Turbo Mode",id:"turbo-mode",level:3},{value:"Handling Fee",id:"handling-fee",level:2},{value:"Farming",id:"farming",level:2},{value:"Deployments",id:"deployments",level:2},{value:"FAQs",id:"faqs",level:2},{value:"1. Why is the amount of cCFX I received less than the amount of CFX pledged?",id:"1-why-is-the-amount-of-ccfx-i-received-less-than-the-amount-of-cfx-pledged",level:3},{value:"2. Can I redeem it immediately after pledging CFX?",id:"2-can-i-redeem-it-immediately-after-pledging-cfx",level:3}],d={toc:s},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"phx-v2"},"PHX V2"),(0,o.kt)("p",null,"PHXVerse will continue to improve the product features and experience of PHX PoS, and all PHXVerse products put safety first, and security is the foundation of all other functions. In any case, the safety of users' funds will be guaranteed first."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"PHX V2 is the next-generation PHX PoS staking pool, deployed on Conflux eSpace. Its main improvement is to improve liquidity and yield, and it has the following characteristics:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Support small amounts of pledges, unlimited quantity, more flexible and convenient"),(0,o.kt)("li",{parentName:"ul"},"After CFX is pledged, the pledge certificate ",(0,o.kt)("strong",{parentName:"li"},"cCFX")," (Compound CFX) will be issued to user. cCFX is an ERC20 token that can circulate freely on the Conflux network and integrate into other DeFi protocols."),(0,o.kt)("li",{parentName:"ul"},"Support compound interest, automatically reinvest every hour, and the yield is several percentage points higher than the current generation of PoS mining pools"),(0,o.kt)("li",{parentName:"ul"},"Support dynamic redemption and real-time arrival can be achieved under Turbo redemption mode")),(0,o.kt)("h2",{id:"ccfx"},"cCFX"),(0,o.kt)("p",null,"cCFX is an ERC20 token and serves as the pledge certificate for PHX v2. When users pledge CFX into PHX v2, they will receive a certain amount of cCFX. cCFX represents the user\u2019s pledge share in PHX v2."),(0,o.kt)("p",null,"All pledged CFX will be put into PoS, and PoS will generate income for the pledger. The income is automatically reinvested once an hour. The total amount of CFX corresponding to cCFX will continue to increase, so the value of cCFX will increase."),(0,o.kt)("p",null,"cCFX and CFX have an exchange ratio, which is initially 1. With the participation of PoS to obtain income, this ratio will gradually increase. When users redeem cCFX, they will exchange cCFX for CFX according to the current exchange ratio."),(0,o.kt)("h2",{id:"pos-oracle"},"PoS Oracle"),(0,o.kt)("p",null,"PHX V2 contains a PoS Oracle Smart Contract that is deployed on Core Space and can provide PoS data for any contracts, including:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Latest PoS Epoch height, Block height"),(0,o.kt)("li",{parentName:"ol"},"PoS earnings of each node per Epoch"),(0,o.kt)("li",{parentName:"ol"},"Current status data of each node: current votes, locked votes, unlocked votes, locking queue, and unlocking queue")),(0,o.kt)("p",null,"Currently, the contract data are maintained by PHX administrators to ensure the accuracy and timeliness of the data. PHX v2 obtains the following data from this Oracle:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Node earnings data per Epoch, used to calculate APY"),(0,o.kt)("li",{parentName:"ol"},"The node\u2019s locked queue and unlocked queue are used to calculate the redemption time, which can greatly improve the accuracy of the estimated redemption time and speed up the redemption process.")),(0,o.kt)("p",null,"The contract is open source, and any project can deploy its own PoS Oracle to provide PoS data for its project."),(0,o.kt)("h2",{id:"redeem"},"Redeem"),(0,o.kt)("p",null,"Users can redeem cCFX held at any time. PHX V2 implements a dynamic redemption mechanism, and we will complete the user\u2019s redemption request as soon as possible. In Turbo mode, users can immediately obtain the redeemed CFX without any waiting\nIn other cases, users need to wait for a period, which is calculated based on the current node\u2019s locked queue and the unlocked queue of the mining pool. Through PoS Oracle, we can calculate a much more accurate redemption time. This can speed up the redemption process."),(0,o.kt)("h3",{id:"turbo-mode"},"Turbo Mode"),(0,o.kt)("p",null,"Turbo mode is a redemption mode of PHX V2. In this mode, users can immediately obtain the redeemed CFX without waiting. As a PoS mining pool, PHX V2 can use some funds to speed up the user\u2019s redemption process, including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The part of the mining pool that is less than 1000 CFX cannot participate in PoS. This part of the funds can be used for fast redemption."),(0,o.kt)("li",{parentName:"ul"},"The handling fee income of PHX V2 (10% of PoS income) can also be used for fast redemption."),(0,o.kt)("li",{parentName:"ul"},"Newly pledged CFX will be used first for redemption requests, and the remaining part will be put into PoS."),(0,o.kt)("li",{parentName:"ul"},"When performing the unpledge operation from PoS, only multiples of 1000 can be unpledged. Therefore, it is inevitable to unpledge more than the required amount of CFX. This part of the CFX can also be used for fast redemption.")),(0,o.kt)("h2",{id:"handling-fee"},"Handling Fee"),(0,o.kt)("p",null,"PHX v2 will charge a 10% handling fee for the PoS income of the staking pool. The handling fee will be used for the following purposes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"50% of the handling fee will be used for repurchased and burned PHX"),(0,o.kt)("li",{parentName:"ul"},"rest of the handling fee will be used for fast redemption, covering the development and operation costs of PHX V2")),(0,o.kt)("h2",{id:"farming"},"Farming"),(0,o.kt)("p",null,"After the launch of PHX V2, PHX and cCFX will also create transaction pairs on Swap, to incentivize users who participate in pledging, Farming will be launch. The specific rules are as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Farming total amount is 24 million PHX, released in 48 months"),(0,o.kt)("li",{parentName:"ul"},"Distribute PHX according to the proportion of LP staked by users, which can be claimed at any time"),(0,o.kt)("li",{parentName:"ul"},"PHX can be re-pledged into the Farming pool to increase PHX acquisition speed")),(0,o.kt)("h2",{id:"deployments"},"Deployments"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CCFX: ",(0,o.kt)("a",{parentName:"li",href:"https://evm.confluxscan.net/address/0xa11ad495c3bf53c19368313a894ba49bc26e7f92?tab=transaction"},"0xA11AD495c3bF53c19368313A894bA49bc26e7f92")),(0,o.kt)("li",{parentName:"ul"},"VotingEscrow: ",(0,o.kt)("a",{parentName:"li",href:"https://evm.confluxscan.net/address/0x067af87c50cc07f59c45569a0ad2d3fb552e412c?tab=transaction"},"0x067af87C50CC07f59C45569a0Ad2D3FB552e412c")),(0,o.kt)("li",{parentName:"ul"},"FarmingController: ",(0,o.kt)("a",{parentName:"li",href:"https://evm.confluxscan.net/address/0x46a930f4f4940a8345c53b3b2b70d5b59d0b80a5"},"0x46A930f4F4940a8345C53b3B2b70d5b59D0B80A5"))),(0,o.kt)("h2",{id:"faqs"},"FAQs"),(0,o.kt)("h3",{id:"1-why-is-the-amount-of-ccfx-i-received-less-than-the-amount-of-cfx-pledged"},"1. Why is the amount of cCFX I received less than the amount of CFX pledged?"),(0,o.kt)("p",null,"The exchange ratio between cCFX and CFX is slightly greater than 1, and it increases with time. Therefore, the amount of cCFX obtained by pledging is usually less than the amounts of CFX pledged."),(0,o.kt)("h3",{id:"2-can-i-redeem-it-immediately-after-pledging-cfx"},"2. Can I redeem it immediately after pledging CFX?"),(0,o.kt)("p",null,"Yes, cCFX can be redeemed at any time. However, there may be a certain waiting time for the redeemed CFX, and the specific waiting time can be viewed when redeeming."))}p.isMDXComponent=!0}}]);