const Workout = require("../models/WorkoutModel");
const mongoose = require("mongoose");
// get all workouts
const getWorkouts = async (req, res) => {
  const workouts = await workout.find({}).sort({ createAt: -1 });

  req.status(200).json(workouts);
};
// get a single workout
const getWorkout = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }
  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({ error: "No such workout" });
  }
};

// create new workou

const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;
};

// add doc to db
try {
  const workout = await workout.create({ title, load, reps });
  res.status(200).json(workout);
} catch (error) {
  res.status(400).json({ error: error.message });
}
// delete a workout

// update a workout

module.exports = {
  createWorkout,
  getWorkout,
  createWorkout,
};
