import { column, h1 } from "../react-style-elements/elements";
import { padding } from "../react-style-elements/elements/attributes";
import { connectedLayout } from "../react-style-elements/redux";

import styleSheet, { Styles } from "../styles";
import todo from "./todo";
import addTodo from "./add-todo";

let nextTodoId = 2;

const addTodoAction = text => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  text
});

const toggleTodoAction = id => ({
  type: "TOGGLE_TODO",
  id
});

export default connectedLayout(styleSheet, ({ state, dispatch }) =>
  column(
    Styles.App,
    [padding(30)],
    [
      h1(Styles.Title, [], "Todo App"),
      addTodo({ onAdd: text => dispatch(addTodoAction(text)) }),
      state.todos &&
        state.todos.map(({ id, text, completed }, index) =>
          todo({
            id,
            text,
            completed,
            onChange: () => dispatch(toggleTodoAction(id))
          })
        )
    ]
  )
);
