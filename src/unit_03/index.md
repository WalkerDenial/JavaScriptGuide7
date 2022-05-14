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