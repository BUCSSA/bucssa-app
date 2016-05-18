
'use strict'

var React = require('React');
var View = require('View');
var Text = require('Text');
var StyleSheet = require('StyleSheet');

class Header extends React.Component {
  render() {
    return (
      <View style = {styles.header_container}>
        <Text style = {styles.header_text}>{this.props.title}</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  header_container: {
    paddingTop: 10,
    backgroundColor: '#ed2f41',
    flexDirection: 'row',
  },
  header_text: {
    textAlign: 'center',
    fontSize: 17,
    color: '#FFFFFF',
    marginVertical: 15,
    flex: 1,
  },
});

module.exports = Header;
