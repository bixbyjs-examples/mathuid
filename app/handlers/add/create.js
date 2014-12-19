var request = require('request')
  , bodyParser = require('body-parser')
  , errorHandler = require('errorhandler');


exports = module.exports = function(registry, logger) {
  
  function add(req, res, next) {
    logger.debug('Resolving math service')
    registry.resolve('math.common.', 'http://schemas.example.com/api/math/v1', function(err, records) {
      if (err) { return next(err); }
      
      var baseURL = records[0]; // base URL
      if (baseURL[baseURL.length - 1] != '/') { baseURL += '/'; }
      
      request.post({
        url: baseURL + 'add',
        body: { operands: [ 1, 4 ] },
        json: true,
        timeout: 60000
      }, function(err, resp, body) {
        if (err) { return next(err); }
        res.locals.result = body.result;
        next();
      });
    });
  }
  
  function respond(req, res, next) {
    res.send('Result: ' + res.locals.result);
  }

  
  /**
   * POST /add
   *
   * CLI:
   *
   *     $ curl -X POST -H "Content-Type: application/json" --data "{\"operands\":[1,2]}" http://127.0.0.1:8080/add
   */
  return [ add,
           respond,
           errorHandler() ];
  
}

/**
 * Component annotations.
 */
exports['@require'] = [ 'sd/registry', 'logger' ];
