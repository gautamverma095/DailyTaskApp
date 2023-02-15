const jwt = require("jsonwebtoken")

exports.isAuthenticated = async (req, res, next) => {
    try {
        let token = req.header("Authorization")
        // console.log(token); 
        if (!token)
        {
            res.status(403).json({
                status: "error",
                message:"Access Denied"
            })
        }
        const verifiedToken = jwt.verify(token, "jddiuesh")
        req.user = verifiedToken
        next()
    } catch (err) {
        res.status(400).json({
            error:err.message
        })
    }

}