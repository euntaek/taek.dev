/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useEffect } from "react";
import Swiper from "swiper";
import SubItem from "./SubItem";

const style = css`
  margin-top: 20px;
  height: 60px;
  border-top: 1px solid;
  border-bottom: 1px solid;

  .swiper-container {
    font-size: 13px;
    width: auto;
    height: 100%;
    display: flex;
  }
  .swiper-slide {
    width: auto;
    height: auto;
    padding-top: 8px;
    border: none;
    outline: none;
  }
`;

function SubCategory({ slides, selected }) {
  useEffect(() => {
    var swiper = new Swiper(".swiper-container", {
      slidesPerView: "auto",
      spaceBetween: 16,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
    });
  }, []);

  return (
    <div
      css={style}
      id={selected}
      className="sub-category"
      role="tabpanel"
      aria-labelledby={`main-${selected}`}
    >
      <div className="swiper-container">
        <div className="swiper-wrapper" role="tablist">
          {slides.map(item => (
            <div className="swiper-slide" key={item}>
              <SubItem subItem={item} selected="slide1" key={item} />
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
}

export default SubCategory;
