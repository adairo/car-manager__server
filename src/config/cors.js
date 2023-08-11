const cors = (origin) => (_req, res, next) => {
  res.set({
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Headers": "Content-Type",
  });

  next();
};

export default cors;
