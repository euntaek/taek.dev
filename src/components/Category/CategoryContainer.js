import React from "react";

import Categories from "./Categories";
import Tags from "./Tags";

function CategoryContainer({
  selectedCategory,
  checkedTags,
  showTags,
  onSelectCategory,
  onCheckTag,
  onShowTags,
}) {
  return (
    <div id="category" style={{ marginTop: "2.5rem", paddingTop: "1rem" }}>
      <Categories
        selectedCategory={selectedCategory}
        onSelectCategory={onSelectCategory}
        showTags={showTags}
        onShowTags={onShowTags}
      />
      <Tags
        selectedCategory={selectedCategory}
        checkedTags={checkedTags}
        onCheckTag={onCheckTag}
        showTags={showTags}
      />
    </div>
  );
}

export default CategoryContainer;
