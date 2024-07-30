const { blogUpload } = require("../middlewares/upload");
const Blog = require("../models/Blog")
const jwt = require("jsonwebtoken")
// exports.addBlog = async (req, res) => {
//     try {
//         blogUpload(req, res, err => {
//             if (err) {
//                 return res.status(400).json({
//                     message: "Multer Error",
//                     err
//                 })
//             }
//             // everything good
//         })
//         // const result = await Blog.create(req.body)
//         // res.json({
//         //     message: "blog added",
//         //     result
//         // })
//         // console.log(req.body);

//     } catch (error) {
//         res.status(400).json({
//             message: "ERROR" + error.message
//         })
//     }
// }

exports.addBlog = async (req, res) => {
    blogUpload(req, res, async (err) => {
        if (err) {
            console.log(err);
            req.status(400).json({
                message: "multer error",
                error: err
            })
        }
        try {
            const token = req.headers.authorization
            // console.log(token);
            const x = jwt.verify(token, process.env.JWT_KEY)
            console.log(x);
            const result = await Blog.create({
                title: req.body.title,
                desc: req.body.desc,
                image: req.file.filename,
                userId:x.userId
            })
            res.json({
                message: "blog addded",
                // result
            })
        } catch (error) {
            res.status(400).json({
                message: "eror" + error,
            })
        }
        // console.log(req.body);
        // console.log(req.file.filename);

    })


}
exports.getAllBlogs = async (req, res) => {
    try {
        const result = await Blog.find({publish:true})
        res.json({
            message: "Blog Fetched",
            result
        })
    } catch (error) {
        res.status(400).json({
            message: "ERROR" + error.message
        })
    }
}
exports.updateBlog = async (req, res) => {
    try {
        const { blogId } = req.params
        const result = await Blog.findByIdAndUpdate(blogId, req.body, { new: true })
        res.json({
            message: "Blog updated",
            result
        })
    } catch (error) {
        res.status(400).json({
            message: "ERROR" + error.message
        })
    }
}
exports.deleteBlog = async (req, res) => {
    try {
        const { blogId } = req.params
        await Blog.findByIdAndDelete(blogId)
        res.json({
            message: "Blog Deleted",

        })
    } catch (error) {
        res.status(400).json({
            message: "ERROR" + error.message
        })
    }
}
exports.destroyBlog = async (req, res) => {
    try {
        await Blog.deleteMany()
        res.json({
            message: "All Blog Deleted",
        })
    } catch (error) {
        res.status(400).json({
            message: "ERROR" + error.message
        })
    }
}
