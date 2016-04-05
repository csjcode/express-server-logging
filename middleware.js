var fs = require('fs');
var moment = require('moment');

var middleware = {
  requireAuthentication: function(req,res,next) {
    console.log('private route hit!');
    next();
  },
  logger: function(req,res,next) {

    var d = new Date().toString();
    var log_date_YMD = moment().format('YYYYMMDD');
    var log_filename = './logs/access-' + log_date_YMD + '.log';
    var serverLogMsg = 'Request: ' + d + ' ' + req.method + ' ' + req.originalUrl;

    console.log(serverLogMsg); //Write log to console

    fs.appendFile(log_filename, serverLogMsg + '\r\n'); //Write log to file

    next();
  }
};

module.exports = middleware;
