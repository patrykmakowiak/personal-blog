import React from 'react';
import styled from 'styled-components';
import dateFormat from 'dateformat';
import readingTime from 'reading-time';
import { useStaticQuery, graphql } from 'gatsby';

const List = styled.ul`
  margin: 0;
  list-style-type: none;
  line-height: initial;
`;

const Link = styled.a`
  display: block;
  margin: 28px 0;
  background-color: #242526;
  border-radius: 5px;
  text-decoration: none;
`;

const ListItem = styled.li`
  padding: 12px 24px;
`;

const Date = styled.div`
  font-size: 12px;
  margin-bottom: 8px;
  color: #bbb;
`;

const Title = styled.div`
  color: #A462FF;
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 3px;
`;

const ReadTime = styled.div`
  font-size: 12px;
  margin-bottom: 10px;
  color: #bbb;
`;

const Sneakpeek = styled.div`
  font-size: 14px;
  color: #bbb;
`;

const Blog = () => {
  const { allDatoCmsArticle } = useStaticQuery(
    graphql`
      query {
        allDatoCmsArticle {
          edges {
            node {
              id
              title
              slug
              sneakpeek
              content
              meta {
                createdAt
                updatedAt
                publishedAt
                firstPublishedAt
                isValid
                status
              }
            }
          }
        }
      }
    `,
  );

  const list = allDatoCmsArticle.edges;

  return (
    <List>
      {list.map(({ node }) => {
        const { text: articleReadTime } = readingTime(node.content);
        return (
          <Link
            key={node.id}
            href={node.slug}
          >
            <ListItem>
              <Date>
                {dateFormat(node.meta.publishedAt, 'dS mmmm yyyy')}
              </Date>
              <Title>
                {node.title}
              </Title>
              <ReadTime>
                {articleReadTime}
              </ReadTime>
              <Sneakpeek>
                {node.sneakpeek}
              </Sneakpeek>
            </ListItem>
          </Link>
        );
      })}
    </List>
  );
};

export default Blog;
