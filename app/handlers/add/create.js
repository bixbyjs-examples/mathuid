var bodyParser = require('body-parser')
, errorHandler = require('errorhandler');


exports = module.exports = function(registry, logger) {
  
  function respond(req, res, next) {
    
    logger.debug('Resolving math service')
    registry.resolve('math.common.', 'http://schemas.example.com/api/math/v1', function(err, records) {
      if (err) { return next(err); }
      
      
      console.log(err);
      console.log(records);
      
      var baseURL = records[0]; // base URL
      if (baseURL[baseURL.length - 1] != '/') { baseURL += '/'; }
      
      res.send('add stuff');
      
    });
    
    
    //res.send('add stuff');
  }

  
  /**
   * POST /add
   *
   * CLI:
   *
   *     $ curl -X POST -H "Content-Type: application/json" --data "{\"operands\":[1,2]}" http://127.0.0.1:8080/add
   */
  return [ respond,
           errorHandler() ];
  
}

/**
 * Component annotations.
 */
exports['@require'] = [ 'sd/registry', 'logger' ];
