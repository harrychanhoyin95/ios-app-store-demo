import { FreeAppsQueries } from './freeApps'

const rootResolver = {
  Query: {
    ...FreeAppsQueries
  }
}

export default rootResolver;