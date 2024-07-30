const { addBlog } = require("../controllers/blogController")

const router = require("express").Router()
router.post("/add-blog", addBlog)
module.exports = router