var router =require('express').Router();
var sweet = ['Skittles', 'Twix', '100 Grand', 'Baby Ruth'];
var salty = ['Pringles', 'Bugles', 'Gardetto', 'Snyders Pretzel'];

router.get('/', function(request, response){
  response.send('Please use /salty, /sweet, or /all. Good day!');
});
router.get('/salty', function(request, response){
response.send(salty);
});

router.get('/sweet', function(request, response){
  response.send(sweet);
});

router.get('/all', function(request, response){
  var total = sweet.concat(salt);
  response.send(total);
});

router.post('/add', function(request, respnse){
  console.log(request.body);
  respond.send('OK');

  var snack = request.body;

  if(snack.type === 'Sweet'){
    sweet.push(snack.snackTime);
  } else if(snack.type === 'Salty'){
    salty.push(snack.snackTime);
    response.sendStatus(200);
  }else{
    response.sendStatus(500);
  }

});

  if(snack.type === 'Sweet'){

  } else if(snack.type === 'Salty'){
  } else {
    response.sendStatus(200);
    else {
      response.sendStatus(500);
    }
    /*200 - OK
      300 - Possible Rediret (304) Still OK
      400 - Not OK (404 not found or 401 no access)
      500 - Server Error these numbers are code Developers can use to see what is going on*/
  });

}});

module.exports = router;
