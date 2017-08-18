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