/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Link } from "gatsby";
import dateFormatter from "../../utils/dateFormatter";

const style = css`
  font-weight: bold;
  font-size: 28px;
  width: 100%;
  padding: 0 16px;

  .date-and-tag {
    font-size: 14px;
    font-weight: 500;
    display: flex;
    flex-wrap: wrap;
  }
  .post-date {
    margin: 0 8px 4px 0;
    white-space: nowrap;
  }
  .tag-group {
    display: block;
    margin-bottom: 4px;
    li {
      display: inline;
    }
  }
  .tag-bullet {
    margin: 0 2px;
  }
  .post-tag {
    font-size: 14px;
    font-weight: bold;
    border: 1px solid transparent;
    outline: none;
    background-color: transparent;
    cursor: pointer;
  }
  .post-title {
    font-size: 28px;
    font-weight: bold;
    &:link,
    &:visited {
      text-decoration: none;
    }
  }
  .post-spoiler {
    font-size: 16px;
    font-weight: normal;
    margin-top: 16px;
  }
  & + & {
    margin-top: 56px;
  }
`;

function Post({ post, checkTagInsidePost }) {
  return (
    <article css={style} className="post">
      <header>
        <div className="date-and-tag">
          <time dateTime={post.frontmatter.date} className="post-date">
            {dateFormatter(post.frontmatter.date)}
          </time>
          <ul className="tag-group">
            {post.frontmatter.tags.map((tag, index) => (
              <li key={tag}>
                {index !== 0 && <span className="tag-bullet">•</span>}
                <button className="post-tag" onClick={() => checkTagInsidePost(tag)}>
                  {tag.toUpperCase()}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <h3>
          <Link to={post.fields.slug} className="post-title">
            {post.frontmatter.title}
          </Link>
        </h3>
      </header>
      <p className="post-spoiler">{post.excerpt}</p>
    </article>
  );
}

export default Post;
