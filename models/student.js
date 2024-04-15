import mongoose from "mongoose";

const assignSchema = new mongoose.Schema({
  //   _id: mongoose.Schema.Types.ObjectId,
  licenseImageUrl: String,
  licenseNumber: String,
  aadharImageUrl: String,
  aadharNumber: String,
});

const DATA = mongoose.model("data", assignSchema);

export default DATA;
