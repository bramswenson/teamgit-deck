var render_deck = require('../lib/render_deck');

exports.index = function(req, res){
  res.render('index', { title: 'Team Git' }, function(err, html) {
    render_deck(html, function() {
      res.end(html);
    });
  });
};
