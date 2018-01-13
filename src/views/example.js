import { el } from "../react-style-elements/elements";
import { padding } from "../react-style-elements/elements/attributes";

import { Styles } from "../styles";

export default label => el(Styles.Example, [], `Hello, ${label}!`);
