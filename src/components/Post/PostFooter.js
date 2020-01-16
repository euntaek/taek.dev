/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import Bio from "../Bio";

const style = css``;

function PostFooter() {
  return (
    <footer css={style}>
      <Bio />
    </footer>
  );
}

export default PostFooter;
