
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/user.model')
async function signUp(req, res) {
    try {
        const newUser = new User({
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
            name: req.body.name
        })
        // update user to database
        await newUser.save()
        return res.json({ message: 'User created succesfully' });
    } catch (error) {
        return res.status(400).json({ message: `Error creating user ${error.message}` });
    }
}
async function SignIn(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email })
        // Check if user exists
        if (!user) {
            return res.status(400).json({ message: 'User doesnot exist' });
            return
        }
        // Validate password
        const isPasswordValid = bcrypt.compareSync(req.body.password, user.password)
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid Password' });
            return
        }
        // Generate Jwt token
        const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, { algorithm: 'HS256', allowInsecureKeySizes: true, expiresIn: 86400 })
        // Send token as cookie
        res.cookie('jwtToken', token, { httpOnly: true }); 
        return res.json({ id: user.id, email: user.email, authenticated: true});
    } catch (error) {
        return res.status(400).json({ message: 'Error while sign in' });
    }
}
// Todo: Implement signout
module.exports = {
    signUp,
    SignIn
}