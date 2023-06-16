const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define(
      'posts',
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
        },
        // date_register: {
        //   type: DataTypes.DATE,
        //   defaultValue: DataTypes.NOW,
        //   allowNull: false,
        // },
        // state: {
        //   type: DataTypes.ENUM (["In Progress", "Finished"]),
        //   allowNull: false,
        // }
      },
      {
        paranoid: true, // Habilita soft deletes
        timestamps: false,
      }
    );

  
  };


   // id: {
        //   type: DataTypes.INTEGER,
        //   primaryKey: true,
        //   autoIncremet: true,
        // },
        // title: {
        //   type: DataTypes.STRING,
        //   allowNull: false,
        //   validate: {
        //     len: [0, 50] // Establece que la longitud máxima es de 255 caracteres
        //   }
        // },
        // body: {
        //   type: DataTypes.STRING,
        //   allowNull: false,
        //   validate: {
        //     len: [0, 255] // Establece que la longitud máxima es de 255 caracteres
        //   }
        // },
  
  
  
  
  
  
  