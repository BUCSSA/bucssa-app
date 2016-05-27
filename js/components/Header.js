
'use strict'

var React = require('react');
var ReactNative = require('react-native');

var {
  Dimensions,
  View,
  Text,
  StyleSheet
} = ReactNative;

var Icon = require('react-native-vector-icons/MaterialIcons');

class Header extends React.Component {
  onPress() {
    this.props.navigator.pop();
  }

  render() {
    if (this.props.type === 'promoDetails') {
      return (
        <View style={[styles.header_container,{backgroundColor: '#000000', marginBottom: 30,}]}>
          <View style={styles.header_left_container}>
            <Icon
              name='keyboard-arrow-left'
              size={20}
              style={styles.close_button}
              onPress={this.onPress.bind(this)}
            />
          </View>
          <Text style={styles.header_text}>{this.props.title}</Text>
          <View style={styles.header_right_container}>
          </View>
        </View>
      );
    }
    return (
      <View style={styles.header_container}>
        <View style={styles.header_button_container}>
					<Text style={styles.header_text}>餐厅优惠</Text>
        </View>
        <View style={styles.header_button_container}>
					<Text style={styles.header_text_unselected}>近期活动</Text>
        </View>
        <View style={styles.header_button_container}>
					<Text style={styles.header_text_unselected}>个人设置</Text>
        </View>
      </View>
    );
  }
}

const scale = Dimensions.get('window').width;

var styles = StyleSheet.create({
  header_container: {
    paddingTop: 25,
    paddingBottom: 15,
    backgroundColor: '#ed2f41',
    flexDirection: 'row'
  },
  header_button_container: {
		flex: 0.3,
    alignItems: 'center'
  },
  close_button:{
    marginLeft: 10,
    color: '#FFFFFF'
  },
  header_text: {
		flex: 0.3,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  header_text_unselected: {
		flex: 0.3,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#C70039'
  }
});

module.exports = Header;
