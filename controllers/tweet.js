const sequelize = require('sequelize');

class Team extends require('./crud')
{
    constructor()
    {
        super(new (require('../services/tweet'))());
        this.registerRouters();
    }
}

module.exports = (settings)=>
{
    return (new Team()).router;
};