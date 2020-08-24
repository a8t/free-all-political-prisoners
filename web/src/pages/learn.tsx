import React from "react";

import Layout from "../components/shared/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <main className="prose">
      <h1>Learn</h1>

      <p>This page is under construction. Please check back soon!</p>
    </main>
  </Layout>
);

export default NotFoundPage;
