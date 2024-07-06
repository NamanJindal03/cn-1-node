import products from '../../staticData/products.json' assert { type: "json" };
const getProductDetails = (req, res)=>{
    const {productId} = req.params;
    console.log(products);
    const requestedProduct = products.find((product)=>{
        return product.productId == productId
    })
    res.status(200).json({product: requestedProduct});

    //get the product
}

const updateProduct = (req, res) => {

}

const deleteProduct = (req, res) => {

}

const addProduct = (req, res) => {

}

export {getProductDetails, updateProduct, deleteProduct, addProduct}