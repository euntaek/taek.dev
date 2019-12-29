/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import ThemeContainer from "./ThemeContainer";
import SocialButton from "./SocialButton";

const style = css`
  max-width: 100%;
  display: flex;
  /* flex-flow: row wrap; */
  justify-content: space-between;
  margin: 40px 16px 0;

  h1 {
    font-family: "Montserrat";
    font-size: 48px;
    font-weight: 800;
    margin: 0;
  }
  div {
    display: flex;
    flex-flow: row-reverse wrap;
  }
`;

const dummyDate = {
  github: `https://github.com`,
  facebook: `https://github.com`,
  linkedIn: `https://github.com`,
};

function Header() {
  return (
    <header css={style} id="header">
      <h1 className="title">TAEK.io</h1>
      <div>
        <ThemeContainer />
        {Object.keys(dummyDate).map(item => (
          <SocialButton social={item} uri={dummyDate[item]} key={item} />
        ))}
      </div>
    </header>
  );
}

export default Header;
