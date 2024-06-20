const { getChatHistory } = require("../controllers/chatControllers");
const router = require("express").Router();


router.get("/history",getChatHistory);


module.exports = router