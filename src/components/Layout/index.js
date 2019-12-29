/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Header from "../Header/Header";
import Footer from "../Footer";

const style = css`
  min-width: 320px;
  max-width: 696px;
  margin: 0 auto;
`;

const Layout = ({ children }) => {
  return (
    <div css={style}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
