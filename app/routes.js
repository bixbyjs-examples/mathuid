/**
 * Draw routes.
 */
exports = module.exports = function(IoC) {

  this.get('/add', IoC.create('handlers/add/show'));
  this.post('/add', IoC.create('handlers/add/create'));
  
  this.get('/sub', IoC.create('handlers/sub/show'));
  this.post('/sub', IoC.create('handlers/sub/create'));
  
};

/**
 * DI annotations.
 */
exports['@require'] = [ '$container' ];
