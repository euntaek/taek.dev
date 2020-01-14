/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import PostContainer from "../components/Post";

function PostTemplate({ data, pageContext, location }) {
  const post = data.markdownRemark;
  const postMetadata = post.frontmatter;
  const url = encodeURI(post.fields.slug);

  return (
    <Layout location={location}>
      <SEO title={postMetadata.title} description={postMetadata.description} url={url} />
      <PostContainer
        title={postMetadata.title}
        date={postMetadata.date}
        html={post.html}
        pageContext={pageContext}
      />
    </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        title
        description
        date(formatString: "YYYY-MM-DD")
        tags
      }
      fields {
        slug
      }
      html
    }
  }
`;

export default PostTemplate;
