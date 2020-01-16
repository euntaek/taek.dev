import React, { useMemo } from "react";
import PostListItem from "./PostListItem";

import filterPosts from "../../utils/filterPosts";

function ContentsContainer({ posts, category, tags, checkTagInsidePost }) {
  const filteredPosts = useMemo(() => filterPosts(posts, category, tags), [
    posts,
    category,
    tags,
  ]);

  return (
    <div id="contents">
      <div style={{ width: "100%", minHeight: "60vh", marginTop: "3.5rem" }}>
        {filteredPosts.map(({ node }) => (
          <PostListItem
            key={node.id}
            post={node}
            checkTagInsidePost={checkTagInsidePost}
          />
        ))}
      </div>
    </div>
  );
}

export default ContentsContainer;
