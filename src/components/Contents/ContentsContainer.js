import React, { useMemo, useEffect, useRef } from "react";
import PostListItem from "./PostListItem";

import usePosts from "../../hooks/usePosts";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import filterPosts from "../../utils/filterPosts";

function ContentsContainer({ selectedCategory, checkedTags, onCheckTagInPost }) {
  // const [postsCount, setPostsCount] = useState(1);
  const posts = usePosts();

  const onGetPosts = () => {
    setPageNumber(prev => prev + 1);
  };
  const [
    pageNumber,
    setPageNumber,
    setScroll,
    onInfiniteScrollInit,
    onInfiniteScrollUpdate,
    onInfiniteScrollDisconnect,
  ] = useInfiniteScroll(() => setPageNumber(prev => prev + 1));

  console.log(pageNumber);

  const filteredPosts = useMemo(
    () => filterPosts(posts, selectedCategory, checkedTags, pageNumber),
    [posts, selectedCategory, checkedTags, pageNumber],
  );

  useEffect(() => {
    onInfiniteScrollInit(document.querySelector("#footer"));
  });

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
