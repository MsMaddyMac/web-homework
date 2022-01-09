const mongoose = require('mongoose')
const { TransactionModel } = require('../data-models/Transaction')
const { UserModel } = require('../data-models/User')
const { MerchantModel } = require('../data-models/Merchant')
const { seedTransactions } = require('../mocks/transactions-data')
const { seedUsers } = require('../mocks/users-data')
const { seedMerchants } = require('../mocks/merchants-data')

const MONGO_URI = 'mongodb://localhost:27017/graphql'

mongoose.Promise = global.Promise
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('MONGO CONNECTION OPEN!!')
  })
  .catch((err) => {
    console.log(err)
  })

const seedDB = async () => {
  await TransactionModel.deleteMany({})
  await TransactionModel.insertMany(seedTransactions)
  await MerchantModel.deleteMany({})
  await MerchantModel.insertMany(seedMerchants)
  await UserModel.deleteMany({})
  await UserModel.insertMany(seedUsers)
}

seedDB().then(() => {
  mongoose.connection.close()
})
