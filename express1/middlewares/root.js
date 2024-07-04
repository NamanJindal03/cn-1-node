
function first(req, res, next){
    console.log('first')
    next()
}

function second(req, res, next){
    console.log('second')
    next()
}

module.exports = {first, second}