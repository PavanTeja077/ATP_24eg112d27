//create mini-express app(Seperate route)
import exp from 'express'
export const userapp=exp.Router()

let users=[]
//create API(REST API-REpresentational State Transfer) 
// it enables intercations between servers
//route to handle get req of client(http://localhost:3100/users)
//Route to handle Get request of a client
userapp.get('/users',(req,res)=>{
    //read all users & send res
    res.json({message:"all users",payload:users})
})
userapp.get('/users/:id',(req,res)=>{
    let idOfUrl=Number(req.params.id)
    let user=users.find(userObj=>userObj.id===idOfUrl)
    if(user===undefined)
{
return res.json({message:"user not found "})
}
res.json({message:"user found",payload:users})
})
//Route to handle Post request of a client
userapp.post('/users',(req,res)=>{
    //get user from client
    const newUser=req.body
    //push user into users
    users.push(newUser)
    res.json({message:"user created"})
})
//Route to handle Put request of a client
userapp.put('/users',(req,res)=>{
    // get updated or modified user from client{}
    let modifiedUser=req.body;
    //get index of existing user in user array
    let index=users.findIndex(userObj=>userObj.id===modifiedUser.id)
    //if user not found
    if(index===-1){
    return res.json({message:"User not found"})
    }
    //update user with index
    users.splice(index,1,modifiedUser)
    //send response
    res.json({message:"User updated"})
})
//Route to handle Delete request of a client
userapp.delete('/users/:id',(req,res)=>{
//get id of user from url parameter
let idOfUrl=Number(req.params.id)
//find index of user 
let index=users.findIndex(userObj=>userObj.id===idOfUrl)
//if user not found
if(index===-1)
{
return res.json({message:"user not found to delete"})
}
//delete user by index
users.splice(index,1)
//send response
res.json({message:"user removed"})
})