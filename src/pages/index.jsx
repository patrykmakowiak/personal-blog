import React from 'react';

import Layout from '../components/Layout/Layout';
import SEO from '../components/Seo/Seo';
import Blog from '../components/Blog/Blog';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Blog />
  </Layout>
);

export default IndexPage;
