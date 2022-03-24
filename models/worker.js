const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//skapa worker schema och model
const workerSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name field is required"],
  },
  service: {
    type: String,
    required: [true, "Service field is required"],
  },
  available: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
    default: "",
  },
  price: {
    type: String,
    default: "",
  },
  phone: {
    type: String,
    required: [true, "Phone field is required"],
  },
  email: {
    type: String,
    required: [true, "Email field is required"],
  },
});

const Worker = mongoose.model("worker", workerSchema);

module.exports = Worker;
