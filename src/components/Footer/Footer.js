/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

const style = css`
  margin-top: 40px;
  width: 100%;
  font-size: 14px;

  a {
    font-weight: bold;
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
