const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define(
        'users',
        {
            id_users: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            userName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [0, 20] 
                  }
            }
        },
        {
            timestamps:false
        });
}