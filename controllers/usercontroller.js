import userModel from "../Models/User.js";


export const createAdmin=async (req, res) => {
    try {

      const { name, email, pass } = req.body;
 
      const user = new userModel({
        name,
        email,
        pass,
        role: "Admin",
      });

      const savedUser=await user.save();
  
      res.json({
          user:savedUser,
          message:"Admin created successfully"
      })
  
    } catch (error) {

      res.json({
          message:"Server error"
      })
      
      console.log(error)
    }
  };
  
export const getAllusers =async (req,res)=>{
  try{

    const getuser = await userModel.find()
    res.json({
      getuser
  })
  }
  catch(error){
    res.json({
      error:"Cannot Fetch Data"
  })

  }
}