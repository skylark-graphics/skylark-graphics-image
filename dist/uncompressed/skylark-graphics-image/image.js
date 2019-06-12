define([
	"skylark-langx/skylark"
],function(skylark){

	var imagex = {};

	// The check for URL.revokeObjectURL fixes an issue with Opera 12,
	// which provides URL.createObjectURL but doesn't properly implement it:
	var urlAPI = URL || webkitURL;

	function revokeHelper (img, options) {
		if (img._objectURL && !(options && options.noRevoke)) {
		  imagex.revokeObjectURL(img._objectURL)
		  delete img._objectURL
		}
	}

	// If the callback given to this function returns a blob, it is used as image
	// source instead of the original url and overrides the file argument used in
	// the onload and onerror event callbacks:
	imagex.fetchBlob = function (url, callback, options) {
		callback();
	}

	imagex.isInstanceOf = function (type, obj) {
		// Cross-frame instanceof check
		return Object.prototype.toString.call(obj) === '[object ' + type + ']'
	}

	imagex.transform = function (img, options, callback, file, data) {
		callback(img, data)
	}

	imagex.onerror = function (img, event, file, callback, options) {
		revokeHelper(img, options)
		if (callback) {
		  callback.call(img, event)
		}
	}

	imagex.onload = function (img, event, file, callback, options) {
		revokeHelper(img, options)
		if (callback) {
		  imagex.transform(img, options, callback, file, {})
		}
	}

	imagex.createObjectURL = function (file) {
		return urlAPI ? urlAPI.createObjectURL(file) : false
	}

	imagex.revokeObjectURL = function (url) {
		return urlAPI ? urlAPI.revokeObjectURL(url) : false
	}

	// Loads a given File object via FileReader interface,
	// invokes the callback with the event object (load or error).
	// The result can be read via event.target.result:
	imagex.readFile = function (file, callback, method) {
		if (FileReader) {
		  var fileReader = new FileReader()
		  fileReader.onload = fileReader.onerror = callback
		  method = method || 'readAsDataURL'
		  if (fileReader[method]) {
		    fileReader[method](file)
		    return fileReader
		  }
		}
		return false
	}
	
	return skylark.attach("graphics.image", imagex);
});