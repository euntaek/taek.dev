import React from "react";
import { css } from "@emotion/react";
import SocialButton from "./SocialButton";

const style = css`
  display: flex;
  margin: 8px 0 0 0;
  padding: 0;

  li {
    display: inline-block;
    margin: 0 16px 0 0px;
  }
`;

function SocialContainer({ socials }) {
  return (
    <ul css={style}>
      {Object.keys(socials).map((item) => {
        return socials[item] ? (
          <li key={item}>
            <SocialButton social={item} uri={socials[item]} />
          </li>
        ) : null;
      })}
    </ul>
  );
}

export default SocialContainer;
