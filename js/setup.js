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

/* views */
var RestaurantPromos = require('./views/restaurantPromos');
var PromoDetails = require('./views/promoDetails');
var RecentEvents = require('./views/recentEvents');

const ROUTE_STACK = [
  {id: 'recentEvents'},
  {id: 'promoListing'}
];

function setup() {
  class Root extends React.Component {
    render() {
			return (
				<Navigator
					initialRouteStack={ROUTE_STACK}
					style={{flex:1}}
					renderScene={(route, navigator) => {
						switch (route.id) {
							case 'promoDetails':
								return <PromoDetails
									nav={navigator}
									name={route.name}
									images={route.images}
								/>;
							case 'recentEvents':
								return <RecentEvents />;
							default:
								return <RestaurantPromos nav={navigator}/>;
						}
					}}
				/>
			);
    }
  }
  return Root;
}

module.exports = setup;
