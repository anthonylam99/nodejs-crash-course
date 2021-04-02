require("dotenv").config()
import request from "request"
import MongoDB from '../config/configMongoDB'

let connectionDB = (req, res) => {
    MongoDB.connect()
    return res.send("hello")
}

let findOne = (req, res) => {
    var data = MongoDB.findOne({ title : "MongoDB Overview"})
    console.log(data)
    return res.send("find one")
}

module.exports = {
    connectionDB : connectionDB,
    findOne : findOne
}