/* @flow */

'use strict'

var React = require('react');
var ReactNative = require('react-native');
var MK = require('react-native-material-kit');

var {
  Dimensions,
  StyleSheet,
  Image,
  View,
  Text,
  TouchableHighlight
} = ReactNative;

var {
	MKButton,
	MKColor
} = MK;

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
			<TouchableHighlight
				onPress={this.props.onPress}
				activeOpacity = {0.8}
				style={styles.container}
			>
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
    );
  }

	renderEventPosterCard() {
		var Button = MKButton.coloredButton()
		.withText('查看详情')
		.withTextStyle({
			color: '#FFF',
			fontWeight: 'bold'
		})
		.withBackgroundColor('#ed2f41')
		.build();

		return (
			<TouchableHighlight
				onPress={this.props.onPress}
				activeOpacity = {0.8}
				style={styles.container}
			>
				<View style={styles.card_container}>
					<Image
						source={{uri: this.props.poster}}
						style={styles.poster}>
					</Image>
					<View style={styles.card_inner_container}>
						<Text style={styles.title}>{this.props.name}</Text>
						<View style={styles.card_inner_container_right}>
							<Button />
						</View>
					</View>
				</View>
			</TouchableHighlight>
		);
	}

  render() {
    if (this.props.type === 'restaurantPromos') {
      return this.renderRestaurantInfoCard();
		}
		return this.renderEventPosterCard();
  }
}

const scale = Dimensions.get('window').width;

var styles = StyleSheet.create({
	container: {
		marginTop: 10,
		borderRadius: 2
  },
  card_container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#FFFFFF',
    width: scale * 0.97,
    borderRadius: 2,
    borderColor: 'rgba(0, 0, 0, 0.1)',
		borderWidth: 1,
    borderRightWidth: 1.5,
		shadowColor: 'rgba(0, 0, 0, 0.3)',
		shadowOpacity: 0.8,
		shadowRadius: 1,
		shadowOffset: {
			height: 1,
			width: 2
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
		flexDirection: 'column',
		alignItems:'flex-end'
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
		alignSelf: 'center',
    //marginTop: 17,
    textAlign: 'left'
  },
  content: {
    fontSize: 10,
    textAlign: 'right',
    color: 'rgba(135, 135, 135, 0.75)'
  },
  thumbnail: {
    height: scale * 0.4,
		borderRadius: 1
	},
	poster: {
		height: scale * 0.4,
		borderRadius: 1
	}
});

module.exports = Card;
