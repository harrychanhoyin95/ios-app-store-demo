import axios from 'axios';

const FreeAppsQueries = {
  appsInfo: async () => { 
    try {
      const appsList = await axios.get('https://itunes.apple.com/hk/rss/topfreeapplications/limit=100/json')
        .then(result => result.data.feed.entry)

      const parsedAppsList = await Promise.all(appsList.map(async(a) => {
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

      return parsedAppsList;
    } catch (err) {
      throw err;
    }
  }
}

export { FreeAppsQueries };