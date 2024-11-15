import userModel from "../Models/User.js";

export const createAlumni=async (req, res) => {
    try {

      const { name, email, pass } = req.body;
  
      const user = new userModel({
        name,
        email,
        pass,
        role: "Alumni",
      });

      const savedUser=await user.save();
  
      res.json({
          user:savedUser,
          message:"Alumni created successfully"
      })
  
    } catch (error) {

      res.json({
          message:"Server error"
      })

      console.log(error)
    }
  };
  
