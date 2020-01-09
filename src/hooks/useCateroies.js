import { useStaticQuery, graphql } from "gatsby";

const useCategories = () => {
  const {
    allMarkdownRemark: { group: categories },
  } = useStaticQuery(
    graphql`
      query Categories {
        allMarkdownRemark {
          group(field: frontmatter___category) {
            totalCount
            fieldValue
          }
        }
      }
    `,
  );

  return categories;
};

export default useCategories;
