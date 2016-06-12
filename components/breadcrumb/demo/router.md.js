webpackJsonp([335,358],{473:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(67),s(66)),o=t(p),e=s(1),c=t(e),u=s(2),l=(t(u),s(56));n.exports={content:[["p","\u548c ",["code","react-router@2.x"]," \u8fdb\u884c\u7ed3\u5408\u4f7f\u7528\u3002"]],meta:{order:2,iframe:!0,title:"\u8def\u7531",filename:"components/breadcrumb/demo/router.md",id:"components-breadcrumb-demo-router"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Router<span class="token punctuation" >,</span> Route<span class="token punctuation" >,</span> Link<span class="token punctuation" >,</span> hashHistory <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'react-router\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Breadcrumb <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> Apps <span class="token operator" >=</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>ul</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>app-list<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>li</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Link</span> <span class="token attr-name" >to</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>/apps/1<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u5e94\u7528<span class="token number" >1</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Link</span><span class="token punctuation" >></span></span>\uff1a<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Link</span> <span class="token attr-name" >to</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>/apps/1/detail<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u8be6\u60c5<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Link</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>li</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>li</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Link</span> <span class="token attr-name" >to</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>/apps/2<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u5e94\u7528<span class="token number" >2</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Link</span><span class="token punctuation" >></span></span>\uff1a<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Link</span> <span class="token attr-name" >to</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>/apps/2/detail<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u8be6\u60c5<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Link</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>li</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>ul</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> Home <span class="token operator" >=</span> <span class="token punctuation" >(</span>props<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>demo-nav<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Link</span> <span class="token attr-name" >to</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>/<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9996\u9875<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Link</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Link</span> <span class="token attr-name" >to</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>/apps<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u5e94\u7528\u5217\u8868<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Link</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >{</span>props<span class="token punctuation" >.</span>children <span class="token operator" >||</span> <span class="token string" >\'Home\'</span><span class="token punctuation" >}</span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span>\n      <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span>\n        marginBottom<span class="token punctuation" >:</span> <span class="token number" >15</span><span class="token punctuation" >,</span>\n        marginTop<span class="token punctuation" >:</span> <span class="token number" >15</span><span class="token punctuation" >,</span>\n        paddingBottom<span class="token punctuation" >:</span> <span class="token number" >15</span><span class="token punctuation" >,</span>\n        borderBottom<span class="token punctuation" >:</span> <span class="token string" >\'1px dashed #ccc\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n    <span class="token punctuation" >></span></span>\n      \u70b9\u51fb\u4e0a\u9762\u7684\u5bfc\u822a\u5207\u6362\u9875\u9762\uff0c\u9762\u5305\u5c51\u5728\u4e0b\u9762\uff1a\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token operator" >&lt;</span>Breadcrumb <span class="token punctuation" >{</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span>props<span class="token punctuation" >}</span> <span class="token operator" >/</span><span class="token operator" >></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Router</span> <span class="token attr-name" >history</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>hashHistory<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Route</span> <span class="token attr-name" >name</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>home<span class="token punctuation" >"</span></span> <span class="token attr-name" >breadcrumbName</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u9996\u9875<span class="token punctuation" >"</span></span> <span class="token attr-name" >path</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>/<span class="token punctuation" >"</span></span> <span class="token attr-name" >component</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>Home<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Route</span> <span class="token attr-name" >name</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>apps<span class="token punctuation" >"</span></span> <span class="token attr-name" >breadcrumbName</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u5e94\u7528\u5217\u8868<span class="token punctuation" >"</span></span> <span class="token attr-name" >path</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>apps<span class="token punctuation" >"</span></span> <span class="token attr-name" >component</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>Apps<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Route</span> <span class="token attr-name" >name</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>app<span class="token punctuation" >"</span></span> <span class="token attr-name" >breadcrumbName</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u5e94\u7528:id<span class="token punctuation" >"</span></span> <span class="token attr-name" >path</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>:id<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Route</span> <span class="token attr-name" >name</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>detail<span class="token punctuation" >"</span></span> <span class="token attr-name" >breadcrumbName</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8be6\u60c5<span class="token punctuation" >"</span></span> <span class="token attr-name" >path</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>detail<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Route</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Route</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Route</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Router</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=function(){return c["default"].createElement("ul",{className:"app-list"},c["default"].createElement("li",null,c["default"].createElement(l.Link,{to:"/apps/1"},"\u5e94\u75281"),"\uff1a",c["default"].createElement(l.Link,{to:"/apps/1/detail"},"\u8be6\u60c5")),c["default"].createElement("li",null,c["default"].createElement(l.Link,{to:"/apps/2"},"\u5e94\u75282"),"\uff1a",c["default"].createElement(l.Link,{to:"/apps/2/detail"},"\u8be6\u60c5")))},a=function(n){return c["default"].createElement("div",null,c["default"].createElement("div",{className:"demo-nav"},c["default"].createElement(l.Link,{to:"/"},"\u9996\u9875"),c["default"].createElement(l.Link,{to:"/apps"},"\u5e94\u7528\u5217\u8868")),n.children||"Home",c["default"].createElement("div",{style:{marginBottom:15,marginTop:15,paddingBottom:15,borderBottom:"1px dashed #ccc"}},"\u70b9\u51fb\u4e0a\u9762\u7684\u5bfc\u822a\u5207\u6362\u9875\u9762\uff0c\u9762\u5305\u5c51\u5728\u4e0b\u9762\uff1a"),c["default"].createElement(o["default"],n))};return c["default"].createElement(l.Router,{history:l.hashHistory},c["default"].createElement(l.Route,{name:"home",breadcrumbName:"\u9996\u9875",path:"/",component:a},c["default"].createElement(l.Route,{name:"apps",breadcrumbName:"\u5e94\u7528\u5217\u8868",path:"apps",component:n},c["default"].createElement(l.Route,{name:"app",breadcrumbName:"\u5e94\u7528:id",path:":id"},c["default"].createElement(l.Route,{name:"detail",breadcrumbName:"\u8be6\u60c5",path:"detail"})))))},style:"#components-breadcrumb-demo-router iframe {\n  height: 180px;\n}\n.demo-nav {\n  height: 30px;\n  line-height: 30px;\n  margin-bottom: 15px;\n  background: #f8f8f8;\n}\n.demo-nav a {\n  line-height: 30px;\n  padding: 0 10px;\n}\n.app-list {\n  margin-top: 15px;\n}",highlightedStyle:'<span class="token selector" ><span class="token id" >#components-breadcrumb-demo-router</span> iframe </span><span class="token punctuation" >{</span>\n  <span class="token property" >height</span><span class="token punctuation" >:</span> <span class="token number" >180</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n<span class="token selector" ><span class="token class" >.demo-nav</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >height</span><span class="token punctuation" >:</span> <span class="token number" >30</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >line-height</span><span class="token punctuation" >:</span> <span class="token number" >30</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >margin-bottom</span><span class="token punctuation" >:</span> <span class="token number" >15</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >background</span><span class="token punctuation" >:</span> <span class="token hexcode" >#f8f8f8</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n<span class="token selector" ><span class="token class" >.demo-nav</span> a </span><span class="token punctuation" >{</span>\n  <span class="token property" >line-height</span><span class="token punctuation" >:</span> <span class="token number" >30</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >padding</span><span class="token punctuation" >:</span> <span class="token number" >0</span> <span class="token number" >10</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n<span class="token selector" ><span class="token class" >.app-list</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >margin-top</span><span class="token punctuation" >:</span> <span class="token number" >15</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>',src:"/demo-0.5061939782463014.html"}}});