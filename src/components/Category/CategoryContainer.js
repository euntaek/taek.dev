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

function CategoryContainer({
  selectedCategory,
  checkedTags,
  onSelectCategory,
  onCheckTag,
}) {
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
  }, [selectedCategory]);

  useEffect(() => {
    swiper.current.update();
  }, [checkedTags]);

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
    <div id="category" style={{ marginTop: "2.5rem", paddingTop: "1rem" }}>
      <Categories
        selectedCategory={selectedCategory}
        onSelectCategory={onSelectCategory}
      />
      <ShowTagsButton showTags={showTags} onShowTags={onShowTags} />
      <Tags
        selectedCategory={selectedCategory}
        checkedTags={checkedTags}
        onCheckTag={onCheckTag}
        showTags={showTags}
      />
    </div>
  );
}

export default CategoryContainer;
