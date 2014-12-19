/**
 * Module dependencies.
 */
var morgan = require('morgan');

/**
 * Initialize middleware.
 *
 * This initializer sets up the HTTP middleware stack needed by the application.
 */
exports = module.exports = function() {
  
  this.use(morgan('combined'))
  
}

/**
 * DI annotations.
 */
exports['@require'] = [];
