import _ from "lodash";

import grossingAppsList from "../../grossingAppsList.json"
import localFreeAppsLists from "../../freeAppsList.json"

const SearchAppsQueries = {
  allSearchedApps: async (parent, args, ctx) => {
    try {
      const searchedData = []

      const { detailedAppsList: grossingApps } = grossingAppsList
      const { detailedAppsList: freeApps } = localFreeAppsLists

      const filter = _.get(args, "filter", "");

      if (filter === "") return { searchedApps: [] }

      const fullList = [...grossingApps, ...freeApps]

      fullList.forEach(app => {
        const reg = new RegExp(filter, "gi")
        if (app.title.match(reg)) {
          searchedData.push(app)
        }
        if (app.description.match(reg)) {
          searchedData.push(app)
        }
        if (app.category.match(reg)) {
          searchedData.push(app)
        }
        if (app.author.match(reg)) {
          searchedData.push(app)
        }
      })

      const searchedApps = _.uniqWith(searchedData, _.isEqual)

      return {
        searchedApps
      }
    } catch (err) {
      throw err;
    }
  }
}

export { SearchAppsQueries };