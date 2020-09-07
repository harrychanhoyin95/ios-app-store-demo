import { gql } from '@apollo/client';

const GET_FREE_APPS_LIST_QUERY = gql`
  query GetFreeAppsList {
    appsInfo {
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
  }
`;

export { GET_FREE_APPS_LIST_QUERY };
