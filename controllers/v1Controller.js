const tweets = require('../helpers/tweets');

module.exports = {
  getVersion: (req, res) => {
    res.send({
      ver: '1.0'
    })
  },

  getLatest: (req, res) => {
    if(req.params.json == 'latest.json') {
      res.send({
        latest: true,
        tweet: tweets.get()
      })
    } else {
      res.status(400).send({
        err: 'invalid request'
      })
    }
  }

};
