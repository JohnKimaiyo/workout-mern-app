const express = require("express");

const router = express.Router();

// get all workouts
router.get("/", () => {
  res.json({ msg: "GET ALL WORKOUTS" });
});

//GET single workout
router.get("/:id", (res, req) => {
  res.json({ msg: "GET single workout" });
});

//  POST a new workout
router.post("/", (req, res) => {
  res.json({ msg: "POST a new workout" });
});

// DELETE a workout
router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a new  workout" });
});

// update a workout
router.put('/:id',(req,res)=>{
    res.json({msg:'update a new workout'})
})
module.exports = router;
