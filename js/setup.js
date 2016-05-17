/* @flow */

'use strict'

var Text = require('Text');
var View = require('View');
var StyleSheet = require('StyleSheet');
var ListView = require('ListView');
var Card = require('./components/Card');
var React = require('React');
var styles = require('./styles');

/* views */
var restaurantPromos = require('./views/restuarantPromos');

function setup(): React.Component {
  return restaurantPromos;
}

module.exports = setup;
