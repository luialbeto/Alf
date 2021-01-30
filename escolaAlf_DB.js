const { connect } = require('mongoose');

class Connect {
  connect() {
    connect(`mongodb+srv://${process.env.MONGO_HOST}`, {
      user: process.env.MONGO_USER,
      pass: process.env.MONGO_PASS,
      dbName: process.env.MONGO_COLLECTION,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    });
  }
}

module.exports = new Connect().connect();
