import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import './layout.css';

const Container = styled.div`
  max-width: 630px;
  margin: 0 auto;
`;

const Main = styled.main`
  margin: 24px 0;
`;

const propTypes = {
  children: PropTypes.node.isRequired,
};

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      datoCmsBlog {
        name
        description
      }
    }
  `);

  return (
    <Container>
      <Header
        siteTitle={data.datoCmsBlog.name}
        siteDescription={data.datoCmsBlog.description}
      />
      <Main>{children}</Main>
    </Container>
  );
};

Layout.propTypes = propTypes;

export default Layout;
