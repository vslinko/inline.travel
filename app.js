var express = require('express')
  , form = require('./routes/form')
  , path = require('path')
  , app = express();


app.configure(function(){
  app.set('port', process.env.PORT || 5000);
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(require('less-middleware')({ src: path.join(__dirname, 'public') }));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.logger('dev'));
  app.use(express.errorHandler());
});

app.configure('production', function(){
  app.use(express.logger());
})


app.get('/', form.simple);


app.listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
