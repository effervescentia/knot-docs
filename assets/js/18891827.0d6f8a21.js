"use strict";(self.webpackChunkknot_docs=self.webpackChunkknot_docs||[]).push([[9081],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4826:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1},o="Overview",s={unversionedId:"overview",id:"overview",title:"Overview",description:"The Knot Language is made up of a number of different layers.",source:"@site/docs/overview.mdx",sourceDirName:".",slug:"/overview",permalink:"/knot-docs/docs/overview",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Syntax",permalink:"/knot-docs/docs/syntax/"}},l={},c=[{value:"Modules",id:"modules",level:2},{value:"Declarations",id:"declarations",level:2},{value:"Statements",id:"statements",level:2},{value:"Expressions",id:"expressions",level:2},{value:"Primitives",id:"primitives",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The Knot Language is made up of a number of different layers."),(0,a.kt)("h2",{id:"modules"},(0,a.kt)("a",{parentName:"h2",href:"syntax/module"},"Modules")),(0,a.kt)("p",null,"Modules are the largest constructs in Knot, they can contain multiple ",(0,a.kt)("a",{parentName:"p",href:"syntax/declaration"},"declarations")," such as\n",(0,a.kt)("a",{parentName:"p",href:"syntax/declaration/function"},"functions")," and ",(0,a.kt)("a",{parentName:"p",href:"syntax/declaration/view"},"views"),". Modules can ",(0,a.kt)("a",{parentName:"p",href:"syntax/module/import-export"},"import and export")," entities\nso that code stored in a different modules can be accessed and reused.\nModules are referred to using a name that is based on their path from the source directory of your project."),(0,a.kt)("h2",{id:"declarations"},(0,a.kt)("a",{parentName:"h2",href:"syntax/declaration"},"Declarations")),(0,a.kt)("p",null,"Entities can only be declared within a module (functions can technically be created anonymously within a closure by using lambda expressions).\nEach type of entity is used to define an independent, re-usable piece of an application."),(0,a.kt)("h2",{id:"statements"},(0,a.kt)("a",{parentName:"h2",href:"syntax/statement"},"Statements")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"let")," bindings are only available to define variables within a closure, such as a function body."),(0,a.kt)("h2",{id:"expressions"},(0,a.kt)("a",{parentName:"h2",href:"syntax/expression"},"Expressions")),(0,a.kt)("p",null,"As a functional language, Knot was designed to make as much of the language usable as an expression so it can be easily composed.\nThese include simple primitives like ",(0,a.kt)("a",{parentName:"p",href:"syntax/primitive/boolean"},"booleans")," and ",(0,a.kt)("a",{parentName:"p",href:"syntax/primitive/number#integer"},"integers")," as well as\nbinary operations, unary operations, closures and more!"),(0,a.kt)("h2",{id:"primitives"},(0,a.kt)("a",{parentName:"h2",href:"syntax/primitive"},"Primitives")),(0,a.kt)("p",null,"The most basic types you can use to describe data in your application. These include ",(0,a.kt)("inlineCode",{parentName:"p"},"nil"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"integer"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"float"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"element"),"."))}u.isMDXComponent=!0}}]);