//import mongoose
import {Schema,model,Types} from "mongoose"

//create cart schema {product, count}
const cartSchema = new Schema({
    product:{
        type:Types.ObjectId,
        ref:"product"   // name of the product model
    },
    count:{
        type:Number,
        default:1
    }

})
//create user schema(username,password,email,age)
const userSchema = new Schema({
    //structure of user resource
    username:{
        type:String,
        required:[true,"username is required"],
        minLength:[4,"Min length of username is 4 chars"],
        maxLength:[6,"Username size exceed 6 chars"],
    },
    password:{
        type:String,
        required:[true,"Password required"],
    },
    email:{
             type:String,
        required:[true,"Email required"],
        unique:true
    },
    age:{
         type:Number,
       // required:[true,"Age required"],
    },
    cart:[cartSchema]
},
    {
        versionKey:false,
        timestamps:true,
    },
);
 //generate user model
 export const UserModel = model("user",userSchema)

// Duplicate product model removed. Product model is defined in separate file models/ProductModel.js.