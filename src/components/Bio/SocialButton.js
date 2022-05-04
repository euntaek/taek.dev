import { css, jsx } from "@emotion/react";

import Github from "../../images/github.svg";
import Facebook from "../../images/facebook.svg";
import LinkedIn from "../../images/linked-in.svg";
import Insta from "../../images/insta.svg";
import Twitter from "../../images/twitter.svg";

const style = css`
  svg {
    transition: fill 100ms ease-in-out;
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
