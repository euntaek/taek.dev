/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import LightThemeIcon from "./LightThemeIcon.js";
import DarkThemeIcon from "./DarkThemeIcon.js";
import { useState } from "react";

const style = css`
  position: relative;
  width: 32px;
  height: 32px;
  margin: 0 0 4px 4px;
  border-radius: 12px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  overflow: hidden;
`;

function ThemeSwitch({ initialTheme }) {
  const [theme, setTheme] = useState(initialTheme);

  console.log("switch", theme);
  const onClick = theme => {
    const newTheme = theme === "light" ? "dark" : "light";
    console.log("onChageTheme", newTheme);
    window.__onChangeTheme(newTheme);
    setTheme(newTheme);
  };
  return (
    <button
      css={style}
      onClick={() => onClick(theme)}
      className="theme-switch align-center"
    >
      <LightThemeIcon animate={theme === "light"} />
      <DarkThemeIcon animate={theme === "dark"} />
    </button>
  );
}

ThemeSwitch.defaultProps = {
  theme: "LIGHT",
};

export default ThemeSwitch;
