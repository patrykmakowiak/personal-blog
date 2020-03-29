import React from 'react';
import dateFormat from 'dateformat';
import readingTime from 'reading-time';
import { useStaticQuery, graphql } from 'gatsby';

import * as S from './styles';

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
    <S.List>
      {list.map(({ node }) => {
        const { text: articleReadTime } = readingTime(node.content);
        return (
          <S.ListItemLink
            key={node.id}
            to={node.slug}
          >
            <S.ListItem>
              <S.Date>
                {dateFormat(node.meta.publishedAt, 'dS mmmm yyyy')}
              </S.Date>
              <S.Title>
                {node.title}
              </S.Title>
              <S.ReadTime>
                {articleReadTime}
              </S.ReadTime>
              <S.Sneakpeek>
                {node.sneakpeek}
              </S.Sneakpeek>
            </S.ListItem>
          </S.ListItemLink>
        );
      })}
    </S.List>
  );
};

export default Blog;
