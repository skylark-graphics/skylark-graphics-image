/**
 * skylark-utils-imagex - The skylark imagex utility library
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(r,e){var n=e.define,i=e.require,t="function"==typeof n&&n.amd,o=!t&&"undefined"!=typeof exports;if(!t&&!n){var s={};n=e.define=function(r,e,n){"function"==typeof n?(s[r]={factory:n,deps:e.map(function(e){return function(r,e){if("."!==r[0])return r;var n=e.split("/"),i=r.split("/");n.pop();for(var t=0;t<i.length;t++)"."!=i[t]&&(".."==i[t]?n.pop():n.push(i[t]));return n.join("/")}(e,r)}),exports:null},i(r)):s[r]=n},i=e.require=function(r){if(!s.hasOwnProperty(r))throw new Error("Module "+r+" has not been defined");var n=s[r];if(!n.exports){var t=[];n.deps.forEach(function(r){t.push(i(r))}),n.exports=n.factory.apply(e,t)}return n.exports}}if(!n)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(r,e){r("skylark-utils-imagex/images",["skylark-utils-dom/images"],function(r){return r}),r("skylark-utils-imagex/main",["./images"],function(r){return r}),r("skylark-utils-imagex",["skylark-utils-imagex/main"],function(r){return r})}(n),!t){var u=i("skylark-langx/skylark");o?module.exports=u:e.skylarkjs=u}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-utils-imagex.js.map
