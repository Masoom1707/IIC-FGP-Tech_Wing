import { MongoClient } from "mongodb";
import dotenv from 'dotenv'

dotenv.config()


let client
export const connectDb = async () => {
  try {

    // connect to mongoDB
    client = new MongoClient(process.env.MONGO_URI);
    await client.connect();
    console.log("Database Connected ");

  } catch (error) {
    console.error("Error in Connection", error);
    process.exit(1);
  }
};

process.on("SIGINT", async () => {
    if (client) {
      await client.close();
      console.log("Database connection closed");
    }
    process.exit(0);
  });
