/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import Github from "../SVG/github.svg";
import Facebook from "../SVG/facebook.svg";
import LinkedIn from "../SVG/linked-in.svg";
import Insta from "../SVG/insta.svg";
import Twitter from "../SVG/twitter.svg";

const style = css`
  svg {
    transition: fill 150ms ease-in-out;
  }
`;

function SocialButton({ social, uri }) {
  return (
    <a
      css={style}
      href={uri}
      target="_blank"
      rel="noreferrer noopener"
      className="socials align-center"
      title={`Open the blog owner's ${social} new page.}`}
    >
      {social == "github" && <Github />}
      {social == "facebook" && <Facebook />}
      {social == "linkedIn" && <LinkedIn />}
      {social == "insta" && <Insta />}
      {social == "twitter" && <Twitter />}
    </a>
  );
}

export default SocialButton;
