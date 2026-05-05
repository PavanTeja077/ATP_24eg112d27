import jwt from 'jsonwebtoken'
//const verify
const {verify}=jwt;



export function verifyToken(req,res,next){
    //tokenn verification logic
    let token = req.cookies.token
//if req from unauthorised user
if(!token){
    return res.status(401).json({message:"plz login"});
}
try{
    //if token is existed
    const decodedToken = verify(token, process.env.SECRET_KEY);
    req.user = decodedToken; // attach user info to request
    next();


}
catch(err){
    res.status(401).json({message:"session expired plz relogin"})
}
}