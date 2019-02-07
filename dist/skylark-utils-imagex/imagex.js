/**
 * skylark-utils-imagex - The skylark imagex utility library
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/skylark"],function(e){var n={},t=URL||webkitURL;function r(e,t){!e._objectURL||t&&t.noRevoke||(n.revokeObjectURL(e._objectURL),delete e._objectURL)}return n.fetchBlob=function(e,n,t){n()},n.isInstanceOf=function(e,n){return Object.prototype.toString.call(n)==="[object "+e+"]"},n.transform=function(e,n,t,r,o){t(e,o)},n.onerror=function(e,n,t,o,c){r(e,c),o&&o.call(e,n)},n.onload=function(e,t,o,c,a){r(e,a),c&&n.transform(e,a,c,o,{})},n.createObjectURL=function(e){return!!t&&t.createObjectURL(e)},n.revokeObjectURL=function(e){return!!t&&t.revokeObjectURL(e)},n.readFile=function(e,n,t){if(FileReader){var r=new FileReader;if(r.onload=r.onerror=n,r[t=t||"readAsDataURL"])return r[t](e),r}return!1},e.imagex=n});
//# sourceMappingURL=sourcemaps/imagex.js.map
