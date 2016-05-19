/* @flow */

'use strict'

var Text = require('Text');
var View = require('View');
var StyleSheet = require('StyleSheet');
var ListView = require('ListView');
var Card = require('./components/Card');
var React = require('React');

/* views */
var RestaurantPromos = require('./views/restaurantPromos');

function setup(): React.Component {
  return RestaurantPromos;
}

module.exports = setup;
