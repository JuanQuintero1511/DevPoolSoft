const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('company', {
    id_company: {
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      primaryKey:true,
      allowNull: false
    },
    companyDetail: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username_company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fullName_owner: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    backupEmail: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    post: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    registrationDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    friends: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    password: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
    

  },
  {
    timestamps:false
  });
};

// await sequelize.sync();