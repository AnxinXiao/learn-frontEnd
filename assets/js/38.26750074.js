(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{441:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"dom-事件的注册和移除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dom-事件的注册和移除"}},[t._v("#")]),t._v(" "),s("em",[t._v("DOM")]),t._v(" 事件的注册和移除")]),t._v(" "),s("h2",{attrs:{id:"经典真题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#经典真题"}},[t._v("#")]),t._v(" 经典真题")]),t._v(" "),s("ul",[s("li",[t._v("总结一下 "),s("em",[t._v("DOM")]),t._v(" 中如何注册事件和移除事件")])]),t._v(" "),s("h2",{attrs:{id:"dom-注册事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dom-注册事件"}},[t._v("#")]),t._v(" "),s("em",[t._v("DOM")]),t._v(" 注册事件")]),t._v(" "),s("p",[t._v("使用 "),s("em",[t._v("JavaScript")]),t._v(" 为 "),s("em",[t._v("DOM")]),t._v(" 元素注册事件的方式有多种。但是并不是一开始就设计了多种方式，而是随着技术的发展，发展前一种方式有所缺陷，所以设计了新的 "),s("em",[t._v("DOM")]),t._v(" 元素注册事件的方式。")]),t._v(" "),s("p",[t._v("这里我们就一起来总结一下 "),s("em",[t._v("DOM")]),t._v(" 中注册事件的方式有哪些。")]),t._v(" "),s("h3",{attrs:{id:"html-元素中注册事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html-元素中注册事件"}},[t._v("#")]),t._v(" "),s("em",[t._v("HTML")]),t._v(" 元素中注册事件")]),t._v(" "),s("p",[s("em",[t._v("HTML")]),t._v(" 元素中注册的事件，又被称之为行内事件监听器。这是在浏览器中处理事件最原始的方法。")]),t._v(" "),s("p",[t._v("具体的示例如下：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token special-attr"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onclick")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token value javascript language-javascript"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'张三'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("点击我"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("我知道你已经点击了，")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("在上面的代码中，我们为 "),s("em",[t._v("button")]),t._v(" 元素添加了 "),s("em",[t._v("onclick")]),t._v(" 属性，然后绑定了一个名为 "),s("em",[t._v("test")]),t._v(" 的事件处理器。")]),t._v(" "),s("p",[t._v("在 "),s("em",[t._v("JavaScript")]),t._v(" 中只需要书写对应的 "),s("em",[t._v("test")]),t._v(" 事件处理函数即可。")]),t._v(" "),s("p",[t._v("但是有一点需要注意，就是这种方法已经过时了，原因如下：")]),t._v(" "),s("ul",[s("li",[s("em",[t._v("JavaScript")]),t._v(" 代码与 "),s("em",[t._v("HTML")]),t._v(" 标记混杂在一起，破坏了结构和行为分离的理念。")]),t._v(" "),s("li",[t._v("每个元素只能为每种事件类型绑定一个事件处理器。")]),t._v(" "),s("li",[t._v("事件处理器的代码隐藏于标记中，很难找到事件是在哪里声明的。")])]),t._v(" "),s("p",[t._v("但是如果是做简单的事件测试，那么这种写法还是非常方便快捷的。")]),t._v(" "),s("h3",{attrs:{id:"dom0-级方式注册事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dom0-级方式注册事件"}},[t._v("#")]),t._v(" "),s("em",[t._v("DOM0")]),t._v(" 级方式注册事件")]),t._v(" "),s("p",[t._v("这种方式是首先取到要为其绑定事件的元素节点对象，然后给这些节点对象的事件处理属性赋值一个函数。")]),t._v(" "),s("p",[t._v("这样就可以达到 "),s("em",[t._v("JavaScript")]),t._v(" 代码和 "),s("em",[t._v("HTML")]),t._v(" 代码相分离的目的。")]),t._v(" "),s("p",[t._v("具体的示例如下：")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("点击我"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" test "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ntest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onclick")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"this is a test"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("这种方式虽然相比 "),s("em",[t._v("HTML")]),t._v(" 元素中注册事件有所改进，但是它也有一个缺点，那就是它依然存在每个元素只能绑定一个函数的局限性。")]),t._v(" "),s("p",[t._v("下面我们尝试使用这种方式为同一个元素节点绑定 "),s("em",[t._v("2")]),t._v(" 个事件，如下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" test "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ntest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onclick")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"this is a test"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\ntest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onclick")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"this is a test,too"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("当我们为该 "),s("em",[t._v("DOM")]),t._v(" 元素绑定 "),s("em",[t._v("2")]),t._v(" 个相同类型的事件时，后面的事件处理函数就会把前面的事件处理函数给覆盖掉。")]),t._v(" "),s("h3",{attrs:{id:"dom2-级方式注册事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dom2-级方式注册事件"}},[t._v("#")]),t._v(" "),s("em",[t._v("DOM2")]),t._v(" 级方式注册事件")]),t._v(" "),s("p",[s("em",[t._v("DOM2")]),t._v(" 级再次对事件的绑定方式进行了改进。")]),t._v(" "),s("p",[s("em",[t._v("DOM2")]),t._v(" 级通过 "),s("em",[t._v("addEventListener")]),t._v(" 方法来为一个 "),s("em",[t._v("DOM")]),t._v(" 元素添加多个事件处理函数。")]),t._v(" "),s("p",[t._v("该方法接收 "),s("em",[t._v("3")]),t._v(" 个参数：事件名、事件处理函数、布尔值。")]),t._v(" "),s("p",[t._v("如果这个布尔值为 "),s("em",[t._v("true")]),t._v("，则在捕获阶段处理事件，如果为 "),s("em",[t._v("false")]),t._v("，则在冒泡阶段处理事件。若最后的布尔值不填写，则和 "),s("em",[t._v("false")]),t._v(" 效果一样，也就是说默认为 "),s("em",[t._v("false")]),t._v("，在冒泡阶段进行事件的处理。")]),t._v(" "),s("p",[t._v("接下来我们来看下面的示例：这里我们为 "),s("em",[t._v("button")]),t._v(" 元素绑定了 "),s("em",[t._v("2")]),t._v(" 个事件处理程序，并且 "),s("em",[t._v("2")]),t._v(" 个事件处理程序都是通过点击来触发。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" test "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ntest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"click"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"this is a test"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ntest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"click"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"this is a test,too"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("在上面的代码中，我们通过 "),s("em",[t._v("addEventListener")]),t._v(" 为按钮绑定了 "),s("em",[t._v("2")]),t._v(" 个点击的事件处理程序，"),s("em",[t._v("2")]),t._v(" 个事件处理程序都会执行。")]),t._v(" "),s("p",[t._v("另外需要注意的是，在 "),s("em",[t._v("IE")]),t._v(" 中和 "),s("em",[t._v("addEventListener")]),t._v(" 方法与之对应的是 "),s("em",[t._v("attachEvent")]),t._v(" 方法。")]),t._v(" "),s("h2",{attrs:{id:"dom-移除事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dom-移除事件"}},[t._v("#")]),t._v(" "),s("em",[t._v("DOM")]),t._v(" 移除事件")]),t._v(" "),s("p",[t._v("通过 "),s("em",[t._v("DOM0")]),t._v(" 级来添加的事件，删除的方法很简单，只需要将 "),s("em",[t._v("DOM")]),t._v(" 元素的事件处理属性赋值为 "),s("em",[t._v("null")]),t._v(" 即可。")]),t._v(" "),s("p",[t._v("例如：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" test "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ntest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onclick")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"this is a test"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onclick "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("在上面的代码中，我们通过 "),s("em",[t._v("DOM0")]),t._v(" 级的方式为 "),s("em",[t._v("button")]),t._v(" 按钮绑定了点击事件，但是在事件处理函数中又移除了该事件。所以该事件只会生效一次。")]),t._v(" "),s("p",[t._v("如果是通过 "),s("em",[t._v("DOM2")]),t._v(" 级来添加的事件，我们可以使用 "),s("em",[t._v("removeEventLister")]),t._v(" 方法来进行事件的删除。")]),t._v(" "),s("p",[t._v("需要注意的是，如果要通过该方法移除"),s("strong",[t._v("某一类事件类型的一个事件")]),t._v("的话，在通过 "),s("em",[t._v("addEventListener")]),t._v(" 来绑定事件时的写法就要稍作改变。")]),t._v(" "),s("p",[t._v("先单独将绑定函数写好，然后 "),s("em",[t._v("addEventListener")]),t._v(" 进行绑定时第 "),s("em",[t._v("2")]),t._v(" 个参数传入要绑定的函数名即可。")]),t._v(" "),s("p",[t._v("示例如下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" test "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//DOM 2级添加事件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"this is a test"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"click"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fn1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 只删除第一个点击事件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"this is a test,too"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\ntest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"click"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fn1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ntest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"click"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fn2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("在上面的代码中，我们为 "),s("em",[t._v("button")]),t._v(" 元素绑定了两个 "),s("em",[t._v("click")]),t._v(" 事件，之后在第一个事件处理函数中，对 "),s("em",[t._v("fn1")]),t._v(" 事件处理函数进行了移除。所以第一次点击时，"),s("em",[t._v("fn1")]),t._v(" 和 "),s("em",[t._v("fn2")]),t._v(" 都会起作用，之后因为 "),s("em",[t._v("fn1")]),t._v(" 被移除，所以只会 "),s("em",[t._v("fn2")]),t._v(" 有作用。")]),t._v(" "),s("h2",{attrs:{id:"真题解答"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#真题解答"}},[t._v("#")]),t._v(" 真题解答")]),t._v(" "),s("ul",[s("li",[t._v("总结一下 "),s("em",[t._v("DOM")]),t._v(" 中如何注册事件和移除事件")])]),t._v(" "),s("blockquote",[s("p",[t._v("参考答案：")]),t._v(" "),s("p",[t._v("注册事件的方式常见的有 "),s("em",[t._v("3")]),t._v(" 种方式：")]),t._v(" "),s("ul",[s("li",[s("p",[s("em",[t._v("HTML")]),t._v(" 元素中注册的事件：这种方式又被称之为行内事件监听器。这是在浏览器中处理事件最原始的方法。")])]),t._v(" "),s("li",[s("p",[s("em",[t._v("DOM0")]),t._v(" 级方式注册事件：这种方式是首先取到要为其绑定事件的元素节点对象，然后给这些节点对象的事件处理属性赋值一个函数。")])]),t._v(" "),s("li",[s("p",[s("em",[t._v("DOM2")]),t._v(" 级方式注册事件："),s("em",[t._v("DOM2")]),t._v(" 级通过 "),s("em",[t._v("addEventListener")]),t._v(" 方法来为一个 "),s("em",[t._v("DOM")]),t._v(" 元素添加多个事件处理函数。")]),t._v(" "),s("p",[t._v("该方法接收 "),s("em",[t._v("3")]),t._v(" 个参数：事件名、事件处理函数、布尔值。")]),t._v(" "),s("p",[t._v("如果这个布尔值为 "),s("em",[t._v("true")]),t._v("，则在捕获阶段处理事件，如果为 "),s("em",[t._v("false")]),t._v("，则在冒泡阶段处理事件。若最后的布尔值不填写，则和 "),s("em",[t._v("false")]),t._v(" 效果一样，也就是说默认为 "),s("em",[t._v("false")]),t._v("，在冒泡阶段进行事件的处理。")])])]),t._v(" "),s("p",[t._v("关于移除注册的事件，如果是 "),s("em",[t._v("DOM0")]),t._v(" 级方式注册的事件，直接将值设置为 "),s("em",[t._v("null")]),t._v(" 即可。如果是 "),s("em",[t._v("DOM2")]),t._v(" 级注册的事件，可以使用 "),s("em",[t._v("removeEventListener")]),t._v(" 方法来移除事件。")])]),t._v(" "),s("p",[t._v("-"),s("em",[t._v("EOF")]),t._v("-")])])}),[],!1,null,null,null);s.default=e.exports}}]);