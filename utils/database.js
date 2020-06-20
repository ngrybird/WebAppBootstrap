const mongoDb = require("mongodb");
const mongoDBClient = mongoDb.MongoClient;

const mongoConnect = cb => {
  mongoDBClient
    .connect(
      "mongodb+srv://MyMongoDBUser:4RjrP4qL7vcLPHy@cluster0-zeaqe.mongodb.net/users?retryWrites=true&w=majority",
      { useUnifiedTopology: true }
    )
    .then(result => {
      console.log(result);
      cb(result);
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = mongoConnect;
