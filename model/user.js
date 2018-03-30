module.exports = (Sequelize, sequelize) => {
    return sequelize.define('User', {
        id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        name: {type: Sequelize.STRING(50)},
        email: {type: Sequelize.STRING(50)},
    });
};