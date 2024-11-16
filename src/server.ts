import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { registerRoutes } from "./modules";
import connectDatabase from "./config/database.config";
import { Logger } from "./middlewares/logger";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(Logger);

connectDatabase();

app.get("/", (req, res) => {
  res.send("Server is up and running!");
});

// Register Module Routes
registerRoutes(app);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
