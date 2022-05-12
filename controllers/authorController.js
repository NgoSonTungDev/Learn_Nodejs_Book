const { Author, Book } = require("../model/model");

const authorController = {
  //add author
  addAuthor: async (req, res) => {
    try {
      const newAuthor = new Author(req.body);
      const savedAuthor = await newAuthor.save();
      res.status(200).json(savedAuthor);
    } catch (err) {
      res.status(500).json(err); //HTTP REQUEST CODE
    }
  },
};

module.exports = authorController;
