import { createStore } from "redux";
import taskReducer from "./taskReducer";
import {
  addTask,
  removeTask,
  toggleTask,
  calculateTotalTasks,
} from "./actions";

const store = createStore(
  taskReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  console.log(store.getState());
});
