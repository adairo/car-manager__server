// @ts-check

export const validate = (schema) => (req, res, next) => {
  const parsed = schema.safeParse({
    params: req.params,
    body: req.body,
    query: req.query,
    headers: req.headers,
  });

  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error });
  }

  req.__parsed = parsed.data; // save the parsed payload
  next();
};

export function getValidated(req) {
  return req.__parsed;
}
