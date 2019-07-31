var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', function (req, res, next) {
  const query = req.params.query;

  // do the logic on the query here to see if ping and pong are present in equal number

  axios.get("/")
    .then((response) => {
      res.json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
});

module.exports = router;
