const fs = require('fs');
const path = require('path');

module.exports = function (app) {
  const routesDir = path.join(__dirname, '../routes');
  const files = fs.readdirSync(routesDir);

  files.forEach((file) => {
    if (file.endsWith('.js')) {
      const route = require(path.join(routesDir, file));
      app.use('/', route); // or dynamic prefix based on module
    }
  });
};
