/*
 *
 * ROUTES HANDLER
 *
 */

const users = require("./users");
const employees = require("./employees");

module.exports = (router) => {
  users(router);
  employees(router);
  return router;
};
