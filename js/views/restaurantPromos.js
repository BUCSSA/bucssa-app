/* @flow */
'use strict'

var React = require('react');
var ReactNative = require('react-native');

var {
    Text,
    View,
    StyleSheet,
    ListView,
    Navigator
} = ReactNative;

var Card = require('../components/Card');
var Header = require('../components/Header');
var PromoDetails = require('./promoDetails');

const imageServer = 'https://bucssa-app.s3.amazonaws.com/restaurant-image/';

var MOCKED_DATA = [
  {name: 'lorum0', address: 'somewhere interesting', contact: '888-888-8888', thumbnail: imageServer + 'test.jpg', images: [imageServer + 'test.jpg',imageServer + 'test.jpg',imageServer + 'test.jpg',imageServer + 'test.jpg',imageServer + 'test.jpg']},
  {name: 'lorum1', address: 'somewhere interesting', contact: '888-888-8888', thumbnail: imageServer + 'test.jpg', images: [imageServer + 'test.jpg',imageServer + 'test.jpg',imageServer + 'test.jpg',imageServer + 'test.jpg',imageServer + 'test.jpg']},
  {name: 'lorum2', address: 'somewhere interesting', contact: '888-888-8888', thumbnail: imageServer + 'test.jpg', images: [imageServer + 'test.jpg',imageServer + 'test.jpg',imageServer + 'test.jpg',imageServer + 'test.jpg',imageServer + 'test.jpg']},
  {name: 'lorum3', address: 'somewhere interesting', contact: '888-888-8888', thumbnail: imageServer + 'test.jpg', images: [imageServer + 'test.jpg',imageServer + 'test.jpg',imageServer + 'test.jpg',imageServer + 'test.jpg',imageServer + 'test.jpg']},
  {name: 'lorum4', address: 'somewhere interesting', contact: '888-888-8888', thumbnail: imageServer + 'test.jpg', images: [imageServer + 'test.jpg',imageServer + 'test.jpg',imageServer + 'test.jpg',imageServer + 'test.jpg',imageServer + 'test.jpg']},
  {name: 'lorum5', address: 'somewhere interesting', contact: '888-888-8888', thumbnail: imageServer + 'test.jpg', images: [imageServer + 'test.jpg',imageServer + 'test.jpg',imageServer + 'test.jpg',imageServer + 'test.jpg',imageServer + 'test.jpg']},
  {name: 'lorum6', address: 'somewhere interesting', contact: '888-888-8888', thumbnail: imageServer + 'test.jpg', images: [imageServer + 'test.jpg',imageServer + 'test.jpg',imageServer + 'test.jpg',imageServer + 'test.jpg',imageServer + 'test.jpg']},
  {name: 'lorum7', address: 'somewhere interesting', contact: '888-888-8888', thumbnail: imageServer + 'test.jpg', images: [imageServer + 'test.jpg',imageServer + 'test.jpg',imageServer + 'test.jpg',imageServer + 'test.jpg',imageServer + 'test.jpg']},
  {name: 'lorum8', address: 'somewhere interesting', contact: '888-888-8888', thumbnail: imageServer + 'test.jpg', images: [imageServer + 'test.jpg',imageServer + 'test.jpg',imageServer + 'test.jpg',imageServer + 'test.jpg',imageServer + 'test.jpg']},
  {name: 'lorum9', address: 'somewhere interesting', contact: '888-888-8888', thumbnail: imageServer + 'test.jpg', images: [imageServer + 'test.jpg',imageServer + 'test.jpg',imageServer + 'test.jpg',imageServer + 'test.jpg',imageServer + 'test.jpg']},
];

type State = {
  dataSource: ListView.DataSource
}

type Props = {
	nav: Object
}

class PromoListing extends React.Component {
  state: State;
	props: Props;

  constructor(props: Props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
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
      <View style={styles.main_container}>
        <Header title='餐厅优惠' type='promoListing'/>
        <View style={styles.list_view_container}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) =>
              <Card
                name={rowData.name}
                address={rowData.address}
                contact={rowData.contact}
                thumbnail={rowData.thumbnail}
                type='restaurantPromos'
								nav={this.props.nav}
                onPress={()=>{
                  console.log("pressed %s!", rowData.name);
                  this.props.nav.push({id: 'promoDetails', name: rowData.name, images: rowData.images});
                }}
              />}
            showsVerticalScrollIndicator={false}
          />
        </View>
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
    alignItems: 'center'
  }
});

module.exports = PromoListing;
