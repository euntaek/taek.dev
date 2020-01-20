/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { startCase } from "lodash";

const style = css`
  padding: 0.25rem 1rem;
  border: none;
  border-radius: 0.125rem;
  outline: none;
  cursor: pointer;
  transition: color 100ms ease-in-out;
  font-size: 1.25rem;
  font-weight: 400;
`;

function Category({ categoryName, selected, selectCategory }) {
  return (
    <button
      id={`category-${categoryName}`}
      css={style}
      className={`category ${categoryName === selected && "category-active"}`}
      // aria-label={`view ${category} posts`}
      aria-controls={`tags-${categoryName}`}
      role="tab"
      aria-selected={selected === categoryName}
      onClick={() => selectCategory(categoryName)}
    >
      {startCase(categoryName)}
    </button>
  );
}

export default Category;
