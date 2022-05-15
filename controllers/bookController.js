const { Author, Book } = require("../model/model");

const bookController = {
  //add book
  addBook: async (req, res) => {
    try {
      const newbook = new Book(req.body);
      const savebook = await newbook.save();
      if (req.body.author) {
        //tim id cho cuoon sacsh
        const author = Author.findById(req.body.author);
        //them sach vao tac gia
        // $push chỉ dùng cho aray
        await author.updateOne({ $push: { books: savebook._id } });
      }
      res.status(200).json(savebook);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getAllBook: async (req, res) => {
    try {
      const getAllbook = await Book.find();
      res.status(200).json(getAllbook);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getANBook: async (req, res) => {
    try {
      const AnBook = await Book.findById(req.params.id).populate("author");
      res.status(200).json(AnBook);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  UpdateBook: async (req, res) => {
    try {
      const AnBook = await Book.findById(req.params.id);
      await AnBook.updateOne({ $set: req.body });
      res.status(200).json("update successfullly!");
    } catch (error) {
      res.status(500).json(error);
    }
  },
  DeleteBook: async (req, res) => {
    try {
      await Author.updateMany(
        {books: req.params.id },
        {$pull:{books: req.params.id}}
     );
      await Book.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete successfully!")
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = bookController;
