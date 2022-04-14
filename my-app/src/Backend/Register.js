const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const { userInfo } = require('os')
const { waitForDebugger } = require('inspector')

mongoose.connect('mongodb+srv://admineY1AVCnOzCCRJDwQ@cluster0.p4jm5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    usenewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

const app = express()
app.use('/',express.static(path.join(__dirname,'static')))
app.use(express.json)

app.post('/api/register', async(req,res) => {
    
    const {username,password: plainTextPassword} = req.body
    if(!username || typeof username !='string'){
        return res.json({status: 'error', error:'Invalid username'})
    }
    if(!plainTextPassword || typeof plainTextPassword !='string'){
        return res.json({status: 'error', error:'Invalid password'})
    }
    if(plainTextPassword.length <= 10 || plainTextPassword.length >= 5){
        return res.json({
            status: 'error',
            error: 'Password must be between 5 and 10 caracters'
        })
    }
    //    bcrypt.hashSync(await bcrypt.hash(password, 16))
    try {
        const response = await User.create({
            username,
            password
        })
        console.log('User created successfuly:',response)
    } catch(error){
        if(error.code === 11000) {  ///test for duplicate key
                return res.json({status: 'error', error: 'Username already taken'})

        }
        return res.json({ status: 'Error'})
    }
})

