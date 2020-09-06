const express = require('express')
const fetch = require('node-fetch')
const cors = require('cors')

const app = express()
 
app.use(cors())

app.get('/', function (req, res) {
  fetch('https://itunes.apple.com/hk/rss/topfreeapplications/limit=100/json')
    .then(res => res.json())
    .then(json => json.feed.entry)
    .then(entry => {
      res.status(200).json({
        appList: entry
      })
    })
})
 
app.listen(4000, (err) => {
  console.log(`
    ################################################
    🛡️  Server listening on port: 4000 🛡️ 
    ################################################
  `)
})