import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { moveTask } from '../actions/index';

class ToDoList extends Component {
  moveTaskToComplete(task) {
    this.props.moveTask(task);
  }

  render() {
    const toDoTasks = this.props.taskList.filter(task => !task.completed).map((task, i) => {
      return (
          <li
            key={i}
            onClick={() => this.moveTaskToComplete(task.task)}>{task.task}</li>
        );
    });
    const completedTasks = this.props.taskList.filter(task => task.completed).map((task, i) => {
      return (
          <li
            key={i}
            onClick={() => this.moveTaskToComplete(task.task)}>{task.task}</li>
        );
    });

    return (
      <div>
        <h1>To Do:</h1>
        <ul>
          {toDoTasks}
        </ul>
        <h1>Completed:</h1>
        <ul>
          {completedTasks}
        </ul>
      </div>
    );
  }
}

// used to get taskList from redux application state
function mapStateToProps({ taskList }) {
  return { taskList };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ moveTask }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
