/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const style = css`
  width: 76px;
  height: 32px;
  font-size: 20px;
  font-weight: bold;
  border: none;
  border-radius: 15px;
  outline: none;
  cursor: pointer;
  transition: all 150ms ease-in-out;
`;

function MainItem({ mainItem, selected }) {
  return (
    <button
      id={`main-${mainItem}`}
      css={style}
      className={`main-item ${mainItem === selected && "main-category-active"}`}
      // aria-label={`view ${category} posts`}
      aria-controls={mainItem}
      role="tab"
      aria-selected={selected === mainItem}
    >
      {mainItem.toUpperCase()}
    </button>
  );
}

export default MainItem;
