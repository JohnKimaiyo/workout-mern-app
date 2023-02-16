const express = require("express");
const { default: mongoose } = require("mongoose");
const workoutRoutes = require("./routes/workouts");
require("dotenv").config();
const port = 4000;

// express app
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
});
// routes
app.use("/api/workouts", workoutRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
