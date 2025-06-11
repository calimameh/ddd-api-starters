const express = require('./express');
const loader = require('./loader');

loader(express); // Dynamically loads routes, etc.

module.exports = express;
