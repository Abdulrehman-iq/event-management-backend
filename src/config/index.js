const db = require('./db');

module.exports = {
  connectToDatabase: db.connect,
};