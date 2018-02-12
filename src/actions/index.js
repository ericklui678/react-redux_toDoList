export function addTask(task) {
  return {
    type: 'ADD_TASK',
    payload: { task: task, completed: false }
  };
}

export function moveTask(task) {
  return {
    type: 'MOVE_TASK',
    payload: task
  }
}
