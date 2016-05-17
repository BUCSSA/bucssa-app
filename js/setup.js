/* @flow */

'use strict'

var Text = require('Text');
var View = require('View');
var StyleSheet = require('StyleSheet');
var ListView = require('ListView');
var Card = require('./components/Card');
var React = require('React');

var MOCKED_DATA = [
  {name: 'lorum0', address: 'somewhere interesting', contact: '888-888-8888'},
  {name: 'lorum1', address: 'somewhere interesting', contact: '888-888-8888'},
  {name: 'lorum2', address: 'somewhere interesting', contact: '888-888-8888'},
  {name: 'lorum3', address: 'somewhere interesting', contact: '888-888-8888'},
  {name: 'lorum4', address: 'somewhere interesting', contact: '888-888-8888'},
  {name: 'lorum5', address: 'somewhere interesting', contact: '888-888-8888'},
  {name: 'lorum6', address: 'somewhere interesting', contact: '888-888-8888'},
  {name: 'lorum7', address: 'somewhere interesting', contact: '888-888-8888'},
  {name: 'lorum8', address: 'somewhere interesting', contact: '888-888-8888'},
  {name: 'lorum9', address: 'somewhere interesting', contact: '888-888-8888'},
];

function setup(): React.Component {
  class restaurant_listing extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        dataSource: new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2,
        }),
      }
    }

    componentDidMount() {
      this.fetchData();
    }

    fetchData() {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(MOCKED_DATA),
      });
    }

    render() {
      return(
        <View style = {styles.main_container}>
          <View style = {styles.header_container}>
            <Text style = {styles.header_text}>餐厅优惠</Text>
          </View>
          <ListView
            style = {styles.listView}
            dataSource = {this.state.dataSource}
            renderRow = {(rowData) => <Card name={rowData.name} address={rowData.address} contact={rowData.contact}/>}
          />
        </View>
      );
    }
  }
  return restaurant_listing;
}

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
  listView: {
    flex: 1,
  },
});

module.exports = setup;
