const dotenv = require('dotenv');
dotenv.config({
  path: '.env'
});

module.exports = {
  server: {
    port: process.env.PORT,
    prefixRoutes: process.env.PREFIX_ROUTES,
  },
  connection: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 1433
  },
};
