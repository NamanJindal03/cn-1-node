const express = require('express');
const app = express();
const userController = require('./controller/user.controller');
const cookies = require('cookie-parser');
const {verifySession} = require('./middleware/auth.middleware')

app.use(cookies());
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({extended: false}))//helps form data to get appended on the body

//old
app.get('/', verifySession, (req, res) => {
    console.log('request is coming here')
    res.render('home', {});
})
//old 
app.get('/about',verifySession ,(req, res) => {
    console.log(req)
    console.log(req.cookies)
    console.log('request is coming here')
    res.render('about', {name: 'naman', productArr: ['a', 'b', 'c', 'd']});
})

app.get('/sign-up', (req, res) => {
    res.render('register', {})
})

app.get('/login', (req, res) => {
    res.render('login', {})
})

app.post('/user/register', userController.registerUser)
app.post('/user/login', userController.loginUser)




app.listen(3001, ()=>{
    console.log('server started at', 3001)
})

/* 
    app.get()
        res.json
        res.write/res.end 
        res.render('about', data)

*/
