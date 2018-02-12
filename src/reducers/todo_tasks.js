export default function(state = [], action) {
  switch (action.type) {
    case 'ADD_TASK':
      return [ action.payload, ...state ];
    case 'MOVE_TASK':
      let taskIndex = state.map(task => task.task).indexOf(action.payload);
      let newState = state.slice();
      newState[taskIndex].completed = !newState[taskIndex].completed;
      return newState;
  }
  return state;
}
