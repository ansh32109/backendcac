// import dotenv from "dotenv";
import "dotenv/config";
import { connectDB } from "./db/index.js";
import { config } from "dotenv";
import app from "./app.js";

config({
  path: "./env",
});

// dotenv.config({
//   path: "./env",
// });

connectDB()
  .then(() => {
    app.on("error", (err) => {
      console.log("Error occured: ", err);
      throw err;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed (src/index.js): ", err);
  });
