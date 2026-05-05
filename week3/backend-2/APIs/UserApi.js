//create min-express app(separate route)
import exp from 'express'
import {UserModel} from '../models/UserModel.js'
import {hash,compare} from 'bcryptjs'
//import middlewares
import {verifyToken} from "../middlewares/verifyToken.js";
import jwt from 'jsonwebtoken'
const {sign}=jwt

export const userApp=exp.Router()

//user login
userApp.post('/auth',async(req,res)=>{
    //get user cred obj from client
    const {email,password}=req.body
    //verify email
    let user = await UserModel.findOne({email:email})
    //if mail not existed
    if(user===null){
        return res.status(404).json({message:"Invalid email"})
    }
    //compare passwords
     let result = await compare(password,user.password)
     // if passwords not matched
     if(result===false){
        return res.status(400).json({message:"invalid password"})
     }
     // if passwords are matched
    const signedToken =  sign({email:user.email}, process.env.SECRET_KEY, {expiresIn:"1d"})
      //send token as httponly cookie
      res.cookie("token",signedToken,{
        httpOnly:true,
        sameSite:"lax" ,//relaxed restriction
        secure:false
      })
      //sendr result
res.status(200).json({message:"login sucess",payload:user})

     // res.status(200).json({message:"login success",token:signedToken})
})
//define user api routes
//create new user
userApp.post("/users",async(req,res)=>{
//get new user obj from req
const newUser=req.body;
//hash the password
const hashedPassword = await hash(newUser.password,10)
//replace plain password with hashed password
newUser.password=hashedPassword;
//create new user document
const newUserDocument = new UserModel(newUser)
//save
const result = await newUserDocument.save()
console.log("result:",result)
//send response 
res.status(201).json({message: "user created"})
});

//read all users (protected route)
userApp.get("/users",verifyToken,async(req,res)=>{
    //read all users from db
    let usersList = await UserModel.find()

    //send res
    res.status(200).json({message:"users",payload:usersList})
})

//read a user by object id
userApp.get("/users/:id",async(req,res)=>{
    //read obj id from req params
    const uid = req.params.id
    //find user by id
    const userObj = await UserModel.findById(uid)      // .findOne({_id:uid}) 
    res.status(200).json({message:"user",payload:userObj})

})

//update a user 
userApp.put("/user",verifyToken, async(req,res)=>{
    //get modified user from req
    const modifiedUser = req.body;
    const emailOfUser = req.user?.email;

    if (modifiedUser.password) {
        modifiedUser.password = await hash(modifiedUser.password, 10);
    }

    //find user by email and update
    const userobj = await UserModel.findOneAndUpdate({email : emailOfUser}, modifiedUser, {new: true}).populate("cart.product")
        
    // if user not found
    if(!userobj){
        return res.status(404).json({message:"user not found"})
    }
    //send res
    res.status(200).json({ message:"user updated", payload:userobj})
})

// find and delete a user by id


userApp.delete("/users/:id", async (req, res) => {
    // get id from req params
    const uid = req.params.id
         // find & delete user by id
    const deleteduser = await UserModel.findByIdAndDelete(uid)
    if(!deleteduser){
        return res.status(404).json({message:"user not found"})
    }
    // sned res
    res.status(200).json({
        message: "user deleted",
        payload: deleteduser
    })

})

//add product to cart
userApp.put("/cart/product-id/:pid", verifyToken, async (req,res)=>{
    // get product id from rl param
    let productID = req.params.pid;
    //get current user details
    const emailOfUser = req.user?.email;
    
    //find user by email
    const user = await UserModel.findOne({ email: emailOfUser });
    if (!user) {
        return res.status(404).json({ message: "user not found" });
    }

    //check if product is already in the cart
    const itemIndex = user.cart.findIndex(item => item.product.toString() === productID);

    //if the product is there, then increment count by 1
    if (itemIndex !== -1) {
        user.cart[itemIndex].count += 1;
    } else {
    //otherwise add that product to cart
        user.cart.push({ product: productID, count: 1 });
    }

    await user.save();
    res.status(200).json({ message: "product added to cart" });
})


//200 -- success
//201 -- created
//400 -- bad request
//401 -- unauthorised
//404 -- not found
//500 -- server error
