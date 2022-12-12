//@desc     GET Goals
//@route    GET /api/goals
//@access   private
const getGoals = (req, res) => {
  res.status(200).json({ message: "get goals" })
}

//@desc     Create a Goal
//@route    POST /api/goals/
//@access   private
const createGoal = (req, res) => {
  res.status(201).json({ message: "set goals" })
}

//@desc     Update a Goal
//@route    PUT /api/goals/:id
//@access   private
const updateGoal = (req, res) => {
  res.status(200).json({ message: "edit goals" })
}
//@desc     Delete a Goal
//@route    DELETE /api/goals/:Id
//@access   private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: "delete goals" })
}

module.exports = { getGoals, createGoal, updateGoal, deleteGoal }
