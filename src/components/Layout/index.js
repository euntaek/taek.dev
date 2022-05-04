import React from "react";
import { css } from "@emotion/react";
import Header from "../Header/Header";
import Footer from "../Footer";

const style = css`
  min-width: 300px;
  max-width: 656px;
  margin: 0 auto;
  padding: 1.25rem;
`;

const Layout = ({ location, children }) => {
  return (
    <div css={style}>
      <Header pathName={location && location.pathname} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
