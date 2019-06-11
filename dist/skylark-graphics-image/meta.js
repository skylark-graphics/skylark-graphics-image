/**
 * skylark-graphics-image - The skylark imagex utility library
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["./imagex"],function(e){"use strict";var t={},a="undefined"!=typeof Blob&&(Blob.prototype.slice||Blob.prototype.webkitSlice||Blob.prototype.mozSlice);e.blobSlice=a&&function(){return(this.slice||this.webkitSlice||this.mozSlice).apply(this,arguments)},t.metaDataParsers={jpeg:{65505:[],65517:[]}},t.parseMetaData=function(a,i,r,n){r=r||{},n=n||{};var o=this,l=r.maxMetaDataSize||262144;!!("undefined"!=typeof DataView&&a&&a.size>=12&&"image/jpeg"===a.type&&e.blobSlice)&&e.readFile(e.blobSlice.call(a,0,l),function(e){if(e.target.error)return console.log(e.target.error),void i(n);var a,l,s,c,f=e.target.result,g=new DataView(f),p=2,b=g.byteLength-4,m=p;if(65496===g.getUint16(0)){for(;p<b&&((a=g.getUint16(p))>=65504&&a<=65519||65534===a);){if(p+(l=g.getUint16(p+2)+2)>g.byteLength){console.log("Invalid meta data: Invalid segment size.");break}if(s=t.metaDataParsers.jpeg[a])for(c=0;c<s.length;c+=1)s[c].call(o,g,p,l,n,r);m=p+=l}!r.disableImageHead&&m>6&&(f.slice?n.imageHead=f.slice(0,m):n.imageHead=new Uint8Array(f).subarray(0,m))}else console.log("Invalid JPEG file: Missing JPEG marker.");i(n)},"readAsArrayBuffer")||i(n)},t.hasMetaOption=function(e){return e&&e.meta};var i=e.transform;return e.transform=function(a,r,n,o,l){t.hasMetaOption(r)?t.parseMetaData(o,function(t){i.call(e,a,r,n,o,t)},r,l):i.apply(e,arguments)},e.meta=t});
//# sourceMappingURL=sourcemaps/meta.js.map
