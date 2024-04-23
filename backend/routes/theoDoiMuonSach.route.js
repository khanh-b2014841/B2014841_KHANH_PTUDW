const router = require("express").Router();
const { theoDoiMuonSachControllers } = require("../controllers/theoDoiMuonSach.controller");

router.post("/create", theoDoiMuonSachControllers.create);
router.put("/update", theoDoiMuonSachControllers.update);
router.get("/info", theoDoiMuonSachControllers.getOne);
router.get("/all", theoDoiMuonSachControllers.getAll);
router.get("/count", theoDoiMuonSachControllers.getCount);

module.exports = router;