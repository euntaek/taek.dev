import React from "react";

import PostHeader from "./PostHeader";
import PostMain from "./PostMain";
import PostFooter from "./PostFooter";
import PostNav from "./PostNav";
import Utterances from "./Utterances";

const PostContainer = ({ title, date, html, utterances, previous, next }) => (
  <main id="post">
    <article>
      <PostHeader title={title} date={date} />
      <PostMain html={html} />
      <PostFooter />
    </article>
    <PostNav previous={previous} next={next} />
    <Utterances repo={utterances} />
  </main>
);

export default PostContainer;
