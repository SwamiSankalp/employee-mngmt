/*
 *
 * USER SIGN-UP CONTROLLER
 *
 */

// DEPENDENCIES
require("dotenv").config;
const User = require("../../models/user");

module.exports = {
  add: async (req, res) => {
    const user = new User(req.body);

    try {
      await user.save();
      const token = jwt.sign(
        {
          _id: user._id.toString(),
        },
        process.env.JWT_SECRET
      );
      res.status(201).json({ user, token });
    } catch (error) {
      res.status(400).send(error);
    }
  },
};
