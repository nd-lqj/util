/**
 * 对现有的URL的末尾添加查询字符串参数
 * @param {string} url 
 * @param {string} name 
 * @param {string} value 
 */
function addURLParam(url, name, value) {
    url += (url.indexOf('?') === -1 ? '?' : '&');
    url += encodeURIComponent(name) + '=' + encodeURIComponent(value);
    return url;
}

/**
 * 处理时间的时候前面补0快捷方式
 * 两位数字前面补0的正则表达
 * @param {int} num 
 * 使用示例：
 * const month = ('0' + (new Date().getMonth() + 1)).replace(/0(\d{2})/, '$1')
 * const date = ('0' + new Date().getDate()).replace(/0(\d{2})/, '$1')
 * const hour = ('0' + new Date().getHour()).replace(/0(\d{2})/, '$1')
 * const minute = ('0' + new Date().getMinutes()).replace(/0(\d{2})/, '$1')
 */
function fixNumberStr(num) {
    return `0${num}`.replace(/0(\d{2})/, '$1')
}

/**
 * xlsx文件解析过程中使用到的两个方法，
 * xlsx文件的行左边顺序是A,B,C,..., Z,AA,AB,AC,...,AZ,BA,BB,BC,..., ZZ,AAA,AAB,AAC...
 * 转换为下标应该是：    0,1,2,...,25,26,26,27,...,51,52,53,54,...,701,702,703,704...
 */
// A,B,C,..., Z,  AA,AB,AC,...,AZ,  BA,BB,BC,...转换成对应的数值
// 0,1,2,...,25,  26,27,28,...,51,  52,53,54,...
function colunmStrToNum(str) {
    const start = 'A'.charCodeAt();
    let num = 0;
    let curr = 0;
    // 25 Z // 26 1*26 + 0 AA // 701 26*26 + 25  ZZ // 702 (1 * 26 + 1) * 26 + 0 AAA
    for (let i = 0; i < str.length; i += 1) {
        curr = str.charCodeAt(i) - start;
        if (str.length > 1 && i < str.length - 1) {
        curr = curr + 1
        }
        num = num * 26 + curr;
    }
    return num;
}
// 0,1,2,...,25,  26,27,28,...,51,  52,53,54,...,676, 701,  702转换成对应的列名
// A,B,C,..., Z,  AA,AB,AC,...,AZ,  BA,BB,BC,..., ZA, ,ZZ,  AAA
function colunmNumToStr(num) {
    const A = 'A'.charCodeAt();
    let str = '';
    let curr = 0;
    // 25 Z // 26 1*26 + 0 // 701 26*26 + 25  ZZ // 702 (1 * 26 + 1) * 26 + 0 AAA
    for (let i = num; i > -1; i -= 1) {
        curr = i % 26;
        i = (i - curr) / 26;
        str = String.fromCharCode(A + curr) + str;
    }
    return str;
}