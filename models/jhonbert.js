import mongoose from "mongoose";

const JhonbertSchema = new mongoose.Schema({
  key: String,
  jhon: String,
  bert: String,
});
const Jhonbert = mongoose.model("owners", JhonbertSchema);

export default Jhonbert;
