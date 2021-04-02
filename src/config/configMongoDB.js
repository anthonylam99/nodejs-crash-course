import express from 'express'
import mongoDB from 'mongodb'

var MongoClient = mongoDB.MongoClient;
var url = 'mongodb://localhost:27017/mydbl'
var url_2 = "mongodb://localhost:27017/"

let connect = () => {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, database) => {
        if (err) {
            console.log("Can't connect to DB: " + err)
        } else {
            console.log("Connect to DB url " + url)
            console.log(database)
            //do something

            // database.close()
        }
    })
}

let findOne = (query) => {

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("mydbl");

        dbo.collection("posts")
    });
}



module.exports = {
    connect: connect,
    findOne: findOne
}