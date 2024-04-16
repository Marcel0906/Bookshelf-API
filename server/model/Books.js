import mongoose from "mongoose";
const { model } = mongoose;


const bookSchema = mongoose.Schema({
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
