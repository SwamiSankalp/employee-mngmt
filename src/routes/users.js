/*
 *
 *  ROUTES FOR USER CONTROLLERS
 *
 */

// IMPORT ALL CONTROLLERS
const addController = require("../controllers/user-controller/user-signup");
const logInController = require("../controllers/user-controller/user-signin");

module.exports = (router) => {
  router.route("/users").post(addController.add);
  router.route("/login").post(logInController.signIn);
};
