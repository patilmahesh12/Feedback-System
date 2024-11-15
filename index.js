import express from "express";
import dotenv from "dotenv";
import dbconnect from "./Config/db.js";
// import { createAdmin, getAllusers } from "./controllers/usercontroller.js";
// import { createAlumni } from "./controllers/createAlumni.js";
// import { createStudent } from "./controllers/createStudent.js";
// import { createCompany, getCompany } from "./controllers/createCompany.js";
// import { createReview } from "./controllers/reviewcontroller.js";
// import { likeReviews } from "./controllers/likecontroller.js";

import router from "./Routs/mainroute.js";

const app = express();
const port = 3000;
app.use(express.json());

app.use("/api/v1",router)

dotenv.config();
dbconnect();



app.listen(port, () => {
  console.log(`Server is Running on ${port}`);
});
