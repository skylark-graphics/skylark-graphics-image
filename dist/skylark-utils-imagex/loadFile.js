/**
 * skylark-utils-imagex - The skylark imagex utility library
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./imagex"],function(r){"use strict";return r.loadFile=function(e,n,t){var o,c=document.createElement("img");return c.onerror=function(o){return r.onerror(c,o,e,n,t)},c.onload=function(o){return r.onload(c,o,e,n,t)},"string"==typeof e?(r.fetchBlob(e,function(n){n?(e=n,o=r.createObjectURL(e)):(o=e,t&&t.crossOrigin&&(c.crossOrigin=t.crossOrigin)),c.src=o},t),c):r.isInstanceOf("Blob",e)||r.isInstanceOf("File",e)?(o=c._objectURL=r.createObjectURL(e))?(c.src=o,c):r.readFile(e,function(r){var e=r.target;e&&e.result?c.src=e.result:n&&n(r)}):void 0}});
//# sourceMappingURL=sourcemaps/loadFile.js.map
