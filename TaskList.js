import React from 'react';
import {
  StyleSheet,
  View,
  ListView
} from 'react-native';
import TaskRow from './TaskRow';

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: '#ecf0f1',
    flex: 1,
    justifyContent: 'flex-start'
  }
});

class TaskList extends React.Component {
  constructor(props, context) {
    super(props, context);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      dataSource: ds.cloneWithRows(props.todos)
    };
  }
  renderRow(todo) {
    return (
      <TaskRow todo={todo} />
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <ListView
          key={this.props.todos}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
        />

      </View>
    );
  }

}

TaskList.PropTypes = {
  todos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};

export default TaskList;
