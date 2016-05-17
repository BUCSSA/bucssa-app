/* @flow */

var Dimensions = require('Dimensions');
var StyleSheet = require('StyleSheet');
var Image = require('Image');
var View = require('View');
var Text = require('Text');
var React = require('React');

class Card extends React.Component {
  render() {
    return (
      <View style={styles.cardContainer}>
        <Image
          source={{uri: 'http://placehold.it/350x150'}}
          style={styles.thumbnail}
        />
        <View style={styles.cardInnerContainerRight}>
          <Text style={styles.title}>{this.props.name}</Text>
          <Text style={styles.content}>{this.props.address}</Text>
          <Text style={styles.content}>{this.props.contact}</Text>
        </View>
      </View>
    )
  }
}

const imageDimension = Dimensions.get('window').width / 4;

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    borderRadius: 2,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    shadowColor: 'rgba(0, 0, 0, 0.4)',
    shadowOpacity: 0.8,
    shadowRadius: 1,
    shadowOffset: {
      height: 0,
      width: 3,
    },
  },
  cardInnerContainerRight: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'left',
  },
  content: {
    marginTop: 10,
    textAlign: 'left',
  },
  thumbnail: {
    height: imageDimension,
    width: imageDimension,
    borderRadius: 1,
  },
});

module.exports = Card;
