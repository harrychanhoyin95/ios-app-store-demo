import { FreeAppsQueries } from './freeApps';
import { GrossingAppsQueries } from './grossingApps';
import { SearchAppsQueries } from './search';

const rootResolver = {
  Query: {
    ...FreeAppsQueries,
    ...GrossingAppsQueries,
    ...SearchAppsQueries
  }
}

export default rootResolver;