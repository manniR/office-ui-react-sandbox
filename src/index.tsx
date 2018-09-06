import * as React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import { DefaultButton } from "office-ui-fabric-react/";
import { initializeIcons } from "office-ui-fabric-react/lib/Icons";

// initializeIcons(/* optional base url */);

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <DefaultButton
      iconProps={{ iconName: "ChevronRight" }}
      style={{ display: "flex" }}
    >
      Hello World
    </DefaultButton>
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
  </div>
);

render(<App />, document.getElementById("root"));
