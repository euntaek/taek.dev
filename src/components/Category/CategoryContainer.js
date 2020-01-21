import React, { useState, useLayoutEffect, useRef, useCallback } from "react";
import Swiper from "swiper";

import Categories from "./Categories";
import Tags from "./Tags";
import ShowTagsButton from "./ShowTagsButton";

function CategoryContainer({ category, tags, onSelectCategory, onCheckTag }) {
  const [showTags, setShowTags] = useState(false);
  const swiper = useRef(null);

  useLayoutEffect(() => {
    swiper.current = new Swiper(".swiper-container", {
      slidesPerView: "auto",
      spaceBetween: 16,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
    });
    return () => {
      swiper.current.destroy();
    };
  }, [category]);

  useLayoutEffect(() => {
    swiper.current.update();
  }, [tags]);

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
