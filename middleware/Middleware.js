import User from "../Models/User.js";

export const isAdmin = async (req, res, next) => {
  try {
    const { email } = req.body;

    const userInfo = await User.findOne({ email });

    if (userInfo && userInfo.role == "Admin") {
      next();
    } else {
      res.status(403).json({
        message: "Access Denied, only Admin can access",
      });
    }
  } catch (error) {
    console.log(error);
    
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
