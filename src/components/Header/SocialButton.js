/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Github from "../SVG/github.svg";
import Facebook from "../SVG/facebook.svg";
import LinkedIn from "../SVG/linked-in.svg";
import Insta from "../SVG/insta.svg";
import Twitter from "../SVG/twitter.svg";
// import Github from "../Icons/GithubIcon";
// import Facebook from "../Icons/FacebookIcon";
// import LinkedIn from "../Icons/LinkedInIcon";
// import Insta from "../Icons/InstaIcon";
// import Twitter from "../Icons/TwitterIcon";

const style = css`
  width: 32px;
  height: 32px;
  margin: 0 0 4px 4px;
  border-radius: 12px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  svg {
    transition: all 0.3s ease-in-out;
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
