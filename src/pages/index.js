import React from "react";

import Layout from "../components/Layout";

import Bio from "../components/Bio";
import Category from "../components/Category";
import PostList from "../components/Blog";

const index = () => {
  return (
    <Layout>
      <Bio />
      <main>
        <Category />
        <PostList />
      </main>
    </Layout>
  );
};

export default index;
