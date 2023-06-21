const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define(
        'devData',
        {
            id_devData: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
                allowNull: false
            },
            aboutMe: {
                type: DataTypes.STRING,                
                validate: {
                    len: [0, 255]
                }
            },
            experience: {
                type: DataTypes.JSONB,
            },
            education: {
                type: DataTypes.JSONB,                
            },
            skills: {
                type: DataTypes.JSON,                
            },
        },
        {
            timestamps: false
        });
}