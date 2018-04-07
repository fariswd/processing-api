const t = require('./twitterConfig')
const Db = require('./toDb')

module.exports = {
  getTwitter: async (tweetCb) => {
    const lastId = await Db.getLatestId()
    const params = {
      screen_name: 'Jkt48Processing',
      count: 10,
      since_id: lastId,
    };
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
        Db.save(toTweetBankForSave)
        tweetCb(tweets)
      }
    })
  }
};
