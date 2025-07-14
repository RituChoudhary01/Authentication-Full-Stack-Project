import jwt from 'jsonwebtoken';

const userAuth = async(req, res, next) => {
  const {token} = req.cookies;
  // console.log(token);
  if(!token){
    return res.json({success:false, message:'Not Authorized Login Again'})
  }
  try{
     const tokenDecode =  jwt.verify(token,process.env.JWT_SECRET);
    //  console.log(tokenDecode)
    //  console.log("id  is here : " + tokenDecode.id )
     if(tokenDecode.id){
      // req.body.userId = tokenDecode.id
      req.user = tokenDecode.id;
     }else{
      return res.json({success:false,message:'Not Authorized Login Again'});
     }
     next();
  }catch(error){
   res.json({success:false, message:"error yha nhi h"});
  }
}

export default userAuth;



