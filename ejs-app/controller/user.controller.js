const { v4: uuidv4 } = require('uuid');
const {setUser, getUser} = require('../service/session.service')
let inMemoryUserDatabase = [];
function registerUser(req, res){
    console.log(req.body);
    //perform some validation
    const email = req.body?.email;
    const name = req.body?.name;
    const password = req.body?.password;
    if(!email || !name || !password){
        return res.status(400).json("please pass all information");
    }
    const userObj = {email, name, password}
    inMemoryUserDatabase.push(userObj);
    res.redirect('/login');
}

function loginUser(req, res){
    const email = req.body?.email;
    const password = req.body?.password;
    const user = inMemoryUserDatabase.find((entry)=>{
        if(entry.email == email && entry.password == password) return true
        return false;
    })
    console.log(user);
    if(user){
        const uniqueIdentifier = uuidv4();
        setUser(uniqueIdentifier, user);
        res.cookie("sessionId", uniqueIdentifier);
        return res.redirect('/')
    }
    return res.redirect('/login')
}

module.exports = {registerUser, loginUser}