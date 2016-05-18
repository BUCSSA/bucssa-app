/* @flow */

'use strict'

var Dimensions = require('Dimensions');
var StyleSheet = require('StyleSheet');
var Image = require('Image');
var View = require('View');
var Text = require('Text');
var React = require('React');
var TouchableHighlight = require('TouchableHighlight');

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed: false,
    }
  }

  togglePressed() {
    this.setState({
      pressed: !this.state.pressed,
    });
  }

  pressed() {
    console.log("Pressed!");
    this.togglePressed();
    console.log(this.state.pressed);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.pressed.bind(this)} activeOpacity = {0.6}>
          <View style={styles.card_container}>
            <Image
              source={{uri: this.props.thumbnail}}
              style={styles.thumbnail}
            />
            <View style={styles.card_inner_container}>
              <Text style={styles.title}>{this.props.name}</Text>
              <View style={styles.card_inner_container_right}>
                <Text style={styles.content}>{this.props.contact}</Text>
                <Text style={styles.content}>{this.props.address}</Text>
              </View>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

const scale = Dimensions.get('window').width;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  card_container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#FFFFFF',
    width: scale * 0.97,
    borderRadius: 2,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    shadowColor: 'rgba(0, 0, 0,0.6)',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 3,
    },
  },
  card_inner_container: {
    flex: 1,
    marginLeft: 10,
    flexDirection: 'row',
  },
  card_inner_container_right: {
    flex: 1,
    padding: 10,
    flexDirection: 'column',
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'left',
  },
  content: {
    fontSize: 10,
    textAlign: 'right',
    color: 'rgba(135, 135, 135, 0.75)',
  },
  thumbnail: {
    height: scale / 4,
    borderRadius: 1,
  },
});

module.exports = Card;
