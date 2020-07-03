exports.getSignup = (req, res, next) => {
  res.render("signup", {
    pageTitle: "signup"
  });
};
exports.postSignup = (req, res, next) => {
  res.redirect("/");
};
