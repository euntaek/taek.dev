import React from "react";
import { css } from "@emotion/core";

const style = css`
  margin-top: 40px;
  width: 100%;
  font-size: 14px;

  a {
    font-weight: bold;

    &:hover,
    &:link,
    &:visited {
      text-decoration: none;
    }
  }
`;

function Footer() {
  return (
    <footer id="footer" css={style} className="align-center">
      &copy;{2020},&nbsp;<a href="#">Euntaek Kim</a>
    </footer>
  );
}

export default React.memo(Footer);
