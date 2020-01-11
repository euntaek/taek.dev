/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { HelmetProvider } from "react-helmet-async";

import Header from "../Header/Header";
import Footer from "../Footer";

const style = css`
  min-width: 300px;
  max-width: 696px;
  margin: 0 auto;
  padding-bottom: 16px;
`;

const Layout = ({ children }) => {
  return (
    <HelmetProvider>
      <div css={style}>
        <Header />
        {children}
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Layout;
