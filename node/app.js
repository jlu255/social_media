const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const postRoutes = require("./routes/post");
const authRoutes = require("./routes/auth");

const expressValidator = require("express-validator");
app.use(morgan("dev"));
app.use(express.json());
app.use(expressValidator());
app.use("/", postRoutes);
app.use("/", authRoutes);

mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("mongodb connected");
  }
);

mongoose.connection.on("error", (err) => {
  console.log(`DB connection error: ${err.message}`);
});

const port = process.env.PORT || 3000;
//listen to the given port
app.listen(port, () => console.log(`listening on port ${port}...`));
