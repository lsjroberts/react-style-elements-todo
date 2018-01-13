import { layout, column, h1 } from "../react-style-elements/elements";
import { padding } from "../react-style-elements/elements/attributes";

import styleSheet, { Styles } from "../styles";
import todo from "./todo";

const state = {
  todos: [
    { label: "Create `react-style-elements`", status: "in-progress" },
    { label: "Todos app example", status: "in-progress" }
  ]
};

export default layout(
  styleSheet,
  column(
    Styles.App,
    [padding(30)],
    [
      h1(Styles.Title, [], "Todo App"),
      ...state.todos.map(({ label, status }, index) =>
        todo(label, status, checked => {
          console.log(label, checked);
          if (checked) {
            state.todos[index].status === "done";
          } else {
            state.todos[index].status === "in-progress";
          }
        })
      )
    ]
  )
);
