const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established succesfuly");
});

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const exercisesRoute = require("./routes/exercises");
const usersRoute = require("./routes/users");

app.use("/exercises", exercisesRoute);
app.use("/users", usersRoute);

app.listen(port, () => {
  console.log(`Listening... ${port}`);
});
