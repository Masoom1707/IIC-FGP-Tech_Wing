import express from "express";
import cookieParser from "cookie-parser";

import { connectDb } from "./Connection/dbconn.js";
import { router } from "./Routes/userRoute.js";
import { videoRouter } from "./Routes/videoRoute.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cookieParser());

app.use("/auth", router);
app.use("/api", videoRouter);

connectDb().then(() => {
  try {
    app.listen(PORT, () => {
      console.log(`listening on ${PORT}`);
    });
  } catch (error) {
    console.log("Some error occured in starting the server", error);
  }
});
