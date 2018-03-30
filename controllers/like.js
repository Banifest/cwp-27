const sequelize = require('sequelize');

class WorkPeriod extends require('./crud')
{
    constructor()
    {
        super(new (require('../services/like'))());

        this.create = async (req, res) =>
        {
            req.body['authorId'] = req.params.userId;
            req.body['tweetId'] = req.params.tweetId;
            res.json(await this.service.create(req.body));
        };

        this.delete = async (req, res) =>
        {
            req.body['authorId'] = req.params.userId;
            req.body['tweetId'] = req.params.tweetId;
            res.json(await this.service.delete(req.body));
        };

        this.routers = {
            '/users/:userId/tweets/:tweetId':
            [
                { method: 'post', cb: this.create },
                { method: 'delete', cb: this.delete }
            ],

        };
        this.registerRouters();
    }
}

module.exports = (settings)=>
{
    return (new WorkPeriod()).router;
};