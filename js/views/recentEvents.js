/* @flow */

var React = require('react');
var ReactNative = require('react-native');

var {
  View,
	Text,
	StyleSheet
} = ReactNative;

var Header = require('../components/Header');

class recentEvents extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
				<Header
					nav={this.props.nav}
					routeStack={this.props.routeStack}
					selected='近期活动'
				/>
        <Text> This is the event page </Text>
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
