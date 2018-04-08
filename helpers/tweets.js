const t = require('./twitterConfig')
const Db = require('./toDb')

const { fromAccount, tweetCount }  = require('../cronConfig')

module.exports = {
  getTwitter: async (tweetCb) => {
    const lastId = await Db.getLatestId()
    let params = {
      screen_name: fromAccount,
      count: tweetCount,
    };
    if (lastId != 0) {
      params = {
        screen_name: fromAccount,
        count: tweetCount,
        since_id: lastId
      };
    }
    t.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
        let toTweetBankForSave = []
        tweets.forEach(eachTweet => {
          toTweetBankForSave.push({
            name: params.screen_name,
            twitterId: eachTweet.id_str,
            img: eachTweet.entities.media[0].media_url_https,
            createdAt: new Date(eachTweet.created_at),
          })
        })
        if(toTweetBankForSave.length > 0) {
          Db.save(toTweetBankForSave)
        }
        tweetCb(toTweetBankForSave)
      }
    })
  }
};
