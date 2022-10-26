const configure = require('@randall-reilly/package-global/config/omeda-identity-x');
const omedaConfig = require('./omeda');
const idxConfig = require('./identity-x');

module.exports = configure({
  omedaConfig,
  idxConfig,
  rapidIdentProductId: 24,
  websiteBehaviorAttributeId: 390191,
});
