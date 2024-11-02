"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[25],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,h=u["".concat(d,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3680:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={slug:"/api/ccfx",sidebar_position:14},o="cCFX Contract",s={unversionedId:"API/cCFX",id:"API/cCFX",title:"cCFX Contract",description:"The cCFX contract is the core of PHX v2, which allows users to stake CFX and earn rewards through PoS. It also functions as a standard ERC-20 contract. Its address is: 0xa11ad495c3bf53c19368313a894ba49bc26e7f92",source:"@site/docs/API/cCFX.md",sourceDirName:"API",slug:"/api/ccfx",permalink:"/api/ccfx",draft:!1,editUrl:"https://github.com/phx-verse/docs/tree/main/docs/API/cCFX.md",tags:[],version:"current",sidebarPosition:14,frontMatter:{slug:"/api/ccfx",sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"AirDrop",permalink:"/airdrop"},next:{title:"Claim Airdrop",permalink:"/tutorial/claimAirdrop"}},d={},l=[{value:"Core Methods",id:"core-methods",level:2},{value:"deposit",id:"deposit",level:3},{value:"redeem",id:"redeem",level:3},{value:"userRedeemedAssets",id:"userredeemedassets",level:3},{value:"userWithdrawableAssets",id:"userwithdrawableassets",level:3},{value:"withdraw",id:"withdraw",level:3},{value:"Complete Contract ABI",id:"complete-contract-abi",level:2},{value:"FAQs",id:"faqs",level:2},{value:"How to earn PoS rewards?",id:"how-to-earn-pos-rewards",level:3},{value:"What the redeem complete period?",id:"what-the-redeem-complete-period",level:3}],c={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ccfx-contract"},"cCFX Contract"),(0,a.kt)("p",null,"The cCFX contract is the core of PHX v2, which allows users to stake CFX and earn rewards through PoS. It also functions as a standard ERC-20 contract. Its address is: ",(0,a.kt)("a",{parentName:"p",href:"https://evm.confluxscan.io/address/0xa11ad495c3bf53c19368313a894ba49bc26e7f92?tab=contract-viewer"},(0,a.kt)("inlineCode",{parentName:"a"},"0xa11ad495c3bf53c19368313a894ba49bc26e7f92"))),(0,a.kt)("p",null,"It extends the following methods on the basis of ERC20 to realize the function of depositing CFX and participating in PoS to obtain income."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"deposit"),": deposit CFX"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"redeem"),": initiate a redemption request for CFX."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"withdraw"),": withdraw CFX back(after redemption is completed)"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"cfxRatio"),": exchange rate between CFX and cCFX"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"userRedeemedAssets"),": CFX amount in user redemption"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"userWithdrawableAssets"),": CFX amount that can be withdrawn after redemption is completed")),(0,a.kt)("p",null,"The overall operation process is:: ",(0,a.kt)("inlineCode",{parentName:"p"},"deposit -> redeem -> withdraw")),(0,a.kt)("h2",{id:"core-methods"},"Core Methods"),(0,a.kt)("h3",{id:"deposit"},"deposit"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function deposit() external;\n")),(0,a.kt)("p",null,"By calling this method and setting the transaction's ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," to deposit CFX, CFX will be converted to cCFX proportionally and distributed to the user. cCFX represents the user's share in the entire PoS pool and is also the certificate for the user to redeem CFX. There are no restrictions on the amount of CFX that can be deposited."),(0,a.kt)("h3",{id:"redeem"},"redeem"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function redeem(uint256 shares) external;\n")),(0,a.kt)("p",null,"To redeem CFX, you need to initiate a request using the redeem method. This method requires one parameter called ",(0,a.kt)("inlineCode",{parentName:"p"},"shares"),", which specifies the number of cCFX to be redeemed. The method will destroy the user's cCFX and add their redemption request to the redemption queue."),(0,a.kt)("h3",{id:"userredeemedassets"},"userRedeemedAssets"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function userRedeemedAssets(address user) external view returns (uint256);\n")),(0,a.kt)("p",null,"This method is used to query the amount of CFX in redemption for users, that is, the amount of CFX that has been requested for redemption but has not yet been redeemed by the user."),(0,a.kt)("p",null,"After the user initiates a redemption request, if the amount is small, it can be completed within a few minutes and can be withdrawn immediately after completion. In most cases (80%), the redemption time will be completed within 1 day. In extreme cases (when the redemption amount is relatively large), it may take several days."),(0,a.kt)("h3",{id:"userwithdrawableassets"},"userWithdrawableAssets"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function userWithdrawableAssets(address user) external view returns (uint256);\n")),(0,a.kt)("p",null,"This method is used to query the amount of CFX that can be withdrawn by the user after completing the redemption."),(0,a.kt)("h3",{id:"withdraw"},"withdraw"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function withdraw(uint256 amount) external;\n")),(0,a.kt)("p",null,"Call this method to extract the redeemed CFX from the completion and transfer it to the personal account."),(0,a.kt)("h2",{id:"complete-contract-abi"},"Complete Contract ABI"),(0,a.kt)("p",null,"Below is the complete ABI of the cCFX contract, can be used in ethers.js:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'[\n  "event Approval(address indexed,address indexed,uint256)",\n  "event Deposit(address indexed,uint256,uint256)",\n  "event Redeem(address indexed,uint256,uint256)",\n  "event Transfer(address indexed,address indexed,uint256)",\n  "event Withdraw(address indexed,uint256)",\n  "function allowance(address,address) view returns (uint256)",\n  "function approve(address,uint256) returns (bool)",\n  "function balanceOf(address) view returns (uint256)",\n  "function cfxRatio() view returns (uint256)",\n  "function decimals() view returns (uint8)",\n  "function decreaseAllowance(address,uint256) returns (bool)",\n  "function deposit() payable",\n  "function increaseAllowance(address,uint256) returns (bool)",\n  "function name() view returns (string)",\n  "function redeem(uint256)",\n  "function supportsInterface(bytes4) view returns (bool)",\n  "function symbol() view returns (string)",\n  "function totalAssets() view returns (uint256)",\n  "function totalRedeemedAssets() view returns (uint256)",\n  "function totalSupply() view returns (uint256)",\n  "function transfer(address,uint256) returns (bool)",\n  "function transferFrom(address,address,uint256) returns (bool)",\n  "function userRedeemedAssets(address) view returns (uint256)",\n  "function userWithdrawableAssets(address) view returns (uint256)",\n  "function withdraw(uint256)"\n]\n')),(0,a.kt)("p",null,"Complete contract interface also can be checked in ",(0,a.kt)("a",{parentName:"p",href:"https://evm.confluxscan.io/address/0xa11ad495c3bf53c19368313a894ba49bc26e7f92?tab=contract-viewer"},"Conflux Scan account page's contract tab")),(0,a.kt)("h2",{id:"faqs"},"FAQs"),(0,a.kt)("h3",{id:"how-to-earn-pos-rewards"},"How to earn PoS rewards?"),(0,a.kt)("p",null,"By holding cCFX you can earn PoS rewards, because the cCFX/CFX exchange ratio is continually increase, at an estimated 12% APY. Which means if you hold 100 cCFX for one year, you can exchange 112 CFX back."),(0,a.kt)("h3",{id:"what-the-redeem-complete-period"},"What the redeem complete period?"),(0,a.kt)("p",null,"Normally the redeem duration is couple minutes to one day."))}p.isMDXComponent=!0}}]);