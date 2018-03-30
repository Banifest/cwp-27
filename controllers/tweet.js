const sequelize = require('sequelize');

class Team extends require('./crud')
{
    constructor()
    {
        super(new (require('../services/tweet'))());

        this.routers['/:teamId/join-work-time'] =
            [
                {method: 'get', cb: this.diffTime}
            ];

        this.routers['/:teamId/users/:userId'] =
            [
                {method: 'post',   cb: this.addUser},
                {method: 'delete', cb: this.delUser},
            ];
        this.addUser = this.addUser.bind(this);
        this.delUser = this.delUser.bind(this);
        this.diffTime = this.diffTime.bind(this);

        this.registerRouters();
    }
}

module.exports = (settings)=>
{
    return (new Team()).router;
};