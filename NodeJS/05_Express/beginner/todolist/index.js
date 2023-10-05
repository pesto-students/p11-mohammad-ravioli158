// Import Express app instance
const expressApp = require("./src/app");
// Port to listen on
const port = process.env.PORT || 3001;
// Start the server
expressApp.listen(port, () => {
  console.log("Server is running on port", port);
});
