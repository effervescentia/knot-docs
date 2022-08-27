"use strict";(self.webpackChunkknot_docs=self.webpackChunkknot_docs||[]).push([[3143],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>N});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=i(a),N=r,v=m["".concat(p,".").concat(N)]||m[N]||d[N]||l;return a?n.createElement(v,o(o({ref:t},c),{},{components:a})):n.createElement(v,o({ref:t},c))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var i=2;i<l;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(7462),r=a(7294),l=a(6010),o=a(2389),s=a(7392),p=a(7094),i=a(2466);const c="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,a;const{lazy:o,block:m,defaultValue:N,values:v,groupId:k,className:y}=e,F=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),u=null!=v?v:F.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),D=(0,s.l)(u,((e,t)=>e.value===t.value));if(D.length>0)throw new Error('Docusaurus error: Duplicate values "'+D.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const f=null===N?N:null!=(t=null!=N?N:null==(a=F.find((e=>e.props.default)))?void 0:a.props.value)?t:F[0].props.value;if(null!==f&&!u.some((e=>e.value===f)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+u.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:C,setTabGroupChoices:b}=(0,p.U)(),[E,A]=(0,r.useState)(f),g=[],{blockElementScrollPositionUntilNextRender:h}=(0,i.o5)();if(null!=k){const e=C[k];null!=e&&e!==E&&u.some((t=>t.value===e))&&A(e)}const x=e=>{const t=e.currentTarget,a=g.indexOf(t),n=u[a].value;n!==E&&(h(t),A(n),null!=k&&b(k,String(n)))},w=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=g.indexOf(e.currentTarget)+1;a=null!=(n=g[t])?n:g[0];break}case"ArrowLeft":{var r;const t=g.indexOf(e.currentTarget)-1;a=null!=(r=g[t])?r:g[g.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},y)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>g.push(e),onKeyDown:w,onFocus:x,onClick:x},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":E===t})}),null!=a?a:t)}))),o?(0,r.cloneElement)(F.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},F.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function N(e){const t=(0,o.Z)();return r.createElement(m,(0,n.Z)({key:String(t)},e))}},9913:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>N,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var n=a(7462),r=(a(7294),a(3905)),l=a(5488),o=a(5162);const s={sidebar_position:1},p="Let Bindings",i={unversionedId:"syntax/statement/let-binding",id:"syntax/statement/let-binding",title:"Let Bindings",description:"You can use the let keyword to bind a value to some name so it can be referenced withing a closure.",source:"@site/docs/syntax/statement/let-binding.mdx",sourceDirName:"syntax/statement",slug:"/syntax/statement/let-binding",permalink:"/docs/syntax/statement/let-binding",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/syntax/statement/let-binding.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Statements",permalink:"/docs/syntax/statement/"},next:{title:"Declarations",permalink:"/docs/syntax/declaration/"}},c={},d=[{value:"Scope-Local",id:"scope-local",level:2}],m={toc:d};function N(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"let-bindings"},"Let Bindings"),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"let")," keyword to bind a value to some name so it can be referenced withing a closure."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Variables in Knot are immutable except for within the scope of state entities (coming soon!).")),(0,r.kt)("h2",{id:"scope-local"},"Scope-Local"),(0,r.kt)("p",null,"Since these bindings are local to a closure they can be re-used in different scopes without conflict."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"knot",label:"Knot",mdxType:"TabItem"},(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"knot"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"foo"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"let"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," x "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"10"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"}),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"x"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"+"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"x"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"};")),(0,r.kt)("div",{parentName:"code",className:"line"}),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"bar"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"let"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," x "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"10"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"}),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"x"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"/"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"x"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"};"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki material-palenight",style:{backgroundColor:"#292D3E",color:"#A6ACCD"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"knot"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#C792EA"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," foo "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"{")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#C792EA"}},"let"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," x "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#F78C6C"}},"10"),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"}),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}},"  x "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"+"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," x"),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"};")),(0,r.kt)("div",{parentName:"code",className:"line"}),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#C792EA"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," bar "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"{")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#C792EA"}},"let"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," x "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#F78C6C"}},"10"),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"}),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}},"  x "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"/"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," x"),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"};"))))))),(0,r.kt)(o.Z,{value:"tsx",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"foo"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ("),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"function"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," () {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"let"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," x "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"10"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"}),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"return"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," x "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"+"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," x;")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"})();")),(0,r.kt)("div",{parentName:"code",className:"line"}),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"bar"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," ("),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"function"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," () {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"let"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," x "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"10"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"}),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"return"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," x "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"/"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," x;")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"})();"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki material-palenight",style:{backgroundColor:"#292D3E",color:"#A6ACCD"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#C792EA"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," foo "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," ("),(0,r.kt)("span",{parentName:"div",style:{color:"#C792EA"}},"function"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"()"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"{")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#F07178"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#C792EA"}},"let"),(0,r.kt)("span",{parentName:"div",style:{color:"#F07178"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}},"x"),(0,r.kt)("span",{parentName:"div",style:{color:"#F07178"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#F07178"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#F78C6C"}},"10"),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"}),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#F07178"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"return"),(0,r.kt)("span",{parentName:"div",style:{color:"#F07178"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}},"x"),(0,r.kt)("span",{parentName:"div",style:{color:"#F07178"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"+"),(0,r.kt)("span",{parentName:"div",style:{color:"#F07178"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}},"x"),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"}"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}},")()"),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"}),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#C792EA"}},"const"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," bar "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," ("),(0,r.kt)("span",{parentName:"div",style:{color:"#C792EA"}},"function"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"()"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"{")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#F07178"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#C792EA"}},"let"),(0,r.kt)("span",{parentName:"div",style:{color:"#F07178"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}},"x"),(0,r.kt)("span",{parentName:"div",style:{color:"#F07178"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"="),(0,r.kt)("span",{parentName:"div",style:{color:"#F07178"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#F78C6C"}},"10"),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"}),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#F07178"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"return"),(0,r.kt)("span",{parentName:"div",style:{color:"#F07178"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}},"x"),(0,r.kt)("span",{parentName:"div",style:{color:"#F07178"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"/"),(0,r.kt)("span",{parentName:"div",style:{color:"#F07178"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}},"x"),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},";")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"}"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}},")()"),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},";")))))))))}N.isMDXComponent=!0}}]);