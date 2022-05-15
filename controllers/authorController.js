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

  //get all author
  getallAuthor: async (req, res) => {
    try {
      const authour = await Author.find();
      res.status(200).json(authour);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //get an author
  getAnauthor: async (req, res) => {
    try {
      //populate lấy full data của book trong schema author
      const author = await Author.findById(req.params.id).populate("books"); //tim id tac gia
      res.status(200).json(author);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // update
  updateAuthor : async(req,res)=>{
    try {
      const updateauthor = await Author.findById(req.params.id);
      await updateauthor.updateOne({$set : req.body})
      res.status(200).json("update successfullly!");
    } catch (error) {
      res.status(500).json(error)
    }

  },
  //delete 
  DeleteAuthor:async(req,res)=>{
    try {
      await Book.updateMany(
        {author: req.params.id },
        {author:null}
     );
      await Author.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete successfully!")
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = authorController;
