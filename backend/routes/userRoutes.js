const express = require("express")
const router = express.Router()
// import all controllers
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userController")
const { protect } = require("../middleware/authMiddleware")

//register route
router.post("/", registerUser)
router.post("/login", loginUser)
router.get("/me", protect, getMe)

module.exports = router
