import React from "react";
import { render } from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import App from "./views/app";

let nextTodoId = 2;

const initialTodosState = [
  { id: 0, name: "Create `react-style-elements`", completed: false },
  { id: 1, name: "Todos app example", completed: false }
];

function todos(state = initialTodosState, action) {
  switch (action.type) {
    case "TOGGLE_TODO":
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
}

const store = createStore(combineReducers({ todos }));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
