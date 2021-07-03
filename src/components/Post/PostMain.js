/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const style = css`
  font-family: "Noto Sans KR", sans-serif;
  &:after {
    content: "";
    margin: 5rem auto 3.5rem;
    display: block;
    width: 85%;
    border: none;
    border-radius: 0.125rem;
    height: 1px;
    background-color: black;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 3.5rem 0 1.75rem;
  }
  h3 {
    font-size: 1.25rem;
  }
  h4 {
    font-size: 1.125rem;
  }
  a {
    text-decoration: none;
    font-weight: bold;
  }
  ul,
  ol {
    padding: 0;
    margin-bottom: 1.75rem;
    overflow-wrap: break-word;
    @media only screen and (max-width: 420px) {
      margin-left: 1.25rem;
    }
  }
  li {
    &,
    & > p {
      margin-bottom: calc(1.75rem / 4);
    }
    & > strong {
      display: inline-block;
      margin-bottom: calc(1.75rem / 4);
    }
    & > ul,
    ol {
      margin-left: 1.25rem;
      margin-bottom: calc(1.75rem / 4);
    }
  }
  p {
    margin: 0 0 1.75rem;
  }
  blockquote {
    font-size: 1.125rem;
    margin: 0 1.25rem 1.75rem -1.25rem;
    padding-left: 1rem;
    border-left: 0.25rem solid;
    opacity: 0.8;
  }
  blockquote *:last-child {
    margin-bottom: 0;
  }
  hr {
    margin: 0 auto 1.75rem;
    width: 85%;
    padding: 0;
    border: none;
    height: 1px;
  }
  img {
    max-width: 100%;
  }
  .gatsby-resp-image-figure {
    margin: 0 0 1.75rem 0;
  }
  .gatsby-resp-image-figcaption {
    text-align: center;
    font-size: 0.875rem;
  }
  .gatsby-resp-image-wrapper {
    border-radius: 0.125rem;
    overflow: hidden;
  }
`;

function PostMain({ html }) {
  return (
    <section
      css={style}
      className="post-main"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default PostMain;
