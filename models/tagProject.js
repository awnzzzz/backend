import mongoose from "mongoose";

const TagProjectSchema = new mongoose.Schema({
  tag: String,
});
const TagProject = mongoose.model("tagproject", TagProjectSchema);

export default TagProject;
