import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import companyRoutes from "./src/routes/company.routes.js";
import { connectDB } from "./src/lib/db.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173", // your frontend URL
    credentials: true,
  })
);

app.use("/api/companies", companyRoutes);
app.get("/", (req, res) => {
  res.send("Companies!");
});
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  connectDB();
});
