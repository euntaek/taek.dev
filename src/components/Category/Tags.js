/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useEffect } from "react";
import Swiper from "swiper";

import useTags from "../../hooks/useTags";
import Tag from "./Tag";

const style = css`
  margin-top: 20px;
  height: 60px;
  border-top: 1px solid;
  border-bottom: 1px solid;

  .swiper-container {
    font-size: 13px;
    width: auto;
    height: 100%;
    display: flex;
  }
  .swiper-slide {
    width: auto;
    height: auto;
    padding-top: 4px;
    border: none;
    outline: none;
  }
`;

function Tags({ selectedCategory, checkedTags, checkTags }) {
  const tags = useTags(selectedCategory);

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    var swiper = new Swiper(".swiper-container", {
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
      swiper.destroy();
    };
  }, [selectedCategory]);

  return (
    <div
      css={style}
      id={`tags-${selectedCategory}`}
      className="tags"
      role="tabpanel"
      aria-labelledby={`category-${selectedCategory}`}
    >
      <div className="swiper-container" role="group">
        <ul className="swiper-wrapper">
          {tags.map(tag => (
            <li className="swiper-slide" key={tag.fieldValue}>
              <Tag tag={tag} checkedTags={checkedTags} checkTags={checkTags} />
            </li>
          ))}
        </ul>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
}

export default Tags;
