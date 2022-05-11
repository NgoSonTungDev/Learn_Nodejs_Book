const authorController = require("../controllers/authorController");

const router = require("express").Router();

//add author

router.post("/",authorController.addAuthor)

module.exports = router;