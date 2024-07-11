const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");

const app = require("./app");

// Database Connect
const mongoURI = process.env.MONGO_URI;
if (!mongoURI) {
  throw new Error("MongoDB URI is not defined in environment variables");
}
mongoose.connect(mongoURI).then(() => {
  console.log("Database connected successfully");
});

// PORT

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("APP Listening on ", port);
});
