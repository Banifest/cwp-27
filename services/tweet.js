const db = require('../index');
const moment = require('moment');

module.exports = class Team extends require('./crud')
{
    constructor()
    {
        super(db.tweet, 'tweet');
    }
};