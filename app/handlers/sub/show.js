exports = module.exports = function(logger) {
  
  function respond(req, res, next) {
    res.render('sub');
  }

  
  /**
   * GET /sub
   *
   * CLI:
   *
   *     $ curl http://127.0.0.1:8080/sub
   */
  return [ respond ];
  
}

/**
 * Component annotations.
 */
exports['@require'] = [ 'logger' ];
