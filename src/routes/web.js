import express from 'express'
import helloController from '../controllers/helloController'

let router = express.Router()

let initWebRouter = (app) => {
    router.get("/", (req, res) => {
        return res.send("hello there")
    })
    router.get("/db", helloController.connectionDB)
    router.get("/find-one", helloController.findOne)

    return app.use("/", router)
}

module.exports = initWebRouter