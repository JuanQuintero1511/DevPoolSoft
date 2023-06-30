const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define(
        'roles',
        {
            id_roles: {
                type: DataTypes.INTEGER,                
                primaryKey: true,
                autoIncrement: true,
            },
            rol_type: {
                type: DataTypes.ENUM (["admin", "company", "developer"]),
                allowNull: false,
            }
        },
        {
            timestamps: false,
        }
    )
}