const sequelize = require('sequelize');

class User extends require('./crud')
{
    constructor()
    {
        super(new (require('../services/user'))());

        this.readAll = async (req, res) =>
        {
            let answ = await this.service.readAll(req.params.userId);
            res.json(answ);
        };
        this.read = async (req, res) =>
        {
            let answ = await this.service.readById(req.params.userId, req.params.tweetId);
            res.json(answ);
        };
        this.paramRead =async (req, res) =>
        {
            res.json(await this.service.readByOption(req.body));
        };

        this.create = async (req, res) =>
        {
            res.json(await this.service.create(req.body, req.params.userId));
        };
        this.update = async (req, res) =>
        {
            let id = req.body.id;
            delete req.body.id;
            res.json(await this.service.updateById( req.params.userId, req.params.tweetId, req.body));
        };
        this.delete = async (req, res) =>
        {
            res.json(await this.service.deleteById(req.params.userId, req.params.tweetId));
        };

        this.routers = {
            '/:userId/tweets/':
                [
                    { method: 'get', cb: this.readAll },
                    { method: 'post', cb: this.create }
                ],
            '/:userId/tweets/:tweetId':
                [
                    { method: 'get', cb: this.read },
                    { method: 'put', cb: this.update },
                    { method: 'delete', cb: this.delete }
                ],
        };
        this.registerRouters();
    }
}

module.exports = (settings)=>
{
    return (new User()).router;
};