const configureNativeX = require('@randall-reilly/package-global/config/native-x');

const config = configureNativeX();

config.enabled = true;

config
  .setAliasPlacements('default', [
    { name: 'default', id: '6000b72a0ea4830001340b71' },
    { name: 'partner-insights', id: '62c467e41a8b4600011568e5' },
  ]);

module.exports = config;
