import { useStaticQuery, graphql } from "gatsby";

const useSiteMetadata = () => {
  const seoMetaData = useStaticQuery(
    graphql`
      query defaultSEO {
        file(absolutePath: { regex: "/meta-og-image.png/" }) {
          name
          childImageSharp {
            original {
              src
            }
          }
        }
        site {
          siteMetadata {
            title
            author {
              ko
              en
            }
            description
            keywords
          }
        }
      }
    `,
  );
  return seoMetaData;
};

export default useSiteMetadata;
