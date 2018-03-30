module.exports = (Sequelize, sequelize) => {
    return sequelize.define('Tweet', {
        id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        message: {type: Sequelize.STRING(50)},
        publishedOn: {type: Sequelize.STRING(50)},
    });
};