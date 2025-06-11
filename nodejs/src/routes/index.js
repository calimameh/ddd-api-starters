const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const featuresPath = path.join(__dirname, '../interfaces/http/controllers');

fs.readdirSync(featuresPath).forEach((feature) => {
  const featurePath = path.join(featuresPath, feature);

  if (fs.lstatSync(featurePath).isDirectory()) {
    fs.readdirSync(featurePath).forEach((file) => {
      const controller = require(path.join(featurePath, file));
      if (controller.router && controller.routeBase) {
        router.use(controller.routeBase, controller.router);
      }
    });
  }
});

module.exports = router;
