/*
 *
 *  UPDATE EMPLOYEE CONTROLLER
 *
 */

// DEPENDENCIES
const Employee = require("../../models/employee");

module.exports = {
  update: async (req, res) => {
    const payload = req.decoded;
    const _id = req.params.employeeId;
    const data = req.body;
    const updates = Object.keys(data);
    try {
      const employee = await Employee.findOne({
        _id,
        createdById: payload._id,
      });

      updates.forEach((update) => (employee[update] = req.body[update]));
      employee.save();
      if (!employee) {
        return res.status(404).json();
      }
      res.status(200).json(employee);
    } catch (error) {
      res.status(400).json(error);
    }
  },
};
