import {
  ADD_TASK,
  REMOVE_TASK,
  TOGGLE_TASK,
  CALCULATE_TOTAL_TASKS,
} from "./actions";

const initailState = {
  tasks: [],
  totalTasks: 0,
};

const taskReducer = (state = initailState, action) => {
  console.log("PAYLOAD:: ", action.payload);
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: action.payload.id,
            task: action.payload.task,
            isCompleted: action.payload.isCompleted,
          },
        ],
      };

    case REMOVE_TASK:
      //action.payload here in this switch case will be the id sent to delete the task
      return {
        ...state,
        tasks: state.tasks.filter((task, index) => task.id != action.payload),
      };

    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, isCompleted: !task.isCompleted } // true becomes false, false becomes true
            : task
        ),
      };
    case CALCULATE_TOTAL_TASKS:
      return { ...state, totalTasks: state.tasks.length };

    default:
      return state;
  }
};

export default taskReducer;
