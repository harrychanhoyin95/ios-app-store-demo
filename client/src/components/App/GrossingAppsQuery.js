import { gql } from '@apollo/client';

const GET_GROSSING_APPS_LIST_QUERY = gql`
  query GetGrossingAppsList {
    allGrossingApps {
      grossingApps {
        title
        images {
          artworkUrl60
          artworkUrl512
          artworkUrl100
        }
        link
        category
        rating
        ratingCount
      }
    }
  }
`;

export { GET_GROSSING_APPS_LIST_QUERY };
