(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{425:function(t,s,a){"use strict";a.r(s);var v=a(2),_=Object(v.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"渐进增强和优雅降级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#渐进增强和优雅降级"}},[t._v("#")]),t._v(" 渐进增强和优雅降级")]),t._v(" "),s("h2",{attrs:{id:"经典真题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#经典真题"}},[t._v("#")]),t._v(" 经典真题")]),t._v(" "),s("ul",[s("li",[t._v("说说渐进增强和优雅降级?")]),t._v(" "),s("li",[t._v("你能描述一下渐进增强和优雅降级之间的不同吗?")])]),t._v(" "),s("h2",{attrs:{id:"渐进增强和优雅降级-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#渐进增强和优雅降级-2"}},[t._v("#")]),t._v(" 渐进增强和优雅降级")]),t._v(" "),s("p",[t._v("渐进增强，英语全称 "),s("em",[t._v("progressive enhancement")]),t._v("，指的是针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。")]),t._v(" "),s("p",[t._v("优雅降级，英语全称 "),s("em",[t._v("graceful degradation")]),t._v("，一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。")]),t._v(" "),s("p",[t._v('这两个概念其实并不是一个新的概念，就是以前提到的"向上兼容"和"向下兼容"。渐进增强相当于向上兼容，优雅降级相当于向下兼容。向下兼容指的是高版本支持低版本，或者说后期开发的版本能兼容早期开发的版本。')]),t._v(" "),s("p",[t._v("在确定用户群体的前提下，渐进增强：针对低版本浏览器进行页面构建，保证基本功能，再针对高级浏览器进行效果、交互等改进和追加功能，达到更好的用户体验。")]),t._v(" "),s("p",[t._v("优雅降级：一开始就构建完整的功能，再针对低版本浏览器进行兼容。")]),t._v(" "),s("p",[t._v("区别：优雅降级是从复杂的现状开始并试图减少用户体验的供给，而渐进增强则是从一个基础的、能够起到作用的版本开始再不断扩充，以适应未来环境的需要。")]),t._v(" "),s("p",[t._v("例如看下面这两段代码的书写顺序，看上去只是书写顺序的不同，实则表示了我们开发的着重点：")]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".transition")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*渐进增强写法*/")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-transition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" all .5s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("-moz-transition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" all .5s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("-o-transition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" all .5s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" all .5s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".transition")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*优雅降级写法*/")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" all .5s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("-o-transition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" all .5s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("-moz-transition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" all .5s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-transition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" all .5s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("前缀 "),s("em",[t._v("CSS3")]),t._v("（-webkit-、-moz-、-o-）和正常 "),s("em",[t._v("CSS3")]),t._v(" 在浏览器中的支持情况是这样的：")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("很久以前")]),t._v("：浏览器前缀 "),s("em",[t._v("CSS3")]),t._v(" 和正常 "),s("em",[t._v("CSS3")]),t._v(" 都不支持")]),t._v(" "),s("li",[s("strong",[t._v("不久之前")]),t._v("：浏览器"),s("strong",[t._v("只支持")]),t._v("前缀 "),s("em",[t._v("CSS3")]),t._v("，"),s("strong",[t._v("不支持")]),t._v("正常 "),s("em",[t._v("CSS3")])]),t._v(" "),s("li",[s("strong",[t._v("现在")]),t._v("：浏览器"),s("strong",[t._v("既支持")]),t._v("前缀 "),s("em",[t._v("CSS3")]),t._v("，"),s("strong",[t._v("又支持")]),t._v("正常 "),s("em",[t._v("CSS3")])]),t._v(" "),s("li",[s("strong",[t._v("未来")]),t._v("：浏览器"),s("strong",[t._v("不支持")]),t._v("前缀 "),s("em",[t._v("CSS3")]),t._v("，"),s("strong",[t._v("仅支持")]),t._v("正常 "),s("em",[t._v("CSS3")])])]),t._v(" "),s("p",[t._v("渐进增强的写法，优先考虑老版本浏览器的可用性，最后才考虑新版本的可用性。在时期 "),s("em",[t._v("3")]),t._v(" 前缀 "),s("em",[t._v("CSS3")]),t._v(" 和正常 "),s("em",[t._v("CSS3")]),t._v(" 都可用的情况下，正常 "),s("em",[t._v("CSS3")]),t._v(" 会覆盖前缀 "),s("em",[t._v("CSS3")]),t._v("。")]),t._v(" "),s("p",[t._v("优雅降级的写法，优先考虑新版本浏览器的可用性，最后才考虑老版本的可用性。在时期 "),s("em",[t._v("3")]),t._v(" 前缀 "),s("em",[t._v("CSS3")]),t._v(" 和正常 "),s("em",[t._v("CSS3")]),t._v(" 都可用的情况下，前缀 "),s("em",[t._v("CSS3")]),t._v(" 会覆盖正常的 "),s("em",[t._v("CSS3")]),t._v("。")]),t._v(" "),s("p",[t._v("绝大多少的大公司都是采用渐进增强的方式，因为业务优先，提升用户体验永远不会排在最前面。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("例如新浪微博网站这样亿级用户的网站，前端的更新绝不可能追求某个特效而不考虑低版本用户是否可用。一定是确保低版本到高版本的可访问性再渐进增强。")])]),t._v(" "),s("li",[s("p",[t._v("如果开发的是一面面向青少面的软件或网站，你明确这个群体的人总是喜欢尝试新鲜事物，喜欢炫酷的特效，喜欢把软件更新至最新版本，这种情况再考虑优雅降级。")])])]),t._v(" "),s("h2",{attrs:{id:"真题解答"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#真题解答"}},[t._v("#")]),t._v(" 真题解答")]),t._v(" "),s("ul",[s("li",[t._v("说说渐进增强和优雅降级?")])]),t._v(" "),s("blockquote",[s("p",[t._v("参考答案：")]),t._v(" "),s("p",[t._v("渐进增强，英语全称 "),s("em",[t._v("progressive enhancement")]),t._v("，指的是针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。")]),t._v(" "),s("p",[t._v("优雅降级，英语全称 "),s("em",[t._v("graceful degradation")]),t._v("，一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。")])]),t._v(" "),s("p",[t._v("-"),s("em",[t._v("EOF")]),t._v("-")])])}),[],!1,null,null,null);s.default=_.exports}}]);