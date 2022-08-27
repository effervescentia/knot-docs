"use strict";(self.webpackChunkknot_docs=self.webpackChunkknot_docs||[]).push([[1203],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>v});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),p=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(i.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),v=r,N=m["".concat(i,".").concat(v)]||m[v]||d[v]||l;return t?n.createElement(N,o(o({ref:a},c),{},{components:t})):n.createElement(N,o({ref:a},c))}));function v(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:(e,a,t)=>{t.d(a,{Z:()=>o});var n=t(7294),r=t(6010);const l="tabItem_Ymn6";function o(e){let{children:a,hidden:t,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:t},a)}},5488:(e,a,t)=>{t.d(a,{Z:()=>v});var n=t(7462),r=t(7294),l=t(6010),o=t(2389),s=t(7392),i=t(7094),p=t(2466);const c="tabList__CuJ",d="tabItem_LNqP";function m(e){var a,t;const{lazy:o,block:m,defaultValue:v,values:N,groupId:k,className:u}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),F=null!=N?N:y.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),D=(0,s.l)(F,((e,a)=>e.value===a.value));if(D.length>0)throw new Error('Docusaurus error: Duplicate values "'+D.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const f=null===v?v:null!=(a=null!=v?v:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?a:y[0].props.value;if(null!==f&&!F.some((e=>e.value===f)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+F.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:C,setTabGroupChoices:b}=(0,i.U)(),[g,h]=(0,r.useState)(f),E=[],{blockElementScrollPositionUntilNextRender:A}=(0,p.o5)();if(null!=k){const e=C[k];null!=e&&e!==g&&F.some((a=>a.value===e))&&h(e)}const x=e=>{const a=e.currentTarget,t=E.indexOf(a),n=F[t].value;n!==g&&(A(a),h(n),null!=k&&b(k,String(n)))},T=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{var n;const a=E.indexOf(e.currentTarget)+1;t=null!=(n=E[a])?n:E[0];break}case"ArrowLeft":{var r;const a=E.indexOf(e.currentTarget)-1;t=null!=(r=E[a])?r:E[E.length-1];break}}null==(a=t)||a.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},u)},F.map((e=>{let{value:a,label:t,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:g===a?0:-1,"aria-selected":g===a,key:a,ref:e=>E.push(e),onKeyDown:T,onFocus:x,onClick:x},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":g===a})}),null!=t?t:a)}))),o?(0,r.cloneElement)(y.filter((e=>e.props.value===g))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==g})))))}function v(e){const a=(0,o.Z)();return r.createElement(m,(0,n.Z)({key:String(a)},e))}},5506:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>v,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var n=t(7462),r=(t(7294),t(3905)),l=t(5488),o=t(5162);const s={sidebar_position:5},i="Enumerated Types",p={unversionedId:"syntax/declaration/enum",id:"syntax/declaration/enum",title:"Enumerated Types",description:"When modeling state machines it can be useful to describe variants of a single type that can contain different values.",source:"@site/docs/syntax/declaration/enum.mdx",sourceDirName:"syntax/declaration",slug:"/syntax/declaration/enum",permalink:"/knot-docs/docs/syntax/declaration/enum",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/syntax/declaration/enum.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Views",permalink:"/knot-docs/docs/syntax/declaration/view"},next:{title:"Modules",permalink:"/knot-docs/docs/syntax/module/"}},c={},d=[{value:"Definition",id:"definition",level:2},{value:"Constructor Arguments",id:"constructor-arguments",level:2}],m={toc:d};function v(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"enumerated-types"},"Enumerated Types"),(0,r.kt)("p",null,"When modeling state machines it can be useful to describe variants of a single type that can contain different values.\nThis concept is simple enough to describe optional types or complex enough to model multi-state systems."),(0,r.kt)("h2",{id:"definition"},"Definition"),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"enum")," keyword to define enumerated types with one or more variants."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"knot",label:"Knot",mdxType:"TabItem"},(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"knot"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"enum"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"CardSuit"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"=")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"|"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"Spade")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"|"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"Diamond")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"|"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"Club")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"|"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"Heart"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},";"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki material-palenight",style:{backgroundColor:"#292D3E",color:"#A6ACCD"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"knot"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#C792EA"}},"enum"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#FFCB6B"}},"CardSuit"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"=")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"|"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," Spade")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"|"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," Diamond")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"|"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," Club")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"|"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," Heart"),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},";"))))))),(0,r.kt)(o.Z,{value:"tsx",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"enum"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"CardSuit"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  Spade"),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},",")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  Diamond"),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},",")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  Club"),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},",")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  Heart"),(0,r.kt)("span",{parentName:"div",style:{color:"#212121"}},",")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"}"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki material-palenight",style:{backgroundColor:"#292D3E",color:"#A6ACCD"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#C792EA"}},"enum"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#FFCB6B"}},"CardSuit"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"{")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}},"  Spade"),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},",")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}},"  Diamond"),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},",")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}},"  Club"),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},",")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}},"  Heart"),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},",")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"}")))))))),(0,r.kt)("h2",{id:"constructor-arguments"},"Constructor Arguments"),(0,r.kt)("p",null,"Each enum variant can optionally specify some data that it must take as arguments during construction,\nand can be extracted when destructuring."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"knot",label:"Knot",mdxType:"TabItem"},(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"knot"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"enum"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#6F42C1"}},"Primitive"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"=")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"|"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"Nil")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"|"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"Boolean"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"boolean"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},")")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"|"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"Integer"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"integer"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},")")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"|"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"Float"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"float"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},")")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#D32F2F"}},"|"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"String"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#1976D2"}},"string"),(0,r.kt)("span",{parentName:"div",style:{color:"#24292EFF"}},");"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki material-palenight",style:{backgroundColor:"#292D3E",color:"#A6ACCD"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"knot"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#C792EA"}},"enum"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#FFCB6B"}},"Primitive"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"=")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"|"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," Nil")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"|"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," Boolean"),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#FFCB6B"}},"boolean"),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},")")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"|"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," Integer"),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#FFCB6B"}},"integer"),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},")")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"|"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," Float"),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#FFCB6B"}},"float"),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},")")),(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}},"  "),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"|"),(0,r.kt)("span",{parentName:"div",style:{color:"#A6ACCD"}}," String"),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},"("),(0,r.kt)("span",{parentName:"div",style:{color:"#FFCB6B"}},"string"),(0,r.kt)("span",{parentName:"div",style:{color:"#89DDFF"}},");"))))))),(0,r.kt)(o.Z,{value:"tsx",label:"TypeScript",mdxType:"TabItem"},(0,r.kt)("div",{className:"shiki-twoslash-fragment"},(0,r.kt)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#C2C3C5"}},"/* there is no built-int TypeScript equivalent to this */"))))),(0,r.kt)("pre",{parentName:"div",className:"shiki material-palenight",style:{backgroundColor:"#292D3E",color:"#A6ACCD"}},(0,r.kt)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,r.kt)("div",{parentName:"pre",className:"code-container"},(0,r.kt)("code",{parentName:"div"},(0,r.kt)("div",{parentName:"code",className:"line"},(0,r.kt)("span",{parentName:"div",style:{color:"#676E95"}},"/* there is no built-int TypeScript equivalent to this */")))))))))}v.isMDXComponent=!0}}]);