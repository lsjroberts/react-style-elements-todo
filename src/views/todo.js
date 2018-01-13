import { row, el } from "../react-style-elements/elements";
import { checkbox } from "../react-style-elements/elements/input";
import { padding } from "../react-style-elements/elements/attributes";

import { Styles } from "../styles";

export default (label, status, onChange) =>
  row(
    Styles.Todo,
    [],
    [
      checkbox(null, [], {
        checked: false,
        label: el(Styles.TodoLabel, [], label),
        onChange
      }),
      el(Styles.TodoStatus, [], `(${status})`)
    ]
  );
