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

function MainItem({ category, selected }) {
  return (
    <button
      id={`${category}-anchor`}
      css={style}
      className="main-item"
      // aria-label={`view ${category} posts`}
      aria-controls={category}
      role="tab"
      aria-selected={selected === category}
    >
      {category.toUpperCase()}
    </button>
  );
}

export default MainItem;
