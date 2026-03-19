const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const { calculate,getPolicies,createPolicy,getPolicyById } = require("../controllers/policyController");

router.post("/calculate", auth, calculate);
router.get("/", auth, getPolicies);
router.post("/", auth, createPolicy);
router.get("/:id", auth, getPolicyById);

module.exports = router;