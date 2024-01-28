const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database URI
const uri =
  "mongodb+srv://shop-manager:wybcCsGjmI6DVA7I@cluster0.6hyeg.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Connect to MongoDB before starting the server
async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

// Define your routes and other functionalities that use the MongoDB connection
async function defineRoutes() {
  const productCollection = client.db("gift-shop").collection("products");

  // Testing endpoint
  app.get("/test", async (req, res) => {
    res.send("Testing vercel");
  });

  // Loaded all Products data
  app.get("/products", async (req, res) => {
    const query = {};
    const products = await productCollection.find(query).toArray();
    res.send(products);
  });

  // Load a Single product from the database
  app.get("/products/:id", async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const product = await productCollection.findOne(query);
    res.send(product);
  });

  // Delete One Product
  app.delete("/products/:id", async (req, res) => {
    const id = req.params.id;
    const result = await productCollection.deleteOne({ _id: ObjectId(id) });
    res.send(result);
  });
  // Edit Products
  app.put("/products/:id", async (req, res) => {
    const id = req.params.id;
    const result = await productCollection.updateOne({ _id: ObjectId(id) });
    res.send(result);
  });
  // Set User
  app.post("/user", async (req, res) => {
    const user = req.body;

    const result = await userCollection.insertOne(user);

    res.send(result);
  });

  app.get("/user/:email", async (req, res) => {
    const email = req.params.email;

    const result = await userCollection.findOne({ email });

    if (result?.email) {
      return res.send({ status: true, data: result });
    }

    res.send({ status: false });
  });

  // Start the server after connecting to MongoDB
  app.get("/", (req, res) => {
    res.send("Gift Shop server successfully running");
  });

  app.listen(port, () => {
    console.log("Server running on", port);
  });
}

// Connect to MongoDB and define routes
connectToMongoDB().then(defineRoutes);
