import express from "express";

import { createAdmin, getAllusers } from "../controllers/usercontroller.js";
import { createAlumni } from "../controllers/createAlumni.js";
import { createStudent } from "../controllers/createStudent.js";
import { createCompany, getCompany } from "../controllers/createCompany.js";
import { createReview } from "../controllers/reviewcontroller.js";
import { likeReviews } from "../controllers/likecontroller.js";
import {isAdmin} from "../middleware/Middleware.js";


const router = express.Router()


router.post("/admin/create",createAdmin);

router.post("/alumni/create", createAlumni);

router.post("/student/create", createStudent);

router.post("/company/create", isAdmin, createCompany);

router.post("/review/create", createReview);

router.post("/like/add",likeReviews);

router.get("/user/getAlluser", getAllusers);

router.get("/company/get", getCompany);

export default router;