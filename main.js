import React, {Component} from 'react';
import {
  AppRegistry,
  Navigator,
  Text
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

  onAddStarted() {
    // console.log('on add started');
    this.nav.push({
      name: 'taskform'
    });
  }

  // Navigator stuff
  renderScene(route, nav) {
    switch (route.name) {
      case 'taskform':
        return <Text>Add form comes here!</Text>;
      default:
        return (
            <TaskList
              onAddStarted={this.onAddStarted.bind(this)}
              todos={this.state.todos} />
        );

    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{name: 'taskList', index: 0}}
        ref={(nav => {
          this.nav = nav;
        })}
        renderScene={this.renderScene.bind(this)}
      />
    );
  }
}

AppRegistry.registerComponent('main', () => PluralTodo);
