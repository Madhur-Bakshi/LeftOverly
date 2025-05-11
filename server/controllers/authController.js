import userModel from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const JWT_SECRET = process.env.JWT_SECRET;

const signup = async(req,res) =>{
    const {username, email, password} = req.body;

    try{
        const existingUser = await userModel.findOne({email});
        if(existingUser)
        {
            return res.status(400).json({message: "User already exists"});
        }
            const hashedPassword = await bcrypt.hash(password,10);
        const user = await userModel.create({username, email, password: hashedPassword});

        const token = jwt.sign({id: user._id}, JWT_SECRET)

        res.status(201).json({user: {id: user._id, username, email},token});
    }
    catch(error)
    {
        res.status(500).json({error: "Signup failed"});
    }
};

const login = async(req,res)=>{
    const {email,password} = req.body;
    try{
        const user = await userModel.findOne({email});
        if(!user)
        {
            return res.status(400).json({message: "Invalid credentials"});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch)
        {
            return res.status(400).json({message: "Invalid credentials"});
        }
        const token = jwt.sign({id:user._id},JWT_SECRET);

        res.json({user: {id: user._id, username: user.username, email},token});
    }
    catch(error)
    {
        res.status(500).json({error: "Login failed"});
    }
}

export {signup, login}