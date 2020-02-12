const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

const re = /(\d{4}-\d{2}-\d{2})-/;
const filterDateFromPath = path => path.replace(re, "");

const getPostNav = navData => {
  return navData ? { title: navData.frontmatter.title, slug: navData.fields.slug } : null;
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      site {
        siteMetadata {
          utterances
        }
      }
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { category: { ne: "" }, tags: { ne: "" } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date(formatString: "YYYY-MM-DD")
              description
              tags
              title
            }
            html
          }
          next {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
          previous {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  if (result.error) {
    throw result.errors;
  }
  const metaData = result.data.site.siteMetadata;
  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach(({ node, next, previous }) => {
    createPage({
      path: filterDateFromPath(node.fields.slug),
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        title: node.frontmatter.title,
        date: node.frontmatter.date,
        description: node.frontmatter.description,
        tags: node.frontmatter.tags,
        slug: node.fields.slug,
        html: node.html,
        utterances: metaData.utterances,
        previous: getPostNav(previous),
        next: getPostNav(next),
      },
    });
  });
};
