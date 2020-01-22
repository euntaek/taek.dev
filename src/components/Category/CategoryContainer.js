import React, { useState, useEffect, useRef, useCallback } from "react";
import Swiper from "swiper";

import Categories from "./Categories";
import ShowTagsButton from "./ShowTagsButton";
import Tags from "./Tags";

import * as storage from "../../utils/storage";

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

function CategoryContainer({ category, tags, onSelectCategory, onCheckTag }) {
  const [showTags, setShowTags] = useState(false);
  const swiper = useRef(null);

  useEffect(() => {
    storage.getShowTags() && setTimeout(onShowTags, 300);
  }, []);

  useEffect(() => {
    swiper.current = swiperjs();
    return () => {
      swiper.current.destroy();
    };
  }, [category]);

  useEffect(() => {
    swiper.current.update();
  }, [tags]);

  useEffect(() => {
    storage.setShowTags(showTags);
  }, [showTags]);

  const onShowTags = useCallback(() => {
    setShowTags(prevState => {
      !prevState && swiper.current.update();
      return !prevState;
    });
  }, []);

  return (
    <div id="category" style={{ marginTop: "3.5rem" }}>
      <Categories selectedCategory={category} onSelectCategory={onSelectCategory} />
      <ShowTagsButton showTags={showTags} onShowTags={onShowTags} />
      <Tags
        selectedCategory={category}
        checkedTags={tags}
        onCheckTag={onCheckTag}
        showTags={showTags}
      />
    </div>
  );
}

export default CategoryContainer;
