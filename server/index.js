require("dotenv").config({ path: "./config/.env" })
const express = require("express")
const mongoose = require("mongoose")
const { protected } = require("./middlewares/protected")
const connect = require("./config/db")
const cors = require("cors")
const app = express()
connect()
app.use(express.json())
app.use(cors())
app.use(express.static("uploads"))
// app.use(protected)
app.use("/blog", require("./routes/blogRoutes"))
app.use("/user", require("./routes/userRoutes"))

mongoose.connection.once("open", () => {
    console.log("DB CONNECTED");
    app.listen(process.env.PORT, err => err
        ? console.log("COULD NOT START", err)
        : console.log("SERVER RUNNING")
    )
})
mongoose.connection.on("error", (err) => {
    console.log("mongo error", err);
})
//  multer
