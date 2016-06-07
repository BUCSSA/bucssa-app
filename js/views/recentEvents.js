/* @flow */

var React = require('react');

import {
  View,
	Text,
	StyleSheet,
	ScrollView
} from 'react-native';

var Header = require('../components/Header');
var Card = require('../components/Card');

class recentEvents extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
				<ScrollView
					style={{flex:1}}
				>
					<View style={{alignItems: 'center'}}>
						<Card
							type='event'
							poster='https://bucssa-app.s3.amazonaws.com/restaurant-image/test.jpg'
							name='event'
						/>
					</View>
				</ScrollView>
      </View>
    );
  }
}

var styles = StyleSheet.create({
	main_container: {
		flex: 1
	}
});

module.exports.RecentEvents = recentEvents;
