import app from "./app"

import dotenv from "dotenv";
dotenv.config({ path: "../.env" });
import { connectDb } from "./db/dbConnect";

const db: string = process.env.MONGODB_URI!;
const PORT = process.env.PORT || 5000;

const start = async () => {
  try {

    app.listen(PORT, () => {
      console.log(`💚[server]: Server is running at http://localhost:${PORT}`);
    });

    await connectDb(db);

  } catch (error) {
    console.error(error);
  }
};
start();
