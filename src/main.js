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
  updateTaskList(store.getState().tasks);
  console.log(store.getState());
});

window.addTaskHandler = (event) => {
  event.preventDefault();
  const taskHeading = document.querySelector("#taskHeading").value;
  const taskDescription = document.querySelector("#taskDescription").value;
  const state = store.getState();

  const maxId =
    state.tasks.length > 0
      ? Math.max(...state.tasks.map((task) => task.id))
      : 0;

  const newId = maxId + 1;

  store.dispatch(
    addTask({
      id: newId,
      task: `${taskHeading}: ${taskDescription}`,
      isCompleted: false,
    })
  );
  store.dispatch(calculateTotalTasks());
};

const updateTaskList = (tasks) => {
  const displayTaskList = document.querySelector("#displayTaskList");
  const displayTotalTasks = document.querySelector("#displayTotalTasks");
  console.log("tasks", store.getState().tasks);

  displayTaskList.innerHTML = tasks
    .map(
      (task, index) =>
        `<li>
        <input name=${
          task.id
        } type="checkbox" onChange="onCheckListChange(this, ${task.id})" ${
          task.isCompleted ? "checked" : ""
        } />  ${index + 1} ${task.task}
      </li>`
    )
    .join("");
  displayTotalTasks.innerHTML = ` ${
    tasks.length > 0 ? `Total Tasks: ${store.getState().totalTasks}` : ""
  } `;
};

window.onCheckListChange = (ele, taskId) => {
  console.log(ele.checked, taskId);
  store.dispatch(toggleTask(taskId));
};

window.removeTaskHandler = (event) => {
  event.preventDefault();
  const removeTaskId = document.querySelector("#removeTaskId").value;
  store.dispatch(removeTask(removeTaskId));
  store.dispatch(calculateTotalTasks());
};
