/*
 *
 * EMPLOYEE-ADD CONTROLLER
 *
 */

// DEPENDENCIES
const Employee = require("../../models/employee");

module.exports = {
  add: async (req, res) => {
    const payload = req.decoded;
    const employee = new Employee({
      ...req.body,
      createdById: payload._id,
    });

    try {
      await employee.save();
      res.status(201).json(employee);
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
