import React from "react";
import { css } from "@emotion/react";

import useCategories from "../../hooks/useCateroies";
import Category from "./Category";
import ShowTagsButton from "./ShowTagsButton";

const style = css`
  display: inline;
`;

function Categories({ selectedCategory, onSelectCategory, showTags, onShowTags }) {
  const categories = useCategories();

  return (
    <div css={style} className="categories" role="tablist">
      <Category
        categoryName="all"
        selected={selectedCategory}
        onSelectCategory={onSelectCategory}
      />
      {categories.map((category) => (
        <Category
          categoryName={category.fieldValue}
          selected={selectedCategory}
          onSelectCategory={onSelectCategory}
          key={category.fieldValue}
        />
      ))}
      <ShowTagsButton showTags={showTags} onShowTags={onShowTags} />
    </div>
  );
}

export default React.memo(Categories);
