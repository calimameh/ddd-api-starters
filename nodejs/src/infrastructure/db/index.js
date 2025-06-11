const config = require('../../config');

switch (config.db.type) {
  case 'sqlite':
    module.exports = require('./sqlite');
    break;
  case 'mongo':
    module.exports = require('./mongo');
    break;
  case 'memory':
  default:
    module.exports = require('./memory');
    break;
}
