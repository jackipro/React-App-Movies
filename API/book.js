var express = require("express");
var router = express.Router();
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://jackipro:namheo1509@clustersgp-x4drf.mongodb.net/test";
//Show list movies
router.get("/", (req, res) => {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db("test");
    var mymovies = {};
    dbo
      .collection("movie")
      .find(mymovies)
      .toArray((err, result) => {
        if (err) throw err;
        console.log(result);
        res.json(result);
      });
  });
  //   res.send("Hello co ba");
});
router.get("/:id", (req, res) => {
  var id = req.params.id;
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db("test");
    var ObjectId = require("mongodb").ObjectId;
    var mymovies = { _id: ObjectId(id) };
    dbo.collection("movie").findOne(mymovies, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  });
});
module.exports = router;
