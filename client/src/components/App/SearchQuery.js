import { gql } from '@apollo/client';

const SEARCH_QUERY = gql`
  query GetSearchedAppsList($filter: String) {
    allSearchedApps(filter: $filter) {
      searchedApps {
        title
        description
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
  }
`;

export { SEARCH_QUERY };
