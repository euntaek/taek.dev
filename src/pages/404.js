import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

function NotFoundPage({ location }) {
  return (
    <Layout location={location}>
      <SEO title="404: Not found" url="/404" />
      <h1>404!</h1>
      <p>없는 페이지입니다.</p>
    </Layout>
  );
}

export default NotFoundPage;
