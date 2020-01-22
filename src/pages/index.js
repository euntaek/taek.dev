import React, { useState, useCallback } from "react";

import usePosts from "../hooks/usePosts";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Bio from "../components/Bio";
import CategoryContainer from "../components/Category";
import ContentsContainer from "../components/Contents";

const index = ({ location }) => {
  const InitialCategory = "all";
  const InitialTags = [];

  // selected category, checked tags
  const [category, setCategory] = useState(InitialCategory);
  const [tags, setTags] = useState(InitialTags);

  const { title, posts } = usePosts();

  const onSelectCategory = useCallback(
    selectedCategory => {
      if (selectedCategory === category) return;
      setCategory(selectedCategory);
      setTags(InitialTags);
    },
    [category],
  );

  const onCheckTag = useCallback(tag => {
    setTags(prevTags => {
      return prevTags.includes(tag)
        ? prevTags.filter(prevTag => prevTag !== tag)
        : prevTags.concat(tag);
    });
  }, []);

  const onCheckTaginPost = useCallback(tag => {
    setTags([tag]);
  }, []);

  return (
    <Layout location={location}>
      <SEO title={title} />
      <Bio />
      <main>
        <CategoryContainer
          category={category}
          tags={tags}
          onSelectCategory={onSelectCategory}
          onCheckTag={onCheckTag}
        />
        <ContentsContainer
          posts={posts}
          category={category}
          tags={tags}
          onCheckTaginPost={onCheckTaginPost}
        />
      </main>
    </Layout>
  );
};

export default index;
