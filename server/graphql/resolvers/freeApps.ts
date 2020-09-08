import _ from "lodash";

import localFreeAppsLists from "../../freeAppsList.json"

const FreeAppsQueries = {
  allFreeApps: async (parent, args, ctx) => {
    try {
      const { detailedAppsList } = localFreeAppsLists

      const offset = _.get(args, "offset", 0);
      const limit = _.get(args, "limit", undefined);

      const freeAppsList = limit === undefined ? (
        detailedAppsList.slice(offset) 
      ) : (
        detailedAppsList.slice(offset, offset + limit) 
      )

      return {
        freeApps: freeAppsList,
        totalCount: freeAppsList.length
      }
    } catch (err) {
      throw err;
    }
  }
}

export { FreeAppsQueries };