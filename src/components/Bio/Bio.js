import React from "react";
import { css } from "@emotion/react";
import { Link } from "gatsby";

import useSiteMetadata from "../../hooks/useSiteMetadata";
import SocialContainer from "./SocialContainer";

const style = css`
  p {
    margin: 0;
    a {
      position: relative;
      text-decoration: none;
    }
    a:after {
      content: "";
      bottom: 0;
      left: 0px;
      width: 100%;
      position: absolute;
      border-bottom: 1px solid;
    }

    @media only screen and (max-width: 420px) {
      font-size: 0.875rem;
    }
  }
`;

function Bio() {
  const { author, introduction, aboutUrl, social } = useSiteMetadata();

  return (
    <aside id="bio" css={style}>
      <p>
        👋 안녕하세요! <Link to={aboutUrl}>{author.ko}</Link>이라고 합니다.
        <br />
        📖 {introduction}
      </p>
      <SocialContainer socials={social} />
    </aside>
  );
}

export default React.memo(Bio);
