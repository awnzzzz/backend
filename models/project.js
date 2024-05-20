import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  key: String,
  keyTag: Array,
  folder: String,
  img: String,
  imgTitle: String,
  childrenA: String,
  childrenB: String,
  link: String,
  demo: String,
});
const Project = mongoose.model("Project", ProjectSchema);

export default Project;
