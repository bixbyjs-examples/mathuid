/**
 * Module dependencies.
 */
var IoC = require('electrolyte'),
    express = require('express'),
    bootable = require('bootable');

// Configure IoC container with required components.
IoC.use('handlers', IoC.node(__dirname + '/handlers'));
IoC.use(require('bixby-express'));
IoC.use('sd', require('bixby-sd'));
IoC.use(require('bixby-common'));

// Initialize a bootable Express app.
var app = bootable(express());
app.phase(bootable.di.initializers(__dirname + '/init'));
app.phase(bootable.di.routes(__dirname + '/routes'));
app.phase(IoC.create('sd/registry'));
app.phase(IoC.create('boot/httpserver'));
app.phase(IoC.create('sd/boot/announce'));

module.exports = app;
