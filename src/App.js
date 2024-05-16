import React from "react";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todolist from "./reducers/todolist";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";

export const App = () => {
  const reducer = combineReducers({
    todolist: todolist.reducer,
  });

  const store = configureStore({ reducer });

  return (
    <Provider store={store}>
      <Header />
      <AddTask />
      <Footer />
    </Provider>
  );
};

//! Provider component from react-redux, which is used to provide the Redux store to React components.
//! configureStore and combineReducers from @reduxjs/toolkit, which are used to configure the Redux store and combine reducers.
