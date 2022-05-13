const { Author, Book } = require("../model/model");

const authorController = {
  //add author
  addAuthor: async (req, res) => {
    try {
      const newAuthor = new Author(req.body);
      const savedAuthor = await newAuthor.save();
      
      // res.status(201).json(savedAuthor);

    } catch (err) {
      console.log("ERROR: ", err);
      res.status(500).json(err); //HTTP REQUEST CODE
    }
  },


  getAuthor: async (req, res) => {
    try {
      const allAuthors = Author.find()
      res.status(200).json(allAuthors);
    } catch (err) {
      res.status(500).json(err); //HTTP REQUEST CODE
    }
  },

  //// BOOKS
  addBook: async (req, res) => {
    try {
      const newBook = new Book(req.body);
      const authorId = req.body.authorId;
      const savedBook = await newBook.save();
      Author.findById(
        { _id: authorId },
        { $push: savedBook }
      )
      res.status(201).json(savedBook);
    } catch (err) {
      console.log("ERROR: ", err);
      res.status(500).json(err); //HTTP REQUEST CODE
    }
  },
  
};

module.exports = authorController;
