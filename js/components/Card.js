/* @flow */

var React = require('React');
var {
  Dimensions,
  StyleSheet,
  Image,
  View,
  Text,
} = require('React');


class Card extends React.Component {
  render() {
    var imageDimension = Dimensions.get('window').width/3;
    return (
      <View style={styles.cardContainer}>
        <Image
          source={{uri: 'http://placehold.it/350x150'}}
          style={{'width':imageDimension, 'height':imageDimension}}
        />
        <View style={styles.cardInnerContainerRight}>
          <Text style={styles.title}>Name</Text>
          <Text style={styles.content}>700 Commonwealth Ave. Boston 02215</Text>
          <Text style={styles.content}>888-8888888</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    borderRadius: 2,
    borderColor: '#ffffff',
    borderWidth: 1,
    shadowColor: 'rgba(0, 0, 0, 0.23)',
    shadowOpacity: 0.8,
    shadowRadius: 5,
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
});

module.exports = Card;
