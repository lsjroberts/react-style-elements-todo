import { row, el } from "../react-style-elements/elements";
import { checkbox } from "../react-style-elements/elements/input";

import { Styles } from "../styles";

export default function todo({ id, text, completed, onChange }) {
  return checkbox(null, [], {
    checked: completed,
    label: el(Styles.TodoLabel, [], text),
    onChange: () => onChange(id)
  });
}
