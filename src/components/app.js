import React from 'react';
import InputTask from '../containers/input_task';
import ToDoList from '../containers/todo_list';

export default function() {
  return (
    <div>
      <InputTask />
      <ToDoList />
    </div>
  );
}
