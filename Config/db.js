import mongoose from "mongoose";

const dbconnect = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URL);
      console.log("MongoDb Connect SuccessFully");
    } catch (error) {
      console.log("Connection Failed", error);
    }
  };

  export default dbconnect;