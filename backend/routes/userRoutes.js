const express = require("express")
const router = express.Router()
// import all controllers
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController")

//register route
router.post("/", registerUser)
router.post("/login", loginUser)
router.get("/me", getMe)

module.exports = router
