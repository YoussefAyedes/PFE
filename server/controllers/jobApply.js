import mongoose from "mongoose";
import Jobs from "../models/jobsModel.js";

export const applyForJob = async (req, res) => {
    const { jobId } = req.body; // Get job ID from the request body
    const userId = req.user?._id; // Get user ID from authenticated user middleware
  
    console.log(jobId,userId)

    // Validate jobId
    if (!mongoose.Types.ObjectId.isValid(jobId)) {
        return res.status(400).json({ success: false, message: "Invalid job ID" });
    }
  
    try {
        // Find the job by ID
        const job = await Jobs.findById(jobId);
  
        if (!job) {
            return res.status(404).json({ success: false, message: "Job not found" });
        }
  
        // Check if the user has already applied for this job
        const alreadyApplied = job.applicants.includes(userId);
        if (alreadyApplied) {
            return res.status(400).json({ success: false, message: "You have already applied for this job" });
        }
  
        // Add user ID to the applicants array
        job.applicants.push(userId);
        await job.save(); // Save the updated job
  
        return res.status(200).json({
            success: true,
            message: "Application submitted successfully!",
        });
    } catch (error) {
        console.error("Error applying for job:", error); // Log the error for debugging
        return res.status(500).json({
            success: false,
            message: "Internal Server Error: " + error.message,
        });
    }
};
