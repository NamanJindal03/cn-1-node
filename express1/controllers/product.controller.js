const sendProducts = (req, res) => {
    // console.log(req.number);
    res.json(req.number)
}
const sendSpecificProduct = (req, res) => {
    res.json('spefic product')
}

module.exports = {sendProducts, sendSpecificProduct}