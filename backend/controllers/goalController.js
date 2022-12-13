const asyncHandler = require("express-async-handler")

const Goal = require("../models/goalModel")

//@desc     GET Goals
//@route    GET /api/goals
//@access   private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find()
  res.status(200).json(goals)
})

//@desc     Create a Goal
//@route    POST /api/goals/
//@access   private
const createGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error("Please add a text field")
  }

  const goal = await Goal.create({
    text: req.body.text,
  })
  res.status(201).json(goal)
})

//@desc     Update a Goal
//@route    PUT /api/goals/:id
//@access   private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)
  if (!goal) {
    res.status(404)
    throw new Error("Goal not found")
  }
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })
  res.status(200).json(updatedGoal)
})
//@desc     Delete a Goal
//@route    DELETE /api/goals/:Id
//@access   private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)
  if (!goal) {
    res.status(404)
    throw new Error("Goal not found")
  }
  await goal.remove()
  res.status(200).json({ id: req.params.id })
})

module.exports = { getGoals, createGoal, updateGoal, deleteGoal }
