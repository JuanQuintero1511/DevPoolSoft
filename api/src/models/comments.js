const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define(
        'comments',
        {
            id_coments: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [0, 255] 
                  }
            },
            likes: {
                type: DataTypes.INTEGER,
                defaultValue: 0
              },
        },
        {
            timestamps:false
        });
}