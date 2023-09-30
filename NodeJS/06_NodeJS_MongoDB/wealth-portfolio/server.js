const app = require("./src/app");
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.info("Server is running on port", port);
});
