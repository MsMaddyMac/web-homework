const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLFloat, GraphQLNonNull } = graphql
const { TransactionModel } = require('../data-models/Transaction')
const Transactions = require('../query-resolvers/transaction-resolvers')
const TransactionType = require('./transaction-type')
const { UserModel } = require('../data-models/User')
const Users = require('../query-resolvers/user-resolvers')
const UserType = require('./user-type')
const { MerchantModel } = require('../data-models/Merchant')
const Merchants = require('../query-resolvers/merchant-resolvers')
const MerchantType = require('./merchant-type')

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addTransaction: {
      type: TransactionType,
      args: {
        user_id: { type: GraphQLString },
        description: { type: GraphQLString },
        merchant_id: { type: GraphQLString },
        debit: { type: GraphQLBoolean },
        credit: { type: GraphQLBoolean },
        amount: { type: GraphQLFloat }
      },
      /* eslint-disable-next-line camelcase */
      resolve (parentValue, { user_id, description, merchant_id, debit, credit, amount }) {
        return (new TransactionModel({ user_id, description, merchant_id, debit, credit, amount })).save()
      }
    },
    deleteTransaction: {
      type: TransactionType,
      args: {
        id: { type: GraphQLString }
      },
      resolve (parentValue, { id }) {
        return Transactions.findAndDelete(id)
      }
    },
    updateTransaction: {
      type: TransactionType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        user_id: { type: GraphQLString },
        description: { type: GraphQLString },
        merchant_id: { type: GraphQLString },
        debit: { type: GraphQLBoolean },
        credit: { type: GraphQLBoolean },
        amount: { type: GraphQLFloat }
      },
      resolve (parentValue, args) {
        return Transactions.findAndUpdate(args)
      }
    },
    addUser: {
      type: UserType,
      args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString }
      },
      resolve (parentValue, { firstName, lastName }) {
        return (new UserModel({ firstName, lastName })).save()
      }
    },
    deleteUser: {
      type: UserType,
      args: {
        id: { type: GraphQLString }
      },
      resolve (parentValue, { id }) {
        return Users.findAndDelete(id)
      }
    },
    updateUser: {
      type: UserType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString }
      },
      resolve (parentValue, args) {
        return Users.findAndUpdate(args)
      }
    },
    addMerchant: {
      type: MerchantType,
      args: {
        name: { type: GraphQLString }
      },
      resolve (parentValue, { name }) {
        return (new MerchantModel({ name })).save()
      }
    },
    deleteMerchant: {
      type: MerchantType,
      args: {
        id: { type: GraphQLString }
      },
      resolve (parentValue, { id }) {
        return Merchants.findAndDelete(id)
      }
    },
    updateMerchant: {
      type: MerchantType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLString }
      },
      resolve (parentValue, args) {
        return Merchants.findAndUpdate(args)
      }
    }
  }
})

module.exports = mutation
