export const ADD_TASK = "tasks/added";
export const REMOVE_TASK = "tasks/removed";
export const TOGGLE_TASK = "tasks/toggled";
export const CALCULATE_TOTAL_TASKS = "tasks/calculateTotalTasks";

export const addTask = (tasks) => ({
  type: ADD_TASK,
  payload: tasks,
});

export const removeTask = (taskId) => ({
  type: REMOVE_TASK,
  payload: taskId,
});

export const toggleTask = (taskId) => ({
  type: TOGGLE_TASK,
  payload: taskId,
});

export const calculateTotalTasks = () => ({
  type: CALCULATE_TOTAL_TASKS,
});
