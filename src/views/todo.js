import { row, el } from "../react-style-elements/elements";
import { checkbox } from "../react-style-elements/elements/input";
import { padding } from "../react-style-elements/elements/attributes";

import { Styles } from "../styles";

export default (id, name, completed, onChange) =>
  checkbox(null, [], {
    checked: completed,
    label: el(Styles.TodoLabel, [], name),
    onChange: () => onChange(id)
  });
