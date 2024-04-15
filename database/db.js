import mongoose from "mongoose";

const Connection = async () => {
  const URL = `mongodb+srv://admin:admin@demo.drzw6hj.mongodb.net/CLOUDINARY_UPLOAD?retryWrites=true&w=majority&appName=demo`;

  try {
    await mongoose.connect(URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with database:", error.message);
  }
};

export default Connection;
