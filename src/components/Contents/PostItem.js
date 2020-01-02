/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const style = css`
  width: 100%;
  min-height: 152px;
  border-radius: 12px;
  transition: all 150ms ease-in-out;

  a {
    padding: 28px 16px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    text-decoration: none;
    header {
      h3 {
        margin-bottom: 4px;
        font-size: 28px;
        font-weight: bold;
      }
      small {
        font-size: 13px;
        font-weight: normal;
      }
    }
    p {
      margin-top: 7px;
      font-size: 16px;
      font-weight: normal;
    }
  }
`;

function PostItem({ post }) {
  return (
    <article css={style} className="post">
      <a href="#">
        <header>
          <h3>{post.postName}</h3>
          <small>{post.date}</small>
        </header>
        <p>{post.spoiler}</p>
      </a>
    </article>
  );
}

export default PostItem;
