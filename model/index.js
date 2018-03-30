const Promise = require('bluebird');
const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

module.exports = (Sequelize, config)=>
{
    const sequelize = new Sequelize('database', 'username', '',
        {
            host: 'localhost',
            dialect: 'sqlite',
            storage: './dataBase',
            define: {
                timestamps: false,
                paranoid: true
            }
        });

    const like = require('./like')(Sequelize, sequelize);
    const user = require('./user')(Sequelize, sequelize);
    const tweet = require('./tweet')(Sequelize, sequelize);

    like.belongsTo(tweet, {foreignKey: 'tweetId'});
    like.belongsTo(user, {foreignKey: 'authorId'});
    tweet.belongsTo(user, {foreignKey: 'authorId'});

    return {
        like,
        user,
        tweet,
        sequelize: sequelize,
        Sequelize: Sequelize
    };
};