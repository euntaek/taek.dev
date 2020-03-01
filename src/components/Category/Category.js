/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const style = css`
  margin-right: 0.5rem;
  padding: 0.25rem 0.875rem;
  border: none;
  border-radius: 0.125rem;
  outline: none;
  cursor: pointer;
  transition: color 100ms ease-in-out;
  font-size: 1.125rem;
  font-weight: 500;
`;

function Category({ categoryName, selected, onSelectCategory }) {
  return (
    <button
      id={`category-${categoryName}`}
      css={style}
      className={`category ${categoryName === selected && "category-active"}`}
      // aria-label={`view ${category} posts`}
      aria-controls={`tags-${categoryName}`}
      role="tab"
      aria-selected={selected === categoryName}
      onClick={() => onSelectCategory(categoryName)}
    >
      {categoryName.toUpperCase()}
    </button>
  );
}

export default Category;
