const filterPosts = (posts, category, checkedTags, postPageNumber, postsCount) => {
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
  return filteredPosts.slice(0, postPageNumber * postsCount);
};

export default filterPosts;
