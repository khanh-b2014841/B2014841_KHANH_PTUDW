const router = require("express").Router();
const { staffControllers } = require("../controllers/nhanVien.controller");

router.post("/create", staffControllers.create);
router.post("/login", staffControllers.login);
router.get("/info", staffControllers.getInfo);
router.put("/update", staffControllers.update);
router.get("/all", staffControllers.getAll);

module.exports = router;
