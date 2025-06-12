const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const controllersPath = path.join(__dirname, '../interfaces/http/controllers');

fs.readdirSync(controllersPath).forEach((file) => {
  const controller = require(path.join(controllersPath, file));

  if (controller.router && controller.routeBase) {
    router.use(controller.routeBase, controller.router);
  }
});

module.exports = router;
