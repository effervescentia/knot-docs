"use strict";(self.webpackChunkknot_docs=self.webpackChunkknot_docs||[]).push([[5845],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(a),u=n,v=m["".concat(i,".").concat(u)]||m[u]||d[u]||o;return a?r.createElement(v,s(s({ref:t},p),{},{components:a})):r.createElement(v,s({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var c=2;c<o;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(7294),n=a(6010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,s),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(7462),n=a(7294),o=a(6010),s=a(2389),l=a(7392),i=a(7094),c=a(2466);const p="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,a;const{lazy:s,block:m,defaultValue:u,values:v,groupId:y,className:k}=e,f=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=v?v:f.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),b=(0,l.l)(N,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const g=null===u?u:null!=(t=null!=u?u:null==(a=f.find((e=>e.props.default)))?void 0:a.props.value)?t:f[0].props.value;if(null!==g&&!N.some((e=>e.value===g)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+N.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:h,setTabGroupChoices:F}=(0,i.U)(),[D,E]=(0,n.useState)(g),x=[],{blockElementScrollPositionUntilNextRender:C}=(0,c.o5)();if(null!=y){const e=h[y];null!=e&&e!==D&&N.some((t=>t.value===e))&&E(e)}const O=e=>{const t=e.currentTarget,a=x.indexOf(t),r=N[a].value;r!==D&&(C(t),E(r),null!=y&&F(y,String(r)))},T=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var r;const t=x.indexOf(e.currentTarget)+1;a=null!=(r=x[t])?r:x[0];break}case"ArrowLeft":{var n;const t=x.indexOf(e.currentTarget)-1;a=null!=(n=x[t])?n:x[x.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",p)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":m},k)},N.map((e=>{let{value:t,label:a,attributes:s}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:D===t?0:-1,"aria-selected":D===t,key:t,ref:e=>x.push(e),onKeyDown:T,onFocus:O,onClick:O},s,{className:(0,o.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":D===t})}),null!=a?a:t)}))),s?(0,n.cloneElement)(f.filter((e=>e.props.value===D))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==D})))))}function u(e){const t=(0,s.Z)();return n.createElement(m,(0,r.Z)({key:String(t)},e))}},5735:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=a(7462),n=(a(7294),a(3905)),o=a(5488),s=a(5162);const l={sidebar_position:4},i="String",c={unversionedId:"syntax/primitive/string",id:"syntax/primitive/string",title:"String",description:"Textual data can be represented using string primitives.",source:"@site/docs/syntax/primitive/string.mdx",sourceDirName:"syntax/primitive",slug:"/syntax/primitive/string",permalink:"/knot-docs/docs/syntax/primitive/string",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/syntax/primitive/string.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Number",permalink:"/knot-docs/docs/syntax/primitive/number"},next:{title:"Types",permalink:"/knot-docs/docs/syntax/type"}},p={},d=[],m={toc:d};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"string"},"String"),(0,n.kt)("p",null,"Textual data can be represented using string primitives.\nStrings are denoted by opening and closing double quotes (",(0,n.kt)("inlineCode",{parentName:"p"},'"'),") characters."),(0,n.kt)(o.Z,{mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"knot",label:"Knot",mdxType:"TabItem"},(0,n.kt)("div",{className:"shiki-twoslash-fragment"},(0,n.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,n.kt)("div",{parentName:"pre",className:"language-id"},"knot"),(0,n.kt)("div",{parentName:"pre",className:"code-container"},(0,n.kt)("code",{parentName:"div"},(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"stringValue"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},'"'),(0,n.kt)("span",{parentName:"div",style:{color:"#22863A"}},"this is my page"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},'"'),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";"))))),(0,n.kt)("pre",{parentName:"div",className:"shiki material-palenight",style:{backgroundColor:"#292D3E",color:"#A6ACCD"}},(0,n.kt)("div",{parentName:"pre",className:"language-id"},"knot"),(0,n.kt)("div",{parentName:"pre",className:"code-container"},(0,n.kt)("code",{parentName:"div"},(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#C792EA"}},"const"),(0,n.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," stringValue "),(0,n.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},'"'),(0,n.kt)("span",{parentName:"div",style:{color:"#C3E88D"}},"this is my page"),(0,n.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},'"'),(0,n.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},";"))))))),(0,n.kt)(s.Z,{value:"tsx",label:"TypeScript",mdxType:"TabItem"},(0,n.kt)("div",{className:"shiki-twoslash-fragment"},(0,n.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,n.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,n.kt)("div",{parentName:"pre",className:"code-container"},(0,n.kt)("code",{parentName:"div"},(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"stringValue"),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#22863A"}},'"this is my page"'),(0,n.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";"))))),(0,n.kt)("pre",{parentName:"div",className:"shiki material-palenight",style:{backgroundColor:"#292D3E",color:"#A6ACCD"}},(0,n.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,n.kt)("div",{parentName:"pre",className:"code-container"},(0,n.kt)("code",{parentName:"div"},(0,n.kt)("div",{parentName:"code",className:"line"},(0,n.kt)("span",{parentName:"div",style:{color:"#C792EA"}},"const"),(0,n.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," stringValue "),(0,n.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"="),(0,n.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," "),(0,n.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},'"'),(0,n.kt)("span",{parentName:"div",style:{color:"#C3E88D"}},"this is my page"),(0,n.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},'"'),(0,n.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},";")))))))))}u.isMDXComponent=!0}}]);