//create min-express app(seperate route)
import exp from 'express'
import {ProductModel, UserModel} from '../models/UserModel.js'
import {hash,compare} from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { verifyToken } from '../middleware/verifyToken.js'
const {sign}=jwt
export const userApp=exp.Router()
export const productApp=exp.Router()
//DEFINE USER REST API Routes
//Create a new user
userApp.post("/users",async(req,res)=>{
//get new user obj from req
const  newUser=req.body;
//hash the password
const hashedpassword=await hash(newUser.password,10)
//replace the plain password with hashed password
newUser.password=hashedpassword;
//Create a new user document
const newUserDocument = new UserModel(newUser);
//save
const result=await newUserDocument.save();
console.log(result)
//send res
res.status(201).json({message:"user created",payload:result})
});
//read all users
userApp.get("/users",verifyToken,async(req,res)=>{
    let usersList=await UserModel.find();
    //send res
    res.status(200).json({message:"users",payload:usersList})
})
//user login
userApp.post("/auth",async(req,res)=>{
//get user cred obj from client
const {email,password}=req.body;
//verify email
let user=await UserModel.findOne({email:email})
//if email not found
if(user===null)
{
return res.status(404).json({message:"Invalid email"})
}
//compare passwords
let result=await compare(password,user.password)
//if password not matched
if(result===false){
return res.status(400).json({message:"invalid password"})
}
//if passwords are matched
//create token (jsonwebtoken -jwt--Jaat)
const signedToken=sign({email:user.email},"abcdef",{expiresIn:"1h"})
//send token in res
//res.status(200).json({message:"login success",token:signedToken})
res.cookie("token",signedToken,{
    httpOnly:true,
    sameSite:"lax",//relaxed restriction
    secure:false
    })
    //send res
res.status(200).json({message:"login success",payload:user})

})

//read a user by ObjectID
userApp.get("/users/:id",verifyToken,async(req,res)=> 
{
//read a user email from req
const emailOfUser = req.user?.email;
//read obj id 
const uid=req.params.id
const userObj=await UserModel.findOne({emailOfUser}).populate("cart.products");
if(!userObj)
{
return res.status(404).json({message:"user not found"})
}
//send res
res.status(200).json({message:"users",payload:userObj})
})
//update a user by id
userApp.put("/users/:id",async(req,res)=>
{
    //get modified user from req
const modifiedUser=req.body;
const uid=req.params.id;
//find user by id & update
const updateUser=await UserModel.findByIdAndUpdate(
    uid,{$set:{...modifiedUser},new:true,runValidators:true}
);
if(!updateUser)
{
return res.status(404).json({message:"user not found"})
}
//send res
res.status(200).json({message:"user modified",payload:updateUser})
})
userApp.delete("/users/:id",async(req,res)=>
{
const uid=req.params.id;
const deleteduser =await UserModel.findByIdAndDelete(uid)
{
if(!deleteduser){
return res.status(404).json({message:"user not found"})
}
}
res.status(200).send({ message: "User deleted successfully", payload: deleteduser  });
})
//produt api routes to create the product
productApp.post("/products",async(req,res)=>{
const  newProduct=req.body;
const newProductDocument = new ProductModel(newProduct);
const result1=await newProductDocument.save();
console.log(result1)
//send res
res.status(201).json({message:"product created"})
});
//read all products
productApp.get("/products",async(req,res)=>{
    let productlist=await ProductModel.find();
    //send res
    res.status(200).json({message:"users",payload:productlist})
})
//read by id
productApp.get("/products/:pid", async (req, res) => {

const pid = req.params.pid;

//find product
const productObj = await ProductModel.findOne({productId: pid});

if(!productObj){
    return res.status(404).json({message:"product not found"})
}

res.status(200).json({message:"product", payload: productObj})

});
//update product by id
productApp.put("/products/:pid", async (req, res) => {
const pid = req.params.pid;
const modifiedProduct = req.body;
//update product
const updatedProduct = await ProductModel.findOneAndUpdate(
    {productId: pid},
    {$set:{...modifiedProduct}},
    {new:true, runValidators:true}
);
if(!updatedProduct){
    return res.status(404).json({message:"product not found"})
}
res.status(200).json({
    message:"product updated",
    payload: updatedProduct
})
});
//delete product
productApp.delete("/products/:pid", async (req, res) => {
const pid = req.params.pid;
const deletedProduct = await ProductModel.findOneAndDelete({productId: pid});
if(!deletedProduct){
    return res.status(404).json({message:"product not found"})
}
res.status(200).json({
    message:"product deleted",
    payload: deletedProduct
})
});
//add product to cart
userApp.put("/cart/product-id/:pid",async(req,res)=>{
    //get product id from url param
    let productId=req.params.pid;
    //get current user details
    const emailOfUser=req.user?.email
    //before add,first it should check that product is already in the cart
    //if the product is there ,then increment count by 1
    //otherwise add the product to cart
//add product to cart
let result = await UserModel.findOneAndUpdate({email:emailOfUser},
{$push:{cart:{product:productId}}});
//if user is invalid
if(!result) {
return res.status(404).json({message:"user not found"})
}
res.status(200).json({message:"product added to cart" });
})
/*userApp.put("/cart/product-id/:pid",async(req,res)=>{
    //get product id from url param
    let productId=req.params.pid;
    //get current user details
    const emailOfUser=req.user?.email
    //before add,first it should check that product is already in the cart
    //if the product is there ,then increment count by 1
    //otherwise add the product to cart
//add product to cart
if(cart.product == product)
{

}*/