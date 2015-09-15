/**
 * jquery.jhss.params.js
 * @author gexiaowei<gandxiaowei@gmail.com>
 * @version 0.1.0
 * copyright 2014-2015, gandxiaowei@gmail.com. all rights reserved.
 */

function getQueryString(a){var b=new RegExp("(^|&)"+a+"=([^&]*)(&|$)","i"),c=window.location.search.substr(1).match(b);return null!==c?unescape(c[2]):null}var appInfo=function(){var a=navigator.userAgent.toLowerCase(),b=a.match(/jhss{1}(\/.+)+/g),c={};if(b){var d=b[0].split("/");c={platform:d[1]||"unknown",app:d[2]||"unknown",version:d[3]||"unknown",ak:d[4]||"unknown",userid:d[5]||"-1",sessionid:d[6]||"-1"}}return c};
//# sourceMappingURL=jhss.params.js.map