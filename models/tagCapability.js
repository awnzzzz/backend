import mongoose from "mongoose";

const TagCapabilitySchema = new mongoose.Schema({
  tag: String,
});
const TagCapability = mongoose.model("tagcapabilities", TagCapabilitySchema);

export default TagCapability;
