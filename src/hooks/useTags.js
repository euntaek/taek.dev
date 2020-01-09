import { useStaticQuery, graphql } from "gatsby";

const useTags = () => {
  const {
    allMarkdownRemark: { group: tags },
  } = useStaticQuery(
    graphql`
      query Tags {
        allMarkdownRemark {
          group(field: frontmatter___tags) {
            totalCount
            fieldValue
            nodes {
              frontmatter {
                category
              }
            }
          }
        }
      }
    `,
  );
  return tags;
};

export default useTags;
