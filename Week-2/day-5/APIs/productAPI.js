import exp from 'express'
export const productapp=exp.Router()

//create product API with below operations 
//create new Product({productId,name,brand,price})
//Read all products
//Read all Product by brand
//Update a product 
//delete  a product by id
let product=[]
productapp.get('/product',(req,res)=>{
    //read all users & send res
    res.json({message:"all products",payload:product})
})
//CREATE PRODUCTS
productapp.post('/product',(req,res)=>{
    //get user from client
    const User=req.body
    //push user into users
    product.push(User)
    res.json({message:"product created"})
})
//UPDATE
productapp.put('/product', (req, res) => {
    // get updated product details from client
    const modifiedProduct = req.body;
    // find index of existing product in product array
    const Index = product.findIndex(prod => prod.id === modifiedProduct.id);
    // if product not found
    if (Index === -1) {
        return res.status(404).json({ message: "Product not found" });
    }
    // replace the product at the found index using splice
    product.splice(Index, 1, modifiedProduct);
    // send response
    res.json({ message: "Product updated successfully", product: product[Index] });
});
//DELETE
productapp.delete('/product/:pId',(req,res)=>{
//get id of user from url parameter
let idOfUrl=Number(req.params.pId)
//find index of user 
let index=product.findIndex(userObj=>userObj.pId===idOfUrl)
//if user not found
if(index===-1)
{
return res.json({message:"product not found to delete"})
}
//delete user by index
product.splice(index,1)
//send response
res.json({message:"product removed"})
})
