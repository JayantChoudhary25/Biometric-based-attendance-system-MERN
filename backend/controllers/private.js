exports.getPrivateData = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "YOU got ACCESS to the private data in this route",
  });
};
