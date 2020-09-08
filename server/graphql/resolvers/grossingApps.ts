import _ from "lodash";

import grossingAppsList from "../../grossingAppsList.json"

const GrossingAppsQueries = {
  allGrossingApps: async () => {
    try {
      const { detailedAppsList } = grossingAppsList

      return {
        grossingApps: detailedAppsList
      }
    } catch (err) {
      throw err;
    }
  }
}

export { GrossingAppsQueries };