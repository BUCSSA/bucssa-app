/* @flow */
'use strict'

var View = require('View');
var Text = require('Text');
var StyleSheet = require('StyleSheet');
var React = require('React');
var Header = require('../components/Header');

class PromoDetails extends React.Component {
  render() {
    return (
      <View style = {styles.main_container}>
        <Header
          title = {this.props.name}
          navigator = {this.props.navigator}
          type = 'promoDetails'
        />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  list_view_container: {
    flex: 1,
    backgroundColor:'rgba(219, 221, 215, 0.125)',
    alignItems: 'center',
  },
});

module.exports = PromoDetails;
