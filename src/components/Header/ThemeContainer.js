import React from "react";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

const win = typeof window !== "undefined" && window;

function ThemeContainer() {
  return (
    <div style={{ margin: "0 0 4px 4px" }}>
      <ThemeSwitch initialTheme={win.__theme} />
    </div>
  );
}

export default ThemeContainer;
