const db = require('../index');

module.exports = class User extends require('./crud')
{
    constructor()
    {
        super(db.user, 'user');

        this.tweetReadAll = async (userId) =>
        {
            return await this.model.find({where: {authorId: userId}});
        };
        this.tweetRead = async (userId, tId) =>
        {
            if (!isNaN(id) && (await this.model.findById(Number(userId))) != null)
            {
                return await (await this.model.findOne({where :
                        {authorId: Number(userId), id: tId}})).get({plain: true});
            }
            else
            {
                throw this.errors.notFound;
            }
        };
        this.tweetParamRead =async (userId, tId) =>
        {
            res.json(await this.service.readByOption(req.body));
        };

        this.tweetCreate = async (data, userId) =>
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
        this.tweetUpdate = async (userId, tId, data) =>
        {
            if ((await validators.check(this.validatorName, data)).error)
            {
                throw errors.invalidId;
            }
            else
            {
                await this.model.update(data, {where: {id: tId}});
                return this.readById(id);
            }
        };
        this.tweetDelete = async (req, res) =>
        {
            res.json(await this.service.deleteById(req.params.userId, req.params.tweetId));
        };
    }
};