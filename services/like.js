const db = require('../index');

module.exports = class WorkPeriod extends require('./crud')
{
    constructor()
    {
        super(db.like, 'like');

        this.create = async (userId, tId)=>
        {
            return await this.model.create({authorId: userId, tweetId: tId});
        };

        this.delete = async (data)=>
        {
            return await this.model.destroy({where: {authorId: data.authorId, tweetId: data.tweetId}});
        }
    }


};