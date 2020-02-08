import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { hello } from "./helloworld";
import { mergeStyles } from "office-ui-fabric-react";
import { UIFrom } from "./public/UIForm";

// Inject some global styles
mergeStyles({
  selectors: {
    ":global(body), :global(html), :global(#app)": {
      margin: 0,
      padding: 0,
      height: "100vh"
    }
  }
});

ReactDOM.render(<App />, document.getElementById("app"));
