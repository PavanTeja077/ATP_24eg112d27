import exp from 'express'
import { connect } from 'mongoose'
import { userApp } from './APIs/UserApi.js';
import { productApp } from './APIs/ProductAPI.js';
import { config } from 'dotenv';
config();
import cookieParser from 'cookie-parser';
const app = exp()
//add body parser
app.use(exp.json())

app.use(cookieParser());
//forward req to userapp if path starts with /user-api
app.use("/user-api", userApp)
app.use("/product-api", productApp)

// connect to db server
async function connectDB() {
    try {
        await connect(process.env.DB_URL);
        console.log("DB connection successful");
    } catch (err) {
        console.log("DB connection error:", err);
    }
}

// Start server after attempting DB connection
connectDB().then(() => {
    const port = process.env.PORT || 4000;
    app.listen(port, () => console.log(`server on port ${port}`));
});


//eror handling middleware - must be kept at the end of the file

app.use((err, req, res, next) => {
    console.log(err.name)
    //validationError
    if (err.name === "ValidationError") {
        return res.status(400).json({ message: "error occurred", err })
    }
    //cast error
    if (err.name === "CastError") {
        return res.status(400).json({ message: "error occurred", error: "CastError" })
    }
    //send servee side error
    res.status(500).json({ message: "error occurred", error: err.message })

    // res.json({message:"error occurred",error:err.message})
})

//error =>{name,message,callstack}