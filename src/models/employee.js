/*
 *
 * Database Scheme for Employee Model
 *
 */

// Dependencies
const mongoose = require("mongoose");

// Task-List Model
const employeeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  department: {
    type: String,
    required: true,
    trim: true,
  },
  salary: {
    type: Number,
  },
  createdById: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
