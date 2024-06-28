const Product = require('../models/productModel')

//get All product
exports.getProducts = async(req, res, next) =>{
  const products = await Product.find();
  res.status(200).json({
    success : true,
    count : products.length,
    products
  })
}

//post All product - app/v1/products/new
exports.newProduct =async (req, res, next) =>{
   const product = await Product.create(req.body);
   res.status(201).json({
    success : true,
   
    product
   })
}

//getSingle Product- app/v1/products/667af342060d2f1b81a4c367

exports.getSingleProduct =async (req,res,next) =>{
   const product = await Product.findById(req.params.id)

   if(!product){
    return res.status(404).json({
      success:false,
      message:"Product Not found"
    })
   }

   res.status(401).json({
    success:true,
    product,
   })
}

// update Product - app/v1/products/667af342060d2f1b81a4c367

exports.updateProdcut = async (req, res, next)  =>{
  let product = await Product.findById(req.params.id)

  if(!product){
    return res.status(404).json({
      success:false,
      message:"Product Not found"
    })
   }


   product = await Product.findByIdAndUpdate(req.params.id , req.body , {
    new:true,
    runValidators:true
   })
      res.status(200).json({
      success:true,
      product

})
}

//delete product
exports.deleteProdcut = async(req,res,next) =>{
  const product = await Product.findById(req.params.id)

  if(!product){
    return res.status(404).json({
      success:false,
      message:"Product Not found"
    })
   }

   await product.deleteOne()

   res.status(200).json({
    success:true,
    message:"Product delete successfully"
   })
}