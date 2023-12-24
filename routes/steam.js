const { Router } = require("express");
const router = Router();

const { getUser } = require("../controllers/steam");

router.get("/getuser/:keyword", getUser);

module.exports = router;