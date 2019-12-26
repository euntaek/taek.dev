/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import Github from "../Icon/GithubIcon";
import Facebook from "../Icon/FacebookIcon";
import LinkedIn from "../Icon/LinkedInIcon";
import Insta from "../Icon/InstaIcon";
import Twitter from "../Icon/TwitterIcon";

const style = css`
  width: 32px;
  height: 32px;
  margin: 0 0 4px 4px;
  border-radius: 12px;
  border: none;
  outline: none;
  cursor: pointer;
`;

function SocialButton({ social, uri }) {
  return (
    <a
      css={style}
      href={uri}
      target="_blank"
      rel="noreferrer noopener"
      className="socials align-center"
    >
      {social == "github" && <Github />}
      {social == "facebook" && <Facebook />}
      {social == "linkedIn" && <LinkedIn />}
      {social == "insta" && <Insta />}
      {social == "twiiter" && <Twitter />}
    </a>
  );
}

export default SocialButton;
