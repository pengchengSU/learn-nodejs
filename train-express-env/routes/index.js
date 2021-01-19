var express = require('express');
var log4js = require('log4js')
var router = express.Router();

log4js.configure({
  appenders: { cheese: { type: "file", filename: "cheese.log" } },
  categories: { default: { appenders: ["cheese"], level: "error" } }
});
const logger = log4js.getLogger("cheese");
logger.level='debug'

// module.exports=logger

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/data', function(req, res, next) {
  logger.debug(req.body)
  res.send('ok')
});

module.exports = router;
