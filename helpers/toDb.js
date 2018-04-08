const TweetBank = require('../models/TweetBank');

module.exports = {
  save: async (item) => {
    try {
      const success = await TweetBank.create(item)
      console.log('success save', success)
    } catch (e) {
      console.log('err save to db', e)
    }
  },
  getLatestId: async () => {
    try {
      const success = await TweetBank.findOne().sort({createdAt: -1})
      if(success == null) {
        return 0
      } else {
        return success.twitterId
      }
    } catch (e) {
      console.log('err get latest id', e)
      return '0'
    }
  },
  getTweetBank: async (page) => {
    try {
      const skip = page ? (+page - 1) * 5 : 0
      const success = await TweetBank.find().sort({createdAt: -1}).limit(5).skip(skip)
      return {
        status: 'OK',
        result: success,
        page: page
      }
    } catch (e) {
      return {
        status: 'ERR',
        err: e
      }
    }
  }
};
