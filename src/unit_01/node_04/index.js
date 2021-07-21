// 这个 Node 程序从标准输入中读取文本，计算文本中每个字母出现的频率，然后按使用频率降序显示一个柱形图，运行这个程序需要 Node 12 或更高版本
// 在一个 Unix 类型的环境中，可以像下面这样调用它：node charfreq.js < corpus.txt

// 这个类扩展了 Map，以便 get() 方法在 key 不在映射时返回指定的值，而不是 null
class DefaultMap extends Map {
    constructor(defaultValue) {
        super();
        this.defaultValue = defaultValue;
    }

    get(key) {
        if (this.has(key)) return super.get(key);
        return this.defaultValue;
    }
}

// 这个类计算并显示字母的频率柱形图
class Histogram {
    constructor() {
        this.letterCounts = new DefaultMap(0);
        this.totalLetters = 0;
    }

    // 这个函数用文本中的字母更新柱形图
    add(text) {
        // 移除文本中的空白，然后将字母转换为大写
        text = text.replace(/\s/g, "").toUpperCase();
        // 接着循环文本中的字符
        for (let character of text) {
            let count = this.letterCounts.get(character); // 取得之前的数量
            this.letterCounts.set(character, count + 1); // 递增
            this.totalLetters++;
        }
    }

    // 将柱形图转换为字符串并显示 ASCII 图形
    toString() {
        // 把映射转换为一个 [key, value] 数组的数组
        let entries = [...this.letterCounts];

        // 按数量和字母表对数组排序
        entries.sort((a, b) => {
            if (a[1] === b[1]) {
                return a[0] < b[0] ? -1 : 1;
            }
            return b[1] - a[1];
        });

        // 把数量转换为百分比
        for (let entry of entries) {
            entry[1] = entry[1] / this.totalLetters * 100;
        }

        // 删除小于 1% 的条目
        entries = entries.filter(entry => entry[1] >= 1);

        // 试着把每个条目转换为一行文本
        let lines = entries.map(([l, n]) => `${l}: ${"#".repeat(Math.round(n))} ${n.toFixed(2)}%`)

        // 返回把所有行拼接起来的结果，以换行符分割
        return lines.join("\n");
    }

}

// 这个 async（返回期约的）函数创建一个 Histogram 对象
// 从标准输入异步读取文本块，然后把这些块添加到柱形图
// 在读取到流末尾后，返回柱形图
async function histogramFromStdin() {
    process.stdin.setEncoding("utf-8"); // 读取 Unicode 字符串，而非字节
    let histogram = new Histogram();
    for await(let chunk of process.stdin) {
        histogram.add(chunk);
    }
    return histogram;
}

// 最后这行代码是这个程序的主体
// 它基于标准输入创建一个 Histogram 对象，然后打印柱形图
histogramFromStdin().then(histogram => {console.log(histogram.toString())});