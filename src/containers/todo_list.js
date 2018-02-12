import React, { Component } from 'react';
import { connect } from 'react-redux';

class ToDoList extends Component {
  render() {
    const tasks = this.props.toDoTasks.map((task, i) => {
      return <li key={i}>{task}</li>;
    })

    return (
      <div>
        <h1>To Do:</h1>
        <ul>
          {tasks}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { toDoTasks: state.toDoTasks };
}

export default connect(mapStateToProps)(ToDoList);
