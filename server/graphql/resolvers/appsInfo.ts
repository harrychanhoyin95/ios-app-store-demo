import axios from 'axios';
import _ from "lodash";

const FreeAppsQueries = {
  allFreeApps: async (parent, args, ctx) => {
    try {
      const appsList = await axios.get('https://itunes.apple.com/hk/rss/topfreeapplications/limit=100/json')
        .then(result => result.data.feed.entry)

      const detailedAppsList = await Promise.all(appsList.map(async(a) => {
        const singleApp = await axios.get(`https://itunes.apple.com/hk/lookup?id=${a.id.attributes["im:id"]}`)
          .then(result => result.data.results[0])

        return {
          title: singleApp.trackName,
          images: {
            artworkUrl60: singleApp.artworkUrl60,
            artworkUrl100: singleApp.artworkUrl100,
            artworkUrl512: singleApp.artworkUrl512
          },
          category: singleApp.genres[0],
          rating: singleApp.averageUserRating,
          ratingCount: singleApp.userRatingCount
        }
      }))

      const offset = _.get(args, "offset", 0);
      const first = _.get(args, "first", undefined);

      const freeAppsList = first === undefined ? (
        detailedAppsList.slice(offset) 
      ) : (
        detailedAppsList.slice(offset, offset + first) 
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