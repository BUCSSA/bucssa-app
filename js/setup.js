/* @flow */

'use strict'

var React = require('react');
var ReactNative = require('react-native');

var {
  Text,
  View,
  StyleSheet,
  ListView,
  Navigator,
} = ReactNative;

/* components */
var TabBar = require('./components/TabBar');

/* views */
var RestaurantPromos = require('./views/restaurantPromos');
var RecentEvents = require('./views/recentEvents');

const ROUTE_STACK = [
  {id: 'recentEvents'},
  {id: 'restaurantPromos'}
];

function setup() {
  class Root extends React.Component {
    renderScene(route: Object, navigator: Object): React.Element {
      console.log(route.id);
      switch (route.id) {
        case 'recentEvents':
          return <RecentEvents />
        default:
          return <RestaurantPromos />
      }
    }

    render() {
      return(
        <Navigator
          initialRouteStack={ROUTE_STACK}
          renderScene={this.renderScene}
          navigationBar={
            <TabBar
              initTabIndex={0}
              routeStack={ROUTE_STACK}
              onTabIndex={(index) => {
                Navigator.jumpTo(ROUTE_STACK[index]);
              }}
            />}
        />
      );
    }
  }
  return Root;
}

module.exports = setup;
