import bcrypt from "bcryptjs"
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signUpUser = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Password does not match" })
    }

    const user = await User.findOne({
      username
    })

    if (user) {
      return res.status(400).json({ message: "Username already exists" })
    }
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const boyProfilePicture = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePicture = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePicture: gender === "male" ? boyProfilePicture : girlProfilePicture
    })

    if(newUser){
      //generate jwt token
      generateTokenAndSetCookie(newUser._id,res)
      await newUser.save()
    
    res.status(201).json({ 
      _id: newUser._id,
      fullName: newUser.fullName,
      username: newUser.username,
      profilePicture: newUser.profilePicture
     });
    }else {
      res.status(500).json({ message: "Invalid user data" })
     }
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message })
  }
}

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({
      username
    })

    const isMatch = await bcrypt.compare(password, user?.password || "")

    if ( !user || !isMatch) {
      return res.status(400).json({ message: "Username or Password incorrect" })
    }
    //generate jwt token
    generateTokenAndSetCookie(user._id,res)

    //send response
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePicture: user.profilePicture
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message })
  }
}

export const logoutUser =(req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logout success" });
  }catch (error) {
    console.log(error)
  }
}