import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import jhonbertRoute from "./routes/jhonberts.js";
import tagProjectsRoute from "./routes/tagProjects.js";
import tagCapabilitiesRoute from "./routes/tagCapabilities.js";
import projectsRoute from "./routes/projects.js";
import capabilitiesRoute from "./routes/capabilities.js";
import platformsRoute from "./routes/platforms.js";
import connectDB from "./db/connect.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use("/jhonbert", jhonbertRoute);
app.use("/tagprojects", tagProjectsRoute);
app.use("/tagcapabilities", tagCapabilitiesRoute);
app.use("/projects", projectsRoute);
app.use("/capabilities", capabilitiesRoute);
app.use("/platforms", platformsRoute);

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
