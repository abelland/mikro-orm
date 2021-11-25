"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[46091],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=u(n),c=i,y=m["".concat(s,".").concat(c)]||m[c]||p[c]||a;return n?r.createElement(y,o(o({ref:t},d),{},{components:n})):r.createElement(y,o({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33422:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=["components"],l={title:"Usage with MySQL, MariaDB, PostgreSQL or SQLite",sidebar_label:"Usage with SQL Drivers"},s=void 0,u={unversionedId:"usage-with-sql",id:"version-4.3/usage-with-sql",isDocsHomePage:!1,title:"Usage with MySQL, MariaDB, PostgreSQL or SQLite",description:"To use mikro-orm with MySQL database, simply install the @mikro-orm/mysql dependency and set",source:"@site/versioned_docs/version-4.3/usage-with-sql.md",sourceDirName:".",slug:"/usage-with-sql",permalink:"/docs/4.3/usage-with-sql",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/usage-with-sql.md",tags:[],version:"4.3",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1637861907,formattedLastUpdatedAt:"11/25/2021",frontMatter:{title:"Usage with MySQL, MariaDB, PostgreSQL or SQLite",sidebar_label:"Usage with SQL Drivers"},sidebar:"version-4.3/docs",previous:{title:"Configuration",permalink:"/docs/4.3/configuration"},next:{title:"Usage with MongoDB",permalink:"/docs/4.3/usage-with-mongo"}},d=[{value:"Custom driver",id:"custom-driver",children:[],level:2},{value:"Schema",id:"schema",children:[],level:2},{value:"ManyToMany collections with pivot tables",id:"manytomany-collections-with-pivot-tables",children:[],level:2},{value:"Using QueryBuilder to execute native SQL queries",id:"using-querybuilder-to-execute-native-sql-queries",children:[],level:2},{value:"Transactions",id:"transactions",children:[],level:2},{value:"LIKE Queries",id:"like-queries",children:[],level:2},{value:"Native Collection Methods",id:"native-collection-methods",children:[],level:2}],p={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To use ",(0,a.kt)("inlineCode",{parentName:"p"},"mikro-orm")," with MySQL database, simply install the ",(0,a.kt)("inlineCode",{parentName:"p"},"@mikro-orm/mysql")," dependency and set\nthe type option to ",(0,a.kt)("inlineCode",{parentName:"p"},"mysql")," when initializing ORM. Since v4 it is no longer needed to install the ",(0,a.kt)("inlineCode",{parentName:"p"},"mysql2")," package manually."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @mikro-orm/core @mikro-orm/mongodb     # for mongo\nyarn add @mikro-orm/core @mikro-orm/mysql       # for mysql/mariadb\nyarn add @mikro-orm/core @mikro-orm/mariadb     # for mysql/mariadb\nyarn add @mikro-orm/core @mikro-orm/postgresql  # for postgresql\nyarn add @mikro-orm/core @mikro-orm/sqlite      # for sqlite\n")),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm i -s @mikro-orm/core @mikro-orm/mongodb     # for mongo\nnpm i -s @mikro-orm/core @mikro-orm/mysql       # for mysql/mariadb\nnpm i -s @mikro-orm/core @mikro-orm/mariadb     # for mysql/mariadb\nnpm i -s @mikro-orm/core @mikro-orm/postgresql  # for postgresql\nnpm i -s @mikro-orm/core @mikro-orm/sqlite      # for sqlite\n")),(0,a.kt)("p",null,"Then call ",(0,a.kt)("inlineCode",{parentName:"p"},"MikroORM.init")," as part of bootstrapping your app:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const orm = await MikroORM.init({\n  entities: [Author, Book, ...],\n  dbName: 'my-db-name',\n  type: 'mysql', // or 'sqlite' or 'postgresql' or 'mariadb'\n});\n")),(0,a.kt)("h2",{id:"custom-driver"},"Custom driver"),(0,a.kt)("p",null,"If you want to use database that is not currently supported, you can implement your own driver.\nMore information about how to create one can be ",(0,a.kt)("a",{parentName:"p",href:"/docs/4.3/custom-driver"},"found here"),". Then provide the\ndriver class via ",(0,a.kt)("inlineCode",{parentName:"p"},"driver")," configuration option: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { MyCustomDriver } from './MyCustomDriver.ts';\n\nconst orm = await MikroORM.init({\n  entities: [Author, Book, ...],\n  dbName: 'my-db-name',\n  driver: MyCustomDriver, // provide the class, not just its name\n});\n")),(0,a.kt)("h2",{id:"schema"},"Schema"),(0,a.kt)("p",null,"Currently you will need to maintain the database schema yourself. For initial dump, you can\nuse ",(0,a.kt)("a",{parentName:"p",href:"/docs/4.3/schema-generator"},(0,a.kt)("inlineCode",{parentName:"a"},"SchemaGenerator")," helper"),".  "),(0,a.kt)("h2",{id:"manytomany-collections-with-pivot-tables"},"ManyToMany collections with pivot tables"),(0,a.kt)("p",null,"As opposed to ",(0,a.kt)("inlineCode",{parentName:"p"},"MongoDriver"),", in MySQL we use pivot tables to handle ",(0,a.kt)("inlineCode",{parentName:"p"},"ManyToMany")," relations:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `publisher_to_test` (\n  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,\n  `publisher_id` int(11) DEFAULT NULL,\n  `test_id` int(11) DEFAULT NULL,\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n")),(0,a.kt)("p",null,"You can adjust the name of pivot table via ",(0,a.kt)("inlineCode",{parentName:"p"},"pivotTable")," option in ",(0,a.kt)("inlineCode",{parentName:"p"},"@ManyToMany")," decorator\ndefined on owning side: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// for unidirectional\n@ManyToMany({ entity: () => Test, owner: true, pivotTable: 'publisher2test' })\ntests = new Collection<Test>(this);\n\n// for bidirectional\n@ManyToMany({ entity: () => BookTag, inversedBy: 'books', pivotTable: 'book2tag' })\ntags = new Collection<BookTag>(this);\n")),(0,a.kt)("h2",{id:"using-querybuilder-to-execute-native-sql-queries"},"Using QueryBuilder to execute native SQL queries"),(0,a.kt)("p",null,"When you need to execute some SQL query without all the ORM stuff involved, you can either\ncompose the query yourself, or use the ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryBuilder")," helper to construct the query for you:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const qb = orm.em.createQueryBuilder(Author);\nqb.update({ name: 'test 123', type: PublisherType.GLOBAL }).where({ id: 123, type: PublisherType.LOCAL });\n\nconsole.log(qb.getQuery());\n// 'UPDATE `publisher2` SET `name` = ?, `type` = ? WHERE `id` = ? AND `type` = ?'\n\nconsole.log(qb.getParams());\n// ['test 123', PublisherType.GLOBAL, 123, PublisherType.LOCAL]\n\n// run the query\nconst res1 = await qb.execute();\n\n// or run query without using QueryBuilder\nconst driver = orm.em.getDriver();\nconst res2 = await driver.execute('SELECT ? + ?', [1, 2]);\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"QueryBuilder")," provides fluent interface with these methods:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"QueryBuilder.select(fields: string | string[], distinct?: boolean): QueryBuilder;\nQueryBuilder.insert(data: any): QueryBuilder;\nQueryBuilder.update(data: any): QueryBuilder;\nQueryBuilder.delete(cond: any): QueryBuilder;\nQueryBuilder.count(fields: string | string[], distinct?: boolean): QueryBuilder;\nQueryBuilder.join(field: string, alias?: string): QueryBuilder;\nQueryBuilder.leftJoin(field: string, alias?: string): QueryBuilder;\nQueryBuilder.where(cond: any, operator: '$and' | '$or'): QueryBuilder;\nQueryBuilder.andWhere(cond: any): QueryBuilder;\nQueryBuilder.orWhere(cond: any): QueryBuilder;\nQueryBuilder.groupBy(fields: string | string[]): QueryBuilder;\nQueryBuilder.having(cond: any): QueryBuilder;\nQueryBuilder.populate(populate: string[]): QueryBuilder;\nQueryBuilder.limit(limit: number, offset?: number): QueryBuilder;\nQueryBuilder.offset(offset: number): QueryBuilder;\nQueryBuilder.getQuery(): string;\nQueryBuilder.getParams(): any;\nQueryBuilder.clone(): QueryBuilder;\n")),(0,a.kt)("p",null,"For more examples of how to work with ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryBuilder"),", take a look at ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryBuilder")," tests in\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/master/tests/QueryBuilder.test.ts"},(0,a.kt)("inlineCode",{parentName:"a"},"tests/QueryBuilder.test.ts")),"."),(0,a.kt)("h2",{id:"transactions"},"Transactions"),(0,a.kt)("p",null,"When you call ",(0,a.kt)("inlineCode",{parentName:"p"},"em.flush()"),", all computed changes are queried ",(0,a.kt)("a",{parentName:"p",href:"/docs/4.3/unit-of-work"},"inside a database\ntransaction")," by default, so you do not have to handle transactions manually. "),(0,a.kt)("p",null,"When you need to explicitly handle the transaction, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"em.transactional(cb)"),"\nto run callback in transaction. It will provide forked ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityManager")," as a parameter\nwith clear isolated identity map - please use that to make changes. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// if an error occurs inside the callback, all db queries from inside the callback will be rolled back\nawait orm.em.transactional(async (em: EntityManager) => {\n  const god = new Author('God', 'hello@heaven.god');\n  await em.persistAndFlush(god);\n});\n")),(0,a.kt)("h2",{id:"like-queries"},"LIKE Queries"),(0,a.kt)("p",null,"SQL supports LIKE queries via native JS regular expressions:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const author1 = new Author2('Author 1', 'a1@example.com');\nconst author2 = new Author2('Author 2', 'a2@example.com');\nconst author3 = new Author2('Author 3', 'a3@example.com');\nawait orm.em.persistAndFlush([author1, author2, author3]);\n\n// finds authors with email like '%exa%le.c_m'\nconst authors = await orm.em.find(Author2, { email: /exa.*le\\.c.m$/ }); \nconsole.log(authors); // all 3 authors found\n")),(0,a.kt)("h2",{id:"native-collection-methods"},"Native Collection Methods"),(0,a.kt)("p",null,"Sometimes you need to perform some bulk operation, or you just want to populate your\ndatabase with initial fixtures. Using ORM for such operations can bring unnecessary\nboilerplate code. In this case, you can use one of ",(0,a.kt)("inlineCode",{parentName:"p"},"nativeInsert/nativeUpdate/nativeDelete"),"\nmethods:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"em.nativeInsert<T extends AnyEntity>(entityName: string, data: any): Promise<IPrimaryKey>;\nem.nativeUpdate<T extends AnyEntity>(entityName: string, where: FilterQuery<T>, data: any): Promise<number>;\nem.nativeDelete<T extends AnyEntity>(entityName: string, where: FilterQuery<T> | any): Promise<number>;\n")),(0,a.kt)("p",null,"Those methods execute native SQL queries generated via ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryBuilder")," based on entity\nmetadata. Keep in mind that they do not hydrate results to entities, and they do not\ntrigger lifecycle hooks. "),(0,a.kt)("p",null,"They are also available as ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityRepository")," shortcuts:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"EntityRepository.nativeInsert(data: any): Promise<IPrimaryKey>;\nEntityRepository.nativeUpdate(where: FilterQuery<T>, data: any): Promise<number>;\nEntityRepository.nativeDelete(where: FilterQuery<T> | any): Promise<number>;\n")),(0,a.kt)("p",null,"Additionally there is ",(0,a.kt)("inlineCode",{parentName:"p"},"execute()")," method that supports executing raw SQL queries or ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryBuilder"),"\ninstances. To create ",(0,a.kt)("inlineCode",{parentName:"p"},"QueryBuilder"),", you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"createQueryBuilder()")," factory method on both\n",(0,a.kt)("inlineCode",{parentName:"p"},"EntityManager")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"EntityRepository")," classes: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const qb = em.createQueryBuilder('Author');\nqb.select('*').where({ id: { $in: [...] } });\nconst res = await em.getDriver().execute(qb);\nconsole.log(res); // unprocessed result of underlying database driver\n")))}m.isMDXComponent=!0}}]);