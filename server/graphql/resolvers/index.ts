import { FreeAppsQueries } from './freeApps';
import { GrossingAppsQueries } from './grossingApps';

const rootResolver = {
  Query: {
    ...FreeAppsQueries,
    ...GrossingAppsQueries
  }
}

export default rootResolver;