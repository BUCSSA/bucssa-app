'use strict'

var StyleSheet = require('StyleSheet');

var styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
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
  list_view_container: {
    flex: 1,
    backgroundColor:'rgba(237,47,65,0.025)',
    alignItems: 'center',
  },
});

module.exports = styles;
