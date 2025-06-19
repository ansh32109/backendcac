import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const connectDB = async () => {
  try {
    // console.log("The mongo uri is: ", process.env.MONGODB_URI);
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`,
    );
    console.log("MongoDB connected at: ", connectionInstance.connection.host);
  } catch (error) {
    console.log("MONGODB Connection Error (src/index.js) : ", error);
    process.exit(1);
  }
};
