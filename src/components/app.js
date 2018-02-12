import React from 'react';
import InputTask from '../containers/input_task';
import ToDoList from '../containers/todo_list';
import CompletedList from '../containers/completed_list';

export default function() {
  return (
    <div>
      <InputTask />
      <ToDoList />
      <CompletedList />
    </div>
  );
}
