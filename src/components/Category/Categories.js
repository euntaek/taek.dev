/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

import useCategories from "../../hooks/useCateroies";
import Category from "./Category";

const style = css`
  margin: 0 16px;
  button {
    margin-right: 8px;
  }
`;

function Categories({ selectedCategory, selectCategory }) {
  const categories = useCategories();

  return (
    <div css={style} className="categories" role="tablist">
      <Category title="all" selected={selectedCategory} selectCategory={selectCategory} />
      {categories.map(category => (
        <Category
          title={category.fieldValue}
          selected={selectedCategory}
          selectCategory={selectCategory}
          key={category.fieldValue}
        />
      ))}
    </div>
  );
}

export default React.memo(Categories);
