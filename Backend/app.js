const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const { userInfo } = require('os')
const { waitForDebugger } = require('inspector')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { CONNREFUSED } = require('dns')

import postRoutes from './controller/routes/posts.js';



//https://jwt.io/     -> helpful link
app.use('/posts', postRoutes);

const connectionURL = 'mongodb+srv://admin:eY1AVCnOzCCRJDwQ@cluster0.p4jm5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true ,useCreateIndex: true})
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);

const app = express()
app.use('/',express.static(path.join(__dirname,'static')))
app.use(express.json)
const JWT_SECRET = 'AA}?"SFASUHFASJ{{?}OVBASJOVB}":ASJOVBASOVBJVA{SV' ///HAS TO BE ABSOLUTELY SECRET

app.post('/api/change-password',(req,res)=>{
    const {token, newpassword: plainTextPassword} = req.body
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
    try{
        const user = jwt.verify(token,JWT_SECRET)
        const _id = user.id
        const password = await bcrypt.hash(plainTextPassword,16)
        await User.updateOne(
            {_id},{
                $set: {password}
            }
        )
        res.json({status: 'ok'})

    }catch(error){
        res.json({status: 'error',error: 'Out of Beer? Wrong data'})
    }
})

app.post('/api/login',async(req,res)=> {
    
const {username, password } = req.body
const user = User.findOne({username,password}).lean()
if(!user){
    return res.json({status: 'error', error: 'Invalid username/password'})
}
if(await bcrypt.compare(password,user.password)){
    const token = jwt.sign({ 
        id: user._id,
        username: user.username
    },  JWT_SECRET)
    return res.json({status:'ok',data: ''})
}




    res.json({status: 'error', error: 'Invalid username/password'})
})

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
    const password = await bcrypt.hashSync(await bcrypt.hash(password, 16))
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

app.post('/checkout', (req, res) => {
    let sess = req.session;
    let cart = (typeof sess.cart !== 'undefined') ? sess.cart : false;
    if(Security.isValidNonce(req.body.nonce, req)) {
        res.render('checkout', {
            pageTitle: 'Checkout',
            cart: cart,
            checkoutDone: true
        });
    } else {
        res.redirect('/');
    }
});