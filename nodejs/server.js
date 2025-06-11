const app = require('./src/bootstrap/app');
const config = require('./src/config');

const PORT = config.port || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
