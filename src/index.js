// import dotenv from "dotenv";
import "dotenv/config";
import { connectDB } from "./db/index.js";

// dotenv.config({
//   path: "./env",
// });

connectDB();
