import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import PostContainer from "../components/Post";

function PostTemplate({ pageContext, location }) {
  const {
    title,
    date,
    description,
    tags,
    slug,
    html,
    utterances,
    previous,
    next,
  } = pageContext;
  console.log(utterances);
  const url = encodeURI(slug);

  return (
    <Layout location={location}>
      <SEO title={title} description={description} tags={tags} url={url} />
      <PostContainer
        title={title}
        date={date}
        html={html}
        utterances={utterances}
        previous={previous}
        next={next}
      />
    </Layout>
  );
}

export default PostTemplate;
