const mongoose = require('mongoose')

const UserScheme = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

const model = mongoose.model('UserScheme',UserScheme)
module.exports = module