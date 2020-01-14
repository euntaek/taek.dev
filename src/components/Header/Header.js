/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Link } from "gatsby";
import React, { useEffect } from "react";
import _ from "lodash";

import useSiteMetadata from "../../hooks/useSiteMetadata";
import ThemeContainer from "./ThemeContainer";
import tree from "../SVG/tree";
import { useRef } from "react";

const style = css`
  margin: 24px 16px 0;
  max-width: 100%;
  height: 80px;
  display: flex;
  flex-flow:row wrap-reverse; 
  align-items: center;
  justify-content: space-between; 
  .title{
    margin: 0; 
    font: bold 3rem/1 "rubik", san-serif;
    }
  .title:after {
    background: url("${tree}") no-repeat;
    display: inline-block;
    width: 24px;
    background-size: contain;
    height: 39px;
    content: "";
    margin-left: 4px; 
    transform: rotate(-15deg);
  }
`;

function Header({ pathName }) {
  console.log("header", pathName);
  const { title } = useSiteMetadata();
  const header = useRef(null);

  useEffect(() => {
    const headerWidth = [...header.current.children].reduce((acc, node) => {
      return acc + node.offsetWidth;
    }, 0);
    window.addEventListener("resize", onResize(headerWidth), false);
    1;
    return () => {
      window.removeEventListener("resize", onResize(headerWidth), false);
    };
  }, []);

  const onResize = headerWidth =>
    _.debounce(() => {
      // title + theme = 296
      // innerWidth = 343
      // siteWidth = 328 ( title(260) + theme(36) + margin(16))
      // scrollBarWidth = 15 (innerWidth(343) - siteWidth(343))
      console.log("onresize", headerWidth);
    }, 300);

  return (
    <header ref={header} css={style} id="header">
      {pathName === "/" ? (
        <h1 className="title">
          <Link to="/">{title}</Link>
        </h1>
      ) : (
        <h3>
          <Link to="/">{title}</Link>
        </h3>
      )}
      <div className="themeContainer">
        <ThemeContainer />
      </div>
    </header>
  );
}

export default React.memo(Header);
