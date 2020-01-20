/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

import useCategories from "../../hooks/useCateroies";
import Category from "./Category";

const style = css`
  button {
    margin-right: 0.5rem;
  }
`;

function Categories({ selectedCategory, selectCategory }) {
  const categories = useCategories();

  return (
    <div css={style} className="categories" role="tablist">
      <Category
        categoryName="all"
        selected={selectedCategory}
        selectCategory={selectCategory}
      />
      {categories.map(category => (
        <Category
          categoryName={category.fieldValue}
          selected={selectedCategory}
          selectCategory={selectCategory}
          key={category.fieldValue}
        />
      ))}
    </div>
  );
}

export default React.memo(Categories);
