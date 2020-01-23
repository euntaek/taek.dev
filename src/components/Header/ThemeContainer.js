import React from "react";
import ThemeSwitch from "./ThemeSwitch/ThemeSwitch";

import { windowGlobal } from "../../utils/window";

function ThemeContainer() {
  return (
    <div style={{ margin: "0 0 4px 4px" }}>
      <ThemeSwitch initialTheme={windowGlobal.__theme} />
    </div>
  );
}

export default ThemeContainer;
