const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('user_data', {
    id_user_data: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },    
    backup_email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 255] 
      }
    },
    date_birthday: {
      type: DataTypes.DATE,
      allowNull: false,
    },        
    date_register: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [0, 15] 
      }
    },
    profile_image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,      
    },
    isPremium: {
      type: DataTypes.BOOLEAN,      
      defaultValue: false,
    },
    authentication: {
      type: DataTypes.ENUM (["CUIT", "CUIL", "PASSPORT"]),
      allowNull: false,
    }
  },
  {
    timestamps:false
  });
};

