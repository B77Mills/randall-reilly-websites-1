const { getOmedaCustomerRecord } = require('@parameter1/base-cms-marko-web-omeda-identity-x/omeda-data');
const { get, getAsArray } = require('@parameter1/base-cms-object-path');

module.exports = ({
  omedaConfig,
  idxConfig,
  rapidIdentProductId,
  websiteBehaviorAttributeId,
  // Passed through, if specified.
  appendPromoCodeToHook = [],
  appendBehaviorToHook = [],
  appendDemographicToHook = [],
}) => ({
  clientKey: omedaConfig.clientKey,
  brandKey: omedaConfig.brandKey,
  appId: omedaConfig.appId,
  inputId: omedaConfig.inputId,
  rapidIdentProductId,
  idxConfig,

  /**
   * Behavior config is now mandatory and can be generated by the CLI.
   * @see https://github.com/parameter1/identity-x-omeda-cli
   *  */
  behaviors: {
    logIn: 91,
    verifyEmail: 90,
    submitProfile: 89,
  },
  behaviorAttributes: {
    website: {
      id: 57,
      valueId: websiteBehaviorAttributeId,
    },
    actionSource: {
      id: 55,
      valueIds: {
        default: 389824,
        newsletterSignup: 389826,
        comments: 389829,
        contentGate: 389823,
      },
    },
    newsletterSignupType: {
      id: 56,
      valueIds: {
        default: 389832,
        pushdown: 389831,
        inlineContent: 389834,
        inlineSection: 389833,
        footer: 389828,
      },
    },
    contentGateType: {
      id: 54,
      valueIds: {
        default: 389825,
        metered: 389827,
        printPreview: 389830,
      },
    },
  },
  appendPromoCodeToHook,
  appendBehaviorToHook,
  appendDemographicToHook,
  onLoginLinkSentFormatter: (async ({ req, payload }) => {
    // const identityXOptInHooks = req.app.locals.site.getAsObject('identityXOptInHooks');
    const omeda = req.app.locals.site.getAsObject('omeda');
    const { user } = payload;

    const found = getAsArray(user, 'externalIds')
      .find(({ identifier, namespace }) => identifier.type === 'encrypted'
        && namespace.provider === 'omeda'
        && namespace.tenant === omeda.brandKey);

    // BAIL if no encryptedCustomerId and return payload
    if (!found) return payload;
    const encryptedCustomerId = get(found, 'identifier.value');

    // Retrive the omeda customer
    const omedaCustomer = await getOmedaCustomerRecord({
      omedaGraphQLClient: req.$omedaGraphQLClient,
      encryptedCustomerId,
    });
    const subscriptions = getAsArray(omedaCustomer, 'subscriptions');
    const hasWebsiteSubscription = subscriptions.find(({ product }) => product.type.id === 'WEBSITE' && product.id === rapidIdentProductId);
    // If the user already has the website product do
    // return payload with registration_meter promo code ref removed
    if (hasWebsiteSubscription && (payload.promoCode || payload.appendPromoCodes.length)) {
      const promoCode = !payload.promoCode.includes('registration_meter') ? payload.promoCode : undefined;
      const appendPromoCodes = payload.appendPromoCodes.filter(code => !code.includes('registration_meter'));
      return {
        ...payload,
        promoCode,
        appendPromoCodes,
      };
    }
    return payload;
  }),
  onAuthenticationSuccessFormatter: (async ({ req, payload }) => {
    // BAIL if omedaGraphQLCLient isnt available return payload.
    if (!req.$omedaGraphQLClient) return payload;

    const identityXOptInHooks = req.app.locals.site.getAsObject('identityXOptInHooks');
    const omeda = req.app.locals.site.getAsObject('omeda');
    if (identityXOptInHooks.onAuthenticationSuccess) {
      const { productIds, promoCode } = identityXOptInHooks.onAuthenticationSuccess;
      const { user } = payload;

      const found = getAsArray(user, 'externalIds')
        .find(({ identifier, namespace }) => identifier.type === 'encrypted'
          && namespace.provider === 'omeda'
          && namespace.tenant === omeda.brandKey);

      // BAIL if no encryptedCustomerId and return payload
      if (!found) return payload;
      const encryptedCustomerId = get(found, 'identifier.value');

      // Retrive the omeda customer
      const omedaCustomer = await getOmedaCustomerRecord({
        omedaGraphQLClient: req.$omedaGraphQLClient,
        encryptedCustomerId,
      });
      // Get the current user subscriptions
      const subscriptions = getAsArray(omedaCustomer, 'subscriptions');
      // For each autoOptinProduct check if they have a subscription.
      // Sign the user up if they do not

      const newSubscriptions = productIds.filter(
        id => !subscriptions.some(({ product }) => product.deploymentTypeId === id),
      );
      console.log(payload);
      if (newSubscriptions) {
        return ({
          ...payload,
          deploymentTypeIds: [...newSubscriptions],
          promoCode,
          appendPromoCodes: [
            promoCode,
          ],
        });
      }
    }
    return payload;
  }),
});
