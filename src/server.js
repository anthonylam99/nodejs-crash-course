require("dotenv").config()
import express from "express"
import bodyParse from "body-parser"
import viewEngine from "./config/viewEngine"
import initWebRouter from "./routes/web"
let app = express()

//config view Engine
viewEngine(app)


//config body-parser
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: true }))


//init web Routers
initWebRouter(app)

let port = process.env.PORT || 8080

app.listen(port, () => {
    console.log("App is listen in port " + port)
})