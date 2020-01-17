import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import useDefultSEO from "../../hooks/useDefultSEO";

const SEO = ({ description, lang, meta, title, tags = [], url }) => {
  const {
    site: {
      siteMetadata: {
        title: defaultTitle,
        siteUrl,
        author,
        description: defaultDescription,
        keywords: defaultKeywords,
      },
    },
    file: {
      childImageSharp: { original: metaOgImage },
    },
  } = useDefultSEO();

  const metaDescription = description || defaultDescription;
  const metaKeywords = [...new Set([...defaultKeywords, ...tags])];
  const metaUrl = url ? siteUrl + url : siteUrl;

  console.log(metaUrl);
  console.log(metaKeywords);
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={title === defaultTitle ? "" : `%s — ${defaultTitle}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: metaUrl,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: metaOgImage.src,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author.en,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(
          metaKeywords.length > 0
            ? {
                name: `keywords`,
                content: metaKeywords.join(", "),
              }
            : [],
        )
        .concat(meta)}
    />
  );
};

SEO.defaultProps = {
  lang: `ko-KR`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.object),
  location: PropTypes.object,
};

export default SEO;
