import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
} from 'react-native';

class PluralTodo extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {

    };
  }

  render() {
    return (

        <Text>Hello world</Text>
    )
  }
}

AppRegistry.registerComponent('main', () => PluralTodo);
