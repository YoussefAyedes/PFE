import express from "express";
import userAuth from "../middlewares/authMiddleware.js";
import {

  applyForJob,
} from "../controllers/jobApply.js";

const router = express.Router();


router.post("/apply-job", userAuth, applyForJob);


export default router;
