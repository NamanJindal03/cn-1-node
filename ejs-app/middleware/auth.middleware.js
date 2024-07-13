const {getUser}= require('../service/session.service')
function verifySession(req, res, next){
    const sessionId = req.cookies?.sessionId;
    const user = getUser(sessionId);
    console.log(user)
    if(!user){
        return res.redirect('/login')
    }
    next()  
}

module.exports = {verifySession}