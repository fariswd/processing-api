const mongoose = require('mongoose');

const tweetBankSchema = new mongoose.Schema({
  name: String,
  twitterId: String,
  img: String,
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const TweetBank = mongoose.model('TweetBank', tweetBankSchema)

module.exports = TweetBank
