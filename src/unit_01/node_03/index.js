// 双斜杠后面的这些文字都是注释
// 一定要认证阅读注释：注释是对 JavaScript 代码的解释

// 变量是一个达标值的名字
// 变量要使用 let 关键字声明
let x; // 声明一个名叫 x 的变量

// 可以使用一个等号为变量赋值
x = 0; // 现在变量 x 的值就是 0
x; // => 0：变量求职的结果就是它的值

// JavaScript 支持几种不同的值
x = 1; // 数值
x = 0.01; // 数值可以是整数或实数
x = "hello world"; // 文本字符串包含在引号中
x = 'JavaScript'; // 单引号也用于界定字符串
x = true; // 布尔值
x = false; // 另一个布尔值
x = null; // null 是一个特殊值，意识是『没有值』
x = undefined; // undefined 也是一个特殊值，与 null 类似

// 对象是 JavaScript 最重要的数据类型
// 对象是一个名/值对的集合，或者一个字符串到值的映射
let block = { // 对象包含在一对大括号中
    topic: "JavaScript", // 属性「topic」的值是「JavaScript」
    edition: 7 // 属性「edition」的值是 7
}; // 对象末尾还有一个大括号

// 使用 . 或 [] 访问对象的属性
book.topic // => "JavaScript"
book["edition"] // => 7: 另一个访问属性值的方式
book.author = "Flanagan"; // 通过赋值创建新属性
block.contents = {}; // {} 是一个没有属性的空对象

// 使用 ?.(ES2020) 条件式访问属性
book.contents?.ch01?.sect1 // => undefined: book.contents 没有 ch01 这个属性

// JavaScript 也支持值的数组（数值索引的列表）
let primes = [2, 3, 5, 7]; // 包含 4 个值的数组，[ 和 ] 是定界符
primes[0]
primes.length
primes[primes.length - 1]
primes[4] = 9; // 通过赋值添加新元素
primes[4] = 11; // 或者通过赋值修改已有元素
let empty = []; // 一个没有元素的空数组
empty.length

// 数组和对象可以保存数组和对象
let points = [
    { x: 0, y: 0 },
    { x: 1, y: 1 },
];
let data = {
    trial1: [[1, 2], [3, 4]],
    trial2: [[2, 3], [4, 5]],
}

// 操作符用于操作值（操作数）以产生新值
// 算术操作符是最简单的操作符
3 + 2
3 - 2
3 * 2
3 / 2

points[1].x - points[0].x

"3" + "2" // => 『32』

// JavaScript 定义了一些简单的算术操作符
let count = 0;
count++;
count--;
count += 2;
count *= 3;
count

// 相等和关系操作符测试两个值是否相等、不等、小于、大于，等等。它们求值为 true 或 false
let x = 2, y = 3;
x === y;
x !== y;
x < y
x <= y
x > y
x >= y
"two" === "three"
"two" > "three"
false === (x > y)

    // 逻辑操作符组合或反转布尔值
    (x === 2) && (y === 3)
        (x > 3) || (y < 3)
!(x === y)

// 函数是可以调用的有参数的 JavaScript 代码块
function plus1(x) {
    return x + 1;
}

plus1(y);

let square = function (x) {
    return x * x;
}

square(plus1(y));

const plus1 = x => x + 1;
const square = x => x * x;
plus1(y);
square(plus1(y));

// 在把函数赋值给对象的属性时，我们称它们为「方法」
// 所以 JavaScript 对象（包括数组）都有方法
let a = [];
a.push(1, 2, 3);
a.reverse();

// 我们也可以定义自己的方法。此时的 this 关键字引用的是方法所在的对象，也就是前面定义的数组 points
points.dist = function () {
    let p1 = this[0]; // 调用数组的第一个元素
    let p2 = this[1]; // this 对象的第二个元素
    let a = p2.x - p1.x;
    let b = p2.y - p1.y;
    return Math.sqrt(a * a + b * b)
}
points.dist();

// JavaScript 语句中有条件和循环，语法与 C、C++、Java 和其他一些语言是一样的
function abs(x) {
    if (x >= 0) return x;
    return -x;
}
abs(-10) === abs(10)

// 计算数组元素之和
function sum(array) {
    let sum = 0;
    for (let x of array) {
        sum += x;
    }
    return sum;
}
sum(primes);

// 计算阶乘
function factorial(n) {
    let product = 1;
    while (n > 1) {
        product *= n;
        n--;
    }
    return product;
}
factorial(4);

// 使用不同循环的另一个版本
function factorial2(n) {
    let i, product = 1;
    for (i = 2; i <= n; i += 1) {
        product *= i;
    }
    return product;
}
factorial2(5);

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    distancd() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}
// 使用 Point() 构造函数和 new 创建 Point 对象
let p = new Point(1, 1);
p.distancd();