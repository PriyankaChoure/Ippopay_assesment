const mongoose = require("mongoose");
const app = require("./app");
const dbConfig = require("./config/dbconfig");

let server;

// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Create Mongo connection and get the express app to listen on config.port
mongoose
  .connect(dbConfig.mongoose.url, dbConfig.mongoose.options)
  .then(() => {
    console.log("Connected to Mongodb");
    server = app.listen(8082, () => {
      console.log("listing to port", 8082);
    });
  })
  .catch();
