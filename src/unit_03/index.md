# 类型、值和变量

计算机程序通过操作 **值** 或 **文本** 来工作。编程语言中这些可以表示和操作的值被称为 `类型`，而一门语言支持的类型集也是这门语言最基本的特征。

## 概述与定义

 JavaScript 类型可以分为两类：`原始类型` 和 `对象类型`。

**原始类型**

* 数值
* 文本字符串
* 布尔值
* null
* undefined
* Symbol

 在 JavaScript 中，任何不是 `数值`、`字符串`、`布尔值`、`符号`、`null`、`undefined` 的值都是 **对象**。

**对象** 是属性的集合，其中每个属性都有一个名字和一个值（原始值或其他对象）。有一个非常特殊的对象叫 **全局对象**。

## 数值

 JavaScript 的主要数值类型 `Number` 用于表示整数和近似实数。JavaScript 使用 *IEEE 754 标准* 定义的 64 位浮点格式表示数值，这意味着 JavaScript 可以表示的最大整数是 **±1.797 693 134 862 315 7 x 10<sup>308</sup>**，最小整数是 **±5 x 10<sup>-324</sup>**。

JavaScript 的这种数值格式可以让我们准确表示 **-9 007 199 254 740 992（-2<sup>53</sup>）** 到 **9 007 199 254 740 992（2<sup>53</sup>）** 之间的所有整数（含首尾值）。

当数值真正出现在 JavaScript 程序中时，就叫做 **数值字面量（numeric literal）**。

### 整数字面量

1. 十进制
2. 十六进制：以 **0x** 或 **0X** 开头，后跟一个十六进制数字字符串
3. 八进制：以 **0o** 或 **0O** 开头，后跟一个八进制数字字符串
4. 二进制：以 **0b** 或 **0B** 开头，后跟一个二进制数字字符串

### 浮点字面量

**浮点字面量** 可以包含小数点，它们对实数使用传统语法。实数值由 **整数部分**、**小数点** 和 **数值的小数部分** 组成。

**浮点字面量** 也可以使用 **指数记数法** 表示，即是数值后面可以跟字母 **e（或 E）**，跟一个可选的加号或减号，再跟一个整数指数。这种记数法表示的是实数值乘以 10 的指数次幂。

更简洁的语法形式为：

> [digits][.digits][(E|e)[(+|-)]digits]

```JavaScript
3.14
2345.6789
.333333333333
6.02e23 // 6.02 x 10²³
1.4738223E-32 // 1.4738223 x 10⁻³²
```

### JavaScript 中的算术

* 加法 +
* 减法 -
* 乘法 *
* 除法 /
* 取模 %
* 取幂 **

```JavaScript
Math.pow(2, 53) // => 9007199254740992: 2 的 53 次方
Math.round(.6) // => 1.0: 舍入到最接近的整数
Math.ceil(.6) // => 1.0: 向上舍入到一个整数
Math.floor(.6) // => 0.0: 向下舍入到一个整数
Math.abs(-5) // => 5: 绝对值
Math.max(x, y, z) // 返回最大的参数
Math.min(x, y, z) // 返回最小的参数
Math.random() // 伪随机数 x，其中 0 ≤ x < 1.0
Math.PI // π: 圆周率
Math.E // e: 自然对数的底数
Math.sqrt(3) // => 3**0.5: 3 的平方根
Math.pow(3, 1/3) // => 3**(1/3): 3 的立方根
Math.sin(α) // 三角函数
Math.cos(α) // 三角函数
Math.tan(α) // 三角函数
Math.asin(α) // 三角函数
Math.acos(α) // 三角函数
Math.atan(α) // 三角函数
Math.log(10) // => 10 的自然对数
Math.log(100)/Math.LN10 // 以 10 为底 100 的对数
Math.log(512)/Math.LN2 // 以 2 为底 512 的对数
Math.exp(3) // Math.E 的立方

// ES6 在 Math 对象上又定义了一批函数
Math.cbrt(27) // => 3: 立方根
Math.hypot(3, 4) // => 5: 所有参数平方和的平方根
Math.log10(100) // => 2: 以 10 为底的对数
Math.log2(1024) // => 10: 以 2 为底的对数
Math.log1p(x) // (1 + x) 的自然对数；精确到非常小的 x
Math.expm1(x) // Math.exp(x) - 1; Math.log1p() 的逆运算
Math.sign(x) // 对 <、== 或 > 0 的参数返回 -1、0、1
Math.imul(2, 3) // => 6: 优化的 32 位整数乘法
Math.clz32(0xf) // => 28: 32 位整数中前导 0 的位数
Math.trunc(3.9) // => 3: 剪掉分数部分得到整数
Math.fround(x) // 舍入到最接近的 32 位浮点数
Math.sinh(x) // 双曲线正弦，还有 Math.cosh() 和 Math.tanh()
Math.asing(x) // 双曲线反正弦，还有 Math.acosh() 和 Math.atanh()
```

**结果为 NaN(Not a Number) 的特殊情况：**

* 0/0
* 无穷除无穷
* 负数平方根
* 用无法转换为数值的非数值作为算术操作符的操作数

```JavaScript
Infinity 						// 因为太大而无法表示的正数
Number.POSITIVE_INFINITY 		// 同上
1/0 							// => Infinity
Number.MAX_VALUE * 2 			// => Infinity; 溢出
-Infinity 						// 因为太小而无法表示的负数
Number.NEGATIVE_INFINITY 		// 同上
-1/0 							// -Infinity
-Number.MAX_VALUE * 2 			// -Infinity

NaN 							// 非数值
Number.NaN 						// 同上，写法不同
0/0 							// => NaN
Infinity / Infinity 			// => NaN

Number.MIN_VALUE / 2 			// => 0: 下溢出
-Number.MIN_VALUE / 2 			// => -0: 负 0
-1/Infinity 					// => -0: 负 0
-0

// ES6 定义了下列 Number 属性
Number.parseInt() 				// 同全局 parseInt() 函数
Number.parseFloat() 			// 同全局 parseFloat() 函数
Number.isNaN(x) 				// 判断 x 是不是 NaN
Number.isFinity(x) 				// 判断 x 是数值还是无穷 
Number.isInteger(x) 			// 判断 x 是不是整数
Number.isSafeInteger(x) 		// 
Number.MIN_SAFE_INTEGER 		// => -(2**53 - 1)
Number.MAX_SAFE_INTEGER 		// => 2**53 - 1
Number.EPSILON 					// => 2**-52: 数值与数值之间最小的差
```

**注意**：非数值在 JavaScript 中有一个不同寻常的特性：它与任何值比较都不相等，也不等于自己。这意味着不能通过 **x === NaN** 来确定某个变量 x 的值是 NaN。相反，此时必须写成 **x != x** 或 **Number.isNaN(x)**。这两个表达式 **当且仅当** x 与全局常量 NaN 具有相同值时才返回 true。

### 二进制浮点数与舍入错误

实数有无限多个，但 JavaScript 的浮点格式只能表示其中有限个（确切地说，是 18 437 736 874 454 810 627 个）。这意味着在通过 JavaScript 操作实数时，数值表示的经常是实际数值的近似值。

### 通过 BigInt 表示任意精度整数

BigInt 主要是为了表示 64 位整数。但是 BigInt 的实现并不适合加密，因为它们没有考虑防止时序攻击。

BigInt 字面量写作一串数字后跟 **小写字母 n**。默认情况下，基数是 **10**，但是可以通过前缀 `0b`、`0o`、`0x` 来表示二进制、八进制和十六进制 BigInt。

```JavaScript
1234n 				// 一个不太大的 BigInt 字面量
0b111111n 			// 二进制的 BigInt
0o7777n 			// 八进制的 BigInt
0x8000000000000000n // => 2n**63n: 一个 64 位整数
```

可以用 BigInt() 函数把常规 JavaScript 数值或字符串转换为 BigInt 值。

```JavaScript
BigInt(Number.MAX_SAFE_INTEGER) 	// => 9007199254740991n
let string = "1" + "0".repeat(100); // 1 后面跟 100 个零
BigInt(string) // => 10n**100n
```

BigInt 值的算术运算与常规 JavaScript 数值的算术运算类似，只不过除法会丢弃余数并且会向下（向零）舍入：

```JavaScript
1000n + 2000n // => 3000n
3000n - 2000n // => 1000n
2000n * 3000n // => 6000000n
3000n / 997n // => 3n: 商是 3
3000n % 997n // => 9n: 余数是 9
(2n ** 131071n) - 1n // 有 39457 位数字的梅森素数
```

> 梅森数（Mersenne number）又称麦森数，是指形如 **2<sup>p</sup> - 1** 的正整数，其中指数 p 是素数，常记为 Mp 。若其是素数，则称为 `梅森素数`。

### 日期和时间

 JavaScript 的 Date 是对象，但也有数值表示形式，即自 1970 年 1 月 1 日起至今的毫秒数，也叫时间戳。

```JavaScript
let timestamp = Date.new();
let now = new Date();
let ms = now.getTime();
let iso = now.toISOString();
```

## 文本

JavaScript 中表示文本的类型是 String，即字符串。字符串是 **16 位值** 的 **不可修改** 的 **有序序列**，其中每个值都表示一个 Unicode 字符。字符串的 length 属性是它包含的 **16 位值** 的个数。

JavaScript 的字符串操作方法一般操作的是 16 位值，而不是字符。换句话说，它们不会特殊对待代理对，不对字符串进行归一化，甚至不保证字符串是格式正确的 UTF-16。

### 字符串字面量

要在 JavaScript 程序中包含字符串，可以把字符串放到一对匹配的 **单引号**、**双引号**、**反引号** 中。

### 字符串字面量中的转义序列

反斜杠在 JavaScript 字符串中有特殊的作用：它与后面的字符组合在一起，可以再字符串中表示一个无法直接表示的字符。例如，**\n** 是一个表示换行符的转义序列。

**JavaScript 转义序列**

| 序列 | 表示的字符 |
| :---: | :--- |
| \0 | NUL 字符（\u0000） |
| \b | 退格符（\u0008） |
| \t | 水平制表符（\u0009） |
| \n | 换行符（\u000A） |
| \v | 垂直制表符（\u000B） |
| \f | 进纸符（\u000C） |
| \r | 回车符（\u000D） |
| \" | 双引号（\u0022） |
| \' | 单引号或撇号（\u0027） |
| \\ | 反斜杠（\u005C） |
| \xnn | 由 2 位十六进制数字 nn 指定的 Unicode 字符 |
| \unnnn | 由 4 位 16 进制数字 nnnn 指定的 Unicode 字符 |
| \u{n} | 由码点 n 指定的 Unicode 字符，其中 n 是介于 0 和 10FFFF 之间的 1 到 6 位十六进制数字（ES6） |

如果字符 `\` 位于任何上表之外的字符前面，则这个反斜杠会被忽略。

ES5 允许把反斜杠放在换行符前面从而将一个字符串字面量拆成多行。

### 使用字符串

 ```JavaScript
 let s = "Hello, world"; // 先声明一个字符串
 
 // 取得字符串的一部分
 s.substring(1, 4) 		// => "ell": 第 2~4 个字符
 s.slice(1, 4) 			// => "ell": 第 2~4 个字符
 s.slice(-3) 			// => "rld": 最后 3 个字符
 s.split(",") 			// => ["Hello", "World"]: 从定界符处拆开
 
 // 搜索字符串
 s.indexOf("l") 		// => 2: 第一个字母 l 的位置
 s.indexOf("l", 3) 		// => 3: 位置 3 后面第一个 l 的位置
 s.indexOf("zz") 		// => -1: s 并不包含子串 zz
 s.lastIndexOf("l") 	// => 10: 最后一个字母 l 的位置
 
 // ES6 及之后版本中的布尔值搜索函数
 s.startsWith("Hell") 	// => true: 字符串是以这些字符开头的
 s.endsWith("!") 		// => false: s 不是以 ! 结尾的
 s.includes("or") 		// => true: s 包含子串 or
 
 // 创建字符串的修改版本
 s.replace("llo", "ya") // => "Heya, world"
 s.toLowerCase() 		// => "hello, world"
 s.toUpperCase() 		// => "HELLO, WORLD"
 s.normalize() 			// => Unicode NFC 归一化: ES6 新增
 s.normalize("NFD") 	// => NFD 归一化。还有「NFKC」和「NFKD」
 
 // 访问字符串中的个别（16 位值）字符
 s.charAt(0) 			// => "H": 第一个字符
 s.charAt(s.length - 1) // => "d": 最后一个字符
 s.charCodeAt(0) 		// => 72: 指定位置的 16 位数值
 s.codePointAt(0) 		// => 72: ES6，适用于码点大于 16 位的情形
 
 // ES2017 新增的字符串填充函数
 "x".padStart(3) 		// => "  x": 在左侧添加空格，让字符串长度变成 3
 "x".padEnd(3) 			// => "x  ": 在右侧添加空格，让字符串长度变成 3
 "x".padStart(3, "*") 	// => "**x": 在左侧添加 *，让字符串长度变成 3
 "x".padEnd(3, "-") 	// => "x--": 在右侧添加 -，让字符串长度变成 3
 
 // 删除空格函数。trim() 是 ES5 就有的，其他是 ES2019 增加的
 " test ".trim() // => "test": 删除开头和末尾的空格
 " test ".trimStart() // => "test ": 删除开头的空格
 " test ".trimEnd() // => " test": 删除结尾的空格
 
 // 未分类字符串方法
 s.concat("!") // => "Hello, World!": 可以用 + 操作符代替
 "<>".repeat(5) // => "<><><><><>": 拼接 n 次。ES6 新增
 ```

JavaScript 中的字符串是 **不可修改** 的。像 replace() 等方法都返回新字符串，它们并不会修改调用它们的字符串。

### 模板字面量

```JavaScript
let name = "Bill";
let greeting = `Hello ${ name }.`; // => "Hello Bill."
```

位于 **${ 和对应的 }** 之间的内容都被当做 JavaScript 表达式来解释。而位于这对花括号之外的则是常规字符串字面量。括号内的表达式会被求值，然后转换为字符串并插入模板中，替换美元字符、花括号以及花括号中的所有内容。

```JavaScript
let errorMessage = `\
\u2718 Test failure at ${filename}:${linenumber}:
${exception.message}
Stack trace:
${exception.stack}
`
```

模板字面量有一个强大但不太常用的特性：如果在开头的反引号前面有一个函数名（标签），那么模板字面量中的文本和表达式的值将作为参数传给这个函数。**标签化模板字面量（tagged template literal）的值就是这个函数的返回值**。这个特性可以用于先对某些值进行 HTML 或 SQL 转义，然后再把它们插入文本。

ES6 提供了一个内置的标签函数：String.raw()。这个函数返回反引号中未经处理的文本，即不会处理任何反斜杠转义。

```JavaScript
`\n`.length // => 1: 字符串中只包含一个换行符
String.raw`\n`.length // => 2: 一个反斜杠字符和一个字母 n
```

**注意**：即使标签化模板字面量的标签部分是函数，在调用这个函数时也没有圆括号。在这种非常特别的情况下，反引号字符充当开头和末尾的圆括号。

### 模式匹配

 JavaScript 定义了一种被称为正则表达式（或 RegExp）的数据类型，用于描述和匹配文本中的字符串模式。

```JavaScript
/^HTML/;			// 匹配字符串开头的字母 HTML
/[1-9][0-9]*/;		// 匹配非 0 数字，后面跟着任意数字
/\bjavascript\b/i;	// 匹配「javascript」这个词，不区分大小写

let text = "testing: 1, 2, 3";	//示例文本
let pattern = /\d+/g;			// 匹配一个或多个数字
pattern.test(text);				// => true: 存在匹配项目
text.search(pattern);			// => 9: 第一个匹配项的位置
text.match(pattern);			// ["1", "2", "3"]: 所有匹配项的数组
text.replace(pattern, "#");		// => "testing: #, #, #"
text.split(/\D+/);				// => ["", "1", "2", "3"]: 基于非数字拆分
```

## 布尔值

布尔值表示真或假、开或关、是或否。这个类型只有两个值：true 和 false；

假性值：`undefined`、`null`、`0`、`-0`、`NaN`、`""`、`false`。

布尔值有一个 **toString()** 方法，可用于将自己转换为字符串「"true"」或「"false"」。

## null 与 undefined

`null` 是一个语言关键字，通常用于表示某个值不存在。对 `null` 使用 typeof 操作符返回字符串 **object**，表明可以将 `null` 看成一种特殊对象，表示「没有对象」。
