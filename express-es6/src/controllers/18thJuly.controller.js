let sampleProductArr = [
    {
        name: 'prod1',
        price: 10,
        product_id: 1
    },
    {
        name: 'prod2',
        price: 20,
        product_id: 2
    },
    {
        name: 'prod3',
        price: 30,
        product_id: 3
    },
    {
        name: 'prod4',
        price: 40,
        product_id: 4
    },
]

const operationIdMapping = {
    1: 'greater than equal to',
    2: 'less than equal to',
    3: 'equal'
}

function handleProductPut(req, res){
    const productId = req.params.productId;
    const product = sampleProductArr.find((productEntry)=>{
        if(productEntry.product_id == productId){
            return true
        }
        return false
    })
    if(!product){
        return res.status(404).json({success: false, message: 'productId is not correct', error: 'productId is not correct'})
    }
    const updatedProducts = sampleProductArr.map((productEntry)=>{
        if(productEntry.product_id == productId){
            productEntry.name = req.body.name;
            productEntry.price = req.body.price;
        }
        return productEntry;
    })
    sampleProductArr = updatedProducts;
    return res.status(200).json({success: true, message: 'product succesfully updated', product: updatedProducts})
    //some constraints ->
    /* 
        1) check if the product id is valid 
        2) only add the fileds which are present in my existing object ->
        3) whereever necessarry put res.status(400) //404 put the error 
        4) on success return the complete product arr
    */
}

function getFilteredProduct(req, res){
    const priceFilter = req.query?.price;
    const operationId = req.query?.operation;
    if(! (priceFilter && operationId)){
        return res.status(200).json({success: true, product: sampleProductArr})
    }
    const filteredProducts = sampleProductArr.filter((productEntry)=>{
        if(operationId == 1){
            return productEntry.price >= priceFilter
        }
        else if(operationId == 2){
            return productEntry.price == priceFilter;
        }
        else if(operationId == 3){
            return productEntry.price <= priceFilter;
        }
        
    })
    return res.status(200).json({success: true, product: filteredProducts})
}

function getFilteredProduct2(req, res){
    let priceFilter = req.query?.price;
    priceFilter = priceFilter.split(',');
    priceFilter = priceFilter.map((entry)=>{
        return parseInt(entry)
    })
    console.log(priceFilter)
    // if(! (priceFilter)){
    //     return res.status(200).json({success: true, product: sampleProductArr})
    // }
    const filteredProducts = sampleProductArr.filter((productEntry)=>{
        // console.log(priceFilter.includes(10));
        // console.log(parseInt(productEntry.price));
        return priceFilter.includes(productEntry.price)
    })
    return res.status(200).json({success: true, product: filteredProducts})
}

export {handleProductPut, getFilteredProduct, getFilteredProduct2}