/* @flow */

'use strict'

var React = require('react');

import {
  Text,
  View,
  StyleSheet,
  ListView,
  Navigator,
} from 'react-native';

var ScrollableTabView = require('react-native-scrollable-tab-view');

/* views */
import {
  RestaurantPromos
} from './views/restaurantPromos';

import {
  RecentEvents
} from './views/recentEvents.js';


function setup() {
  class Root extends React.Component {
    render() {
			return (
			<ScrollableTabView
        style={{
          paddingTop: 10,
        }}
      >
        <RestaurantPromos tabLabel='餐厅优惠' />
        <RecentEvents tabLabel='近期活动' />
      </ScrollableTabView>
			);
    }
  }
  return Root;

}

module.exports = setup;
