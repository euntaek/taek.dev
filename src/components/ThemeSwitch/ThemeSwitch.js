/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import LightThemeIcon from "./LightThemeIcon.js";
import DarkThemeIcon from "./DarkThemeIcon.js";
import { useState } from "react";

const style = css`
  position: relative;
  width: 32px;
  height: 32px;
  border-radius: 12px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: background-color 100ms ease-in-out;
  overflow: hidden;
`;

function ThemeSwitch({ initialTheme }) {
  const [theme, setTheme] = useState(initialTheme);

  const onClick = theme => {
    const newTheme = theme === "light" ? "dark" : "light";
    window.__onChangeTheme(newTheme);
    setTheme(newTheme);
  };
  return (
    <button
      css={style}
      onClick={() => onClick(theme)}
      className="theme-switch align-center"
      aria-label="Dark/Ligth Mode Switch"
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
