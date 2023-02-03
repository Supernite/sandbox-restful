var express = require("express");
const { body } = require("express-validator");
var router = express.Router();
const userController = require("../controllers/userController");
const passportJWT = require("../middleware/passportJWT");

/* GET users listing. */
router.get("/", userController.index);
router.get("/bio", userController.bio);
router.post(
  "/register",
  [
    body("name").not().isEmpty().withMessage("กรุณาป้อนชื่อสกุลด้วย"),
    body("email")
      .not()
      .isEmpty()
      .withMessage("กรุณากรอกอีเมลด้วย")
      .isEmail()
      .withMessage("รูปแบบอีเมลไม่ถูกต้อง"),
    body("password")
      .not()
      .isEmpty()
      .withMessage("กรุณากรอกรหัสผ่านด้วย")
      .isLength({ min: 5 })
      .withMessage("รหัสผ่านต้อง 5 ตัวอักษรขึ้นไป"),
  ],
  userController.register
);
router.post("/login", userController.login);
router.get("/me", [passportJWT.isLogin], userController.getProfile);

module.exports = router;
