/**
 * jhss.params.js
 * @author Vivian
 * @version 1.0.0
 * copyright 2014-2015, gandxiaowei@gmail.com all rights reserved.
 */
var appInfo = (function () {
    var ua = navigator.userAgent.toLowerCase();
    var info = ua.match(/jhss{1}(\/.+)+/g);
    var result = {};
    if (!!info) {
        var infos = info[0].split('/');
        result = {
            platform: infos[1] || 'unknown',
            app: infos[2] || 'unknown',
            version: infos[3] || 'unknown',
            ak: infos[4] || 'unknown',
            userid: infos[5] || '-1',
            sessionid: infos[6] || '-1'
        };
    }
    return result;
});

function getQueryString(key) {
    var reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r !== null) {
        return unescape(r[2]);
    }
    return null;
}