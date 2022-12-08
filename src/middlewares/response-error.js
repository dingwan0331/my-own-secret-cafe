export const responseError = (err, req, res, next) => {
  const { statusCode, message, isCustom } = err;
  if (isCustom) {
    res.status(statusCode).json({ message: message });
  } else {
    res.status(500).json({ message: "Server Error" });
  }
};
