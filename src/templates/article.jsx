import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import dateFormat from 'dateformat';
import readingTime from 'reading-time';
import PropTypes from 'prop-types';
import { DiscussionEmbed } from 'disqus-react';

import Layout from '../components/Layout/Layout';

const Title = styled.h2`
  margin-bottom: 16px;
  color: #A462FF;
`;

const Info = styled.p`
  font-size: 14px;
  margin: 0px;
  color: #bbb;
`;

const Content = styled.p`
  margin: 8px 0px;
  color: #bbb;
`;

const propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    article: PropTypes.shape({
      content: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      meta: PropTypes.shape({
        createdAt: PropTypes.string.isRequired,
        firstPublishedAt: PropTypes.string.isRequired,
        isValid: PropTypes.bool.isRequired,
        publishedAt: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        updatedAt: PropTypes.string.isRequired,
      }).isRequired,
      slug: PropTypes.string.isRequired,
      sneakpeek: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

const Article = ({ pageContext: { slug }, data: { article } }) => {
  const { text: articleReadTime } = readingTime(article.content);
  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: slug },
  };

  return (
    <Layout>
      <Title>{article.title}</Title>
      <Info>
        {dateFormat(article.meta.publishedAt, 'dS mmmm yyyy')}
        {', '}
        {articleReadTime}
      </Info>
      <Content>{article.content}</Content>
      <DiscussionEmbed { ...disqusConfig } />
    </Layout>
  );
};

Article.propTypes = propTypes;

export const query = graphql`
  query fetchArticle($slug: String) {
    article: datoCmsArticle(slug: { eq: $slug}) {
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
`;

export default Article;
