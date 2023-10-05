const logger = (req, res, next) => {
  // Log request details
  console.log(`Request Method: ${req.method}`);
  console.log(`Request URL: ${req.originalUrl}`);
  console.log(`Request IP: ${req.ip}`);
  console.log(`Request Timestamp: ${new Date().toISOString()}`);

  // Continue to the next middleware or route handler
  next();
};

module.exports = logger;
