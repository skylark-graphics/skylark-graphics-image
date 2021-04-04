define([
  "./image"
], function(imagex) {

  'use strict'

  // Loads an image for a given File object.
  // Invokes the callback with an img or optional canvas
  // element (if supported by the browser) as parameter:

  function loadFile (file, callback, options) {
    var img = document.createElement('img')
    var url
    img.onerror = function (event) {
      return imagex.onerror(img, event, file, callback, options)
    }
    img.onload = function (event) {
      return imagex.onload(img, event, file, callback, options)
    }
    if (typeof file === 'string') {
      imagex.fetchBlob(
        file,
        function (blob) {
          if (blob) {
            file = blob
            url = imagex.createObjectURL(file)
          } else {
            url = file
            if (options && options.crossOrigin) {
              img.crossOrigin = options.crossOrigin
            }
          }
          img.src = url
        },
        options
      )
      return img
    } else if (
      imagex.isInstanceOf('Blob', file) ||
      // Files are also Blob instances, but some browsers
      // (Firefox 3.6) support the File API but not Blobs:
      imagex.isInstanceOf('File', file)
    ) {
      url = img._objectURL = imagex.createObjectURL(file)
      if (url) {
        img.src = url
        return img
      }
      return imagex.readFile(file, function (e) {
        var target = e.target
        if (target && target.result) {
          img.src = target.result
        } else if (callback) {
          callback(e)
        }
      })
    }
  }


  return imagex.loadFile = loadFile;

});