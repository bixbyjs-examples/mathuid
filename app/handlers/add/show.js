exports = module.exports = function() {
  
  function respond(req, res, next) {
    res.render('add');
  }

  
  /**
   * GET /add
   *
   * CLI:
   *
   *     $ curl http://127.0.0.1:8080/add
   */
  return [ respond ];
  
}

/**
 * Component annotations.
 */
exports['@require'] = [];
