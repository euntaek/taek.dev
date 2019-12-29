import React from "react";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

function ThemeContainer() {
  return (
    <>
      <ThemeSwitch initialTheme={window.__theme} />
    </>
  );
}

export default ThemeContainer;
