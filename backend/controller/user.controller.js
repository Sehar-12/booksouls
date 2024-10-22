import User from '../model/user.model.js';
import bcryptjs from "bcryptjs";
export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        
        // Check if user already exists by email
        const user = await User.findOne({ email });  // Corrected line

        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashPassword=await bcryptjs.hash(password,8);
        // Create a new user
        const createdUser = new User({
           fullname: fullname,
            email: email,
           password: hashPassword,
        });

        // Save the new user
        await createdUser.save();

        // Respond with success
        res.status(201).json({ message: "User created successfully",user:{
            _id:createdUser._id,
            fullname:createdUser.fullname,
            email:createdUser.email,
        } });

    } catch (error) {
        console.error("Error: ", error.message);  // Log the error for debugging
        res.status(500).json({ message: "Internal server error" });
    }
};
export const login=async (req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await User.findOne({email});
        const isMatch=await bcryptjs.compare(password,user.password)
        if(!user||!isMatch){
            return res.status(400).json({message:"Invalid username or password"});
        }
        else{
            res.status(200).json({message:"Login successful",user:{
                _id:user.id,
                fullname:user.fullname,
                email:user.email
            }});
        }
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Internal server error"})
    }
}

