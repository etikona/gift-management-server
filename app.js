const express = require("express");
const app = express();
const cors = require("cors");

// !Middleware
app.use(express.json());
app.use(cors());

// Require route
// const productRoute = require("./routes/product.route");
// const brandRoute = require("./routes/brand.route");
// // console.log(brandRoute);
// // !Posting to database
// app.use("/api/v1/product", productRoute);
// app.use("/api/V1/brand", brandRoute);

app.get("/", (req, res) => {
  res.send("App is connected");
});

module.exports = app;
