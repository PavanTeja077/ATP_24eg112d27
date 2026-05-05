import exp from 'express'
import { ProductModel } from '../models/ProductModel.js'
export const productApp=exp.Router()
// create a product 
productApp.post("/products",async(req,res)=>{
    const newProduct=req.body
    const newProductDocument = new ProductModel(newProduct)
    const result = await newProductDocument.save()
    console.log("result is",result)
    res.status(201).json({message:"Product created"})

}
)
// read all products
productApp.get("/products",async(req,res)=>{
    let productsList = await ProductModel.find()
    //send res
    res.status(200).json({message:"product",payload:productsList})
})

//read a product by product id
productApp.get("/products/:id",async(req,res)=>{
    //read obj id from req params
    const uid = req.params.id
    //find user by id
    const productObj = await ProductModel.findById(uid)      // .findOne({_id:uid}) 
    res.status(200).json({message:"product",payload:productObj})

})
