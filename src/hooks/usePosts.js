import { useStaticQuery, graphql } from "gatsby";

const usePosts = () => {
  const {
    allMarkdownRemark: { edges: posts },
  } = useStaticQuery(
    graphql`
      query Posts {
        allMarkdownRemark(
          sort: { fields: frontmatter___date, order: DESC }
          filter: { frontmatter: { category: { ne: "" }, tags: { ne: "" } } }
        ) {
          edges {
            node {
              frontmatter {
                category
                tags
                description
                date(formatString: "YYYY-MM-DD")
                title
              }
              id
              fields {
                slug
              }
              excerpt(format: PLAIN, pruneLength: 120, truncate: true)
            }
          }
        }
      }
    `,
  );

  return posts;
};

export default usePosts;
