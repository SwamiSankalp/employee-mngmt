/*
 *
 * USER SIGN-IN CONTROLLER
 *
 *
 */

// DEPENDENCIES
require("dotenv").config();
const User = require("../../models/user");
const jwt = require("jsonwentoken");

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
        process.env.JWT_SECRET
      );
      req.status(200).json({ user, token });
    }
  },
};
