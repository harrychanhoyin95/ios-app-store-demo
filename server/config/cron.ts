import fs from 'fs'
import cron from 'node-cron'
import axios from 'axios';

class Cron {
  public tenMinutes = ():void => {
    cron.schedule("*/30 * * * * *", async() => {
      console.log("Fetching Top Free Apps...");

      const appsList = await axios.get('https://itunes.apple.com/hk/rss/topfreeapplications/limit=100/json')
        .then(result => result.data.feed.entry)

      const detailedAppsList = await Promise.all(appsList.map(async(a) => {
        const singleApp = await axios.get(`https://itunes.apple.com/hk/lookup?id=${a.id.attributes["im:id"]}`)
          .then(result => result.data.results[0])

        return {
          title: singleApp.trackName,
          description: a.summary.label.replace(/\u2028/g, ""),
          author: singleApp.artistName,
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

      fs.writeFileSync('freeAppsList.json', JSON.stringify({ detailedAppsList }), 'utf8')
    });
  }

  public secondTenMinutes = ():void => {
    cron.schedule("*/30 * * * * *", async() => {
      console.log("Fetching Grossing Apps...");

      const appsList = await axios.get('https://itunes.apple.com/hk/rss/topgrossingapplications/limit=10/json')
      .then(result => result.data.feed.entry)

      const detailedAppsList = await Promise.all(appsList.map(async(a) => {
        const singleApp = await axios.get(`https://itunes.apple.com/hk/lookup?id=${a.id.attributes["im:id"]}`)
          .then(result => result.data.results[0])

        return {
          title: singleApp.trackName,
          description: a.summary.label.replace(/\u2028/g, ""),
          author: singleApp.artistName,
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

      fs.writeFileSync('grossingAppsList.json', JSON.stringify({ detailedAppsList }), 'utf8')
    });
  }
}

export default Cron;
