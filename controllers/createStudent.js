import userModel from "../Models/User.js";

export const createStudent=async (req, res) => {
    try {

      const { name, email, pass } = req.body;
  
      const user = new userModel({
        name,
        email,
        pass,
        role: "Student",
      });

      const savedUser=await user.save();
  
      res.json({
          user:savedUser,
          message:"Student created successfully"
      })
  
    } catch (error) {

      res.json({
          message:"Server error"
      })
      
      console.log(error)
    }
  };
  
