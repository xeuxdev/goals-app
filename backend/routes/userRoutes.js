const express = require("express")
const router = express.Router()
// import all controllers
import { registerUser } from "../controllers/userController"

//register route
router.post("/", registerUser)

module.exports = router
