const router = require("express").Router();
const { sendLink, getUser } = require("../controllers/authController");

router.post("/login", sendLink);
router.get("/callback", getUser);

module.exports = router;
