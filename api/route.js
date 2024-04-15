import express from "express";
const router = express.Router();
import upload from "../middleware/multer.js";
import uploadController from "../controllers/uploadController.js";

router.post(
  "/upload",
  upload.fields([
    { name: "liscenceImage", maxCount: 1 },
    { name: "adharImage", maxCount: 1 },
  ]),
  uploadController
);

export default router;
