const { getChatHistory } = require("../controllers/chatControllers");
const router = require("express").Router();


router.get("/",getChatHistory);


module.exports = router