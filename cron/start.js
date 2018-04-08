const CronJob = require('cron').CronJob;
const tweets  = require('../helpers/tweets')
const writeLog  = require('../helpers/log')
const { cronConfig, timeRegion }  = require('../cronConfig')

new CronJob(cronConfig, () => {
  tweets.getTwitter(tweet => {
    if(tweet.length > 0) {
      writeLog()
    }
  })
}, null, true, timeRegion);
