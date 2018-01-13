import { column, h1 } from "../react-style-elements/elements";
import { padding } from "../react-style-elements/elements/attributes";
import { connectedLayout } from "../react-style-elements/redux";

import styleSheet, { Styles } from "../styles";
import todo from "./todo";

export default connectedLayout(styleSheet, ({ state, dispatch }) =>
  column(
    Styles.App,
    [padding(30)],
    [
      h1(Styles.Title, [], "Todo App"),
      state.todos &&
        state.todos.map(({ id, name, completed }, index) =>
          todo(id, name, completed, () =>
            dispatch({
              type: "TOGGLE_TODO",
              id
            })
          )
        )
    ]
  )
);
