import React from "react";
import { css } from "@emotion/react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import useTags from "../../hooks/useTags";
import Tag from "./Tag";

const style = (showTags) => {
  return css`
    margin: 1.25rem -1.25rem ${showTags ? "3.5rem" : 0};
    height: ${showTags ? "3.75rem" : "0"};
    border-top: ${showTags ? "1px" : "0"} solid;
    box-sizing: border-box;
    border-bottom: ${showTags ? "1px" : "0"} solid;
    transition: all 300ms ease-in-out ${showTags ? "0ms" : "300ms"};

    .swiper {
      font-size: 13px;
      width: auto;
      height: 100%;
      display: flex;
    }
    .swiper-wrapper {
      padding: 0;
      list-style: none;
    }
    .swiper-slide {
      width: auto;
      height: auto;
      padding-top: 4px;
      border: none;
      outline: none;
    }
    .swiper-pagination {
      /* transition: <property> <duration> <timing-function> <delay>; */
      transition: opacity 300ms ease-in-out ${showTags ? "300ms" : "0ms"};
      opacity: ${showTags ? "1" : "0"};
    }
  `;
};

function Tags({ selectedCategory, checkedTags, onCheckTag, showTags }) {
  const tags = useTags(selectedCategory);

  const checkedTagsData = checkedTags.map((checkedTag) => {
    return tags.find((tag) => tag.fieldValue === checkedTag);
  });

  const filteredTags = Array.from(new Set([...checkedTagsData, ...tags]));

  return (
    <div
      css={style(showTags)}
      id={`tags-${selectedCategory}`}
      className="tags"
      role="tabpanel"
      aria-labelledby={`category-${selectedCategory}`}
    >
      <Swiper
        modules={[Pagination]}
        spaceBetween={16}
        slidesPerView={"auto"}
        freeMode={true}
        pagination={{
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
          dynamicBullets: true,
        }}
      >
        <div className="swiper-pagination"></div>
        {filteredTags.map((tag) => (
          <SwiperSlide className="swiper-slide" key={tag.fieldValue}>
            <Tag tag={tag} checkedTags={checkedTags} onCheckTag={onCheckTag} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Tags;
