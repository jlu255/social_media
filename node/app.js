const express = require("express");
const app = express();
const morgan = require("morgan");

const { getPosts } = require("./routes/post");

const myOwnMiddleware = (req, res, next) => {
  console.log("middleware applied");
  next();
};

app.use(morgan("dev"));
app.use(myOwnMiddleware);
app.get("/", getPosts);
const port = process.env.PORT || 3000;
//listen to the given port
app.listen(port, () => console.log(`listening on port ${port}...`));
