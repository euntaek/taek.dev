/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const style = css`
  width: 76px;
  height: 32px;
  border: none;
  border-radius: 15px;
  outline: none;
  cursor: pointer;
  transition: all 150ms ease-in-out;
  font-size: 20px;
`;

function Category({ title, selected, selectCategory }) {
  return (
    <button
      id={`category-${title}`}
      css={style}
      className={`category ${title === selected && "category-active"}`}
      // aria-label={`view ${category} posts`}
      aria-controls={`tags-${title}`}
      role="tab"
      aria-selected={selected === title}
      onClick={() => selectCategory(title)}
    >
      {title.toUpperCase()}
    </button>
  );
}

export default Category;
