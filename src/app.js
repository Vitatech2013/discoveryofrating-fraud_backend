import http from 'http'
import mongoose from './services/mongoose'
import express from './services/express'
import api from './api'

const mongoUri = "mongodb://localhost:27017/Discovery";
const port = 5987;

const app = express('', api)
const server = http.createServer(app)

mongoose.connect(mongoUri)
mongoose.Promise = Promise

setImmediate(() => {
  server.listen(port, () => {
    console.log(`Server Started on ${port} Port Number`);
  })
})

export default app