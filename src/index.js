import React from "react";
import { render } from "react-dom";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import App from "./views/app";

const initialTodosState = [
  { id: 0, text: "Create `react-style-elements`", completed: false },
  { id: 1, text: "Todos app example", completed: false }
];

function todos(state = initialTodosState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];

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
