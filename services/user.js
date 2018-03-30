const db = require('../index');

module.exports = class User extends require('./crud')
{
    constructor()
    {
        super(db.user, 'user');

        this.readAll = async (userId) =>
        {
            return await this.model.find({where: {authorId: userId}});
        };
        this.read = async (userId, tId) =>
        {
            if (!isNaN(id) && (await this.model.findById(Number(userId))) != null)
            {
                return await (await this.model.findOne({where :{authorId: Number(tId)}})).get({plain: true});
            }
            else
            {
                throw this.errors.notFound;
            }
        };
        this.paramRead =async (userId, tId) =>
        {
            res.json(await this.service.readByOption(req.body));
        };

        this.create = async (data, userId, tId) =>
        {
            if ((await validators.check(this.validatorName, data)).error)
            {
                throw this.errors.wrongCredentials;
            }
            else
            {
                data['authorId'] = userId;
                return await this.model.create(data);
            }
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
    }
};