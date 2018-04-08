const fs = require('fs');
const { msgEveryCron, logcation }  = require('../cronConfig')

const writeLog = () => {
  fs.open(logcation, 'r', (err, fd) => {
    if (err) {
      if (err.code === 'ENOENT') {
        console.error('We Create log for you! on ', logcation);
        writeLogInit(true, null, (err, stat) => {
          if(err) {
            console.log(err)
          } else {
            console.log('The file init has been saved!', new Date())
          }
        })
      }
    }
    write()
  });
}

const write = () => {
  fs.readFile(logcation, 'utf8', (err, data) => {
    if (err) {
      console.log(err)
    } else {
      let content = `${data}\n${msgEveryCron} ${new Date()}`
      writeLogInit(false, content, (err, stat) => {
        if(err) {
          console.log(err)
        } else {
          console.log('The file has been saved!', new Date())
        }
      })
    }
  });
}

const writeLogInit = (status, data, cb) => {
  const init = status ? `Initial Write ${new Date()}` : data
  fs.writeFile(logcation, init, (err) => {
    if (err) cb(err, null)
    cb(null, 'ok')
  });
}

module.exports = writeLog;
