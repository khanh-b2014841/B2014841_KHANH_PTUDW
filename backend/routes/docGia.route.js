const router = require("express").Router();
const { readerControllers } = require("../controllers/docGia.controller");

router.post("/register", readerControllers.register);
router.post("/login", readerControllers.login);
router.put("/update", readerControllers.update);
router.get("/info", readerControllers.getInfo);
router.get("/all", readerControllers.getAll);

module.exports = router;
