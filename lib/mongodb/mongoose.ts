import mongoose from "mongoose";

let initialized: boolean = false;
export const connect = async () => {
  mongoose.set("strictQuery", true);
  if (initialized) {
    console.log("Already connected to MongoDB");
    return;
  }

  try {
    const mongoUri: string | undefined = process.env.MONGODB_URI;
    if (!mongoUri) {
      console.error("MONGODB_URI is not defined in environment variables.");
      return;
    }
    await mongoose.connect(mongoUri, {
      dbName: "next-blog",
    });
    console.log("Connected to MongoDB");
    initialized = true;
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
};
