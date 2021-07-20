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