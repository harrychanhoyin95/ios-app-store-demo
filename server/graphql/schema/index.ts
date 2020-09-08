import { gql, ApolloServerExpressConfig } from 'apollo-server-express';

import resolvers from '../resolvers/index';

const typeDefs = gql`
  type Query {
    allFreeApps (
      first: Int,
      offset: Int
    ): FreeAppsResult!
  }

  type FreeAppsResult {
    freeApps: [Apps]!
    totalCount: Int
  }

  type Apps {
    title: String
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