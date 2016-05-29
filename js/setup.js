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

/* components */
var Header = require('./components/Header');

const ROUTE_STACK = [
  {id: 'promoListing'},
	{id: 'recentEvents'},
	{id: 'digitalCard'},
	{id: 'dummy'} /* this route will get replace when click on a card in promoListing*/
];

function setup() {
  class Root extends React.Component {
    render() {
			return (
				<Navigator
					initialRouteStack={ROUTE_STACK}
					initialRoute={ROUTE_STACK[0]}
					renderScene={(route, navigator) => {
						switch (route.id) {
							case 'promoDetails':
								return <PromoDetails
									nav={navigator}
									name={route.name}
									images={route.images}
									routeStack={ROUTE_STACK}
								/>;
							case 'recentEvents':
								return <RecentEvents nav={navigator} routeStack={ROUTE_STACK}/>;
							default:
								return <RestaurantPromos nav={navigator} routeStack={ROUTE_STACK}/>;
						}
					}}
					configureScene={(route) =>{
						if (route.id === 'promoDetails') {
							return Navigator.SceneConfigs.PushFromRight;
						}
						return Navigator.SceneConfigs.FadeAndroid;
					}}
				/>
			);
    }
  }
  return Root;
}

module.exports = setup;
