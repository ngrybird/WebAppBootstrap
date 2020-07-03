const mongoDb = require("mongodb");
const mongoDBClient = mongoDb.MongoClient;

let _db;

const mongoConnect = cb => {
  mongoDBClient
    .connect(
      "mongodb+srv://SuperUser:wQGIH77i9iW9oKYc@cluster0.zeaqe.mongodb.net/test?retryWrites=true&w=majority",
      { useUnifiedTopology: true }
    )
    .then(client => {
      _db = client.db();
      cb();
    })
    .catch(err => {
      console.log(err);
    });
};

const getDB = () => {
  if (_db) {
    return _db;
  }
  throw "No database found";
};

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://SuperUser:<password>@cluster0.zeaqe.mongodb.net/<dbname>?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
