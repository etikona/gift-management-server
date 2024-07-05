const express = require("express");
const app = express();
const cors = require("cors");

// !Middleware
app.use(express.json());
app.use(cors());

// Require route
const productRoute = require("./routes/product.route");

// // console.log(brandRoute);
// // !Posting to database
app.use("/api/v1/product", productRoute);

app.get("/", (req, res) => {
  res.send("App is connected");
});

module.exports = app;
