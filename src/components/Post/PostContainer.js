import React from "react";

import PostHeader from "./PostHeader";
import PostMain from "./PostMain";
import PostFooter from "./PostFooter";
import PostNav from "./PostNav";
import PostComment from "./PostComment";

const PostContainer = ({ title, date, html, previous, next }) => (
  <main id="post">
    <article>
      <PostHeader title={title} date={date} />
      <PostMain html={html} />
      <PostFooter />
    </article>
    <PostNav previous={previous} next={next} />
    <PostComment />
  </main>
);

export default PostContainer;
