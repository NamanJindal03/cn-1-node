function verifySession(req, res, next){
    const sessionId = req.cookies?.sessionId;
    if(!sessionId){
        return res.redirect('/login')
    }
    next()  
}

module.exports = {verifySession}