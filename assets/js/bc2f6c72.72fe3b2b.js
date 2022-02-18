"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2874],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,h=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1847:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],c={},i="@SlashChoice",s={unversionedId:"decorators/commands/slashchoice",id:"decorators/commands/slashchoice",title:"@SlashChoice",description:"An option of a Slash command can implement an autocompletion feature for string and number types",source:"@site/docs/decorators/commands/slashchoice.md",sourceDirName:"decorators/commands",slug:"/decorators/commands/slashchoice",permalink:"/docs/decorators/commands/slashchoice",editUrl:"https://github.com/oceanroleplay/discord.ts/edit/main/docs/docs/decorators/commands/slashchoice.md",tags:[],version:"current",lastUpdatedBy:"oceanroleplay",lastUpdatedAt:1645219214,formattedLastUpdatedAt:"2/18/2022",frontMatter:{},sidebar:"docSidebar",previous:{title:"@Slash - Discord commands",permalink:"/docs/decorators/commands/slash"},next:{title:"@SlashGroup",permalink:"/docs/decorators/commands/slashgroup"}},u=[{value:"Setup autocompletion",id:"setup-autocompletion",children:[],level:2},{value:"Use object or enum to define all the choices at once",id:"use-object-or-enum-to-define-all-the-choices-at-once",children:[],level:2},{value:"Signature",id:"signature",children:[],level:2},{value:"Parameters",id:"parameters",children:[{value:"Name",id:"name",children:[],level:3},{value:"Value",id:"value",children:[],level:3}],level:2}],m={toc:u};function p(e){var t=e.components,c=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"slashchoice"},"@SlashChoice"),(0,o.kt)("p",null,"An option of a Slash command can implement an autocompletion feature for ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," types"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(7991).Z,width:"556",height:"540"})),(0,o.kt)("h2",{id:"setup-autocompletion"},"Setup autocompletion"),(0,o.kt)("p",null,"You just decorate your parameter with one or multiple @SlashChoice !"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'@Discord()\nclass DiscordBot {\n  @Slash("iam")\n  iam(\n    @SlashChoice("Human", "human")\n    @SlashChoice("Astronaut", "astronaut")\n    @SlashChoice("Dev", "dev")\n    @SlashOption("what", { description: "What are you?" })\n    what: string,\n    interaction: CommandInteraction\n  ) {\n    interaction.reply(what);\n  }\n}\n')),(0,o.kt)("h2",{id:"use-object-or-enum-to-define-all-the-choices-at-once"},"Use object or enum to define all the choices at once"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'enum TextChoices {\n  // WhatDiscordShows = value\n  Hello = "Hello",\n  "Good Bye" = "GoodBye",\n}\n\n// Could be\n// const textChoices = {\n//   Hello: "Hello",\n//   ["Good Bye"]: "GoodBye"\n// }\n\n@Discord()\nclass DiscordBot {\n  @Slash("hello")\n  hello(\n    @SlashChoice(TextChoices)\n    @SlashChoice("How are you", "question")\n    @SlashOption("text")\n    text: string,\n    interaction: CommandInteraction\n  ) {\n    interaction.reply(text);\n  }\n}\n')),(0,o.kt)("h2",{id:"signature"},"Signature"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"SlashChoice(name: string);\nSlashChoice(name: number);\nSlashChoice(name: string, value: number);\nSlashChoice(name: string, value: string);\nSlashChoice(choices: SlashChoicesType);\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("h3",{id:"name"},"Name"),(0,o.kt)("p",null,"You have to set a diplayed name for your choice"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"type"),(0,o.kt)("th",{parentName:"tr",align:null},"default"),(0,o.kt)("th",{parentName:"tr",align:null},"required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"string ","|"," number"),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,o.kt)("h3",{id:"value"},"Value"),(0,o.kt)("p",null,'You have to set a value for your choice, if the user select "Astronaut", you will receive the value "astronaut"'),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"type"),(0,o.kt)("th",{parentName:"tr",align:null},"default"),(0,o.kt)("th",{parentName:"tr",align:null},"required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"string ","|"," number"),(0,o.kt)("td",{parentName:"tr",align:null},"Choice name"),(0,o.kt)("td",{parentName:"tr",align:null},"No")))))}p.isMDXComponent=!0},7991:function(e,t,n){t.Z=n.p+"assets/images/choices-9f2ec7b1b456c6a16f7a9ffeffeb3f5c.png"}}]);