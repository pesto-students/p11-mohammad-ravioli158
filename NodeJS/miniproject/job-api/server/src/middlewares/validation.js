
const { body, validationResult } = require('express-validator')

const validateEmail = [
    body('email').notEmpty().isEmail(),
    async (req, res, next) => {
        const result = validationResult(req)
        if (result.isEmpty()) {
            next()
        }
        else
            res.send({ errors: result.array() })
    }
]

const validatePassword = [
    body('password').notEmpty(),
    async (req, res, next) => {
        const result = validationResult(req)
        if (result.isEmpty()) {
            next()
        }
        else
            res.send({ errors: result.array() })
    }
]

module.exports = {
    validateEmail,
    validatePassword
}