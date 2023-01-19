const User = require('./models/User');
const bcrypt = require('bcryptjs');

class authController {
    async registration(req, res) {
        try {
            const {username, password} = req.body;
            const candidate = await User.findOne?.({username});
            if (candidate) {
                return res.status(400).json({message: 'User with this name already exists'});
            }
            const hashPassword = bcrypt.hashSync(password, 5);
            const user = new User({username, password: hashPassword});
            await user.save();
            return res.json({message: 'User has been successfully registered'});

        } catch (e) {
            console.log(e);
            res.status(400).json({message: 'Registration error'});
        } 
    }

    async login(req, res) {
        try {

        } catch (e) {
            console.log(e);
            res.status(400).json({message: 'Login error'});
        } 
    }

    async getUsers(req, res) {
        try {
            res.json('server work');
        } catch (e) {

        } 
    }
}

module.exports = new authController();