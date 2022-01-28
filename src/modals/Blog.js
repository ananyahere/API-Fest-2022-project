const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
  authorName: String,
  title: String,
  content: String,
  publishedOn: Date
})

module.exports = mongoose.model("Blog", blogSchema)