const IdentityXConfiguration = require('@parameter1/base-cms-marko-web-identity-x/config');
const newrelic = require('newrelic');

module.exports = ({
  appId,
  requiredServerFields = ['givenName', 'familyName', 'countryCode'],
  requiredClientFields = ['regionCode', 'countryCode'],
  ...rest
} = {}) => {
  const config = new IdentityXConfiguration({
    appId,
    apiToken: process.env.IDENTITYX_API_TOKEN,
    requiredServerFields,
    requiredClientFields,
    onHookError: newrelic.noticeError.bind(newrelic),
    ...rest,
  });
  return config;
};
