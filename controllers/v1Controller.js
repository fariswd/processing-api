// const tweets = require('../helpers/tweets');
const Db = require('../helpers/toDb');

module.exports = {
  getVersion: (req, res) => {
    res.send({
      ver: '1.0'
    })
  },

  getLatest: async (req, res) => {
    if(req.params.json == 'latest.json') {
      res.send(await Db.getTweetBank(req.query.page ? req.query.page : 1))
    } else {
      res.status(400).send({
        err: 'invalid request'
      })
    }
  }

};
