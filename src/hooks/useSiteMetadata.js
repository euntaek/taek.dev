import { useStaticQuery, graphql } from "gatsby";

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            author {
              ko
              en
            }
            siteUrl
            description
            introduction
            social {
              github
              facebook
              linkedIn
              insta
              twitter
            }
            GA
          }
        }
      }
    `,
  );
  return site.siteMetadata;
};

export default useSiteMetadata;
