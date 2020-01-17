/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Link } from "gatsby";

const style = css`
  margin: 2.5rem -1.25rem;
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    list-style: none;
  }
`;

const navigator = navName => css`
  text-align: ${navName === "prev" ? "left" : "right"};
  font-weight: bold;
  span {
    display: block;
    font-size: 0.875rem;
    font-weight: normal;
  }
  a {
    display: block;
    padding: 1rem 1.25rem;
    border-radius: 0.25rem;
    &:hover,
    &:link,
    &:visited {
      text-decoration: none;
    }
  }
`;

function PostNav({ previous, next }) {
  console.log(previous);
  console.log(next);
  return (
    <nav css={style} className="post-nav">
      <ul>
        <li css={navigator("prev")}>
          {previous && (
            <Link to={previous.slug} rel="prev">
              <span>이전</span>
              {previous.title}
            </Link>
          )}
        </li>
        <li css={navigator("next")}>
          {next && (
            <Link to={next.slug} rel="next">
              <span>다음</span>
              {next.title}
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default PostNav;
