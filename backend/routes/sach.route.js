const router = require("express").Router();
const { bookControllers } = require("../controllers/sach.controller");

router.post("/create", bookControllers.create);
router.put("/update", bookControllers.edit);
router.get("/info", bookControllers.getOne);
router.get("/all", bookControllers.getAll);
router.get("/count", bookControllers.getCount);
router.get("/random", bookControllers.getRandom);

module.exports = router;
