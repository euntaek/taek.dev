import React from "react";
import { css } from "@emotion/react";

import useSiteMetadata from "../../hooks/useSiteMetadata";

const style = css`
  margin-top: 40px;
  width: 100%;
  font-size: 14px;

  a {
    font-weight: 500;
    &:hover,
    &:link,
    &:visited {
      text-decoration: none;
    }
  }
`;

function Footer() {
  const date = new Date().getFullYear();
  const {
    author: { en },
    social: { github },
  } = useSiteMetadata();

  return (
    <footer id="footer" css={style} className="align-center">
      &copy;{date},&nbsp;
      <a target="_blank" rel="noreferrer noopener" href={github}>
        {en}
      </a>
    </footer>
  );
}

export default React.memo(Footer);
