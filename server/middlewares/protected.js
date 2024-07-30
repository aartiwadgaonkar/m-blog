const jwt = require("jsonwebtoken")
exports.protected = (req, res, next) => {
    try {
        const token = req.headers.authorization
        if (!token) {
            return res.status(400).json({
                message: "Please Provide token"
            })
        }
        jwt.verify(token, process.env.JWT_KEY, (err, decode) => {
            if (err) {
                return res.status(400).json({
                    message: "Invalid Token",
                    err
                })
            }
            console.log(decode);
            next()
        })

    } catch (error) {
        return res.status(400).json({
            message: "Server Error",
            error
        })
    }


}