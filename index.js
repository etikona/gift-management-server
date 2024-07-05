// require("dotenv").config();
// const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

// const app = require("./app");
// const port = process.env.PORT || 5000;

// // Database URI
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.6hyeg.mongodb.net/?retryWrites=true&w=majority`;

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// // Connect to MongoDB before starting the server
// async function connectToMongoDB() {
//   try {
//     await client.connect();
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//     throw error;
//   }
// }

// // Define your routes and other functionalities that use the MongoDB connection

// // Connect to MongoDB and define routes
// connectToMongoDB().then(defineRoutes);
// app.listen(port, () => {
//   console.log("Server running on", port);
// });
