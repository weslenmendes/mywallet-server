import "dotenv/config";
import express, { json } from "express";
import cors from "cors";

import { connectWithDB } from "./config/db.js";
import { signIn, signUp, signOut } from "./controllers/authController.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(json());

app.post("/", signIn);
app.post("/signup", signUp);
app.post("/signout", signOut);

await connectWithDB();
app.listen(port, () => {
  console.log(`🚀 Server is running on: http://localhost:${port}/`);
});
