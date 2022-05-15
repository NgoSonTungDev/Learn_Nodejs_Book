const authorController = require("../controllers/authorController");

const router = require("express").Router();

//add author

router.post("/",authorController.addAuthor)

//get all

router.get("/",authorController.getallAuthor)

//get an authour
router.get("/:id",authorController.getAnauthor)

//update an book
router.put("/:id",authorController.updateAuthor)

// delete book
router.delete("/:id",authorController.DeleteAuthor)




module.exports = router;