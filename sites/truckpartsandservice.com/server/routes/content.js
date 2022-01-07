const withContent = require('@randall-reilly/package-global/middleware/with-content');
const queryFragment = require('@randall-reilly/package-theme-monorail/graphql/fragments/content-page');
const contact = require('@randall-reilly/package-global/templates/content/contact');
const company = require('../templates/content/company');
const product = require('../templates/content/product');
const whitepaper = require('../templates/content/whitepaper');
const content = require('../templates/content');

const companyFragment = require('../graphql/company-page-fragment');

module.exports = (app) => {
  app.get('/*?company/:id(\\d{8})*', withContent({
    template: company,
    queryFragment: companyFragment,
  }));

  app.get('/*?contact/:id(\\d{8})*', withContent({
    template: contact,
    queryFragment,
  }));

  app.get('/*?product/:id(\\d{8})*', withContent({
    template: product,
    queryFragment,
  }));

  app.get('/*?whitepaper/:id(\\d{8})*', withContent({
    template: whitepaper,
    queryFragment,
  }));

  app.get('/*?/:id(\\d{8})/*|/:id(\\d{8})(/|$)', withContent({
    template: content,
    queryFragment,
  }));
};
