'use strict'

var Text = require('Text');
var View = require('View');
var StyleSheet = require('StyleSheet');
var ListView = require('ListView');
var Card = require('../components/Card');
var React = require('React');
var styles = require('../styles');

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


class restuarantPromos extends React.Component {
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
        <View style = {styles.list_view_container}>
          <ListView
            dataSource = {this.state.dataSource}
            renderRow = {(rowData) => <Card name={rowData.name} address={rowData.address} contact={rowData.contact}/>}
            showsVerticalScrollIndicator = {false}
          />
        </View>
      </View>
    );
  }
}

module.exports = restuarantPromos;
