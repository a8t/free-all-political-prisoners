import React from "react";

import Layout from "../components/shared/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>Sorry, the page you're looking for wasn't found.</p>
  </Layout>
);

export default NotFoundPage;
