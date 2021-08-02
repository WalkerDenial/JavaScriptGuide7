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
const sÍ = true;
```
