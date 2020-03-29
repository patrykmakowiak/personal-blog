import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from '../Header/Header';
import './layout.css';
import * as S from './styles';

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
    <S.Container>
      <Header
        siteTitle={data.datoCmsBlog.name}
        siteDescription={data.datoCmsBlog.description}
      />
      <S.Main>{children}</S.Main>
    </S.Container>
  );
};

Layout.propTypes = propTypes;

export default Layout;
