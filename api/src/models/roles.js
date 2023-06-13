const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define(
        'roles',
        {
            id_roles: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            rol_type: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        },
        {
            timestamps: false,
        }
    )
}