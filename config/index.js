import mongoose from 'mongoose'

const CONNECTION_URL = process.env.DB_URI || "mongodb+srv://dylanfcc:zgf9sImDAbzjfDhw@cluster0.cw6h4.mongodb.net/Cluster0?retryWrites=true&w=majority"

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
  console.log('Mongo has connected succesfully')
})
mongoose.connection.on('reconnected', () => {
  console.log('Mongo has reconnected')
})
mongoose.connection.on('error', error => {
  console.log('Mongo connection has an error', error)
  mongoose.disconnect()
})
mongoose.connection.on('disconnected', () => {
  console.log('Mongo connection is disconnected')
})