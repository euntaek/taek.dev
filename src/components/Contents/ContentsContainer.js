import React, { useMemo, useEffect, useState } from "react";
import PostListItem from "./PostListItem";

import usePosts from "../../hooks/usePosts";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import filterPosts from "../../utils/filterPosts";

function ContentsContainer({ selectedCategory, checkedTags, onCheckTagInPost }) {
  const INITIAL_PAGE_NUMBER = 1;
  const INITIAL_POSTS_COUNT = 10;

  const [PageNumber, setPageNumber] = useState(INITIAL_PAGE_NUMBER);
  const posts = usePosts();
  const [
    onInfiniteScrollInit,
    onInfiniteScrollUpdate,
    onInfiniteScrollDisconnect,
  ] = useInfiniteScroll(() => setPageNumber(prev => prev + 1));

  const filteredPosts = useMemo(
    () =>
      filterPosts(posts, selectedCategory, checkedTags, PageNumber, INITIAL_POSTS_COUNT),
    [posts, selectedCategory, checkedTags, PageNumber],
  );

  console.log(
    PageNumber,
    PageNumber * INITIAL_POSTS_COUNT,
    filteredPosts.length,
    PageNumber * INITIAL_POSTS_COUNT > filteredPosts.length,
  );

  useEffect(() => {
    onInfiniteScrollInit(document.querySelector("#footer"));
  }, []);

  useEffect(() => {
    setPageNumber(INITIAL_PAGE_NUMBER);
    onInfiniteScrollUpdate();
  }, [selectedCategory, checkedTags]);

  useEffect(() => {
    PageNumber * INITIAL_POSTS_COUNT > filteredPosts.length &&
      onInfiniteScrollDisconnect();
  }, [PageNumber]);

  return (
    <div id="contents">
      <div style={{ width: "100%", minHeight: "60vh", marginTop: "1.5rem" }}>
        {/* {filteredPosts.map(({ node }) => (
          <PostListItem key={node.id} post={node} onCheckTagInPost={onCheckTagInPost} />
        ))} */}
        <PostListItem
          key={filteredPosts[1].node.id}
          post={filteredPosts[1].node}
          onCheckTagInPost={onCheckTagInPost}
        />
      </div>
    </div>
  );
}

export default React.memo(ContentsContainer);
