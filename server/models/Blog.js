const mongoose = require("mongoose")
const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is Required"]
    },
    desc: {
        type: String,
        required: [true, "desc is Required"]
    },
    image: {
        type: String,
        required: [true, "image is Required"]
    },
    publish: {
        type: Boolean,
        default: false
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "user",
        required: [true, "please provide user Id"]
    }
}, { timestamps: true })

module.exports = mongoose.model("blog", blogSchema)