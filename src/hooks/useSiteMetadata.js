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
            aboutUrl
            icon
            keywords
            social {
              github
              facebook
              linkedIn
              insta
              twitter
            }
            ga
          }
        }
      }
    `,
  );
  return site.siteMetadata;
};

export default useSiteMetadata;
