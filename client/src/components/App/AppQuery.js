import { gql } from '@apollo/client';

const GET_FREE_APPS_LIST_QUERY = gql`
  query GetFreeAppsList($first: Int, $offset: Int) {
    allFreeApps(first: $first, offset: $offset) {
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
