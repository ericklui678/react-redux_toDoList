import { combineReducers } from 'redux';
import TaskReducer from './todo_tasks';

const rootReducer = combineReducers({
  taskList: TaskReducer,
});

export default rootReducer;
