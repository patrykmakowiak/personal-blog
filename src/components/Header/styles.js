import { Link } from 'gatsby';
import styled from 'styled-components';

export const Header = styled.div`
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const SiteTitle = styled.h1`
  margin: 16px 0;
  font-weight: 400;
`;

export const TitleLink = styled(Link)`
  color: #bbb;
  text-decoration: none;
  font-size: 42px;
`;

export const Description = styled.div`
  background-color: #242526;
  color: #bbb;
  padding: 8px 16px;
  font-size: 14px;
  display: inline-flex;
  border-radius: 5px;
`;