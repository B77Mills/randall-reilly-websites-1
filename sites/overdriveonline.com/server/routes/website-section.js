const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const queryFragment = require('@randall-reilly/package-global/graphql/fragments/website-section-page');
const products = require('../templates/website-section/products');
const section = require('../templates/website-section');

module.exports = (app) => {
  app.get('/:alias(gear)', withWebsiteSection({
    template: products,
    queryFragment,
  }));
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
