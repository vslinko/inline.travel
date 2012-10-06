// GET /
exports.simple = function(req, res){
  res.render('form/simple', { q: req.query.q });
};
