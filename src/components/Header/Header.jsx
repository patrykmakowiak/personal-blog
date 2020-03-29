import PropTypes from 'prop-types';
import React from 'react';
import * as S from './styles';

const propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
};

const defaultProps = {
  siteTitle: '',
  siteDescription: '',
};

const Header = ({ siteTitle, siteDescription }) => (
  <S.Header>
    <S.TitleLink
      to="/"
    >
      <S.SiteTitle>
        {siteTitle}
      </S.SiteTitle>
      <S.Description>
        {siteDescription}
      </S.Description>
    </S.TitleLink>
  </S.Header>
);

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
