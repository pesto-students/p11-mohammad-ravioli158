const errorHandler = (err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "An error occured", error });
};
module.exports = errorHandler;
