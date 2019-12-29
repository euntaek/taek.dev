import React from "react";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

function ThemeContainer() {
  return (
    <div style={{ margin: "0 0 4px 4px" }}>
      <ThemeSwitch initialTheme={window.__theme} />
    </div>
  );
}

export default ThemeContainer;
