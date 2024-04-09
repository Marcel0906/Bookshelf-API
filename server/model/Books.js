import mongoose from "mongoose";
const { Schema, model } = mongoose;

const bookSchema = Schema({
  title: String,
  author: String,
  country: String,
  imageLink: String,
  language: String,
  year: Number,
  pages: Number,
});

const Books = model("Books", bookSchema);
export default Books;
