import { styleSheet, style, classes } from "./react-style-elements/style";
import { text, rgb } from "./react-style-elements/style/color";
import { size, font, typeface } from "./react-style-elements/style/font";

export const Styles = classes([
  "App",
  "Title",
  "Todo",
  "TodoLabel",
  "TodoStatus"
]);

export default styleSheet(Styles, [
  style(Styles.App, [
    text(rgb(30, 30, 30)),
    size(16),
    typeface([font("Helvetica"), font("Arial"), font("sans-serif")])
  ]),
  style(Styles.Title, [size(28)]),
  style(Styles.Todo, []),
  style(Styles.TodoLabel, []),
  style(Styles.TodoStatus, [size(12)])
]);
