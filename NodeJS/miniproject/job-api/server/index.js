
const app = require('./src/app')

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port} 🔥`);
