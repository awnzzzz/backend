import mongoose from "mongoose";

const PlatformSchema = new mongoose.Schema({
  platform: String,
  account: String,
});
const Platform = mongoose.model("platforms", PlatformSchema);

export default Platform;
