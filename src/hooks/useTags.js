import { useStaticQuery, graphql } from "gatsby";

const useTags = selectedCategory => {
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

  return selectedCategory === "all"
    ? tags
    : tags.filter(tag => tag.nodes[0].frontmatter.category === selectedCategory);
};

export default useTags;
