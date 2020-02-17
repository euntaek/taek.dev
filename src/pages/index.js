import React, { useState, useEffect, useCallback, useRef } from "react";
import Swiper from "swiper";
import scrollTo from "gatsby-plugin-smoothscroll";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Bio from "../components/Bio";
import CategoryContainer from "../components/Category";
import ContentsContainer from "../components/Contents";

import useSiteMetadata from "../hooks/useSiteMetadata";
import * as storage from "../utils/storage";

const swiperjs = () =>
  new Swiper(".swiper-container", {
    slidesPerView: "auto",
    spaceBetween: 16,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  });

const index = ({ location }) => {
  const INITIAL_CATEGORY = storage.getCategory() || "all";
  const INITIAL_TAGS = storage.getTags() || [];
  const INITIAL_SHOW_TAGS = false;

  // selected category, checked tags
  const [category, setCategory] = useState(INITIAL_CATEGORY);
  const [tags, setTags] = useState(INITIAL_TAGS);
  const [showTags, setShowTags] = useState(INITIAL_SHOW_TAGS);

  const swiper = useRef(null);
  const { title } = useSiteMetadata();

  useEffect(() => {
    swiper.current = swiperjs();
    storage.getShowTags() && setTimeout(onShowTags, 300);
  }, []);

  useEffect(() => {
    storage.setCategory(category);
    storage.setTags(tags);
    swiper.current.update();
  }, [category, tags]);

  useEffect(() => {
    storage.setShowTags(showTags);
  }, [showTags]);

  const onSelectCategory = useCallback(
    selectedCategory => {
      if (selectedCategory === category) return;
      setCategory(selectedCategory);
      setTags([]);
    },
    [category],
  );
  console.log(tags);
  const onCheckTag = useCallback(tag => {
    console.log(1, tag);
    setTags(prevTags => {
      console.log(2, prevTags);
      return prevTags.includes(tag)
        ? prevTags.filter(prevTag => prevTag !== tag)
        : prevTags.concat(tag);
    });
  }, []);

  const onShowTags = useCallback(() => {
    setShowTags(prevState => {
      !prevState && swiper.current.update();
      return !prevState;
    });
  }, []);

  const onCheckTagInPost = useCallback(tag => {
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
