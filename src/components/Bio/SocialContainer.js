/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import SocialButton from "./SocialButton";

const style = css`
  margin: 8px 0 0 0;
  padding: 0;
  list-style: none;

  li {
    display: inline-block;
    margin: 0 16px 0 0px;
  }
`;

const dummyDate = {
  github: `https://github.com`,
  facebook: `https://github.com`,
  linkedIn: `https://github.com`,
  // twitter: `http://twitter.com`,
  // insta: ``,
};

function SocialContainer() {
  return (
    <ul css={style}>
      {Object.keys(dummyDate).map(item => (
        <li key={item}>
          <SocialButton social={item} uri={dummyDate[item]} />
        </li>
      ))}
    </ul>
  );
}

export default SocialContainer;
