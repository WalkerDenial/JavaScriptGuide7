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