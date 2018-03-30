const sequelize = require('sequelize');

class WorkPeriod extends require('./crud')
{
    constructor()
    {
        super(new (require('../services/like'))());

        this.tweetCreate = async (req, res) =>
        {
            req.body['authorId'] = req.params.userId;
            req.body['tweetId'] = req.params.tweetId;
            res.json(await this.service.tweetCreate(req.body));
        };

        this.tweetDelete = async (req, res) =>
        {
            req.body['authorId'] = req.params.userId;
            req.body['tweetId'] = req.params.tweetId;
            res.json(await this.service.tweetDelete(req.body));
        };

        this.routers = {
            '/users/:userId/tweets/:tweetId':
            [
                { method: 'post', cb: this.tweetCreate },
                { method: 'delete', cb: this.tweetDelete }
            ],

        };
        this.registerRouters();
    }
}

module.exports = (settings)=>
{
    return (new WorkPeriod()).router;
};