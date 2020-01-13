/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Link } from "gatsby";
import dateFormatter from "../../utils/dateFormatter";

const style = css`
  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;

  .date-and-tag {
    display: flex;
    flex-wrap: wrap;
    font-size: 14px;
    font-weight: 500;
  }
  .post-date {
    margin: 0 8px 0 0;
    white-space: nowrap;
  }
  .tag-group {
    display: block;
    margin: 0;
    li {
      display: inline;
    }
  }
  .tag-bullet {
    margin: 0 2px;
  }
  .post-tag {
    border: 1px solid transparent;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
  }
  .post-title {
    margin: 8px 0 0 0;
    line-height: 1;
    font-size: 28px;
    font-weight: bold;
    a:link,
    a:visited {
      text-decoration: none;
    }
  }
  .post-spoiler {
    margin: 16px 0 0;
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
        <h3 className="post-title">
          <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
        </h3>
      </header>
      <p className="post-spoiler">{post.excerpt}</p>
    </article>
  );
}

export default Post;
