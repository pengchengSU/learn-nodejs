const url =require('url');
var log4js = require("log4js");

log4js.configure({
    appenders: { cheese: { type: "file", filename: "cheese.log" } },
    categories: { default: { appenders: ["cheese"], level: "error" } }
  });
const logger = log4js.getLogger("cheese");
logger.level='debug'


const urlstr = 'https://www.baidu.com/s?ie=UTF-8&wd=nohup'

console.log(url.parse(urlstr))

logger.trace("Entering cheese testing");
logger.debug("Got cheese.");
logger.info("Cheese is Comté.");
logger.warn("Cheese is quite smelly.");
logger.error("Cheese is too ripe!");
logger.fatal("Cheese was breeding ground for listeria.");

logger.debug(url.resolve('https://www.baidu.com/abc/','../'))
logger.debug(url.resolve('https://www.baidu.com/abc/','/b'))
logger.debug(url.resolve('https://www.baidu.com/abc/','b'))

const urlParams = new URLSearchParams(url.parse(urlstr).search)
logger.debug(urlParams.get('ie'))