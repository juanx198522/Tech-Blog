const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

// Check if there's a JAWSDB_URL environment variable; if not, use local database configuration
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    }
  );
}

// Export the configured Sequelize instance
module.exports = sequelize;