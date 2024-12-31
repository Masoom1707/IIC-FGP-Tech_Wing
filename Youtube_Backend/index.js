import express from "express";
import { connectDb } from "./Connection/dbconn.js";
import { router } from "./Routes/userRoute.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/auth',router)

connectDb().then(() => {
  try {
    app.listen(PORT, () => {
      console.log(`listening on ${PORT}`);
    });
  } catch (error) {
    console.log('Some error occured in starting the server', error);
  }
});

