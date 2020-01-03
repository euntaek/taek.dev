/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import SocialContainer from "./SocialContainer";

const style = css`
  margin: 8px 16px 2px;

  p {
    margin: 0;
    font-size: 16px;
    line-height: 1.8em;
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

    @media (max-width: 420px) {
      font-size: 14px;
    }
  }
`;

function Bio() {
  const name = "김은택";
  const test = "현재 프론트엔드 개발자가 되기 위해 노력 중 입니다.";
  return (
    <aside id="bio" css={style}>
      <p>
        👋 안녕하세요! <a href="#">{name}</a>이라고 합니다.
        <br />
        📖 {test}
      </p>
      <SocialContainer />
    </aside>
  );
}

export default Bio;
