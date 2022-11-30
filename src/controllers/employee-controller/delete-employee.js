/*
 *
 *  DELETE EMPLOYEE CONTROLLER
 *
 */

// DEPENDENCIES
const Employee = require("../../models/employee");

module.exports = {
  delete: async (req, res) => {
    const payload = req.decoded;
    try {
      const employee = await Employee.findOneAndDelete({
        _id: req.params.employeeId,
        owner: payload._id,
      });

      if (!employee) {
        res.status(404).send();
      }

      res.send(employee);
    } catch (e) {
      res.status(500).send();
    }
  },
};
