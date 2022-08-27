"use strict";(self.webpackChunkknot_docs=self.webpackChunkknot_docs||[]).push([[5039],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>v});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),v=r,k=d["".concat(i,".").concat(v)]||d[v]||m[v]||o;return a?n.createElement(k,l(l({ref:t},c),{},{components:a})):n.createElement(k,l({ref:t},c))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(7462),r=a(7294),o=a(6010),l=a(2389),s=a(7392),i=a(7094),p=a(2466);const c="tabList__CuJ",m="tabItem_LNqP";function d(e){var t,a;const{lazy:l,block:d,defaultValue:v,values:k,groupId:N,className:y}=e,u=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),F=null!=k?k:u.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),D=(0,s.l)(F,((e,t)=>e.value===t.value));if(D.length>0)throw new Error('Docusaurus error: Duplicate values "'+D.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const f=null===v?v:null!=(t=null!=v?v:null==(a=u.find((e=>e.props.default)))?void 0:a.props.value)?t:u[0].props.value;if(null!==f&&!F.some((e=>e.value===f)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+F.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:b,setTabGroupChoices:g}=(0,i.U)(),[C,h]=(0,r.useState)(f),E=[],{blockElementScrollPositionUntilNextRender:A}=(0,p.o5)();if(null!=N){const e=b[N];null!=e&&e!==C&&F.some((t=>t.value===e))&&h(e)}const x=e=>{const t=e.currentTarget,a=E.indexOf(t),n=F[a].value;n!==C&&(A(t),h(n),null!=N&&g(N,String(n)))},T=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=E.indexOf(e.currentTarget)+1;a=null!=(n=E[t])?n:E[0];break}case"ArrowLeft":{var r;const t=E.indexOf(e.currentTarget)-1;a=null!=(r=E[t])?r:E[E.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},y)},F.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>E.push(e),onKeyDown:T,onFocus:x,onClick:x},l,{className:(0,o.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":C===t})}),null!=a?a:t)}))),l?(0,r.cloneElement)(u.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},u.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function v(e){const t=(0,l.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},8054:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>v,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var n=a(7462),r=(a(7294),a(3905)),o=a(5488),l=a(5162);const s={sidebar_position:3},i="Number",p={unversionedId:"syntax/primitive/number",id:"syntax/primitive/number",title:"Number",description:"Integer",source:"@site/docs/syntax/primitive/number.mdx",sourceDirName:"syntax/primitive",slug:"/syntax/primitive/number",permalink:"/docs/syntax/primitive/number",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/syntax/primitive/number.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Boolean",permalink:"/docs/syntax/primitive/boolean"},next:{title:"String",permalink:"/docs/syntax/primitive/string"}},c={},m=[{value:"Integer",id:"integer",level:2},{value:"Float",id:"float",level:2}],d={toc:m};function v(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"number"},"Number"),(0,r.kt)("h2",{id:"integer"},"Integer"),(0,r.kt)("p",null,"Used to describe negative or positive integers."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"knot",label:"Knot",mdxType:"TabItem"},(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"knot"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"positiveInteger"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"3123"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"negativeInteger"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"-"),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"134"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki material-palenight",style:{backgroundColor:"#292D3E",color:"#A6ACCD"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"knot"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#C792EA"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," positiveInteger "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#F78C6C"}},"3123"),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#C792EA"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," negativeInteger "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"-"),(0,r.kt)("span",{parentName:"div",style:{color:"#F78C6C"}},"134"),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},";"))))))),(0,r.kt)(l.Z,{value:"tsx",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"positiveInteger"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"3123"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"negativeInteger"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"-"),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"134"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki material-palenight",style:{backgroundColor:"#292D3E",color:"#A6ACCD"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#C792EA"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," positiveInteger "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#F78C6C"}},"3123"),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#C792EA"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," negativeInteger "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"-"),(0,r.kt)("span",{parentName:"div",style:{color:"#F78C6C"}},"134"),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},";")))))))),(0,r.kt)("h2",{id:"float"},"Float"),(0,r.kt)("p",null,"Used to describe negative or positive floating-point numbers."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"knot",label:"Knot",mdxType:"TabItem"},(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"knot"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"positiveFloat"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"31.23"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"negativeFloat"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"-"),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"1.34"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki material-palenight",style:{backgroundColor:"#292D3E",color:"#A6ACCD"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"knot"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#C792EA"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," positiveFloat "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#F78C6C"}},"31.23"),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#C792EA"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," negativeFloat "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"-"),(0,r.kt)("span",{parentName:"div",style:{color:"#F78C6C"}},"1.34"),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},";"))))))),(0,r.kt)(l.Z,{value:"tsx",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"positiveFloat"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"31.23"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"negativeFloat"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"-"),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"1.34"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki material-palenight",style:{backgroundColor:"#292D3E",color:"#A6ACCD"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#C792EA"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," positiveFloat "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#F78C6C"}},"31.23"),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#C792EA"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," negativeFloat "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"-"),(0,r.kt)("span",{parentName:"div",style:{color:"#F78C6C"}},"1.34"),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},";")))))))))}v.isMDXComponent=!0}}]);