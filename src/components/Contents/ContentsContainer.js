import React, { useMemo } from "react";
import PostListItem from "./PostListItem";

import usePosts from "../../hooks/usePosts";
import filterPosts from "../../utils/filterPosts";

function ContentsContainer({ selectedCategory, checkedTags, onCheckTagInPost }) {
  const posts = usePosts();

  const filteredPosts = useMemo(() => filterPosts(posts, selectedCategory, checkedTags), [
    posts,
    selectedCategory,
    checkedTags,
  ]);

  return (
    <div id="contents">
      <div style={{ width: "100%", minHeight: "60vh", marginTop: "1.5rem" }}>
        {filteredPosts.map(({ node }) => (
          <PostListItem key={node.id} post={node} onCheckTagInPost={onCheckTagInPost} />
        ))}
      </div>
    </div>
  );
}

export default ContentsContainer;
