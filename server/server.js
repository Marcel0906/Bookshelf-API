import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import booksRoutes from "./routes/booksRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000;

async function dataBase() {
  mongoose.connect(process.env.URL);
  console.log("dataBase is connected");
}
dataBase().catch((error) => console.log(error));

app.use("/books", booksRoutes);
app.use("/users", userRoutes);


app.listen(PORT, () => {
  console.log("Server started on Port:", PORT);
});
