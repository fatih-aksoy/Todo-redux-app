# Expanations

npm install @babel/eslint-parser@^7.18.9 \
 @fortawesome/fontawesome-svg-core@^6.4.0 \
 @fortawesome/free-brands-svg-icons@^6.4.0 \
 @fortawesome/free-regular-svg-icons@^6.4.0 \
 @fortawesome/free-solid-svg-icons@^6.4.0 \
 @fortawesome/react-fontawesome@^0.2.0 \
 @reduxjs/toolkit@^1.9.5 \
 babel-plugin-macros@^3.1.0 \
 eslint@^8.21.0 \
 eslint-config-airbnb@^19.0.4 \
 eslint-plugin-import@^2.26.0 \
 eslint-plugin-jsx-a11y@^6.6.1 \
 eslint-plugin-react@^7.30.1 \
 eslint-plugin-react-hooks@^4.6.0 \
 moment@^2.29.4 \
 react@^18.2.0 \
 react-dom@^18.2.0 \
 react-redux@^8.0.5 \
 styled-components@^5.3.9 \
 sweetalert@^2.1.2 \
 uuidv4@^6.2.13 \
 eslint-plugin-flowtype@^8.0.3 \
 react-scripts@5.0.1

1. we start from reducers folder and todolists.js. Firstly, the initial state of the todo-list is empty array bacause there are no tasks in the when the user enters the app.

2. addTask: (store, action) => {
   first argument (store) references the state of the store, second
   argument (action) references the data that is passed down from a component.
   in this case that data would be the task the user writes in the text field.

MUTABLE:
store.items.push(action.payload)
IMMUTABLE:
store.items = [action.payload, ...store.items]
the spread (...) syntax assigns a whole new value to the array and removes the nesting,
so you don't have an array within another array, like in the push method.},

3. toggleTask: (store, action) => {const task = store.items.find((singletask) => singletask.id === action.payload);
   if (task) {
   task.isChecked = !task.isChecked;
   }
   },
   this action toggles each individual task's checkbox between checked and unchecked:
   if a single task in the task-array is not checked yet (the initial state of "isChecked" is false), then pressing it will toggle the checkbox for that task only.

4. deleteAllTasks:(store) => {store.items = [];}
   this action deletes all tasks by going back to the initial state, which is an empty array.
   this action could also be: "return initialState;"

5. In App.js file, Provider component from react-redux, which is used to provide the Redux store to React components. configureStore and combineReducers from @reduxjs/toolkit, which are used to configure the Redux store and combine reducers.

6. TaskList.js den devam
