
const { addUser, getAllUsers, updateUser, deleteUser, destroyUser, userLogin } = require("../controllers/userController")
const {protected} = require("./../middlewares/protected")

const router = require("express").Router()

router
.post("/add-user", addUser)
.get("/", getAllUsers)
.put("/update-user/:userId",updateUser)
.delete("/delete-user/:userId",deleteUser)
.delete("/destroy-user",destroyUser)
.post("/login",userLogin)

module.exports = router