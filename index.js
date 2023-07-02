import express from 'express'
import 'dotenv/config.js'

import Server from './server.js'

// router
import indexRouter from './routes/index.js'
import fileRouter from './routes/file.js'

const app = express()

app.set('view engine', 'ejs')
app.use(express.static("static"))
app.use(express.urlencoded({ extended: true }))

// start server
Server.startServer(app)

// routes
app.use('/', indexRouter)
app.use('/file', fileRouter)
