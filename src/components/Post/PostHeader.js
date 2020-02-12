/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import { dateFormat } from "../../utils/date";

const style = css`
  margin-top: 3.5rem;
  margin-bottom: 1.75rem;
  h1 {
    margin: 0;
    font-size: 2.5rem;
    line-height: 1.2;
  }
  time {
    display: block;
    margin-top: 0.25rem;
    font-size: 0.925rem;
  }
`;

function PostHeader({ title, date }) {
  return (
    <header css={style}>
      <h1>{title}</h1>
      <time dateTime={date} className="post-date">
        {dateFormat(date)}
      </time>
    </header>
  );
}

export default PostHeader;
