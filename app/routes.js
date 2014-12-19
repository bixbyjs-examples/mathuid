/**
 * Draw routes.
 */
exports = module.exports = function(IoC) {

  this.get('/add', IoC.create('handlers/add/show'));
  this.post('/add', IoC.create('handlers/add/create'));
  
};

/**
 * DI annotations.
 */
exports['@require'] = [ '$container' ];
