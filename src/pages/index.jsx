import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Blog from '../components/blog';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Blog />
  </Layout>
);

export default IndexPage;
