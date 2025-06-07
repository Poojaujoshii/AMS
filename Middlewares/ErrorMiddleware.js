const errorHandler = (error, req, res, next) => {
  let statusCode = 500; // use let instead of const

  if (error.message === "Incorrect Password") {
    statusCode = 401;
  } else if (error.message === "User Details Not Found") {
    statusCode = 400;
  } else if (error.message === "Admin Not Found") {
    statusCode = 400;
  }

  return res.status(statusCode).send({ error: error.message });
};

export default errorHandler;
