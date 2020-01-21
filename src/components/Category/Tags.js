/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import useTags from "../../hooks/useTags";
import Tag from "./Tag";

const style = css`
  margin: 1.25rem -1.25rem 0;
  height: 3.75rem;
  border-top: 1px solid;
  box-sizing: border-box;
  border-bottom: 1px solid;

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
`;

function Tags({ selectedCategory, checkedTags, onCheckTag }) {
  const tags = useTags(selectedCategory);

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
