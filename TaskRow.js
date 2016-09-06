import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#e7e7e7',
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20
  }
});

class TaskRow extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.todo.task}</Text>
      </View>
    );
  }
}

TaskRow.PropTypes = {
  todo: React.PropTypes.shape({
    task: React.PropTypes.string.isRequired
  }).isRequired
};

export default TaskRow;
