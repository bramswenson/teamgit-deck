var fs = require('fs');

var render_deck = module.exports = function(html, callback) {
  var filename = __dirname + '/../public/index.html';

  fs.writeFile(filename, html, function(err) {
    if (err) {
      console.log('error writing deck to static file: ' + filename);
      console.log(err);
      return;
    } else {
      console.log('deck written to static file: ' + filename);
      return callback();
    }
  });
}
