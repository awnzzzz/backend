import mongoose from "mongoose";

const CapabilitySchema = new mongoose.Schema({
  key: String,
  keyTag: Array,
  folder: String,
  img: String,
  imgTitle: String,
  link: String,
});
const Capability = mongoose.model("Capabilities", CapabilitySchema);

export default Capability;
