const dotenv = require('dotenv');
dotenv.config();

const config = {
  development:{
    username:'root',
    password:process.env.DATABASE_PASSWORD,
    database: 'whoever_test',
    host: '127.0.0.1',
    dialect:'mysql'
  },

  production: {
    host: 'localhost',
    username: 'admin',
    password: process.env.DATABASE_PASSWORD,
    database: 'whoever',
    port: 80,
    dialect: 'mysql'
  }
};

module.exports = config;
