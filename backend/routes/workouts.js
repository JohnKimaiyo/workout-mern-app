const express = require("express");
const workout = require("../models/WorkoutModel");
const { createWorkout } = require("../controllers/workoutController");
const router = express.Router();

// get all workouts
router.get("/", getWorkouts);
//GET single workout
router.get("/:id", getWorkouts);

//  POST a new workout
router.post("/", createWorkout);

// DELETE a workout
router.delete;

// update a workout
router.put;
module.exports = router;
