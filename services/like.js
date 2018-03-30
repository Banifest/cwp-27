const db = require('../index');

module.exports = class WorkPeriod extends require('./crud')
{
    constructor()
    {
        super(db.like, 'like');

        this.delete = async (data)=>
        {
            return await this.model.destroy({where: {authorId: data.authorId, tweetId: data.tweetId}});
        }
    }


};