"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[32179],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return k}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(a),k=r,u=d["".concat(s,".").concat(k)]||d[k]||m[k]||o;return a?n.createElement(u,i(i({ref:t},l),{},{components:a})):n.createElement(u,i({ref:t},l))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},79682:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var n=a(83117),r=a(80102),o=(a(67294),a(3905)),i=["components"],c={id:"core.transactioncontext",title:"Class: TransactionContext",sidebar_label:"TransactionContext",custom_edit_url:null,hide_title:!0},s="Class: TransactionContext",p={unversionedId:"api/classes/core.transactioncontext",id:"version-4.5/api/classes/core.transactioncontext",title:"Class: TransactionContext",description:"core.TransactionContext",source:"@site/versioned_docs/version-4.5/api/classes/core.transactioncontext.md",sourceDirName:"api/classes",slug:"/api/classes/core.transactioncontext",permalink:"/docs/api/classes/core.transactioncontext",editUrl:null,tags:[],version:"4.5",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1639261456,formattedLastUpdatedAt:"12/11/2021",frontMatter:{id:"core.transactioncontext",title:"Class: TransactionContext",sidebar_label:"TransactionContext",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"TimeType",permalink:"/docs/api/classes/core.timetype"},next:{title:"TransactionEventBroadcaster",permalink:"/docs/api/classes/core.transactioneventbroadcaster"}},l=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[{value:"Parameters:",id:"parameters",children:[],level:4}],level:3}],level:2},{value:"Properties",id:"properties",children:[{value:"em",id:"em",children:[],level:3},{value:"id",id:"id",children:[],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"createAsync",id:"createasync",children:[{value:"Type parameters:",id:"type-parameters",children:[],level:4},{value:"Parameters:",id:"parameters-1",children:[],level:4}],level:3},{value:"currentTransactionContext",id:"currenttransactioncontext",children:[],level:3},{value:"getEntityManager",id:"getentitymanager",children:[],level:3}],level:2}],m={toc:l};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"class-transactioncontext"},"Class: TransactionContext"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".TransactionContext"),(0,o.kt)("h2",{id:"constructors"},"Constructors"),(0,o.kt)("h3",{id:"constructor"},"constructor"),(0,o.kt)("p",null,"+"," ",(0,o.kt)("strong",{parentName:"p"},"new TransactionContext"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"em"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymanager"},(0,o.kt)("em",{parentName:"a"},"EntityManager")),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},(0,o.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},(0,o.kt)("em",{parentName:"a"},"Connection")),">",">","): ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.transactioncontext"},(0,o.kt)("em",{parentName:"a"},"TransactionContext"))),(0,o.kt)("h4",{id:"parameters"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"em")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/api/classes/core.entitymanager"},(0,o.kt)("em",{parentName:"a"},"EntityManager")),"<",(0,o.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},(0,o.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,o.kt)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},(0,o.kt)("em",{parentName:"a"},"Connection")),">",">")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.transactioncontext"},(0,o.kt)("em",{parentName:"a"},"TransactionContext"))),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/TransactionContext.ts#L9"},"packages/core/src/utils/TransactionContext.ts:9")),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"em"},"em"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"em"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymanager"},(0,o.kt)("em",{parentName:"a"},"EntityManager")),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},(0,o.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},(0,o.kt)("em",{parentName:"a"},"Connection")),">",">"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"id"},"id"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,o.kt)("strong",{parentName:"p"},"id"),": ",(0,o.kt)("em",{parentName:"p"},"number")),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/TransactionContext.ts#L9"},"packages/core/src/utils/TransactionContext.ts:9")),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("h3",{id:"createasync"},"createAsync"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Static"),(0,o.kt)("strong",{parentName:"p"},"createAsync"),"<T",">","(",(0,o.kt)("inlineCode",{parentName:"p"},"em"),": ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymanager"},(0,o.kt)("em",{parentName:"a"},"EntityManager")),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},(0,o.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},(0,o.kt)("em",{parentName:"a"},"Connection")),">",">",", ",(0,o.kt)("inlineCode",{parentName:"p"},"next"),": (...",(0,o.kt)("inlineCode",{parentName:"p"},"args"),": ",(0,o.kt)("em",{parentName:"p"},"any"),"[]) => ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<T",">","): ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<T",">"),(0,o.kt)("p",null,"Creates new TransactionContext instance and runs the code inside its domain."),(0,o.kt)("h4",{id:"type-parameters"},"Type parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"T"))))),(0,o.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"em")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"/docs/api/classes/core.entitymanager"},(0,o.kt)("em",{parentName:"a"},"EntityManager")),"<",(0,o.kt)("a",{parentName:"td",href:"/docs/api/interfaces/core.idatabasedriver"},(0,o.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,o.kt)("a",{parentName:"td",href:"/docs/api/classes/core.connection"},(0,o.kt)("em",{parentName:"a"},"Connection")),">",">")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"next")),(0,o.kt)("td",{parentName:"tr",align:"left"},"(...",(0,o.kt)("inlineCode",{parentName:"td"},"args"),": ",(0,o.kt)("em",{parentName:"td"},"any"),"[]) => ",(0,o.kt)("em",{parentName:"td"},"Promise"),"<T",">")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"Promise"),"<T",">"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/TransactionContext.ts#L16"},"packages/core/src/utils/TransactionContext.ts:16")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"currenttransactioncontext"},"currentTransactionContext"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Static"),(0,o.kt)("strong",{parentName:"p"},"currentTransactionContext"),"(): ",(0,o.kt)("em",{parentName:"p"},"undefined")," ","|"," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.transactioncontext"},(0,o.kt)("em",{parentName:"a"},"TransactionContext"))),(0,o.kt)("p",null,"Returns current TransactionContext (if available)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"undefined")," ","|"," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.transactioncontext"},(0,o.kt)("em",{parentName:"a"},"TransactionContext"))),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/TransactionContext.ts#L31"},"packages/core/src/utils/TransactionContext.ts:31")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"getentitymanager"},"getEntityManager"),(0,o.kt)("p",null,"\u25b8 ",(0,o.kt)("inlineCode",{parentName:"p"},"Static"),(0,o.kt)("strong",{parentName:"p"},"getEntityManager"),"(): ",(0,o.kt)("em",{parentName:"p"},"undefined")," ","|"," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymanager"},(0,o.kt)("em",{parentName:"a"},"EntityManager")),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},(0,o.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},(0,o.kt)("em",{parentName:"a"},"Connection")),">",">"),(0,o.kt)("p",null,"Returns current EntityManager (if available)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")," ",(0,o.kt)("em",{parentName:"p"},"undefined")," ","|"," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.entitymanager"},(0,o.kt)("em",{parentName:"a"},"EntityManager")),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core.idatabasedriver"},(0,o.kt)("em",{parentName:"a"},"IDatabaseDriver")),"<",(0,o.kt)("a",{parentName:"p",href:"/docs/api/classes/core.connection"},(0,o.kt)("em",{parentName:"a"},"Connection")),">",">"),(0,o.kt)("p",null,"Defined in: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/bcf1a0899b/packages/core/src/utils/TransactionContext.ts#L39"},"packages/core/src/utils/TransactionContext.ts:39")))}d.isMDXComponent=!0}}]);