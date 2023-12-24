const { Router } = require("express");
const router = Router();

const { getUser, getFriends } = require("../controllers/steam");

router.get("/getUser/:keyword", getUser);
router.get("/getFriends/:keyword", getFriends)

module.exports = router;