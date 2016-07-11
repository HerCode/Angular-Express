var router = require('express').Router();

router.get('/', function(request, response){
  response.send('Hello again');
});

//Do NOT forget to export router

module.exports = router;
