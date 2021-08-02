# 词法结构

编程语言的 `词法结构` 是一套基本规则，规定了如何使用这门语言编写程序。`词法结构` 是一门语言最低级的语法，规定了变量如何命名、注释的定界符，以及如何分割程序的语句，等等。

## 2.1 JavaScript 程序的文本

1.  JavaScript 区分大小写；
2. JavaScript 忽略程序记号（token）之间的空格。很大程度上，JavaScript 也忽略换行符；
3. 除了常规空格（\u0020），JavaScript 也将制表符、各种 ASCII 控制符和 Unicode 间格识别为空格。JavaScript 将换行符、回车符和回车/换行序列识别为行终止符；

## 2.2 注释

JavaScript 支持两种注释：单行注释是以 // 开头到一行末尾的内容；多行注释位于 /* 和 */ 之间，可以跨行，但不能嵌套。

```JavaScript
// 这是单行注释
/* 这也是注释 */ //而这是另一个注释
/*
 * 这是多行注释。
 * 每行开头额外的 * 字符不是必须的，只是为了美观
 */
```

## 2.3 字面量

字面量（literal）是一种直接出现在程序中的数据值。下面这些都是字面量：

```JavaScript
	12						// 数值 12
	1.2						// 数值 1.2
	"hello world"			// 字符串
	'hi'					// 另一个字符串
	true					// 布尔值
	false					// 另一个布尔值
	null					// 无对象
```

## 2.4 标识符和保留字

### 2.4.1 标识符

简单来说，标识符就是一个名字。在 JavaScript 中，标识符用于在 JavaScript 代码中命名常量、变量、属性、函数和类，以及为某些循环提供标记（label）。JavaScript 标识符必须以 **字母**、**下划线（_）**或 **美元符号（$）**开头。后续字母可以是 **字母、数字、下划线或者美元符号（数字不能作为第一个字符，以便 JavaScript 区分标识符和数值）**。

### 2.4.2 保留字

| - | - | - | - | - | - | - |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| as | const | export | get | null | target | void |
| async | continue | extends | if | of | this | while |
| await | debugger | false | import | return | throw | with |
| break | default | finally | in | set | true | yield |
| case | delete | for | instanceof | static | try | |
| catch | do | from | let | super | typeof | |
| class | else | function | new | switch | var | |

JavaScript 也保留或限制对某些关键字的使用，这些关键字当前并未被语言所用，但将来某个版本有可能会用到：

| - | - | - | - | - | - | - |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| enum | implements | interface | package | private | protected | public |

由于历史原因，某些情况下也不允许使用 **arguments** 和 **eval** 作为标识符，因此最好不要使用。

## 2.5 Unicode

JavaScript 程序时使用 Unicode 字符集编写的，因此在字符串和注释中可以使用任意 Unicode 字符。考虑到可移植性和易于编辑，建议在标志符中只使用 ASCII 字母和数字。

```JavaScript
const n = 3.14;
const sí = true;
```

### 2.5.1 Unicode 转义序列

某些计算机硬件和软件无法显示、输入或正确处理处理全部 Unicode 字符。为方便程序员编码和支持使用老技术的系统，JavaScript 定义了转义序列，从而可以仅使用 ASCII 字符来表示 Unicode 字符。这些 Unicode 转义序列以 `\u` 开头，后跟 4 位十六进制数字（包括大写或小写的字母 A~F）或包含在一对花括号内的 1~6 位十六进制数字。Unicode 转义序列可以出现在 **JavaScript 字符串字面量**、**正则表达式** 和 **标识符** 中（不能出现在语言关键字中）。

```JavaScript
let café = 1; // 使用 Unicode 字符定义一个变量
caf\u00e9 // => 1; 使用转义序列访问这个变量
caf\u{E9} // => 1; 相同转义序列的另一种形式
```

JavaScript 的早期版本只支持 4 位数字转义序列。**带花括号的版本是 ES6 新增的**，目的是更好地支持大于 16 位的 Unicode 码点，比如符号表情：

```JavaScript
console.log("\u{1F600}"); // 打印一个笑脸符号
```

Unicode 转义序列也可以出现在注释中，但因为注释会被忽略，所以注释中的转义序列会被作为 ASCII 字符处理，不会被解释为 Unicode。

### 2.5.2 Unicode 归一化

如果你在程序中使用了非 ASCII 字符，那必须知道 Unicode 允许用多种编码方式表示同一个字符。

```JavaScript
const café = 1; // 这个常量名为「caf\u{e9}」
const café = 2; // 这个常量不同：「cafe\u{301}」
café // => 1; 这个常量有一个值
café // => 2; 这个不同的常量有一个不同的值
```

Unicode 标准为所有字符定义了首选编码并规定了归一比例例程，用于把文本转换为适合比较的规范形式。JavaScript 假定自己解释源代码已经归一化，它自己不会执行任何归一化。如果你想在 JavaScript 程序中使用 Unicode 字符，应该保证使用自己的编辑器或其他工具对自己的源代码执行 Unicode 归一化，以防其中包含看起来一样但实际不同的标识符。
