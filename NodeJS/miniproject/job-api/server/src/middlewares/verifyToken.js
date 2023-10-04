const jwt = require('jsonwebtoken')
const secretKey = process.env.SECRETE_KEY

module.exports = verifyToken = (req, res, next) => {
    console.log('verifying token', req.cookies.jwtToken)
    const token = req.cookies.jwtToken
    if (!token) {
        return res.status(403).send({
            message: 'No token provided!'
        })
    }
    // Verify token
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {

        if (err) {
            console.error("error", err)
            return res.status(401).send({ message: "unauthorized" })
        }

        req.user = decoded.id
        next()
    })


}