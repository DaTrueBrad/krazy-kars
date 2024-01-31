const User = require("../models/user");
const bcrypt = require('bcrypt')

module.exports = {
  login: async (req, res) => {
    try {
      let { username, password } = req.body;
      let foundUser = await User.findOne({ where: { username: username } });
      if (foundUser) {
        const isAuthenticated = bcrypt.compareSync(
          password,
          foundUser.password
        );
        if (isAuthenticated) {
          //TODO ADD USER TO SESSION AND SUCH, THEN RETURN SESSION
          req.session.user = {
            id: foundUser.dataValues.id,
            username: foundUser.dataValues.username,
          };
          res.status(200).send(req.session.user);
        } else {
          res.status(400).send("Password is incorrect");
        }
      } else {
        res.status(400).send("User does not exist.");
      }
    } catch (error) {
      console.error(error);
      res.status(400).send(error);
    }
  },
  register: async (req, res) => {
    try {
      let { username, password } = req.body;
      console.log("BODY", req.body)
      let foundUser = await User.findOne({ where: { username: username } });
      console.log("FOUND",foundUser);
      if (foundUser) {
        res.status(400).send("Username is Taken!");
      } else {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        let newUser = await User.create({
          username: username,
          password: hash,
        });
        console.log("NEW",newUser);
        //todo same things as above
        req.session.user = {
          id: newUser.dataValues.id,
          username: newUser.dataValues.username,
        };
        res.status(200).send(req.session.user);
      }
    } catch (error) {
      console.error(error);
      res.status(400).send(error);
    }
  },
};
