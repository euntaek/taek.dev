import React from "react";
import { css } from "@emotion/core";
import { Link } from "gatsby";

import useSiteMetadata from "../../hooks/useSiteMetadata";
import ThemeContainer from "./ThemeContainer";

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

  return (
    <header css={style(pathName)} id="header">
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
