"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[16489],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97977:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=["components"],s={title:"Unit of Work and transactions",sidebar_label:"Unit of Work"},l=void 0,c={unversionedId:"unit-of-work",id:"version-2.7/unit-of-work",isDocsHomePage:!1,title:"Unit of Work and transactions",description:"MikroORM uses the Identity Map pattern to track objects. Whenever you fetch an object from",source:"@site/versioned_docs/version-2.7/unit-of-work.md",sourceDirName:".",slug:"/unit-of-work",permalink:"/docs/2.7/unit-of-work",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-2.7/unit-of-work.md",tags:[],version:"2.7",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1636444404,formattedLastUpdatedAt:"11/9/2021",frontMatter:{title:"Unit of Work and transactions",sidebar_label:"Unit of Work"},sidebar:"version-2.7/docs",previous:{title:"Collections",permalink:"/docs/2.7/collections"},next:{title:"Transactions and concurrency",permalink:"/docs/2.7/transactions"}},p=[{value:"Persisting managed entities",id:"persisting-managed-entities",children:[],level:2},{value:"How MikroORM detects changes",id:"how-mikroorm-detects-changes",children:[],level:2},{value:"Implicit Transactions",id:"implicit-transactions",children:[{value:"Beware: Auto-flushing and transactions",id:"beware-auto-flushing-and-transactions",children:[],level:3}],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"MikroORM uses the Identity Map pattern to track objects. Whenever you fetch an object from\nthe database, MikroORM will keep a reference to this object inside its ",(0,o.kt)("inlineCode",{parentName:"p"},"UnitOfWork"),". "),(0,o.kt)("p",null,"This allows MikroORM room for optimizations. If you call the EntityManager and ask for an\nentity with a specific ID twice, it will return the same instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const authorRepository = orm.em.getRepository(Author);\nconst jon1 = await authorRepository.findOne(1);\nconst jon2 = await authorRepository.findOne(1);\n\n// identity map in action\nconsole.log(jon1 === jon2); // true\n")),(0,o.kt)("p",null,"Only one SELECT query will be fired against the database here. In the second ",(0,o.kt)("inlineCode",{parentName:"p"},"findOne()"),"\ncall MikroORM will check the identity map first and will skip the database round trip as\nit will find the entity already loaded."),(0,o.kt)("p",null,"The identity map being indexed by primary keys only allows shortcuts when you ask for objects\nby primary key. When you query by other properties, you will still get the same reference,\nbut two separate database calls will be made:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const authorRepository = orm.em.getRepository(Author);\nconst jon1 = await authorRepository.findOne({ name: 'Jon Snow' });\nconst jon2 = await authorRepository.findOne({ name: 'Jon Snow' });\n\n// identity map in action\nconsole.log(jon1 === jon2); // true\n")),(0,o.kt)("p",null,"MikroORM only knows objects by id, so a query for different criteria has to go to the database,\neven if it was executed just before. But instead of creating a second ",(0,o.kt)("inlineCode",{parentName:"p"},"Author")," object MikroORM\nfirst gets the primary key from the row and checks if it already has an object inside the\n",(0,o.kt)("inlineCode",{parentName:"p"},"UnitOfWork")," with that primary key. "),(0,o.kt)("h2",{id:"persisting-managed-entities"},"Persisting managed entities"),(0,o.kt)("p",null,"The identity map has a second use-case. When you call ",(0,o.kt)("inlineCode",{parentName:"p"},"EntityManager#flush()"),", MikroORM will\nask the identity map for all objects that are currently managed. This means you don't have to\ncall ",(0,o.kt)("inlineCode",{parentName:"p"},"EntityManager#persistLater()")," over and over again to pass known objects to the\n",(0,o.kt)("inlineCode",{parentName:"p"},"EntityManager"),". This is a NO-OP for known entities, but leads to much code written that is\nconfusing to other developers."),(0,o.kt)("p",null,"The following code WILL update your database with the changes made to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Author")," object,\neven if you did not call ",(0,o.kt)("inlineCode",{parentName:"p"},"EntityManager#persistLater()"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const authorRepository = orm.em.getRepository(Author);\nconst jon = await authorRepository.findOne(1);\njon.email = 'foo@bar.com';\nawait authorRepository.flush(); // calling orm.em.flush() has same effect\n")),(0,o.kt)("h2",{id:"how-mikroorm-detects-changes"},"How MikroORM detects changes"),(0,o.kt)("p",null,'MikroORM is a data-mapper that tries to achieve persistence-ignorance (PI). This means you\nmap JS objects into a relational database that do not necessarily know about the database at\nall. A natural question would now be, "how does MikroORM even detect objects have changed?".'),(0,o.kt)("p",null,"For this MikroORM keeps a second map inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"UnitOfWork"),". Whenever you fetch an object\nfrom the database MikroORM will keep a copy of all the properties and associations inside\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"UnitOfWork"),". "),(0,o.kt)("p",null,"Now whenever you call ",(0,o.kt)("inlineCode",{parentName:"p"},"EntityManager#flush()")," MikroORM will iterate over all entities you\npreviously marked for persisting via ",(0,o.kt)("inlineCode",{parentName:"p"},"EntityManager#persistLater()"),". For each object it will\ncompare the original property and association values with the values that are currently set\non the object. If changes are detected then the object is queued for a UPDATE operation.\nOnly the fields that actually changed are updated."),(0,o.kt)("h2",{id:"implicit-transactions"},"Implicit Transactions"),(0,o.kt)("p",null,"First and most important implication of having Unit of Work is that it allows handling\ntransactions automatically. "),(0,o.kt)("p",null,"When you call ",(0,o.kt)("inlineCode",{parentName:"p"},"EntityManager#flush()"),", all computed changes are queried inside a database\ntransaction (if supported by given driver). This means that you can control the boundaries\nof transactions simply by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"EntityManager#persistLater()")," and once all your changes\nare ready, simply calling ",(0,o.kt)("inlineCode",{parentName:"p"},"flush()")," will run them inside a transaction. "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can also control the transaction boundaries manually via ",(0,o.kt)("inlineCode",{parentName:"p"},"em.transactional(cb)"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const user = await em.findOne(User, 1);\nuser.email = 'foo@bar.com';\nconst car = new Car();\nuser.cars.add(car);\n\n// thanks to bi-directional cascading we only need to persist user entity\n// flushing will create a transaction, insert new car and update user with new email\nawait em.persistAndFlush(user);\n")),(0,o.kt)("p",null,"You can find more information about transactions in ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.7/transactions"},"Transactions and concurrency"),"\npage."),(0,o.kt)("h3",{id:"beware-auto-flushing-and-transactions"},"Beware: Auto-flushing and transactions"),(0,o.kt)("p",null,"Originally there was only ",(0,o.kt)("inlineCode",{parentName:"p"},"EntityManager#persist(entity, flush = true)")," method, that was\nautomatically flushing changes to database, if not given second ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," parameter. This\nbehaviour can be now changed via ",(0,o.kt)("inlineCode",{parentName:"p"},"autoFlush")," option when initializing the ORM:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const orm = await MikroORM.init({\n  autoFlush: false,\n  // ...\n});\nawait orm.em.persist(new Entity()); // no auto-flushing now\nawait orm.em.flush();\nawait orm.em.persist(new Entity(), true); // you can still use second parameter to auto-flush\n")),(0,o.kt)("p",null,"When using driver that supports transactions (all SQL drivers), you should either disable\nauto-flushing, or use ",(0,o.kt)("inlineCode",{parentName:"p"},"persistLater()")," method instead, as otherwise each ",(0,o.kt)("inlineCode",{parentName:"p"},"persist()")," call\nwill immediately create new transaction to run the query."),(0,o.kt)("p",null,"This behaviour will be changed in v3, ",(0,o.kt)("inlineCode",{parentName:"p"},"autoFlush")," will stay configurable but the default\nvalue will be ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),". Users are encouraged to use ",(0,o.kt)("inlineCode",{parentName:"p"},"persistAndFlush()")," instead if they need\nthe immediate persist. "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This part of documentation is highly inspired by ",(0,o.kt)("a",{parentName:"p",href:"https://www.doctrine-project.org/projects/doctrine-orm/en/2.6/reference/unitofwork.html"},"doctrine internals docs"),"\nas the behaviour here is pretty much the same.")))}d.isMDXComponent=!0}}]);