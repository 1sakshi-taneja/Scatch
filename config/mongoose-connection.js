const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/scatch") // this means laptop pe chal rhe mongodb se connect karo(local mongoDB)
  .then(function () {
    console.log("connected");
  })
  .catch(function (err) {
    console.log(err);
  });

module.exports = mongoose.connection; // scatch DB pe pura control iske through mil jaega

// making sure ki routes ko shi jagah pe bheju
