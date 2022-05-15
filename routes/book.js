const router = require("express").Router();
const bookController =  require("../controllers/bookController")


router.post("/",bookController.addBook);
router.get("/",bookController.getAllBook);
router.get("/:id",bookController.getANBook);
// update
router.put("/:id",bookController.UpdateBook);
router.delete("/:id",bookController.DeleteBook)


module.exports = router