// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bluebird = require("bluebird");
const path = require("path");


//Define port
const PORT = process.env.PORT || 3000;
mongoose.Promise = bluebird;

// Initialize Express
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets if in production (running on Heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  } else {
    app.use(express.static(__dirname + "/client/public"));
  }

  //Routing
  var controller = require("./controller/controller")
  var router = new express.Router();
  //get saved articles
  router.get("/api/saved", controller.find);
  //save articles
  router.post("/api/saved", controller.insert);
  //delete articles
  router.delete("/api/saved/:id", controller.delete);
  //
//   router.get("/*", function(req, res {
//       res.sendFile(path.join(_dirname, )
//   }))

app.use(router);

// Connect mongoose to our database
const db = process.env.MONGODB_URI || "mongodb://localhost/nytreact";
mongoose.connect(db, function(error) {
  // Log any errors connecting with mongoose
  if (error) {
    console.error(error);
  }
  // Or log a success message
  else {
    console.log("mongoose connection is successful");
  }
});




// Listen on port
app.listen(PORT, function() {
    console.log("App running on port " + PORT);
  });
  