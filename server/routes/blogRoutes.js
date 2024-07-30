const { addBlog, getAllBlogs, updateBlog, deleteBlog, destroyBlog } = require("../controllers/blogController")

const router = require("express").Router()
router
    .get("/", getAllBlogs)
    .post("/add-blog", addBlog)
    .put("/update-blog/:blogId", updateBlog)
    .delete("/delete-blog/:blogId", deleteBlog)
    .delete("/destroy", destroyBlog)


module.exports = router