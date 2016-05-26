/* @flow */

'use strict'

var React = require('react');
var ReactNative = require('react-native');

var {
  View,
  Text,
  TabBarIOS
} = ReactNative;

var Icon = require('react-native-vector-icons/MaterialIcons');

type State = {
  tabIndex: number
}

type Props = {
  onTabIndex: Function,
  initTabIndex: number,
  routeStack: Array<Object>
}

class TabBar extends React.Component {
  state: State;
  props: Props;

  constructor(props: Props) {
    super(props);
    this.state = {
      tabIndex: this.props.initTabIndex
    };
  }

  handleWillFocus() {
    this.setState({
      tabIndex: this.props.routeStack.indexOf(route)
    });
  }

  render() {
    return(
      <View>
        <TabBarIOS>
          <Icon.TabBarItemIOS
            iconName='local-dining'
            selected={this.state.tabIndex === 0}
            onPress={() => {
              console.log("pressed tabIndex 0!");
              this.props.onTabIndex(0);
              this.setState({tabIndex: 0});
            }}
          >
            <View />
          </Icon.TabBarItemIOS>
          <Icon.TabBarItemIOS
            iconName='event'
            selected={this.state.tabIndex === 1}
            onPress={() => {
              console.log("pressed tabIndex 1!");
              this.props.onTabIndex(1);
              this.setState({tabIndex: 1});
            }}
          >
            <View />
          </Icon.TabBarItemIOS>
        </TabBarIOS>
      </View>
    );
  }
}

module.exports = TabBar;
