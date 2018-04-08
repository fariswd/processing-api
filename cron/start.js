const CronJob = require('cron').CronJob;
const tweets  = require('../helpers/tweets')
const writeLog  = require('../helpers/log')
const { cronConfig, timeRegion }  = require('../cronConfig')

new CronJob(cronConfig, function() {
  tweets.getTwitter()
  writeLog()
}, null, true, timeRegion);
