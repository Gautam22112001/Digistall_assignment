import express from "express";
const router = express.Router();
import DATA from "../models/student.js";
import cloudinary from "../utils/cloudinary.js";

const uploadController = async (req, res) => {
  if (!req.files || !req.files["liscenceImage"] || !req.files["adharImage"]) {
    return res.status(400).json({
      success: false,
      message: "Missing required files",
    });
  }
  try {
    const licenseImageResult = await cloudinary.uploader.upload(
      req.files["liscenceImage"][0].path
    );

    const adharImageResult = await cloudinary.uploader.upload(
      req.files["adharImage"][0].path
    );

    const data = {
      licenseImageUrl: licenseImageResult.url,
      licenseNumber: req.body.liscenceNumber,
      aadharImageUrl: adharImageResult.url,
      aadharNumber: req.body.adharNumber,
    };

    const validatedData = new DATA(data);
    await validatedData.save();

    res.status(200).json({
      success: true,
      message: "Document Created",
      data: data,
    });
  } catch (error) {
    console.log("Error uploading images:", error);
    res.status(500).json({
      success: false,
      message: "Error creating document",
      error: error.message,
    });
  }
};

export default uploadController;
