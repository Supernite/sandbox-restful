var express = require("express");
var router = express.Router();
const staffController = require("../controllers/staffController");

/* GET users listing. */
router.get("/", staffController.index);

/* Get by id */
/* http://localhost:3000/staff/6391b761ba567c30f89d7123 */
router.get("/:id", staffController.show);
router.delete("/:id", staffController.destroy);
router.put("/:id", staffController.update);


router.post("/", staffController.insert);

module.exports = router;
