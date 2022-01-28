const { nanoid } = require("nanoid");
const Blog = require('./modals/Blog')


class Service {
    constructor() {}
    getBlogs = async (req, res) => {
      const blogs = await Blog.find()
      res.send(blogs);
    };
    addBlog = async (req, res) => {
      const newBlog = await Blog.create(req.body);
      res.send(newBlog);
    };
    getBlog = async (req, res) => {
      const { id } = req.params;
      const blog = await Blog.findById(id);
      if (blog) {
        res.send(blog);
      }else{
        res.code(404).send(`No Blog with id ${id} found`)
      }
    };
    updateBlog = async (req, res) => {
      const { id } = req.params;
      const blog = await Blog.findById(id)
      if (blog) {
        await blog.update(req.body)
        res.code(200).send()
      } else {
        res.code(404).send(`No blog with the ${id} exist.`)
      }
    };
    deleteBlog = async (req, res) => {
      const { id } = req.params;
      const blog = await Blog.findById(id)
      if (blog) {
        await blog.findByIdAndRemove(id)
        res.code(200).send()
      } else {
        res.code(404).send(`No blog with the ${id} exist.`)
      }
    };
  
}

module.exports = Service;
