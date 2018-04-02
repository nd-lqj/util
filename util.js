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