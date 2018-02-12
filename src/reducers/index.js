import { combineReducers } from 'redux';
import ToDoTaskReducer from './todo_tasks';

const rootReducer = combineReducers({
  toDoTasks: ToDoTaskReducer,
});

export default rootReducer;
