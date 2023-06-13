const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define(
      'Post',
      {
        id_post: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
          allowNull: false
        },
        description: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [0, 255] // Establece que la longitud máxima es de 255 caracteres
          }
        },
        likes: {
          type: DataTypes.INTEGER,
          defaultValue: 0
        }
      },
      {
        paranoid: true, // Habilita soft deletes
        timestamps: false,
      }
    );

  
  };

  
  
  
  
  
  
  