const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema for mongoose
const BookSchema = new Schema({
    src: String,
    title: String,
    authors: Array,
    date: String,
    description: String,
    link: String
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;