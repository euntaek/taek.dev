import React from "react";
import MainCategory from "./MainCategory";
import SubCategory from "./SubCategory";

const dummyData = ["all", "dev", "etc"];
const selected = "all";

const dummySlides = () => {
  const sliders = [];
  for (let i = 0; i < 20; i++) {
    sliders.push(`slide${i + 1}`);
  }
  return sliders;
};

function Category() {
  return (
    <div id="category" style={{ marginTop: "40px" }}>
      <MainCategory dummyData={dummyData} selected={selected} />
      <SubCategory selected={selected} slides={dummySlides()} />
    </div>
  );
}

export default Category;
