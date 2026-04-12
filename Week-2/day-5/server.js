// create http server
import exp from 'express'
const app=exp() //express internally contains http server
import { userapp } from './APIs/userAPI.js';
import { productapp } from './APIs/productAPI.js';
//use body parser middleware
app.use(exp.json())
//create custom middleware1
function middleware1(req,res,next){
//res.json({message:"the is the middleware response"})
console.log("middleware 1 executed")
next()

}
function middleware2(req,res,next){
//res.json({message:"the is the middleware response"})
console.log("middleware 2 executed")
next()

}
app.use(middleware1)
app.use(middleware2)
//forward 
app.use('/user-api',userapp)
app.use('/product-api',productapp)
//set a port number
const port=3100;

//assign port no to http server
app.listen(port,()=> console.log(`server listening to port ${port}...`))
// test data(replace in future with database)
