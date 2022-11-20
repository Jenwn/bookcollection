const Sequelize = require('sequelize')
const db = require('../db')

const Books = db.define('books',{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    author:{
        type: Sequelize.STRING,
        allowNull: true
    },
    description:{
        type: Sequelize.TEXT,
        allowNull: true
    },
    image:{
        type: Sequelize.TEXT
    },
    status:{
        type: Sequelize.ENUM(["collection","wishlist"])
    },
    comment:{
        type: Sequelize.TEXT
    },
    rating:{
        type: Sequelize.INTEGER
    }
})

module.exports = Books