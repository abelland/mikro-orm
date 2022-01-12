"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[37251],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,y=m["".concat(s,".").concat(c)]||m[c]||d[c]||i;return n?a.createElement(y,o(o({ref:t},u),{},{components:n})):a.createElement(y,o({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16239:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],l={title:"Defining Entities"},s=void 0,p={unversionedId:"defining-entities",id:"version-4.3/defining-entities",title:"Defining Entities",description:"There are two ways how you can define your entities:",source:"@site/versioned_docs/version-4.3/defining-entities.md",sourceDirName:".",slug:"/defining-entities",permalink:"/docs/4.3/defining-entities",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/defining-entities.md",tags:[],version:"4.3",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1642025558,formattedLastUpdatedAt:"1/12/2022",frontMatter:{title:"Defining Entities"},sidebar:"version-4.3/docs",previous:{title:"Installation & Usage",permalink:"/docs/4.3/installation"},next:{title:"Modeling Entity Relationships",permalink:"/docs/4.3/relationships"}},u=[{value:"EntitySchema helper",id:"entityschema-helper",children:[],level:2},{value:"Classes and Decorators",id:"classes-and-decorators",children:[{value:"Optional Properties",id:"optional-properties",children:[],level:3},{value:"Default values",id:"default-values",children:[],level:3},{value:"Enums",id:"enums",children:[],level:3},{value:"Enum arrays",id:"enum-arrays",children:[],level:3},{value:"Mapping directly to primary keys",id:"mapping-directly-to-primary-keys",children:[],level:3},{value:"Formulas",id:"formulas",children:[],level:3},{value:"Indexes",id:"indexes",children:[],level:3},{value:"Custom Types",id:"custom-types",children:[],level:3},{value:"Lazy scalar properties",id:"lazy-scalar-properties",children:[],level:3},{value:"Virtual Properties",id:"virtual-properties",children:[],level:3},{value:"Entity file names",id:"entity-file-names",children:[],level:3},{value:"Using BaseEntity",id:"using-baseentity",children:[],level:3},{value:"Examples of entity definition with various primary keys",id:"examples-of-entity-definition-with-various-primary-keys",children:[{value:"Using id as primary key (SQL drivers)",id:"using-id-as-primary-key-sql-drivers",children:[],level:4},{value:"Using UUID as primary key (SQL drivers)",id:"using-uuid-as-primary-key-sql-drivers",children:[],level:4},{value:"Using PostgreSQL uuid-osp module function as primary key",id:"using-postgresql-uuid-osp-module-function-as-primary-key",children:[],level:4},{value:"Using BigInt as primary key (MySQL and PostgreSQL)",id:"using-bigint-as-primary-key-mysql-and-postgresql",children:[],level:4},{value:"Example of Mongo entity",id:"example-of-mongo-entity",children:[],level:4},{value:"Using BaseEntity (previously WrappedEntity)",id:"using-baseentity-previously-wrappedentity",children:[],level:4}],level:3}],level:2}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"There are two ways how you can define your entities:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Decorated classes"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EntitySchema")," helper")),(0,i.kt)("h2",{id:"entityschema-helper"},"EntitySchema helper"),(0,i.kt)("p",null,"With ",(0,i.kt)("inlineCode",{parentName:"p"},"EntitySchema")," helper you define the schema programmatically. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="./entities/Book.ts"',title:'"./entities/Book.ts"'},"export interface Book extends BaseEntity {\n  title: string;\n  author: Author;\n  publisher: Publisher;\n  tags: Collection<BookTag>;\n}\n\nexport const schema = new EntitySchema<Book, BaseEntity>({\n  name: 'Book',\n  extends: 'BaseEntity',\n  properties: {\n    title: { type: 'string' },\n    author: { reference: 'm:1', entity: 'Author', inversedBy: 'books' },\n    publisher: { reference: 'm:1', entity: 'Publisher', inversedBy: 'books' },\n    tags: { reference: 'm:n', entity: 'BookTag', inversedBy: 'books', fixedOrder: true },\n  },\n});\n")),(0,i.kt)("p",null,"When creating new entity instances, you will need to use ",(0,i.kt)("inlineCode",{parentName:"p"},"em.create()")," method that will\ncreate instance of internally created class. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const repo = em.getRepository<Author>('Author');\nconst author = repo.create('Author', { name: 'name', email: 'email' }); // instance of internal Author class\nawait repo.persistAndFlush(author);\n")),(0,i.kt)("p",null,"You can optionally use custom class for entity instances. Read more about this approach\nin ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.3/entity-schema"},"Defining Entities via EntitySchema section"),"."),(0,i.kt)("h2",{id:"classes-and-decorators"},"Classes and Decorators"),(0,i.kt)("p",null,"Entities are simple javascript objects (so called POJO), decorated with ",(0,i.kt)("inlineCode",{parentName:"p"},"@Entity")," decorator.\nNo real restrictions are made, you do not have to extend any base class, you are more than welcome\nto ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.3/entity-constructors"},"use entity constructors"),", just do not forget to specify primary key with\n",(0,i.kt)("inlineCode",{parentName:"p"},"@PrimaryKey")," decorator."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="./entities/Book.ts"',title:'"./entities/Book.ts"'},"@Entity()\nexport class Book {\n\n  @PrimaryKey()\n  id!: number;\n\n  @Property()\n  createdAt = new Date();\n\n  @Property({ onUpdate: () => new Date() })\n  updatedAt = new Date();\n\n  @Property()\n  title!: string;\n\n  @ManyToOne() // when you provide correct type hint, ORM will read it for you\n  author!: Author;\n\n  @ManyToOne(() => Publisher) // or you can specify the entity as class reference or string name\n  publisher?: Publisher;\n\n  @ManyToMany() // owning side can be simple as this!\n  tags = new Collection<BookTag>(this);\n\n  constructor(title: string, author: Author) {\n    this.title = title;\n    this.author = author;\n  }\n\n}\n")),(0,i.kt)("p",null,"As you can see, entity properties are decorated either with ",(0,i.kt)("inlineCode",{parentName:"p"},"@Property")," decorator, or with one\nof reference decorators: ",(0,i.kt)("inlineCode",{parentName:"p"},"@ManyToOne"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"@OneToMany"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"@OneToOne")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@ManyToMany"),". "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"From v3 you can also use default exports when defining your entity.")),(0,i.kt)("p",null,"Here is another example of ",(0,i.kt)("inlineCode",{parentName:"p"},"Author")," entity, that was referenced from the ",(0,i.kt)("inlineCode",{parentName:"p"},"Book")," one, this\ntime defined for mongo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="./entities/Author.ts"',title:'"./entities/Author.ts"'},"@Entity()\nexport class Author {\n\n  @PrimaryKey()\n  _id!: ObjectId;\n\n  @SerializedPrimaryKey()\n  id!: string;\n\n  @Property()\n  createdAt = new Date();\n\n  @Property({ onUpdate: () => new Date() })\n  updatedAt = new Date();\n\n  @Property()\n  name!: string;\n\n  @Property()\n  email!: string;\n\n  @Property()\n  age?: number;\n\n  @Property()\n  termsAccepted = false;\n\n  @Property()\n  identities?: string[];\n\n  @Property()\n  born?: Date;\n\n  @OneToMany(() => Book, book => book.author)\n  books = new Collection<Book>(this);\n\n  @ManyToMany()\n  friends = new Collection<Author>(this);\n\n  @ManyToOne()\n  favouriteBook?: Book;\n\n  @Property({ version: true })\n  version!: number;\n\n  constructor(name: string, email: string) {\n    this.name = name;\n    this.email = email;\n  }\n\n}\n")),(0,i.kt)("p",null,"More information about modelling relationships can be found on ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.3/relationships"},"modelling relationships page"),"."),(0,i.kt)("p",null,"If you want to define your entity in Vanilla JavaScript, take a look ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.3/usage-with-js"},"here"),"."),(0,i.kt)("h3",{id:"optional-properties"},"Optional Properties"),(0,i.kt)("p",null,"When you define the property as optional (marked with ",(0,i.kt)("inlineCode",{parentName:"p"},"?"),"), this will be automatically considered\nas nullable property (mainly for SQL schema generator). "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This auto-detection works only when you omit the ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"entity")," attribute.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@ManyToOne()\nfavouriteBook?: Book; // correct: no `type` or `entity` provided, **will** be marked as `nullable`\n\n@ManyToOne(() => Book, { nullable: true })\nfavouriteBook?: Book; // correct, `entity` provided and explicitly marked as `nullable`\n\n@ManyToOne(() => Book)\nfavouriteBook?: Book; // wrong, not marked as `nullable`\n")),(0,i.kt)("h3",{id:"default-values"},"Default values"),(0,i.kt)("p",null,"You can set default value of a property in 2 ways:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Use runtime default value of the property. This approach should be preferred as long\nas you are not using any native database function like ",(0,i.kt)("inlineCode",{parentName:"p"},"now()"),". With this approach your\nentities will have the default value set even before it is actually persisted into the\ndatabase (e.g. when you instantiate new entity via ",(0,i.kt)("inlineCode",{parentName:"p"},"new Author()")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"em.create(Author, { ... })"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@Property()\nfoo!: number = 1;\n\n@Property()\nbar!: string = 'abc';\n\n@Property()\nbaz!: Date = new Date();\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," parameter of ",(0,i.kt)("inlineCode",{parentName:"p"},"@Property")," decorator. This way the actual default value\nwill be provided by the database, and automatically mapped to the entity property after\nit is being persisted (after flush). To use SQL functions like ",(0,i.kt)("inlineCode",{parentName:"p"},"now()"),", use ",(0,i.kt)("inlineCode",{parentName:"p"},"defaultRaw"),"."),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"Since v4 you should use ",(0,i.kt)("inlineCode",{parentName:"p"},"defaultRaw")," for SQL functions, as ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," with string values\nwill be automatically quoted. ")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@Property({ default: 1 })\nfoo!: number;\n\n@Property({ default: 'abc' })\nbar!: string;\n\n@Property({ defaultRaw: 'now' })\nbaz!: Date;\n")))),(0,i.kt)("h3",{id:"enums"},"Enums"),(0,i.kt)("p",null,"To define enum property, use ",(0,i.kt)("inlineCode",{parentName:"p"},"@Enum()")," decorator. Enums can be either numeric or string valued. "),(0,i.kt)("p",null,"For schema generator to work properly in case of string enums, you need to define the enum\nis same file as where it is used, so its values can be automatically discovered. If you want\nto define the enum in another file, you should reexport it also in place where you use it. "),(0,i.kt)("p",null,"Another possibility is to provide the reference to the enum implementation in the decorator\nvia ",(0,i.kt)("inlineCode",{parentName:"p"},"@Enum(() => UserRole)"),". "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You can also set enum items manually via ",(0,i.kt)("inlineCode",{parentName:"p"},"items: string[]")," attribute.  ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { OutsideEnum } from './OutsideEnum.ts';\n\n@Entity()\nexport class User {\n\n  @Enum()\n  role!: UserRole; // string enum\n\n  @Enum()\n  status!: UserStatus; // numeric enum\n\n  @Enum(() => OutsideEnum)\n  outside!: OutsideEnum; // string enum defined outside of this file\n\n  @Enum({ items: () => OutsideNullableEnum, nullable: true })\n  outsideNullable?: OutsideNullableEnum; // string enum defined outside of this file, may be null\n}\n\nexport enum UserRole {\n  ADMIN = 'admin',\n  MODERATOR = 'moderator',\n  USER = 'user',\n}\n\nexport const enum UserStatus {\n  DISABLED,\n  ACTIVE,\n}\n\n// or we could reexport OutsideEnum\n// export { OutsideEnum } from './OutsideEnum.ts';\n")),(0,i.kt)("h3",{id:"enum-arrays"},"Enum arrays"),(0,i.kt)("p",null,"We can also use array of values for enum, in that case, ",(0,i.kt)("inlineCode",{parentName:"p"},"EnumArrayType")," type\nwill be used automatically, that will validate items on flush. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"enum Role {\n  User = 'user',\n  Admin = 'admin',\n}\n\n@Enum({ items: () => Role, array: true, default: [Role.User] })\nroles: Role[] = [Role.User];\n")),(0,i.kt)("h3",{id:"mapping-directly-to-primary-keys"},"Mapping directly to primary keys"),(0,i.kt)("p",null,"Sometimes we might want to work only with the primary key of a relation.\nTo do that, we can use ",(0,i.kt)("inlineCode",{parentName:"p"},"mapToPk")," option on M:1 and 1:1 relations:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"@ManyToOne(() => User, { mapToPk: true })\nuser: number;\n")),(0,i.kt)("p",null,"For composite keys, this will give us ordered tuple representing the raw PKs,\nwhich is the internal format of composite PK:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"@ManyToOne(() => User, { mapToPk: true })\nuser: [string, string]; // [first_name, last_name]\n")),(0,i.kt)("h3",{id:"formulas"},"Formulas"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@Formula()")," decorator can be used to map some SQL snippet to your entity.\nThe SQL fragment can be as complex as you want and even include subselects."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@Formula('obj_length * obj_height * obj_width')\nobjectVolume?: number;\n")),(0,i.kt)("p",null,"Formulas will be added to the select clause automatically. In case you are facing\nproblems with ",(0,i.kt)("inlineCode",{parentName:"p"},"NonUniqueFieldNameException"),", you can define the formula as a\ncallback that will receive the entity alias in the parameter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@Formula(alias => `${alias}.obj_length * ${alias}.obj_height * ${alias}.obj_width`)\nobjectVolume?: number;\n")),(0,i.kt)("h3",{id:"indexes"},"Indexes"),(0,i.kt)("p",null,"You can define indexes via ",(0,i.kt)("inlineCode",{parentName:"p"},"@Index()")," decorator, for unique indexes, use ",(0,i.kt)("inlineCode",{parentName:"p"},"@Unique()")," decorator.\nYou can use it either on entity class, or on entity property:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\n@Index({ properties: ['name', 'age'] }) // compound index, with generated name\n@Index({ name: 'custom_idx_name', properties: ['name'] }) // simple index, with custom name\n@Unique({ properties: ['name', 'email'] })\nexport class Author {\n\n  @Property()\n  @Unique()\n  email!: string;\n\n  @Property()\n  @Index() // generated name\n  age?: number;\n\n  @Index({ name: 'born_index' })\n  @Property()\n  born?: Date;\n\n}\n")),(0,i.kt)("h3",{id:"custom-types"},"Custom Types"),(0,i.kt)("p",null,"You can define custom types by extending ",(0,i.kt)("inlineCode",{parentName:"p"},"Type")," abstract class. It has 4 optional methods:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"convertToDatabaseValue(value: any, platform: Platform): any")),(0,i.kt)("p",{parentName:"li"},"Converts a value from its JS representation to its database representation of this type.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"convertToJSValue(value: any, platform: Platform): any")),(0,i.kt)("p",{parentName:"li"},"Converts a value from its database representation to its JS representation of this type.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"toJSON(value: any, platform: Platform): any")),(0,i.kt)("p",{parentName:"li"},"Converts a value from its JS representation to its serialized JSON form of this type.\nBy default converts to the database value.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"getColumnType(prop: EntityProperty, platform: Platform): string")),(0,i.kt)("p",{parentName:"li"},"Gets the SQL declaration snippet for a field of this type."))),(0,i.kt)("p",null,"More information can be found in ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.3/custom-types"},"Custom Types")," section."),(0,i.kt)("h3",{id:"lazy-scalar-properties"},"Lazy scalar properties"),(0,i.kt)("p",null,"You can mark any property as ",(0,i.kt)("inlineCode",{parentName:"p"},"lazy: true")," to omit it from the select clause.\nThis can be handy for properties that are too large and you want to have them\navailable only some times, like a full text of an article."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class Book {\n\n  @Property({ columnType: 'text', lazy: true })\n  text: string;\n\n}\n")),(0,i.kt)("p",null,"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"populate")," parameter to load them."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const b1 = await em.find(Book, 1); // this will omit the `text` property\nconst b2 = await em.find(Book, 1, { populate: ['text'] }); // this will load the `text` property\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If the entity is already loaded and you need to populate a lazy scalar property,\nyou might need to pass ",(0,i.kt)("inlineCode",{parentName:"p"},"refresh: true")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"FindOptions"),".")),(0,i.kt)("h3",{id:"virtual-properties"},"Virtual Properties"),(0,i.kt)("p",null,"You can define your properties as virtual, either as a method, or via JavaScript ",(0,i.kt)("inlineCode",{parentName:"p"},"get/set"),"."),(0,i.kt)("p",null,"Following example defines User entity with ",(0,i.kt)("inlineCode",{parentName:"p"},"firstName")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"lastName")," database fields, that\nare both hidden from the serialized response, replaced with virtual properties ",(0,i.kt)("inlineCode",{parentName:"p"},"fullName"),"\n(defined as a classic method) and ",(0,i.kt)("inlineCode",{parentName:"p"},"fullName2")," (defined as a JavaScript getter)."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For JavaScript getter you need to provide ",(0,i.kt)("inlineCode",{parentName:"p"},"{ persist: false }")," option otherwise the value\nwould be stored in the database. ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class User {\n\n  @Property({ hidden: true })\n  firstName!: string;\n\n  @Property({ hidden: true })\n  lastName!: string;\n\n  @Property({ name: 'fullName' })\n  getFullName() {\n    return `${this.firstName} ${this.lastName}`;\n  }\n\n  @Property({ persist: false })\n  get fullName2() {\n    return `${this.firstName} ${this.lastName}`;\n  }\n\n}\n\nconst repo = em.getRepository(User);\nconst author = repo.create({ firstName: 'Jon', lastName: 'Snow' });\n\nconsole.log(author.getFullName()); // 'Jon Snow'\nconsole.log(author.fullName2); // 'Jon Snow'\nconsole.log(author.toJSON()); // { fullName: 'Jon Snow', fullName2: 'Jon Snow' }\n")),(0,i.kt)("h3",{id:"entity-file-names"},"Entity file names"),(0,i.kt)("p",null,"Starting with MikroORM 4.2, there is no limitation for entity file names. It is now\nalso possible to define multiple entities in a single file using folder based discovery. "),(0,i.kt)("h3",{id:"using-baseentity"},"Using BaseEntity"),(0,i.kt)("p",null,"You can define your own base entity with properties that you require on all entities, like\nprimary key and created/updated time. Single table inheritance is also supported."),(0,i.kt)("p",null,"Read more about this topic in ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.3/inheritance-mapping"},"Inheritance Mapping")," section."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If you are initializing the ORM via ",(0,i.kt)("inlineCode",{parentName:"p"},"entities")," option, you need to specify all your\nbase entities as well.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="./entities/BaseEntity.ts"',title:'"./entities/BaseEntity.ts"'},"import { v4 } from 'uuid';\n\nexport abstract class BaseEntity {\n\n  @PrimaryKey()\n  uuid = v4();\n\n  @Property()\n  createdAt = new Date();\n\n  @Property({ onUpdate: () => new Date() })\n  updatedAt = new Date();\n\n}\n")),(0,i.kt)("p",null,"There is a special case, when we need to annotate the base entity - if we are using\nfolder based discovery, and the base entity is not using any decorators (e.g. it does\nnot define any decorated property). In that case, we need to mark it as abstract:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"@Entity({ abstract: true })\nexport abstract class BaseEntity {\n  // ...\n}\n")),(0,i.kt)("h3",{id:"examples-of-entity-definition-with-various-primary-keys"},"Examples of entity definition with various primary keys"),(0,i.kt)("h4",{id:"using-id-as-primary-key-sql-drivers"},"Using id as primary key (SQL drivers)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class Book {\n\n  @PrimaryKey()\n  id!: number; // string is also supported\n\n  @Property()\n  title!: string;\n\n  @ManyToOne()\n  author!: Author;\n\n}\n")),(0,i.kt)("h4",{id:"using-uuid-as-primary-key-sql-drivers"},"Using UUID as primary key (SQL drivers)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { v4 } from 'uuid';\n\n@Entity()\nexport class Book {\n\n  @PrimaryKey()\n  uuid = v4();\n\n  @Property()\n  title!: string;\n\n  @ManyToOne()\n  author!: Author;\n\n}\n")),(0,i.kt)("h4",{id:"using-postgresql-uuid-osp-module-function-as-primary-key"},"Using PostgreSQL ",(0,i.kt)("a",{parentName:"h4",href:"https://www.postgresql.org/docs/current/uuid-ossp.html"},"uuid-osp")," module function as primary key"),(0,i.kt)("p",null,"Requires enabling the module via: ",(0,i.kt)("inlineCode",{parentName:"p"},'create extension "uuid-ossp";')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class Book {\n\n  @PrimaryKey({ type: 'uuid', defaultRaw: 'uuid_generate_v4()' })\n  uuid: string;\n\n  @Property()\n  title!: string;\n\n  @ManyToOne()\n  author!: Author;\n\n}\n")),(0,i.kt)("h4",{id:"using-bigint-as-primary-key-mysql-and-postgresql"},"Using BigInt as primary key (MySQL and PostgreSQL)"),(0,i.kt)("p",null,"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"BigIntType")," to support ",(0,i.kt)("inlineCode",{parentName:"p"},"bigint"),"s. By default it will represent the value as\na ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),".  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class Book {\n\n  @PrimaryKey({ type: BigIntType })\n  id: string;\n\n}\n")),(0,i.kt)("p",null,"If you want to use native ",(0,i.kt)("inlineCode",{parentName:"p"},"bigint"),"s, read the following guide: ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.3/using-bigint-pks"},"Using native BigInt PKs"),"."),(0,i.kt)("h4",{id:"example-of-mongo-entity"},"Example of Mongo entity"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class Book {\n\n  @PrimaryKey()\n  _id!: ObjectId;\n\n  @SerializedPrimaryKey() \n  id!: string; // string variant of PK, will be handled automatically\n\n  @Property()\n  title!: string;\n\n  @ManyToOne()\n  author!: Author;\n\n}\n")),(0,i.kt)("h4",{id:"using-baseentity-previously-wrappedentity"},"Using BaseEntity (previously WrappedEntity)"),(0,i.kt)("p",null,"From v4 ",(0,i.kt)("inlineCode",{parentName:"p"},"BaseEntity")," class is provided with ",(0,i.kt)("inlineCode",{parentName:"p"},"init"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"isInitialized"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"assign"),"\nand other methods that are otherwise available via the ",(0,i.kt)("inlineCode",{parentName:"p"},"wrap()")," helper."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Usage of ",(0,i.kt)("inlineCode",{parentName:"p"},"BaseEntity")," is optional.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { BaseEntity } from '@mikro-orm/core';\n\n@Entity()\nexport class Book extends BaseEntity {\n\n  @PrimaryKey()\n  id!: number;\n\n  @Property()\n  title!: string;\n\n  @ManyToOne()\n  author!: Author;\n\n}\n\nconst book = new Book();\nconsole.log(book.isInitialized()); // true\n")),(0,i.kt)("p",null,"With your entities set up, you can start ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.3/entity-manager"},"using entity manager")," and\n",(0,i.kt)("a",{parentName:"p",href:"/docs/4.3/repositories"},"repositories")," as described in following sections."))}m.isMDXComponent=!0}}]);