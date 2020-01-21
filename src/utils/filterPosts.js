const filterPosts = (posts, category, checkedTags) => {
  let filteredPosts = posts.filter(({ node }) => {
    return category === "all" || category === node.frontmatter.category;
  });

  if (checkedTags.length) {
    filteredPosts = filteredPosts.filter(({ node }) => {
      for (const checkedTag of checkedTags) {
        if (node.frontmatter.tags.includes(checkedTag)) {
          return true;
        }
      }
    });
  }
  return filteredPosts;
};

export default filterPosts;
