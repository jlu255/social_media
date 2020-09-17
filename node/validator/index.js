exports.createPostValidator = (req, res, next) => {
  req.check("title", "Write a title").notEmpty();
  req.check("title", "Title must be between 4 to 150 characters").isLength({
    min: 4,
    max: 150,
  });
  req.check("body", "Write a body").notEmpty();
  req.check("body", "Body must be between 4 to 2000 characters").isLength({
    min: 4,
    max: 2000,
  });

  const errors = req.validationErrors();
  if (errors) {
    const firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }

  //proceed to next middleware
  next();
};

exports.userSignupValidator = (req, res, next) => {
  req.check("name", "name is required").notEmpty();
  req
    .check("email", "email must be between 3 to 32 characters")

    .matches(/.+\@.+\..+/)
    .withMessage("email must contain@")
    .isLength({
      min: 3,
      max: 32,
    });

  req.check("password", "password is required").notEmpty();
  req
    .check("password")
    .isLength({ min: 6 })
    .withMessage("Password must contain at least 6 character")
    .matches(/\d/)
    .withMessage("password must contains a number");

  const errors = req.validationErrors();
  if (errors) {
    const firstError = errors.map((error) => error.msg)[0];
    return res.status(400).json({ error: firstError });
  }

  //proceed to next middleware
  next();
};
