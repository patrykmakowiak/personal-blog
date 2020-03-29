const wrapper = (promise) => promise.then((result) => {
  if (result.errors) {
    throw result.errors;
  }
  return result;
});

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await wrapper(
    graphql(`
      {
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
    `),
  );
  const articles = result.data.allDatoCmsArticle.edges;
  const articleTemplate = require.resolve('./src/templates/article.jsx');

  articles.forEach(({ node }) => {
    const { slug } = node;

    createPage({
      path: slug,
      component: articleTemplate,
      context: {
        slug,
      },
    });
  });
};
