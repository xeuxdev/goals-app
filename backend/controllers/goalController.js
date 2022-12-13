const asyncHandler = require("express-async-handler")
//@desc     GET Goals
//@route    GET /api/goals
//@access   private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get goals" })
})

//@desc     Create a Goal
//@route    POST /api/goals/
//@access   private
const createGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error("Please add a text field")
  }
  res.status(201).json({ message: "set goals" })
})

//@desc     Update a Goal
//@route    PUT /api/goals/:id
//@access   private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "edit goals" })
})
//@desc     Delete a Goal
//@route    DELETE /api/goals/:Id
//@access   private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "delete goals" })
})

module.exports = { getGoals, createGoal, updateGoal, deleteGoal }
