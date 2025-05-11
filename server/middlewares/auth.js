import jwt from "jsonwebtoken";

const userAuth = async(req, res, next)=>{
    const {token} = req.headers;
    if(!token)
    {
        return res.status(401).json({success:false, message: "Not Authorized. Login Again"});
    }
    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        if(tokenDecode.id)
        {
            req.userId = tokenDecode.id;
            next();
        }
        else
        {
            return res.status(401).json({
                success: false,
                message:"Invalid Token. Please Login Again.",
            });
        }
    } catch (error) {
        return res.status(401).json({
            success:false,
            message: "Unauthorized. "+error.message,
        });
    }
};

export default userAuth;