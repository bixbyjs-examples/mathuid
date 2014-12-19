/**
 * Module dependencies.
 */
var express = require('express');

/**
 * Initialize views.
 *
 * This initializer sets up the rendering engines needed by the application.
 */
exports = module.exports = function() {
  
  this.set('views', __dirname + '/../views');
  this.set('view engine', 'ejs');
  
}

/**
 * DI annotations.
 */
exports['@require'] = [];
