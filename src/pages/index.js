import React from "react";

import Layout from "../components/Layout";

import Bio from "../components/Bio";
import Category from "../components/Category";
import Contents from "../components/Contents";

const index = () => {
  return (
    <Layout>
      <Bio />
      <main>
        <Category />
        <Contents />
      </main>
    </Layout>
  );
};

export default index;
