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
      <View style={styles.card_container}>
        <Image
          source={{uri: 'http://placehold.it/350x150'}}
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
    )
  }
}

const scale = Dimensions.get('window').width;

var styles = StyleSheet.create({
  card_container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    width: scale * 0.95,
    borderRadius: 2,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    shadowColor: 'rgba(0, 0, 0,0.4)',
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
    width: scale * 0.945,
    borderRadius: 2,
  },
});

module.exports = Card;
