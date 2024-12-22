import express from "express";
import { connectDb } from "./Connection/dbconn.js";

const app = express();
const PORT = 3000;

app.use(express.json());


connectDb().then(() => {
  try {
    app.listen(PORT, () => {
      console.log(`listening on ${PORT}`);
    });
  } catch (error) {
    console.log('Some error occured in starting the server', error);
  }
});

