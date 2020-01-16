/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import dateFormatter from "../../utils/dateFormatter";

const style = css`
  margin-top: 3.5rem;
  margin-bottom: 1.75rem;
  h1 {
    margin: 0;
    font-size: 2.5rem;
    line-height: 1.2;
  }
  time {
    font-size: 0.875rem;
  }
`;

function PostHeader({ title, date }) {
  return (
    <header css={style}>
      <h1>{title}</h1>
      <time dateTime={date} className="post-date">
        {dateFormatter(date)}
      </time>
    </header>
  );
}

export default PostHeader;
