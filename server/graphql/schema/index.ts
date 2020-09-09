import { gql, ApolloServerExpressConfig } from 'apollo-server-express';

import resolvers from '../resolvers/index';

const typeDefs = gql`
  type Query {
    allFreeApps (
      limit: Int,
      offset: Int
    ): FreeAppsResult!

    allGrossingApps: GrossingAppsResult!
    allSearchedApps (
      filter: String
    ): SearchResult!
  }

  type FreeAppsResult {
    freeApps: [Apps]!
    totalCount: Int
  }

  type GrossingAppsResult {
    grossingApps: [Apps]!
  }

  type SearchResult {
    searchedApps: [Apps]!
  }

  type Apps {
    title: String
    description: String
    author: String
    images: AppsImage
    category: String
    rating: Float
    ratingCount: Int
  }

  type AppsImage {
    artworkUrl60: String
    artworkUrl100: String
    artworkUrl512: String
  }
`
const schema: ApolloServerExpressConfig = {
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
}

export default schema;