(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{443:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"闭包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#闭包"}},[t._v("#")]),t._v(" 闭包")]),t._v(" "),s("h2",{attrs:{id:"经典真题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#经典真题"}},[t._v("#")]),t._v(" 经典真题")]),t._v(" "),s("ul",[s("li",[t._v("闭包是什么？闭包的应用场景有哪些？怎么销毁闭包？")])]),t._v(" "),s("h2",{attrs:{id:"什么是闭包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是闭包"}},[t._v("#")]),t._v(" 什么是闭包")]),t._v(" "),s("p",[t._v("闭包，是 "),s("em",[t._v("JavaScript")]),t._v(" 中一个非常重要的知识点，也是我们前端面试中较高几率被问到的知识点之一。")]),t._v(" "),s("p",[t._v("打开《"),s("em",[t._v("JavaScript")]),t._v(" 高级程序设计》和《 "),s("em",[t._v("JavaScript")]),t._v(" 权威指南》，会发现里面针对闭包的解释各执一词，在网络上搜索关于闭包的内容，也发现众说纷纭，这就导致了这个知识点本身显得有点神秘，甚至还有一点玄幻。")]),t._v(" "),s("p",[t._v("那么这个知识点真的有那么深奥么？")]),t._v(" "),s("p",[t._v("非也！其实要理解 "),s("em",[t._v("JavaScript")]),t._v(" 中的闭包，非常容易，但是在此之前你需要先知道以下两个知识点：")]),t._v(" "),s("ul",[s("li",[s("em",[t._v("JavaScript")]),t._v(" 中的作用域和作用域链")]),t._v(" "),s("li",[s("em",[t._v("JavaScript")]),t._v(" 中的垃圾回收")])]),t._v(" "),s("p",[t._v("这里我们来简单回顾一下这两个知识点：")]),t._v(" "),s("p",[s("strong",[t._v("1. "),s("em",[t._v("JavaScript")]),t._v(" 中的作用域和作用域链")])]),t._v(" "),s("ul",[s("li",[t._v("作用域就是一个独立的地盘，让变量不会外泄、暴露出去，不同作用域下同名变量不会有冲突。")]),t._v(" "),s("li",[t._v("作用域在定义时就确定，并且不会改变。")]),t._v(" "),s("li",[t._v("如果在当前作用域中没有查到值，就会向上级作用域去查，直到查到全局作用域，这么一个查找过程形成的链条就叫做作用域链。")])]),t._v(" "),s("p",[s("strong",[t._v("2. "),s("em",[t._v("JavaScript")]),t._v(" 中的垃圾回收")])]),t._v(" "),s("ul",[s("li",[s("em",[t._v("Javascript")]),t._v(" 执行环境会负责管理代码执行过程中使用的内存，其中就涉及到一个垃圾回收机制")]),t._v(" "),s("li",[t._v("垃圾收集器会定期（周期性）找出那些不再继续使用的变量，只要该变量不再使用了，就会被垃圾收集器回收，然后释放其内存。如果该变量还在使用，那么就不会被回收。")])]),t._v(" "),s("p",[s("em",[t._v("OK")]),t._v("，有了这 "),s("em",[t._v("2")]),t._v(" 个知识点的铺垫后，接下来我们再来看什么是闭包。")]),t._v(" "),s("blockquote",[s("p",[t._v("闭包不是一个具体的技术，而是一种现象，是指在定义函数时，周围环境中的信息可以在函数中使用。换句话说，执行函数时，只要在函数中使用了外部的数据，就创建了闭包。")]),t._v(" "),s("p",[t._v("而作用域链，正是实现闭包的手段。")])]),t._v(" "),s("p",[t._v("什么？只要在函数中使用了外部的数据，就创建了闭包？")]),t._v(" "),s("p",[t._v("真的是这样么？下面我们可以证明一下：")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-12-27-065017.png",alt:"image-20211227145016552"}}),t._v(" "),s("p",[t._v("在上面的代码中，我们在函数 "),s("em",[t._v("a")]),t._v(" 中定义了一个变量 "),s("em",[t._v("i")]),t._v("，然后打印这个 "),s("em",[t._v("i")]),t._v(" 变量。对于 "),s("em",[t._v("a")]),t._v(" 这个函数来讲，自己的函数作用域中存在 "),s("em",[t._v("i")]),t._v(" 这个变量，所以我们在调试时可以看到 "),s("em",[t._v("Local")]),t._v(" 中存在变量 "),s("em",[t._v("i")]),t._v("。")]),t._v(" "),s("p",[t._v("下面我们将上面的代码稍作修改，如下图：")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-12-27-065522.png",alt:"image-20211227145521272"}}),t._v(" "),s("p",[t._v("在上面的代码中，我们将声明 "),s("em",[t._v("i")]),t._v(" 这个变量的动作放到了 "),s("em",[t._v("a")]),t._v(" 函数外面，也就是说 "),s("em",[t._v("a")]),t._v(" 函数在自己的作用域已经找不到这个 "),s("em",[t._v("i")]),t._v(" 变量了，它会怎么办？")]),t._v(" "),s("p",[t._v("学习了作用域链的你肯定知道，它会顺着作用域链一层一层往外找。然而上面在介绍闭包时说过，如果出现了这种情况，也就是函数使用了外部的数据的情况，就会创建闭包。")]),t._v(" "),s("p",[t._v("仔细观察调试区域，我们会发现此时的 "),s("em",[t._v("i")]),t._v(" 就放在 "),s("em",[t._v("Closure")]),t._v(" 里面的，从而证实了我们前面的说法。")]),t._v(" "),s("p",[t._v("所以你看，闭包其实也没有那么难理解，当你觉得一个词对你来说特别难的时候，你还可以使用拆词法，这也是我比较推荐的屡试不爽的一种方法。")]),t._v(" "),s("p",[t._v("“闭”可以理解为“封闭，闭环”，“包”可以理解为“一个类似于包裹的空间”，因此闭包实际上可以看作是一个封闭的空间，那么这个空间用来干啥呢？实际上就是用来存储变量的。")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-12-27-083947.png",alt:"image-20211227163947135"}}),t._v(" "),s("p",[t._v("那么是一个函数下所有的变量声明都会被放入到闭包这个封闭的空间里面么？")]),t._v(" "),s("p",[t._v("倒也不是，放不放入到闭包中，要看其他地方有没有对这个变量进行引用，例如：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-12-27-084334.png",alt:"image-20211227164333723"}})]),t._v(" "),s("p",[t._v("在上面的代码中，函数 c 中一个变量都没有创建，却要打印 "),s("em",[t._v("i、j、k")]),t._v(" 和 "),s("em",[t._v("x")]),t._v("，这些变量分别存在于 "),s("em",[t._v("a、b")]),t._v(" 函数以及全局作用域中，因此创建了 "),s("em",[t._v("3")]),t._v(" 个闭包，全局闭包里面存储了 "),s("em",[t._v("i")]),t._v(" 的值，闭包 "),s("em",[t._v("a")]),t._v(" 中存储了变量 "),s("em",[t._v("j")]),t._v(" 和 "),s("em",[t._v("k")]),t._v(" 的值，闭包 "),s("em",[t._v("b")]),t._v(" 中存储了变量 "),s("em",[t._v("x")]),t._v(" 的值。")]),t._v(" "),s("p",[t._v("但是你仔细观察，你就会发现函数 "),s("em",[t._v("b")]),t._v(" 中的 "),s("em",[t._v("y")]),t._v(" 变量并没有被放在闭包中，所以要不要放入闭包取决于该变量有没有被引用。")]),t._v(" "),s("p",[t._v("当然，此时的你可能会有这样的一个新问题，那么多闭包，那岂不是占用内存空间么？")]),t._v(" "),s("p",[t._v("实际上，如果是自动形成的闭包，是会被销毁掉的。例如：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://xiejie-typora.oss-cn-chengdu.aliyuncs.com/2021-12-27-094043.png",alt:"image-20211227174043786"}})]),t._v(" "),s("p",[t._v("在上面的代码中，我们在第 "),s("em",[t._v("16")]),t._v(" 行尝试打印输出变量 "),s("em",[t._v("k")]),t._v("，显然这个时候是会报错的，在第 "),s("em",[t._v("16")]),t._v(" 行打一个断点调试就可以清楚的看到，此时已经没有任何闭包存在，垃圾回收器会自动回收没有引用的变量，不会有任何内存占用的情况。")]),t._v(" "),s("p",[t._v("当然，这里我指的是自动产生闭包的情况，关于闭包，有时我们需要根据需求手动的来制造一个闭包。")]),t._v(" "),s("p",[t._v("来看下面的例子：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("eat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" food "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"鸡翅"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("food"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("eat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 鸡翅")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("food"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 报错")]),t._v("\n")])])]),s("p",[t._v("在上面的例子中，我们声明了一个名为 "),s("em",[t._v("eat")]),t._v(" 的函数，并对它进行调用。")]),t._v(" "),s("p",[s("em",[t._v("JavaScript")]),t._v(" 引擎会创建一个 "),s("em",[t._v("eat")]),t._v(" 函数的执行上下文，其中声明 "),s("em",[t._v("food")]),t._v(" 变量并赋值。")]),t._v(" "),s("p",[t._v("当该方法执行完后，上下文被销毁，"),s("em",[t._v("food")]),t._v(" 变量也会跟着消失。这是因为 "),s("em",[t._v("food")]),t._v(" 变量属于 "),s("em",[t._v("eat")]),t._v(" 函数的局部变量，它作用于 "),s("em",[t._v("eat")]),t._v(" 函数中，会随着 "),s("em",[t._v("eat")]),t._v(" 的执行上下文创建而创建，销毁而销毁。所以当我们再次打印 "),s("em",[t._v("food")]),t._v(" 变量时，就会报错，告诉我们该变量不存在。")]),t._v(" "),s("p",[t._v("但是我们将此代码稍作修改：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("eat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" food "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'鸡翅'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("food"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" look "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("eat")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("look")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 鸡翅")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("look")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 鸡翅")]),t._v("\n")])])]),s("p",[t._v("在这个例子中，"),s("em",[t._v("eat")]),t._v(" 函数返回一个函数，并在这个内部函数中访问 "),s("em",[t._v("food")]),t._v(" 这个局部变量。调用 "),s("em",[t._v("eat")]),t._v(" 函数并将结果赋给 "),s("em",[t._v("look")]),t._v(" 变量，这个 "),s("em",[t._v("look")]),t._v(" 指向了 "),s("em",[t._v("eat")]),t._v(" 函数中的内部函数，然后调用它，最终输出 "),s("em",[t._v("food")]),t._v(" 的值。")]),t._v(" "),s("p",[t._v("为什么能访问到 "),s("em",[t._v("food")]),t._v("，原因很简单，上面我们说过，垃圾回收器只会回收没有被引用到的变量，但是一旦一个变量还被引用着的，垃圾回收器就不会回收此变量。在上面的示例中，照理说 "),s("em",[t._v("eat")]),t._v(" 调用完毕 "),s("em",[t._v("food")]),t._v(" 就应该被销毁掉，但是我们向外部返回了 "),s("em",[t._v("eat")]),t._v(" 内部的匿名函数，而这个匿名函数有引用了 "),s("em",[t._v("food")]),t._v("，所以垃圾回收器是不会对其进行回收的，这也是为什么在外面调用这个匿名函数时，仍然能够打印出 "),s("em",[t._v("food")]),t._v(" 变量的值。")]),t._v(" "),s("p",[t._v("至此，闭包的一个优点或者特点也就体现出来了，那就是：")]),t._v(" "),s("ul",[s("li",[t._v("通过闭包可以让外部环境访问到函数内部的局部变量。")]),t._v(" "),s("li",[t._v("通过闭包可以让局部变量持续保存下来，不随着它的上下文环境一起销毁。")])]),t._v(" "),s("p",[t._v("通过此特性，我们可以解决一个全局变量污染的问题。早期在 "),s("em",[t._v("JavaScript")]),t._v(" 还无法进行模块化的时候，在多人协作时，如果定义过多的全局变量 有可能造成全局变量命名冲突，使用闭包来解决功能对变量的调用将变量写到一个独立的空间里面，从而能够一定程度上解决全局变量污染的问题。")]),t._v(" "),s("p",[t._v("例如：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GlobalName"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 全局变量")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" init "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"initName"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("callName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打印 name")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("callName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 形成接口")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// initName")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" initSuper "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"initSuperName"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("callName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打印 name")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("callName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 形成接口")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initSuper")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// initSuperName")]),t._v("\n")])])]),s("p",[t._v("好了，在此小节的最后，我们来对闭包做一个小小的总结：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("闭包是一个封闭的空间，里面存储了在其他地方会引用到的该作用域的值，在 "),s("em",[t._v("JavaScript")]),t._v(" 中是通过作用域链来实现的闭包。")])]),t._v(" "),s("li",[s("p",[t._v("只要在函数中使用了外部的数据，就创建了闭包，这种情况下所创建的闭包，我们在编码时是不需要去关心的。")])]),t._v(" "),s("li",[s("p",[t._v("我们还可以通过一些手段手动创建闭包，从而让外部环境访问到函数内部的局部变量，让局部变量持续保存下来，不随着它的上下文环境一起销毁。")])])]),t._v(" "),s("h2",{attrs:{id:"闭包经典问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#闭包经典问题"}},[t._v("#")]),t._v(" 闭包经典问题")]),t._v(" "),s("p",[t._v("聊完了闭包，接下来我们来看一个闭包的经典问题。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("在上面的代码中，我们预期的结果是过 "),s("em",[t._v("1")]),t._v(" 秒后分别输出 "),s("em",[t._v("i")]),t._v(" 变量的值为 "),s("em",[t._v("1，2，3")]),t._v("。但是，执行的结果是："),s("em",[t._v("4，4，4")]),t._v("。")]),t._v(" "),s("p",[t._v("实际上，问题就出在闭包身上。你看，循环中的 "),s("em",[t._v("setTimeout")]),t._v(" 访问了它的外部变量 "),s("em",[t._v("i")]),t._v("，形成闭包。")]),t._v(" "),s("p",[t._v("而 "),s("em",[t._v("i")]),t._v(" 变量只有 "),s("em",[t._v("1")]),t._v(" 个，所以循环 "),s("em",[t._v("3")]),t._v(" 次的 "),s("em",[t._v("setTimeout")]),t._v(" 中都访问的是同一个变量。循环到第 "),s("em",[t._v("4")]),t._v(" 次，"),s("em",[t._v("i")]),t._v(" 变量增加到 "),s("em",[t._v("4")]),t._v("，不满足循环条件，循环结束，代码执行完后上下文结束。但是，那 "),s("em",[t._v("3")]),t._v(" 个 "),s("em",[t._v("setTimeout")]),t._v(" 等 "),s("em",[t._v("1")]),t._v(" 秒钟后才执行，由于闭包的原因，所以它们仍然能访问到变量 "),s("em",[t._v("i")]),t._v("，不过此时 "),s("em",[t._v("i")]),t._v(" 变量值已经是 "),s("em",[t._v("4")]),t._v(" 了。")]),t._v(" "),s("p",[t._v("要解决这个问题，我们可以让 "),s("em",[t._v("setTimeout")]),t._v(" 中的匿名函数不再访问外部变量，而是访问自己内部的变量，如下：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("index")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("这样 "),s("em",[t._v("setTimeout")]),t._v(" 中就可以不用访问 "),s("em",[t._v("for")]),t._v(" 循环声明的变量 "),s("em",[t._v("i")]),t._v(" 了。而是采用调用函数传参的方式把变量 "),s("em",[t._v("i")]),t._v(" 的值传给了 "),s("em",[t._v("setTimeout")]),t._v("，这样它们就不再创建闭包，因为在我自己的作用域里面能够找到 "),s("em",[t._v("i")]),t._v(" 这个变量。")]),t._v(" "),s("p",[t._v("当然，解决这个问题还有个更简单的方法，就是使用 "),s("em",[t._v("ES6")]),t._v(" 中的 "),s("em",[t._v("let")]),t._v(" 关键字。")]),t._v(" "),s("p",[t._v("它声明的变量有块作用域，如果将它放在循环中，那么每次循环都会有一个新的变量 "),s("em",[t._v("i")]),t._v("，这样即使有闭包也没问题，因为每个闭包保存的都是不同的 "),s("em",[t._v("i")]),t._v(" 变量，那么刚才的问题也就迎刃而解。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"真题解答"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#真题解答"}},[t._v("#")]),t._v(" 真题解答")]),t._v(" "),s("ul",[s("li",[t._v("闭包是什么？闭包的应用场景有哪些？怎么销毁闭包？")])]),t._v(" "),s("blockquote",[s("p",[t._v("闭包是一个封闭的空间，里面存储了在其他地方会引用到的该作用域的值，在 "),s("em",[t._v("JavaScript")]),t._v(" 中是通过作用域链来实现的闭包。")]),t._v(" "),s("p",[t._v("只要在函数中使用了外部的数据，就创建了闭包，这种情况下所创建的闭包，我们在编码时是不需要去关心的。")]),t._v(" "),s("p",[t._v("我们还可以通过一些手段手动创建闭包，从而让外部环境访问到函数内部的局部变量，让局部变量持续保存下来，不随着它的上下文环境一起销毁。")]),t._v(" "),s("p",[t._v("使用闭包可以解决一个全局变量污染的问题。")]),t._v(" "),s("p",[t._v("如果是自动产生的闭包，我们无需操心闭包的销毁，而如果是手动创建的闭包，可以把被引用的变量设置为 "),s("em",[t._v("null")]),t._v("，即手动清除变量，这样下次 "),s("em",[t._v("JavaScript")]),t._v(" 垃圾回收器在进行垃圾回收时，发现此变量已经没有任何引用了，就会把设为 "),s("em",[t._v("null")]),t._v(" 的量给回收了。")])]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("-"),s("em",[t._v("EOF")]),t._v("-")])])}),[],!1,null,null,null);s.default=e.exports}}]);