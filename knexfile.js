const path = require("path")



module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, "src", "dataBase", "database.db")
    },
    migrations: {
      directory: path.resolve(__dirname, "src", "dataBase", "knex", "migration")
    },

    useNullAsDefault: true
  },

};
