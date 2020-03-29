import { Link } from 'gatsby';
import styled from 'styled-components';

export const List = styled.ul`
margin: 0;
list-style-type: none;
line-height: initial;
`;

export const ListItemLink = styled(Link)`
display: block;
margin: 16px 0;
background-color: #242526;
border-radius: 5px;
text-decoration: none;
@media (min-width: 768px) {
  margin: 24px 0;
}
`;

export const ListItem = styled.li`
padding: 12px 24px;
`;

export const Date = styled.div`
font-size: 12px;
margin-bottom: 8px;
color: #bbb;
`;

export const Title = styled.div`
color: #A462FF;
font-weight: bold;
font-size: 22px;
margin-bottom: 3px;
`;

export const ReadTime = styled.div`
font-size: 12px;
margin-bottom: 10px;
color: #bbb;
`;

export const Sneakpeek = styled.div`
font-size: 14px;
color: #bbb;
`;
