import React, {Component} from 'react';
import {
  AppRegistry
  // Text
} from 'react-native';
import TaskList from './TaskList';

class PluralTodo extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      todos: [
        {
          task: 'Learn React Native'
        }
      ]
    };
  }
  render() {
    return (
        <TaskList todos={this.state.todos} />
    );
  }
}

AppRegistry.registerComponent('main', () => PluralTodo);
