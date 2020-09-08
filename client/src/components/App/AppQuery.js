import { gql } from '@apollo/client';

const GET_FREE_APPS_LIST_QUERY = gql`
  query GetFreeAppsList($limit: Int, $offset: Int) {
    allFreeApps(limit: $limit, offset: $offset) {
      freeApps {
        title
        images {
          artworkUrl60
          artworkUrl512
          artworkUrl100
        }
        category
        rating
        ratingCount
      }
      totalCount
    }
  }
`;

export { GET_FREE_APPS_LIST_QUERY };
