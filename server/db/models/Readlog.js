const Sequelize = require('sequelize')
const db = require('../db')

const Readlog = db.define('readlog',{
    date:{
        type: Sequelize.STRING,
        allowNull: false
    },
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },
    author:{
        type: Sequelize.TEXT,
        allowNull: true
    },
    image:{
        type: Sequelize.TEXT,
        defaultValue:"https://thumbs.gfycat.com/TediousPlumpJackrabbit-size_restricted.gif"
    },
    comment:{
        type: Sequelize.TEXT
    },
    rating:{
        type: Sequelize.INTEGER
    }
})

module.exports = Readlog