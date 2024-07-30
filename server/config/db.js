const mongoose = require("mongoose")

const connect = () => {
   mongoose.set('strictQuery', true)

   mongoose.connect(process.env.MONGO_URL)
}

module.exports = connect