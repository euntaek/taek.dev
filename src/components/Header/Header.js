import React, { useEffect } from "react";
import { css } from "@emotion/core";
import { Link } from "gatsby";
import _ from "lodash";

import useSiteMetadata from "../../hooks/useSiteMetadata";
import ThemeContainer from "./ThemeContainer";
import { useRef } from "react";

const style = pathName => {
  const height = pathName === "/" ? "5rem" : "3rem";
  const fontSize = pathName === "/" ? "3rem" : "1.75rem";

  return css`
    margin-bottom: 0.5rem;
    padding: 1.5rem 0 0;
    max-width: 100%;
    height: ${height};
    display: flex;
    flex-flow: row wrap-reverse;
    align-items: center;
    justify-content: space-between;
    .title {
      margin: 0;
      font: bold ${fontSize} / 1 "rubik", san-serif;
      a {
        &:hover,
        &:link,
        &:visited {
          text-decoration: none;
        }
      }
    }
  `;
};
function Header({ pathName }) {
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
    <header ref={header} css={style(pathName)} id="header">
      {pathName === "/" ? (
        <h1 className="title">
          <Link to="/">{title}</Link>
        </h1>
      ) : (
        <h3 className="title">
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
