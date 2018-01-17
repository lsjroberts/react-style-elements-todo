import { styleSheet, style, classes } from "./react-style-elements/style";
import { text, rgb } from "./react-style-elements/style/color";
import { size, font, typeface } from "./react-style-elements/style/font";

export default styleSheet([
  style("app", [
    text(rgb(30, 30, 30)),
    size(16),
    typeface([font("Helvetica"), font("Arial"), font("sans-serif")])
  ]),
  style("title", [size(28)]),
  style("todo", []),
  style("todoLabel", []),
  style("todoStatus", [size(12)])
]);
