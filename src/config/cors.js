const cors = (origin) => (_req, res, next) => {
  res.set({
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Content-Type, Accept, Authorization",
    "Access-Control-Allow-Methods": "OPTIONS, GET, POST, DELETE, PATCH",
    "Access-Control-Allow-Credentials": true,
  });

  next();
};

export default cors;
