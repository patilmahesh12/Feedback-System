import mongoose from "mongoose";


const userschema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    pass: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ["Admin", "Alumni", "Student"],
      required: true,
    },
  });

  const User = mongoose.model("User", userschema)

  export default User;