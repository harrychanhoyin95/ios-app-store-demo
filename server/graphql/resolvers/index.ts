import { FreeAppsQueries } from './appsInfo'

const rootResolver = {
  Query: {
    ...FreeAppsQueries
  }
}

export default rootResolver;