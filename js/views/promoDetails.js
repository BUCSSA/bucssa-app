/* @flow */
'use strict'

var React = require('react');
var ReactNative = require('react-native');

var {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions
} = ReactNative;

var Header = require('../components/Header');
var Card = require('../components/Card');
var Swiper = require('react-native-swiper');

class PromoDetails extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <Header
          title={this.props.name}
          nav={this.props.nav}
					routeStack={this.props.routeStack}
          type='promoDetails'
        />
        <Swiper style={styles.wrapper} height={Dimensions.get('window').height * 0.7}
          onMomentumScrollEnd={function(e, state, context){console.log('index:', state.index)}}
          dot={<View style={{backgroundColor:'#FFF', width: 5, height: 5,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
          activeDot={<View style={{backgroundColor: '#FFF', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />}
          paginationStyle={{
            bottom: -23, left: null, right: 10,
          }} loop={true}>
          <View style={styles.slide} title={<Text numberOfLines={1} style={{color: '#FFFFFF'}}>Description 1</Text>}>
            <Image style={styles.image} source={{uri: this.props.images[0]}} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1} style={{color: '#FFFFFF'}}>Description 2</Text>}>
            <Image style={styles.image} source={{uri: this.props.images[1]}} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1} style={{color: '#FFFFFF'}}>Description 3</Text>}>
            <Image style={styles.image} source={{uri: this.props.images[2]}} />
          </View>
          <View style={styles.slide} title={<Text numberOfLines={1} style={{color: '#FFFFFF'}}>Description 4</Text>}>
            <Image style={styles.image} source={{uri: this.props.images[3]}} />
          </View>
        </Swiper>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  wrapper: {
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
});

module.exports = PromoDetails;
