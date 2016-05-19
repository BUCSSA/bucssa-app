'use strict'

var Text = require('Text');
var View = require('View');
var StyleSheet = require('StyleSheet');
var ListView = require('ListView');
var Navigator = require('Navigator');
var Card = require('../components/Card');
var Header = require('../components/Header');
var React = require('React');
var PromoDetails = require('./promoDetails');

var MOCKED_DATA = [
  {name: 'lorum0', address: 'somewhere interesting', contact: '888-888-8888', thumbnail:'https://bucssa-app.s3.amazonaws.com/restaurant-image/19_ConceptArt_subwayexit-1080_195960.jpg'},
  {name: 'lorum1', address: 'somewhere interesting', contact: '888-888-8888', thumbnail:'https://bucssa-app.s3.amazonaws.com/restaurant-image/19_ConceptArt_subwayexit-1080_195960.jpg'},
  {name: 'lorum2', address: 'somewhere interesting', contact: '888-888-8888', thumbnail:'https://bucssa-app.s3.amazonaws.com/restaurant-image/19_ConceptArt_subwayexit-1080_195960.jpg'},
  {name: 'lorum3', address: 'somewhere interesting', contact: '888-888-8888', thumbnail:'https://bucssa-app.s3.amazonaws.com/restaurant-image/19_ConceptArt_subwayexit-1080_195960.jpg'},
  {name: 'lorum4', address: 'somewhere interesting', contact: '888-888-8888', thumbnail:'https://bucssa-app.s3.amazonaws.com/restaurant-image/19_ConceptArt_subwayexit-1080_195960.jpg'},
  {name: 'lorum5', address: 'somewhere interesting', contact: '888-888-8888', thumbnail:'https://bucssa-app.s3.amazonaws.com/restaurant-image/19_ConceptArt_subwayexit-1080_195960.jpg'},
  {name: 'lorum6', address: 'somewhere interesting', contact: '888-888-8888', thumbnail:'https://bucssa-app.s3.amazonaws.com/restaurant-image/19_ConceptArt_subwayexit-1080_195960.jpg'},
  {name: 'lorum7', address: 'somewhere interesting', contact: '888-888-8888', thumbnail:'https://bucssa-app.s3.amazonaws.com/restaurant-image/19_ConceptArt_subwayexit-1080_195960.jpg'},
  {name: 'lorum8', address: 'somewhere interesting', contact: '888-888-8888', thumbnail:'https://bucssa-app.s3.amazonaws.com/restaurant-image/19_ConceptArt_subwayexit-1080_195960.jpg'},
  {name: 'lorum9', address: 'somewhere interesting', contact: '888-888-8888', thumbnail:'https://bucssa-app.s3.amazonaws.com/restaurant-image/19_ConceptArt_subwayexit-1080_195960.jpg'},
];

class PromoListing extends React.Component {
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
        <Header title='餐厅优惠' type = 'promoListing'/>
        <View style = {styles.list_view_container}>
          <ListView
            dataSource = {this.state.dataSource}
            renderRow = {(rowData) =>
              <Card
                name={rowData.name}
                address={rowData.address}
                contact={rowData.contact}
                thumbnail={rowData.thumbnail}
                type='restaurantPromos'
                onPress={()=>{
                  console.log("pressed %s!", rowData.name);
                  this.props.navigator.push({id: 'promoDetails', name: rowData.name});
                }}
              />}
            showsVerticalScrollIndicator = {false}
          />
        </View>
      </View>
    );
  }
}

class RestaurantPromos extends React.Component {
  renderScene(route, nav) {
    console.log(route.id);
    if (route.id === 'promoDetails') {
      return <PromoDetails name={route.name} navigator={nav}/>
    }
    return <PromoListing navigator={nav}/>
  }

  render() {
    return (
      <Navigator
        initialRoute = {{id: "PromoListing"}}
        renderScene = {this.renderScene}
        configureScene = {(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.HorizontalSwipeJump;
        }}
      />
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

module.exports = RestaurantPromos;
