/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const style = css`
  margin: 8px 16px 48px;

  p {
    margin: 0;
    font-size: 16px;
    font-weight: normal;
    letter-spacing: normal;

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
    </aside>
  );
}

export default Bio;
