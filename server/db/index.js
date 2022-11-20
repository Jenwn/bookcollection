//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Books = require('./models/Books')
const Readlog = require('./models/Readlog')

//associations could go here!
Books.belongsTo(User)
User.hasMany(Books)

Readlog.belongsTo(User)
User.hasMany(Readlog)

module.exports = {
  db,
  models: {
    User,
    Books,
    Readlog
  },
}
