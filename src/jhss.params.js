/**
 * jhss.params.js
 * @author Vivian
 * @version 0.2.0
 * copyright 2014-2015, gandxiaowei@gmail.com all rights reserved.
 */
var appInfo = (function () {
    var ua = navigator.userAgent.toLowerCase();
    var info = ua.match(/jhss{1}(\/.+)+/g);
    var result = {};
    var defaultResult = {
        platform: 'unknown',
        app: 'unknown',
        version: 'unknown',
        ak: 'unknown',
        userid: '-1',
        sessionid: '-1'
    };
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

    return {
        get: function (withDefault) {
            if (withDefault) {
                return {
                    platform: result.platform || defaultResult.platform,
                    app: result.app || defaultResult.app,
                    version: result.version || defaultResult.version,
                    ak: result.ak || defaultResult.ak,
                    userid: result.userid || defaultResult.userid,
                    sessionid: result.sessionid || defaultResult.sessionid
                };
            }
            return result;
        }
    };
})();

function getQueryString(key) {
    var reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r !== null) {
        return unescape(r[2]);
    }
    return null;
}