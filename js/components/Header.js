/* @flow */

'use strict'

var React = require('react');
var ReactNative = require('react-native');
var MK = require('react-native-material-kit');

var {
  Dimensions,
  View,
  Text,
	StyleSheet,
	TouchableHighlight
} = ReactNative;

var {
	MKButton,
	MKColor
} = MK;

var Icon = require('react-native-vector-icons/MaterialIcons');

class Button extends React.Component {
	render() {
		var Button;
		if (this.props.selected === this.props.text) {
			Button = MKButton.accentColoredFlatButton()
				.withText(this.props.text)
				.withTextStyle({
					color: 'white',
					fontWeight: 'bold',
				})
				.withOnPress(this.props.onPress)
				.build();
			return <Button />;
		} else {
			Button = MKButton.accentColoredFlatButton()
				.withText(this.props.text)
				.withTextStyle({
					color: '#C70039',
					fontWeight: 'bold',
				})
				.withOnPress(this.props.onPress)
				.build();
			return <Button />;
		}
	}
}

class Header extends React.Component {

  onPress() {
		console.log(this.props.nav.getCurrentRoutes());
    this.props.nav.jumpTo(this.props.routeStack[0]);
  }

  render() {
    if (this.props.type === 'promoDetails') {
      return (
        <View style={[styles.header_container,{backgroundColor: '#000000', marginBottom: 30,}]}>
          <View style={[styles.header_button_container, {alignItems: 'flex-start'}]}>
            <Icon
              name='keyboard-arrow-left'
              size={20}
              style={styles.back_button}
              onPress={this.onPress.bind(this)}
            />
          </View>
					<View style={styles.header_button_container}>
						<Text style={styles.header_text}>{this.props.title}</Text>
					</View>
					<View style={styles.header_button_container}/>
        </View>
      );
    }
    return (
      <View style={styles.header_container}>
				<View style={styles.header_button_container}>
					<Button
						selected={this.props.selected}
						text='餐馆优惠'
						onPress={()=>{
							console.log(this.props.selected);
							console.log(this.props.nav.getCurrentRoutes());
							this.props.nav.jumpTo(this.props.routeStack[0]);
						}}
					/>
				</View>
        <View style={styles.header_button_container}>
					<Button
						selected={this.props.selected}
						text='近期活动'
						nav={this.props.nav}
						onPress={()=>{
							console.log(this.props.nav.getCurrentRoutes());
							this.props.nav.jumpTo(this.props.routeStack[1]);
						}}
					/>
        </View>
        <View style={styles.header_button_container}>
					<Button
						selected={this.props.selected}
						text='个人设置'
						onPress={()=>{
							console.log(this.props.selected);
						}}
					/>
        </View>
      </View>
    );
  }
}

const scale = Dimensions.get('window').width;

var styles = StyleSheet.create({
  header_container: {
    paddingTop: 25,
    paddingBottom: 15,
    backgroundColor: '#ed2f41',
    flexDirection: 'row'
  },
  header_button_container: {
		flex: 0.3,
    alignItems: 'center'
  },
  back_button:{
    marginLeft: 10,
    color: '#FFFFFF'
  },
  header_text: {
		flex: 0.3,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  header_text_unselected: {
		flex: 0.3,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#C70039'
  }
});

module.exports = Header;
