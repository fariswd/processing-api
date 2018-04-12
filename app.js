require('dotenv').config()
const app = require('express')()
const mongoose = require('mongoose').connect(process.env.DB)
const cors = require('cors')
const morgan = require('morgan')

app.use(cors())
app.use(morgan('dev'))

const v1Router  = require('./routes/v1Routes')

app.use('/v1', v1Router)

app.listen(3000, () => console.log('running on port 3000'))
