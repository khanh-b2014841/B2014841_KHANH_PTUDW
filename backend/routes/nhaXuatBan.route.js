const router = require("express").Router();
const { nbxControllers } = require("../controllers/nhaXuatBan.controller");

router.post("/create", nbxControllers.create);
router.put("/update", nbxControllers.edit);
router.get("/info", nbxControllers.getOne);
router.get("/all", nbxControllers.getAll);

module.exports = router;
