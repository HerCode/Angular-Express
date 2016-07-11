var express = require('express');
var bodyParser= require('./routes/bodyParser');
var index= require('./routes/index');
var snacks = require('./routes/snacks');

//Configs
var app = express();

app.use(bodyParser.json());
//Provides the ability for us to send JSON from our client with 'request.body'

//Routers
app.use('/', index);
app.use('/snacks', snacks);

/*If I have an app.get('/', function(req, res){

}); but if you have an app.use('/', ___); will drop into your index and find a match*/



app.get('/', function(request, response){
  response.send('Hello');

});
var server = app.listen(process.env.PORT || 3000, function(){
  var port = server.address().port;
  console.log('Listening on port', port);
});
