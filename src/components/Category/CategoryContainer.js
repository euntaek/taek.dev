import React, { useState, useLayoutEffect, useRef } from "react";
import Swiper from "swiper";

import Categories from "./Categories";
import Tags from "./Tags";

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

  const onShowTags = () => {};
  return (
    <div id="category" style={{ marginTop: "2.5rem" }}>
      <Categories selectedCategory={category} onSelectCategory={onSelectCategory} />
      <Tags selectedCategory={category} checkedTags={tags} onCheckTag={onCheckTag} />
    </div>
  );
}

export default CategoryContainer;
