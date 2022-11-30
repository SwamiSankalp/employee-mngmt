/*
 *
 *  GET ALL EMPLOYEES CONTROLLER
 *
 */

// DEPENDENCIES
const Employee = require("../../models/employee");

module.exports = {
  get: async (req, res) => {
    try {
      const employee = await Employee.find();

      if (!employee) {
        res.status(404).send();
      }

      res.status(200).json(employee);
    } catch (e) {
      res.status(500).send();
    }
  },
};
