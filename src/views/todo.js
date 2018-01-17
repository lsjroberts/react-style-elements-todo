import { row, el } from "../react-style-elements/elements";
import { checkbox } from "../react-style-elements/elements/input";

import styles from "../styles";

export default function todo({ id, text, completed, onChange }) {
  return checkbox(null, [], {
    checked: completed,
    label: el(styles.todoLabel, [], text),
    onChange: () => onChange(id)
  });
}
