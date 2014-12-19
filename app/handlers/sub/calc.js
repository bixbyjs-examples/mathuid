/**
 * Module dependencies.
 */
var request = require('request')
  , bodyParser = require('body-parser')
  , errorHandler = require('errorhandler');


exports = module.exports = function(registry, logger) {
  
  function add(req, res, next) {
    registry.resolve('math.common.', 'http://schemas.example.com/api/math/v1', function(err, records) {
      if (err) { return next(err); }
      
      var baseURL = records[0];
      if (baseURL[baseURL.length - 1] != '/') { baseURL += '/'; }
      
      logger.debug('Sending sub request to ' + baseURL);
      request.post({
        url: baseURL + 'sub',
        body: { operands: [ parseFloat(req.body['1']), parseFloat(req.body['2']) ] },
        json: true,
        timeout: 60000
      }, function(err, resp, body) {
        if (err) { return next(err); }
        res.locals.operands = body.operands;
        res.locals.result = body.result;
        next();
      });
    });
  }
  
  function respond(req, res, next) {
    res.render('sub-result');
  }

  
  /**
   * POST /add
   *
   * CLI:
   *
   *     $ curl -X POST -H "Content-Type: application/json" --data "{\"operands\":[1,2]}" http://127.0.0.1:8080/add
   */
  return [ bodyParser.urlencoded(),
           add,
           respond,
           errorHandler() ];
  
}

/**
 * Component annotations.
 */
exports['@require'] = [ 'sd/registry', 'logger' ];
