import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

// This comment indicates that when the user opens the application (enters the app), the todo-list starts with an initial state that is represented by an empty array. This empty array signifies that there are no tasks present in the todo-list initially.
// In the context of a todo-list application, the initial state being an empty array makes sense because when the user first starts using the app, there typically wouldn't be any existing tasks added by default. The user would then have the option to add tasks to the list as they use the application.

const todolist = createSlice({
  name: "tasks",
  isChecked: false,
  initialState,
  reducers: {
    addTask: (store, action) => {
      // in the paranthesis, (store) references the state of the store, second argument which means (action) references the data that is passed down from a component. As a result, this data would be the task the user writes in the text field.

      // MUTABLE:
      // store.items.push(action.payload)
      // IMMUTABLE:
      store.items = [action.payload, ...store.items];
      // the spread (...) syntax assigns a whole new value to the array and removes the nesting,
      // so you don't have an array within another array, like in the push method.
    },
    toggleTask: (store, action) => {
      const task = store.items.find(
        (singletask) => singletask.id === action.payload
      );
      if (task) {
        task.isChecked = !task.isChecked;
      }
    },
    // this action toggles each individual task's checkbox between checked and unchecked:
    // if a single task in the task-array is not checked yet (the initial state of
    // "isChecked" is false), then pressing it will toggle the checkbox for that task only.

    deleteSingleTask: (store, action) => {
      const index = store.items
        .slice()
        .reverse()
        .findIndex((task) => task.id === action.payload);
      if (index !== -1) {
        store.items.splice(store.items.length - 1 - index, 1);
      }
    },
    deleteAllTasks: (store) => {
      store.items = [];
    },
    // this action deletes all tasks by going back to the initial state, which is an empty array.
    // this action could also be: "return initialState;"
  },
});

export default todolist;
