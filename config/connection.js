// Load environment variables from a .env file into process.env
require("dotenv").config();

// Import the Sequelize library for working with MySQL databases
const Sequelize = require("sequelize");

// Create a Sequelize instance, configuring it with either the JAWSDB_URL (for production) or local database credentials
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL) // Use JawsDB URL for production environment
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: "localhost", // Local database host
      dialect: "mysql", // MySQL database type
      dialectOptions: {
        decimalNumbers: true, // Option to handle decimal numbers more accurately
      },
    });

// Export the configured Sequelize instance for use in other parts of the application
module.exports = sequelize;
