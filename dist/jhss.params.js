/**
 * jquery.jhss.params.js
 * @author gexiaowei<gandxiaowei@gmail.com>
 * @version 0.2.0
 * copyright 2014-2015, gandxiaowei@gmail.com. all rights reserved.
 */

function getQueryString(a){var b=new RegExp("(^|&)"+a+"=([^&]*)(&|$)","i"),c=window.location.search.substr(1).match(b);return null!==c?unescape(c[2]):null}var appInfo=function(){var a=navigator.userAgent.toLowerCase(),b=a.match(/jhss{1}(\/.+)+/g),c={},d={platform:"unknown",app:"unknown",version:"unknown",ak:"unknown",userid:"-1",sessionid:"-1"};if(b){var e=b[0].split("/");c={platform:e[1]||"unknown",app:e[2]||"unknown",version:e[3]||"unknown",ak:e[4]||"unknown",userid:e[5]||"-1",sessionid:e[6]||"-1"}}return{get:function(a){return a?{platform:c.platform||d.platform,app:c.app||d.app,version:c.version||d.version,ak:c.ak||d.ak,userid:c.userid||d.userid,sessionid:c.sessionid||d.sessionid}:c}}}();
//# sourceMappingURL=jhss.params.js.map