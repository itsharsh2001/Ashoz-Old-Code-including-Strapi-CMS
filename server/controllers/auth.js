import User from '../models/user.js';
import { hashPassword, comparePassword } from '../utils/auth';
import jwt from 'jsonwebtoken'

let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export const register = async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;
        if(!name || !email || !phone || !password) {
            return res.status(400).send("Please Fill all the Fields");
        }

        if(name.length < 3) return res.status(400).send("Please Enter Valid Name");
        
        if(!emailRegex.test(email)) return res.status(400).send("Please Enter Valid Email");

        if (phone.length != 10) return res.status(500).send("Please Enter Valid Phone Number");

        if (password.length < 6) return res.status(400).send("Password is required and should be minimum 6 characters long");

        let checkUser = await User.findOne({email: email})

        if (checkUser) return res.status(500).send("User already registered");

        const hashedPassword = await hashPassword(password);

        const user = new User({
            name,
            email,
            phone,
            password: hashedPassword
        })

        await user.save();

        console.log('user saved', user)
        return res.status(200).json({ message: "true"})
    } catch (error) {
        console.log(error);
        return res.status(400).send('Error. Try Again')
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if(!email || !password) {
            return res.status(400).send("P;ease Fill all the Fields");
        }

        if (!emailRegex.test(email)) return res.status(400).send("Please Enter Valid Email");

        let checkUser = await User.findOne({ email: email })

        if (!checkUser) return res.status(500).send("User Not Registered");

        const passwordMatch = await comparePassword(password, checkUser.password);

        if(!passwordMatch) return res.status(400).send("Invalid Credentials")
        
        const token = jwt.sign({email: email, id:checkUser._id}, process.env.JWT_SECRET, {
            expiresIn: '7d',
        });

        //Now Return User and Token to the client
        checkUser.password = undefined;

        //send token in cookie
        res.cookie("token", token, {
            httpOnly:true,
            //secure: true, // only works on https
        })

        //http - in development
        //secure - in production

        return res.status(200).json({message:"true", user:checkUser})
    } catch (error) {
        console.log(error);
        return res.status(400).send('Error. Try Again')
    }
}