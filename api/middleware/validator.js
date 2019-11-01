const validator = schema => (req, res, next) => {
  const { error, value } = schema.validate(req.body);

  if (error) {
    res.status(422).json({
      error: error.details.map(err => ({
        message: err.message,
        path: err.path,
      })),
    });
  } else {
    req.body = value;
    next();
  }
};

module.exports = validator;
