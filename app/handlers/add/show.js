exports = module.exports = function(logger) {
  
  function respond(req, res, next) {
    res.send('foo');;
  }

  
  /**
   * POST /add
   *
   * CLI:
   *
   *     $ curl -X POST -H "Content-Type: application/json" --data "{\"operands\":[1,2]}" http://127.0.0.1:8080/add
   */
  return [ respond ];
  
}

/**
 * Component annotations.
 */
exports['@require'] = [ 'logger' ];
