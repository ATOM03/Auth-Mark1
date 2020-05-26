const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 8000;
const mongo = require("./Mongodb");

//Connection To MongoDatabase
mongoose
  .connect(mongo || "mongodb://localhost/Authication", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongoose is Connected!!!");
  })
  .catch((err) => {
    console.log("Caught", err.stack);
  });

app.use(express.json());

//for register request
app.use("/register", require("./Route/Register"));

//for login request
app.use("/login", require("./Route/Login"));

app.listen(PORT, console.log(`Server is Runnig ${PORT}`));
