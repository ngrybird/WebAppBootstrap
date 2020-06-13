exports.getAllNotes = (req, res, next) => {
  res.send({ value: "Sending notes response" });
};

exports.addNewNote = (req, res, next) => {
  console.log(req.body);
  res.send({ value: "req added" });
};
