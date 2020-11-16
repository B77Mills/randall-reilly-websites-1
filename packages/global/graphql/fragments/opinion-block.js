const gql = require('graphql-tag');

module.exports = gql`

fragment OpinionBlockContentFragment on Content {
  id
  type
  shortName
  siteContext {
    path
  }
  primarySection {
    id
    name
    fullName
    canonicalPath
  }
  ... on Authorable {
    authors {
      edges {
        node {
          id
          name
          title
          type
          siteContext {
            path
          }
          primaryImage {
            id
            src
            alt
          }
        }
      }
    }
  }
}

`;
