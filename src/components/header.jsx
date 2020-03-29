import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const SiteTitle = styled.h1`
  margin: 16px 0;
  font-weight: 400;
`;

const TitleLink = styled(Link)`
  color: #bbb;
  text-decoration: none;
  font-size: 42px;
`;

const Description = styled.div`
  background-color: #242526;
  color: #bbb;
  padding: 8px 16px;
  font-size: 14px;
  display: inline-flex;
  border-radius: 5px;
`;

const propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
};

const defaultProps = {
  siteTitle: '',
  siteDescription: '',
};

const Header = ({ siteTitle, siteDescription }) => (
  <header>
    <div>
      <TitleLink
        to="/"
      >
        <SiteTitle>
          {siteTitle}
        </SiteTitle>
        <Description>
          {siteDescription}
        </Description>
      </TitleLink>
    </div>
  </header>
);

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
