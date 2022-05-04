import React, { useState, useEffect, useCallback } from "react";
import scrollTo from "gatsby-plugin-smoothscroll";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Bio from "../components/Bio";
import CategoryContainer from "../components/Category";
import ContentsContainer from "../components/Contents";

import useSiteMetadata from "../hooks/useSiteMetadata";
import * as storage from "../utils/storage";

const index = ({ location }) => {
  const INITIAL_CATEGORY = storage.getCategory() || "all";
  const INITIAL_TAGS = storage.getTags() || [];
  const INITIAL_SHOW_TAGS = false;

  const [category, setCategory] = useState(INITIAL_CATEGORY);
  const [tags, setTags] = useState(INITIAL_TAGS);
  const [showTags, setShowTags] = useState(INITIAL_SHOW_TAGS);

  const { title } = useSiteMetadata();

  useEffect(() => {
    storage.getShowTags() && onShowTags();
  }, []);

  useEffect(() => {
    storage.setCategory(category);
    storage.setTags(tags);
  }, [category, tags]);

  useEffect(() => {
    storage.setShowTags(showTags);
  }, [showTags]);

  const onSelectCategory = useCallback(
    (selectedCategory) => {
      if (selectedCategory === category) return;
      setCategory(selectedCategory);
      setTags([]);
    },
    [category],
  );
  const onCheckTag = useCallback((tag) => {
    setTags((prevTags) => {
      return prevTags.includes(tag)
        ? prevTags.filter((prevTag) => prevTag !== tag)
        : prevTags.concat(tag);
    });
  }, []);

  const onShowTags = useCallback(() => {
    setShowTags((prevState) => {
      return !prevState;
    });
  }, []);

  const onCheckTagInPost = useCallback((tag) => {
    scrollTo("#category");
    setTags([tag]);
  }, []);

  return (
    <Layout location={location}>
      <SEO title={title} />
      <Bio />
      <main>
        <CategoryContainer
          selectedCategory={category}
          checkedTags={tags}
          showTags={showTags}
          onSelectCategory={onSelectCategory}
          onCheckTag={onCheckTag}
          onShowTags={onShowTags}
        />
        <ContentsContainer
          selectedCategory={category}
          checkedTags={tags}
          onCheckTagInPost={onCheckTagInPost}
        />
      </main>
    </Layout>
  );
};

export default index;
