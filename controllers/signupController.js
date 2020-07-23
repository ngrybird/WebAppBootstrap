const User = require("../models/user");
const bcrypt = require("bcryptjs");

exports.getSignup = (req, res, next) => {
  let message = req.flash("error");
  if (message.length > 0) {
    message = message[0];
  } else {
    message = null;
  }
  res.render("signup", {
    pageTitle: "signup",
    errorMessage: message
  });
};
exports.postSignup = (req, res, next) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;

  User.findOne({ email: email })
    .then(userDoc => {
      if (userDoc) {
        req.flash("error", "User already exist.");
        return res.redirect("/signup");
      }
      return bcrypt
        .hash(req.body.password, 12)
        .then(hashedPassword => {
          const _user = new User({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPassword
          });
          return _user.save();
        })
        .then(result => {
          console.log(result);
          res.redirect("/login");
        });
    })
    .catch(err => {
      console.log(err);
    });
};
