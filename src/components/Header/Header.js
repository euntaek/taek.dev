/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import ThemeContainer from "./ThemeContainer";

const style = css`
  max-width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 24px 16px 0;

  h1 {
    font-family: "rubik";
    font-size: 48px;
    font-weight: bold;
    margin: 0;
  }
`;

function Header() {
  return (
    <header css={style} id="header">
      <h1 className="title">TAEK.io</h1>
      <div>
        <ThemeContainer />
      </div>
    </header>
  );
}

export default Header;
