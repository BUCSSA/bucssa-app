
'use strict'

var React = require('React');
var Dimensions = require('Dimensions');
var View = require('View');
var Text = require('Text');
var StyleSheet = require('StyleSheet');
var Icon = require('react-native-vector-icons/MaterialIcons');

class Header extends React.Component {
  onPress() {
    this.props.navigator.pop();
  }

  render() {
    if (this.props.type === 'promoDetails') {
      return (
        <View style = {styles.header_container}>
          <View style = {styles.header_left_container}>
            <Icon
              name = 'keyboard-arrow-left'
              size = {20}
              style = {styles.close_button}
              onPress = {this.onPress.bind(this)}
            />
          </View>
          <Text style = {styles.header_text}>{this.props.title}</Text>
          <View style = {styles.header_right_container}>
          </View>
        </View>
      );
    }
    return (
      <View style = {styles.header_container}>
        <View style = {styles.header_left_container}>
        </View>
        <Text style = {styles.header_text}>{this.props.title}</Text>
        <View style = {styles.header_right_container}>
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
    flexDirection: 'row',
  },
  header_left_container: {
    width: scale/3,
    alignItems: 'flex-start',
  },
  close_button:{
    marginLeft: 10,
    color: '#FFFFFF',
  },
  header_right_container: {
    width: scale/3,
  },
  header_text: {
    width: scale/3,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

module.exports = Header;
