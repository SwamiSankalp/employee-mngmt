/*
 *
 * USER SIGN-IN CONTROLLER
 *
 *
 */

// DEPENDENCIES
require("dotenv").config();
const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
  signIn: async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    if (!user) {
      throw new Error("Unable to login");
    }

    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        throw new Error("Unable to login");
      }
      const token = jwt.sign(
        {
          _id: user._id.toString(),
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "2d",
        }
      );
      res.status(200).json({ user, token });
    }
  },
};
