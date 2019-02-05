/**
 * skylark-utils-imagex - The skylark imagex utility library
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/skylark"],function(e){var t={},n=$.createObjectURL&&$||$.URL&&URL.revokeObjectURL&&URL||$.webkitURL&&webkitURL;function r(e,n){!e._objectURL||n&&n.noRevoke||(t.revokeObjectURL(e._objectURL),delete e._objectURL)}return t.fetchBlob=function(e,t,n){t()},t.isInstanceOf=function(e,t){return Object.prototype.toString.call(t)==="[object "+e+"]"},t.transform=function(e,t,n,r,o){n(e,o)},t.onerror=function(e,t,n,o,c){r(e,c),o&&o.call(e,t)},t.onload=function(e,n,o,c,a){r(e,a),c&&t.transform(e,a,c,o,{})},t.createObjectURL=function(e){return!!n&&n.createObjectURL(e)},t.revokeObjectURL=function(e){return!!n&&n.revokeObjectURL(e)},t.readFile=function(e,t,n){if(FileReader){var r=new FileReader;if(r.onload=r.onerror=t,r[n=n||"readAsDataURL"])return r[n](e),r}return!1},e.imagex=t});
//# sourceMappingURL=sourcemaps/imagex.js.map
