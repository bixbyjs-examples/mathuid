/**
 * Draw routes.
 */
exports = module.exports = function(IoC) {

  this.get('/add', IoC.create('handlers/add/show'));
  this.post('/add', IoC.create('handlers/add/calc'));
  
  this.get('/sub', IoC.create('handlers/sub/show'));
  this.post('/sub', IoC.create('handlers/sub/calc'));
  
};

/**
 * DI annotations.
 */
exports['@require'] = [ '$container' ];
