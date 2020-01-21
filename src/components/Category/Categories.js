import React from "react";
import { css } from "@emotion/core";

import useCategories from "../../hooks/useCateroies";
import Category from "./Category";

const style = css`
  display: inline;
  button {
    margin-right: 0.5rem;
  }
`;

function Categories({ selectedCategory, onSelectCategory }) {
  const categories = useCategories();

  return (
    <div css={style} className="categories" role="tablist">
      <Category
        categoryName="all"
        selected={selectedCategory}
        onSelectCategory={onSelectCategory}
      />
      {categories.map(category => (
        <Category
          categoryName={category.fieldValue}
          selected={selectedCategory}
          onSelectCategory={onSelectCategory}
          key={category.fieldValue}
        />
      ))}
    </div>
  );
}

export default React.memo(Categories);
