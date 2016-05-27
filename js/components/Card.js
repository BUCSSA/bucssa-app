/* @flow */

'use strict'

var React = require('react');
var ReactNative = require('react-native');

var {
  Dimensions,
  StyleSheet,
  Image,
  View,
  Text,
  TouchableHighlight
} = ReactNative;

type State = {
  pressed: boolean
}

type Props = {
  name: string,
  address: string,
  contact: string,
  thumbnail: string,
  type: string,
	nav: Object,
  onPress: Function
}

class Card extends React.Component {
  state: State;

  constructor(props: Props) {
    super(props);
    this.state = {
      pressed: false
    }
  }

  renderRestaurantInfoCard() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={this.props.onPress}
          activeOpacity = {0.8}>
          <View style={styles.card_container}>
            <Image
              source={{uri: this.props.thumbnail}}
              style={styles.thumbnail}>
            </Image>
            <View style={styles.card_inner_container}>
              <Text style={styles.title}>{this.props.name}</Text>
              <View style={styles.card_inner_container_right}>
                <Text style={styles.content}>100% off</Text>
                <Text style={styles.content}>{this.props.contact}</Text>
                <Text style={styles.content}>{this.props.address}</Text>
              </View>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }

  render() {
    if (this.props.type === 'restaurantPromos') {
      return this.renderRestaurantInfoCard();
    }
  }
}

const scale = Dimensions.get('window').width;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10
  },
  card_container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#FFFFFF',
    width: scale,
    borderRadius: 2,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    shadowColor: 'rgba(0, 0, 0,0.6)',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 3
    }
  },
  card_inner_container: {
    flex: 1,
    marginLeft: 10,
    flexDirection: 'row'
  },
  card_inner_container_right: {
    flex: 1,
    padding: 10,
    flexDirection: 'column'
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 17,
    textAlign: 'left'
  },
  content: {
    fontSize: 10,
    textAlign: 'right',
    color: 'rgba(135, 135, 135, 0.75)'
  },
  thumbnail: {
    height: scale * 0.25,
    borderRadius: 1
  }
});

module.exports = Card;
