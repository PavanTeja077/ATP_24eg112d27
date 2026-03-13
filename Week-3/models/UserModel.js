import { Schema,model,Types } from "mongoose";
//create a cart schema{product,count}
const cartSchema=new Schema({
   product:{
      type:Types.ObjectId,
      ref:"product" //name of the product model
   },
   count:{
   type:Number,
   default:1
   }
})
//create a user schema with email
const userSchema =new Schema({
username: {
type:String,
required:[true,"Username is required"],
minLength:[4,"Min length of Username is 4 chars"],
maxLength:[8,"username size exceeds 6 chars"],
},
password: {
type:String,
required:[true,"Password required"]
},
email:{
type:String,
required:[true,"email required"]
,unique:[true,"email already existed"]
},
age:{
type:Number,
required:[true,"age required"]
},
cart:[cartSchema]
},
{
    versionKey:false,
    timestamps:true
})
//generate UserModel
export const UserModel= model("users",userSchema)

//create product schema
const productSchema =new Schema({
    productId:{
    type:Number,
    required:[true,"pid is required"],
    unique:[true,"id already exist "]
    },
 productName:{
    type:String,
    required:[true,"product name is required"]
 },
 price:{
    type:Number,
    min:[10000,"min price is 10000"],
    max:[50000,"max price is 50000"],

 },
 brand:{
    type:String,
    required:[true,"brand is required"]
 },
},{
     versionKey:false,
    timestamps:true
})
//generate ProductModel
export const ProductModel= model("products",productSchema)