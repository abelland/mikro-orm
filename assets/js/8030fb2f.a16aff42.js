"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[62086],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58908:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=["components"],c={id:"core.FactoryOptions",title:"Interface: FactoryOptions",sidebar_label:"FactoryOptions",custom_edit_url:null},l=void 0,p={unversionedId:"api/interfaces/core.FactoryOptions",id:"api/interfaces/core.FactoryOptions",title:"Interface: FactoryOptions",description:"core.FactoryOptions",source:"@site/docs/api/interfaces/core.FactoryOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/core.FactoryOptions",permalink:"/docs/next/api/interfaces/core.FactoryOptions",editUrl:null,tags:[],version:"current",frontMatter:{id:"core.FactoryOptions",title:"Interface: FactoryOptions",sidebar_label:"FactoryOptions",custom_edit_url:null},sidebar:"API",previous:{title:"EventSubscriber",permalink:"/docs/next/api/interfaces/core.EventSubscriber"},next:{title:"FindOneOptions",permalink:"/docs/next/api/interfaces/core.FindOneOptions"}},s=[{value:"Properties",id:"properties",children:[{value:"convertCustomTypes",id:"convertcustomtypes",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"initialized",id:"initialized",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"merge",id:"merge",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"newEntity",id:"newentity",children:[{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3},{value:"refresh",id:"refresh",children:[{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3},{value:"schema",id:"schema",children:[{value:"Defined in",id:"defined-in-5",children:[],level:4}],level:3}],level:2}],d={toc:s};function u(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../modules/core"},"core"),".FactoryOptions"),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"convertcustomtypes"},"convertCustomTypes"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"convertCustomTypes"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/709538f/packages/core/src/entity/EntityFactory.ts#L13"},"packages/core/src/entity/EntityFactory.ts:13")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"initialized"},"initialized"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"initialized"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/709538f/packages/core/src/entity/EntityFactory.ts#L9"},"packages/core/src/entity/EntityFactory.ts:9")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"merge"},"merge"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"merge"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")),(0,o.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/709538f/packages/core/src/entity/EntityFactory.ts#L11"},"packages/core/src/entity/EntityFactory.ts:11")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"newentity"},"newEntity"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"newEntity"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")),(0,o.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/709538f/packages/core/src/entity/EntityFactory.ts#L10"},"packages/core/src/entity/EntityFactory.ts:10")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"refresh"},"refresh"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"refresh"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")),(0,o.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/709538f/packages/core/src/entity/EntityFactory.ts#L12"},"packages/core/src/entity/EntityFactory.ts:12")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"schema"},"schema"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,o.kt)("strong",{parentName:"p"},"schema"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"string")),(0,o.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/709538f/packages/core/src/entity/EntityFactory.ts#L14"},"packages/core/src/entity/EntityFactory.ts:14")))}u.isMDXComponent=!0}}]);