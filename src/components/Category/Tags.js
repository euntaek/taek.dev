/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import useTags from "../../hooks/useTags";
import Tag from "./Tag";

const style = showTags => {
  return css`
    margin: 1.25rem -1.25rem ${showTags ? "3.5rem" : 0};
    height: ${showTags ? "3.75rem" : "0"};
    border-top: ${showTags ? "1px" : "0"} solid;
    box-sizing: border-box;
    border-bottom: ${showTags ? "1px" : "0"} solid;
    transition: all 300ms ease-in-out ${showTags ? "0ms" : "300ms"};

    .swiper-container {
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
  const checkedTagsData = tags.filter(tag => {
    return checkedTags.includes(tag.fieldValue);
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
      <div className="swiper-container" role="group">
        <ul className="swiper-wrapper">
          {filteredTags.map(tag => (
            <li className="swiper-slide" key={tag.fieldValue}>
              <Tag tag={tag} checkedTags={checkedTags} onCheckTag={onCheckTag} />
            </li>
          ))}
        </ul>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
}

export default Tags;
