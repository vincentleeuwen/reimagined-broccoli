import React, {Component} from 'react';
import {
  AppRegistry
} from 'react-native';
import TaskList from './TaskList';

class PluralTodo extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      todos: [
        {
          task: 'Learn React Native'
        },
        {
          task: 'Learn Redux'
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
