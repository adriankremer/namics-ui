import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <h1>Pulsar UI</h1>
  </Layout>
);

export default IndexPage;
