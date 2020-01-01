/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import SocialContainer from "./SocialContainer";

const style = css`
  margin: 16px 16px 2px;

  p {
    margin: 0;
    padding: 4px 0;
    font-size: 16px;
    a {
      position: relative;
      text-decoration: none;
    }
    a:after {
      content: "";
      bottom: 1px;
      left: 0px;
      width: 2.75em;
      position: absolute;
      border-bottom: 1px solid;
    }
  }
`;

function Bio() {
  const name = "김은택";
  const test = "현재 프론트엔드 개발자를 목표로 공부하고 있습니다.";
  return (
    <aside id="bio" css={style}>
      <p>
        안녕하세요! <a href="#">{name}</a>이라고 합니다.
        <br />
        {test}
      </p>
      <SocialContainer />
    </aside>
  );
}

export default Bio;
