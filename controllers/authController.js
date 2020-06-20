exports.getLogin = (req, res, next) => {
  res.render("login", {
    pageTitle: "login"
  });
};

exports.postLogin = (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
};
