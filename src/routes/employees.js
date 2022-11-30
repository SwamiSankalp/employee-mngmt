/*
 *
 *  ROUTES FOR EMPLOYEE CONTROLLERS
 *
 */

// IMPORT ALL CONTROLLERS
const addController = require("../controllers/employee-controller/add-employee");
const delController = require("../controllers/employee-controller/delete-employee");
const getController = require("../controllers/employee-controller/get-employee");
const putController = require("../controllers/employee-controller/update-employee");
const { validateToken } = require("../middlewares/auth-handler");

module.exports = (router) => {
  router
    .route("/employee")
    .post(validateToken, addController.add)
    .get(getController.get);

  router
    .route("/employee/:employeeId")
    .delete(validateToken, delController.delete)
    .put(validateToken, putController.update);
};
