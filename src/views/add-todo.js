import { row } from "../react-style-elements/elements";
import { ref } from "../react-style-elements/elements/attributes";
import * as Input from "../react-style-elements/elements/input";

let inputNode;

export default function addTodo({ onAdd }) {
  return Input.form(
    null,
    [],
    {
      onSubmit: () => {
        if (!inputNode.value.trim()) {
          return;
        }
        onAdd(inputNode.value);
        inputNode.value = "";
      }
    },
    row(
      null,
      [],
      [
        Input.text(null, [
          ref(node => {
            inputNode = node;
          })
        ]),
        Input.button(null, [], { onPress: () => {}, submit: true }, "Add Todo")
      ]
    )
  );
}
