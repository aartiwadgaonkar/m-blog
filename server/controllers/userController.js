const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.addUser = async (req, res) => {
    try {
        const hashpassword = await bcrypt.hash(req.body.password, 10)
        const result = await User.create({
            ...req.body,
            password: hashpassword,
            role: "user"
        })
        res.json({
            message: "user added"
        })
    } catch (error) {
        res.status(400).json({
            message: "ERROR" + error.message
        })
    }
}
exports.getAllUsers = async (req, res) => {
    try {
        const result = await User.find().select("name email active role")
        // const result = await User.find().select("-password")
        res.json({
            message: "User Fetched",
            result
        })
    } catch (error) {
        res.status(400).json({
            message: "ERROR" + error.message
        })
    }
}
exports.updateUser = async (req, res) => {
    try {
        const { userId } = req.params
        const result = await User.findByIdAndUpdate(userId, req.body, { new: true })
        res.json({
            message: "User Updated",
            result
        })
    } catch (error) {
        res.status(400).json({
            message: "ERROR" + error.message
        })
    }
}
exports.deleteUser = async (req, res) => {
    try {
        const { userId } = req.params
        await User.findByIdAndDelete(userId)
        res.json({
            message: "user deleted",

        })
    } catch (error) {
        res.status(400).json({
            message: "ERROR" + error.message
        })
    }
}
exports.destroyUser = async (req, res) => {
    try {
        await User.deleteMany()
        res.json({
            message: "All User Deleted",
        })
    } catch (error) {
        res.status(400).json({
            message: "ERROR" + error.message
        })
    }
}
exports.userLogin = async (req, res) => {
    try {
        const { email, password } = req.body
        const foundUser = await User.findOne({ email })
        if (!foundUser) {
            return res.status(400).json({
                message: "email not registered with us"
            })
        }
        const verify = await bcrypt.compare(password, foundUser.password)
        if (!verify) {
            return res.status(400).json({
                message: "invalid password"
            })
        }
        if (!foundUser.active) {
            return res.json({
                message: "Account is blocked by Admin. Please getin touch with admin",

            })
        }
        const token = jwt.sign({ userId: foundUser._id }, process.env.JWT_KEY, { expiresIn: "1w" })
        res.json({
            message: "Login Successfully",
            result: {
                name: foundUser.name,
                email: foundUser.email,
                role: foundUser.role,
                token
            }

        })
    } catch (error) {
        res.status(400).json({
            message: "ERROR" + error.message
        })
    }
}