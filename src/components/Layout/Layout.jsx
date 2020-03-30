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
  const { datoCmsBlog } = useStaticQuery(graphql`
    query {
      datoCmsBlog {
        title
        description
      }
    }
  `);

  return (
    <S.Container>
      <Header
        siteTitle={datoCmsBlog.title}
        siteDescription={datoCmsBlog.description}
      />
      <S.Main>{children}</S.Main>
    </S.Container>
  );
};

Layout.propTypes = propTypes;

export default Layout;
