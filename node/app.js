const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const postRoutes = require("./routes/post");

app.use(morgan("dev"));
app.use("/", postRoutes);

mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("mongodb connected");
  }
);

const port = process.env.PORT || 3000;
//listen to the given port
app.listen(port, () => console.log(`listening on port ${port}...`));
