"use strict";(self.webpackChunkknot_docs=self.webpackChunkknot_docs||[]).push([[29],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>v});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=i(a),v=r,k=m["".concat(p,".").concat(v)]||m[v]||d[v]||l;return a?n.createElement(k,s(s({ref:t},c),{},{components:a})):n.createElement(k,s({ref:t},c))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var i=2;i<l;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,s),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(7462),r=a(7294),l=a(6010),s=a(2389),o=a(7392),p=a(7094),i=a(2466);const c="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,a;const{lazy:s,block:m,defaultValue:v,values:k,groupId:N,className:y}=e,u=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),F=null!=k?k:u.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),D=(0,o.l)(F,((e,t)=>e.value===t.value));if(D.length>0)throw new Error('Docusaurus error: Duplicate values "'+D.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const f=null===v?v:null!=(t=null!=v?v:null==(a=u.find((e=>e.props.default)))?void 0:a.props.value)?t:u[0].props.value;if(null!==f&&!F.some((e=>e.value===f)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+F.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:C,setTabGroupChoices:b}=(0,p.U)(),[h,A]=(0,r.useState)(f),g=[],{blockElementScrollPositionUntilNextRender:E}=(0,i.o5)();if(null!=N){const e=C[N];null!=e&&e!==h&&F.some((t=>t.value===e))&&A(e)}const x=e=>{const t=e.currentTarget,a=g.indexOf(t),n=F[a].value;n!==h&&(E(t),A(n),null!=N&&b(N,String(n)))},O=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=g.indexOf(e.currentTarget)+1;a=null!=(n=g[t])?n:g[0];break}case"ArrowLeft":{var r;const t=g.indexOf(e.currentTarget)-1;a=null!=(r=g[t])?r:g[g.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},y)},F.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,key:t,ref:e=>g.push(e),onKeyDown:O,onFocus:x,onClick:x},s,{className:(0,l.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":h===t})}),null!=a?a:t)}))),s?(0,r.cloneElement)(u.filter((e=>e.props.value===h))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},u.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==h})))))}function v(e){const t=(0,s.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},5477:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>v,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=a(7462),r=(a(7294),a(3905)),l=a(5488),s=a(5162);const o={sidebar_position:5},p="Function Call",i={unversionedId:"syntax/expression/function-call",id:"syntax/expression/function-call",title:"Function Call",description:"Use this syntax to invoke a function and retrieve its result.",source:"@site/docs/syntax/expression/function-call.mdx",sourceDirName:"syntax/expression",slug:"/syntax/expression/function-call",permalink:"/docs/syntax/expression/function-call",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/syntax/expression/function-call.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Property Access",permalink:"/docs/syntax/expression/property-access"},next:{title:"Operators",permalink:"/docs/syntax/operator/"}},c={},d=[],m={toc:d};function v(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"function-call"},"Function Call"),(0,r.kt)("p",null,"Use this syntax to invoke a function and retrieve its result."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"knot",label:"Knot",mdxType:"TabItem"},(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"knot"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"func"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"add"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"(lhs"),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"integer"),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," rhs"),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"integer"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},") "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"->"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"lhs"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"+"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"rhs"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"}),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"result"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"add"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"123"),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"456"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},");"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki material-palenight",style:{backgroundColor:"#292D3E",color:"#A6ACCD"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"knot"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#C792EA"}},"func"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#82AAFF"}},"add"),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}},"lhs"),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#FFCB6B"}},"integer"),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," rhs"),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#FFCB6B"}},"integer"),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},")"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"->"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," lhs "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"+"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," rhs"),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"}),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#C792EA"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," result "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#82AAFF"}},"add"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#F78C6C"}},"123"),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#F78C6C"}},"456"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}},")"),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},";"))))))),(0,r.kt)(s.Z,{value:"tsx",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"function"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"add"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"(lhs"),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"integer"),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," rhs"),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"integer"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},") {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"return"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," lhs "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"+"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," rhs;")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),(0,r.kt)("div",{parentName:"code",className:"line"}),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"result"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"add"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"123"),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"456"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},");"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki material-palenight",style:{backgroundColor:"#292D3E",color:"#A6ACCD"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#C792EA"}},"function"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#82AAFF"}},"add"),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}},"lhs"),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#FFCB6B"}},"integer"),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," rhs"),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},":"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#FFCB6B"}},"integer"),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},")"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"{")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#F07178"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"return"),(0,r.kt)("span",{parentName:"div",style:{color:"#F07178"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}},"lhs"),(0,r.kt)("span",{parentName:"div",style:{color:"#F07178"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"+"),(0,r.kt)("span",{parentName:"div",style:{color:"#F07178"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}},"rhs"),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"}")),(0,r.kt)("div",{parentName:"code",className:"line"}),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#C792EA"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," result "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#82AAFF"}},"add"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#F78C6C"}},"123"),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},","),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#F78C6C"}},"456"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}},")"),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},";")))))))))}v.isMDXComponent=!0}}]);