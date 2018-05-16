var cv = require('opencv');

var COLOR = [0, 255, 0]; // default red
var thickness = 2; // default 1

var exports = module.exports = {};

exports.procimg = function(img, cb1, cb2) {
  cv.readImage(img, function(err, im) {
    if (err) throw err;
    if (im.width() < 1 || im.height() < 1) throw new Error('Image has no size');
    im.detectObject(cv.FACE_CASCADE, {}, function(err, faces) {
      if (err) throw err;
      for (var i = 0; i < faces.length; i++) {
        var face = faces[i];
        im.rectangle([face.x, face.y], [face.width, face.height], COLOR, thickness);
        cb2();
      }
      cb1(im.toBuffer());
    });
  });
};
