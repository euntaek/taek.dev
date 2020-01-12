import React, { useMemo } from "react";
import Post from "./Post";

import filterPosts from "../../utils/filterPosts";

function ContentsContainer({ posts, category, tags, checkTagInsidePost }) {
  console.log(posts, tags);
  const filteredPosts = useMemo(() => filterPosts(posts, category, tags), [
    posts,
    category,
    tags,
  ]);

  return (
    <div id="contents">
      <div style={{ width: "100%", minHeight: "60vh", marginTop: "40px" }}>
        {filteredPosts.map(({ node }) => (
          <Post key={node.id} post={node} checkTagInsidePost={checkTagInsidePost} />
        ))}
      </div>
    </div>
  );
}

export default ContentsContainer;
