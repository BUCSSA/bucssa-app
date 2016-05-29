/* @flow */

var React = require('react');
var ReactNative = require('react-native');

var {
  View,
	Text,
	StyleSheet,
	ScrollView
} = ReactNative;

var Header = require('../components/Header');
var Card = require('../components/Card');

class recentEvents extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
				<Header
					nav={this.props.nav}
					routeStack={this.props.routeStack}
					selected='近期活动'
				/>
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

module.exports = recentEvents;
