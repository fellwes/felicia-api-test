const { response } = require("express");
const express = require("express");
const router = express.Router();
const Worker = require("../models/worker");

//få en lista av workers fr db
router.get("/workers", function (req, res, next) {
  Worker.find({}).then(function (workers) {
    res.send(workers);
  });
});

//lägg till ny worker till db
router.post("/workers", function (req, res, next) {
  Worker.create(req.body)
    .then(function (worker) {
      res.send(worker);
    })
    .catch(next);
});

//uppdatera en worker i db
router.put("/workers/:id", function (req, res, next) {
  Worker.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
    Worker.findOne({ _id: req.params.id }).then(function (worker) {
      res.send(worker);
    });
  });
});

//ta bort en worker fr db
router.delete("/workers/:id", function (req, res, next) {
  Worker.findByIdAndRemove({ _id: req.params.id }).then(function (worker) {
    res.send(worker);
  });
});

module.exports = router;
