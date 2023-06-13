require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
// const admin = require('./models/admin');
// const bussi = require('./models/bussi');
// const persol = require('./models/persol');


const database = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
   {
      logging: false, 
      native: false, 
   }
);

// admin(database);
// bussi(database);
// persol(database);


// Post.hasMany(Comment, { foreignKey: 'post_id' }); 
// Comment.belongsTo(Post, { foreignKey: 'post_id' }); 

module.exports = { database, ...database.models};